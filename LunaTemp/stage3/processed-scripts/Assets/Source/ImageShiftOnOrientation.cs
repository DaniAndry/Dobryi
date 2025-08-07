using System;
using UnityEngine;

[Serializable]
public class ItemSwitcherData
{
    [Header("Target")]
    public RectTransform Target;
    
    [Header("Horizontal Position")]
    public Vector2 HorizontalAnchoredPosition;
    
    [Header("Horizontal Size")]
    public Vector2 SizeHorizontal;
    
    [Header("Vertical Position")]
    public Vector2 VerticalAnchoredPosition;
    
    [Header("Vertical Size")]
    public Vector2 SizeVertical;
    
    [Header("Horizontal Anchored")]
    public Vector2 MinHorizontal;
    public Vector2 MaxHorizontal;
    
    [Header("Vertical Anchored")]
    public Vector2 MinVertical;
    public Vector2 MaxVertical;
    
    [Header("IsAnchored")]
    public bool IsAnchored;
    
    [Header("Debug")]
    public bool IsDebug;

    public bool CopyHorizontal = false;
    public bool CopyVertical = false;

    public void PasteData()
    {
        if (CopyHorizontal)
        {
            HorizontalAnchoredPosition = Target.anchoredPosition;
            SizeHorizontal = Target.sizeDelta;
            MinHorizontal = Target.anchorMin;
            MaxHorizontal = Target.anchorMax;;
        }

        if (CopyVertical)
        {
            VerticalAnchoredPosition = Target.anchoredPosition;
            SizeVertical = Target.sizeDelta;
            MinVertical = Target.anchorMin;
            MaxVertical = Target.anchorMax;
        }
    }
    
    public void SetHorizontal()
    {
        if(IsDebug == false && IsAnchored == false)
        {
            Target.anchoredPosition = HorizontalAnchoredPosition;
            Target.sizeDelta = SizeHorizontal;
            Target.anchorMin = MinHorizontal;
            Target.anchorMax = MaxHorizontal;
        }

        if (IsAnchored)
        {
            Target.anchorMin = MinHorizontal;
            Target.anchorMax = MaxHorizontal;
        }
    }

    public void SetVertical()
    {
        if (IsDebug == false && IsAnchored == false)
        {
            Target.anchoredPosition = VerticalAnchoredPosition;
            Target.sizeDelta = SizeVertical;
            Target.anchorMin = MinVertical;
            Target.anchorMax = MaxVertical;
        }

        if (IsAnchored)
        {
            Target.anchorMin = MinVertical;
            Target.anchorMax = MaxVertical;
        }
    }
}

public class ImageShiftOnOrientation : MonoBehaviour
{
    [SerializeField] public ItemSwitcherData[] Items;

    public GameObject _backHorizontal;
    public GameObject _backVertical;
    public GameObject _tableHorizontal;
    public GameObject _tableVertical;
    public bool IsDebug = false;
    public bool CanCopy = false;

    void Update()
    {
        if (Screen.width > Screen.height)
        {
            _backHorizontal.SetActive(true);
            _backVertical.SetActive(false);
            
            _tableHorizontal.SetActive(true);
            _tableVertical.SetActive(false);

            if(IsDebug == false)
            {
                foreach (var item in Items)
                {
                    item.SetHorizontal();
                }
            }
        }
        else
        {
            _backHorizontal.SetActive(false);
            _backVertical.SetActive(true);
            
            _tableHorizontal.SetActive(false);
            _tableVertical.SetActive(true);

            if(IsDebug == false)
            {
                foreach (var item in Items)
                {
                    item.SetVertical();
                }
            }
        }

        if (CanCopy)
        {
            foreach (var item in Items)
            {
                item.PasteData();
            }
        }
    }
}
