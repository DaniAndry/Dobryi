using UnityEngine;
using UnityEngine.UI;

public class ScreenRatioAnchorController : MonoBehaviour
{
    private Image image;
    private RectTransform rectTransform;
    private float targetAspectRatio = 16f / 9f; // Соотношение сторон 16:9

    private void Awake()
    {
        image = GetComponent<Image>();
        rectTransform = GetComponent<RectTransform>();
    }

    private void Update()
    {
        UpdateAnchors();
    }

    private void UpdateAnchors()
    {
        float currentAspectRatio = (float)Screen.width / Screen.height;

        if (currentAspectRatio > targetAspectRatio)
        {
            // Экран шире 16:9 - устанавливаем горизонтальные якоря
            rectTransform.anchorMin = new Vector2(0.5f, 0.5f);
            rectTransform.anchorMax = new Vector2(0.5f, 0.5f);
            rectTransform.pivot = new Vector2(0.5f, 0.5f);
            rectTransform.offsetMin = new Vector2(-image.rectTransform.rect.width / 2f, 0);
            rectTransform.offsetMax = new Vector2(image.rectTransform.rect.width / 2f, 0);
        }
        else
        {
            // Экран уже 16:9 или меньше - устанавливаем вертикальные якоря
            rectTransform.anchorMin = new Vector2(0.5f, 0.5f);
            rectTransform.anchorMax = new Vector2(0.5f, 0.5f);
            rectTransform.pivot = new Vector2(0.5f, 0.5f);
            rectTransform.offsetMin = new Vector2(0, -image.rectTransform.rect.height / 2f);
            rectTransform.offsetMax = new Vector2(0, image.rectTransform.rect.height / 2f);
        }
    }
}
