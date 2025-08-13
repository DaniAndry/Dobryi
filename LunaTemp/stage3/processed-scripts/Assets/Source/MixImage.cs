using UnityEngine;
using UnityEngine.UI;

public class MixImage : MonoBehaviour
{
    public Image Image;

    private void Awake()
    {
        Image = GetComponent<Image>();
        Image.enabled = false;
        Image.raycastTarget = false;
    }
}