var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointSpring' )
  var i515 = data
  i514.spring = i515[0]
  i514.damper = i515[1]
  i514.targetPosition = i515[2]
  return i514
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointMotor' )
  var i517 = data
  i516.m_TargetVelocity = i517[0]
  i516.m_Force = i517[1]
  i516.m_FreeSpin = i517[2]
  return i516
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointLimits' )
  var i519 = data
  i518.m_Min = i519[0]
  i518.m_Max = i519[1]
  i518.m_Bounciness = i519[2]
  i518.m_BounceMinVelocity = i519[3]
  i518.m_ContactDistance = i519[4]
  i518.minBounce = i519[5]
  i518.maxBounce = i519[6]
  return i518
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.JointDrive' )
  var i521 = data
  i520.m_PositionSpring = i521[0]
  i520.m_PositionDamper = i521[1]
  i520.m_MaximumForce = i521[2]
  i520.m_UseAcceleration = i521[3]
  return i520
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i523 = data
  i522.m_Spring = i523[0]
  i522.m_Damper = i523[1]
  return i522
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i525 = data
  i524.m_Limit = i525[0]
  i524.m_Bounciness = i525[1]
  i524.m_ContactDistance = i525[2]
  return i524
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i527 = data
  i526.m_ExtremumSlip = i527[0]
  i526.m_ExtremumValue = i527[1]
  i526.m_AsymptoteSlip = i527[2]
  i526.m_AsymptoteValue = i527[3]
  i526.m_Stiffness = i527[4]
  return i526
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i529 = data
  i528.m_LowerAngle = i529[0]
  i528.m_UpperAngle = i529[1]
  return i528
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i531 = data
  i530.m_MotorSpeed = i531[0]
  i530.m_MaximumMotorTorque = i531[1]
  return i530
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i533 = data
  i532.m_DampingRatio = i533[0]
  i532.m_Frequency = i533[1]
  i532.m_Angle = i533[2]
  return i532
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i535 = data
  i534.m_LowerTranslation = i535[0]
  i534.m_UpperTranslation = i535[1]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i537 = data
  i536.name = i537[0]
  i536.width = i537[1]
  i536.height = i537[2]
  i536.mipmapCount = i537[3]
  i536.anisoLevel = i537[4]
  i536.filterMode = i537[5]
  i536.hdr = !!i537[6]
  i536.format = i537[7]
  i536.wrapMode = i537[8]
  i536.alphaIsTransparency = !!i537[9]
  i536.alphaSource = i537[10]
  i536.graphicsFormat = i537[11]
  i536.sRGBTexture = !!i537[12]
  i536.desiredColorSpace = i537[13]
  i536.wrapU = i537[14]
  i536.wrapV = i537[15]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i538 = root || new pc.UnityMaterial()
  var i539 = data
  i538.name = i539[0]
  request.r(i539[1], i539[2], 0, i538, 'shader')
  i538.renderQueue = i539[3]
  i538.enableInstancing = !!i539[4]
  var i541 = i539[5]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i541[i + 0]) );
  }
  i538.floatParameters = i540
  var i543 = i539[6]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i543[i + 0]) );
  }
  i538.colorParameters = i542
  var i545 = i539[7]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i545[i + 0]) );
  }
  i538.vectorParameters = i544
  var i547 = i539[8]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i547[i + 0]) );
  }
  i538.textureParameters = i546
  var i549 = i539[9]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i549[i + 0]) );
  }
  i538.materialFlags = i548
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i553 = data
  i552.name = i553[0]
  i552.value = i553[1]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i557 = data
  i556.name = i557[0]
  i556.value = new pc.Color(i557[1], i557[2], i557[3], i557[4])
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i561 = data
  i560.name = i561[0]
  i560.value = new pc.Vec4( i561[1], i561[2], i561[3], i561[4] )
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i565 = data
  i564.name = i565[0]
  request.r(i565[1], i565[2], 0, i564, 'value')
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i569 = data
  i568.name = i569[0]
  i568.enabled = !!i569[1]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i571 = data
  i570.pivot = new pc.Vec2( i571[0], i571[1] )
  i570.anchorMin = new pc.Vec2( i571[2], i571[3] )
  i570.anchorMax = new pc.Vec2( i571[4], i571[5] )
  i570.sizeDelta = new pc.Vec2( i571[6], i571[7] )
  i570.anchoredPosition3D = new pc.Vec3( i571[8], i571[9], i571[10] )
  i570.rotation = new pc.Quat(i571[11], i571[12], i571[13], i571[14])
  i570.scale = new pc.Vec3( i571[15], i571[16], i571[17] )
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i573 = data
  i572.cullTransparentMesh = !!i573[0]
  return i572
}

Deserializers["People"] = function (request, data, root) {
  var i574 = root || request.c( 'People' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, '_readyImage')
  request.r(i575[2], i575[3], 0, i574, '_additiveImage1')
  request.r(i575[4], i575[5], 0, i574, '_additiveImage2')
  request.r(i575[6], i575[7], 0, i574, '_endPoint')
  request.r(i575[8], i575[9], 0, i574, 'Bank')
  request.r(i575[10], i575[11], 0, i574, '_sizeText')
  i574.CupType = i575[12]
  i574.JuiceType = i575[13]
  i574.AdditiveType1 = i575[14]
  i574.AdditiveType2 = i575[15]
  request.r(i575[16], i575[17], 0, i574, '_finishSound')
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'clip')
  request.r(i577[2], i577[3], 0, i576, 'outputAudioMixerGroup')
  i576.playOnAwake = !!i577[4]
  i576.loop = !!i577[5]
  i576.time = i577[6]
  i576.volume = i577[7]
  i576.pitch = i577[8]
  i576.enabled = !!i577[9]
  return i576
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.UI.Image' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'm_Sprite')
  i578.m_Type = i579[2]
  i578.m_PreserveAspect = !!i579[3]
  i578.m_FillCenter = !!i579[4]
  i578.m_FillMethod = i579[5]
  i578.m_FillAmount = i579[6]
  i578.m_FillClockwise = !!i579[7]
  i578.m_FillOrigin = i579[8]
  i578.m_UseSpriteMesh = !!i579[9]
  i578.m_PixelsPerUnitMultiplier = i579[10]
  request.r(i579[11], i579[12], 0, i578, 'm_Material')
  i578.m_Maskable = !!i579[13]
  i578.m_Color = new pc.Color(i579[14], i579[15], i579[16], i579[17])
  i578.m_RaycastTarget = !!i579[18]
  i578.m_RaycastPadding = new pc.Vec4( i579[19], i579[20], i579[21], i579[22] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i581 = data
  i580.name = i581[0]
  i580.tagId = i581[1]
  i580.enabled = !!i581[2]
  i580.isStatic = !!i581[3]
  i580.layer = i581[4]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i583 = data
  i582.name = i583[0]
  i582.index = i583[1]
  i582.startup = !!i583[2]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i585 = data
  i584.position = new pc.Vec3( i585[0], i585[1], i585[2] )
  i584.scale = new pc.Vec3( i585[3], i585[4], i585[5] )
  i584.rotation = new pc.Quat(i585[6], i585[7], i585[8], i585[9])
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i587 = data
  i586.enabled = !!i587[0]
  i586.aspect = i587[1]
  i586.orthographic = !!i587[2]
  i586.orthographicSize = i587[3]
  i586.backgroundColor = new pc.Color(i587[4], i587[5], i587[6], i587[7])
  i586.nearClipPlane = i587[8]
  i586.farClipPlane = i587[9]
  i586.fieldOfView = i587[10]
  i586.depth = i587[11]
  i586.clearFlags = i587[12]
  i586.cullingMask = i587[13]
  i586.rect = i587[14]
  request.r(i587[15], i587[16], 0, i586, 'targetTexture')
  i586.usePhysicalProperties = !!i587[17]
  i586.focalLength = i587[18]
  i586.sensorSize = new pc.Vec2( i587[19], i587[20] )
  i586.lensShift = new pc.Vec2( i587[21], i587[22] )
  i586.gateFit = i587[23]
  i586.commandBufferCount = i587[24]
  i586.cameraType = i587[25]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'animatorController')
  request.r(i589[2], i589[3], 0, i588, 'avatar')
  i588.updateMode = i589[4]
  i588.hasTransformHierarchy = !!i589[5]
  i588.applyRootMotion = !!i589[6]
  var i591 = i589[7]
  var i590 = []
  for(var i = 0; i < i591.length; i += 2) {
  request.r(i591[i + 0], i591[i + 1], 2, i590, '')
  }
  i588.humanBones = i590
  i588.enabled = !!i589[8]
  return i588
}

Deserializers["Bank"] = function (request, data, root) {
  var i594 = root || request.c( 'Bank' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'BuyBigCupButton')
  request.r(i595[2], i595[3], 0, i594, 'BigCupButton')
  request.r(i595[4], i595[5], 0, i594, 'MiddleCupButton')
  request.r(i595[6], i595[7], 0, i594, 'MoneyText')
  request.r(i595[8], i595[9], 0, i594, 'Tutorial')
  request.r(i595[10], i595[11], 0, i594, 'BuyAdditiveButton')
  request.r(i595[12], i595[13], 0, i594, 'BuyJuiceButton')
  request.r(i595[14], i595[15], 0, i594, 'JuiceButton1')
  request.r(i595[16], i595[17], 0, i594, 'JuiceButton2')
  request.r(i595[18], i595[19], 0, i594, 'JuiceButton3')
  request.r(i595[20], i595[21], 0, i594, 'Additive1Button')
  request.r(i595[22], i595[23], 0, i594, 'Additive2Button')
  i594.Money = i595[24]
  i594.IsBigCupBuy = !!i595[25]
  i594.IsJuiceBuy = !!i595[26]
  i594.IsAdditiveBuy = !!i595[27]
  request.r(i595[28], i595[29], 0, i594, '_buySound')
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i597 = data
  i596.enabled = !!i597[0]
  i596.planeDistance = i597[1]
  i596.referencePixelsPerUnit = i597[2]
  i596.isFallbackOverlay = !!i597[3]
  i596.renderMode = i597[4]
  i596.renderOrder = i597[5]
  i596.sortingLayerName = i597[6]
  i596.sortingOrder = i597[7]
  i596.scaleFactor = i597[8]
  request.r(i597[9], i597[10], 0, i596, 'worldCamera')
  i596.overrideSorting = !!i597[11]
  i596.pixelPerfect = !!i597[12]
  i596.targetDisplay = i597[13]
  i596.overridePixelPerfect = !!i597[14]
  return i596
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i599 = data
  i598.m_UiScaleMode = i599[0]
  i598.m_ReferencePixelsPerUnit = i599[1]
  i598.m_ScaleFactor = i599[2]
  i598.m_ReferenceResolution = new pc.Vec2( i599[3], i599[4] )
  i598.m_ScreenMatchMode = i599[5]
  i598.m_MatchWidthOrHeight = i599[6]
  i598.m_PhysicalUnit = i599[7]
  i598.m_FallbackScreenDPI = i599[8]
  i598.m_DefaultSpriteDPI = i599[9]
  i598.m_DynamicPixelsPerUnit = i599[10]
  i598.m_PresetInfoIsWorld = !!i599[11]
  return i598
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i601 = data
  i600.m_IgnoreReversedGraphics = !!i601[0]
  i600.m_BlockingObjects = i601[1]
  i600.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i601[2] )
  return i600
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i602 = root || request.c( 'ImageShiftOnOrientation' )
  var i603 = data
  var i605 = i603[0]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('ItemSwitcherData', i605[i + 0]) );
  }
  i602.Items = i604
  request.r(i603[1], i603[2], 0, i602, '_backHorizontal')
  request.r(i603[3], i603[4], 0, i602, '_backVertical')
  request.r(i603[5], i603[6], 0, i602, '_tableHorizontal')
  request.r(i603[7], i603[8], 0, i602, '_tableVertical')
  i602.IsDebug = !!i603[9]
  i602.CanCopy = !!i603[10]
  return i602
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i608 = root || request.c( 'ItemSwitcherData' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'Target')
  i608.HorizontalAnchoredPosition = new pc.Vec2( i609[2], i609[3] )
  i608.SizeHorizontal = new pc.Vec2( i609[4], i609[5] )
  i608.VerticalAnchoredPosition = new pc.Vec2( i609[6], i609[7] )
  i608.SizeVertical = new pc.Vec2( i609[8], i609[9] )
  i608.MinHorizontal = new pc.Vec2( i609[10], i609[11] )
  i608.MaxHorizontal = new pc.Vec2( i609[12], i609[13] )
  i608.MinVertical = new pc.Vec2( i609[14], i609[15] )
  i608.MaxVertical = new pc.Vec2( i609[16], i609[17] )
  i608.IsAnchored = !!i609[18]
  i608.IsDebug = !!i609[19]
  i608.CopyHorizontal = !!i609[20]
  i608.CopyVertical = !!i609[21]
  return i608
}

Deserializers["Point"] = function (request, data, root) {
  var i610 = root || request.c( 'Point' )
  var i611 = data
  return i610
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i612 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i613 = data
  i612.m_hasFontAssetChanged = !!i613[0]
  request.r(i613[1], i613[2], 0, i612, 'm_baseMaterial')
  i612.m_maskOffset = new pc.Vec4( i613[3], i613[4], i613[5], i613[6] )
  i612.m_text = i613[7]
  i612.m_isRightToLeft = !!i613[8]
  request.r(i613[9], i613[10], 0, i612, 'm_fontAsset')
  request.r(i613[11], i613[12], 0, i612, 'm_sharedMaterial')
  var i615 = i613[13]
  var i614 = []
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 2, i614, '')
  }
  i612.m_fontSharedMaterials = i614
  request.r(i613[14], i613[15], 0, i612, 'm_fontMaterial')
  var i617 = i613[16]
  var i616 = []
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 2, i616, '')
  }
  i612.m_fontMaterials = i616
  i612.m_fontColor32 = UnityEngine.Color32.ConstructColor(i613[17], i613[18], i613[19], i613[20])
  i612.m_fontColor = new pc.Color(i613[21], i613[22], i613[23], i613[24])
  i612.m_enableVertexGradient = !!i613[25]
  i612.m_colorMode = i613[26]
  i612.m_fontColorGradient = request.d('TMPro.VertexGradient', i613[27], i612.m_fontColorGradient)
  request.r(i613[28], i613[29], 0, i612, 'm_fontColorGradientPreset')
  request.r(i613[30], i613[31], 0, i612, 'm_spriteAsset')
  i612.m_tintAllSprites = !!i613[32]
  request.r(i613[33], i613[34], 0, i612, 'm_StyleSheet')
  i612.m_TextStyleHashCode = i613[35]
  i612.m_overrideHtmlColors = !!i613[36]
  i612.m_faceColor = UnityEngine.Color32.ConstructColor(i613[37], i613[38], i613[39], i613[40])
  i612.m_fontSize = i613[41]
  i612.m_fontSizeBase = i613[42]
  i612.m_fontWeight = i613[43]
  i612.m_enableAutoSizing = !!i613[44]
  i612.m_fontSizeMin = i613[45]
  i612.m_fontSizeMax = i613[46]
  i612.m_fontStyle = i613[47]
  i612.m_HorizontalAlignment = i613[48]
  i612.m_VerticalAlignment = i613[49]
  i612.m_textAlignment = i613[50]
  i612.m_characterSpacing = i613[51]
  i612.m_wordSpacing = i613[52]
  i612.m_lineSpacing = i613[53]
  i612.m_lineSpacingMax = i613[54]
  i612.m_paragraphSpacing = i613[55]
  i612.m_charWidthMaxAdj = i613[56]
  i612.m_enableWordWrapping = !!i613[57]
  i612.m_wordWrappingRatios = i613[58]
  i612.m_overflowMode = i613[59]
  request.r(i613[60], i613[61], 0, i612, 'm_linkedTextComponent')
  request.r(i613[62], i613[63], 0, i612, 'parentLinkedComponent')
  i612.m_enableKerning = !!i613[64]
  i612.m_enableExtraPadding = !!i613[65]
  i612.checkPaddingRequired = !!i613[66]
  i612.m_isRichText = !!i613[67]
  i612.m_parseCtrlCharacters = !!i613[68]
  i612.m_isOrthographic = !!i613[69]
  i612.m_isCullingEnabled = !!i613[70]
  i612.m_horizontalMapping = i613[71]
  i612.m_verticalMapping = i613[72]
  i612.m_uvLineOffset = i613[73]
  i612.m_geometrySortingOrder = i613[74]
  i612.m_IsTextObjectScaleStatic = !!i613[75]
  i612.m_VertexBufferAutoSizeReduction = !!i613[76]
  i612.m_useMaxVisibleDescender = !!i613[77]
  i612.m_pageToDisplay = i613[78]
  i612.m_margin = new pc.Vec4( i613[79], i613[80], i613[81], i613[82] )
  i612.m_isUsingLegacyAnimationComponent = !!i613[83]
  i612.m_isVolumetricText = !!i613[84]
  request.r(i613[85], i613[86], 0, i612, 'm_Material')
  i612.m_Maskable = !!i613[87]
  i612.m_Color = new pc.Color(i613[88], i613[89], i613[90], i613[91])
  i612.m_RaycastTarget = !!i613[92]
  i612.m_RaycastPadding = new pc.Vec4( i613[93], i613[94], i613[95], i613[96] )
  return i612
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i620 = root || request.c( 'TMPro.VertexGradient' )
  var i621 = data
  i620.topLeft = new pc.Color(i621[0], i621[1], i621[2], i621[3])
  i620.topRight = new pc.Color(i621[4], i621[5], i621[6], i621[7])
  i620.bottomLeft = new pc.Color(i621[8], i621[9], i621[10], i621[11])
  i620.bottomRight = new pc.Color(i621[12], i621[13], i621[14], i621[15])
  return i620
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i622 = root || request.c( 'PeopleContainer' )
  var i623 = data
  var i625 = i623[0]
  var i624 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i625.length; i += 2) {
  request.r(i625[i + 0], i625[i + 1], 1, i624, '')
  }
  i622.CurrentPeoples = i624
  var i627 = i623[1]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 1, i626, '')
  }
  i622._peoples = i626
  request.r(i623[2], i623[3], 0, i622, '_tutorialPeople')
  request.r(i623[4], i623[5], 0, i622, '_spawnPoint')
  request.r(i623[6], i623[7], 0, i622, '_point1')
  request.r(i623[8], i623[9], 0, i622, '_point2')
  request.r(i623[10], i623[11], 0, i622, '_endPoint')
  request.r(i623[12], i623[13], 0, i622, '_juiceConfig')
  request.r(i623[14], i623[15], 0, i622, '_tutorial')
  return i622
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i631 = data
  i630.m_HorizontalFit = i631[0]
  i630.m_VerticalFit = i631[1]
  return i630
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.Button' )
  var i633 = data
  i632.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i633[0], i632.m_OnClick)
  i632.m_Navigation = request.d('UnityEngine.UI.Navigation', i633[1], i632.m_Navigation)
  i632.m_Transition = i633[2]
  i632.m_Colors = request.d('UnityEngine.UI.ColorBlock', i633[3], i632.m_Colors)
  i632.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i633[4], i632.m_SpriteState)
  i632.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i633[5], i632.m_AnimationTriggers)
  i632.m_Interactable = !!i633[6]
  request.r(i633[7], i633[8], 0, i632, 'm_TargetGraphic')
  return i632
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i635 = data
  i634.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i635[0], i634.m_PersistentCalls)
  return i634
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i637 = data
  var i639 = i637[0]
  var i638 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i639.length; i += 1) {
    i638.add(request.d('UnityEngine.Events.PersistentCall', i639[i + 0]));
  }
  i636.m_Calls = i638
  return i636
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'm_Target')
  i642.m_TargetAssemblyTypeName = i643[2]
  i642.m_MethodName = i643[3]
  i642.m_Mode = i643[4]
  i642.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i643[5], i642.m_Arguments)
  i642.m_CallState = i643[6]
  return i642
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'm_ObjectArgument')
  i644.m_ObjectArgumentAssemblyTypeName = i645[2]
  i644.m_IntArgument = i645[3]
  i644.m_FloatArgument = i645[4]
  i644.m_StringArgument = i645[5]
  i644.m_BoolArgument = !!i645[6]
  return i644
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i647 = data
  i646.m_Mode = i647[0]
  i646.m_WrapAround = !!i647[1]
  request.r(i647[2], i647[3], 0, i646, 'm_SelectOnUp')
  request.r(i647[4], i647[5], 0, i646, 'm_SelectOnDown')
  request.r(i647[6], i647[7], 0, i646, 'm_SelectOnLeft')
  request.r(i647[8], i647[9], 0, i646, 'm_SelectOnRight')
  return i646
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i649 = data
  i648.m_NormalColor = new pc.Color(i649[0], i649[1], i649[2], i649[3])
  i648.m_HighlightedColor = new pc.Color(i649[4], i649[5], i649[6], i649[7])
  i648.m_PressedColor = new pc.Color(i649[8], i649[9], i649[10], i649[11])
  i648.m_SelectedColor = new pc.Color(i649[12], i649[13], i649[14], i649[15])
  i648.m_DisabledColor = new pc.Color(i649[16], i649[17], i649[18], i649[19])
  i648.m_ColorMultiplier = i649[20]
  i648.m_FadeDuration = i649[21]
  return i648
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'm_HighlightedSprite')
  request.r(i651[2], i651[3], 0, i650, 'm_PressedSprite')
  request.r(i651[4], i651[5], 0, i650, 'm_SelectedSprite')
  request.r(i651[6], i651[7], 0, i650, 'm_DisabledSprite')
  return i650
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i653 = data
  i652.m_NormalTrigger = i653[0]
  i652.m_HighlightedTrigger = i653[1]
  i652.m_PressedTrigger = i653[2]
  i652.m_SelectedTrigger = i653[3]
  i652.m_DisabledTrigger = i653[4]
  return i652
}

Deserializers["BackImage"] = function (request, data, root) {
  var i654 = root || request.c( 'BackImage' )
  var i655 = data
  return i654
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i656 = root || request.c( 'AheadImage' )
  var i657 = data
  return i656
}

Deserializers["Order"] = function (request, data, root) {
  var i658 = root || request.c( 'Order' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, '_juiceAnimator')
  request.r(i659[2], i659[3], 0, i658, '_cupAnimator')
  request.r(i659[4], i659[5], 0, i658, '_canvasAnimator')
  i658.CupType = i659[6]
  i658.JuiceType = i659[7]
  i658.AdditiveType1 = i659[8]
  i658.AdditiveType2 = i659[9]
  i658.IsFree = !!i659[10]
  i658.IsSpriteReady = !!i659[11]
  i658.IsCupReady = !!i659[12]
  i658.IsJuiceReady = !!i659[13]
  request.r(i659[14], i659[15], 0, i658, '_iceButton')
  request.r(i659[16], i659[17], 0, i658, '_grassButton')
  request.r(i659[18], i659[19], 0, i658, '_juiceBallsButton')
  request.r(i659[20], i659[21], 0, i658, '_strawButton')
  request.r(i659[22], i659[23], 0, i658, '_bigCupButton')
  request.r(i659[24], i659[25], 0, i658, '_middleCupButton')
  request.r(i659[26], i659[27], 0, i658, '_smallCupButton')
  request.r(i659[28], i659[29], 0, i658, '_appleButton')
  request.r(i659[30], i659[31], 0, i658, '_orangeButton')
  request.r(i659[32], i659[33], 0, i658, '_multifruitButton')
  request.r(i659[34], i659[35], 0, i658, '_tomatoButton')
  request.r(i659[36], i659[37], 0, i658, '_cherryButton')
  request.r(i659[38], i659[39], 0, i658, '_smallRawJuiceImage')
  request.r(i659[40], i659[41], 0, i658, '_middleRawJuiceImage')
  request.r(i659[42], i659[43], 0, i658, '_bigRawJuiceImage')
  request.r(i659[44], i659[45], 0, i658, '_smallReadyJuiceImage')
  request.r(i659[46], i659[47], 0, i658, '_middleReadyJuiceImage')
  request.r(i659[48], i659[49], 0, i658, '_bigReadyJuiceImage')
  request.r(i659[50], i659[51], 0, i658, '_backImage')
  request.r(i659[52], i659[53], 0, i658, '_aheadImage')
  request.r(i659[54], i659[55], 0, i658, '_config')
  request.r(i659[56], i659[57], 0, i658, '_takeOrderButton')
  request.r(i659[58], i659[59], 0, i658, '_peopleContainer')
  request.r(i659[60], i659[61], 0, i658, '_tutorial')
  request.r(i659[62], i659[63], 0, i658, '_bText')
  request.r(i659[64], i659[65], 0, i658, '_mText')
  request.r(i659[66], i659[67], 0, i658, '_sText')
  request.r(i659[68], i659[69], 0, i658, '_clickSound')
  request.r(i659[70], i659[71], 0, i658, '_juiceSound')
  return i658
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i660 = root || request.c( 'Tutorial' )
  var i661 = data
  i660.IsTutorial = !!i661[0]
  request.r(i661[1], i661[2], 0, i660, 'Finger1')
  request.r(i661[3], i661[4], 0, i660, 'Finger2')
  request.r(i661[5], i661[6], 0, i660, 'Finger3')
  request.r(i661[7], i661[8], 0, i660, 'Finger4')
  request.r(i661[9], i661[10], 0, i660, 'Finger5')
  request.r(i661[11], i661[12], 0, i660, 'BuyBigCupFinger')
  request.r(i661[13], i661[14], 0, i660, 'BuyJuiceFinger')
  request.r(i661[15], i661[16], 0, i660, 'SmallCupButton')
  request.r(i661[17], i661[18], 0, i660, 'JuiceButton')
  request.r(i661[19], i661[20], 0, i660, 'StrawButton')
  request.r(i661[21], i661[22], 0, i660, 'AdditiveButton')
  request.r(i661[23], i661[24], 0, i660, 'ReadyButton')
  var i663 = i661[25]
  var i662 = []
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 2, i662, '')
  }
  i660.Buttons = i662
  request.r(i661[26], i661[27], 0, i660, 'Bank')
  return i660
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'm_FirstSelected')
  i666.m_sendNavigationEvents = !!i667[2]
  i666.m_DragThreshold = i667[3]
  return i666
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i669 = data
  i668.m_HorizontalAxis = i669[0]
  i668.m_VerticalAxis = i669[1]
  i668.m_SubmitButton = i669[2]
  i668.m_CancelButton = i669[3]
  i668.m_InputActionsPerSecond = i669[4]
  i668.m_RepeatDelay = i669[5]
  i668.m_ForceModuleActive = !!i669[6]
  i668.m_SendPointerHoverToParent = !!i669[7]
  return i668
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i670 = root || request.c( 'JuiceConfig' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'EntityBigCup')
  request.r(i671[2], i671[3], 0, i670, 'TomatoBigCup')
  request.r(i671[4], i671[5], 0, i670, 'AppleBigCup')
  request.r(i671[6], i671[7], 0, i670, 'OrangeBigCup')
  request.r(i671[8], i671[9], 0, i670, 'CherryBigCup')
  request.r(i671[10], i671[11], 0, i670, 'MultifruitBigCup')
  request.r(i671[12], i671[13], 0, i670, 'TomatoBigStrawCup')
  request.r(i671[14], i671[15], 0, i670, 'MultifruitBigStrawCup')
  request.r(i671[16], i671[17], 0, i670, 'AppleBigStrawCup')
  request.r(i671[18], i671[19], 0, i670, 'OrangeBigStrawCup')
  request.r(i671[20], i671[21], 0, i670, 'CherryBigStrawCup')
  request.r(i671[22], i671[23], 0, i670, 'MultifruitBigBallsCup')
  request.r(i671[24], i671[25], 0, i670, 'TomatoBigBallsCup')
  request.r(i671[26], i671[27], 0, i670, 'AppleBigBallsCup')
  request.r(i671[28], i671[29], 0, i670, 'OrangeBigBallsCup')
  request.r(i671[30], i671[31], 0, i670, 'CherryBigBallsCup')
  request.r(i671[32], i671[33], 0, i670, 'EntityMiddleCup')
  request.r(i671[34], i671[35], 0, i670, 'TomatoMiddleCup')
  request.r(i671[36], i671[37], 0, i670, 'AppleMiddleCup')
  request.r(i671[38], i671[39], 0, i670, 'OrangeMiddleCup')
  request.r(i671[40], i671[41], 0, i670, 'CherryMiddleCup')
  request.r(i671[42], i671[43], 0, i670, 'MultifruitMiddleCup')
  request.r(i671[44], i671[45], 0, i670, 'TomatoMiddleStrawCup')
  request.r(i671[46], i671[47], 0, i670, 'MultifruitMiddleStrawCup')
  request.r(i671[48], i671[49], 0, i670, 'AppleMiddleStrawCup')
  request.r(i671[50], i671[51], 0, i670, 'OrangeMiddleStrawCup')
  request.r(i671[52], i671[53], 0, i670, 'CherryMiddleStrawCup')
  request.r(i671[54], i671[55], 0, i670, 'MultifruitMiddleBallsCup')
  request.r(i671[56], i671[57], 0, i670, 'TomatoMiddleBallsCup')
  request.r(i671[58], i671[59], 0, i670, 'AppleMiddleBallsCup')
  request.r(i671[60], i671[61], 0, i670, 'OrangeMiddleBallsCup')
  request.r(i671[62], i671[63], 0, i670, 'CherryMiddleBallsCup')
  request.r(i671[64], i671[65], 0, i670, 'EntitySmallCup')
  request.r(i671[66], i671[67], 0, i670, 'TomatoSmallCup')
  request.r(i671[68], i671[69], 0, i670, 'AppleSmallCup')
  request.r(i671[70], i671[71], 0, i670, 'OrangeSmallCup')
  request.r(i671[72], i671[73], 0, i670, 'CherrySmallCup')
  request.r(i671[74], i671[75], 0, i670, 'MultifruitSmallCup')
  request.r(i671[76], i671[77], 0, i670, 'TomatoSmallStrawCup')
  request.r(i671[78], i671[79], 0, i670, 'AppleSmallStrawCup')
  request.r(i671[80], i671[81], 0, i670, 'OrangeSmallStrawCup')
  request.r(i671[82], i671[83], 0, i670, 'CherrySmallStrawCup')
  request.r(i671[84], i671[85], 0, i670, 'MultifruitSmallStrawCup')
  request.r(i671[86], i671[87], 0, i670, 'AppleSmallBallsCup')
  request.r(i671[88], i671[89], 0, i670, 'TomatoSmallBallsCup')
  request.r(i671[90], i671[91], 0, i670, 'OrangeSmallBallsCup')
  request.r(i671[92], i671[93], 0, i670, 'CherrySmallBallsCup')
  request.r(i671[94], i671[95], 0, i670, 'MultifruitSmallBallsCup')
  request.r(i671[96], i671[97], 0, i670, 'JuiceBallAdditive')
  request.r(i671[98], i671[99], 0, i670, 'IceAdditive')
  request.r(i671[100], i671[101], 0, i670, 'GrassAdditive')
  return i670
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i672 = root || request.c( 'TouchIdleTimer' )
  var i673 = data
  return i672
}

Deserializers["Helper"] = function (request, data, root) {
  var i674 = root || request.c( 'Helper' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, '_smallCupFinger')
  request.r(i675[2], i675[3], 0, i674, '_middleCupFinger')
  request.r(i675[4], i675[5], 0, i674, '_bigCupFinger')
  request.r(i675[6], i675[7], 0, i674, '_iceFinger')
  request.r(i675[8], i675[9], 0, i674, '_grassFinger')
  request.r(i675[10], i675[11], 0, i674, '_juiceballFinger')
  request.r(i675[12], i675[13], 0, i674, '_appleFinger')
  request.r(i675[14], i675[15], 0, i674, '_cherryFinger')
  request.r(i675[16], i675[17], 0, i674, '_orangeFinger')
  request.r(i675[18], i675[19], 0, i674, '_multifruitFinger')
  request.r(i675[20], i675[21], 0, i674, '_tomatoFinger')
  request.r(i675[22], i675[23], 0, i674, '_strawFinger')
  request.r(i675[24], i675[25], 0, i674, '_readyFinger')
  request.r(i675[26], i675[27], 0, i674, '_peoples')
  request.r(i675[28], i675[29], 0, i674, '_tutorial')
  request.r(i675[30], i675[31], 0, i674, '_order')
  request.r(i675[32], i675[33], 0, i674, '_strawButton')
  request.r(i675[34], i675[35], 0, i674, '_bigCupButton')
  request.r(i675[36], i675[37], 0, i674, '_middleCupButton')
  request.r(i675[38], i675[39], 0, i674, '_smallCupButton')
  request.r(i675[40], i675[41], 0, i674, '_readyButton')
  request.r(i675[42], i675[43], 0, i674, '_touchIdleTimer')
  request.r(i675[44], i675[45], 0, i674, '_finalScreen')
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i677 = data
  i676.ambientIntensity = i677[0]
  i676.reflectionIntensity = i677[1]
  i676.ambientMode = i677[2]
  i676.ambientLight = new pc.Color(i677[3], i677[4], i677[5], i677[6])
  i676.ambientSkyColor = new pc.Color(i677[7], i677[8], i677[9], i677[10])
  i676.ambientGroundColor = new pc.Color(i677[11], i677[12], i677[13], i677[14])
  i676.ambientEquatorColor = new pc.Color(i677[15], i677[16], i677[17], i677[18])
  i676.fogColor = new pc.Color(i677[19], i677[20], i677[21], i677[22])
  i676.fogEndDistance = i677[23]
  i676.fogStartDistance = i677[24]
  i676.fogDensity = i677[25]
  i676.fog = !!i677[26]
  request.r(i677[27], i677[28], 0, i676, 'skybox')
  i676.fogMode = i677[29]
  var i679 = i677[30]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i679[i + 0]) );
  }
  i676.lightmaps = i678
  i676.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i677[31], i676.lightProbes)
  i676.lightmapsMode = i677[32]
  i676.mixedBakeMode = i677[33]
  i676.environmentLightingMode = i677[34]
  i676.ambientProbe = new pc.SphericalHarmonicsL2(i677[35])
  i676.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i677[36])
  i676.useReferenceAmbientProbe = !!i677[37]
  request.r(i677[38], i677[39], 0, i676, 'customReflection')
  request.r(i677[40], i677[41], 0, i676, 'defaultReflection')
  i676.defaultReflectionMode = i677[42]
  i676.defaultReflectionResolution = i677[43]
  i676.sunLightObjectId = i677[44]
  i676.pixelLightCount = i677[45]
  i676.defaultReflectionHDR = !!i677[46]
  i676.hasLightDataAsset = !!i677[47]
  i676.hasManualGenerate = !!i677[48]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'lightmapColor')
  request.r(i683[2], i683[3], 0, i682, 'lightmapDirection')
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i684 = root || new UnityEngine.LightProbes()
  var i685 = data
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i693 = data
  var i695 = i693[0]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i695.length; i += 1) {
    i694.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i695[i + 0]));
  }
  i692.ShaderCompilationErrors = i694
  i692.name = i693[1]
  i692.guid = i693[2]
  var i697 = i693[3]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( i697[i + 0] );
  }
  i692.shaderDefinedKeywords = i696
  var i699 = i693[4]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i699[i + 0]) );
  }
  i692.passes = i698
  var i701 = i693[5]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i701[i + 0]) );
  }
  i692.usePasses = i700
  var i703 = i693[6]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i703[i + 0]) );
  }
  i692.defaultParameterValues = i702
  request.r(i693[7], i693[8], 0, i692, 'unityFallbackShader')
  i692.readDepth = !!i693[9]
  i692.isCreatedByShaderGraph = !!i693[10]
  i692.compiled = !!i693[11]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i707 = data
  i706.shaderName = i707[0]
  i706.errorMessage = i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i712 = root || new pc.UnityShaderPass()
  var i713 = data
  i712.id = i713[0]
  i712.subShaderIndex = i713[1]
  i712.name = i713[2]
  i712.passType = i713[3]
  i712.grabPassTextureName = i713[4]
  i712.usePass = !!i713[5]
  i712.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[6], i712.zTest)
  i712.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[7], i712.zWrite)
  i712.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[8], i712.culling)
  i712.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i713[9], i712.blending)
  i712.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i713[10], i712.alphaBlending)
  i712.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[11], i712.colorWriteMask)
  i712.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[12], i712.offsetUnits)
  i712.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[13], i712.offsetFactor)
  i712.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[14], i712.stencilRef)
  i712.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[15], i712.stencilReadMask)
  i712.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[16], i712.stencilWriteMask)
  i712.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i713[17], i712.stencilOp)
  i712.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i713[18], i712.stencilOpFront)
  i712.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i713[19], i712.stencilOpBack)
  var i715 = i713[20]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i715[i + 0]) );
  }
  i712.tags = i714
  var i717 = i713[21]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( i717[i + 0] );
  }
  i712.passDefinedKeywords = i716
  var i719 = i713[22]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i719[i + 0]) );
  }
  i712.passDefinedKeywordGroups = i718
  var i721 = i713[23]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i721[i + 0]) );
  }
  i712.variants = i720
  var i723 = i713[24]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i723[i + 0]) );
  }
  i712.excludedVariants = i722
  i712.hasDepthReader = !!i713[25]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i725 = data
  i724.val = i725[0]
  i724.name = i725[1]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i727 = data
  i726.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[0], i726.src)
  i726.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[1], i726.dst)
  i726.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[2], i726.op)
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i729 = data
  i728.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[0], i728.pass)
  i728.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[1], i728.fail)
  i728.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[2], i728.zFail)
  i728.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[3], i728.comp)
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i733 = data
  i732.name = i733[0]
  i732.value = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i737 = data
  var i739 = i737[0]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i736.keywords = i738
  i736.hasDiscard = !!i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i743 = data
  i742.passId = i743[0]
  i742.subShaderIndex = i743[1]
  var i745 = i743[2]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( i745[i + 0] );
  }
  i742.keywords = i744
  i742.vertexProgram = i743[3]
  i742.fragmentProgram = i743[4]
  i742.exportedForWebGl2 = !!i743[5]
  i742.readDepth = !!i743[6]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'shader')
  i748.pass = i749[2]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i753 = data
  i752.name = i753[0]
  i752.type = i753[1]
  i752.value = new pc.Vec4( i753[2], i753[3], i753[4], i753[5] )
  i752.textureValue = i753[6]
  i752.shaderPropertyFlag = i753[7]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i755 = data
  i754.name = i755[0]
  request.r(i755[1], i755[2], 0, i754, 'texture')
  i754.aabb = i755[3]
  i754.vertices = i755[4]
  i754.triangles = i755[5]
  i754.textureRect = UnityEngine.Rect.MinMaxRect(i755[6], i755[7], i755[8], i755[9])
  i754.packedRect = UnityEngine.Rect.MinMaxRect(i755[10], i755[11], i755[12], i755[13])
  i754.border = new pc.Vec4( i755[14], i755[15], i755[16], i755[17] )
  i754.transparency = i755[18]
  i754.bounds = i755[19]
  i754.pixelsPerUnit = i755[20]
  i754.textureWidth = i755[21]
  i754.textureHeight = i755[22]
  i754.nativeSize = new pc.Vec2( i755[23], i755[24] )
  i754.pivot = new pc.Vec2( i755[25], i755[26] )
  i754.textureRectOffset = new pc.Vec2( i755[27], i755[28] )
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i757 = data
  i756.name = i757[0]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i759 = data
  i758.name = i759[0]
  i758.wrapMode = i759[1]
  i758.isLooping = !!i759[2]
  i758.length = i759[3]
  var i761 = i759[4]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i761[i + 0]) );
  }
  i758.curves = i760
  var i763 = i759[5]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i763[i + 0]) );
  }
  i758.events = i762
  i758.halfPrecision = !!i759[6]
  i758._frameRate = i759[7]
  i758.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i759[8], i758.localBounds)
  i758.hasMuscleCurves = !!i759[9]
  var i765 = i759[10]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( i765[i + 0] );
  }
  i758.clipMuscleConstant = i764
  i758.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i759[11], i758.clipBindingConstant)
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i769 = data
  i768.path = i769[0]
  i768.hash = i769[1]
  i768.componentType = i769[2]
  i768.property = i769[3]
  i768.keys = i769[4]
  var i771 = i769[5]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i771[i + 0]) );
  }
  i768.objectReferenceKeys = i770
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i775 = data
  i774.time = i775[0]
  request.r(i775[1], i775[2], 0, i774, 'value')
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i779 = data
  i778.functionName = i779[0]
  i778.floatParameter = i779[1]
  i778.intParameter = i779[2]
  i778.stringParameter = i779[3]
  request.r(i779[4], i779[5], 0, i778, 'objectReferenceParameter')
  i778.time = i779[6]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i781 = data
  i780.center = new pc.Vec3( i781[0], i781[1], i781[2] )
  i780.extends = new pc.Vec3( i781[3], i781[4], i781[5] )
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i785 = data
  var i787 = i785[0]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( i787[i + 0] );
  }
  i784.genericBindings = i786
  var i789 = i785[1]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( i789[i + 0] );
  }
  i784.pptrCurveMapping = i788
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i791 = data
  i790.name = i791[0]
  i790.ascent = i791[1]
  i790.originalLineHeight = i791[2]
  i790.fontSize = i791[3]
  var i793 = i791[4]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i793[i + 0]) );
  }
  i790.characterInfo = i792
  request.r(i791[5], i791[6], 0, i790, 'texture')
  i790.originalFontSize = i791[7]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i797 = data
  i796.index = i797[0]
  i796.advance = i797[1]
  i796.bearing = i797[2]
  i796.glyphWidth = i797[3]
  i796.glyphHeight = i797[4]
  i796.minX = i797[5]
  i796.maxX = i797[6]
  i796.minY = i797[7]
  i796.maxY = i797[8]
  i796.uvBottomLeftX = i797[9]
  i796.uvBottomLeftY = i797[10]
  i796.uvBottomRightX = i797[11]
  i796.uvBottomRightY = i797[12]
  i796.uvTopLeftX = i797[13]
  i796.uvTopLeftY = i797[14]
  i796.uvTopRightX = i797[15]
  i796.uvTopRightY = i797[16]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i799 = data
  i798.name = i799[0]
  var i801 = i799[1]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i801[i + 0]) );
  }
  i798.layers = i800
  var i803 = i799[2]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i803[i + 0]) );
  }
  i798.parameters = i802
  i798.animationClips = i799[3]
  i798.avatarUnsupported = i799[4]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i807 = data
  i806.name = i807[0]
  i806.defaultWeight = i807[1]
  i806.blendingMode = i807[2]
  i806.avatarMask = i807[3]
  i806.syncedLayerIndex = i807[4]
  i806.syncedLayerAffectsTiming = !!i807[5]
  i806.syncedLayers = i807[6]
  i806.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i807[7], i806.stateMachine)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i809 = data
  i808.id = i809[0]
  i808.name = i809[1]
  i808.path = i809[2]
  var i811 = i809[3]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i811[i + 0]) );
  }
  i808.states = i810
  var i813 = i809[4]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i813[i + 0]) );
  }
  i808.machines = i812
  var i815 = i809[5]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i815[i + 0]) );
  }
  i808.entryStateTransitions = i814
  var i817 = i809[6]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i817[i + 0]) );
  }
  i808.exitStateTransitions = i816
  var i819 = i809[7]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i819[i + 0]) );
  }
  i808.anyStateTransitions = i818
  i808.defaultStateId = i809[8]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i823 = data
  i822.id = i823[0]
  i822.name = i823[1]
  i822.cycleOffset = i823[2]
  i822.cycleOffsetParameter = i823[3]
  i822.cycleOffsetParameterActive = !!i823[4]
  i822.mirror = !!i823[5]
  i822.mirrorParameter = i823[6]
  i822.mirrorParameterActive = !!i823[7]
  i822.motionId = i823[8]
  i822.nameHash = i823[9]
  i822.fullPathHash = i823[10]
  i822.speed = i823[11]
  i822.speedParameter = i823[12]
  i822.speedParameterActive = !!i823[13]
  i822.tag = i823[14]
  i822.tagHash = i823[15]
  i822.writeDefaultValues = !!i823[16]
  var i825 = i823[17]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i822.behaviours = i824
  var i827 = i823[18]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i827[i + 0]) );
  }
  i822.transitions = i826
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i833 = data
  i832.fullPath = i833[0]
  i832.canTransitionToSelf = !!i833[1]
  i832.duration = i833[2]
  i832.exitTime = i833[3]
  i832.hasExitTime = !!i833[4]
  i832.hasFixedDuration = !!i833[5]
  i832.interruptionSource = i833[6]
  i832.offset = i833[7]
  i832.orderedInterruption = !!i833[8]
  i832.destinationStateId = i833[9]
  i832.isExit = !!i833[10]
  i832.mute = !!i833[11]
  i832.solo = !!i833[12]
  var i835 = i833[13]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i835[i + 0]) );
  }
  i832.conditions = i834
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i841 = data
  i840.destinationStateId = i841[0]
  i840.isExit = !!i841[1]
  i840.mute = !!i841[2]
  i840.solo = !!i841[3]
  var i843 = i841[4]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i843[i + 0]) );
  }
  i840.conditions = i842
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i847 = data
  i846.mode = i847[0]
  i846.parameter = i847[1]
  i846.threshold = i847[2]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i851 = data
  i850.defaultBool = !!i851[0]
  i850.defaultFloat = i851[1]
  i850.defaultInt = i851[2]
  i850.name = i851[3]
  i850.nameHash = i851[4]
  i850.type = i851[5]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i853 = data
  i852.name = i853[0]
  i852.bytes64 = i853[1]
  i852.data = i853[2]
  return i852
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i854 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i855 = data
  i854.hashCode = i855[0]
  request.r(i855[1], i855[2], 0, i854, 'material')
  i854.materialHashCode = i855[3]
  request.r(i855[4], i855[5], 0, i854, 'atlas')
  i854.normalStyle = i855[6]
  i854.normalSpacingOffset = i855[7]
  i854.boldStyle = i855[8]
  i854.boldSpacing = i855[9]
  i854.italicStyle = i855[10]
  i854.tabSize = i855[11]
  i854.m_Version = i855[12]
  i854.m_SourceFontFileGUID = i855[13]
  request.r(i855[14], i855[15], 0, i854, 'm_SourceFontFile_EditorRef')
  request.r(i855[16], i855[17], 0, i854, 'm_SourceFontFile')
  i854.m_AtlasPopulationMode = i855[18]
  i854.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i855[19], i854.m_FaceInfo)
  var i857 = i855[20]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i857.length; i += 1) {
    i856.add(request.d('UnityEngine.TextCore.Glyph', i857[i + 0]));
  }
  i854.m_GlyphTable = i856
  var i859 = i855[21]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(request.d('TMPro.TMP_Character', i859[i + 0]));
  }
  i854.m_CharacterTable = i858
  var i861 = i855[22]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i854.m_AtlasTextures = i860
  i854.m_AtlasTextureIndex = i855[23]
  i854.m_IsMultiAtlasTexturesEnabled = !!i855[24]
  i854.m_ClearDynamicDataOnBuild = !!i855[25]
  var i863 = i855[26]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i863.length; i += 1) {
    i862.add(request.d('UnityEngine.TextCore.GlyphRect', i863[i + 0]));
  }
  i854.m_UsedGlyphRects = i862
  var i865 = i855[27]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i865.length; i += 1) {
    i864.add(request.d('UnityEngine.TextCore.GlyphRect', i865[i + 0]));
  }
  i854.m_FreeGlyphRects = i864
  i854.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i855[28], i854.m_fontInfo)
  i854.m_AtlasWidth = i855[29]
  i854.m_AtlasHeight = i855[30]
  i854.m_AtlasPadding = i855[31]
  i854.m_AtlasRenderMode = i855[32]
  var i867 = i855[33]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i867.length; i += 1) {
    i866.add(request.d('TMPro.TMP_Glyph', i867[i + 0]));
  }
  i854.m_glyphInfoList = i866
  i854.m_KerningTable = request.d('TMPro.KerningTable', i855[34], i854.m_KerningTable)
  i854.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i855[35], i854.m_FontFeatureTable)
  var i869 = i855[36]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 1, i868, '')
  }
  i854.fallbackFontAssets = i868
  var i871 = i855[37]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 1, i870, '')
  }
  i854.m_FallbackFontAssetTable = i870
  i854.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i855[38], i854.m_CreationSettings)
  var i873 = i855[39]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('TMPro.TMP_FontWeightPair', i873[i + 0]) );
  }
  i854.m_FontWeightTable = i872
  var i875 = i855[40]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('TMPro.TMP_FontWeightPair', i875[i + 0]) );
  }
  i854.fontWeights = i874
  return i854
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i877 = data
  i876.m_FaceIndex = i877[0]
  i876.m_FamilyName = i877[1]
  i876.m_StyleName = i877[2]
  i876.m_PointSize = i877[3]
  i876.m_Scale = i877[4]
  i876.m_UnitsPerEM = i877[5]
  i876.m_LineHeight = i877[6]
  i876.m_AscentLine = i877[7]
  i876.m_CapLine = i877[8]
  i876.m_MeanLine = i877[9]
  i876.m_Baseline = i877[10]
  i876.m_DescentLine = i877[11]
  i876.m_SuperscriptOffset = i877[12]
  i876.m_SuperscriptSize = i877[13]
  i876.m_SubscriptOffset = i877[14]
  i876.m_SubscriptSize = i877[15]
  i876.m_UnderlineOffset = i877[16]
  i876.m_UnderlineThickness = i877[17]
  i876.m_StrikethroughOffset = i877[18]
  i876.m_StrikethroughThickness = i877[19]
  i876.m_TabWidth = i877[20]
  return i876
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i881 = data
  i880.m_Index = i881[0]
  i880.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i881[1], i880.m_Metrics)
  i880.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i881[2], i880.m_GlyphRect)
  i880.m_Scale = i881[3]
  i880.m_AtlasIndex = i881[4]
  i880.m_ClassDefinitionType = i881[5]
  return i880
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i883 = data
  i882.m_Width = i883[0]
  i882.m_Height = i883[1]
  i882.m_HorizontalBearingX = i883[2]
  i882.m_HorizontalBearingY = i883[3]
  i882.m_HorizontalAdvance = i883[4]
  return i882
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i885 = data
  i884.m_X = i885[0]
  i884.m_Y = i885[1]
  i884.m_Width = i885[2]
  i884.m_Height = i885[3]
  return i884
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i888 = root || request.c( 'TMPro.TMP_Character' )
  var i889 = data
  i888.m_ElementType = i889[0]
  i888.m_Unicode = i889[1]
  i888.m_GlyphIndex = i889[2]
  i888.m_Scale = i889[3]
  return i888
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i894 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i895 = data
  i894.Name = i895[0]
  i894.PointSize = i895[1]
  i894.Scale = i895[2]
  i894.CharacterCount = i895[3]
  i894.LineHeight = i895[4]
  i894.Baseline = i895[5]
  i894.Ascender = i895[6]
  i894.CapHeight = i895[7]
  i894.Descender = i895[8]
  i894.CenterLine = i895[9]
  i894.SuperscriptOffset = i895[10]
  i894.SubscriptOffset = i895[11]
  i894.SubSize = i895[12]
  i894.Underline = i895[13]
  i894.UnderlineThickness = i895[14]
  i894.strikethrough = i895[15]
  i894.strikethroughThickness = i895[16]
  i894.TabWidth = i895[17]
  i894.Padding = i895[18]
  i894.AtlasWidth = i895[19]
  i894.AtlasHeight = i895[20]
  return i894
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i898 = root || request.c( 'TMPro.TMP_Glyph' )
  var i899 = data
  i898.id = i899[0]
  i898.x = i899[1]
  i898.y = i899[2]
  i898.width = i899[3]
  i898.height = i899[4]
  i898.xOffset = i899[5]
  i898.yOffset = i899[6]
  i898.xAdvance = i899[7]
  i898.scale = i899[8]
  return i898
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i900 = root || request.c( 'TMPro.KerningTable' )
  var i901 = data
  var i903 = i901[0]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i903.length; i += 1) {
    i902.add(request.d('TMPro.KerningPair', i903[i + 0]));
  }
  i900.kerningPairs = i902
  return i900
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i906 = root || request.c( 'TMPro.KerningPair' )
  var i907 = data
  i906.xOffset = i907[0]
  i906.m_FirstGlyph = i907[1]
  i906.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i907[2], i906.m_FirstGlyphAdjustments)
  i906.m_SecondGlyph = i907[3]
  i906.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i907[4], i906.m_SecondGlyphAdjustments)
  i906.m_IgnoreSpacingAdjustments = !!i907[5]
  return i906
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i908 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i909 = data
  var i911 = i909[0]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i911.length; i += 1) {
    i910.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i911[i + 0]));
  }
  i908.m_GlyphPairAdjustmentRecords = i910
  return i908
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i915 = data
  i914.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i915[0], i914.m_FirstAdjustmentRecord)
  i914.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i915[1], i914.m_SecondAdjustmentRecord)
  i914.m_FeatureLookupFlags = i915[2]
  return i914
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i916 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i917 = data
  i916.m_GlyphIndex = i917[0]
  i916.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i917[1], i916.m_GlyphValueRecord)
  return i916
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i918 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i919 = data
  i918.m_XPlacement = i919[0]
  i918.m_YPlacement = i919[1]
  i918.m_XAdvance = i919[2]
  i918.m_YAdvance = i919[3]
  return i918
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i923 = data
  i922.sourceFontFileName = i923[0]
  i922.sourceFontFileGUID = i923[1]
  i922.pointSizeSamplingMode = i923[2]
  i922.pointSize = i923[3]
  i922.padding = i923[4]
  i922.packingMode = i923[5]
  i922.atlasWidth = i923[6]
  i922.atlasHeight = i923[7]
  i922.characterSetSelectionMode = i923[8]
  i922.characterSequence = i923[9]
  i922.referencedFontAssetGUID = i923[10]
  i922.referencedTextAssetGUID = i923[11]
  i922.fontStyle = i923[12]
  i922.fontStyleModifier = i923[13]
  i922.renderMode = i923[14]
  i922.includeFontFeatures = !!i923[15]
  return i922
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'regularTypeface')
  request.r(i927[2], i927[3], 0, i926, 'italicTypeface')
  return i926
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i928 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i929 = data
  i928.useSafeMode = !!i929[0]
  i928.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i929[1], i928.safeModeOptions)
  i928.timeScale = i929[2]
  i928.unscaledTimeScale = i929[3]
  i928.useSmoothDeltaTime = !!i929[4]
  i928.maxSmoothUnscaledTime = i929[5]
  i928.rewindCallbackMode = i929[6]
  i928.showUnityEditorReport = !!i929[7]
  i928.logBehaviour = i929[8]
  i928.drawGizmos = !!i929[9]
  i928.defaultRecyclable = !!i929[10]
  i928.defaultAutoPlay = i929[11]
  i928.defaultUpdateType = i929[12]
  i928.defaultTimeScaleIndependent = !!i929[13]
  i928.defaultEaseType = i929[14]
  i928.defaultEaseOvershootOrAmplitude = i929[15]
  i928.defaultEasePeriod = i929[16]
  i928.defaultAutoKill = !!i929[17]
  i928.defaultLoopType = i929[18]
  i928.debugMode = !!i929[19]
  i928.debugStoreTargetId = !!i929[20]
  i928.showPreviewPanel = !!i929[21]
  i928.storeSettingsLocation = i929[22]
  i928.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i929[23], i928.modules)
  i928.createASMDEF = !!i929[24]
  i928.showPlayingTweens = !!i929[25]
  i928.showPausedTweens = !!i929[26]
  return i928
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i930 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i931 = data
  i930.logBehaviour = i931[0]
  i930.nestedTweenFailureBehaviour = i931[1]
  return i930
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i932 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i933 = data
  i932.showPanel = !!i933[0]
  i932.audioEnabled = !!i933[1]
  i932.physicsEnabled = !!i933[2]
  i932.physics2DEnabled = !!i933[3]
  i932.spriteEnabled = !!i933[4]
  i932.uiEnabled = !!i933[5]
  i932.textMeshProEnabled = !!i933[6]
  i932.tk2DEnabled = !!i933[7]
  i932.deAudioEnabled = !!i933[8]
  i932.deUnityExtendedEnabled = !!i933[9]
  i932.epoOutlineEnabled = !!i933[10]
  return i932
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.TMP_Settings' )
  var i935 = data
  i934.m_enableWordWrapping = !!i935[0]
  i934.m_enableKerning = !!i935[1]
  i934.m_enableExtraPadding = !!i935[2]
  i934.m_enableTintAllSprites = !!i935[3]
  i934.m_enableParseEscapeCharacters = !!i935[4]
  i934.m_EnableRaycastTarget = !!i935[5]
  i934.m_GetFontFeaturesAtRuntime = !!i935[6]
  i934.m_missingGlyphCharacter = i935[7]
  i934.m_warningsDisabled = !!i935[8]
  request.r(i935[9], i935[10], 0, i934, 'm_defaultFontAsset')
  i934.m_defaultFontAssetPath = i935[11]
  i934.m_defaultFontSize = i935[12]
  i934.m_defaultAutoSizeMinRatio = i935[13]
  i934.m_defaultAutoSizeMaxRatio = i935[14]
  i934.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i935[15], i935[16] )
  i934.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i935[17], i935[18] )
  i934.m_autoSizeTextContainer = !!i935[19]
  i934.m_IsTextObjectScaleStatic = !!i935[20]
  var i937 = i935[21]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 1, i936, '')
  }
  i934.m_fallbackFontAssets = i936
  i934.m_matchMaterialPreset = !!i935[22]
  request.r(i935[23], i935[24], 0, i934, 'm_defaultSpriteAsset')
  i934.m_defaultSpriteAssetPath = i935[25]
  i934.m_enableEmojiSupport = !!i935[26]
  i934.m_MissingCharacterSpriteUnicode = i935[27]
  i934.m_defaultColorGradientPresetsPath = i935[28]
  request.r(i935[29], i935[30], 0, i934, 'm_defaultStyleSheet')
  i934.m_StyleSheetsResourcePath = i935[31]
  request.r(i935[32], i935[33], 0, i934, 'm_leadingCharacters')
  request.r(i935[34], i935[35], 0, i934, 'm_followingCharacters')
  i934.m_UseModernHangulLineBreakingRules = !!i935[36]
  return i934
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i939 = data
  i938.hashCode = i939[0]
  request.r(i939[1], i939[2], 0, i938, 'material')
  i938.materialHashCode = i939[3]
  request.r(i939[4], i939[5], 0, i938, 'spriteSheet')
  var i941 = i939[6]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i941.length; i += 1) {
    i940.add(request.d('TMPro.TMP_Sprite', i941[i + 0]));
  }
  i938.spriteInfoList = i940
  var i943 = i939[7]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 1, i942, '')
  }
  i938.fallbackSpriteAssets = i942
  i938.m_Version = i939[8]
  i938.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i939[9], i938.m_FaceInfo)
  var i945 = i939[10]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('TMPro.TMP_SpriteCharacter', i945[i + 0]));
  }
  i938.m_SpriteCharacterTable = i944
  var i947 = i939[11]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i947.length; i += 1) {
    i946.add(request.d('TMPro.TMP_SpriteGlyph', i947[i + 0]));
  }
  i938.m_SpriteGlyphTable = i946
  return i938
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.TMP_Sprite' )
  var i951 = data
  i950.name = i951[0]
  i950.hashCode = i951[1]
  i950.unicode = i951[2]
  i950.pivot = new pc.Vec2( i951[3], i951[4] )
  request.r(i951[5], i951[6], 0, i950, 'sprite')
  i950.id = i951[7]
  i950.x = i951[8]
  i950.y = i951[9]
  i950.width = i951[10]
  i950.height = i951[11]
  i950.xOffset = i951[12]
  i950.yOffset = i951[13]
  i950.xAdvance = i951[14]
  i950.scale = i951[15]
  return i950
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i957 = data
  i956.m_Name = i957[0]
  i956.m_HashCode = i957[1]
  i956.m_ElementType = i957[2]
  i956.m_Unicode = i957[3]
  i956.m_GlyphIndex = i957[4]
  i956.m_Scale = i957[5]
  return i956
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i960 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'sprite')
  i960.m_Index = i961[2]
  i960.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i961[3], i960.m_Metrics)
  i960.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i961[4], i960.m_GlyphRect)
  i960.m_Scale = i961[5]
  i960.m_AtlasIndex = i961[6]
  i960.m_ClassDefinitionType = i961[7]
  return i960
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i963 = data
  var i965 = i963[0]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i965.length; i += 1) {
    i964.add(request.d('TMPro.TMP_Style', i965[i + 0]));
  }
  i962.m_StyleList = i964
  return i962
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TMP_Style' )
  var i969 = data
  i968.m_Name = i969[0]
  i968.m_HashCode = i969[1]
  i968.m_OpeningDefinition = i969[2]
  i968.m_ClosingDefinition = i969[3]
  i968.m_OpeningTagArray = i969[4]
  i968.m_ClosingTagArray = i969[5]
  i968.m_OpeningTagUnicodeArray = i969[6]
  i968.m_ClosingTagUnicodeArray = i969[7]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i971 = data
  var i973 = i971[0]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i973[i + 0]) );
  }
  i970.files = i972
  i970.componentToPrefabIds = i971[1]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i977 = data
  i976.path = i977[0]
  request.r(i977[1], i977[2], 0, i976, 'unityObject')
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i979 = data
  var i981 = i979[0]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i981[i + 0]) );
  }
  i978.scriptsExecutionOrder = i980
  var i983 = i979[1]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i983[i + 0]) );
  }
  i978.sortingLayers = i982
  var i985 = i979[2]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i985[i + 0]) );
  }
  i978.cullingLayers = i984
  i978.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i979[3], i978.timeSettings)
  i978.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i979[4], i978.physicsSettings)
  i978.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i979[5], i978.physics2DSettings)
  i978.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i979[6], i978.qualitySettings)
  i978.enableRealtimeShadows = !!i979[7]
  i978.enableAutoInstancing = !!i979[8]
  i978.enableDynamicBatching = !!i979[9]
  i978.lightmapEncodingQuality = i979[10]
  i978.desiredColorSpace = i979[11]
  var i987 = i979[12]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( i987[i + 0] );
  }
  i978.allTags = i986
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i991 = data
  i990.name = i991[0]
  i990.value = i991[1]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i995 = data
  i994.id = i995[0]
  i994.name = i995[1]
  i994.value = i995[2]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i999 = data
  i998.id = i999[0]
  i998.name = i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1001 = data
  i1000.fixedDeltaTime = i1001[0]
  i1000.maximumDeltaTime = i1001[1]
  i1000.timeScale = i1001[2]
  i1000.maximumParticleTimestep = i1001[3]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1003 = data
  i1002.gravity = new pc.Vec3( i1003[0], i1003[1], i1003[2] )
  i1002.defaultSolverIterations = i1003[3]
  i1002.bounceThreshold = i1003[4]
  i1002.autoSyncTransforms = !!i1003[5]
  i1002.autoSimulation = !!i1003[6]
  var i1005 = i1003[7]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1005[i + 0]) );
  }
  i1002.collisionMatrix = i1004
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1009 = data
  i1008.enabled = !!i1009[0]
  i1008.layerId = i1009[1]
  i1008.otherLayerId = i1009[2]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'material')
  i1010.gravity = new pc.Vec2( i1011[2], i1011[3] )
  i1010.positionIterations = i1011[4]
  i1010.velocityIterations = i1011[5]
  i1010.velocityThreshold = i1011[6]
  i1010.maxLinearCorrection = i1011[7]
  i1010.maxAngularCorrection = i1011[8]
  i1010.maxTranslationSpeed = i1011[9]
  i1010.maxRotationSpeed = i1011[10]
  i1010.baumgarteScale = i1011[11]
  i1010.baumgarteTOIScale = i1011[12]
  i1010.timeToSleep = i1011[13]
  i1010.linearSleepTolerance = i1011[14]
  i1010.angularSleepTolerance = i1011[15]
  i1010.defaultContactOffset = i1011[16]
  i1010.autoSimulation = !!i1011[17]
  i1010.queriesHitTriggers = !!i1011[18]
  i1010.queriesStartInColliders = !!i1011[19]
  i1010.callbacksOnDisable = !!i1011[20]
  i1010.reuseCollisionCallbacks = !!i1011[21]
  i1010.autoSyncTransforms = !!i1011[22]
  var i1013 = i1011[23]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1013[i + 0]) );
  }
  i1010.collisionMatrix = i1012
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1017 = data
  i1016.enabled = !!i1017[0]
  i1016.layerId = i1017[1]
  i1016.otherLayerId = i1017[2]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1019 = data
  var i1021 = i1019[0]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1021[i + 0]) );
  }
  i1018.qualityLevels = i1020
  var i1023 = i1019[1]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( i1023[i + 0] );
  }
  i1018.names = i1022
  i1018.shadows = i1019[2]
  i1018.anisotropicFiltering = i1019[3]
  i1018.antiAliasing = i1019[4]
  i1018.lodBias = i1019[5]
  i1018.shadowCascades = i1019[6]
  i1018.shadowDistance = i1019[7]
  i1018.shadowmaskMode = i1019[8]
  i1018.shadowProjection = i1019[9]
  i1018.shadowResolution = i1019[10]
  i1018.softParticles = !!i1019[11]
  i1018.softVegetation = !!i1019[12]
  i1018.activeColorSpace = i1019[13]
  i1018.desiredColorSpace = i1019[14]
  i1018.masterTextureLimit = i1019[15]
  i1018.maxQueuedFrames = i1019[16]
  i1018.particleRaycastBudget = i1019[17]
  i1018.pixelLightCount = i1019[18]
  i1018.realtimeReflectionProbes = !!i1019[19]
  i1018.shadowCascade2Split = i1019[20]
  i1018.shadowCascade4Split = new pc.Vec3( i1019[21], i1019[22], i1019[23] )
  i1018.streamingMipmapsActive = !!i1019[24]
  i1018.vSyncCount = i1019[25]
  i1018.asyncUploadBufferSize = i1019[26]
  i1018.asyncUploadTimeSlice = i1019[27]
  i1018.billboardsFaceCameraPosition = !!i1019[28]
  i1018.shadowNearPlaneOffset = i1019[29]
  i1018.streamingMipmapsMemoryBudget = i1019[30]
  i1018.maximumLODLevel = i1019[31]
  i1018.streamingMipmapsAddAllCameras = !!i1019[32]
  i1018.streamingMipmapsMaxLevelReduction = i1019[33]
  i1018.streamingMipmapsRenderersPerFrame = i1019[34]
  i1018.resolutionScalingFixedDPIFactor = i1019[35]
  i1018.streamingMipmapsMaxFileIORequests = i1019[36]
  i1018.currentQualityLevel = i1019[37]
  return i1018
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1026 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1027 = data
  i1026.xPlacement = i1027[0]
  i1026.yPlacement = i1027[1]
  i1026.xAdvance = i1027[2]
  i1026.yAdvance = i1027[3]
  return i1026
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

