using System;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using Random = UnityEngine.Random;
using DG.Tweening;
using TMPro;

public class People : MonoBehaviour
{
    [SerializeField] public Image _readyImage;
    [SerializeField] public Image _additiveImage1;
    [SerializeField] public Image _additiveImage2;
    [SerializeField] public Transform _endPoint;
    [SerializeField] public Bank Bank;
    [SerializeField] public TMP_Text _sizeText;
    [SerializeField] private AudioSource _finishSound;
    [SerializeField] private MixImage _readySmall;
    [SerializeField] private MixImage _readyMiddle;
    [SerializeField] private MixImage _readyBig;

    public CupType CupType;
    public JuiceType JuiceType1;
    public JuiceType JuiceType2;
    public AdditiveType AdditiveType1;
    public AdditiveType AdditiveType2;

    private Animator _animator;
    private Tutorial _tutorial;
    private JuiceConfig _juiceConfig;
    private bool _isMoving = false;
    private bool _isEndMoving = false;
    private Transform _spawnPoint;
    private float _elapsedTime = 0f;
    private Point _currentPoint;
    private int _cupRand = 0;
    private int _juiceRand = 0;
    private int _juiceRand2 = 0;
    private int _additiveRand1 = 0;
    private int _additiveRand2 = 0;
    private int _additiveCount = 0;
    private bool _isStay = false;
    private int _countJuice = 0;
    private JuiceType _currentJuiceType;
    private Vector3 _horizontalScale = new Vector3(1, 1, 1);
    private Vector3 _verticalScale = new Vector3(1.5f, 1.5f, 1.5f);

    public event Action<People> Disabling;

    private void Update()
    {
        MoveToEndPoint();
    }

    private void Awake()
    {
        _animator = GetComponent<Animator>();
        _finishSound = GetComponent<AudioSource>();
    }

    private void OnEnable()
    {
        _readyImage.enabled = false;
        _additiveImage1.enabled = false;
        _additiveImage2.enabled = false;
    }

    public void Init(Transform startPosition, Point point, JuiceConfig juiceConfig, Tutorial tutorial)
    {
        _tutorial = tutorial;
        _juiceConfig = juiceConfig;
        _spawnPoint = startPosition;
        _currentPoint = point;
        _elapsedTime = 0f;
        transform.position = startPosition.position;
        _isMoving = true;
        StartCoroutine(Move());
        StartCoroutine(DelayBeforeMoving());
        transform.DOMove(_currentPoint.transform.position, 2f);
    }

    public void StartTutorialPeople(Transform startPosition, Point point, JuiceConfig juiceConfig, Tutorial tutorial)
    {
        _tutorial = tutorial;
        CupType = CupType.Small;
        JuiceType1 = JuiceType.Apple;
        AdditiveType1 = AdditiveType.Ice;
        AdditiveType2 = AdditiveType.None;
        _juiceConfig = juiceConfig;
        _sizeText.text = "S";

        _readyImage.enabled = true;
        _additiveImage1.enabled = true;
        _additiveImage2.enabled = false;

        _readyImage.sprite = juiceConfig.AppleSmallStrawCup;
        _additiveImage1.sprite = juiceConfig.IceAdditive;

        _spawnPoint = startPosition;
        _currentPoint = point;
        _isMoving = true;
        StartCoroutine(Move());
        StartCoroutine(DelayBeforeMoving());
        transform.DOMove(_currentPoint.transform.position, 2f);
    }

    public bool TryGetJuice(CupType cupType, JuiceType juiceType, JuiceType juiceType2, AdditiveType additiveType1,
        AdditiveType additiveType2, int countJuice)
    {
        if (_tutorial.IsTutorial)
        {
            _currentPoint.UnBusy();
            _elapsedTime = 0f;
            _isEndMoving = true;
            if (_animator != null)
                _animator.Play("Order");
            _finishSound.Play();
            StartCoroutine(DelayBeforeEndMoving());
            transform.DOMove(_endPoint.transform.position, 2f);
            _tutorial.IsTutorial = false;
            Bank.GiveMoney(100);
            _sizeText.text = " ";
            return true;
        }

        if (AdditiveType1 == AdditiveType.None && AdditiveType2 == AdditiveType.None)
        {
            if (additiveType1 != AdditiveType.None || additiveType2 != AdditiveType.None)
            {
                return false;
            }
        }

        if (AdditiveType1 == additiveType1 || AdditiveType1 == additiveType2)
        {
            if (AdditiveType2 == additiveType1 || AdditiveType2 == additiveType2)
            {
                if (CupType == cupType)
                {
                    if (JuiceType1 == juiceType || JuiceType1 == juiceType2)
                    {
                        if (JuiceType2 == juiceType || JuiceType2 == juiceType2)
                        {
                            _currentPoint.UnBusy();
                            _elapsedTime = 0f;
                            _isEndMoving = true;
                            if (_animator != null)
                                _animator.Play("Order");
                            _finishSound.Play();
                            StartCoroutine(DelayBeforeEndMoving());
                            transform.DOMove(_endPoint.transform.position, 2f);
                            Bank.GiveMoney(100);
                            _sizeText.text = " ";
                            _readySmall.Image.enabled = false;
                            _readyMiddle.Image.enabled = false;
                            _readyBig.Image.enabled = false;
                            return true;
                        }
                    }
                }
            }
        }

        return false;
    }

    private IEnumerator Move()
    {
        while (_isMoving)
        {
            if (Vector3.Distance(transform.position, _currentPoint.transform.position) < 0.1f)
            {
                transform.position = _currentPoint.transform.position;
                _isMoving = false;

                if (_tutorial.IsTutorial == false)
                    CreateRandomProduct();

                _isStay = true;
                StartCoroutine(DelayToWaitAnim());
                StopCoroutine(Move());
            }

            yield return null;
        }
    }

    private void MoveToEndPoint()
    {
        if (Screen.width > Screen.height)
            gameObject.transform.localScale = _horizontalScale;
        else
            gameObject.transform.localScale = _verticalScale;

        if (Vector3.Distance(transform.position, _endPoint.position) < 0.1f && _isEndMoving)
        {
            if (_animator != null)
                _animator.Play("Idle");

            _isStay = false;
            _isEndMoving = false;
            transform.position = _endPoint.position;
            gameObject.SetActive(false);
            _additiveImage1.enabled = false;
            _additiveImage2.enabled = false;
            _readyImage.enabled = false;
            Disabling?.Invoke(this);
        }

        if (_isStay && _isEndMoving == false && _isMoving == false)
        {
            gameObject.transform.position = _currentPoint.transform.position;
        }
    }

    private IEnumerator DelayBeforeMoving()
    {
        yield return new WaitForSeconds(3f);

        transform.position = _currentPoint.transform.position;
        _isMoving = false;
        _isStay = true;
        StartCoroutine(DelayToWaitAnim());
        StopCoroutine(Move());
    }

    private IEnumerator DelayBeforeEndMoving()
    {
        yield return new WaitForSeconds(3f);

        if (_isEndMoving == false)
            StopCoroutine(DelayBeforeEndMoving());

        if (_animator != null)
            _animator.Play("Idle");

        _isStay = false;
        _isEndMoving = false;
        transform.position = _endPoint.position;
        gameObject.SetActive(false);
        _additiveImage1.enabled = false;
        _additiveImage2.enabled = false;
        _readyImage.enabled = false;
        Disabling?.Invoke(this);
        _readySmall.Image.enabled = false;
        _readyMiddle.Image.enabled = false;
        _readyBig.Image.enabled = false;
    }

    private IEnumerator DelayToWaitAnim()
    {
        yield return new WaitForSeconds(30f);

        if (_animator != null)
            _animator.Play("Wait");
    }

    private void CreateRandomProduct()
    {
        _cupRand = Random.Range(0, 3);
        _juiceRand = Random.Range(0, 5);
        _juiceRand2 = Random.Range(0, 5);
        _additiveRand1 = Random.Range(0, 3);
        _additiveRand2 = Random.Range(0, 3);
        _additiveCount = Random.Range(0, 3);
        int rand = Random.Range(0, 101);

        if (rand <= 30)
            _countJuice = 1;
        else
            _countJuice = 2;

        CupType = (CupType)_cupRand;
        JuiceType1 = (JuiceType)_juiceRand;

        if (_countJuice == 2)
            JuiceType2 = (JuiceType)_juiceRand2;

        if (JuiceType1 == JuiceType2)
            _countJuice = 1;

        if (_additiveCount == 0)
        {
            AdditiveType1 = AdditiveType.None;
            AdditiveType2 = AdditiveType.None;
        }

        if (_additiveCount == 1)
        {
            AdditiveType1 = (AdditiveType)_additiveRand1;
            AdditiveType2 = AdditiveType.None;
        }
        else if (_additiveCount == 2)
        {
            AdditiveType1 = (AdditiveType)_additiveRand1;
            AdditiveType2 = (AdditiveType)_additiveRand2;

            if (AdditiveType1 == AdditiveType2)
            {
                _additiveCount = 1;
                AdditiveType2 = AdditiveType.None;
            }
        }

        if (Bank.IsAdditiveBuy == false && _additiveCount != 0)
        {
            _additiveCount = 1;
            AdditiveType1 = AdditiveType.Ice;
            AdditiveType2 = AdditiveType.None;
        }

        if (Bank.IsBigCupBuy == false)
            CupType = CupType.Small;

        if (Bank.IsJuiceBuy == false)
        {
            if (_juiceRand > 2)
                JuiceType1 = JuiceType.Cherry;
            else
                JuiceType1 = JuiceType.Apple;

            if (_juiceRand2 > 2)
                JuiceType2 = JuiceType.Cherry;
            else
                JuiceType2 = JuiceType.Apple;
        }

        if (JuiceType1 == JuiceType2)
            _countJuice = 1;

        if (_countJuice == 1)
            JuiceType2 = JuiceType.None;

        DefineJuice();
    }

    private void DefineJuice()
    {
        for (int i = 1; i <= _countJuice; i++)
        {
            if (i == 1)
                _currentJuiceType = JuiceType1;

            if (i == 2)
                _currentJuiceType = JuiceType2;

            if (CupType == CupType.Small)
            {
                _sizeText.text = "S";

                if (i == 2)
                    _readySmall.Image.enabled = true;

                switch (_currentJuiceType)
                {
                    case JuiceType.Orange:
                        if (i == 1)
                            _readyImage.sprite = _juiceConfig.OrangeSmallStrawCup;
                        else
                            _readySmall.Image.sprite = _juiceConfig.SmallOrange;
                        break;
                    case JuiceType.Apple:
                        if (i == 1)
                            _readyImage.sprite = _juiceConfig.AppleSmallStrawCup;
                        else
                            _readySmall.Image.sprite = _juiceConfig.SmallApple;
                        break;
                    case JuiceType.Cherry:
                        if (i == 1)
                            _readyImage.sprite = _juiceConfig.CherrySmallStrawCup;
                        else
                            _readySmall.Image.sprite = _juiceConfig.SmallCherry;
                        break;
                    case JuiceType.Multifruit:
                        if (i == 1)
                            _readyImage.sprite = _juiceConfig.MultifruitSmallStrawCup;
                        else
                            _readySmall.Image.sprite = _juiceConfig.SmallMultifruit;
                        break;
                    case JuiceType.Tomato:
                        if (i == 1)
                            _readyImage.sprite = _juiceConfig.TomatoSmallStrawCup;
                        else
                            _readySmall.Image.sprite = _juiceConfig.SmallTomato;
                        break;
                }
            }
            else if (CupType == CupType.Large)
            {
                _sizeText.text = "L";

                if (i == 2)
                    _readyBig.Image.enabled = true;

                switch (_currentJuiceType)
                {
                    case JuiceType.Orange:
                        if (i == 1)
                            _readyImage.sprite = _juiceConfig.OrangeBigStrawCup;
                        else
                            _readyBig.Image.sprite = _juiceConfig.BigOrange;
                        break;
                    case JuiceType.Apple:
                        if (i == 1)
                            _readyImage.sprite = _juiceConfig.AppleBigStrawCup;
                        else
                            _readyBig.Image.sprite = _juiceConfig.BigApple;
                        break;
                    case JuiceType.Cherry:
                        if (i == 1)
                            _readyImage.sprite = _juiceConfig.CherryBigStrawCup;
                        else
                            _readyBig.Image.sprite = _juiceConfig.BigCherry;
                        break;
                    case JuiceType.Multifruit:
                        if (i == 1)
                            _readyImage.sprite = _juiceConfig.MultifruitBigStrawCup;
                        else
                            _readyBig.Image.sprite = _juiceConfig.BigMultifruit;
                        break;
                    case JuiceType.Tomato:
                        if (i == 1)
                            _readyImage.sprite = _juiceConfig.TomatoBigStrawCup;
                        else
                            _readyBig.Image.sprite = _juiceConfig.BigTomato;
                        break;
                }
            }
            else if (CupType == CupType.Middle)
            {
                _sizeText.text = "M";

                if (i == 2)
                    _readyMiddle.Image.enabled = true;

                switch (_currentJuiceType)
                {
                    case JuiceType.Orange:
                        if (i == 1)
                            _readyImage.sprite = _juiceConfig.OrangeMiddleStrawCup;
                        else
                            _readyMiddle.Image.sprite = _juiceConfig.MiddleOrange;
                        break;
                    case JuiceType.Apple:
                        if (i == 1)
                            _readyImage.sprite = _juiceConfig.AppleMiddleStrawCup;
                        else
                            _readyMiddle.Image.sprite = _juiceConfig.MiddleApple;
                        break;
                    case JuiceType.Cherry:
                        if (i == 1)
                            _readyImage.sprite = _juiceConfig.CherryMiddleStrawCup;
                        else
                            _readyMiddle.Image.sprite = _juiceConfig.MiddleCherry;
                        break;
                    case JuiceType.Multifruit:
                        if (i == 1)
                            _readyImage.sprite = _juiceConfig.MultifruitMiddleStrawCup;
                        else
                            _readyMiddle.Image.sprite = _juiceConfig.MiddleMultifruit;
                        break;
                    case JuiceType.Tomato:
                        if (i == 1)
                            _readyImage.sprite = _juiceConfig.TomatoMiddleStrawCup;
                        else
                            _readyMiddle.Image.sprite = _juiceConfig.MiddleTomato;
                        break;
                }
            }

            _readyImage.enabled = true;
        }

        if (_additiveCount == 1 || _additiveCount == 2)
        {
            _additiveImage1.enabled = true;

            switch (AdditiveType1)
            {
                case AdditiveType.Ice:
                    _additiveImage1.sprite = _juiceConfig.IceAdditive;
                    break;
                case AdditiveType.Grass:
                    _additiveImage1.sprite = _juiceConfig.GrassAdditive;
                    break;
                case AdditiveType.JuiceBall:
                {
                    DefineJuiceBalls();
                }
                    break;
                case AdditiveType.None:
                    _additiveImage1.enabled = false;
                    break;
                default:
                    break;
            }

            if (_additiveCount == 2)
            {
                _additiveImage2.enabled = true;

                switch (AdditiveType2)
                {
                    case AdditiveType.Ice:
                        _additiveImage2.sprite = _juiceConfig.IceAdditive;
                        break;
                    case AdditiveType.Grass:
                        _additiveImage2.sprite = _juiceConfig.GrassAdditive;
                        break;
                    case AdditiveType.JuiceBall:
                    {
                        AdditiveType1 = AdditiveType2;
                        AdditiveType2 = AdditiveType.JuiceBall;
                        _additiveImage2.sprite = _additiveImage1.sprite;
                        DefineJuiceBalls();
                    }
                        break;
                    case AdditiveType.None:
                        _additiveImage2.enabled = false;
                        break;
                    default:
                        break;
                }
            }
        }
    }

    private void DefineJuiceBalls()
    {
        _additiveImage1.sprite = _juiceConfig.JuiceBallAdditive;
        _additiveImage1.enabled = true;

        /*if (CupType == CupType.Small)
        {
            switch (JuiceType1)
            {
                case JuiceType.Orange:
                    _readyImage.sprite = _juiceConfig.OrangeSmallBallsCup;
                    break;
                case JuiceType.Apple:
                    _readyImage.sprite = _juiceConfig.AppleSmallBallsCup;
                    break;
                case JuiceType.Cherry:
                    _readyImage.sprite = _juiceConfig.CherrySmallBallsCup;
                    break;
                case JuiceType.Multifruit:
                    _readyImage.sprite = _juiceConfig.MultifruitSmallBallsCup;
                    break;
                case JuiceType.Tomato:
                    _readyImage.sprite = _juiceConfig.TomatoSmallBallsCup;
                    break;
            }
        }
        else if (CupType == CupType.Large)
        {
            switch (JuiceType1)
            {
                case JuiceType.Orange:
                    _readyImage.sprite = _juiceConfig.OrangeBigBallsCup;
                    break;
                case JuiceType.Apple:
                    _readyImage.sprite = _juiceConfig.AppleBigBallsCup;
                    break;
                case JuiceType.Cherry:
                    _readyImage.sprite = _juiceConfig.CherryBigBallsCup;
                    break;
                case JuiceType.Multifruit:
                    _readyImage.sprite = _juiceConfig.MultifruitBigBallsCup;
                    break;
                case JuiceType.Tomato:
                    _readyImage.sprite = _juiceConfig.TomatoBigBallsCup;
                    break;
            }
        }
        else if (CupType == CupType.Middle)
        {
            switch (JuiceType1)
            {
                case JuiceType.Orange:
                    _readyImage.sprite = _juiceConfig.OrangeMiddleBallsCup;
                    break;
                case JuiceType.Apple:
                    _readyImage.sprite = _juiceConfig.AppleMiddleBallsCup;
                    break;
                case JuiceType.Cherry:
                    _readyImage.sprite = _juiceConfig.CherryMiddleBallsCup;
                    break;
                case JuiceType.Multifruit:
                    _readyImage.sprite = _juiceConfig.MultifruitMiddleBallsCup;
                    break;
                case JuiceType.Tomato:
                    _readyImage.sprite = _juiceConfig.TomatoMiddleBallsCup;
                    break;
            }
        }*/
    }
}