var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2676 = root || request.c( 'UnityEngine.JointSpring' )
  var i2677 = data
  i2676.spring = i2677[0]
  i2676.damper = i2677[1]
  i2676.targetPosition = i2677[2]
  return i2676
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2678 = root || request.c( 'UnityEngine.JointMotor' )
  var i2679 = data
  i2678.m_TargetVelocity = i2679[0]
  i2678.m_Force = i2679[1]
  i2678.m_FreeSpin = i2679[2]
  return i2678
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2680 = root || request.c( 'UnityEngine.JointLimits' )
  var i2681 = data
  i2680.m_Min = i2681[0]
  i2680.m_Max = i2681[1]
  i2680.m_Bounciness = i2681[2]
  i2680.m_BounceMinVelocity = i2681[3]
  i2680.m_ContactDistance = i2681[4]
  i2680.minBounce = i2681[5]
  i2680.maxBounce = i2681[6]
  return i2680
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2682 = root || request.c( 'UnityEngine.JointDrive' )
  var i2683 = data
  i2682.m_PositionSpring = i2683[0]
  i2682.m_PositionDamper = i2683[1]
  i2682.m_MaximumForce = i2683[2]
  i2682.m_UseAcceleration = i2683[3]
  return i2682
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2684 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2685 = data
  i2684.m_Spring = i2685[0]
  i2684.m_Damper = i2685[1]
  return i2684
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2686 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2687 = data
  i2686.m_Limit = i2687[0]
  i2686.m_Bounciness = i2687[1]
  i2686.m_ContactDistance = i2687[2]
  return i2686
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2688 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2689 = data
  i2688.m_ExtremumSlip = i2689[0]
  i2688.m_ExtremumValue = i2689[1]
  i2688.m_AsymptoteSlip = i2689[2]
  i2688.m_AsymptoteValue = i2689[3]
  i2688.m_Stiffness = i2689[4]
  return i2688
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2690 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2691 = data
  i2690.m_LowerAngle = i2691[0]
  i2690.m_UpperAngle = i2691[1]
  return i2690
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2692 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2693 = data
  i2692.m_MotorSpeed = i2693[0]
  i2692.m_MaximumMotorTorque = i2693[1]
  return i2692
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2694 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2695 = data
  i2694.m_DampingRatio = i2695[0]
  i2694.m_Frequency = i2695[1]
  i2694.m_Angle = i2695[2]
  return i2694
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2696 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2697 = data
  i2696.m_LowerTranslation = i2697[0]
  i2696.m_UpperTranslation = i2697[1]
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2699 = data
  i2698.name = i2699[0]
  i2698.width = i2699[1]
  i2698.height = i2699[2]
  i2698.mipmapCount = i2699[3]
  i2698.anisoLevel = i2699[4]
  i2698.filterMode = i2699[5]
  i2698.hdr = !!i2699[6]
  i2698.format = i2699[7]
  i2698.wrapMode = i2699[8]
  i2698.alphaIsTransparency = !!i2699[9]
  i2698.alphaSource = i2699[10]
  i2698.graphicsFormat = i2699[11]
  i2698.sRGBTexture = !!i2699[12]
  i2698.desiredColorSpace = i2699[13]
  i2698.wrapU = i2699[14]
  i2698.wrapV = i2699[15]
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2700 = root || new pc.UnityMaterial()
  var i2701 = data
  i2700.name = i2701[0]
  request.r(i2701[1], i2701[2], 0, i2700, 'shader')
  i2700.renderQueue = i2701[3]
  i2700.enableInstancing = !!i2701[4]
  var i2703 = i2701[5]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2703[i + 0]) );
  }
  i2700.floatParameters = i2702
  var i2705 = i2701[6]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2705[i + 0]) );
  }
  i2700.colorParameters = i2704
  var i2707 = i2701[7]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2707[i + 0]) );
  }
  i2700.vectorParameters = i2706
  var i2709 = i2701[8]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2709[i + 0]) );
  }
  i2700.textureParameters = i2708
  var i2711 = i2701[9]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2711[i + 0]) );
  }
  i2700.materialFlags = i2710
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2715 = data
  i2714.name = i2715[0]
  i2714.value = i2715[1]
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2719 = data
  i2718.name = i2719[0]
  i2718.value = new pc.Color(i2719[1], i2719[2], i2719[3], i2719[4])
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2723 = data
  i2722.name = i2723[0]
  i2722.value = new pc.Vec4( i2723[1], i2723[2], i2723[3], i2723[4] )
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2727 = data
  i2726.name = i2727[0]
  request.r(i2727[1], i2727[2], 0, i2726, 'value')
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2731 = data
  i2730.name = i2731[0]
  i2730.enabled = !!i2731[1]
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2733 = data
  i2732.pivot = new pc.Vec2( i2733[0], i2733[1] )
  i2732.anchorMin = new pc.Vec2( i2733[2], i2733[3] )
  i2732.anchorMax = new pc.Vec2( i2733[4], i2733[5] )
  i2732.sizeDelta = new pc.Vec2( i2733[6], i2733[7] )
  i2732.anchoredPosition3D = new pc.Vec3( i2733[8], i2733[9], i2733[10] )
  i2732.rotation = new pc.Quat(i2733[11], i2733[12], i2733[13], i2733[14])
  i2732.scale = new pc.Vec3( i2733[15], i2733[16], i2733[17] )
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2735 = data
  i2734.cullTransparentMesh = !!i2735[0]
  return i2734
}

Deserializers["People"] = function (request, data, root) {
  var i2736 = root || request.c( 'People' )
  var i2737 = data
  request.r(i2737[0], i2737[1], 0, i2736, '_readyImage')
  request.r(i2737[2], i2737[3], 0, i2736, '_additiveImage1')
  request.r(i2737[4], i2737[5], 0, i2736, '_additiveImage2')
  request.r(i2737[6], i2737[7], 0, i2736, '_endPoint')
  request.r(i2737[8], i2737[9], 0, i2736, 'Bank')
  request.r(i2737[10], i2737[11], 0, i2736, '_sizeText')
  i2736.CupType = i2737[12]
  i2736.JuiceType = i2737[13]
  i2736.AdditiveType1 = i2737[14]
  i2736.AdditiveType2 = i2737[15]
  request.r(i2737[16], i2737[17], 0, i2736, '_finishSound')
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2739 = data
  request.r(i2739[0], i2739[1], 0, i2738, 'clip')
  request.r(i2739[2], i2739[3], 0, i2738, 'outputAudioMixerGroup')
  i2738.playOnAwake = !!i2739[4]
  i2738.loop = !!i2739[5]
  i2738.time = i2739[6]
  i2738.volume = i2739[7]
  i2738.pitch = i2739[8]
  i2738.enabled = !!i2739[9]
  return i2738
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2740 = root || request.c( 'UnityEngine.UI.Image' )
  var i2741 = data
  request.r(i2741[0], i2741[1], 0, i2740, 'm_Sprite')
  i2740.m_Type = i2741[2]
  i2740.m_PreserveAspect = !!i2741[3]
  i2740.m_FillCenter = !!i2741[4]
  i2740.m_FillMethod = i2741[5]
  i2740.m_FillAmount = i2741[6]
  i2740.m_FillClockwise = !!i2741[7]
  i2740.m_FillOrigin = i2741[8]
  i2740.m_UseSpriteMesh = !!i2741[9]
  i2740.m_PixelsPerUnitMultiplier = i2741[10]
  request.r(i2741[11], i2741[12], 0, i2740, 'm_Material')
  i2740.m_Maskable = !!i2741[13]
  i2740.m_Color = new pc.Color(i2741[14], i2741[15], i2741[16], i2741[17])
  i2740.m_RaycastTarget = !!i2741[18]
  i2740.m_RaycastPadding = new pc.Vec4( i2741[19], i2741[20], i2741[21], i2741[22] )
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2743 = data
  i2742.name = i2743[0]
  i2742.tagId = i2743[1]
  i2742.enabled = !!i2743[2]
  i2742.isStatic = !!i2743[3]
  i2742.layer = i2743[4]
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2745 = data
  i2744.name = i2745[0]
  i2744.index = i2745[1]
  i2744.startup = !!i2745[2]
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2747 = data
  i2746.position = new pc.Vec3( i2747[0], i2747[1], i2747[2] )
  i2746.scale = new pc.Vec3( i2747[3], i2747[4], i2747[5] )
  i2746.rotation = new pc.Quat(i2747[6], i2747[7], i2747[8], i2747[9])
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2749 = data
  i2748.enabled = !!i2749[0]
  i2748.aspect = i2749[1]
  i2748.orthographic = !!i2749[2]
  i2748.orthographicSize = i2749[3]
  i2748.backgroundColor = new pc.Color(i2749[4], i2749[5], i2749[6], i2749[7])
  i2748.nearClipPlane = i2749[8]
  i2748.farClipPlane = i2749[9]
  i2748.fieldOfView = i2749[10]
  i2748.depth = i2749[11]
  i2748.clearFlags = i2749[12]
  i2748.cullingMask = i2749[13]
  i2748.rect = i2749[14]
  request.r(i2749[15], i2749[16], 0, i2748, 'targetTexture')
  i2748.usePhysicalProperties = !!i2749[17]
  i2748.focalLength = i2749[18]
  i2748.sensorSize = new pc.Vec2( i2749[19], i2749[20] )
  i2748.lensShift = new pc.Vec2( i2749[21], i2749[22] )
  i2748.gateFit = i2749[23]
  i2748.commandBufferCount = i2749[24]
  i2748.cameraType = i2749[25]
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2751 = data
  request.r(i2751[0], i2751[1], 0, i2750, 'animatorController')
  request.r(i2751[2], i2751[3], 0, i2750, 'avatar')
  i2750.updateMode = i2751[4]
  i2750.hasTransformHierarchy = !!i2751[5]
  i2750.applyRootMotion = !!i2751[6]
  var i2753 = i2751[7]
  var i2752 = []
  for(var i = 0; i < i2753.length; i += 2) {
  request.r(i2753[i + 0], i2753[i + 1], 2, i2752, '')
  }
  i2750.humanBones = i2752
  i2750.enabled = !!i2751[8]
  return i2750
}

Deserializers["Bank"] = function (request, data, root) {
  var i2756 = root || request.c( 'Bank' )
  var i2757 = data
  request.r(i2757[0], i2757[1], 0, i2756, 'BuyBigCupButton')
  request.r(i2757[2], i2757[3], 0, i2756, 'BigCupButton')
  request.r(i2757[4], i2757[5], 0, i2756, 'MiddleCupButton')
  request.r(i2757[6], i2757[7], 0, i2756, 'MoneyText')
  request.r(i2757[8], i2757[9], 0, i2756, 'Tutorial')
  request.r(i2757[10], i2757[11], 0, i2756, 'BuyAdditiveButton')
  request.r(i2757[12], i2757[13], 0, i2756, 'BuyJuiceButton')
  request.r(i2757[14], i2757[15], 0, i2756, 'JuiceButton1')
  request.r(i2757[16], i2757[17], 0, i2756, 'JuiceButton2')
  request.r(i2757[18], i2757[19], 0, i2756, 'JuiceButton3')
  request.r(i2757[20], i2757[21], 0, i2756, 'Additive1Button')
  request.r(i2757[22], i2757[23], 0, i2756, 'Additive2Button')
  i2756.Money = i2757[24]
  i2756.IsBigCupBuy = !!i2757[25]
  i2756.IsJuiceBuy = !!i2757[26]
  i2756.IsAdditiveBuy = !!i2757[27]
  request.r(i2757[28], i2757[29], 0, i2756, '_buySound')
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2759 = data
  i2758.enabled = !!i2759[0]
  i2758.planeDistance = i2759[1]
  i2758.referencePixelsPerUnit = i2759[2]
  i2758.isFallbackOverlay = !!i2759[3]
  i2758.renderMode = i2759[4]
  i2758.renderOrder = i2759[5]
  i2758.sortingLayerName = i2759[6]
  i2758.sortingOrder = i2759[7]
  i2758.scaleFactor = i2759[8]
  request.r(i2759[9], i2759[10], 0, i2758, 'worldCamera')
  i2758.overrideSorting = !!i2759[11]
  i2758.pixelPerfect = !!i2759[12]
  i2758.targetDisplay = i2759[13]
  i2758.overridePixelPerfect = !!i2759[14]
  return i2758
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2760 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2761 = data
  i2760.m_UiScaleMode = i2761[0]
  i2760.m_ReferencePixelsPerUnit = i2761[1]
  i2760.m_ScaleFactor = i2761[2]
  i2760.m_ReferenceResolution = new pc.Vec2( i2761[3], i2761[4] )
  i2760.m_ScreenMatchMode = i2761[5]
  i2760.m_MatchWidthOrHeight = i2761[6]
  i2760.m_PhysicalUnit = i2761[7]
  i2760.m_FallbackScreenDPI = i2761[8]
  i2760.m_DefaultSpriteDPI = i2761[9]
  i2760.m_DynamicPixelsPerUnit = i2761[10]
  i2760.m_PresetInfoIsWorld = !!i2761[11]
  return i2760
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2762 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2763 = data
  i2762.m_IgnoreReversedGraphics = !!i2763[0]
  i2762.m_BlockingObjects = i2763[1]
  i2762.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2763[2] )
  return i2762
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i2764 = root || request.c( 'ImageShiftOnOrientation' )
  var i2765 = data
  var i2767 = i2765[0]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.push( request.d('ItemSwitcherData', i2767[i + 0]) );
  }
  i2764.Items = i2766
  request.r(i2765[1], i2765[2], 0, i2764, '_backHorizontal')
  request.r(i2765[3], i2765[4], 0, i2764, '_backVertical')
  request.r(i2765[5], i2765[6], 0, i2764, '_tableHorizontal')
  request.r(i2765[7], i2765[8], 0, i2764, '_tableVertical')
  i2764.IsDebug = !!i2765[9]
  i2764.CanCopy = !!i2765[10]
  return i2764
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i2770 = root || request.c( 'ItemSwitcherData' )
  var i2771 = data
  request.r(i2771[0], i2771[1], 0, i2770, 'Target')
  i2770.HorizontalAnchoredPosition = new pc.Vec2( i2771[2], i2771[3] )
  i2770.SizeHorizontal = new pc.Vec2( i2771[4], i2771[5] )
  i2770.VerticalAnchoredPosition = new pc.Vec2( i2771[6], i2771[7] )
  i2770.SizeVertical = new pc.Vec2( i2771[8], i2771[9] )
  i2770.MinHorizontal = new pc.Vec2( i2771[10], i2771[11] )
  i2770.MaxHorizontal = new pc.Vec2( i2771[12], i2771[13] )
  i2770.MinVertical = new pc.Vec2( i2771[14], i2771[15] )
  i2770.MaxVertical = new pc.Vec2( i2771[16], i2771[17] )
  i2770.IsAnchored = !!i2771[18]
  i2770.IsDebug = !!i2771[19]
  i2770.CopyHorizontal = !!i2771[20]
  i2770.CopyVertical = !!i2771[21]
  return i2770
}

Deserializers["Point"] = function (request, data, root) {
  var i2772 = root || request.c( 'Point' )
  var i2773 = data
  return i2772
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2774 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2775 = data
  i2774.m_hasFontAssetChanged = !!i2775[0]
  request.r(i2775[1], i2775[2], 0, i2774, 'm_baseMaterial')
  i2774.m_maskOffset = new pc.Vec4( i2775[3], i2775[4], i2775[5], i2775[6] )
  i2774.m_text = i2775[7]
  i2774.m_isRightToLeft = !!i2775[8]
  request.r(i2775[9], i2775[10], 0, i2774, 'm_fontAsset')
  request.r(i2775[11], i2775[12], 0, i2774, 'm_sharedMaterial')
  var i2777 = i2775[13]
  var i2776 = []
  for(var i = 0; i < i2777.length; i += 2) {
  request.r(i2777[i + 0], i2777[i + 1], 2, i2776, '')
  }
  i2774.m_fontSharedMaterials = i2776
  request.r(i2775[14], i2775[15], 0, i2774, 'm_fontMaterial')
  var i2779 = i2775[16]
  var i2778 = []
  for(var i = 0; i < i2779.length; i += 2) {
  request.r(i2779[i + 0], i2779[i + 1], 2, i2778, '')
  }
  i2774.m_fontMaterials = i2778
  i2774.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2775[17], i2775[18], i2775[19], i2775[20])
  i2774.m_fontColor = new pc.Color(i2775[21], i2775[22], i2775[23], i2775[24])
  i2774.m_enableVertexGradient = !!i2775[25]
  i2774.m_colorMode = i2775[26]
  i2774.m_fontColorGradient = request.d('TMPro.VertexGradient', i2775[27], i2774.m_fontColorGradient)
  request.r(i2775[28], i2775[29], 0, i2774, 'm_fontColorGradientPreset')
  request.r(i2775[30], i2775[31], 0, i2774, 'm_spriteAsset')
  i2774.m_tintAllSprites = !!i2775[32]
  request.r(i2775[33], i2775[34], 0, i2774, 'm_StyleSheet')
  i2774.m_TextStyleHashCode = i2775[35]
  i2774.m_overrideHtmlColors = !!i2775[36]
  i2774.m_faceColor = UnityEngine.Color32.ConstructColor(i2775[37], i2775[38], i2775[39], i2775[40])
  i2774.m_fontSize = i2775[41]
  i2774.m_fontSizeBase = i2775[42]
  i2774.m_fontWeight = i2775[43]
  i2774.m_enableAutoSizing = !!i2775[44]
  i2774.m_fontSizeMin = i2775[45]
  i2774.m_fontSizeMax = i2775[46]
  i2774.m_fontStyle = i2775[47]
  i2774.m_HorizontalAlignment = i2775[48]
  i2774.m_VerticalAlignment = i2775[49]
  i2774.m_textAlignment = i2775[50]
  i2774.m_characterSpacing = i2775[51]
  i2774.m_wordSpacing = i2775[52]
  i2774.m_lineSpacing = i2775[53]
  i2774.m_lineSpacingMax = i2775[54]
  i2774.m_paragraphSpacing = i2775[55]
  i2774.m_charWidthMaxAdj = i2775[56]
  i2774.m_enableWordWrapping = !!i2775[57]
  i2774.m_wordWrappingRatios = i2775[58]
  i2774.m_overflowMode = i2775[59]
  request.r(i2775[60], i2775[61], 0, i2774, 'm_linkedTextComponent')
  request.r(i2775[62], i2775[63], 0, i2774, 'parentLinkedComponent')
  i2774.m_enableKerning = !!i2775[64]
  i2774.m_enableExtraPadding = !!i2775[65]
  i2774.checkPaddingRequired = !!i2775[66]
  i2774.m_isRichText = !!i2775[67]
  i2774.m_parseCtrlCharacters = !!i2775[68]
  i2774.m_isOrthographic = !!i2775[69]
  i2774.m_isCullingEnabled = !!i2775[70]
  i2774.m_horizontalMapping = i2775[71]
  i2774.m_verticalMapping = i2775[72]
  i2774.m_uvLineOffset = i2775[73]
  i2774.m_geometrySortingOrder = i2775[74]
  i2774.m_IsTextObjectScaleStatic = !!i2775[75]
  i2774.m_VertexBufferAutoSizeReduction = !!i2775[76]
  i2774.m_useMaxVisibleDescender = !!i2775[77]
  i2774.m_pageToDisplay = i2775[78]
  i2774.m_margin = new pc.Vec4( i2775[79], i2775[80], i2775[81], i2775[82] )
  i2774.m_isUsingLegacyAnimationComponent = !!i2775[83]
  i2774.m_isVolumetricText = !!i2775[84]
  request.r(i2775[85], i2775[86], 0, i2774, 'm_Material')
  i2774.m_Maskable = !!i2775[87]
  i2774.m_Color = new pc.Color(i2775[88], i2775[89], i2775[90], i2775[91])
  i2774.m_RaycastTarget = !!i2775[92]
  i2774.m_RaycastPadding = new pc.Vec4( i2775[93], i2775[94], i2775[95], i2775[96] )
  return i2774
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2782 = root || request.c( 'TMPro.VertexGradient' )
  var i2783 = data
  i2782.topLeft = new pc.Color(i2783[0], i2783[1], i2783[2], i2783[3])
  i2782.topRight = new pc.Color(i2783[4], i2783[5], i2783[6], i2783[7])
  i2782.bottomLeft = new pc.Color(i2783[8], i2783[9], i2783[10], i2783[11])
  i2782.bottomRight = new pc.Color(i2783[12], i2783[13], i2783[14], i2783[15])
  return i2782
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i2784 = root || request.c( 'PeopleContainer' )
  var i2785 = data
  var i2787 = i2785[0]
  var i2786 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i2787.length; i += 2) {
  request.r(i2787[i + 0], i2787[i + 1], 1, i2786, '')
  }
  i2784.CurrentPeoples = i2786
  var i2789 = i2785[1]
  var i2788 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i2789.length; i += 2) {
  request.r(i2789[i + 0], i2789[i + 1], 1, i2788, '')
  }
  i2784._peoples = i2788
  request.r(i2785[2], i2785[3], 0, i2784, '_tutorialPeople')
  request.r(i2785[4], i2785[5], 0, i2784, '_spawnPoint')
  request.r(i2785[6], i2785[7], 0, i2784, '_point1')
  request.r(i2785[8], i2785[9], 0, i2784, '_point2')
  request.r(i2785[10], i2785[11], 0, i2784, '_endPoint')
  request.r(i2785[12], i2785[13], 0, i2784, '_juiceConfig')
  request.r(i2785[14], i2785[15], 0, i2784, '_tutorial')
  return i2784
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2792 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2793 = data
  i2792.m_HorizontalFit = i2793[0]
  i2792.m_VerticalFit = i2793[1]
  return i2792
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2794 = root || request.c( 'UnityEngine.UI.Button' )
  var i2795 = data
  i2794.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2795[0], i2794.m_OnClick)
  i2794.m_Navigation = request.d('UnityEngine.UI.Navigation', i2795[1], i2794.m_Navigation)
  i2794.m_Transition = i2795[2]
  i2794.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2795[3], i2794.m_Colors)
  i2794.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2795[4], i2794.m_SpriteState)
  i2794.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2795[5], i2794.m_AnimationTriggers)
  i2794.m_Interactable = !!i2795[6]
  request.r(i2795[7], i2795[8], 0, i2794, 'm_TargetGraphic')
  return i2794
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2796 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2797 = data
  i2796.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2797[0], i2796.m_PersistentCalls)
  return i2796
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2798 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2799 = data
  var i2801 = i2799[0]
  var i2800 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.add(request.d('UnityEngine.Events.PersistentCall', i2801[i + 0]));
  }
  i2798.m_Calls = i2800
  return i2798
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2804 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2805 = data
  request.r(i2805[0], i2805[1], 0, i2804, 'm_Target')
  i2804.m_TargetAssemblyTypeName = i2805[2]
  i2804.m_MethodName = i2805[3]
  i2804.m_Mode = i2805[4]
  i2804.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2805[5], i2804.m_Arguments)
  i2804.m_CallState = i2805[6]
  return i2804
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2806 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2807 = data
  i2806.m_Mode = i2807[0]
  i2806.m_WrapAround = !!i2807[1]
  request.r(i2807[2], i2807[3], 0, i2806, 'm_SelectOnUp')
  request.r(i2807[4], i2807[5], 0, i2806, 'm_SelectOnDown')
  request.r(i2807[6], i2807[7], 0, i2806, 'm_SelectOnLeft')
  request.r(i2807[8], i2807[9], 0, i2806, 'm_SelectOnRight')
  return i2806
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2808 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2809 = data
  i2808.m_NormalColor = new pc.Color(i2809[0], i2809[1], i2809[2], i2809[3])
  i2808.m_HighlightedColor = new pc.Color(i2809[4], i2809[5], i2809[6], i2809[7])
  i2808.m_PressedColor = new pc.Color(i2809[8], i2809[9], i2809[10], i2809[11])
  i2808.m_SelectedColor = new pc.Color(i2809[12], i2809[13], i2809[14], i2809[15])
  i2808.m_DisabledColor = new pc.Color(i2809[16], i2809[17], i2809[18], i2809[19])
  i2808.m_ColorMultiplier = i2809[20]
  i2808.m_FadeDuration = i2809[21]
  return i2808
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2810 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2811 = data
  request.r(i2811[0], i2811[1], 0, i2810, 'm_HighlightedSprite')
  request.r(i2811[2], i2811[3], 0, i2810, 'm_PressedSprite')
  request.r(i2811[4], i2811[5], 0, i2810, 'm_SelectedSprite')
  request.r(i2811[6], i2811[7], 0, i2810, 'm_DisabledSprite')
  return i2810
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2812 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2813 = data
  i2812.m_NormalTrigger = i2813[0]
  i2812.m_HighlightedTrigger = i2813[1]
  i2812.m_PressedTrigger = i2813[2]
  i2812.m_SelectedTrigger = i2813[3]
  i2812.m_DisabledTrigger = i2813[4]
  return i2812
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2814 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2815 = data
  request.r(i2815[0], i2815[1], 0, i2814, 'm_ObjectArgument')
  i2814.m_ObjectArgumentAssemblyTypeName = i2815[2]
  i2814.m_IntArgument = i2815[3]
  i2814.m_FloatArgument = i2815[4]
  i2814.m_StringArgument = i2815[5]
  i2814.m_BoolArgument = !!i2815[6]
  return i2814
}

Deserializers["BackImage"] = function (request, data, root) {
  var i2816 = root || request.c( 'BackImage' )
  var i2817 = data
  return i2816
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i2818 = root || request.c( 'AheadImage' )
  var i2819 = data
  return i2818
}

Deserializers["Order"] = function (request, data, root) {
  var i2820 = root || request.c( 'Order' )
  var i2821 = data
  request.r(i2821[0], i2821[1], 0, i2820, '_juiceAnimator')
  request.r(i2821[2], i2821[3], 0, i2820, '_cupAnimator')
  request.r(i2821[4], i2821[5], 0, i2820, '_canvasAnimator')
  i2820.CupType = i2821[6]
  i2820.JuiceType = i2821[7]
  i2820.AdditiveType1 = i2821[8]
  i2820.AdditiveType2 = i2821[9]
  i2820.IsFree = !!i2821[10]
  i2820.IsSpriteReady = !!i2821[11]
  i2820.IsCupReady = !!i2821[12]
  i2820.IsJuiceReady = !!i2821[13]
  i2820.IsPouring = !!i2821[14]
  request.r(i2821[15], i2821[16], 0, i2820, '_iceButton')
  request.r(i2821[17], i2821[18], 0, i2820, '_grassButton')
  request.r(i2821[19], i2821[20], 0, i2820, '_juiceBallsButton')
  request.r(i2821[21], i2821[22], 0, i2820, '_strawButton')
  request.r(i2821[23], i2821[24], 0, i2820, '_bigCupButton')
  request.r(i2821[25], i2821[26], 0, i2820, '_middleCupButton')
  request.r(i2821[27], i2821[28], 0, i2820, '_smallCupButton')
  request.r(i2821[29], i2821[30], 0, i2820, '_appleButton')
  request.r(i2821[31], i2821[32], 0, i2820, '_orangeButton')
  request.r(i2821[33], i2821[34], 0, i2820, '_multifruitButton')
  request.r(i2821[35], i2821[36], 0, i2820, '_tomatoButton')
  request.r(i2821[37], i2821[38], 0, i2820, '_cherryButton')
  request.r(i2821[39], i2821[40], 0, i2820, '_smallRawJuiceImage')
  request.r(i2821[41], i2821[42], 0, i2820, '_middleRawJuiceImage')
  request.r(i2821[43], i2821[44], 0, i2820, '_bigRawJuiceImage')
  request.r(i2821[45], i2821[46], 0, i2820, '_smallReadyJuiceImage')
  request.r(i2821[47], i2821[48], 0, i2820, '_middleReadyJuiceImage')
  request.r(i2821[49], i2821[50], 0, i2820, '_bigReadyJuiceImage')
  request.r(i2821[51], i2821[52], 0, i2820, '_backImage')
  request.r(i2821[53], i2821[54], 0, i2820, '_aheadImage')
  request.r(i2821[55], i2821[56], 0, i2820, '_config')
  request.r(i2821[57], i2821[58], 0, i2820, '_takeOrderButton')
  request.r(i2821[59], i2821[60], 0, i2820, '_peopleContainer')
  request.r(i2821[61], i2821[62], 0, i2820, '_tutorial')
  request.r(i2821[63], i2821[64], 0, i2820, '_bText')
  request.r(i2821[65], i2821[66], 0, i2820, '_mText')
  request.r(i2821[67], i2821[68], 0, i2820, '_sText')
  request.r(i2821[69], i2821[70], 0, i2820, '_garbageButton')
  request.r(i2821[71], i2821[72], 0, i2820, '_clickSound')
  request.r(i2821[73], i2821[74], 0, i2820, '_juiceSound')
  return i2820
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i2822 = root || request.c( 'Tutorial' )
  var i2823 = data
  i2822.IsTutorial = !!i2823[0]
  request.r(i2823[1], i2823[2], 0, i2822, 'Finger1')
  request.r(i2823[3], i2823[4], 0, i2822, 'Finger2')
  request.r(i2823[5], i2823[6], 0, i2822, 'Finger3')
  request.r(i2823[7], i2823[8], 0, i2822, 'Finger4')
  request.r(i2823[9], i2823[10], 0, i2822, 'Finger5')
  request.r(i2823[11], i2823[12], 0, i2822, 'BuyBigCupFinger')
  request.r(i2823[13], i2823[14], 0, i2822, 'BuyJuiceFinger')
  request.r(i2823[15], i2823[16], 0, i2822, 'SmallCupButton')
  request.r(i2823[17], i2823[18], 0, i2822, 'JuiceButton')
  request.r(i2823[19], i2823[20], 0, i2822, 'StrawButton')
  request.r(i2823[21], i2823[22], 0, i2822, 'AdditiveButton')
  request.r(i2823[23], i2823[24], 0, i2822, 'ReadyButton')
  var i2825 = i2823[25]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 2) {
  request.r(i2825[i + 0], i2825[i + 1], 2, i2824, '')
  }
  i2822.Buttons = i2824
  request.r(i2823[26], i2823[27], 0, i2822, 'Bank')
  return i2822
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i2828 = root || request.c( 'SoundSwitcher' )
  var i2829 = data
  request.r(i2829[0], i2829[1], 0, i2828, '_onImage')
  request.r(i2829[2], i2829[3], 0, i2828, '_offImage')
  return i2828
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2830 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2831 = data
  request.r(i2831[0], i2831[1], 0, i2830, 'm_FirstSelected')
  i2830.m_sendNavigationEvents = !!i2831[2]
  i2830.m_DragThreshold = i2831[3]
  return i2830
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2832 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2833 = data
  i2832.m_HorizontalAxis = i2833[0]
  i2832.m_VerticalAxis = i2833[1]
  i2832.m_SubmitButton = i2833[2]
  i2832.m_CancelButton = i2833[3]
  i2832.m_InputActionsPerSecond = i2833[4]
  i2832.m_RepeatDelay = i2833[5]
  i2832.m_ForceModuleActive = !!i2833[6]
  i2832.m_SendPointerHoverToParent = !!i2833[7]
  return i2832
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i2834 = root || request.c( 'JuiceConfig' )
  var i2835 = data
  request.r(i2835[0], i2835[1], 0, i2834, 'EntityBigCup')
  request.r(i2835[2], i2835[3], 0, i2834, 'TomatoBigCup')
  request.r(i2835[4], i2835[5], 0, i2834, 'AppleBigCup')
  request.r(i2835[6], i2835[7], 0, i2834, 'OrangeBigCup')
  request.r(i2835[8], i2835[9], 0, i2834, 'CherryBigCup')
  request.r(i2835[10], i2835[11], 0, i2834, 'MultifruitBigCup')
  request.r(i2835[12], i2835[13], 0, i2834, 'TomatoBigStrawCup')
  request.r(i2835[14], i2835[15], 0, i2834, 'MultifruitBigStrawCup')
  request.r(i2835[16], i2835[17], 0, i2834, 'AppleBigStrawCup')
  request.r(i2835[18], i2835[19], 0, i2834, 'OrangeBigStrawCup')
  request.r(i2835[20], i2835[21], 0, i2834, 'CherryBigStrawCup')
  request.r(i2835[22], i2835[23], 0, i2834, 'MultifruitBigBallsCup')
  request.r(i2835[24], i2835[25], 0, i2834, 'TomatoBigBallsCup')
  request.r(i2835[26], i2835[27], 0, i2834, 'AppleBigBallsCup')
  request.r(i2835[28], i2835[29], 0, i2834, 'OrangeBigBallsCup')
  request.r(i2835[30], i2835[31], 0, i2834, 'CherryBigBallsCup')
  request.r(i2835[32], i2835[33], 0, i2834, 'EntityMiddleCup')
  request.r(i2835[34], i2835[35], 0, i2834, 'TomatoMiddleCup')
  request.r(i2835[36], i2835[37], 0, i2834, 'AppleMiddleCup')
  request.r(i2835[38], i2835[39], 0, i2834, 'OrangeMiddleCup')
  request.r(i2835[40], i2835[41], 0, i2834, 'CherryMiddleCup')
  request.r(i2835[42], i2835[43], 0, i2834, 'MultifruitMiddleCup')
  request.r(i2835[44], i2835[45], 0, i2834, 'TomatoMiddleStrawCup')
  request.r(i2835[46], i2835[47], 0, i2834, 'MultifruitMiddleStrawCup')
  request.r(i2835[48], i2835[49], 0, i2834, 'AppleMiddleStrawCup')
  request.r(i2835[50], i2835[51], 0, i2834, 'OrangeMiddleStrawCup')
  request.r(i2835[52], i2835[53], 0, i2834, 'CherryMiddleStrawCup')
  request.r(i2835[54], i2835[55], 0, i2834, 'MultifruitMiddleBallsCup')
  request.r(i2835[56], i2835[57], 0, i2834, 'TomatoMiddleBallsCup')
  request.r(i2835[58], i2835[59], 0, i2834, 'AppleMiddleBallsCup')
  request.r(i2835[60], i2835[61], 0, i2834, 'OrangeMiddleBallsCup')
  request.r(i2835[62], i2835[63], 0, i2834, 'CherryMiddleBallsCup')
  request.r(i2835[64], i2835[65], 0, i2834, 'EntitySmallCup')
  request.r(i2835[66], i2835[67], 0, i2834, 'TomatoSmallCup')
  request.r(i2835[68], i2835[69], 0, i2834, 'AppleSmallCup')
  request.r(i2835[70], i2835[71], 0, i2834, 'OrangeSmallCup')
  request.r(i2835[72], i2835[73], 0, i2834, 'CherrySmallCup')
  request.r(i2835[74], i2835[75], 0, i2834, 'MultifruitSmallCup')
  request.r(i2835[76], i2835[77], 0, i2834, 'TomatoSmallStrawCup')
  request.r(i2835[78], i2835[79], 0, i2834, 'AppleSmallStrawCup')
  request.r(i2835[80], i2835[81], 0, i2834, 'OrangeSmallStrawCup')
  request.r(i2835[82], i2835[83], 0, i2834, 'CherrySmallStrawCup')
  request.r(i2835[84], i2835[85], 0, i2834, 'MultifruitSmallStrawCup')
  request.r(i2835[86], i2835[87], 0, i2834, 'AppleSmallBallsCup')
  request.r(i2835[88], i2835[89], 0, i2834, 'TomatoSmallBallsCup')
  request.r(i2835[90], i2835[91], 0, i2834, 'OrangeSmallBallsCup')
  request.r(i2835[92], i2835[93], 0, i2834, 'CherrySmallBallsCup')
  request.r(i2835[94], i2835[95], 0, i2834, 'MultifruitSmallBallsCup')
  request.r(i2835[96], i2835[97], 0, i2834, 'JuiceBallAdditive')
  request.r(i2835[98], i2835[99], 0, i2834, 'IceAdditive')
  request.r(i2835[100], i2835[101], 0, i2834, 'GrassAdditive')
  return i2834
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i2836 = root || request.c( 'TouchIdleTimer' )
  var i2837 = data
  return i2836
}

Deserializers["Helper"] = function (request, data, root) {
  var i2838 = root || request.c( 'Helper' )
  var i2839 = data
  request.r(i2839[0], i2839[1], 0, i2838, '_smallCupFinger')
  request.r(i2839[2], i2839[3], 0, i2838, '_middleCupFinger')
  request.r(i2839[4], i2839[5], 0, i2838, '_bigCupFinger')
  request.r(i2839[6], i2839[7], 0, i2838, '_iceFinger')
  request.r(i2839[8], i2839[9], 0, i2838, '_grassFinger')
  request.r(i2839[10], i2839[11], 0, i2838, '_juiceballFinger')
  request.r(i2839[12], i2839[13], 0, i2838, '_appleFinger')
  request.r(i2839[14], i2839[15], 0, i2838, '_cherryFinger')
  request.r(i2839[16], i2839[17], 0, i2838, '_orangeFinger')
  request.r(i2839[18], i2839[19], 0, i2838, '_multifruitFinger')
  request.r(i2839[20], i2839[21], 0, i2838, '_tomatoFinger')
  request.r(i2839[22], i2839[23], 0, i2838, '_strawFinger')
  request.r(i2839[24], i2839[25], 0, i2838, '_readyFinger')
  request.r(i2839[26], i2839[27], 0, i2838, '_peoples')
  request.r(i2839[28], i2839[29], 0, i2838, '_tutorial')
  request.r(i2839[30], i2839[31], 0, i2838, '_order')
  request.r(i2839[32], i2839[33], 0, i2838, '_strawButton')
  request.r(i2839[34], i2839[35], 0, i2838, '_bigCupButton')
  request.r(i2839[36], i2839[37], 0, i2838, '_middleCupButton')
  request.r(i2839[38], i2839[39], 0, i2838, '_smallCupButton')
  request.r(i2839[40], i2839[41], 0, i2838, '_readyButton')
  request.r(i2839[42], i2839[43], 0, i2838, '_touchIdleTimer')
  request.r(i2839[44], i2839[45], 0, i2838, '_finalScreen')
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2841 = data
  i2840.ambientIntensity = i2841[0]
  i2840.reflectionIntensity = i2841[1]
  i2840.ambientMode = i2841[2]
  i2840.ambientLight = new pc.Color(i2841[3], i2841[4], i2841[5], i2841[6])
  i2840.ambientSkyColor = new pc.Color(i2841[7], i2841[8], i2841[9], i2841[10])
  i2840.ambientGroundColor = new pc.Color(i2841[11], i2841[12], i2841[13], i2841[14])
  i2840.ambientEquatorColor = new pc.Color(i2841[15], i2841[16], i2841[17], i2841[18])
  i2840.fogColor = new pc.Color(i2841[19], i2841[20], i2841[21], i2841[22])
  i2840.fogEndDistance = i2841[23]
  i2840.fogStartDistance = i2841[24]
  i2840.fogDensity = i2841[25]
  i2840.fog = !!i2841[26]
  request.r(i2841[27], i2841[28], 0, i2840, 'skybox')
  i2840.fogMode = i2841[29]
  var i2843 = i2841[30]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2843[i + 0]) );
  }
  i2840.lightmaps = i2842
  i2840.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2841[31], i2840.lightProbes)
  i2840.lightmapsMode = i2841[32]
  i2840.mixedBakeMode = i2841[33]
  i2840.environmentLightingMode = i2841[34]
  i2840.ambientProbe = new pc.SphericalHarmonicsL2(i2841[35])
  i2840.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2841[36])
  i2840.useReferenceAmbientProbe = !!i2841[37]
  request.r(i2841[38], i2841[39], 0, i2840, 'customReflection')
  request.r(i2841[40], i2841[41], 0, i2840, 'defaultReflection')
  i2840.defaultReflectionMode = i2841[42]
  i2840.defaultReflectionResolution = i2841[43]
  i2840.sunLightObjectId = i2841[44]
  i2840.pixelLightCount = i2841[45]
  i2840.defaultReflectionHDR = !!i2841[46]
  i2840.hasLightDataAsset = !!i2841[47]
  i2840.hasManualGenerate = !!i2841[48]
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2847 = data
  request.r(i2847[0], i2847[1], 0, i2846, 'lightmapColor')
  request.r(i2847[2], i2847[3], 0, i2846, 'lightmapDirection')
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2848 = root || new UnityEngine.LightProbes()
  var i2849 = data
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2857 = data
  var i2859 = i2857[0]
  var i2858 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2859[i + 0]));
  }
  i2856.ShaderCompilationErrors = i2858
  i2856.name = i2857[1]
  i2856.guid = i2857[2]
  var i2861 = i2857[3]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.push( i2861[i + 0] );
  }
  i2856.shaderDefinedKeywords = i2860
  var i2863 = i2857[4]
  var i2862 = []
  for(var i = 0; i < i2863.length; i += 1) {
    i2862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2863[i + 0]) );
  }
  i2856.passes = i2862
  var i2865 = i2857[5]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2865[i + 0]) );
  }
  i2856.usePasses = i2864
  var i2867 = i2857[6]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2867[i + 0]) );
  }
  i2856.defaultParameterValues = i2866
  request.r(i2857[7], i2857[8], 0, i2856, 'unityFallbackShader')
  i2856.readDepth = !!i2857[9]
  i2856.isCreatedByShaderGraph = !!i2857[10]
  i2856.compiled = !!i2857[11]
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2871 = data
  i2870.shaderName = i2871[0]
  i2870.errorMessage = i2871[1]
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2876 = root || new pc.UnityShaderPass()
  var i2877 = data
  i2876.id = i2877[0]
  i2876.subShaderIndex = i2877[1]
  i2876.name = i2877[2]
  i2876.passType = i2877[3]
  i2876.grabPassTextureName = i2877[4]
  i2876.usePass = !!i2877[5]
  i2876.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2877[6], i2876.zTest)
  i2876.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2877[7], i2876.zWrite)
  i2876.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2877[8], i2876.culling)
  i2876.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2877[9], i2876.blending)
  i2876.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2877[10], i2876.alphaBlending)
  i2876.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2877[11], i2876.colorWriteMask)
  i2876.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2877[12], i2876.offsetUnits)
  i2876.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2877[13], i2876.offsetFactor)
  i2876.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2877[14], i2876.stencilRef)
  i2876.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2877[15], i2876.stencilReadMask)
  i2876.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2877[16], i2876.stencilWriteMask)
  i2876.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2877[17], i2876.stencilOp)
  i2876.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2877[18], i2876.stencilOpFront)
  i2876.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2877[19], i2876.stencilOpBack)
  var i2879 = i2877[20]
  var i2878 = []
  for(var i = 0; i < i2879.length; i += 1) {
    i2878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2879[i + 0]) );
  }
  i2876.tags = i2878
  var i2881 = i2877[21]
  var i2880 = []
  for(var i = 0; i < i2881.length; i += 1) {
    i2880.push( i2881[i + 0] );
  }
  i2876.passDefinedKeywords = i2880
  var i2883 = i2877[22]
  var i2882 = []
  for(var i = 0; i < i2883.length; i += 1) {
    i2882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2883[i + 0]) );
  }
  i2876.passDefinedKeywordGroups = i2882
  var i2885 = i2877[23]
  var i2884 = []
  for(var i = 0; i < i2885.length; i += 1) {
    i2884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2885[i + 0]) );
  }
  i2876.variants = i2884
  var i2887 = i2877[24]
  var i2886 = []
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2887[i + 0]) );
  }
  i2876.excludedVariants = i2886
  i2876.hasDepthReader = !!i2877[25]
  return i2876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2889 = data
  i2888.val = i2889[0]
  i2888.name = i2889[1]
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2891 = data
  i2890.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2891[0], i2890.src)
  i2890.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2891[1], i2890.dst)
  i2890.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2891[2], i2890.op)
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2893 = data
  i2892.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2893[0], i2892.pass)
  i2892.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2893[1], i2892.fail)
  i2892.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2893[2], i2892.zFail)
  i2892.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2893[3], i2892.comp)
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2897 = data
  i2896.name = i2897[0]
  i2896.value = i2897[1]
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2901 = data
  var i2903 = i2901[0]
  var i2902 = []
  for(var i = 0; i < i2903.length; i += 1) {
    i2902.push( i2903[i + 0] );
  }
  i2900.keywords = i2902
  i2900.hasDiscard = !!i2901[1]
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2907 = data
  i2906.passId = i2907[0]
  i2906.subShaderIndex = i2907[1]
  var i2909 = i2907[2]
  var i2908 = []
  for(var i = 0; i < i2909.length; i += 1) {
    i2908.push( i2909[i + 0] );
  }
  i2906.keywords = i2908
  i2906.vertexProgram = i2907[3]
  i2906.fragmentProgram = i2907[4]
  i2906.exportedForWebGl2 = !!i2907[5]
  i2906.readDepth = !!i2907[6]
  return i2906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2913 = data
  request.r(i2913[0], i2913[1], 0, i2912, 'shader')
  i2912.pass = i2913[2]
  return i2912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2917 = data
  i2916.name = i2917[0]
  i2916.type = i2917[1]
  i2916.value = new pc.Vec4( i2917[2], i2917[3], i2917[4], i2917[5] )
  i2916.textureValue = i2917[6]
  i2916.shaderPropertyFlag = i2917[7]
  return i2916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2919 = data
  i2918.name = i2919[0]
  request.r(i2919[1], i2919[2], 0, i2918, 'texture')
  i2918.aabb = i2919[3]
  i2918.vertices = i2919[4]
  i2918.triangles = i2919[5]
  i2918.textureRect = UnityEngine.Rect.MinMaxRect(i2919[6], i2919[7], i2919[8], i2919[9])
  i2918.packedRect = UnityEngine.Rect.MinMaxRect(i2919[10], i2919[11], i2919[12], i2919[13])
  i2918.border = new pc.Vec4( i2919[14], i2919[15], i2919[16], i2919[17] )
  i2918.transparency = i2919[18]
  i2918.bounds = i2919[19]
  i2918.pixelsPerUnit = i2919[20]
  i2918.textureWidth = i2919[21]
  i2918.textureHeight = i2919[22]
  i2918.nativeSize = new pc.Vec2( i2919[23], i2919[24] )
  i2918.pivot = new pc.Vec2( i2919[25], i2919[26] )
  i2918.textureRectOffset = new pc.Vec2( i2919[27], i2919[28] )
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2921 = data
  i2920.name = i2921[0]
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2923 = data
  i2922.name = i2923[0]
  i2922.wrapMode = i2923[1]
  i2922.isLooping = !!i2923[2]
  i2922.length = i2923[3]
  var i2925 = i2923[4]
  var i2924 = []
  for(var i = 0; i < i2925.length; i += 1) {
    i2924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2925[i + 0]) );
  }
  i2922.curves = i2924
  var i2927 = i2923[5]
  var i2926 = []
  for(var i = 0; i < i2927.length; i += 1) {
    i2926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2927[i + 0]) );
  }
  i2922.events = i2926
  i2922.halfPrecision = !!i2923[6]
  i2922._frameRate = i2923[7]
  i2922.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2923[8], i2922.localBounds)
  i2922.hasMuscleCurves = !!i2923[9]
  var i2929 = i2923[10]
  var i2928 = []
  for(var i = 0; i < i2929.length; i += 1) {
    i2928.push( i2929[i + 0] );
  }
  i2922.clipMuscleConstant = i2928
  i2922.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2923[11], i2922.clipBindingConstant)
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2933 = data
  i2932.path = i2933[0]
  i2932.hash = i2933[1]
  i2932.componentType = i2933[2]
  i2932.property = i2933[3]
  i2932.keys = i2933[4]
  var i2935 = i2933[5]
  var i2934 = []
  for(var i = 0; i < i2935.length; i += 1) {
    i2934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2935[i + 0]) );
  }
  i2932.objectReferenceKeys = i2934
  return i2932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2939 = data
  i2938.time = i2939[0]
  request.r(i2939[1], i2939[2], 0, i2938, 'value')
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2943 = data
  i2942.functionName = i2943[0]
  i2942.floatParameter = i2943[1]
  i2942.intParameter = i2943[2]
  i2942.stringParameter = i2943[3]
  request.r(i2943[4], i2943[5], 0, i2942, 'objectReferenceParameter')
  i2942.time = i2943[6]
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2945 = data
  i2944.center = new pc.Vec3( i2945[0], i2945[1], i2945[2] )
  i2944.extends = new pc.Vec3( i2945[3], i2945[4], i2945[5] )
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2949 = data
  var i2951 = i2949[0]
  var i2950 = []
  for(var i = 0; i < i2951.length; i += 1) {
    i2950.push( i2951[i + 0] );
  }
  i2948.genericBindings = i2950
  var i2953 = i2949[1]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 1) {
    i2952.push( i2953[i + 0] );
  }
  i2948.pptrCurveMapping = i2952
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2955 = data
  i2954.name = i2955[0]
  i2954.ascent = i2955[1]
  i2954.originalLineHeight = i2955[2]
  i2954.fontSize = i2955[3]
  var i2957 = i2955[4]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 1) {
    i2956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2957[i + 0]) );
  }
  i2954.characterInfo = i2956
  request.r(i2955[5], i2955[6], 0, i2954, 'texture')
  i2954.originalFontSize = i2955[7]
  return i2954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2961 = data
  i2960.index = i2961[0]
  i2960.advance = i2961[1]
  i2960.bearing = i2961[2]
  i2960.glyphWidth = i2961[3]
  i2960.glyphHeight = i2961[4]
  i2960.minX = i2961[5]
  i2960.maxX = i2961[6]
  i2960.minY = i2961[7]
  i2960.maxY = i2961[8]
  i2960.uvBottomLeftX = i2961[9]
  i2960.uvBottomLeftY = i2961[10]
  i2960.uvBottomRightX = i2961[11]
  i2960.uvBottomRightY = i2961[12]
  i2960.uvTopLeftX = i2961[13]
  i2960.uvTopLeftY = i2961[14]
  i2960.uvTopRightX = i2961[15]
  i2960.uvTopRightY = i2961[16]
  return i2960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2963 = data
  i2962.name = i2963[0]
  var i2965 = i2963[1]
  var i2964 = []
  for(var i = 0; i < i2965.length; i += 1) {
    i2964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2965[i + 0]) );
  }
  i2962.layers = i2964
  var i2967 = i2963[2]
  var i2966 = []
  for(var i = 0; i < i2967.length; i += 1) {
    i2966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2967[i + 0]) );
  }
  i2962.parameters = i2966
  i2962.animationClips = i2963[3]
  i2962.avatarUnsupported = i2963[4]
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2971 = data
  i2970.name = i2971[0]
  i2970.defaultWeight = i2971[1]
  i2970.blendingMode = i2971[2]
  i2970.avatarMask = i2971[3]
  i2970.syncedLayerIndex = i2971[4]
  i2970.syncedLayerAffectsTiming = !!i2971[5]
  i2970.syncedLayers = i2971[6]
  i2970.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2971[7], i2970.stateMachine)
  return i2970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2973 = data
  i2972.id = i2973[0]
  i2972.name = i2973[1]
  i2972.path = i2973[2]
  var i2975 = i2973[3]
  var i2974 = []
  for(var i = 0; i < i2975.length; i += 1) {
    i2974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2975[i + 0]) );
  }
  i2972.states = i2974
  var i2977 = i2973[4]
  var i2976 = []
  for(var i = 0; i < i2977.length; i += 1) {
    i2976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2977[i + 0]) );
  }
  i2972.machines = i2976
  var i2979 = i2973[5]
  var i2978 = []
  for(var i = 0; i < i2979.length; i += 1) {
    i2978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2979[i + 0]) );
  }
  i2972.entryStateTransitions = i2978
  var i2981 = i2973[6]
  var i2980 = []
  for(var i = 0; i < i2981.length; i += 1) {
    i2980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2981[i + 0]) );
  }
  i2972.exitStateTransitions = i2980
  var i2983 = i2973[7]
  var i2982 = []
  for(var i = 0; i < i2983.length; i += 1) {
    i2982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2983[i + 0]) );
  }
  i2972.anyStateTransitions = i2982
  i2972.defaultStateId = i2973[8]
  return i2972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2987 = data
  i2986.id = i2987[0]
  i2986.name = i2987[1]
  i2986.cycleOffset = i2987[2]
  i2986.cycleOffsetParameter = i2987[3]
  i2986.cycleOffsetParameterActive = !!i2987[4]
  i2986.mirror = !!i2987[5]
  i2986.mirrorParameter = i2987[6]
  i2986.mirrorParameterActive = !!i2987[7]
  i2986.motionId = i2987[8]
  i2986.nameHash = i2987[9]
  i2986.fullPathHash = i2987[10]
  i2986.speed = i2987[11]
  i2986.speedParameter = i2987[12]
  i2986.speedParameterActive = !!i2987[13]
  i2986.tag = i2987[14]
  i2986.tagHash = i2987[15]
  i2986.writeDefaultValues = !!i2987[16]
  var i2989 = i2987[17]
  var i2988 = []
  for(var i = 0; i < i2989.length; i += 2) {
  request.r(i2989[i + 0], i2989[i + 1], 2, i2988, '')
  }
  i2986.behaviours = i2988
  var i2991 = i2987[18]
  var i2990 = []
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2991[i + 0]) );
  }
  i2986.transitions = i2990
  return i2986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2997 = data
  i2996.fullPath = i2997[0]
  i2996.canTransitionToSelf = !!i2997[1]
  i2996.duration = i2997[2]
  i2996.exitTime = i2997[3]
  i2996.hasExitTime = !!i2997[4]
  i2996.hasFixedDuration = !!i2997[5]
  i2996.interruptionSource = i2997[6]
  i2996.offset = i2997[7]
  i2996.orderedInterruption = !!i2997[8]
  i2996.destinationStateId = i2997[9]
  i2996.isExit = !!i2997[10]
  i2996.mute = !!i2997[11]
  i2996.solo = !!i2997[12]
  var i2999 = i2997[13]
  var i2998 = []
  for(var i = 0; i < i2999.length; i += 1) {
    i2998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2999[i + 0]) );
  }
  i2996.conditions = i2998
  return i2996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3005 = data
  i3004.destinationStateId = i3005[0]
  i3004.isExit = !!i3005[1]
  i3004.mute = !!i3005[2]
  i3004.solo = !!i3005[3]
  var i3007 = i3005[4]
  var i3006 = []
  for(var i = 0; i < i3007.length; i += 1) {
    i3006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3007[i + 0]) );
  }
  i3004.conditions = i3006
  return i3004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3011 = data
  i3010.mode = i3011[0]
  i3010.parameter = i3011[1]
  i3010.threshold = i3011[2]
  return i3010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3015 = data
  i3014.defaultBool = !!i3015[0]
  i3014.defaultFloat = i3015[1]
  i3014.defaultInt = i3015[2]
  i3014.name = i3015[3]
  i3014.nameHash = i3015[4]
  i3014.type = i3015[5]
  return i3014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3017 = data
  i3016.name = i3017[0]
  i3016.bytes64 = i3017[1]
  i3016.data = i3017[2]
  return i3016
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3018 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3019 = data
  i3018.hashCode = i3019[0]
  request.r(i3019[1], i3019[2], 0, i3018, 'material')
  i3018.materialHashCode = i3019[3]
  request.r(i3019[4], i3019[5], 0, i3018, 'atlas')
  i3018.normalStyle = i3019[6]
  i3018.normalSpacingOffset = i3019[7]
  i3018.boldStyle = i3019[8]
  i3018.boldSpacing = i3019[9]
  i3018.italicStyle = i3019[10]
  i3018.tabSize = i3019[11]
  i3018.m_Version = i3019[12]
  i3018.m_SourceFontFileGUID = i3019[13]
  request.r(i3019[14], i3019[15], 0, i3018, 'm_SourceFontFile_EditorRef')
  request.r(i3019[16], i3019[17], 0, i3018, 'm_SourceFontFile')
  i3018.m_AtlasPopulationMode = i3019[18]
  i3018.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3019[19], i3018.m_FaceInfo)
  var i3021 = i3019[20]
  var i3020 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3021.length; i += 1) {
    i3020.add(request.d('UnityEngine.TextCore.Glyph', i3021[i + 0]));
  }
  i3018.m_GlyphTable = i3020
  var i3023 = i3019[21]
  var i3022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3023.length; i += 1) {
    i3022.add(request.d('TMPro.TMP_Character', i3023[i + 0]));
  }
  i3018.m_CharacterTable = i3022
  var i3025 = i3019[22]
  var i3024 = []
  for(var i = 0; i < i3025.length; i += 2) {
  request.r(i3025[i + 0], i3025[i + 1], 2, i3024, '')
  }
  i3018.m_AtlasTextures = i3024
  i3018.m_AtlasTextureIndex = i3019[23]
  i3018.m_IsMultiAtlasTexturesEnabled = !!i3019[24]
  i3018.m_ClearDynamicDataOnBuild = !!i3019[25]
  var i3027 = i3019[26]
  var i3026 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3027.length; i += 1) {
    i3026.add(request.d('UnityEngine.TextCore.GlyphRect', i3027[i + 0]));
  }
  i3018.m_UsedGlyphRects = i3026
  var i3029 = i3019[27]
  var i3028 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3029.length; i += 1) {
    i3028.add(request.d('UnityEngine.TextCore.GlyphRect', i3029[i + 0]));
  }
  i3018.m_FreeGlyphRects = i3028
  i3018.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3019[28], i3018.m_fontInfo)
  i3018.m_AtlasWidth = i3019[29]
  i3018.m_AtlasHeight = i3019[30]
  i3018.m_AtlasPadding = i3019[31]
  i3018.m_AtlasRenderMode = i3019[32]
  var i3031 = i3019[33]
  var i3030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3031.length; i += 1) {
    i3030.add(request.d('TMPro.TMP_Glyph', i3031[i + 0]));
  }
  i3018.m_glyphInfoList = i3030
  i3018.m_KerningTable = request.d('TMPro.KerningTable', i3019[34], i3018.m_KerningTable)
  i3018.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3019[35], i3018.m_FontFeatureTable)
  var i3033 = i3019[36]
  var i3032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3033.length; i += 2) {
  request.r(i3033[i + 0], i3033[i + 1], 1, i3032, '')
  }
  i3018.fallbackFontAssets = i3032
  var i3035 = i3019[37]
  var i3034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3035.length; i += 2) {
  request.r(i3035[i + 0], i3035[i + 1], 1, i3034, '')
  }
  i3018.m_FallbackFontAssetTable = i3034
  i3018.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3019[38], i3018.m_CreationSettings)
  var i3037 = i3019[39]
  var i3036 = []
  for(var i = 0; i < i3037.length; i += 1) {
    i3036.push( request.d('TMPro.TMP_FontWeightPair', i3037[i + 0]) );
  }
  i3018.m_FontWeightTable = i3036
  var i3039 = i3019[40]
  var i3038 = []
  for(var i = 0; i < i3039.length; i += 1) {
    i3038.push( request.d('TMPro.TMP_FontWeightPair', i3039[i + 0]) );
  }
  i3018.fontWeights = i3038
  return i3018
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3040 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3041 = data
  i3040.m_FaceIndex = i3041[0]
  i3040.m_FamilyName = i3041[1]
  i3040.m_StyleName = i3041[2]
  i3040.m_PointSize = i3041[3]
  i3040.m_Scale = i3041[4]
  i3040.m_UnitsPerEM = i3041[5]
  i3040.m_LineHeight = i3041[6]
  i3040.m_AscentLine = i3041[7]
  i3040.m_CapLine = i3041[8]
  i3040.m_MeanLine = i3041[9]
  i3040.m_Baseline = i3041[10]
  i3040.m_DescentLine = i3041[11]
  i3040.m_SuperscriptOffset = i3041[12]
  i3040.m_SuperscriptSize = i3041[13]
  i3040.m_SubscriptOffset = i3041[14]
  i3040.m_SubscriptSize = i3041[15]
  i3040.m_UnderlineOffset = i3041[16]
  i3040.m_UnderlineThickness = i3041[17]
  i3040.m_StrikethroughOffset = i3041[18]
  i3040.m_StrikethroughThickness = i3041[19]
  i3040.m_TabWidth = i3041[20]
  return i3040
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3044 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3045 = data
  i3044.m_Index = i3045[0]
  i3044.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3045[1], i3044.m_Metrics)
  i3044.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3045[2], i3044.m_GlyphRect)
  i3044.m_Scale = i3045[3]
  i3044.m_AtlasIndex = i3045[4]
  i3044.m_ClassDefinitionType = i3045[5]
  return i3044
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3046 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3047 = data
  i3046.m_Width = i3047[0]
  i3046.m_Height = i3047[1]
  i3046.m_HorizontalBearingX = i3047[2]
  i3046.m_HorizontalBearingY = i3047[3]
  i3046.m_HorizontalAdvance = i3047[4]
  return i3046
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3048 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3049 = data
  i3048.m_X = i3049[0]
  i3048.m_Y = i3049[1]
  i3048.m_Width = i3049[2]
  i3048.m_Height = i3049[3]
  return i3048
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3052 = root || request.c( 'TMPro.TMP_Character' )
  var i3053 = data
  i3052.m_ElementType = i3053[0]
  i3052.m_Unicode = i3053[1]
  i3052.m_GlyphIndex = i3053[2]
  i3052.m_Scale = i3053[3]
  return i3052
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3058 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3059 = data
  i3058.Name = i3059[0]
  i3058.PointSize = i3059[1]
  i3058.Scale = i3059[2]
  i3058.CharacterCount = i3059[3]
  i3058.LineHeight = i3059[4]
  i3058.Baseline = i3059[5]
  i3058.Ascender = i3059[6]
  i3058.CapHeight = i3059[7]
  i3058.Descender = i3059[8]
  i3058.CenterLine = i3059[9]
  i3058.SuperscriptOffset = i3059[10]
  i3058.SubscriptOffset = i3059[11]
  i3058.SubSize = i3059[12]
  i3058.Underline = i3059[13]
  i3058.UnderlineThickness = i3059[14]
  i3058.strikethrough = i3059[15]
  i3058.strikethroughThickness = i3059[16]
  i3058.TabWidth = i3059[17]
  i3058.Padding = i3059[18]
  i3058.AtlasWidth = i3059[19]
  i3058.AtlasHeight = i3059[20]
  return i3058
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3062 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3063 = data
  i3062.id = i3063[0]
  i3062.x = i3063[1]
  i3062.y = i3063[2]
  i3062.width = i3063[3]
  i3062.height = i3063[4]
  i3062.xOffset = i3063[5]
  i3062.yOffset = i3063[6]
  i3062.xAdvance = i3063[7]
  i3062.scale = i3063[8]
  return i3062
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3064 = root || request.c( 'TMPro.KerningTable' )
  var i3065 = data
  var i3067 = i3065[0]
  var i3066 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3067.length; i += 1) {
    i3066.add(request.d('TMPro.KerningPair', i3067[i + 0]));
  }
  i3064.kerningPairs = i3066
  return i3064
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3070 = root || request.c( 'TMPro.KerningPair' )
  var i3071 = data
  i3070.xOffset = i3071[0]
  i3070.m_FirstGlyph = i3071[1]
  i3070.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3071[2], i3070.m_FirstGlyphAdjustments)
  i3070.m_SecondGlyph = i3071[3]
  i3070.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3071[4], i3070.m_SecondGlyphAdjustments)
  i3070.m_IgnoreSpacingAdjustments = !!i3071[5]
  return i3070
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3072 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3073 = data
  var i3075 = i3073[0]
  var i3074 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3075.length; i += 1) {
    i3074.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3075[i + 0]));
  }
  i3072.m_GlyphPairAdjustmentRecords = i3074
  return i3072
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3078 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3079 = data
  i3078.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3079[0], i3078.m_FirstAdjustmentRecord)
  i3078.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3079[1], i3078.m_SecondAdjustmentRecord)
  i3078.m_FeatureLookupFlags = i3079[2]
  return i3078
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3080 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3081 = data
  i3080.m_GlyphIndex = i3081[0]
  i3080.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3081[1], i3080.m_GlyphValueRecord)
  return i3080
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3082 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3083 = data
  i3082.m_XPlacement = i3083[0]
  i3082.m_YPlacement = i3083[1]
  i3082.m_XAdvance = i3083[2]
  i3082.m_YAdvance = i3083[3]
  return i3082
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3086 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3087 = data
  i3086.sourceFontFileName = i3087[0]
  i3086.sourceFontFileGUID = i3087[1]
  i3086.pointSizeSamplingMode = i3087[2]
  i3086.pointSize = i3087[3]
  i3086.padding = i3087[4]
  i3086.packingMode = i3087[5]
  i3086.atlasWidth = i3087[6]
  i3086.atlasHeight = i3087[7]
  i3086.characterSetSelectionMode = i3087[8]
  i3086.characterSequence = i3087[9]
  i3086.referencedFontAssetGUID = i3087[10]
  i3086.referencedTextAssetGUID = i3087[11]
  i3086.fontStyle = i3087[12]
  i3086.fontStyleModifier = i3087[13]
  i3086.renderMode = i3087[14]
  i3086.includeFontFeatures = !!i3087[15]
  return i3086
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3090 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3091 = data
  request.r(i3091[0], i3091[1], 0, i3090, 'regularTypeface')
  request.r(i3091[2], i3091[3], 0, i3090, 'italicTypeface')
  return i3090
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3092 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3093 = data
  i3092.useSafeMode = !!i3093[0]
  i3092.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3093[1], i3092.safeModeOptions)
  i3092.timeScale = i3093[2]
  i3092.unscaledTimeScale = i3093[3]
  i3092.useSmoothDeltaTime = !!i3093[4]
  i3092.maxSmoothUnscaledTime = i3093[5]
  i3092.rewindCallbackMode = i3093[6]
  i3092.showUnityEditorReport = !!i3093[7]
  i3092.logBehaviour = i3093[8]
  i3092.drawGizmos = !!i3093[9]
  i3092.defaultRecyclable = !!i3093[10]
  i3092.defaultAutoPlay = i3093[11]
  i3092.defaultUpdateType = i3093[12]
  i3092.defaultTimeScaleIndependent = !!i3093[13]
  i3092.defaultEaseType = i3093[14]
  i3092.defaultEaseOvershootOrAmplitude = i3093[15]
  i3092.defaultEasePeriod = i3093[16]
  i3092.defaultAutoKill = !!i3093[17]
  i3092.defaultLoopType = i3093[18]
  i3092.debugMode = !!i3093[19]
  i3092.debugStoreTargetId = !!i3093[20]
  i3092.showPreviewPanel = !!i3093[21]
  i3092.storeSettingsLocation = i3093[22]
  i3092.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3093[23], i3092.modules)
  i3092.createASMDEF = !!i3093[24]
  i3092.showPlayingTweens = !!i3093[25]
  i3092.showPausedTweens = !!i3093[26]
  return i3092
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3094 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3095 = data
  i3094.logBehaviour = i3095[0]
  i3094.nestedTweenFailureBehaviour = i3095[1]
  return i3094
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3096 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3097 = data
  i3096.showPanel = !!i3097[0]
  i3096.audioEnabled = !!i3097[1]
  i3096.physicsEnabled = !!i3097[2]
  i3096.physics2DEnabled = !!i3097[3]
  i3096.spriteEnabled = !!i3097[4]
  i3096.uiEnabled = !!i3097[5]
  i3096.textMeshProEnabled = !!i3097[6]
  i3096.tk2DEnabled = !!i3097[7]
  i3096.deAudioEnabled = !!i3097[8]
  i3096.deUnityExtendedEnabled = !!i3097[9]
  i3096.epoOutlineEnabled = !!i3097[10]
  return i3096
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3098 = root || request.c( 'TMPro.TMP_Settings' )
  var i3099 = data
  i3098.m_enableWordWrapping = !!i3099[0]
  i3098.m_enableKerning = !!i3099[1]
  i3098.m_enableExtraPadding = !!i3099[2]
  i3098.m_enableTintAllSprites = !!i3099[3]
  i3098.m_enableParseEscapeCharacters = !!i3099[4]
  i3098.m_EnableRaycastTarget = !!i3099[5]
  i3098.m_GetFontFeaturesAtRuntime = !!i3099[6]
  i3098.m_missingGlyphCharacter = i3099[7]
  i3098.m_warningsDisabled = !!i3099[8]
  request.r(i3099[9], i3099[10], 0, i3098, 'm_defaultFontAsset')
  i3098.m_defaultFontAssetPath = i3099[11]
  i3098.m_defaultFontSize = i3099[12]
  i3098.m_defaultAutoSizeMinRatio = i3099[13]
  i3098.m_defaultAutoSizeMaxRatio = i3099[14]
  i3098.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3099[15], i3099[16] )
  i3098.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3099[17], i3099[18] )
  i3098.m_autoSizeTextContainer = !!i3099[19]
  i3098.m_IsTextObjectScaleStatic = !!i3099[20]
  var i3101 = i3099[21]
  var i3100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3101.length; i += 2) {
  request.r(i3101[i + 0], i3101[i + 1], 1, i3100, '')
  }
  i3098.m_fallbackFontAssets = i3100
  i3098.m_matchMaterialPreset = !!i3099[22]
  request.r(i3099[23], i3099[24], 0, i3098, 'm_defaultSpriteAsset')
  i3098.m_defaultSpriteAssetPath = i3099[25]
  i3098.m_enableEmojiSupport = !!i3099[26]
  i3098.m_MissingCharacterSpriteUnicode = i3099[27]
  i3098.m_defaultColorGradientPresetsPath = i3099[28]
  request.r(i3099[29], i3099[30], 0, i3098, 'm_defaultStyleSheet')
  i3098.m_StyleSheetsResourcePath = i3099[31]
  request.r(i3099[32], i3099[33], 0, i3098, 'm_leadingCharacters')
  request.r(i3099[34], i3099[35], 0, i3098, 'm_followingCharacters')
  i3098.m_UseModernHangulLineBreakingRules = !!i3099[36]
  return i3098
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3102 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3103 = data
  i3102.hashCode = i3103[0]
  request.r(i3103[1], i3103[2], 0, i3102, 'material')
  i3102.materialHashCode = i3103[3]
  request.r(i3103[4], i3103[5], 0, i3102, 'spriteSheet')
  var i3105 = i3103[6]
  var i3104 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3105.length; i += 1) {
    i3104.add(request.d('TMPro.TMP_Sprite', i3105[i + 0]));
  }
  i3102.spriteInfoList = i3104
  var i3107 = i3103[7]
  var i3106 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3107.length; i += 2) {
  request.r(i3107[i + 0], i3107[i + 1], 1, i3106, '')
  }
  i3102.fallbackSpriteAssets = i3106
  i3102.m_Version = i3103[8]
  i3102.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3103[9], i3102.m_FaceInfo)
  var i3109 = i3103[10]
  var i3108 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3109.length; i += 1) {
    i3108.add(request.d('TMPro.TMP_SpriteCharacter', i3109[i + 0]));
  }
  i3102.m_SpriteCharacterTable = i3108
  var i3111 = i3103[11]
  var i3110 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3111.length; i += 1) {
    i3110.add(request.d('TMPro.TMP_SpriteGlyph', i3111[i + 0]));
  }
  i3102.m_SpriteGlyphTable = i3110
  return i3102
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3114 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3115 = data
  i3114.name = i3115[0]
  i3114.hashCode = i3115[1]
  i3114.unicode = i3115[2]
  i3114.pivot = new pc.Vec2( i3115[3], i3115[4] )
  request.r(i3115[5], i3115[6], 0, i3114, 'sprite')
  i3114.id = i3115[7]
  i3114.x = i3115[8]
  i3114.y = i3115[9]
  i3114.width = i3115[10]
  i3114.height = i3115[11]
  i3114.xOffset = i3115[12]
  i3114.yOffset = i3115[13]
  i3114.xAdvance = i3115[14]
  i3114.scale = i3115[15]
  return i3114
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3120 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3121 = data
  i3120.m_Name = i3121[0]
  i3120.m_HashCode = i3121[1]
  i3120.m_ElementType = i3121[2]
  i3120.m_Unicode = i3121[3]
  i3120.m_GlyphIndex = i3121[4]
  i3120.m_Scale = i3121[5]
  return i3120
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3124 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3125 = data
  request.r(i3125[0], i3125[1], 0, i3124, 'sprite')
  i3124.m_Index = i3125[2]
  i3124.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3125[3], i3124.m_Metrics)
  i3124.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3125[4], i3124.m_GlyphRect)
  i3124.m_Scale = i3125[5]
  i3124.m_AtlasIndex = i3125[6]
  i3124.m_ClassDefinitionType = i3125[7]
  return i3124
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3126 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3127 = data
  var i3129 = i3127[0]
  var i3128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3129.length; i += 1) {
    i3128.add(request.d('TMPro.TMP_Style', i3129[i + 0]));
  }
  i3126.m_StyleList = i3128
  return i3126
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3132 = root || request.c( 'TMPro.TMP_Style' )
  var i3133 = data
  i3132.m_Name = i3133[0]
  i3132.m_HashCode = i3133[1]
  i3132.m_OpeningDefinition = i3133[2]
  i3132.m_ClosingDefinition = i3133[3]
  i3132.m_OpeningTagArray = i3133[4]
  i3132.m_ClosingTagArray = i3133[5]
  i3132.m_OpeningTagUnicodeArray = i3133[6]
  i3132.m_ClosingTagUnicodeArray = i3133[7]
  return i3132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3135 = data
  var i3137 = i3135[0]
  var i3136 = []
  for(var i = 0; i < i3137.length; i += 1) {
    i3136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3137[i + 0]) );
  }
  i3134.files = i3136
  i3134.componentToPrefabIds = i3135[1]
  return i3134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3141 = data
  i3140.path = i3141[0]
  request.r(i3141[1], i3141[2], 0, i3140, 'unityObject')
  return i3140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3143 = data
  var i3145 = i3143[0]
  var i3144 = []
  for(var i = 0; i < i3145.length; i += 1) {
    i3144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3145[i + 0]) );
  }
  i3142.scriptsExecutionOrder = i3144
  var i3147 = i3143[1]
  var i3146 = []
  for(var i = 0; i < i3147.length; i += 1) {
    i3146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3147[i + 0]) );
  }
  i3142.sortingLayers = i3146
  var i3149 = i3143[2]
  var i3148 = []
  for(var i = 0; i < i3149.length; i += 1) {
    i3148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3149[i + 0]) );
  }
  i3142.cullingLayers = i3148
  i3142.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3143[3], i3142.timeSettings)
  i3142.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3143[4], i3142.physicsSettings)
  i3142.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3143[5], i3142.physics2DSettings)
  i3142.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3143[6], i3142.qualitySettings)
  i3142.enableRealtimeShadows = !!i3143[7]
  i3142.enableAutoInstancing = !!i3143[8]
  i3142.enableDynamicBatching = !!i3143[9]
  i3142.lightmapEncodingQuality = i3143[10]
  i3142.desiredColorSpace = i3143[11]
  var i3151 = i3143[12]
  var i3150 = []
  for(var i = 0; i < i3151.length; i += 1) {
    i3150.push( i3151[i + 0] );
  }
  i3142.allTags = i3150
  return i3142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3155 = data
  i3154.name = i3155[0]
  i3154.value = i3155[1]
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3159 = data
  i3158.id = i3159[0]
  i3158.name = i3159[1]
  i3158.value = i3159[2]
  return i3158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3163 = data
  i3162.id = i3163[0]
  i3162.name = i3163[1]
  return i3162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3165 = data
  i3164.fixedDeltaTime = i3165[0]
  i3164.maximumDeltaTime = i3165[1]
  i3164.timeScale = i3165[2]
  i3164.maximumParticleTimestep = i3165[3]
  return i3164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3167 = data
  i3166.gravity = new pc.Vec3( i3167[0], i3167[1], i3167[2] )
  i3166.defaultSolverIterations = i3167[3]
  i3166.bounceThreshold = i3167[4]
  i3166.autoSyncTransforms = !!i3167[5]
  i3166.autoSimulation = !!i3167[6]
  var i3169 = i3167[7]
  var i3168 = []
  for(var i = 0; i < i3169.length; i += 1) {
    i3168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3169[i + 0]) );
  }
  i3166.collisionMatrix = i3168
  return i3166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3173 = data
  i3172.enabled = !!i3173[0]
  i3172.layerId = i3173[1]
  i3172.otherLayerId = i3173[2]
  return i3172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3175 = data
  request.r(i3175[0], i3175[1], 0, i3174, 'material')
  i3174.gravity = new pc.Vec2( i3175[2], i3175[3] )
  i3174.positionIterations = i3175[4]
  i3174.velocityIterations = i3175[5]
  i3174.velocityThreshold = i3175[6]
  i3174.maxLinearCorrection = i3175[7]
  i3174.maxAngularCorrection = i3175[8]
  i3174.maxTranslationSpeed = i3175[9]
  i3174.maxRotationSpeed = i3175[10]
  i3174.baumgarteScale = i3175[11]
  i3174.baumgarteTOIScale = i3175[12]
  i3174.timeToSleep = i3175[13]
  i3174.linearSleepTolerance = i3175[14]
  i3174.angularSleepTolerance = i3175[15]
  i3174.defaultContactOffset = i3175[16]
  i3174.autoSimulation = !!i3175[17]
  i3174.queriesHitTriggers = !!i3175[18]
  i3174.queriesStartInColliders = !!i3175[19]
  i3174.callbacksOnDisable = !!i3175[20]
  i3174.reuseCollisionCallbacks = !!i3175[21]
  i3174.autoSyncTransforms = !!i3175[22]
  var i3177 = i3175[23]
  var i3176 = []
  for(var i = 0; i < i3177.length; i += 1) {
    i3176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3177[i + 0]) );
  }
  i3174.collisionMatrix = i3176
  return i3174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3181 = data
  i3180.enabled = !!i3181[0]
  i3180.layerId = i3181[1]
  i3180.otherLayerId = i3181[2]
  return i3180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3183 = data
  var i3185 = i3183[0]
  var i3184 = []
  for(var i = 0; i < i3185.length; i += 1) {
    i3184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3185[i + 0]) );
  }
  i3182.qualityLevels = i3184
  var i3187 = i3183[1]
  var i3186 = []
  for(var i = 0; i < i3187.length; i += 1) {
    i3186.push( i3187[i + 0] );
  }
  i3182.names = i3186
  i3182.shadows = i3183[2]
  i3182.anisotropicFiltering = i3183[3]
  i3182.antiAliasing = i3183[4]
  i3182.lodBias = i3183[5]
  i3182.shadowCascades = i3183[6]
  i3182.shadowDistance = i3183[7]
  i3182.shadowmaskMode = i3183[8]
  i3182.shadowProjection = i3183[9]
  i3182.shadowResolution = i3183[10]
  i3182.softParticles = !!i3183[11]
  i3182.softVegetation = !!i3183[12]
  i3182.activeColorSpace = i3183[13]
  i3182.desiredColorSpace = i3183[14]
  i3182.masterTextureLimit = i3183[15]
  i3182.maxQueuedFrames = i3183[16]
  i3182.particleRaycastBudget = i3183[17]
  i3182.pixelLightCount = i3183[18]
  i3182.realtimeReflectionProbes = !!i3183[19]
  i3182.shadowCascade2Split = i3183[20]
  i3182.shadowCascade4Split = new pc.Vec3( i3183[21], i3183[22], i3183[23] )
  i3182.streamingMipmapsActive = !!i3183[24]
  i3182.vSyncCount = i3183[25]
  i3182.asyncUploadBufferSize = i3183[26]
  i3182.asyncUploadTimeSlice = i3183[27]
  i3182.billboardsFaceCameraPosition = !!i3183[28]
  i3182.shadowNearPlaneOffset = i3183[29]
  i3182.streamingMipmapsMemoryBudget = i3183[30]
  i3182.maximumLODLevel = i3183[31]
  i3182.streamingMipmapsAddAllCameras = !!i3183[32]
  i3182.streamingMipmapsMaxLevelReduction = i3183[33]
  i3182.streamingMipmapsRenderersPerFrame = i3183[34]
  i3182.resolutionScalingFixedDPIFactor = i3183[35]
  i3182.streamingMipmapsMaxFileIORequests = i3183[36]
  i3182.currentQualityLevel = i3183[37]
  return i3182
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3190 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3191 = data
  i3190.xPlacement = i3191[0]
  i3190.yPlacement = i3191[1]
  i3190.xAdvance = i3191[2]
  i3190.yAdvance = i3191[3]
  return i3190
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[12],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[12],"78":[79],"80":[81],"82":[81],"19":[2],"34":[16],"83":[2],"84":[85],"86":[87],"88":[85],"89":[2],"90":[2],"21":[19],"6":[3,2],"91":[2],"20":[19],"30":[2],"92":[2],"93":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[3,2],"101":[2],"102":[2],"103":[2],"104":[2],"105":[3,2],"106":[2],"107":[36],"108":[36],"37":[36],"109":[36],"110":[12],"111":[12],"112":[113],"114":[12],"115":[2],"116":[79,2],"17":[2,3],"117":[2],"118":[3,2],"119":[79],"120":[3,2],"121":[2],"122":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","TMPro.TMP_FontAsset","UnityEngine.Material","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "5.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "BeachVersion";

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

Deserializers.buildID = "50520dc0-fdfd-41f9-8200-3740b6b31bc9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

