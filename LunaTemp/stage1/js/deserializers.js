var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3756 = root || request.c( 'UnityEngine.JointSpring' )
  var i3757 = data
  i3756.spring = i3757[0]
  i3756.damper = i3757[1]
  i3756.targetPosition = i3757[2]
  return i3756
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3758 = root || request.c( 'UnityEngine.JointMotor' )
  var i3759 = data
  i3758.m_TargetVelocity = i3759[0]
  i3758.m_Force = i3759[1]
  i3758.m_FreeSpin = i3759[2]
  return i3758
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3760 = root || request.c( 'UnityEngine.JointLimits' )
  var i3761 = data
  i3760.m_Min = i3761[0]
  i3760.m_Max = i3761[1]
  i3760.m_Bounciness = i3761[2]
  i3760.m_BounceMinVelocity = i3761[3]
  i3760.m_ContactDistance = i3761[4]
  i3760.minBounce = i3761[5]
  i3760.maxBounce = i3761[6]
  return i3760
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3762 = root || request.c( 'UnityEngine.JointDrive' )
  var i3763 = data
  i3762.m_PositionSpring = i3763[0]
  i3762.m_PositionDamper = i3763[1]
  i3762.m_MaximumForce = i3763[2]
  i3762.m_UseAcceleration = i3763[3]
  return i3762
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3764 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3765 = data
  i3764.m_Spring = i3765[0]
  i3764.m_Damper = i3765[1]
  return i3764
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3766 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3767 = data
  i3766.m_Limit = i3767[0]
  i3766.m_Bounciness = i3767[1]
  i3766.m_ContactDistance = i3767[2]
  return i3766
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3768 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3769 = data
  i3768.m_ExtremumSlip = i3769[0]
  i3768.m_ExtremumValue = i3769[1]
  i3768.m_AsymptoteSlip = i3769[2]
  i3768.m_AsymptoteValue = i3769[3]
  i3768.m_Stiffness = i3769[4]
  return i3768
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3770 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3771 = data
  i3770.m_LowerAngle = i3771[0]
  i3770.m_UpperAngle = i3771[1]
  return i3770
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3772 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3773 = data
  i3772.m_MotorSpeed = i3773[0]
  i3772.m_MaximumMotorTorque = i3773[1]
  return i3772
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3774 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3775 = data
  i3774.m_DampingRatio = i3775[0]
  i3774.m_Frequency = i3775[1]
  i3774.m_Angle = i3775[2]
  return i3774
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3776 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3777 = data
  i3776.m_LowerTranslation = i3777[0]
  i3776.m_UpperTranslation = i3777[1]
  return i3776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3779 = data
  i3778.name = i3779[0]
  i3778.width = i3779[1]
  i3778.height = i3779[2]
  i3778.mipmapCount = i3779[3]
  i3778.anisoLevel = i3779[4]
  i3778.filterMode = i3779[5]
  i3778.hdr = !!i3779[6]
  i3778.format = i3779[7]
  i3778.wrapMode = i3779[8]
  i3778.alphaIsTransparency = !!i3779[9]
  i3778.alphaSource = i3779[10]
  i3778.graphicsFormat = i3779[11]
  i3778.sRGBTexture = !!i3779[12]
  i3778.desiredColorSpace = i3779[13]
  i3778.wrapU = i3779[14]
  i3778.wrapV = i3779[15]
  return i3778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3780 = root || new pc.UnityMaterial()
  var i3781 = data
  i3780.name = i3781[0]
  request.r(i3781[1], i3781[2], 0, i3780, 'shader')
  i3780.renderQueue = i3781[3]
  i3780.enableInstancing = !!i3781[4]
  var i3783 = i3781[5]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3783[i + 0]) );
  }
  i3780.floatParameters = i3782
  var i3785 = i3781[6]
  var i3784 = []
  for(var i = 0; i < i3785.length; i += 1) {
    i3784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3785[i + 0]) );
  }
  i3780.colorParameters = i3784
  var i3787 = i3781[7]
  var i3786 = []
  for(var i = 0; i < i3787.length; i += 1) {
    i3786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3787[i + 0]) );
  }
  i3780.vectorParameters = i3786
  var i3789 = i3781[8]
  var i3788 = []
  for(var i = 0; i < i3789.length; i += 1) {
    i3788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3789[i + 0]) );
  }
  i3780.textureParameters = i3788
  var i3791 = i3781[9]
  var i3790 = []
  for(var i = 0; i < i3791.length; i += 1) {
    i3790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3791[i + 0]) );
  }
  i3780.materialFlags = i3790
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3795 = data
  i3794.name = i3795[0]
  i3794.value = i3795[1]
  return i3794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3799 = data
  i3798.name = i3799[0]
  i3798.value = new pc.Color(i3799[1], i3799[2], i3799[3], i3799[4])
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3803 = data
  i3802.name = i3803[0]
  i3802.value = new pc.Vec4( i3803[1], i3803[2], i3803[3], i3803[4] )
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3807 = data
  i3806.name = i3807[0]
  request.r(i3807[1], i3807[2], 0, i3806, 'value')
  return i3806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3811 = data
  i3810.name = i3811[0]
  i3810.enabled = !!i3811[1]
  return i3810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3813 = data
  i3812.pivot = new pc.Vec2( i3813[0], i3813[1] )
  i3812.anchorMin = new pc.Vec2( i3813[2], i3813[3] )
  i3812.anchorMax = new pc.Vec2( i3813[4], i3813[5] )
  i3812.sizeDelta = new pc.Vec2( i3813[6], i3813[7] )
  i3812.anchoredPosition3D = new pc.Vec3( i3813[8], i3813[9], i3813[10] )
  i3812.rotation = new pc.Quat(i3813[11], i3813[12], i3813[13], i3813[14])
  i3812.scale = new pc.Vec3( i3813[15], i3813[16], i3813[17] )
  return i3812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3815 = data
  i3814.cullTransparentMesh = !!i3815[0]
  return i3814
}

Deserializers["People"] = function (request, data, root) {
  var i3816 = root || request.c( 'People' )
  var i3817 = data
  request.r(i3817[0], i3817[1], 0, i3816, '_readyImage')
  request.r(i3817[2], i3817[3], 0, i3816, '_additiveImage1')
  request.r(i3817[4], i3817[5], 0, i3816, '_additiveImage2')
  request.r(i3817[6], i3817[7], 0, i3816, '_endPoint')
  request.r(i3817[8], i3817[9], 0, i3816, 'Bank')
  request.r(i3817[10], i3817[11], 0, i3816, '_sizeText')
  i3816.CupType = i3817[12]
  i3816.JuiceType = i3817[13]
  i3816.AdditiveType1 = i3817[14]
  i3816.AdditiveType2 = i3817[15]
  request.r(i3817[16], i3817[17], 0, i3816, '_finishSound')
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3819 = data
  request.r(i3819[0], i3819[1], 0, i3818, 'clip')
  request.r(i3819[2], i3819[3], 0, i3818, 'outputAudioMixerGroup')
  i3818.playOnAwake = !!i3819[4]
  i3818.loop = !!i3819[5]
  i3818.time = i3819[6]
  i3818.volume = i3819[7]
  i3818.pitch = i3819[8]
  i3818.enabled = !!i3819[9]
  return i3818
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3820 = root || request.c( 'UnityEngine.UI.Image' )
  var i3821 = data
  request.r(i3821[0], i3821[1], 0, i3820, 'm_Sprite')
  i3820.m_Type = i3821[2]
  i3820.m_PreserveAspect = !!i3821[3]
  i3820.m_FillCenter = !!i3821[4]
  i3820.m_FillMethod = i3821[5]
  i3820.m_FillAmount = i3821[6]
  i3820.m_FillClockwise = !!i3821[7]
  i3820.m_FillOrigin = i3821[8]
  i3820.m_UseSpriteMesh = !!i3821[9]
  i3820.m_PixelsPerUnitMultiplier = i3821[10]
  request.r(i3821[11], i3821[12], 0, i3820, 'm_Material')
  i3820.m_Maskable = !!i3821[13]
  i3820.m_Color = new pc.Color(i3821[14], i3821[15], i3821[16], i3821[17])
  i3820.m_RaycastTarget = !!i3821[18]
  i3820.m_RaycastPadding = new pc.Vec4( i3821[19], i3821[20], i3821[21], i3821[22] )
  return i3820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3823 = data
  i3822.name = i3823[0]
  i3822.tagId = i3823[1]
  i3822.enabled = !!i3823[2]
  i3822.isStatic = !!i3823[3]
  i3822.layer = i3823[4]
  return i3822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3825 = data
  i3824.name = i3825[0]
  i3824.index = i3825[1]
  i3824.startup = !!i3825[2]
  return i3824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3827 = data
  i3826.position = new pc.Vec3( i3827[0], i3827[1], i3827[2] )
  i3826.scale = new pc.Vec3( i3827[3], i3827[4], i3827[5] )
  i3826.rotation = new pc.Quat(i3827[6], i3827[7], i3827[8], i3827[9])
  return i3826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3829 = data
  i3828.enabled = !!i3829[0]
  i3828.aspect = i3829[1]
  i3828.orthographic = !!i3829[2]
  i3828.orthographicSize = i3829[3]
  i3828.backgroundColor = new pc.Color(i3829[4], i3829[5], i3829[6], i3829[7])
  i3828.nearClipPlane = i3829[8]
  i3828.farClipPlane = i3829[9]
  i3828.fieldOfView = i3829[10]
  i3828.depth = i3829[11]
  i3828.clearFlags = i3829[12]
  i3828.cullingMask = i3829[13]
  i3828.rect = i3829[14]
  request.r(i3829[15], i3829[16], 0, i3828, 'targetTexture')
  i3828.usePhysicalProperties = !!i3829[17]
  i3828.focalLength = i3829[18]
  i3828.sensorSize = new pc.Vec2( i3829[19], i3829[20] )
  i3828.lensShift = new pc.Vec2( i3829[21], i3829[22] )
  i3828.gateFit = i3829[23]
  i3828.commandBufferCount = i3829[24]
  i3828.cameraType = i3829[25]
  return i3828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3831 = data
  request.r(i3831[0], i3831[1], 0, i3830, 'animatorController')
  request.r(i3831[2], i3831[3], 0, i3830, 'avatar')
  i3830.updateMode = i3831[4]
  i3830.hasTransformHierarchy = !!i3831[5]
  i3830.applyRootMotion = !!i3831[6]
  var i3833 = i3831[7]
  var i3832 = []
  for(var i = 0; i < i3833.length; i += 2) {
  request.r(i3833[i + 0], i3833[i + 1], 2, i3832, '')
  }
  i3830.humanBones = i3832
  i3830.enabled = !!i3831[8]
  return i3830
}

Deserializers["Bank"] = function (request, data, root) {
  var i3836 = root || request.c( 'Bank' )
  var i3837 = data
  request.r(i3837[0], i3837[1], 0, i3836, 'BuyBigCupButton')
  request.r(i3837[2], i3837[3], 0, i3836, 'BigCupButton')
  request.r(i3837[4], i3837[5], 0, i3836, 'MiddleCupButton')
  request.r(i3837[6], i3837[7], 0, i3836, 'MoneyText')
  request.r(i3837[8], i3837[9], 0, i3836, 'Tutorial')
  request.r(i3837[10], i3837[11], 0, i3836, 'BuyAdditiveButton')
  request.r(i3837[12], i3837[13], 0, i3836, 'BuyJuiceButton')
  request.r(i3837[14], i3837[15], 0, i3836, 'JuiceButton1')
  request.r(i3837[16], i3837[17], 0, i3836, 'JuiceButton2')
  request.r(i3837[18], i3837[19], 0, i3836, 'JuiceButton3')
  request.r(i3837[20], i3837[21], 0, i3836, 'Additive1Button')
  request.r(i3837[22], i3837[23], 0, i3836, 'Additive2Button')
  i3836.Money = i3837[24]
  i3836.IsBigCupBuy = !!i3837[25]
  i3836.IsJuiceBuy = !!i3837[26]
  i3836.IsAdditiveBuy = !!i3837[27]
  request.r(i3837[28], i3837[29], 0, i3836, '_buySound')
  return i3836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3839 = data
  i3838.enabled = !!i3839[0]
  i3838.planeDistance = i3839[1]
  i3838.referencePixelsPerUnit = i3839[2]
  i3838.isFallbackOverlay = !!i3839[3]
  i3838.renderMode = i3839[4]
  i3838.renderOrder = i3839[5]
  i3838.sortingLayerName = i3839[6]
  i3838.sortingOrder = i3839[7]
  i3838.scaleFactor = i3839[8]
  request.r(i3839[9], i3839[10], 0, i3838, 'worldCamera')
  i3838.overrideSorting = !!i3839[11]
  i3838.pixelPerfect = !!i3839[12]
  i3838.targetDisplay = i3839[13]
  i3838.overridePixelPerfect = !!i3839[14]
  return i3838
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3840 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3841 = data
  i3840.m_UiScaleMode = i3841[0]
  i3840.m_ReferencePixelsPerUnit = i3841[1]
  i3840.m_ScaleFactor = i3841[2]
  i3840.m_ReferenceResolution = new pc.Vec2( i3841[3], i3841[4] )
  i3840.m_ScreenMatchMode = i3841[5]
  i3840.m_MatchWidthOrHeight = i3841[6]
  i3840.m_PhysicalUnit = i3841[7]
  i3840.m_FallbackScreenDPI = i3841[8]
  i3840.m_DefaultSpriteDPI = i3841[9]
  i3840.m_DynamicPixelsPerUnit = i3841[10]
  i3840.m_PresetInfoIsWorld = !!i3841[11]
  return i3840
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3842 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3843 = data
  i3842.m_IgnoreReversedGraphics = !!i3843[0]
  i3842.m_BlockingObjects = i3843[1]
  i3842.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3843[2] )
  return i3842
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i3844 = root || request.c( 'ImageShiftOnOrientation' )
  var i3845 = data
  var i3847 = i3845[0]
  var i3846 = []
  for(var i = 0; i < i3847.length; i += 1) {
    i3846.push( request.d('ItemSwitcherData', i3847[i + 0]) );
  }
  i3844.Items = i3846
  request.r(i3845[1], i3845[2], 0, i3844, '_backHorizontal')
  request.r(i3845[3], i3845[4], 0, i3844, '_backVertical')
  request.r(i3845[5], i3845[6], 0, i3844, '_tableHorizontal')
  request.r(i3845[7], i3845[8], 0, i3844, '_tableVertical')
  i3844.IsDebug = !!i3845[9]
  i3844.CanCopy = !!i3845[10]
  return i3844
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i3850 = root || request.c( 'ItemSwitcherData' )
  var i3851 = data
  request.r(i3851[0], i3851[1], 0, i3850, 'Target')
  i3850.HorizontalAnchoredPosition = new pc.Vec2( i3851[2], i3851[3] )
  i3850.SizeHorizontal = new pc.Vec2( i3851[4], i3851[5] )
  i3850.VerticalAnchoredPosition = new pc.Vec2( i3851[6], i3851[7] )
  i3850.SizeVertical = new pc.Vec2( i3851[8], i3851[9] )
  i3850.MinHorizontal = new pc.Vec2( i3851[10], i3851[11] )
  i3850.MaxHorizontal = new pc.Vec2( i3851[12], i3851[13] )
  i3850.MinVertical = new pc.Vec2( i3851[14], i3851[15] )
  i3850.MaxVertical = new pc.Vec2( i3851[16], i3851[17] )
  i3850.IsAnchored = !!i3851[18]
  i3850.IsDebug = !!i3851[19]
  i3850.CopyHorizontal = !!i3851[20]
  i3850.CopyVertical = !!i3851[21]
  return i3850
}

Deserializers["Point"] = function (request, data, root) {
  var i3852 = root || request.c( 'Point' )
  var i3853 = data
  return i3852
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3854 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3855 = data
  i3854.m_hasFontAssetChanged = !!i3855[0]
  request.r(i3855[1], i3855[2], 0, i3854, 'm_baseMaterial')
  i3854.m_maskOffset = new pc.Vec4( i3855[3], i3855[4], i3855[5], i3855[6] )
  i3854.m_text = i3855[7]
  i3854.m_isRightToLeft = !!i3855[8]
  request.r(i3855[9], i3855[10], 0, i3854, 'm_fontAsset')
  request.r(i3855[11], i3855[12], 0, i3854, 'm_sharedMaterial')
  var i3857 = i3855[13]
  var i3856 = []
  for(var i = 0; i < i3857.length; i += 2) {
  request.r(i3857[i + 0], i3857[i + 1], 2, i3856, '')
  }
  i3854.m_fontSharedMaterials = i3856
  request.r(i3855[14], i3855[15], 0, i3854, 'm_fontMaterial')
  var i3859 = i3855[16]
  var i3858 = []
  for(var i = 0; i < i3859.length; i += 2) {
  request.r(i3859[i + 0], i3859[i + 1], 2, i3858, '')
  }
  i3854.m_fontMaterials = i3858
  i3854.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3855[17], i3855[18], i3855[19], i3855[20])
  i3854.m_fontColor = new pc.Color(i3855[21], i3855[22], i3855[23], i3855[24])
  i3854.m_enableVertexGradient = !!i3855[25]
  i3854.m_colorMode = i3855[26]
  i3854.m_fontColorGradient = request.d('TMPro.VertexGradient', i3855[27], i3854.m_fontColorGradient)
  request.r(i3855[28], i3855[29], 0, i3854, 'm_fontColorGradientPreset')
  request.r(i3855[30], i3855[31], 0, i3854, 'm_spriteAsset')
  i3854.m_tintAllSprites = !!i3855[32]
  request.r(i3855[33], i3855[34], 0, i3854, 'm_StyleSheet')
  i3854.m_TextStyleHashCode = i3855[35]
  i3854.m_overrideHtmlColors = !!i3855[36]
  i3854.m_faceColor = UnityEngine.Color32.ConstructColor(i3855[37], i3855[38], i3855[39], i3855[40])
  i3854.m_fontSize = i3855[41]
  i3854.m_fontSizeBase = i3855[42]
  i3854.m_fontWeight = i3855[43]
  i3854.m_enableAutoSizing = !!i3855[44]
  i3854.m_fontSizeMin = i3855[45]
  i3854.m_fontSizeMax = i3855[46]
  i3854.m_fontStyle = i3855[47]
  i3854.m_HorizontalAlignment = i3855[48]
  i3854.m_VerticalAlignment = i3855[49]
  i3854.m_textAlignment = i3855[50]
  i3854.m_characterSpacing = i3855[51]
  i3854.m_wordSpacing = i3855[52]
  i3854.m_lineSpacing = i3855[53]
  i3854.m_lineSpacingMax = i3855[54]
  i3854.m_paragraphSpacing = i3855[55]
  i3854.m_charWidthMaxAdj = i3855[56]
  i3854.m_enableWordWrapping = !!i3855[57]
  i3854.m_wordWrappingRatios = i3855[58]
  i3854.m_overflowMode = i3855[59]
  request.r(i3855[60], i3855[61], 0, i3854, 'm_linkedTextComponent')
  request.r(i3855[62], i3855[63], 0, i3854, 'parentLinkedComponent')
  i3854.m_enableKerning = !!i3855[64]
  i3854.m_enableExtraPadding = !!i3855[65]
  i3854.checkPaddingRequired = !!i3855[66]
  i3854.m_isRichText = !!i3855[67]
  i3854.m_parseCtrlCharacters = !!i3855[68]
  i3854.m_isOrthographic = !!i3855[69]
  i3854.m_isCullingEnabled = !!i3855[70]
  i3854.m_horizontalMapping = i3855[71]
  i3854.m_verticalMapping = i3855[72]
  i3854.m_uvLineOffset = i3855[73]
  i3854.m_geometrySortingOrder = i3855[74]
  i3854.m_IsTextObjectScaleStatic = !!i3855[75]
  i3854.m_VertexBufferAutoSizeReduction = !!i3855[76]
  i3854.m_useMaxVisibleDescender = !!i3855[77]
  i3854.m_pageToDisplay = i3855[78]
  i3854.m_margin = new pc.Vec4( i3855[79], i3855[80], i3855[81], i3855[82] )
  i3854.m_isUsingLegacyAnimationComponent = !!i3855[83]
  i3854.m_isVolumetricText = !!i3855[84]
  request.r(i3855[85], i3855[86], 0, i3854, 'm_Material')
  i3854.m_Maskable = !!i3855[87]
  i3854.m_Color = new pc.Color(i3855[88], i3855[89], i3855[90], i3855[91])
  i3854.m_RaycastTarget = !!i3855[92]
  i3854.m_RaycastPadding = new pc.Vec4( i3855[93], i3855[94], i3855[95], i3855[96] )
  return i3854
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3862 = root || request.c( 'TMPro.VertexGradient' )
  var i3863 = data
  i3862.topLeft = new pc.Color(i3863[0], i3863[1], i3863[2], i3863[3])
  i3862.topRight = new pc.Color(i3863[4], i3863[5], i3863[6], i3863[7])
  i3862.bottomLeft = new pc.Color(i3863[8], i3863[9], i3863[10], i3863[11])
  i3862.bottomRight = new pc.Color(i3863[12], i3863[13], i3863[14], i3863[15])
  return i3862
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i3864 = root || request.c( 'PeopleContainer' )
  var i3865 = data
  var i3867 = i3865[0]
  var i3866 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i3867.length; i += 2) {
  request.r(i3867[i + 0], i3867[i + 1], 1, i3866, '')
  }
  i3864.CurrentPeoples = i3866
  var i3869 = i3865[1]
  var i3868 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i3869.length; i += 2) {
  request.r(i3869[i + 0], i3869[i + 1], 1, i3868, '')
  }
  i3864._peoples = i3868
  request.r(i3865[2], i3865[3], 0, i3864, '_tutorialPeople')
  request.r(i3865[4], i3865[5], 0, i3864, '_spawnPoint')
  request.r(i3865[6], i3865[7], 0, i3864, '_point1')
  request.r(i3865[8], i3865[9], 0, i3864, '_point2')
  request.r(i3865[10], i3865[11], 0, i3864, '_endPoint')
  request.r(i3865[12], i3865[13], 0, i3864, '_juiceConfig')
  request.r(i3865[14], i3865[15], 0, i3864, '_tutorial')
  return i3864
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i3872 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i3873 = data
  i3872.m_HorizontalFit = i3873[0]
  i3872.m_VerticalFit = i3873[1]
  return i3872
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3874 = root || request.c( 'UnityEngine.UI.Button' )
  var i3875 = data
  i3874.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3875[0], i3874.m_OnClick)
  i3874.m_Navigation = request.d('UnityEngine.UI.Navigation', i3875[1], i3874.m_Navigation)
  i3874.m_Transition = i3875[2]
  i3874.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3875[3], i3874.m_Colors)
  i3874.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3875[4], i3874.m_SpriteState)
  i3874.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3875[5], i3874.m_AnimationTriggers)
  i3874.m_Interactable = !!i3875[6]
  request.r(i3875[7], i3875[8], 0, i3874, 'm_TargetGraphic')
  return i3874
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3876 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3877 = data
  i3876.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3877[0], i3876.m_PersistentCalls)
  return i3876
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3878 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3879 = data
  var i3881 = i3879[0]
  var i3880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3881.length; i += 1) {
    i3880.add(request.d('UnityEngine.Events.PersistentCall', i3881[i + 0]));
  }
  i3878.m_Calls = i3880
  return i3878
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3884 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3885 = data
  request.r(i3885[0], i3885[1], 0, i3884, 'm_Target')
  i3884.m_TargetAssemblyTypeName = i3885[2]
  i3884.m_MethodName = i3885[3]
  i3884.m_Mode = i3885[4]
  i3884.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3885[5], i3884.m_Arguments)
  i3884.m_CallState = i3885[6]
  return i3884
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3886 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3887 = data
  i3886.m_Mode = i3887[0]
  i3886.m_WrapAround = !!i3887[1]
  request.r(i3887[2], i3887[3], 0, i3886, 'm_SelectOnUp')
  request.r(i3887[4], i3887[5], 0, i3886, 'm_SelectOnDown')
  request.r(i3887[6], i3887[7], 0, i3886, 'm_SelectOnLeft')
  request.r(i3887[8], i3887[9], 0, i3886, 'm_SelectOnRight')
  return i3886
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3888 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3889 = data
  i3888.m_NormalColor = new pc.Color(i3889[0], i3889[1], i3889[2], i3889[3])
  i3888.m_HighlightedColor = new pc.Color(i3889[4], i3889[5], i3889[6], i3889[7])
  i3888.m_PressedColor = new pc.Color(i3889[8], i3889[9], i3889[10], i3889[11])
  i3888.m_SelectedColor = new pc.Color(i3889[12], i3889[13], i3889[14], i3889[15])
  i3888.m_DisabledColor = new pc.Color(i3889[16], i3889[17], i3889[18], i3889[19])
  i3888.m_ColorMultiplier = i3889[20]
  i3888.m_FadeDuration = i3889[21]
  return i3888
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3890 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3891 = data
  request.r(i3891[0], i3891[1], 0, i3890, 'm_HighlightedSprite')
  request.r(i3891[2], i3891[3], 0, i3890, 'm_PressedSprite')
  request.r(i3891[4], i3891[5], 0, i3890, 'm_SelectedSprite')
  request.r(i3891[6], i3891[7], 0, i3890, 'm_DisabledSprite')
  return i3890
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3892 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3893 = data
  i3892.m_NormalTrigger = i3893[0]
  i3892.m_HighlightedTrigger = i3893[1]
  i3892.m_PressedTrigger = i3893[2]
  i3892.m_SelectedTrigger = i3893[3]
  i3892.m_DisabledTrigger = i3893[4]
  return i3892
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3894 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3895 = data
  request.r(i3895[0], i3895[1], 0, i3894, 'm_ObjectArgument')
  i3894.m_ObjectArgumentAssemblyTypeName = i3895[2]
  i3894.m_IntArgument = i3895[3]
  i3894.m_FloatArgument = i3895[4]
  i3894.m_StringArgument = i3895[5]
  i3894.m_BoolArgument = !!i3895[6]
  return i3894
}

Deserializers["BackImage"] = function (request, data, root) {
  var i3896 = root || request.c( 'BackImage' )
  var i3897 = data
  return i3896
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i3898 = root || request.c( 'AheadImage' )
  var i3899 = data
  return i3898
}

Deserializers["Order"] = function (request, data, root) {
  var i3900 = root || request.c( 'Order' )
  var i3901 = data
  request.r(i3901[0], i3901[1], 0, i3900, '_juiceAnimator')
  request.r(i3901[2], i3901[3], 0, i3900, '_cupAnimator')
  request.r(i3901[4], i3901[5], 0, i3900, '_canvasAnimator')
  i3900.CupType = i3901[6]
  i3900.JuiceType = i3901[7]
  i3900.AdditiveType1 = i3901[8]
  i3900.AdditiveType2 = i3901[9]
  i3900.IsFree = !!i3901[10]
  i3900.IsSpriteReady = !!i3901[11]
  i3900.IsCupReady = !!i3901[12]
  i3900.IsJuiceReady = !!i3901[13]
  i3900.IsPouring = !!i3901[14]
  request.r(i3901[15], i3901[16], 0, i3900, '_iceButton')
  request.r(i3901[17], i3901[18], 0, i3900, '_grassButton')
  request.r(i3901[19], i3901[20], 0, i3900, '_juiceBallsButton')
  request.r(i3901[21], i3901[22], 0, i3900, '_strawButton')
  request.r(i3901[23], i3901[24], 0, i3900, '_bigCupButton')
  request.r(i3901[25], i3901[26], 0, i3900, '_middleCupButton')
  request.r(i3901[27], i3901[28], 0, i3900, '_smallCupButton')
  request.r(i3901[29], i3901[30], 0, i3900, '_appleButton')
  request.r(i3901[31], i3901[32], 0, i3900, '_orangeButton')
  request.r(i3901[33], i3901[34], 0, i3900, '_multifruitButton')
  request.r(i3901[35], i3901[36], 0, i3900, '_tomatoButton')
  request.r(i3901[37], i3901[38], 0, i3900, '_cherryButton')
  request.r(i3901[39], i3901[40], 0, i3900, '_smallRawJuiceImage')
  request.r(i3901[41], i3901[42], 0, i3900, '_middleRawJuiceImage')
  request.r(i3901[43], i3901[44], 0, i3900, '_bigRawJuiceImage')
  request.r(i3901[45], i3901[46], 0, i3900, '_smallReadyJuiceImage')
  request.r(i3901[47], i3901[48], 0, i3900, '_middleReadyJuiceImage')
  request.r(i3901[49], i3901[50], 0, i3900, '_bigReadyJuiceImage')
  request.r(i3901[51], i3901[52], 0, i3900, '_backImage')
  request.r(i3901[53], i3901[54], 0, i3900, '_aheadImage')
  request.r(i3901[55], i3901[56], 0, i3900, '_config')
  request.r(i3901[57], i3901[58], 0, i3900, '_takeOrderButton')
  request.r(i3901[59], i3901[60], 0, i3900, '_peopleContainer')
  request.r(i3901[61], i3901[62], 0, i3900, '_tutorial')
  request.r(i3901[63], i3901[64], 0, i3900, '_bText')
  request.r(i3901[65], i3901[66], 0, i3900, '_mText')
  request.r(i3901[67], i3901[68], 0, i3900, '_sText')
  request.r(i3901[69], i3901[70], 0, i3900, '_garbageButton')
  request.r(i3901[71], i3901[72], 0, i3900, '_clickSound')
  request.r(i3901[73], i3901[74], 0, i3900, '_juiceSound')
  return i3900
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i3902 = root || request.c( 'Tutorial' )
  var i3903 = data
  i3902.IsTutorial = !!i3903[0]
  request.r(i3903[1], i3903[2], 0, i3902, 'Finger1')
  request.r(i3903[3], i3903[4], 0, i3902, 'Finger2')
  request.r(i3903[5], i3903[6], 0, i3902, 'Finger3')
  request.r(i3903[7], i3903[8], 0, i3902, 'Finger4')
  request.r(i3903[9], i3903[10], 0, i3902, 'Finger5')
  request.r(i3903[11], i3903[12], 0, i3902, 'BuyBigCupFinger')
  request.r(i3903[13], i3903[14], 0, i3902, 'BuyJuiceFinger')
  request.r(i3903[15], i3903[16], 0, i3902, 'SmallCupButton')
  request.r(i3903[17], i3903[18], 0, i3902, 'JuiceButton')
  request.r(i3903[19], i3903[20], 0, i3902, 'StrawButton')
  request.r(i3903[21], i3903[22], 0, i3902, 'AdditiveButton')
  request.r(i3903[23], i3903[24], 0, i3902, 'ReadyButton')
  var i3905 = i3903[25]
  var i3904 = []
  for(var i = 0; i < i3905.length; i += 2) {
  request.r(i3905[i + 0], i3905[i + 1], 2, i3904, '')
  }
  i3902.Buttons = i3904
  request.r(i3903[26], i3903[27], 0, i3902, 'Bank')
  return i3902
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i3908 = root || request.c( 'SoundSwitcher' )
  var i3909 = data
  request.r(i3909[0], i3909[1], 0, i3908, '_onImage')
  request.r(i3909[2], i3909[3], 0, i3908, '_offImage')
  return i3908
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3910 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3911 = data
  request.r(i3911[0], i3911[1], 0, i3910, 'm_FirstSelected')
  i3910.m_sendNavigationEvents = !!i3911[2]
  i3910.m_DragThreshold = i3911[3]
  return i3910
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3912 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3913 = data
  i3912.m_HorizontalAxis = i3913[0]
  i3912.m_VerticalAxis = i3913[1]
  i3912.m_SubmitButton = i3913[2]
  i3912.m_CancelButton = i3913[3]
  i3912.m_InputActionsPerSecond = i3913[4]
  i3912.m_RepeatDelay = i3913[5]
  i3912.m_ForceModuleActive = !!i3913[6]
  i3912.m_SendPointerHoverToParent = !!i3913[7]
  return i3912
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i3914 = root || request.c( 'JuiceConfig' )
  var i3915 = data
  request.r(i3915[0], i3915[1], 0, i3914, 'EntityBigCup')
  request.r(i3915[2], i3915[3], 0, i3914, 'TomatoBigCup')
  request.r(i3915[4], i3915[5], 0, i3914, 'AppleBigCup')
  request.r(i3915[6], i3915[7], 0, i3914, 'OrangeBigCup')
  request.r(i3915[8], i3915[9], 0, i3914, 'CherryBigCup')
  request.r(i3915[10], i3915[11], 0, i3914, 'MultifruitBigCup')
  request.r(i3915[12], i3915[13], 0, i3914, 'TomatoBigStrawCup')
  request.r(i3915[14], i3915[15], 0, i3914, 'MultifruitBigStrawCup')
  request.r(i3915[16], i3915[17], 0, i3914, 'AppleBigStrawCup')
  request.r(i3915[18], i3915[19], 0, i3914, 'OrangeBigStrawCup')
  request.r(i3915[20], i3915[21], 0, i3914, 'CherryBigStrawCup')
  request.r(i3915[22], i3915[23], 0, i3914, 'MultifruitBigBallsCup')
  request.r(i3915[24], i3915[25], 0, i3914, 'TomatoBigBallsCup')
  request.r(i3915[26], i3915[27], 0, i3914, 'AppleBigBallsCup')
  request.r(i3915[28], i3915[29], 0, i3914, 'OrangeBigBallsCup')
  request.r(i3915[30], i3915[31], 0, i3914, 'CherryBigBallsCup')
  request.r(i3915[32], i3915[33], 0, i3914, 'EntityMiddleCup')
  request.r(i3915[34], i3915[35], 0, i3914, 'TomatoMiddleCup')
  request.r(i3915[36], i3915[37], 0, i3914, 'AppleMiddleCup')
  request.r(i3915[38], i3915[39], 0, i3914, 'OrangeMiddleCup')
  request.r(i3915[40], i3915[41], 0, i3914, 'CherryMiddleCup')
  request.r(i3915[42], i3915[43], 0, i3914, 'MultifruitMiddleCup')
  request.r(i3915[44], i3915[45], 0, i3914, 'TomatoMiddleStrawCup')
  request.r(i3915[46], i3915[47], 0, i3914, 'MultifruitMiddleStrawCup')
  request.r(i3915[48], i3915[49], 0, i3914, 'AppleMiddleStrawCup')
  request.r(i3915[50], i3915[51], 0, i3914, 'OrangeMiddleStrawCup')
  request.r(i3915[52], i3915[53], 0, i3914, 'CherryMiddleStrawCup')
  request.r(i3915[54], i3915[55], 0, i3914, 'MultifruitMiddleBallsCup')
  request.r(i3915[56], i3915[57], 0, i3914, 'TomatoMiddleBallsCup')
  request.r(i3915[58], i3915[59], 0, i3914, 'AppleMiddleBallsCup')
  request.r(i3915[60], i3915[61], 0, i3914, 'OrangeMiddleBallsCup')
  request.r(i3915[62], i3915[63], 0, i3914, 'CherryMiddleBallsCup')
  request.r(i3915[64], i3915[65], 0, i3914, 'EntitySmallCup')
  request.r(i3915[66], i3915[67], 0, i3914, 'TomatoSmallCup')
  request.r(i3915[68], i3915[69], 0, i3914, 'AppleSmallCup')
  request.r(i3915[70], i3915[71], 0, i3914, 'OrangeSmallCup')
  request.r(i3915[72], i3915[73], 0, i3914, 'CherrySmallCup')
  request.r(i3915[74], i3915[75], 0, i3914, 'MultifruitSmallCup')
  request.r(i3915[76], i3915[77], 0, i3914, 'TomatoSmallStrawCup')
  request.r(i3915[78], i3915[79], 0, i3914, 'AppleSmallStrawCup')
  request.r(i3915[80], i3915[81], 0, i3914, 'OrangeSmallStrawCup')
  request.r(i3915[82], i3915[83], 0, i3914, 'CherrySmallStrawCup')
  request.r(i3915[84], i3915[85], 0, i3914, 'MultifruitSmallStrawCup')
  request.r(i3915[86], i3915[87], 0, i3914, 'AppleSmallBallsCup')
  request.r(i3915[88], i3915[89], 0, i3914, 'TomatoSmallBallsCup')
  request.r(i3915[90], i3915[91], 0, i3914, 'OrangeSmallBallsCup')
  request.r(i3915[92], i3915[93], 0, i3914, 'CherrySmallBallsCup')
  request.r(i3915[94], i3915[95], 0, i3914, 'MultifruitSmallBallsCup')
  request.r(i3915[96], i3915[97], 0, i3914, 'JuiceBallAdditive')
  request.r(i3915[98], i3915[99], 0, i3914, 'IceAdditive')
  request.r(i3915[100], i3915[101], 0, i3914, 'GrassAdditive')
  return i3914
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i3916 = root || request.c( 'TouchIdleTimer' )
  var i3917 = data
  return i3916
}

Deserializers["Helper"] = function (request, data, root) {
  var i3918 = root || request.c( 'Helper' )
  var i3919 = data
  request.r(i3919[0], i3919[1], 0, i3918, '_smallCupFinger')
  request.r(i3919[2], i3919[3], 0, i3918, '_middleCupFinger')
  request.r(i3919[4], i3919[5], 0, i3918, '_bigCupFinger')
  request.r(i3919[6], i3919[7], 0, i3918, '_iceFinger')
  request.r(i3919[8], i3919[9], 0, i3918, '_grassFinger')
  request.r(i3919[10], i3919[11], 0, i3918, '_juiceballFinger')
  request.r(i3919[12], i3919[13], 0, i3918, '_appleFinger')
  request.r(i3919[14], i3919[15], 0, i3918, '_cherryFinger')
  request.r(i3919[16], i3919[17], 0, i3918, '_orangeFinger')
  request.r(i3919[18], i3919[19], 0, i3918, '_multifruitFinger')
  request.r(i3919[20], i3919[21], 0, i3918, '_tomatoFinger')
  request.r(i3919[22], i3919[23], 0, i3918, '_strawFinger')
  request.r(i3919[24], i3919[25], 0, i3918, '_readyFinger')
  request.r(i3919[26], i3919[27], 0, i3918, '_peoples')
  request.r(i3919[28], i3919[29], 0, i3918, '_tutorial')
  request.r(i3919[30], i3919[31], 0, i3918, '_order')
  request.r(i3919[32], i3919[33], 0, i3918, '_strawButton')
  request.r(i3919[34], i3919[35], 0, i3918, '_bigCupButton')
  request.r(i3919[36], i3919[37], 0, i3918, '_middleCupButton')
  request.r(i3919[38], i3919[39], 0, i3918, '_smallCupButton')
  request.r(i3919[40], i3919[41], 0, i3918, '_readyButton')
  request.r(i3919[42], i3919[43], 0, i3918, '_touchIdleTimer')
  request.r(i3919[44], i3919[45], 0, i3918, '_finalScreen')
  return i3918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3921 = data
  i3920.ambientIntensity = i3921[0]
  i3920.reflectionIntensity = i3921[1]
  i3920.ambientMode = i3921[2]
  i3920.ambientLight = new pc.Color(i3921[3], i3921[4], i3921[5], i3921[6])
  i3920.ambientSkyColor = new pc.Color(i3921[7], i3921[8], i3921[9], i3921[10])
  i3920.ambientGroundColor = new pc.Color(i3921[11], i3921[12], i3921[13], i3921[14])
  i3920.ambientEquatorColor = new pc.Color(i3921[15], i3921[16], i3921[17], i3921[18])
  i3920.fogColor = new pc.Color(i3921[19], i3921[20], i3921[21], i3921[22])
  i3920.fogEndDistance = i3921[23]
  i3920.fogStartDistance = i3921[24]
  i3920.fogDensity = i3921[25]
  i3920.fog = !!i3921[26]
  request.r(i3921[27], i3921[28], 0, i3920, 'skybox')
  i3920.fogMode = i3921[29]
  var i3923 = i3921[30]
  var i3922 = []
  for(var i = 0; i < i3923.length; i += 1) {
    i3922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3923[i + 0]) );
  }
  i3920.lightmaps = i3922
  i3920.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3921[31], i3920.lightProbes)
  i3920.lightmapsMode = i3921[32]
  i3920.mixedBakeMode = i3921[33]
  i3920.environmentLightingMode = i3921[34]
  i3920.ambientProbe = new pc.SphericalHarmonicsL2(i3921[35])
  i3920.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3921[36])
  i3920.useReferenceAmbientProbe = !!i3921[37]
  request.r(i3921[38], i3921[39], 0, i3920, 'customReflection')
  request.r(i3921[40], i3921[41], 0, i3920, 'defaultReflection')
  i3920.defaultReflectionMode = i3921[42]
  i3920.defaultReflectionResolution = i3921[43]
  i3920.sunLightObjectId = i3921[44]
  i3920.pixelLightCount = i3921[45]
  i3920.defaultReflectionHDR = !!i3921[46]
  i3920.hasLightDataAsset = !!i3921[47]
  i3920.hasManualGenerate = !!i3921[48]
  return i3920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3927 = data
  request.r(i3927[0], i3927[1], 0, i3926, 'lightmapColor')
  request.r(i3927[2], i3927[3], 0, i3926, 'lightmapDirection')
  return i3926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3928 = root || new UnityEngine.LightProbes()
  var i3929 = data
  return i3928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3937 = data
  var i3939 = i3937[0]
  var i3938 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3939.length; i += 1) {
    i3938.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3939[i + 0]));
  }
  i3936.ShaderCompilationErrors = i3938
  i3936.name = i3937[1]
  i3936.guid = i3937[2]
  var i3941 = i3937[3]
  var i3940 = []
  for(var i = 0; i < i3941.length; i += 1) {
    i3940.push( i3941[i + 0] );
  }
  i3936.shaderDefinedKeywords = i3940
  var i3943 = i3937[4]
  var i3942 = []
  for(var i = 0; i < i3943.length; i += 1) {
    i3942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3943[i + 0]) );
  }
  i3936.passes = i3942
  var i3945 = i3937[5]
  var i3944 = []
  for(var i = 0; i < i3945.length; i += 1) {
    i3944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3945[i + 0]) );
  }
  i3936.usePasses = i3944
  var i3947 = i3937[6]
  var i3946 = []
  for(var i = 0; i < i3947.length; i += 1) {
    i3946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3947[i + 0]) );
  }
  i3936.defaultParameterValues = i3946
  request.r(i3937[7], i3937[8], 0, i3936, 'unityFallbackShader')
  i3936.readDepth = !!i3937[9]
  i3936.isCreatedByShaderGraph = !!i3937[10]
  i3936.compiled = !!i3937[11]
  return i3936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3951 = data
  i3950.shaderName = i3951[0]
  i3950.errorMessage = i3951[1]
  return i3950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3956 = root || new pc.UnityShaderPass()
  var i3957 = data
  i3956.id = i3957[0]
  i3956.subShaderIndex = i3957[1]
  i3956.name = i3957[2]
  i3956.passType = i3957[3]
  i3956.grabPassTextureName = i3957[4]
  i3956.usePass = !!i3957[5]
  i3956.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3957[6], i3956.zTest)
  i3956.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3957[7], i3956.zWrite)
  i3956.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3957[8], i3956.culling)
  i3956.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3957[9], i3956.blending)
  i3956.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3957[10], i3956.alphaBlending)
  i3956.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3957[11], i3956.colorWriteMask)
  i3956.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3957[12], i3956.offsetUnits)
  i3956.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3957[13], i3956.offsetFactor)
  i3956.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3957[14], i3956.stencilRef)
  i3956.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3957[15], i3956.stencilReadMask)
  i3956.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3957[16], i3956.stencilWriteMask)
  i3956.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3957[17], i3956.stencilOp)
  i3956.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3957[18], i3956.stencilOpFront)
  i3956.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3957[19], i3956.stencilOpBack)
  var i3959 = i3957[20]
  var i3958 = []
  for(var i = 0; i < i3959.length; i += 1) {
    i3958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3959[i + 0]) );
  }
  i3956.tags = i3958
  var i3961 = i3957[21]
  var i3960 = []
  for(var i = 0; i < i3961.length; i += 1) {
    i3960.push( i3961[i + 0] );
  }
  i3956.passDefinedKeywords = i3960
  var i3963 = i3957[22]
  var i3962 = []
  for(var i = 0; i < i3963.length; i += 1) {
    i3962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3963[i + 0]) );
  }
  i3956.passDefinedKeywordGroups = i3962
  var i3965 = i3957[23]
  var i3964 = []
  for(var i = 0; i < i3965.length; i += 1) {
    i3964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3965[i + 0]) );
  }
  i3956.variants = i3964
  var i3967 = i3957[24]
  var i3966 = []
  for(var i = 0; i < i3967.length; i += 1) {
    i3966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3967[i + 0]) );
  }
  i3956.excludedVariants = i3966
  i3956.hasDepthReader = !!i3957[25]
  return i3956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3969 = data
  i3968.val = i3969[0]
  i3968.name = i3969[1]
  return i3968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3971 = data
  i3970.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3971[0], i3970.src)
  i3970.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3971[1], i3970.dst)
  i3970.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3971[2], i3970.op)
  return i3970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3973 = data
  i3972.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3973[0], i3972.pass)
  i3972.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3973[1], i3972.fail)
  i3972.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3973[2], i3972.zFail)
  i3972.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3973[3], i3972.comp)
  return i3972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3977 = data
  i3976.name = i3977[0]
  i3976.value = i3977[1]
  return i3976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3981 = data
  var i3983 = i3981[0]
  var i3982 = []
  for(var i = 0; i < i3983.length; i += 1) {
    i3982.push( i3983[i + 0] );
  }
  i3980.keywords = i3982
  i3980.hasDiscard = !!i3981[1]
  return i3980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3987 = data
  i3986.passId = i3987[0]
  i3986.subShaderIndex = i3987[1]
  var i3989 = i3987[2]
  var i3988 = []
  for(var i = 0; i < i3989.length; i += 1) {
    i3988.push( i3989[i + 0] );
  }
  i3986.keywords = i3988
  i3986.vertexProgram = i3987[3]
  i3986.fragmentProgram = i3987[4]
  i3986.exportedForWebGl2 = !!i3987[5]
  i3986.readDepth = !!i3987[6]
  return i3986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3993 = data
  request.r(i3993[0], i3993[1], 0, i3992, 'shader')
  i3992.pass = i3993[2]
  return i3992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3997 = data
  i3996.name = i3997[0]
  i3996.type = i3997[1]
  i3996.value = new pc.Vec4( i3997[2], i3997[3], i3997[4], i3997[5] )
  i3996.textureValue = i3997[6]
  i3996.shaderPropertyFlag = i3997[7]
  return i3996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3999 = data
  i3998.name = i3999[0]
  request.r(i3999[1], i3999[2], 0, i3998, 'texture')
  i3998.aabb = i3999[3]
  i3998.vertices = i3999[4]
  i3998.triangles = i3999[5]
  i3998.textureRect = UnityEngine.Rect.MinMaxRect(i3999[6], i3999[7], i3999[8], i3999[9])
  i3998.packedRect = UnityEngine.Rect.MinMaxRect(i3999[10], i3999[11], i3999[12], i3999[13])
  i3998.border = new pc.Vec4( i3999[14], i3999[15], i3999[16], i3999[17] )
  i3998.transparency = i3999[18]
  i3998.bounds = i3999[19]
  i3998.pixelsPerUnit = i3999[20]
  i3998.textureWidth = i3999[21]
  i3998.textureHeight = i3999[22]
  i3998.nativeSize = new pc.Vec2( i3999[23], i3999[24] )
  i3998.pivot = new pc.Vec2( i3999[25], i3999[26] )
  i3998.textureRectOffset = new pc.Vec2( i3999[27], i3999[28] )
  return i3998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4001 = data
  i4000.name = i4001[0]
  return i4000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4003 = data
  i4002.name = i4003[0]
  i4002.wrapMode = i4003[1]
  i4002.isLooping = !!i4003[2]
  i4002.length = i4003[3]
  var i4005 = i4003[4]
  var i4004 = []
  for(var i = 0; i < i4005.length; i += 1) {
    i4004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4005[i + 0]) );
  }
  i4002.curves = i4004
  var i4007 = i4003[5]
  var i4006 = []
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4007[i + 0]) );
  }
  i4002.events = i4006
  i4002.halfPrecision = !!i4003[6]
  i4002._frameRate = i4003[7]
  i4002.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4003[8], i4002.localBounds)
  i4002.hasMuscleCurves = !!i4003[9]
  var i4009 = i4003[10]
  var i4008 = []
  for(var i = 0; i < i4009.length; i += 1) {
    i4008.push( i4009[i + 0] );
  }
  i4002.clipMuscleConstant = i4008
  i4002.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4003[11], i4002.clipBindingConstant)
  return i4002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4013 = data
  i4012.path = i4013[0]
  i4012.hash = i4013[1]
  i4012.componentType = i4013[2]
  i4012.property = i4013[3]
  i4012.keys = i4013[4]
  var i4015 = i4013[5]
  var i4014 = []
  for(var i = 0; i < i4015.length; i += 1) {
    i4014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4015[i + 0]) );
  }
  i4012.objectReferenceKeys = i4014
  return i4012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4019 = data
  i4018.time = i4019[0]
  request.r(i4019[1], i4019[2], 0, i4018, 'value')
  return i4018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4023 = data
  i4022.functionName = i4023[0]
  i4022.floatParameter = i4023[1]
  i4022.intParameter = i4023[2]
  i4022.stringParameter = i4023[3]
  request.r(i4023[4], i4023[5], 0, i4022, 'objectReferenceParameter')
  i4022.time = i4023[6]
  return i4022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4025 = data
  i4024.center = new pc.Vec3( i4025[0], i4025[1], i4025[2] )
  i4024.extends = new pc.Vec3( i4025[3], i4025[4], i4025[5] )
  return i4024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4029 = data
  var i4031 = i4029[0]
  var i4030 = []
  for(var i = 0; i < i4031.length; i += 1) {
    i4030.push( i4031[i + 0] );
  }
  i4028.genericBindings = i4030
  var i4033 = i4029[1]
  var i4032 = []
  for(var i = 0; i < i4033.length; i += 1) {
    i4032.push( i4033[i + 0] );
  }
  i4028.pptrCurveMapping = i4032
  return i4028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4035 = data
  i4034.name = i4035[0]
  i4034.ascent = i4035[1]
  i4034.originalLineHeight = i4035[2]
  i4034.fontSize = i4035[3]
  var i4037 = i4035[4]
  var i4036 = []
  for(var i = 0; i < i4037.length; i += 1) {
    i4036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4037[i + 0]) );
  }
  i4034.characterInfo = i4036
  request.r(i4035[5], i4035[6], 0, i4034, 'texture')
  i4034.originalFontSize = i4035[7]
  return i4034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4041 = data
  i4040.index = i4041[0]
  i4040.advance = i4041[1]
  i4040.bearing = i4041[2]
  i4040.glyphWidth = i4041[3]
  i4040.glyphHeight = i4041[4]
  i4040.minX = i4041[5]
  i4040.maxX = i4041[6]
  i4040.minY = i4041[7]
  i4040.maxY = i4041[8]
  i4040.uvBottomLeftX = i4041[9]
  i4040.uvBottomLeftY = i4041[10]
  i4040.uvBottomRightX = i4041[11]
  i4040.uvBottomRightY = i4041[12]
  i4040.uvTopLeftX = i4041[13]
  i4040.uvTopLeftY = i4041[14]
  i4040.uvTopRightX = i4041[15]
  i4040.uvTopRightY = i4041[16]
  return i4040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4043 = data
  i4042.name = i4043[0]
  var i4045 = i4043[1]
  var i4044 = []
  for(var i = 0; i < i4045.length; i += 1) {
    i4044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4045[i + 0]) );
  }
  i4042.layers = i4044
  var i4047 = i4043[2]
  var i4046 = []
  for(var i = 0; i < i4047.length; i += 1) {
    i4046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4047[i + 0]) );
  }
  i4042.parameters = i4046
  i4042.animationClips = i4043[3]
  i4042.avatarUnsupported = i4043[4]
  return i4042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4051 = data
  i4050.name = i4051[0]
  i4050.defaultWeight = i4051[1]
  i4050.blendingMode = i4051[2]
  i4050.avatarMask = i4051[3]
  i4050.syncedLayerIndex = i4051[4]
  i4050.syncedLayerAffectsTiming = !!i4051[5]
  i4050.syncedLayers = i4051[6]
  i4050.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4051[7], i4050.stateMachine)
  return i4050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4053 = data
  i4052.id = i4053[0]
  i4052.name = i4053[1]
  i4052.path = i4053[2]
  var i4055 = i4053[3]
  var i4054 = []
  for(var i = 0; i < i4055.length; i += 1) {
    i4054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4055[i + 0]) );
  }
  i4052.states = i4054
  var i4057 = i4053[4]
  var i4056 = []
  for(var i = 0; i < i4057.length; i += 1) {
    i4056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4057[i + 0]) );
  }
  i4052.machines = i4056
  var i4059 = i4053[5]
  var i4058 = []
  for(var i = 0; i < i4059.length; i += 1) {
    i4058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4059[i + 0]) );
  }
  i4052.entryStateTransitions = i4058
  var i4061 = i4053[6]
  var i4060 = []
  for(var i = 0; i < i4061.length; i += 1) {
    i4060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4061[i + 0]) );
  }
  i4052.exitStateTransitions = i4060
  var i4063 = i4053[7]
  var i4062 = []
  for(var i = 0; i < i4063.length; i += 1) {
    i4062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4063[i + 0]) );
  }
  i4052.anyStateTransitions = i4062
  i4052.defaultStateId = i4053[8]
  return i4052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4067 = data
  i4066.id = i4067[0]
  i4066.name = i4067[1]
  i4066.cycleOffset = i4067[2]
  i4066.cycleOffsetParameter = i4067[3]
  i4066.cycleOffsetParameterActive = !!i4067[4]
  i4066.mirror = !!i4067[5]
  i4066.mirrorParameter = i4067[6]
  i4066.mirrorParameterActive = !!i4067[7]
  i4066.motionId = i4067[8]
  i4066.nameHash = i4067[9]
  i4066.fullPathHash = i4067[10]
  i4066.speed = i4067[11]
  i4066.speedParameter = i4067[12]
  i4066.speedParameterActive = !!i4067[13]
  i4066.tag = i4067[14]
  i4066.tagHash = i4067[15]
  i4066.writeDefaultValues = !!i4067[16]
  var i4069 = i4067[17]
  var i4068 = []
  for(var i = 0; i < i4069.length; i += 2) {
  request.r(i4069[i + 0], i4069[i + 1], 2, i4068, '')
  }
  i4066.behaviours = i4068
  var i4071 = i4067[18]
  var i4070 = []
  for(var i = 0; i < i4071.length; i += 1) {
    i4070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4071[i + 0]) );
  }
  i4066.transitions = i4070
  return i4066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4077 = data
  i4076.fullPath = i4077[0]
  i4076.canTransitionToSelf = !!i4077[1]
  i4076.duration = i4077[2]
  i4076.exitTime = i4077[3]
  i4076.hasExitTime = !!i4077[4]
  i4076.hasFixedDuration = !!i4077[5]
  i4076.interruptionSource = i4077[6]
  i4076.offset = i4077[7]
  i4076.orderedInterruption = !!i4077[8]
  i4076.destinationStateId = i4077[9]
  i4076.isExit = !!i4077[10]
  i4076.mute = !!i4077[11]
  i4076.solo = !!i4077[12]
  var i4079 = i4077[13]
  var i4078 = []
  for(var i = 0; i < i4079.length; i += 1) {
    i4078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4079[i + 0]) );
  }
  i4076.conditions = i4078
  return i4076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4085 = data
  i4084.destinationStateId = i4085[0]
  i4084.isExit = !!i4085[1]
  i4084.mute = !!i4085[2]
  i4084.solo = !!i4085[3]
  var i4087 = i4085[4]
  var i4086 = []
  for(var i = 0; i < i4087.length; i += 1) {
    i4086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4087[i + 0]) );
  }
  i4084.conditions = i4086
  return i4084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4091 = data
  i4090.mode = i4091[0]
  i4090.parameter = i4091[1]
  i4090.threshold = i4091[2]
  return i4090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4095 = data
  i4094.defaultBool = !!i4095[0]
  i4094.defaultFloat = i4095[1]
  i4094.defaultInt = i4095[2]
  i4094.name = i4095[3]
  i4094.nameHash = i4095[4]
  i4094.type = i4095[5]
  return i4094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4097 = data
  i4096.name = i4097[0]
  i4096.bytes64 = i4097[1]
  i4096.data = i4097[2]
  return i4096
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4098 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4099 = data
  i4098.hashCode = i4099[0]
  request.r(i4099[1], i4099[2], 0, i4098, 'material')
  i4098.materialHashCode = i4099[3]
  request.r(i4099[4], i4099[5], 0, i4098, 'atlas')
  i4098.normalStyle = i4099[6]
  i4098.normalSpacingOffset = i4099[7]
  i4098.boldStyle = i4099[8]
  i4098.boldSpacing = i4099[9]
  i4098.italicStyle = i4099[10]
  i4098.tabSize = i4099[11]
  i4098.m_Version = i4099[12]
  i4098.m_SourceFontFileGUID = i4099[13]
  request.r(i4099[14], i4099[15], 0, i4098, 'm_SourceFontFile_EditorRef')
  request.r(i4099[16], i4099[17], 0, i4098, 'm_SourceFontFile')
  i4098.m_AtlasPopulationMode = i4099[18]
  i4098.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4099[19], i4098.m_FaceInfo)
  var i4101 = i4099[20]
  var i4100 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4101.length; i += 1) {
    i4100.add(request.d('UnityEngine.TextCore.Glyph', i4101[i + 0]));
  }
  i4098.m_GlyphTable = i4100
  var i4103 = i4099[21]
  var i4102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4103.length; i += 1) {
    i4102.add(request.d('TMPro.TMP_Character', i4103[i + 0]));
  }
  i4098.m_CharacterTable = i4102
  var i4105 = i4099[22]
  var i4104 = []
  for(var i = 0; i < i4105.length; i += 2) {
  request.r(i4105[i + 0], i4105[i + 1], 2, i4104, '')
  }
  i4098.m_AtlasTextures = i4104
  i4098.m_AtlasTextureIndex = i4099[23]
  i4098.m_IsMultiAtlasTexturesEnabled = !!i4099[24]
  i4098.m_ClearDynamicDataOnBuild = !!i4099[25]
  var i4107 = i4099[26]
  var i4106 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4107.length; i += 1) {
    i4106.add(request.d('UnityEngine.TextCore.GlyphRect', i4107[i + 0]));
  }
  i4098.m_UsedGlyphRects = i4106
  var i4109 = i4099[27]
  var i4108 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4109.length; i += 1) {
    i4108.add(request.d('UnityEngine.TextCore.GlyphRect', i4109[i + 0]));
  }
  i4098.m_FreeGlyphRects = i4108
  i4098.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4099[28], i4098.m_fontInfo)
  i4098.m_AtlasWidth = i4099[29]
  i4098.m_AtlasHeight = i4099[30]
  i4098.m_AtlasPadding = i4099[31]
  i4098.m_AtlasRenderMode = i4099[32]
  var i4111 = i4099[33]
  var i4110 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4111.length; i += 1) {
    i4110.add(request.d('TMPro.TMP_Glyph', i4111[i + 0]));
  }
  i4098.m_glyphInfoList = i4110
  i4098.m_KerningTable = request.d('TMPro.KerningTable', i4099[34], i4098.m_KerningTable)
  i4098.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4099[35], i4098.m_FontFeatureTable)
  var i4113 = i4099[36]
  var i4112 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4113.length; i += 2) {
  request.r(i4113[i + 0], i4113[i + 1], 1, i4112, '')
  }
  i4098.fallbackFontAssets = i4112
  var i4115 = i4099[37]
  var i4114 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4115.length; i += 2) {
  request.r(i4115[i + 0], i4115[i + 1], 1, i4114, '')
  }
  i4098.m_FallbackFontAssetTable = i4114
  i4098.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4099[38], i4098.m_CreationSettings)
  var i4117 = i4099[39]
  var i4116 = []
  for(var i = 0; i < i4117.length; i += 1) {
    i4116.push( request.d('TMPro.TMP_FontWeightPair', i4117[i + 0]) );
  }
  i4098.m_FontWeightTable = i4116
  var i4119 = i4099[40]
  var i4118 = []
  for(var i = 0; i < i4119.length; i += 1) {
    i4118.push( request.d('TMPro.TMP_FontWeightPair', i4119[i + 0]) );
  }
  i4098.fontWeights = i4118
  return i4098
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4120 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4121 = data
  i4120.m_FaceIndex = i4121[0]
  i4120.m_FamilyName = i4121[1]
  i4120.m_StyleName = i4121[2]
  i4120.m_PointSize = i4121[3]
  i4120.m_Scale = i4121[4]
  i4120.m_UnitsPerEM = i4121[5]
  i4120.m_LineHeight = i4121[6]
  i4120.m_AscentLine = i4121[7]
  i4120.m_CapLine = i4121[8]
  i4120.m_MeanLine = i4121[9]
  i4120.m_Baseline = i4121[10]
  i4120.m_DescentLine = i4121[11]
  i4120.m_SuperscriptOffset = i4121[12]
  i4120.m_SuperscriptSize = i4121[13]
  i4120.m_SubscriptOffset = i4121[14]
  i4120.m_SubscriptSize = i4121[15]
  i4120.m_UnderlineOffset = i4121[16]
  i4120.m_UnderlineThickness = i4121[17]
  i4120.m_StrikethroughOffset = i4121[18]
  i4120.m_StrikethroughThickness = i4121[19]
  i4120.m_TabWidth = i4121[20]
  return i4120
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4124 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4125 = data
  i4124.m_Index = i4125[0]
  i4124.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4125[1], i4124.m_Metrics)
  i4124.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4125[2], i4124.m_GlyphRect)
  i4124.m_Scale = i4125[3]
  i4124.m_AtlasIndex = i4125[4]
  i4124.m_ClassDefinitionType = i4125[5]
  return i4124
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4126 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4127 = data
  i4126.m_Width = i4127[0]
  i4126.m_Height = i4127[1]
  i4126.m_HorizontalBearingX = i4127[2]
  i4126.m_HorizontalBearingY = i4127[3]
  i4126.m_HorizontalAdvance = i4127[4]
  return i4126
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4128 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4129 = data
  i4128.m_X = i4129[0]
  i4128.m_Y = i4129[1]
  i4128.m_Width = i4129[2]
  i4128.m_Height = i4129[3]
  return i4128
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4132 = root || request.c( 'TMPro.TMP_Character' )
  var i4133 = data
  i4132.m_ElementType = i4133[0]
  i4132.m_Unicode = i4133[1]
  i4132.m_GlyphIndex = i4133[2]
  i4132.m_Scale = i4133[3]
  return i4132
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4138 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4139 = data
  i4138.Name = i4139[0]
  i4138.PointSize = i4139[1]
  i4138.Scale = i4139[2]
  i4138.CharacterCount = i4139[3]
  i4138.LineHeight = i4139[4]
  i4138.Baseline = i4139[5]
  i4138.Ascender = i4139[6]
  i4138.CapHeight = i4139[7]
  i4138.Descender = i4139[8]
  i4138.CenterLine = i4139[9]
  i4138.SuperscriptOffset = i4139[10]
  i4138.SubscriptOffset = i4139[11]
  i4138.SubSize = i4139[12]
  i4138.Underline = i4139[13]
  i4138.UnderlineThickness = i4139[14]
  i4138.strikethrough = i4139[15]
  i4138.strikethroughThickness = i4139[16]
  i4138.TabWidth = i4139[17]
  i4138.Padding = i4139[18]
  i4138.AtlasWidth = i4139[19]
  i4138.AtlasHeight = i4139[20]
  return i4138
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4142 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4143 = data
  i4142.id = i4143[0]
  i4142.x = i4143[1]
  i4142.y = i4143[2]
  i4142.width = i4143[3]
  i4142.height = i4143[4]
  i4142.xOffset = i4143[5]
  i4142.yOffset = i4143[6]
  i4142.xAdvance = i4143[7]
  i4142.scale = i4143[8]
  return i4142
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4144 = root || request.c( 'TMPro.KerningTable' )
  var i4145 = data
  var i4147 = i4145[0]
  var i4146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4147.length; i += 1) {
    i4146.add(request.d('TMPro.KerningPair', i4147[i + 0]));
  }
  i4144.kerningPairs = i4146
  return i4144
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4150 = root || request.c( 'TMPro.KerningPair' )
  var i4151 = data
  i4150.xOffset = i4151[0]
  i4150.m_FirstGlyph = i4151[1]
  i4150.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4151[2], i4150.m_FirstGlyphAdjustments)
  i4150.m_SecondGlyph = i4151[3]
  i4150.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4151[4], i4150.m_SecondGlyphAdjustments)
  i4150.m_IgnoreSpacingAdjustments = !!i4151[5]
  return i4150
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4152 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4153 = data
  var i4155 = i4153[0]
  var i4154 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4155.length; i += 1) {
    i4154.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i4155[i + 0]));
  }
  i4152.m_GlyphPairAdjustmentRecords = i4154
  return i4152
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4158 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i4159 = data
  i4158.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4159[0], i4158.m_FirstAdjustmentRecord)
  i4158.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4159[1], i4158.m_SecondAdjustmentRecord)
  i4158.m_FeatureLookupFlags = i4159[2]
  return i4158
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4160 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4161 = data
  i4160.m_GlyphIndex = i4161[0]
  i4160.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4161[1], i4160.m_GlyphValueRecord)
  return i4160
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4162 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4163 = data
  i4162.m_XPlacement = i4163[0]
  i4162.m_YPlacement = i4163[1]
  i4162.m_XAdvance = i4163[2]
  i4162.m_YAdvance = i4163[3]
  return i4162
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4166 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4167 = data
  i4166.sourceFontFileName = i4167[0]
  i4166.sourceFontFileGUID = i4167[1]
  i4166.pointSizeSamplingMode = i4167[2]
  i4166.pointSize = i4167[3]
  i4166.padding = i4167[4]
  i4166.packingMode = i4167[5]
  i4166.atlasWidth = i4167[6]
  i4166.atlasHeight = i4167[7]
  i4166.characterSetSelectionMode = i4167[8]
  i4166.characterSequence = i4167[9]
  i4166.referencedFontAssetGUID = i4167[10]
  i4166.referencedTextAssetGUID = i4167[11]
  i4166.fontStyle = i4167[12]
  i4166.fontStyleModifier = i4167[13]
  i4166.renderMode = i4167[14]
  i4166.includeFontFeatures = !!i4167[15]
  return i4166
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4170 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4171 = data
  request.r(i4171[0], i4171[1], 0, i4170, 'regularTypeface')
  request.r(i4171[2], i4171[3], 0, i4170, 'italicTypeface')
  return i4170
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4172 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4173 = data
  i4172.useSafeMode = !!i4173[0]
  i4172.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4173[1], i4172.safeModeOptions)
  i4172.timeScale = i4173[2]
  i4172.unscaledTimeScale = i4173[3]
  i4172.useSmoothDeltaTime = !!i4173[4]
  i4172.maxSmoothUnscaledTime = i4173[5]
  i4172.rewindCallbackMode = i4173[6]
  i4172.showUnityEditorReport = !!i4173[7]
  i4172.logBehaviour = i4173[8]
  i4172.drawGizmos = !!i4173[9]
  i4172.defaultRecyclable = !!i4173[10]
  i4172.defaultAutoPlay = i4173[11]
  i4172.defaultUpdateType = i4173[12]
  i4172.defaultTimeScaleIndependent = !!i4173[13]
  i4172.defaultEaseType = i4173[14]
  i4172.defaultEaseOvershootOrAmplitude = i4173[15]
  i4172.defaultEasePeriod = i4173[16]
  i4172.defaultAutoKill = !!i4173[17]
  i4172.defaultLoopType = i4173[18]
  i4172.debugMode = !!i4173[19]
  i4172.debugStoreTargetId = !!i4173[20]
  i4172.showPreviewPanel = !!i4173[21]
  i4172.storeSettingsLocation = i4173[22]
  i4172.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4173[23], i4172.modules)
  i4172.createASMDEF = !!i4173[24]
  i4172.showPlayingTweens = !!i4173[25]
  i4172.showPausedTweens = !!i4173[26]
  return i4172
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4174 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4175 = data
  i4174.logBehaviour = i4175[0]
  i4174.nestedTweenFailureBehaviour = i4175[1]
  return i4174
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4176 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4177 = data
  i4176.showPanel = !!i4177[0]
  i4176.audioEnabled = !!i4177[1]
  i4176.physicsEnabled = !!i4177[2]
  i4176.physics2DEnabled = !!i4177[3]
  i4176.spriteEnabled = !!i4177[4]
  i4176.uiEnabled = !!i4177[5]
  i4176.textMeshProEnabled = !!i4177[6]
  i4176.tk2DEnabled = !!i4177[7]
  i4176.deAudioEnabled = !!i4177[8]
  i4176.deUnityExtendedEnabled = !!i4177[9]
  i4176.epoOutlineEnabled = !!i4177[10]
  return i4176
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4178 = root || request.c( 'TMPro.TMP_Settings' )
  var i4179 = data
  i4178.m_enableWordWrapping = !!i4179[0]
  i4178.m_enableKerning = !!i4179[1]
  i4178.m_enableExtraPadding = !!i4179[2]
  i4178.m_enableTintAllSprites = !!i4179[3]
  i4178.m_enableParseEscapeCharacters = !!i4179[4]
  i4178.m_EnableRaycastTarget = !!i4179[5]
  i4178.m_GetFontFeaturesAtRuntime = !!i4179[6]
  i4178.m_missingGlyphCharacter = i4179[7]
  i4178.m_warningsDisabled = !!i4179[8]
  request.r(i4179[9], i4179[10], 0, i4178, 'm_defaultFontAsset')
  i4178.m_defaultFontAssetPath = i4179[11]
  i4178.m_defaultFontSize = i4179[12]
  i4178.m_defaultAutoSizeMinRatio = i4179[13]
  i4178.m_defaultAutoSizeMaxRatio = i4179[14]
  i4178.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4179[15], i4179[16] )
  i4178.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4179[17], i4179[18] )
  i4178.m_autoSizeTextContainer = !!i4179[19]
  i4178.m_IsTextObjectScaleStatic = !!i4179[20]
  var i4181 = i4179[21]
  var i4180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4181.length; i += 2) {
  request.r(i4181[i + 0], i4181[i + 1], 1, i4180, '')
  }
  i4178.m_fallbackFontAssets = i4180
  i4178.m_matchMaterialPreset = !!i4179[22]
  request.r(i4179[23], i4179[24], 0, i4178, 'm_defaultSpriteAsset')
  i4178.m_defaultSpriteAssetPath = i4179[25]
  i4178.m_enableEmojiSupport = !!i4179[26]
  i4178.m_MissingCharacterSpriteUnicode = i4179[27]
  i4178.m_defaultColorGradientPresetsPath = i4179[28]
  request.r(i4179[29], i4179[30], 0, i4178, 'm_defaultStyleSheet')
  i4178.m_StyleSheetsResourcePath = i4179[31]
  request.r(i4179[32], i4179[33], 0, i4178, 'm_leadingCharacters')
  request.r(i4179[34], i4179[35], 0, i4178, 'm_followingCharacters')
  i4178.m_UseModernHangulLineBreakingRules = !!i4179[36]
  return i4178
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4182 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4183 = data
  i4182.hashCode = i4183[0]
  request.r(i4183[1], i4183[2], 0, i4182, 'material')
  i4182.materialHashCode = i4183[3]
  request.r(i4183[4], i4183[5], 0, i4182, 'spriteSheet')
  var i4185 = i4183[6]
  var i4184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4185.length; i += 1) {
    i4184.add(request.d('TMPro.TMP_Sprite', i4185[i + 0]));
  }
  i4182.spriteInfoList = i4184
  var i4187 = i4183[7]
  var i4186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4187.length; i += 2) {
  request.r(i4187[i + 0], i4187[i + 1], 1, i4186, '')
  }
  i4182.fallbackSpriteAssets = i4186
  i4182.m_Version = i4183[8]
  i4182.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4183[9], i4182.m_FaceInfo)
  var i4189 = i4183[10]
  var i4188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4189.length; i += 1) {
    i4188.add(request.d('TMPro.TMP_SpriteCharacter', i4189[i + 0]));
  }
  i4182.m_SpriteCharacterTable = i4188
  var i4191 = i4183[11]
  var i4190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4191.length; i += 1) {
    i4190.add(request.d('TMPro.TMP_SpriteGlyph', i4191[i + 0]));
  }
  i4182.m_SpriteGlyphTable = i4190
  return i4182
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4194 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4195 = data
  i4194.name = i4195[0]
  i4194.hashCode = i4195[1]
  i4194.unicode = i4195[2]
  i4194.pivot = new pc.Vec2( i4195[3], i4195[4] )
  request.r(i4195[5], i4195[6], 0, i4194, 'sprite')
  i4194.id = i4195[7]
  i4194.x = i4195[8]
  i4194.y = i4195[9]
  i4194.width = i4195[10]
  i4194.height = i4195[11]
  i4194.xOffset = i4195[12]
  i4194.yOffset = i4195[13]
  i4194.xAdvance = i4195[14]
  i4194.scale = i4195[15]
  return i4194
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4200 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4201 = data
  i4200.m_Name = i4201[0]
  i4200.m_HashCode = i4201[1]
  i4200.m_ElementType = i4201[2]
  i4200.m_Unicode = i4201[3]
  i4200.m_GlyphIndex = i4201[4]
  i4200.m_Scale = i4201[5]
  return i4200
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4204 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4205 = data
  request.r(i4205[0], i4205[1], 0, i4204, 'sprite')
  i4204.m_Index = i4205[2]
  i4204.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4205[3], i4204.m_Metrics)
  i4204.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4205[4], i4204.m_GlyphRect)
  i4204.m_Scale = i4205[5]
  i4204.m_AtlasIndex = i4205[6]
  i4204.m_ClassDefinitionType = i4205[7]
  return i4204
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4206 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4207 = data
  var i4209 = i4207[0]
  var i4208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4209.length; i += 1) {
    i4208.add(request.d('TMPro.TMP_Style', i4209[i + 0]));
  }
  i4206.m_StyleList = i4208
  return i4206
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4212 = root || request.c( 'TMPro.TMP_Style' )
  var i4213 = data
  i4212.m_Name = i4213[0]
  i4212.m_HashCode = i4213[1]
  i4212.m_OpeningDefinition = i4213[2]
  i4212.m_ClosingDefinition = i4213[3]
  i4212.m_OpeningTagArray = i4213[4]
  i4212.m_ClosingTagArray = i4213[5]
  i4212.m_OpeningTagUnicodeArray = i4213[6]
  i4212.m_ClosingTagUnicodeArray = i4213[7]
  return i4212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4215 = data
  var i4217 = i4215[0]
  var i4216 = []
  for(var i = 0; i < i4217.length; i += 1) {
    i4216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4217[i + 0]) );
  }
  i4214.files = i4216
  i4214.componentToPrefabIds = i4215[1]
  return i4214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4221 = data
  i4220.path = i4221[0]
  request.r(i4221[1], i4221[2], 0, i4220, 'unityObject')
  return i4220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4223 = data
  var i4225 = i4223[0]
  var i4224 = []
  for(var i = 0; i < i4225.length; i += 1) {
    i4224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4225[i + 0]) );
  }
  i4222.scriptsExecutionOrder = i4224
  var i4227 = i4223[1]
  var i4226 = []
  for(var i = 0; i < i4227.length; i += 1) {
    i4226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4227[i + 0]) );
  }
  i4222.sortingLayers = i4226
  var i4229 = i4223[2]
  var i4228 = []
  for(var i = 0; i < i4229.length; i += 1) {
    i4228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4229[i + 0]) );
  }
  i4222.cullingLayers = i4228
  i4222.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4223[3], i4222.timeSettings)
  i4222.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4223[4], i4222.physicsSettings)
  i4222.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4223[5], i4222.physics2DSettings)
  i4222.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4223[6], i4222.qualitySettings)
  i4222.enableRealtimeShadows = !!i4223[7]
  i4222.enableAutoInstancing = !!i4223[8]
  i4222.enableDynamicBatching = !!i4223[9]
  i4222.lightmapEncodingQuality = i4223[10]
  i4222.desiredColorSpace = i4223[11]
  var i4231 = i4223[12]
  var i4230 = []
  for(var i = 0; i < i4231.length; i += 1) {
    i4230.push( i4231[i + 0] );
  }
  i4222.allTags = i4230
  return i4222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4235 = data
  i4234.name = i4235[0]
  i4234.value = i4235[1]
  return i4234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4239 = data
  i4238.id = i4239[0]
  i4238.name = i4239[1]
  i4238.value = i4239[2]
  return i4238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4243 = data
  i4242.id = i4243[0]
  i4242.name = i4243[1]
  return i4242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4245 = data
  i4244.fixedDeltaTime = i4245[0]
  i4244.maximumDeltaTime = i4245[1]
  i4244.timeScale = i4245[2]
  i4244.maximumParticleTimestep = i4245[3]
  return i4244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4247 = data
  i4246.gravity = new pc.Vec3( i4247[0], i4247[1], i4247[2] )
  i4246.defaultSolverIterations = i4247[3]
  i4246.bounceThreshold = i4247[4]
  i4246.autoSyncTransforms = !!i4247[5]
  i4246.autoSimulation = !!i4247[6]
  var i4249 = i4247[7]
  var i4248 = []
  for(var i = 0; i < i4249.length; i += 1) {
    i4248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4249[i + 0]) );
  }
  i4246.collisionMatrix = i4248
  return i4246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4253 = data
  i4252.enabled = !!i4253[0]
  i4252.layerId = i4253[1]
  i4252.otherLayerId = i4253[2]
  return i4252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4255 = data
  request.r(i4255[0], i4255[1], 0, i4254, 'material')
  i4254.gravity = new pc.Vec2( i4255[2], i4255[3] )
  i4254.positionIterations = i4255[4]
  i4254.velocityIterations = i4255[5]
  i4254.velocityThreshold = i4255[6]
  i4254.maxLinearCorrection = i4255[7]
  i4254.maxAngularCorrection = i4255[8]
  i4254.maxTranslationSpeed = i4255[9]
  i4254.maxRotationSpeed = i4255[10]
  i4254.baumgarteScale = i4255[11]
  i4254.baumgarteTOIScale = i4255[12]
  i4254.timeToSleep = i4255[13]
  i4254.linearSleepTolerance = i4255[14]
  i4254.angularSleepTolerance = i4255[15]
  i4254.defaultContactOffset = i4255[16]
  i4254.autoSimulation = !!i4255[17]
  i4254.queriesHitTriggers = !!i4255[18]
  i4254.queriesStartInColliders = !!i4255[19]
  i4254.callbacksOnDisable = !!i4255[20]
  i4254.reuseCollisionCallbacks = !!i4255[21]
  i4254.autoSyncTransforms = !!i4255[22]
  var i4257 = i4255[23]
  var i4256 = []
  for(var i = 0; i < i4257.length; i += 1) {
    i4256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4257[i + 0]) );
  }
  i4254.collisionMatrix = i4256
  return i4254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4261 = data
  i4260.enabled = !!i4261[0]
  i4260.layerId = i4261[1]
  i4260.otherLayerId = i4261[2]
  return i4260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4263 = data
  var i4265 = i4263[0]
  var i4264 = []
  for(var i = 0; i < i4265.length; i += 1) {
    i4264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4265[i + 0]) );
  }
  i4262.qualityLevels = i4264
  var i4267 = i4263[1]
  var i4266 = []
  for(var i = 0; i < i4267.length; i += 1) {
    i4266.push( i4267[i + 0] );
  }
  i4262.names = i4266
  i4262.shadows = i4263[2]
  i4262.anisotropicFiltering = i4263[3]
  i4262.antiAliasing = i4263[4]
  i4262.lodBias = i4263[5]
  i4262.shadowCascades = i4263[6]
  i4262.shadowDistance = i4263[7]
  i4262.shadowmaskMode = i4263[8]
  i4262.shadowProjection = i4263[9]
  i4262.shadowResolution = i4263[10]
  i4262.softParticles = !!i4263[11]
  i4262.softVegetation = !!i4263[12]
  i4262.activeColorSpace = i4263[13]
  i4262.desiredColorSpace = i4263[14]
  i4262.masterTextureLimit = i4263[15]
  i4262.maxQueuedFrames = i4263[16]
  i4262.particleRaycastBudget = i4263[17]
  i4262.pixelLightCount = i4263[18]
  i4262.realtimeReflectionProbes = !!i4263[19]
  i4262.shadowCascade2Split = i4263[20]
  i4262.shadowCascade4Split = new pc.Vec3( i4263[21], i4263[22], i4263[23] )
  i4262.streamingMipmapsActive = !!i4263[24]
  i4262.vSyncCount = i4263[25]
  i4262.asyncUploadBufferSize = i4263[26]
  i4262.asyncUploadTimeSlice = i4263[27]
  i4262.billboardsFaceCameraPosition = !!i4263[28]
  i4262.shadowNearPlaneOffset = i4263[29]
  i4262.streamingMipmapsMemoryBudget = i4263[30]
  i4262.maximumLODLevel = i4263[31]
  i4262.streamingMipmapsAddAllCameras = !!i4263[32]
  i4262.streamingMipmapsMaxLevelReduction = i4263[33]
  i4262.streamingMipmapsRenderersPerFrame = i4263[34]
  i4262.resolutionScalingFixedDPIFactor = i4263[35]
  i4262.streamingMipmapsMaxFileIORequests = i4263[36]
  i4262.currentQualityLevel = i4263[37]
  return i4262
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4270 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4271 = data
  i4270.xPlacement = i4271[0]
  i4270.yPlacement = i4271[1]
  i4270.xAdvance = i4271[2]
  i4270.yAdvance = i4271[3]
  return i4270
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

Deserializers.creativeName = "DefaultVersion3";

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

Deserializers.buildID = "e84f5ff5-c526-4d22-8d57-f13aaae8e190";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

