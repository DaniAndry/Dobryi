using UnityEngine;
using UnityEngine.UI;

public class AheadImage : MonoBehaviour
{
    public Image Image { get; private set; }

    private void Awake()
    {
        Image = GetComponent<Image>(); 
        Image.enabled = false;
    }
}
