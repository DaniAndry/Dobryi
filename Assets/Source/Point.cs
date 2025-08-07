using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Point : MonoBehaviour
{
    private bool _isFree = true;

    public bool IsFree => _isFree;

    public void Busy()
    {
        _isFree = false;
    }

    public void UnBusy()
    {
        _isFree = true;
    }
}