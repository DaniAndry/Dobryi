using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class Bank : MonoBehaviour
{
    [SerializeField] public Button BuyBigCupButton;
    [SerializeField] public Button BigCupButton;
    [SerializeField] public Button MiddleCupButton;
    [SerializeField] public TMP_Text MoneyText;
    [SerializeField] public Tutorial Tutorial;
    [SerializeField] public Button BuyAdditiveButton;
    [SerializeField] public Button BuyJuiceButton;
    [SerializeField] public Image JuiceButton1;
    [SerializeField] public Image JuiceButton2;
    [SerializeField] public Image JuiceButton3;
    [SerializeField] public Button Additive1Button;
    [SerializeField] public Button Additive2Button;
    
    [SerializeField] private AudioSource _buySound;
   
    public float Money = 0;
    public bool IsBigCupBuy = false;
    public bool IsJuiceBuy = false;
    public bool IsAdditiveBuy = false;

    private void Awake()
    {
        TurnOffButtons();
    }

    private void OnEnable()
    {
        BuyBigCupButton.onClick.AddListener(BuyBigCup);
        BuyJuiceButton.onClick.AddListener(BuyJuice);
        BuyAdditiveButton.onClick.AddListener(BuyAdditive);
    }

    private void OnDisable()
    {
        BuyBigCupButton.onClick.RemoveListener(BuyBigCup);
        BuyJuiceButton.onClick.RemoveListener(BuyJuice);
        BuyAdditiveButton.onClick.RemoveListener(BuyAdditive);
    }

    public void UpdateUI()
    {
        MoneyText.text = Money.ToString();
    }

    public bool TakeMoney(float amount)
    {
        if (Money < amount)
            return false;

        Money -= amount;
        UpdateUI();

        return true;
    }

    public void GiveMoney(float amount)
    {
        Money += amount;
        UpdateUI();
    }

    private void BuyBigCup()
    {
        if (TakeMoney(100) == false)
            return;

        BigCupButton.GetComponent<Image>().color = Color.white;
        MiddleCupButton.GetComponent<Image>().color = Color.white;
        BigCupButton.interactable = true;
        MiddleCupButton.interactable = true;
        IsBigCupBuy = true;
        BuyBigCupButton.gameObject.SetActive(false);
        Tutorial.ClickBuyBigCup();
        BuyJuiceButton.gameObject.SetActive(true);
        BuyAdditiveButton.gameObject.SetActive(true);
        _buySound.Play();
    }

    private void BuyJuice()
    {
        if (TakeMoney(100) == false)
            return;

        JuiceButton1.color = Color.white;
        JuiceButton2.color = Color.white;
        JuiceButton3.color = Color.white;
        JuiceButton1.GetComponent<Button>().interactable = true;
        JuiceButton2.GetComponent<Button>().interactable = true;
        JuiceButton3.GetComponent<Button>().interactable = true;
        
        Tutorial.OffJuiceFinger();

        BuyJuiceButton.gameObject.SetActive(false);
        IsJuiceBuy = true;
        _buySound.Play();
    }

    private void BuyAdditive()
    {
        if (TakeMoney(100) == false)
            return;

        BuyAdditiveButton.gameObject.SetActive(false);
        Additive1Button.GetComponent<Image>().color = Color.white;
        Additive2Button.GetComponent<Image>().color = Color.white;
        Additive1Button.interactable = true;
        Additive2Button.interactable = true;
        IsAdditiveBuy = true;
        _buySound.Play();
    }

    public void TurnOffButtons()
    {
        JuiceButton1.color = Color.grey;
        JuiceButton2.color = Color.grey;
        JuiceButton3.color = Color.grey;
        JuiceButton1.GetComponent<Button>().interactable = false;
        JuiceButton2.GetComponent<Button>().interactable = false;
        JuiceButton3.GetComponent<Button>().interactable = false;
        Additive1Button.GetComponent<Image>().color = Color.grey;
        Additive2Button.GetComponent<Image>().color = Color.grey;
        BigCupButton.GetComponent<Image>().color = Color.grey;
        MiddleCupButton.GetComponent<Image>().color = Color.grey;
        
        BigCupButton.interactable = false;
        MiddleCupButton.interactable = false;
        Additive1Button.interactable = false;
        Additive2Button.interactable = false;
        BuyJuiceButton.gameObject.SetActive(false);
        BuyAdditiveButton.gameObject.SetActive(false);
    }
}