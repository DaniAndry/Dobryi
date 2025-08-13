using System;
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class Order : MonoBehaviour
{
    [Header("Additives")] [SerializeField] private Button _iceButton;
    [SerializeField] private Button _grassButton;
    [SerializeField] private Button _juiceBallsButton;
    [SerializeField] private Button _strawButton;

    [Header("Cups")] [SerializeField] private Button _bigCupButton;
    [SerializeField] private Button _middleCupButton;
    [SerializeField] private Button _smallCupButton;

    [Header("Juices")] [SerializeField] private Button _appleButton;
    [SerializeField] private Button _orangeButton;
    [SerializeField] private Button _multifruitButton;
    [SerializeField] private Button _tomatoButton;
    [SerializeField] private Button _cherryButton;

    [Header("Order")] [SerializeField] private Image _smallRawJuiceImage;
    [SerializeField] private Image _middleRawJuiceImage;
    [SerializeField] private Image _bigRawJuiceImage;
    [SerializeField] private Image _smallReadyJuiceImage;
    [SerializeField] private Image _middleReadyJuiceImage;
    [SerializeField] private Image _bigReadyJuiceImage;
    [SerializeField] private Image _backImage;
    [SerializeField] private Image _aheadImage;
    [SerializeField] private JuiceConfig _config;
    [SerializeField] private Button _takeOrderButton;
    [SerializeField] private PeopleContainer _peopleContainer;
    [SerializeField] private Tutorial _tutorial;
    [SerializeField] public Animator _juiceAnimator;
    [SerializeField] public Animator _cupAnimator;
    [SerializeField] public Animator _canvasAnimator;
    [SerializeField] private TMP_Text _bText;
    [SerializeField] private TMP_Text _mText;
    [SerializeField] private TMP_Text _sText;
    [SerializeField] private Button _garbageButton;

    [SerializeField] private AudioSource _clickSound;
    [SerializeField] private AudioSource _juiceSound;

    public CupType CupType;
    public JuiceType JuiceType1;
    public JuiceType JuiceType2 = JuiceType.None;
    public AdditiveType AdditiveType1;
    public AdditiveType AdditiveType2;
    public bool IsFree = true;
    public bool IsSpriteReady = false;
    public bool IsCupReady = false;
    public bool IsJuiceReady = false;
    public bool IsPouring = false;
    private int _countJuice = 0;
    private bool _isHorizontal;
    private MixImage _rawSmall;
    private MixImage _rawMiddle;
    private MixImage _rawBig;
    private MixImage _readySmall;
    private MixImage _readyMiddle;
    private MixImage _readyBig;
    private JuiceType _currentJuiceType;

    private void Awake()
    {
        _smallRawJuiceImage.enabled = false;
        _middleRawJuiceImage.enabled = false;
        _bigRawJuiceImage.enabled = false;
        _smallReadyJuiceImage.enabled = false;
        _middleReadyJuiceImage.enabled = false;
        _bigReadyJuiceImage.enabled = false;
        _takeOrderButton.interactable = false;
        _bText.enabled = false;
        _mText.enabled = false;
        _sText.enabled = false;
        AdditiveType1 = AdditiveType.None;
        AdditiveType2 = AdditiveType.None;
        JuiceType2 = JuiceType.None;

        _rawSmall = _smallRawJuiceImage.GetComponentInChildren<MixImage>();
        _rawMiddle = _middleRawJuiceImage.GetComponentInChildren<MixImage>();
        _rawBig = _bigRawJuiceImage.GetComponentInChildren<MixImage>();
        _readySmall = _smallReadyJuiceImage.GetComponentInChildren<MixImage>();
        _readyMiddle = _middleReadyJuiceImage.GetComponentInChildren<MixImage>();
        _readyBig = _bigReadyJuiceImage.GetComponentInChildren<MixImage>();
    }

    private void Update()
    {
        if (Screen.width > Screen.height)
            _isHorizontal = true;
        else
            _isHorizontal = false;
    }

    private void OnEnable()
    {
        _appleButton.onClick.AddListener(() => SetJuice(JuiceType.Apple, _appleButton));
        _orangeButton.onClick.AddListener(() => SetJuice(JuiceType.Orange, _orangeButton));
        _multifruitButton.onClick.AddListener(() => SetJuice(JuiceType.Multifruit, _multifruitButton));
        _tomatoButton.onClick.AddListener(() => SetJuice(JuiceType.Tomato, _tomatoButton));
        _cherryButton.onClick.AddListener(() => SetJuice(JuiceType.Cherry, _cherryButton));
        _garbageButton.onClick.AddListener(Garbage);

        AddListener(_smallCupButton, () => SetCup(CupType.Small));
        AddListener(_middleCupButton, () => SetCup(CupType.Middle));
        AddListener(_bigCupButton, () => SetCup(CupType.Large));

        AddListener(_iceButton, () => SetAdditive(AdditiveType.Ice, _config.IceAdditive));
        AddListener(_grassButton, () => SetAdditive(AdditiveType.Grass, _config.GrassAdditive));
        AddListener(_juiceBallsButton, () => SetAdditive(AdditiveType.JuiceBall, _config.JuiceBallAdditive));

        AddListener(_strawButton, SetStraw);
        AddListener(_takeOrderButton, TakeOrder);
    }

    private void OnDisable()
    {
        _smallCupButton.onClick.RemoveListener(() => SetCup(CupType.Small));
        _middleCupButton.onClick.RemoveListener(() => SetCup(CupType.Middle));
        _bigCupButton.onClick.RemoveListener(() => SetCup(CupType.Large));
        _garbageButton.onClick.RemoveListener(Garbage);

        _appleButton.onClick.RemoveListener(() => SetJuice(JuiceType.Apple, _appleButton));
        _orangeButton.onClick.RemoveListener(() => SetJuice(JuiceType.Orange, _orangeButton));
        _multifruitButton.onClick.RemoveListener(() => SetJuice(JuiceType.Multifruit, _multifruitButton));
        _tomatoButton.onClick.RemoveListener(() => SetJuice(JuiceType.Tomato, _tomatoButton));
        _cherryButton.onClick.RemoveListener(() => SetJuice(JuiceType.Cherry, _cherryButton));

        _strawButton.onClick.RemoveListener(SetStraw);

        _iceButton.onClick.RemoveListener(() => SetAdditive(AdditiveType.Ice, _config.IceAdditive));
        _grassButton.onClick.RemoveListener(() => SetAdditive(AdditiveType.Grass, _config.GrassAdditive));
        _juiceBallsButton.onClick.RemoveListener(() => SetAdditive(AdditiveType.JuiceBall, _config.JuiceBallAdditive));

        _takeOrderButton.onClick.RemoveListener(TakeOrder);
    }

    private void AddListener(Button button, Action action)
    {
        button.onClick.AddListener(() =>
        {
            _clickSound?.Play(); // ← ВОТ ЭТО И ЕСТЬ ВОСПРОИЗВЕДЕНИЕ ЗВУКА
            action?.Invoke();
        });
    }

    private void SetCup(CupType cup)
    {
        if (IsFree == false || IsCupReady == true)
            return;

        CupType = cup;
        IsCupReady = true;
        IsFree = false;

        if (_tutorial.IsTutorial == false)
            _takeOrderButton.interactable = true;

        switch (cup)
        {
            case CupType.Small:
            {
                if (_isHorizontal)
                    _cupAnimator.Play("SmallCupAnim");
                else
                    _cupAnimator.Play("SmallCupVertical");
            }
                break;
            case CupType.Middle:
            {
                if (_isHorizontal)
                    _cupAnimator.Play("MiddleCupAnim");
                else
                    _cupAnimator.Play("MiddleCupVertical");
            }
                break;
            case CupType.Large:
            {
                if (_isHorizontal)
                    _cupAnimator.Play("BigCupAnim");
                else
                    _cupAnimator.Play("BigCupVertical");
            }
                break;
        }

        Invoke(nameof(DelayCup), 0.1f);
    }

    private void DelayCup()
    {
        _canvasAnimator.Play("SpawnCup");

        switch (CupType)
        {
            case CupType.Small:
            {
                _smallRawJuiceImage.sprite = _config.EntitySmallCup;
                _smallRawJuiceImage.enabled = true;
                _sText.enabled = true;
            }
                break;
            case CupType.Middle:
            {
                _middleRawJuiceImage.sprite = _config.EntityMiddleCup;
                _middleRawJuiceImage.enabled = true;
                _mText.enabled = true;
            }
                break;
            case CupType.Large:
            {
                _bigRawJuiceImage.sprite = _config.EntityBigCup;
                _bigRawJuiceImage.enabled = true;
                _bText.enabled = true;
            }
                break;
        }
    }

    private void JuiceReadyToggle()
    {
        IsJuiceReady = true;
        IsPouring = false;
    }

    private void SetJuice(JuiceType juice, Button juiceButton)
    {
        if (IsCupReady == false || _countJuice >= 2 || IsPouring || IsSpriteReady)
            return;

        _countJuice++;

        if (_countJuice == 1)
            JuiceType1 = juice;
        else if (_countJuice == 2)
            JuiceType2 = juice;

        IsPouring = true;
        Invoke(nameof(JuiceReadyToggle), 1f);
        _juiceSound?.Play();

        if (CupType == CupType.Small)
        {
            if (_countJuice == 2)
                _rawSmall.Image.enabled = true;

            switch (juice)
            {
                case JuiceType.Apple:
                {
                    if (_isHorizontal)
                        _juiceAnimator.Play("Apple");
                    else
                        _juiceAnimator.Play("AppleVertical");

                    if (_countJuice == 1)
                        _smallRawJuiceImage.sprite = _config.AppleSmallCup;
                    else if (_countJuice == 2)
                        _rawSmall.Image.sprite = _config.SmallApple;
                }
                    break;
                case JuiceType.Orange:
                {
                    if (_isHorizontal)
                        _juiceAnimator.Play("Orange");
                    else
                        _juiceAnimator.Play("OrangeVertical");


                    if (_countJuice == 1)
                        _smallRawJuiceImage.sprite = _config.OrangeSmallCup;
                    else if (_countJuice == 2)
                        _rawSmall.Image.sprite = _config.SmallOrange;
                }
                    break;
                case JuiceType.Multifruit:
                {
                    if (_countJuice == 1)
                        _smallRawJuiceImage.sprite = _config.MultifruitSmallCup;
                    else if (_countJuice == 2)
                        _rawSmall.Image.sprite = _config.SmallMultifruit;

                    if (_isHorizontal)
                        _juiceAnimator.Play("Multifruit");
                    else
                        _juiceAnimator.Play("MultifruitVertical");
                }
                    break;
                case JuiceType.Tomato:
                {
                    if (_countJuice == 1)
                        _smallRawJuiceImage.sprite = _config.TomatoSmallCup;
                    else if (_countJuice == 2)
                        _rawSmall.Image.sprite = _config.SmallTomato;

                    if (_isHorizontal)
                        _juiceAnimator.Play("Tomato");
                    else
                        _juiceAnimator.Play("TomatoVertical");
                }
                    break;
                case JuiceType.Cherry:
                {
                    if (_isHorizontal)
                        _juiceAnimator.Play("Cherry");
                    else
                        _juiceAnimator.Play("CherryVertical");

                    if (_countJuice == 1)
                        _smallRawJuiceImage.sprite = _config.CherrySmallCup;
                    else if (_countJuice == 2)
                        _rawSmall.Image.sprite = _config.SmallCherry;
                }
                    break;
            }
        }
        else if (CupType == CupType.Middle)
        {
            if (_countJuice == 2)
                _rawMiddle.Image.enabled = true;

            switch (juice)
            {
                case JuiceType.Apple:
                {
                    if (_isHorizontal)
                        _juiceAnimator.Play("Apple");
                    else
                        _juiceAnimator.Play("AppleVertical");

                    if (_countJuice == 1)
                        _middleRawJuiceImage.sprite = _config.AppleMiddleCup;
                    else if (_countJuice == 2)
                        _rawMiddle.Image.sprite = _config.MiddleApple;
                }
                    break;
                case JuiceType.Orange:
                {
                    if (_isHorizontal)
                        _juiceAnimator.Play("Orange");
                    else
                        _juiceAnimator.Play("OrangeVertical");

                    if (_countJuice == 1)
                        _middleRawJuiceImage.sprite = _config.OrangeMiddleCup;
                    else if (_countJuice == 2)
                        _rawMiddle.Image.sprite = _config.MiddleOrange;
                }
                    break;
                case JuiceType.Multifruit:
                {
                    if (_isHorizontal)
                        _juiceAnimator.Play("Multifruit");
                    else
                        _juiceAnimator.Play("MultifruitVertical");

                    if (_countJuice == 1)
                        _middleRawJuiceImage.sprite = _config.MultifruitMiddleCup;
                    else if (_countJuice == 2)
                        _rawMiddle.Image.sprite = _config.MiddleMultifruit;
                }
                    break;
                case JuiceType.Tomato:
                {
                    if (_isHorizontal)
                        _juiceAnimator.Play("Tomato");
                    else
                        _juiceAnimator.Play("TomatoVertical");

                    if (_countJuice == 1)
                        _middleRawJuiceImage.sprite = _config.TomatoMiddleCup;
                    else if (_countJuice == 2)
                        _rawMiddle.Image.sprite = _config.MiddleTomato;
                }
                    break;
                case JuiceType.Cherry:
                {
                    if (_countJuice == 1)
                        _middleRawJuiceImage.sprite = _config.CherryMiddleCup;
                    else if (_countJuice == 2)
                        _rawMiddle.Image.sprite = _config.MiddleCherry;

                    if (_isHorizontal)
                        _juiceAnimator.Play("Cherry");
                    else
                        _juiceAnimator.Play("CherryVertical");
                }
                    break;
            }
        }
        else if (CupType == CupType.Large)
        {
            if (_countJuice == 2)
                _rawBig.Image.enabled = true;

            switch (juice)
            {
                case JuiceType.Apple:
                {
                    if (_isHorizontal)
                        _juiceAnimator.Play("Apple");
                    else
                        _juiceAnimator.Play("AppleVertical");

                    if (_countJuice == 1)
                        _bigRawJuiceImage.sprite = _config.AppleBigCup;
                    else if (_countJuice == 2)
                        _rawBig.Image.sprite = _config.BigApple;
                }
                    break;
                case JuiceType.Orange:
                {
                    if (_isHorizontal)
                        _juiceAnimator.Play("Orange");
                    else
                        _juiceAnimator.Play("OrangeVertical");

                    if (_countJuice == 1)
                        _bigRawJuiceImage.sprite = _config.OrangeBigCup;
                    else if (_countJuice == 2)
                        _rawBig.Image.sprite = _config.BigOrange;
                }
                    break;
                case JuiceType.Multifruit:
                {
                    if (_isHorizontal)
                        _juiceAnimator.Play("Multifruit");
                    else
                        _juiceAnimator.Play("MultifruitVertical");

                    if (_countJuice == 1)
                        _bigRawJuiceImage.sprite = _config.MultifruitBigCup;
                    else if (_countJuice == 2)
                        _rawBig.Image.sprite = _config.BigMultifruit;
                }
                    break;
                case JuiceType.Tomato:
                {
                    if (_isHorizontal)
                        _juiceAnimator.Play("Tomato");
                    else
                        _juiceAnimator.Play("TomatoVertical");

                    if (_countJuice == 1)
                        _bigRawJuiceImage.sprite = _config.TomatoBigCup;
                    else if (_countJuice == 2)
                        _rawBig.Image.sprite = _config.BigTomato;
                }
                    break;
                case JuiceType.Cherry:
                {
                    if (_isHorizontal)
                        _juiceAnimator.Play("Cherry");
                    else
                        _juiceAnimator.Play("CherryVertical");

                    if (_countJuice == 1)
                        _bigRawJuiceImage.sprite = _config.CherryBigCup;
                    else if (_countJuice == 2)
                        _rawBig.Image.sprite = _config.BigCherry;
                }
                    break;
            }
        }
    }

    private void SetStraw()
    {
        if (IsSpriteReady == true || IsJuiceReady == false)
            return;

        if (_isHorizontal)
            _cupAnimator.Play("StrawAnim");
        else
            _cupAnimator.Play("StrawVertical");

        IsSpriteReady = true;
        _bigRawJuiceImage.enabled = false;
        _middleRawJuiceImage.enabled = false;
        _smallRawJuiceImage.enabled = false;
        _rawSmall.Image.enabled = false;
        _rawBig.Image.enabled = false;
        _rawMiddle.Image.enabled = false;

        if (_countJuice == 1)
            _currentJuiceType = JuiceType1;
        else if (_countJuice == 2)
            _currentJuiceType = JuiceType2;

        if (_tutorial.IsTutorial == false)
            _takeOrderButton.interactable = true;

        for (int i = 1; i < 3; i++)
        {
            if (i == 1)
                _currentJuiceType = JuiceType1;
            else if (i == 2)
                _currentJuiceType = JuiceType2;

            if (CupType == CupType.Small)
            {
                _smallReadyJuiceImage.enabled = true;

                if (_countJuice == 2)
                    _readySmall.Image.enabled = true;

                switch (_currentJuiceType)
                {
                    case JuiceType.Apple:
                        if (i == 1)
                            _smallReadyJuiceImage.sprite = _config.AppleSmallStrawCup;
                        if (_countJuice == 2 && i == 2)
                            _readySmall.Image.sprite = _config.SmallApple;
                        break;
                    case JuiceType.Orange:
                        if (i == 1)
                            _smallReadyJuiceImage.sprite = _config.OrangeSmallStrawCup;
                        if (_countJuice == 2 && i == 2)
                            _readySmall.Image.sprite = _config.SmallOrange;
                        break;
                    case JuiceType.Multifruit:
                        if (i == 1)
                            _smallReadyJuiceImage.sprite = _config.MultifruitSmallStrawCup;
                        if (_countJuice == 2 && i == 2)
                            _readySmall.Image.sprite = _config.SmallMultifruit;
                        break;
                    case JuiceType.Tomato:
                        if (i == 1)
                            _smallReadyJuiceImage.sprite = _config.TomatoSmallStrawCup;
                        if (_countJuice == 2 && i == 2)
                            _readySmall.Image.sprite = _config.SmallTomato;
                        break;
                    case JuiceType.Cherry:
                        if (i == 1)
                            _smallReadyJuiceImage.sprite = _config.CherrySmallStrawCup;
                        if (_countJuice == 2 && i == 2)
                            _readySmall.Image.sprite = _config.SmallCherry;
                        break;
                }
            }
            else if (CupType == CupType.Middle)
            {
                _middleReadyJuiceImage.enabled = true;

                if (_countJuice == 2)
                    _readyMiddle.Image.enabled = true;

                switch (_currentJuiceType)
                {
                    case JuiceType.Apple:
                        if (i == 1)
                            _middleReadyJuiceImage.sprite = _config.AppleMiddleStrawCup;
                        if (_countJuice == 2 && i == 2)
                            _readyMiddle.Image.sprite = _config.MiddleApple;
                        break;
                    case JuiceType.Orange:
                        if (i == 1)
                            _middleReadyJuiceImage.sprite = _config.OrangeMiddleStrawCup;
                        if (_countJuice == 2 && i == 2)
                            _readyMiddle.Image.sprite = _config.MiddleOrange;
                        break;
                    case JuiceType.Multifruit:
                        if (i == 1)
                            _middleReadyJuiceImage.sprite = _config.MultifruitMiddleStrawCup;
                        if (_countJuice == 2 && i == 2)
                            _readyMiddle.Image.sprite = _config.MiddleMultifruit;
                        break;
                    case JuiceType.Tomato:
                        if (i == 1)
                            _middleReadyJuiceImage.sprite = _config.TomatoMiddleStrawCup;
                        if (_countJuice == 2 && i == 2)
                            _readyMiddle.Image.sprite = _config.MiddleTomato;
                        break;
                    case JuiceType.Cherry:
                        if (i == 1)
                            _middleReadyJuiceImage.sprite = _config.CherryMiddleStrawCup;
                        if (_countJuice == 2 && i == 2)
                            _readyMiddle.Image.sprite = _config.MiddleCherry;
                        break;
                }
            }
            else if (CupType == CupType.Large)
            {
                _bigReadyJuiceImage.enabled = true;

                if (_countJuice == 2)
                    _readyBig.Image.enabled = true;

                switch (_currentJuiceType)
                {
                    case JuiceType.Apple:
                        if (i == 1)
                            _bigReadyJuiceImage.sprite = _config.AppleBigStrawCup;
                        if (_countJuice == 2 && i == 2)
                            _readyBig.Image.sprite = _config.BigApple;
                        break;
                    case JuiceType.Orange:
                        if (i == 1)
                            _bigReadyJuiceImage.sprite = _config.OrangeBigStrawCup;
                        if (_countJuice == 2 && i == 2)
                            _readyBig.Image.sprite = _config.BigOrange;
                        break;
                    case JuiceType.Multifruit:
                        if (i == 1)
                            _bigReadyJuiceImage.sprite = _config.MultifruitBigStrawCup;
                        if (_countJuice == 2 && i == 2)
                            _readyBig.Image.sprite = _config.BigMultifruit;
                        break;
                    case JuiceType.Tomato:
                        if (i == 1)
                            _bigReadyJuiceImage.sprite = _config.TomatoBigStrawCup;
                        if (_countJuice == 2 && i == 2)
                            _readyBig.Image.sprite = _config.BigTomato;
                        break;
                    case JuiceType.Cherry:
                        if (i == 1)
                            _bigReadyJuiceImage.sprite = _config.CherryBigStrawCup;
                        if (_countJuice == 2 && i == 2)
                            _readyBig.Image.sprite = _config.BigCherry;
                        break;
                }
            }
        }
    }

    private void SetAdditive(AdditiveType type, Sprite additive)
    {
        if (IsJuiceReady == false)
            return;

        if (type == AdditiveType1 || type == AdditiveType2)
            return;

        if (type == AdditiveType.JuiceBall && AdditiveType1 == AdditiveType.None &&
            AdditiveType2 == AdditiveType.None)
        {
            DefineJuiceBalls();

            /*if (IsSpriteReady)
                _backImage.enabled = false;*/

            AdditiveType1 = AdditiveType.JuiceBall;
            return;
        }
        else if (type == AdditiveType.JuiceBall && AdditiveType1 != AdditiveType.None &&
                 AdditiveType2 == AdditiveType.None)
        {
            AdditiveType2 = AdditiveType1;
            _aheadImage.sprite = _backImage.sprite;
            _aheadImage.enabled = true;

            DefineJuiceBalls();
            AdditiveType1 = AdditiveType.JuiceBall;

            /*if (IsSpriteReady)
                _backImage.enabled = false;*/

            return;
        }
        else if (type == AdditiveType.JuiceBall && AdditiveType1 != AdditiveType.None &&
                 AdditiveType2 != AdditiveType.None)
        {
            return;
        }

        if (AdditiveType1 == AdditiveType.None)
        {
            if (type == AdditiveType.Ice)
            {
                if (_isHorizontal)
                    _cupAnimator.Play("IceAnim");
                else
                    _cupAnimator.Play("IceVertical");
            }
            else if (type == AdditiveType.Grass)
            {
                if (_isHorizontal)
                    _cupAnimator.Play("GrassAnim");
                else
                    _cupAnimator.Play("GrassVertical");
            }

            _backImage.sprite = additive;
            _backImage.enabled = true;
            AdditiveType1 = type;
        }
        else if (AdditiveType2 == AdditiveType.None)
        {
            if (type == AdditiveType.Ice)
            {
                if (_isHorizontal)
                    _cupAnimator.Play("IceAnim");
                else
                    _cupAnimator.Play("IceVertical");
            }
            else if (type == AdditiveType.Grass)
            {
                if (_isHorizontal)
                    _cupAnimator.Play("GrassAnim");
                else
                    _cupAnimator.Play("GrassVertical");
            }

            _aheadImage.sprite = additive;
            _aheadImage.enabled = true;
            AdditiveType2 = type;
        }
    }

    private void DefineJuiceBalls()
    {
        if (AdditiveType1 != AdditiveType.JuiceBall)
        {
            if (_isHorizontal)
                _cupAnimator.Play("JuiceBallsAnim");
            else
                _cupAnimator.Play("JuiceBallsVertical");
        }

        _backImage.sprite = _config.JuiceBallAdditive;
        _backImage.enabled = true;

        /*
        if (CupType == CupType.Small)
        {
            _smallReadyJuiceImage.enabled = true;

            switch (JuiceType1)
            {
                case JuiceType.Orange:
                    _smallReadyJuiceImage.sprite = _config.OrangeSmallBallsCup;
                    break;
                case JuiceType.Apple:
                    _smallReadyJuiceImage.sprite = _config.AppleSmallBallsCup;
                    break;
                case JuiceType.Cherry:
                    _smallReadyJuiceImage.sprite = _config.CherrySmallBallsCup;
                    break;
                case JuiceType.Multifruit:
                    _smallReadyJuiceImage.sprite = _config.MultifruitSmallBallsCup;
                    break;
                case JuiceType.Tomato:
                    _smallReadyJuiceImage.sprite = _config.TomatoSmallBallsCup;
                    break;
            }
        }
        else if (CupType == CupType.Large)
        {
            _bigReadyJuiceImage.enabled = true;

            switch (JuiceType1)
            {
                case JuiceType.Orange:
                    _bigReadyJuiceImage.sprite = _config.OrangeBigBallsCup;
                    break;
                case JuiceType.Apple:
                    _bigReadyJuiceImage.sprite = _config.AppleBigBallsCup;
                    break;
                case JuiceType.Cherry:
                    _bigReadyJuiceImage.sprite = _config.CherryBigBallsCup;
                    break;
                case JuiceType.Multifruit:
                    _bigReadyJuiceImage.sprite = _config.MultifruitBigBallsCup;
                    break;
                case JuiceType.Tomato:
                    _bigReadyJuiceImage.sprite = _config.TomatoBigBallsCup;
                    break;
            }
        }
        else if (CupType == CupType.Middle)
        {
            _middleReadyJuiceImage.enabled = true;

            switch (JuiceType1)
            {
                case JuiceType.Orange:
                    _middleReadyJuiceImage.sprite = _config.OrangeMiddleBallsCup;
                    break;
                case JuiceType.Apple:
                    _middleReadyJuiceImage.sprite = _config.AppleMiddleBallsCup;
                    break;
                case JuiceType.Cherry:
                    _middleReadyJuiceImage.sprite = _config.CherryMiddleBallsCup;
                    break;
                case JuiceType.Multifruit:
                    _middleReadyJuiceImage.sprite = _config.MultifruitMiddleBallsCup;
                    break;
                case JuiceType.Tomato:
                    _middleReadyJuiceImage.sprite = _config.TomatoMiddleBallsCup;
                    break;
            }
        }*/
    }

    private void Garbage()
    {
        _canvasAnimator.Play("NoCupAnim");
        Invoke(nameof(OffReadyCup), 0f);

        _countJuice = 0;
        IsCupReady = false;
        IsJuiceReady = false;
        IsFree = true;
        IsSpriteReady = false;
        _smallRawJuiceImage.enabled = false;
        _middleRawJuiceImage.enabled = false;
        _bigRawJuiceImage.enabled = false;
        _takeOrderButton.interactable = false;
        _aheadImage.enabled = false;
        _backImage.enabled = false;
        _bText.enabled = false;
        _mText.enabled = false;
        _sText.enabled = false;
        _rawSmall.Image.enabled = false;
        _rawBig.Image.enabled = false;
        _rawMiddle.Image.enabled = false;
        _readyMiddle.Image.enabled = false;
        _readyBig.Image.enabled = false;
        _readySmall.Image.enabled = false;
        _takeOrderButton.interactable = false;
        JuiceType2 = JuiceType.None;
        AdditiveType1 = AdditiveType.None;
        AdditiveType2 = AdditiveType.None;
    }

    private void TakeOrder()
    {
        if(_countJuice == 1)
            JuiceType2 = JuiceType.None;
        
        if (IsSpriteReady && _peopleContainer.TryGiveJuice(CupType, JuiceType1, JuiceType2, AdditiveType1, AdditiveType2, _countJuice))
        {
            _canvasAnimator.Play("CupAnim");
            Invoke(nameof(OffReadyCup), 0f);

            _countJuice = 0;
            IsCupReady = false;
            IsJuiceReady = false;
            IsFree = true;
            IsSpriteReady = false;
            _smallRawJuiceImage.enabled = false;
            _middleRawJuiceImage.enabled = false;
            _bigRawJuiceImage.enabled = false;
            _takeOrderButton.interactable = false;
            _aheadImage.enabled = false;
            _backImage.enabled = false;
            _bText.enabled = false;
            _mText.enabled = false;
            _sText.enabled = false;
            _rawSmall.Image.enabled = false;
            _rawBig.Image.enabled = false;
            _rawMiddle.Image.enabled = false;
            _readyMiddle.Image.enabled = false;
            _readyBig.Image.enabled = false;
            _readySmall.Image.enabled = false;
            _takeOrderButton.interactable = false;
            JuiceType2 = JuiceType.None;
            AdditiveType1 = AdditiveType.None;
            AdditiveType2 = AdditiveType.None;
        }
        else
        {
            Garbage();
        }
    }

    private void OffReadyCup()
    {
        _smallReadyJuiceImage.enabled = false;
        _middleReadyJuiceImage.enabled = false;
        _bigReadyJuiceImage.enabled = false;
    }
}