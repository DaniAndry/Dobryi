 using System;
using UnityEngine;
using UnityEngine.UI;

public class Tutorial : MonoBehaviour
{
    [SerializeField] public bool IsTutorial = true;
    [SerializeField] public GameObject Finger1;
    [SerializeField] public GameObject Finger2;
    [SerializeField] public GameObject Finger3;
    [SerializeField] public GameObject Finger4;
    [SerializeField] public GameObject Finger5;
    [SerializeField] public GameObject BuyBigCupFinger;
    [SerializeField] public GameObject BuyJuiceFinger;
    [SerializeField] public Button SmallCupButton;
    [SerializeField] public Button JuiceButton;
    [SerializeField] public Button StrawButton;
    [SerializeField] public Button AdditiveButton;
    [SerializeField] public Button ReadyButton;
    [SerializeField] public Button[] Buttons;
    [SerializeField] public Bank Bank;

    private void Awake()
    {
        for (int i = 0; i < Buttons.Length; i++)
        {
            Buttons[i].interactable = false;
        }

        SmallCupButton.interactable = true;
    }

    public void ClickOne()
    {
        if (IsTutorial == false)
            return;

        SmallCupButton.interactable = false;

        Finger1.SetActive(false);
        Finger2.SetActive(true);

        JuiceButton.interactable = true;
    }

    public void ClickTwo()
    {
        if (IsTutorial == false)
            return;

        JuiceButton.interactable = false;
        Finger2.SetActive(false);

        Invoke(nameof(StrawDelay), 1f);
    }

    private void StrawDelay()
    {
        if (IsTutorial == false)
            return;

        Finger3.SetActive(true);
        StrawButton.interactable = true;
    }

    public void ClickThree()
    {
        if (IsTutorial == false)
            return;

        StrawButton.interactable = false;

        Finger3.SetActive(false);
        Finger4.SetActive(true);

        AdditiveButton.interactable = true;
    }

    public void ClickFour()
    {
        if (IsTutorial == false)
            return;

        AdditiveButton.interactable = false;

        Finger4.SetActive(false);
        Finger5.SetActive(true);

        ReadyButton.interactable = true;
    }

    public void ClickFive()
    {
        if (IsTutorial == false)
            return;

        ReadyButton.interactable = false;
        Finger5.SetActive(false);

        for (int i = 0; i < Buttons.Length; i++)
        {
            Buttons[i].interactable = true;
        }

        Bank.TurnOffButtons();
        Invoke(nameof(TurnOnBigCupFinger), 1f);
    }

    public void ClickBuyBigCup()
    {
        BuyBigCupFinger.SetActive(false);
    }

    public void OffJuiceFinger()
    {
        BuyJuiceFinger.SetActive(false);
    }

    private void TurnOnBuyJuiceFinger()
    {
        if (Bank.Money < 100)
        {
            Invoke(nameof(TurnOnBuyJuiceFinger), 10f);
            return;
        }

        if (Bank.IsJuiceBuy == false)
            BuyJuiceFinger.SetActive(true);
    }

    private void TurnOnBigCupFinger()
    {
        if (Bank.IsBigCupBuy == false)
            BuyBigCupFinger.SetActive(true);

        Invoke(nameof(TurnOnBuyJuiceFinger), 10f);
    }
}