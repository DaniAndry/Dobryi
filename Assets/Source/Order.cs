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

    [SerializeField] private AudioSource _clickSound;
    [SerializeField] private AudioSource _juiceSound;

    public CupType CupType;
    public JuiceType JuiceType;
    public AdditiveType AdditiveType1;
    public AdditiveType AdditiveType2;
    public bool IsFree = true;
    public bool IsSpriteReady = false;
    public bool IsCupReady = false;
    public bool IsJuiceReady = false;

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
    }

    private void OnEnable()
    {
        _smallCupButton.onClick.AddListener(() => SetCup(CupType.Small));
        _middleCupButton.onClick.AddListener(() => SetCup(CupType.Middle));
        _bigCupButton.onClick.AddListener(() => SetCup(CupType.Large));

        _appleButton.onClick.AddListener(() => SetJuice(JuiceType.Apple, _appleButton));
        _orangeButton.onClick.AddListener(() => SetJuice(JuiceType.Orange, _orangeButton));
        _multifruitButton.onClick.AddListener(() => SetJuice(JuiceType.Multifruit, _multifruitButton));
        _tomatoButton.onClick.AddListener(() => SetJuice(JuiceType.Tomato, _tomatoButton));
        _cherryButton.onClick.AddListener(() => SetJuice(JuiceType.Cherry, _cherryButton));

        _strawButton.onClick.AddListener(SetStraw);

        _iceButton.onClick.AddListener(() => SetAdditive(AdditiveType.Ice, _config.IceAdditive));
        _grassButton.onClick.AddListener(() => SetAdditive(AdditiveType.Grass, _config.GrassAdditive));
        _juiceBallsButton.onClick.AddListener(() => SetAdditive(AdditiveType.JuiceBall, _config.JuiceBallAdditive));

        _takeOrderButton.onClick.AddListener(TakeOrder);

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

        switch (cup)
        {
            case CupType.Small:
            {
                _cupAnimator.Play("SmallCupAnim");
            }
                break;
            case CupType.Middle:
            {
                _cupAnimator.Play("MiddleCupAnim");
            }
                break;
            case CupType.Large:
            {
                _cupAnimator.Play("BigCupAnim");
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

    private void SetJuice(JuiceType juice, Button juiceButton)
    {
        if (IsCupReady == false || IsJuiceReady == true)
            return;

        JuiceType = juice;
        IsJuiceReady = true;
        _juiceSound?.Play();
        if (CupType == CupType.Small)
        {
            switch (juice)
            {
                case JuiceType.Apple:
                {
                    if (Screen.width > Screen.height)
                        _juiceAnimator.Play("Apple");
                    else
                        _juiceAnimator.Play("AppleVertical");

                    _smallRawJuiceImage.sprite = _config.AppleSmallCup;
                }
                    break;
                case JuiceType.Orange:
                {
                    _juiceAnimator.Play("Orange");
                    _smallRawJuiceImage.sprite = _config.OrangeSmallCup;
                }
                    break;
                case JuiceType.Multifruit:
                {
                    _smallRawJuiceImage.sprite = _config.MultifruitSmallCup;
                    _juiceAnimator.Play("Multifruit");
                }
                    break;
                case JuiceType.Tomato:
                {
                    _juiceAnimator.Play("Tomato");
                    _smallRawJuiceImage.sprite = _config.TomatoSmallCup;
                }
                    break;
                case JuiceType.Cherry:
                {
                    _juiceAnimator.Play("Cherry");
                    _smallRawJuiceImage.sprite = _config.CherrySmallCup;
                }
                    break;
            }
        }
        else if (CupType == CupType.Middle)
        {
            switch (juice)
            {
                case JuiceType.Apple:
                {
                    _juiceAnimator.Play("Apple");
                    _middleRawJuiceImage.sprite = _config.AppleMiddleCup;
                }
                    break;
                case JuiceType.Orange:
                {
                    _juiceAnimator.Play("Orange");
                    _middleRawJuiceImage.sprite = _config.OrangeMiddleCup;
                }
                    break;
                case JuiceType.Multifruit:
                {
                    _juiceAnimator.Play("Multifruit");
                    _middleRawJuiceImage.sprite = _config.MultifruitMiddleCup;
                }
                    break;
                case JuiceType.Tomato:
                {
                    _juiceAnimator.Play("Tomato");
                    _middleRawJuiceImage.sprite = _config.TomatoMiddleCup;
                }
                    break;
                case JuiceType.Cherry:
                {
                    _middleRawJuiceImage.sprite = _config.CherryMiddleCup;
                    _juiceAnimator.Play("Cherry");
                }
                    break;
            }
        }
        else if (CupType == CupType.Large)
        {
            switch (juice)
            {
                case JuiceType.Apple:
                {
                    _juiceAnimator.Play("Apple");
                    _bigRawJuiceImage.sprite = _config.AppleBigCup;
                }
                    break;
                case JuiceType.Orange:
                {
                    _juiceAnimator.Play("Orange");
                    _bigRawJuiceImage.sprite = _config.OrangeBigCup;
                }
                    break;
                case JuiceType.Multifruit:
                {
                    _juiceAnimator.Play("Multifruit");
                    _bigRawJuiceImage.sprite = _config.MultifruitBigCup;
                }
                    break;
                case JuiceType.Tomato:
                {
                    _juiceAnimator.Play("Tomato");
                    _bigRawJuiceImage.sprite = _config.TomatoBigCup;
                }
                    break;
                case JuiceType.Cherry:
                {
                    _juiceAnimator.Play("Cherry");
                    _bigRawJuiceImage.sprite = _config.CherryBigCup;
                }
                    break;
            }
        }
    }

    private void SetStraw()
    {
        if (IsSpriteReady == true || IsJuiceReady == false)
            return;

        _cupAnimator.Play("StrawAnim");
        IsSpriteReady = true;
        _bigRawJuiceImage.enabled = false;
        _middleRawJuiceImage.enabled = false;
        _smallRawJuiceImage.enabled = false;

        if (_tutorial.IsTutorial == false)
            _takeOrderButton.interactable = true;

        if (CupType == CupType.Small)
        {
            _smallReadyJuiceImage.enabled = true;

            switch (JuiceType)
            {
                case JuiceType.Apple:
                    _smallReadyJuiceImage.sprite = _config.AppleSmallStrawCup;
                    break;
                case JuiceType.Orange:
                    _smallReadyJuiceImage.sprite = _config.OrangeSmallStrawCup;
                    break;
                case JuiceType.Multifruit:
                    _smallReadyJuiceImage.sprite = _config.MultifruitSmallStrawCup;
                    break;
                case JuiceType.Tomato:
                    _smallReadyJuiceImage.sprite = _config.TomatoSmallStrawCup;
                    break;
                case JuiceType.Cherry:
                    _smallReadyJuiceImage.sprite = _config.CherrySmallStrawCup;
                    break;
            }
        }
        else if (CupType == CupType.Middle)
        {
            _middleReadyJuiceImage.enabled = true;

            switch (JuiceType)
            {
                case JuiceType.Apple:
                    _middleReadyJuiceImage.sprite = _config.AppleMiddleStrawCup;
                    break;
                case JuiceType.Orange:
                    _middleReadyJuiceImage.sprite = _config.OrangeMiddleStrawCup;
                    break;
                case JuiceType.Multifruit:
                    _middleReadyJuiceImage.sprite = _config.MultifruitMiddleStrawCup;
                    break;
                case JuiceType.Tomato:
                    _middleReadyJuiceImage.sprite = _config.TomatoMiddleStrawCup;
                    break;
                case JuiceType.Cherry:
                    _middleReadyJuiceImage.sprite = _config.CherryMiddleStrawCup;
                    break;
            }
        }
        else if (CupType == CupType.Large)
        {
            _bigReadyJuiceImage.enabled = true;

            switch (JuiceType)
            {
                case JuiceType.Apple:
                    _bigReadyJuiceImage.sprite = _config.AppleBigStrawCup;
                    break;
                case JuiceType.Orange:
                    _bigReadyJuiceImage.sprite = _config.OrangeBigStrawCup;
                    break;
                case JuiceType.Multifruit:
                    _bigReadyJuiceImage.sprite = _config.MultifruitBigStrawCup;
                    break;
                case JuiceType.Tomato:
                    _bigReadyJuiceImage.sprite = _config.TomatoBigStrawCup;
                    break;
                case JuiceType.Cherry:
                    _bigReadyJuiceImage.sprite = _config.CherryBigStrawCup;
                    break;
            }
        }
    }

    private void SetAdditive(AdditiveType type, Sprite additive)
    {
        if (IsSpriteReady == false)
            return;

        if (type == AdditiveType1 || type == AdditiveType2)
            return;

        if (type == AdditiveType.JuiceBall && AdditiveType1 == AdditiveType.None &&
            AdditiveType2 == AdditiveType.None)
        {
            DefineJuiceBalls();
            _backImage.enabled = false;
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
            _backImage.enabled = false;
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
                _cupAnimator.Play("IceAnim");
            else if (type == AdditiveType.Grass)
                _cupAnimator.Play("GrassAnim");

            _backImage.sprite = additive;
            _backImage.enabled = true;
            AdditiveType1 = type;
        }
        else if (AdditiveType2 == AdditiveType.None)
        {
            if (type == AdditiveType.Ice)
                _cupAnimator.Play("IceAnim");
            else if (type == AdditiveType.Grass)
                _cupAnimator.Play("GrassAnim");

            _aheadImage.sprite = additive;
            _aheadImage.enabled = true;
            AdditiveType2 = type;
        }
    }

    private void DefineJuiceBalls()
    {
        _cupAnimator.Play("JuiceBallsAnim");

        if (CupType == CupType.Small)
        {
            switch (JuiceType)
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
            switch (JuiceType)
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
            switch (JuiceType)
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
        }
    }

    private void TakeOrder()
    {
        if (_peopleContainer.TryGiveJuice(CupType, JuiceType, AdditiveType1, AdditiveType2))
        {
            _canvasAnimator.Play("CupAnim");
            Invoke(nameof(OffReadyCup), 0.2f);

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
            _takeOrderButton.interactable = false;
            AdditiveType1 = AdditiveType.None;
            AdditiveType2 = AdditiveType.None;
        }
        else
        {
            _canvasAnimator.Play("NoCupAnim");
            Invoke(nameof(OffReadyCup), 0.1f);

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
            _takeOrderButton.interactable = false;
            AdditiveType1 = AdditiveType.None;
            AdditiveType2 = AdditiveType.None;
        }
    }

    private void OffReadyCup()
    {
        _smallReadyJuiceImage.enabled = false;
        _middleReadyJuiceImage.enabled = false;
        _bigReadyJuiceImage.enabled = false;
    }
}