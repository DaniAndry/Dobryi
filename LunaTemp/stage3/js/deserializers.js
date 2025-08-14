var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1740 = root || request.c( 'UnityEngine.JointSpring' )
  var i1741 = data
  i1740.spring = i1741[0]
  i1740.damper = i1741[1]
  i1740.targetPosition = i1741[2]
  return i1740
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1742 = root || request.c( 'UnityEngine.JointMotor' )
  var i1743 = data
  i1742.m_TargetVelocity = i1743[0]
  i1742.m_Force = i1743[1]
  i1742.m_FreeSpin = i1743[2]
  return i1742
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1744 = root || request.c( 'UnityEngine.JointLimits' )
  var i1745 = data
  i1744.m_Min = i1745[0]
  i1744.m_Max = i1745[1]
  i1744.m_Bounciness = i1745[2]
  i1744.m_BounceMinVelocity = i1745[3]
  i1744.m_ContactDistance = i1745[4]
  i1744.minBounce = i1745[5]
  i1744.maxBounce = i1745[6]
  return i1744
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1746 = root || request.c( 'UnityEngine.JointDrive' )
  var i1747 = data
  i1746.m_PositionSpring = i1747[0]
  i1746.m_PositionDamper = i1747[1]
  i1746.m_MaximumForce = i1747[2]
  i1746.m_UseAcceleration = i1747[3]
  return i1746
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1748 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1749 = data
  i1748.m_Spring = i1749[0]
  i1748.m_Damper = i1749[1]
  return i1748
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1750 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1751 = data
  i1750.m_Limit = i1751[0]
  i1750.m_Bounciness = i1751[1]
  i1750.m_ContactDistance = i1751[2]
  return i1750
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1752 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1753 = data
  i1752.m_ExtremumSlip = i1753[0]
  i1752.m_ExtremumValue = i1753[1]
  i1752.m_AsymptoteSlip = i1753[2]
  i1752.m_AsymptoteValue = i1753[3]
  i1752.m_Stiffness = i1753[4]
  return i1752
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1754 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1755 = data
  i1754.m_LowerAngle = i1755[0]
  i1754.m_UpperAngle = i1755[1]
  return i1754
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1756 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1757 = data
  i1756.m_MotorSpeed = i1757[0]
  i1756.m_MaximumMotorTorque = i1757[1]
  return i1756
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1758 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1759 = data
  i1758.m_DampingRatio = i1759[0]
  i1758.m_Frequency = i1759[1]
  i1758.m_Angle = i1759[2]
  return i1758
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1760 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1761 = data
  i1760.m_LowerTranslation = i1761[0]
  i1760.m_UpperTranslation = i1761[1]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1763 = data
  i1762.name = i1763[0]
  i1762.width = i1763[1]
  i1762.height = i1763[2]
  i1762.mipmapCount = i1763[3]
  i1762.anisoLevel = i1763[4]
  i1762.filterMode = i1763[5]
  i1762.hdr = !!i1763[6]
  i1762.format = i1763[7]
  i1762.wrapMode = i1763[8]
  i1762.alphaIsTransparency = !!i1763[9]
  i1762.alphaSource = i1763[10]
  i1762.graphicsFormat = i1763[11]
  i1762.sRGBTexture = !!i1763[12]
  i1762.desiredColorSpace = i1763[13]
  i1762.wrapU = i1763[14]
  i1762.wrapV = i1763[15]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1764 = root || new pc.UnityMaterial()
  var i1765 = data
  i1764.name = i1765[0]
  request.r(i1765[1], i1765[2], 0, i1764, 'shader')
  i1764.renderQueue = i1765[3]
  i1764.enableInstancing = !!i1765[4]
  var i1767 = i1765[5]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1767[i + 0]) );
  }
  i1764.floatParameters = i1766
  var i1769 = i1765[6]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1769[i + 0]) );
  }
  i1764.colorParameters = i1768
  var i1771 = i1765[7]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1771[i + 0]) );
  }
  i1764.vectorParameters = i1770
  var i1773 = i1765[8]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1773[i + 0]) );
  }
  i1764.textureParameters = i1772
  var i1775 = i1765[9]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1775[i + 0]) );
  }
  i1764.materialFlags = i1774
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1779 = data
  i1778.name = i1779[0]
  i1778.value = i1779[1]
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1783 = data
  i1782.name = i1783[0]
  i1782.value = new pc.Color(i1783[1], i1783[2], i1783[3], i1783[4])
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1787 = data
  i1786.name = i1787[0]
  i1786.value = new pc.Vec4( i1787[1], i1787[2], i1787[3], i1787[4] )
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1791 = data
  i1790.name = i1791[0]
  request.r(i1791[1], i1791[2], 0, i1790, 'value')
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1795 = data
  i1794.name = i1795[0]
  i1794.enabled = !!i1795[1]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1797 = data
  i1796.pivot = new pc.Vec2( i1797[0], i1797[1] )
  i1796.anchorMin = new pc.Vec2( i1797[2], i1797[3] )
  i1796.anchorMax = new pc.Vec2( i1797[4], i1797[5] )
  i1796.sizeDelta = new pc.Vec2( i1797[6], i1797[7] )
  i1796.anchoredPosition3D = new pc.Vec3( i1797[8], i1797[9], i1797[10] )
  i1796.rotation = new pc.Quat(i1797[11], i1797[12], i1797[13], i1797[14])
  i1796.scale = new pc.Vec3( i1797[15], i1797[16], i1797[17] )
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1799 = data
  i1798.cullTransparentMesh = !!i1799[0]
  return i1798
}

Deserializers["People"] = function (request, data, root) {
  var i1800 = root || request.c( 'People' )
  var i1801 = data
  request.r(i1801[0], i1801[1], 0, i1800, '_readyImage')
  request.r(i1801[2], i1801[3], 0, i1800, '_additiveImage1')
  request.r(i1801[4], i1801[5], 0, i1800, '_additiveImage2')
  request.r(i1801[6], i1801[7], 0, i1800, '_endPoint')
  request.r(i1801[8], i1801[9], 0, i1800, 'Bank')
  request.r(i1801[10], i1801[11], 0, i1800, '_sizeText')
  i1800.CupType = i1801[12]
  i1800.JuiceType = i1801[13]
  i1800.AdditiveType1 = i1801[14]
  i1800.AdditiveType2 = i1801[15]
  request.r(i1801[16], i1801[17], 0, i1800, '_finishSound')
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1803 = data
  request.r(i1803[0], i1803[1], 0, i1802, 'clip')
  request.r(i1803[2], i1803[3], 0, i1802, 'outputAudioMixerGroup')
  i1802.playOnAwake = !!i1803[4]
  i1802.loop = !!i1803[5]
  i1802.time = i1803[6]
  i1802.volume = i1803[7]
  i1802.pitch = i1803[8]
  i1802.enabled = !!i1803[9]
  return i1802
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.UI.Image' )
  var i1805 = data
  request.r(i1805[0], i1805[1], 0, i1804, 'm_Sprite')
  i1804.m_Type = i1805[2]
  i1804.m_PreserveAspect = !!i1805[3]
  i1804.m_FillCenter = !!i1805[4]
  i1804.m_FillMethod = i1805[5]
  i1804.m_FillAmount = i1805[6]
  i1804.m_FillClockwise = !!i1805[7]
  i1804.m_FillOrigin = i1805[8]
  i1804.m_UseSpriteMesh = !!i1805[9]
  i1804.m_PixelsPerUnitMultiplier = i1805[10]
  request.r(i1805[11], i1805[12], 0, i1804, 'm_Material')
  i1804.m_Maskable = !!i1805[13]
  i1804.m_Color = new pc.Color(i1805[14], i1805[15], i1805[16], i1805[17])
  i1804.m_RaycastTarget = !!i1805[18]
  i1804.m_RaycastPadding = new pc.Vec4( i1805[19], i1805[20], i1805[21], i1805[22] )
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1807 = data
  i1806.name = i1807[0]
  i1806.tagId = i1807[1]
  i1806.enabled = !!i1807[2]
  i1806.isStatic = !!i1807[3]
  i1806.layer = i1807[4]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1809 = data
  i1808.name = i1809[0]
  i1808.index = i1809[1]
  i1808.startup = !!i1809[2]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1811 = data
  i1810.position = new pc.Vec3( i1811[0], i1811[1], i1811[2] )
  i1810.scale = new pc.Vec3( i1811[3], i1811[4], i1811[5] )
  i1810.rotation = new pc.Quat(i1811[6], i1811[7], i1811[8], i1811[9])
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1813 = data
  i1812.enabled = !!i1813[0]
  i1812.aspect = i1813[1]
  i1812.orthographic = !!i1813[2]
  i1812.orthographicSize = i1813[3]
  i1812.backgroundColor = new pc.Color(i1813[4], i1813[5], i1813[6], i1813[7])
  i1812.nearClipPlane = i1813[8]
  i1812.farClipPlane = i1813[9]
  i1812.fieldOfView = i1813[10]
  i1812.depth = i1813[11]
  i1812.clearFlags = i1813[12]
  i1812.cullingMask = i1813[13]
  i1812.rect = i1813[14]
  request.r(i1813[15], i1813[16], 0, i1812, 'targetTexture')
  i1812.usePhysicalProperties = !!i1813[17]
  i1812.focalLength = i1813[18]
  i1812.sensorSize = new pc.Vec2( i1813[19], i1813[20] )
  i1812.lensShift = new pc.Vec2( i1813[21], i1813[22] )
  i1812.gateFit = i1813[23]
  i1812.commandBufferCount = i1813[24]
  i1812.cameraType = i1813[25]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1815 = data
  request.r(i1815[0], i1815[1], 0, i1814, 'animatorController')
  request.r(i1815[2], i1815[3], 0, i1814, 'avatar')
  i1814.updateMode = i1815[4]
  i1814.hasTransformHierarchy = !!i1815[5]
  i1814.applyRootMotion = !!i1815[6]
  var i1817 = i1815[7]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 2) {
  request.r(i1817[i + 0], i1817[i + 1], 2, i1816, '')
  }
  i1814.humanBones = i1816
  i1814.enabled = !!i1815[8]
  return i1814
}

Deserializers["Bank"] = function (request, data, root) {
  var i1820 = root || request.c( 'Bank' )
  var i1821 = data
  request.r(i1821[0], i1821[1], 0, i1820, 'BuyBigCupButton')
  request.r(i1821[2], i1821[3], 0, i1820, 'BigCupButton')
  request.r(i1821[4], i1821[5], 0, i1820, 'MiddleCupButton')
  request.r(i1821[6], i1821[7], 0, i1820, 'MoneyText')
  request.r(i1821[8], i1821[9], 0, i1820, 'Tutorial')
  request.r(i1821[10], i1821[11], 0, i1820, 'BuyAdditiveButton')
  request.r(i1821[12], i1821[13], 0, i1820, 'BuyJuiceButton')
  request.r(i1821[14], i1821[15], 0, i1820, 'JuiceButton1')
  request.r(i1821[16], i1821[17], 0, i1820, 'JuiceButton2')
  request.r(i1821[18], i1821[19], 0, i1820, 'JuiceButton3')
  request.r(i1821[20], i1821[21], 0, i1820, 'Additive1Button')
  request.r(i1821[22], i1821[23], 0, i1820, 'Additive2Button')
  i1820.Money = i1821[24]
  i1820.IsBigCupBuy = !!i1821[25]
  i1820.IsJuiceBuy = !!i1821[26]
  i1820.IsAdditiveBuy = !!i1821[27]
  request.r(i1821[28], i1821[29], 0, i1820, '_buySound')
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1823 = data
  i1822.enabled = !!i1823[0]
  i1822.planeDistance = i1823[1]
  i1822.referencePixelsPerUnit = i1823[2]
  i1822.isFallbackOverlay = !!i1823[3]
  i1822.renderMode = i1823[4]
  i1822.renderOrder = i1823[5]
  i1822.sortingLayerName = i1823[6]
  i1822.sortingOrder = i1823[7]
  i1822.scaleFactor = i1823[8]
  request.r(i1823[9], i1823[10], 0, i1822, 'worldCamera')
  i1822.overrideSorting = !!i1823[11]
  i1822.pixelPerfect = !!i1823[12]
  i1822.targetDisplay = i1823[13]
  i1822.overridePixelPerfect = !!i1823[14]
  return i1822
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1824 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1825 = data
  i1824.m_UiScaleMode = i1825[0]
  i1824.m_ReferencePixelsPerUnit = i1825[1]
  i1824.m_ScaleFactor = i1825[2]
  i1824.m_ReferenceResolution = new pc.Vec2( i1825[3], i1825[4] )
  i1824.m_ScreenMatchMode = i1825[5]
  i1824.m_MatchWidthOrHeight = i1825[6]
  i1824.m_PhysicalUnit = i1825[7]
  i1824.m_FallbackScreenDPI = i1825[8]
  i1824.m_DefaultSpriteDPI = i1825[9]
  i1824.m_DynamicPixelsPerUnit = i1825[10]
  i1824.m_PresetInfoIsWorld = !!i1825[11]
  return i1824
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1826 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1827 = data
  i1826.m_IgnoreReversedGraphics = !!i1827[0]
  i1826.m_BlockingObjects = i1827[1]
  i1826.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1827[2] )
  return i1826
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i1828 = root || request.c( 'ImageShiftOnOrientation' )
  var i1829 = data
  var i1831 = i1829[0]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('ItemSwitcherData', i1831[i + 0]) );
  }
  i1828.Items = i1830
  request.r(i1829[1], i1829[2], 0, i1828, '_backHorizontal')
  request.r(i1829[3], i1829[4], 0, i1828, '_backVertical')
  request.r(i1829[5], i1829[6], 0, i1828, '_tableHorizontal')
  request.r(i1829[7], i1829[8], 0, i1828, '_tableVertical')
  i1828.IsDebug = !!i1829[9]
  i1828.CanCopy = !!i1829[10]
  return i1828
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i1834 = root || request.c( 'ItemSwitcherData' )
  var i1835 = data
  request.r(i1835[0], i1835[1], 0, i1834, 'Target')
  i1834.HorizontalAnchoredPosition = new pc.Vec2( i1835[2], i1835[3] )
  i1834.SizeHorizontal = new pc.Vec2( i1835[4], i1835[5] )
  i1834.VerticalAnchoredPosition = new pc.Vec2( i1835[6], i1835[7] )
  i1834.SizeVertical = new pc.Vec2( i1835[8], i1835[9] )
  i1834.MinHorizontal = new pc.Vec2( i1835[10], i1835[11] )
  i1834.MaxHorizontal = new pc.Vec2( i1835[12], i1835[13] )
  i1834.MinVertical = new pc.Vec2( i1835[14], i1835[15] )
  i1834.MaxVertical = new pc.Vec2( i1835[16], i1835[17] )
  i1834.IsAnchored = !!i1835[18]
  i1834.IsDebug = !!i1835[19]
  i1834.CopyHorizontal = !!i1835[20]
  i1834.CopyVertical = !!i1835[21]
  return i1834
}

Deserializers["Point"] = function (request, data, root) {
  var i1836 = root || request.c( 'Point' )
  var i1837 = data
  return i1836
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1838 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1839 = data
  i1838.m_hasFontAssetChanged = !!i1839[0]
  request.r(i1839[1], i1839[2], 0, i1838, 'm_baseMaterial')
  i1838.m_maskOffset = new pc.Vec4( i1839[3], i1839[4], i1839[5], i1839[6] )
  i1838.m_text = i1839[7]
  i1838.m_isRightToLeft = !!i1839[8]
  request.r(i1839[9], i1839[10], 0, i1838, 'm_fontAsset')
  request.r(i1839[11], i1839[12], 0, i1838, 'm_sharedMaterial')
  var i1841 = i1839[13]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 2) {
  request.r(i1841[i + 0], i1841[i + 1], 2, i1840, '')
  }
  i1838.m_fontSharedMaterials = i1840
  request.r(i1839[14], i1839[15], 0, i1838, 'm_fontMaterial')
  var i1843 = i1839[16]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 2) {
  request.r(i1843[i + 0], i1843[i + 1], 2, i1842, '')
  }
  i1838.m_fontMaterials = i1842
  i1838.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1839[17], i1839[18], i1839[19], i1839[20])
  i1838.m_fontColor = new pc.Color(i1839[21], i1839[22], i1839[23], i1839[24])
  i1838.m_enableVertexGradient = !!i1839[25]
  i1838.m_colorMode = i1839[26]
  i1838.m_fontColorGradient = request.d('TMPro.VertexGradient', i1839[27], i1838.m_fontColorGradient)
  request.r(i1839[28], i1839[29], 0, i1838, 'm_fontColorGradientPreset')
  request.r(i1839[30], i1839[31], 0, i1838, 'm_spriteAsset')
  i1838.m_tintAllSprites = !!i1839[32]
  request.r(i1839[33], i1839[34], 0, i1838, 'm_StyleSheet')
  i1838.m_TextStyleHashCode = i1839[35]
  i1838.m_overrideHtmlColors = !!i1839[36]
  i1838.m_faceColor = UnityEngine.Color32.ConstructColor(i1839[37], i1839[38], i1839[39], i1839[40])
  i1838.m_fontSize = i1839[41]
  i1838.m_fontSizeBase = i1839[42]
  i1838.m_fontWeight = i1839[43]
  i1838.m_enableAutoSizing = !!i1839[44]
  i1838.m_fontSizeMin = i1839[45]
  i1838.m_fontSizeMax = i1839[46]
  i1838.m_fontStyle = i1839[47]
  i1838.m_HorizontalAlignment = i1839[48]
  i1838.m_VerticalAlignment = i1839[49]
  i1838.m_textAlignment = i1839[50]
  i1838.m_characterSpacing = i1839[51]
  i1838.m_wordSpacing = i1839[52]
  i1838.m_lineSpacing = i1839[53]
  i1838.m_lineSpacingMax = i1839[54]
  i1838.m_paragraphSpacing = i1839[55]
  i1838.m_charWidthMaxAdj = i1839[56]
  i1838.m_enableWordWrapping = !!i1839[57]
  i1838.m_wordWrappingRatios = i1839[58]
  i1838.m_overflowMode = i1839[59]
  request.r(i1839[60], i1839[61], 0, i1838, 'm_linkedTextComponent')
  request.r(i1839[62], i1839[63], 0, i1838, 'parentLinkedComponent')
  i1838.m_enableKerning = !!i1839[64]
  i1838.m_enableExtraPadding = !!i1839[65]
  i1838.checkPaddingRequired = !!i1839[66]
  i1838.m_isRichText = !!i1839[67]
  i1838.m_parseCtrlCharacters = !!i1839[68]
  i1838.m_isOrthographic = !!i1839[69]
  i1838.m_isCullingEnabled = !!i1839[70]
  i1838.m_horizontalMapping = i1839[71]
  i1838.m_verticalMapping = i1839[72]
  i1838.m_uvLineOffset = i1839[73]
  i1838.m_geometrySortingOrder = i1839[74]
  i1838.m_IsTextObjectScaleStatic = !!i1839[75]
  i1838.m_VertexBufferAutoSizeReduction = !!i1839[76]
  i1838.m_useMaxVisibleDescender = !!i1839[77]
  i1838.m_pageToDisplay = i1839[78]
  i1838.m_margin = new pc.Vec4( i1839[79], i1839[80], i1839[81], i1839[82] )
  i1838.m_isUsingLegacyAnimationComponent = !!i1839[83]
  i1838.m_isVolumetricText = !!i1839[84]
  request.r(i1839[85], i1839[86], 0, i1838, 'm_Material')
  i1838.m_Maskable = !!i1839[87]
  i1838.m_Color = new pc.Color(i1839[88], i1839[89], i1839[90], i1839[91])
  i1838.m_RaycastTarget = !!i1839[92]
  i1838.m_RaycastPadding = new pc.Vec4( i1839[93], i1839[94], i1839[95], i1839[96] )
  return i1838
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1846 = root || request.c( 'TMPro.VertexGradient' )
  var i1847 = data
  i1846.topLeft = new pc.Color(i1847[0], i1847[1], i1847[2], i1847[3])
  i1846.topRight = new pc.Color(i1847[4], i1847[5], i1847[6], i1847[7])
  i1846.bottomLeft = new pc.Color(i1847[8], i1847[9], i1847[10], i1847[11])
  i1846.bottomRight = new pc.Color(i1847[12], i1847[13], i1847[14], i1847[15])
  return i1846
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i1848 = root || request.c( 'PeopleContainer' )
  var i1849 = data
  var i1851 = i1849[0]
  var i1850 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1851.length; i += 2) {
  request.r(i1851[i + 0], i1851[i + 1], 1, i1850, '')
  }
  i1848.CurrentPeoples = i1850
  var i1853 = i1849[1]
  var i1852 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1853.length; i += 2) {
  request.r(i1853[i + 0], i1853[i + 1], 1, i1852, '')
  }
  i1848._peoples = i1852
  request.r(i1849[2], i1849[3], 0, i1848, '_tutorialPeople')
  request.r(i1849[4], i1849[5], 0, i1848, '_spawnPoint')
  request.r(i1849[6], i1849[7], 0, i1848, '_point1')
  request.r(i1849[8], i1849[9], 0, i1848, '_point2')
  request.r(i1849[10], i1849[11], 0, i1848, '_endPoint')
  request.r(i1849[12], i1849[13], 0, i1848, '_juiceConfig')
  request.r(i1849[14], i1849[15], 0, i1848, '_tutorial')
  return i1848
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1857 = data
  i1856.m_HorizontalFit = i1857[0]
  i1856.m_VerticalFit = i1857[1]
  return i1856
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1858 = root || request.c( 'UnityEngine.UI.Button' )
  var i1859 = data
  i1858.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1859[0], i1858.m_OnClick)
  i1858.m_Navigation = request.d('UnityEngine.UI.Navigation', i1859[1], i1858.m_Navigation)
  i1858.m_Transition = i1859[2]
  i1858.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1859[3], i1858.m_Colors)
  i1858.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1859[4], i1858.m_SpriteState)
  i1858.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1859[5], i1858.m_AnimationTriggers)
  i1858.m_Interactable = !!i1859[6]
  request.r(i1859[7], i1859[8], 0, i1858, 'm_TargetGraphic')
  return i1858
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1860 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1861 = data
  i1860.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1861[0], i1860.m_PersistentCalls)
  return i1860
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1862 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1863 = data
  var i1865 = i1863[0]
  var i1864 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.add(request.d('UnityEngine.Events.PersistentCall', i1865[i + 0]));
  }
  i1862.m_Calls = i1864
  return i1862
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1869 = data
  request.r(i1869[0], i1869[1], 0, i1868, 'm_Target')
  i1868.m_TargetAssemblyTypeName = i1869[2]
  i1868.m_MethodName = i1869[3]
  i1868.m_Mode = i1869[4]
  i1868.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1869[5], i1868.m_Arguments)
  i1868.m_CallState = i1869[6]
  return i1868
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1870 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1871 = data
  i1870.m_Mode = i1871[0]
  i1870.m_WrapAround = !!i1871[1]
  request.r(i1871[2], i1871[3], 0, i1870, 'm_SelectOnUp')
  request.r(i1871[4], i1871[5], 0, i1870, 'm_SelectOnDown')
  request.r(i1871[6], i1871[7], 0, i1870, 'm_SelectOnLeft')
  request.r(i1871[8], i1871[9], 0, i1870, 'm_SelectOnRight')
  return i1870
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1873 = data
  i1872.m_NormalColor = new pc.Color(i1873[0], i1873[1], i1873[2], i1873[3])
  i1872.m_HighlightedColor = new pc.Color(i1873[4], i1873[5], i1873[6], i1873[7])
  i1872.m_PressedColor = new pc.Color(i1873[8], i1873[9], i1873[10], i1873[11])
  i1872.m_SelectedColor = new pc.Color(i1873[12], i1873[13], i1873[14], i1873[15])
  i1872.m_DisabledColor = new pc.Color(i1873[16], i1873[17], i1873[18], i1873[19])
  i1872.m_ColorMultiplier = i1873[20]
  i1872.m_FadeDuration = i1873[21]
  return i1872
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1874 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1875 = data
  request.r(i1875[0], i1875[1], 0, i1874, 'm_HighlightedSprite')
  request.r(i1875[2], i1875[3], 0, i1874, 'm_PressedSprite')
  request.r(i1875[4], i1875[5], 0, i1874, 'm_SelectedSprite')
  request.r(i1875[6], i1875[7], 0, i1874, 'm_DisabledSprite')
  return i1874
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1876 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1877 = data
  i1876.m_NormalTrigger = i1877[0]
  i1876.m_HighlightedTrigger = i1877[1]
  i1876.m_PressedTrigger = i1877[2]
  i1876.m_SelectedTrigger = i1877[3]
  i1876.m_DisabledTrigger = i1877[4]
  return i1876
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1878 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1879 = data
  request.r(i1879[0], i1879[1], 0, i1878, 'm_ObjectArgument')
  i1878.m_ObjectArgumentAssemblyTypeName = i1879[2]
  i1878.m_IntArgument = i1879[3]
  i1878.m_FloatArgument = i1879[4]
  i1878.m_StringArgument = i1879[5]
  i1878.m_BoolArgument = !!i1879[6]
  return i1878
}

Deserializers["BackImage"] = function (request, data, root) {
  var i1880 = root || request.c( 'BackImage' )
  var i1881 = data
  return i1880
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i1882 = root || request.c( 'AheadImage' )
  var i1883 = data
  return i1882
}

Deserializers["Order"] = function (request, data, root) {
  var i1884 = root || request.c( 'Order' )
  var i1885 = data
  request.r(i1885[0], i1885[1], 0, i1884, '_juiceAnimator')
  request.r(i1885[2], i1885[3], 0, i1884, '_cupAnimator')
  request.r(i1885[4], i1885[5], 0, i1884, '_canvasAnimator')
  i1884.CupType = i1885[6]
  i1884.JuiceType = i1885[7]
  i1884.AdditiveType1 = i1885[8]
  i1884.AdditiveType2 = i1885[9]
  i1884.IsFree = !!i1885[10]
  i1884.IsSpriteReady = !!i1885[11]
  i1884.IsCupReady = !!i1885[12]
  i1884.IsJuiceReady = !!i1885[13]
  i1884.IsPouring = !!i1885[14]
  request.r(i1885[15], i1885[16], 0, i1884, '_iceButton')
  request.r(i1885[17], i1885[18], 0, i1884, '_grassButton')
  request.r(i1885[19], i1885[20], 0, i1884, '_juiceBallsButton')
  request.r(i1885[21], i1885[22], 0, i1884, '_strawButton')
  request.r(i1885[23], i1885[24], 0, i1884, '_bigCupButton')
  request.r(i1885[25], i1885[26], 0, i1884, '_middleCupButton')
  request.r(i1885[27], i1885[28], 0, i1884, '_smallCupButton')
  request.r(i1885[29], i1885[30], 0, i1884, '_appleButton')
  request.r(i1885[31], i1885[32], 0, i1884, '_orangeButton')
  request.r(i1885[33], i1885[34], 0, i1884, '_multifruitButton')
  request.r(i1885[35], i1885[36], 0, i1884, '_tomatoButton')
  request.r(i1885[37], i1885[38], 0, i1884, '_cherryButton')
  request.r(i1885[39], i1885[40], 0, i1884, '_smallRawJuiceImage')
  request.r(i1885[41], i1885[42], 0, i1884, '_middleRawJuiceImage')
  request.r(i1885[43], i1885[44], 0, i1884, '_bigRawJuiceImage')
  request.r(i1885[45], i1885[46], 0, i1884, '_smallReadyJuiceImage')
  request.r(i1885[47], i1885[48], 0, i1884, '_middleReadyJuiceImage')
  request.r(i1885[49], i1885[50], 0, i1884, '_bigReadyJuiceImage')
  request.r(i1885[51], i1885[52], 0, i1884, '_backImage')
  request.r(i1885[53], i1885[54], 0, i1884, '_aheadImage')
  request.r(i1885[55], i1885[56], 0, i1884, '_config')
  request.r(i1885[57], i1885[58], 0, i1884, '_takeOrderButton')
  request.r(i1885[59], i1885[60], 0, i1884, '_peopleContainer')
  request.r(i1885[61], i1885[62], 0, i1884, '_tutorial')
  request.r(i1885[63], i1885[64], 0, i1884, '_bText')
  request.r(i1885[65], i1885[66], 0, i1884, '_mText')
  request.r(i1885[67], i1885[68], 0, i1884, '_sText')
  request.r(i1885[69], i1885[70], 0, i1884, '_garbageButton')
  request.r(i1885[71], i1885[72], 0, i1884, '_clickSound')
  request.r(i1885[73], i1885[74], 0, i1884, '_juiceSound')
  return i1884
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i1886 = root || request.c( 'Tutorial' )
  var i1887 = data
  i1886.IsTutorial = !!i1887[0]
  request.r(i1887[1], i1887[2], 0, i1886, 'Finger1')
  request.r(i1887[3], i1887[4], 0, i1886, 'Finger2')
  request.r(i1887[5], i1887[6], 0, i1886, 'Finger3')
  request.r(i1887[7], i1887[8], 0, i1886, 'Finger4')
  request.r(i1887[9], i1887[10], 0, i1886, 'Finger5')
  request.r(i1887[11], i1887[12], 0, i1886, 'BuyBigCupFinger')
  request.r(i1887[13], i1887[14], 0, i1886, 'BuyJuiceFinger')
  request.r(i1887[15], i1887[16], 0, i1886, 'SmallCupButton')
  request.r(i1887[17], i1887[18], 0, i1886, 'JuiceButton')
  request.r(i1887[19], i1887[20], 0, i1886, 'StrawButton')
  request.r(i1887[21], i1887[22], 0, i1886, 'AdditiveButton')
  request.r(i1887[23], i1887[24], 0, i1886, 'ReadyButton')
  var i1889 = i1887[25]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 2) {
  request.r(i1889[i + 0], i1889[i + 1], 2, i1888, '')
  }
  i1886.Buttons = i1888
  request.r(i1887[26], i1887[27], 0, i1886, 'Bank')
  return i1886
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i1892 = root || request.c( 'SoundSwitcher' )
  var i1893 = data
  request.r(i1893[0], i1893[1], 0, i1892, '_onImage')
  request.r(i1893[2], i1893[3], 0, i1892, '_offImage')
  return i1892
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1894 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1895 = data
  request.r(i1895[0], i1895[1], 0, i1894, 'm_FirstSelected')
  i1894.m_sendNavigationEvents = !!i1895[2]
  i1894.m_DragThreshold = i1895[3]
  return i1894
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1896 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1897 = data
  i1896.m_HorizontalAxis = i1897[0]
  i1896.m_VerticalAxis = i1897[1]
  i1896.m_SubmitButton = i1897[2]
  i1896.m_CancelButton = i1897[3]
  i1896.m_InputActionsPerSecond = i1897[4]
  i1896.m_RepeatDelay = i1897[5]
  i1896.m_ForceModuleActive = !!i1897[6]
  i1896.m_SendPointerHoverToParent = !!i1897[7]
  return i1896
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i1898 = root || request.c( 'JuiceConfig' )
  var i1899 = data
  request.r(i1899[0], i1899[1], 0, i1898, 'EntityBigCup')
  request.r(i1899[2], i1899[3], 0, i1898, 'TomatoBigCup')
  request.r(i1899[4], i1899[5], 0, i1898, 'AppleBigCup')
  request.r(i1899[6], i1899[7], 0, i1898, 'OrangeBigCup')
  request.r(i1899[8], i1899[9], 0, i1898, 'CherryBigCup')
  request.r(i1899[10], i1899[11], 0, i1898, 'MultifruitBigCup')
  request.r(i1899[12], i1899[13], 0, i1898, 'TomatoBigStrawCup')
  request.r(i1899[14], i1899[15], 0, i1898, 'MultifruitBigStrawCup')
  request.r(i1899[16], i1899[17], 0, i1898, 'AppleBigStrawCup')
  request.r(i1899[18], i1899[19], 0, i1898, 'OrangeBigStrawCup')
  request.r(i1899[20], i1899[21], 0, i1898, 'CherryBigStrawCup')
  request.r(i1899[22], i1899[23], 0, i1898, 'MultifruitBigBallsCup')
  request.r(i1899[24], i1899[25], 0, i1898, 'TomatoBigBallsCup')
  request.r(i1899[26], i1899[27], 0, i1898, 'AppleBigBallsCup')
  request.r(i1899[28], i1899[29], 0, i1898, 'OrangeBigBallsCup')
  request.r(i1899[30], i1899[31], 0, i1898, 'CherryBigBallsCup')
  request.r(i1899[32], i1899[33], 0, i1898, 'EntityMiddleCup')
  request.r(i1899[34], i1899[35], 0, i1898, 'TomatoMiddleCup')
  request.r(i1899[36], i1899[37], 0, i1898, 'AppleMiddleCup')
  request.r(i1899[38], i1899[39], 0, i1898, 'OrangeMiddleCup')
  request.r(i1899[40], i1899[41], 0, i1898, 'CherryMiddleCup')
  request.r(i1899[42], i1899[43], 0, i1898, 'MultifruitMiddleCup')
  request.r(i1899[44], i1899[45], 0, i1898, 'TomatoMiddleStrawCup')
  request.r(i1899[46], i1899[47], 0, i1898, 'MultifruitMiddleStrawCup')
  request.r(i1899[48], i1899[49], 0, i1898, 'AppleMiddleStrawCup')
  request.r(i1899[50], i1899[51], 0, i1898, 'OrangeMiddleStrawCup')
  request.r(i1899[52], i1899[53], 0, i1898, 'CherryMiddleStrawCup')
  request.r(i1899[54], i1899[55], 0, i1898, 'MultifruitMiddleBallsCup')
  request.r(i1899[56], i1899[57], 0, i1898, 'TomatoMiddleBallsCup')
  request.r(i1899[58], i1899[59], 0, i1898, 'AppleMiddleBallsCup')
  request.r(i1899[60], i1899[61], 0, i1898, 'OrangeMiddleBallsCup')
  request.r(i1899[62], i1899[63], 0, i1898, 'CherryMiddleBallsCup')
  request.r(i1899[64], i1899[65], 0, i1898, 'EntitySmallCup')
  request.r(i1899[66], i1899[67], 0, i1898, 'TomatoSmallCup')
  request.r(i1899[68], i1899[69], 0, i1898, 'AppleSmallCup')
  request.r(i1899[70], i1899[71], 0, i1898, 'OrangeSmallCup')
  request.r(i1899[72], i1899[73], 0, i1898, 'CherrySmallCup')
  request.r(i1899[74], i1899[75], 0, i1898, 'MultifruitSmallCup')
  request.r(i1899[76], i1899[77], 0, i1898, 'TomatoSmallStrawCup')
  request.r(i1899[78], i1899[79], 0, i1898, 'AppleSmallStrawCup')
  request.r(i1899[80], i1899[81], 0, i1898, 'OrangeSmallStrawCup')
  request.r(i1899[82], i1899[83], 0, i1898, 'CherrySmallStrawCup')
  request.r(i1899[84], i1899[85], 0, i1898, 'MultifruitSmallStrawCup')
  request.r(i1899[86], i1899[87], 0, i1898, 'AppleSmallBallsCup')
  request.r(i1899[88], i1899[89], 0, i1898, 'TomatoSmallBallsCup')
  request.r(i1899[90], i1899[91], 0, i1898, 'OrangeSmallBallsCup')
  request.r(i1899[92], i1899[93], 0, i1898, 'CherrySmallBallsCup')
  request.r(i1899[94], i1899[95], 0, i1898, 'MultifruitSmallBallsCup')
  request.r(i1899[96], i1899[97], 0, i1898, 'JuiceBallAdditive')
  request.r(i1899[98], i1899[99], 0, i1898, 'IceAdditive')
  request.r(i1899[100], i1899[101], 0, i1898, 'GrassAdditive')
  return i1898
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i1900 = root || request.c( 'TouchIdleTimer' )
  var i1901 = data
  return i1900
}

Deserializers["Helper"] = function (request, data, root) {
  var i1902 = root || request.c( 'Helper' )
  var i1903 = data
  request.r(i1903[0], i1903[1], 0, i1902, '_smallCupFinger')
  request.r(i1903[2], i1903[3], 0, i1902, '_middleCupFinger')
  request.r(i1903[4], i1903[5], 0, i1902, '_bigCupFinger')
  request.r(i1903[6], i1903[7], 0, i1902, '_iceFinger')
  request.r(i1903[8], i1903[9], 0, i1902, '_grassFinger')
  request.r(i1903[10], i1903[11], 0, i1902, '_juiceballFinger')
  request.r(i1903[12], i1903[13], 0, i1902, '_appleFinger')
  request.r(i1903[14], i1903[15], 0, i1902, '_cherryFinger')
  request.r(i1903[16], i1903[17], 0, i1902, '_orangeFinger')
  request.r(i1903[18], i1903[19], 0, i1902, '_multifruitFinger')
  request.r(i1903[20], i1903[21], 0, i1902, '_tomatoFinger')
  request.r(i1903[22], i1903[23], 0, i1902, '_strawFinger')
  request.r(i1903[24], i1903[25], 0, i1902, '_readyFinger')
  request.r(i1903[26], i1903[27], 0, i1902, '_peoples')
  request.r(i1903[28], i1903[29], 0, i1902, '_tutorial')
  request.r(i1903[30], i1903[31], 0, i1902, '_order')
  request.r(i1903[32], i1903[33], 0, i1902, '_strawButton')
  request.r(i1903[34], i1903[35], 0, i1902, '_bigCupButton')
  request.r(i1903[36], i1903[37], 0, i1902, '_middleCupButton')
  request.r(i1903[38], i1903[39], 0, i1902, '_smallCupButton')
  request.r(i1903[40], i1903[41], 0, i1902, '_readyButton')
  request.r(i1903[42], i1903[43], 0, i1902, '_touchIdleTimer')
  request.r(i1903[44], i1903[45], 0, i1902, '_finalScreen')
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1905 = data
  i1904.ambientIntensity = i1905[0]
  i1904.reflectionIntensity = i1905[1]
  i1904.ambientMode = i1905[2]
  i1904.ambientLight = new pc.Color(i1905[3], i1905[4], i1905[5], i1905[6])
  i1904.ambientSkyColor = new pc.Color(i1905[7], i1905[8], i1905[9], i1905[10])
  i1904.ambientGroundColor = new pc.Color(i1905[11], i1905[12], i1905[13], i1905[14])
  i1904.ambientEquatorColor = new pc.Color(i1905[15], i1905[16], i1905[17], i1905[18])
  i1904.fogColor = new pc.Color(i1905[19], i1905[20], i1905[21], i1905[22])
  i1904.fogEndDistance = i1905[23]
  i1904.fogStartDistance = i1905[24]
  i1904.fogDensity = i1905[25]
  i1904.fog = !!i1905[26]
  request.r(i1905[27], i1905[28], 0, i1904, 'skybox')
  i1904.fogMode = i1905[29]
  var i1907 = i1905[30]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1907[i + 0]) );
  }
  i1904.lightmaps = i1906
  i1904.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1905[31], i1904.lightProbes)
  i1904.lightmapsMode = i1905[32]
  i1904.mixedBakeMode = i1905[33]
  i1904.environmentLightingMode = i1905[34]
  i1904.ambientProbe = new pc.SphericalHarmonicsL2(i1905[35])
  i1904.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1905[36])
  i1904.useReferenceAmbientProbe = !!i1905[37]
  request.r(i1905[38], i1905[39], 0, i1904, 'customReflection')
  request.r(i1905[40], i1905[41], 0, i1904, 'defaultReflection')
  i1904.defaultReflectionMode = i1905[42]
  i1904.defaultReflectionResolution = i1905[43]
  i1904.sunLightObjectId = i1905[44]
  i1904.pixelLightCount = i1905[45]
  i1904.defaultReflectionHDR = !!i1905[46]
  i1904.hasLightDataAsset = !!i1905[47]
  i1904.hasManualGenerate = !!i1905[48]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1911 = data
  request.r(i1911[0], i1911[1], 0, i1910, 'lightmapColor')
  request.r(i1911[2], i1911[3], 0, i1910, 'lightmapDirection')
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1912 = root || new UnityEngine.LightProbes()
  var i1913 = data
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1921 = data
  var i1923 = i1921[0]
  var i1922 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1923[i + 0]));
  }
  i1920.ShaderCompilationErrors = i1922
  i1920.name = i1921[1]
  i1920.guid = i1921[2]
  var i1925 = i1921[3]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( i1925[i + 0] );
  }
  i1920.shaderDefinedKeywords = i1924
  var i1927 = i1921[4]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1927[i + 0]) );
  }
  i1920.passes = i1926
  var i1929 = i1921[5]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 1) {
    i1928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1929[i + 0]) );
  }
  i1920.usePasses = i1928
  var i1931 = i1921[6]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1931[i + 0]) );
  }
  i1920.defaultParameterValues = i1930
  request.r(i1921[7], i1921[8], 0, i1920, 'unityFallbackShader')
  i1920.readDepth = !!i1921[9]
  i1920.isCreatedByShaderGraph = !!i1921[10]
  i1920.compiled = !!i1921[11]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1935 = data
  i1934.shaderName = i1935[0]
  i1934.errorMessage = i1935[1]
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1940 = root || new pc.UnityShaderPass()
  var i1941 = data
  i1940.id = i1941[0]
  i1940.subShaderIndex = i1941[1]
  i1940.name = i1941[2]
  i1940.passType = i1941[3]
  i1940.grabPassTextureName = i1941[4]
  i1940.usePass = !!i1941[5]
  i1940.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[6], i1940.zTest)
  i1940.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[7], i1940.zWrite)
  i1940.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[8], i1940.culling)
  i1940.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1941[9], i1940.blending)
  i1940.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1941[10], i1940.alphaBlending)
  i1940.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[11], i1940.colorWriteMask)
  i1940.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[12], i1940.offsetUnits)
  i1940.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[13], i1940.offsetFactor)
  i1940.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[14], i1940.stencilRef)
  i1940.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[15], i1940.stencilReadMask)
  i1940.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[16], i1940.stencilWriteMask)
  i1940.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1941[17], i1940.stencilOp)
  i1940.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1941[18], i1940.stencilOpFront)
  i1940.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1941[19], i1940.stencilOpBack)
  var i1943 = i1941[20]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1943[i + 0]) );
  }
  i1940.tags = i1942
  var i1945 = i1941[21]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( i1945[i + 0] );
  }
  i1940.passDefinedKeywords = i1944
  var i1947 = i1941[22]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1947[i + 0]) );
  }
  i1940.passDefinedKeywordGroups = i1946
  var i1949 = i1941[23]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1949[i + 0]) );
  }
  i1940.variants = i1948
  var i1951 = i1941[24]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1951[i + 0]) );
  }
  i1940.excludedVariants = i1950
  i1940.hasDepthReader = !!i1941[25]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1953 = data
  i1952.val = i1953[0]
  i1952.name = i1953[1]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1955 = data
  i1954.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1955[0], i1954.src)
  i1954.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1955[1], i1954.dst)
  i1954.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1955[2], i1954.op)
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1957 = data
  i1956.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[0], i1956.pass)
  i1956.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[1], i1956.fail)
  i1956.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[2], i1956.zFail)
  i1956.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[3], i1956.comp)
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1961 = data
  i1960.name = i1961[0]
  i1960.value = i1961[1]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1965 = data
  var i1967 = i1965[0]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( i1967[i + 0] );
  }
  i1964.keywords = i1966
  i1964.hasDiscard = !!i1965[1]
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1971 = data
  i1970.passId = i1971[0]
  i1970.subShaderIndex = i1971[1]
  var i1973 = i1971[2]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( i1973[i + 0] );
  }
  i1970.keywords = i1972
  i1970.vertexProgram = i1971[3]
  i1970.fragmentProgram = i1971[4]
  i1970.exportedForWebGl2 = !!i1971[5]
  i1970.readDepth = !!i1971[6]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1977 = data
  request.r(i1977[0], i1977[1], 0, i1976, 'shader')
  i1976.pass = i1977[2]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1981 = data
  i1980.name = i1981[0]
  i1980.type = i1981[1]
  i1980.value = new pc.Vec4( i1981[2], i1981[3], i1981[4], i1981[5] )
  i1980.textureValue = i1981[6]
  i1980.shaderPropertyFlag = i1981[7]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1983 = data
  i1982.name = i1983[0]
  request.r(i1983[1], i1983[2], 0, i1982, 'texture')
  i1982.aabb = i1983[3]
  i1982.vertices = i1983[4]
  i1982.triangles = i1983[5]
  i1982.textureRect = UnityEngine.Rect.MinMaxRect(i1983[6], i1983[7], i1983[8], i1983[9])
  i1982.packedRect = UnityEngine.Rect.MinMaxRect(i1983[10], i1983[11], i1983[12], i1983[13])
  i1982.border = new pc.Vec4( i1983[14], i1983[15], i1983[16], i1983[17] )
  i1982.transparency = i1983[18]
  i1982.bounds = i1983[19]
  i1982.pixelsPerUnit = i1983[20]
  i1982.textureWidth = i1983[21]
  i1982.textureHeight = i1983[22]
  i1982.nativeSize = new pc.Vec2( i1983[23], i1983[24] )
  i1982.pivot = new pc.Vec2( i1983[25], i1983[26] )
  i1982.textureRectOffset = new pc.Vec2( i1983[27], i1983[28] )
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1985 = data
  i1984.name = i1985[0]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1987 = data
  i1986.name = i1987[0]
  i1986.wrapMode = i1987[1]
  i1986.isLooping = !!i1987[2]
  i1986.length = i1987[3]
  var i1989 = i1987[4]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1989[i + 0]) );
  }
  i1986.curves = i1988
  var i1991 = i1987[5]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1991[i + 0]) );
  }
  i1986.events = i1990
  i1986.halfPrecision = !!i1987[6]
  i1986._frameRate = i1987[7]
  i1986.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1987[8], i1986.localBounds)
  i1986.hasMuscleCurves = !!i1987[9]
  var i1993 = i1987[10]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.push( i1993[i + 0] );
  }
  i1986.clipMuscleConstant = i1992
  i1986.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1987[11], i1986.clipBindingConstant)
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1997 = data
  i1996.path = i1997[0]
  i1996.hash = i1997[1]
  i1996.componentType = i1997[2]
  i1996.property = i1997[3]
  i1996.keys = i1997[4]
  var i1999 = i1997[5]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1999[i + 0]) );
  }
  i1996.objectReferenceKeys = i1998
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2003 = data
  i2002.time = i2003[0]
  request.r(i2003[1], i2003[2], 0, i2002, 'value')
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2007 = data
  i2006.functionName = i2007[0]
  i2006.floatParameter = i2007[1]
  i2006.intParameter = i2007[2]
  i2006.stringParameter = i2007[3]
  request.r(i2007[4], i2007[5], 0, i2006, 'objectReferenceParameter')
  i2006.time = i2007[6]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2009 = data
  i2008.center = new pc.Vec3( i2009[0], i2009[1], i2009[2] )
  i2008.extends = new pc.Vec3( i2009[3], i2009[4], i2009[5] )
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2013 = data
  var i2015 = i2013[0]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( i2015[i + 0] );
  }
  i2012.genericBindings = i2014
  var i2017 = i2013[1]
  var i2016 = []
  for(var i = 0; i < i2017.length; i += 1) {
    i2016.push( i2017[i + 0] );
  }
  i2012.pptrCurveMapping = i2016
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2019 = data
  i2018.name = i2019[0]
  i2018.ascent = i2019[1]
  i2018.originalLineHeight = i2019[2]
  i2018.fontSize = i2019[3]
  var i2021 = i2019[4]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2021[i + 0]) );
  }
  i2018.characterInfo = i2020
  request.r(i2019[5], i2019[6], 0, i2018, 'texture')
  i2018.originalFontSize = i2019[7]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2025 = data
  i2024.index = i2025[0]
  i2024.advance = i2025[1]
  i2024.bearing = i2025[2]
  i2024.glyphWidth = i2025[3]
  i2024.glyphHeight = i2025[4]
  i2024.minX = i2025[5]
  i2024.maxX = i2025[6]
  i2024.minY = i2025[7]
  i2024.maxY = i2025[8]
  i2024.uvBottomLeftX = i2025[9]
  i2024.uvBottomLeftY = i2025[10]
  i2024.uvBottomRightX = i2025[11]
  i2024.uvBottomRightY = i2025[12]
  i2024.uvTopLeftX = i2025[13]
  i2024.uvTopLeftY = i2025[14]
  i2024.uvTopRightX = i2025[15]
  i2024.uvTopRightY = i2025[16]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2027 = data
  i2026.name = i2027[0]
  var i2029 = i2027[1]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2029[i + 0]) );
  }
  i2026.layers = i2028
  var i2031 = i2027[2]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2031[i + 0]) );
  }
  i2026.parameters = i2030
  i2026.animationClips = i2027[3]
  i2026.avatarUnsupported = i2027[4]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2035 = data
  i2034.name = i2035[0]
  i2034.defaultWeight = i2035[1]
  i2034.blendingMode = i2035[2]
  i2034.avatarMask = i2035[3]
  i2034.syncedLayerIndex = i2035[4]
  i2034.syncedLayerAffectsTiming = !!i2035[5]
  i2034.syncedLayers = i2035[6]
  i2034.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2035[7], i2034.stateMachine)
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2037 = data
  i2036.id = i2037[0]
  i2036.name = i2037[1]
  i2036.path = i2037[2]
  var i2039 = i2037[3]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2039[i + 0]) );
  }
  i2036.states = i2038
  var i2041 = i2037[4]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2041[i + 0]) );
  }
  i2036.machines = i2040
  var i2043 = i2037[5]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2043[i + 0]) );
  }
  i2036.entryStateTransitions = i2042
  var i2045 = i2037[6]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2045[i + 0]) );
  }
  i2036.exitStateTransitions = i2044
  var i2047 = i2037[7]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2047[i + 0]) );
  }
  i2036.anyStateTransitions = i2046
  i2036.defaultStateId = i2037[8]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2051 = data
  i2050.id = i2051[0]
  i2050.name = i2051[1]
  i2050.cycleOffset = i2051[2]
  i2050.cycleOffsetParameter = i2051[3]
  i2050.cycleOffsetParameterActive = !!i2051[4]
  i2050.mirror = !!i2051[5]
  i2050.mirrorParameter = i2051[6]
  i2050.mirrorParameterActive = !!i2051[7]
  i2050.motionId = i2051[8]
  i2050.nameHash = i2051[9]
  i2050.fullPathHash = i2051[10]
  i2050.speed = i2051[11]
  i2050.speedParameter = i2051[12]
  i2050.speedParameterActive = !!i2051[13]
  i2050.tag = i2051[14]
  i2050.tagHash = i2051[15]
  i2050.writeDefaultValues = !!i2051[16]
  var i2053 = i2051[17]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 2) {
  request.r(i2053[i + 0], i2053[i + 1], 2, i2052, '')
  }
  i2050.behaviours = i2052
  var i2055 = i2051[18]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2055[i + 0]) );
  }
  i2050.transitions = i2054
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2061 = data
  i2060.fullPath = i2061[0]
  i2060.canTransitionToSelf = !!i2061[1]
  i2060.duration = i2061[2]
  i2060.exitTime = i2061[3]
  i2060.hasExitTime = !!i2061[4]
  i2060.hasFixedDuration = !!i2061[5]
  i2060.interruptionSource = i2061[6]
  i2060.offset = i2061[7]
  i2060.orderedInterruption = !!i2061[8]
  i2060.destinationStateId = i2061[9]
  i2060.isExit = !!i2061[10]
  i2060.mute = !!i2061[11]
  i2060.solo = !!i2061[12]
  var i2063 = i2061[13]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2063[i + 0]) );
  }
  i2060.conditions = i2062
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2069 = data
  i2068.destinationStateId = i2069[0]
  i2068.isExit = !!i2069[1]
  i2068.mute = !!i2069[2]
  i2068.solo = !!i2069[3]
  var i2071 = i2069[4]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2071[i + 0]) );
  }
  i2068.conditions = i2070
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2075 = data
  i2074.mode = i2075[0]
  i2074.parameter = i2075[1]
  i2074.threshold = i2075[2]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2079 = data
  i2078.defaultBool = !!i2079[0]
  i2078.defaultFloat = i2079[1]
  i2078.defaultInt = i2079[2]
  i2078.name = i2079[3]
  i2078.nameHash = i2079[4]
  i2078.type = i2079[5]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2081 = data
  i2080.name = i2081[0]
  i2080.bytes64 = i2081[1]
  i2080.data = i2081[2]
  return i2080
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2082 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2083 = data
  i2082.hashCode = i2083[0]
  request.r(i2083[1], i2083[2], 0, i2082, 'material')
  i2082.materialHashCode = i2083[3]
  request.r(i2083[4], i2083[5], 0, i2082, 'atlas')
  i2082.normalStyle = i2083[6]
  i2082.normalSpacingOffset = i2083[7]
  i2082.boldStyle = i2083[8]
  i2082.boldSpacing = i2083[9]
  i2082.italicStyle = i2083[10]
  i2082.tabSize = i2083[11]
  i2082.m_Version = i2083[12]
  i2082.m_SourceFontFileGUID = i2083[13]
  request.r(i2083[14], i2083[15], 0, i2082, 'm_SourceFontFile_EditorRef')
  request.r(i2083[16], i2083[17], 0, i2082, 'm_SourceFontFile')
  i2082.m_AtlasPopulationMode = i2083[18]
  i2082.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2083[19], i2082.m_FaceInfo)
  var i2085 = i2083[20]
  var i2084 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.add(request.d('UnityEngine.TextCore.Glyph', i2085[i + 0]));
  }
  i2082.m_GlyphTable = i2084
  var i2087 = i2083[21]
  var i2086 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.add(request.d('TMPro.TMP_Character', i2087[i + 0]));
  }
  i2082.m_CharacterTable = i2086
  var i2089 = i2083[22]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 2) {
  request.r(i2089[i + 0], i2089[i + 1], 2, i2088, '')
  }
  i2082.m_AtlasTextures = i2088
  i2082.m_AtlasTextureIndex = i2083[23]
  i2082.m_IsMultiAtlasTexturesEnabled = !!i2083[24]
  i2082.m_ClearDynamicDataOnBuild = !!i2083[25]
  var i2091 = i2083[26]
  var i2090 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.add(request.d('UnityEngine.TextCore.GlyphRect', i2091[i + 0]));
  }
  i2082.m_UsedGlyphRects = i2090
  var i2093 = i2083[27]
  var i2092 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.add(request.d('UnityEngine.TextCore.GlyphRect', i2093[i + 0]));
  }
  i2082.m_FreeGlyphRects = i2092
  i2082.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2083[28], i2082.m_fontInfo)
  i2082.m_AtlasWidth = i2083[29]
  i2082.m_AtlasHeight = i2083[30]
  i2082.m_AtlasPadding = i2083[31]
  i2082.m_AtlasRenderMode = i2083[32]
  var i2095 = i2083[33]
  var i2094 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.add(request.d('TMPro.TMP_Glyph', i2095[i + 0]));
  }
  i2082.m_glyphInfoList = i2094
  i2082.m_KerningTable = request.d('TMPro.KerningTable', i2083[34], i2082.m_KerningTable)
  i2082.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2083[35], i2082.m_FontFeatureTable)
  var i2097 = i2083[36]
  var i2096 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2097.length; i += 2) {
  request.r(i2097[i + 0], i2097[i + 1], 1, i2096, '')
  }
  i2082.fallbackFontAssets = i2096
  var i2099 = i2083[37]
  var i2098 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2099.length; i += 2) {
  request.r(i2099[i + 0], i2099[i + 1], 1, i2098, '')
  }
  i2082.m_FallbackFontAssetTable = i2098
  i2082.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2083[38], i2082.m_CreationSettings)
  var i2101 = i2083[39]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('TMPro.TMP_FontWeightPair', i2101[i + 0]) );
  }
  i2082.m_FontWeightTable = i2100
  var i2103 = i2083[40]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('TMPro.TMP_FontWeightPair', i2103[i + 0]) );
  }
  i2082.fontWeights = i2102
  return i2082
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2104 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2105 = data
  i2104.m_FaceIndex = i2105[0]
  i2104.m_FamilyName = i2105[1]
  i2104.m_StyleName = i2105[2]
  i2104.m_PointSize = i2105[3]
  i2104.m_Scale = i2105[4]
  i2104.m_UnitsPerEM = i2105[5]
  i2104.m_LineHeight = i2105[6]
  i2104.m_AscentLine = i2105[7]
  i2104.m_CapLine = i2105[8]
  i2104.m_MeanLine = i2105[9]
  i2104.m_Baseline = i2105[10]
  i2104.m_DescentLine = i2105[11]
  i2104.m_SuperscriptOffset = i2105[12]
  i2104.m_SuperscriptSize = i2105[13]
  i2104.m_SubscriptOffset = i2105[14]
  i2104.m_SubscriptSize = i2105[15]
  i2104.m_UnderlineOffset = i2105[16]
  i2104.m_UnderlineThickness = i2105[17]
  i2104.m_StrikethroughOffset = i2105[18]
  i2104.m_StrikethroughThickness = i2105[19]
  i2104.m_TabWidth = i2105[20]
  return i2104
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2108 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2109 = data
  i2108.m_Index = i2109[0]
  i2108.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2109[1], i2108.m_Metrics)
  i2108.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2109[2], i2108.m_GlyphRect)
  i2108.m_Scale = i2109[3]
  i2108.m_AtlasIndex = i2109[4]
  i2108.m_ClassDefinitionType = i2109[5]
  return i2108
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2110 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2111 = data
  i2110.m_Width = i2111[0]
  i2110.m_Height = i2111[1]
  i2110.m_HorizontalBearingX = i2111[2]
  i2110.m_HorizontalBearingY = i2111[3]
  i2110.m_HorizontalAdvance = i2111[4]
  return i2110
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2112 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2113 = data
  i2112.m_X = i2113[0]
  i2112.m_Y = i2113[1]
  i2112.m_Width = i2113[2]
  i2112.m_Height = i2113[3]
  return i2112
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2116 = root || request.c( 'TMPro.TMP_Character' )
  var i2117 = data
  i2116.m_ElementType = i2117[0]
  i2116.m_Unicode = i2117[1]
  i2116.m_GlyphIndex = i2117[2]
  i2116.m_Scale = i2117[3]
  return i2116
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2122 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2123 = data
  i2122.Name = i2123[0]
  i2122.PointSize = i2123[1]
  i2122.Scale = i2123[2]
  i2122.CharacterCount = i2123[3]
  i2122.LineHeight = i2123[4]
  i2122.Baseline = i2123[5]
  i2122.Ascender = i2123[6]
  i2122.CapHeight = i2123[7]
  i2122.Descender = i2123[8]
  i2122.CenterLine = i2123[9]
  i2122.SuperscriptOffset = i2123[10]
  i2122.SubscriptOffset = i2123[11]
  i2122.SubSize = i2123[12]
  i2122.Underline = i2123[13]
  i2122.UnderlineThickness = i2123[14]
  i2122.strikethrough = i2123[15]
  i2122.strikethroughThickness = i2123[16]
  i2122.TabWidth = i2123[17]
  i2122.Padding = i2123[18]
  i2122.AtlasWidth = i2123[19]
  i2122.AtlasHeight = i2123[20]
  return i2122
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2126 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2127 = data
  i2126.id = i2127[0]
  i2126.x = i2127[1]
  i2126.y = i2127[2]
  i2126.width = i2127[3]
  i2126.height = i2127[4]
  i2126.xOffset = i2127[5]
  i2126.yOffset = i2127[6]
  i2126.xAdvance = i2127[7]
  i2126.scale = i2127[8]
  return i2126
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2128 = root || request.c( 'TMPro.KerningTable' )
  var i2129 = data
  var i2131 = i2129[0]
  var i2130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.add(request.d('TMPro.KerningPair', i2131[i + 0]));
  }
  i2128.kerningPairs = i2130
  return i2128
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2134 = root || request.c( 'TMPro.KerningPair' )
  var i2135 = data
  i2134.xOffset = i2135[0]
  i2134.m_FirstGlyph = i2135[1]
  i2134.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2135[2], i2134.m_FirstGlyphAdjustments)
  i2134.m_SecondGlyph = i2135[3]
  i2134.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2135[4], i2134.m_SecondGlyphAdjustments)
  i2134.m_IgnoreSpacingAdjustments = !!i2135[5]
  return i2134
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2136 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2137 = data
  var i2139 = i2137[0]
  var i2138 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2139[i + 0]));
  }
  i2136.m_GlyphPairAdjustmentRecords = i2138
  return i2136
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2142 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2143 = data
  i2142.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2143[0], i2142.m_FirstAdjustmentRecord)
  i2142.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2143[1], i2142.m_SecondAdjustmentRecord)
  i2142.m_FeatureLookupFlags = i2143[2]
  return i2142
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2144 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2145 = data
  i2144.m_GlyphIndex = i2145[0]
  i2144.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2145[1], i2144.m_GlyphValueRecord)
  return i2144
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2146 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2147 = data
  i2146.m_XPlacement = i2147[0]
  i2146.m_YPlacement = i2147[1]
  i2146.m_XAdvance = i2147[2]
  i2146.m_YAdvance = i2147[3]
  return i2146
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2150 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2151 = data
  i2150.sourceFontFileName = i2151[0]
  i2150.sourceFontFileGUID = i2151[1]
  i2150.pointSizeSamplingMode = i2151[2]
  i2150.pointSize = i2151[3]
  i2150.padding = i2151[4]
  i2150.packingMode = i2151[5]
  i2150.atlasWidth = i2151[6]
  i2150.atlasHeight = i2151[7]
  i2150.characterSetSelectionMode = i2151[8]
  i2150.characterSequence = i2151[9]
  i2150.referencedFontAssetGUID = i2151[10]
  i2150.referencedTextAssetGUID = i2151[11]
  i2150.fontStyle = i2151[12]
  i2150.fontStyleModifier = i2151[13]
  i2150.renderMode = i2151[14]
  i2150.includeFontFeatures = !!i2151[15]
  return i2150
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2154 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2155 = data
  request.r(i2155[0], i2155[1], 0, i2154, 'regularTypeface')
  request.r(i2155[2], i2155[3], 0, i2154, 'italicTypeface')
  return i2154
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2156 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2157 = data
  i2156.useSafeMode = !!i2157[0]
  i2156.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2157[1], i2156.safeModeOptions)
  i2156.timeScale = i2157[2]
  i2156.unscaledTimeScale = i2157[3]
  i2156.useSmoothDeltaTime = !!i2157[4]
  i2156.maxSmoothUnscaledTime = i2157[5]
  i2156.rewindCallbackMode = i2157[6]
  i2156.showUnityEditorReport = !!i2157[7]
  i2156.logBehaviour = i2157[8]
  i2156.drawGizmos = !!i2157[9]
  i2156.defaultRecyclable = !!i2157[10]
  i2156.defaultAutoPlay = i2157[11]
  i2156.defaultUpdateType = i2157[12]
  i2156.defaultTimeScaleIndependent = !!i2157[13]
  i2156.defaultEaseType = i2157[14]
  i2156.defaultEaseOvershootOrAmplitude = i2157[15]
  i2156.defaultEasePeriod = i2157[16]
  i2156.defaultAutoKill = !!i2157[17]
  i2156.defaultLoopType = i2157[18]
  i2156.debugMode = !!i2157[19]
  i2156.debugStoreTargetId = !!i2157[20]
  i2156.showPreviewPanel = !!i2157[21]
  i2156.storeSettingsLocation = i2157[22]
  i2156.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2157[23], i2156.modules)
  i2156.createASMDEF = !!i2157[24]
  i2156.showPlayingTweens = !!i2157[25]
  i2156.showPausedTweens = !!i2157[26]
  return i2156
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2158 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2159 = data
  i2158.logBehaviour = i2159[0]
  i2158.nestedTweenFailureBehaviour = i2159[1]
  return i2158
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2160 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2161 = data
  i2160.showPanel = !!i2161[0]
  i2160.audioEnabled = !!i2161[1]
  i2160.physicsEnabled = !!i2161[2]
  i2160.physics2DEnabled = !!i2161[3]
  i2160.spriteEnabled = !!i2161[4]
  i2160.uiEnabled = !!i2161[5]
  i2160.textMeshProEnabled = !!i2161[6]
  i2160.tk2DEnabled = !!i2161[7]
  i2160.deAudioEnabled = !!i2161[8]
  i2160.deUnityExtendedEnabled = !!i2161[9]
  i2160.epoOutlineEnabled = !!i2161[10]
  return i2160
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2162 = root || request.c( 'TMPro.TMP_Settings' )
  var i2163 = data
  i2162.m_enableWordWrapping = !!i2163[0]
  i2162.m_enableKerning = !!i2163[1]
  i2162.m_enableExtraPadding = !!i2163[2]
  i2162.m_enableTintAllSprites = !!i2163[3]
  i2162.m_enableParseEscapeCharacters = !!i2163[4]
  i2162.m_EnableRaycastTarget = !!i2163[5]
  i2162.m_GetFontFeaturesAtRuntime = !!i2163[6]
  i2162.m_missingGlyphCharacter = i2163[7]
  i2162.m_warningsDisabled = !!i2163[8]
  request.r(i2163[9], i2163[10], 0, i2162, 'm_defaultFontAsset')
  i2162.m_defaultFontAssetPath = i2163[11]
  i2162.m_defaultFontSize = i2163[12]
  i2162.m_defaultAutoSizeMinRatio = i2163[13]
  i2162.m_defaultAutoSizeMaxRatio = i2163[14]
  i2162.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2163[15], i2163[16] )
  i2162.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2163[17], i2163[18] )
  i2162.m_autoSizeTextContainer = !!i2163[19]
  i2162.m_IsTextObjectScaleStatic = !!i2163[20]
  var i2165 = i2163[21]
  var i2164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2165.length; i += 2) {
  request.r(i2165[i + 0], i2165[i + 1], 1, i2164, '')
  }
  i2162.m_fallbackFontAssets = i2164
  i2162.m_matchMaterialPreset = !!i2163[22]
  request.r(i2163[23], i2163[24], 0, i2162, 'm_defaultSpriteAsset')
  i2162.m_defaultSpriteAssetPath = i2163[25]
  i2162.m_enableEmojiSupport = !!i2163[26]
  i2162.m_MissingCharacterSpriteUnicode = i2163[27]
  i2162.m_defaultColorGradientPresetsPath = i2163[28]
  request.r(i2163[29], i2163[30], 0, i2162, 'm_defaultStyleSheet')
  i2162.m_StyleSheetsResourcePath = i2163[31]
  request.r(i2163[32], i2163[33], 0, i2162, 'm_leadingCharacters')
  request.r(i2163[34], i2163[35], 0, i2162, 'm_followingCharacters')
  i2162.m_UseModernHangulLineBreakingRules = !!i2163[36]
  return i2162
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2166 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2167 = data
  i2166.hashCode = i2167[0]
  request.r(i2167[1], i2167[2], 0, i2166, 'material')
  i2166.materialHashCode = i2167[3]
  request.r(i2167[4], i2167[5], 0, i2166, 'spriteSheet')
  var i2169 = i2167[6]
  var i2168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.add(request.d('TMPro.TMP_Sprite', i2169[i + 0]));
  }
  i2166.spriteInfoList = i2168
  var i2171 = i2167[7]
  var i2170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2171.length; i += 2) {
  request.r(i2171[i + 0], i2171[i + 1], 1, i2170, '')
  }
  i2166.fallbackSpriteAssets = i2170
  i2166.m_Version = i2167[8]
  i2166.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2167[9], i2166.m_FaceInfo)
  var i2173 = i2167[10]
  var i2172 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.add(request.d('TMPro.TMP_SpriteCharacter', i2173[i + 0]));
  }
  i2166.m_SpriteCharacterTable = i2172
  var i2175 = i2167[11]
  var i2174 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.add(request.d('TMPro.TMP_SpriteGlyph', i2175[i + 0]));
  }
  i2166.m_SpriteGlyphTable = i2174
  return i2166
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2178 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2179 = data
  i2178.name = i2179[0]
  i2178.hashCode = i2179[1]
  i2178.unicode = i2179[2]
  i2178.pivot = new pc.Vec2( i2179[3], i2179[4] )
  request.r(i2179[5], i2179[6], 0, i2178, 'sprite')
  i2178.id = i2179[7]
  i2178.x = i2179[8]
  i2178.y = i2179[9]
  i2178.width = i2179[10]
  i2178.height = i2179[11]
  i2178.xOffset = i2179[12]
  i2178.yOffset = i2179[13]
  i2178.xAdvance = i2179[14]
  i2178.scale = i2179[15]
  return i2178
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2184 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2185 = data
  i2184.m_Name = i2185[0]
  i2184.m_HashCode = i2185[1]
  i2184.m_ElementType = i2185[2]
  i2184.m_Unicode = i2185[3]
  i2184.m_GlyphIndex = i2185[4]
  i2184.m_Scale = i2185[5]
  return i2184
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2188 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2189 = data
  request.r(i2189[0], i2189[1], 0, i2188, 'sprite')
  i2188.m_Index = i2189[2]
  i2188.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2189[3], i2188.m_Metrics)
  i2188.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2189[4], i2188.m_GlyphRect)
  i2188.m_Scale = i2189[5]
  i2188.m_AtlasIndex = i2189[6]
  i2188.m_ClassDefinitionType = i2189[7]
  return i2188
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2190 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2191 = data
  var i2193 = i2191[0]
  var i2192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.add(request.d('TMPro.TMP_Style', i2193[i + 0]));
  }
  i2190.m_StyleList = i2192
  return i2190
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2196 = root || request.c( 'TMPro.TMP_Style' )
  var i2197 = data
  i2196.m_Name = i2197[0]
  i2196.m_HashCode = i2197[1]
  i2196.m_OpeningDefinition = i2197[2]
  i2196.m_ClosingDefinition = i2197[3]
  i2196.m_OpeningTagArray = i2197[4]
  i2196.m_ClosingTagArray = i2197[5]
  i2196.m_OpeningTagUnicodeArray = i2197[6]
  i2196.m_ClosingTagUnicodeArray = i2197[7]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2199 = data
  var i2201 = i2199[0]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2201[i + 0]) );
  }
  i2198.files = i2200
  i2198.componentToPrefabIds = i2199[1]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2205 = data
  i2204.path = i2205[0]
  request.r(i2205[1], i2205[2], 0, i2204, 'unityObject')
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2207 = data
  var i2209 = i2207[0]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2209[i + 0]) );
  }
  i2206.scriptsExecutionOrder = i2208
  var i2211 = i2207[1]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2211[i + 0]) );
  }
  i2206.sortingLayers = i2210
  var i2213 = i2207[2]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2213[i + 0]) );
  }
  i2206.cullingLayers = i2212
  i2206.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2207[3], i2206.timeSettings)
  i2206.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2207[4], i2206.physicsSettings)
  i2206.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2207[5], i2206.physics2DSettings)
  i2206.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2207[6], i2206.qualitySettings)
  i2206.enableRealtimeShadows = !!i2207[7]
  i2206.enableAutoInstancing = !!i2207[8]
  i2206.enableDynamicBatching = !!i2207[9]
  i2206.lightmapEncodingQuality = i2207[10]
  i2206.desiredColorSpace = i2207[11]
  var i2215 = i2207[12]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( i2215[i + 0] );
  }
  i2206.allTags = i2214
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2219 = data
  i2218.name = i2219[0]
  i2218.value = i2219[1]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2223 = data
  i2222.id = i2223[0]
  i2222.name = i2223[1]
  i2222.value = i2223[2]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2227 = data
  i2226.id = i2227[0]
  i2226.name = i2227[1]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2229 = data
  i2228.fixedDeltaTime = i2229[0]
  i2228.maximumDeltaTime = i2229[1]
  i2228.timeScale = i2229[2]
  i2228.maximumParticleTimestep = i2229[3]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2231 = data
  i2230.gravity = new pc.Vec3( i2231[0], i2231[1], i2231[2] )
  i2230.defaultSolverIterations = i2231[3]
  i2230.bounceThreshold = i2231[4]
  i2230.autoSyncTransforms = !!i2231[5]
  i2230.autoSimulation = !!i2231[6]
  var i2233 = i2231[7]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2233[i + 0]) );
  }
  i2230.collisionMatrix = i2232
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2237 = data
  i2236.enabled = !!i2237[0]
  i2236.layerId = i2237[1]
  i2236.otherLayerId = i2237[2]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2239 = data
  request.r(i2239[0], i2239[1], 0, i2238, 'material')
  i2238.gravity = new pc.Vec2( i2239[2], i2239[3] )
  i2238.positionIterations = i2239[4]
  i2238.velocityIterations = i2239[5]
  i2238.velocityThreshold = i2239[6]
  i2238.maxLinearCorrection = i2239[7]
  i2238.maxAngularCorrection = i2239[8]
  i2238.maxTranslationSpeed = i2239[9]
  i2238.maxRotationSpeed = i2239[10]
  i2238.baumgarteScale = i2239[11]
  i2238.baumgarteTOIScale = i2239[12]
  i2238.timeToSleep = i2239[13]
  i2238.linearSleepTolerance = i2239[14]
  i2238.angularSleepTolerance = i2239[15]
  i2238.defaultContactOffset = i2239[16]
  i2238.autoSimulation = !!i2239[17]
  i2238.queriesHitTriggers = !!i2239[18]
  i2238.queriesStartInColliders = !!i2239[19]
  i2238.callbacksOnDisable = !!i2239[20]
  i2238.reuseCollisionCallbacks = !!i2239[21]
  i2238.autoSyncTransforms = !!i2239[22]
  var i2241 = i2239[23]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2241[i + 0]) );
  }
  i2238.collisionMatrix = i2240
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2245 = data
  i2244.enabled = !!i2245[0]
  i2244.layerId = i2245[1]
  i2244.otherLayerId = i2245[2]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2247 = data
  var i2249 = i2247[0]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2249[i + 0]) );
  }
  i2246.qualityLevels = i2248
  var i2251 = i2247[1]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.push( i2251[i + 0] );
  }
  i2246.names = i2250
  i2246.shadows = i2247[2]
  i2246.anisotropicFiltering = i2247[3]
  i2246.antiAliasing = i2247[4]
  i2246.lodBias = i2247[5]
  i2246.shadowCascades = i2247[6]
  i2246.shadowDistance = i2247[7]
  i2246.shadowmaskMode = i2247[8]
  i2246.shadowProjection = i2247[9]
  i2246.shadowResolution = i2247[10]
  i2246.softParticles = !!i2247[11]
  i2246.softVegetation = !!i2247[12]
  i2246.activeColorSpace = i2247[13]
  i2246.desiredColorSpace = i2247[14]
  i2246.masterTextureLimit = i2247[15]
  i2246.maxQueuedFrames = i2247[16]
  i2246.particleRaycastBudget = i2247[17]
  i2246.pixelLightCount = i2247[18]
  i2246.realtimeReflectionProbes = !!i2247[19]
  i2246.shadowCascade2Split = i2247[20]
  i2246.shadowCascade4Split = new pc.Vec3( i2247[21], i2247[22], i2247[23] )
  i2246.streamingMipmapsActive = !!i2247[24]
  i2246.vSyncCount = i2247[25]
  i2246.asyncUploadBufferSize = i2247[26]
  i2246.asyncUploadTimeSlice = i2247[27]
  i2246.billboardsFaceCameraPosition = !!i2247[28]
  i2246.shadowNearPlaneOffset = i2247[29]
  i2246.streamingMipmapsMemoryBudget = i2247[30]
  i2246.maximumLODLevel = i2247[31]
  i2246.streamingMipmapsAddAllCameras = !!i2247[32]
  i2246.streamingMipmapsMaxLevelReduction = i2247[33]
  i2246.streamingMipmapsRenderersPerFrame = i2247[34]
  i2246.resolutionScalingFixedDPIFactor = i2247[35]
  i2246.streamingMipmapsMaxFileIORequests = i2247[36]
  i2246.currentQualityLevel = i2247[37]
  return i2246
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2254 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2255 = data
  i2254.xPlacement = i2255[0]
  i2254.yPlacement = i2255[1]
  i2254.xAdvance = i2255[2]
  i2254.yAdvance = i2255[3]
  return i2254
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[12],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[12],"78":[79],"80":[81],"82":[81],"19":[2],"34":[16],"83":[2],"84":[85],"86":[87],"88":[85],"89":[2],"90":[2],"21":[19],"6":[3,2],"91":[2],"20":[19],"30":[2],"92":[2],"93":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[3,2],"101":[2],"102":[2],"103":[2],"104":[2],"105":[3,2],"106":[2],"107":[36],"108":[36],"37":[36],"109":[36],"110":[12],"111":[12],"112":[113],"114":[12],"115":[2],"116":[79,2],"17":[2,3],"117":[2],"118":[3,2],"119":[79],"120":[3,2],"121":[2],"122":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","TMPro.TMP_FontAsset","UnityEngine.Material","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "6.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "BasketVersion2";

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

Deserializers.buildID = "b551b1ef-bac0-40da-9327-e1c315dfd77a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

