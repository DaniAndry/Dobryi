var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1788 = root || request.c( 'UnityEngine.JointSpring' )
  var i1789 = data
  i1788.spring = i1789[0]
  i1788.damper = i1789[1]
  i1788.targetPosition = i1789[2]
  return i1788
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.JointMotor' )
  var i1791 = data
  i1790.m_TargetVelocity = i1791[0]
  i1790.m_Force = i1791[1]
  i1790.m_FreeSpin = i1791[2]
  return i1790
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1792 = root || request.c( 'UnityEngine.JointLimits' )
  var i1793 = data
  i1792.m_Min = i1793[0]
  i1792.m_Max = i1793[1]
  i1792.m_Bounciness = i1793[2]
  i1792.m_BounceMinVelocity = i1793[3]
  i1792.m_ContactDistance = i1793[4]
  i1792.minBounce = i1793[5]
  i1792.maxBounce = i1793[6]
  return i1792
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.JointDrive' )
  var i1795 = data
  i1794.m_PositionSpring = i1795[0]
  i1794.m_PositionDamper = i1795[1]
  i1794.m_MaximumForce = i1795[2]
  i1794.m_UseAcceleration = i1795[3]
  return i1794
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1797 = data
  i1796.m_Spring = i1797[0]
  i1796.m_Damper = i1797[1]
  return i1796
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1799 = data
  i1798.m_Limit = i1799[0]
  i1798.m_Bounciness = i1799[1]
  i1798.m_ContactDistance = i1799[2]
  return i1798
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1801 = data
  i1800.m_ExtremumSlip = i1801[0]
  i1800.m_ExtremumValue = i1801[1]
  i1800.m_AsymptoteSlip = i1801[2]
  i1800.m_AsymptoteValue = i1801[3]
  i1800.m_Stiffness = i1801[4]
  return i1800
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1803 = data
  i1802.m_LowerAngle = i1803[0]
  i1802.m_UpperAngle = i1803[1]
  return i1802
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1805 = data
  i1804.m_MotorSpeed = i1805[0]
  i1804.m_MaximumMotorTorque = i1805[1]
  return i1804
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1807 = data
  i1806.m_DampingRatio = i1807[0]
  i1806.m_Frequency = i1807[1]
  i1806.m_Angle = i1807[2]
  return i1806
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1809 = data
  i1808.m_LowerTranslation = i1809[0]
  i1808.m_UpperTranslation = i1809[1]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1811 = data
  i1810.name = i1811[0]
  i1810.width = i1811[1]
  i1810.height = i1811[2]
  i1810.mipmapCount = i1811[3]
  i1810.anisoLevel = i1811[4]
  i1810.filterMode = i1811[5]
  i1810.hdr = !!i1811[6]
  i1810.format = i1811[7]
  i1810.wrapMode = i1811[8]
  i1810.alphaIsTransparency = !!i1811[9]
  i1810.alphaSource = i1811[10]
  i1810.graphicsFormat = i1811[11]
  i1810.sRGBTexture = !!i1811[12]
  i1810.desiredColorSpace = i1811[13]
  i1810.wrapU = i1811[14]
  i1810.wrapV = i1811[15]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1812 = root || new pc.UnityMaterial()
  var i1813 = data
  i1812.name = i1813[0]
  request.r(i1813[1], i1813[2], 0, i1812, 'shader')
  i1812.renderQueue = i1813[3]
  i1812.enableInstancing = !!i1813[4]
  var i1815 = i1813[5]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1815[i + 0]) );
  }
  i1812.floatParameters = i1814
  var i1817 = i1813[6]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1817[i + 0]) );
  }
  i1812.colorParameters = i1816
  var i1819 = i1813[7]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1819[i + 0]) );
  }
  i1812.vectorParameters = i1818
  var i1821 = i1813[8]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1821[i + 0]) );
  }
  i1812.textureParameters = i1820
  var i1823 = i1813[9]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1823[i + 0]) );
  }
  i1812.materialFlags = i1822
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1827 = data
  i1826.name = i1827[0]
  i1826.value = i1827[1]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1831 = data
  i1830.name = i1831[0]
  i1830.value = new pc.Color(i1831[1], i1831[2], i1831[3], i1831[4])
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1835 = data
  i1834.name = i1835[0]
  i1834.value = new pc.Vec4( i1835[1], i1835[2], i1835[3], i1835[4] )
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1839 = data
  i1838.name = i1839[0]
  request.r(i1839[1], i1839[2], 0, i1838, 'value')
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1843 = data
  i1842.name = i1843[0]
  i1842.enabled = !!i1843[1]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1845 = data
  i1844.pivot = new pc.Vec2( i1845[0], i1845[1] )
  i1844.anchorMin = new pc.Vec2( i1845[2], i1845[3] )
  i1844.anchorMax = new pc.Vec2( i1845[4], i1845[5] )
  i1844.sizeDelta = new pc.Vec2( i1845[6], i1845[7] )
  i1844.anchoredPosition3D = new pc.Vec3( i1845[8], i1845[9], i1845[10] )
  i1844.rotation = new pc.Quat(i1845[11], i1845[12], i1845[13], i1845[14])
  i1844.scale = new pc.Vec3( i1845[15], i1845[16], i1845[17] )
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1847 = data
  i1846.cullTransparentMesh = !!i1847[0]
  return i1846
}

Deserializers["People"] = function (request, data, root) {
  var i1848 = root || request.c( 'People' )
  var i1849 = data
  request.r(i1849[0], i1849[1], 0, i1848, '_readyImage')
  request.r(i1849[2], i1849[3], 0, i1848, '_additiveImage1')
  request.r(i1849[4], i1849[5], 0, i1848, '_additiveImage2')
  request.r(i1849[6], i1849[7], 0, i1848, '_endPoint')
  request.r(i1849[8], i1849[9], 0, i1848, 'Bank')
  request.r(i1849[10], i1849[11], 0, i1848, '_sizeText')
  i1848.CupType = i1849[12]
  i1848.JuiceType = i1849[13]
  i1848.AdditiveType1 = i1849[14]
  i1848.AdditiveType2 = i1849[15]
  request.r(i1849[16], i1849[17], 0, i1848, '_finishSound')
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1851 = data
  request.r(i1851[0], i1851[1], 0, i1850, 'clip')
  request.r(i1851[2], i1851[3], 0, i1850, 'outputAudioMixerGroup')
  i1850.playOnAwake = !!i1851[4]
  i1850.loop = !!i1851[5]
  i1850.time = i1851[6]
  i1850.volume = i1851[7]
  i1850.pitch = i1851[8]
  i1850.enabled = !!i1851[9]
  return i1850
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1852 = root || request.c( 'UnityEngine.UI.Image' )
  var i1853 = data
  request.r(i1853[0], i1853[1], 0, i1852, 'm_Sprite')
  i1852.m_Type = i1853[2]
  i1852.m_PreserveAspect = !!i1853[3]
  i1852.m_FillCenter = !!i1853[4]
  i1852.m_FillMethod = i1853[5]
  i1852.m_FillAmount = i1853[6]
  i1852.m_FillClockwise = !!i1853[7]
  i1852.m_FillOrigin = i1853[8]
  i1852.m_UseSpriteMesh = !!i1853[9]
  i1852.m_PixelsPerUnitMultiplier = i1853[10]
  request.r(i1853[11], i1853[12], 0, i1852, 'm_Material')
  i1852.m_Maskable = !!i1853[13]
  i1852.m_Color = new pc.Color(i1853[14], i1853[15], i1853[16], i1853[17])
  i1852.m_RaycastTarget = !!i1853[18]
  i1852.m_RaycastPadding = new pc.Vec4( i1853[19], i1853[20], i1853[21], i1853[22] )
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1855 = data
  i1854.name = i1855[0]
  i1854.tagId = i1855[1]
  i1854.enabled = !!i1855[2]
  i1854.isStatic = !!i1855[3]
  i1854.layer = i1855[4]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1857 = data
  i1856.name = i1857[0]
  i1856.index = i1857[1]
  i1856.startup = !!i1857[2]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1859 = data
  i1858.position = new pc.Vec3( i1859[0], i1859[1], i1859[2] )
  i1858.scale = new pc.Vec3( i1859[3], i1859[4], i1859[5] )
  i1858.rotation = new pc.Quat(i1859[6], i1859[7], i1859[8], i1859[9])
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1861 = data
  i1860.enabled = !!i1861[0]
  i1860.aspect = i1861[1]
  i1860.orthographic = !!i1861[2]
  i1860.orthographicSize = i1861[3]
  i1860.backgroundColor = new pc.Color(i1861[4], i1861[5], i1861[6], i1861[7])
  i1860.nearClipPlane = i1861[8]
  i1860.farClipPlane = i1861[9]
  i1860.fieldOfView = i1861[10]
  i1860.depth = i1861[11]
  i1860.clearFlags = i1861[12]
  i1860.cullingMask = i1861[13]
  i1860.rect = i1861[14]
  request.r(i1861[15], i1861[16], 0, i1860, 'targetTexture')
  i1860.usePhysicalProperties = !!i1861[17]
  i1860.focalLength = i1861[18]
  i1860.sensorSize = new pc.Vec2( i1861[19], i1861[20] )
  i1860.lensShift = new pc.Vec2( i1861[21], i1861[22] )
  i1860.gateFit = i1861[23]
  i1860.commandBufferCount = i1861[24]
  i1860.cameraType = i1861[25]
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1863 = data
  request.r(i1863[0], i1863[1], 0, i1862, 'animatorController')
  request.r(i1863[2], i1863[3], 0, i1862, 'avatar')
  i1862.updateMode = i1863[4]
  i1862.hasTransformHierarchy = !!i1863[5]
  i1862.applyRootMotion = !!i1863[6]
  var i1865 = i1863[7]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 2) {
  request.r(i1865[i + 0], i1865[i + 1], 2, i1864, '')
  }
  i1862.humanBones = i1864
  i1862.enabled = !!i1863[8]
  return i1862
}

Deserializers["Bank"] = function (request, data, root) {
  var i1868 = root || request.c( 'Bank' )
  var i1869 = data
  request.r(i1869[0], i1869[1], 0, i1868, 'BuyBigCupButton')
  request.r(i1869[2], i1869[3], 0, i1868, 'BigCupButton')
  request.r(i1869[4], i1869[5], 0, i1868, 'MiddleCupButton')
  request.r(i1869[6], i1869[7], 0, i1868, 'MoneyText')
  request.r(i1869[8], i1869[9], 0, i1868, 'Tutorial')
  request.r(i1869[10], i1869[11], 0, i1868, 'BuyAdditiveButton')
  request.r(i1869[12], i1869[13], 0, i1868, 'BuyJuiceButton')
  request.r(i1869[14], i1869[15], 0, i1868, 'JuiceButton1')
  request.r(i1869[16], i1869[17], 0, i1868, 'JuiceButton2')
  request.r(i1869[18], i1869[19], 0, i1868, 'JuiceButton3')
  request.r(i1869[20], i1869[21], 0, i1868, 'Additive1Button')
  request.r(i1869[22], i1869[23], 0, i1868, 'Additive2Button')
  i1868.Money = i1869[24]
  i1868.IsBigCupBuy = !!i1869[25]
  i1868.IsJuiceBuy = !!i1869[26]
  i1868.IsAdditiveBuy = !!i1869[27]
  request.r(i1869[28], i1869[29], 0, i1868, '_buySound')
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1871 = data
  i1870.enabled = !!i1871[0]
  i1870.planeDistance = i1871[1]
  i1870.referencePixelsPerUnit = i1871[2]
  i1870.isFallbackOverlay = !!i1871[3]
  i1870.renderMode = i1871[4]
  i1870.renderOrder = i1871[5]
  i1870.sortingLayerName = i1871[6]
  i1870.sortingOrder = i1871[7]
  i1870.scaleFactor = i1871[8]
  request.r(i1871[9], i1871[10], 0, i1870, 'worldCamera')
  i1870.overrideSorting = !!i1871[11]
  i1870.pixelPerfect = !!i1871[12]
  i1870.targetDisplay = i1871[13]
  i1870.overridePixelPerfect = !!i1871[14]
  return i1870
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1873 = data
  i1872.m_UiScaleMode = i1873[0]
  i1872.m_ReferencePixelsPerUnit = i1873[1]
  i1872.m_ScaleFactor = i1873[2]
  i1872.m_ReferenceResolution = new pc.Vec2( i1873[3], i1873[4] )
  i1872.m_ScreenMatchMode = i1873[5]
  i1872.m_MatchWidthOrHeight = i1873[6]
  i1872.m_PhysicalUnit = i1873[7]
  i1872.m_FallbackScreenDPI = i1873[8]
  i1872.m_DefaultSpriteDPI = i1873[9]
  i1872.m_DynamicPixelsPerUnit = i1873[10]
  i1872.m_PresetInfoIsWorld = !!i1873[11]
  return i1872
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1874 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1875 = data
  i1874.m_IgnoreReversedGraphics = !!i1875[0]
  i1874.m_BlockingObjects = i1875[1]
  i1874.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1875[2] )
  return i1874
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i1876 = root || request.c( 'ImageShiftOnOrientation' )
  var i1877 = data
  var i1879 = i1877[0]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('ItemSwitcherData', i1879[i + 0]) );
  }
  i1876.Items = i1878
  request.r(i1877[1], i1877[2], 0, i1876, '_backHorizontal')
  request.r(i1877[3], i1877[4], 0, i1876, '_backVertical')
  request.r(i1877[5], i1877[6], 0, i1876, '_tableHorizontal')
  request.r(i1877[7], i1877[8], 0, i1876, '_tableVertical')
  i1876.IsDebug = !!i1877[9]
  i1876.CanCopy = !!i1877[10]
  return i1876
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i1882 = root || request.c( 'ItemSwitcherData' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, 'Target')
  i1882.HorizontalAnchoredPosition = new pc.Vec2( i1883[2], i1883[3] )
  i1882.SizeHorizontal = new pc.Vec2( i1883[4], i1883[5] )
  i1882.VerticalAnchoredPosition = new pc.Vec2( i1883[6], i1883[7] )
  i1882.SizeVertical = new pc.Vec2( i1883[8], i1883[9] )
  i1882.MinHorizontal = new pc.Vec2( i1883[10], i1883[11] )
  i1882.MaxHorizontal = new pc.Vec2( i1883[12], i1883[13] )
  i1882.MinVertical = new pc.Vec2( i1883[14], i1883[15] )
  i1882.MaxVertical = new pc.Vec2( i1883[16], i1883[17] )
  i1882.IsAnchored = !!i1883[18]
  i1882.IsDebug = !!i1883[19]
  i1882.CopyHorizontal = !!i1883[20]
  i1882.CopyVertical = !!i1883[21]
  return i1882
}

Deserializers["Point"] = function (request, data, root) {
  var i1884 = root || request.c( 'Point' )
  var i1885 = data
  return i1884
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1886 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1887 = data
  i1886.m_hasFontAssetChanged = !!i1887[0]
  request.r(i1887[1], i1887[2], 0, i1886, 'm_baseMaterial')
  i1886.m_maskOffset = new pc.Vec4( i1887[3], i1887[4], i1887[5], i1887[6] )
  i1886.m_text = i1887[7]
  i1886.m_isRightToLeft = !!i1887[8]
  request.r(i1887[9], i1887[10], 0, i1886, 'm_fontAsset')
  request.r(i1887[11], i1887[12], 0, i1886, 'm_sharedMaterial')
  var i1889 = i1887[13]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 2) {
  request.r(i1889[i + 0], i1889[i + 1], 2, i1888, '')
  }
  i1886.m_fontSharedMaterials = i1888
  request.r(i1887[14], i1887[15], 0, i1886, 'm_fontMaterial')
  var i1891 = i1887[16]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 2) {
  request.r(i1891[i + 0], i1891[i + 1], 2, i1890, '')
  }
  i1886.m_fontMaterials = i1890
  i1886.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1887[17], i1887[18], i1887[19], i1887[20])
  i1886.m_fontColor = new pc.Color(i1887[21], i1887[22], i1887[23], i1887[24])
  i1886.m_enableVertexGradient = !!i1887[25]
  i1886.m_colorMode = i1887[26]
  i1886.m_fontColorGradient = request.d('TMPro.VertexGradient', i1887[27], i1886.m_fontColorGradient)
  request.r(i1887[28], i1887[29], 0, i1886, 'm_fontColorGradientPreset')
  request.r(i1887[30], i1887[31], 0, i1886, 'm_spriteAsset')
  i1886.m_tintAllSprites = !!i1887[32]
  request.r(i1887[33], i1887[34], 0, i1886, 'm_StyleSheet')
  i1886.m_TextStyleHashCode = i1887[35]
  i1886.m_overrideHtmlColors = !!i1887[36]
  i1886.m_faceColor = UnityEngine.Color32.ConstructColor(i1887[37], i1887[38], i1887[39], i1887[40])
  i1886.m_fontSize = i1887[41]
  i1886.m_fontSizeBase = i1887[42]
  i1886.m_fontWeight = i1887[43]
  i1886.m_enableAutoSizing = !!i1887[44]
  i1886.m_fontSizeMin = i1887[45]
  i1886.m_fontSizeMax = i1887[46]
  i1886.m_fontStyle = i1887[47]
  i1886.m_HorizontalAlignment = i1887[48]
  i1886.m_VerticalAlignment = i1887[49]
  i1886.m_textAlignment = i1887[50]
  i1886.m_characterSpacing = i1887[51]
  i1886.m_wordSpacing = i1887[52]
  i1886.m_lineSpacing = i1887[53]
  i1886.m_lineSpacingMax = i1887[54]
  i1886.m_paragraphSpacing = i1887[55]
  i1886.m_charWidthMaxAdj = i1887[56]
  i1886.m_enableWordWrapping = !!i1887[57]
  i1886.m_wordWrappingRatios = i1887[58]
  i1886.m_overflowMode = i1887[59]
  request.r(i1887[60], i1887[61], 0, i1886, 'm_linkedTextComponent')
  request.r(i1887[62], i1887[63], 0, i1886, 'parentLinkedComponent')
  i1886.m_enableKerning = !!i1887[64]
  i1886.m_enableExtraPadding = !!i1887[65]
  i1886.checkPaddingRequired = !!i1887[66]
  i1886.m_isRichText = !!i1887[67]
  i1886.m_parseCtrlCharacters = !!i1887[68]
  i1886.m_isOrthographic = !!i1887[69]
  i1886.m_isCullingEnabled = !!i1887[70]
  i1886.m_horizontalMapping = i1887[71]
  i1886.m_verticalMapping = i1887[72]
  i1886.m_uvLineOffset = i1887[73]
  i1886.m_geometrySortingOrder = i1887[74]
  i1886.m_IsTextObjectScaleStatic = !!i1887[75]
  i1886.m_VertexBufferAutoSizeReduction = !!i1887[76]
  i1886.m_useMaxVisibleDescender = !!i1887[77]
  i1886.m_pageToDisplay = i1887[78]
  i1886.m_margin = new pc.Vec4( i1887[79], i1887[80], i1887[81], i1887[82] )
  i1886.m_isUsingLegacyAnimationComponent = !!i1887[83]
  i1886.m_isVolumetricText = !!i1887[84]
  request.r(i1887[85], i1887[86], 0, i1886, 'm_Material')
  i1886.m_Maskable = !!i1887[87]
  i1886.m_Color = new pc.Color(i1887[88], i1887[89], i1887[90], i1887[91])
  i1886.m_RaycastTarget = !!i1887[92]
  i1886.m_RaycastPadding = new pc.Vec4( i1887[93], i1887[94], i1887[95], i1887[96] )
  return i1886
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1894 = root || request.c( 'TMPro.VertexGradient' )
  var i1895 = data
  i1894.topLeft = new pc.Color(i1895[0], i1895[1], i1895[2], i1895[3])
  i1894.topRight = new pc.Color(i1895[4], i1895[5], i1895[6], i1895[7])
  i1894.bottomLeft = new pc.Color(i1895[8], i1895[9], i1895[10], i1895[11])
  i1894.bottomRight = new pc.Color(i1895[12], i1895[13], i1895[14], i1895[15])
  return i1894
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i1896 = root || request.c( 'PeopleContainer' )
  var i1897 = data
  var i1899 = i1897[0]
  var i1898 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1899.length; i += 2) {
  request.r(i1899[i + 0], i1899[i + 1], 1, i1898, '')
  }
  i1896.CurrentPeoples = i1898
  var i1901 = i1897[1]
  var i1900 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1901.length; i += 2) {
  request.r(i1901[i + 0], i1901[i + 1], 1, i1900, '')
  }
  i1896._peoples = i1900
  request.r(i1897[2], i1897[3], 0, i1896, '_tutorialPeople')
  request.r(i1897[4], i1897[5], 0, i1896, '_spawnPoint')
  request.r(i1897[6], i1897[7], 0, i1896, '_point1')
  request.r(i1897[8], i1897[9], 0, i1896, '_point2')
  request.r(i1897[10], i1897[11], 0, i1896, '_endPoint')
  request.r(i1897[12], i1897[13], 0, i1896, '_juiceConfig')
  request.r(i1897[14], i1897[15], 0, i1896, '_tutorial')
  return i1896
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1904 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1905 = data
  i1904.m_HorizontalFit = i1905[0]
  i1904.m_VerticalFit = i1905[1]
  return i1904
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1906 = root || request.c( 'UnityEngine.UI.Button' )
  var i1907 = data
  i1906.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1907[0], i1906.m_OnClick)
  i1906.m_Navigation = request.d('UnityEngine.UI.Navigation', i1907[1], i1906.m_Navigation)
  i1906.m_Transition = i1907[2]
  i1906.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1907[3], i1906.m_Colors)
  i1906.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1907[4], i1906.m_SpriteState)
  i1906.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1907[5], i1906.m_AnimationTriggers)
  i1906.m_Interactable = !!i1907[6]
  request.r(i1907[7], i1907[8], 0, i1906, 'm_TargetGraphic')
  return i1906
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1908 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1909 = data
  i1908.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1909[0], i1908.m_PersistentCalls)
  return i1908
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1910 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1911 = data
  var i1913 = i1911[0]
  var i1912 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.add(request.d('UnityEngine.Events.PersistentCall', i1913[i + 0]));
  }
  i1910.m_Calls = i1912
  return i1910
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1916 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1917 = data
  request.r(i1917[0], i1917[1], 0, i1916, 'm_Target')
  i1916.m_TargetAssemblyTypeName = i1917[2]
  i1916.m_MethodName = i1917[3]
  i1916.m_Mode = i1917[4]
  i1916.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1917[5], i1916.m_Arguments)
  i1916.m_CallState = i1917[6]
  return i1916
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1918 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1919 = data
  i1918.m_Mode = i1919[0]
  i1918.m_WrapAround = !!i1919[1]
  request.r(i1919[2], i1919[3], 0, i1918, 'm_SelectOnUp')
  request.r(i1919[4], i1919[5], 0, i1918, 'm_SelectOnDown')
  request.r(i1919[6], i1919[7], 0, i1918, 'm_SelectOnLeft')
  request.r(i1919[8], i1919[9], 0, i1918, 'm_SelectOnRight')
  return i1918
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1920 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1921 = data
  i1920.m_NormalColor = new pc.Color(i1921[0], i1921[1], i1921[2], i1921[3])
  i1920.m_HighlightedColor = new pc.Color(i1921[4], i1921[5], i1921[6], i1921[7])
  i1920.m_PressedColor = new pc.Color(i1921[8], i1921[9], i1921[10], i1921[11])
  i1920.m_SelectedColor = new pc.Color(i1921[12], i1921[13], i1921[14], i1921[15])
  i1920.m_DisabledColor = new pc.Color(i1921[16], i1921[17], i1921[18], i1921[19])
  i1920.m_ColorMultiplier = i1921[20]
  i1920.m_FadeDuration = i1921[21]
  return i1920
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1922 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1923 = data
  request.r(i1923[0], i1923[1], 0, i1922, 'm_HighlightedSprite')
  request.r(i1923[2], i1923[3], 0, i1922, 'm_PressedSprite')
  request.r(i1923[4], i1923[5], 0, i1922, 'm_SelectedSprite')
  request.r(i1923[6], i1923[7], 0, i1922, 'm_DisabledSprite')
  return i1922
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1924 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1925 = data
  i1924.m_NormalTrigger = i1925[0]
  i1924.m_HighlightedTrigger = i1925[1]
  i1924.m_PressedTrigger = i1925[2]
  i1924.m_SelectedTrigger = i1925[3]
  i1924.m_DisabledTrigger = i1925[4]
  return i1924
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1926 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1927 = data
  request.r(i1927[0], i1927[1], 0, i1926, 'm_ObjectArgument')
  i1926.m_ObjectArgumentAssemblyTypeName = i1927[2]
  i1926.m_IntArgument = i1927[3]
  i1926.m_FloatArgument = i1927[4]
  i1926.m_StringArgument = i1927[5]
  i1926.m_BoolArgument = !!i1927[6]
  return i1926
}

Deserializers["BackImage"] = function (request, data, root) {
  var i1928 = root || request.c( 'BackImage' )
  var i1929 = data
  return i1928
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i1930 = root || request.c( 'AheadImage' )
  var i1931 = data
  return i1930
}

Deserializers["Order"] = function (request, data, root) {
  var i1932 = root || request.c( 'Order' )
  var i1933 = data
  request.r(i1933[0], i1933[1], 0, i1932, '_juiceAnimator')
  request.r(i1933[2], i1933[3], 0, i1932, '_cupAnimator')
  request.r(i1933[4], i1933[5], 0, i1932, '_canvasAnimator')
  i1932.CupType = i1933[6]
  i1932.JuiceType = i1933[7]
  i1932.AdditiveType1 = i1933[8]
  i1932.AdditiveType2 = i1933[9]
  i1932.IsFree = !!i1933[10]
  i1932.IsSpriteReady = !!i1933[11]
  i1932.IsCupReady = !!i1933[12]
  i1932.IsJuiceReady = !!i1933[13]
  i1932.IsPouring = !!i1933[14]
  i1932.IsJuiceMakerUsed = !!i1933[15]
  request.r(i1933[16], i1933[17], 0, i1932, '_iceButton')
  request.r(i1933[18], i1933[19], 0, i1932, '_grassButton')
  request.r(i1933[20], i1933[21], 0, i1932, '_juiceBallsButton')
  request.r(i1933[22], i1933[23], 0, i1932, '_strawButton')
  request.r(i1933[24], i1933[25], 0, i1932, '_bigCupButton')
  request.r(i1933[26], i1933[27], 0, i1932, '_middleCupButton')
  request.r(i1933[28], i1933[29], 0, i1932, '_smallCupButton')
  request.r(i1933[30], i1933[31], 0, i1932, '_appleButton')
  request.r(i1933[32], i1933[33], 0, i1932, '_orangeButton')
  request.r(i1933[34], i1933[35], 0, i1932, '_multifruitButton')
  request.r(i1933[36], i1933[37], 0, i1932, '_tomatoButton')
  request.r(i1933[38], i1933[39], 0, i1932, '_cherryButton')
  request.r(i1933[40], i1933[41], 0, i1932, '_smallRawJuiceImage')
  request.r(i1933[42], i1933[43], 0, i1932, '_middleRawJuiceImage')
  request.r(i1933[44], i1933[45], 0, i1932, '_bigRawJuiceImage')
  request.r(i1933[46], i1933[47], 0, i1932, '_smallReadyJuiceImage')
  request.r(i1933[48], i1933[49], 0, i1932, '_middleReadyJuiceImage')
  request.r(i1933[50], i1933[51], 0, i1932, '_bigReadyJuiceImage')
  request.r(i1933[52], i1933[53], 0, i1932, '_backImage')
  request.r(i1933[54], i1933[55], 0, i1932, '_aheadImage')
  request.r(i1933[56], i1933[57], 0, i1932, '_config')
  request.r(i1933[58], i1933[59], 0, i1932, '_takeOrderButton')
  request.r(i1933[60], i1933[61], 0, i1932, '_peopleContainer')
  request.r(i1933[62], i1933[63], 0, i1932, '_tutorial')
  request.r(i1933[64], i1933[65], 0, i1932, '_bText')
  request.r(i1933[66], i1933[67], 0, i1932, '_mText')
  request.r(i1933[68], i1933[69], 0, i1932, '_sText')
  request.r(i1933[70], i1933[71], 0, i1932, '_garbageButton')
  request.r(i1933[72], i1933[73], 0, i1932, '_juiceMakerButton')
  request.r(i1933[74], i1933[75], 0, i1932, '_clickSound')
  request.r(i1933[76], i1933[77], 0, i1932, '_juiceSound')
  return i1932
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i1934 = root || request.c( 'Tutorial' )
  var i1935 = data
  i1934.IsTutorial = !!i1935[0]
  request.r(i1935[1], i1935[2], 0, i1934, 'Finger1')
  request.r(i1935[3], i1935[4], 0, i1934, 'Finger2')
  request.r(i1935[5], i1935[6], 0, i1934, 'Finger3')
  request.r(i1935[7], i1935[8], 0, i1934, 'Finger4')
  request.r(i1935[9], i1935[10], 0, i1934, 'FingerJuiceMaker')
  request.r(i1935[11], i1935[12], 0, i1934, 'Finger5')
  request.r(i1935[13], i1935[14], 0, i1934, 'BuyBigCupFinger')
  request.r(i1935[15], i1935[16], 0, i1934, 'BuyJuiceFinger')
  request.r(i1935[17], i1935[18], 0, i1934, 'SmallCupButton')
  request.r(i1935[19], i1935[20], 0, i1934, 'JuiceButton')
  request.r(i1935[21], i1935[22], 0, i1934, 'StrawButton')
  request.r(i1935[23], i1935[24], 0, i1934, 'AdditiveButton')
  request.r(i1935[25], i1935[26], 0, i1934, 'ReadyButton')
  request.r(i1935[27], i1935[28], 0, i1934, 'JuiceMakerButton')
  var i1937 = i1935[29]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 2) {
  request.r(i1937[i + 0], i1937[i + 1], 2, i1936, '')
  }
  i1934.Buttons = i1936
  request.r(i1935[30], i1935[31], 0, i1934, 'Bank')
  return i1934
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i1940 = root || request.c( 'SoundSwitcher' )
  var i1941 = data
  request.r(i1941[0], i1941[1], 0, i1940, '_onImage')
  request.r(i1941[2], i1941[3], 0, i1940, '_offImage')
  return i1940
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1943 = data
  request.r(i1943[0], i1943[1], 0, i1942, 'm_FirstSelected')
  i1942.m_sendNavigationEvents = !!i1943[2]
  i1942.m_DragThreshold = i1943[3]
  return i1942
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1944 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1945 = data
  i1944.m_HorizontalAxis = i1945[0]
  i1944.m_VerticalAxis = i1945[1]
  i1944.m_SubmitButton = i1945[2]
  i1944.m_CancelButton = i1945[3]
  i1944.m_InputActionsPerSecond = i1945[4]
  i1944.m_RepeatDelay = i1945[5]
  i1944.m_ForceModuleActive = !!i1945[6]
  i1944.m_SendPointerHoverToParent = !!i1945[7]
  return i1944
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i1946 = root || request.c( 'JuiceConfig' )
  var i1947 = data
  request.r(i1947[0], i1947[1], 0, i1946, 'EntityBigCup')
  request.r(i1947[2], i1947[3], 0, i1946, 'TomatoBigCup')
  request.r(i1947[4], i1947[5], 0, i1946, 'AppleBigCup')
  request.r(i1947[6], i1947[7], 0, i1946, 'OrangeBigCup')
  request.r(i1947[8], i1947[9], 0, i1946, 'CherryBigCup')
  request.r(i1947[10], i1947[11], 0, i1946, 'MultifruitBigCup')
  request.r(i1947[12], i1947[13], 0, i1946, 'TomatoBigStrawCup')
  request.r(i1947[14], i1947[15], 0, i1946, 'MultifruitBigStrawCup')
  request.r(i1947[16], i1947[17], 0, i1946, 'AppleBigStrawCup')
  request.r(i1947[18], i1947[19], 0, i1946, 'OrangeBigStrawCup')
  request.r(i1947[20], i1947[21], 0, i1946, 'CherryBigStrawCup')
  request.r(i1947[22], i1947[23], 0, i1946, 'MultifruitBigBallsCup')
  request.r(i1947[24], i1947[25], 0, i1946, 'TomatoBigBallsCup')
  request.r(i1947[26], i1947[27], 0, i1946, 'AppleBigBallsCup')
  request.r(i1947[28], i1947[29], 0, i1946, 'OrangeBigBallsCup')
  request.r(i1947[30], i1947[31], 0, i1946, 'CherryBigBallsCup')
  request.r(i1947[32], i1947[33], 0, i1946, 'EntityMiddleCup')
  request.r(i1947[34], i1947[35], 0, i1946, 'TomatoMiddleCup')
  request.r(i1947[36], i1947[37], 0, i1946, 'AppleMiddleCup')
  request.r(i1947[38], i1947[39], 0, i1946, 'OrangeMiddleCup')
  request.r(i1947[40], i1947[41], 0, i1946, 'CherryMiddleCup')
  request.r(i1947[42], i1947[43], 0, i1946, 'MultifruitMiddleCup')
  request.r(i1947[44], i1947[45], 0, i1946, 'TomatoMiddleStrawCup')
  request.r(i1947[46], i1947[47], 0, i1946, 'MultifruitMiddleStrawCup')
  request.r(i1947[48], i1947[49], 0, i1946, 'AppleMiddleStrawCup')
  request.r(i1947[50], i1947[51], 0, i1946, 'OrangeMiddleStrawCup')
  request.r(i1947[52], i1947[53], 0, i1946, 'CherryMiddleStrawCup')
  request.r(i1947[54], i1947[55], 0, i1946, 'MultifruitMiddleBallsCup')
  request.r(i1947[56], i1947[57], 0, i1946, 'TomatoMiddleBallsCup')
  request.r(i1947[58], i1947[59], 0, i1946, 'AppleMiddleBallsCup')
  request.r(i1947[60], i1947[61], 0, i1946, 'OrangeMiddleBallsCup')
  request.r(i1947[62], i1947[63], 0, i1946, 'CherryMiddleBallsCup')
  request.r(i1947[64], i1947[65], 0, i1946, 'EntitySmallCup')
  request.r(i1947[66], i1947[67], 0, i1946, 'TomatoSmallCup')
  request.r(i1947[68], i1947[69], 0, i1946, 'AppleSmallCup')
  request.r(i1947[70], i1947[71], 0, i1946, 'OrangeSmallCup')
  request.r(i1947[72], i1947[73], 0, i1946, 'CherrySmallCup')
  request.r(i1947[74], i1947[75], 0, i1946, 'MultifruitSmallCup')
  request.r(i1947[76], i1947[77], 0, i1946, 'TomatoSmallStrawCup')
  request.r(i1947[78], i1947[79], 0, i1946, 'AppleSmallStrawCup')
  request.r(i1947[80], i1947[81], 0, i1946, 'OrangeSmallStrawCup')
  request.r(i1947[82], i1947[83], 0, i1946, 'CherrySmallStrawCup')
  request.r(i1947[84], i1947[85], 0, i1946, 'MultifruitSmallStrawCup')
  request.r(i1947[86], i1947[87], 0, i1946, 'AppleSmallBallsCup')
  request.r(i1947[88], i1947[89], 0, i1946, 'TomatoSmallBallsCup')
  request.r(i1947[90], i1947[91], 0, i1946, 'OrangeSmallBallsCup')
  request.r(i1947[92], i1947[93], 0, i1946, 'CherrySmallBallsCup')
  request.r(i1947[94], i1947[95], 0, i1946, 'MultifruitSmallBallsCup')
  request.r(i1947[96], i1947[97], 0, i1946, 'JuiceBallAdditive')
  request.r(i1947[98], i1947[99], 0, i1946, 'IceAdditive')
  request.r(i1947[100], i1947[101], 0, i1946, 'GrassAdditive')
  return i1946
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i1948 = root || request.c( 'TouchIdleTimer' )
  var i1949 = data
  return i1948
}

Deserializers["Helper"] = function (request, data, root) {
  var i1950 = root || request.c( 'Helper' )
  var i1951 = data
  request.r(i1951[0], i1951[1], 0, i1950, '_smallCupFinger')
  request.r(i1951[2], i1951[3], 0, i1950, '_middleCupFinger')
  request.r(i1951[4], i1951[5], 0, i1950, '_bigCupFinger')
  request.r(i1951[6], i1951[7], 0, i1950, '_iceFinger')
  request.r(i1951[8], i1951[9], 0, i1950, '_grassFinger')
  request.r(i1951[10], i1951[11], 0, i1950, '_juiceballFinger')
  request.r(i1951[12], i1951[13], 0, i1950, '_appleFinger')
  request.r(i1951[14], i1951[15], 0, i1950, '_cherryFinger')
  request.r(i1951[16], i1951[17], 0, i1950, '_orangeFinger')
  request.r(i1951[18], i1951[19], 0, i1950, '_multifruitFinger')
  request.r(i1951[20], i1951[21], 0, i1950, '_tomatoFinger')
  request.r(i1951[22], i1951[23], 0, i1950, '_strawFinger')
  request.r(i1951[24], i1951[25], 0, i1950, '_readyFinger')
  request.r(i1951[26], i1951[27], 0, i1950, '_juiceMakerFinger')
  request.r(i1951[28], i1951[29], 0, i1950, '_peoples')
  request.r(i1951[30], i1951[31], 0, i1950, '_tutorial')
  request.r(i1951[32], i1951[33], 0, i1950, '_order')
  request.r(i1951[34], i1951[35], 0, i1950, '_strawButton')
  request.r(i1951[36], i1951[37], 0, i1950, '_juiceMakerButton')
  request.r(i1951[38], i1951[39], 0, i1950, '_bigCupButton')
  request.r(i1951[40], i1951[41], 0, i1950, '_middleCupButton')
  request.r(i1951[42], i1951[43], 0, i1950, '_smallCupButton')
  request.r(i1951[44], i1951[45], 0, i1950, '_readyButton')
  request.r(i1951[46], i1951[47], 0, i1950, '_touchIdleTimer')
  request.r(i1951[48], i1951[49], 0, i1950, '_finalScreen')
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1953 = data
  i1952.ambientIntensity = i1953[0]
  i1952.reflectionIntensity = i1953[1]
  i1952.ambientMode = i1953[2]
  i1952.ambientLight = new pc.Color(i1953[3], i1953[4], i1953[5], i1953[6])
  i1952.ambientSkyColor = new pc.Color(i1953[7], i1953[8], i1953[9], i1953[10])
  i1952.ambientGroundColor = new pc.Color(i1953[11], i1953[12], i1953[13], i1953[14])
  i1952.ambientEquatorColor = new pc.Color(i1953[15], i1953[16], i1953[17], i1953[18])
  i1952.fogColor = new pc.Color(i1953[19], i1953[20], i1953[21], i1953[22])
  i1952.fogEndDistance = i1953[23]
  i1952.fogStartDistance = i1953[24]
  i1952.fogDensity = i1953[25]
  i1952.fog = !!i1953[26]
  request.r(i1953[27], i1953[28], 0, i1952, 'skybox')
  i1952.fogMode = i1953[29]
  var i1955 = i1953[30]
  var i1954 = []
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1955[i + 0]) );
  }
  i1952.lightmaps = i1954
  i1952.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1953[31], i1952.lightProbes)
  i1952.lightmapsMode = i1953[32]
  i1952.mixedBakeMode = i1953[33]
  i1952.environmentLightingMode = i1953[34]
  i1952.ambientProbe = new pc.SphericalHarmonicsL2(i1953[35])
  i1952.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1953[36])
  i1952.useReferenceAmbientProbe = !!i1953[37]
  request.r(i1953[38], i1953[39], 0, i1952, 'customReflection')
  request.r(i1953[40], i1953[41], 0, i1952, 'defaultReflection')
  i1952.defaultReflectionMode = i1953[42]
  i1952.defaultReflectionResolution = i1953[43]
  i1952.sunLightObjectId = i1953[44]
  i1952.pixelLightCount = i1953[45]
  i1952.defaultReflectionHDR = !!i1953[46]
  i1952.hasLightDataAsset = !!i1953[47]
  i1952.hasManualGenerate = !!i1953[48]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1959 = data
  request.r(i1959[0], i1959[1], 0, i1958, 'lightmapColor')
  request.r(i1959[2], i1959[3], 0, i1958, 'lightmapDirection')
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1960 = root || new UnityEngine.LightProbes()
  var i1961 = data
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1969 = data
  var i1971 = i1969[0]
  var i1970 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1971[i + 0]));
  }
  i1968.ShaderCompilationErrors = i1970
  i1968.name = i1969[1]
  i1968.guid = i1969[2]
  var i1973 = i1969[3]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( i1973[i + 0] );
  }
  i1968.shaderDefinedKeywords = i1972
  var i1975 = i1969[4]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1975[i + 0]) );
  }
  i1968.passes = i1974
  var i1977 = i1969[5]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1977[i + 0]) );
  }
  i1968.usePasses = i1976
  var i1979 = i1969[6]
  var i1978 = []
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1979[i + 0]) );
  }
  i1968.defaultParameterValues = i1978
  request.r(i1969[7], i1969[8], 0, i1968, 'unityFallbackShader')
  i1968.readDepth = !!i1969[9]
  i1968.isCreatedByShaderGraph = !!i1969[10]
  i1968.compiled = !!i1969[11]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1983 = data
  i1982.shaderName = i1983[0]
  i1982.errorMessage = i1983[1]
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1988 = root || new pc.UnityShaderPass()
  var i1989 = data
  i1988.id = i1989[0]
  i1988.subShaderIndex = i1989[1]
  i1988.name = i1989[2]
  i1988.passType = i1989[3]
  i1988.grabPassTextureName = i1989[4]
  i1988.usePass = !!i1989[5]
  i1988.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[6], i1988.zTest)
  i1988.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[7], i1988.zWrite)
  i1988.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[8], i1988.culling)
  i1988.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1989[9], i1988.blending)
  i1988.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1989[10], i1988.alphaBlending)
  i1988.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[11], i1988.colorWriteMask)
  i1988.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[12], i1988.offsetUnits)
  i1988.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[13], i1988.offsetFactor)
  i1988.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[14], i1988.stencilRef)
  i1988.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[15], i1988.stencilReadMask)
  i1988.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1989[16], i1988.stencilWriteMask)
  i1988.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1989[17], i1988.stencilOp)
  i1988.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1989[18], i1988.stencilOpFront)
  i1988.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1989[19], i1988.stencilOpBack)
  var i1991 = i1989[20]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1991[i + 0]) );
  }
  i1988.tags = i1990
  var i1993 = i1989[21]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.push( i1993[i + 0] );
  }
  i1988.passDefinedKeywords = i1992
  var i1995 = i1989[22]
  var i1994 = []
  for(var i = 0; i < i1995.length; i += 1) {
    i1994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1995[i + 0]) );
  }
  i1988.passDefinedKeywordGroups = i1994
  var i1997 = i1989[23]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1997[i + 0]) );
  }
  i1988.variants = i1996
  var i1999 = i1989[24]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1999[i + 0]) );
  }
  i1988.excludedVariants = i1998
  i1988.hasDepthReader = !!i1989[25]
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2001 = data
  i2000.val = i2001[0]
  i2000.name = i2001[1]
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2003 = data
  i2002.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2003[0], i2002.src)
  i2002.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2003[1], i2002.dst)
  i2002.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2003[2], i2002.op)
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2005 = data
  i2004.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2005[0], i2004.pass)
  i2004.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2005[1], i2004.fail)
  i2004.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2005[2], i2004.zFail)
  i2004.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2005[3], i2004.comp)
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2009 = data
  i2008.name = i2009[0]
  i2008.value = i2009[1]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2013 = data
  var i2015 = i2013[0]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( i2015[i + 0] );
  }
  i2012.keywords = i2014
  i2012.hasDiscard = !!i2013[1]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2019 = data
  i2018.passId = i2019[0]
  i2018.subShaderIndex = i2019[1]
  var i2021 = i2019[2]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( i2021[i + 0] );
  }
  i2018.keywords = i2020
  i2018.vertexProgram = i2019[3]
  i2018.fragmentProgram = i2019[4]
  i2018.exportedForWebGl2 = !!i2019[5]
  i2018.readDepth = !!i2019[6]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2025 = data
  request.r(i2025[0], i2025[1], 0, i2024, 'shader')
  i2024.pass = i2025[2]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2029 = data
  i2028.name = i2029[0]
  i2028.type = i2029[1]
  i2028.value = new pc.Vec4( i2029[2], i2029[3], i2029[4], i2029[5] )
  i2028.textureValue = i2029[6]
  i2028.shaderPropertyFlag = i2029[7]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2031 = data
  i2030.name = i2031[0]
  request.r(i2031[1], i2031[2], 0, i2030, 'texture')
  i2030.aabb = i2031[3]
  i2030.vertices = i2031[4]
  i2030.triangles = i2031[5]
  i2030.textureRect = UnityEngine.Rect.MinMaxRect(i2031[6], i2031[7], i2031[8], i2031[9])
  i2030.packedRect = UnityEngine.Rect.MinMaxRect(i2031[10], i2031[11], i2031[12], i2031[13])
  i2030.border = new pc.Vec4( i2031[14], i2031[15], i2031[16], i2031[17] )
  i2030.transparency = i2031[18]
  i2030.bounds = i2031[19]
  i2030.pixelsPerUnit = i2031[20]
  i2030.textureWidth = i2031[21]
  i2030.textureHeight = i2031[22]
  i2030.nativeSize = new pc.Vec2( i2031[23], i2031[24] )
  i2030.pivot = new pc.Vec2( i2031[25], i2031[26] )
  i2030.textureRectOffset = new pc.Vec2( i2031[27], i2031[28] )
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2033 = data
  i2032.name = i2033[0]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2035 = data
  i2034.name = i2035[0]
  i2034.wrapMode = i2035[1]
  i2034.isLooping = !!i2035[2]
  i2034.length = i2035[3]
  var i2037 = i2035[4]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2037[i + 0]) );
  }
  i2034.curves = i2036
  var i2039 = i2035[5]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2039[i + 0]) );
  }
  i2034.events = i2038
  i2034.halfPrecision = !!i2035[6]
  i2034._frameRate = i2035[7]
  i2034.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2035[8], i2034.localBounds)
  i2034.hasMuscleCurves = !!i2035[9]
  var i2041 = i2035[10]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( i2041[i + 0] );
  }
  i2034.clipMuscleConstant = i2040
  i2034.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2035[11], i2034.clipBindingConstant)
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2045 = data
  i2044.path = i2045[0]
  i2044.hash = i2045[1]
  i2044.componentType = i2045[2]
  i2044.property = i2045[3]
  i2044.keys = i2045[4]
  var i2047 = i2045[5]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2047[i + 0]) );
  }
  i2044.objectReferenceKeys = i2046
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2051 = data
  i2050.time = i2051[0]
  request.r(i2051[1], i2051[2], 0, i2050, 'value')
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2055 = data
  i2054.functionName = i2055[0]
  i2054.floatParameter = i2055[1]
  i2054.intParameter = i2055[2]
  i2054.stringParameter = i2055[3]
  request.r(i2055[4], i2055[5], 0, i2054, 'objectReferenceParameter')
  i2054.time = i2055[6]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2057 = data
  i2056.center = new pc.Vec3( i2057[0], i2057[1], i2057[2] )
  i2056.extends = new pc.Vec3( i2057[3], i2057[4], i2057[5] )
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2061 = data
  var i2063 = i2061[0]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( i2063[i + 0] );
  }
  i2060.genericBindings = i2062
  var i2065 = i2061[1]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( i2065[i + 0] );
  }
  i2060.pptrCurveMapping = i2064
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2067 = data
  i2066.name = i2067[0]
  i2066.ascent = i2067[1]
  i2066.originalLineHeight = i2067[2]
  i2066.fontSize = i2067[3]
  var i2069 = i2067[4]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2069[i + 0]) );
  }
  i2066.characterInfo = i2068
  request.r(i2067[5], i2067[6], 0, i2066, 'texture')
  i2066.originalFontSize = i2067[7]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2073 = data
  i2072.index = i2073[0]
  i2072.advance = i2073[1]
  i2072.bearing = i2073[2]
  i2072.glyphWidth = i2073[3]
  i2072.glyphHeight = i2073[4]
  i2072.minX = i2073[5]
  i2072.maxX = i2073[6]
  i2072.minY = i2073[7]
  i2072.maxY = i2073[8]
  i2072.uvBottomLeftX = i2073[9]
  i2072.uvBottomLeftY = i2073[10]
  i2072.uvBottomRightX = i2073[11]
  i2072.uvBottomRightY = i2073[12]
  i2072.uvTopLeftX = i2073[13]
  i2072.uvTopLeftY = i2073[14]
  i2072.uvTopRightX = i2073[15]
  i2072.uvTopRightY = i2073[16]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2075 = data
  i2074.name = i2075[0]
  var i2077 = i2075[1]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2077[i + 0]) );
  }
  i2074.layers = i2076
  var i2079 = i2075[2]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2079[i + 0]) );
  }
  i2074.parameters = i2078
  i2074.animationClips = i2075[3]
  i2074.avatarUnsupported = i2075[4]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2083 = data
  i2082.name = i2083[0]
  i2082.defaultWeight = i2083[1]
  i2082.blendingMode = i2083[2]
  i2082.avatarMask = i2083[3]
  i2082.syncedLayerIndex = i2083[4]
  i2082.syncedLayerAffectsTiming = !!i2083[5]
  i2082.syncedLayers = i2083[6]
  i2082.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2083[7], i2082.stateMachine)
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2085 = data
  i2084.id = i2085[0]
  i2084.name = i2085[1]
  i2084.path = i2085[2]
  var i2087 = i2085[3]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2087[i + 0]) );
  }
  i2084.states = i2086
  var i2089 = i2085[4]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2089[i + 0]) );
  }
  i2084.machines = i2088
  var i2091 = i2085[5]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2091[i + 0]) );
  }
  i2084.entryStateTransitions = i2090
  var i2093 = i2085[6]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2093[i + 0]) );
  }
  i2084.exitStateTransitions = i2092
  var i2095 = i2085[7]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2095[i + 0]) );
  }
  i2084.anyStateTransitions = i2094
  i2084.defaultStateId = i2085[8]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2099 = data
  i2098.id = i2099[0]
  i2098.name = i2099[1]
  i2098.cycleOffset = i2099[2]
  i2098.cycleOffsetParameter = i2099[3]
  i2098.cycleOffsetParameterActive = !!i2099[4]
  i2098.mirror = !!i2099[5]
  i2098.mirrorParameter = i2099[6]
  i2098.mirrorParameterActive = !!i2099[7]
  i2098.motionId = i2099[8]
  i2098.nameHash = i2099[9]
  i2098.fullPathHash = i2099[10]
  i2098.speed = i2099[11]
  i2098.speedParameter = i2099[12]
  i2098.speedParameterActive = !!i2099[13]
  i2098.tag = i2099[14]
  i2098.tagHash = i2099[15]
  i2098.writeDefaultValues = !!i2099[16]
  var i2101 = i2099[17]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 2) {
  request.r(i2101[i + 0], i2101[i + 1], 2, i2100, '')
  }
  i2098.behaviours = i2100
  var i2103 = i2099[18]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2103[i + 0]) );
  }
  i2098.transitions = i2102
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2109 = data
  i2108.fullPath = i2109[0]
  i2108.canTransitionToSelf = !!i2109[1]
  i2108.duration = i2109[2]
  i2108.exitTime = i2109[3]
  i2108.hasExitTime = !!i2109[4]
  i2108.hasFixedDuration = !!i2109[5]
  i2108.interruptionSource = i2109[6]
  i2108.offset = i2109[7]
  i2108.orderedInterruption = !!i2109[8]
  i2108.destinationStateId = i2109[9]
  i2108.isExit = !!i2109[10]
  i2108.mute = !!i2109[11]
  i2108.solo = !!i2109[12]
  var i2111 = i2109[13]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2111[i + 0]) );
  }
  i2108.conditions = i2110
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2117 = data
  i2116.destinationStateId = i2117[0]
  i2116.isExit = !!i2117[1]
  i2116.mute = !!i2117[2]
  i2116.solo = !!i2117[3]
  var i2119 = i2117[4]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2119[i + 0]) );
  }
  i2116.conditions = i2118
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2123 = data
  i2122.mode = i2123[0]
  i2122.parameter = i2123[1]
  i2122.threshold = i2123[2]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2127 = data
  i2126.defaultBool = !!i2127[0]
  i2126.defaultFloat = i2127[1]
  i2126.defaultInt = i2127[2]
  i2126.name = i2127[3]
  i2126.nameHash = i2127[4]
  i2126.type = i2127[5]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2129 = data
  i2128.name = i2129[0]
  i2128.bytes64 = i2129[1]
  i2128.data = i2129[2]
  return i2128
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2130 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2131 = data
  i2130.hashCode = i2131[0]
  request.r(i2131[1], i2131[2], 0, i2130, 'material')
  i2130.materialHashCode = i2131[3]
  request.r(i2131[4], i2131[5], 0, i2130, 'atlas')
  i2130.normalStyle = i2131[6]
  i2130.normalSpacingOffset = i2131[7]
  i2130.boldStyle = i2131[8]
  i2130.boldSpacing = i2131[9]
  i2130.italicStyle = i2131[10]
  i2130.tabSize = i2131[11]
  i2130.m_Version = i2131[12]
  i2130.m_SourceFontFileGUID = i2131[13]
  request.r(i2131[14], i2131[15], 0, i2130, 'm_SourceFontFile_EditorRef')
  request.r(i2131[16], i2131[17], 0, i2130, 'm_SourceFontFile')
  i2130.m_AtlasPopulationMode = i2131[18]
  i2130.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2131[19], i2130.m_FaceInfo)
  var i2133 = i2131[20]
  var i2132 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.add(request.d('UnityEngine.TextCore.Glyph', i2133[i + 0]));
  }
  i2130.m_GlyphTable = i2132
  var i2135 = i2131[21]
  var i2134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.add(request.d('TMPro.TMP_Character', i2135[i + 0]));
  }
  i2130.m_CharacterTable = i2134
  var i2137 = i2131[22]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 2) {
  request.r(i2137[i + 0], i2137[i + 1], 2, i2136, '')
  }
  i2130.m_AtlasTextures = i2136
  i2130.m_AtlasTextureIndex = i2131[23]
  i2130.m_IsMultiAtlasTexturesEnabled = !!i2131[24]
  i2130.m_ClearDynamicDataOnBuild = !!i2131[25]
  var i2139 = i2131[26]
  var i2138 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.add(request.d('UnityEngine.TextCore.GlyphRect', i2139[i + 0]));
  }
  i2130.m_UsedGlyphRects = i2138
  var i2141 = i2131[27]
  var i2140 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.add(request.d('UnityEngine.TextCore.GlyphRect', i2141[i + 0]));
  }
  i2130.m_FreeGlyphRects = i2140
  i2130.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2131[28], i2130.m_fontInfo)
  i2130.m_AtlasWidth = i2131[29]
  i2130.m_AtlasHeight = i2131[30]
  i2130.m_AtlasPadding = i2131[31]
  i2130.m_AtlasRenderMode = i2131[32]
  var i2143 = i2131[33]
  var i2142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.add(request.d('TMPro.TMP_Glyph', i2143[i + 0]));
  }
  i2130.m_glyphInfoList = i2142
  i2130.m_KerningTable = request.d('TMPro.KerningTable', i2131[34], i2130.m_KerningTable)
  i2130.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2131[35], i2130.m_FontFeatureTable)
  var i2145 = i2131[36]
  var i2144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2145.length; i += 2) {
  request.r(i2145[i + 0], i2145[i + 1], 1, i2144, '')
  }
  i2130.fallbackFontAssets = i2144
  var i2147 = i2131[37]
  var i2146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2147.length; i += 2) {
  request.r(i2147[i + 0], i2147[i + 1], 1, i2146, '')
  }
  i2130.m_FallbackFontAssetTable = i2146
  i2130.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2131[38], i2130.m_CreationSettings)
  var i2149 = i2131[39]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( request.d('TMPro.TMP_FontWeightPair', i2149[i + 0]) );
  }
  i2130.m_FontWeightTable = i2148
  var i2151 = i2131[40]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( request.d('TMPro.TMP_FontWeightPair', i2151[i + 0]) );
  }
  i2130.fontWeights = i2150
  return i2130
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2153 = data
  i2152.m_FaceIndex = i2153[0]
  i2152.m_FamilyName = i2153[1]
  i2152.m_StyleName = i2153[2]
  i2152.m_PointSize = i2153[3]
  i2152.m_Scale = i2153[4]
  i2152.m_UnitsPerEM = i2153[5]
  i2152.m_LineHeight = i2153[6]
  i2152.m_AscentLine = i2153[7]
  i2152.m_CapLine = i2153[8]
  i2152.m_MeanLine = i2153[9]
  i2152.m_Baseline = i2153[10]
  i2152.m_DescentLine = i2153[11]
  i2152.m_SuperscriptOffset = i2153[12]
  i2152.m_SuperscriptSize = i2153[13]
  i2152.m_SubscriptOffset = i2153[14]
  i2152.m_SubscriptSize = i2153[15]
  i2152.m_UnderlineOffset = i2153[16]
  i2152.m_UnderlineThickness = i2153[17]
  i2152.m_StrikethroughOffset = i2153[18]
  i2152.m_StrikethroughThickness = i2153[19]
  i2152.m_TabWidth = i2153[20]
  return i2152
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2157 = data
  i2156.m_Index = i2157[0]
  i2156.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2157[1], i2156.m_Metrics)
  i2156.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2157[2], i2156.m_GlyphRect)
  i2156.m_Scale = i2157[3]
  i2156.m_AtlasIndex = i2157[4]
  i2156.m_ClassDefinitionType = i2157[5]
  return i2156
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2159 = data
  i2158.m_Width = i2159[0]
  i2158.m_Height = i2159[1]
  i2158.m_HorizontalBearingX = i2159[2]
  i2158.m_HorizontalBearingY = i2159[3]
  i2158.m_HorizontalAdvance = i2159[4]
  return i2158
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2161 = data
  i2160.m_X = i2161[0]
  i2160.m_Y = i2161[1]
  i2160.m_Width = i2161[2]
  i2160.m_Height = i2161[3]
  return i2160
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2164 = root || request.c( 'TMPro.TMP_Character' )
  var i2165 = data
  i2164.m_ElementType = i2165[0]
  i2164.m_Unicode = i2165[1]
  i2164.m_GlyphIndex = i2165[2]
  i2164.m_Scale = i2165[3]
  return i2164
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2170 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2171 = data
  i2170.Name = i2171[0]
  i2170.PointSize = i2171[1]
  i2170.Scale = i2171[2]
  i2170.CharacterCount = i2171[3]
  i2170.LineHeight = i2171[4]
  i2170.Baseline = i2171[5]
  i2170.Ascender = i2171[6]
  i2170.CapHeight = i2171[7]
  i2170.Descender = i2171[8]
  i2170.CenterLine = i2171[9]
  i2170.SuperscriptOffset = i2171[10]
  i2170.SubscriptOffset = i2171[11]
  i2170.SubSize = i2171[12]
  i2170.Underline = i2171[13]
  i2170.UnderlineThickness = i2171[14]
  i2170.strikethrough = i2171[15]
  i2170.strikethroughThickness = i2171[16]
  i2170.TabWidth = i2171[17]
  i2170.Padding = i2171[18]
  i2170.AtlasWidth = i2171[19]
  i2170.AtlasHeight = i2171[20]
  return i2170
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2174 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2175 = data
  i2174.id = i2175[0]
  i2174.x = i2175[1]
  i2174.y = i2175[2]
  i2174.width = i2175[3]
  i2174.height = i2175[4]
  i2174.xOffset = i2175[5]
  i2174.yOffset = i2175[6]
  i2174.xAdvance = i2175[7]
  i2174.scale = i2175[8]
  return i2174
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2176 = root || request.c( 'TMPro.KerningTable' )
  var i2177 = data
  var i2179 = i2177[0]
  var i2178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.add(request.d('TMPro.KerningPair', i2179[i + 0]));
  }
  i2176.kerningPairs = i2178
  return i2176
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2182 = root || request.c( 'TMPro.KerningPair' )
  var i2183 = data
  i2182.xOffset = i2183[0]
  i2182.m_FirstGlyph = i2183[1]
  i2182.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2183[2], i2182.m_FirstGlyphAdjustments)
  i2182.m_SecondGlyph = i2183[3]
  i2182.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2183[4], i2182.m_SecondGlyphAdjustments)
  i2182.m_IgnoreSpacingAdjustments = !!i2183[5]
  return i2182
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2184 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2185 = data
  var i2187 = i2185[0]
  var i2186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2187[i + 0]));
  }
  i2184.m_GlyphPairAdjustmentRecords = i2186
  return i2184
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2190 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2191 = data
  i2190.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2191[0], i2190.m_FirstAdjustmentRecord)
  i2190.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2191[1], i2190.m_SecondAdjustmentRecord)
  i2190.m_FeatureLookupFlags = i2191[2]
  return i2190
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2192 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2193 = data
  i2192.m_GlyphIndex = i2193[0]
  i2192.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2193[1], i2192.m_GlyphValueRecord)
  return i2192
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2194 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2195 = data
  i2194.m_XPlacement = i2195[0]
  i2194.m_YPlacement = i2195[1]
  i2194.m_XAdvance = i2195[2]
  i2194.m_YAdvance = i2195[3]
  return i2194
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2198 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2199 = data
  i2198.sourceFontFileName = i2199[0]
  i2198.sourceFontFileGUID = i2199[1]
  i2198.pointSizeSamplingMode = i2199[2]
  i2198.pointSize = i2199[3]
  i2198.padding = i2199[4]
  i2198.packingMode = i2199[5]
  i2198.atlasWidth = i2199[6]
  i2198.atlasHeight = i2199[7]
  i2198.characterSetSelectionMode = i2199[8]
  i2198.characterSequence = i2199[9]
  i2198.referencedFontAssetGUID = i2199[10]
  i2198.referencedTextAssetGUID = i2199[11]
  i2198.fontStyle = i2199[12]
  i2198.fontStyleModifier = i2199[13]
  i2198.renderMode = i2199[14]
  i2198.includeFontFeatures = !!i2199[15]
  return i2198
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2202 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2203 = data
  request.r(i2203[0], i2203[1], 0, i2202, 'regularTypeface')
  request.r(i2203[2], i2203[3], 0, i2202, 'italicTypeface')
  return i2202
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2204 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2205 = data
  i2204.useSafeMode = !!i2205[0]
  i2204.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2205[1], i2204.safeModeOptions)
  i2204.timeScale = i2205[2]
  i2204.unscaledTimeScale = i2205[3]
  i2204.useSmoothDeltaTime = !!i2205[4]
  i2204.maxSmoothUnscaledTime = i2205[5]
  i2204.rewindCallbackMode = i2205[6]
  i2204.showUnityEditorReport = !!i2205[7]
  i2204.logBehaviour = i2205[8]
  i2204.drawGizmos = !!i2205[9]
  i2204.defaultRecyclable = !!i2205[10]
  i2204.defaultAutoPlay = i2205[11]
  i2204.defaultUpdateType = i2205[12]
  i2204.defaultTimeScaleIndependent = !!i2205[13]
  i2204.defaultEaseType = i2205[14]
  i2204.defaultEaseOvershootOrAmplitude = i2205[15]
  i2204.defaultEasePeriod = i2205[16]
  i2204.defaultAutoKill = !!i2205[17]
  i2204.defaultLoopType = i2205[18]
  i2204.debugMode = !!i2205[19]
  i2204.debugStoreTargetId = !!i2205[20]
  i2204.showPreviewPanel = !!i2205[21]
  i2204.storeSettingsLocation = i2205[22]
  i2204.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2205[23], i2204.modules)
  i2204.createASMDEF = !!i2205[24]
  i2204.showPlayingTweens = !!i2205[25]
  i2204.showPausedTweens = !!i2205[26]
  return i2204
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2206 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2207 = data
  i2206.logBehaviour = i2207[0]
  i2206.nestedTweenFailureBehaviour = i2207[1]
  return i2206
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2208 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2209 = data
  i2208.showPanel = !!i2209[0]
  i2208.audioEnabled = !!i2209[1]
  i2208.physicsEnabled = !!i2209[2]
  i2208.physics2DEnabled = !!i2209[3]
  i2208.spriteEnabled = !!i2209[4]
  i2208.uiEnabled = !!i2209[5]
  i2208.textMeshProEnabled = !!i2209[6]
  i2208.tk2DEnabled = !!i2209[7]
  i2208.deAudioEnabled = !!i2209[8]
  i2208.deUnityExtendedEnabled = !!i2209[9]
  i2208.epoOutlineEnabled = !!i2209[10]
  return i2208
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2210 = root || request.c( 'TMPro.TMP_Settings' )
  var i2211 = data
  i2210.m_enableWordWrapping = !!i2211[0]
  i2210.m_enableKerning = !!i2211[1]
  i2210.m_enableExtraPadding = !!i2211[2]
  i2210.m_enableTintAllSprites = !!i2211[3]
  i2210.m_enableParseEscapeCharacters = !!i2211[4]
  i2210.m_EnableRaycastTarget = !!i2211[5]
  i2210.m_GetFontFeaturesAtRuntime = !!i2211[6]
  i2210.m_missingGlyphCharacter = i2211[7]
  i2210.m_warningsDisabled = !!i2211[8]
  request.r(i2211[9], i2211[10], 0, i2210, 'm_defaultFontAsset')
  i2210.m_defaultFontAssetPath = i2211[11]
  i2210.m_defaultFontSize = i2211[12]
  i2210.m_defaultAutoSizeMinRatio = i2211[13]
  i2210.m_defaultAutoSizeMaxRatio = i2211[14]
  i2210.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2211[15], i2211[16] )
  i2210.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2211[17], i2211[18] )
  i2210.m_autoSizeTextContainer = !!i2211[19]
  i2210.m_IsTextObjectScaleStatic = !!i2211[20]
  var i2213 = i2211[21]
  var i2212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2213.length; i += 2) {
  request.r(i2213[i + 0], i2213[i + 1], 1, i2212, '')
  }
  i2210.m_fallbackFontAssets = i2212
  i2210.m_matchMaterialPreset = !!i2211[22]
  request.r(i2211[23], i2211[24], 0, i2210, 'm_defaultSpriteAsset')
  i2210.m_defaultSpriteAssetPath = i2211[25]
  i2210.m_enableEmojiSupport = !!i2211[26]
  i2210.m_MissingCharacterSpriteUnicode = i2211[27]
  i2210.m_defaultColorGradientPresetsPath = i2211[28]
  request.r(i2211[29], i2211[30], 0, i2210, 'm_defaultStyleSheet')
  i2210.m_StyleSheetsResourcePath = i2211[31]
  request.r(i2211[32], i2211[33], 0, i2210, 'm_leadingCharacters')
  request.r(i2211[34], i2211[35], 0, i2210, 'm_followingCharacters')
  i2210.m_UseModernHangulLineBreakingRules = !!i2211[36]
  return i2210
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2214 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2215 = data
  i2214.hashCode = i2215[0]
  request.r(i2215[1], i2215[2], 0, i2214, 'material')
  i2214.materialHashCode = i2215[3]
  request.r(i2215[4], i2215[5], 0, i2214, 'spriteSheet')
  var i2217 = i2215[6]
  var i2216 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.add(request.d('TMPro.TMP_Sprite', i2217[i + 0]));
  }
  i2214.spriteInfoList = i2216
  var i2219 = i2215[7]
  var i2218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2219.length; i += 2) {
  request.r(i2219[i + 0], i2219[i + 1], 1, i2218, '')
  }
  i2214.fallbackSpriteAssets = i2218
  i2214.m_Version = i2215[8]
  i2214.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2215[9], i2214.m_FaceInfo)
  var i2221 = i2215[10]
  var i2220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.add(request.d('TMPro.TMP_SpriteCharacter', i2221[i + 0]));
  }
  i2214.m_SpriteCharacterTable = i2220
  var i2223 = i2215[11]
  var i2222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.add(request.d('TMPro.TMP_SpriteGlyph', i2223[i + 0]));
  }
  i2214.m_SpriteGlyphTable = i2222
  return i2214
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2226 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2227 = data
  i2226.name = i2227[0]
  i2226.hashCode = i2227[1]
  i2226.unicode = i2227[2]
  i2226.pivot = new pc.Vec2( i2227[3], i2227[4] )
  request.r(i2227[5], i2227[6], 0, i2226, 'sprite')
  i2226.id = i2227[7]
  i2226.x = i2227[8]
  i2226.y = i2227[9]
  i2226.width = i2227[10]
  i2226.height = i2227[11]
  i2226.xOffset = i2227[12]
  i2226.yOffset = i2227[13]
  i2226.xAdvance = i2227[14]
  i2226.scale = i2227[15]
  return i2226
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2232 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2233 = data
  i2232.m_Name = i2233[0]
  i2232.m_HashCode = i2233[1]
  i2232.m_ElementType = i2233[2]
  i2232.m_Unicode = i2233[3]
  i2232.m_GlyphIndex = i2233[4]
  i2232.m_Scale = i2233[5]
  return i2232
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2236 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2237 = data
  request.r(i2237[0], i2237[1], 0, i2236, 'sprite')
  i2236.m_Index = i2237[2]
  i2236.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2237[3], i2236.m_Metrics)
  i2236.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2237[4], i2236.m_GlyphRect)
  i2236.m_Scale = i2237[5]
  i2236.m_AtlasIndex = i2237[6]
  i2236.m_ClassDefinitionType = i2237[7]
  return i2236
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2238 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2239 = data
  var i2241 = i2239[0]
  var i2240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.add(request.d('TMPro.TMP_Style', i2241[i + 0]));
  }
  i2238.m_StyleList = i2240
  return i2238
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2244 = root || request.c( 'TMPro.TMP_Style' )
  var i2245 = data
  i2244.m_Name = i2245[0]
  i2244.m_HashCode = i2245[1]
  i2244.m_OpeningDefinition = i2245[2]
  i2244.m_ClosingDefinition = i2245[3]
  i2244.m_OpeningTagArray = i2245[4]
  i2244.m_ClosingTagArray = i2245[5]
  i2244.m_OpeningTagUnicodeArray = i2245[6]
  i2244.m_ClosingTagUnicodeArray = i2245[7]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2247 = data
  var i2249 = i2247[0]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2249[i + 0]) );
  }
  i2246.files = i2248
  i2246.componentToPrefabIds = i2247[1]
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2253 = data
  i2252.path = i2253[0]
  request.r(i2253[1], i2253[2], 0, i2252, 'unityObject')
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2255 = data
  var i2257 = i2255[0]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2257[i + 0]) );
  }
  i2254.scriptsExecutionOrder = i2256
  var i2259 = i2255[1]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2259[i + 0]) );
  }
  i2254.sortingLayers = i2258
  var i2261 = i2255[2]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2261[i + 0]) );
  }
  i2254.cullingLayers = i2260
  i2254.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2255[3], i2254.timeSettings)
  i2254.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2255[4], i2254.physicsSettings)
  i2254.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2255[5], i2254.physics2DSettings)
  i2254.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2255[6], i2254.qualitySettings)
  i2254.enableRealtimeShadows = !!i2255[7]
  i2254.enableAutoInstancing = !!i2255[8]
  i2254.enableDynamicBatching = !!i2255[9]
  i2254.lightmapEncodingQuality = i2255[10]
  i2254.desiredColorSpace = i2255[11]
  var i2263 = i2255[12]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( i2263[i + 0] );
  }
  i2254.allTags = i2262
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2267 = data
  i2266.name = i2267[0]
  i2266.value = i2267[1]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2271 = data
  i2270.id = i2271[0]
  i2270.name = i2271[1]
  i2270.value = i2271[2]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2275 = data
  i2274.id = i2275[0]
  i2274.name = i2275[1]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2277 = data
  i2276.fixedDeltaTime = i2277[0]
  i2276.maximumDeltaTime = i2277[1]
  i2276.timeScale = i2277[2]
  i2276.maximumParticleTimestep = i2277[3]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2279 = data
  i2278.gravity = new pc.Vec3( i2279[0], i2279[1], i2279[2] )
  i2278.defaultSolverIterations = i2279[3]
  i2278.bounceThreshold = i2279[4]
  i2278.autoSyncTransforms = !!i2279[5]
  i2278.autoSimulation = !!i2279[6]
  var i2281 = i2279[7]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2281[i + 0]) );
  }
  i2278.collisionMatrix = i2280
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2285 = data
  i2284.enabled = !!i2285[0]
  i2284.layerId = i2285[1]
  i2284.otherLayerId = i2285[2]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2287 = data
  request.r(i2287[0], i2287[1], 0, i2286, 'material')
  i2286.gravity = new pc.Vec2( i2287[2], i2287[3] )
  i2286.positionIterations = i2287[4]
  i2286.velocityIterations = i2287[5]
  i2286.velocityThreshold = i2287[6]
  i2286.maxLinearCorrection = i2287[7]
  i2286.maxAngularCorrection = i2287[8]
  i2286.maxTranslationSpeed = i2287[9]
  i2286.maxRotationSpeed = i2287[10]
  i2286.baumgarteScale = i2287[11]
  i2286.baumgarteTOIScale = i2287[12]
  i2286.timeToSleep = i2287[13]
  i2286.linearSleepTolerance = i2287[14]
  i2286.angularSleepTolerance = i2287[15]
  i2286.defaultContactOffset = i2287[16]
  i2286.autoSimulation = !!i2287[17]
  i2286.queriesHitTriggers = !!i2287[18]
  i2286.queriesStartInColliders = !!i2287[19]
  i2286.callbacksOnDisable = !!i2287[20]
  i2286.reuseCollisionCallbacks = !!i2287[21]
  i2286.autoSyncTransforms = !!i2287[22]
  var i2289 = i2287[23]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2289[i + 0]) );
  }
  i2286.collisionMatrix = i2288
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2293 = data
  i2292.enabled = !!i2293[0]
  i2292.layerId = i2293[1]
  i2292.otherLayerId = i2293[2]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2295 = data
  var i2297 = i2295[0]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2297[i + 0]) );
  }
  i2294.qualityLevels = i2296
  var i2299 = i2295[1]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.push( i2299[i + 0] );
  }
  i2294.names = i2298
  i2294.shadows = i2295[2]
  i2294.anisotropicFiltering = i2295[3]
  i2294.antiAliasing = i2295[4]
  i2294.lodBias = i2295[5]
  i2294.shadowCascades = i2295[6]
  i2294.shadowDistance = i2295[7]
  i2294.shadowmaskMode = i2295[8]
  i2294.shadowProjection = i2295[9]
  i2294.shadowResolution = i2295[10]
  i2294.softParticles = !!i2295[11]
  i2294.softVegetation = !!i2295[12]
  i2294.activeColorSpace = i2295[13]
  i2294.desiredColorSpace = i2295[14]
  i2294.masterTextureLimit = i2295[15]
  i2294.maxQueuedFrames = i2295[16]
  i2294.particleRaycastBudget = i2295[17]
  i2294.pixelLightCount = i2295[18]
  i2294.realtimeReflectionProbes = !!i2295[19]
  i2294.shadowCascade2Split = i2295[20]
  i2294.shadowCascade4Split = new pc.Vec3( i2295[21], i2295[22], i2295[23] )
  i2294.streamingMipmapsActive = !!i2295[24]
  i2294.vSyncCount = i2295[25]
  i2294.asyncUploadBufferSize = i2295[26]
  i2294.asyncUploadTimeSlice = i2295[27]
  i2294.billboardsFaceCameraPosition = !!i2295[28]
  i2294.shadowNearPlaneOffset = i2295[29]
  i2294.streamingMipmapsMemoryBudget = i2295[30]
  i2294.maximumLODLevel = i2295[31]
  i2294.streamingMipmapsAddAllCameras = !!i2295[32]
  i2294.streamingMipmapsMaxLevelReduction = i2295[33]
  i2294.streamingMipmapsRenderersPerFrame = i2295[34]
  i2294.resolutionScalingFixedDPIFactor = i2295[35]
  i2294.streamingMipmapsMaxFileIORequests = i2295[36]
  i2294.currentQualityLevel = i2295[37]
  return i2294
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2302 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2303 = data
  i2302.xPlacement = i2303[0]
  i2302.yPlacement = i2303[1]
  i2302.xAdvance = i2303[2]
  i2302.yAdvance = i2303[3]
  return i2302
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[12],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[12],"78":[79],"80":[81],"82":[81],"19":[2],"34":[16],"83":[2],"84":[85],"86":[87],"88":[85],"89":[2],"90":[2],"21":[19],"6":[3,2],"91":[2],"20":[19],"30":[2],"92":[2],"93":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[3,2],"101":[2],"102":[2],"103":[2],"104":[2],"105":[3,2],"106":[2],"107":[36],"108":[36],"37":[36],"109":[36],"110":[12],"111":[12],"112":[113],"114":[12],"115":[2],"116":[79,2],"17":[2,3],"117":[2],"118":[3,2],"119":[79],"120":[3,2],"121":[2],"122":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","TMPro.TMP_FontAsset","UnityEngine.Material","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "10.8";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Baskets4";

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

Deserializers.buildID = "ae10b8aa-bc41-442f-b881-9ba344684c3f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

