using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Random = UnityEngine.Random;
using DG.Tweening;
using TMPro;

[Serializable]
public class Cup
{
    [SerializeField] public Image ReadyImage;
    [SerializeField] public Image AdditiveImage1;
    [SerializeField] public Image AdditiveImage2;
    [SerializeField] public TMP_Text SizeText;

    public CupType CupType;
    public JuiceType JuiceType;
    public AdditiveType AdditiveType1;
    public AdditiveType AdditiveType2;
    public bool IsReady = false;
    public bool IsActive = false;
}

public class People : MonoBehaviour
{
    [SerializeField] public Transform _endPoint;
    [SerializeField] public Bank Bank;
    [SerializeField] private AudioSource _finishSound;
    [SerializeField] public List<Cup> Cups = new List<Cup>();

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
    private int _cupsCount = 0;
    private bool _isStay = false;
    private bool _isPeopleReady = false;
    private bool _isCup = false;
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
        foreach (Cup cup in Cups)
        {
            cup.IsActive = false;
            cup.ReadyImage.enabled = false;
            cup.AdditiveImage1.enabled = false;
            cup.AdditiveImage2.enabled = false;
        }
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

        Cups[0].CupType = CupType.Small;
        Cups[0].JuiceType = JuiceType.Apple;
        Cups[0].AdditiveType1 = AdditiveType.Ice;
        Cups[0].AdditiveType2 = AdditiveType.None;
        _juiceConfig = juiceConfig;
        Cups[0].SizeText.text = "S";

        Cups[0].ReadyImage.enabled = true;
        Cups[0].AdditiveImage1.enabled = true;
        Cups[0].AdditiveImage2.enabled = false;

        Cups[0].ReadyImage.sprite = juiceConfig.AppleSmallStrawCup;
        Cups[0].AdditiveImage1.sprite = juiceConfig.IceAdditive;

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
            Cups[0].SizeText.text = " ";
            return true;
        }

        foreach (Cup cup in Cups)
        {
            _isCup = true;

            if (cup.IsReady)
                _isCup = false;

            if (_isCup && cup.AdditiveType1 == AdditiveType.None && cup.AdditiveType2 == AdditiveType.None)
            {
                if (additiveType1 != AdditiveType.None || additiveType2 != AdditiveType.None)
                {
                    Debug.Log("Not Additive");
                    _isCup = false;
                }
            }

            if (_isCup == true)
            {
                if (cup.AdditiveType1 == additiveType1 || cup.AdditiveType1 == additiveType2)
                {
                    if (cup.AdditiveType2 == additiveType1 || cup.AdditiveType2 == additiveType2)
                    {
                        if (cup.CupType == cupType && cup.JuiceType == juiceType)
                        {
                            cup.IsReady = true;
                            cup.IsActive = false;
                            int count = 0;

                            if (_cupsCount == 1 && Cups[2].IsReady)
                                _isPeopleReady = true;
                            
                            if(_cupsCount != 1)
                            {
                                for (int i = 0; i < _cupsCount; i++)
                                {
                                    if (Cups[i].IsReady)
                                        count++;

                                    if (count >= _cupsCount)
                                        _isPeopleReady = true;
                                    else
                                        _isPeopleReady = false;

                                    Debug.Log(count + name);
                                }
                            }
                            
                            if (_isPeopleReady && _isCup)
                            {
                                foreach (var cup2 in Cups)
                                {
                                    cup2.IsReady = false;
                                    cup2.IsActive = false;
                                }

                                _currentPoint.UnBusy();
                                _elapsedTime = 0f;
                                _isEndMoving = true;
                                _finishSound.Play();
                                transform.DOMove(_endPoint.transform.position, 2f);
                                Bank.GiveMoney(100);
                                cup.SizeText.text = " ";

                                Cups[2].IsActive = false;
                                Cups[2].SizeText.gameObject.SetActive(false);
                                Cups[2].ReadyImage.gameObject.SetActive(false);
                                Cups[2].AdditiveImage1.gameObject.SetActive(false);
                                Cups[2].AdditiveImage2.gameObject.SetActive(false);

                                if (_animator != null)
                                    _animator.Play("Order");

                                StartCoroutine(DelayBeforeEndMoving());
                            }
                            else
                            {
                                cup.IsActive = false;
                                cup.ReadyImage.enabled = false;
                                cup.AdditiveImage1.enabled = false;
                                cup.AdditiveImage2.enabled = false;
                                cup.SizeText.text = " ";
                            }

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

            foreach (Cup cup in Cups)
            {
                cup.IsActive = false;
                cup.ReadyImage.enabled = false;
                cup.AdditiveImage1.enabled = false;
                cup.AdditiveImage2.enabled = false;
            }

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

        foreach (Cup cup in Cups)
        {
            cup.ReadyImage.enabled = false;
            cup.AdditiveImage1.enabled = false;
            cup.AdditiveImage2.enabled = false;
            cup.IsActive = false;
        }

        Disabling?.Invoke(this);
    }

    private IEnumerator DelayToWaitAnim()
    {
        yield return new WaitForSeconds(30f);

        if (_animator != null)
            _animator.Play("Wait");
    }

    private void CreateRandomProduct()
    {
        _cupsCount = Random.Range(1, 3);

        if (_cupsCount == 1)
        {
            Cups[2].IsActive = true;
            Cups[2].SizeText.gameObject.SetActive(true);
            Cups[2].ReadyImage.gameObject.SetActive(true);
            Cups[2].AdditiveImage1.gameObject.SetActive(true);
            Cups[2].AdditiveImage2.gameObject.SetActive(true);

            _cupRand = Random.Range(0, 3);
            _juiceRand = Random.Range(0, 5);
            _additiveRand1 = Random.Range(0, 3);
            _additiveRand2 = Random.Range(0, 3);
            _additiveCount = Random.Range(0, 3);

            Cups[2].CupType = (CupType)_cupRand;
            Cups[2].JuiceType = (JuiceType)_juiceRand;

            if (_additiveCount == 0)
            {
                Cups[2].AdditiveType1 = AdditiveType.None;
                Cups[2].AdditiveType2 = AdditiveType.None;
            }

            if (_additiveCount == 1)
            {
                Cups[2].AdditiveType1 = (AdditiveType)_additiveRand1;
                Cups[2].AdditiveType2 = AdditiveType.None;
            }
            else if (_additiveCount == 2)
            {
                Cups[2].AdditiveType1 = (AdditiveType)_additiveRand1;
                Cups[2].AdditiveType2 = (AdditiveType)_additiveRand2;

                if (Cups[2].AdditiveType1 == Cups[2].AdditiveType2)
                {
                    _additiveCount = 1;
                    Cups[2].AdditiveType2 = AdditiveType.None;
                }
            }

            if (Bank.IsAdditiveBuy == false && _additiveCount != 0)
            {
                _additiveCount = 1;
                Cups[2].AdditiveType1 = AdditiveType.Ice;
                Cups[2].AdditiveType2 = AdditiveType.None;
            }

            if (Bank.IsBigCupBuy == false)
                Cups[2].CupType = CupType.Small;

            if (Bank.IsJuiceBuy == false)
            {
                if (_juiceRand > 2)
                    Cups[2].JuiceType = JuiceType.Cherry;
                else
                    Cups[2].JuiceType = JuiceType.Apple;
            }

            if (Cups[2].CupType == CupType.Small)
            {
                Cups[2].SizeText.text = "S";

                switch (Cups[2].JuiceType)
                {
                    case JuiceType.Orange:
                        Cups[2].ReadyImage.sprite = _juiceConfig.OrangeSmallStrawCup;
                        break;
                    case JuiceType.Apple:
                        Cups[2].ReadyImage.sprite = _juiceConfig.AppleSmallStrawCup;
                        break;
                    case JuiceType.Cherry:
                        Cups[2].ReadyImage.sprite = _juiceConfig.CherrySmallStrawCup;
                        break;
                    case JuiceType.Multifruit:
                        Cups[2].ReadyImage.sprite = _juiceConfig.MultifruitSmallStrawCup;
                        break;
                    case JuiceType.Tomato:
                        Cups[2].ReadyImage.sprite = _juiceConfig.TomatoSmallStrawCup;
                        break;
                }
            }
            else if (Cups[2].CupType == CupType.Large)
            {
                Cups[2].SizeText.text = "L";

                switch (Cups[2].JuiceType)
                {
                    case JuiceType.Orange:
                        Cups[2].ReadyImage.sprite = _juiceConfig.OrangeBigStrawCup;
                        break;
                    case JuiceType.Apple:
                        Cups[2].ReadyImage.sprite = _juiceConfig.AppleBigStrawCup;
                        break;
                    case JuiceType.Cherry:
                        Cups[2].ReadyImage.sprite = _juiceConfig.CherryBigStrawCup;
                        break;
                    case JuiceType.Multifruit:
                        Cups[2].ReadyImage.sprite = _juiceConfig.MultifruitBigStrawCup;
                        break;
                    case JuiceType.Tomato:
                        Cups[2].ReadyImage.sprite = _juiceConfig.TomatoBigStrawCup;
                        break;
                }
            }
            else if (Cups[2].CupType == CupType.Middle)
            {
                Cups[2].SizeText.text = "M";

                switch (Cups[2].JuiceType)
                {
                    case JuiceType.Orange:
                        Cups[2].ReadyImage.sprite = _juiceConfig.OrangeMiddleStrawCup;
                        break;
                    case JuiceType.Apple:
                        Cups[2].ReadyImage.sprite = _juiceConfig.AppleMiddleStrawCup;
                        break;
                    case JuiceType.Cherry:
                        Cups[2].ReadyImage.sprite = _juiceConfig.CherryMiddleStrawCup;
                        break;
                    case JuiceType.Multifruit:
                        Cups[2].ReadyImage.sprite = _juiceConfig.MultifruitMiddleStrawCup;
                        break;
                    case JuiceType.Tomato:
                        Cups[2].ReadyImage.sprite = _juiceConfig.TomatoMiddleStrawCup;
                        break;
                }
            }

            Cups[2].ReadyImage.enabled = true;

            if (_additiveCount == 1 || _additiveCount == 2)
            {
                Cups[2].AdditiveImage1.enabled = true;

                switch (Cups[2].AdditiveType1)
                {
                    case AdditiveType.Ice:
                        Cups[2].AdditiveImage1.sprite = _juiceConfig.IceAdditive;
                        break;
                    case AdditiveType.Grass:
                        Cups[2].AdditiveImage1.sprite = _juiceConfig.GrassAdditive;
                        break;
                    case AdditiveType.JuiceBall:
                    {
                        DefineJuiceBalls(Cups[2]);
                        Cups[2].AdditiveImage1.enabled = false;
                    }
                        break;
                    case AdditiveType.None:
                        Cups[2].AdditiveImage1.enabled = false;
                        break;
                    default:
                        break;
                }

                if (_additiveCount == 2)
                {
                    Cups[2].AdditiveImage2.enabled = true;

                    switch (Cups[2].AdditiveType2)
                    {
                        case AdditiveType.Ice:
                            Cups[2].AdditiveImage2.sprite = _juiceConfig.IceAdditive;
                            break;
                        case AdditiveType.Grass:
                            Cups[2].AdditiveImage2.sprite = _juiceConfig.GrassAdditive;
                            break;
                        case AdditiveType.JuiceBall:
                        {
                            Cups[2].AdditiveType1 = Cups[2].AdditiveType2;
                            Cups[2].AdditiveType2 = AdditiveType.JuiceBall;
                            Cups[2].AdditiveImage2.sprite = Cups[2].AdditiveImage1.sprite;
                            Cups[2].AdditiveImage1.enabled = false;
                            DefineJuiceBalls(Cups[2]);
                        }
                            break;
                        case AdditiveType.None:
                            Cups[2].AdditiveImage2.enabled = false;
                            break;
                        default:
                            break;
                    }
                }
            }
        }

        if (_cupsCount == 2)
        {
            Cups[0].IsActive = true;
            Cups[1].IsActive = true;
            
            for (int i = 0; i < _cupsCount; i++)
            {
                _cupRand = Random.Range(0, 3);
                _juiceRand = Random.Range(0, 5);
                _additiveRand1 = Random.Range(0, 3);
                _additiveRand2 = Random.Range(0, 3);
                _additiveCount = Random.Range(0, 3);

                Cups[i].CupType = (CupType)_cupRand;
                Cups[i].JuiceType = (JuiceType)_juiceRand;

                if (_additiveCount == 0)
                {
                    Cups[i].AdditiveType1 = AdditiveType.None;
                    Cups[i].AdditiveType2 = AdditiveType.None;
                }

                if (_additiveCount == 1)
                {
                    Cups[i].AdditiveType1 = (AdditiveType)_additiveRand1;
                    Cups[i].AdditiveType2 = AdditiveType.None;
                }
                else if (_additiveCount == 2)
                {
                    Cups[i].AdditiveType1 = (AdditiveType)_additiveRand1;
                    Cups[i].AdditiveType2 = (AdditiveType)_additiveRand2;

                    if (Cups[i].AdditiveType1 == Cups[i].AdditiveType2)
                    {
                        _additiveCount = 1;
                        Cups[i].AdditiveType2 = AdditiveType.None;
                    }
                }

                if (Bank.IsAdditiveBuy == false && _additiveCount != 0)
                {
                    _additiveCount = 1;
                    Cups[i].AdditiveType1 = AdditiveType.Ice;
                    Cups[i].AdditiveType2 = AdditiveType.None;
                }

                if (Bank.IsBigCupBuy == false)
                    Cups[i].CupType = CupType.Small;

                if (Bank.IsJuiceBuy == false)
                {
                    if (_juiceRand > 2)
                        Cups[i].JuiceType = JuiceType.Cherry;
                    else
                        Cups[i].JuiceType = JuiceType.Apple;
                }

                if (Cups[i].CupType == CupType.Small)
                {
                    Cups[i].SizeText.text = "S";

                    switch (Cups[i].JuiceType)
                    {
                        case JuiceType.Orange:
                            Cups[i].ReadyImage.sprite = _juiceConfig.OrangeSmallStrawCup;
                            break;
                        case JuiceType.Apple:
                            Cups[i].ReadyImage.sprite = _juiceConfig.AppleSmallStrawCup;
                            break;
                        case JuiceType.Cherry:
                            Cups[i].ReadyImage.sprite = _juiceConfig.CherrySmallStrawCup;
                            break;
                        case JuiceType.Multifruit:
                            Cups[i].ReadyImage.sprite = _juiceConfig.MultifruitSmallStrawCup;
                            break;
                        case JuiceType.Tomato:
                            Cups[i].ReadyImage.sprite = _juiceConfig.TomatoSmallStrawCup;
                            break;
                    }
                }
                else if (Cups[i].CupType == CupType.Large)
                {
                    Cups[i].SizeText.text = "L";

                    switch (Cups[i].JuiceType)
                    {
                        case JuiceType.Orange:
                            Cups[i].ReadyImage.sprite = _juiceConfig.OrangeBigStrawCup;
                            break;
                        case JuiceType.Apple:
                            Cups[i].ReadyImage.sprite = _juiceConfig.AppleBigStrawCup;
                            break;
                        case JuiceType.Cherry:
                            Cups[i].ReadyImage.sprite = _juiceConfig.CherryBigStrawCup;
                            break;
                        case JuiceType.Multifruit:
                            Cups[i].ReadyImage.sprite = _juiceConfig.MultifruitBigStrawCup;
                            break;
                        case JuiceType.Tomato:
                            Cups[i].ReadyImage.sprite = _juiceConfig.TomatoBigStrawCup;
                            break;
                    }
                }
                else if (Cups[i].CupType == CupType.Middle)
                {
                    Cups[i].SizeText.text = "M";

                    switch (Cups[i].JuiceType)
                    {
                        case JuiceType.Orange:
                            Cups[i].ReadyImage.sprite = _juiceConfig.OrangeMiddleStrawCup;
                            break;
                        case JuiceType.Apple:
                            Cups[i].ReadyImage.sprite = _juiceConfig.AppleMiddleStrawCup;
                            break;
                        case JuiceType.Cherry:
                            Cups[i].ReadyImage.sprite = _juiceConfig.CherryMiddleStrawCup;
                            break;
                        case JuiceType.Multifruit:
                            Cups[i].ReadyImage.sprite = _juiceConfig.MultifruitMiddleStrawCup;
                            break;
                        case JuiceType.Tomato:
                            Cups[i].ReadyImage.sprite = _juiceConfig.TomatoMiddleStrawCup;
                            break;
                    }
                }

                Cups[i].ReadyImage.enabled = true;

                if (_additiveCount == 1 || _additiveCount == 2)
                {
                    Cups[i].AdditiveImage1.enabled = true;

                    switch (Cups[i].AdditiveType1)
                    {
                        case AdditiveType.Ice:
                            Cups[i].AdditiveImage1.sprite = _juiceConfig.IceAdditive;
                            break;
                        case AdditiveType.Grass:
                            Cups[i].AdditiveImage1.sprite = _juiceConfig.GrassAdditive;
                            break;
                        case AdditiveType.JuiceBall:
                        {
                            DefineJuiceBalls(Cups[i]);
                            Cups[i].AdditiveImage1.enabled = false;
                        }
                            break;
                        case AdditiveType.None:
                            Cups[i].AdditiveImage1.enabled = false;
                            break;
                        default:
                            break;
                    }

                    if (_additiveCount == 2)
                    {
                        Cups[i].AdditiveImage2.enabled = true;

                        switch (Cups[i].AdditiveType2)
                        {
                            case AdditiveType.Ice:
                                Cups[i].AdditiveImage2.sprite = _juiceConfig.IceAdditive;
                                break;
                            case AdditiveType.Grass:
                                Cups[i].AdditiveImage2.sprite = _juiceConfig.GrassAdditive;
                                break;
                            case AdditiveType.JuiceBall:
                            {
                                Cups[i].AdditiveType1 = Cups[i].AdditiveType2;
                                Cups[i].AdditiveType2 = AdditiveType.JuiceBall;
                                Cups[i].AdditiveImage2.sprite = Cups[i].AdditiveImage1.sprite;
                                Cups[i].AdditiveImage1.enabled = false;
                                DefineJuiceBalls(Cups[i]);
                            }
                                break;
                            case AdditiveType.None:
                                Cups[i].AdditiveImage2.enabled = false;
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
        }
    }

    private void DefineJuiceBalls(Cup cup)
    {
        if (cup.CupType == CupType.Small)
        {
            switch (cup.JuiceType)
            {
                case JuiceType.Orange:
                    cup.ReadyImage.sprite = _juiceConfig.OrangeSmallBallsCup;
                    break;
                case JuiceType.Apple:
                    cup.ReadyImage.sprite = _juiceConfig.AppleSmallBallsCup;
                    break;
                case JuiceType.Cherry:
                    cup.ReadyImage.sprite = _juiceConfig.CherrySmallBallsCup;
                    break;
                case JuiceType.Multifruit:
                    cup.ReadyImage.sprite = _juiceConfig.MultifruitSmallBallsCup;
                    break;
                case JuiceType.Tomato:
                    cup.ReadyImage.sprite = _juiceConfig.TomatoSmallBallsCup;
                    break;
            }
        }
        else if (cup.CupType == CupType.Large)
        {
            switch (cup.JuiceType)
            {
                case JuiceType.Orange:
                    cup.ReadyImage.sprite = _juiceConfig.OrangeBigBallsCup;
                    break;
                case JuiceType.Apple:
                    cup.ReadyImage.sprite = _juiceConfig.AppleBigBallsCup;
                    break;
                case JuiceType.Cherry:
                    cup.ReadyImage.sprite = _juiceConfig.CherryBigBallsCup;
                    break;
                case JuiceType.Multifruit:
                    cup.ReadyImage.sprite = _juiceConfig.MultifruitBigBallsCup;
                    break;
                case JuiceType.Tomato:
                    cup.ReadyImage.sprite = _juiceConfig.TomatoBigBallsCup;
                    break;
            }
        }
        else if (cup.CupType == CupType.Middle)
        {
            switch (cup.JuiceType)
            {
                case JuiceType.Orange:
                    cup.ReadyImage.sprite = _juiceConfig.OrangeMiddleBallsCup;
                    break;
                case JuiceType.Apple:
                    cup.ReadyImage.sprite = _juiceConfig.AppleMiddleBallsCup;
                    break;
                case JuiceType.Cherry:
                    cup.ReadyImage.sprite = _juiceConfig.CherryMiddleBallsCup;
                    break;
                case JuiceType.Multifruit:
                    cup.ReadyImage.sprite = _juiceConfig.MultifruitMiddleBallsCup;
                    break;
                case JuiceType.Tomato:
                    cup.ReadyImage.sprite = _juiceConfig.TomatoMiddleBallsCup;
                    break;
            }
        }
    }
}