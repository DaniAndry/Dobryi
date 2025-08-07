using UnityEngine;

public class TouchIdleTimer : MonoBehaviour
{
    private float _idleTime = 0f;
    private bool _isTracking = true;

    private void Update()
    {
        if (Input.touchCount > 0 || Input.GetMouseButton(0))
        {
            if (_isTracking)
                _idleTime = 0f;
            
            _isTracking = true;
        }
        else if (_isTracking)
        {
            _idleTime += Time.deltaTime;
        }
    }

    public float GetCurrentIdleTime()
    {
        return _idleTime;
    }

    public void ResetTimer()
    {
        _idleTime = 0f;
        _isTracking = false;
    }
}