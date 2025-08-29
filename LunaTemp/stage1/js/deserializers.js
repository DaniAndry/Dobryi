var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2610 = root || request.c( 'UnityEngine.JointSpring' )
  var i2611 = data
  i2610.spring = i2611[0]
  i2610.damper = i2611[1]
  i2610.targetPosition = i2611[2]
  return i2610
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2612 = root || request.c( 'UnityEngine.JointMotor' )
  var i2613 = data
  i2612.m_TargetVelocity = i2613[0]
  i2612.m_Force = i2613[1]
  i2612.m_FreeSpin = i2613[2]
  return i2612
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2614 = root || request.c( 'UnityEngine.JointLimits' )
  var i2615 = data
  i2614.m_Min = i2615[0]
  i2614.m_Max = i2615[1]
  i2614.m_Bounciness = i2615[2]
  i2614.m_BounceMinVelocity = i2615[3]
  i2614.m_ContactDistance = i2615[4]
  i2614.minBounce = i2615[5]
  i2614.maxBounce = i2615[6]
  return i2614
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2616 = root || request.c( 'UnityEngine.JointDrive' )
  var i2617 = data
  i2616.m_PositionSpring = i2617[0]
  i2616.m_PositionDamper = i2617[1]
  i2616.m_MaximumForce = i2617[2]
  i2616.m_UseAcceleration = i2617[3]
  return i2616
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2618 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2619 = data
  i2618.m_Spring = i2619[0]
  i2618.m_Damper = i2619[1]
  return i2618
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2620 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2621 = data
  i2620.m_Limit = i2621[0]
  i2620.m_Bounciness = i2621[1]
  i2620.m_ContactDistance = i2621[2]
  return i2620
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2622 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2623 = data
  i2622.m_ExtremumSlip = i2623[0]
  i2622.m_ExtremumValue = i2623[1]
  i2622.m_AsymptoteSlip = i2623[2]
  i2622.m_AsymptoteValue = i2623[3]
  i2622.m_Stiffness = i2623[4]
  return i2622
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2624 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2625 = data
  i2624.m_LowerAngle = i2625[0]
  i2624.m_UpperAngle = i2625[1]
  return i2624
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2626 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2627 = data
  i2626.m_MotorSpeed = i2627[0]
  i2626.m_MaximumMotorTorque = i2627[1]
  return i2626
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2628 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2629 = data
  i2628.m_DampingRatio = i2629[0]
  i2628.m_Frequency = i2629[1]
  i2628.m_Angle = i2629[2]
  return i2628
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2630 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2631 = data
  i2630.m_LowerTranslation = i2631[0]
  i2630.m_UpperTranslation = i2631[1]
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2633 = data
  i2632.name = i2633[0]
  i2632.width = i2633[1]
  i2632.height = i2633[2]
  i2632.mipmapCount = i2633[3]
  i2632.anisoLevel = i2633[4]
  i2632.filterMode = i2633[5]
  i2632.hdr = !!i2633[6]
  i2632.format = i2633[7]
  i2632.wrapMode = i2633[8]
  i2632.alphaIsTransparency = !!i2633[9]
  i2632.alphaSource = i2633[10]
  i2632.graphicsFormat = i2633[11]
  i2632.sRGBTexture = !!i2633[12]
  i2632.desiredColorSpace = i2633[13]
  i2632.wrapU = i2633[14]
  i2632.wrapV = i2633[15]
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2634 = root || new pc.UnityMaterial()
  var i2635 = data
  i2634.name = i2635[0]
  request.r(i2635[1], i2635[2], 0, i2634, 'shader')
  i2634.renderQueue = i2635[3]
  i2634.enableInstancing = !!i2635[4]
  var i2637 = i2635[5]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2637[i + 0]) );
  }
  i2634.floatParameters = i2636
  var i2639 = i2635[6]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2639[i + 0]) );
  }
  i2634.colorParameters = i2638
  var i2641 = i2635[7]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2641[i + 0]) );
  }
  i2634.vectorParameters = i2640
  var i2643 = i2635[8]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2643[i + 0]) );
  }
  i2634.textureParameters = i2642
  var i2645 = i2635[9]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2645[i + 0]) );
  }
  i2634.materialFlags = i2644
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2649 = data
  i2648.name = i2649[0]
  i2648.value = i2649[1]
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2653 = data
  i2652.name = i2653[0]
  i2652.value = new pc.Color(i2653[1], i2653[2], i2653[3], i2653[4])
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2657 = data
  i2656.name = i2657[0]
  i2656.value = new pc.Vec4( i2657[1], i2657[2], i2657[3], i2657[4] )
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2661 = data
  i2660.name = i2661[0]
  request.r(i2661[1], i2661[2], 0, i2660, 'value')
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2665 = data
  i2664.name = i2665[0]
  i2664.enabled = !!i2665[1]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2667 = data
  i2666.pivot = new pc.Vec2( i2667[0], i2667[1] )
  i2666.anchorMin = new pc.Vec2( i2667[2], i2667[3] )
  i2666.anchorMax = new pc.Vec2( i2667[4], i2667[5] )
  i2666.sizeDelta = new pc.Vec2( i2667[6], i2667[7] )
  i2666.anchoredPosition3D = new pc.Vec3( i2667[8], i2667[9], i2667[10] )
  i2666.rotation = new pc.Quat(i2667[11], i2667[12], i2667[13], i2667[14])
  i2666.scale = new pc.Vec3( i2667[15], i2667[16], i2667[17] )
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2669 = data
  i2668.cullTransparentMesh = !!i2669[0]
  return i2668
}

Deserializers["People"] = function (request, data, root) {
  var i2670 = root || request.c( 'People' )
  var i2671 = data
  request.r(i2671[0], i2671[1], 0, i2670, '_readyImage')
  request.r(i2671[2], i2671[3], 0, i2670, '_additiveImage1')
  request.r(i2671[4], i2671[5], 0, i2670, '_additiveImage2')
  request.r(i2671[6], i2671[7], 0, i2670, '_endPoint')
  request.r(i2671[8], i2671[9], 0, i2670, 'Bank')
  request.r(i2671[10], i2671[11], 0, i2670, '_sizeText')
  i2670.CupType = i2671[12]
  i2670.JuiceType = i2671[13]
  i2670.AdditiveType1 = i2671[14]
  i2670.AdditiveType2 = i2671[15]
  request.r(i2671[16], i2671[17], 0, i2670, '_finishSound')
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2673 = data
  request.r(i2673[0], i2673[1], 0, i2672, 'clip')
  request.r(i2673[2], i2673[3], 0, i2672, 'outputAudioMixerGroup')
  i2672.playOnAwake = !!i2673[4]
  i2672.loop = !!i2673[5]
  i2672.time = i2673[6]
  i2672.volume = i2673[7]
  i2672.pitch = i2673[8]
  i2672.enabled = !!i2673[9]
  return i2672
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2674 = root || request.c( 'UnityEngine.UI.Image' )
  var i2675 = data
  request.r(i2675[0], i2675[1], 0, i2674, 'm_Sprite')
  i2674.m_Type = i2675[2]
  i2674.m_PreserveAspect = !!i2675[3]
  i2674.m_FillCenter = !!i2675[4]
  i2674.m_FillMethod = i2675[5]
  i2674.m_FillAmount = i2675[6]
  i2674.m_FillClockwise = !!i2675[7]
  i2674.m_FillOrigin = i2675[8]
  i2674.m_UseSpriteMesh = !!i2675[9]
  i2674.m_PixelsPerUnitMultiplier = i2675[10]
  request.r(i2675[11], i2675[12], 0, i2674, 'm_Material')
  i2674.m_Maskable = !!i2675[13]
  i2674.m_Color = new pc.Color(i2675[14], i2675[15], i2675[16], i2675[17])
  i2674.m_RaycastTarget = !!i2675[18]
  i2674.m_RaycastPadding = new pc.Vec4( i2675[19], i2675[20], i2675[21], i2675[22] )
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2677 = data
  i2676.name = i2677[0]
  i2676.tagId = i2677[1]
  i2676.enabled = !!i2677[2]
  i2676.isStatic = !!i2677[3]
  i2676.layer = i2677[4]
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2679 = data
  i2678.name = i2679[0]
  i2678.index = i2679[1]
  i2678.startup = !!i2679[2]
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2681 = data
  i2680.position = new pc.Vec3( i2681[0], i2681[1], i2681[2] )
  i2680.scale = new pc.Vec3( i2681[3], i2681[4], i2681[5] )
  i2680.rotation = new pc.Quat(i2681[6], i2681[7], i2681[8], i2681[9])
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2683 = data
  i2682.enabled = !!i2683[0]
  i2682.aspect = i2683[1]
  i2682.orthographic = !!i2683[2]
  i2682.orthographicSize = i2683[3]
  i2682.backgroundColor = new pc.Color(i2683[4], i2683[5], i2683[6], i2683[7])
  i2682.nearClipPlane = i2683[8]
  i2682.farClipPlane = i2683[9]
  i2682.fieldOfView = i2683[10]
  i2682.depth = i2683[11]
  i2682.clearFlags = i2683[12]
  i2682.cullingMask = i2683[13]
  i2682.rect = i2683[14]
  request.r(i2683[15], i2683[16], 0, i2682, 'targetTexture')
  i2682.usePhysicalProperties = !!i2683[17]
  i2682.focalLength = i2683[18]
  i2682.sensorSize = new pc.Vec2( i2683[19], i2683[20] )
  i2682.lensShift = new pc.Vec2( i2683[21], i2683[22] )
  i2682.gateFit = i2683[23]
  i2682.commandBufferCount = i2683[24]
  i2682.cameraType = i2683[25]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2685 = data
  request.r(i2685[0], i2685[1], 0, i2684, 'animatorController')
  request.r(i2685[2], i2685[3], 0, i2684, 'avatar')
  i2684.updateMode = i2685[4]
  i2684.hasTransformHierarchy = !!i2685[5]
  i2684.applyRootMotion = !!i2685[6]
  var i2687 = i2685[7]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 2) {
  request.r(i2687[i + 0], i2687[i + 1], 2, i2686, '')
  }
  i2684.humanBones = i2686
  i2684.enabled = !!i2685[8]
  return i2684
}

Deserializers["Bank"] = function (request, data, root) {
  var i2690 = root || request.c( 'Bank' )
  var i2691 = data
  request.r(i2691[0], i2691[1], 0, i2690, 'BuyBigCupButton')
  request.r(i2691[2], i2691[3], 0, i2690, 'BigCupButton')
  request.r(i2691[4], i2691[5], 0, i2690, 'MiddleCupButton')
  request.r(i2691[6], i2691[7], 0, i2690, 'MoneyText')
  request.r(i2691[8], i2691[9], 0, i2690, 'Tutorial')
  request.r(i2691[10], i2691[11], 0, i2690, 'BuyAdditiveButton')
  request.r(i2691[12], i2691[13], 0, i2690, 'BuyJuiceButton')
  request.r(i2691[14], i2691[15], 0, i2690, 'JuiceButton1')
  request.r(i2691[16], i2691[17], 0, i2690, 'JuiceButton2')
  request.r(i2691[18], i2691[19], 0, i2690, 'JuiceButton3')
  request.r(i2691[20], i2691[21], 0, i2690, 'Additive1Button')
  request.r(i2691[22], i2691[23], 0, i2690, 'Additive2Button')
  i2690.Money = i2691[24]
  i2690.IsBigCupBuy = !!i2691[25]
  i2690.IsJuiceBuy = !!i2691[26]
  i2690.IsAdditiveBuy = !!i2691[27]
  request.r(i2691[28], i2691[29], 0, i2690, '_buySound')
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2693 = data
  i2692.enabled = !!i2693[0]
  i2692.planeDistance = i2693[1]
  i2692.referencePixelsPerUnit = i2693[2]
  i2692.isFallbackOverlay = !!i2693[3]
  i2692.renderMode = i2693[4]
  i2692.renderOrder = i2693[5]
  i2692.sortingLayerName = i2693[6]
  i2692.sortingOrder = i2693[7]
  i2692.scaleFactor = i2693[8]
  request.r(i2693[9], i2693[10], 0, i2692, 'worldCamera')
  i2692.overrideSorting = !!i2693[11]
  i2692.pixelPerfect = !!i2693[12]
  i2692.targetDisplay = i2693[13]
  i2692.overridePixelPerfect = !!i2693[14]
  return i2692
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2694 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2695 = data
  i2694.m_UiScaleMode = i2695[0]
  i2694.m_ReferencePixelsPerUnit = i2695[1]
  i2694.m_ScaleFactor = i2695[2]
  i2694.m_ReferenceResolution = new pc.Vec2( i2695[3], i2695[4] )
  i2694.m_ScreenMatchMode = i2695[5]
  i2694.m_MatchWidthOrHeight = i2695[6]
  i2694.m_PhysicalUnit = i2695[7]
  i2694.m_FallbackScreenDPI = i2695[8]
  i2694.m_DefaultSpriteDPI = i2695[9]
  i2694.m_DynamicPixelsPerUnit = i2695[10]
  i2694.m_PresetInfoIsWorld = !!i2695[11]
  return i2694
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2696 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2697 = data
  i2696.m_IgnoreReversedGraphics = !!i2697[0]
  i2696.m_BlockingObjects = i2697[1]
  i2696.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2697[2] )
  return i2696
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i2698 = root || request.c( 'ImageShiftOnOrientation' )
  var i2699 = data
  var i2701 = i2699[0]
  var i2700 = []
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.push( request.d('ItemSwitcherData', i2701[i + 0]) );
  }
  i2698.Items = i2700
  request.r(i2699[1], i2699[2], 0, i2698, '_backHorizontal')
  request.r(i2699[3], i2699[4], 0, i2698, '_backVertical')
  request.r(i2699[5], i2699[6], 0, i2698, '_tableHorizontal')
  request.r(i2699[7], i2699[8], 0, i2698, '_tableVertical')
  i2698.IsDebug = !!i2699[9]
  i2698.CanCopy = !!i2699[10]
  return i2698
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i2704 = root || request.c( 'ItemSwitcherData' )
  var i2705 = data
  request.r(i2705[0], i2705[1], 0, i2704, 'Target')
  i2704.HorizontalAnchoredPosition = new pc.Vec2( i2705[2], i2705[3] )
  i2704.SizeHorizontal = new pc.Vec2( i2705[4], i2705[5] )
  i2704.VerticalAnchoredPosition = new pc.Vec2( i2705[6], i2705[7] )
  i2704.SizeVertical = new pc.Vec2( i2705[8], i2705[9] )
  i2704.MinHorizontal = new pc.Vec2( i2705[10], i2705[11] )
  i2704.MaxHorizontal = new pc.Vec2( i2705[12], i2705[13] )
  i2704.MinVertical = new pc.Vec2( i2705[14], i2705[15] )
  i2704.MaxVertical = new pc.Vec2( i2705[16], i2705[17] )
  i2704.IsAnchored = !!i2705[18]
  i2704.IsDebug = !!i2705[19]
  i2704.CopyHorizontal = !!i2705[20]
  i2704.CopyVertical = !!i2705[21]
  return i2704
}

Deserializers["Point"] = function (request, data, root) {
  var i2706 = root || request.c( 'Point' )
  var i2707 = data
  return i2706
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2708 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2709 = data
  i2708.m_hasFontAssetChanged = !!i2709[0]
  request.r(i2709[1], i2709[2], 0, i2708, 'm_baseMaterial')
  i2708.m_maskOffset = new pc.Vec4( i2709[3], i2709[4], i2709[5], i2709[6] )
  i2708.m_text = i2709[7]
  i2708.m_isRightToLeft = !!i2709[8]
  request.r(i2709[9], i2709[10], 0, i2708, 'm_fontAsset')
  request.r(i2709[11], i2709[12], 0, i2708, 'm_sharedMaterial')
  var i2711 = i2709[13]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 2) {
  request.r(i2711[i + 0], i2711[i + 1], 2, i2710, '')
  }
  i2708.m_fontSharedMaterials = i2710
  request.r(i2709[14], i2709[15], 0, i2708, 'm_fontMaterial')
  var i2713 = i2709[16]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 2) {
  request.r(i2713[i + 0], i2713[i + 1], 2, i2712, '')
  }
  i2708.m_fontMaterials = i2712
  i2708.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2709[17], i2709[18], i2709[19], i2709[20])
  i2708.m_fontColor = new pc.Color(i2709[21], i2709[22], i2709[23], i2709[24])
  i2708.m_enableVertexGradient = !!i2709[25]
  i2708.m_colorMode = i2709[26]
  i2708.m_fontColorGradient = request.d('TMPro.VertexGradient', i2709[27], i2708.m_fontColorGradient)
  request.r(i2709[28], i2709[29], 0, i2708, 'm_fontColorGradientPreset')
  request.r(i2709[30], i2709[31], 0, i2708, 'm_spriteAsset')
  i2708.m_tintAllSprites = !!i2709[32]
  request.r(i2709[33], i2709[34], 0, i2708, 'm_StyleSheet')
  i2708.m_TextStyleHashCode = i2709[35]
  i2708.m_overrideHtmlColors = !!i2709[36]
  i2708.m_faceColor = UnityEngine.Color32.ConstructColor(i2709[37], i2709[38], i2709[39], i2709[40])
  i2708.m_fontSize = i2709[41]
  i2708.m_fontSizeBase = i2709[42]
  i2708.m_fontWeight = i2709[43]
  i2708.m_enableAutoSizing = !!i2709[44]
  i2708.m_fontSizeMin = i2709[45]
  i2708.m_fontSizeMax = i2709[46]
  i2708.m_fontStyle = i2709[47]
  i2708.m_HorizontalAlignment = i2709[48]
  i2708.m_VerticalAlignment = i2709[49]
  i2708.m_textAlignment = i2709[50]
  i2708.m_characterSpacing = i2709[51]
  i2708.m_wordSpacing = i2709[52]
  i2708.m_lineSpacing = i2709[53]
  i2708.m_lineSpacingMax = i2709[54]
  i2708.m_paragraphSpacing = i2709[55]
  i2708.m_charWidthMaxAdj = i2709[56]
  i2708.m_enableWordWrapping = !!i2709[57]
  i2708.m_wordWrappingRatios = i2709[58]
  i2708.m_overflowMode = i2709[59]
  request.r(i2709[60], i2709[61], 0, i2708, 'm_linkedTextComponent')
  request.r(i2709[62], i2709[63], 0, i2708, 'parentLinkedComponent')
  i2708.m_enableKerning = !!i2709[64]
  i2708.m_enableExtraPadding = !!i2709[65]
  i2708.checkPaddingRequired = !!i2709[66]
  i2708.m_isRichText = !!i2709[67]
  i2708.m_parseCtrlCharacters = !!i2709[68]
  i2708.m_isOrthographic = !!i2709[69]
  i2708.m_isCullingEnabled = !!i2709[70]
  i2708.m_horizontalMapping = i2709[71]
  i2708.m_verticalMapping = i2709[72]
  i2708.m_uvLineOffset = i2709[73]
  i2708.m_geometrySortingOrder = i2709[74]
  i2708.m_IsTextObjectScaleStatic = !!i2709[75]
  i2708.m_VertexBufferAutoSizeReduction = !!i2709[76]
  i2708.m_useMaxVisibleDescender = !!i2709[77]
  i2708.m_pageToDisplay = i2709[78]
  i2708.m_margin = new pc.Vec4( i2709[79], i2709[80], i2709[81], i2709[82] )
  i2708.m_isUsingLegacyAnimationComponent = !!i2709[83]
  i2708.m_isVolumetricText = !!i2709[84]
  request.r(i2709[85], i2709[86], 0, i2708, 'm_Material')
  i2708.m_Maskable = !!i2709[87]
  i2708.m_Color = new pc.Color(i2709[88], i2709[89], i2709[90], i2709[91])
  i2708.m_RaycastTarget = !!i2709[92]
  i2708.m_RaycastPadding = new pc.Vec4( i2709[93], i2709[94], i2709[95], i2709[96] )
  return i2708
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2716 = root || request.c( 'TMPro.VertexGradient' )
  var i2717 = data
  i2716.topLeft = new pc.Color(i2717[0], i2717[1], i2717[2], i2717[3])
  i2716.topRight = new pc.Color(i2717[4], i2717[5], i2717[6], i2717[7])
  i2716.bottomLeft = new pc.Color(i2717[8], i2717[9], i2717[10], i2717[11])
  i2716.bottomRight = new pc.Color(i2717[12], i2717[13], i2717[14], i2717[15])
  return i2716
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i2718 = root || request.c( 'PeopleContainer' )
  var i2719 = data
  var i2721 = i2719[0]
  var i2720 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i2721.length; i += 2) {
  request.r(i2721[i + 0], i2721[i + 1], 1, i2720, '')
  }
  i2718.CurrentPeoples = i2720
  var i2723 = i2719[1]
  var i2722 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i2723.length; i += 2) {
  request.r(i2723[i + 0], i2723[i + 1], 1, i2722, '')
  }
  i2718._peoples = i2722
  request.r(i2719[2], i2719[3], 0, i2718, '_tutorialPeople')
  request.r(i2719[4], i2719[5], 0, i2718, '_spawnPoint')
  request.r(i2719[6], i2719[7], 0, i2718, '_point1')
  request.r(i2719[8], i2719[9], 0, i2718, '_point2')
  request.r(i2719[10], i2719[11], 0, i2718, '_endPoint')
  request.r(i2719[12], i2719[13], 0, i2718, '_juiceConfig')
  request.r(i2719[14], i2719[15], 0, i2718, '_tutorial')
  return i2718
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2726 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2727 = data
  i2726.m_HorizontalFit = i2727[0]
  i2726.m_VerticalFit = i2727[1]
  return i2726
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2728 = root || request.c( 'UnityEngine.UI.Button' )
  var i2729 = data
  i2728.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2729[0], i2728.m_OnClick)
  i2728.m_Navigation = request.d('UnityEngine.UI.Navigation', i2729[1], i2728.m_Navigation)
  i2728.m_Transition = i2729[2]
  i2728.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2729[3], i2728.m_Colors)
  i2728.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2729[4], i2728.m_SpriteState)
  i2728.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2729[5], i2728.m_AnimationTriggers)
  i2728.m_Interactable = !!i2729[6]
  request.r(i2729[7], i2729[8], 0, i2728, 'm_TargetGraphic')
  return i2728
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2730 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2731 = data
  i2730.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2731[0], i2730.m_PersistentCalls)
  return i2730
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2732 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2733 = data
  var i2735 = i2733[0]
  var i2734 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.add(request.d('UnityEngine.Events.PersistentCall', i2735[i + 0]));
  }
  i2732.m_Calls = i2734
  return i2732
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2738 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2739 = data
  request.r(i2739[0], i2739[1], 0, i2738, 'm_Target')
  i2738.m_TargetAssemblyTypeName = i2739[2]
  i2738.m_MethodName = i2739[3]
  i2738.m_Mode = i2739[4]
  i2738.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2739[5], i2738.m_Arguments)
  i2738.m_CallState = i2739[6]
  return i2738
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2740 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2741 = data
  i2740.m_Mode = i2741[0]
  i2740.m_WrapAround = !!i2741[1]
  request.r(i2741[2], i2741[3], 0, i2740, 'm_SelectOnUp')
  request.r(i2741[4], i2741[5], 0, i2740, 'm_SelectOnDown')
  request.r(i2741[6], i2741[7], 0, i2740, 'm_SelectOnLeft')
  request.r(i2741[8], i2741[9], 0, i2740, 'm_SelectOnRight')
  return i2740
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2742 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2743 = data
  i2742.m_NormalColor = new pc.Color(i2743[0], i2743[1], i2743[2], i2743[3])
  i2742.m_HighlightedColor = new pc.Color(i2743[4], i2743[5], i2743[6], i2743[7])
  i2742.m_PressedColor = new pc.Color(i2743[8], i2743[9], i2743[10], i2743[11])
  i2742.m_SelectedColor = new pc.Color(i2743[12], i2743[13], i2743[14], i2743[15])
  i2742.m_DisabledColor = new pc.Color(i2743[16], i2743[17], i2743[18], i2743[19])
  i2742.m_ColorMultiplier = i2743[20]
  i2742.m_FadeDuration = i2743[21]
  return i2742
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2744 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2745 = data
  request.r(i2745[0], i2745[1], 0, i2744, 'm_HighlightedSprite')
  request.r(i2745[2], i2745[3], 0, i2744, 'm_PressedSprite')
  request.r(i2745[4], i2745[5], 0, i2744, 'm_SelectedSprite')
  request.r(i2745[6], i2745[7], 0, i2744, 'm_DisabledSprite')
  return i2744
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2746 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2747 = data
  i2746.m_NormalTrigger = i2747[0]
  i2746.m_HighlightedTrigger = i2747[1]
  i2746.m_PressedTrigger = i2747[2]
  i2746.m_SelectedTrigger = i2747[3]
  i2746.m_DisabledTrigger = i2747[4]
  return i2746
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2748 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2749 = data
  request.r(i2749[0], i2749[1], 0, i2748, 'm_ObjectArgument')
  i2748.m_ObjectArgumentAssemblyTypeName = i2749[2]
  i2748.m_IntArgument = i2749[3]
  i2748.m_FloatArgument = i2749[4]
  i2748.m_StringArgument = i2749[5]
  i2748.m_BoolArgument = !!i2749[6]
  return i2748
}

Deserializers["BackImage"] = function (request, data, root) {
  var i2750 = root || request.c( 'BackImage' )
  var i2751 = data
  return i2750
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i2752 = root || request.c( 'AheadImage' )
  var i2753 = data
  return i2752
}

Deserializers["Order"] = function (request, data, root) {
  var i2754 = root || request.c( 'Order' )
  var i2755 = data
  request.r(i2755[0], i2755[1], 0, i2754, '_juiceAnimator')
  request.r(i2755[2], i2755[3], 0, i2754, '_cupAnimator')
  request.r(i2755[4], i2755[5], 0, i2754, '_canvasAnimator')
  i2754.CupType = i2755[6]
  i2754.JuiceType = i2755[7]
  i2754.AdditiveType1 = i2755[8]
  i2754.AdditiveType2 = i2755[9]
  i2754.IsFree = !!i2755[10]
  i2754.IsSpriteReady = !!i2755[11]
  i2754.IsCupReady = !!i2755[12]
  i2754.IsJuiceReady = !!i2755[13]
  i2754.IsPouring = !!i2755[14]
  i2754.IsJuiceMakerUsed = !!i2755[15]
  request.r(i2755[16], i2755[17], 0, i2754, '_iceButton')
  request.r(i2755[18], i2755[19], 0, i2754, '_grassButton')
  request.r(i2755[20], i2755[21], 0, i2754, '_juiceBallsButton')
  request.r(i2755[22], i2755[23], 0, i2754, '_strawButton')
  request.r(i2755[24], i2755[25], 0, i2754, '_bigCupButton')
  request.r(i2755[26], i2755[27], 0, i2754, '_middleCupButton')
  request.r(i2755[28], i2755[29], 0, i2754, '_smallCupButton')
  request.r(i2755[30], i2755[31], 0, i2754, '_appleButton')
  request.r(i2755[32], i2755[33], 0, i2754, '_orangeButton')
  request.r(i2755[34], i2755[35], 0, i2754, '_multifruitButton')
  request.r(i2755[36], i2755[37], 0, i2754, '_tomatoButton')
  request.r(i2755[38], i2755[39], 0, i2754, '_cherryButton')
  request.r(i2755[40], i2755[41], 0, i2754, '_smallRawJuiceImage')
  request.r(i2755[42], i2755[43], 0, i2754, '_middleRawJuiceImage')
  request.r(i2755[44], i2755[45], 0, i2754, '_bigRawJuiceImage')
  request.r(i2755[46], i2755[47], 0, i2754, '_smallReadyJuiceImage')
  request.r(i2755[48], i2755[49], 0, i2754, '_middleReadyJuiceImage')
  request.r(i2755[50], i2755[51], 0, i2754, '_bigReadyJuiceImage')
  request.r(i2755[52], i2755[53], 0, i2754, '_backImage')
  request.r(i2755[54], i2755[55], 0, i2754, '_aheadImage')
  request.r(i2755[56], i2755[57], 0, i2754, '_config')
  request.r(i2755[58], i2755[59], 0, i2754, '_takeOrderButton')
  request.r(i2755[60], i2755[61], 0, i2754, '_peopleContainer')
  request.r(i2755[62], i2755[63], 0, i2754, '_tutorial')
  request.r(i2755[64], i2755[65], 0, i2754, '_bText')
  request.r(i2755[66], i2755[67], 0, i2754, '_mText')
  request.r(i2755[68], i2755[69], 0, i2754, '_sText')
  request.r(i2755[70], i2755[71], 0, i2754, '_garbageButton')
  request.r(i2755[72], i2755[73], 0, i2754, '_juiceMakerButton')
  request.r(i2755[74], i2755[75], 0, i2754, '_clickSound')
  request.r(i2755[76], i2755[77], 0, i2754, '_juiceSound')
  return i2754
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i2756 = root || request.c( 'Tutorial' )
  var i2757 = data
  i2756.IsTutorial = !!i2757[0]
  request.r(i2757[1], i2757[2], 0, i2756, 'Finger1')
  request.r(i2757[3], i2757[4], 0, i2756, 'Finger2')
  request.r(i2757[5], i2757[6], 0, i2756, 'Finger3')
  request.r(i2757[7], i2757[8], 0, i2756, 'Finger4')
  request.r(i2757[9], i2757[10], 0, i2756, 'FingerJuiceMaker')
  request.r(i2757[11], i2757[12], 0, i2756, 'Finger5')
  request.r(i2757[13], i2757[14], 0, i2756, 'BuyBigCupFinger')
  request.r(i2757[15], i2757[16], 0, i2756, 'BuyJuiceFinger')
  request.r(i2757[17], i2757[18], 0, i2756, 'SmallCupButton')
  request.r(i2757[19], i2757[20], 0, i2756, 'JuiceButton')
  request.r(i2757[21], i2757[22], 0, i2756, 'StrawButton')
  request.r(i2757[23], i2757[24], 0, i2756, 'AdditiveButton')
  request.r(i2757[25], i2757[26], 0, i2756, 'ReadyButton')
  request.r(i2757[27], i2757[28], 0, i2756, 'JuiceMakerButton')
  var i2759 = i2757[29]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 2) {
  request.r(i2759[i + 0], i2759[i + 1], 2, i2758, '')
  }
  i2756.Buttons = i2758
  request.r(i2757[30], i2757[31], 0, i2756, 'Bank')
  return i2756
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i2762 = root || request.c( 'SoundSwitcher' )
  var i2763 = data
  request.r(i2763[0], i2763[1], 0, i2762, '_onImage')
  request.r(i2763[2], i2763[3], 0, i2762, '_offImage')
  return i2762
}

Deserializers["Source.ClickCta"] = function (request, data, root) {
  var i2764 = root || request.c( 'Source.ClickCta' )
  var i2765 = data
  return i2764
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2766 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2767 = data
  request.r(i2767[0], i2767[1], 0, i2766, 'm_FirstSelected')
  i2766.m_sendNavigationEvents = !!i2767[2]
  i2766.m_DragThreshold = i2767[3]
  return i2766
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2768 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2769 = data
  i2768.m_HorizontalAxis = i2769[0]
  i2768.m_VerticalAxis = i2769[1]
  i2768.m_SubmitButton = i2769[2]
  i2768.m_CancelButton = i2769[3]
  i2768.m_InputActionsPerSecond = i2769[4]
  i2768.m_RepeatDelay = i2769[5]
  i2768.m_ForceModuleActive = !!i2769[6]
  i2768.m_SendPointerHoverToParent = !!i2769[7]
  return i2768
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i2770 = root || request.c( 'JuiceConfig' )
  var i2771 = data
  request.r(i2771[0], i2771[1], 0, i2770, 'EntityBigCup')
  request.r(i2771[2], i2771[3], 0, i2770, 'TomatoBigCup')
  request.r(i2771[4], i2771[5], 0, i2770, 'AppleBigCup')
  request.r(i2771[6], i2771[7], 0, i2770, 'OrangeBigCup')
  request.r(i2771[8], i2771[9], 0, i2770, 'CherryBigCup')
  request.r(i2771[10], i2771[11], 0, i2770, 'MultifruitBigCup')
  request.r(i2771[12], i2771[13], 0, i2770, 'TomatoBigStrawCup')
  request.r(i2771[14], i2771[15], 0, i2770, 'MultifruitBigStrawCup')
  request.r(i2771[16], i2771[17], 0, i2770, 'AppleBigStrawCup')
  request.r(i2771[18], i2771[19], 0, i2770, 'OrangeBigStrawCup')
  request.r(i2771[20], i2771[21], 0, i2770, 'CherryBigStrawCup')
  request.r(i2771[22], i2771[23], 0, i2770, 'MultifruitBigBallsCup')
  request.r(i2771[24], i2771[25], 0, i2770, 'TomatoBigBallsCup')
  request.r(i2771[26], i2771[27], 0, i2770, 'AppleBigBallsCup')
  request.r(i2771[28], i2771[29], 0, i2770, 'OrangeBigBallsCup')
  request.r(i2771[30], i2771[31], 0, i2770, 'CherryBigBallsCup')
  request.r(i2771[32], i2771[33], 0, i2770, 'EntityMiddleCup')
  request.r(i2771[34], i2771[35], 0, i2770, 'TomatoMiddleCup')
  request.r(i2771[36], i2771[37], 0, i2770, 'AppleMiddleCup')
  request.r(i2771[38], i2771[39], 0, i2770, 'OrangeMiddleCup')
  request.r(i2771[40], i2771[41], 0, i2770, 'CherryMiddleCup')
  request.r(i2771[42], i2771[43], 0, i2770, 'MultifruitMiddleCup')
  request.r(i2771[44], i2771[45], 0, i2770, 'TomatoMiddleStrawCup')
  request.r(i2771[46], i2771[47], 0, i2770, 'MultifruitMiddleStrawCup')
  request.r(i2771[48], i2771[49], 0, i2770, 'AppleMiddleStrawCup')
  request.r(i2771[50], i2771[51], 0, i2770, 'OrangeMiddleStrawCup')
  request.r(i2771[52], i2771[53], 0, i2770, 'CherryMiddleStrawCup')
  request.r(i2771[54], i2771[55], 0, i2770, 'MultifruitMiddleBallsCup')
  request.r(i2771[56], i2771[57], 0, i2770, 'TomatoMiddleBallsCup')
  request.r(i2771[58], i2771[59], 0, i2770, 'AppleMiddleBallsCup')
  request.r(i2771[60], i2771[61], 0, i2770, 'OrangeMiddleBallsCup')
  request.r(i2771[62], i2771[63], 0, i2770, 'CherryMiddleBallsCup')
  request.r(i2771[64], i2771[65], 0, i2770, 'EntitySmallCup')
  request.r(i2771[66], i2771[67], 0, i2770, 'TomatoSmallCup')
  request.r(i2771[68], i2771[69], 0, i2770, 'AppleSmallCup')
  request.r(i2771[70], i2771[71], 0, i2770, 'OrangeSmallCup')
  request.r(i2771[72], i2771[73], 0, i2770, 'CherrySmallCup')
  request.r(i2771[74], i2771[75], 0, i2770, 'MultifruitSmallCup')
  request.r(i2771[76], i2771[77], 0, i2770, 'TomatoSmallStrawCup')
  request.r(i2771[78], i2771[79], 0, i2770, 'AppleSmallStrawCup')
  request.r(i2771[80], i2771[81], 0, i2770, 'OrangeSmallStrawCup')
  request.r(i2771[82], i2771[83], 0, i2770, 'CherrySmallStrawCup')
  request.r(i2771[84], i2771[85], 0, i2770, 'MultifruitSmallStrawCup')
  request.r(i2771[86], i2771[87], 0, i2770, 'AppleSmallBallsCup')
  request.r(i2771[88], i2771[89], 0, i2770, 'TomatoSmallBallsCup')
  request.r(i2771[90], i2771[91], 0, i2770, 'OrangeSmallBallsCup')
  request.r(i2771[92], i2771[93], 0, i2770, 'CherrySmallBallsCup')
  request.r(i2771[94], i2771[95], 0, i2770, 'MultifruitSmallBallsCup')
  request.r(i2771[96], i2771[97], 0, i2770, 'JuiceBallAdditive')
  request.r(i2771[98], i2771[99], 0, i2770, 'IceAdditive')
  request.r(i2771[100], i2771[101], 0, i2770, 'GrassAdditive')
  return i2770
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i2772 = root || request.c( 'TouchIdleTimer' )
  var i2773 = data
  return i2772
}

Deserializers["Helper"] = function (request, data, root) {
  var i2774 = root || request.c( 'Helper' )
  var i2775 = data
  request.r(i2775[0], i2775[1], 0, i2774, '_smallCupFinger')
  request.r(i2775[2], i2775[3], 0, i2774, '_middleCupFinger')
  request.r(i2775[4], i2775[5], 0, i2774, '_bigCupFinger')
  request.r(i2775[6], i2775[7], 0, i2774, '_iceFinger')
  request.r(i2775[8], i2775[9], 0, i2774, '_grassFinger')
  request.r(i2775[10], i2775[11], 0, i2774, '_juiceballFinger')
  request.r(i2775[12], i2775[13], 0, i2774, '_appleFinger')
  request.r(i2775[14], i2775[15], 0, i2774, '_cherryFinger')
  request.r(i2775[16], i2775[17], 0, i2774, '_orangeFinger')
  request.r(i2775[18], i2775[19], 0, i2774, '_multifruitFinger')
  request.r(i2775[20], i2775[21], 0, i2774, '_tomatoFinger')
  request.r(i2775[22], i2775[23], 0, i2774, '_strawFinger')
  request.r(i2775[24], i2775[25], 0, i2774, '_readyFinger')
  request.r(i2775[26], i2775[27], 0, i2774, '_juiceMakerFinger')
  var i2777 = i2775[28]
  var i2776 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2777.length; i += 2) {
  request.r(i2777[i + 0], i2777[i + 1], 1, i2776, '')
  }
  i2774._juiseButtons = i2776
  request.r(i2775[29], i2775[30], 0, i2774, '_peoples')
  request.r(i2775[31], i2775[32], 0, i2774, '_tutorial')
  request.r(i2775[33], i2775[34], 0, i2774, '_order')
  request.r(i2775[35], i2775[36], 0, i2774, '_strawButton')
  request.r(i2775[37], i2775[38], 0, i2774, '_grassButton')
  request.r(i2775[39], i2775[40], 0, i2774, '_juiceballButton')
  request.r(i2775[41], i2775[42], 0, i2774, '_iceButton')
  request.r(i2775[43], i2775[44], 0, i2774, '_juiceMakerButton')
  request.r(i2775[45], i2775[46], 0, i2774, '_bigCupButton')
  request.r(i2775[47], i2775[48], 0, i2774, '_middleCupButton')
  request.r(i2775[49], i2775[50], 0, i2774, '_smallCupButton')
  request.r(i2775[51], i2775[52], 0, i2774, '_readyButton')
  request.r(i2775[53], i2775[54], 0, i2774, '_touchIdleTimer')
  request.r(i2775[55], i2775[56], 0, i2774, '_finalScreen')
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2781 = data
  i2780.ambientIntensity = i2781[0]
  i2780.reflectionIntensity = i2781[1]
  i2780.ambientMode = i2781[2]
  i2780.ambientLight = new pc.Color(i2781[3], i2781[4], i2781[5], i2781[6])
  i2780.ambientSkyColor = new pc.Color(i2781[7], i2781[8], i2781[9], i2781[10])
  i2780.ambientGroundColor = new pc.Color(i2781[11], i2781[12], i2781[13], i2781[14])
  i2780.ambientEquatorColor = new pc.Color(i2781[15], i2781[16], i2781[17], i2781[18])
  i2780.fogColor = new pc.Color(i2781[19], i2781[20], i2781[21], i2781[22])
  i2780.fogEndDistance = i2781[23]
  i2780.fogStartDistance = i2781[24]
  i2780.fogDensity = i2781[25]
  i2780.fog = !!i2781[26]
  request.r(i2781[27], i2781[28], 0, i2780, 'skybox')
  i2780.fogMode = i2781[29]
  var i2783 = i2781[30]
  var i2782 = []
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2783[i + 0]) );
  }
  i2780.lightmaps = i2782
  i2780.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2781[31], i2780.lightProbes)
  i2780.lightmapsMode = i2781[32]
  i2780.mixedBakeMode = i2781[33]
  i2780.environmentLightingMode = i2781[34]
  i2780.ambientProbe = new pc.SphericalHarmonicsL2(i2781[35])
  i2780.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2781[36])
  i2780.useReferenceAmbientProbe = !!i2781[37]
  request.r(i2781[38], i2781[39], 0, i2780, 'customReflection')
  request.r(i2781[40], i2781[41], 0, i2780, 'defaultReflection')
  i2780.defaultReflectionMode = i2781[42]
  i2780.defaultReflectionResolution = i2781[43]
  i2780.sunLightObjectId = i2781[44]
  i2780.pixelLightCount = i2781[45]
  i2780.defaultReflectionHDR = !!i2781[46]
  i2780.hasLightDataAsset = !!i2781[47]
  i2780.hasManualGenerate = !!i2781[48]
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2787 = data
  request.r(i2787[0], i2787[1], 0, i2786, 'lightmapColor')
  request.r(i2787[2], i2787[3], 0, i2786, 'lightmapDirection')
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2788 = root || new UnityEngine.LightProbes()
  var i2789 = data
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2797 = data
  var i2799 = i2797[0]
  var i2798 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2799[i + 0]));
  }
  i2796.ShaderCompilationErrors = i2798
  i2796.name = i2797[1]
  i2796.guid = i2797[2]
  var i2801 = i2797[3]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( i2801[i + 0] );
  }
  i2796.shaderDefinedKeywords = i2800
  var i2803 = i2797[4]
  var i2802 = []
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2803[i + 0]) );
  }
  i2796.passes = i2802
  var i2805 = i2797[5]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2805[i + 0]) );
  }
  i2796.usePasses = i2804
  var i2807 = i2797[6]
  var i2806 = []
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2807[i + 0]) );
  }
  i2796.defaultParameterValues = i2806
  request.r(i2797[7], i2797[8], 0, i2796, 'unityFallbackShader')
  i2796.readDepth = !!i2797[9]
  i2796.isCreatedByShaderGraph = !!i2797[10]
  i2796.compiled = !!i2797[11]
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2811 = data
  i2810.shaderName = i2811[0]
  i2810.errorMessage = i2811[1]
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2816 = root || new pc.UnityShaderPass()
  var i2817 = data
  i2816.id = i2817[0]
  i2816.subShaderIndex = i2817[1]
  i2816.name = i2817[2]
  i2816.passType = i2817[3]
  i2816.grabPassTextureName = i2817[4]
  i2816.usePass = !!i2817[5]
  i2816.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2817[6], i2816.zTest)
  i2816.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2817[7], i2816.zWrite)
  i2816.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2817[8], i2816.culling)
  i2816.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2817[9], i2816.blending)
  i2816.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2817[10], i2816.alphaBlending)
  i2816.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2817[11], i2816.colorWriteMask)
  i2816.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2817[12], i2816.offsetUnits)
  i2816.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2817[13], i2816.offsetFactor)
  i2816.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2817[14], i2816.stencilRef)
  i2816.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2817[15], i2816.stencilReadMask)
  i2816.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2817[16], i2816.stencilWriteMask)
  i2816.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2817[17], i2816.stencilOp)
  i2816.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2817[18], i2816.stencilOpFront)
  i2816.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2817[19], i2816.stencilOpBack)
  var i2819 = i2817[20]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2819[i + 0]) );
  }
  i2816.tags = i2818
  var i2821 = i2817[21]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( i2821[i + 0] );
  }
  i2816.passDefinedKeywords = i2820
  var i2823 = i2817[22]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2823[i + 0]) );
  }
  i2816.passDefinedKeywordGroups = i2822
  var i2825 = i2817[23]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2825[i + 0]) );
  }
  i2816.variants = i2824
  var i2827 = i2817[24]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2827[i + 0]) );
  }
  i2816.excludedVariants = i2826
  i2816.hasDepthReader = !!i2817[25]
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2829 = data
  i2828.val = i2829[0]
  i2828.name = i2829[1]
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2831 = data
  i2830.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2831[0], i2830.src)
  i2830.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2831[1], i2830.dst)
  i2830.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2831[2], i2830.op)
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2833 = data
  i2832.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2833[0], i2832.pass)
  i2832.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2833[1], i2832.fail)
  i2832.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2833[2], i2832.zFail)
  i2832.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2833[3], i2832.comp)
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2837 = data
  i2836.name = i2837[0]
  i2836.value = i2837[1]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2841 = data
  var i2843 = i2841[0]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.push( i2843[i + 0] );
  }
  i2840.keywords = i2842
  i2840.hasDiscard = !!i2841[1]
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2847 = data
  i2846.passId = i2847[0]
  i2846.subShaderIndex = i2847[1]
  var i2849 = i2847[2]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( i2849[i + 0] );
  }
  i2846.keywords = i2848
  i2846.vertexProgram = i2847[3]
  i2846.fragmentProgram = i2847[4]
  i2846.exportedForWebGl2 = !!i2847[5]
  i2846.readDepth = !!i2847[6]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2853 = data
  request.r(i2853[0], i2853[1], 0, i2852, 'shader')
  i2852.pass = i2853[2]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2857 = data
  i2856.name = i2857[0]
  i2856.type = i2857[1]
  i2856.value = new pc.Vec4( i2857[2], i2857[3], i2857[4], i2857[5] )
  i2856.textureValue = i2857[6]
  i2856.shaderPropertyFlag = i2857[7]
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2859 = data
  i2858.name = i2859[0]
  request.r(i2859[1], i2859[2], 0, i2858, 'texture')
  i2858.aabb = i2859[3]
  i2858.vertices = i2859[4]
  i2858.triangles = i2859[5]
  i2858.textureRect = UnityEngine.Rect.MinMaxRect(i2859[6], i2859[7], i2859[8], i2859[9])
  i2858.packedRect = UnityEngine.Rect.MinMaxRect(i2859[10], i2859[11], i2859[12], i2859[13])
  i2858.border = new pc.Vec4( i2859[14], i2859[15], i2859[16], i2859[17] )
  i2858.transparency = i2859[18]
  i2858.bounds = i2859[19]
  i2858.pixelsPerUnit = i2859[20]
  i2858.textureWidth = i2859[21]
  i2858.textureHeight = i2859[22]
  i2858.nativeSize = new pc.Vec2( i2859[23], i2859[24] )
  i2858.pivot = new pc.Vec2( i2859[25], i2859[26] )
  i2858.textureRectOffset = new pc.Vec2( i2859[27], i2859[28] )
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2861 = data
  i2860.name = i2861[0]
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2863 = data
  i2862.name = i2863[0]
  i2862.wrapMode = i2863[1]
  i2862.isLooping = !!i2863[2]
  i2862.length = i2863[3]
  var i2865 = i2863[4]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2865[i + 0]) );
  }
  i2862.curves = i2864
  var i2867 = i2863[5]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2867[i + 0]) );
  }
  i2862.events = i2866
  i2862.halfPrecision = !!i2863[6]
  i2862._frameRate = i2863[7]
  i2862.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2863[8], i2862.localBounds)
  i2862.hasMuscleCurves = !!i2863[9]
  var i2869 = i2863[10]
  var i2868 = []
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.push( i2869[i + 0] );
  }
  i2862.clipMuscleConstant = i2868
  i2862.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2863[11], i2862.clipBindingConstant)
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2873 = data
  i2872.path = i2873[0]
  i2872.hash = i2873[1]
  i2872.componentType = i2873[2]
  i2872.property = i2873[3]
  i2872.keys = i2873[4]
  var i2875 = i2873[5]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2875[i + 0]) );
  }
  i2872.objectReferenceKeys = i2874
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2879 = data
  i2878.time = i2879[0]
  request.r(i2879[1], i2879[2], 0, i2878, 'value')
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2883 = data
  i2882.functionName = i2883[0]
  i2882.floatParameter = i2883[1]
  i2882.intParameter = i2883[2]
  i2882.stringParameter = i2883[3]
  request.r(i2883[4], i2883[5], 0, i2882, 'objectReferenceParameter')
  i2882.time = i2883[6]
  return i2882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2885 = data
  i2884.center = new pc.Vec3( i2885[0], i2885[1], i2885[2] )
  i2884.extends = new pc.Vec3( i2885[3], i2885[4], i2885[5] )
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2889 = data
  var i2891 = i2889[0]
  var i2890 = []
  for(var i = 0; i < i2891.length; i += 1) {
    i2890.push( i2891[i + 0] );
  }
  i2888.genericBindings = i2890
  var i2893 = i2889[1]
  var i2892 = []
  for(var i = 0; i < i2893.length; i += 1) {
    i2892.push( i2893[i + 0] );
  }
  i2888.pptrCurveMapping = i2892
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2895 = data
  i2894.name = i2895[0]
  i2894.ascent = i2895[1]
  i2894.originalLineHeight = i2895[2]
  i2894.fontSize = i2895[3]
  var i2897 = i2895[4]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2897[i + 0]) );
  }
  i2894.characterInfo = i2896
  request.r(i2895[5], i2895[6], 0, i2894, 'texture')
  i2894.originalFontSize = i2895[7]
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2901 = data
  i2900.index = i2901[0]
  i2900.advance = i2901[1]
  i2900.bearing = i2901[2]
  i2900.glyphWidth = i2901[3]
  i2900.glyphHeight = i2901[4]
  i2900.minX = i2901[5]
  i2900.maxX = i2901[6]
  i2900.minY = i2901[7]
  i2900.maxY = i2901[8]
  i2900.uvBottomLeftX = i2901[9]
  i2900.uvBottomLeftY = i2901[10]
  i2900.uvBottomRightX = i2901[11]
  i2900.uvBottomRightY = i2901[12]
  i2900.uvTopLeftX = i2901[13]
  i2900.uvTopLeftY = i2901[14]
  i2900.uvTopRightX = i2901[15]
  i2900.uvTopRightY = i2901[16]
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2903 = data
  i2902.name = i2903[0]
  var i2905 = i2903[1]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2905[i + 0]) );
  }
  i2902.layers = i2904
  var i2907 = i2903[2]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2907[i + 0]) );
  }
  i2902.parameters = i2906
  i2902.animationClips = i2903[3]
  i2902.avatarUnsupported = i2903[4]
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2911 = data
  i2910.name = i2911[0]
  i2910.defaultWeight = i2911[1]
  i2910.blendingMode = i2911[2]
  i2910.avatarMask = i2911[3]
  i2910.syncedLayerIndex = i2911[4]
  i2910.syncedLayerAffectsTiming = !!i2911[5]
  i2910.syncedLayers = i2911[6]
  i2910.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2911[7], i2910.stateMachine)
  return i2910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2913 = data
  i2912.id = i2913[0]
  i2912.name = i2913[1]
  i2912.path = i2913[2]
  var i2915 = i2913[3]
  var i2914 = []
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2915[i + 0]) );
  }
  i2912.states = i2914
  var i2917 = i2913[4]
  var i2916 = []
  for(var i = 0; i < i2917.length; i += 1) {
    i2916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2917[i + 0]) );
  }
  i2912.machines = i2916
  var i2919 = i2913[5]
  var i2918 = []
  for(var i = 0; i < i2919.length; i += 1) {
    i2918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2919[i + 0]) );
  }
  i2912.entryStateTransitions = i2918
  var i2921 = i2913[6]
  var i2920 = []
  for(var i = 0; i < i2921.length; i += 1) {
    i2920.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2921[i + 0]) );
  }
  i2912.exitStateTransitions = i2920
  var i2923 = i2913[7]
  var i2922 = []
  for(var i = 0; i < i2923.length; i += 1) {
    i2922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2923[i + 0]) );
  }
  i2912.anyStateTransitions = i2922
  i2912.defaultStateId = i2913[8]
  return i2912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2927 = data
  i2926.id = i2927[0]
  i2926.name = i2927[1]
  i2926.cycleOffset = i2927[2]
  i2926.cycleOffsetParameter = i2927[3]
  i2926.cycleOffsetParameterActive = !!i2927[4]
  i2926.mirror = !!i2927[5]
  i2926.mirrorParameter = i2927[6]
  i2926.mirrorParameterActive = !!i2927[7]
  i2926.motionId = i2927[8]
  i2926.nameHash = i2927[9]
  i2926.fullPathHash = i2927[10]
  i2926.speed = i2927[11]
  i2926.speedParameter = i2927[12]
  i2926.speedParameterActive = !!i2927[13]
  i2926.tag = i2927[14]
  i2926.tagHash = i2927[15]
  i2926.writeDefaultValues = !!i2927[16]
  var i2929 = i2927[17]
  var i2928 = []
  for(var i = 0; i < i2929.length; i += 2) {
  request.r(i2929[i + 0], i2929[i + 1], 2, i2928, '')
  }
  i2926.behaviours = i2928
  var i2931 = i2927[18]
  var i2930 = []
  for(var i = 0; i < i2931.length; i += 1) {
    i2930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2931[i + 0]) );
  }
  i2926.transitions = i2930
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2937 = data
  i2936.fullPath = i2937[0]
  i2936.canTransitionToSelf = !!i2937[1]
  i2936.duration = i2937[2]
  i2936.exitTime = i2937[3]
  i2936.hasExitTime = !!i2937[4]
  i2936.hasFixedDuration = !!i2937[5]
  i2936.interruptionSource = i2937[6]
  i2936.offset = i2937[7]
  i2936.orderedInterruption = !!i2937[8]
  i2936.destinationStateId = i2937[9]
  i2936.isExit = !!i2937[10]
  i2936.mute = !!i2937[11]
  i2936.solo = !!i2937[12]
  var i2939 = i2937[13]
  var i2938 = []
  for(var i = 0; i < i2939.length; i += 1) {
    i2938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2939[i + 0]) );
  }
  i2936.conditions = i2938
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2945 = data
  i2944.destinationStateId = i2945[0]
  i2944.isExit = !!i2945[1]
  i2944.mute = !!i2945[2]
  i2944.solo = !!i2945[3]
  var i2947 = i2945[4]
  var i2946 = []
  for(var i = 0; i < i2947.length; i += 1) {
    i2946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2947[i + 0]) );
  }
  i2944.conditions = i2946
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2951 = data
  i2950.mode = i2951[0]
  i2950.parameter = i2951[1]
  i2950.threshold = i2951[2]
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2955 = data
  i2954.defaultBool = !!i2955[0]
  i2954.defaultFloat = i2955[1]
  i2954.defaultInt = i2955[2]
  i2954.name = i2955[3]
  i2954.nameHash = i2955[4]
  i2954.type = i2955[5]
  return i2954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2957 = data
  i2956.name = i2957[0]
  i2956.bytes64 = i2957[1]
  i2956.data = i2957[2]
  return i2956
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2958 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2959 = data
  i2958.hashCode = i2959[0]
  request.r(i2959[1], i2959[2], 0, i2958, 'material')
  i2958.materialHashCode = i2959[3]
  request.r(i2959[4], i2959[5], 0, i2958, 'atlas')
  i2958.normalStyle = i2959[6]
  i2958.normalSpacingOffset = i2959[7]
  i2958.boldStyle = i2959[8]
  i2958.boldSpacing = i2959[9]
  i2958.italicStyle = i2959[10]
  i2958.tabSize = i2959[11]
  i2958.m_Version = i2959[12]
  i2958.m_SourceFontFileGUID = i2959[13]
  request.r(i2959[14], i2959[15], 0, i2958, 'm_SourceFontFile_EditorRef')
  request.r(i2959[16], i2959[17], 0, i2958, 'm_SourceFontFile')
  i2958.m_AtlasPopulationMode = i2959[18]
  i2958.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2959[19], i2958.m_FaceInfo)
  var i2961 = i2959[20]
  var i2960 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2961.length; i += 1) {
    i2960.add(request.d('UnityEngine.TextCore.Glyph', i2961[i + 0]));
  }
  i2958.m_GlyphTable = i2960
  var i2963 = i2959[21]
  var i2962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2963.length; i += 1) {
    i2962.add(request.d('TMPro.TMP_Character', i2963[i + 0]));
  }
  i2958.m_CharacterTable = i2962
  var i2965 = i2959[22]
  var i2964 = []
  for(var i = 0; i < i2965.length; i += 2) {
  request.r(i2965[i + 0], i2965[i + 1], 2, i2964, '')
  }
  i2958.m_AtlasTextures = i2964
  i2958.m_AtlasTextureIndex = i2959[23]
  i2958.m_IsMultiAtlasTexturesEnabled = !!i2959[24]
  i2958.m_ClearDynamicDataOnBuild = !!i2959[25]
  var i2967 = i2959[26]
  var i2966 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2967.length; i += 1) {
    i2966.add(request.d('UnityEngine.TextCore.GlyphRect', i2967[i + 0]));
  }
  i2958.m_UsedGlyphRects = i2966
  var i2969 = i2959[27]
  var i2968 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2969.length; i += 1) {
    i2968.add(request.d('UnityEngine.TextCore.GlyphRect', i2969[i + 0]));
  }
  i2958.m_FreeGlyphRects = i2968
  i2958.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2959[28], i2958.m_fontInfo)
  i2958.m_AtlasWidth = i2959[29]
  i2958.m_AtlasHeight = i2959[30]
  i2958.m_AtlasPadding = i2959[31]
  i2958.m_AtlasRenderMode = i2959[32]
  var i2971 = i2959[33]
  var i2970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2971.length; i += 1) {
    i2970.add(request.d('TMPro.TMP_Glyph', i2971[i + 0]));
  }
  i2958.m_glyphInfoList = i2970
  i2958.m_KerningTable = request.d('TMPro.KerningTable', i2959[34], i2958.m_KerningTable)
  i2958.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2959[35], i2958.m_FontFeatureTable)
  var i2973 = i2959[36]
  var i2972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2973.length; i += 2) {
  request.r(i2973[i + 0], i2973[i + 1], 1, i2972, '')
  }
  i2958.fallbackFontAssets = i2972
  var i2975 = i2959[37]
  var i2974 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2975.length; i += 2) {
  request.r(i2975[i + 0], i2975[i + 1], 1, i2974, '')
  }
  i2958.m_FallbackFontAssetTable = i2974
  i2958.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2959[38], i2958.m_CreationSettings)
  var i2977 = i2959[39]
  var i2976 = []
  for(var i = 0; i < i2977.length; i += 1) {
    i2976.push( request.d('TMPro.TMP_FontWeightPair', i2977[i + 0]) );
  }
  i2958.m_FontWeightTable = i2976
  var i2979 = i2959[40]
  var i2978 = []
  for(var i = 0; i < i2979.length; i += 1) {
    i2978.push( request.d('TMPro.TMP_FontWeightPair', i2979[i + 0]) );
  }
  i2958.fontWeights = i2978
  return i2958
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2980 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2981 = data
  i2980.m_FaceIndex = i2981[0]
  i2980.m_FamilyName = i2981[1]
  i2980.m_StyleName = i2981[2]
  i2980.m_PointSize = i2981[3]
  i2980.m_Scale = i2981[4]
  i2980.m_UnitsPerEM = i2981[5]
  i2980.m_LineHeight = i2981[6]
  i2980.m_AscentLine = i2981[7]
  i2980.m_CapLine = i2981[8]
  i2980.m_MeanLine = i2981[9]
  i2980.m_Baseline = i2981[10]
  i2980.m_DescentLine = i2981[11]
  i2980.m_SuperscriptOffset = i2981[12]
  i2980.m_SuperscriptSize = i2981[13]
  i2980.m_SubscriptOffset = i2981[14]
  i2980.m_SubscriptSize = i2981[15]
  i2980.m_UnderlineOffset = i2981[16]
  i2980.m_UnderlineThickness = i2981[17]
  i2980.m_StrikethroughOffset = i2981[18]
  i2980.m_StrikethroughThickness = i2981[19]
  i2980.m_TabWidth = i2981[20]
  return i2980
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2984 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2985 = data
  i2984.m_Index = i2985[0]
  i2984.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2985[1], i2984.m_Metrics)
  i2984.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2985[2], i2984.m_GlyphRect)
  i2984.m_Scale = i2985[3]
  i2984.m_AtlasIndex = i2985[4]
  i2984.m_ClassDefinitionType = i2985[5]
  return i2984
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2986 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2987 = data
  i2986.m_Width = i2987[0]
  i2986.m_Height = i2987[1]
  i2986.m_HorizontalBearingX = i2987[2]
  i2986.m_HorizontalBearingY = i2987[3]
  i2986.m_HorizontalAdvance = i2987[4]
  return i2986
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2988 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2989 = data
  i2988.m_X = i2989[0]
  i2988.m_Y = i2989[1]
  i2988.m_Width = i2989[2]
  i2988.m_Height = i2989[3]
  return i2988
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2992 = root || request.c( 'TMPro.TMP_Character' )
  var i2993 = data
  i2992.m_ElementType = i2993[0]
  i2992.m_Unicode = i2993[1]
  i2992.m_GlyphIndex = i2993[2]
  i2992.m_Scale = i2993[3]
  return i2992
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2998 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2999 = data
  i2998.Name = i2999[0]
  i2998.PointSize = i2999[1]
  i2998.Scale = i2999[2]
  i2998.CharacterCount = i2999[3]
  i2998.LineHeight = i2999[4]
  i2998.Baseline = i2999[5]
  i2998.Ascender = i2999[6]
  i2998.CapHeight = i2999[7]
  i2998.Descender = i2999[8]
  i2998.CenterLine = i2999[9]
  i2998.SuperscriptOffset = i2999[10]
  i2998.SubscriptOffset = i2999[11]
  i2998.SubSize = i2999[12]
  i2998.Underline = i2999[13]
  i2998.UnderlineThickness = i2999[14]
  i2998.strikethrough = i2999[15]
  i2998.strikethroughThickness = i2999[16]
  i2998.TabWidth = i2999[17]
  i2998.Padding = i2999[18]
  i2998.AtlasWidth = i2999[19]
  i2998.AtlasHeight = i2999[20]
  return i2998
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3002 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3003 = data
  i3002.id = i3003[0]
  i3002.x = i3003[1]
  i3002.y = i3003[2]
  i3002.width = i3003[3]
  i3002.height = i3003[4]
  i3002.xOffset = i3003[5]
  i3002.yOffset = i3003[6]
  i3002.xAdvance = i3003[7]
  i3002.scale = i3003[8]
  return i3002
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3004 = root || request.c( 'TMPro.KerningTable' )
  var i3005 = data
  var i3007 = i3005[0]
  var i3006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3007.length; i += 1) {
    i3006.add(request.d('TMPro.KerningPair', i3007[i + 0]));
  }
  i3004.kerningPairs = i3006
  return i3004
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3010 = root || request.c( 'TMPro.KerningPair' )
  var i3011 = data
  i3010.xOffset = i3011[0]
  i3010.m_FirstGlyph = i3011[1]
  i3010.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3011[2], i3010.m_FirstGlyphAdjustments)
  i3010.m_SecondGlyph = i3011[3]
  i3010.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3011[4], i3010.m_SecondGlyphAdjustments)
  i3010.m_IgnoreSpacingAdjustments = !!i3011[5]
  return i3010
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3012 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3013 = data
  var i3015 = i3013[0]
  var i3014 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3015.length; i += 1) {
    i3014.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3015[i + 0]));
  }
  i3012.m_GlyphPairAdjustmentRecords = i3014
  return i3012
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3018 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3019 = data
  i3018.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3019[0], i3018.m_FirstAdjustmentRecord)
  i3018.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3019[1], i3018.m_SecondAdjustmentRecord)
  i3018.m_FeatureLookupFlags = i3019[2]
  return i3018
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3020 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3021 = data
  i3020.m_GlyphIndex = i3021[0]
  i3020.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3021[1], i3020.m_GlyphValueRecord)
  return i3020
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3022 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3023 = data
  i3022.m_XPlacement = i3023[0]
  i3022.m_YPlacement = i3023[1]
  i3022.m_XAdvance = i3023[2]
  i3022.m_YAdvance = i3023[3]
  return i3022
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3026 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3027 = data
  i3026.sourceFontFileName = i3027[0]
  i3026.sourceFontFileGUID = i3027[1]
  i3026.pointSizeSamplingMode = i3027[2]
  i3026.pointSize = i3027[3]
  i3026.padding = i3027[4]
  i3026.packingMode = i3027[5]
  i3026.atlasWidth = i3027[6]
  i3026.atlasHeight = i3027[7]
  i3026.characterSetSelectionMode = i3027[8]
  i3026.characterSequence = i3027[9]
  i3026.referencedFontAssetGUID = i3027[10]
  i3026.referencedTextAssetGUID = i3027[11]
  i3026.fontStyle = i3027[12]
  i3026.fontStyleModifier = i3027[13]
  i3026.renderMode = i3027[14]
  i3026.includeFontFeatures = !!i3027[15]
  return i3026
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3030 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3031 = data
  request.r(i3031[0], i3031[1], 0, i3030, 'regularTypeface')
  request.r(i3031[2], i3031[3], 0, i3030, 'italicTypeface')
  return i3030
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3032 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3033 = data
  i3032.useSafeMode = !!i3033[0]
  i3032.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3033[1], i3032.safeModeOptions)
  i3032.timeScale = i3033[2]
  i3032.unscaledTimeScale = i3033[3]
  i3032.useSmoothDeltaTime = !!i3033[4]
  i3032.maxSmoothUnscaledTime = i3033[5]
  i3032.rewindCallbackMode = i3033[6]
  i3032.showUnityEditorReport = !!i3033[7]
  i3032.logBehaviour = i3033[8]
  i3032.drawGizmos = !!i3033[9]
  i3032.defaultRecyclable = !!i3033[10]
  i3032.defaultAutoPlay = i3033[11]
  i3032.defaultUpdateType = i3033[12]
  i3032.defaultTimeScaleIndependent = !!i3033[13]
  i3032.defaultEaseType = i3033[14]
  i3032.defaultEaseOvershootOrAmplitude = i3033[15]
  i3032.defaultEasePeriod = i3033[16]
  i3032.defaultAutoKill = !!i3033[17]
  i3032.defaultLoopType = i3033[18]
  i3032.debugMode = !!i3033[19]
  i3032.debugStoreTargetId = !!i3033[20]
  i3032.showPreviewPanel = !!i3033[21]
  i3032.storeSettingsLocation = i3033[22]
  i3032.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3033[23], i3032.modules)
  i3032.createASMDEF = !!i3033[24]
  i3032.showPlayingTweens = !!i3033[25]
  i3032.showPausedTweens = !!i3033[26]
  return i3032
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3034 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3035 = data
  i3034.logBehaviour = i3035[0]
  i3034.nestedTweenFailureBehaviour = i3035[1]
  return i3034
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3036 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3037 = data
  i3036.showPanel = !!i3037[0]
  i3036.audioEnabled = !!i3037[1]
  i3036.physicsEnabled = !!i3037[2]
  i3036.physics2DEnabled = !!i3037[3]
  i3036.spriteEnabled = !!i3037[4]
  i3036.uiEnabled = !!i3037[5]
  i3036.textMeshProEnabled = !!i3037[6]
  i3036.tk2DEnabled = !!i3037[7]
  i3036.deAudioEnabled = !!i3037[8]
  i3036.deUnityExtendedEnabled = !!i3037[9]
  i3036.epoOutlineEnabled = !!i3037[10]
  return i3036
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3038 = root || request.c( 'TMPro.TMP_Settings' )
  var i3039 = data
  i3038.m_enableWordWrapping = !!i3039[0]
  i3038.m_enableKerning = !!i3039[1]
  i3038.m_enableExtraPadding = !!i3039[2]
  i3038.m_enableTintAllSprites = !!i3039[3]
  i3038.m_enableParseEscapeCharacters = !!i3039[4]
  i3038.m_EnableRaycastTarget = !!i3039[5]
  i3038.m_GetFontFeaturesAtRuntime = !!i3039[6]
  i3038.m_missingGlyphCharacter = i3039[7]
  i3038.m_warningsDisabled = !!i3039[8]
  request.r(i3039[9], i3039[10], 0, i3038, 'm_defaultFontAsset')
  i3038.m_defaultFontAssetPath = i3039[11]
  i3038.m_defaultFontSize = i3039[12]
  i3038.m_defaultAutoSizeMinRatio = i3039[13]
  i3038.m_defaultAutoSizeMaxRatio = i3039[14]
  i3038.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3039[15], i3039[16] )
  i3038.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3039[17], i3039[18] )
  i3038.m_autoSizeTextContainer = !!i3039[19]
  i3038.m_IsTextObjectScaleStatic = !!i3039[20]
  var i3041 = i3039[21]
  var i3040 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3041.length; i += 2) {
  request.r(i3041[i + 0], i3041[i + 1], 1, i3040, '')
  }
  i3038.m_fallbackFontAssets = i3040
  i3038.m_matchMaterialPreset = !!i3039[22]
  request.r(i3039[23], i3039[24], 0, i3038, 'm_defaultSpriteAsset')
  i3038.m_defaultSpriteAssetPath = i3039[25]
  i3038.m_enableEmojiSupport = !!i3039[26]
  i3038.m_MissingCharacterSpriteUnicode = i3039[27]
  i3038.m_defaultColorGradientPresetsPath = i3039[28]
  request.r(i3039[29], i3039[30], 0, i3038, 'm_defaultStyleSheet')
  i3038.m_StyleSheetsResourcePath = i3039[31]
  request.r(i3039[32], i3039[33], 0, i3038, 'm_leadingCharacters')
  request.r(i3039[34], i3039[35], 0, i3038, 'm_followingCharacters')
  i3038.m_UseModernHangulLineBreakingRules = !!i3039[36]
  return i3038
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3042 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3043 = data
  i3042.hashCode = i3043[0]
  request.r(i3043[1], i3043[2], 0, i3042, 'material')
  i3042.materialHashCode = i3043[3]
  request.r(i3043[4], i3043[5], 0, i3042, 'spriteSheet')
  var i3045 = i3043[6]
  var i3044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3045.length; i += 1) {
    i3044.add(request.d('TMPro.TMP_Sprite', i3045[i + 0]));
  }
  i3042.spriteInfoList = i3044
  var i3047 = i3043[7]
  var i3046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3047.length; i += 2) {
  request.r(i3047[i + 0], i3047[i + 1], 1, i3046, '')
  }
  i3042.fallbackSpriteAssets = i3046
  i3042.m_Version = i3043[8]
  i3042.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3043[9], i3042.m_FaceInfo)
  var i3049 = i3043[10]
  var i3048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3049.length; i += 1) {
    i3048.add(request.d('TMPro.TMP_SpriteCharacter', i3049[i + 0]));
  }
  i3042.m_SpriteCharacterTable = i3048
  var i3051 = i3043[11]
  var i3050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3051.length; i += 1) {
    i3050.add(request.d('TMPro.TMP_SpriteGlyph', i3051[i + 0]));
  }
  i3042.m_SpriteGlyphTable = i3050
  return i3042
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3054 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3055 = data
  i3054.name = i3055[0]
  i3054.hashCode = i3055[1]
  i3054.unicode = i3055[2]
  i3054.pivot = new pc.Vec2( i3055[3], i3055[4] )
  request.r(i3055[5], i3055[6], 0, i3054, 'sprite')
  i3054.id = i3055[7]
  i3054.x = i3055[8]
  i3054.y = i3055[9]
  i3054.width = i3055[10]
  i3054.height = i3055[11]
  i3054.xOffset = i3055[12]
  i3054.yOffset = i3055[13]
  i3054.xAdvance = i3055[14]
  i3054.scale = i3055[15]
  return i3054
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3060 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3061 = data
  i3060.m_Name = i3061[0]
  i3060.m_HashCode = i3061[1]
  i3060.m_ElementType = i3061[2]
  i3060.m_Unicode = i3061[3]
  i3060.m_GlyphIndex = i3061[4]
  i3060.m_Scale = i3061[5]
  return i3060
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3064 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3065 = data
  request.r(i3065[0], i3065[1], 0, i3064, 'sprite')
  i3064.m_Index = i3065[2]
  i3064.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3065[3], i3064.m_Metrics)
  i3064.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3065[4], i3064.m_GlyphRect)
  i3064.m_Scale = i3065[5]
  i3064.m_AtlasIndex = i3065[6]
  i3064.m_ClassDefinitionType = i3065[7]
  return i3064
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3066 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3067 = data
  var i3069 = i3067[0]
  var i3068 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3069.length; i += 1) {
    i3068.add(request.d('TMPro.TMP_Style', i3069[i + 0]));
  }
  i3066.m_StyleList = i3068
  return i3066
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3072 = root || request.c( 'TMPro.TMP_Style' )
  var i3073 = data
  i3072.m_Name = i3073[0]
  i3072.m_HashCode = i3073[1]
  i3072.m_OpeningDefinition = i3073[2]
  i3072.m_ClosingDefinition = i3073[3]
  i3072.m_OpeningTagArray = i3073[4]
  i3072.m_ClosingTagArray = i3073[5]
  i3072.m_OpeningTagUnicodeArray = i3073[6]
  i3072.m_ClosingTagUnicodeArray = i3073[7]
  return i3072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3075 = data
  var i3077 = i3075[0]
  var i3076 = []
  for(var i = 0; i < i3077.length; i += 1) {
    i3076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3077[i + 0]) );
  }
  i3074.files = i3076
  i3074.componentToPrefabIds = i3075[1]
  return i3074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3081 = data
  i3080.path = i3081[0]
  request.r(i3081[1], i3081[2], 0, i3080, 'unityObject')
  return i3080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3083 = data
  var i3085 = i3083[0]
  var i3084 = []
  for(var i = 0; i < i3085.length; i += 1) {
    i3084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3085[i + 0]) );
  }
  i3082.scriptsExecutionOrder = i3084
  var i3087 = i3083[1]
  var i3086 = []
  for(var i = 0; i < i3087.length; i += 1) {
    i3086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3087[i + 0]) );
  }
  i3082.sortingLayers = i3086
  var i3089 = i3083[2]
  var i3088 = []
  for(var i = 0; i < i3089.length; i += 1) {
    i3088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3089[i + 0]) );
  }
  i3082.cullingLayers = i3088
  i3082.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3083[3], i3082.timeSettings)
  i3082.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3083[4], i3082.physicsSettings)
  i3082.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3083[5], i3082.physics2DSettings)
  i3082.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3083[6], i3082.qualitySettings)
  i3082.enableRealtimeShadows = !!i3083[7]
  i3082.enableAutoInstancing = !!i3083[8]
  i3082.enableDynamicBatching = !!i3083[9]
  i3082.lightmapEncodingQuality = i3083[10]
  i3082.desiredColorSpace = i3083[11]
  var i3091 = i3083[12]
  var i3090 = []
  for(var i = 0; i < i3091.length; i += 1) {
    i3090.push( i3091[i + 0] );
  }
  i3082.allTags = i3090
  return i3082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3095 = data
  i3094.name = i3095[0]
  i3094.value = i3095[1]
  return i3094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3099 = data
  i3098.id = i3099[0]
  i3098.name = i3099[1]
  i3098.value = i3099[2]
  return i3098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3103 = data
  i3102.id = i3103[0]
  i3102.name = i3103[1]
  return i3102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3105 = data
  i3104.fixedDeltaTime = i3105[0]
  i3104.maximumDeltaTime = i3105[1]
  i3104.timeScale = i3105[2]
  i3104.maximumParticleTimestep = i3105[3]
  return i3104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3107 = data
  i3106.gravity = new pc.Vec3( i3107[0], i3107[1], i3107[2] )
  i3106.defaultSolverIterations = i3107[3]
  i3106.bounceThreshold = i3107[4]
  i3106.autoSyncTransforms = !!i3107[5]
  i3106.autoSimulation = !!i3107[6]
  var i3109 = i3107[7]
  var i3108 = []
  for(var i = 0; i < i3109.length; i += 1) {
    i3108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3109[i + 0]) );
  }
  i3106.collisionMatrix = i3108
  return i3106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3113 = data
  i3112.enabled = !!i3113[0]
  i3112.layerId = i3113[1]
  i3112.otherLayerId = i3113[2]
  return i3112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3115 = data
  request.r(i3115[0], i3115[1], 0, i3114, 'material')
  i3114.gravity = new pc.Vec2( i3115[2], i3115[3] )
  i3114.positionIterations = i3115[4]
  i3114.velocityIterations = i3115[5]
  i3114.velocityThreshold = i3115[6]
  i3114.maxLinearCorrection = i3115[7]
  i3114.maxAngularCorrection = i3115[8]
  i3114.maxTranslationSpeed = i3115[9]
  i3114.maxRotationSpeed = i3115[10]
  i3114.baumgarteScale = i3115[11]
  i3114.baumgarteTOIScale = i3115[12]
  i3114.timeToSleep = i3115[13]
  i3114.linearSleepTolerance = i3115[14]
  i3114.angularSleepTolerance = i3115[15]
  i3114.defaultContactOffset = i3115[16]
  i3114.autoSimulation = !!i3115[17]
  i3114.queriesHitTriggers = !!i3115[18]
  i3114.queriesStartInColliders = !!i3115[19]
  i3114.callbacksOnDisable = !!i3115[20]
  i3114.reuseCollisionCallbacks = !!i3115[21]
  i3114.autoSyncTransforms = !!i3115[22]
  var i3117 = i3115[23]
  var i3116 = []
  for(var i = 0; i < i3117.length; i += 1) {
    i3116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3117[i + 0]) );
  }
  i3114.collisionMatrix = i3116
  return i3114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3121 = data
  i3120.enabled = !!i3121[0]
  i3120.layerId = i3121[1]
  i3120.otherLayerId = i3121[2]
  return i3120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3123 = data
  var i3125 = i3123[0]
  var i3124 = []
  for(var i = 0; i < i3125.length; i += 1) {
    i3124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3125[i + 0]) );
  }
  i3122.qualityLevels = i3124
  var i3127 = i3123[1]
  var i3126 = []
  for(var i = 0; i < i3127.length; i += 1) {
    i3126.push( i3127[i + 0] );
  }
  i3122.names = i3126
  i3122.shadows = i3123[2]
  i3122.anisotropicFiltering = i3123[3]
  i3122.antiAliasing = i3123[4]
  i3122.lodBias = i3123[5]
  i3122.shadowCascades = i3123[6]
  i3122.shadowDistance = i3123[7]
  i3122.shadowmaskMode = i3123[8]
  i3122.shadowProjection = i3123[9]
  i3122.shadowResolution = i3123[10]
  i3122.softParticles = !!i3123[11]
  i3122.softVegetation = !!i3123[12]
  i3122.activeColorSpace = i3123[13]
  i3122.desiredColorSpace = i3123[14]
  i3122.masterTextureLimit = i3123[15]
  i3122.maxQueuedFrames = i3123[16]
  i3122.particleRaycastBudget = i3123[17]
  i3122.pixelLightCount = i3123[18]
  i3122.realtimeReflectionProbes = !!i3123[19]
  i3122.shadowCascade2Split = i3123[20]
  i3122.shadowCascade4Split = new pc.Vec3( i3123[21], i3123[22], i3123[23] )
  i3122.streamingMipmapsActive = !!i3123[24]
  i3122.vSyncCount = i3123[25]
  i3122.asyncUploadBufferSize = i3123[26]
  i3122.asyncUploadTimeSlice = i3123[27]
  i3122.billboardsFaceCameraPosition = !!i3123[28]
  i3122.shadowNearPlaneOffset = i3123[29]
  i3122.streamingMipmapsMemoryBudget = i3123[30]
  i3122.maximumLODLevel = i3123[31]
  i3122.streamingMipmapsAddAllCameras = !!i3123[32]
  i3122.streamingMipmapsMaxLevelReduction = i3123[33]
  i3122.streamingMipmapsRenderersPerFrame = i3123[34]
  i3122.resolutionScalingFixedDPIFactor = i3123[35]
  i3122.streamingMipmapsMaxFileIORequests = i3123[36]
  i3122.currentQualityLevel = i3123[37]
  return i3122
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3130 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3131 = data
  i3130.xPlacement = i3131[0]
  i3130.yPlacement = i3131[1]
  i3130.xAdvance = i3131[2]
  i3130.yAdvance = i3131[3]
  return i3130
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[12],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[12],"79":[80],"81":[82],"83":[82],"19":[2],"34":[16],"84":[2],"85":[86],"87":[88],"89":[86],"90":[2],"91":[2],"21":[19],"6":[3,2],"92":[2],"20":[19],"30":[2],"93":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[2],"101":[3,2],"102":[2],"103":[2],"104":[2],"105":[2],"106":[3,2],"107":[2],"108":[37],"109":[37],"38":[37],"110":[37],"111":[12],"112":[12],"113":[114],"115":[12],"116":[2],"117":[80,2],"17":[2,3],"118":[2],"119":[3,2],"120":[80],"121":[3,2],"122":[2],"123":[86]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","TMPro.TMP_FontAsset","UnityEngine.Material","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","Source.ClickCta","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "22.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Baskets4124";

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

Deserializers.buildID = "74994deb-ca1b-48c4-8652-a9a30aded108";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

