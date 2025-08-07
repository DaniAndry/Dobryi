using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

[RequireComponent(typeof(RectTransform))]
public class UILoopedMover : MonoBehaviour
{
    [Header("Настройки движения")]
    [Tooltip("Дистанция движения в пикселях")] 
    public float moveDistance = 100f;
    
    [Tooltip("Длительность одного движения в секундах")]
    public float duration = 1f;
    
    [Tooltip("Задержка между движениями в секундах")]
    public float delayBetweenMoves = 0.5f;
    
    [Tooltip("Тип сглаживания анимации")]
    public Ease easeType = Ease.InOutQuad;

    private RectTransform rectTransform;
    private Vector2 startPosition;
    private Sequence movementSequence;

    private void Awake()
    {
        rectTransform = GetComponent<RectTransform>();
        startPosition = rectTransform.anchoredPosition;
    }

    private void Start()
    {
        StartMovement();
    }

    /// <summary>
    /// Запускает циклическое движение
    /// </summary>
    public void StartMovement()
    {
        // Останавливаем предыдущую анимацию, если она была
        StopMovement();

        // Создаем новую последовательность
        movementSequence = DOTween.Sequence();
        
        // Движение вперед
        movementSequence.Append(
            rectTransform.DOAnchorPosX(startPosition.x + moveDistance, duration)
                .SetEase(easeType)
        );
        
        // Задержка в конечной точке
        movementSequence.AppendInterval(delayBetweenMoves);
        
        // Движение назад
        movementSequence.Append(
            rectTransform.DOAnchorPosX(startPosition.x, duration)
                .SetEase(easeType)
        );
        
        // Задержка в начальной точке
        movementSequence.AppendInterval(delayBetweenMoves);
        
        // Устанавливаем бесконечное повторение
        movementSequence.SetLoops(-1, LoopType.Restart);
        
        // Запускаем последовательность
        movementSequence.Play();
    }

    /// <summary>
    /// Останавливает циклическое движение
    /// </summary>
    public void StopMovement()
    {
        if (movementSequence != null && movementSequence.IsActive())
        {
            movementSequence.Kill();
        }
    }

    /// <summary>
    /// Устанавливает новую дистанцию движения
    /// </summary>
    public void SetMoveDistance(float newDistance)
    {
        if (Mathf.Approximately(moveDistance, newDistance))
            return;
            
        moveDistance = newDistance;
        
        // Перезапускаем движение с новыми параметрами
        if (movementSequence != null && movementSequence.IsPlaying())
        {
            StartMovement();
        }
    }

    /// <summary>
    /// Устанавливает новую длительность анимации
    /// </summary>
    public void SetDuration(float newDuration)
    {
        duration = Mathf.Max(0.1f, newDuration);
        
        // Перезапускаем движение с новыми параметрами
        if (movementSequence != null && movementSequence.IsPlaying())
        {
            StartMovement();
        }
    }

    private void OnDestroy()
    {
        // Очищаем анимации при уничтожении объекта
        if (movementSequence != null)
        {
            movementSequence.Kill();
        }
    }

    // Для отладки в редакторе
    #if UNITY_EDITOR
    private void OnValidate()
    {
        duration = Mathf.Max(0.1f, duration);
        delayBetweenMoves = Mathf.Max(0f, delayBetweenMoves);
    }
    #endif
}