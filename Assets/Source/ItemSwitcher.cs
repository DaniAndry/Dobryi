using System;
using UnityEngine;

[Serializable] 
public class ItemSwitcher : MonoBehaviour
{
    public Vector2 _horizontalAnchoredPosition;
    public Vector2 _sizeHorizontal;
    public Vector2 _verticalAnchoredPosition;
    public Vector2 _sizeVertical;
    public Vector2 _minHorizontal;
    public Vector2 _maxHorizontal;
    public Vector2 _minVertical;
    public Vector2 _maxVertical;
    public bool _isAnchored;
}