using System;
using System.Collections;
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

    [Header("Other")] [SerializeField] private PeopleContainer _peoples;
    [SerializeField] private Tutorial _tutorial;
    [SerializeField] private Order _order;
    [SerializeField] private Button _strawButton;
    [SerializeField] private Button _bigCupButton;
    [SerializeField] private Button _middleCupButton;
    [SerializeField] private Button _smallCupButton;
    [SerializeField] private Button _readyButton;
    [SerializeField] private TouchIdleTimer _touchIdleTimer;
    [SerializeField] private GameObject _finalScreen;

    private bool _isFinalScreenClose = false;
    private bool _isActiveHelp = false;
    private bool _isReady = false;
    private People _currentPeople1;
    private People _currentPeople2;

    private void Update()
    {
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
    }

    private void OnDisable()
    {
        _strawButton.onClick.RemoveListener(DisableStrawFinger);
        _readyButton.onClick.RemoveListener(DisableReadyFinger);
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

        yield return new WaitForSeconds(1f);

        _isActiveHelp = false;

        switch (cupType)
        {
            case CupType.Small:
                _smallCupFinger.SetActive(false);
                break;
            case CupType.Middle:
                _middleCupFinger.SetActive(false);
                break;
            case CupType.Large:
                _bigCupFinger.SetActive(false);
                break;
        }
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

        yield return new WaitForSeconds(1f);

        _isActiveHelp = false;

        switch (juiceType)
        {
            case JuiceType.Apple:
                _appleFinger.SetActive(false);
                break;
            case JuiceType.Cherry:
                _cherryFinger.SetActive(false);
                break;
            case JuiceType.Orange:
                _orangeFinger.SetActive(false);
                break;
            case JuiceType.Multifruit:
                _multifruitFinger.SetActive(false);
                break;
            case JuiceType.Tomato:
                _tomatoFinger.SetActive(false);
                break;
        }
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

        yield return new WaitForSeconds(1f);

        _isActiveHelp = false;

        switch (additiveType)
        {
            case AdditiveType.Ice:
                _iceFinger.SetActive(false);
                break;
            case AdditiveType.Grass:
                _grassFinger.SetActive(false);
                break;
            case AdditiveType.JuiceBall:
                _juiceballFinger.SetActive(false);
                break;
        }
    }

    private void DefineHelp()
    {
        if (_tutorial.IsTutorial)
            return;

        if (_isActiveHelp)
            return;

        _currentPeople1 = _peoples.CurrentPeoples[0];
        _currentPeople2 = _peoples.CurrentPeoples[1];

        if (_order.IsFree && _order.IsCupReady == false)
        {
            switch (_currentPeople1.CupType)
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
            if (_order.CupType == _currentPeople1.CupType)
            {
                switch (_currentPeople1.JuiceType)
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
            else if (_order.CupType == _currentPeople2.CupType)
            {
                switch (_currentPeople2.JuiceType)
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
            if (_currentPeople1.AdditiveType1 == _order.AdditiveType1 ||
                _currentPeople1.AdditiveType1 == _order.AdditiveType2)
            {
                if (_currentPeople1.AdditiveType2 == _order.AdditiveType1 ||
                    _currentPeople1.AdditiveType2 == _order.AdditiveType2)
                {
                    if (_currentPeople1.CupType == _order.CupType && _currentPeople1.JuiceType == _order.JuiceType)
                    {
                        _isReady = true;
                        _isActiveHelp = true;
                        _readyFinger.SetActive(true);
                    }
                }
            }

            if (_currentPeople2.AdditiveType1 == _order.AdditiveType1 ||
                _currentPeople2.AdditiveType1 == _order.AdditiveType2)
            {
                if (_currentPeople2.AdditiveType2 == _order.AdditiveType1 ||
                    _currentPeople2.AdditiveType2 == _order.AdditiveType2)
                {
                    if (_currentPeople2.CupType == _order.CupType && _currentPeople2.JuiceType == _order.JuiceType)
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
            if (_currentPeople1.JuiceType == _order.JuiceType && _currentPeople1.CupType == _order.CupType)
            {
                if (_currentPeople1.AdditiveType1 != AdditiveType.None ||
                    _currentPeople1.AdditiveType2 != AdditiveType.None)
                {
                    if (_order.AdditiveType1 == AdditiveType.None)
                    {
                        switch (_currentPeople1.AdditiveType1)
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
                        switch (_currentPeople1.AdditiveType2)
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
            else if (_currentPeople2.CupType == _order.CupType && _currentPeople2.JuiceType == _order.JuiceType)
            {
                if (_currentPeople2.AdditiveType1 != AdditiveType.None ||
                    _currentPeople2.AdditiveType2 != AdditiveType.None)
                {
                    if (_order.AdditiveType1 == AdditiveType.None)
                    {
                        switch (_currentPeople2.AdditiveType1)
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
                        switch (_currentPeople2.AdditiveType2)
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