var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2570 = root || request.c( 'UnityEngine.JointSpring' )
  var i2571 = data
  i2570.spring = i2571[0]
  i2570.damper = i2571[1]
  i2570.targetPosition = i2571[2]
  return i2570
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2572 = root || request.c( 'UnityEngine.JointMotor' )
  var i2573 = data
  i2572.m_TargetVelocity = i2573[0]
  i2572.m_Force = i2573[1]
  i2572.m_FreeSpin = i2573[2]
  return i2572
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2574 = root || request.c( 'UnityEngine.JointLimits' )
  var i2575 = data
  i2574.m_Min = i2575[0]
  i2574.m_Max = i2575[1]
  i2574.m_Bounciness = i2575[2]
  i2574.m_BounceMinVelocity = i2575[3]
  i2574.m_ContactDistance = i2575[4]
  i2574.minBounce = i2575[5]
  i2574.maxBounce = i2575[6]
  return i2574
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2576 = root || request.c( 'UnityEngine.JointDrive' )
  var i2577 = data
  i2576.m_PositionSpring = i2577[0]
  i2576.m_PositionDamper = i2577[1]
  i2576.m_MaximumForce = i2577[2]
  i2576.m_UseAcceleration = i2577[3]
  return i2576
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2578 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2579 = data
  i2578.m_Spring = i2579[0]
  i2578.m_Damper = i2579[1]
  return i2578
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2580 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2581 = data
  i2580.m_Limit = i2581[0]
  i2580.m_Bounciness = i2581[1]
  i2580.m_ContactDistance = i2581[2]
  return i2580
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2582 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2583 = data
  i2582.m_ExtremumSlip = i2583[0]
  i2582.m_ExtremumValue = i2583[1]
  i2582.m_AsymptoteSlip = i2583[2]
  i2582.m_AsymptoteValue = i2583[3]
  i2582.m_Stiffness = i2583[4]
  return i2582
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2584 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2585 = data
  i2584.m_LowerAngle = i2585[0]
  i2584.m_UpperAngle = i2585[1]
  return i2584
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2586 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2587 = data
  i2586.m_MotorSpeed = i2587[0]
  i2586.m_MaximumMotorTorque = i2587[1]
  return i2586
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2588 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2589 = data
  i2588.m_DampingRatio = i2589[0]
  i2588.m_Frequency = i2589[1]
  i2588.m_Angle = i2589[2]
  return i2588
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2590 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2591 = data
  i2590.m_LowerTranslation = i2591[0]
  i2590.m_UpperTranslation = i2591[1]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2593 = data
  i2592.name = i2593[0]
  i2592.width = i2593[1]
  i2592.height = i2593[2]
  i2592.mipmapCount = i2593[3]
  i2592.anisoLevel = i2593[4]
  i2592.filterMode = i2593[5]
  i2592.hdr = !!i2593[6]
  i2592.format = i2593[7]
  i2592.wrapMode = i2593[8]
  i2592.alphaIsTransparency = !!i2593[9]
  i2592.alphaSource = i2593[10]
  i2592.graphicsFormat = i2593[11]
  i2592.sRGBTexture = !!i2593[12]
  i2592.desiredColorSpace = i2593[13]
  i2592.wrapU = i2593[14]
  i2592.wrapV = i2593[15]
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2594 = root || new pc.UnityMaterial()
  var i2595 = data
  i2594.name = i2595[0]
  request.r(i2595[1], i2595[2], 0, i2594, 'shader')
  i2594.renderQueue = i2595[3]
  i2594.enableInstancing = !!i2595[4]
  var i2597 = i2595[5]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2597[i + 0]) );
  }
  i2594.floatParameters = i2596
  var i2599 = i2595[6]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2599[i + 0]) );
  }
  i2594.colorParameters = i2598
  var i2601 = i2595[7]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2601[i + 0]) );
  }
  i2594.vectorParameters = i2600
  var i2603 = i2595[8]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2603[i + 0]) );
  }
  i2594.textureParameters = i2602
  var i2605 = i2595[9]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2605[i + 0]) );
  }
  i2594.materialFlags = i2604
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2609 = data
  i2608.name = i2609[0]
  i2608.value = i2609[1]
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2613 = data
  i2612.name = i2613[0]
  i2612.value = new pc.Color(i2613[1], i2613[2], i2613[3], i2613[4])
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2617 = data
  i2616.name = i2617[0]
  i2616.value = new pc.Vec4( i2617[1], i2617[2], i2617[3], i2617[4] )
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2621 = data
  i2620.name = i2621[0]
  request.r(i2621[1], i2621[2], 0, i2620, 'value')
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2625 = data
  i2624.name = i2625[0]
  i2624.enabled = !!i2625[1]
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2627 = data
  i2626.pivot = new pc.Vec2( i2627[0], i2627[1] )
  i2626.anchorMin = new pc.Vec2( i2627[2], i2627[3] )
  i2626.anchorMax = new pc.Vec2( i2627[4], i2627[5] )
  i2626.sizeDelta = new pc.Vec2( i2627[6], i2627[7] )
  i2626.anchoredPosition3D = new pc.Vec3( i2627[8], i2627[9], i2627[10] )
  i2626.rotation = new pc.Quat(i2627[11], i2627[12], i2627[13], i2627[14])
  i2626.scale = new pc.Vec3( i2627[15], i2627[16], i2627[17] )
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2629 = data
  i2628.cullTransparentMesh = !!i2629[0]
  return i2628
}

Deserializers["People"] = function (request, data, root) {
  var i2630 = root || request.c( 'People' )
  var i2631 = data
  request.r(i2631[0], i2631[1], 0, i2630, '_readyImage')
  request.r(i2631[2], i2631[3], 0, i2630, '_additiveImage1')
  request.r(i2631[4], i2631[5], 0, i2630, '_additiveImage2')
  request.r(i2631[6], i2631[7], 0, i2630, '_endPoint')
  request.r(i2631[8], i2631[9], 0, i2630, 'Bank')
  request.r(i2631[10], i2631[11], 0, i2630, '_sizeText')
  i2630.CupType = i2631[12]
  i2630.JuiceType = i2631[13]
  i2630.AdditiveType1 = i2631[14]
  i2630.AdditiveType2 = i2631[15]
  request.r(i2631[16], i2631[17], 0, i2630, '_finishSound')
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2633 = data
  request.r(i2633[0], i2633[1], 0, i2632, 'clip')
  request.r(i2633[2], i2633[3], 0, i2632, 'outputAudioMixerGroup')
  i2632.playOnAwake = !!i2633[4]
  i2632.loop = !!i2633[5]
  i2632.time = i2633[6]
  i2632.volume = i2633[7]
  i2632.pitch = i2633[8]
  i2632.enabled = !!i2633[9]
  return i2632
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2634 = root || request.c( 'UnityEngine.UI.Image' )
  var i2635 = data
  request.r(i2635[0], i2635[1], 0, i2634, 'm_Sprite')
  i2634.m_Type = i2635[2]
  i2634.m_PreserveAspect = !!i2635[3]
  i2634.m_FillCenter = !!i2635[4]
  i2634.m_FillMethod = i2635[5]
  i2634.m_FillAmount = i2635[6]
  i2634.m_FillClockwise = !!i2635[7]
  i2634.m_FillOrigin = i2635[8]
  i2634.m_UseSpriteMesh = !!i2635[9]
  i2634.m_PixelsPerUnitMultiplier = i2635[10]
  request.r(i2635[11], i2635[12], 0, i2634, 'm_Material')
  i2634.m_Maskable = !!i2635[13]
  i2634.m_Color = new pc.Color(i2635[14], i2635[15], i2635[16], i2635[17])
  i2634.m_RaycastTarget = !!i2635[18]
  i2634.m_RaycastPadding = new pc.Vec4( i2635[19], i2635[20], i2635[21], i2635[22] )
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2637 = data
  i2636.name = i2637[0]
  i2636.tagId = i2637[1]
  i2636.enabled = !!i2637[2]
  i2636.isStatic = !!i2637[3]
  i2636.layer = i2637[4]
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2639 = data
  i2638.name = i2639[0]
  i2638.index = i2639[1]
  i2638.startup = !!i2639[2]
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2641 = data
  i2640.position = new pc.Vec3( i2641[0], i2641[1], i2641[2] )
  i2640.scale = new pc.Vec3( i2641[3], i2641[4], i2641[5] )
  i2640.rotation = new pc.Quat(i2641[6], i2641[7], i2641[8], i2641[9])
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2643 = data
  i2642.enabled = !!i2643[0]
  i2642.aspect = i2643[1]
  i2642.orthographic = !!i2643[2]
  i2642.orthographicSize = i2643[3]
  i2642.backgroundColor = new pc.Color(i2643[4], i2643[5], i2643[6], i2643[7])
  i2642.nearClipPlane = i2643[8]
  i2642.farClipPlane = i2643[9]
  i2642.fieldOfView = i2643[10]
  i2642.depth = i2643[11]
  i2642.clearFlags = i2643[12]
  i2642.cullingMask = i2643[13]
  i2642.rect = i2643[14]
  request.r(i2643[15], i2643[16], 0, i2642, 'targetTexture')
  i2642.usePhysicalProperties = !!i2643[17]
  i2642.focalLength = i2643[18]
  i2642.sensorSize = new pc.Vec2( i2643[19], i2643[20] )
  i2642.lensShift = new pc.Vec2( i2643[21], i2643[22] )
  i2642.gateFit = i2643[23]
  i2642.commandBufferCount = i2643[24]
  i2642.cameraType = i2643[25]
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2645 = data
  request.r(i2645[0], i2645[1], 0, i2644, 'animatorController')
  request.r(i2645[2], i2645[3], 0, i2644, 'avatar')
  i2644.updateMode = i2645[4]
  i2644.hasTransformHierarchy = !!i2645[5]
  i2644.applyRootMotion = !!i2645[6]
  var i2647 = i2645[7]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 2) {
  request.r(i2647[i + 0], i2647[i + 1], 2, i2646, '')
  }
  i2644.humanBones = i2646
  i2644.enabled = !!i2645[8]
  return i2644
}

Deserializers["Bank"] = function (request, data, root) {
  var i2650 = root || request.c( 'Bank' )
  var i2651 = data
  request.r(i2651[0], i2651[1], 0, i2650, 'BuyBigCupButton')
  request.r(i2651[2], i2651[3], 0, i2650, 'BigCupButton')
  request.r(i2651[4], i2651[5], 0, i2650, 'MiddleCupButton')
  request.r(i2651[6], i2651[7], 0, i2650, 'MoneyText')
  request.r(i2651[8], i2651[9], 0, i2650, 'Tutorial')
  request.r(i2651[10], i2651[11], 0, i2650, 'BuyAdditiveButton')
  request.r(i2651[12], i2651[13], 0, i2650, 'BuyJuiceButton')
  request.r(i2651[14], i2651[15], 0, i2650, 'JuiceButton1')
  request.r(i2651[16], i2651[17], 0, i2650, 'JuiceButton2')
  request.r(i2651[18], i2651[19], 0, i2650, 'JuiceButton3')
  request.r(i2651[20], i2651[21], 0, i2650, 'Additive1Button')
  request.r(i2651[22], i2651[23], 0, i2650, 'Additive2Button')
  i2650.Money = i2651[24]
  i2650.IsBigCupBuy = !!i2651[25]
  i2650.IsJuiceBuy = !!i2651[26]
  i2650.IsAdditiveBuy = !!i2651[27]
  request.r(i2651[28], i2651[29], 0, i2650, '_buySound')
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2653 = data
  i2652.enabled = !!i2653[0]
  i2652.planeDistance = i2653[1]
  i2652.referencePixelsPerUnit = i2653[2]
  i2652.isFallbackOverlay = !!i2653[3]
  i2652.renderMode = i2653[4]
  i2652.renderOrder = i2653[5]
  i2652.sortingLayerName = i2653[6]
  i2652.sortingOrder = i2653[7]
  i2652.scaleFactor = i2653[8]
  request.r(i2653[9], i2653[10], 0, i2652, 'worldCamera')
  i2652.overrideSorting = !!i2653[11]
  i2652.pixelPerfect = !!i2653[12]
  i2652.targetDisplay = i2653[13]
  i2652.overridePixelPerfect = !!i2653[14]
  return i2652
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2654 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2655 = data
  i2654.m_UiScaleMode = i2655[0]
  i2654.m_ReferencePixelsPerUnit = i2655[1]
  i2654.m_ScaleFactor = i2655[2]
  i2654.m_ReferenceResolution = new pc.Vec2( i2655[3], i2655[4] )
  i2654.m_ScreenMatchMode = i2655[5]
  i2654.m_MatchWidthOrHeight = i2655[6]
  i2654.m_PhysicalUnit = i2655[7]
  i2654.m_FallbackScreenDPI = i2655[8]
  i2654.m_DefaultSpriteDPI = i2655[9]
  i2654.m_DynamicPixelsPerUnit = i2655[10]
  i2654.m_PresetInfoIsWorld = !!i2655[11]
  return i2654
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2656 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2657 = data
  i2656.m_IgnoreReversedGraphics = !!i2657[0]
  i2656.m_BlockingObjects = i2657[1]
  i2656.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2657[2] )
  return i2656
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i2658 = root || request.c( 'ImageShiftOnOrientation' )
  var i2659 = data
  var i2661 = i2659[0]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('ItemSwitcherData', i2661[i + 0]) );
  }
  i2658.Items = i2660
  request.r(i2659[1], i2659[2], 0, i2658, '_backHorizontal')
  request.r(i2659[3], i2659[4], 0, i2658, '_backVertical')
  request.r(i2659[5], i2659[6], 0, i2658, '_tableHorizontal')
  request.r(i2659[7], i2659[8], 0, i2658, '_tableVertical')
  i2658.IsDebug = !!i2659[9]
  i2658.CanCopy = !!i2659[10]
  return i2658
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i2664 = root || request.c( 'ItemSwitcherData' )
  var i2665 = data
  request.r(i2665[0], i2665[1], 0, i2664, 'Target')
  i2664.HorizontalAnchoredPosition = new pc.Vec2( i2665[2], i2665[3] )
  i2664.SizeHorizontal = new pc.Vec2( i2665[4], i2665[5] )
  i2664.VerticalAnchoredPosition = new pc.Vec2( i2665[6], i2665[7] )
  i2664.SizeVertical = new pc.Vec2( i2665[8], i2665[9] )
  i2664.MinHorizontal = new pc.Vec2( i2665[10], i2665[11] )
  i2664.MaxHorizontal = new pc.Vec2( i2665[12], i2665[13] )
  i2664.MinVertical = new pc.Vec2( i2665[14], i2665[15] )
  i2664.MaxVertical = new pc.Vec2( i2665[16], i2665[17] )
  i2664.IsAnchored = !!i2665[18]
  i2664.IsDebug = !!i2665[19]
  i2664.CopyHorizontal = !!i2665[20]
  i2664.CopyVertical = !!i2665[21]
  return i2664
}

Deserializers["Point"] = function (request, data, root) {
  var i2666 = root || request.c( 'Point' )
  var i2667 = data
  return i2666
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2668 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2669 = data
  i2668.m_hasFontAssetChanged = !!i2669[0]
  request.r(i2669[1], i2669[2], 0, i2668, 'm_baseMaterial')
  i2668.m_maskOffset = new pc.Vec4( i2669[3], i2669[4], i2669[5], i2669[6] )
  i2668.m_text = i2669[7]
  i2668.m_isRightToLeft = !!i2669[8]
  request.r(i2669[9], i2669[10], 0, i2668, 'm_fontAsset')
  request.r(i2669[11], i2669[12], 0, i2668, 'm_sharedMaterial')
  var i2671 = i2669[13]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 2) {
  request.r(i2671[i + 0], i2671[i + 1], 2, i2670, '')
  }
  i2668.m_fontSharedMaterials = i2670
  request.r(i2669[14], i2669[15], 0, i2668, 'm_fontMaterial')
  var i2673 = i2669[16]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 2) {
  request.r(i2673[i + 0], i2673[i + 1], 2, i2672, '')
  }
  i2668.m_fontMaterials = i2672
  i2668.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2669[17], i2669[18], i2669[19], i2669[20])
  i2668.m_fontColor = new pc.Color(i2669[21], i2669[22], i2669[23], i2669[24])
  i2668.m_enableVertexGradient = !!i2669[25]
  i2668.m_colorMode = i2669[26]
  i2668.m_fontColorGradient = request.d('TMPro.VertexGradient', i2669[27], i2668.m_fontColorGradient)
  request.r(i2669[28], i2669[29], 0, i2668, 'm_fontColorGradientPreset')
  request.r(i2669[30], i2669[31], 0, i2668, 'm_spriteAsset')
  i2668.m_tintAllSprites = !!i2669[32]
  request.r(i2669[33], i2669[34], 0, i2668, 'm_StyleSheet')
  i2668.m_TextStyleHashCode = i2669[35]
  i2668.m_overrideHtmlColors = !!i2669[36]
  i2668.m_faceColor = UnityEngine.Color32.ConstructColor(i2669[37], i2669[38], i2669[39], i2669[40])
  i2668.m_fontSize = i2669[41]
  i2668.m_fontSizeBase = i2669[42]
  i2668.m_fontWeight = i2669[43]
  i2668.m_enableAutoSizing = !!i2669[44]
  i2668.m_fontSizeMin = i2669[45]
  i2668.m_fontSizeMax = i2669[46]
  i2668.m_fontStyle = i2669[47]
  i2668.m_HorizontalAlignment = i2669[48]
  i2668.m_VerticalAlignment = i2669[49]
  i2668.m_textAlignment = i2669[50]
  i2668.m_characterSpacing = i2669[51]
  i2668.m_wordSpacing = i2669[52]
  i2668.m_lineSpacing = i2669[53]
  i2668.m_lineSpacingMax = i2669[54]
  i2668.m_paragraphSpacing = i2669[55]
  i2668.m_charWidthMaxAdj = i2669[56]
  i2668.m_enableWordWrapping = !!i2669[57]
  i2668.m_wordWrappingRatios = i2669[58]
  i2668.m_overflowMode = i2669[59]
  request.r(i2669[60], i2669[61], 0, i2668, 'm_linkedTextComponent')
  request.r(i2669[62], i2669[63], 0, i2668, 'parentLinkedComponent')
  i2668.m_enableKerning = !!i2669[64]
  i2668.m_enableExtraPadding = !!i2669[65]
  i2668.checkPaddingRequired = !!i2669[66]
  i2668.m_isRichText = !!i2669[67]
  i2668.m_parseCtrlCharacters = !!i2669[68]
  i2668.m_isOrthographic = !!i2669[69]
  i2668.m_isCullingEnabled = !!i2669[70]
  i2668.m_horizontalMapping = i2669[71]
  i2668.m_verticalMapping = i2669[72]
  i2668.m_uvLineOffset = i2669[73]
  i2668.m_geometrySortingOrder = i2669[74]
  i2668.m_IsTextObjectScaleStatic = !!i2669[75]
  i2668.m_VertexBufferAutoSizeReduction = !!i2669[76]
  i2668.m_useMaxVisibleDescender = !!i2669[77]
  i2668.m_pageToDisplay = i2669[78]
  i2668.m_margin = new pc.Vec4( i2669[79], i2669[80], i2669[81], i2669[82] )
  i2668.m_isUsingLegacyAnimationComponent = !!i2669[83]
  i2668.m_isVolumetricText = !!i2669[84]
  request.r(i2669[85], i2669[86], 0, i2668, 'm_Material')
  i2668.m_Maskable = !!i2669[87]
  i2668.m_Color = new pc.Color(i2669[88], i2669[89], i2669[90], i2669[91])
  i2668.m_RaycastTarget = !!i2669[92]
  i2668.m_RaycastPadding = new pc.Vec4( i2669[93], i2669[94], i2669[95], i2669[96] )
  return i2668
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2676 = root || request.c( 'TMPro.VertexGradient' )
  var i2677 = data
  i2676.topLeft = new pc.Color(i2677[0], i2677[1], i2677[2], i2677[3])
  i2676.topRight = new pc.Color(i2677[4], i2677[5], i2677[6], i2677[7])
  i2676.bottomLeft = new pc.Color(i2677[8], i2677[9], i2677[10], i2677[11])
  i2676.bottomRight = new pc.Color(i2677[12], i2677[13], i2677[14], i2677[15])
  return i2676
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i2678 = root || request.c( 'PeopleContainer' )
  var i2679 = data
  var i2681 = i2679[0]
  var i2680 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i2681.length; i += 2) {
  request.r(i2681[i + 0], i2681[i + 1], 1, i2680, '')
  }
  i2678.CurrentPeoples = i2680
  var i2683 = i2679[1]
  var i2682 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i2683.length; i += 2) {
  request.r(i2683[i + 0], i2683[i + 1], 1, i2682, '')
  }
  i2678._peoples = i2682
  request.r(i2679[2], i2679[3], 0, i2678, '_tutorialPeople')
  request.r(i2679[4], i2679[5], 0, i2678, '_spawnPoint')
  request.r(i2679[6], i2679[7], 0, i2678, '_point1')
  request.r(i2679[8], i2679[9], 0, i2678, '_point2')
  request.r(i2679[10], i2679[11], 0, i2678, '_endPoint')
  request.r(i2679[12], i2679[13], 0, i2678, '_juiceConfig')
  request.r(i2679[14], i2679[15], 0, i2678, '_tutorial')
  return i2678
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2686 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2687 = data
  i2686.m_HorizontalFit = i2687[0]
  i2686.m_VerticalFit = i2687[1]
  return i2686
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2688 = root || request.c( 'UnityEngine.UI.Button' )
  var i2689 = data
  i2688.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2689[0], i2688.m_OnClick)
  i2688.m_Navigation = request.d('UnityEngine.UI.Navigation', i2689[1], i2688.m_Navigation)
  i2688.m_Transition = i2689[2]
  i2688.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2689[3], i2688.m_Colors)
  i2688.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2689[4], i2688.m_SpriteState)
  i2688.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2689[5], i2688.m_AnimationTriggers)
  i2688.m_Interactable = !!i2689[6]
  request.r(i2689[7], i2689[8], 0, i2688, 'm_TargetGraphic')
  return i2688
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2690 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2691 = data
  i2690.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2691[0], i2690.m_PersistentCalls)
  return i2690
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2692 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2693 = data
  var i2695 = i2693[0]
  var i2694 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.add(request.d('UnityEngine.Events.PersistentCall', i2695[i + 0]));
  }
  i2692.m_Calls = i2694
  return i2692
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2698 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2699 = data
  request.r(i2699[0], i2699[1], 0, i2698, 'm_Target')
  i2698.m_TargetAssemblyTypeName = i2699[2]
  i2698.m_MethodName = i2699[3]
  i2698.m_Mode = i2699[4]
  i2698.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2699[5], i2698.m_Arguments)
  i2698.m_CallState = i2699[6]
  return i2698
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2700 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2701 = data
  i2700.m_Mode = i2701[0]
  i2700.m_WrapAround = !!i2701[1]
  request.r(i2701[2], i2701[3], 0, i2700, 'm_SelectOnUp')
  request.r(i2701[4], i2701[5], 0, i2700, 'm_SelectOnDown')
  request.r(i2701[6], i2701[7], 0, i2700, 'm_SelectOnLeft')
  request.r(i2701[8], i2701[9], 0, i2700, 'm_SelectOnRight')
  return i2700
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2702 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2703 = data
  i2702.m_NormalColor = new pc.Color(i2703[0], i2703[1], i2703[2], i2703[3])
  i2702.m_HighlightedColor = new pc.Color(i2703[4], i2703[5], i2703[6], i2703[7])
  i2702.m_PressedColor = new pc.Color(i2703[8], i2703[9], i2703[10], i2703[11])
  i2702.m_SelectedColor = new pc.Color(i2703[12], i2703[13], i2703[14], i2703[15])
  i2702.m_DisabledColor = new pc.Color(i2703[16], i2703[17], i2703[18], i2703[19])
  i2702.m_ColorMultiplier = i2703[20]
  i2702.m_FadeDuration = i2703[21]
  return i2702
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2704 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2705 = data
  request.r(i2705[0], i2705[1], 0, i2704, 'm_HighlightedSprite')
  request.r(i2705[2], i2705[3], 0, i2704, 'm_PressedSprite')
  request.r(i2705[4], i2705[5], 0, i2704, 'm_SelectedSprite')
  request.r(i2705[6], i2705[7], 0, i2704, 'm_DisabledSprite')
  return i2704
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2706 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2707 = data
  i2706.m_NormalTrigger = i2707[0]
  i2706.m_HighlightedTrigger = i2707[1]
  i2706.m_PressedTrigger = i2707[2]
  i2706.m_SelectedTrigger = i2707[3]
  i2706.m_DisabledTrigger = i2707[4]
  return i2706
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2708 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2709 = data
  request.r(i2709[0], i2709[1], 0, i2708, 'm_ObjectArgument')
  i2708.m_ObjectArgumentAssemblyTypeName = i2709[2]
  i2708.m_IntArgument = i2709[3]
  i2708.m_FloatArgument = i2709[4]
  i2708.m_StringArgument = i2709[5]
  i2708.m_BoolArgument = !!i2709[6]
  return i2708
}

Deserializers["BackImage"] = function (request, data, root) {
  var i2710 = root || request.c( 'BackImage' )
  var i2711 = data
  return i2710
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i2712 = root || request.c( 'AheadImage' )
  var i2713 = data
  return i2712
}

Deserializers["Order"] = function (request, data, root) {
  var i2714 = root || request.c( 'Order' )
  var i2715 = data
  request.r(i2715[0], i2715[1], 0, i2714, '_juiceAnimator')
  request.r(i2715[2], i2715[3], 0, i2714, '_cupAnimator')
  request.r(i2715[4], i2715[5], 0, i2714, '_canvasAnimator')
  i2714.CupType = i2715[6]
  i2714.JuiceType = i2715[7]
  i2714.AdditiveType1 = i2715[8]
  i2714.AdditiveType2 = i2715[9]
  i2714.IsFree = !!i2715[10]
  i2714.IsSpriteReady = !!i2715[11]
  i2714.IsCupReady = !!i2715[12]
  i2714.IsJuiceReady = !!i2715[13]
  request.r(i2715[14], i2715[15], 0, i2714, '_iceButton')
  request.r(i2715[16], i2715[17], 0, i2714, '_grassButton')
  request.r(i2715[18], i2715[19], 0, i2714, '_juiceBallsButton')
  request.r(i2715[20], i2715[21], 0, i2714, '_strawButton')
  request.r(i2715[22], i2715[23], 0, i2714, '_bigCupButton')
  request.r(i2715[24], i2715[25], 0, i2714, '_middleCupButton')
  request.r(i2715[26], i2715[27], 0, i2714, '_smallCupButton')
  request.r(i2715[28], i2715[29], 0, i2714, '_appleButton')
  request.r(i2715[30], i2715[31], 0, i2714, '_orangeButton')
  request.r(i2715[32], i2715[33], 0, i2714, '_multifruitButton')
  request.r(i2715[34], i2715[35], 0, i2714, '_tomatoButton')
  request.r(i2715[36], i2715[37], 0, i2714, '_cherryButton')
  request.r(i2715[38], i2715[39], 0, i2714, '_smallRawJuiceImage')
  request.r(i2715[40], i2715[41], 0, i2714, '_middleRawJuiceImage')
  request.r(i2715[42], i2715[43], 0, i2714, '_bigRawJuiceImage')
  request.r(i2715[44], i2715[45], 0, i2714, '_smallReadyJuiceImage')
  request.r(i2715[46], i2715[47], 0, i2714, '_middleReadyJuiceImage')
  request.r(i2715[48], i2715[49], 0, i2714, '_bigReadyJuiceImage')
  request.r(i2715[50], i2715[51], 0, i2714, '_backImage')
  request.r(i2715[52], i2715[53], 0, i2714, '_aheadImage')
  request.r(i2715[54], i2715[55], 0, i2714, '_config')
  request.r(i2715[56], i2715[57], 0, i2714, '_takeOrderButton')
  request.r(i2715[58], i2715[59], 0, i2714, '_peopleContainer')
  request.r(i2715[60], i2715[61], 0, i2714, '_tutorial')
  request.r(i2715[62], i2715[63], 0, i2714, '_bText')
  request.r(i2715[64], i2715[65], 0, i2714, '_mText')
  request.r(i2715[66], i2715[67], 0, i2714, '_sText')
  request.r(i2715[68], i2715[69], 0, i2714, '_clickSound')
  request.r(i2715[70], i2715[71], 0, i2714, '_juiceSound')
  return i2714
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i2716 = root || request.c( 'Tutorial' )
  var i2717 = data
  i2716.IsTutorial = !!i2717[0]
  request.r(i2717[1], i2717[2], 0, i2716, 'Finger1')
  request.r(i2717[3], i2717[4], 0, i2716, 'Finger2')
  request.r(i2717[5], i2717[6], 0, i2716, 'Finger3')
  request.r(i2717[7], i2717[8], 0, i2716, 'Finger4')
  request.r(i2717[9], i2717[10], 0, i2716, 'Finger5')
  request.r(i2717[11], i2717[12], 0, i2716, 'BuyBigCupFinger')
  request.r(i2717[13], i2717[14], 0, i2716, 'BuyJuiceFinger')
  request.r(i2717[15], i2717[16], 0, i2716, 'SmallCupButton')
  request.r(i2717[17], i2717[18], 0, i2716, 'JuiceButton')
  request.r(i2717[19], i2717[20], 0, i2716, 'StrawButton')
  request.r(i2717[21], i2717[22], 0, i2716, 'AdditiveButton')
  request.r(i2717[23], i2717[24], 0, i2716, 'ReadyButton')
  var i2719 = i2717[25]
  var i2718 = []
  for(var i = 0; i < i2719.length; i += 2) {
  request.r(i2719[i + 0], i2719[i + 1], 2, i2718, '')
  }
  i2716.Buttons = i2718
  request.r(i2717[26], i2717[27], 0, i2716, 'Bank')
  return i2716
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2722 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2723 = data
  request.r(i2723[0], i2723[1], 0, i2722, 'm_FirstSelected')
  i2722.m_sendNavigationEvents = !!i2723[2]
  i2722.m_DragThreshold = i2723[3]
  return i2722
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2724 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2725 = data
  i2724.m_HorizontalAxis = i2725[0]
  i2724.m_VerticalAxis = i2725[1]
  i2724.m_SubmitButton = i2725[2]
  i2724.m_CancelButton = i2725[3]
  i2724.m_InputActionsPerSecond = i2725[4]
  i2724.m_RepeatDelay = i2725[5]
  i2724.m_ForceModuleActive = !!i2725[6]
  i2724.m_SendPointerHoverToParent = !!i2725[7]
  return i2724
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i2726 = root || request.c( 'JuiceConfig' )
  var i2727 = data
  request.r(i2727[0], i2727[1], 0, i2726, 'EntityBigCup')
  request.r(i2727[2], i2727[3], 0, i2726, 'TomatoBigCup')
  request.r(i2727[4], i2727[5], 0, i2726, 'AppleBigCup')
  request.r(i2727[6], i2727[7], 0, i2726, 'OrangeBigCup')
  request.r(i2727[8], i2727[9], 0, i2726, 'CherryBigCup')
  request.r(i2727[10], i2727[11], 0, i2726, 'MultifruitBigCup')
  request.r(i2727[12], i2727[13], 0, i2726, 'TomatoBigStrawCup')
  request.r(i2727[14], i2727[15], 0, i2726, 'MultifruitBigStrawCup')
  request.r(i2727[16], i2727[17], 0, i2726, 'AppleBigStrawCup')
  request.r(i2727[18], i2727[19], 0, i2726, 'OrangeBigStrawCup')
  request.r(i2727[20], i2727[21], 0, i2726, 'CherryBigStrawCup')
  request.r(i2727[22], i2727[23], 0, i2726, 'MultifruitBigBallsCup')
  request.r(i2727[24], i2727[25], 0, i2726, 'TomatoBigBallsCup')
  request.r(i2727[26], i2727[27], 0, i2726, 'AppleBigBallsCup')
  request.r(i2727[28], i2727[29], 0, i2726, 'OrangeBigBallsCup')
  request.r(i2727[30], i2727[31], 0, i2726, 'CherryBigBallsCup')
  request.r(i2727[32], i2727[33], 0, i2726, 'EntityMiddleCup')
  request.r(i2727[34], i2727[35], 0, i2726, 'TomatoMiddleCup')
  request.r(i2727[36], i2727[37], 0, i2726, 'AppleMiddleCup')
  request.r(i2727[38], i2727[39], 0, i2726, 'OrangeMiddleCup')
  request.r(i2727[40], i2727[41], 0, i2726, 'CherryMiddleCup')
  request.r(i2727[42], i2727[43], 0, i2726, 'MultifruitMiddleCup')
  request.r(i2727[44], i2727[45], 0, i2726, 'TomatoMiddleStrawCup')
  request.r(i2727[46], i2727[47], 0, i2726, 'MultifruitMiddleStrawCup')
  request.r(i2727[48], i2727[49], 0, i2726, 'AppleMiddleStrawCup')
  request.r(i2727[50], i2727[51], 0, i2726, 'OrangeMiddleStrawCup')
  request.r(i2727[52], i2727[53], 0, i2726, 'CherryMiddleStrawCup')
  request.r(i2727[54], i2727[55], 0, i2726, 'MultifruitMiddleBallsCup')
  request.r(i2727[56], i2727[57], 0, i2726, 'TomatoMiddleBallsCup')
  request.r(i2727[58], i2727[59], 0, i2726, 'AppleMiddleBallsCup')
  request.r(i2727[60], i2727[61], 0, i2726, 'OrangeMiddleBallsCup')
  request.r(i2727[62], i2727[63], 0, i2726, 'CherryMiddleBallsCup')
  request.r(i2727[64], i2727[65], 0, i2726, 'EntitySmallCup')
  request.r(i2727[66], i2727[67], 0, i2726, 'TomatoSmallCup')
  request.r(i2727[68], i2727[69], 0, i2726, 'AppleSmallCup')
  request.r(i2727[70], i2727[71], 0, i2726, 'OrangeSmallCup')
  request.r(i2727[72], i2727[73], 0, i2726, 'CherrySmallCup')
  request.r(i2727[74], i2727[75], 0, i2726, 'MultifruitSmallCup')
  request.r(i2727[76], i2727[77], 0, i2726, 'TomatoSmallStrawCup')
  request.r(i2727[78], i2727[79], 0, i2726, 'AppleSmallStrawCup')
  request.r(i2727[80], i2727[81], 0, i2726, 'OrangeSmallStrawCup')
  request.r(i2727[82], i2727[83], 0, i2726, 'CherrySmallStrawCup')
  request.r(i2727[84], i2727[85], 0, i2726, 'MultifruitSmallStrawCup')
  request.r(i2727[86], i2727[87], 0, i2726, 'AppleSmallBallsCup')
  request.r(i2727[88], i2727[89], 0, i2726, 'TomatoSmallBallsCup')
  request.r(i2727[90], i2727[91], 0, i2726, 'OrangeSmallBallsCup')
  request.r(i2727[92], i2727[93], 0, i2726, 'CherrySmallBallsCup')
  request.r(i2727[94], i2727[95], 0, i2726, 'MultifruitSmallBallsCup')
  request.r(i2727[96], i2727[97], 0, i2726, 'JuiceBallAdditive')
  request.r(i2727[98], i2727[99], 0, i2726, 'IceAdditive')
  request.r(i2727[100], i2727[101], 0, i2726, 'GrassAdditive')
  return i2726
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i2728 = root || request.c( 'TouchIdleTimer' )
  var i2729 = data
  return i2728
}

Deserializers["Helper"] = function (request, data, root) {
  var i2730 = root || request.c( 'Helper' )
  var i2731 = data
  request.r(i2731[0], i2731[1], 0, i2730, '_smallCupFinger')
  request.r(i2731[2], i2731[3], 0, i2730, '_middleCupFinger')
  request.r(i2731[4], i2731[5], 0, i2730, '_bigCupFinger')
  request.r(i2731[6], i2731[7], 0, i2730, '_iceFinger')
  request.r(i2731[8], i2731[9], 0, i2730, '_grassFinger')
  request.r(i2731[10], i2731[11], 0, i2730, '_juiceballFinger')
  request.r(i2731[12], i2731[13], 0, i2730, '_appleFinger')
  request.r(i2731[14], i2731[15], 0, i2730, '_cherryFinger')
  request.r(i2731[16], i2731[17], 0, i2730, '_orangeFinger')
  request.r(i2731[18], i2731[19], 0, i2730, '_multifruitFinger')
  request.r(i2731[20], i2731[21], 0, i2730, '_tomatoFinger')
  request.r(i2731[22], i2731[23], 0, i2730, '_strawFinger')
  request.r(i2731[24], i2731[25], 0, i2730, '_readyFinger')
  request.r(i2731[26], i2731[27], 0, i2730, '_peoples')
  request.r(i2731[28], i2731[29], 0, i2730, '_tutorial')
  request.r(i2731[30], i2731[31], 0, i2730, '_order')
  request.r(i2731[32], i2731[33], 0, i2730, '_strawButton')
  request.r(i2731[34], i2731[35], 0, i2730, '_bigCupButton')
  request.r(i2731[36], i2731[37], 0, i2730, '_middleCupButton')
  request.r(i2731[38], i2731[39], 0, i2730, '_smallCupButton')
  request.r(i2731[40], i2731[41], 0, i2730, '_readyButton')
  request.r(i2731[42], i2731[43], 0, i2730, '_touchIdleTimer')
  request.r(i2731[44], i2731[45], 0, i2730, '_finalScreen')
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2733 = data
  i2732.ambientIntensity = i2733[0]
  i2732.reflectionIntensity = i2733[1]
  i2732.ambientMode = i2733[2]
  i2732.ambientLight = new pc.Color(i2733[3], i2733[4], i2733[5], i2733[6])
  i2732.ambientSkyColor = new pc.Color(i2733[7], i2733[8], i2733[9], i2733[10])
  i2732.ambientGroundColor = new pc.Color(i2733[11], i2733[12], i2733[13], i2733[14])
  i2732.ambientEquatorColor = new pc.Color(i2733[15], i2733[16], i2733[17], i2733[18])
  i2732.fogColor = new pc.Color(i2733[19], i2733[20], i2733[21], i2733[22])
  i2732.fogEndDistance = i2733[23]
  i2732.fogStartDistance = i2733[24]
  i2732.fogDensity = i2733[25]
  i2732.fog = !!i2733[26]
  request.r(i2733[27], i2733[28], 0, i2732, 'skybox')
  i2732.fogMode = i2733[29]
  var i2735 = i2733[30]
  var i2734 = []
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2735[i + 0]) );
  }
  i2732.lightmaps = i2734
  i2732.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2733[31], i2732.lightProbes)
  i2732.lightmapsMode = i2733[32]
  i2732.mixedBakeMode = i2733[33]
  i2732.environmentLightingMode = i2733[34]
  i2732.ambientProbe = new pc.SphericalHarmonicsL2(i2733[35])
  i2732.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2733[36])
  i2732.useReferenceAmbientProbe = !!i2733[37]
  request.r(i2733[38], i2733[39], 0, i2732, 'customReflection')
  request.r(i2733[40], i2733[41], 0, i2732, 'defaultReflection')
  i2732.defaultReflectionMode = i2733[42]
  i2732.defaultReflectionResolution = i2733[43]
  i2732.sunLightObjectId = i2733[44]
  i2732.pixelLightCount = i2733[45]
  i2732.defaultReflectionHDR = !!i2733[46]
  i2732.hasLightDataAsset = !!i2733[47]
  i2732.hasManualGenerate = !!i2733[48]
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2739 = data
  request.r(i2739[0], i2739[1], 0, i2738, 'lightmapColor')
  request.r(i2739[2], i2739[3], 0, i2738, 'lightmapDirection')
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2740 = root || new UnityEngine.LightProbes()
  var i2741 = data
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2749 = data
  var i2751 = i2749[0]
  var i2750 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2751[i + 0]));
  }
  i2748.ShaderCompilationErrors = i2750
  i2748.name = i2749[1]
  i2748.guid = i2749[2]
  var i2753 = i2749[3]
  var i2752 = []
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.push( i2753[i + 0] );
  }
  i2748.shaderDefinedKeywords = i2752
  var i2755 = i2749[4]
  var i2754 = []
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2755[i + 0]) );
  }
  i2748.passes = i2754
  var i2757 = i2749[5]
  var i2756 = []
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2757[i + 0]) );
  }
  i2748.usePasses = i2756
  var i2759 = i2749[6]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2759[i + 0]) );
  }
  i2748.defaultParameterValues = i2758
  request.r(i2749[7], i2749[8], 0, i2748, 'unityFallbackShader')
  i2748.readDepth = !!i2749[9]
  i2748.isCreatedByShaderGraph = !!i2749[10]
  i2748.compiled = !!i2749[11]
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2763 = data
  i2762.shaderName = i2763[0]
  i2762.errorMessage = i2763[1]
  return i2762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2768 = root || new pc.UnityShaderPass()
  var i2769 = data
  i2768.id = i2769[0]
  i2768.subShaderIndex = i2769[1]
  i2768.name = i2769[2]
  i2768.passType = i2769[3]
  i2768.grabPassTextureName = i2769[4]
  i2768.usePass = !!i2769[5]
  i2768.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2769[6], i2768.zTest)
  i2768.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2769[7], i2768.zWrite)
  i2768.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2769[8], i2768.culling)
  i2768.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2769[9], i2768.blending)
  i2768.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2769[10], i2768.alphaBlending)
  i2768.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2769[11], i2768.colorWriteMask)
  i2768.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2769[12], i2768.offsetUnits)
  i2768.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2769[13], i2768.offsetFactor)
  i2768.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2769[14], i2768.stencilRef)
  i2768.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2769[15], i2768.stencilReadMask)
  i2768.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2769[16], i2768.stencilWriteMask)
  i2768.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2769[17], i2768.stencilOp)
  i2768.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2769[18], i2768.stencilOpFront)
  i2768.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2769[19], i2768.stencilOpBack)
  var i2771 = i2769[20]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2771[i + 0]) );
  }
  i2768.tags = i2770
  var i2773 = i2769[21]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( i2773[i + 0] );
  }
  i2768.passDefinedKeywords = i2772
  var i2775 = i2769[22]
  var i2774 = []
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2775[i + 0]) );
  }
  i2768.passDefinedKeywordGroups = i2774
  var i2777 = i2769[23]
  var i2776 = []
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2777[i + 0]) );
  }
  i2768.variants = i2776
  var i2779 = i2769[24]
  var i2778 = []
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2779[i + 0]) );
  }
  i2768.excludedVariants = i2778
  i2768.hasDepthReader = !!i2769[25]
  return i2768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2781 = data
  i2780.val = i2781[0]
  i2780.name = i2781[1]
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2783 = data
  i2782.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2783[0], i2782.src)
  i2782.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2783[1], i2782.dst)
  i2782.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2783[2], i2782.op)
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2785 = data
  i2784.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2785[0], i2784.pass)
  i2784.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2785[1], i2784.fail)
  i2784.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2785[2], i2784.zFail)
  i2784.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2785[3], i2784.comp)
  return i2784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2789 = data
  i2788.name = i2789[0]
  i2788.value = i2789[1]
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2793 = data
  var i2795 = i2793[0]
  var i2794 = []
  for(var i = 0; i < i2795.length; i += 1) {
    i2794.push( i2795[i + 0] );
  }
  i2792.keywords = i2794
  i2792.hasDiscard = !!i2793[1]
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2799 = data
  i2798.passId = i2799[0]
  i2798.subShaderIndex = i2799[1]
  var i2801 = i2799[2]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( i2801[i + 0] );
  }
  i2798.keywords = i2800
  i2798.vertexProgram = i2799[3]
  i2798.fragmentProgram = i2799[4]
  i2798.exportedForWebGl2 = !!i2799[5]
  i2798.readDepth = !!i2799[6]
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2805 = data
  request.r(i2805[0], i2805[1], 0, i2804, 'shader')
  i2804.pass = i2805[2]
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2809 = data
  i2808.name = i2809[0]
  i2808.type = i2809[1]
  i2808.value = new pc.Vec4( i2809[2], i2809[3], i2809[4], i2809[5] )
  i2808.textureValue = i2809[6]
  i2808.shaderPropertyFlag = i2809[7]
  return i2808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2811 = data
  i2810.name = i2811[0]
  request.r(i2811[1], i2811[2], 0, i2810, 'texture')
  i2810.aabb = i2811[3]
  i2810.vertices = i2811[4]
  i2810.triangles = i2811[5]
  i2810.textureRect = UnityEngine.Rect.MinMaxRect(i2811[6], i2811[7], i2811[8], i2811[9])
  i2810.packedRect = UnityEngine.Rect.MinMaxRect(i2811[10], i2811[11], i2811[12], i2811[13])
  i2810.border = new pc.Vec4( i2811[14], i2811[15], i2811[16], i2811[17] )
  i2810.transparency = i2811[18]
  i2810.bounds = i2811[19]
  i2810.pixelsPerUnit = i2811[20]
  i2810.textureWidth = i2811[21]
  i2810.textureHeight = i2811[22]
  i2810.nativeSize = new pc.Vec2( i2811[23], i2811[24] )
  i2810.pivot = new pc.Vec2( i2811[25], i2811[26] )
  i2810.textureRectOffset = new pc.Vec2( i2811[27], i2811[28] )
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2813 = data
  i2812.name = i2813[0]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2815 = data
  i2814.name = i2815[0]
  i2814.wrapMode = i2815[1]
  i2814.isLooping = !!i2815[2]
  i2814.length = i2815[3]
  var i2817 = i2815[4]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2817[i + 0]) );
  }
  i2814.curves = i2816
  var i2819 = i2815[5]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2819[i + 0]) );
  }
  i2814.events = i2818
  i2814.halfPrecision = !!i2815[6]
  i2814._frameRate = i2815[7]
  i2814.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2815[8], i2814.localBounds)
  i2814.hasMuscleCurves = !!i2815[9]
  var i2821 = i2815[10]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( i2821[i + 0] );
  }
  i2814.clipMuscleConstant = i2820
  i2814.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2815[11], i2814.clipBindingConstant)
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2825 = data
  i2824.path = i2825[0]
  i2824.hash = i2825[1]
  i2824.componentType = i2825[2]
  i2824.property = i2825[3]
  i2824.keys = i2825[4]
  var i2827 = i2825[5]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2827[i + 0]) );
  }
  i2824.objectReferenceKeys = i2826
  return i2824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2831 = data
  i2830.time = i2831[0]
  request.r(i2831[1], i2831[2], 0, i2830, 'value')
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2835 = data
  i2834.functionName = i2835[0]
  i2834.floatParameter = i2835[1]
  i2834.intParameter = i2835[2]
  i2834.stringParameter = i2835[3]
  request.r(i2835[4], i2835[5], 0, i2834, 'objectReferenceParameter')
  i2834.time = i2835[6]
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2837 = data
  i2836.center = new pc.Vec3( i2837[0], i2837[1], i2837[2] )
  i2836.extends = new pc.Vec3( i2837[3], i2837[4], i2837[5] )
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2841 = data
  var i2843 = i2841[0]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.push( i2843[i + 0] );
  }
  i2840.genericBindings = i2842
  var i2845 = i2841[1]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.push( i2845[i + 0] );
  }
  i2840.pptrCurveMapping = i2844
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2847 = data
  i2846.name = i2847[0]
  i2846.ascent = i2847[1]
  i2846.originalLineHeight = i2847[2]
  i2846.fontSize = i2847[3]
  var i2849 = i2847[4]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2849[i + 0]) );
  }
  i2846.characterInfo = i2848
  request.r(i2847[5], i2847[6], 0, i2846, 'texture')
  i2846.originalFontSize = i2847[7]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2853 = data
  i2852.index = i2853[0]
  i2852.advance = i2853[1]
  i2852.bearing = i2853[2]
  i2852.glyphWidth = i2853[3]
  i2852.glyphHeight = i2853[4]
  i2852.minX = i2853[5]
  i2852.maxX = i2853[6]
  i2852.minY = i2853[7]
  i2852.maxY = i2853[8]
  i2852.uvBottomLeftX = i2853[9]
  i2852.uvBottomLeftY = i2853[10]
  i2852.uvBottomRightX = i2853[11]
  i2852.uvBottomRightY = i2853[12]
  i2852.uvTopLeftX = i2853[13]
  i2852.uvTopLeftY = i2853[14]
  i2852.uvTopRightX = i2853[15]
  i2852.uvTopRightY = i2853[16]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2855 = data
  i2854.name = i2855[0]
  var i2857 = i2855[1]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2857[i + 0]) );
  }
  i2854.layers = i2856
  var i2859 = i2855[2]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2859[i + 0]) );
  }
  i2854.parameters = i2858
  i2854.animationClips = i2855[3]
  i2854.avatarUnsupported = i2855[4]
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2863 = data
  i2862.name = i2863[0]
  i2862.defaultWeight = i2863[1]
  i2862.blendingMode = i2863[2]
  i2862.avatarMask = i2863[3]
  i2862.syncedLayerIndex = i2863[4]
  i2862.syncedLayerAffectsTiming = !!i2863[5]
  i2862.syncedLayers = i2863[6]
  i2862.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2863[7], i2862.stateMachine)
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2865 = data
  i2864.id = i2865[0]
  i2864.name = i2865[1]
  i2864.path = i2865[2]
  var i2867 = i2865[3]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2867[i + 0]) );
  }
  i2864.states = i2866
  var i2869 = i2865[4]
  var i2868 = []
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2869[i + 0]) );
  }
  i2864.machines = i2868
  var i2871 = i2865[5]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 1) {
    i2870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2871[i + 0]) );
  }
  i2864.entryStateTransitions = i2870
  var i2873 = i2865[6]
  var i2872 = []
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2873[i + 0]) );
  }
  i2864.exitStateTransitions = i2872
  var i2875 = i2865[7]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2875[i + 0]) );
  }
  i2864.anyStateTransitions = i2874
  i2864.defaultStateId = i2865[8]
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2879 = data
  i2878.id = i2879[0]
  i2878.name = i2879[1]
  i2878.cycleOffset = i2879[2]
  i2878.cycleOffsetParameter = i2879[3]
  i2878.cycleOffsetParameterActive = !!i2879[4]
  i2878.mirror = !!i2879[5]
  i2878.mirrorParameter = i2879[6]
  i2878.mirrorParameterActive = !!i2879[7]
  i2878.motionId = i2879[8]
  i2878.nameHash = i2879[9]
  i2878.fullPathHash = i2879[10]
  i2878.speed = i2879[11]
  i2878.speedParameter = i2879[12]
  i2878.speedParameterActive = !!i2879[13]
  i2878.tag = i2879[14]
  i2878.tagHash = i2879[15]
  i2878.writeDefaultValues = !!i2879[16]
  var i2881 = i2879[17]
  var i2880 = []
  for(var i = 0; i < i2881.length; i += 2) {
  request.r(i2881[i + 0], i2881[i + 1], 2, i2880, '')
  }
  i2878.behaviours = i2880
  var i2883 = i2879[18]
  var i2882 = []
  for(var i = 0; i < i2883.length; i += 1) {
    i2882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2883[i + 0]) );
  }
  i2878.transitions = i2882
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2889 = data
  i2888.fullPath = i2889[0]
  i2888.canTransitionToSelf = !!i2889[1]
  i2888.duration = i2889[2]
  i2888.exitTime = i2889[3]
  i2888.hasExitTime = !!i2889[4]
  i2888.hasFixedDuration = !!i2889[5]
  i2888.interruptionSource = i2889[6]
  i2888.offset = i2889[7]
  i2888.orderedInterruption = !!i2889[8]
  i2888.destinationStateId = i2889[9]
  i2888.isExit = !!i2889[10]
  i2888.mute = !!i2889[11]
  i2888.solo = !!i2889[12]
  var i2891 = i2889[13]
  var i2890 = []
  for(var i = 0; i < i2891.length; i += 1) {
    i2890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2891[i + 0]) );
  }
  i2888.conditions = i2890
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2897 = data
  i2896.destinationStateId = i2897[0]
  i2896.isExit = !!i2897[1]
  i2896.mute = !!i2897[2]
  i2896.solo = !!i2897[3]
  var i2899 = i2897[4]
  var i2898 = []
  for(var i = 0; i < i2899.length; i += 1) {
    i2898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2899[i + 0]) );
  }
  i2896.conditions = i2898
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2903 = data
  i2902.mode = i2903[0]
  i2902.parameter = i2903[1]
  i2902.threshold = i2903[2]
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2907 = data
  i2906.defaultBool = !!i2907[0]
  i2906.defaultFloat = i2907[1]
  i2906.defaultInt = i2907[2]
  i2906.name = i2907[3]
  i2906.nameHash = i2907[4]
  i2906.type = i2907[5]
  return i2906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2909 = data
  i2908.name = i2909[0]
  i2908.bytes64 = i2909[1]
  i2908.data = i2909[2]
  return i2908
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2910 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2911 = data
  i2910.hashCode = i2911[0]
  request.r(i2911[1], i2911[2], 0, i2910, 'material')
  i2910.materialHashCode = i2911[3]
  request.r(i2911[4], i2911[5], 0, i2910, 'atlas')
  i2910.normalStyle = i2911[6]
  i2910.normalSpacingOffset = i2911[7]
  i2910.boldStyle = i2911[8]
  i2910.boldSpacing = i2911[9]
  i2910.italicStyle = i2911[10]
  i2910.tabSize = i2911[11]
  i2910.m_Version = i2911[12]
  i2910.m_SourceFontFileGUID = i2911[13]
  request.r(i2911[14], i2911[15], 0, i2910, 'm_SourceFontFile_EditorRef')
  request.r(i2911[16], i2911[17], 0, i2910, 'm_SourceFontFile')
  i2910.m_AtlasPopulationMode = i2911[18]
  i2910.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2911[19], i2910.m_FaceInfo)
  var i2913 = i2911[20]
  var i2912 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2913.length; i += 1) {
    i2912.add(request.d('UnityEngine.TextCore.Glyph', i2913[i + 0]));
  }
  i2910.m_GlyphTable = i2912
  var i2915 = i2911[21]
  var i2914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.add(request.d('TMPro.TMP_Character', i2915[i + 0]));
  }
  i2910.m_CharacterTable = i2914
  var i2917 = i2911[22]
  var i2916 = []
  for(var i = 0; i < i2917.length; i += 2) {
  request.r(i2917[i + 0], i2917[i + 1], 2, i2916, '')
  }
  i2910.m_AtlasTextures = i2916
  i2910.m_AtlasTextureIndex = i2911[23]
  i2910.m_IsMultiAtlasTexturesEnabled = !!i2911[24]
  i2910.m_ClearDynamicDataOnBuild = !!i2911[25]
  var i2919 = i2911[26]
  var i2918 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2919.length; i += 1) {
    i2918.add(request.d('UnityEngine.TextCore.GlyphRect', i2919[i + 0]));
  }
  i2910.m_UsedGlyphRects = i2918
  var i2921 = i2911[27]
  var i2920 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2921.length; i += 1) {
    i2920.add(request.d('UnityEngine.TextCore.GlyphRect', i2921[i + 0]));
  }
  i2910.m_FreeGlyphRects = i2920
  i2910.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2911[28], i2910.m_fontInfo)
  i2910.m_AtlasWidth = i2911[29]
  i2910.m_AtlasHeight = i2911[30]
  i2910.m_AtlasPadding = i2911[31]
  i2910.m_AtlasRenderMode = i2911[32]
  var i2923 = i2911[33]
  var i2922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2923.length; i += 1) {
    i2922.add(request.d('TMPro.TMP_Glyph', i2923[i + 0]));
  }
  i2910.m_glyphInfoList = i2922
  i2910.m_KerningTable = request.d('TMPro.KerningTable', i2911[34], i2910.m_KerningTable)
  i2910.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2911[35], i2910.m_FontFeatureTable)
  var i2925 = i2911[36]
  var i2924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2925.length; i += 2) {
  request.r(i2925[i + 0], i2925[i + 1], 1, i2924, '')
  }
  i2910.fallbackFontAssets = i2924
  var i2927 = i2911[37]
  var i2926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2927.length; i += 2) {
  request.r(i2927[i + 0], i2927[i + 1], 1, i2926, '')
  }
  i2910.m_FallbackFontAssetTable = i2926
  i2910.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2911[38], i2910.m_CreationSettings)
  var i2929 = i2911[39]
  var i2928 = []
  for(var i = 0; i < i2929.length; i += 1) {
    i2928.push( request.d('TMPro.TMP_FontWeightPair', i2929[i + 0]) );
  }
  i2910.m_FontWeightTable = i2928
  var i2931 = i2911[40]
  var i2930 = []
  for(var i = 0; i < i2931.length; i += 1) {
    i2930.push( request.d('TMPro.TMP_FontWeightPair', i2931[i + 0]) );
  }
  i2910.fontWeights = i2930
  return i2910
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2932 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2933 = data
  i2932.m_FaceIndex = i2933[0]
  i2932.m_FamilyName = i2933[1]
  i2932.m_StyleName = i2933[2]
  i2932.m_PointSize = i2933[3]
  i2932.m_Scale = i2933[4]
  i2932.m_UnitsPerEM = i2933[5]
  i2932.m_LineHeight = i2933[6]
  i2932.m_AscentLine = i2933[7]
  i2932.m_CapLine = i2933[8]
  i2932.m_MeanLine = i2933[9]
  i2932.m_Baseline = i2933[10]
  i2932.m_DescentLine = i2933[11]
  i2932.m_SuperscriptOffset = i2933[12]
  i2932.m_SuperscriptSize = i2933[13]
  i2932.m_SubscriptOffset = i2933[14]
  i2932.m_SubscriptSize = i2933[15]
  i2932.m_UnderlineOffset = i2933[16]
  i2932.m_UnderlineThickness = i2933[17]
  i2932.m_StrikethroughOffset = i2933[18]
  i2932.m_StrikethroughThickness = i2933[19]
  i2932.m_TabWidth = i2933[20]
  return i2932
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2936 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2937 = data
  i2936.m_Index = i2937[0]
  i2936.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2937[1], i2936.m_Metrics)
  i2936.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2937[2], i2936.m_GlyphRect)
  i2936.m_Scale = i2937[3]
  i2936.m_AtlasIndex = i2937[4]
  i2936.m_ClassDefinitionType = i2937[5]
  return i2936
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2938 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2939 = data
  i2938.m_Width = i2939[0]
  i2938.m_Height = i2939[1]
  i2938.m_HorizontalBearingX = i2939[2]
  i2938.m_HorizontalBearingY = i2939[3]
  i2938.m_HorizontalAdvance = i2939[4]
  return i2938
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2940 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2941 = data
  i2940.m_X = i2941[0]
  i2940.m_Y = i2941[1]
  i2940.m_Width = i2941[2]
  i2940.m_Height = i2941[3]
  return i2940
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2944 = root || request.c( 'TMPro.TMP_Character' )
  var i2945 = data
  i2944.m_ElementType = i2945[0]
  i2944.m_Unicode = i2945[1]
  i2944.m_GlyphIndex = i2945[2]
  i2944.m_Scale = i2945[3]
  return i2944
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2950 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2951 = data
  i2950.Name = i2951[0]
  i2950.PointSize = i2951[1]
  i2950.Scale = i2951[2]
  i2950.CharacterCount = i2951[3]
  i2950.LineHeight = i2951[4]
  i2950.Baseline = i2951[5]
  i2950.Ascender = i2951[6]
  i2950.CapHeight = i2951[7]
  i2950.Descender = i2951[8]
  i2950.CenterLine = i2951[9]
  i2950.SuperscriptOffset = i2951[10]
  i2950.SubscriptOffset = i2951[11]
  i2950.SubSize = i2951[12]
  i2950.Underline = i2951[13]
  i2950.UnderlineThickness = i2951[14]
  i2950.strikethrough = i2951[15]
  i2950.strikethroughThickness = i2951[16]
  i2950.TabWidth = i2951[17]
  i2950.Padding = i2951[18]
  i2950.AtlasWidth = i2951[19]
  i2950.AtlasHeight = i2951[20]
  return i2950
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2954 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2955 = data
  i2954.id = i2955[0]
  i2954.x = i2955[1]
  i2954.y = i2955[2]
  i2954.width = i2955[3]
  i2954.height = i2955[4]
  i2954.xOffset = i2955[5]
  i2954.yOffset = i2955[6]
  i2954.xAdvance = i2955[7]
  i2954.scale = i2955[8]
  return i2954
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2956 = root || request.c( 'TMPro.KerningTable' )
  var i2957 = data
  var i2959 = i2957[0]
  var i2958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2959.length; i += 1) {
    i2958.add(request.d('TMPro.KerningPair', i2959[i + 0]));
  }
  i2956.kerningPairs = i2958
  return i2956
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2962 = root || request.c( 'TMPro.KerningPair' )
  var i2963 = data
  i2962.xOffset = i2963[0]
  i2962.m_FirstGlyph = i2963[1]
  i2962.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2963[2], i2962.m_FirstGlyphAdjustments)
  i2962.m_SecondGlyph = i2963[3]
  i2962.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2963[4], i2962.m_SecondGlyphAdjustments)
  i2962.m_IgnoreSpacingAdjustments = !!i2963[5]
  return i2962
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2964 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2965 = data
  var i2967 = i2965[0]
  var i2966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2967.length; i += 1) {
    i2966.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2967[i + 0]));
  }
  i2964.m_GlyphPairAdjustmentRecords = i2966
  return i2964
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2970 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2971 = data
  i2970.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2971[0], i2970.m_FirstAdjustmentRecord)
  i2970.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2971[1], i2970.m_SecondAdjustmentRecord)
  i2970.m_FeatureLookupFlags = i2971[2]
  return i2970
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2972 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2973 = data
  i2972.m_GlyphIndex = i2973[0]
  i2972.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2973[1], i2972.m_GlyphValueRecord)
  return i2972
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2974 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2975 = data
  i2974.m_XPlacement = i2975[0]
  i2974.m_YPlacement = i2975[1]
  i2974.m_XAdvance = i2975[2]
  i2974.m_YAdvance = i2975[3]
  return i2974
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2978 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2979 = data
  i2978.sourceFontFileName = i2979[0]
  i2978.sourceFontFileGUID = i2979[1]
  i2978.pointSizeSamplingMode = i2979[2]
  i2978.pointSize = i2979[3]
  i2978.padding = i2979[4]
  i2978.packingMode = i2979[5]
  i2978.atlasWidth = i2979[6]
  i2978.atlasHeight = i2979[7]
  i2978.characterSetSelectionMode = i2979[8]
  i2978.characterSequence = i2979[9]
  i2978.referencedFontAssetGUID = i2979[10]
  i2978.referencedTextAssetGUID = i2979[11]
  i2978.fontStyle = i2979[12]
  i2978.fontStyleModifier = i2979[13]
  i2978.renderMode = i2979[14]
  i2978.includeFontFeatures = !!i2979[15]
  return i2978
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2982 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2983 = data
  request.r(i2983[0], i2983[1], 0, i2982, 'regularTypeface')
  request.r(i2983[2], i2983[3], 0, i2982, 'italicTypeface')
  return i2982
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2984 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2985 = data
  i2984.useSafeMode = !!i2985[0]
  i2984.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2985[1], i2984.safeModeOptions)
  i2984.timeScale = i2985[2]
  i2984.unscaledTimeScale = i2985[3]
  i2984.useSmoothDeltaTime = !!i2985[4]
  i2984.maxSmoothUnscaledTime = i2985[5]
  i2984.rewindCallbackMode = i2985[6]
  i2984.showUnityEditorReport = !!i2985[7]
  i2984.logBehaviour = i2985[8]
  i2984.drawGizmos = !!i2985[9]
  i2984.defaultRecyclable = !!i2985[10]
  i2984.defaultAutoPlay = i2985[11]
  i2984.defaultUpdateType = i2985[12]
  i2984.defaultTimeScaleIndependent = !!i2985[13]
  i2984.defaultEaseType = i2985[14]
  i2984.defaultEaseOvershootOrAmplitude = i2985[15]
  i2984.defaultEasePeriod = i2985[16]
  i2984.defaultAutoKill = !!i2985[17]
  i2984.defaultLoopType = i2985[18]
  i2984.debugMode = !!i2985[19]
  i2984.debugStoreTargetId = !!i2985[20]
  i2984.showPreviewPanel = !!i2985[21]
  i2984.storeSettingsLocation = i2985[22]
  i2984.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2985[23], i2984.modules)
  i2984.createASMDEF = !!i2985[24]
  i2984.showPlayingTweens = !!i2985[25]
  i2984.showPausedTweens = !!i2985[26]
  return i2984
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2986 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2987 = data
  i2986.logBehaviour = i2987[0]
  i2986.nestedTweenFailureBehaviour = i2987[1]
  return i2986
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2988 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2989 = data
  i2988.showPanel = !!i2989[0]
  i2988.audioEnabled = !!i2989[1]
  i2988.physicsEnabled = !!i2989[2]
  i2988.physics2DEnabled = !!i2989[3]
  i2988.spriteEnabled = !!i2989[4]
  i2988.uiEnabled = !!i2989[5]
  i2988.textMeshProEnabled = !!i2989[6]
  i2988.tk2DEnabled = !!i2989[7]
  i2988.deAudioEnabled = !!i2989[8]
  i2988.deUnityExtendedEnabled = !!i2989[9]
  i2988.epoOutlineEnabled = !!i2989[10]
  return i2988
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2990 = root || request.c( 'TMPro.TMP_Settings' )
  var i2991 = data
  i2990.m_enableWordWrapping = !!i2991[0]
  i2990.m_enableKerning = !!i2991[1]
  i2990.m_enableExtraPadding = !!i2991[2]
  i2990.m_enableTintAllSprites = !!i2991[3]
  i2990.m_enableParseEscapeCharacters = !!i2991[4]
  i2990.m_EnableRaycastTarget = !!i2991[5]
  i2990.m_GetFontFeaturesAtRuntime = !!i2991[6]
  i2990.m_missingGlyphCharacter = i2991[7]
  i2990.m_warningsDisabled = !!i2991[8]
  request.r(i2991[9], i2991[10], 0, i2990, 'm_defaultFontAsset')
  i2990.m_defaultFontAssetPath = i2991[11]
  i2990.m_defaultFontSize = i2991[12]
  i2990.m_defaultAutoSizeMinRatio = i2991[13]
  i2990.m_defaultAutoSizeMaxRatio = i2991[14]
  i2990.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2991[15], i2991[16] )
  i2990.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2991[17], i2991[18] )
  i2990.m_autoSizeTextContainer = !!i2991[19]
  i2990.m_IsTextObjectScaleStatic = !!i2991[20]
  var i2993 = i2991[21]
  var i2992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2993.length; i += 2) {
  request.r(i2993[i + 0], i2993[i + 1], 1, i2992, '')
  }
  i2990.m_fallbackFontAssets = i2992
  i2990.m_matchMaterialPreset = !!i2991[22]
  request.r(i2991[23], i2991[24], 0, i2990, 'm_defaultSpriteAsset')
  i2990.m_defaultSpriteAssetPath = i2991[25]
  i2990.m_enableEmojiSupport = !!i2991[26]
  i2990.m_MissingCharacterSpriteUnicode = i2991[27]
  i2990.m_defaultColorGradientPresetsPath = i2991[28]
  request.r(i2991[29], i2991[30], 0, i2990, 'm_defaultStyleSheet')
  i2990.m_StyleSheetsResourcePath = i2991[31]
  request.r(i2991[32], i2991[33], 0, i2990, 'm_leadingCharacters')
  request.r(i2991[34], i2991[35], 0, i2990, 'm_followingCharacters')
  i2990.m_UseModernHangulLineBreakingRules = !!i2991[36]
  return i2990
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2994 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2995 = data
  i2994.hashCode = i2995[0]
  request.r(i2995[1], i2995[2], 0, i2994, 'material')
  i2994.materialHashCode = i2995[3]
  request.r(i2995[4], i2995[5], 0, i2994, 'spriteSheet')
  var i2997 = i2995[6]
  var i2996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2997.length; i += 1) {
    i2996.add(request.d('TMPro.TMP_Sprite', i2997[i + 0]));
  }
  i2994.spriteInfoList = i2996
  var i2999 = i2995[7]
  var i2998 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2999.length; i += 2) {
  request.r(i2999[i + 0], i2999[i + 1], 1, i2998, '')
  }
  i2994.fallbackSpriteAssets = i2998
  i2994.m_Version = i2995[8]
  i2994.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2995[9], i2994.m_FaceInfo)
  var i3001 = i2995[10]
  var i3000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3001.length; i += 1) {
    i3000.add(request.d('TMPro.TMP_SpriteCharacter', i3001[i + 0]));
  }
  i2994.m_SpriteCharacterTable = i3000
  var i3003 = i2995[11]
  var i3002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3003.length; i += 1) {
    i3002.add(request.d('TMPro.TMP_SpriteGlyph', i3003[i + 0]));
  }
  i2994.m_SpriteGlyphTable = i3002
  return i2994
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3006 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3007 = data
  i3006.name = i3007[0]
  i3006.hashCode = i3007[1]
  i3006.unicode = i3007[2]
  i3006.pivot = new pc.Vec2( i3007[3], i3007[4] )
  request.r(i3007[5], i3007[6], 0, i3006, 'sprite')
  i3006.id = i3007[7]
  i3006.x = i3007[8]
  i3006.y = i3007[9]
  i3006.width = i3007[10]
  i3006.height = i3007[11]
  i3006.xOffset = i3007[12]
  i3006.yOffset = i3007[13]
  i3006.xAdvance = i3007[14]
  i3006.scale = i3007[15]
  return i3006
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3012 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3013 = data
  i3012.m_Name = i3013[0]
  i3012.m_HashCode = i3013[1]
  i3012.m_ElementType = i3013[2]
  i3012.m_Unicode = i3013[3]
  i3012.m_GlyphIndex = i3013[4]
  i3012.m_Scale = i3013[5]
  return i3012
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3016 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3017 = data
  request.r(i3017[0], i3017[1], 0, i3016, 'sprite')
  i3016.m_Index = i3017[2]
  i3016.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3017[3], i3016.m_Metrics)
  i3016.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3017[4], i3016.m_GlyphRect)
  i3016.m_Scale = i3017[5]
  i3016.m_AtlasIndex = i3017[6]
  i3016.m_ClassDefinitionType = i3017[7]
  return i3016
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3018 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3019 = data
  var i3021 = i3019[0]
  var i3020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3021.length; i += 1) {
    i3020.add(request.d('TMPro.TMP_Style', i3021[i + 0]));
  }
  i3018.m_StyleList = i3020
  return i3018
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3024 = root || request.c( 'TMPro.TMP_Style' )
  var i3025 = data
  i3024.m_Name = i3025[0]
  i3024.m_HashCode = i3025[1]
  i3024.m_OpeningDefinition = i3025[2]
  i3024.m_ClosingDefinition = i3025[3]
  i3024.m_OpeningTagArray = i3025[4]
  i3024.m_ClosingTagArray = i3025[5]
  i3024.m_OpeningTagUnicodeArray = i3025[6]
  i3024.m_ClosingTagUnicodeArray = i3025[7]
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3027 = data
  var i3029 = i3027[0]
  var i3028 = []
  for(var i = 0; i < i3029.length; i += 1) {
    i3028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3029[i + 0]) );
  }
  i3026.files = i3028
  i3026.componentToPrefabIds = i3027[1]
  return i3026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3033 = data
  i3032.path = i3033[0]
  request.r(i3033[1], i3033[2], 0, i3032, 'unityObject')
  return i3032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3035 = data
  var i3037 = i3035[0]
  var i3036 = []
  for(var i = 0; i < i3037.length; i += 1) {
    i3036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3037[i + 0]) );
  }
  i3034.scriptsExecutionOrder = i3036
  var i3039 = i3035[1]
  var i3038 = []
  for(var i = 0; i < i3039.length; i += 1) {
    i3038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3039[i + 0]) );
  }
  i3034.sortingLayers = i3038
  var i3041 = i3035[2]
  var i3040 = []
  for(var i = 0; i < i3041.length; i += 1) {
    i3040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3041[i + 0]) );
  }
  i3034.cullingLayers = i3040
  i3034.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3035[3], i3034.timeSettings)
  i3034.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3035[4], i3034.physicsSettings)
  i3034.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3035[5], i3034.physics2DSettings)
  i3034.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3035[6], i3034.qualitySettings)
  i3034.enableRealtimeShadows = !!i3035[7]
  i3034.enableAutoInstancing = !!i3035[8]
  i3034.enableDynamicBatching = !!i3035[9]
  i3034.lightmapEncodingQuality = i3035[10]
  i3034.desiredColorSpace = i3035[11]
  var i3043 = i3035[12]
  var i3042 = []
  for(var i = 0; i < i3043.length; i += 1) {
    i3042.push( i3043[i + 0] );
  }
  i3034.allTags = i3042
  return i3034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3047 = data
  i3046.name = i3047[0]
  i3046.value = i3047[1]
  return i3046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3051 = data
  i3050.id = i3051[0]
  i3050.name = i3051[1]
  i3050.value = i3051[2]
  return i3050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3055 = data
  i3054.id = i3055[0]
  i3054.name = i3055[1]
  return i3054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3057 = data
  i3056.fixedDeltaTime = i3057[0]
  i3056.maximumDeltaTime = i3057[1]
  i3056.timeScale = i3057[2]
  i3056.maximumParticleTimestep = i3057[3]
  return i3056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3059 = data
  i3058.gravity = new pc.Vec3( i3059[0], i3059[1], i3059[2] )
  i3058.defaultSolverIterations = i3059[3]
  i3058.bounceThreshold = i3059[4]
  i3058.autoSyncTransforms = !!i3059[5]
  i3058.autoSimulation = !!i3059[6]
  var i3061 = i3059[7]
  var i3060 = []
  for(var i = 0; i < i3061.length; i += 1) {
    i3060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3061[i + 0]) );
  }
  i3058.collisionMatrix = i3060
  return i3058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3065 = data
  i3064.enabled = !!i3065[0]
  i3064.layerId = i3065[1]
  i3064.otherLayerId = i3065[2]
  return i3064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3067 = data
  request.r(i3067[0], i3067[1], 0, i3066, 'material')
  i3066.gravity = new pc.Vec2( i3067[2], i3067[3] )
  i3066.positionIterations = i3067[4]
  i3066.velocityIterations = i3067[5]
  i3066.velocityThreshold = i3067[6]
  i3066.maxLinearCorrection = i3067[7]
  i3066.maxAngularCorrection = i3067[8]
  i3066.maxTranslationSpeed = i3067[9]
  i3066.maxRotationSpeed = i3067[10]
  i3066.baumgarteScale = i3067[11]
  i3066.baumgarteTOIScale = i3067[12]
  i3066.timeToSleep = i3067[13]
  i3066.linearSleepTolerance = i3067[14]
  i3066.angularSleepTolerance = i3067[15]
  i3066.defaultContactOffset = i3067[16]
  i3066.autoSimulation = !!i3067[17]
  i3066.queriesHitTriggers = !!i3067[18]
  i3066.queriesStartInColliders = !!i3067[19]
  i3066.callbacksOnDisable = !!i3067[20]
  i3066.reuseCollisionCallbacks = !!i3067[21]
  i3066.autoSyncTransforms = !!i3067[22]
  var i3069 = i3067[23]
  var i3068 = []
  for(var i = 0; i < i3069.length; i += 1) {
    i3068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3069[i + 0]) );
  }
  i3066.collisionMatrix = i3068
  return i3066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3073 = data
  i3072.enabled = !!i3073[0]
  i3072.layerId = i3073[1]
  i3072.otherLayerId = i3073[2]
  return i3072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3075 = data
  var i3077 = i3075[0]
  var i3076 = []
  for(var i = 0; i < i3077.length; i += 1) {
    i3076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3077[i + 0]) );
  }
  i3074.qualityLevels = i3076
  var i3079 = i3075[1]
  var i3078 = []
  for(var i = 0; i < i3079.length; i += 1) {
    i3078.push( i3079[i + 0] );
  }
  i3074.names = i3078
  i3074.shadows = i3075[2]
  i3074.anisotropicFiltering = i3075[3]
  i3074.antiAliasing = i3075[4]
  i3074.lodBias = i3075[5]
  i3074.shadowCascades = i3075[6]
  i3074.shadowDistance = i3075[7]
  i3074.shadowmaskMode = i3075[8]
  i3074.shadowProjection = i3075[9]
  i3074.shadowResolution = i3075[10]
  i3074.softParticles = !!i3075[11]
  i3074.softVegetation = !!i3075[12]
  i3074.activeColorSpace = i3075[13]
  i3074.desiredColorSpace = i3075[14]
  i3074.masterTextureLimit = i3075[15]
  i3074.maxQueuedFrames = i3075[16]
  i3074.particleRaycastBudget = i3075[17]
  i3074.pixelLightCount = i3075[18]
  i3074.realtimeReflectionProbes = !!i3075[19]
  i3074.shadowCascade2Split = i3075[20]
  i3074.shadowCascade4Split = new pc.Vec3( i3075[21], i3075[22], i3075[23] )
  i3074.streamingMipmapsActive = !!i3075[24]
  i3074.vSyncCount = i3075[25]
  i3074.asyncUploadBufferSize = i3075[26]
  i3074.asyncUploadTimeSlice = i3075[27]
  i3074.billboardsFaceCameraPosition = !!i3075[28]
  i3074.shadowNearPlaneOffset = i3075[29]
  i3074.streamingMipmapsMemoryBudget = i3075[30]
  i3074.maximumLODLevel = i3075[31]
  i3074.streamingMipmapsAddAllCameras = !!i3075[32]
  i3074.streamingMipmapsMaxLevelReduction = i3075[33]
  i3074.streamingMipmapsRenderersPerFrame = i3075[34]
  i3074.resolutionScalingFixedDPIFactor = i3075[35]
  i3074.streamingMipmapsMaxFileIORequests = i3075[36]
  i3074.currentQualityLevel = i3075[37]
  return i3074
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3082 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3083 = data
  i3082.xPlacement = i3083[0]
  i3082.yPlacement = i3083[1]
  i3082.xAdvance = i3083[2]
  i3082.yAdvance = i3083[3]
  return i3082
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[12],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[12],"77":[78],"79":[80],"81":[80],"19":[2],"82":[2],"83":[84],"85":[86],"87":[84],"88":[2],"89":[2],"21":[19],"6":[3,2],"90":[2],"20":[19],"30":[2],"91":[2],"92":[2],"93":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[3,2],"100":[2],"101":[2],"102":[2],"103":[2],"104":[3,2],"105":[2],"106":[35],"107":[35],"36":[35],"108":[35],"109":[12],"110":[12],"111":[112],"113":[12],"114":[2],"115":[78,2],"17":[2,3],"116":[2],"117":[3,2],"118":[78],"119":[3,2],"120":[2],"121":[84]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","TMPro.TMP_FontAsset","UnityEngine.Material","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Juice-6-5";

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

Deserializers.buildID = "f84fc140-9eeb-4f3c-baf0-9ce6227b6d0c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

