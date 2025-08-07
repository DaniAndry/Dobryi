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

    public CupType CupType;
    public JuiceType JuiceType;
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
    private int _additiveRand1 = 0;
    private int _additiveRand2 = 0;
    private int _additiveCount = 0;
    private bool _isStay = false;
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
        JuiceType = JuiceType.Apple;
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

    public bool TryGetJuice(CupType cupType, JuiceType juiceType, AdditiveType additiveType1,
        AdditiveType additiveType2)
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
                if (CupType == cupType && JuiceType == juiceType)
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
                    return true;
                }
            }
        }

        return false;
    }

    private IEnumerator Move()
    {
        while (_isMoving)
        {
            if (Vector3.Distance(transform.position, _currentPoint.transform.position) < 0.3f)
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

        if (_tutorial.IsTutorial == false)
            CreateRandomProduct();

        _isStay = true;
        StartCoroutine(DelayToWaitAnim());
        StopCoroutine(Move());
    }

    private IEnumerator DelayBeforeEndMoving()
    {
        yield return new WaitForSeconds(3f);

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

    private IEnumerator DelayToWaitAnim()
    {
        yield return new WaitForSeconds(7f);

        if (_animator != null)
            _animator.Play("Wait");
    }

    private void CreateRandomProduct()
    {
        _cupRand = Random.Range(0, 3);
        _juiceRand = Random.Range(0, 5);
        _additiveRand1 = Random.Range(0, 3);
        _additiveRand2 = Random.Range(0, 3);
        _additiveCount = Random.Range(0, 3);

        CupType = (CupType)_cupRand;
        JuiceType = (JuiceType)_juiceRand;

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
                JuiceType = JuiceType.Cherry;
            else
                JuiceType = JuiceType.Apple;
        }

        if (CupType == CupType.Small)
        {
            _sizeText.text = "S";

            switch (JuiceType)
            {
                case JuiceType.Orange:
                    _readyImage.sprite = _juiceConfig.OrangeSmallStrawCup;
                    break;
                case JuiceType.Apple:
                    _readyImage.sprite = _juiceConfig.AppleSmallStrawCup;
                    break;
                case JuiceType.Cherry:
                    _readyImage.sprite = _juiceConfig.CherrySmallStrawCup;
                    break;
                case JuiceType.Multifruit:
                    _readyImage.sprite = _juiceConfig.MultifruitSmallStrawCup;
                    break;
                case JuiceType.Tomato:
                    _readyImage.sprite = _juiceConfig.TomatoSmallStrawCup;
                    break;
            }
        }
        else if (CupType == CupType.Large)
        {
            _sizeText.text = "L";

            switch (JuiceType)
            {
                case JuiceType.Orange:
                    _readyImage.sprite = _juiceConfig.OrangeBigStrawCup;
                    break;
                case JuiceType.Apple:
                    _readyImage.sprite = _juiceConfig.AppleBigStrawCup;
                    break;
                case JuiceType.Cherry:
                    _readyImage.sprite = _juiceConfig.CherryBigStrawCup;
                    break;
                case JuiceType.Multifruit:
                    _readyImage.sprite = _juiceConfig.MultifruitBigStrawCup;
                    break;
                case JuiceType.Tomato:
                    _readyImage.sprite = _juiceConfig.TomatoBigStrawCup;
                    break;
            }
        }
        else if (CupType == CupType.Middle)
        {
            _sizeText.text = "M";

            switch (JuiceType)
            {
                case JuiceType.Orange:
                    _readyImage.sprite = _juiceConfig.OrangeMiddleStrawCup;
                    break;
                case JuiceType.Apple:
                    _readyImage.sprite = _juiceConfig.AppleMiddleStrawCup;
                    break;
                case JuiceType.Cherry:
                    _readyImage.sprite = _juiceConfig.CherryMiddleStrawCup;
                    break;
                case JuiceType.Multifruit:
                    _readyImage.sprite = _juiceConfig.MultifruitMiddleStrawCup;
                    break;
                case JuiceType.Tomato:
                    _readyImage.sprite = _juiceConfig.TomatoMiddleStrawCup;
                    break;
            }
        }

        _readyImage.enabled = true;

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
                    _additiveImage1.enabled = false;
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
                        _additiveImage1.enabled = false;
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
        if (CupType == CupType.Small)
        {
            switch (JuiceType)
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
            switch (JuiceType)
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
            switch (JuiceType)
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
        }
    }
}