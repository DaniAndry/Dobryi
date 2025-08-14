var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1698 = root || request.c( 'UnityEngine.JointSpring' )
  var i1699 = data
  i1698.spring = i1699[0]
  i1698.damper = i1699[1]
  i1698.targetPosition = i1699[2]
  return i1698
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1700 = root || request.c( 'UnityEngine.JointMotor' )
  var i1701 = data
  i1700.m_TargetVelocity = i1701[0]
  i1700.m_Force = i1701[1]
  i1700.m_FreeSpin = i1701[2]
  return i1700
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.JointLimits' )
  var i1703 = data
  i1702.m_Min = i1703[0]
  i1702.m_Max = i1703[1]
  i1702.m_Bounciness = i1703[2]
  i1702.m_BounceMinVelocity = i1703[3]
  i1702.m_ContactDistance = i1703[4]
  i1702.minBounce = i1703[5]
  i1702.maxBounce = i1703[6]
  return i1702
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.JointDrive' )
  var i1705 = data
  i1704.m_PositionSpring = i1705[0]
  i1704.m_PositionDamper = i1705[1]
  i1704.m_MaximumForce = i1705[2]
  i1704.m_UseAcceleration = i1705[3]
  return i1704
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1706 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1707 = data
  i1706.m_Spring = i1707[0]
  i1706.m_Damper = i1707[1]
  return i1706
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1708 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1709 = data
  i1708.m_Limit = i1709[0]
  i1708.m_Bounciness = i1709[1]
  i1708.m_ContactDistance = i1709[2]
  return i1708
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1710 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1711 = data
  i1710.m_ExtremumSlip = i1711[0]
  i1710.m_ExtremumValue = i1711[1]
  i1710.m_AsymptoteSlip = i1711[2]
  i1710.m_AsymptoteValue = i1711[3]
  i1710.m_Stiffness = i1711[4]
  return i1710
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1713 = data
  i1712.m_LowerAngle = i1713[0]
  i1712.m_UpperAngle = i1713[1]
  return i1712
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1714 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1715 = data
  i1714.m_MotorSpeed = i1715[0]
  i1714.m_MaximumMotorTorque = i1715[1]
  return i1714
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1716 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1717 = data
  i1716.m_DampingRatio = i1717[0]
  i1716.m_Frequency = i1717[1]
  i1716.m_Angle = i1717[2]
  return i1716
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1718 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1719 = data
  i1718.m_LowerTranslation = i1719[0]
  i1718.m_UpperTranslation = i1719[1]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1721 = data
  i1720.name = i1721[0]
  i1720.width = i1721[1]
  i1720.height = i1721[2]
  i1720.mipmapCount = i1721[3]
  i1720.anisoLevel = i1721[4]
  i1720.filterMode = i1721[5]
  i1720.hdr = !!i1721[6]
  i1720.format = i1721[7]
  i1720.wrapMode = i1721[8]
  i1720.alphaIsTransparency = !!i1721[9]
  i1720.alphaSource = i1721[10]
  i1720.graphicsFormat = i1721[11]
  i1720.sRGBTexture = !!i1721[12]
  i1720.desiredColorSpace = i1721[13]
  i1720.wrapU = i1721[14]
  i1720.wrapV = i1721[15]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1722 = root || new pc.UnityMaterial()
  var i1723 = data
  i1722.name = i1723[0]
  request.r(i1723[1], i1723[2], 0, i1722, 'shader')
  i1722.renderQueue = i1723[3]
  i1722.enableInstancing = !!i1723[4]
  var i1725 = i1723[5]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1725[i + 0]) );
  }
  i1722.floatParameters = i1724
  var i1727 = i1723[6]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1727[i + 0]) );
  }
  i1722.colorParameters = i1726
  var i1729 = i1723[7]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1729[i + 0]) );
  }
  i1722.vectorParameters = i1728
  var i1731 = i1723[8]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1731[i + 0]) );
  }
  i1722.textureParameters = i1730
  var i1733 = i1723[9]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1733[i + 0]) );
  }
  i1722.materialFlags = i1732
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1737 = data
  i1736.name = i1737[0]
  i1736.value = i1737[1]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1741 = data
  i1740.name = i1741[0]
  i1740.value = new pc.Color(i1741[1], i1741[2], i1741[3], i1741[4])
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1745 = data
  i1744.name = i1745[0]
  i1744.value = new pc.Vec4( i1745[1], i1745[2], i1745[3], i1745[4] )
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1749 = data
  i1748.name = i1749[0]
  request.r(i1749[1], i1749[2], 0, i1748, 'value')
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1753 = data
  i1752.name = i1753[0]
  i1752.enabled = !!i1753[1]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1755 = data
  i1754.pivot = new pc.Vec2( i1755[0], i1755[1] )
  i1754.anchorMin = new pc.Vec2( i1755[2], i1755[3] )
  i1754.anchorMax = new pc.Vec2( i1755[4], i1755[5] )
  i1754.sizeDelta = new pc.Vec2( i1755[6], i1755[7] )
  i1754.anchoredPosition3D = new pc.Vec3( i1755[8], i1755[9], i1755[10] )
  i1754.rotation = new pc.Quat(i1755[11], i1755[12], i1755[13], i1755[14])
  i1754.scale = new pc.Vec3( i1755[15], i1755[16], i1755[17] )
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1757 = data
  i1756.cullTransparentMesh = !!i1757[0]
  return i1756
}

Deserializers["People"] = function (request, data, root) {
  var i1758 = root || request.c( 'People' )
  var i1759 = data
  request.r(i1759[0], i1759[1], 0, i1758, '_readyImage')
  request.r(i1759[2], i1759[3], 0, i1758, '_additiveImage1')
  request.r(i1759[4], i1759[5], 0, i1758, '_additiveImage2')
  request.r(i1759[6], i1759[7], 0, i1758, '_endPoint')
  request.r(i1759[8], i1759[9], 0, i1758, 'Bank')
  request.r(i1759[10], i1759[11], 0, i1758, '_sizeText')
  i1758.CupType = i1759[12]
  i1758.JuiceType1 = i1759[13]
  i1758.JuiceType2 = i1759[14]
  i1758.AdditiveType1 = i1759[15]
  i1758.AdditiveType2 = i1759[16]
  request.r(i1759[17], i1759[18], 0, i1758, '_finishSound')
  request.r(i1759[19], i1759[20], 0, i1758, '_readySmall')
  request.r(i1759[21], i1759[22], 0, i1758, '_readyMiddle')
  request.r(i1759[23], i1759[24], 0, i1758, '_readyBig')
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1761 = data
  request.r(i1761[0], i1761[1], 0, i1760, 'clip')
  request.r(i1761[2], i1761[3], 0, i1760, 'outputAudioMixerGroup')
  i1760.playOnAwake = !!i1761[4]
  i1760.loop = !!i1761[5]
  i1760.time = i1761[6]
  i1760.volume = i1761[7]
  i1760.pitch = i1761[8]
  i1760.enabled = !!i1761[9]
  return i1760
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1762 = root || request.c( 'UnityEngine.UI.Image' )
  var i1763 = data
  request.r(i1763[0], i1763[1], 0, i1762, 'm_Sprite')
  i1762.m_Type = i1763[2]
  i1762.m_PreserveAspect = !!i1763[3]
  i1762.m_FillCenter = !!i1763[4]
  i1762.m_FillMethod = i1763[5]
  i1762.m_FillAmount = i1763[6]
  i1762.m_FillClockwise = !!i1763[7]
  i1762.m_FillOrigin = i1763[8]
  i1762.m_UseSpriteMesh = !!i1763[9]
  i1762.m_PixelsPerUnitMultiplier = i1763[10]
  request.r(i1763[11], i1763[12], 0, i1762, 'm_Material')
  i1762.m_Maskable = !!i1763[13]
  i1762.m_Color = new pc.Color(i1763[14], i1763[15], i1763[16], i1763[17])
  i1762.m_RaycastTarget = !!i1763[18]
  i1762.m_RaycastPadding = new pc.Vec4( i1763[19], i1763[20], i1763[21], i1763[22] )
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1765 = data
  i1764.name = i1765[0]
  i1764.tagId = i1765[1]
  i1764.enabled = !!i1765[2]
  i1764.isStatic = !!i1765[3]
  i1764.layer = i1765[4]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1767 = data
  i1766.name = i1767[0]
  i1766.index = i1767[1]
  i1766.startup = !!i1767[2]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1769 = data
  i1768.position = new pc.Vec3( i1769[0], i1769[1], i1769[2] )
  i1768.scale = new pc.Vec3( i1769[3], i1769[4], i1769[5] )
  i1768.rotation = new pc.Quat(i1769[6], i1769[7], i1769[8], i1769[9])
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1771 = data
  i1770.enabled = !!i1771[0]
  i1770.aspect = i1771[1]
  i1770.orthographic = !!i1771[2]
  i1770.orthographicSize = i1771[3]
  i1770.backgroundColor = new pc.Color(i1771[4], i1771[5], i1771[6], i1771[7])
  i1770.nearClipPlane = i1771[8]
  i1770.farClipPlane = i1771[9]
  i1770.fieldOfView = i1771[10]
  i1770.depth = i1771[11]
  i1770.clearFlags = i1771[12]
  i1770.cullingMask = i1771[13]
  i1770.rect = i1771[14]
  request.r(i1771[15], i1771[16], 0, i1770, 'targetTexture')
  i1770.usePhysicalProperties = !!i1771[17]
  i1770.focalLength = i1771[18]
  i1770.sensorSize = new pc.Vec2( i1771[19], i1771[20] )
  i1770.lensShift = new pc.Vec2( i1771[21], i1771[22] )
  i1770.gateFit = i1771[23]
  i1770.commandBufferCount = i1771[24]
  i1770.cameraType = i1771[25]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1773 = data
  request.r(i1773[0], i1773[1], 0, i1772, 'animatorController')
  request.r(i1773[2], i1773[3], 0, i1772, 'avatar')
  i1772.updateMode = i1773[4]
  i1772.hasTransformHierarchy = !!i1773[5]
  i1772.applyRootMotion = !!i1773[6]
  var i1775 = i1773[7]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 2) {
  request.r(i1775[i + 0], i1775[i + 1], 2, i1774, '')
  }
  i1772.humanBones = i1774
  i1772.enabled = !!i1773[8]
  return i1772
}

Deserializers["Bank"] = function (request, data, root) {
  var i1778 = root || request.c( 'Bank' )
  var i1779 = data
  request.r(i1779[0], i1779[1], 0, i1778, 'BuyBigCupButton')
  request.r(i1779[2], i1779[3], 0, i1778, 'BigCupButton')
  request.r(i1779[4], i1779[5], 0, i1778, 'MiddleCupButton')
  request.r(i1779[6], i1779[7], 0, i1778, 'MoneyText')
  request.r(i1779[8], i1779[9], 0, i1778, 'Tutorial')
  request.r(i1779[10], i1779[11], 0, i1778, 'BuyAdditiveButton')
  request.r(i1779[12], i1779[13], 0, i1778, 'BuyJuiceButton')
  request.r(i1779[14], i1779[15], 0, i1778, 'JuiceButton1')
  request.r(i1779[16], i1779[17], 0, i1778, 'JuiceButton2')
  request.r(i1779[18], i1779[19], 0, i1778, 'JuiceButton3')
  request.r(i1779[20], i1779[21], 0, i1778, 'Additive1Button')
  request.r(i1779[22], i1779[23], 0, i1778, 'Additive2Button')
  i1778.Money = i1779[24]
  i1778.IsBigCupBuy = !!i1779[25]
  i1778.IsJuiceBuy = !!i1779[26]
  i1778.IsAdditiveBuy = !!i1779[27]
  request.r(i1779[28], i1779[29], 0, i1778, '_buySound')
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1781 = data
  i1780.enabled = !!i1781[0]
  i1780.planeDistance = i1781[1]
  i1780.referencePixelsPerUnit = i1781[2]
  i1780.isFallbackOverlay = !!i1781[3]
  i1780.renderMode = i1781[4]
  i1780.renderOrder = i1781[5]
  i1780.sortingLayerName = i1781[6]
  i1780.sortingOrder = i1781[7]
  i1780.scaleFactor = i1781[8]
  request.r(i1781[9], i1781[10], 0, i1780, 'worldCamera')
  i1780.overrideSorting = !!i1781[11]
  i1780.pixelPerfect = !!i1781[12]
  i1780.targetDisplay = i1781[13]
  i1780.overridePixelPerfect = !!i1781[14]
  return i1780
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1782 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1783 = data
  i1782.m_UiScaleMode = i1783[0]
  i1782.m_ReferencePixelsPerUnit = i1783[1]
  i1782.m_ScaleFactor = i1783[2]
  i1782.m_ReferenceResolution = new pc.Vec2( i1783[3], i1783[4] )
  i1782.m_ScreenMatchMode = i1783[5]
  i1782.m_MatchWidthOrHeight = i1783[6]
  i1782.m_PhysicalUnit = i1783[7]
  i1782.m_FallbackScreenDPI = i1783[8]
  i1782.m_DefaultSpriteDPI = i1783[9]
  i1782.m_DynamicPixelsPerUnit = i1783[10]
  i1782.m_PresetInfoIsWorld = !!i1783[11]
  return i1782
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1784 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1785 = data
  i1784.m_IgnoreReversedGraphics = !!i1785[0]
  i1784.m_BlockingObjects = i1785[1]
  i1784.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1785[2] )
  return i1784
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i1786 = root || request.c( 'ImageShiftOnOrientation' )
  var i1787 = data
  var i1789 = i1787[0]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('ItemSwitcherData', i1789[i + 0]) );
  }
  i1786.Items = i1788
  request.r(i1787[1], i1787[2], 0, i1786, '_backHorizontal')
  request.r(i1787[3], i1787[4], 0, i1786, '_backVertical')
  request.r(i1787[5], i1787[6], 0, i1786, '_tableHorizontal')
  request.r(i1787[7], i1787[8], 0, i1786, '_tableVertical')
  i1786.IsDebug = !!i1787[9]
  i1786.CanCopy = !!i1787[10]
  return i1786
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i1792 = root || request.c( 'ItemSwitcherData' )
  var i1793 = data
  request.r(i1793[0], i1793[1], 0, i1792, 'Target')
  i1792.HorizontalAnchoredPosition = new pc.Vec2( i1793[2], i1793[3] )
  i1792.SizeHorizontal = new pc.Vec2( i1793[4], i1793[5] )
  i1792.VerticalAnchoredPosition = new pc.Vec2( i1793[6], i1793[7] )
  i1792.SizeVertical = new pc.Vec2( i1793[8], i1793[9] )
  i1792.MinHorizontal = new pc.Vec2( i1793[10], i1793[11] )
  i1792.MaxHorizontal = new pc.Vec2( i1793[12], i1793[13] )
  i1792.MinVertical = new pc.Vec2( i1793[14], i1793[15] )
  i1792.MaxVertical = new pc.Vec2( i1793[16], i1793[17] )
  i1792.IsAnchored = !!i1793[18]
  i1792.IsDebug = !!i1793[19]
  i1792.CopyHorizontal = !!i1793[20]
  i1792.CopyVertical = !!i1793[21]
  return i1792
}

Deserializers["Point"] = function (request, data, root) {
  var i1794 = root || request.c( 'Point' )
  var i1795 = data
  return i1794
}

Deserializers["MixImage"] = function (request, data, root) {
  var i1796 = root || request.c( 'MixImage' )
  var i1797 = data
  request.r(i1797[0], i1797[1], 0, i1796, 'Image')
  return i1796
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1798 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1799 = data
  i1798.m_hasFontAssetChanged = !!i1799[0]
  request.r(i1799[1], i1799[2], 0, i1798, 'm_baseMaterial')
  i1798.m_maskOffset = new pc.Vec4( i1799[3], i1799[4], i1799[5], i1799[6] )
  i1798.m_text = i1799[7]
  i1798.m_isRightToLeft = !!i1799[8]
  request.r(i1799[9], i1799[10], 0, i1798, 'm_fontAsset')
  request.r(i1799[11], i1799[12], 0, i1798, 'm_sharedMaterial')
  var i1801 = i1799[13]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 2) {
  request.r(i1801[i + 0], i1801[i + 1], 2, i1800, '')
  }
  i1798.m_fontSharedMaterials = i1800
  request.r(i1799[14], i1799[15], 0, i1798, 'm_fontMaterial')
  var i1803 = i1799[16]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 2) {
  request.r(i1803[i + 0], i1803[i + 1], 2, i1802, '')
  }
  i1798.m_fontMaterials = i1802
  i1798.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1799[17], i1799[18], i1799[19], i1799[20])
  i1798.m_fontColor = new pc.Color(i1799[21], i1799[22], i1799[23], i1799[24])
  i1798.m_enableVertexGradient = !!i1799[25]
  i1798.m_colorMode = i1799[26]
  i1798.m_fontColorGradient = request.d('TMPro.VertexGradient', i1799[27], i1798.m_fontColorGradient)
  request.r(i1799[28], i1799[29], 0, i1798, 'm_fontColorGradientPreset')
  request.r(i1799[30], i1799[31], 0, i1798, 'm_spriteAsset')
  i1798.m_tintAllSprites = !!i1799[32]
  request.r(i1799[33], i1799[34], 0, i1798, 'm_StyleSheet')
  i1798.m_TextStyleHashCode = i1799[35]
  i1798.m_overrideHtmlColors = !!i1799[36]
  i1798.m_faceColor = UnityEngine.Color32.ConstructColor(i1799[37], i1799[38], i1799[39], i1799[40])
  i1798.m_fontSize = i1799[41]
  i1798.m_fontSizeBase = i1799[42]
  i1798.m_fontWeight = i1799[43]
  i1798.m_enableAutoSizing = !!i1799[44]
  i1798.m_fontSizeMin = i1799[45]
  i1798.m_fontSizeMax = i1799[46]
  i1798.m_fontStyle = i1799[47]
  i1798.m_HorizontalAlignment = i1799[48]
  i1798.m_VerticalAlignment = i1799[49]
  i1798.m_textAlignment = i1799[50]
  i1798.m_characterSpacing = i1799[51]
  i1798.m_wordSpacing = i1799[52]
  i1798.m_lineSpacing = i1799[53]
  i1798.m_lineSpacingMax = i1799[54]
  i1798.m_paragraphSpacing = i1799[55]
  i1798.m_charWidthMaxAdj = i1799[56]
  i1798.m_enableWordWrapping = !!i1799[57]
  i1798.m_wordWrappingRatios = i1799[58]
  i1798.m_overflowMode = i1799[59]
  request.r(i1799[60], i1799[61], 0, i1798, 'm_linkedTextComponent')
  request.r(i1799[62], i1799[63], 0, i1798, 'parentLinkedComponent')
  i1798.m_enableKerning = !!i1799[64]
  i1798.m_enableExtraPadding = !!i1799[65]
  i1798.checkPaddingRequired = !!i1799[66]
  i1798.m_isRichText = !!i1799[67]
  i1798.m_parseCtrlCharacters = !!i1799[68]
  i1798.m_isOrthographic = !!i1799[69]
  i1798.m_isCullingEnabled = !!i1799[70]
  i1798.m_horizontalMapping = i1799[71]
  i1798.m_verticalMapping = i1799[72]
  i1798.m_uvLineOffset = i1799[73]
  i1798.m_geometrySortingOrder = i1799[74]
  i1798.m_IsTextObjectScaleStatic = !!i1799[75]
  i1798.m_VertexBufferAutoSizeReduction = !!i1799[76]
  i1798.m_useMaxVisibleDescender = !!i1799[77]
  i1798.m_pageToDisplay = i1799[78]
  i1798.m_margin = new pc.Vec4( i1799[79], i1799[80], i1799[81], i1799[82] )
  i1798.m_isUsingLegacyAnimationComponent = !!i1799[83]
  i1798.m_isVolumetricText = !!i1799[84]
  request.r(i1799[85], i1799[86], 0, i1798, 'm_Material')
  i1798.m_Maskable = !!i1799[87]
  i1798.m_Color = new pc.Color(i1799[88], i1799[89], i1799[90], i1799[91])
  i1798.m_RaycastTarget = !!i1799[92]
  i1798.m_RaycastPadding = new pc.Vec4( i1799[93], i1799[94], i1799[95], i1799[96] )
  return i1798
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1806 = root || request.c( 'TMPro.VertexGradient' )
  var i1807 = data
  i1806.topLeft = new pc.Color(i1807[0], i1807[1], i1807[2], i1807[3])
  i1806.topRight = new pc.Color(i1807[4], i1807[5], i1807[6], i1807[7])
  i1806.bottomLeft = new pc.Color(i1807[8], i1807[9], i1807[10], i1807[11])
  i1806.bottomRight = new pc.Color(i1807[12], i1807[13], i1807[14], i1807[15])
  return i1806
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i1808 = root || request.c( 'PeopleContainer' )
  var i1809 = data
  var i1811 = i1809[0]
  var i1810 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1811.length; i += 2) {
  request.r(i1811[i + 0], i1811[i + 1], 1, i1810, '')
  }
  i1808.CurrentPeoples = i1810
  var i1813 = i1809[1]
  var i1812 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1813.length; i += 2) {
  request.r(i1813[i + 0], i1813[i + 1], 1, i1812, '')
  }
  i1808._peoples = i1812
  request.r(i1809[2], i1809[3], 0, i1808, '_tutorialPeople')
  request.r(i1809[4], i1809[5], 0, i1808, '_spawnPoint')
  request.r(i1809[6], i1809[7], 0, i1808, '_point1')
  request.r(i1809[8], i1809[9], 0, i1808, '_point2')
  request.r(i1809[10], i1809[11], 0, i1808, '_endPoint')
  request.r(i1809[12], i1809[13], 0, i1808, '_juiceConfig')
  request.r(i1809[14], i1809[15], 0, i1808, '_tutorial')
  return i1808
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1816 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1817 = data
  i1816.m_HorizontalFit = i1817[0]
  i1816.m_VerticalFit = i1817[1]
  return i1816
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1818 = root || request.c( 'UnityEngine.UI.Button' )
  var i1819 = data
  i1818.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1819[0], i1818.m_OnClick)
  i1818.m_Navigation = request.d('UnityEngine.UI.Navigation', i1819[1], i1818.m_Navigation)
  i1818.m_Transition = i1819[2]
  i1818.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1819[3], i1818.m_Colors)
  i1818.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1819[4], i1818.m_SpriteState)
  i1818.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1819[5], i1818.m_AnimationTriggers)
  i1818.m_Interactable = !!i1819[6]
  request.r(i1819[7], i1819[8], 0, i1818, 'm_TargetGraphic')
  return i1818
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1820 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1821 = data
  i1820.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1821[0], i1820.m_PersistentCalls)
  return i1820
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1822 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1823 = data
  var i1825 = i1823[0]
  var i1824 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.add(request.d('UnityEngine.Events.PersistentCall', i1825[i + 0]));
  }
  i1822.m_Calls = i1824
  return i1822
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1828 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1829 = data
  request.r(i1829[0], i1829[1], 0, i1828, 'm_Target')
  i1828.m_TargetAssemblyTypeName = i1829[2]
  i1828.m_MethodName = i1829[3]
  i1828.m_Mode = i1829[4]
  i1828.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1829[5], i1828.m_Arguments)
  i1828.m_CallState = i1829[6]
  return i1828
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1830 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1831 = data
  i1830.m_Mode = i1831[0]
  i1830.m_WrapAround = !!i1831[1]
  request.r(i1831[2], i1831[3], 0, i1830, 'm_SelectOnUp')
  request.r(i1831[4], i1831[5], 0, i1830, 'm_SelectOnDown')
  request.r(i1831[6], i1831[7], 0, i1830, 'm_SelectOnLeft')
  request.r(i1831[8], i1831[9], 0, i1830, 'm_SelectOnRight')
  return i1830
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1832 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1833 = data
  i1832.m_NormalColor = new pc.Color(i1833[0], i1833[1], i1833[2], i1833[3])
  i1832.m_HighlightedColor = new pc.Color(i1833[4], i1833[5], i1833[6], i1833[7])
  i1832.m_PressedColor = new pc.Color(i1833[8], i1833[9], i1833[10], i1833[11])
  i1832.m_SelectedColor = new pc.Color(i1833[12], i1833[13], i1833[14], i1833[15])
  i1832.m_DisabledColor = new pc.Color(i1833[16], i1833[17], i1833[18], i1833[19])
  i1832.m_ColorMultiplier = i1833[20]
  i1832.m_FadeDuration = i1833[21]
  return i1832
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1834 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1835 = data
  request.r(i1835[0], i1835[1], 0, i1834, 'm_HighlightedSprite')
  request.r(i1835[2], i1835[3], 0, i1834, 'm_PressedSprite')
  request.r(i1835[4], i1835[5], 0, i1834, 'm_SelectedSprite')
  request.r(i1835[6], i1835[7], 0, i1834, 'm_DisabledSprite')
  return i1834
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1836 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1837 = data
  i1836.m_NormalTrigger = i1837[0]
  i1836.m_HighlightedTrigger = i1837[1]
  i1836.m_PressedTrigger = i1837[2]
  i1836.m_SelectedTrigger = i1837[3]
  i1836.m_DisabledTrigger = i1837[4]
  return i1836
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1838 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1839 = data
  request.r(i1839[0], i1839[1], 0, i1838, 'm_ObjectArgument')
  i1838.m_ObjectArgumentAssemblyTypeName = i1839[2]
  i1838.m_IntArgument = i1839[3]
  i1838.m_FloatArgument = i1839[4]
  i1838.m_StringArgument = i1839[5]
  i1838.m_BoolArgument = !!i1839[6]
  return i1838
}

Deserializers["BackImage"] = function (request, data, root) {
  var i1840 = root || request.c( 'BackImage' )
  var i1841 = data
  return i1840
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i1842 = root || request.c( 'AheadImage' )
  var i1843 = data
  return i1842
}

Deserializers["Order"] = function (request, data, root) {
  var i1844 = root || request.c( 'Order' )
  var i1845 = data
  request.r(i1845[0], i1845[1], 0, i1844, '_juiceAnimator')
  request.r(i1845[2], i1845[3], 0, i1844, '_cupAnimator')
  request.r(i1845[4], i1845[5], 0, i1844, '_canvasAnimator')
  i1844.CupType = i1845[6]
  i1844.JuiceType1 = i1845[7]
  i1844.JuiceType2 = i1845[8]
  i1844.AdditiveType1 = i1845[9]
  i1844.AdditiveType2 = i1845[10]
  i1844.IsFree = !!i1845[11]
  i1844.IsSpriteReady = !!i1845[12]
  i1844.IsCupReady = !!i1845[13]
  i1844.IsJuiceReady = !!i1845[14]
  i1844.IsPouring = !!i1845[15]
  request.r(i1845[16], i1845[17], 0, i1844, '_iceButton')
  request.r(i1845[18], i1845[19], 0, i1844, '_grassButton')
  request.r(i1845[20], i1845[21], 0, i1844, '_juiceBallsButton')
  request.r(i1845[22], i1845[23], 0, i1844, '_strawButton')
  request.r(i1845[24], i1845[25], 0, i1844, '_bigCupButton')
  request.r(i1845[26], i1845[27], 0, i1844, '_middleCupButton')
  request.r(i1845[28], i1845[29], 0, i1844, '_smallCupButton')
  request.r(i1845[30], i1845[31], 0, i1844, '_appleButton')
  request.r(i1845[32], i1845[33], 0, i1844, '_orangeButton')
  request.r(i1845[34], i1845[35], 0, i1844, '_multifruitButton')
  request.r(i1845[36], i1845[37], 0, i1844, '_tomatoButton')
  request.r(i1845[38], i1845[39], 0, i1844, '_cherryButton')
  request.r(i1845[40], i1845[41], 0, i1844, '_smallRawJuiceImage')
  request.r(i1845[42], i1845[43], 0, i1844, '_middleRawJuiceImage')
  request.r(i1845[44], i1845[45], 0, i1844, '_bigRawJuiceImage')
  request.r(i1845[46], i1845[47], 0, i1844, '_smallReadyJuiceImage')
  request.r(i1845[48], i1845[49], 0, i1844, '_middleReadyJuiceImage')
  request.r(i1845[50], i1845[51], 0, i1844, '_bigReadyJuiceImage')
  request.r(i1845[52], i1845[53], 0, i1844, '_backImage')
  request.r(i1845[54], i1845[55], 0, i1844, '_aheadImage')
  request.r(i1845[56], i1845[57], 0, i1844, '_config')
  request.r(i1845[58], i1845[59], 0, i1844, '_takeOrderButton')
  request.r(i1845[60], i1845[61], 0, i1844, '_peopleContainer')
  request.r(i1845[62], i1845[63], 0, i1844, '_tutorial')
  request.r(i1845[64], i1845[65], 0, i1844, '_bText')
  request.r(i1845[66], i1845[67], 0, i1844, '_mText')
  request.r(i1845[68], i1845[69], 0, i1844, '_sText')
  request.r(i1845[70], i1845[71], 0, i1844, '_garbageButton')
  request.r(i1845[72], i1845[73], 0, i1844, '_clickSound')
  request.r(i1845[74], i1845[75], 0, i1844, '_juiceSound')
  return i1844
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i1846 = root || request.c( 'Tutorial' )
  var i1847 = data
  i1846.IsTutorial = !!i1847[0]
  request.r(i1847[1], i1847[2], 0, i1846, 'Finger1')
  request.r(i1847[3], i1847[4], 0, i1846, 'Finger2')
  request.r(i1847[5], i1847[6], 0, i1846, 'Finger3')
  request.r(i1847[7], i1847[8], 0, i1846, 'Finger4')
  request.r(i1847[9], i1847[10], 0, i1846, 'Finger5')
  request.r(i1847[11], i1847[12], 0, i1846, 'BuyBigCupFinger')
  request.r(i1847[13], i1847[14], 0, i1846, 'BuyJuiceFinger')
  request.r(i1847[15], i1847[16], 0, i1846, 'SmallCupButton')
  request.r(i1847[17], i1847[18], 0, i1846, 'JuiceButton')
  request.r(i1847[19], i1847[20], 0, i1846, 'StrawButton')
  request.r(i1847[21], i1847[22], 0, i1846, 'AdditiveButton')
  request.r(i1847[23], i1847[24], 0, i1846, 'ReadyButton')
  var i1849 = i1847[25]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 2) {
  request.r(i1849[i + 0], i1849[i + 1], 2, i1848, '')
  }
  i1846.Buttons = i1848
  request.r(i1847[26], i1847[27], 0, i1846, 'Bank')
  return i1846
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i1852 = root || request.c( 'SoundSwitcher' )
  var i1853 = data
  request.r(i1853[0], i1853[1], 0, i1852, '_onImage')
  request.r(i1853[2], i1853[3], 0, i1852, '_offImage')
  return i1852
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1854 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1855 = data
  request.r(i1855[0], i1855[1], 0, i1854, 'm_FirstSelected')
  i1854.m_sendNavigationEvents = !!i1855[2]
  i1854.m_DragThreshold = i1855[3]
  return i1854
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1857 = data
  i1856.m_HorizontalAxis = i1857[0]
  i1856.m_VerticalAxis = i1857[1]
  i1856.m_SubmitButton = i1857[2]
  i1856.m_CancelButton = i1857[3]
  i1856.m_InputActionsPerSecond = i1857[4]
  i1856.m_RepeatDelay = i1857[5]
  i1856.m_ForceModuleActive = !!i1857[6]
  i1856.m_SendPointerHoverToParent = !!i1857[7]
  return i1856
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i1858 = root || request.c( 'JuiceConfig' )
  var i1859 = data
  request.r(i1859[0], i1859[1], 0, i1858, 'EntityBigCup')
  request.r(i1859[2], i1859[3], 0, i1858, 'TomatoBigCup')
  request.r(i1859[4], i1859[5], 0, i1858, 'AppleBigCup')
  request.r(i1859[6], i1859[7], 0, i1858, 'OrangeBigCup')
  request.r(i1859[8], i1859[9], 0, i1858, 'CherryBigCup')
  request.r(i1859[10], i1859[11], 0, i1858, 'MultifruitBigCup')
  request.r(i1859[12], i1859[13], 0, i1858, 'TomatoBigStrawCup')
  request.r(i1859[14], i1859[15], 0, i1858, 'MultifruitBigStrawCup')
  request.r(i1859[16], i1859[17], 0, i1858, 'AppleBigStrawCup')
  request.r(i1859[18], i1859[19], 0, i1858, 'OrangeBigStrawCup')
  request.r(i1859[20], i1859[21], 0, i1858, 'CherryBigStrawCup')
  request.r(i1859[22], i1859[23], 0, i1858, 'MultifruitBigBallsCup')
  request.r(i1859[24], i1859[25], 0, i1858, 'TomatoBigBallsCup')
  request.r(i1859[26], i1859[27], 0, i1858, 'AppleBigBallsCup')
  request.r(i1859[28], i1859[29], 0, i1858, 'OrangeBigBallsCup')
  request.r(i1859[30], i1859[31], 0, i1858, 'CherryBigBallsCup')
  request.r(i1859[32], i1859[33], 0, i1858, 'EntityMiddleCup')
  request.r(i1859[34], i1859[35], 0, i1858, 'TomatoMiddleCup')
  request.r(i1859[36], i1859[37], 0, i1858, 'AppleMiddleCup')
  request.r(i1859[38], i1859[39], 0, i1858, 'OrangeMiddleCup')
  request.r(i1859[40], i1859[41], 0, i1858, 'CherryMiddleCup')
  request.r(i1859[42], i1859[43], 0, i1858, 'MultifruitMiddleCup')
  request.r(i1859[44], i1859[45], 0, i1858, 'TomatoMiddleStrawCup')
  request.r(i1859[46], i1859[47], 0, i1858, 'MultifruitMiddleStrawCup')
  request.r(i1859[48], i1859[49], 0, i1858, 'AppleMiddleStrawCup')
  request.r(i1859[50], i1859[51], 0, i1858, 'OrangeMiddleStrawCup')
  request.r(i1859[52], i1859[53], 0, i1858, 'CherryMiddleStrawCup')
  request.r(i1859[54], i1859[55], 0, i1858, 'MultifruitMiddleBallsCup')
  request.r(i1859[56], i1859[57], 0, i1858, 'TomatoMiddleBallsCup')
  request.r(i1859[58], i1859[59], 0, i1858, 'AppleMiddleBallsCup')
  request.r(i1859[60], i1859[61], 0, i1858, 'OrangeMiddleBallsCup')
  request.r(i1859[62], i1859[63], 0, i1858, 'CherryMiddleBallsCup')
  request.r(i1859[64], i1859[65], 0, i1858, 'EntitySmallCup')
  request.r(i1859[66], i1859[67], 0, i1858, 'TomatoSmallCup')
  request.r(i1859[68], i1859[69], 0, i1858, 'AppleSmallCup')
  request.r(i1859[70], i1859[71], 0, i1858, 'OrangeSmallCup')
  request.r(i1859[72], i1859[73], 0, i1858, 'CherrySmallCup')
  request.r(i1859[74], i1859[75], 0, i1858, 'MultifruitSmallCup')
  request.r(i1859[76], i1859[77], 0, i1858, 'TomatoSmallStrawCup')
  request.r(i1859[78], i1859[79], 0, i1858, 'AppleSmallStrawCup')
  request.r(i1859[80], i1859[81], 0, i1858, 'OrangeSmallStrawCup')
  request.r(i1859[82], i1859[83], 0, i1858, 'CherrySmallStrawCup')
  request.r(i1859[84], i1859[85], 0, i1858, 'MultifruitSmallStrawCup')
  request.r(i1859[86], i1859[87], 0, i1858, 'AppleSmallBallsCup')
  request.r(i1859[88], i1859[89], 0, i1858, 'TomatoSmallBallsCup')
  request.r(i1859[90], i1859[91], 0, i1858, 'OrangeSmallBallsCup')
  request.r(i1859[92], i1859[93], 0, i1858, 'CherrySmallBallsCup')
  request.r(i1859[94], i1859[95], 0, i1858, 'MultifruitSmallBallsCup')
  request.r(i1859[96], i1859[97], 0, i1858, 'JuiceBallAdditive')
  request.r(i1859[98], i1859[99], 0, i1858, 'IceAdditive')
  request.r(i1859[100], i1859[101], 0, i1858, 'GrassAdditive')
  request.r(i1859[102], i1859[103], 0, i1858, 'SmallApple')
  request.r(i1859[104], i1859[105], 0, i1858, 'SmallOrange')
  request.r(i1859[106], i1859[107], 0, i1858, 'SmallCherry')
  request.r(i1859[108], i1859[109], 0, i1858, 'SmallMultifruit')
  request.r(i1859[110], i1859[111], 0, i1858, 'SmallTomato')
  request.r(i1859[112], i1859[113], 0, i1858, 'MiddleApple')
  request.r(i1859[114], i1859[115], 0, i1858, 'MiddleOrange')
  request.r(i1859[116], i1859[117], 0, i1858, 'MiddleCherry')
  request.r(i1859[118], i1859[119], 0, i1858, 'MiddleMultifruit')
  request.r(i1859[120], i1859[121], 0, i1858, 'MiddleTomato')
  request.r(i1859[122], i1859[123], 0, i1858, 'BigApple')
  request.r(i1859[124], i1859[125], 0, i1858, 'BigOrange')
  request.r(i1859[126], i1859[127], 0, i1858, 'BigCherry')
  request.r(i1859[128], i1859[129], 0, i1858, 'BigMultifruit')
  request.r(i1859[130], i1859[131], 0, i1858, 'BigTomato')
  return i1858
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i1860 = root || request.c( 'TouchIdleTimer' )
  var i1861 = data
  return i1860
}

Deserializers["Helper"] = function (request, data, root) {
  var i1862 = root || request.c( 'Helper' )
  var i1863 = data
  request.r(i1863[0], i1863[1], 0, i1862, '_smallCupFinger')
  request.r(i1863[2], i1863[3], 0, i1862, '_middleCupFinger')
  request.r(i1863[4], i1863[5], 0, i1862, '_bigCupFinger')
  request.r(i1863[6], i1863[7], 0, i1862, '_iceFinger')
  request.r(i1863[8], i1863[9], 0, i1862, '_grassFinger')
  request.r(i1863[10], i1863[11], 0, i1862, '_juiceballFinger')
  request.r(i1863[12], i1863[13], 0, i1862, '_appleFinger')
  request.r(i1863[14], i1863[15], 0, i1862, '_cherryFinger')
  request.r(i1863[16], i1863[17], 0, i1862, '_orangeFinger')
  request.r(i1863[18], i1863[19], 0, i1862, '_multifruitFinger')
  request.r(i1863[20], i1863[21], 0, i1862, '_tomatoFinger')
  request.r(i1863[22], i1863[23], 0, i1862, '_strawFinger')
  request.r(i1863[24], i1863[25], 0, i1862, '_readyFinger')
  request.r(i1863[26], i1863[27], 0, i1862, '_peoples')
  request.r(i1863[28], i1863[29], 0, i1862, '_tutorial')
  request.r(i1863[30], i1863[31], 0, i1862, '_order')
  request.r(i1863[32], i1863[33], 0, i1862, '_strawButton')
  request.r(i1863[34], i1863[35], 0, i1862, '_bigCupButton')
  request.r(i1863[36], i1863[37], 0, i1862, '_middleCupButton')
  request.r(i1863[38], i1863[39], 0, i1862, '_smallCupButton')
  request.r(i1863[40], i1863[41], 0, i1862, '_readyButton')
  request.r(i1863[42], i1863[43], 0, i1862, '_touchIdleTimer')
  request.r(i1863[44], i1863[45], 0, i1862, '_finalScreen')
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1865 = data
  i1864.ambientIntensity = i1865[0]
  i1864.reflectionIntensity = i1865[1]
  i1864.ambientMode = i1865[2]
  i1864.ambientLight = new pc.Color(i1865[3], i1865[4], i1865[5], i1865[6])
  i1864.ambientSkyColor = new pc.Color(i1865[7], i1865[8], i1865[9], i1865[10])
  i1864.ambientGroundColor = new pc.Color(i1865[11], i1865[12], i1865[13], i1865[14])
  i1864.ambientEquatorColor = new pc.Color(i1865[15], i1865[16], i1865[17], i1865[18])
  i1864.fogColor = new pc.Color(i1865[19], i1865[20], i1865[21], i1865[22])
  i1864.fogEndDistance = i1865[23]
  i1864.fogStartDistance = i1865[24]
  i1864.fogDensity = i1865[25]
  i1864.fog = !!i1865[26]
  request.r(i1865[27], i1865[28], 0, i1864, 'skybox')
  i1864.fogMode = i1865[29]
  var i1867 = i1865[30]
  var i1866 = []
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1867[i + 0]) );
  }
  i1864.lightmaps = i1866
  i1864.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1865[31], i1864.lightProbes)
  i1864.lightmapsMode = i1865[32]
  i1864.mixedBakeMode = i1865[33]
  i1864.environmentLightingMode = i1865[34]
  i1864.ambientProbe = new pc.SphericalHarmonicsL2(i1865[35])
  i1864.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1865[36])
  i1864.useReferenceAmbientProbe = !!i1865[37]
  request.r(i1865[38], i1865[39], 0, i1864, 'customReflection')
  request.r(i1865[40], i1865[41], 0, i1864, 'defaultReflection')
  i1864.defaultReflectionMode = i1865[42]
  i1864.defaultReflectionResolution = i1865[43]
  i1864.sunLightObjectId = i1865[44]
  i1864.pixelLightCount = i1865[45]
  i1864.defaultReflectionHDR = !!i1865[46]
  i1864.hasLightDataAsset = !!i1865[47]
  i1864.hasManualGenerate = !!i1865[48]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1871 = data
  request.r(i1871[0], i1871[1], 0, i1870, 'lightmapColor')
  request.r(i1871[2], i1871[3], 0, i1870, 'lightmapDirection')
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1872 = root || new UnityEngine.LightProbes()
  var i1873 = data
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1881 = data
  var i1883 = i1881[0]
  var i1882 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1883[i + 0]));
  }
  i1880.ShaderCompilationErrors = i1882
  i1880.name = i1881[1]
  i1880.guid = i1881[2]
  var i1885 = i1881[3]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( i1885[i + 0] );
  }
  i1880.shaderDefinedKeywords = i1884
  var i1887 = i1881[4]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1887[i + 0]) );
  }
  i1880.passes = i1886
  var i1889 = i1881[5]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1889[i + 0]) );
  }
  i1880.usePasses = i1888
  var i1891 = i1881[6]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1891[i + 0]) );
  }
  i1880.defaultParameterValues = i1890
  request.r(i1881[7], i1881[8], 0, i1880, 'unityFallbackShader')
  i1880.readDepth = !!i1881[9]
  i1880.isCreatedByShaderGraph = !!i1881[10]
  i1880.compiled = !!i1881[11]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1895 = data
  i1894.shaderName = i1895[0]
  i1894.errorMessage = i1895[1]
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1900 = root || new pc.UnityShaderPass()
  var i1901 = data
  i1900.id = i1901[0]
  i1900.subShaderIndex = i1901[1]
  i1900.name = i1901[2]
  i1900.passType = i1901[3]
  i1900.grabPassTextureName = i1901[4]
  i1900.usePass = !!i1901[5]
  i1900.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[6], i1900.zTest)
  i1900.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[7], i1900.zWrite)
  i1900.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[8], i1900.culling)
  i1900.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1901[9], i1900.blending)
  i1900.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1901[10], i1900.alphaBlending)
  i1900.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[11], i1900.colorWriteMask)
  i1900.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[12], i1900.offsetUnits)
  i1900.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[13], i1900.offsetFactor)
  i1900.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[14], i1900.stencilRef)
  i1900.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[15], i1900.stencilReadMask)
  i1900.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1901[16], i1900.stencilWriteMask)
  i1900.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1901[17], i1900.stencilOp)
  i1900.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1901[18], i1900.stencilOpFront)
  i1900.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1901[19], i1900.stencilOpBack)
  var i1903 = i1901[20]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1903[i + 0]) );
  }
  i1900.tags = i1902
  var i1905 = i1901[21]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.push( i1905[i + 0] );
  }
  i1900.passDefinedKeywords = i1904
  var i1907 = i1901[22]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1907[i + 0]) );
  }
  i1900.passDefinedKeywordGroups = i1906
  var i1909 = i1901[23]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1909[i + 0]) );
  }
  i1900.variants = i1908
  var i1911 = i1901[24]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1911[i + 0]) );
  }
  i1900.excludedVariants = i1910
  i1900.hasDepthReader = !!i1901[25]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1913 = data
  i1912.val = i1913[0]
  i1912.name = i1913[1]
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1915 = data
  i1914.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1915[0], i1914.src)
  i1914.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1915[1], i1914.dst)
  i1914.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1915[2], i1914.op)
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1917 = data
  i1916.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[0], i1916.pass)
  i1916.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[1], i1916.fail)
  i1916.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[2], i1916.zFail)
  i1916.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1917[3], i1916.comp)
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1921 = data
  i1920.name = i1921[0]
  i1920.value = i1921[1]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1925 = data
  var i1927 = i1925[0]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( i1927[i + 0] );
  }
  i1924.keywords = i1926
  i1924.hasDiscard = !!i1925[1]
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1931 = data
  i1930.passId = i1931[0]
  i1930.subShaderIndex = i1931[1]
  var i1933 = i1931[2]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( i1933[i + 0] );
  }
  i1930.keywords = i1932
  i1930.vertexProgram = i1931[3]
  i1930.fragmentProgram = i1931[4]
  i1930.exportedForWebGl2 = !!i1931[5]
  i1930.readDepth = !!i1931[6]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1937 = data
  request.r(i1937[0], i1937[1], 0, i1936, 'shader')
  i1936.pass = i1937[2]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1941 = data
  i1940.name = i1941[0]
  i1940.type = i1941[1]
  i1940.value = new pc.Vec4( i1941[2], i1941[3], i1941[4], i1941[5] )
  i1940.textureValue = i1941[6]
  i1940.shaderPropertyFlag = i1941[7]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1943 = data
  i1942.name = i1943[0]
  request.r(i1943[1], i1943[2], 0, i1942, 'texture')
  i1942.aabb = i1943[3]
  i1942.vertices = i1943[4]
  i1942.triangles = i1943[5]
  i1942.textureRect = UnityEngine.Rect.MinMaxRect(i1943[6], i1943[7], i1943[8], i1943[9])
  i1942.packedRect = UnityEngine.Rect.MinMaxRect(i1943[10], i1943[11], i1943[12], i1943[13])
  i1942.border = new pc.Vec4( i1943[14], i1943[15], i1943[16], i1943[17] )
  i1942.transparency = i1943[18]
  i1942.bounds = i1943[19]
  i1942.pixelsPerUnit = i1943[20]
  i1942.textureWidth = i1943[21]
  i1942.textureHeight = i1943[22]
  i1942.nativeSize = new pc.Vec2( i1943[23], i1943[24] )
  i1942.pivot = new pc.Vec2( i1943[25], i1943[26] )
  i1942.textureRectOffset = new pc.Vec2( i1943[27], i1943[28] )
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1945 = data
  i1944.name = i1945[0]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1947 = data
  i1946.name = i1947[0]
  i1946.wrapMode = i1947[1]
  i1946.isLooping = !!i1947[2]
  i1946.length = i1947[3]
  var i1949 = i1947[4]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1949[i + 0]) );
  }
  i1946.curves = i1948
  var i1951 = i1947[5]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1951[i + 0]) );
  }
  i1946.events = i1950
  i1946.halfPrecision = !!i1947[6]
  i1946._frameRate = i1947[7]
  i1946.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1947[8], i1946.localBounds)
  i1946.hasMuscleCurves = !!i1947[9]
  var i1953 = i1947[10]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.push( i1953[i + 0] );
  }
  i1946.clipMuscleConstant = i1952
  i1946.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1947[11], i1946.clipBindingConstant)
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1957 = data
  i1956.path = i1957[0]
  i1956.hash = i1957[1]
  i1956.componentType = i1957[2]
  i1956.property = i1957[3]
  i1956.keys = i1957[4]
  var i1959 = i1957[5]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1959[i + 0]) );
  }
  i1956.objectReferenceKeys = i1958
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1963 = data
  i1962.time = i1963[0]
  request.r(i1963[1], i1963[2], 0, i1962, 'value')
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1967 = data
  i1966.functionName = i1967[0]
  i1966.floatParameter = i1967[1]
  i1966.intParameter = i1967[2]
  i1966.stringParameter = i1967[3]
  request.r(i1967[4], i1967[5], 0, i1966, 'objectReferenceParameter')
  i1966.time = i1967[6]
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1969 = data
  i1968.center = new pc.Vec3( i1969[0], i1969[1], i1969[2] )
  i1968.extends = new pc.Vec3( i1969[3], i1969[4], i1969[5] )
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1973 = data
  var i1975 = i1973[0]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( i1975[i + 0] );
  }
  i1972.genericBindings = i1974
  var i1977 = i1973[1]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( i1977[i + 0] );
  }
  i1972.pptrCurveMapping = i1976
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1979 = data
  i1978.name = i1979[0]
  i1978.ascent = i1979[1]
  i1978.originalLineHeight = i1979[2]
  i1978.fontSize = i1979[3]
  var i1981 = i1979[4]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1981[i + 0]) );
  }
  i1978.characterInfo = i1980
  request.r(i1979[5], i1979[6], 0, i1978, 'texture')
  i1978.originalFontSize = i1979[7]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1985 = data
  i1984.index = i1985[0]
  i1984.advance = i1985[1]
  i1984.bearing = i1985[2]
  i1984.glyphWidth = i1985[3]
  i1984.glyphHeight = i1985[4]
  i1984.minX = i1985[5]
  i1984.maxX = i1985[6]
  i1984.minY = i1985[7]
  i1984.maxY = i1985[8]
  i1984.uvBottomLeftX = i1985[9]
  i1984.uvBottomLeftY = i1985[10]
  i1984.uvBottomRightX = i1985[11]
  i1984.uvBottomRightY = i1985[12]
  i1984.uvTopLeftX = i1985[13]
  i1984.uvTopLeftY = i1985[14]
  i1984.uvTopRightX = i1985[15]
  i1984.uvTopRightY = i1985[16]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1987 = data
  i1986.name = i1987[0]
  var i1989 = i1987[1]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1989[i + 0]) );
  }
  i1986.layers = i1988
  var i1991 = i1987[2]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1991[i + 0]) );
  }
  i1986.parameters = i1990
  i1986.animationClips = i1987[3]
  i1986.avatarUnsupported = i1987[4]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1995 = data
  i1994.name = i1995[0]
  i1994.defaultWeight = i1995[1]
  i1994.blendingMode = i1995[2]
  i1994.avatarMask = i1995[3]
  i1994.syncedLayerIndex = i1995[4]
  i1994.syncedLayerAffectsTiming = !!i1995[5]
  i1994.syncedLayers = i1995[6]
  i1994.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1995[7], i1994.stateMachine)
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1997 = data
  i1996.id = i1997[0]
  i1996.name = i1997[1]
  i1996.path = i1997[2]
  var i1999 = i1997[3]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1999[i + 0]) );
  }
  i1996.states = i1998
  var i2001 = i1997[4]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2001[i + 0]) );
  }
  i1996.machines = i2000
  var i2003 = i1997[5]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2003[i + 0]) );
  }
  i1996.entryStateTransitions = i2002
  var i2005 = i1997[6]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2005[i + 0]) );
  }
  i1996.exitStateTransitions = i2004
  var i2007 = i1997[7]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2007[i + 0]) );
  }
  i1996.anyStateTransitions = i2006
  i1996.defaultStateId = i1997[8]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2011 = data
  i2010.id = i2011[0]
  i2010.name = i2011[1]
  i2010.cycleOffset = i2011[2]
  i2010.cycleOffsetParameter = i2011[3]
  i2010.cycleOffsetParameterActive = !!i2011[4]
  i2010.mirror = !!i2011[5]
  i2010.mirrorParameter = i2011[6]
  i2010.mirrorParameterActive = !!i2011[7]
  i2010.motionId = i2011[8]
  i2010.nameHash = i2011[9]
  i2010.fullPathHash = i2011[10]
  i2010.speed = i2011[11]
  i2010.speedParameter = i2011[12]
  i2010.speedParameterActive = !!i2011[13]
  i2010.tag = i2011[14]
  i2010.tagHash = i2011[15]
  i2010.writeDefaultValues = !!i2011[16]
  var i2013 = i2011[17]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 2) {
  request.r(i2013[i + 0], i2013[i + 1], 2, i2012, '')
  }
  i2010.behaviours = i2012
  var i2015 = i2011[18]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2015[i + 0]) );
  }
  i2010.transitions = i2014
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2021 = data
  i2020.fullPath = i2021[0]
  i2020.canTransitionToSelf = !!i2021[1]
  i2020.duration = i2021[2]
  i2020.exitTime = i2021[3]
  i2020.hasExitTime = !!i2021[4]
  i2020.hasFixedDuration = !!i2021[5]
  i2020.interruptionSource = i2021[6]
  i2020.offset = i2021[7]
  i2020.orderedInterruption = !!i2021[8]
  i2020.destinationStateId = i2021[9]
  i2020.isExit = !!i2021[10]
  i2020.mute = !!i2021[11]
  i2020.solo = !!i2021[12]
  var i2023 = i2021[13]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2023[i + 0]) );
  }
  i2020.conditions = i2022
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2029 = data
  i2028.destinationStateId = i2029[0]
  i2028.isExit = !!i2029[1]
  i2028.mute = !!i2029[2]
  i2028.solo = !!i2029[3]
  var i2031 = i2029[4]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2031[i + 0]) );
  }
  i2028.conditions = i2030
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2035 = data
  i2034.mode = i2035[0]
  i2034.parameter = i2035[1]
  i2034.threshold = i2035[2]
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2039 = data
  i2038.defaultBool = !!i2039[0]
  i2038.defaultFloat = i2039[1]
  i2038.defaultInt = i2039[2]
  i2038.name = i2039[3]
  i2038.nameHash = i2039[4]
  i2038.type = i2039[5]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2041 = data
  i2040.name = i2041[0]
  i2040.bytes64 = i2041[1]
  i2040.data = i2041[2]
  return i2040
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2042 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2043 = data
  i2042.hashCode = i2043[0]
  request.r(i2043[1], i2043[2], 0, i2042, 'material')
  i2042.materialHashCode = i2043[3]
  request.r(i2043[4], i2043[5], 0, i2042, 'atlas')
  i2042.normalStyle = i2043[6]
  i2042.normalSpacingOffset = i2043[7]
  i2042.boldStyle = i2043[8]
  i2042.boldSpacing = i2043[9]
  i2042.italicStyle = i2043[10]
  i2042.tabSize = i2043[11]
  i2042.m_Version = i2043[12]
  i2042.m_SourceFontFileGUID = i2043[13]
  request.r(i2043[14], i2043[15], 0, i2042, 'm_SourceFontFile_EditorRef')
  request.r(i2043[16], i2043[17], 0, i2042, 'm_SourceFontFile')
  i2042.m_AtlasPopulationMode = i2043[18]
  i2042.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2043[19], i2042.m_FaceInfo)
  var i2045 = i2043[20]
  var i2044 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.add(request.d('UnityEngine.TextCore.Glyph', i2045[i + 0]));
  }
  i2042.m_GlyphTable = i2044
  var i2047 = i2043[21]
  var i2046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.add(request.d('TMPro.TMP_Character', i2047[i + 0]));
  }
  i2042.m_CharacterTable = i2046
  var i2049 = i2043[22]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 2) {
  request.r(i2049[i + 0], i2049[i + 1], 2, i2048, '')
  }
  i2042.m_AtlasTextures = i2048
  i2042.m_AtlasTextureIndex = i2043[23]
  i2042.m_IsMultiAtlasTexturesEnabled = !!i2043[24]
  i2042.m_ClearDynamicDataOnBuild = !!i2043[25]
  var i2051 = i2043[26]
  var i2050 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.add(request.d('UnityEngine.TextCore.GlyphRect', i2051[i + 0]));
  }
  i2042.m_UsedGlyphRects = i2050
  var i2053 = i2043[27]
  var i2052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.add(request.d('UnityEngine.TextCore.GlyphRect', i2053[i + 0]));
  }
  i2042.m_FreeGlyphRects = i2052
  i2042.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2043[28], i2042.m_fontInfo)
  i2042.m_AtlasWidth = i2043[29]
  i2042.m_AtlasHeight = i2043[30]
  i2042.m_AtlasPadding = i2043[31]
  i2042.m_AtlasRenderMode = i2043[32]
  var i2055 = i2043[33]
  var i2054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.add(request.d('TMPro.TMP_Glyph', i2055[i + 0]));
  }
  i2042.m_glyphInfoList = i2054
  i2042.m_KerningTable = request.d('TMPro.KerningTable', i2043[34], i2042.m_KerningTable)
  i2042.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2043[35], i2042.m_FontFeatureTable)
  var i2057 = i2043[36]
  var i2056 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2057.length; i += 2) {
  request.r(i2057[i + 0], i2057[i + 1], 1, i2056, '')
  }
  i2042.fallbackFontAssets = i2056
  var i2059 = i2043[37]
  var i2058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2059.length; i += 2) {
  request.r(i2059[i + 0], i2059[i + 1], 1, i2058, '')
  }
  i2042.m_FallbackFontAssetTable = i2058
  i2042.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2043[38], i2042.m_CreationSettings)
  var i2061 = i2043[39]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('TMPro.TMP_FontWeightPair', i2061[i + 0]) );
  }
  i2042.m_FontWeightTable = i2060
  var i2063 = i2043[40]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('TMPro.TMP_FontWeightPair', i2063[i + 0]) );
  }
  i2042.fontWeights = i2062
  return i2042
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2064 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2065 = data
  i2064.m_FaceIndex = i2065[0]
  i2064.m_FamilyName = i2065[1]
  i2064.m_StyleName = i2065[2]
  i2064.m_PointSize = i2065[3]
  i2064.m_Scale = i2065[4]
  i2064.m_UnitsPerEM = i2065[5]
  i2064.m_LineHeight = i2065[6]
  i2064.m_AscentLine = i2065[7]
  i2064.m_CapLine = i2065[8]
  i2064.m_MeanLine = i2065[9]
  i2064.m_Baseline = i2065[10]
  i2064.m_DescentLine = i2065[11]
  i2064.m_SuperscriptOffset = i2065[12]
  i2064.m_SuperscriptSize = i2065[13]
  i2064.m_SubscriptOffset = i2065[14]
  i2064.m_SubscriptSize = i2065[15]
  i2064.m_UnderlineOffset = i2065[16]
  i2064.m_UnderlineThickness = i2065[17]
  i2064.m_StrikethroughOffset = i2065[18]
  i2064.m_StrikethroughThickness = i2065[19]
  i2064.m_TabWidth = i2065[20]
  return i2064
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2068 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2069 = data
  i2068.m_Index = i2069[0]
  i2068.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2069[1], i2068.m_Metrics)
  i2068.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2069[2], i2068.m_GlyphRect)
  i2068.m_Scale = i2069[3]
  i2068.m_AtlasIndex = i2069[4]
  i2068.m_ClassDefinitionType = i2069[5]
  return i2068
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2070 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2071 = data
  i2070.m_Width = i2071[0]
  i2070.m_Height = i2071[1]
  i2070.m_HorizontalBearingX = i2071[2]
  i2070.m_HorizontalBearingY = i2071[3]
  i2070.m_HorizontalAdvance = i2071[4]
  return i2070
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2073 = data
  i2072.m_X = i2073[0]
  i2072.m_Y = i2073[1]
  i2072.m_Width = i2073[2]
  i2072.m_Height = i2073[3]
  return i2072
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2076 = root || request.c( 'TMPro.TMP_Character' )
  var i2077 = data
  i2076.m_ElementType = i2077[0]
  i2076.m_Unicode = i2077[1]
  i2076.m_GlyphIndex = i2077[2]
  i2076.m_Scale = i2077[3]
  return i2076
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2082 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2083 = data
  i2082.Name = i2083[0]
  i2082.PointSize = i2083[1]
  i2082.Scale = i2083[2]
  i2082.CharacterCount = i2083[3]
  i2082.LineHeight = i2083[4]
  i2082.Baseline = i2083[5]
  i2082.Ascender = i2083[6]
  i2082.CapHeight = i2083[7]
  i2082.Descender = i2083[8]
  i2082.CenterLine = i2083[9]
  i2082.SuperscriptOffset = i2083[10]
  i2082.SubscriptOffset = i2083[11]
  i2082.SubSize = i2083[12]
  i2082.Underline = i2083[13]
  i2082.UnderlineThickness = i2083[14]
  i2082.strikethrough = i2083[15]
  i2082.strikethroughThickness = i2083[16]
  i2082.TabWidth = i2083[17]
  i2082.Padding = i2083[18]
  i2082.AtlasWidth = i2083[19]
  i2082.AtlasHeight = i2083[20]
  return i2082
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2086 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2087 = data
  i2086.id = i2087[0]
  i2086.x = i2087[1]
  i2086.y = i2087[2]
  i2086.width = i2087[3]
  i2086.height = i2087[4]
  i2086.xOffset = i2087[5]
  i2086.yOffset = i2087[6]
  i2086.xAdvance = i2087[7]
  i2086.scale = i2087[8]
  return i2086
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2088 = root || request.c( 'TMPro.KerningTable' )
  var i2089 = data
  var i2091 = i2089[0]
  var i2090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.add(request.d('TMPro.KerningPair', i2091[i + 0]));
  }
  i2088.kerningPairs = i2090
  return i2088
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2094 = root || request.c( 'TMPro.KerningPair' )
  var i2095 = data
  i2094.xOffset = i2095[0]
  i2094.m_FirstGlyph = i2095[1]
  i2094.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2095[2], i2094.m_FirstGlyphAdjustments)
  i2094.m_SecondGlyph = i2095[3]
  i2094.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2095[4], i2094.m_SecondGlyphAdjustments)
  i2094.m_IgnoreSpacingAdjustments = !!i2095[5]
  return i2094
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2096 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2097 = data
  var i2099 = i2097[0]
  var i2098 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2099[i + 0]));
  }
  i2096.m_GlyphPairAdjustmentRecords = i2098
  return i2096
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2102 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2103 = data
  i2102.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2103[0], i2102.m_FirstAdjustmentRecord)
  i2102.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2103[1], i2102.m_SecondAdjustmentRecord)
  i2102.m_FeatureLookupFlags = i2103[2]
  return i2102
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2104 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2105 = data
  i2104.m_GlyphIndex = i2105[0]
  i2104.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2105[1], i2104.m_GlyphValueRecord)
  return i2104
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2106 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2107 = data
  i2106.m_XPlacement = i2107[0]
  i2106.m_YPlacement = i2107[1]
  i2106.m_XAdvance = i2107[2]
  i2106.m_YAdvance = i2107[3]
  return i2106
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2110 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2111 = data
  i2110.sourceFontFileName = i2111[0]
  i2110.sourceFontFileGUID = i2111[1]
  i2110.pointSizeSamplingMode = i2111[2]
  i2110.pointSize = i2111[3]
  i2110.padding = i2111[4]
  i2110.packingMode = i2111[5]
  i2110.atlasWidth = i2111[6]
  i2110.atlasHeight = i2111[7]
  i2110.characterSetSelectionMode = i2111[8]
  i2110.characterSequence = i2111[9]
  i2110.referencedFontAssetGUID = i2111[10]
  i2110.referencedTextAssetGUID = i2111[11]
  i2110.fontStyle = i2111[12]
  i2110.fontStyleModifier = i2111[13]
  i2110.renderMode = i2111[14]
  i2110.includeFontFeatures = !!i2111[15]
  return i2110
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2114 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2115 = data
  request.r(i2115[0], i2115[1], 0, i2114, 'regularTypeface')
  request.r(i2115[2], i2115[3], 0, i2114, 'italicTypeface')
  return i2114
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2116 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2117 = data
  i2116.useSafeMode = !!i2117[0]
  i2116.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2117[1], i2116.safeModeOptions)
  i2116.timeScale = i2117[2]
  i2116.unscaledTimeScale = i2117[3]
  i2116.useSmoothDeltaTime = !!i2117[4]
  i2116.maxSmoothUnscaledTime = i2117[5]
  i2116.rewindCallbackMode = i2117[6]
  i2116.showUnityEditorReport = !!i2117[7]
  i2116.logBehaviour = i2117[8]
  i2116.drawGizmos = !!i2117[9]
  i2116.defaultRecyclable = !!i2117[10]
  i2116.defaultAutoPlay = i2117[11]
  i2116.defaultUpdateType = i2117[12]
  i2116.defaultTimeScaleIndependent = !!i2117[13]
  i2116.defaultEaseType = i2117[14]
  i2116.defaultEaseOvershootOrAmplitude = i2117[15]
  i2116.defaultEasePeriod = i2117[16]
  i2116.defaultAutoKill = !!i2117[17]
  i2116.defaultLoopType = i2117[18]
  i2116.debugMode = !!i2117[19]
  i2116.debugStoreTargetId = !!i2117[20]
  i2116.showPreviewPanel = !!i2117[21]
  i2116.storeSettingsLocation = i2117[22]
  i2116.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2117[23], i2116.modules)
  i2116.createASMDEF = !!i2117[24]
  i2116.showPlayingTweens = !!i2117[25]
  i2116.showPausedTweens = !!i2117[26]
  return i2116
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2118 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2119 = data
  i2118.logBehaviour = i2119[0]
  i2118.nestedTweenFailureBehaviour = i2119[1]
  return i2118
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2120 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2121 = data
  i2120.showPanel = !!i2121[0]
  i2120.audioEnabled = !!i2121[1]
  i2120.physicsEnabled = !!i2121[2]
  i2120.physics2DEnabled = !!i2121[3]
  i2120.spriteEnabled = !!i2121[4]
  i2120.uiEnabled = !!i2121[5]
  i2120.textMeshProEnabled = !!i2121[6]
  i2120.tk2DEnabled = !!i2121[7]
  i2120.deAudioEnabled = !!i2121[8]
  i2120.deUnityExtendedEnabled = !!i2121[9]
  i2120.epoOutlineEnabled = !!i2121[10]
  return i2120
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2122 = root || request.c( 'TMPro.TMP_Settings' )
  var i2123 = data
  i2122.m_enableWordWrapping = !!i2123[0]
  i2122.m_enableKerning = !!i2123[1]
  i2122.m_enableExtraPadding = !!i2123[2]
  i2122.m_enableTintAllSprites = !!i2123[3]
  i2122.m_enableParseEscapeCharacters = !!i2123[4]
  i2122.m_EnableRaycastTarget = !!i2123[5]
  i2122.m_GetFontFeaturesAtRuntime = !!i2123[6]
  i2122.m_missingGlyphCharacter = i2123[7]
  i2122.m_warningsDisabled = !!i2123[8]
  request.r(i2123[9], i2123[10], 0, i2122, 'm_defaultFontAsset')
  i2122.m_defaultFontAssetPath = i2123[11]
  i2122.m_defaultFontSize = i2123[12]
  i2122.m_defaultAutoSizeMinRatio = i2123[13]
  i2122.m_defaultAutoSizeMaxRatio = i2123[14]
  i2122.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2123[15], i2123[16] )
  i2122.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2123[17], i2123[18] )
  i2122.m_autoSizeTextContainer = !!i2123[19]
  i2122.m_IsTextObjectScaleStatic = !!i2123[20]
  var i2125 = i2123[21]
  var i2124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2125.length; i += 2) {
  request.r(i2125[i + 0], i2125[i + 1], 1, i2124, '')
  }
  i2122.m_fallbackFontAssets = i2124
  i2122.m_matchMaterialPreset = !!i2123[22]
  request.r(i2123[23], i2123[24], 0, i2122, 'm_defaultSpriteAsset')
  i2122.m_defaultSpriteAssetPath = i2123[25]
  i2122.m_enableEmojiSupport = !!i2123[26]
  i2122.m_MissingCharacterSpriteUnicode = i2123[27]
  i2122.m_defaultColorGradientPresetsPath = i2123[28]
  request.r(i2123[29], i2123[30], 0, i2122, 'm_defaultStyleSheet')
  i2122.m_StyleSheetsResourcePath = i2123[31]
  request.r(i2123[32], i2123[33], 0, i2122, 'm_leadingCharacters')
  request.r(i2123[34], i2123[35], 0, i2122, 'm_followingCharacters')
  i2122.m_UseModernHangulLineBreakingRules = !!i2123[36]
  return i2122
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2126 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2127 = data
  i2126.hashCode = i2127[0]
  request.r(i2127[1], i2127[2], 0, i2126, 'material')
  i2126.materialHashCode = i2127[3]
  request.r(i2127[4], i2127[5], 0, i2126, 'spriteSheet')
  var i2129 = i2127[6]
  var i2128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.add(request.d('TMPro.TMP_Sprite', i2129[i + 0]));
  }
  i2126.spriteInfoList = i2128
  var i2131 = i2127[7]
  var i2130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2131.length; i += 2) {
  request.r(i2131[i + 0], i2131[i + 1], 1, i2130, '')
  }
  i2126.fallbackSpriteAssets = i2130
  i2126.m_Version = i2127[8]
  i2126.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2127[9], i2126.m_FaceInfo)
  var i2133 = i2127[10]
  var i2132 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.add(request.d('TMPro.TMP_SpriteCharacter', i2133[i + 0]));
  }
  i2126.m_SpriteCharacterTable = i2132
  var i2135 = i2127[11]
  var i2134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.add(request.d('TMPro.TMP_SpriteGlyph', i2135[i + 0]));
  }
  i2126.m_SpriteGlyphTable = i2134
  return i2126
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2138 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2139 = data
  i2138.name = i2139[0]
  i2138.hashCode = i2139[1]
  i2138.unicode = i2139[2]
  i2138.pivot = new pc.Vec2( i2139[3], i2139[4] )
  request.r(i2139[5], i2139[6], 0, i2138, 'sprite')
  i2138.id = i2139[7]
  i2138.x = i2139[8]
  i2138.y = i2139[9]
  i2138.width = i2139[10]
  i2138.height = i2139[11]
  i2138.xOffset = i2139[12]
  i2138.yOffset = i2139[13]
  i2138.xAdvance = i2139[14]
  i2138.scale = i2139[15]
  return i2138
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2144 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2145 = data
  i2144.m_Name = i2145[0]
  i2144.m_HashCode = i2145[1]
  i2144.m_ElementType = i2145[2]
  i2144.m_Unicode = i2145[3]
  i2144.m_GlyphIndex = i2145[4]
  i2144.m_Scale = i2145[5]
  return i2144
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2148 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2149 = data
  request.r(i2149[0], i2149[1], 0, i2148, 'sprite')
  i2148.m_Index = i2149[2]
  i2148.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2149[3], i2148.m_Metrics)
  i2148.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2149[4], i2148.m_GlyphRect)
  i2148.m_Scale = i2149[5]
  i2148.m_AtlasIndex = i2149[6]
  i2148.m_ClassDefinitionType = i2149[7]
  return i2148
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2150 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2151 = data
  var i2153 = i2151[0]
  var i2152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.add(request.d('TMPro.TMP_Style', i2153[i + 0]));
  }
  i2150.m_StyleList = i2152
  return i2150
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2156 = root || request.c( 'TMPro.TMP_Style' )
  var i2157 = data
  i2156.m_Name = i2157[0]
  i2156.m_HashCode = i2157[1]
  i2156.m_OpeningDefinition = i2157[2]
  i2156.m_ClosingDefinition = i2157[3]
  i2156.m_OpeningTagArray = i2157[4]
  i2156.m_ClosingTagArray = i2157[5]
  i2156.m_OpeningTagUnicodeArray = i2157[6]
  i2156.m_ClosingTagUnicodeArray = i2157[7]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2159 = data
  var i2161 = i2159[0]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2161[i + 0]) );
  }
  i2158.files = i2160
  i2158.componentToPrefabIds = i2159[1]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2165 = data
  i2164.path = i2165[0]
  request.r(i2165[1], i2165[2], 0, i2164, 'unityObject')
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2167 = data
  var i2169 = i2167[0]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2169[i + 0]) );
  }
  i2166.scriptsExecutionOrder = i2168
  var i2171 = i2167[1]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2171[i + 0]) );
  }
  i2166.sortingLayers = i2170
  var i2173 = i2167[2]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2173[i + 0]) );
  }
  i2166.cullingLayers = i2172
  i2166.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2167[3], i2166.timeSettings)
  i2166.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2167[4], i2166.physicsSettings)
  i2166.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2167[5], i2166.physics2DSettings)
  i2166.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2167[6], i2166.qualitySettings)
  i2166.enableRealtimeShadows = !!i2167[7]
  i2166.enableAutoInstancing = !!i2167[8]
  i2166.enableDynamicBatching = !!i2167[9]
  i2166.lightmapEncodingQuality = i2167[10]
  i2166.desiredColorSpace = i2167[11]
  var i2175 = i2167[12]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( i2175[i + 0] );
  }
  i2166.allTags = i2174
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2179 = data
  i2178.name = i2179[0]
  i2178.value = i2179[1]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2183 = data
  i2182.id = i2183[0]
  i2182.name = i2183[1]
  i2182.value = i2183[2]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2187 = data
  i2186.id = i2187[0]
  i2186.name = i2187[1]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2189 = data
  i2188.fixedDeltaTime = i2189[0]
  i2188.maximumDeltaTime = i2189[1]
  i2188.timeScale = i2189[2]
  i2188.maximumParticleTimestep = i2189[3]
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2191 = data
  i2190.gravity = new pc.Vec3( i2191[0], i2191[1], i2191[2] )
  i2190.defaultSolverIterations = i2191[3]
  i2190.bounceThreshold = i2191[4]
  i2190.autoSyncTransforms = !!i2191[5]
  i2190.autoSimulation = !!i2191[6]
  var i2193 = i2191[7]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2193[i + 0]) );
  }
  i2190.collisionMatrix = i2192
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2197 = data
  i2196.enabled = !!i2197[0]
  i2196.layerId = i2197[1]
  i2196.otherLayerId = i2197[2]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'material')
  i2198.gravity = new pc.Vec2( i2199[2], i2199[3] )
  i2198.positionIterations = i2199[4]
  i2198.velocityIterations = i2199[5]
  i2198.velocityThreshold = i2199[6]
  i2198.maxLinearCorrection = i2199[7]
  i2198.maxAngularCorrection = i2199[8]
  i2198.maxTranslationSpeed = i2199[9]
  i2198.maxRotationSpeed = i2199[10]
  i2198.baumgarteScale = i2199[11]
  i2198.baumgarteTOIScale = i2199[12]
  i2198.timeToSleep = i2199[13]
  i2198.linearSleepTolerance = i2199[14]
  i2198.angularSleepTolerance = i2199[15]
  i2198.defaultContactOffset = i2199[16]
  i2198.autoSimulation = !!i2199[17]
  i2198.queriesHitTriggers = !!i2199[18]
  i2198.queriesStartInColliders = !!i2199[19]
  i2198.callbacksOnDisable = !!i2199[20]
  i2198.reuseCollisionCallbacks = !!i2199[21]
  i2198.autoSyncTransforms = !!i2199[22]
  var i2201 = i2199[23]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2201[i + 0]) );
  }
  i2198.collisionMatrix = i2200
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2205 = data
  i2204.enabled = !!i2205[0]
  i2204.layerId = i2205[1]
  i2204.otherLayerId = i2205[2]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2207 = data
  var i2209 = i2207[0]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2209[i + 0]) );
  }
  i2206.qualityLevels = i2208
  var i2211 = i2207[1]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( i2211[i + 0] );
  }
  i2206.names = i2210
  i2206.shadows = i2207[2]
  i2206.anisotropicFiltering = i2207[3]
  i2206.antiAliasing = i2207[4]
  i2206.lodBias = i2207[5]
  i2206.shadowCascades = i2207[6]
  i2206.shadowDistance = i2207[7]
  i2206.shadowmaskMode = i2207[8]
  i2206.shadowProjection = i2207[9]
  i2206.shadowResolution = i2207[10]
  i2206.softParticles = !!i2207[11]
  i2206.softVegetation = !!i2207[12]
  i2206.activeColorSpace = i2207[13]
  i2206.desiredColorSpace = i2207[14]
  i2206.masterTextureLimit = i2207[15]
  i2206.maxQueuedFrames = i2207[16]
  i2206.particleRaycastBudget = i2207[17]
  i2206.pixelLightCount = i2207[18]
  i2206.realtimeReflectionProbes = !!i2207[19]
  i2206.shadowCascade2Split = i2207[20]
  i2206.shadowCascade4Split = new pc.Vec3( i2207[21], i2207[22], i2207[23] )
  i2206.streamingMipmapsActive = !!i2207[24]
  i2206.vSyncCount = i2207[25]
  i2206.asyncUploadBufferSize = i2207[26]
  i2206.asyncUploadTimeSlice = i2207[27]
  i2206.billboardsFaceCameraPosition = !!i2207[28]
  i2206.shadowNearPlaneOffset = i2207[29]
  i2206.streamingMipmapsMemoryBudget = i2207[30]
  i2206.maximumLODLevel = i2207[31]
  i2206.streamingMipmapsAddAllCameras = !!i2207[32]
  i2206.streamingMipmapsMaxLevelReduction = i2207[33]
  i2206.streamingMipmapsRenderersPerFrame = i2207[34]
  i2206.resolutionScalingFixedDPIFactor = i2207[35]
  i2206.streamingMipmapsMaxFileIORequests = i2207[36]
  i2206.currentQualityLevel = i2207[37]
  return i2206
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2214 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2215 = data
  i2214.xPlacement = i2215[0]
  i2214.yPlacement = i2215[1]
  i2214.xAdvance = i2215[2]
  i2214.yAdvance = i2215[3]
  return i2214
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[12],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[12],"79":[80],"81":[82],"83":[82],"19":[2],"35":[16],"84":[2],"85":[86],"87":[88],"89":[86],"90":[2],"91":[2],"21":[19],"6":[3,2],"92":[2],"20":[19],"31":[2],"93":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[2],"101":[3,2],"102":[2],"103":[2],"104":[2],"105":[2],"106":[3,2],"107":[2],"108":[37],"109":[37],"38":[37],"110":[37],"111":[12],"112":[12],"113":[114],"115":[12],"116":[2],"117":[80,2],"17":[2,3],"118":[2],"119":[3,2],"120":[80],"121":[3,2],"122":[2],"123":[86]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","MixImage","TMPro.TMP_FontAsset","UnityEngine.Material","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "6.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "MixVersion4";

Deserializers.lunaAppID = "31350";

Deserializers.projectId = "7f2f46166dd2d47de965f23f8e844faa";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "5ae55432-1fc5-4a00-8349-b9896ba2978a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

