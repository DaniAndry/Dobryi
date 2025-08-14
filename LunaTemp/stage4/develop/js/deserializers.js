var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2580 = root || request.c( 'UnityEngine.JointSpring' )
  var i2581 = data
  i2580.spring = i2581[0]
  i2580.damper = i2581[1]
  i2580.targetPosition = i2581[2]
  return i2580
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2582 = root || request.c( 'UnityEngine.JointMotor' )
  var i2583 = data
  i2582.m_TargetVelocity = i2583[0]
  i2582.m_Force = i2583[1]
  i2582.m_FreeSpin = i2583[2]
  return i2582
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2584 = root || request.c( 'UnityEngine.JointLimits' )
  var i2585 = data
  i2584.m_Min = i2585[0]
  i2584.m_Max = i2585[1]
  i2584.m_Bounciness = i2585[2]
  i2584.m_BounceMinVelocity = i2585[3]
  i2584.m_ContactDistance = i2585[4]
  i2584.minBounce = i2585[5]
  i2584.maxBounce = i2585[6]
  return i2584
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2586 = root || request.c( 'UnityEngine.JointDrive' )
  var i2587 = data
  i2586.m_PositionSpring = i2587[0]
  i2586.m_PositionDamper = i2587[1]
  i2586.m_MaximumForce = i2587[2]
  i2586.m_UseAcceleration = i2587[3]
  return i2586
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2588 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2589 = data
  i2588.m_Spring = i2589[0]
  i2588.m_Damper = i2589[1]
  return i2588
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2590 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2591 = data
  i2590.m_Limit = i2591[0]
  i2590.m_Bounciness = i2591[1]
  i2590.m_ContactDistance = i2591[2]
  return i2590
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2592 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2593 = data
  i2592.m_ExtremumSlip = i2593[0]
  i2592.m_ExtremumValue = i2593[1]
  i2592.m_AsymptoteSlip = i2593[2]
  i2592.m_AsymptoteValue = i2593[3]
  i2592.m_Stiffness = i2593[4]
  return i2592
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2594 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2595 = data
  i2594.m_LowerAngle = i2595[0]
  i2594.m_UpperAngle = i2595[1]
  return i2594
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2596 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2597 = data
  i2596.m_MotorSpeed = i2597[0]
  i2596.m_MaximumMotorTorque = i2597[1]
  return i2596
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2598 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2599 = data
  i2598.m_DampingRatio = i2599[0]
  i2598.m_Frequency = i2599[1]
  i2598.m_Angle = i2599[2]
  return i2598
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2600 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2601 = data
  i2600.m_LowerTranslation = i2601[0]
  i2600.m_UpperTranslation = i2601[1]
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2603 = data
  i2602.name = i2603[0]
  i2602.width = i2603[1]
  i2602.height = i2603[2]
  i2602.mipmapCount = i2603[3]
  i2602.anisoLevel = i2603[4]
  i2602.filterMode = i2603[5]
  i2602.hdr = !!i2603[6]
  i2602.format = i2603[7]
  i2602.wrapMode = i2603[8]
  i2602.alphaIsTransparency = !!i2603[9]
  i2602.alphaSource = i2603[10]
  i2602.graphicsFormat = i2603[11]
  i2602.sRGBTexture = !!i2603[12]
  i2602.desiredColorSpace = i2603[13]
  i2602.wrapU = i2603[14]
  i2602.wrapV = i2603[15]
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2604 = root || new pc.UnityMaterial()
  var i2605 = data
  i2604.name = i2605[0]
  request.r(i2605[1], i2605[2], 0, i2604, 'shader')
  i2604.renderQueue = i2605[3]
  i2604.enableInstancing = !!i2605[4]
  var i2607 = i2605[5]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2607[i + 0]) );
  }
  i2604.floatParameters = i2606
  var i2609 = i2605[6]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2609[i + 0]) );
  }
  i2604.colorParameters = i2608
  var i2611 = i2605[7]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2611[i + 0]) );
  }
  i2604.vectorParameters = i2610
  var i2613 = i2605[8]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2613[i + 0]) );
  }
  i2604.textureParameters = i2612
  var i2615 = i2605[9]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2615[i + 0]) );
  }
  i2604.materialFlags = i2614
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2619 = data
  i2618.name = i2619[0]
  i2618.value = i2619[1]
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2623 = data
  i2622.name = i2623[0]
  i2622.value = new pc.Color(i2623[1], i2623[2], i2623[3], i2623[4])
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2627 = data
  i2626.name = i2627[0]
  i2626.value = new pc.Vec4( i2627[1], i2627[2], i2627[3], i2627[4] )
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2631 = data
  i2630.name = i2631[0]
  request.r(i2631[1], i2631[2], 0, i2630, 'value')
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2635 = data
  i2634.name = i2635[0]
  i2634.enabled = !!i2635[1]
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2637 = data
  i2636.pivot = new pc.Vec2( i2637[0], i2637[1] )
  i2636.anchorMin = new pc.Vec2( i2637[2], i2637[3] )
  i2636.anchorMax = new pc.Vec2( i2637[4], i2637[5] )
  i2636.sizeDelta = new pc.Vec2( i2637[6], i2637[7] )
  i2636.anchoredPosition3D = new pc.Vec3( i2637[8], i2637[9], i2637[10] )
  i2636.rotation = new pc.Quat(i2637[11], i2637[12], i2637[13], i2637[14])
  i2636.scale = new pc.Vec3( i2637[15], i2637[16], i2637[17] )
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2639 = data
  i2638.cullTransparentMesh = !!i2639[0]
  return i2638
}

Deserializers["People"] = function (request, data, root) {
  var i2640 = root || request.c( 'People' )
  var i2641 = data
  request.r(i2641[0], i2641[1], 0, i2640, '_readyImage')
  request.r(i2641[2], i2641[3], 0, i2640, '_additiveImage1')
  request.r(i2641[4], i2641[5], 0, i2640, '_additiveImage2')
  request.r(i2641[6], i2641[7], 0, i2640, '_endPoint')
  request.r(i2641[8], i2641[9], 0, i2640, 'Bank')
  request.r(i2641[10], i2641[11], 0, i2640, '_sizeText')
  i2640.CupType = i2641[12]
  i2640.JuiceType = i2641[13]
  i2640.AdditiveType1 = i2641[14]
  i2640.AdditiveType2 = i2641[15]
  request.r(i2641[16], i2641[17], 0, i2640, '_finishSound')
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2643 = data
  request.r(i2643[0], i2643[1], 0, i2642, 'clip')
  request.r(i2643[2], i2643[3], 0, i2642, 'outputAudioMixerGroup')
  i2642.playOnAwake = !!i2643[4]
  i2642.loop = !!i2643[5]
  i2642.time = i2643[6]
  i2642.volume = i2643[7]
  i2642.pitch = i2643[8]
  i2642.enabled = !!i2643[9]
  return i2642
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2644 = root || request.c( 'UnityEngine.UI.Image' )
  var i2645 = data
  request.r(i2645[0], i2645[1], 0, i2644, 'm_Sprite')
  i2644.m_Type = i2645[2]
  i2644.m_PreserveAspect = !!i2645[3]
  i2644.m_FillCenter = !!i2645[4]
  i2644.m_FillMethod = i2645[5]
  i2644.m_FillAmount = i2645[6]
  i2644.m_FillClockwise = !!i2645[7]
  i2644.m_FillOrigin = i2645[8]
  i2644.m_UseSpriteMesh = !!i2645[9]
  i2644.m_PixelsPerUnitMultiplier = i2645[10]
  request.r(i2645[11], i2645[12], 0, i2644, 'm_Material')
  i2644.m_Maskable = !!i2645[13]
  i2644.m_Color = new pc.Color(i2645[14], i2645[15], i2645[16], i2645[17])
  i2644.m_RaycastTarget = !!i2645[18]
  i2644.m_RaycastPadding = new pc.Vec4( i2645[19], i2645[20], i2645[21], i2645[22] )
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2647 = data
  i2646.name = i2647[0]
  i2646.tagId = i2647[1]
  i2646.enabled = !!i2647[2]
  i2646.isStatic = !!i2647[3]
  i2646.layer = i2647[4]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2649 = data
  i2648.name = i2649[0]
  i2648.index = i2649[1]
  i2648.startup = !!i2649[2]
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2651 = data
  i2650.position = new pc.Vec3( i2651[0], i2651[1], i2651[2] )
  i2650.scale = new pc.Vec3( i2651[3], i2651[4], i2651[5] )
  i2650.rotation = new pc.Quat(i2651[6], i2651[7], i2651[8], i2651[9])
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2653 = data
  i2652.enabled = !!i2653[0]
  i2652.aspect = i2653[1]
  i2652.orthographic = !!i2653[2]
  i2652.orthographicSize = i2653[3]
  i2652.backgroundColor = new pc.Color(i2653[4], i2653[5], i2653[6], i2653[7])
  i2652.nearClipPlane = i2653[8]
  i2652.farClipPlane = i2653[9]
  i2652.fieldOfView = i2653[10]
  i2652.depth = i2653[11]
  i2652.clearFlags = i2653[12]
  i2652.cullingMask = i2653[13]
  i2652.rect = i2653[14]
  request.r(i2653[15], i2653[16], 0, i2652, 'targetTexture')
  i2652.usePhysicalProperties = !!i2653[17]
  i2652.focalLength = i2653[18]
  i2652.sensorSize = new pc.Vec2( i2653[19], i2653[20] )
  i2652.lensShift = new pc.Vec2( i2653[21], i2653[22] )
  i2652.gateFit = i2653[23]
  i2652.commandBufferCount = i2653[24]
  i2652.cameraType = i2653[25]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2655 = data
  request.r(i2655[0], i2655[1], 0, i2654, 'animatorController')
  request.r(i2655[2], i2655[3], 0, i2654, 'avatar')
  i2654.updateMode = i2655[4]
  i2654.hasTransformHierarchy = !!i2655[5]
  i2654.applyRootMotion = !!i2655[6]
  var i2657 = i2655[7]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 2) {
  request.r(i2657[i + 0], i2657[i + 1], 2, i2656, '')
  }
  i2654.humanBones = i2656
  i2654.enabled = !!i2655[8]
  return i2654
}

Deserializers["Bank"] = function (request, data, root) {
  var i2660 = root || request.c( 'Bank' )
  var i2661 = data
  request.r(i2661[0], i2661[1], 0, i2660, 'BuyBigCupButton')
  request.r(i2661[2], i2661[3], 0, i2660, 'BigCupButton')
  request.r(i2661[4], i2661[5], 0, i2660, 'MiddleCupButton')
  request.r(i2661[6], i2661[7], 0, i2660, 'MoneyText')
  request.r(i2661[8], i2661[9], 0, i2660, 'Tutorial')
  request.r(i2661[10], i2661[11], 0, i2660, 'BuyAdditiveButton')
  request.r(i2661[12], i2661[13], 0, i2660, 'BuyJuiceButton')
  request.r(i2661[14], i2661[15], 0, i2660, 'JuiceButton1')
  request.r(i2661[16], i2661[17], 0, i2660, 'JuiceButton2')
  request.r(i2661[18], i2661[19], 0, i2660, 'JuiceButton3')
  request.r(i2661[20], i2661[21], 0, i2660, 'Additive1Button')
  request.r(i2661[22], i2661[23], 0, i2660, 'Additive2Button')
  i2660.Money = i2661[24]
  i2660.IsBigCupBuy = !!i2661[25]
  i2660.IsJuiceBuy = !!i2661[26]
  i2660.IsAdditiveBuy = !!i2661[27]
  request.r(i2661[28], i2661[29], 0, i2660, '_buySound')
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2663 = data
  i2662.enabled = !!i2663[0]
  i2662.planeDistance = i2663[1]
  i2662.referencePixelsPerUnit = i2663[2]
  i2662.isFallbackOverlay = !!i2663[3]
  i2662.renderMode = i2663[4]
  i2662.renderOrder = i2663[5]
  i2662.sortingLayerName = i2663[6]
  i2662.sortingOrder = i2663[7]
  i2662.scaleFactor = i2663[8]
  request.r(i2663[9], i2663[10], 0, i2662, 'worldCamera')
  i2662.overrideSorting = !!i2663[11]
  i2662.pixelPerfect = !!i2663[12]
  i2662.targetDisplay = i2663[13]
  i2662.overridePixelPerfect = !!i2663[14]
  return i2662
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2664 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2665 = data
  i2664.m_UiScaleMode = i2665[0]
  i2664.m_ReferencePixelsPerUnit = i2665[1]
  i2664.m_ScaleFactor = i2665[2]
  i2664.m_ReferenceResolution = new pc.Vec2( i2665[3], i2665[4] )
  i2664.m_ScreenMatchMode = i2665[5]
  i2664.m_MatchWidthOrHeight = i2665[6]
  i2664.m_PhysicalUnit = i2665[7]
  i2664.m_FallbackScreenDPI = i2665[8]
  i2664.m_DefaultSpriteDPI = i2665[9]
  i2664.m_DynamicPixelsPerUnit = i2665[10]
  i2664.m_PresetInfoIsWorld = !!i2665[11]
  return i2664
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2666 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2667 = data
  i2666.m_IgnoreReversedGraphics = !!i2667[0]
  i2666.m_BlockingObjects = i2667[1]
  i2666.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2667[2] )
  return i2666
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i2668 = root || request.c( 'ImageShiftOnOrientation' )
  var i2669 = data
  var i2671 = i2669[0]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.push( request.d('ItemSwitcherData', i2671[i + 0]) );
  }
  i2668.Items = i2670
  request.r(i2669[1], i2669[2], 0, i2668, '_backHorizontal')
  request.r(i2669[3], i2669[4], 0, i2668, '_backVertical')
  request.r(i2669[5], i2669[6], 0, i2668, '_tableHorizontal')
  request.r(i2669[7], i2669[8], 0, i2668, '_tableVertical')
  i2668.IsDebug = !!i2669[9]
  i2668.CanCopy = !!i2669[10]
  return i2668
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i2674 = root || request.c( 'ItemSwitcherData' )
  var i2675 = data
  request.r(i2675[0], i2675[1], 0, i2674, 'Target')
  i2674.HorizontalAnchoredPosition = new pc.Vec2( i2675[2], i2675[3] )
  i2674.SizeHorizontal = new pc.Vec2( i2675[4], i2675[5] )
  i2674.VerticalAnchoredPosition = new pc.Vec2( i2675[6], i2675[7] )
  i2674.SizeVertical = new pc.Vec2( i2675[8], i2675[9] )
  i2674.MinHorizontal = new pc.Vec2( i2675[10], i2675[11] )
  i2674.MaxHorizontal = new pc.Vec2( i2675[12], i2675[13] )
  i2674.MinVertical = new pc.Vec2( i2675[14], i2675[15] )
  i2674.MaxVertical = new pc.Vec2( i2675[16], i2675[17] )
  i2674.IsAnchored = !!i2675[18]
  i2674.IsDebug = !!i2675[19]
  i2674.CopyHorizontal = !!i2675[20]
  i2674.CopyVertical = !!i2675[21]
  return i2674
}

Deserializers["Point"] = function (request, data, root) {
  var i2676 = root || request.c( 'Point' )
  var i2677 = data
  return i2676
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2678 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2679 = data
  i2678.m_hasFontAssetChanged = !!i2679[0]
  request.r(i2679[1], i2679[2], 0, i2678, 'm_baseMaterial')
  i2678.m_maskOffset = new pc.Vec4( i2679[3], i2679[4], i2679[5], i2679[6] )
  i2678.m_text = i2679[7]
  i2678.m_isRightToLeft = !!i2679[8]
  request.r(i2679[9], i2679[10], 0, i2678, 'm_fontAsset')
  request.r(i2679[11], i2679[12], 0, i2678, 'm_sharedMaterial')
  var i2681 = i2679[13]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 2) {
  request.r(i2681[i + 0], i2681[i + 1], 2, i2680, '')
  }
  i2678.m_fontSharedMaterials = i2680
  request.r(i2679[14], i2679[15], 0, i2678, 'm_fontMaterial')
  var i2683 = i2679[16]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 2) {
  request.r(i2683[i + 0], i2683[i + 1], 2, i2682, '')
  }
  i2678.m_fontMaterials = i2682
  i2678.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2679[17], i2679[18], i2679[19], i2679[20])
  i2678.m_fontColor = new pc.Color(i2679[21], i2679[22], i2679[23], i2679[24])
  i2678.m_enableVertexGradient = !!i2679[25]
  i2678.m_colorMode = i2679[26]
  i2678.m_fontColorGradient = request.d('TMPro.VertexGradient', i2679[27], i2678.m_fontColorGradient)
  request.r(i2679[28], i2679[29], 0, i2678, 'm_fontColorGradientPreset')
  request.r(i2679[30], i2679[31], 0, i2678, 'm_spriteAsset')
  i2678.m_tintAllSprites = !!i2679[32]
  request.r(i2679[33], i2679[34], 0, i2678, 'm_StyleSheet')
  i2678.m_TextStyleHashCode = i2679[35]
  i2678.m_overrideHtmlColors = !!i2679[36]
  i2678.m_faceColor = UnityEngine.Color32.ConstructColor(i2679[37], i2679[38], i2679[39], i2679[40])
  i2678.m_fontSize = i2679[41]
  i2678.m_fontSizeBase = i2679[42]
  i2678.m_fontWeight = i2679[43]
  i2678.m_enableAutoSizing = !!i2679[44]
  i2678.m_fontSizeMin = i2679[45]
  i2678.m_fontSizeMax = i2679[46]
  i2678.m_fontStyle = i2679[47]
  i2678.m_HorizontalAlignment = i2679[48]
  i2678.m_VerticalAlignment = i2679[49]
  i2678.m_textAlignment = i2679[50]
  i2678.m_characterSpacing = i2679[51]
  i2678.m_wordSpacing = i2679[52]
  i2678.m_lineSpacing = i2679[53]
  i2678.m_lineSpacingMax = i2679[54]
  i2678.m_paragraphSpacing = i2679[55]
  i2678.m_charWidthMaxAdj = i2679[56]
  i2678.m_enableWordWrapping = !!i2679[57]
  i2678.m_wordWrappingRatios = i2679[58]
  i2678.m_overflowMode = i2679[59]
  request.r(i2679[60], i2679[61], 0, i2678, 'm_linkedTextComponent')
  request.r(i2679[62], i2679[63], 0, i2678, 'parentLinkedComponent')
  i2678.m_enableKerning = !!i2679[64]
  i2678.m_enableExtraPadding = !!i2679[65]
  i2678.checkPaddingRequired = !!i2679[66]
  i2678.m_isRichText = !!i2679[67]
  i2678.m_parseCtrlCharacters = !!i2679[68]
  i2678.m_isOrthographic = !!i2679[69]
  i2678.m_isCullingEnabled = !!i2679[70]
  i2678.m_horizontalMapping = i2679[71]
  i2678.m_verticalMapping = i2679[72]
  i2678.m_uvLineOffset = i2679[73]
  i2678.m_geometrySortingOrder = i2679[74]
  i2678.m_IsTextObjectScaleStatic = !!i2679[75]
  i2678.m_VertexBufferAutoSizeReduction = !!i2679[76]
  i2678.m_useMaxVisibleDescender = !!i2679[77]
  i2678.m_pageToDisplay = i2679[78]
  i2678.m_margin = new pc.Vec4( i2679[79], i2679[80], i2679[81], i2679[82] )
  i2678.m_isUsingLegacyAnimationComponent = !!i2679[83]
  i2678.m_isVolumetricText = !!i2679[84]
  request.r(i2679[85], i2679[86], 0, i2678, 'm_Material')
  i2678.m_Maskable = !!i2679[87]
  i2678.m_Color = new pc.Color(i2679[88], i2679[89], i2679[90], i2679[91])
  i2678.m_RaycastTarget = !!i2679[92]
  i2678.m_RaycastPadding = new pc.Vec4( i2679[93], i2679[94], i2679[95], i2679[96] )
  return i2678
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2686 = root || request.c( 'TMPro.VertexGradient' )
  var i2687 = data
  i2686.topLeft = new pc.Color(i2687[0], i2687[1], i2687[2], i2687[3])
  i2686.topRight = new pc.Color(i2687[4], i2687[5], i2687[6], i2687[7])
  i2686.bottomLeft = new pc.Color(i2687[8], i2687[9], i2687[10], i2687[11])
  i2686.bottomRight = new pc.Color(i2687[12], i2687[13], i2687[14], i2687[15])
  return i2686
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i2688 = root || request.c( 'PeopleContainer' )
  var i2689 = data
  var i2691 = i2689[0]
  var i2690 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i2691.length; i += 2) {
  request.r(i2691[i + 0], i2691[i + 1], 1, i2690, '')
  }
  i2688.CurrentPeoples = i2690
  var i2693 = i2689[1]
  var i2692 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i2693.length; i += 2) {
  request.r(i2693[i + 0], i2693[i + 1], 1, i2692, '')
  }
  i2688._peoples = i2692
  request.r(i2689[2], i2689[3], 0, i2688, '_tutorialPeople')
  request.r(i2689[4], i2689[5], 0, i2688, '_spawnPoint')
  request.r(i2689[6], i2689[7], 0, i2688, '_point1')
  request.r(i2689[8], i2689[9], 0, i2688, '_point2')
  request.r(i2689[10], i2689[11], 0, i2688, '_endPoint')
  request.r(i2689[12], i2689[13], 0, i2688, '_juiceConfig')
  request.r(i2689[14], i2689[15], 0, i2688, '_tutorial')
  return i2688
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2696 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2697 = data
  i2696.m_HorizontalFit = i2697[0]
  i2696.m_VerticalFit = i2697[1]
  return i2696
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2698 = root || request.c( 'UnityEngine.UI.Button' )
  var i2699 = data
  i2698.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2699[0], i2698.m_OnClick)
  i2698.m_Navigation = request.d('UnityEngine.UI.Navigation', i2699[1], i2698.m_Navigation)
  i2698.m_Transition = i2699[2]
  i2698.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2699[3], i2698.m_Colors)
  i2698.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2699[4], i2698.m_SpriteState)
  i2698.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2699[5], i2698.m_AnimationTriggers)
  i2698.m_Interactable = !!i2699[6]
  request.r(i2699[7], i2699[8], 0, i2698, 'm_TargetGraphic')
  return i2698
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2700 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2701 = data
  i2700.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2701[0], i2700.m_PersistentCalls)
  return i2700
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2702 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2703 = data
  var i2705 = i2703[0]
  var i2704 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.add(request.d('UnityEngine.Events.PersistentCall', i2705[i + 0]));
  }
  i2702.m_Calls = i2704
  return i2702
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2708 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2709 = data
  request.r(i2709[0], i2709[1], 0, i2708, 'm_Target')
  i2708.m_TargetAssemblyTypeName = i2709[2]
  i2708.m_MethodName = i2709[3]
  i2708.m_Mode = i2709[4]
  i2708.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2709[5], i2708.m_Arguments)
  i2708.m_CallState = i2709[6]
  return i2708
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2710 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2711 = data
  i2710.m_Mode = i2711[0]
  i2710.m_WrapAround = !!i2711[1]
  request.r(i2711[2], i2711[3], 0, i2710, 'm_SelectOnUp')
  request.r(i2711[4], i2711[5], 0, i2710, 'm_SelectOnDown')
  request.r(i2711[6], i2711[7], 0, i2710, 'm_SelectOnLeft')
  request.r(i2711[8], i2711[9], 0, i2710, 'm_SelectOnRight')
  return i2710
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2712 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2713 = data
  i2712.m_NormalColor = new pc.Color(i2713[0], i2713[1], i2713[2], i2713[3])
  i2712.m_HighlightedColor = new pc.Color(i2713[4], i2713[5], i2713[6], i2713[7])
  i2712.m_PressedColor = new pc.Color(i2713[8], i2713[9], i2713[10], i2713[11])
  i2712.m_SelectedColor = new pc.Color(i2713[12], i2713[13], i2713[14], i2713[15])
  i2712.m_DisabledColor = new pc.Color(i2713[16], i2713[17], i2713[18], i2713[19])
  i2712.m_ColorMultiplier = i2713[20]
  i2712.m_FadeDuration = i2713[21]
  return i2712
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2714 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2715 = data
  request.r(i2715[0], i2715[1], 0, i2714, 'm_HighlightedSprite')
  request.r(i2715[2], i2715[3], 0, i2714, 'm_PressedSprite')
  request.r(i2715[4], i2715[5], 0, i2714, 'm_SelectedSprite')
  request.r(i2715[6], i2715[7], 0, i2714, 'm_DisabledSprite')
  return i2714
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2716 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2717 = data
  i2716.m_NormalTrigger = i2717[0]
  i2716.m_HighlightedTrigger = i2717[1]
  i2716.m_PressedTrigger = i2717[2]
  i2716.m_SelectedTrigger = i2717[3]
  i2716.m_DisabledTrigger = i2717[4]
  return i2716
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2718 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2719 = data
  request.r(i2719[0], i2719[1], 0, i2718, 'm_ObjectArgument')
  i2718.m_ObjectArgumentAssemblyTypeName = i2719[2]
  i2718.m_IntArgument = i2719[3]
  i2718.m_FloatArgument = i2719[4]
  i2718.m_StringArgument = i2719[5]
  i2718.m_BoolArgument = !!i2719[6]
  return i2718
}

Deserializers["BackImage"] = function (request, data, root) {
  var i2720 = root || request.c( 'BackImage' )
  var i2721 = data
  return i2720
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i2722 = root || request.c( 'AheadImage' )
  var i2723 = data
  return i2722
}

Deserializers["Order"] = function (request, data, root) {
  var i2724 = root || request.c( 'Order' )
  var i2725 = data
  request.r(i2725[0], i2725[1], 0, i2724, '_juiceAnimator')
  request.r(i2725[2], i2725[3], 0, i2724, '_cupAnimator')
  request.r(i2725[4], i2725[5], 0, i2724, '_canvasAnimator')
  i2724.CupType = i2725[6]
  i2724.JuiceType = i2725[7]
  i2724.AdditiveType1 = i2725[8]
  i2724.AdditiveType2 = i2725[9]
  i2724.IsFree = !!i2725[10]
  i2724.IsSpriteReady = !!i2725[11]
  i2724.IsCupReady = !!i2725[12]
  i2724.IsJuiceReady = !!i2725[13]
  i2724.IsPouring = !!i2725[14]
  request.r(i2725[15], i2725[16], 0, i2724, '_iceButton')
  request.r(i2725[17], i2725[18], 0, i2724, '_grassButton')
  request.r(i2725[19], i2725[20], 0, i2724, '_juiceBallsButton')
  request.r(i2725[21], i2725[22], 0, i2724, '_strawButton')
  request.r(i2725[23], i2725[24], 0, i2724, '_bigCupButton')
  request.r(i2725[25], i2725[26], 0, i2724, '_middleCupButton')
  request.r(i2725[27], i2725[28], 0, i2724, '_smallCupButton')
  request.r(i2725[29], i2725[30], 0, i2724, '_appleButton')
  request.r(i2725[31], i2725[32], 0, i2724, '_orangeButton')
  request.r(i2725[33], i2725[34], 0, i2724, '_multifruitButton')
  request.r(i2725[35], i2725[36], 0, i2724, '_tomatoButton')
  request.r(i2725[37], i2725[38], 0, i2724, '_cherryButton')
  request.r(i2725[39], i2725[40], 0, i2724, '_smallRawJuiceImage')
  request.r(i2725[41], i2725[42], 0, i2724, '_middleRawJuiceImage')
  request.r(i2725[43], i2725[44], 0, i2724, '_bigRawJuiceImage')
  request.r(i2725[45], i2725[46], 0, i2724, '_smallReadyJuiceImage')
  request.r(i2725[47], i2725[48], 0, i2724, '_middleReadyJuiceImage')
  request.r(i2725[49], i2725[50], 0, i2724, '_bigReadyJuiceImage')
  request.r(i2725[51], i2725[52], 0, i2724, '_backImage')
  request.r(i2725[53], i2725[54], 0, i2724, '_aheadImage')
  request.r(i2725[55], i2725[56], 0, i2724, '_config')
  request.r(i2725[57], i2725[58], 0, i2724, '_takeOrderButton')
  request.r(i2725[59], i2725[60], 0, i2724, '_peopleContainer')
  request.r(i2725[61], i2725[62], 0, i2724, '_tutorial')
  request.r(i2725[63], i2725[64], 0, i2724, '_bText')
  request.r(i2725[65], i2725[66], 0, i2724, '_mText')
  request.r(i2725[67], i2725[68], 0, i2724, '_sText')
  request.r(i2725[69], i2725[70], 0, i2724, '_garbageButton')
  request.r(i2725[71], i2725[72], 0, i2724, '_clickSound')
  request.r(i2725[73], i2725[74], 0, i2724, '_juiceSound')
  return i2724
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i2726 = root || request.c( 'Tutorial' )
  var i2727 = data
  i2726.IsTutorial = !!i2727[0]
  request.r(i2727[1], i2727[2], 0, i2726, 'Finger1')
  request.r(i2727[3], i2727[4], 0, i2726, 'Finger2')
  request.r(i2727[5], i2727[6], 0, i2726, 'Finger3')
  request.r(i2727[7], i2727[8], 0, i2726, 'Finger4')
  request.r(i2727[9], i2727[10], 0, i2726, 'Finger5')
  request.r(i2727[11], i2727[12], 0, i2726, 'BuyBigCupFinger')
  request.r(i2727[13], i2727[14], 0, i2726, 'BuyJuiceFinger')
  request.r(i2727[15], i2727[16], 0, i2726, 'SmallCupButton')
  request.r(i2727[17], i2727[18], 0, i2726, 'JuiceButton')
  request.r(i2727[19], i2727[20], 0, i2726, 'StrawButton')
  request.r(i2727[21], i2727[22], 0, i2726, 'AdditiveButton')
  request.r(i2727[23], i2727[24], 0, i2726, 'ReadyButton')
  var i2729 = i2727[25]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 2) {
  request.r(i2729[i + 0], i2729[i + 1], 2, i2728, '')
  }
  i2726.Buttons = i2728
  request.r(i2727[26], i2727[27], 0, i2726, 'Bank')
  return i2726
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i2732 = root || request.c( 'SoundSwitcher' )
  var i2733 = data
  request.r(i2733[0], i2733[1], 0, i2732, '_onImage')
  request.r(i2733[2], i2733[3], 0, i2732, '_offImage')
  return i2732
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2734 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2735 = data
  request.r(i2735[0], i2735[1], 0, i2734, 'm_FirstSelected')
  i2734.m_sendNavigationEvents = !!i2735[2]
  i2734.m_DragThreshold = i2735[3]
  return i2734
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2736 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2737 = data
  i2736.m_HorizontalAxis = i2737[0]
  i2736.m_VerticalAxis = i2737[1]
  i2736.m_SubmitButton = i2737[2]
  i2736.m_CancelButton = i2737[3]
  i2736.m_InputActionsPerSecond = i2737[4]
  i2736.m_RepeatDelay = i2737[5]
  i2736.m_ForceModuleActive = !!i2737[6]
  i2736.m_SendPointerHoverToParent = !!i2737[7]
  return i2736
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i2738 = root || request.c( 'JuiceConfig' )
  var i2739 = data
  request.r(i2739[0], i2739[1], 0, i2738, 'EntityBigCup')
  request.r(i2739[2], i2739[3], 0, i2738, 'TomatoBigCup')
  request.r(i2739[4], i2739[5], 0, i2738, 'AppleBigCup')
  request.r(i2739[6], i2739[7], 0, i2738, 'OrangeBigCup')
  request.r(i2739[8], i2739[9], 0, i2738, 'CherryBigCup')
  request.r(i2739[10], i2739[11], 0, i2738, 'MultifruitBigCup')
  request.r(i2739[12], i2739[13], 0, i2738, 'TomatoBigStrawCup')
  request.r(i2739[14], i2739[15], 0, i2738, 'MultifruitBigStrawCup')
  request.r(i2739[16], i2739[17], 0, i2738, 'AppleBigStrawCup')
  request.r(i2739[18], i2739[19], 0, i2738, 'OrangeBigStrawCup')
  request.r(i2739[20], i2739[21], 0, i2738, 'CherryBigStrawCup')
  request.r(i2739[22], i2739[23], 0, i2738, 'MultifruitBigBallsCup')
  request.r(i2739[24], i2739[25], 0, i2738, 'TomatoBigBallsCup')
  request.r(i2739[26], i2739[27], 0, i2738, 'AppleBigBallsCup')
  request.r(i2739[28], i2739[29], 0, i2738, 'OrangeBigBallsCup')
  request.r(i2739[30], i2739[31], 0, i2738, 'CherryBigBallsCup')
  request.r(i2739[32], i2739[33], 0, i2738, 'EntityMiddleCup')
  request.r(i2739[34], i2739[35], 0, i2738, 'TomatoMiddleCup')
  request.r(i2739[36], i2739[37], 0, i2738, 'AppleMiddleCup')
  request.r(i2739[38], i2739[39], 0, i2738, 'OrangeMiddleCup')
  request.r(i2739[40], i2739[41], 0, i2738, 'CherryMiddleCup')
  request.r(i2739[42], i2739[43], 0, i2738, 'MultifruitMiddleCup')
  request.r(i2739[44], i2739[45], 0, i2738, 'TomatoMiddleStrawCup')
  request.r(i2739[46], i2739[47], 0, i2738, 'MultifruitMiddleStrawCup')
  request.r(i2739[48], i2739[49], 0, i2738, 'AppleMiddleStrawCup')
  request.r(i2739[50], i2739[51], 0, i2738, 'OrangeMiddleStrawCup')
  request.r(i2739[52], i2739[53], 0, i2738, 'CherryMiddleStrawCup')
  request.r(i2739[54], i2739[55], 0, i2738, 'MultifruitMiddleBallsCup')
  request.r(i2739[56], i2739[57], 0, i2738, 'TomatoMiddleBallsCup')
  request.r(i2739[58], i2739[59], 0, i2738, 'AppleMiddleBallsCup')
  request.r(i2739[60], i2739[61], 0, i2738, 'OrangeMiddleBallsCup')
  request.r(i2739[62], i2739[63], 0, i2738, 'CherryMiddleBallsCup')
  request.r(i2739[64], i2739[65], 0, i2738, 'EntitySmallCup')
  request.r(i2739[66], i2739[67], 0, i2738, 'TomatoSmallCup')
  request.r(i2739[68], i2739[69], 0, i2738, 'AppleSmallCup')
  request.r(i2739[70], i2739[71], 0, i2738, 'OrangeSmallCup')
  request.r(i2739[72], i2739[73], 0, i2738, 'CherrySmallCup')
  request.r(i2739[74], i2739[75], 0, i2738, 'MultifruitSmallCup')
  request.r(i2739[76], i2739[77], 0, i2738, 'TomatoSmallStrawCup')
  request.r(i2739[78], i2739[79], 0, i2738, 'AppleSmallStrawCup')
  request.r(i2739[80], i2739[81], 0, i2738, 'OrangeSmallStrawCup')
  request.r(i2739[82], i2739[83], 0, i2738, 'CherrySmallStrawCup')
  request.r(i2739[84], i2739[85], 0, i2738, 'MultifruitSmallStrawCup')
  request.r(i2739[86], i2739[87], 0, i2738, 'AppleSmallBallsCup')
  request.r(i2739[88], i2739[89], 0, i2738, 'TomatoSmallBallsCup')
  request.r(i2739[90], i2739[91], 0, i2738, 'OrangeSmallBallsCup')
  request.r(i2739[92], i2739[93], 0, i2738, 'CherrySmallBallsCup')
  request.r(i2739[94], i2739[95], 0, i2738, 'MultifruitSmallBallsCup')
  request.r(i2739[96], i2739[97], 0, i2738, 'JuiceBallAdditive')
  request.r(i2739[98], i2739[99], 0, i2738, 'IceAdditive')
  request.r(i2739[100], i2739[101], 0, i2738, 'GrassAdditive')
  return i2738
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i2740 = root || request.c( 'TouchIdleTimer' )
  var i2741 = data
  return i2740
}

Deserializers["Helper"] = function (request, data, root) {
  var i2742 = root || request.c( 'Helper' )
  var i2743 = data
  request.r(i2743[0], i2743[1], 0, i2742, '_smallCupFinger')
  request.r(i2743[2], i2743[3], 0, i2742, '_middleCupFinger')
  request.r(i2743[4], i2743[5], 0, i2742, '_bigCupFinger')
  request.r(i2743[6], i2743[7], 0, i2742, '_iceFinger')
  request.r(i2743[8], i2743[9], 0, i2742, '_grassFinger')
  request.r(i2743[10], i2743[11], 0, i2742, '_juiceballFinger')
  request.r(i2743[12], i2743[13], 0, i2742, '_appleFinger')
  request.r(i2743[14], i2743[15], 0, i2742, '_cherryFinger')
  request.r(i2743[16], i2743[17], 0, i2742, '_orangeFinger')
  request.r(i2743[18], i2743[19], 0, i2742, '_multifruitFinger')
  request.r(i2743[20], i2743[21], 0, i2742, '_tomatoFinger')
  request.r(i2743[22], i2743[23], 0, i2742, '_strawFinger')
  request.r(i2743[24], i2743[25], 0, i2742, '_readyFinger')
  request.r(i2743[26], i2743[27], 0, i2742, '_peoples')
  request.r(i2743[28], i2743[29], 0, i2742, '_tutorial')
  request.r(i2743[30], i2743[31], 0, i2742, '_order')
  request.r(i2743[32], i2743[33], 0, i2742, '_strawButton')
  request.r(i2743[34], i2743[35], 0, i2742, '_bigCupButton')
  request.r(i2743[36], i2743[37], 0, i2742, '_middleCupButton')
  request.r(i2743[38], i2743[39], 0, i2742, '_smallCupButton')
  request.r(i2743[40], i2743[41], 0, i2742, '_readyButton')
  request.r(i2743[42], i2743[43], 0, i2742, '_touchIdleTimer')
  request.r(i2743[44], i2743[45], 0, i2742, '_finalScreen')
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2745 = data
  i2744.ambientIntensity = i2745[0]
  i2744.reflectionIntensity = i2745[1]
  i2744.ambientMode = i2745[2]
  i2744.ambientLight = new pc.Color(i2745[3], i2745[4], i2745[5], i2745[6])
  i2744.ambientSkyColor = new pc.Color(i2745[7], i2745[8], i2745[9], i2745[10])
  i2744.ambientGroundColor = new pc.Color(i2745[11], i2745[12], i2745[13], i2745[14])
  i2744.ambientEquatorColor = new pc.Color(i2745[15], i2745[16], i2745[17], i2745[18])
  i2744.fogColor = new pc.Color(i2745[19], i2745[20], i2745[21], i2745[22])
  i2744.fogEndDistance = i2745[23]
  i2744.fogStartDistance = i2745[24]
  i2744.fogDensity = i2745[25]
  i2744.fog = !!i2745[26]
  request.r(i2745[27], i2745[28], 0, i2744, 'skybox')
  i2744.fogMode = i2745[29]
  var i2747 = i2745[30]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2747[i + 0]) );
  }
  i2744.lightmaps = i2746
  i2744.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2745[31], i2744.lightProbes)
  i2744.lightmapsMode = i2745[32]
  i2744.mixedBakeMode = i2745[33]
  i2744.environmentLightingMode = i2745[34]
  i2744.ambientProbe = new pc.SphericalHarmonicsL2(i2745[35])
  i2744.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2745[36])
  i2744.useReferenceAmbientProbe = !!i2745[37]
  request.r(i2745[38], i2745[39], 0, i2744, 'customReflection')
  request.r(i2745[40], i2745[41], 0, i2744, 'defaultReflection')
  i2744.defaultReflectionMode = i2745[42]
  i2744.defaultReflectionResolution = i2745[43]
  i2744.sunLightObjectId = i2745[44]
  i2744.pixelLightCount = i2745[45]
  i2744.defaultReflectionHDR = !!i2745[46]
  i2744.hasLightDataAsset = !!i2745[47]
  i2744.hasManualGenerate = !!i2745[48]
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2751 = data
  request.r(i2751[0], i2751[1], 0, i2750, 'lightmapColor')
  request.r(i2751[2], i2751[3], 0, i2750, 'lightmapDirection')
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2752 = root || new UnityEngine.LightProbes()
  var i2753 = data
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2761 = data
  var i2763 = i2761[0]
  var i2762 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2763.length; i += 1) {
    i2762.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2763[i + 0]));
  }
  i2760.ShaderCompilationErrors = i2762
  i2760.name = i2761[1]
  i2760.guid = i2761[2]
  var i2765 = i2761[3]
  var i2764 = []
  for(var i = 0; i < i2765.length; i += 1) {
    i2764.push( i2765[i + 0] );
  }
  i2760.shaderDefinedKeywords = i2764
  var i2767 = i2761[4]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2767[i + 0]) );
  }
  i2760.passes = i2766
  var i2769 = i2761[5]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2769[i + 0]) );
  }
  i2760.usePasses = i2768
  var i2771 = i2761[6]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2771[i + 0]) );
  }
  i2760.defaultParameterValues = i2770
  request.r(i2761[7], i2761[8], 0, i2760, 'unityFallbackShader')
  i2760.readDepth = !!i2761[9]
  i2760.isCreatedByShaderGraph = !!i2761[10]
  i2760.compiled = !!i2761[11]
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2775 = data
  i2774.shaderName = i2775[0]
  i2774.errorMessage = i2775[1]
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2780 = root || new pc.UnityShaderPass()
  var i2781 = data
  i2780.id = i2781[0]
  i2780.subShaderIndex = i2781[1]
  i2780.name = i2781[2]
  i2780.passType = i2781[3]
  i2780.grabPassTextureName = i2781[4]
  i2780.usePass = !!i2781[5]
  i2780.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2781[6], i2780.zTest)
  i2780.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2781[7], i2780.zWrite)
  i2780.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2781[8], i2780.culling)
  i2780.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2781[9], i2780.blending)
  i2780.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2781[10], i2780.alphaBlending)
  i2780.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2781[11], i2780.colorWriteMask)
  i2780.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2781[12], i2780.offsetUnits)
  i2780.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2781[13], i2780.offsetFactor)
  i2780.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2781[14], i2780.stencilRef)
  i2780.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2781[15], i2780.stencilReadMask)
  i2780.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2781[16], i2780.stencilWriteMask)
  i2780.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2781[17], i2780.stencilOp)
  i2780.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2781[18], i2780.stencilOpFront)
  i2780.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2781[19], i2780.stencilOpBack)
  var i2783 = i2781[20]
  var i2782 = []
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2783[i + 0]) );
  }
  i2780.tags = i2782
  var i2785 = i2781[21]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.push( i2785[i + 0] );
  }
  i2780.passDefinedKeywords = i2784
  var i2787 = i2781[22]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2787[i + 0]) );
  }
  i2780.passDefinedKeywordGroups = i2786
  var i2789 = i2781[23]
  var i2788 = []
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2789[i + 0]) );
  }
  i2780.variants = i2788
  var i2791 = i2781[24]
  var i2790 = []
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2791[i + 0]) );
  }
  i2780.excludedVariants = i2790
  i2780.hasDepthReader = !!i2781[25]
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2793 = data
  i2792.val = i2793[0]
  i2792.name = i2793[1]
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2795 = data
  i2794.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2795[0], i2794.src)
  i2794.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2795[1], i2794.dst)
  i2794.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2795[2], i2794.op)
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2797 = data
  i2796.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2797[0], i2796.pass)
  i2796.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2797[1], i2796.fail)
  i2796.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2797[2], i2796.zFail)
  i2796.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2797[3], i2796.comp)
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2801 = data
  i2800.name = i2801[0]
  i2800.value = i2801[1]
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2805 = data
  var i2807 = i2805[0]
  var i2806 = []
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.push( i2807[i + 0] );
  }
  i2804.keywords = i2806
  i2804.hasDiscard = !!i2805[1]
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2811 = data
  i2810.passId = i2811[0]
  i2810.subShaderIndex = i2811[1]
  var i2813 = i2811[2]
  var i2812 = []
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.push( i2813[i + 0] );
  }
  i2810.keywords = i2812
  i2810.vertexProgram = i2811[3]
  i2810.fragmentProgram = i2811[4]
  i2810.exportedForWebGl2 = !!i2811[5]
  i2810.readDepth = !!i2811[6]
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2817 = data
  request.r(i2817[0], i2817[1], 0, i2816, 'shader')
  i2816.pass = i2817[2]
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2821 = data
  i2820.name = i2821[0]
  i2820.type = i2821[1]
  i2820.value = new pc.Vec4( i2821[2], i2821[3], i2821[4], i2821[5] )
  i2820.textureValue = i2821[6]
  i2820.shaderPropertyFlag = i2821[7]
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2823 = data
  i2822.name = i2823[0]
  request.r(i2823[1], i2823[2], 0, i2822, 'texture')
  i2822.aabb = i2823[3]
  i2822.vertices = i2823[4]
  i2822.triangles = i2823[5]
  i2822.textureRect = UnityEngine.Rect.MinMaxRect(i2823[6], i2823[7], i2823[8], i2823[9])
  i2822.packedRect = UnityEngine.Rect.MinMaxRect(i2823[10], i2823[11], i2823[12], i2823[13])
  i2822.border = new pc.Vec4( i2823[14], i2823[15], i2823[16], i2823[17] )
  i2822.transparency = i2823[18]
  i2822.bounds = i2823[19]
  i2822.pixelsPerUnit = i2823[20]
  i2822.textureWidth = i2823[21]
  i2822.textureHeight = i2823[22]
  i2822.nativeSize = new pc.Vec2( i2823[23], i2823[24] )
  i2822.pivot = new pc.Vec2( i2823[25], i2823[26] )
  i2822.textureRectOffset = new pc.Vec2( i2823[27], i2823[28] )
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2825 = data
  i2824.name = i2825[0]
  return i2824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2827 = data
  i2826.name = i2827[0]
  i2826.wrapMode = i2827[1]
  i2826.isLooping = !!i2827[2]
  i2826.length = i2827[3]
  var i2829 = i2827[4]
  var i2828 = []
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2829[i + 0]) );
  }
  i2826.curves = i2828
  var i2831 = i2827[5]
  var i2830 = []
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2831[i + 0]) );
  }
  i2826.events = i2830
  i2826.halfPrecision = !!i2827[6]
  i2826._frameRate = i2827[7]
  i2826.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2827[8], i2826.localBounds)
  i2826.hasMuscleCurves = !!i2827[9]
  var i2833 = i2827[10]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.push( i2833[i + 0] );
  }
  i2826.clipMuscleConstant = i2832
  i2826.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2827[11], i2826.clipBindingConstant)
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2837 = data
  i2836.path = i2837[0]
  i2836.hash = i2837[1]
  i2836.componentType = i2837[2]
  i2836.property = i2837[3]
  i2836.keys = i2837[4]
  var i2839 = i2837[5]
  var i2838 = []
  for(var i = 0; i < i2839.length; i += 1) {
    i2838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2839[i + 0]) );
  }
  i2836.objectReferenceKeys = i2838
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2843 = data
  i2842.time = i2843[0]
  request.r(i2843[1], i2843[2], 0, i2842, 'value')
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2847 = data
  i2846.functionName = i2847[0]
  i2846.floatParameter = i2847[1]
  i2846.intParameter = i2847[2]
  i2846.stringParameter = i2847[3]
  request.r(i2847[4], i2847[5], 0, i2846, 'objectReferenceParameter')
  i2846.time = i2847[6]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2849 = data
  i2848.center = new pc.Vec3( i2849[0], i2849[1], i2849[2] )
  i2848.extends = new pc.Vec3( i2849[3], i2849[4], i2849[5] )
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2853 = data
  var i2855 = i2853[0]
  var i2854 = []
  for(var i = 0; i < i2855.length; i += 1) {
    i2854.push( i2855[i + 0] );
  }
  i2852.genericBindings = i2854
  var i2857 = i2853[1]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.push( i2857[i + 0] );
  }
  i2852.pptrCurveMapping = i2856
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2859 = data
  i2858.name = i2859[0]
  i2858.ascent = i2859[1]
  i2858.originalLineHeight = i2859[2]
  i2858.fontSize = i2859[3]
  var i2861 = i2859[4]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2861[i + 0]) );
  }
  i2858.characterInfo = i2860
  request.r(i2859[5], i2859[6], 0, i2858, 'texture')
  i2858.originalFontSize = i2859[7]
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2865 = data
  i2864.index = i2865[0]
  i2864.advance = i2865[1]
  i2864.bearing = i2865[2]
  i2864.glyphWidth = i2865[3]
  i2864.glyphHeight = i2865[4]
  i2864.minX = i2865[5]
  i2864.maxX = i2865[6]
  i2864.minY = i2865[7]
  i2864.maxY = i2865[8]
  i2864.uvBottomLeftX = i2865[9]
  i2864.uvBottomLeftY = i2865[10]
  i2864.uvBottomRightX = i2865[11]
  i2864.uvBottomRightY = i2865[12]
  i2864.uvTopLeftX = i2865[13]
  i2864.uvTopLeftY = i2865[14]
  i2864.uvTopRightX = i2865[15]
  i2864.uvTopRightY = i2865[16]
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2867 = data
  i2866.name = i2867[0]
  var i2869 = i2867[1]
  var i2868 = []
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2869[i + 0]) );
  }
  i2866.layers = i2868
  var i2871 = i2867[2]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 1) {
    i2870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2871[i + 0]) );
  }
  i2866.parameters = i2870
  i2866.animationClips = i2867[3]
  i2866.avatarUnsupported = i2867[4]
  return i2866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2875 = data
  i2874.name = i2875[0]
  i2874.defaultWeight = i2875[1]
  i2874.blendingMode = i2875[2]
  i2874.avatarMask = i2875[3]
  i2874.syncedLayerIndex = i2875[4]
  i2874.syncedLayerAffectsTiming = !!i2875[5]
  i2874.syncedLayers = i2875[6]
  i2874.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2875[7], i2874.stateMachine)
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2877 = data
  i2876.id = i2877[0]
  i2876.name = i2877[1]
  i2876.path = i2877[2]
  var i2879 = i2877[3]
  var i2878 = []
  for(var i = 0; i < i2879.length; i += 1) {
    i2878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2879[i + 0]) );
  }
  i2876.states = i2878
  var i2881 = i2877[4]
  var i2880 = []
  for(var i = 0; i < i2881.length; i += 1) {
    i2880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2881[i + 0]) );
  }
  i2876.machines = i2880
  var i2883 = i2877[5]
  var i2882 = []
  for(var i = 0; i < i2883.length; i += 1) {
    i2882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2883[i + 0]) );
  }
  i2876.entryStateTransitions = i2882
  var i2885 = i2877[6]
  var i2884 = []
  for(var i = 0; i < i2885.length; i += 1) {
    i2884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2885[i + 0]) );
  }
  i2876.exitStateTransitions = i2884
  var i2887 = i2877[7]
  var i2886 = []
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2887[i + 0]) );
  }
  i2876.anyStateTransitions = i2886
  i2876.defaultStateId = i2877[8]
  return i2876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2891 = data
  i2890.id = i2891[0]
  i2890.name = i2891[1]
  i2890.cycleOffset = i2891[2]
  i2890.cycleOffsetParameter = i2891[3]
  i2890.cycleOffsetParameterActive = !!i2891[4]
  i2890.mirror = !!i2891[5]
  i2890.mirrorParameter = i2891[6]
  i2890.mirrorParameterActive = !!i2891[7]
  i2890.motionId = i2891[8]
  i2890.nameHash = i2891[9]
  i2890.fullPathHash = i2891[10]
  i2890.speed = i2891[11]
  i2890.speedParameter = i2891[12]
  i2890.speedParameterActive = !!i2891[13]
  i2890.tag = i2891[14]
  i2890.tagHash = i2891[15]
  i2890.writeDefaultValues = !!i2891[16]
  var i2893 = i2891[17]
  var i2892 = []
  for(var i = 0; i < i2893.length; i += 2) {
  request.r(i2893[i + 0], i2893[i + 1], 2, i2892, '')
  }
  i2890.behaviours = i2892
  var i2895 = i2891[18]
  var i2894 = []
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2895[i + 0]) );
  }
  i2890.transitions = i2894
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2901 = data
  i2900.fullPath = i2901[0]
  i2900.canTransitionToSelf = !!i2901[1]
  i2900.duration = i2901[2]
  i2900.exitTime = i2901[3]
  i2900.hasExitTime = !!i2901[4]
  i2900.hasFixedDuration = !!i2901[5]
  i2900.interruptionSource = i2901[6]
  i2900.offset = i2901[7]
  i2900.orderedInterruption = !!i2901[8]
  i2900.destinationStateId = i2901[9]
  i2900.isExit = !!i2901[10]
  i2900.mute = !!i2901[11]
  i2900.solo = !!i2901[12]
  var i2903 = i2901[13]
  var i2902 = []
  for(var i = 0; i < i2903.length; i += 1) {
    i2902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2903[i + 0]) );
  }
  i2900.conditions = i2902
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2909 = data
  i2908.destinationStateId = i2909[0]
  i2908.isExit = !!i2909[1]
  i2908.mute = !!i2909[2]
  i2908.solo = !!i2909[3]
  var i2911 = i2909[4]
  var i2910 = []
  for(var i = 0; i < i2911.length; i += 1) {
    i2910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2911[i + 0]) );
  }
  i2908.conditions = i2910
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2915 = data
  i2914.mode = i2915[0]
  i2914.parameter = i2915[1]
  i2914.threshold = i2915[2]
  return i2914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2919 = data
  i2918.defaultBool = !!i2919[0]
  i2918.defaultFloat = i2919[1]
  i2918.defaultInt = i2919[2]
  i2918.name = i2919[3]
  i2918.nameHash = i2919[4]
  i2918.type = i2919[5]
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2921 = data
  i2920.name = i2921[0]
  i2920.bytes64 = i2921[1]
  i2920.data = i2921[2]
  return i2920
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2922 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2923 = data
  i2922.hashCode = i2923[0]
  request.r(i2923[1], i2923[2], 0, i2922, 'material')
  i2922.materialHashCode = i2923[3]
  request.r(i2923[4], i2923[5], 0, i2922, 'atlas')
  i2922.normalStyle = i2923[6]
  i2922.normalSpacingOffset = i2923[7]
  i2922.boldStyle = i2923[8]
  i2922.boldSpacing = i2923[9]
  i2922.italicStyle = i2923[10]
  i2922.tabSize = i2923[11]
  i2922.m_Version = i2923[12]
  i2922.m_SourceFontFileGUID = i2923[13]
  request.r(i2923[14], i2923[15], 0, i2922, 'm_SourceFontFile_EditorRef')
  request.r(i2923[16], i2923[17], 0, i2922, 'm_SourceFontFile')
  i2922.m_AtlasPopulationMode = i2923[18]
  i2922.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2923[19], i2922.m_FaceInfo)
  var i2925 = i2923[20]
  var i2924 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2925.length; i += 1) {
    i2924.add(request.d('UnityEngine.TextCore.Glyph', i2925[i + 0]));
  }
  i2922.m_GlyphTable = i2924
  var i2927 = i2923[21]
  var i2926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2927.length; i += 1) {
    i2926.add(request.d('TMPro.TMP_Character', i2927[i + 0]));
  }
  i2922.m_CharacterTable = i2926
  var i2929 = i2923[22]
  var i2928 = []
  for(var i = 0; i < i2929.length; i += 2) {
  request.r(i2929[i + 0], i2929[i + 1], 2, i2928, '')
  }
  i2922.m_AtlasTextures = i2928
  i2922.m_AtlasTextureIndex = i2923[23]
  i2922.m_IsMultiAtlasTexturesEnabled = !!i2923[24]
  i2922.m_ClearDynamicDataOnBuild = !!i2923[25]
  var i2931 = i2923[26]
  var i2930 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2931.length; i += 1) {
    i2930.add(request.d('UnityEngine.TextCore.GlyphRect', i2931[i + 0]));
  }
  i2922.m_UsedGlyphRects = i2930
  var i2933 = i2923[27]
  var i2932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2933.length; i += 1) {
    i2932.add(request.d('UnityEngine.TextCore.GlyphRect', i2933[i + 0]));
  }
  i2922.m_FreeGlyphRects = i2932
  i2922.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2923[28], i2922.m_fontInfo)
  i2922.m_AtlasWidth = i2923[29]
  i2922.m_AtlasHeight = i2923[30]
  i2922.m_AtlasPadding = i2923[31]
  i2922.m_AtlasRenderMode = i2923[32]
  var i2935 = i2923[33]
  var i2934 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2935.length; i += 1) {
    i2934.add(request.d('TMPro.TMP_Glyph', i2935[i + 0]));
  }
  i2922.m_glyphInfoList = i2934
  i2922.m_KerningTable = request.d('TMPro.KerningTable', i2923[34], i2922.m_KerningTable)
  i2922.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2923[35], i2922.m_FontFeatureTable)
  var i2937 = i2923[36]
  var i2936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2937.length; i += 2) {
  request.r(i2937[i + 0], i2937[i + 1], 1, i2936, '')
  }
  i2922.fallbackFontAssets = i2936
  var i2939 = i2923[37]
  var i2938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2939.length; i += 2) {
  request.r(i2939[i + 0], i2939[i + 1], 1, i2938, '')
  }
  i2922.m_FallbackFontAssetTable = i2938
  i2922.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2923[38], i2922.m_CreationSettings)
  var i2941 = i2923[39]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 1) {
    i2940.push( request.d('TMPro.TMP_FontWeightPair', i2941[i + 0]) );
  }
  i2922.m_FontWeightTable = i2940
  var i2943 = i2923[40]
  var i2942 = []
  for(var i = 0; i < i2943.length; i += 1) {
    i2942.push( request.d('TMPro.TMP_FontWeightPair', i2943[i + 0]) );
  }
  i2922.fontWeights = i2942
  return i2922
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2944 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2945 = data
  i2944.m_FaceIndex = i2945[0]
  i2944.m_FamilyName = i2945[1]
  i2944.m_StyleName = i2945[2]
  i2944.m_PointSize = i2945[3]
  i2944.m_Scale = i2945[4]
  i2944.m_UnitsPerEM = i2945[5]
  i2944.m_LineHeight = i2945[6]
  i2944.m_AscentLine = i2945[7]
  i2944.m_CapLine = i2945[8]
  i2944.m_MeanLine = i2945[9]
  i2944.m_Baseline = i2945[10]
  i2944.m_DescentLine = i2945[11]
  i2944.m_SuperscriptOffset = i2945[12]
  i2944.m_SuperscriptSize = i2945[13]
  i2944.m_SubscriptOffset = i2945[14]
  i2944.m_SubscriptSize = i2945[15]
  i2944.m_UnderlineOffset = i2945[16]
  i2944.m_UnderlineThickness = i2945[17]
  i2944.m_StrikethroughOffset = i2945[18]
  i2944.m_StrikethroughThickness = i2945[19]
  i2944.m_TabWidth = i2945[20]
  return i2944
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2948 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2949 = data
  i2948.m_Index = i2949[0]
  i2948.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2949[1], i2948.m_Metrics)
  i2948.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2949[2], i2948.m_GlyphRect)
  i2948.m_Scale = i2949[3]
  i2948.m_AtlasIndex = i2949[4]
  i2948.m_ClassDefinitionType = i2949[5]
  return i2948
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2950 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2951 = data
  i2950.m_Width = i2951[0]
  i2950.m_Height = i2951[1]
  i2950.m_HorizontalBearingX = i2951[2]
  i2950.m_HorizontalBearingY = i2951[3]
  i2950.m_HorizontalAdvance = i2951[4]
  return i2950
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2952 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2953 = data
  i2952.m_X = i2953[0]
  i2952.m_Y = i2953[1]
  i2952.m_Width = i2953[2]
  i2952.m_Height = i2953[3]
  return i2952
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2956 = root || request.c( 'TMPro.TMP_Character' )
  var i2957 = data
  i2956.m_ElementType = i2957[0]
  i2956.m_Unicode = i2957[1]
  i2956.m_GlyphIndex = i2957[2]
  i2956.m_Scale = i2957[3]
  return i2956
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2962 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2963 = data
  i2962.Name = i2963[0]
  i2962.PointSize = i2963[1]
  i2962.Scale = i2963[2]
  i2962.CharacterCount = i2963[3]
  i2962.LineHeight = i2963[4]
  i2962.Baseline = i2963[5]
  i2962.Ascender = i2963[6]
  i2962.CapHeight = i2963[7]
  i2962.Descender = i2963[8]
  i2962.CenterLine = i2963[9]
  i2962.SuperscriptOffset = i2963[10]
  i2962.SubscriptOffset = i2963[11]
  i2962.SubSize = i2963[12]
  i2962.Underline = i2963[13]
  i2962.UnderlineThickness = i2963[14]
  i2962.strikethrough = i2963[15]
  i2962.strikethroughThickness = i2963[16]
  i2962.TabWidth = i2963[17]
  i2962.Padding = i2963[18]
  i2962.AtlasWidth = i2963[19]
  i2962.AtlasHeight = i2963[20]
  return i2962
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2966 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2967 = data
  i2966.id = i2967[0]
  i2966.x = i2967[1]
  i2966.y = i2967[2]
  i2966.width = i2967[3]
  i2966.height = i2967[4]
  i2966.xOffset = i2967[5]
  i2966.yOffset = i2967[6]
  i2966.xAdvance = i2967[7]
  i2966.scale = i2967[8]
  return i2966
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2968 = root || request.c( 'TMPro.KerningTable' )
  var i2969 = data
  var i2971 = i2969[0]
  var i2970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2971.length; i += 1) {
    i2970.add(request.d('TMPro.KerningPair', i2971[i + 0]));
  }
  i2968.kerningPairs = i2970
  return i2968
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2974 = root || request.c( 'TMPro.KerningPair' )
  var i2975 = data
  i2974.xOffset = i2975[0]
  i2974.m_FirstGlyph = i2975[1]
  i2974.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2975[2], i2974.m_FirstGlyphAdjustments)
  i2974.m_SecondGlyph = i2975[3]
  i2974.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2975[4], i2974.m_SecondGlyphAdjustments)
  i2974.m_IgnoreSpacingAdjustments = !!i2975[5]
  return i2974
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2976 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2977 = data
  var i2979 = i2977[0]
  var i2978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2979.length; i += 1) {
    i2978.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2979[i + 0]));
  }
  i2976.m_GlyphPairAdjustmentRecords = i2978
  return i2976
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2982 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2983 = data
  i2982.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2983[0], i2982.m_FirstAdjustmentRecord)
  i2982.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2983[1], i2982.m_SecondAdjustmentRecord)
  i2982.m_FeatureLookupFlags = i2983[2]
  return i2982
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2984 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2985 = data
  i2984.m_GlyphIndex = i2985[0]
  i2984.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2985[1], i2984.m_GlyphValueRecord)
  return i2984
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2986 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2987 = data
  i2986.m_XPlacement = i2987[0]
  i2986.m_YPlacement = i2987[1]
  i2986.m_XAdvance = i2987[2]
  i2986.m_YAdvance = i2987[3]
  return i2986
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2990 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2991 = data
  i2990.sourceFontFileName = i2991[0]
  i2990.sourceFontFileGUID = i2991[1]
  i2990.pointSizeSamplingMode = i2991[2]
  i2990.pointSize = i2991[3]
  i2990.padding = i2991[4]
  i2990.packingMode = i2991[5]
  i2990.atlasWidth = i2991[6]
  i2990.atlasHeight = i2991[7]
  i2990.characterSetSelectionMode = i2991[8]
  i2990.characterSequence = i2991[9]
  i2990.referencedFontAssetGUID = i2991[10]
  i2990.referencedTextAssetGUID = i2991[11]
  i2990.fontStyle = i2991[12]
  i2990.fontStyleModifier = i2991[13]
  i2990.renderMode = i2991[14]
  i2990.includeFontFeatures = !!i2991[15]
  return i2990
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2994 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2995 = data
  request.r(i2995[0], i2995[1], 0, i2994, 'regularTypeface')
  request.r(i2995[2], i2995[3], 0, i2994, 'italicTypeface')
  return i2994
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2996 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2997 = data
  i2996.useSafeMode = !!i2997[0]
  i2996.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2997[1], i2996.safeModeOptions)
  i2996.timeScale = i2997[2]
  i2996.unscaledTimeScale = i2997[3]
  i2996.useSmoothDeltaTime = !!i2997[4]
  i2996.maxSmoothUnscaledTime = i2997[5]
  i2996.rewindCallbackMode = i2997[6]
  i2996.showUnityEditorReport = !!i2997[7]
  i2996.logBehaviour = i2997[8]
  i2996.drawGizmos = !!i2997[9]
  i2996.defaultRecyclable = !!i2997[10]
  i2996.defaultAutoPlay = i2997[11]
  i2996.defaultUpdateType = i2997[12]
  i2996.defaultTimeScaleIndependent = !!i2997[13]
  i2996.defaultEaseType = i2997[14]
  i2996.defaultEaseOvershootOrAmplitude = i2997[15]
  i2996.defaultEasePeriod = i2997[16]
  i2996.defaultAutoKill = !!i2997[17]
  i2996.defaultLoopType = i2997[18]
  i2996.debugMode = !!i2997[19]
  i2996.debugStoreTargetId = !!i2997[20]
  i2996.showPreviewPanel = !!i2997[21]
  i2996.storeSettingsLocation = i2997[22]
  i2996.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2997[23], i2996.modules)
  i2996.createASMDEF = !!i2997[24]
  i2996.showPlayingTweens = !!i2997[25]
  i2996.showPausedTweens = !!i2997[26]
  return i2996
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2998 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2999 = data
  i2998.logBehaviour = i2999[0]
  i2998.nestedTweenFailureBehaviour = i2999[1]
  return i2998
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3000 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3001 = data
  i3000.showPanel = !!i3001[0]
  i3000.audioEnabled = !!i3001[1]
  i3000.physicsEnabled = !!i3001[2]
  i3000.physics2DEnabled = !!i3001[3]
  i3000.spriteEnabled = !!i3001[4]
  i3000.uiEnabled = !!i3001[5]
  i3000.textMeshProEnabled = !!i3001[6]
  i3000.tk2DEnabled = !!i3001[7]
  i3000.deAudioEnabled = !!i3001[8]
  i3000.deUnityExtendedEnabled = !!i3001[9]
  i3000.epoOutlineEnabled = !!i3001[10]
  return i3000
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3002 = root || request.c( 'TMPro.TMP_Settings' )
  var i3003 = data
  i3002.m_enableWordWrapping = !!i3003[0]
  i3002.m_enableKerning = !!i3003[1]
  i3002.m_enableExtraPadding = !!i3003[2]
  i3002.m_enableTintAllSprites = !!i3003[3]
  i3002.m_enableParseEscapeCharacters = !!i3003[4]
  i3002.m_EnableRaycastTarget = !!i3003[5]
  i3002.m_GetFontFeaturesAtRuntime = !!i3003[6]
  i3002.m_missingGlyphCharacter = i3003[7]
  i3002.m_warningsDisabled = !!i3003[8]
  request.r(i3003[9], i3003[10], 0, i3002, 'm_defaultFontAsset')
  i3002.m_defaultFontAssetPath = i3003[11]
  i3002.m_defaultFontSize = i3003[12]
  i3002.m_defaultAutoSizeMinRatio = i3003[13]
  i3002.m_defaultAutoSizeMaxRatio = i3003[14]
  i3002.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3003[15], i3003[16] )
  i3002.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3003[17], i3003[18] )
  i3002.m_autoSizeTextContainer = !!i3003[19]
  i3002.m_IsTextObjectScaleStatic = !!i3003[20]
  var i3005 = i3003[21]
  var i3004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3005.length; i += 2) {
  request.r(i3005[i + 0], i3005[i + 1], 1, i3004, '')
  }
  i3002.m_fallbackFontAssets = i3004
  i3002.m_matchMaterialPreset = !!i3003[22]
  request.r(i3003[23], i3003[24], 0, i3002, 'm_defaultSpriteAsset')
  i3002.m_defaultSpriteAssetPath = i3003[25]
  i3002.m_enableEmojiSupport = !!i3003[26]
  i3002.m_MissingCharacterSpriteUnicode = i3003[27]
  i3002.m_defaultColorGradientPresetsPath = i3003[28]
  request.r(i3003[29], i3003[30], 0, i3002, 'm_defaultStyleSheet')
  i3002.m_StyleSheetsResourcePath = i3003[31]
  request.r(i3003[32], i3003[33], 0, i3002, 'm_leadingCharacters')
  request.r(i3003[34], i3003[35], 0, i3002, 'm_followingCharacters')
  i3002.m_UseModernHangulLineBreakingRules = !!i3003[36]
  return i3002
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3006 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3007 = data
  i3006.hashCode = i3007[0]
  request.r(i3007[1], i3007[2], 0, i3006, 'material')
  i3006.materialHashCode = i3007[3]
  request.r(i3007[4], i3007[5], 0, i3006, 'spriteSheet')
  var i3009 = i3007[6]
  var i3008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3009.length; i += 1) {
    i3008.add(request.d('TMPro.TMP_Sprite', i3009[i + 0]));
  }
  i3006.spriteInfoList = i3008
  var i3011 = i3007[7]
  var i3010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3011.length; i += 2) {
  request.r(i3011[i + 0], i3011[i + 1], 1, i3010, '')
  }
  i3006.fallbackSpriteAssets = i3010
  i3006.m_Version = i3007[8]
  i3006.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3007[9], i3006.m_FaceInfo)
  var i3013 = i3007[10]
  var i3012 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3013.length; i += 1) {
    i3012.add(request.d('TMPro.TMP_SpriteCharacter', i3013[i + 0]));
  }
  i3006.m_SpriteCharacterTable = i3012
  var i3015 = i3007[11]
  var i3014 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3015.length; i += 1) {
    i3014.add(request.d('TMPro.TMP_SpriteGlyph', i3015[i + 0]));
  }
  i3006.m_SpriteGlyphTable = i3014
  return i3006
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3018 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3019 = data
  i3018.name = i3019[0]
  i3018.hashCode = i3019[1]
  i3018.unicode = i3019[2]
  i3018.pivot = new pc.Vec2( i3019[3], i3019[4] )
  request.r(i3019[5], i3019[6], 0, i3018, 'sprite')
  i3018.id = i3019[7]
  i3018.x = i3019[8]
  i3018.y = i3019[9]
  i3018.width = i3019[10]
  i3018.height = i3019[11]
  i3018.xOffset = i3019[12]
  i3018.yOffset = i3019[13]
  i3018.xAdvance = i3019[14]
  i3018.scale = i3019[15]
  return i3018
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3024 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3025 = data
  i3024.m_Name = i3025[0]
  i3024.m_HashCode = i3025[1]
  i3024.m_ElementType = i3025[2]
  i3024.m_Unicode = i3025[3]
  i3024.m_GlyphIndex = i3025[4]
  i3024.m_Scale = i3025[5]
  return i3024
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3028 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3029 = data
  request.r(i3029[0], i3029[1], 0, i3028, 'sprite')
  i3028.m_Index = i3029[2]
  i3028.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3029[3], i3028.m_Metrics)
  i3028.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3029[4], i3028.m_GlyphRect)
  i3028.m_Scale = i3029[5]
  i3028.m_AtlasIndex = i3029[6]
  i3028.m_ClassDefinitionType = i3029[7]
  return i3028
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3030 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3031 = data
  var i3033 = i3031[0]
  var i3032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3033.length; i += 1) {
    i3032.add(request.d('TMPro.TMP_Style', i3033[i + 0]));
  }
  i3030.m_StyleList = i3032
  return i3030
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3036 = root || request.c( 'TMPro.TMP_Style' )
  var i3037 = data
  i3036.m_Name = i3037[0]
  i3036.m_HashCode = i3037[1]
  i3036.m_OpeningDefinition = i3037[2]
  i3036.m_ClosingDefinition = i3037[3]
  i3036.m_OpeningTagArray = i3037[4]
  i3036.m_ClosingTagArray = i3037[5]
  i3036.m_OpeningTagUnicodeArray = i3037[6]
  i3036.m_ClosingTagUnicodeArray = i3037[7]
  return i3036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3039 = data
  var i3041 = i3039[0]
  var i3040 = []
  for(var i = 0; i < i3041.length; i += 1) {
    i3040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3041[i + 0]) );
  }
  i3038.files = i3040
  i3038.componentToPrefabIds = i3039[1]
  return i3038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3045 = data
  i3044.path = i3045[0]
  request.r(i3045[1], i3045[2], 0, i3044, 'unityObject')
  return i3044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3047 = data
  var i3049 = i3047[0]
  var i3048 = []
  for(var i = 0; i < i3049.length; i += 1) {
    i3048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3049[i + 0]) );
  }
  i3046.scriptsExecutionOrder = i3048
  var i3051 = i3047[1]
  var i3050 = []
  for(var i = 0; i < i3051.length; i += 1) {
    i3050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3051[i + 0]) );
  }
  i3046.sortingLayers = i3050
  var i3053 = i3047[2]
  var i3052 = []
  for(var i = 0; i < i3053.length; i += 1) {
    i3052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3053[i + 0]) );
  }
  i3046.cullingLayers = i3052
  i3046.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3047[3], i3046.timeSettings)
  i3046.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3047[4], i3046.physicsSettings)
  i3046.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3047[5], i3046.physics2DSettings)
  i3046.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3047[6], i3046.qualitySettings)
  i3046.enableRealtimeShadows = !!i3047[7]
  i3046.enableAutoInstancing = !!i3047[8]
  i3046.enableDynamicBatching = !!i3047[9]
  i3046.lightmapEncodingQuality = i3047[10]
  i3046.desiredColorSpace = i3047[11]
  var i3055 = i3047[12]
  var i3054 = []
  for(var i = 0; i < i3055.length; i += 1) {
    i3054.push( i3055[i + 0] );
  }
  i3046.allTags = i3054
  return i3046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3059 = data
  i3058.name = i3059[0]
  i3058.value = i3059[1]
  return i3058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3063 = data
  i3062.id = i3063[0]
  i3062.name = i3063[1]
  i3062.value = i3063[2]
  return i3062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3067 = data
  i3066.id = i3067[0]
  i3066.name = i3067[1]
  return i3066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3069 = data
  i3068.fixedDeltaTime = i3069[0]
  i3068.maximumDeltaTime = i3069[1]
  i3068.timeScale = i3069[2]
  i3068.maximumParticleTimestep = i3069[3]
  return i3068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3071 = data
  i3070.gravity = new pc.Vec3( i3071[0], i3071[1], i3071[2] )
  i3070.defaultSolverIterations = i3071[3]
  i3070.bounceThreshold = i3071[4]
  i3070.autoSyncTransforms = !!i3071[5]
  i3070.autoSimulation = !!i3071[6]
  var i3073 = i3071[7]
  var i3072 = []
  for(var i = 0; i < i3073.length; i += 1) {
    i3072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3073[i + 0]) );
  }
  i3070.collisionMatrix = i3072
  return i3070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3077 = data
  i3076.enabled = !!i3077[0]
  i3076.layerId = i3077[1]
  i3076.otherLayerId = i3077[2]
  return i3076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3079 = data
  request.r(i3079[0], i3079[1], 0, i3078, 'material')
  i3078.gravity = new pc.Vec2( i3079[2], i3079[3] )
  i3078.positionIterations = i3079[4]
  i3078.velocityIterations = i3079[5]
  i3078.velocityThreshold = i3079[6]
  i3078.maxLinearCorrection = i3079[7]
  i3078.maxAngularCorrection = i3079[8]
  i3078.maxTranslationSpeed = i3079[9]
  i3078.maxRotationSpeed = i3079[10]
  i3078.baumgarteScale = i3079[11]
  i3078.baumgarteTOIScale = i3079[12]
  i3078.timeToSleep = i3079[13]
  i3078.linearSleepTolerance = i3079[14]
  i3078.angularSleepTolerance = i3079[15]
  i3078.defaultContactOffset = i3079[16]
  i3078.autoSimulation = !!i3079[17]
  i3078.queriesHitTriggers = !!i3079[18]
  i3078.queriesStartInColliders = !!i3079[19]
  i3078.callbacksOnDisable = !!i3079[20]
  i3078.reuseCollisionCallbacks = !!i3079[21]
  i3078.autoSyncTransforms = !!i3079[22]
  var i3081 = i3079[23]
  var i3080 = []
  for(var i = 0; i < i3081.length; i += 1) {
    i3080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3081[i + 0]) );
  }
  i3078.collisionMatrix = i3080
  return i3078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3085 = data
  i3084.enabled = !!i3085[0]
  i3084.layerId = i3085[1]
  i3084.otherLayerId = i3085[2]
  return i3084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3087 = data
  var i3089 = i3087[0]
  var i3088 = []
  for(var i = 0; i < i3089.length; i += 1) {
    i3088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3089[i + 0]) );
  }
  i3086.qualityLevels = i3088
  var i3091 = i3087[1]
  var i3090 = []
  for(var i = 0; i < i3091.length; i += 1) {
    i3090.push( i3091[i + 0] );
  }
  i3086.names = i3090
  i3086.shadows = i3087[2]
  i3086.anisotropicFiltering = i3087[3]
  i3086.antiAliasing = i3087[4]
  i3086.lodBias = i3087[5]
  i3086.shadowCascades = i3087[6]
  i3086.shadowDistance = i3087[7]
  i3086.shadowmaskMode = i3087[8]
  i3086.shadowProjection = i3087[9]
  i3086.shadowResolution = i3087[10]
  i3086.softParticles = !!i3087[11]
  i3086.softVegetation = !!i3087[12]
  i3086.activeColorSpace = i3087[13]
  i3086.desiredColorSpace = i3087[14]
  i3086.masterTextureLimit = i3087[15]
  i3086.maxQueuedFrames = i3087[16]
  i3086.particleRaycastBudget = i3087[17]
  i3086.pixelLightCount = i3087[18]
  i3086.realtimeReflectionProbes = !!i3087[19]
  i3086.shadowCascade2Split = i3087[20]
  i3086.shadowCascade4Split = new pc.Vec3( i3087[21], i3087[22], i3087[23] )
  i3086.streamingMipmapsActive = !!i3087[24]
  i3086.vSyncCount = i3087[25]
  i3086.asyncUploadBufferSize = i3087[26]
  i3086.asyncUploadTimeSlice = i3087[27]
  i3086.billboardsFaceCameraPosition = !!i3087[28]
  i3086.shadowNearPlaneOffset = i3087[29]
  i3086.streamingMipmapsMemoryBudget = i3087[30]
  i3086.maximumLODLevel = i3087[31]
  i3086.streamingMipmapsAddAllCameras = !!i3087[32]
  i3086.streamingMipmapsMaxLevelReduction = i3087[33]
  i3086.streamingMipmapsRenderersPerFrame = i3087[34]
  i3086.resolutionScalingFixedDPIFactor = i3087[35]
  i3086.streamingMipmapsMaxFileIORequests = i3087[36]
  i3086.currentQualityLevel = i3087[37]
  return i3086
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3094 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3095 = data
  i3094.xPlacement = i3095[0]
  i3094.yPlacement = i3095[1]
  i3094.xAdvance = i3095[2]
  i3094.yAdvance = i3095[3]
  return i3094
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

Deserializers.creativeName = "DefaultVersion2";

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

Deserializers.buildID = "4f1f560a-7b66-4f32-9078-7bc8739d4dab";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

