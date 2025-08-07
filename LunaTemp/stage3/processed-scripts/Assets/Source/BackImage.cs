using System;
using UnityEngine;
using UnityEngine.UI;

public class BackImage : MonoBehaviour
{
    public Image Image { get; private set; }

    private void Awake()
    {
        Image = GetComponent<Image>();  
        Image.enabled = false;
    }
}
