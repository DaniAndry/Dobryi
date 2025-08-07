var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3694 = root || request.c( 'UnityEngine.JointSpring' )
  var i3695 = data
  i3694.spring = i3695[0]
  i3694.damper = i3695[1]
  i3694.targetPosition = i3695[2]
  return i3694
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3696 = root || request.c( 'UnityEngine.JointMotor' )
  var i3697 = data
  i3696.m_TargetVelocity = i3697[0]
  i3696.m_Force = i3697[1]
  i3696.m_FreeSpin = i3697[2]
  return i3696
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3698 = root || request.c( 'UnityEngine.JointLimits' )
  var i3699 = data
  i3698.m_Min = i3699[0]
  i3698.m_Max = i3699[1]
  i3698.m_Bounciness = i3699[2]
  i3698.m_BounceMinVelocity = i3699[3]
  i3698.m_ContactDistance = i3699[4]
  i3698.minBounce = i3699[5]
  i3698.maxBounce = i3699[6]
  return i3698
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3700 = root || request.c( 'UnityEngine.JointDrive' )
  var i3701 = data
  i3700.m_PositionSpring = i3701[0]
  i3700.m_PositionDamper = i3701[1]
  i3700.m_MaximumForce = i3701[2]
  i3700.m_UseAcceleration = i3701[3]
  return i3700
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3702 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3703 = data
  i3702.m_Spring = i3703[0]
  i3702.m_Damper = i3703[1]
  return i3702
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3704 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3705 = data
  i3704.m_Limit = i3705[0]
  i3704.m_Bounciness = i3705[1]
  i3704.m_ContactDistance = i3705[2]
  return i3704
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3706 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3707 = data
  i3706.m_ExtremumSlip = i3707[0]
  i3706.m_ExtremumValue = i3707[1]
  i3706.m_AsymptoteSlip = i3707[2]
  i3706.m_AsymptoteValue = i3707[3]
  i3706.m_Stiffness = i3707[4]
  return i3706
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3708 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3709 = data
  i3708.m_LowerAngle = i3709[0]
  i3708.m_UpperAngle = i3709[1]
  return i3708
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3710 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3711 = data
  i3710.m_MotorSpeed = i3711[0]
  i3710.m_MaximumMotorTorque = i3711[1]
  return i3710
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3712 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3713 = data
  i3712.m_DampingRatio = i3713[0]
  i3712.m_Frequency = i3713[1]
  i3712.m_Angle = i3713[2]
  return i3712
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3714 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3715 = data
  i3714.m_LowerTranslation = i3715[0]
  i3714.m_UpperTranslation = i3715[1]
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3717 = data
  i3716.name = i3717[0]
  i3716.width = i3717[1]
  i3716.height = i3717[2]
  i3716.mipmapCount = i3717[3]
  i3716.anisoLevel = i3717[4]
  i3716.filterMode = i3717[5]
  i3716.hdr = !!i3717[6]
  i3716.format = i3717[7]
  i3716.wrapMode = i3717[8]
  i3716.alphaIsTransparency = !!i3717[9]
  i3716.alphaSource = i3717[10]
  i3716.graphicsFormat = i3717[11]
  i3716.sRGBTexture = !!i3717[12]
  i3716.desiredColorSpace = i3717[13]
  i3716.wrapU = i3717[14]
  i3716.wrapV = i3717[15]
  return i3716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3718 = root || new pc.UnityMaterial()
  var i3719 = data
  i3718.name = i3719[0]
  request.r(i3719[1], i3719[2], 0, i3718, 'shader')
  i3718.renderQueue = i3719[3]
  i3718.enableInstancing = !!i3719[4]
  var i3721 = i3719[5]
  var i3720 = []
  for(var i = 0; i < i3721.length; i += 1) {
    i3720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3721[i + 0]) );
  }
  i3718.floatParameters = i3720
  var i3723 = i3719[6]
  var i3722 = []
  for(var i = 0; i < i3723.length; i += 1) {
    i3722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3723[i + 0]) );
  }
  i3718.colorParameters = i3722
  var i3725 = i3719[7]
  var i3724 = []
  for(var i = 0; i < i3725.length; i += 1) {
    i3724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3725[i + 0]) );
  }
  i3718.vectorParameters = i3724
  var i3727 = i3719[8]
  var i3726 = []
  for(var i = 0; i < i3727.length; i += 1) {
    i3726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3727[i + 0]) );
  }
  i3718.textureParameters = i3726
  var i3729 = i3719[9]
  var i3728 = []
  for(var i = 0; i < i3729.length; i += 1) {
    i3728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3729[i + 0]) );
  }
  i3718.materialFlags = i3728
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3733 = data
  i3732.name = i3733[0]
  i3732.value = i3733[1]
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3737 = data
  i3736.name = i3737[0]
  i3736.value = new pc.Color(i3737[1], i3737[2], i3737[3], i3737[4])
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3741 = data
  i3740.name = i3741[0]
  i3740.value = new pc.Vec4( i3741[1], i3741[2], i3741[3], i3741[4] )
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3745 = data
  i3744.name = i3745[0]
  request.r(i3745[1], i3745[2], 0, i3744, 'value')
  return i3744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3749 = data
  i3748.name = i3749[0]
  i3748.enabled = !!i3749[1]
  return i3748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3751 = data
  i3750.pivot = new pc.Vec2( i3751[0], i3751[1] )
  i3750.anchorMin = new pc.Vec2( i3751[2], i3751[3] )
  i3750.anchorMax = new pc.Vec2( i3751[4], i3751[5] )
  i3750.sizeDelta = new pc.Vec2( i3751[6], i3751[7] )
  i3750.anchoredPosition3D = new pc.Vec3( i3751[8], i3751[9], i3751[10] )
  i3750.rotation = new pc.Quat(i3751[11], i3751[12], i3751[13], i3751[14])
  i3750.scale = new pc.Vec3( i3751[15], i3751[16], i3751[17] )
  return i3750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3753 = data
  i3752.cullTransparentMesh = !!i3753[0]
  return i3752
}

Deserializers["People"] = function (request, data, root) {
  var i3754 = root || request.c( 'People' )
  var i3755 = data
  request.r(i3755[0], i3755[1], 0, i3754, '_readyImage')
  request.r(i3755[2], i3755[3], 0, i3754, '_additiveImage1')
  request.r(i3755[4], i3755[5], 0, i3754, '_additiveImage2')
  request.r(i3755[6], i3755[7], 0, i3754, '_endPoint')
  request.r(i3755[8], i3755[9], 0, i3754, 'Bank')
  request.r(i3755[10], i3755[11], 0, i3754, '_sizeText')
  i3754.CupType = i3755[12]
  i3754.JuiceType = i3755[13]
  i3754.AdditiveType1 = i3755[14]
  i3754.AdditiveType2 = i3755[15]
  request.r(i3755[16], i3755[17], 0, i3754, '_finishSound')
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3757 = data
  request.r(i3757[0], i3757[1], 0, i3756, 'clip')
  request.r(i3757[2], i3757[3], 0, i3756, 'outputAudioMixerGroup')
  i3756.playOnAwake = !!i3757[4]
  i3756.loop = !!i3757[5]
  i3756.time = i3757[6]
  i3756.volume = i3757[7]
  i3756.pitch = i3757[8]
  i3756.enabled = !!i3757[9]
  return i3756
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3758 = root || request.c( 'UnityEngine.UI.Image' )
  var i3759 = data
  request.r(i3759[0], i3759[1], 0, i3758, 'm_Sprite')
  i3758.m_Type = i3759[2]
  i3758.m_PreserveAspect = !!i3759[3]
  i3758.m_FillCenter = !!i3759[4]
  i3758.m_FillMethod = i3759[5]
  i3758.m_FillAmount = i3759[6]
  i3758.m_FillClockwise = !!i3759[7]
  i3758.m_FillOrigin = i3759[8]
  i3758.m_UseSpriteMesh = !!i3759[9]
  i3758.m_PixelsPerUnitMultiplier = i3759[10]
  request.r(i3759[11], i3759[12], 0, i3758, 'm_Material')
  i3758.m_Maskable = !!i3759[13]
  i3758.m_Color = new pc.Color(i3759[14], i3759[15], i3759[16], i3759[17])
  i3758.m_RaycastTarget = !!i3759[18]
  i3758.m_RaycastPadding = new pc.Vec4( i3759[19], i3759[20], i3759[21], i3759[22] )
  return i3758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3761 = data
  i3760.name = i3761[0]
  i3760.tagId = i3761[1]
  i3760.enabled = !!i3761[2]
  i3760.isStatic = !!i3761[3]
  i3760.layer = i3761[4]
  return i3760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3763 = data
  i3762.name = i3763[0]
  i3762.index = i3763[1]
  i3762.startup = !!i3763[2]
  return i3762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3765 = data
  i3764.position = new pc.Vec3( i3765[0], i3765[1], i3765[2] )
  i3764.scale = new pc.Vec3( i3765[3], i3765[4], i3765[5] )
  i3764.rotation = new pc.Quat(i3765[6], i3765[7], i3765[8], i3765[9])
  return i3764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3767 = data
  i3766.enabled = !!i3767[0]
  i3766.aspect = i3767[1]
  i3766.orthographic = !!i3767[2]
  i3766.orthographicSize = i3767[3]
  i3766.backgroundColor = new pc.Color(i3767[4], i3767[5], i3767[6], i3767[7])
  i3766.nearClipPlane = i3767[8]
  i3766.farClipPlane = i3767[9]
  i3766.fieldOfView = i3767[10]
  i3766.depth = i3767[11]
  i3766.clearFlags = i3767[12]
  i3766.cullingMask = i3767[13]
  i3766.rect = i3767[14]
  request.r(i3767[15], i3767[16], 0, i3766, 'targetTexture')
  i3766.usePhysicalProperties = !!i3767[17]
  i3766.focalLength = i3767[18]
  i3766.sensorSize = new pc.Vec2( i3767[19], i3767[20] )
  i3766.lensShift = new pc.Vec2( i3767[21], i3767[22] )
  i3766.gateFit = i3767[23]
  i3766.commandBufferCount = i3767[24]
  i3766.cameraType = i3767[25]
  return i3766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3769 = data
  request.r(i3769[0], i3769[1], 0, i3768, 'animatorController')
  request.r(i3769[2], i3769[3], 0, i3768, 'avatar')
  i3768.updateMode = i3769[4]
  i3768.hasTransformHierarchy = !!i3769[5]
  i3768.applyRootMotion = !!i3769[6]
  var i3771 = i3769[7]
  var i3770 = []
  for(var i = 0; i < i3771.length; i += 2) {
  request.r(i3771[i + 0], i3771[i + 1], 2, i3770, '')
  }
  i3768.humanBones = i3770
  i3768.enabled = !!i3769[8]
  return i3768
}

Deserializers["Bank"] = function (request, data, root) {
  var i3774 = root || request.c( 'Bank' )
  var i3775 = data
  request.r(i3775[0], i3775[1], 0, i3774, 'BuyBigCupButton')
  request.r(i3775[2], i3775[3], 0, i3774, 'BigCupButton')
  request.r(i3775[4], i3775[5], 0, i3774, 'MiddleCupButton')
  request.r(i3775[6], i3775[7], 0, i3774, 'MoneyText')
  request.r(i3775[8], i3775[9], 0, i3774, 'Tutorial')
  request.r(i3775[10], i3775[11], 0, i3774, 'BuyAdditiveButton')
  request.r(i3775[12], i3775[13], 0, i3774, 'BuyJuiceButton')
  request.r(i3775[14], i3775[15], 0, i3774, 'JuiceButton1')
  request.r(i3775[16], i3775[17], 0, i3774, 'JuiceButton2')
  request.r(i3775[18], i3775[19], 0, i3774, 'JuiceButton3')
  request.r(i3775[20], i3775[21], 0, i3774, 'Additive1Button')
  request.r(i3775[22], i3775[23], 0, i3774, 'Additive2Button')
  i3774.Money = i3775[24]
  i3774.IsBigCupBuy = !!i3775[25]
  i3774.IsJuiceBuy = !!i3775[26]
  i3774.IsAdditiveBuy = !!i3775[27]
  request.r(i3775[28], i3775[29], 0, i3774, '_buySound')
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3777 = data
  i3776.enabled = !!i3777[0]
  i3776.planeDistance = i3777[1]
  i3776.referencePixelsPerUnit = i3777[2]
  i3776.isFallbackOverlay = !!i3777[3]
  i3776.renderMode = i3777[4]
  i3776.renderOrder = i3777[5]
  i3776.sortingLayerName = i3777[6]
  i3776.sortingOrder = i3777[7]
  i3776.scaleFactor = i3777[8]
  request.r(i3777[9], i3777[10], 0, i3776, 'worldCamera')
  i3776.overrideSorting = !!i3777[11]
  i3776.pixelPerfect = !!i3777[12]
  i3776.targetDisplay = i3777[13]
  i3776.overridePixelPerfect = !!i3777[14]
  return i3776
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3778 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3779 = data
  i3778.m_UiScaleMode = i3779[0]
  i3778.m_ReferencePixelsPerUnit = i3779[1]
  i3778.m_ScaleFactor = i3779[2]
  i3778.m_ReferenceResolution = new pc.Vec2( i3779[3], i3779[4] )
  i3778.m_ScreenMatchMode = i3779[5]
  i3778.m_MatchWidthOrHeight = i3779[6]
  i3778.m_PhysicalUnit = i3779[7]
  i3778.m_FallbackScreenDPI = i3779[8]
  i3778.m_DefaultSpriteDPI = i3779[9]
  i3778.m_DynamicPixelsPerUnit = i3779[10]
  i3778.m_PresetInfoIsWorld = !!i3779[11]
  return i3778
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3780 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3781 = data
  i3780.m_IgnoreReversedGraphics = !!i3781[0]
  i3780.m_BlockingObjects = i3781[1]
  i3780.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3781[2] )
  return i3780
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i3782 = root || request.c( 'ImageShiftOnOrientation' )
  var i3783 = data
  var i3785 = i3783[0]
  var i3784 = []
  for(var i = 0; i < i3785.length; i += 1) {
    i3784.push( request.d('ItemSwitcherData', i3785[i + 0]) );
  }
  i3782.Items = i3784
  request.r(i3783[1], i3783[2], 0, i3782, '_backHorizontal')
  request.r(i3783[3], i3783[4], 0, i3782, '_backVertical')
  request.r(i3783[5], i3783[6], 0, i3782, '_tableHorizontal')
  request.r(i3783[7], i3783[8], 0, i3782, '_tableVertical')
  i3782.IsDebug = !!i3783[9]
  i3782.CanCopy = !!i3783[10]
  return i3782
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i3788 = root || request.c( 'ItemSwitcherData' )
  var i3789 = data
  request.r(i3789[0], i3789[1], 0, i3788, 'Target')
  i3788.HorizontalAnchoredPosition = new pc.Vec2( i3789[2], i3789[3] )
  i3788.SizeHorizontal = new pc.Vec2( i3789[4], i3789[5] )
  i3788.VerticalAnchoredPosition = new pc.Vec2( i3789[6], i3789[7] )
  i3788.SizeVertical = new pc.Vec2( i3789[8], i3789[9] )
  i3788.MinHorizontal = new pc.Vec2( i3789[10], i3789[11] )
  i3788.MaxHorizontal = new pc.Vec2( i3789[12], i3789[13] )
  i3788.MinVertical = new pc.Vec2( i3789[14], i3789[15] )
  i3788.MaxVertical = new pc.Vec2( i3789[16], i3789[17] )
  i3788.IsAnchored = !!i3789[18]
  i3788.IsDebug = !!i3789[19]
  i3788.CopyHorizontal = !!i3789[20]
  i3788.CopyVertical = !!i3789[21]
  return i3788
}

Deserializers["Point"] = function (request, data, root) {
  var i3790 = root || request.c( 'Point' )
  var i3791 = data
  return i3790
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3792 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3793 = data
  i3792.m_hasFontAssetChanged = !!i3793[0]
  request.r(i3793[1], i3793[2], 0, i3792, 'm_baseMaterial')
  i3792.m_maskOffset = new pc.Vec4( i3793[3], i3793[4], i3793[5], i3793[6] )
  i3792.m_text = i3793[7]
  i3792.m_isRightToLeft = !!i3793[8]
  request.r(i3793[9], i3793[10], 0, i3792, 'm_fontAsset')
  request.r(i3793[11], i3793[12], 0, i3792, 'm_sharedMaterial')
  var i3795 = i3793[13]
  var i3794 = []
  for(var i = 0; i < i3795.length; i += 2) {
  request.r(i3795[i + 0], i3795[i + 1], 2, i3794, '')
  }
  i3792.m_fontSharedMaterials = i3794
  request.r(i3793[14], i3793[15], 0, i3792, 'm_fontMaterial')
  var i3797 = i3793[16]
  var i3796 = []
  for(var i = 0; i < i3797.length; i += 2) {
  request.r(i3797[i + 0], i3797[i + 1], 2, i3796, '')
  }
  i3792.m_fontMaterials = i3796
  i3792.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3793[17], i3793[18], i3793[19], i3793[20])
  i3792.m_fontColor = new pc.Color(i3793[21], i3793[22], i3793[23], i3793[24])
  i3792.m_enableVertexGradient = !!i3793[25]
  i3792.m_colorMode = i3793[26]
  i3792.m_fontColorGradient = request.d('TMPro.VertexGradient', i3793[27], i3792.m_fontColorGradient)
  request.r(i3793[28], i3793[29], 0, i3792, 'm_fontColorGradientPreset')
  request.r(i3793[30], i3793[31], 0, i3792, 'm_spriteAsset')
  i3792.m_tintAllSprites = !!i3793[32]
  request.r(i3793[33], i3793[34], 0, i3792, 'm_StyleSheet')
  i3792.m_TextStyleHashCode = i3793[35]
  i3792.m_overrideHtmlColors = !!i3793[36]
  i3792.m_faceColor = UnityEngine.Color32.ConstructColor(i3793[37], i3793[38], i3793[39], i3793[40])
  i3792.m_fontSize = i3793[41]
  i3792.m_fontSizeBase = i3793[42]
  i3792.m_fontWeight = i3793[43]
  i3792.m_enableAutoSizing = !!i3793[44]
  i3792.m_fontSizeMin = i3793[45]
  i3792.m_fontSizeMax = i3793[46]
  i3792.m_fontStyle = i3793[47]
  i3792.m_HorizontalAlignment = i3793[48]
  i3792.m_VerticalAlignment = i3793[49]
  i3792.m_textAlignment = i3793[50]
  i3792.m_characterSpacing = i3793[51]
  i3792.m_wordSpacing = i3793[52]
  i3792.m_lineSpacing = i3793[53]
  i3792.m_lineSpacingMax = i3793[54]
  i3792.m_paragraphSpacing = i3793[55]
  i3792.m_charWidthMaxAdj = i3793[56]
  i3792.m_enableWordWrapping = !!i3793[57]
  i3792.m_wordWrappingRatios = i3793[58]
  i3792.m_overflowMode = i3793[59]
  request.r(i3793[60], i3793[61], 0, i3792, 'm_linkedTextComponent')
  request.r(i3793[62], i3793[63], 0, i3792, 'parentLinkedComponent')
  i3792.m_enableKerning = !!i3793[64]
  i3792.m_enableExtraPadding = !!i3793[65]
  i3792.checkPaddingRequired = !!i3793[66]
  i3792.m_isRichText = !!i3793[67]
  i3792.m_parseCtrlCharacters = !!i3793[68]
  i3792.m_isOrthographic = !!i3793[69]
  i3792.m_isCullingEnabled = !!i3793[70]
  i3792.m_horizontalMapping = i3793[71]
  i3792.m_verticalMapping = i3793[72]
  i3792.m_uvLineOffset = i3793[73]
  i3792.m_geometrySortingOrder = i3793[74]
  i3792.m_IsTextObjectScaleStatic = !!i3793[75]
  i3792.m_VertexBufferAutoSizeReduction = !!i3793[76]
  i3792.m_useMaxVisibleDescender = !!i3793[77]
  i3792.m_pageToDisplay = i3793[78]
  i3792.m_margin = new pc.Vec4( i3793[79], i3793[80], i3793[81], i3793[82] )
  i3792.m_isUsingLegacyAnimationComponent = !!i3793[83]
  i3792.m_isVolumetricText = !!i3793[84]
  request.r(i3793[85], i3793[86], 0, i3792, 'm_Material')
  i3792.m_Maskable = !!i3793[87]
  i3792.m_Color = new pc.Color(i3793[88], i3793[89], i3793[90], i3793[91])
  i3792.m_RaycastTarget = !!i3793[92]
  i3792.m_RaycastPadding = new pc.Vec4( i3793[93], i3793[94], i3793[95], i3793[96] )
  return i3792
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3800 = root || request.c( 'TMPro.VertexGradient' )
  var i3801 = data
  i3800.topLeft = new pc.Color(i3801[0], i3801[1], i3801[2], i3801[3])
  i3800.topRight = new pc.Color(i3801[4], i3801[5], i3801[6], i3801[7])
  i3800.bottomLeft = new pc.Color(i3801[8], i3801[9], i3801[10], i3801[11])
  i3800.bottomRight = new pc.Color(i3801[12], i3801[13], i3801[14], i3801[15])
  return i3800
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i3802 = root || request.c( 'PeopleContainer' )
  var i3803 = data
  var i3805 = i3803[0]
  var i3804 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i3805.length; i += 2) {
  request.r(i3805[i + 0], i3805[i + 1], 1, i3804, '')
  }
  i3802.CurrentPeoples = i3804
  var i3807 = i3803[1]
  var i3806 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i3807.length; i += 2) {
  request.r(i3807[i + 0], i3807[i + 1], 1, i3806, '')
  }
  i3802._peoples = i3806
  request.r(i3803[2], i3803[3], 0, i3802, '_tutorialPeople')
  request.r(i3803[4], i3803[5], 0, i3802, '_spawnPoint')
  request.r(i3803[6], i3803[7], 0, i3802, '_point1')
  request.r(i3803[8], i3803[9], 0, i3802, '_point2')
  request.r(i3803[10], i3803[11], 0, i3802, '_endPoint')
  request.r(i3803[12], i3803[13], 0, i3802, '_juiceConfig')
  request.r(i3803[14], i3803[15], 0, i3802, '_tutorial')
  return i3802
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i3810 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i3811 = data
  i3810.m_HorizontalFit = i3811[0]
  i3810.m_VerticalFit = i3811[1]
  return i3810
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3812 = root || request.c( 'UnityEngine.UI.Button' )
  var i3813 = data
  i3812.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3813[0], i3812.m_OnClick)
  i3812.m_Navigation = request.d('UnityEngine.UI.Navigation', i3813[1], i3812.m_Navigation)
  i3812.m_Transition = i3813[2]
  i3812.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3813[3], i3812.m_Colors)
  i3812.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3813[4], i3812.m_SpriteState)
  i3812.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3813[5], i3812.m_AnimationTriggers)
  i3812.m_Interactable = !!i3813[6]
  request.r(i3813[7], i3813[8], 0, i3812, 'm_TargetGraphic')
  return i3812
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3814 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3815 = data
  i3814.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3815[0], i3814.m_PersistentCalls)
  return i3814
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3816 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3817 = data
  var i3819 = i3817[0]
  var i3818 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3819.length; i += 1) {
    i3818.add(request.d('UnityEngine.Events.PersistentCall', i3819[i + 0]));
  }
  i3816.m_Calls = i3818
  return i3816
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3822 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3823 = data
  request.r(i3823[0], i3823[1], 0, i3822, 'm_Target')
  i3822.m_TargetAssemblyTypeName = i3823[2]
  i3822.m_MethodName = i3823[3]
  i3822.m_Mode = i3823[4]
  i3822.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3823[5], i3822.m_Arguments)
  i3822.m_CallState = i3823[6]
  return i3822
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3824 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3825 = data
  request.r(i3825[0], i3825[1], 0, i3824, 'm_ObjectArgument')
  i3824.m_ObjectArgumentAssemblyTypeName = i3825[2]
  i3824.m_IntArgument = i3825[3]
  i3824.m_FloatArgument = i3825[4]
  i3824.m_StringArgument = i3825[5]
  i3824.m_BoolArgument = !!i3825[6]
  return i3824
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3826 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3827 = data
  i3826.m_Mode = i3827[0]
  i3826.m_WrapAround = !!i3827[1]
  request.r(i3827[2], i3827[3], 0, i3826, 'm_SelectOnUp')
  request.r(i3827[4], i3827[5], 0, i3826, 'm_SelectOnDown')
  request.r(i3827[6], i3827[7], 0, i3826, 'm_SelectOnLeft')
  request.r(i3827[8], i3827[9], 0, i3826, 'm_SelectOnRight')
  return i3826
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3828 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3829 = data
  i3828.m_NormalColor = new pc.Color(i3829[0], i3829[1], i3829[2], i3829[3])
  i3828.m_HighlightedColor = new pc.Color(i3829[4], i3829[5], i3829[6], i3829[7])
  i3828.m_PressedColor = new pc.Color(i3829[8], i3829[9], i3829[10], i3829[11])
  i3828.m_SelectedColor = new pc.Color(i3829[12], i3829[13], i3829[14], i3829[15])
  i3828.m_DisabledColor = new pc.Color(i3829[16], i3829[17], i3829[18], i3829[19])
  i3828.m_ColorMultiplier = i3829[20]
  i3828.m_FadeDuration = i3829[21]
  return i3828
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3830 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3831 = data
  request.r(i3831[0], i3831[1], 0, i3830, 'm_HighlightedSprite')
  request.r(i3831[2], i3831[3], 0, i3830, 'm_PressedSprite')
  request.r(i3831[4], i3831[5], 0, i3830, 'm_SelectedSprite')
  request.r(i3831[6], i3831[7], 0, i3830, 'm_DisabledSprite')
  return i3830
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3832 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3833 = data
  i3832.m_NormalTrigger = i3833[0]
  i3832.m_HighlightedTrigger = i3833[1]
  i3832.m_PressedTrigger = i3833[2]
  i3832.m_SelectedTrigger = i3833[3]
  i3832.m_DisabledTrigger = i3833[4]
  return i3832
}

Deserializers["BackImage"] = function (request, data, root) {
  var i3834 = root || request.c( 'BackImage' )
  var i3835 = data
  return i3834
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i3836 = root || request.c( 'AheadImage' )
  var i3837 = data
  return i3836
}

Deserializers["Order"] = function (request, data, root) {
  var i3838 = root || request.c( 'Order' )
  var i3839 = data
  request.r(i3839[0], i3839[1], 0, i3838, '_juiceAnimator')
  request.r(i3839[2], i3839[3], 0, i3838, '_cupAnimator')
  request.r(i3839[4], i3839[5], 0, i3838, '_canvasAnimator')
  i3838.CupType = i3839[6]
  i3838.JuiceType = i3839[7]
  i3838.AdditiveType1 = i3839[8]
  i3838.AdditiveType2 = i3839[9]
  i3838.IsFree = !!i3839[10]
  i3838.IsSpriteReady = !!i3839[11]
  i3838.IsCupReady = !!i3839[12]
  i3838.IsJuiceReady = !!i3839[13]
  request.r(i3839[14], i3839[15], 0, i3838, '_iceButton')
  request.r(i3839[16], i3839[17], 0, i3838, '_grassButton')
  request.r(i3839[18], i3839[19], 0, i3838, '_juiceBallsButton')
  request.r(i3839[20], i3839[21], 0, i3838, '_strawButton')
  request.r(i3839[22], i3839[23], 0, i3838, '_bigCupButton')
  request.r(i3839[24], i3839[25], 0, i3838, '_middleCupButton')
  request.r(i3839[26], i3839[27], 0, i3838, '_smallCupButton')
  request.r(i3839[28], i3839[29], 0, i3838, '_appleButton')
  request.r(i3839[30], i3839[31], 0, i3838, '_orangeButton')
  request.r(i3839[32], i3839[33], 0, i3838, '_multifruitButton')
  request.r(i3839[34], i3839[35], 0, i3838, '_tomatoButton')
  request.r(i3839[36], i3839[37], 0, i3838, '_cherryButton')
  request.r(i3839[38], i3839[39], 0, i3838, '_smallRawJuiceImage')
  request.r(i3839[40], i3839[41], 0, i3838, '_middleRawJuiceImage')
  request.r(i3839[42], i3839[43], 0, i3838, '_bigRawJuiceImage')
  request.r(i3839[44], i3839[45], 0, i3838, '_smallReadyJuiceImage')
  request.r(i3839[46], i3839[47], 0, i3838, '_middleReadyJuiceImage')
  request.r(i3839[48], i3839[49], 0, i3838, '_bigReadyJuiceImage')
  request.r(i3839[50], i3839[51], 0, i3838, '_backImage')
  request.r(i3839[52], i3839[53], 0, i3838, '_aheadImage')
  request.r(i3839[54], i3839[55], 0, i3838, '_config')
  request.r(i3839[56], i3839[57], 0, i3838, '_takeOrderButton')
  request.r(i3839[58], i3839[59], 0, i3838, '_peopleContainer')
  request.r(i3839[60], i3839[61], 0, i3838, '_tutorial')
  request.r(i3839[62], i3839[63], 0, i3838, '_bText')
  request.r(i3839[64], i3839[65], 0, i3838, '_mText')
  request.r(i3839[66], i3839[67], 0, i3838, '_sText')
  request.r(i3839[68], i3839[69], 0, i3838, '_clickSound')
  request.r(i3839[70], i3839[71], 0, i3838, '_juiceSound')
  return i3838
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i3840 = root || request.c( 'Tutorial' )
  var i3841 = data
  i3840.IsTutorial = !!i3841[0]
  request.r(i3841[1], i3841[2], 0, i3840, 'Finger1')
  request.r(i3841[3], i3841[4], 0, i3840, 'Finger2')
  request.r(i3841[5], i3841[6], 0, i3840, 'Finger3')
  request.r(i3841[7], i3841[8], 0, i3840, 'Finger4')
  request.r(i3841[9], i3841[10], 0, i3840, 'Finger5')
  request.r(i3841[11], i3841[12], 0, i3840, 'BuyBigCupFinger')
  request.r(i3841[13], i3841[14], 0, i3840, 'BuyJuiceFinger')
  request.r(i3841[15], i3841[16], 0, i3840, 'SmallCupButton')
  request.r(i3841[17], i3841[18], 0, i3840, 'JuiceButton')
  request.r(i3841[19], i3841[20], 0, i3840, 'StrawButton')
  request.r(i3841[21], i3841[22], 0, i3840, 'AdditiveButton')
  request.r(i3841[23], i3841[24], 0, i3840, 'ReadyButton')
  var i3843 = i3841[25]
  var i3842 = []
  for(var i = 0; i < i3843.length; i += 2) {
  request.r(i3843[i + 0], i3843[i + 1], 2, i3842, '')
  }
  i3840.Buttons = i3842
  request.r(i3841[26], i3841[27], 0, i3840, 'Bank')
  return i3840
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3846 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3847 = data
  request.r(i3847[0], i3847[1], 0, i3846, 'm_FirstSelected')
  i3846.m_sendNavigationEvents = !!i3847[2]
  i3846.m_DragThreshold = i3847[3]
  return i3846
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3848 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3849 = data
  i3848.m_HorizontalAxis = i3849[0]
  i3848.m_VerticalAxis = i3849[1]
  i3848.m_SubmitButton = i3849[2]
  i3848.m_CancelButton = i3849[3]
  i3848.m_InputActionsPerSecond = i3849[4]
  i3848.m_RepeatDelay = i3849[5]
  i3848.m_ForceModuleActive = !!i3849[6]
  i3848.m_SendPointerHoverToParent = !!i3849[7]
  return i3848
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i3850 = root || request.c( 'JuiceConfig' )
  var i3851 = data
  request.r(i3851[0], i3851[1], 0, i3850, 'EntityBigCup')
  request.r(i3851[2], i3851[3], 0, i3850, 'TomatoBigCup')
  request.r(i3851[4], i3851[5], 0, i3850, 'AppleBigCup')
  request.r(i3851[6], i3851[7], 0, i3850, 'OrangeBigCup')
  request.r(i3851[8], i3851[9], 0, i3850, 'CherryBigCup')
  request.r(i3851[10], i3851[11], 0, i3850, 'MultifruitBigCup')
  request.r(i3851[12], i3851[13], 0, i3850, 'TomatoBigStrawCup')
  request.r(i3851[14], i3851[15], 0, i3850, 'MultifruitBigStrawCup')
  request.r(i3851[16], i3851[17], 0, i3850, 'AppleBigStrawCup')
  request.r(i3851[18], i3851[19], 0, i3850, 'OrangeBigStrawCup')
  request.r(i3851[20], i3851[21], 0, i3850, 'CherryBigStrawCup')
  request.r(i3851[22], i3851[23], 0, i3850, 'MultifruitBigBallsCup')
  request.r(i3851[24], i3851[25], 0, i3850, 'TomatoBigBallsCup')
  request.r(i3851[26], i3851[27], 0, i3850, 'AppleBigBallsCup')
  request.r(i3851[28], i3851[29], 0, i3850, 'OrangeBigBallsCup')
  request.r(i3851[30], i3851[31], 0, i3850, 'CherryBigBallsCup')
  request.r(i3851[32], i3851[33], 0, i3850, 'EntityMiddleCup')
  request.r(i3851[34], i3851[35], 0, i3850, 'TomatoMiddleCup')
  request.r(i3851[36], i3851[37], 0, i3850, 'AppleMiddleCup')
  request.r(i3851[38], i3851[39], 0, i3850, 'OrangeMiddleCup')
  request.r(i3851[40], i3851[41], 0, i3850, 'CherryMiddleCup')
  request.r(i3851[42], i3851[43], 0, i3850, 'MultifruitMiddleCup')
  request.r(i3851[44], i3851[45], 0, i3850, 'TomatoMiddleStrawCup')
  request.r(i3851[46], i3851[47], 0, i3850, 'MultifruitMiddleStrawCup')
  request.r(i3851[48], i3851[49], 0, i3850, 'AppleMiddleStrawCup')
  request.r(i3851[50], i3851[51], 0, i3850, 'OrangeMiddleStrawCup')
  request.r(i3851[52], i3851[53], 0, i3850, 'CherryMiddleStrawCup')
  request.r(i3851[54], i3851[55], 0, i3850, 'MultifruitMiddleBallsCup')
  request.r(i3851[56], i3851[57], 0, i3850, 'TomatoMiddleBallsCup')
  request.r(i3851[58], i3851[59], 0, i3850, 'AppleMiddleBallsCup')
  request.r(i3851[60], i3851[61], 0, i3850, 'OrangeMiddleBallsCup')
  request.r(i3851[62], i3851[63], 0, i3850, 'CherryMiddleBallsCup')
  request.r(i3851[64], i3851[65], 0, i3850, 'EntitySmallCup')
  request.r(i3851[66], i3851[67], 0, i3850, 'TomatoSmallCup')
  request.r(i3851[68], i3851[69], 0, i3850, 'AppleSmallCup')
  request.r(i3851[70], i3851[71], 0, i3850, 'OrangeSmallCup')
  request.r(i3851[72], i3851[73], 0, i3850, 'CherrySmallCup')
  request.r(i3851[74], i3851[75], 0, i3850, 'MultifruitSmallCup')
  request.r(i3851[76], i3851[77], 0, i3850, 'TomatoSmallStrawCup')
  request.r(i3851[78], i3851[79], 0, i3850, 'AppleSmallStrawCup')
  request.r(i3851[80], i3851[81], 0, i3850, 'OrangeSmallStrawCup')
  request.r(i3851[82], i3851[83], 0, i3850, 'CherrySmallStrawCup')
  request.r(i3851[84], i3851[85], 0, i3850, 'MultifruitSmallStrawCup')
  request.r(i3851[86], i3851[87], 0, i3850, 'AppleSmallBallsCup')
  request.r(i3851[88], i3851[89], 0, i3850, 'TomatoSmallBallsCup')
  request.r(i3851[90], i3851[91], 0, i3850, 'OrangeSmallBallsCup')
  request.r(i3851[92], i3851[93], 0, i3850, 'CherrySmallBallsCup')
  request.r(i3851[94], i3851[95], 0, i3850, 'MultifruitSmallBallsCup')
  request.r(i3851[96], i3851[97], 0, i3850, 'JuiceBallAdditive')
  request.r(i3851[98], i3851[99], 0, i3850, 'IceAdditive')
  request.r(i3851[100], i3851[101], 0, i3850, 'GrassAdditive')
  return i3850
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i3852 = root || request.c( 'TouchIdleTimer' )
  var i3853 = data
  return i3852
}

Deserializers["Helper"] = function (request, data, root) {
  var i3854 = root || request.c( 'Helper' )
  var i3855 = data
  request.r(i3855[0], i3855[1], 0, i3854, '_smallCupFinger')
  request.r(i3855[2], i3855[3], 0, i3854, '_middleCupFinger')
  request.r(i3855[4], i3855[5], 0, i3854, '_bigCupFinger')
  request.r(i3855[6], i3855[7], 0, i3854, '_iceFinger')
  request.r(i3855[8], i3855[9], 0, i3854, '_grassFinger')
  request.r(i3855[10], i3855[11], 0, i3854, '_juiceballFinger')
  request.r(i3855[12], i3855[13], 0, i3854, '_appleFinger')
  request.r(i3855[14], i3855[15], 0, i3854, '_cherryFinger')
  request.r(i3855[16], i3855[17], 0, i3854, '_orangeFinger')
  request.r(i3855[18], i3855[19], 0, i3854, '_multifruitFinger')
  request.r(i3855[20], i3855[21], 0, i3854, '_tomatoFinger')
  request.r(i3855[22], i3855[23], 0, i3854, '_strawFinger')
  request.r(i3855[24], i3855[25], 0, i3854, '_readyFinger')
  request.r(i3855[26], i3855[27], 0, i3854, '_peoples')
  request.r(i3855[28], i3855[29], 0, i3854, '_tutorial')
  request.r(i3855[30], i3855[31], 0, i3854, '_order')
  request.r(i3855[32], i3855[33], 0, i3854, '_strawButton')
  request.r(i3855[34], i3855[35], 0, i3854, '_bigCupButton')
  request.r(i3855[36], i3855[37], 0, i3854, '_middleCupButton')
  request.r(i3855[38], i3855[39], 0, i3854, '_smallCupButton')
  request.r(i3855[40], i3855[41], 0, i3854, '_readyButton')
  request.r(i3855[42], i3855[43], 0, i3854, '_touchIdleTimer')
  request.r(i3855[44], i3855[45], 0, i3854, '_finalScreen')
  return i3854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3857 = data
  i3856.ambientIntensity = i3857[0]
  i3856.reflectionIntensity = i3857[1]
  i3856.ambientMode = i3857[2]
  i3856.ambientLight = new pc.Color(i3857[3], i3857[4], i3857[5], i3857[6])
  i3856.ambientSkyColor = new pc.Color(i3857[7], i3857[8], i3857[9], i3857[10])
  i3856.ambientGroundColor = new pc.Color(i3857[11], i3857[12], i3857[13], i3857[14])
  i3856.ambientEquatorColor = new pc.Color(i3857[15], i3857[16], i3857[17], i3857[18])
  i3856.fogColor = new pc.Color(i3857[19], i3857[20], i3857[21], i3857[22])
  i3856.fogEndDistance = i3857[23]
  i3856.fogStartDistance = i3857[24]
  i3856.fogDensity = i3857[25]
  i3856.fog = !!i3857[26]
  request.r(i3857[27], i3857[28], 0, i3856, 'skybox')
  i3856.fogMode = i3857[29]
  var i3859 = i3857[30]
  var i3858 = []
  for(var i = 0; i < i3859.length; i += 1) {
    i3858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3859[i + 0]) );
  }
  i3856.lightmaps = i3858
  i3856.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3857[31], i3856.lightProbes)
  i3856.lightmapsMode = i3857[32]
  i3856.mixedBakeMode = i3857[33]
  i3856.environmentLightingMode = i3857[34]
  i3856.ambientProbe = new pc.SphericalHarmonicsL2(i3857[35])
  i3856.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3857[36])
  i3856.useReferenceAmbientProbe = !!i3857[37]
  request.r(i3857[38], i3857[39], 0, i3856, 'customReflection')
  request.r(i3857[40], i3857[41], 0, i3856, 'defaultReflection')
  i3856.defaultReflectionMode = i3857[42]
  i3856.defaultReflectionResolution = i3857[43]
  i3856.sunLightObjectId = i3857[44]
  i3856.pixelLightCount = i3857[45]
  i3856.defaultReflectionHDR = !!i3857[46]
  i3856.hasLightDataAsset = !!i3857[47]
  i3856.hasManualGenerate = !!i3857[48]
  return i3856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3863 = data
  request.r(i3863[0], i3863[1], 0, i3862, 'lightmapColor')
  request.r(i3863[2], i3863[3], 0, i3862, 'lightmapDirection')
  return i3862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3864 = root || new UnityEngine.LightProbes()
  var i3865 = data
  return i3864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3873 = data
  var i3875 = i3873[0]
  var i3874 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3875.length; i += 1) {
    i3874.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3875[i + 0]));
  }
  i3872.ShaderCompilationErrors = i3874
  i3872.name = i3873[1]
  i3872.guid = i3873[2]
  var i3877 = i3873[3]
  var i3876 = []
  for(var i = 0; i < i3877.length; i += 1) {
    i3876.push( i3877[i + 0] );
  }
  i3872.shaderDefinedKeywords = i3876
  var i3879 = i3873[4]
  var i3878 = []
  for(var i = 0; i < i3879.length; i += 1) {
    i3878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3879[i + 0]) );
  }
  i3872.passes = i3878
  var i3881 = i3873[5]
  var i3880 = []
  for(var i = 0; i < i3881.length; i += 1) {
    i3880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3881[i + 0]) );
  }
  i3872.usePasses = i3880
  var i3883 = i3873[6]
  var i3882 = []
  for(var i = 0; i < i3883.length; i += 1) {
    i3882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3883[i + 0]) );
  }
  i3872.defaultParameterValues = i3882
  request.r(i3873[7], i3873[8], 0, i3872, 'unityFallbackShader')
  i3872.readDepth = !!i3873[9]
  i3872.isCreatedByShaderGraph = !!i3873[10]
  i3872.compiled = !!i3873[11]
  return i3872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3887 = data
  i3886.shaderName = i3887[0]
  i3886.errorMessage = i3887[1]
  return i3886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3892 = root || new pc.UnityShaderPass()
  var i3893 = data
  i3892.id = i3893[0]
  i3892.subShaderIndex = i3893[1]
  i3892.name = i3893[2]
  i3892.passType = i3893[3]
  i3892.grabPassTextureName = i3893[4]
  i3892.usePass = !!i3893[5]
  i3892.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3893[6], i3892.zTest)
  i3892.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3893[7], i3892.zWrite)
  i3892.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3893[8], i3892.culling)
  i3892.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3893[9], i3892.blending)
  i3892.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3893[10], i3892.alphaBlending)
  i3892.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3893[11], i3892.colorWriteMask)
  i3892.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3893[12], i3892.offsetUnits)
  i3892.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3893[13], i3892.offsetFactor)
  i3892.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3893[14], i3892.stencilRef)
  i3892.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3893[15], i3892.stencilReadMask)
  i3892.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3893[16], i3892.stencilWriteMask)
  i3892.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3893[17], i3892.stencilOp)
  i3892.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3893[18], i3892.stencilOpFront)
  i3892.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3893[19], i3892.stencilOpBack)
  var i3895 = i3893[20]
  var i3894 = []
  for(var i = 0; i < i3895.length; i += 1) {
    i3894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3895[i + 0]) );
  }
  i3892.tags = i3894
  var i3897 = i3893[21]
  var i3896 = []
  for(var i = 0; i < i3897.length; i += 1) {
    i3896.push( i3897[i + 0] );
  }
  i3892.passDefinedKeywords = i3896
  var i3899 = i3893[22]
  var i3898 = []
  for(var i = 0; i < i3899.length; i += 1) {
    i3898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3899[i + 0]) );
  }
  i3892.passDefinedKeywordGroups = i3898
  var i3901 = i3893[23]
  var i3900 = []
  for(var i = 0; i < i3901.length; i += 1) {
    i3900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3901[i + 0]) );
  }
  i3892.variants = i3900
  var i3903 = i3893[24]
  var i3902 = []
  for(var i = 0; i < i3903.length; i += 1) {
    i3902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3903[i + 0]) );
  }
  i3892.excludedVariants = i3902
  i3892.hasDepthReader = !!i3893[25]
  return i3892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3905 = data
  i3904.val = i3905[0]
  i3904.name = i3905[1]
  return i3904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3907 = data
  i3906.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3907[0], i3906.src)
  i3906.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3907[1], i3906.dst)
  i3906.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3907[2], i3906.op)
  return i3906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3909 = data
  i3908.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3909[0], i3908.pass)
  i3908.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3909[1], i3908.fail)
  i3908.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3909[2], i3908.zFail)
  i3908.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3909[3], i3908.comp)
  return i3908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3913 = data
  i3912.name = i3913[0]
  i3912.value = i3913[1]
  return i3912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3917 = data
  var i3919 = i3917[0]
  var i3918 = []
  for(var i = 0; i < i3919.length; i += 1) {
    i3918.push( i3919[i + 0] );
  }
  i3916.keywords = i3918
  i3916.hasDiscard = !!i3917[1]
  return i3916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3923 = data
  i3922.passId = i3923[0]
  i3922.subShaderIndex = i3923[1]
  var i3925 = i3923[2]
  var i3924 = []
  for(var i = 0; i < i3925.length; i += 1) {
    i3924.push( i3925[i + 0] );
  }
  i3922.keywords = i3924
  i3922.vertexProgram = i3923[3]
  i3922.fragmentProgram = i3923[4]
  i3922.exportedForWebGl2 = !!i3923[5]
  i3922.readDepth = !!i3923[6]
  return i3922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3929 = data
  request.r(i3929[0], i3929[1], 0, i3928, 'shader')
  i3928.pass = i3929[2]
  return i3928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3933 = data
  i3932.name = i3933[0]
  i3932.type = i3933[1]
  i3932.value = new pc.Vec4( i3933[2], i3933[3], i3933[4], i3933[5] )
  i3932.textureValue = i3933[6]
  i3932.shaderPropertyFlag = i3933[7]
  return i3932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3935 = data
  i3934.name = i3935[0]
  request.r(i3935[1], i3935[2], 0, i3934, 'texture')
  i3934.aabb = i3935[3]
  i3934.vertices = i3935[4]
  i3934.triangles = i3935[5]
  i3934.textureRect = UnityEngine.Rect.MinMaxRect(i3935[6], i3935[7], i3935[8], i3935[9])
  i3934.packedRect = UnityEngine.Rect.MinMaxRect(i3935[10], i3935[11], i3935[12], i3935[13])
  i3934.border = new pc.Vec4( i3935[14], i3935[15], i3935[16], i3935[17] )
  i3934.transparency = i3935[18]
  i3934.bounds = i3935[19]
  i3934.pixelsPerUnit = i3935[20]
  i3934.textureWidth = i3935[21]
  i3934.textureHeight = i3935[22]
  i3934.nativeSize = new pc.Vec2( i3935[23], i3935[24] )
  i3934.pivot = new pc.Vec2( i3935[25], i3935[26] )
  i3934.textureRectOffset = new pc.Vec2( i3935[27], i3935[28] )
  return i3934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3937 = data
  i3936.name = i3937[0]
  return i3936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3939 = data
  i3938.name = i3939[0]
  i3938.wrapMode = i3939[1]
  i3938.isLooping = !!i3939[2]
  i3938.length = i3939[3]
  var i3941 = i3939[4]
  var i3940 = []
  for(var i = 0; i < i3941.length; i += 1) {
    i3940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3941[i + 0]) );
  }
  i3938.curves = i3940
  var i3943 = i3939[5]
  var i3942 = []
  for(var i = 0; i < i3943.length; i += 1) {
    i3942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3943[i + 0]) );
  }
  i3938.events = i3942
  i3938.halfPrecision = !!i3939[6]
  i3938._frameRate = i3939[7]
  i3938.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3939[8], i3938.localBounds)
  i3938.hasMuscleCurves = !!i3939[9]
  var i3945 = i3939[10]
  var i3944 = []
  for(var i = 0; i < i3945.length; i += 1) {
    i3944.push( i3945[i + 0] );
  }
  i3938.clipMuscleConstant = i3944
  i3938.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3939[11], i3938.clipBindingConstant)
  return i3938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3949 = data
  i3948.path = i3949[0]
  i3948.hash = i3949[1]
  i3948.componentType = i3949[2]
  i3948.property = i3949[3]
  i3948.keys = i3949[4]
  var i3951 = i3949[5]
  var i3950 = []
  for(var i = 0; i < i3951.length; i += 1) {
    i3950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3951[i + 0]) );
  }
  i3948.objectReferenceKeys = i3950
  return i3948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3955 = data
  i3954.time = i3955[0]
  request.r(i3955[1], i3955[2], 0, i3954, 'value')
  return i3954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3959 = data
  i3958.functionName = i3959[0]
  i3958.floatParameter = i3959[1]
  i3958.intParameter = i3959[2]
  i3958.stringParameter = i3959[3]
  request.r(i3959[4], i3959[5], 0, i3958, 'objectReferenceParameter')
  i3958.time = i3959[6]
  return i3958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3961 = data
  i3960.center = new pc.Vec3( i3961[0], i3961[1], i3961[2] )
  i3960.extends = new pc.Vec3( i3961[3], i3961[4], i3961[5] )
  return i3960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3965 = data
  var i3967 = i3965[0]
  var i3966 = []
  for(var i = 0; i < i3967.length; i += 1) {
    i3966.push( i3967[i + 0] );
  }
  i3964.genericBindings = i3966
  var i3969 = i3965[1]
  var i3968 = []
  for(var i = 0; i < i3969.length; i += 1) {
    i3968.push( i3969[i + 0] );
  }
  i3964.pptrCurveMapping = i3968
  return i3964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3971 = data
  i3970.name = i3971[0]
  i3970.ascent = i3971[1]
  i3970.originalLineHeight = i3971[2]
  i3970.fontSize = i3971[3]
  var i3973 = i3971[4]
  var i3972 = []
  for(var i = 0; i < i3973.length; i += 1) {
    i3972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3973[i + 0]) );
  }
  i3970.characterInfo = i3972
  request.r(i3971[5], i3971[6], 0, i3970, 'texture')
  i3970.originalFontSize = i3971[7]
  return i3970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3977 = data
  i3976.index = i3977[0]
  i3976.advance = i3977[1]
  i3976.bearing = i3977[2]
  i3976.glyphWidth = i3977[3]
  i3976.glyphHeight = i3977[4]
  i3976.minX = i3977[5]
  i3976.maxX = i3977[6]
  i3976.minY = i3977[7]
  i3976.maxY = i3977[8]
  i3976.uvBottomLeftX = i3977[9]
  i3976.uvBottomLeftY = i3977[10]
  i3976.uvBottomRightX = i3977[11]
  i3976.uvBottomRightY = i3977[12]
  i3976.uvTopLeftX = i3977[13]
  i3976.uvTopLeftY = i3977[14]
  i3976.uvTopRightX = i3977[15]
  i3976.uvTopRightY = i3977[16]
  return i3976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3979 = data
  i3978.name = i3979[0]
  var i3981 = i3979[1]
  var i3980 = []
  for(var i = 0; i < i3981.length; i += 1) {
    i3980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3981[i + 0]) );
  }
  i3978.layers = i3980
  var i3983 = i3979[2]
  var i3982 = []
  for(var i = 0; i < i3983.length; i += 1) {
    i3982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3983[i + 0]) );
  }
  i3978.parameters = i3982
  i3978.animationClips = i3979[3]
  i3978.avatarUnsupported = i3979[4]
  return i3978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3987 = data
  i3986.name = i3987[0]
  i3986.defaultWeight = i3987[1]
  i3986.blendingMode = i3987[2]
  i3986.avatarMask = i3987[3]
  i3986.syncedLayerIndex = i3987[4]
  i3986.syncedLayerAffectsTiming = !!i3987[5]
  i3986.syncedLayers = i3987[6]
  i3986.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3987[7], i3986.stateMachine)
  return i3986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3989 = data
  i3988.id = i3989[0]
  i3988.name = i3989[1]
  i3988.path = i3989[2]
  var i3991 = i3989[3]
  var i3990 = []
  for(var i = 0; i < i3991.length; i += 1) {
    i3990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3991[i + 0]) );
  }
  i3988.states = i3990
  var i3993 = i3989[4]
  var i3992 = []
  for(var i = 0; i < i3993.length; i += 1) {
    i3992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3993[i + 0]) );
  }
  i3988.machines = i3992
  var i3995 = i3989[5]
  var i3994 = []
  for(var i = 0; i < i3995.length; i += 1) {
    i3994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3995[i + 0]) );
  }
  i3988.entryStateTransitions = i3994
  var i3997 = i3989[6]
  var i3996 = []
  for(var i = 0; i < i3997.length; i += 1) {
    i3996.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3997[i + 0]) );
  }
  i3988.exitStateTransitions = i3996
  var i3999 = i3989[7]
  var i3998 = []
  for(var i = 0; i < i3999.length; i += 1) {
    i3998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3999[i + 0]) );
  }
  i3988.anyStateTransitions = i3998
  i3988.defaultStateId = i3989[8]
  return i3988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4003 = data
  i4002.id = i4003[0]
  i4002.name = i4003[1]
  i4002.cycleOffset = i4003[2]
  i4002.cycleOffsetParameter = i4003[3]
  i4002.cycleOffsetParameterActive = !!i4003[4]
  i4002.mirror = !!i4003[5]
  i4002.mirrorParameter = i4003[6]
  i4002.mirrorParameterActive = !!i4003[7]
  i4002.motionId = i4003[8]
  i4002.nameHash = i4003[9]
  i4002.fullPathHash = i4003[10]
  i4002.speed = i4003[11]
  i4002.speedParameter = i4003[12]
  i4002.speedParameterActive = !!i4003[13]
  i4002.tag = i4003[14]
  i4002.tagHash = i4003[15]
  i4002.writeDefaultValues = !!i4003[16]
  var i4005 = i4003[17]
  var i4004 = []
  for(var i = 0; i < i4005.length; i += 2) {
  request.r(i4005[i + 0], i4005[i + 1], 2, i4004, '')
  }
  i4002.behaviours = i4004
  var i4007 = i4003[18]
  var i4006 = []
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4007[i + 0]) );
  }
  i4002.transitions = i4006
  return i4002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4013 = data
  i4012.fullPath = i4013[0]
  i4012.canTransitionToSelf = !!i4013[1]
  i4012.duration = i4013[2]
  i4012.exitTime = i4013[3]
  i4012.hasExitTime = !!i4013[4]
  i4012.hasFixedDuration = !!i4013[5]
  i4012.interruptionSource = i4013[6]
  i4012.offset = i4013[7]
  i4012.orderedInterruption = !!i4013[8]
  i4012.destinationStateId = i4013[9]
  i4012.isExit = !!i4013[10]
  i4012.mute = !!i4013[11]
  i4012.solo = !!i4013[12]
  var i4015 = i4013[13]
  var i4014 = []
  for(var i = 0; i < i4015.length; i += 1) {
    i4014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4015[i + 0]) );
  }
  i4012.conditions = i4014
  return i4012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4021 = data
  i4020.destinationStateId = i4021[0]
  i4020.isExit = !!i4021[1]
  i4020.mute = !!i4021[2]
  i4020.solo = !!i4021[3]
  var i4023 = i4021[4]
  var i4022 = []
  for(var i = 0; i < i4023.length; i += 1) {
    i4022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4023[i + 0]) );
  }
  i4020.conditions = i4022
  return i4020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4027 = data
  i4026.mode = i4027[0]
  i4026.parameter = i4027[1]
  i4026.threshold = i4027[2]
  return i4026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4031 = data
  i4030.defaultBool = !!i4031[0]
  i4030.defaultFloat = i4031[1]
  i4030.defaultInt = i4031[2]
  i4030.name = i4031[3]
  i4030.nameHash = i4031[4]
  i4030.type = i4031[5]
  return i4030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4033 = data
  i4032.name = i4033[0]
  i4032.bytes64 = i4033[1]
  i4032.data = i4033[2]
  return i4032
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4034 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4035 = data
  i4034.hashCode = i4035[0]
  request.r(i4035[1], i4035[2], 0, i4034, 'material')
  i4034.materialHashCode = i4035[3]
  request.r(i4035[4], i4035[5], 0, i4034, 'atlas')
  i4034.normalStyle = i4035[6]
  i4034.normalSpacingOffset = i4035[7]
  i4034.boldStyle = i4035[8]
  i4034.boldSpacing = i4035[9]
  i4034.italicStyle = i4035[10]
  i4034.tabSize = i4035[11]
  i4034.m_Version = i4035[12]
  i4034.m_SourceFontFileGUID = i4035[13]
  request.r(i4035[14], i4035[15], 0, i4034, 'm_SourceFontFile_EditorRef')
  request.r(i4035[16], i4035[17], 0, i4034, 'm_SourceFontFile')
  i4034.m_AtlasPopulationMode = i4035[18]
  i4034.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4035[19], i4034.m_FaceInfo)
  var i4037 = i4035[20]
  var i4036 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4037.length; i += 1) {
    i4036.add(request.d('UnityEngine.TextCore.Glyph', i4037[i + 0]));
  }
  i4034.m_GlyphTable = i4036
  var i4039 = i4035[21]
  var i4038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4039.length; i += 1) {
    i4038.add(request.d('TMPro.TMP_Character', i4039[i + 0]));
  }
  i4034.m_CharacterTable = i4038
  var i4041 = i4035[22]
  var i4040 = []
  for(var i = 0; i < i4041.length; i += 2) {
  request.r(i4041[i + 0], i4041[i + 1], 2, i4040, '')
  }
  i4034.m_AtlasTextures = i4040
  i4034.m_AtlasTextureIndex = i4035[23]
  i4034.m_IsMultiAtlasTexturesEnabled = !!i4035[24]
  i4034.m_ClearDynamicDataOnBuild = !!i4035[25]
  var i4043 = i4035[26]
  var i4042 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4043.length; i += 1) {
    i4042.add(request.d('UnityEngine.TextCore.GlyphRect', i4043[i + 0]));
  }
  i4034.m_UsedGlyphRects = i4042
  var i4045 = i4035[27]
  var i4044 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4045.length; i += 1) {
    i4044.add(request.d('UnityEngine.TextCore.GlyphRect', i4045[i + 0]));
  }
  i4034.m_FreeGlyphRects = i4044
  i4034.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4035[28], i4034.m_fontInfo)
  i4034.m_AtlasWidth = i4035[29]
  i4034.m_AtlasHeight = i4035[30]
  i4034.m_AtlasPadding = i4035[31]
  i4034.m_AtlasRenderMode = i4035[32]
  var i4047 = i4035[33]
  var i4046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4047.length; i += 1) {
    i4046.add(request.d('TMPro.TMP_Glyph', i4047[i + 0]));
  }
  i4034.m_glyphInfoList = i4046
  i4034.m_KerningTable = request.d('TMPro.KerningTable', i4035[34], i4034.m_KerningTable)
  i4034.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4035[35], i4034.m_FontFeatureTable)
  var i4049 = i4035[36]
  var i4048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4049.length; i += 2) {
  request.r(i4049[i + 0], i4049[i + 1], 1, i4048, '')
  }
  i4034.fallbackFontAssets = i4048
  var i4051 = i4035[37]
  var i4050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4051.length; i += 2) {
  request.r(i4051[i + 0], i4051[i + 1], 1, i4050, '')
  }
  i4034.m_FallbackFontAssetTable = i4050
  i4034.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4035[38], i4034.m_CreationSettings)
  var i4053 = i4035[39]
  var i4052 = []
  for(var i = 0; i < i4053.length; i += 1) {
    i4052.push( request.d('TMPro.TMP_FontWeightPair', i4053[i + 0]) );
  }
  i4034.m_FontWeightTable = i4052
  var i4055 = i4035[40]
  var i4054 = []
  for(var i = 0; i < i4055.length; i += 1) {
    i4054.push( request.d('TMPro.TMP_FontWeightPair', i4055[i + 0]) );
  }
  i4034.fontWeights = i4054
  return i4034
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4056 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4057 = data
  i4056.m_FaceIndex = i4057[0]
  i4056.m_FamilyName = i4057[1]
  i4056.m_StyleName = i4057[2]
  i4056.m_PointSize = i4057[3]
  i4056.m_Scale = i4057[4]
  i4056.m_UnitsPerEM = i4057[5]
  i4056.m_LineHeight = i4057[6]
  i4056.m_AscentLine = i4057[7]
  i4056.m_CapLine = i4057[8]
  i4056.m_MeanLine = i4057[9]
  i4056.m_Baseline = i4057[10]
  i4056.m_DescentLine = i4057[11]
  i4056.m_SuperscriptOffset = i4057[12]
  i4056.m_SuperscriptSize = i4057[13]
  i4056.m_SubscriptOffset = i4057[14]
  i4056.m_SubscriptSize = i4057[15]
  i4056.m_UnderlineOffset = i4057[16]
  i4056.m_UnderlineThickness = i4057[17]
  i4056.m_StrikethroughOffset = i4057[18]
  i4056.m_StrikethroughThickness = i4057[19]
  i4056.m_TabWidth = i4057[20]
  return i4056
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4060 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4061 = data
  i4060.m_Index = i4061[0]
  i4060.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4061[1], i4060.m_Metrics)
  i4060.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4061[2], i4060.m_GlyphRect)
  i4060.m_Scale = i4061[3]
  i4060.m_AtlasIndex = i4061[4]
  i4060.m_ClassDefinitionType = i4061[5]
  return i4060
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4062 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4063 = data
  i4062.m_Width = i4063[0]
  i4062.m_Height = i4063[1]
  i4062.m_HorizontalBearingX = i4063[2]
  i4062.m_HorizontalBearingY = i4063[3]
  i4062.m_HorizontalAdvance = i4063[4]
  return i4062
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4064 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4065 = data
  i4064.m_X = i4065[0]
  i4064.m_Y = i4065[1]
  i4064.m_Width = i4065[2]
  i4064.m_Height = i4065[3]
  return i4064
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4068 = root || request.c( 'TMPro.TMP_Character' )
  var i4069 = data
  i4068.m_ElementType = i4069[0]
  i4068.m_Unicode = i4069[1]
  i4068.m_GlyphIndex = i4069[2]
  i4068.m_Scale = i4069[3]
  return i4068
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4074 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4075 = data
  i4074.Name = i4075[0]
  i4074.PointSize = i4075[1]
  i4074.Scale = i4075[2]
  i4074.CharacterCount = i4075[3]
  i4074.LineHeight = i4075[4]
  i4074.Baseline = i4075[5]
  i4074.Ascender = i4075[6]
  i4074.CapHeight = i4075[7]
  i4074.Descender = i4075[8]
  i4074.CenterLine = i4075[9]
  i4074.SuperscriptOffset = i4075[10]
  i4074.SubscriptOffset = i4075[11]
  i4074.SubSize = i4075[12]
  i4074.Underline = i4075[13]
  i4074.UnderlineThickness = i4075[14]
  i4074.strikethrough = i4075[15]
  i4074.strikethroughThickness = i4075[16]
  i4074.TabWidth = i4075[17]
  i4074.Padding = i4075[18]
  i4074.AtlasWidth = i4075[19]
  i4074.AtlasHeight = i4075[20]
  return i4074
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4078 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4079 = data
  i4078.id = i4079[0]
  i4078.x = i4079[1]
  i4078.y = i4079[2]
  i4078.width = i4079[3]
  i4078.height = i4079[4]
  i4078.xOffset = i4079[5]
  i4078.yOffset = i4079[6]
  i4078.xAdvance = i4079[7]
  i4078.scale = i4079[8]
  return i4078
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4080 = root || request.c( 'TMPro.KerningTable' )
  var i4081 = data
  var i4083 = i4081[0]
  var i4082 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4083.length; i += 1) {
    i4082.add(request.d('TMPro.KerningPair', i4083[i + 0]));
  }
  i4080.kerningPairs = i4082
  return i4080
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4086 = root || request.c( 'TMPro.KerningPair' )
  var i4087 = data
  i4086.xOffset = i4087[0]
  i4086.m_FirstGlyph = i4087[1]
  i4086.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4087[2], i4086.m_FirstGlyphAdjustments)
  i4086.m_SecondGlyph = i4087[3]
  i4086.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4087[4], i4086.m_SecondGlyphAdjustments)
  i4086.m_IgnoreSpacingAdjustments = !!i4087[5]
  return i4086
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4088 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4089 = data
  var i4091 = i4089[0]
  var i4090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4091.length; i += 1) {
    i4090.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i4091[i + 0]));
  }
  i4088.m_GlyphPairAdjustmentRecords = i4090
  return i4088
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4094 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i4095 = data
  i4094.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4095[0], i4094.m_FirstAdjustmentRecord)
  i4094.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4095[1], i4094.m_SecondAdjustmentRecord)
  i4094.m_FeatureLookupFlags = i4095[2]
  return i4094
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4096 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4097 = data
  i4096.m_GlyphIndex = i4097[0]
  i4096.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4097[1], i4096.m_GlyphValueRecord)
  return i4096
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4098 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4099 = data
  i4098.m_XPlacement = i4099[0]
  i4098.m_YPlacement = i4099[1]
  i4098.m_XAdvance = i4099[2]
  i4098.m_YAdvance = i4099[3]
  return i4098
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4102 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4103 = data
  i4102.sourceFontFileName = i4103[0]
  i4102.sourceFontFileGUID = i4103[1]
  i4102.pointSizeSamplingMode = i4103[2]
  i4102.pointSize = i4103[3]
  i4102.padding = i4103[4]
  i4102.packingMode = i4103[5]
  i4102.atlasWidth = i4103[6]
  i4102.atlasHeight = i4103[7]
  i4102.characterSetSelectionMode = i4103[8]
  i4102.characterSequence = i4103[9]
  i4102.referencedFontAssetGUID = i4103[10]
  i4102.referencedTextAssetGUID = i4103[11]
  i4102.fontStyle = i4103[12]
  i4102.fontStyleModifier = i4103[13]
  i4102.renderMode = i4103[14]
  i4102.includeFontFeatures = !!i4103[15]
  return i4102
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4106 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4107 = data
  request.r(i4107[0], i4107[1], 0, i4106, 'regularTypeface')
  request.r(i4107[2], i4107[3], 0, i4106, 'italicTypeface')
  return i4106
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4108 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4109 = data
  i4108.useSafeMode = !!i4109[0]
  i4108.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4109[1], i4108.safeModeOptions)
  i4108.timeScale = i4109[2]
  i4108.unscaledTimeScale = i4109[3]
  i4108.useSmoothDeltaTime = !!i4109[4]
  i4108.maxSmoothUnscaledTime = i4109[5]
  i4108.rewindCallbackMode = i4109[6]
  i4108.showUnityEditorReport = !!i4109[7]
  i4108.logBehaviour = i4109[8]
  i4108.drawGizmos = !!i4109[9]
  i4108.defaultRecyclable = !!i4109[10]
  i4108.defaultAutoPlay = i4109[11]
  i4108.defaultUpdateType = i4109[12]
  i4108.defaultTimeScaleIndependent = !!i4109[13]
  i4108.defaultEaseType = i4109[14]
  i4108.defaultEaseOvershootOrAmplitude = i4109[15]
  i4108.defaultEasePeriod = i4109[16]
  i4108.defaultAutoKill = !!i4109[17]
  i4108.defaultLoopType = i4109[18]
  i4108.debugMode = !!i4109[19]
  i4108.debugStoreTargetId = !!i4109[20]
  i4108.showPreviewPanel = !!i4109[21]
  i4108.storeSettingsLocation = i4109[22]
  i4108.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4109[23], i4108.modules)
  i4108.createASMDEF = !!i4109[24]
  i4108.showPlayingTweens = !!i4109[25]
  i4108.showPausedTweens = !!i4109[26]
  return i4108
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4110 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4111 = data
  i4110.logBehaviour = i4111[0]
  i4110.nestedTweenFailureBehaviour = i4111[1]
  return i4110
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4112 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4113 = data
  i4112.showPanel = !!i4113[0]
  i4112.audioEnabled = !!i4113[1]
  i4112.physicsEnabled = !!i4113[2]
  i4112.physics2DEnabled = !!i4113[3]
  i4112.spriteEnabled = !!i4113[4]
  i4112.uiEnabled = !!i4113[5]
  i4112.textMeshProEnabled = !!i4113[6]
  i4112.tk2DEnabled = !!i4113[7]
  i4112.deAudioEnabled = !!i4113[8]
  i4112.deUnityExtendedEnabled = !!i4113[9]
  i4112.epoOutlineEnabled = !!i4113[10]
  return i4112
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4114 = root || request.c( 'TMPro.TMP_Settings' )
  var i4115 = data
  i4114.m_enableWordWrapping = !!i4115[0]
  i4114.m_enableKerning = !!i4115[1]
  i4114.m_enableExtraPadding = !!i4115[2]
  i4114.m_enableTintAllSprites = !!i4115[3]
  i4114.m_enableParseEscapeCharacters = !!i4115[4]
  i4114.m_EnableRaycastTarget = !!i4115[5]
  i4114.m_GetFontFeaturesAtRuntime = !!i4115[6]
  i4114.m_missingGlyphCharacter = i4115[7]
  i4114.m_warningsDisabled = !!i4115[8]
  request.r(i4115[9], i4115[10], 0, i4114, 'm_defaultFontAsset')
  i4114.m_defaultFontAssetPath = i4115[11]
  i4114.m_defaultFontSize = i4115[12]
  i4114.m_defaultAutoSizeMinRatio = i4115[13]
  i4114.m_defaultAutoSizeMaxRatio = i4115[14]
  i4114.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4115[15], i4115[16] )
  i4114.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4115[17], i4115[18] )
  i4114.m_autoSizeTextContainer = !!i4115[19]
  i4114.m_IsTextObjectScaleStatic = !!i4115[20]
  var i4117 = i4115[21]
  var i4116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4117.length; i += 2) {
  request.r(i4117[i + 0], i4117[i + 1], 1, i4116, '')
  }
  i4114.m_fallbackFontAssets = i4116
  i4114.m_matchMaterialPreset = !!i4115[22]
  request.r(i4115[23], i4115[24], 0, i4114, 'm_defaultSpriteAsset')
  i4114.m_defaultSpriteAssetPath = i4115[25]
  i4114.m_enableEmojiSupport = !!i4115[26]
  i4114.m_MissingCharacterSpriteUnicode = i4115[27]
  i4114.m_defaultColorGradientPresetsPath = i4115[28]
  request.r(i4115[29], i4115[30], 0, i4114, 'm_defaultStyleSheet')
  i4114.m_StyleSheetsResourcePath = i4115[31]
  request.r(i4115[32], i4115[33], 0, i4114, 'm_leadingCharacters')
  request.r(i4115[34], i4115[35], 0, i4114, 'm_followingCharacters')
  i4114.m_UseModernHangulLineBreakingRules = !!i4115[36]
  return i4114
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4118 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4119 = data
  i4118.hashCode = i4119[0]
  request.r(i4119[1], i4119[2], 0, i4118, 'material')
  i4118.materialHashCode = i4119[3]
  request.r(i4119[4], i4119[5], 0, i4118, 'spriteSheet')
  var i4121 = i4119[6]
  var i4120 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4121.length; i += 1) {
    i4120.add(request.d('TMPro.TMP_Sprite', i4121[i + 0]));
  }
  i4118.spriteInfoList = i4120
  var i4123 = i4119[7]
  var i4122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4123.length; i += 2) {
  request.r(i4123[i + 0], i4123[i + 1], 1, i4122, '')
  }
  i4118.fallbackSpriteAssets = i4122
  i4118.m_Version = i4119[8]
  i4118.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4119[9], i4118.m_FaceInfo)
  var i4125 = i4119[10]
  var i4124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4125.length; i += 1) {
    i4124.add(request.d('TMPro.TMP_SpriteCharacter', i4125[i + 0]));
  }
  i4118.m_SpriteCharacterTable = i4124
  var i4127 = i4119[11]
  var i4126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4127.length; i += 1) {
    i4126.add(request.d('TMPro.TMP_SpriteGlyph', i4127[i + 0]));
  }
  i4118.m_SpriteGlyphTable = i4126
  return i4118
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4130 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4131 = data
  i4130.name = i4131[0]
  i4130.hashCode = i4131[1]
  i4130.unicode = i4131[2]
  i4130.pivot = new pc.Vec2( i4131[3], i4131[4] )
  request.r(i4131[5], i4131[6], 0, i4130, 'sprite')
  i4130.id = i4131[7]
  i4130.x = i4131[8]
  i4130.y = i4131[9]
  i4130.width = i4131[10]
  i4130.height = i4131[11]
  i4130.xOffset = i4131[12]
  i4130.yOffset = i4131[13]
  i4130.xAdvance = i4131[14]
  i4130.scale = i4131[15]
  return i4130
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4136 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4137 = data
  i4136.m_Name = i4137[0]
  i4136.m_HashCode = i4137[1]
  i4136.m_ElementType = i4137[2]
  i4136.m_Unicode = i4137[3]
  i4136.m_GlyphIndex = i4137[4]
  i4136.m_Scale = i4137[5]
  return i4136
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4140 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4141 = data
  request.r(i4141[0], i4141[1], 0, i4140, 'sprite')
  i4140.m_Index = i4141[2]
  i4140.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4141[3], i4140.m_Metrics)
  i4140.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4141[4], i4140.m_GlyphRect)
  i4140.m_Scale = i4141[5]
  i4140.m_AtlasIndex = i4141[6]
  i4140.m_ClassDefinitionType = i4141[7]
  return i4140
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4142 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4143 = data
  var i4145 = i4143[0]
  var i4144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4145.length; i += 1) {
    i4144.add(request.d('TMPro.TMP_Style', i4145[i + 0]));
  }
  i4142.m_StyleList = i4144
  return i4142
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4148 = root || request.c( 'TMPro.TMP_Style' )
  var i4149 = data
  i4148.m_Name = i4149[0]
  i4148.m_HashCode = i4149[1]
  i4148.m_OpeningDefinition = i4149[2]
  i4148.m_ClosingDefinition = i4149[3]
  i4148.m_OpeningTagArray = i4149[4]
  i4148.m_ClosingTagArray = i4149[5]
  i4148.m_OpeningTagUnicodeArray = i4149[6]
  i4148.m_ClosingTagUnicodeArray = i4149[7]
  return i4148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4151 = data
  var i4153 = i4151[0]
  var i4152 = []
  for(var i = 0; i < i4153.length; i += 1) {
    i4152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4153[i + 0]) );
  }
  i4150.files = i4152
  i4150.componentToPrefabIds = i4151[1]
  return i4150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4157 = data
  i4156.path = i4157[0]
  request.r(i4157[1], i4157[2], 0, i4156, 'unityObject')
  return i4156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4159 = data
  var i4161 = i4159[0]
  var i4160 = []
  for(var i = 0; i < i4161.length; i += 1) {
    i4160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4161[i + 0]) );
  }
  i4158.scriptsExecutionOrder = i4160
  var i4163 = i4159[1]
  var i4162 = []
  for(var i = 0; i < i4163.length; i += 1) {
    i4162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4163[i + 0]) );
  }
  i4158.sortingLayers = i4162
  var i4165 = i4159[2]
  var i4164 = []
  for(var i = 0; i < i4165.length; i += 1) {
    i4164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4165[i + 0]) );
  }
  i4158.cullingLayers = i4164
  i4158.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4159[3], i4158.timeSettings)
  i4158.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4159[4], i4158.physicsSettings)
  i4158.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4159[5], i4158.physics2DSettings)
  i4158.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4159[6], i4158.qualitySettings)
  i4158.enableRealtimeShadows = !!i4159[7]
  i4158.enableAutoInstancing = !!i4159[8]
  i4158.enableDynamicBatching = !!i4159[9]
  i4158.lightmapEncodingQuality = i4159[10]
  i4158.desiredColorSpace = i4159[11]
  var i4167 = i4159[12]
  var i4166 = []
  for(var i = 0; i < i4167.length; i += 1) {
    i4166.push( i4167[i + 0] );
  }
  i4158.allTags = i4166
  return i4158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4171 = data
  i4170.name = i4171[0]
  i4170.value = i4171[1]
  return i4170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4175 = data
  i4174.id = i4175[0]
  i4174.name = i4175[1]
  i4174.value = i4175[2]
  return i4174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4179 = data
  i4178.id = i4179[0]
  i4178.name = i4179[1]
  return i4178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4181 = data
  i4180.fixedDeltaTime = i4181[0]
  i4180.maximumDeltaTime = i4181[1]
  i4180.timeScale = i4181[2]
  i4180.maximumParticleTimestep = i4181[3]
  return i4180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4183 = data
  i4182.gravity = new pc.Vec3( i4183[0], i4183[1], i4183[2] )
  i4182.defaultSolverIterations = i4183[3]
  i4182.bounceThreshold = i4183[4]
  i4182.autoSyncTransforms = !!i4183[5]
  i4182.autoSimulation = !!i4183[6]
  var i4185 = i4183[7]
  var i4184 = []
  for(var i = 0; i < i4185.length; i += 1) {
    i4184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4185[i + 0]) );
  }
  i4182.collisionMatrix = i4184
  return i4182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4189 = data
  i4188.enabled = !!i4189[0]
  i4188.layerId = i4189[1]
  i4188.otherLayerId = i4189[2]
  return i4188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4191 = data
  request.r(i4191[0], i4191[1], 0, i4190, 'material')
  i4190.gravity = new pc.Vec2( i4191[2], i4191[3] )
  i4190.positionIterations = i4191[4]
  i4190.velocityIterations = i4191[5]
  i4190.velocityThreshold = i4191[6]
  i4190.maxLinearCorrection = i4191[7]
  i4190.maxAngularCorrection = i4191[8]
  i4190.maxTranslationSpeed = i4191[9]
  i4190.maxRotationSpeed = i4191[10]
  i4190.baumgarteScale = i4191[11]
  i4190.baumgarteTOIScale = i4191[12]
  i4190.timeToSleep = i4191[13]
  i4190.linearSleepTolerance = i4191[14]
  i4190.angularSleepTolerance = i4191[15]
  i4190.defaultContactOffset = i4191[16]
  i4190.autoSimulation = !!i4191[17]
  i4190.queriesHitTriggers = !!i4191[18]
  i4190.queriesStartInColliders = !!i4191[19]
  i4190.callbacksOnDisable = !!i4191[20]
  i4190.reuseCollisionCallbacks = !!i4191[21]
  i4190.autoSyncTransforms = !!i4191[22]
  var i4193 = i4191[23]
  var i4192 = []
  for(var i = 0; i < i4193.length; i += 1) {
    i4192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4193[i + 0]) );
  }
  i4190.collisionMatrix = i4192
  return i4190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4197 = data
  i4196.enabled = !!i4197[0]
  i4196.layerId = i4197[1]
  i4196.otherLayerId = i4197[2]
  return i4196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4199 = data
  var i4201 = i4199[0]
  var i4200 = []
  for(var i = 0; i < i4201.length; i += 1) {
    i4200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4201[i + 0]) );
  }
  i4198.qualityLevels = i4200
  var i4203 = i4199[1]
  var i4202 = []
  for(var i = 0; i < i4203.length; i += 1) {
    i4202.push( i4203[i + 0] );
  }
  i4198.names = i4202
  i4198.shadows = i4199[2]
  i4198.anisotropicFiltering = i4199[3]
  i4198.antiAliasing = i4199[4]
  i4198.lodBias = i4199[5]
  i4198.shadowCascades = i4199[6]
  i4198.shadowDistance = i4199[7]
  i4198.shadowmaskMode = i4199[8]
  i4198.shadowProjection = i4199[9]
  i4198.shadowResolution = i4199[10]
  i4198.softParticles = !!i4199[11]
  i4198.softVegetation = !!i4199[12]
  i4198.activeColorSpace = i4199[13]
  i4198.desiredColorSpace = i4199[14]
  i4198.masterTextureLimit = i4199[15]
  i4198.maxQueuedFrames = i4199[16]
  i4198.particleRaycastBudget = i4199[17]
  i4198.pixelLightCount = i4199[18]
  i4198.realtimeReflectionProbes = !!i4199[19]
  i4198.shadowCascade2Split = i4199[20]
  i4198.shadowCascade4Split = new pc.Vec3( i4199[21], i4199[22], i4199[23] )
  i4198.streamingMipmapsActive = !!i4199[24]
  i4198.vSyncCount = i4199[25]
  i4198.asyncUploadBufferSize = i4199[26]
  i4198.asyncUploadTimeSlice = i4199[27]
  i4198.billboardsFaceCameraPosition = !!i4199[28]
  i4198.shadowNearPlaneOffset = i4199[29]
  i4198.streamingMipmapsMemoryBudget = i4199[30]
  i4198.maximumLODLevel = i4199[31]
  i4198.streamingMipmapsAddAllCameras = !!i4199[32]
  i4198.streamingMipmapsMaxLevelReduction = i4199[33]
  i4198.streamingMipmapsRenderersPerFrame = i4199[34]
  i4198.resolutionScalingFixedDPIFactor = i4199[35]
  i4198.streamingMipmapsMaxFileIORequests = i4199[36]
  i4198.currentQualityLevel = i4199[37]
  return i4198
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4206 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4207 = data
  i4206.xPlacement = i4207[0]
  i4206.yPlacement = i4207[1]
  i4206.xAdvance = i4207[2]
  i4206.yAdvance = i4207[3]
  return i4206
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[12],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[12],"77":[78],"79":[80],"81":[80],"19":[2],"82":[2],"83":[84],"85":[86],"87":[84],"88":[2],"89":[2],"21":[19],"6":[3,2],"90":[2],"20":[19],"30":[2],"91":[2],"92":[2],"93":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[3,2],"100":[2],"101":[2],"102":[2],"103":[2],"104":[3,2],"105":[2],"106":[35],"107":[35],"36":[35],"108":[35],"109":[12],"110":[12],"111":[112],"113":[12],"114":[2],"115":[78,2],"17":[2,3],"116":[2],"117":[3,2],"118":[78],"119":[3,2],"120":[2],"121":[84]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","TMPro.TMP_FontAsset","UnityEngine.Material","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 09:16:23";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Juice";

Deserializers.lunaAppID = "31439";

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

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.Playble";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "6d1c0882-23bc-4b58-af75-52773ae817cf";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

