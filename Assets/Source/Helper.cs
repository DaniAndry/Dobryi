using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Helper : MonoBehaviour
{
    [Header("Fingers")] [SerializeField] private GameObject _smallCupFinger;
    [SerializeField] private GameObject _middleCupFinger;
    [SerializeField] private GameObject _bigCupFinger;
    [SerializeField] private GameObject _iceFinger;
    [SerializeField] private GameObject _grassFinger;
    [SerializeField] private GameObject _juiceballFinger;
    [SerializeField] private GameObject _appleFinger;
    [SerializeField] private GameObject _cherryFinger;
    [SerializeField] private GameObject _orangeFinger;
    [SerializeField] private GameObject _multifruitFinger;
    [SerializeField] private GameObject _tomatoFinger;
    [SerializeField] private GameObject _strawFinger;
    [SerializeField] private GameObject _readyFinger;
    [SerializeField] private List<Button> _juiseButtons;

    [Header("Other")] [SerializeField] private PeopleContainer _peoples;
    [SerializeField] private Tutorial _tutorial;
    [SerializeField] private Order _order;
    [SerializeField] private Button _strawButton;
    [SerializeField] private Button _bigCupButton;
    [SerializeField] private Button _middleCupButton;
    [SerializeField] private Button _smallCupButton;
    [SerializeField] private Button _grassButton;
    [SerializeField] private Button _juiceballButton;
    [SerializeField] private Button _iceButton;
    [SerializeField] private Button _readyButton;
    [SerializeField] private TouchIdleTimer _touchIdleTimer;
    [SerializeField] private GameObject _finalScreen;

    private bool _isFinalScreenClose = false;
    private bool _isActiveHelp = false;
    private bool _isReady = false;
    private People _currentPeople1;
    private People _currentPeople2;
    private float _gameTime = 60f;
    private Cup _currectCup1;
    private Cup _currectCup2;

    private void Update()
    {
        _gameTime -= Time.deltaTime;

        if (_gameTime <= 0f)
            ShowDownloadScreen();

        if (_touchIdleTimer.GetCurrentIdleTime() >= 3f)
        {
            DefineHelp();
        }

        if (_touchIdleTimer.GetCurrentIdleTime() >= 10f && _isFinalScreenClose == false)
        {
            ShowDownloadScreen();
        }
    }
    private void OnEnable()
    {
        _strawButton.onClick.AddListener(DisableStrawFinger);
        _readyButton.onClick.AddListener(DisableReadyFinger);
        _smallCupButton.onClick.AddListener(DisableCups);
        _middleCupButton.onClick.AddListener(DisableCups);
        _bigCupButton.onClick.AddListener(DisableCups);
        _iceButton.onClick.AddListener(DisableAdditives);
        _grassButton.onClick.AddListener(DisableAdditives);
        _juiceballButton.onClick.AddListener(DisableAdditives);

        foreach (Button button in _juiseButtons)
        {
            button.onClick.AddListener(Disablejuices);
        }
    }

    private void OnDisable()
    {
        _strawButton.onClick.RemoveListener(DisableStrawFinger);
        _readyButton.onClick.RemoveListener(DisableReadyFinger);
        _smallCupButton.onClick.RemoveListener(DisableCups);
        _middleCupButton.onClick.RemoveListener(DisableCups);
        _bigCupButton.onClick.RemoveListener(DisableCups);
        _iceButton.onClick.RemoveListener(DisableAdditives);
        _grassButton.onClick.RemoveListener(DisableAdditives);
        _juiceballButton.onClick.RemoveListener(DisableAdditives);

        foreach (Button button in _juiseButtons)
        {
            button.onClick.RemoveListener(Disablejuices);
        }
    }
    private IEnumerator OnCupFinger(CupType cupType)
    {
        _isActiveHelp = true;

        switch (cupType)
        {
            case CupType.Small:
                _smallCupFinger.SetActive(true);
                break;
            case CupType.Middle:
                _middleCupFinger.SetActive(true);
                break;
            case CupType.Large:
                _bigCupFinger.SetActive(true);
                break;
        }

        yield return null;
    }

    private IEnumerator OnJuiceFinger(JuiceType juiceType)
    {
        _isActiveHelp = true;

        switch (juiceType)
        {
            case JuiceType.Apple:
                _appleFinger.SetActive(true);
                break;
            case JuiceType.Cherry:
                _cherryFinger.SetActive(true);
                break;
            case JuiceType.Orange:
                _orangeFinger.SetActive(true);
                break;
            case JuiceType.Multifruit:
                _multifruitFinger.SetActive(true);
                break;
            case JuiceType.Tomato:
                _tomatoFinger.SetActive(true);
                break;
        }
        yield return null;

    }

    private IEnumerator OnAdditiveFinger(AdditiveType additiveType)
    {
        _isActiveHelp = true;
        Debug.Log(additiveType);

        switch (additiveType)
        {
            case AdditiveType.Ice:
                _iceFinger.SetActive(true);
                break;
            case AdditiveType.Grass:
                _grassFinger.SetActive(true);
                break;
            case AdditiveType.JuiceBall:
                _juiceballFinger.SetActive(true);
                break;
        }

        yield return null;

    }

    private void DefineHelp()
    {
        if (_tutorial.IsTutorial)
            return;

        if (_isActiveHelp)
            return;


        _currentPeople1 = _peoples.CurrentPeoples[0];
        _currentPeople2 = _peoples.CurrentPeoples[1];

        foreach (var cup in _currentPeople1.Cups)
        {
            if (cup.IsActive)
                _currectCup1 = cup;
        }

        foreach (var cup in _currentPeople2.Cups)
        {
            if (cup.IsActive)
                _currectCup2 = cup;
        }

        if (_order.IsFree && _order.IsCupReady == false)
        {
            switch (_currectCup1.CupType)
            {
                case CupType.Small:
                    StartCoroutine(OnCupFinger(CupType.Small));
                    break;
                case CupType.Middle:
                    StartCoroutine(OnCupFinger(CupType.Middle));
                    break;
                case CupType.Large:
                    StartCoroutine(OnCupFinger(CupType.Large));
                    break;
            }
        }

        if (_order.IsCupReady && _order.IsJuiceReady == false)
        {
            if (_order.CupType == _currectCup1.CupType)
            {
                switch (_currectCup1.JuiceType)
                {
                    case JuiceType.Apple:
                        StartCoroutine(OnJuiceFinger(JuiceType.Apple));
                        break;
                    case JuiceType.Cherry:
                        StartCoroutine(OnJuiceFinger(JuiceType.Cherry));
                        break;
                    case JuiceType.Orange:
                        StartCoroutine(OnJuiceFinger(JuiceType.Orange));
                        break;
                    case JuiceType.Multifruit:
                        StartCoroutine(OnJuiceFinger(JuiceType.Multifruit));
                        break;
                    case JuiceType.Tomato:
                        StartCoroutine(OnJuiceFinger(JuiceType.Tomato));
                        break;
                }
            }
            else if (_order.CupType == _currectCup2.CupType)
            {
                switch (_currectCup2.JuiceType)
                {
                    case JuiceType.Apple:
                        StartCoroutine(OnJuiceFinger(JuiceType.Apple));
                        break;
                    case JuiceType.Cherry:
                        StartCoroutine(OnJuiceFinger(JuiceType.Cherry));
                        break;
                }
            }
        }

        if (_order.IsJuiceReady && _order.IsSpriteReady == false)
        {
            _isActiveHelp = true;
            _strawFinger.SetActive(true);
        }

        if (_order.IsSpriteReady)
        {
            if (_currectCup1.AdditiveType1 == _order.AdditiveType1 ||
                _currectCup1.AdditiveType1 == _order.AdditiveType2)
            {
                if (_currectCup1.AdditiveType2 == _order.AdditiveType1 ||
                    _currectCup1.AdditiveType2 == _order.AdditiveType2)
                {
                    if (_currectCup1.CupType == _order.CupType && _currectCup1.JuiceType == _order.JuiceType)
                    {
                        _isReady = true;
                        _isActiveHelp = true;
                        _readyFinger.SetActive(true);
                    }
                }
            }

            if (_currectCup2.AdditiveType1 == _order.AdditiveType1 ||
                _currectCup2.AdditiveType1 == _order.AdditiveType2)
            {
                if (_currectCup2.AdditiveType2 == _order.AdditiveType1 ||
                    _currectCup2.AdditiveType2 == _order.AdditiveType2)
                {
                    if (_currectCup2.CupType == _order.CupType && _currectCup2.JuiceType == _order.JuiceType)
                    {
                        _isReady = true;
                        _isActiveHelp = true;
                        _readyFinger.SetActive(true);
                    }
                }
            }
        }

        if (_order.IsSpriteReady && _isReady == false)
        {
            if (_currectCup1.JuiceType == _order.JuiceType && _currectCup1.CupType == _order.CupType)
            {
                if (_currectCup1.AdditiveType1 != AdditiveType.None ||
                    _currectCup1.AdditiveType2 != AdditiveType.None)
                {
                    if (_order.AdditiveType1 == AdditiveType.None)
                    {
                        switch (_currectCup1.AdditiveType1)
                        {
                            case AdditiveType.Ice:
                                StartCoroutine(OnAdditiveFinger(AdditiveType.Ice));
                                break;
                            case AdditiveType.Grass:
                                StartCoroutine(OnAdditiveFinger(AdditiveType.Grass));
                                break;
                            case AdditiveType.JuiceBall:
                                StartCoroutine(OnAdditiveFinger(AdditiveType.JuiceBall));
                                break;
                        }
                    }
                    else if (_order.AdditiveType2 == AdditiveType.None)
                    {
                        switch (_currectCup1.AdditiveType2)
                        {
                            case AdditiveType.Ice:
                                StartCoroutine(OnAdditiveFinger(AdditiveType.Ice));
                                break;
                            case AdditiveType.Grass:
                                StartCoroutine(OnAdditiveFinger(AdditiveType.Grass));
                                break;
                        }
                    }
                }
            }
            else if (_currectCup2.CupType == _order.CupType && _currectCup2.JuiceType == _order.JuiceType)
            {
                if (_currectCup2.AdditiveType1 != AdditiveType.None ||
                    _currectCup2.AdditiveType2 != AdditiveType.None)
                {
                    if (_order.AdditiveType1 == AdditiveType.None)
                    {
                        switch (_currectCup2.AdditiveType1)
                        {
                            case AdditiveType.Ice:
                                StartCoroutine(OnAdditiveFinger(AdditiveType.Ice));
                                break;
                            case AdditiveType.Grass:
                                StartCoroutine(OnAdditiveFinger(AdditiveType.Grass));
                                break;
                            case AdditiveType.JuiceBall:
                                StartCoroutine(OnAdditiveFinger(AdditiveType.JuiceBall));
                                break;
                        }
                    }
                    else if (_order.AdditiveType2 == AdditiveType.None)
                    {
                        switch (_currectCup2.AdditiveType2)
                        {
                            case AdditiveType.Ice:
                                StartCoroutine(OnAdditiveFinger(AdditiveType.Ice));
                                break;
                            case AdditiveType.Grass:
                                StartCoroutine(OnAdditiveFinger(AdditiveType.Grass));
                                break;
                        }
                    }
                }
            }
        }
    }
    
    
    private void DisableAdditives()
    {
        _isActiveHelp = false;
        _iceFinger.gameObject.SetActive(false);
        _grassFinger.gameObject.SetActive(false);
        _juiceballFinger.gameObject.SetActive(false);
    }

    private void DisableCups()
    {
        _isActiveHelp = false;
        _smallCupFinger.SetActive(false);
        _middleCupFinger.SetActive(false);
        _bigCupFinger.SetActive(false);
    }

    private void Disablejuices()
    {
        _isActiveHelp = false;
        _appleFinger.gameObject.SetActive(false);
        _orangeFinger.gameObject.SetActive(false);
        _multifruitFinger.gameObject.SetActive(false);
        _tomatoFinger.gameObject.SetActive(false);
        _cherryFinger.gameObject.SetActive(false);
    }


    private void DisableReadyFinger()
    {
        _isActiveHelp = false;
        _isReady = false;
        _readyFinger.SetActive(false);
    }

    private void DisableStrawFinger()
    {
        _isActiveHelp = false;
        _strawFinger.SetActive(false);
    }

    private void ShowDownloadScreen()
    {
        _finalScreen.SetActive(true);
        Time.timeScale = 0f;
    }

    public void CloseFinalScreen()
    {
        _finalScreen.SetActive(false);
        Time.timeScale = 1f;
        _isFinalScreenClose = true;
    }
}