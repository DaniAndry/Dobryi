var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointSpring' )
  var i517 = data
  i516.spring = i517[0]
  i516.damper = i517[1]
  i516.targetPosition = i517[2]
  return i516
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointMotor' )
  var i519 = data
  i518.m_TargetVelocity = i519[0]
  i518.m_Force = i519[1]
  i518.m_FreeSpin = i519[2]
  return i518
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.JointLimits' )
  var i521 = data
  i520.m_Min = i521[0]
  i520.m_Max = i521[1]
  i520.m_Bounciness = i521[2]
  i520.m_BounceMinVelocity = i521[3]
  i520.m_ContactDistance = i521[4]
  i520.minBounce = i521[5]
  i520.maxBounce = i521[6]
  return i520
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointDrive' )
  var i523 = data
  i522.m_PositionSpring = i523[0]
  i522.m_PositionDamper = i523[1]
  i522.m_MaximumForce = i523[2]
  i522.m_UseAcceleration = i523[3]
  return i522
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i525 = data
  i524.m_Spring = i525[0]
  i524.m_Damper = i525[1]
  return i524
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i527 = data
  i526.m_Limit = i527[0]
  i526.m_Bounciness = i527[1]
  i526.m_ContactDistance = i527[2]
  return i526
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i529 = data
  i528.m_ExtremumSlip = i529[0]
  i528.m_ExtremumValue = i529[1]
  i528.m_AsymptoteSlip = i529[2]
  i528.m_AsymptoteValue = i529[3]
  i528.m_Stiffness = i529[4]
  return i528
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i531 = data
  i530.m_LowerAngle = i531[0]
  i530.m_UpperAngle = i531[1]
  return i530
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i533 = data
  i532.m_MotorSpeed = i533[0]
  i532.m_MaximumMotorTorque = i533[1]
  return i532
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i535 = data
  i534.m_DampingRatio = i535[0]
  i534.m_Frequency = i535[1]
  i534.m_Angle = i535[2]
  return i534
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i537 = data
  i536.m_LowerTranslation = i537[0]
  i536.m_UpperTranslation = i537[1]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i539 = data
  i538.name = i539[0]
  i538.width = i539[1]
  i538.height = i539[2]
  i538.mipmapCount = i539[3]
  i538.anisoLevel = i539[4]
  i538.filterMode = i539[5]
  i538.hdr = !!i539[6]
  i538.format = i539[7]
  i538.wrapMode = i539[8]
  i538.alphaIsTransparency = !!i539[9]
  i538.alphaSource = i539[10]
  i538.graphicsFormat = i539[11]
  i538.sRGBTexture = !!i539[12]
  i538.desiredColorSpace = i539[13]
  i538.wrapU = i539[14]
  i538.wrapV = i539[15]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i540 = root || new pc.UnityMaterial()
  var i541 = data
  i540.name = i541[0]
  request.r(i541[1], i541[2], 0, i540, 'shader')
  i540.renderQueue = i541[3]
  i540.enableInstancing = !!i541[4]
  var i543 = i541[5]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i543[i + 0]) );
  }
  i540.floatParameters = i542
  var i545 = i541[6]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i545[i + 0]) );
  }
  i540.colorParameters = i544
  var i547 = i541[7]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i547[i + 0]) );
  }
  i540.vectorParameters = i546
  var i549 = i541[8]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i549[i + 0]) );
  }
  i540.textureParameters = i548
  var i551 = i541[9]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i551[i + 0]) );
  }
  i540.materialFlags = i550
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i555 = data
  i554.name = i555[0]
  i554.value = i555[1]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i559 = data
  i558.name = i559[0]
  i558.value = new pc.Color(i559[1], i559[2], i559[3], i559[4])
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i563 = data
  i562.name = i563[0]
  i562.value = new pc.Vec4( i563[1], i563[2], i563[3], i563[4] )
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i567 = data
  i566.name = i567[0]
  request.r(i567[1], i567[2], 0, i566, 'value')
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i571 = data
  i570.name = i571[0]
  i570.enabled = !!i571[1]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i573 = data
  i572.pivot = new pc.Vec2( i573[0], i573[1] )
  i572.anchorMin = new pc.Vec2( i573[2], i573[3] )
  i572.anchorMax = new pc.Vec2( i573[4], i573[5] )
  i572.sizeDelta = new pc.Vec2( i573[6], i573[7] )
  i572.anchoredPosition3D = new pc.Vec3( i573[8], i573[9], i573[10] )
  i572.rotation = new pc.Quat(i573[11], i573[12], i573[13], i573[14])
  i572.scale = new pc.Vec3( i573[15], i573[16], i573[17] )
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i575 = data
  i574.cullTransparentMesh = !!i575[0]
  return i574
}

Deserializers["People"] = function (request, data, root) {
  var i576 = root || request.c( 'People' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, '_readyImage')
  request.r(i577[2], i577[3], 0, i576, '_additiveImage1')
  request.r(i577[4], i577[5], 0, i576, '_additiveImage2')
  request.r(i577[6], i577[7], 0, i576, '_endPoint')
  request.r(i577[8], i577[9], 0, i576, 'Bank')
  request.r(i577[10], i577[11], 0, i576, '_sizeText')
  i576.CupType = i577[12]
  i576.JuiceType = i577[13]
  i576.AdditiveType1 = i577[14]
  i576.AdditiveType2 = i577[15]
  request.r(i577[16], i577[17], 0, i576, '_finishSound')
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'clip')
  request.r(i579[2], i579[3], 0, i578, 'outputAudioMixerGroup')
  i578.playOnAwake = !!i579[4]
  i578.loop = !!i579[5]
  i578.time = i579[6]
  i578.volume = i579[7]
  i578.pitch = i579[8]
  i578.enabled = !!i579[9]
  return i578
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.UI.Image' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'm_Sprite')
  i580.m_Type = i581[2]
  i580.m_PreserveAspect = !!i581[3]
  i580.m_FillCenter = !!i581[4]
  i580.m_FillMethod = i581[5]
  i580.m_FillAmount = i581[6]
  i580.m_FillClockwise = !!i581[7]
  i580.m_FillOrigin = i581[8]
  i580.m_UseSpriteMesh = !!i581[9]
  i580.m_PixelsPerUnitMultiplier = i581[10]
  request.r(i581[11], i581[12], 0, i580, 'm_Material')
  i580.m_Maskable = !!i581[13]
  i580.m_Color = new pc.Color(i581[14], i581[15], i581[16], i581[17])
  i580.m_RaycastTarget = !!i581[18]
  i580.m_RaycastPadding = new pc.Vec4( i581[19], i581[20], i581[21], i581[22] )
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i583 = data
  i582.name = i583[0]
  i582.tagId = i583[1]
  i582.enabled = !!i583[2]
  i582.isStatic = !!i583[3]
  i582.layer = i583[4]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i585 = data
  i584.name = i585[0]
  i584.index = i585[1]
  i584.startup = !!i585[2]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i587 = data
  i586.position = new pc.Vec3( i587[0], i587[1], i587[2] )
  i586.scale = new pc.Vec3( i587[3], i587[4], i587[5] )
  i586.rotation = new pc.Quat(i587[6], i587[7], i587[8], i587[9])
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i589 = data
  i588.enabled = !!i589[0]
  i588.aspect = i589[1]
  i588.orthographic = !!i589[2]
  i588.orthographicSize = i589[3]
  i588.backgroundColor = new pc.Color(i589[4], i589[5], i589[6], i589[7])
  i588.nearClipPlane = i589[8]
  i588.farClipPlane = i589[9]
  i588.fieldOfView = i589[10]
  i588.depth = i589[11]
  i588.clearFlags = i589[12]
  i588.cullingMask = i589[13]
  i588.rect = i589[14]
  request.r(i589[15], i589[16], 0, i588, 'targetTexture')
  i588.usePhysicalProperties = !!i589[17]
  i588.focalLength = i589[18]
  i588.sensorSize = new pc.Vec2( i589[19], i589[20] )
  i588.lensShift = new pc.Vec2( i589[21], i589[22] )
  i588.gateFit = i589[23]
  i588.commandBufferCount = i589[24]
  i588.cameraType = i589[25]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'animatorController')
  request.r(i591[2], i591[3], 0, i590, 'avatar')
  i590.updateMode = i591[4]
  i590.hasTransformHierarchy = !!i591[5]
  i590.applyRootMotion = !!i591[6]
  var i593 = i591[7]
  var i592 = []
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 2, i592, '')
  }
  i590.humanBones = i592
  i590.enabled = !!i591[8]
  return i590
}

Deserializers["Bank"] = function (request, data, root) {
  var i596 = root || request.c( 'Bank' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'BuyBigCupButton')
  request.r(i597[2], i597[3], 0, i596, 'BigCupButton')
  request.r(i597[4], i597[5], 0, i596, 'MiddleCupButton')
  request.r(i597[6], i597[7], 0, i596, 'MoneyText')
  request.r(i597[8], i597[9], 0, i596, 'Tutorial')
  request.r(i597[10], i597[11], 0, i596, 'BuyAdditiveButton')
  request.r(i597[12], i597[13], 0, i596, 'BuyJuiceButton')
  request.r(i597[14], i597[15], 0, i596, 'JuiceButton1')
  request.r(i597[16], i597[17], 0, i596, 'JuiceButton2')
  request.r(i597[18], i597[19], 0, i596, 'JuiceButton3')
  request.r(i597[20], i597[21], 0, i596, 'Additive1Button')
  request.r(i597[22], i597[23], 0, i596, 'Additive2Button')
  i596.Money = i597[24]
  i596.IsBigCupBuy = !!i597[25]
  i596.IsJuiceBuy = !!i597[26]
  i596.IsAdditiveBuy = !!i597[27]
  request.r(i597[28], i597[29], 0, i596, '_buySound')
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i599 = data
  i598.enabled = !!i599[0]
  i598.planeDistance = i599[1]
  i598.referencePixelsPerUnit = i599[2]
  i598.isFallbackOverlay = !!i599[3]
  i598.renderMode = i599[4]
  i598.renderOrder = i599[5]
  i598.sortingLayerName = i599[6]
  i598.sortingOrder = i599[7]
  i598.scaleFactor = i599[8]
  request.r(i599[9], i599[10], 0, i598, 'worldCamera')
  i598.overrideSorting = !!i599[11]
  i598.pixelPerfect = !!i599[12]
  i598.targetDisplay = i599[13]
  i598.overridePixelPerfect = !!i599[14]
  return i598
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i601 = data
  i600.m_UiScaleMode = i601[0]
  i600.m_ReferencePixelsPerUnit = i601[1]
  i600.m_ScaleFactor = i601[2]
  i600.m_ReferenceResolution = new pc.Vec2( i601[3], i601[4] )
  i600.m_ScreenMatchMode = i601[5]
  i600.m_MatchWidthOrHeight = i601[6]
  i600.m_PhysicalUnit = i601[7]
  i600.m_FallbackScreenDPI = i601[8]
  i600.m_DefaultSpriteDPI = i601[9]
  i600.m_DynamicPixelsPerUnit = i601[10]
  i600.m_PresetInfoIsWorld = !!i601[11]
  return i600
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i603 = data
  i602.m_IgnoreReversedGraphics = !!i603[0]
  i602.m_BlockingObjects = i603[1]
  i602.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i603[2] )
  return i602
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i604 = root || request.c( 'ImageShiftOnOrientation' )
  var i605 = data
  var i607 = i605[0]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('ItemSwitcherData', i607[i + 0]) );
  }
  i604.Items = i606
  request.r(i605[1], i605[2], 0, i604, '_backHorizontal')
  request.r(i605[3], i605[4], 0, i604, '_backVertical')
  request.r(i605[5], i605[6], 0, i604, '_tableHorizontal')
  request.r(i605[7], i605[8], 0, i604, '_tableVertical')
  i604.IsDebug = !!i605[9]
  i604.CanCopy = !!i605[10]
  return i604
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i610 = root || request.c( 'ItemSwitcherData' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'Target')
  i610.HorizontalAnchoredPosition = new pc.Vec2( i611[2], i611[3] )
  i610.SizeHorizontal = new pc.Vec2( i611[4], i611[5] )
  i610.VerticalAnchoredPosition = new pc.Vec2( i611[6], i611[7] )
  i610.SizeVertical = new pc.Vec2( i611[8], i611[9] )
  i610.MinHorizontal = new pc.Vec2( i611[10], i611[11] )
  i610.MaxHorizontal = new pc.Vec2( i611[12], i611[13] )
  i610.MinVertical = new pc.Vec2( i611[14], i611[15] )
  i610.MaxVertical = new pc.Vec2( i611[16], i611[17] )
  i610.IsAnchored = !!i611[18]
  i610.IsDebug = !!i611[19]
  i610.CopyHorizontal = !!i611[20]
  i610.CopyVertical = !!i611[21]
  return i610
}

Deserializers["Point"] = function (request, data, root) {
  var i612 = root || request.c( 'Point' )
  var i613 = data
  return i612
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i614 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i615 = data
  i614.m_hasFontAssetChanged = !!i615[0]
  request.r(i615[1], i615[2], 0, i614, 'm_baseMaterial')
  i614.m_maskOffset = new pc.Vec4( i615[3], i615[4], i615[5], i615[6] )
  i614.m_text = i615[7]
  i614.m_isRightToLeft = !!i615[8]
  request.r(i615[9], i615[10], 0, i614, 'm_fontAsset')
  request.r(i615[11], i615[12], 0, i614, 'm_sharedMaterial')
  var i617 = i615[13]
  var i616 = []
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 2, i616, '')
  }
  i614.m_fontSharedMaterials = i616
  request.r(i615[14], i615[15], 0, i614, 'm_fontMaterial')
  var i619 = i615[16]
  var i618 = []
  for(var i = 0; i < i619.length; i += 2) {
  request.r(i619[i + 0], i619[i + 1], 2, i618, '')
  }
  i614.m_fontMaterials = i618
  i614.m_fontColor32 = UnityEngine.Color32.ConstructColor(i615[17], i615[18], i615[19], i615[20])
  i614.m_fontColor = new pc.Color(i615[21], i615[22], i615[23], i615[24])
  i614.m_enableVertexGradient = !!i615[25]
  i614.m_colorMode = i615[26]
  i614.m_fontColorGradient = request.d('TMPro.VertexGradient', i615[27], i614.m_fontColorGradient)
  request.r(i615[28], i615[29], 0, i614, 'm_fontColorGradientPreset')
  request.r(i615[30], i615[31], 0, i614, 'm_spriteAsset')
  i614.m_tintAllSprites = !!i615[32]
  request.r(i615[33], i615[34], 0, i614, 'm_StyleSheet')
  i614.m_TextStyleHashCode = i615[35]
  i614.m_overrideHtmlColors = !!i615[36]
  i614.m_faceColor = UnityEngine.Color32.ConstructColor(i615[37], i615[38], i615[39], i615[40])
  i614.m_fontSize = i615[41]
  i614.m_fontSizeBase = i615[42]
  i614.m_fontWeight = i615[43]
  i614.m_enableAutoSizing = !!i615[44]
  i614.m_fontSizeMin = i615[45]
  i614.m_fontSizeMax = i615[46]
  i614.m_fontStyle = i615[47]
  i614.m_HorizontalAlignment = i615[48]
  i614.m_VerticalAlignment = i615[49]
  i614.m_textAlignment = i615[50]
  i614.m_characterSpacing = i615[51]
  i614.m_wordSpacing = i615[52]
  i614.m_lineSpacing = i615[53]
  i614.m_lineSpacingMax = i615[54]
  i614.m_paragraphSpacing = i615[55]
  i614.m_charWidthMaxAdj = i615[56]
  i614.m_enableWordWrapping = !!i615[57]
  i614.m_wordWrappingRatios = i615[58]
  i614.m_overflowMode = i615[59]
  request.r(i615[60], i615[61], 0, i614, 'm_linkedTextComponent')
  request.r(i615[62], i615[63], 0, i614, 'parentLinkedComponent')
  i614.m_enableKerning = !!i615[64]
  i614.m_enableExtraPadding = !!i615[65]
  i614.checkPaddingRequired = !!i615[66]
  i614.m_isRichText = !!i615[67]
  i614.m_parseCtrlCharacters = !!i615[68]
  i614.m_isOrthographic = !!i615[69]
  i614.m_isCullingEnabled = !!i615[70]
  i614.m_horizontalMapping = i615[71]
  i614.m_verticalMapping = i615[72]
  i614.m_uvLineOffset = i615[73]
  i614.m_geometrySortingOrder = i615[74]
  i614.m_IsTextObjectScaleStatic = !!i615[75]
  i614.m_VertexBufferAutoSizeReduction = !!i615[76]
  i614.m_useMaxVisibleDescender = !!i615[77]
  i614.m_pageToDisplay = i615[78]
  i614.m_margin = new pc.Vec4( i615[79], i615[80], i615[81], i615[82] )
  i614.m_isUsingLegacyAnimationComponent = !!i615[83]
  i614.m_isVolumetricText = !!i615[84]
  request.r(i615[85], i615[86], 0, i614, 'm_Material')
  i614.m_Maskable = !!i615[87]
  i614.m_Color = new pc.Color(i615[88], i615[89], i615[90], i615[91])
  i614.m_RaycastTarget = !!i615[92]
  i614.m_RaycastPadding = new pc.Vec4( i615[93], i615[94], i615[95], i615[96] )
  return i614
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i622 = root || request.c( 'TMPro.VertexGradient' )
  var i623 = data
  i622.topLeft = new pc.Color(i623[0], i623[1], i623[2], i623[3])
  i622.topRight = new pc.Color(i623[4], i623[5], i623[6], i623[7])
  i622.bottomLeft = new pc.Color(i623[8], i623[9], i623[10], i623[11])
  i622.bottomRight = new pc.Color(i623[12], i623[13], i623[14], i623[15])
  return i622
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i624 = root || request.c( 'PeopleContainer' )
  var i625 = data
  var i627 = i625[0]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 1, i626, '')
  }
  i624.CurrentPeoples = i626
  var i629 = i625[1]
  var i628 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 1, i628, '')
  }
  i624._peoples = i628
  request.r(i625[2], i625[3], 0, i624, '_tutorialPeople')
  request.r(i625[4], i625[5], 0, i624, '_spawnPoint')
  request.r(i625[6], i625[7], 0, i624, '_point1')
  request.r(i625[8], i625[9], 0, i624, '_point2')
  request.r(i625[10], i625[11], 0, i624, '_endPoint')
  request.r(i625[12], i625[13], 0, i624, '_juiceConfig')
  request.r(i625[14], i625[15], 0, i624, '_tutorial')
  return i624
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i633 = data
  i632.m_HorizontalFit = i633[0]
  i632.m_VerticalFit = i633[1]
  return i632
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.Button' )
  var i635 = data
  i634.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i635[0], i634.m_OnClick)
  i634.m_Navigation = request.d('UnityEngine.UI.Navigation', i635[1], i634.m_Navigation)
  i634.m_Transition = i635[2]
  i634.m_Colors = request.d('UnityEngine.UI.ColorBlock', i635[3], i634.m_Colors)
  i634.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i635[4], i634.m_SpriteState)
  i634.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i635[5], i634.m_AnimationTriggers)
  i634.m_Interactable = !!i635[6]
  request.r(i635[7], i635[8], 0, i634, 'm_TargetGraphic')
  return i634
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i637 = data
  i636.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i637[0], i636.m_PersistentCalls)
  return i636
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i639 = data
  var i641 = i639[0]
  var i640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i641.length; i += 1) {
    i640.add(request.d('UnityEngine.Events.PersistentCall', i641[i + 0]));
  }
  i638.m_Calls = i640
  return i638
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'm_Target')
  i644.m_TargetAssemblyTypeName = i645[2]
  i644.m_MethodName = i645[3]
  i644.m_Mode = i645[4]
  i644.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i645[5], i644.m_Arguments)
  i644.m_CallState = i645[6]
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

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'm_ObjectArgument')
  i654.m_ObjectArgumentAssemblyTypeName = i655[2]
  i654.m_IntArgument = i655[3]
  i654.m_FloatArgument = i655[4]
  i654.m_StringArgument = i655[5]
  i654.m_BoolArgument = !!i655[6]
  return i654
}

Deserializers["BackImage"] = function (request, data, root) {
  var i656 = root || request.c( 'BackImage' )
  var i657 = data
  return i656
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i658 = root || request.c( 'AheadImage' )
  var i659 = data
  return i658
}

Deserializers["Order"] = function (request, data, root) {
  var i660 = root || request.c( 'Order' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, '_juiceAnimator')
  request.r(i661[2], i661[3], 0, i660, '_cupAnimator')
  request.r(i661[4], i661[5], 0, i660, '_canvasAnimator')
  i660.CupType = i661[6]
  i660.JuiceType = i661[7]
  i660.AdditiveType1 = i661[8]
  i660.AdditiveType2 = i661[9]
  i660.IsFree = !!i661[10]
  i660.IsSpriteReady = !!i661[11]
  i660.IsCupReady = !!i661[12]
  i660.IsJuiceReady = !!i661[13]
  i660.IsPouring = !!i661[14]
  request.r(i661[15], i661[16], 0, i660, '_iceButton')
  request.r(i661[17], i661[18], 0, i660, '_grassButton')
  request.r(i661[19], i661[20], 0, i660, '_juiceBallsButton')
  request.r(i661[21], i661[22], 0, i660, '_strawButton')
  request.r(i661[23], i661[24], 0, i660, '_bigCupButton')
  request.r(i661[25], i661[26], 0, i660, '_middleCupButton')
  request.r(i661[27], i661[28], 0, i660, '_smallCupButton')
  request.r(i661[29], i661[30], 0, i660, '_appleButton')
  request.r(i661[31], i661[32], 0, i660, '_orangeButton')
  request.r(i661[33], i661[34], 0, i660, '_multifruitButton')
  request.r(i661[35], i661[36], 0, i660, '_tomatoButton')
  request.r(i661[37], i661[38], 0, i660, '_cherryButton')
  request.r(i661[39], i661[40], 0, i660, '_smallRawJuiceImage')
  request.r(i661[41], i661[42], 0, i660, '_middleRawJuiceImage')
  request.r(i661[43], i661[44], 0, i660, '_bigRawJuiceImage')
  request.r(i661[45], i661[46], 0, i660, '_smallReadyJuiceImage')
  request.r(i661[47], i661[48], 0, i660, '_middleReadyJuiceImage')
  request.r(i661[49], i661[50], 0, i660, '_bigReadyJuiceImage')
  request.r(i661[51], i661[52], 0, i660, '_backImage')
  request.r(i661[53], i661[54], 0, i660, '_aheadImage')
  request.r(i661[55], i661[56], 0, i660, '_config')
  request.r(i661[57], i661[58], 0, i660, '_takeOrderButton')
  request.r(i661[59], i661[60], 0, i660, '_peopleContainer')
  request.r(i661[61], i661[62], 0, i660, '_tutorial')
  request.r(i661[63], i661[64], 0, i660, '_bText')
  request.r(i661[65], i661[66], 0, i660, '_mText')
  request.r(i661[67], i661[68], 0, i660, '_sText')
  request.r(i661[69], i661[70], 0, i660, '_garbageButton')
  request.r(i661[71], i661[72], 0, i660, '_clickSound')
  request.r(i661[73], i661[74], 0, i660, '_juiceSound')
  return i660
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i662 = root || request.c( 'Tutorial' )
  var i663 = data
  i662.IsTutorial = !!i663[0]
  request.r(i663[1], i663[2], 0, i662, 'Finger1')
  request.r(i663[3], i663[4], 0, i662, 'Finger2')
  request.r(i663[5], i663[6], 0, i662, 'Finger3')
  request.r(i663[7], i663[8], 0, i662, 'Finger4')
  request.r(i663[9], i663[10], 0, i662, 'Finger5')
  request.r(i663[11], i663[12], 0, i662, 'BuyBigCupFinger')
  request.r(i663[13], i663[14], 0, i662, 'BuyJuiceFinger')
  request.r(i663[15], i663[16], 0, i662, 'SmallCupButton')
  request.r(i663[17], i663[18], 0, i662, 'JuiceButton')
  request.r(i663[19], i663[20], 0, i662, 'StrawButton')
  request.r(i663[21], i663[22], 0, i662, 'AdditiveButton')
  request.r(i663[23], i663[24], 0, i662, 'ReadyButton')
  var i665 = i663[25]
  var i664 = []
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 2, i664, '')
  }
  i662.Buttons = i664
  request.r(i663[26], i663[27], 0, i662, 'Bank')
  return i662
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i668 = root || request.c( 'SoundSwitcher' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, '_onImage')
  request.r(i669[2], i669[3], 0, i668, '_offImage')
  return i668
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'm_FirstSelected')
  i670.m_sendNavigationEvents = !!i671[2]
  i670.m_DragThreshold = i671[3]
  return i670
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i673 = data
  i672.m_HorizontalAxis = i673[0]
  i672.m_VerticalAxis = i673[1]
  i672.m_SubmitButton = i673[2]
  i672.m_CancelButton = i673[3]
  i672.m_InputActionsPerSecond = i673[4]
  i672.m_RepeatDelay = i673[5]
  i672.m_ForceModuleActive = !!i673[6]
  i672.m_SendPointerHoverToParent = !!i673[7]
  return i672
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i674 = root || request.c( 'JuiceConfig' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'EntityBigCup')
  request.r(i675[2], i675[3], 0, i674, 'TomatoBigCup')
  request.r(i675[4], i675[5], 0, i674, 'AppleBigCup')
  request.r(i675[6], i675[7], 0, i674, 'OrangeBigCup')
  request.r(i675[8], i675[9], 0, i674, 'CherryBigCup')
  request.r(i675[10], i675[11], 0, i674, 'MultifruitBigCup')
  request.r(i675[12], i675[13], 0, i674, 'TomatoBigStrawCup')
  request.r(i675[14], i675[15], 0, i674, 'MultifruitBigStrawCup')
  request.r(i675[16], i675[17], 0, i674, 'AppleBigStrawCup')
  request.r(i675[18], i675[19], 0, i674, 'OrangeBigStrawCup')
  request.r(i675[20], i675[21], 0, i674, 'CherryBigStrawCup')
  request.r(i675[22], i675[23], 0, i674, 'MultifruitBigBallsCup')
  request.r(i675[24], i675[25], 0, i674, 'TomatoBigBallsCup')
  request.r(i675[26], i675[27], 0, i674, 'AppleBigBallsCup')
  request.r(i675[28], i675[29], 0, i674, 'OrangeBigBallsCup')
  request.r(i675[30], i675[31], 0, i674, 'CherryBigBallsCup')
  request.r(i675[32], i675[33], 0, i674, 'EntityMiddleCup')
  request.r(i675[34], i675[35], 0, i674, 'TomatoMiddleCup')
  request.r(i675[36], i675[37], 0, i674, 'AppleMiddleCup')
  request.r(i675[38], i675[39], 0, i674, 'OrangeMiddleCup')
  request.r(i675[40], i675[41], 0, i674, 'CherryMiddleCup')
  request.r(i675[42], i675[43], 0, i674, 'MultifruitMiddleCup')
  request.r(i675[44], i675[45], 0, i674, 'TomatoMiddleStrawCup')
  request.r(i675[46], i675[47], 0, i674, 'MultifruitMiddleStrawCup')
  request.r(i675[48], i675[49], 0, i674, 'AppleMiddleStrawCup')
  request.r(i675[50], i675[51], 0, i674, 'OrangeMiddleStrawCup')
  request.r(i675[52], i675[53], 0, i674, 'CherryMiddleStrawCup')
  request.r(i675[54], i675[55], 0, i674, 'MultifruitMiddleBallsCup')
  request.r(i675[56], i675[57], 0, i674, 'TomatoMiddleBallsCup')
  request.r(i675[58], i675[59], 0, i674, 'AppleMiddleBallsCup')
  request.r(i675[60], i675[61], 0, i674, 'OrangeMiddleBallsCup')
  request.r(i675[62], i675[63], 0, i674, 'CherryMiddleBallsCup')
  request.r(i675[64], i675[65], 0, i674, 'EntitySmallCup')
  request.r(i675[66], i675[67], 0, i674, 'TomatoSmallCup')
  request.r(i675[68], i675[69], 0, i674, 'AppleSmallCup')
  request.r(i675[70], i675[71], 0, i674, 'OrangeSmallCup')
  request.r(i675[72], i675[73], 0, i674, 'CherrySmallCup')
  request.r(i675[74], i675[75], 0, i674, 'MultifruitSmallCup')
  request.r(i675[76], i675[77], 0, i674, 'TomatoSmallStrawCup')
  request.r(i675[78], i675[79], 0, i674, 'AppleSmallStrawCup')
  request.r(i675[80], i675[81], 0, i674, 'OrangeSmallStrawCup')
  request.r(i675[82], i675[83], 0, i674, 'CherrySmallStrawCup')
  request.r(i675[84], i675[85], 0, i674, 'MultifruitSmallStrawCup')
  request.r(i675[86], i675[87], 0, i674, 'AppleSmallBallsCup')
  request.r(i675[88], i675[89], 0, i674, 'TomatoSmallBallsCup')
  request.r(i675[90], i675[91], 0, i674, 'OrangeSmallBallsCup')
  request.r(i675[92], i675[93], 0, i674, 'CherrySmallBallsCup')
  request.r(i675[94], i675[95], 0, i674, 'MultifruitSmallBallsCup')
  request.r(i675[96], i675[97], 0, i674, 'JuiceBallAdditive')
  request.r(i675[98], i675[99], 0, i674, 'IceAdditive')
  request.r(i675[100], i675[101], 0, i674, 'GrassAdditive')
  return i674
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i676 = root || request.c( 'TouchIdleTimer' )
  var i677 = data
  return i676
}

Deserializers["Helper"] = function (request, data, root) {
  var i678 = root || request.c( 'Helper' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, '_smallCupFinger')
  request.r(i679[2], i679[3], 0, i678, '_middleCupFinger')
  request.r(i679[4], i679[5], 0, i678, '_bigCupFinger')
  request.r(i679[6], i679[7], 0, i678, '_iceFinger')
  request.r(i679[8], i679[9], 0, i678, '_grassFinger')
  request.r(i679[10], i679[11], 0, i678, '_juiceballFinger')
  request.r(i679[12], i679[13], 0, i678, '_appleFinger')
  request.r(i679[14], i679[15], 0, i678, '_cherryFinger')
  request.r(i679[16], i679[17], 0, i678, '_orangeFinger')
  request.r(i679[18], i679[19], 0, i678, '_multifruitFinger')
  request.r(i679[20], i679[21], 0, i678, '_tomatoFinger')
  request.r(i679[22], i679[23], 0, i678, '_strawFinger')
  request.r(i679[24], i679[25], 0, i678, '_readyFinger')
  request.r(i679[26], i679[27], 0, i678, '_peoples')
  request.r(i679[28], i679[29], 0, i678, '_tutorial')
  request.r(i679[30], i679[31], 0, i678, '_order')
  request.r(i679[32], i679[33], 0, i678, '_strawButton')
  request.r(i679[34], i679[35], 0, i678, '_bigCupButton')
  request.r(i679[36], i679[37], 0, i678, '_middleCupButton')
  request.r(i679[38], i679[39], 0, i678, '_smallCupButton')
  request.r(i679[40], i679[41], 0, i678, '_readyButton')
  request.r(i679[42], i679[43], 0, i678, '_touchIdleTimer')
  request.r(i679[44], i679[45], 0, i678, '_finalScreen')
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i681 = data
  i680.ambientIntensity = i681[0]
  i680.reflectionIntensity = i681[1]
  i680.ambientMode = i681[2]
  i680.ambientLight = new pc.Color(i681[3], i681[4], i681[5], i681[6])
  i680.ambientSkyColor = new pc.Color(i681[7], i681[8], i681[9], i681[10])
  i680.ambientGroundColor = new pc.Color(i681[11], i681[12], i681[13], i681[14])
  i680.ambientEquatorColor = new pc.Color(i681[15], i681[16], i681[17], i681[18])
  i680.fogColor = new pc.Color(i681[19], i681[20], i681[21], i681[22])
  i680.fogEndDistance = i681[23]
  i680.fogStartDistance = i681[24]
  i680.fogDensity = i681[25]
  i680.fog = !!i681[26]
  request.r(i681[27], i681[28], 0, i680, 'skybox')
  i680.fogMode = i681[29]
  var i683 = i681[30]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i683[i + 0]) );
  }
  i680.lightmaps = i682
  i680.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i681[31], i680.lightProbes)
  i680.lightmapsMode = i681[32]
  i680.mixedBakeMode = i681[33]
  i680.environmentLightingMode = i681[34]
  i680.ambientProbe = new pc.SphericalHarmonicsL2(i681[35])
  i680.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i681[36])
  i680.useReferenceAmbientProbe = !!i681[37]
  request.r(i681[38], i681[39], 0, i680, 'customReflection')
  request.r(i681[40], i681[41], 0, i680, 'defaultReflection')
  i680.defaultReflectionMode = i681[42]
  i680.defaultReflectionResolution = i681[43]
  i680.sunLightObjectId = i681[44]
  i680.pixelLightCount = i681[45]
  i680.defaultReflectionHDR = !!i681[46]
  i680.hasLightDataAsset = !!i681[47]
  i680.hasManualGenerate = !!i681[48]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'lightmapColor')
  request.r(i687[2], i687[3], 0, i686, 'lightmapDirection')
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i688 = root || new UnityEngine.LightProbes()
  var i689 = data
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i697 = data
  var i699 = i697[0]
  var i698 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i699.length; i += 1) {
    i698.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i699[i + 0]));
  }
  i696.ShaderCompilationErrors = i698
  i696.name = i697[1]
  i696.guid = i697[2]
  var i701 = i697[3]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( i701[i + 0] );
  }
  i696.shaderDefinedKeywords = i700
  var i703 = i697[4]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i703[i + 0]) );
  }
  i696.passes = i702
  var i705 = i697[5]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i705[i + 0]) );
  }
  i696.usePasses = i704
  var i707 = i697[6]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i707[i + 0]) );
  }
  i696.defaultParameterValues = i706
  request.r(i697[7], i697[8], 0, i696, 'unityFallbackShader')
  i696.readDepth = !!i697[9]
  i696.isCreatedByShaderGraph = !!i697[10]
  i696.compiled = !!i697[11]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i711 = data
  i710.shaderName = i711[0]
  i710.errorMessage = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i716 = root || new pc.UnityShaderPass()
  var i717 = data
  i716.id = i717[0]
  i716.subShaderIndex = i717[1]
  i716.name = i717[2]
  i716.passType = i717[3]
  i716.grabPassTextureName = i717[4]
  i716.usePass = !!i717[5]
  i716.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[6], i716.zTest)
  i716.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[7], i716.zWrite)
  i716.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[8], i716.culling)
  i716.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i717[9], i716.blending)
  i716.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i717[10], i716.alphaBlending)
  i716.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[11], i716.colorWriteMask)
  i716.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[12], i716.offsetUnits)
  i716.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[13], i716.offsetFactor)
  i716.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[14], i716.stencilRef)
  i716.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[15], i716.stencilReadMask)
  i716.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[16], i716.stencilWriteMask)
  i716.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i717[17], i716.stencilOp)
  i716.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i717[18], i716.stencilOpFront)
  i716.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i717[19], i716.stencilOpBack)
  var i719 = i717[20]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i719[i + 0]) );
  }
  i716.tags = i718
  var i721 = i717[21]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( i721[i + 0] );
  }
  i716.passDefinedKeywords = i720
  var i723 = i717[22]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i723[i + 0]) );
  }
  i716.passDefinedKeywordGroups = i722
  var i725 = i717[23]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i725[i + 0]) );
  }
  i716.variants = i724
  var i727 = i717[24]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i727[i + 0]) );
  }
  i716.excludedVariants = i726
  i716.hasDepthReader = !!i717[25]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i729 = data
  i728.val = i729[0]
  i728.name = i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i731 = data
  i730.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[0], i730.src)
  i730.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[1], i730.dst)
  i730.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i731[2], i730.op)
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i733 = data
  i732.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[0], i732.pass)
  i732.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[1], i732.fail)
  i732.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[2], i732.zFail)
  i732.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[3], i732.comp)
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i737 = data
  i736.name = i737[0]
  i736.value = i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i741 = data
  var i743 = i741[0]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( i743[i + 0] );
  }
  i740.keywords = i742
  i740.hasDiscard = !!i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i747 = data
  i746.passId = i747[0]
  i746.subShaderIndex = i747[1]
  var i749 = i747[2]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( i749[i + 0] );
  }
  i746.keywords = i748
  i746.vertexProgram = i747[3]
  i746.fragmentProgram = i747[4]
  i746.exportedForWebGl2 = !!i747[5]
  i746.readDepth = !!i747[6]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'shader')
  i752.pass = i753[2]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i757 = data
  i756.name = i757[0]
  i756.type = i757[1]
  i756.value = new pc.Vec4( i757[2], i757[3], i757[4], i757[5] )
  i756.textureValue = i757[6]
  i756.shaderPropertyFlag = i757[7]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i759 = data
  i758.name = i759[0]
  request.r(i759[1], i759[2], 0, i758, 'texture')
  i758.aabb = i759[3]
  i758.vertices = i759[4]
  i758.triangles = i759[5]
  i758.textureRect = UnityEngine.Rect.MinMaxRect(i759[6], i759[7], i759[8], i759[9])
  i758.packedRect = UnityEngine.Rect.MinMaxRect(i759[10], i759[11], i759[12], i759[13])
  i758.border = new pc.Vec4( i759[14], i759[15], i759[16], i759[17] )
  i758.transparency = i759[18]
  i758.bounds = i759[19]
  i758.pixelsPerUnit = i759[20]
  i758.textureWidth = i759[21]
  i758.textureHeight = i759[22]
  i758.nativeSize = new pc.Vec2( i759[23], i759[24] )
  i758.pivot = new pc.Vec2( i759[25], i759[26] )
  i758.textureRectOffset = new pc.Vec2( i759[27], i759[28] )
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i761 = data
  i760.name = i761[0]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i763 = data
  i762.name = i763[0]
  i762.wrapMode = i763[1]
  i762.isLooping = !!i763[2]
  i762.length = i763[3]
  var i765 = i763[4]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i765[i + 0]) );
  }
  i762.curves = i764
  var i767 = i763[5]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i767[i + 0]) );
  }
  i762.events = i766
  i762.halfPrecision = !!i763[6]
  i762._frameRate = i763[7]
  i762.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i763[8], i762.localBounds)
  i762.hasMuscleCurves = !!i763[9]
  var i769 = i763[10]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( i769[i + 0] );
  }
  i762.clipMuscleConstant = i768
  i762.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i763[11], i762.clipBindingConstant)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i773 = data
  i772.path = i773[0]
  i772.hash = i773[1]
  i772.componentType = i773[2]
  i772.property = i773[3]
  i772.keys = i773[4]
  var i775 = i773[5]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i775[i + 0]) );
  }
  i772.objectReferenceKeys = i774
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i779 = data
  i778.time = i779[0]
  request.r(i779[1], i779[2], 0, i778, 'value')
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i783 = data
  i782.functionName = i783[0]
  i782.floatParameter = i783[1]
  i782.intParameter = i783[2]
  i782.stringParameter = i783[3]
  request.r(i783[4], i783[5], 0, i782, 'objectReferenceParameter')
  i782.time = i783[6]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i785 = data
  i784.center = new pc.Vec3( i785[0], i785[1], i785[2] )
  i784.extends = new pc.Vec3( i785[3], i785[4], i785[5] )
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i789 = data
  var i791 = i789[0]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( i791[i + 0] );
  }
  i788.genericBindings = i790
  var i793 = i789[1]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( i793[i + 0] );
  }
  i788.pptrCurveMapping = i792
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i795 = data
  i794.name = i795[0]
  i794.ascent = i795[1]
  i794.originalLineHeight = i795[2]
  i794.fontSize = i795[3]
  var i797 = i795[4]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i797[i + 0]) );
  }
  i794.characterInfo = i796
  request.r(i795[5], i795[6], 0, i794, 'texture')
  i794.originalFontSize = i795[7]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i801 = data
  i800.index = i801[0]
  i800.advance = i801[1]
  i800.bearing = i801[2]
  i800.glyphWidth = i801[3]
  i800.glyphHeight = i801[4]
  i800.minX = i801[5]
  i800.maxX = i801[6]
  i800.minY = i801[7]
  i800.maxY = i801[8]
  i800.uvBottomLeftX = i801[9]
  i800.uvBottomLeftY = i801[10]
  i800.uvBottomRightX = i801[11]
  i800.uvBottomRightY = i801[12]
  i800.uvTopLeftX = i801[13]
  i800.uvTopLeftY = i801[14]
  i800.uvTopRightX = i801[15]
  i800.uvTopRightY = i801[16]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i803 = data
  i802.name = i803[0]
  var i805 = i803[1]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i805[i + 0]) );
  }
  i802.layers = i804
  var i807 = i803[2]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i807[i + 0]) );
  }
  i802.parameters = i806
  i802.animationClips = i803[3]
  i802.avatarUnsupported = i803[4]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i811 = data
  i810.name = i811[0]
  i810.defaultWeight = i811[1]
  i810.blendingMode = i811[2]
  i810.avatarMask = i811[3]
  i810.syncedLayerIndex = i811[4]
  i810.syncedLayerAffectsTiming = !!i811[5]
  i810.syncedLayers = i811[6]
  i810.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i811[7], i810.stateMachine)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i813 = data
  i812.id = i813[0]
  i812.name = i813[1]
  i812.path = i813[2]
  var i815 = i813[3]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i815[i + 0]) );
  }
  i812.states = i814
  var i817 = i813[4]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i817[i + 0]) );
  }
  i812.machines = i816
  var i819 = i813[5]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i819[i + 0]) );
  }
  i812.entryStateTransitions = i818
  var i821 = i813[6]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i821[i + 0]) );
  }
  i812.exitStateTransitions = i820
  var i823 = i813[7]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i823[i + 0]) );
  }
  i812.anyStateTransitions = i822
  i812.defaultStateId = i813[8]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i827 = data
  i826.id = i827[0]
  i826.name = i827[1]
  i826.cycleOffset = i827[2]
  i826.cycleOffsetParameter = i827[3]
  i826.cycleOffsetParameterActive = !!i827[4]
  i826.mirror = !!i827[5]
  i826.mirrorParameter = i827[6]
  i826.mirrorParameterActive = !!i827[7]
  i826.motionId = i827[8]
  i826.nameHash = i827[9]
  i826.fullPathHash = i827[10]
  i826.speed = i827[11]
  i826.speedParameter = i827[12]
  i826.speedParameterActive = !!i827[13]
  i826.tag = i827[14]
  i826.tagHash = i827[15]
  i826.writeDefaultValues = !!i827[16]
  var i829 = i827[17]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i826.behaviours = i828
  var i831 = i827[18]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i831[i + 0]) );
  }
  i826.transitions = i830
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i837 = data
  i836.fullPath = i837[0]
  i836.canTransitionToSelf = !!i837[1]
  i836.duration = i837[2]
  i836.exitTime = i837[3]
  i836.hasExitTime = !!i837[4]
  i836.hasFixedDuration = !!i837[5]
  i836.interruptionSource = i837[6]
  i836.offset = i837[7]
  i836.orderedInterruption = !!i837[8]
  i836.destinationStateId = i837[9]
  i836.isExit = !!i837[10]
  i836.mute = !!i837[11]
  i836.solo = !!i837[12]
  var i839 = i837[13]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i839[i + 0]) );
  }
  i836.conditions = i838
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i845 = data
  i844.destinationStateId = i845[0]
  i844.isExit = !!i845[1]
  i844.mute = !!i845[2]
  i844.solo = !!i845[3]
  var i847 = i845[4]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i847[i + 0]) );
  }
  i844.conditions = i846
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i851 = data
  i850.mode = i851[0]
  i850.parameter = i851[1]
  i850.threshold = i851[2]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i855 = data
  i854.defaultBool = !!i855[0]
  i854.defaultFloat = i855[1]
  i854.defaultInt = i855[2]
  i854.name = i855[3]
  i854.nameHash = i855[4]
  i854.type = i855[5]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i857 = data
  i856.name = i857[0]
  i856.bytes64 = i857[1]
  i856.data = i857[2]
  return i856
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i859 = data
  i858.hashCode = i859[0]
  request.r(i859[1], i859[2], 0, i858, 'material')
  i858.materialHashCode = i859[3]
  request.r(i859[4], i859[5], 0, i858, 'atlas')
  i858.normalStyle = i859[6]
  i858.normalSpacingOffset = i859[7]
  i858.boldStyle = i859[8]
  i858.boldSpacing = i859[9]
  i858.italicStyle = i859[10]
  i858.tabSize = i859[11]
  i858.m_Version = i859[12]
  i858.m_SourceFontFileGUID = i859[13]
  request.r(i859[14], i859[15], 0, i858, 'm_SourceFontFile_EditorRef')
  request.r(i859[16], i859[17], 0, i858, 'm_SourceFontFile')
  i858.m_AtlasPopulationMode = i859[18]
  i858.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i859[19], i858.m_FaceInfo)
  var i861 = i859[20]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i861.length; i += 1) {
    i860.add(request.d('UnityEngine.TextCore.Glyph', i861[i + 0]));
  }
  i858.m_GlyphTable = i860
  var i863 = i859[21]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i863.length; i += 1) {
    i862.add(request.d('TMPro.TMP_Character', i863[i + 0]));
  }
  i858.m_CharacterTable = i862
  var i865 = i859[22]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i858.m_AtlasTextures = i864
  i858.m_AtlasTextureIndex = i859[23]
  i858.m_IsMultiAtlasTexturesEnabled = !!i859[24]
  i858.m_ClearDynamicDataOnBuild = !!i859[25]
  var i867 = i859[26]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i867.length; i += 1) {
    i866.add(request.d('UnityEngine.TextCore.GlyphRect', i867[i + 0]));
  }
  i858.m_UsedGlyphRects = i866
  var i869 = i859[27]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i869.length; i += 1) {
    i868.add(request.d('UnityEngine.TextCore.GlyphRect', i869[i + 0]));
  }
  i858.m_FreeGlyphRects = i868
  i858.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i859[28], i858.m_fontInfo)
  i858.m_AtlasWidth = i859[29]
  i858.m_AtlasHeight = i859[30]
  i858.m_AtlasPadding = i859[31]
  i858.m_AtlasRenderMode = i859[32]
  var i871 = i859[33]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(request.d('TMPro.TMP_Glyph', i871[i + 0]));
  }
  i858.m_glyphInfoList = i870
  i858.m_KerningTable = request.d('TMPro.KerningTable', i859[34], i858.m_KerningTable)
  i858.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i859[35], i858.m_FontFeatureTable)
  var i873 = i859[36]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 1, i872, '')
  }
  i858.fallbackFontAssets = i872
  var i875 = i859[37]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 1, i874, '')
  }
  i858.m_FallbackFontAssetTable = i874
  i858.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i859[38], i858.m_CreationSettings)
  var i877 = i859[39]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('TMPro.TMP_FontWeightPair', i877[i + 0]) );
  }
  i858.m_FontWeightTable = i876
  var i879 = i859[40]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('TMPro.TMP_FontWeightPair', i879[i + 0]) );
  }
  i858.fontWeights = i878
  return i858
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i881 = data
  i880.m_FaceIndex = i881[0]
  i880.m_FamilyName = i881[1]
  i880.m_StyleName = i881[2]
  i880.m_PointSize = i881[3]
  i880.m_Scale = i881[4]
  i880.m_UnitsPerEM = i881[5]
  i880.m_LineHeight = i881[6]
  i880.m_AscentLine = i881[7]
  i880.m_CapLine = i881[8]
  i880.m_MeanLine = i881[9]
  i880.m_Baseline = i881[10]
  i880.m_DescentLine = i881[11]
  i880.m_SuperscriptOffset = i881[12]
  i880.m_SuperscriptSize = i881[13]
  i880.m_SubscriptOffset = i881[14]
  i880.m_SubscriptSize = i881[15]
  i880.m_UnderlineOffset = i881[16]
  i880.m_UnderlineThickness = i881[17]
  i880.m_StrikethroughOffset = i881[18]
  i880.m_StrikethroughThickness = i881[19]
  i880.m_TabWidth = i881[20]
  return i880
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i885 = data
  i884.m_Index = i885[0]
  i884.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i885[1], i884.m_Metrics)
  i884.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i885[2], i884.m_GlyphRect)
  i884.m_Scale = i885[3]
  i884.m_AtlasIndex = i885[4]
  i884.m_ClassDefinitionType = i885[5]
  return i884
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i887 = data
  i886.m_Width = i887[0]
  i886.m_Height = i887[1]
  i886.m_HorizontalBearingX = i887[2]
  i886.m_HorizontalBearingY = i887[3]
  i886.m_HorizontalAdvance = i887[4]
  return i886
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i889 = data
  i888.m_X = i889[0]
  i888.m_Y = i889[1]
  i888.m_Width = i889[2]
  i888.m_Height = i889[3]
  return i888
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i892 = root || request.c( 'TMPro.TMP_Character' )
  var i893 = data
  i892.m_ElementType = i893[0]
  i892.m_Unicode = i893[1]
  i892.m_GlyphIndex = i893[2]
  i892.m_Scale = i893[3]
  return i892
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i898 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i899 = data
  i898.Name = i899[0]
  i898.PointSize = i899[1]
  i898.Scale = i899[2]
  i898.CharacterCount = i899[3]
  i898.LineHeight = i899[4]
  i898.Baseline = i899[5]
  i898.Ascender = i899[6]
  i898.CapHeight = i899[7]
  i898.Descender = i899[8]
  i898.CenterLine = i899[9]
  i898.SuperscriptOffset = i899[10]
  i898.SubscriptOffset = i899[11]
  i898.SubSize = i899[12]
  i898.Underline = i899[13]
  i898.UnderlineThickness = i899[14]
  i898.strikethrough = i899[15]
  i898.strikethroughThickness = i899[16]
  i898.TabWidth = i899[17]
  i898.Padding = i899[18]
  i898.AtlasWidth = i899[19]
  i898.AtlasHeight = i899[20]
  return i898
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i902 = root || request.c( 'TMPro.TMP_Glyph' )
  var i903 = data
  i902.id = i903[0]
  i902.x = i903[1]
  i902.y = i903[2]
  i902.width = i903[3]
  i902.height = i903[4]
  i902.xOffset = i903[5]
  i902.yOffset = i903[6]
  i902.xAdvance = i903[7]
  i902.scale = i903[8]
  return i902
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.KerningTable' )
  var i905 = data
  var i907 = i905[0]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(request.d('TMPro.KerningPair', i907[i + 0]));
  }
  i904.kerningPairs = i906
  return i904
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.KerningPair' )
  var i911 = data
  i910.xOffset = i911[0]
  i910.m_FirstGlyph = i911[1]
  i910.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i911[2], i910.m_FirstGlyphAdjustments)
  i910.m_SecondGlyph = i911[3]
  i910.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i911[4], i910.m_SecondGlyphAdjustments)
  i910.m_IgnoreSpacingAdjustments = !!i911[5]
  return i910
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i913 = data
  var i915 = i913[0]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i915.length; i += 1) {
    i914.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i915[i + 0]));
  }
  i912.m_GlyphPairAdjustmentRecords = i914
  return i912
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i918 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i919 = data
  i918.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i919[0], i918.m_FirstAdjustmentRecord)
  i918.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i919[1], i918.m_SecondAdjustmentRecord)
  i918.m_FeatureLookupFlags = i919[2]
  return i918
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i921 = data
  i920.m_GlyphIndex = i921[0]
  i920.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i921[1], i920.m_GlyphValueRecord)
  return i920
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i923 = data
  i922.m_XPlacement = i923[0]
  i922.m_YPlacement = i923[1]
  i922.m_XAdvance = i923[2]
  i922.m_YAdvance = i923[3]
  return i922
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i927 = data
  i926.sourceFontFileName = i927[0]
  i926.sourceFontFileGUID = i927[1]
  i926.pointSizeSamplingMode = i927[2]
  i926.pointSize = i927[3]
  i926.padding = i927[4]
  i926.packingMode = i927[5]
  i926.atlasWidth = i927[6]
  i926.atlasHeight = i927[7]
  i926.characterSetSelectionMode = i927[8]
  i926.characterSequence = i927[9]
  i926.referencedFontAssetGUID = i927[10]
  i926.referencedTextAssetGUID = i927[11]
  i926.fontStyle = i927[12]
  i926.fontStyleModifier = i927[13]
  i926.renderMode = i927[14]
  i926.includeFontFeatures = !!i927[15]
  return i926
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'regularTypeface')
  request.r(i931[2], i931[3], 0, i930, 'italicTypeface')
  return i930
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i932 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i933 = data
  i932.useSafeMode = !!i933[0]
  i932.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i933[1], i932.safeModeOptions)
  i932.timeScale = i933[2]
  i932.unscaledTimeScale = i933[3]
  i932.useSmoothDeltaTime = !!i933[4]
  i932.maxSmoothUnscaledTime = i933[5]
  i932.rewindCallbackMode = i933[6]
  i932.showUnityEditorReport = !!i933[7]
  i932.logBehaviour = i933[8]
  i932.drawGizmos = !!i933[9]
  i932.defaultRecyclable = !!i933[10]
  i932.defaultAutoPlay = i933[11]
  i932.defaultUpdateType = i933[12]
  i932.defaultTimeScaleIndependent = !!i933[13]
  i932.defaultEaseType = i933[14]
  i932.defaultEaseOvershootOrAmplitude = i933[15]
  i932.defaultEasePeriod = i933[16]
  i932.defaultAutoKill = !!i933[17]
  i932.defaultLoopType = i933[18]
  i932.debugMode = !!i933[19]
  i932.debugStoreTargetId = !!i933[20]
  i932.showPreviewPanel = !!i933[21]
  i932.storeSettingsLocation = i933[22]
  i932.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i933[23], i932.modules)
  i932.createASMDEF = !!i933[24]
  i932.showPlayingTweens = !!i933[25]
  i932.showPausedTweens = !!i933[26]
  return i932
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i934 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i935 = data
  i934.logBehaviour = i935[0]
  i934.nestedTweenFailureBehaviour = i935[1]
  return i934
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i936 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i937 = data
  i936.showPanel = !!i937[0]
  i936.audioEnabled = !!i937[1]
  i936.physicsEnabled = !!i937[2]
  i936.physics2DEnabled = !!i937[3]
  i936.spriteEnabled = !!i937[4]
  i936.uiEnabled = !!i937[5]
  i936.textMeshProEnabled = !!i937[6]
  i936.tk2DEnabled = !!i937[7]
  i936.deAudioEnabled = !!i937[8]
  i936.deUnityExtendedEnabled = !!i937[9]
  i936.epoOutlineEnabled = !!i937[10]
  return i936
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_Settings' )
  var i939 = data
  i938.m_enableWordWrapping = !!i939[0]
  i938.m_enableKerning = !!i939[1]
  i938.m_enableExtraPadding = !!i939[2]
  i938.m_enableTintAllSprites = !!i939[3]
  i938.m_enableParseEscapeCharacters = !!i939[4]
  i938.m_EnableRaycastTarget = !!i939[5]
  i938.m_GetFontFeaturesAtRuntime = !!i939[6]
  i938.m_missingGlyphCharacter = i939[7]
  i938.m_warningsDisabled = !!i939[8]
  request.r(i939[9], i939[10], 0, i938, 'm_defaultFontAsset')
  i938.m_defaultFontAssetPath = i939[11]
  i938.m_defaultFontSize = i939[12]
  i938.m_defaultAutoSizeMinRatio = i939[13]
  i938.m_defaultAutoSizeMaxRatio = i939[14]
  i938.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i939[15], i939[16] )
  i938.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i939[17], i939[18] )
  i938.m_autoSizeTextContainer = !!i939[19]
  i938.m_IsTextObjectScaleStatic = !!i939[20]
  var i941 = i939[21]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 1, i940, '')
  }
  i938.m_fallbackFontAssets = i940
  i938.m_matchMaterialPreset = !!i939[22]
  request.r(i939[23], i939[24], 0, i938, 'm_defaultSpriteAsset')
  i938.m_defaultSpriteAssetPath = i939[25]
  i938.m_enableEmojiSupport = !!i939[26]
  i938.m_MissingCharacterSpriteUnicode = i939[27]
  i938.m_defaultColorGradientPresetsPath = i939[28]
  request.r(i939[29], i939[30], 0, i938, 'm_defaultStyleSheet')
  i938.m_StyleSheetsResourcePath = i939[31]
  request.r(i939[32], i939[33], 0, i938, 'm_leadingCharacters')
  request.r(i939[34], i939[35], 0, i938, 'm_followingCharacters')
  i938.m_UseModernHangulLineBreakingRules = !!i939[36]
  return i938
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i943 = data
  i942.hashCode = i943[0]
  request.r(i943[1], i943[2], 0, i942, 'material')
  i942.materialHashCode = i943[3]
  request.r(i943[4], i943[5], 0, i942, 'spriteSheet')
  var i945 = i943[6]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('TMPro.TMP_Sprite', i945[i + 0]));
  }
  i942.spriteInfoList = i944
  var i947 = i943[7]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 1, i946, '')
  }
  i942.fallbackSpriteAssets = i946
  i942.m_Version = i943[8]
  i942.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i943[9], i942.m_FaceInfo)
  var i949 = i943[10]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('TMPro.TMP_SpriteCharacter', i949[i + 0]));
  }
  i942.m_SpriteCharacterTable = i948
  var i951 = i943[11]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i951.length; i += 1) {
    i950.add(request.d('TMPro.TMP_SpriteGlyph', i951[i + 0]));
  }
  i942.m_SpriteGlyphTable = i950
  return i942
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.TMP_Sprite' )
  var i955 = data
  i954.name = i955[0]
  i954.hashCode = i955[1]
  i954.unicode = i955[2]
  i954.pivot = new pc.Vec2( i955[3], i955[4] )
  request.r(i955[5], i955[6], 0, i954, 'sprite')
  i954.id = i955[7]
  i954.x = i955[8]
  i954.y = i955[9]
  i954.width = i955[10]
  i954.height = i955[11]
  i954.xOffset = i955[12]
  i954.yOffset = i955[13]
  i954.xAdvance = i955[14]
  i954.scale = i955[15]
  return i954
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i960 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i961 = data
  i960.m_Name = i961[0]
  i960.m_HashCode = i961[1]
  i960.m_ElementType = i961[2]
  i960.m_Unicode = i961[3]
  i960.m_GlyphIndex = i961[4]
  i960.m_Scale = i961[5]
  return i960
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'sprite')
  i964.m_Index = i965[2]
  i964.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i965[3], i964.m_Metrics)
  i964.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i965[4], i964.m_GlyphRect)
  i964.m_Scale = i965[5]
  i964.m_AtlasIndex = i965[6]
  i964.m_ClassDefinitionType = i965[7]
  return i964
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i967 = data
  var i969 = i967[0]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i969.length; i += 1) {
    i968.add(request.d('TMPro.TMP_Style', i969[i + 0]));
  }
  i966.m_StyleList = i968
  return i966
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.TMP_Style' )
  var i973 = data
  i972.m_Name = i973[0]
  i972.m_HashCode = i973[1]
  i972.m_OpeningDefinition = i973[2]
  i972.m_ClosingDefinition = i973[3]
  i972.m_OpeningTagArray = i973[4]
  i972.m_ClosingTagArray = i973[5]
  i972.m_OpeningTagUnicodeArray = i973[6]
  i972.m_ClosingTagUnicodeArray = i973[7]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i975 = data
  var i977 = i975[0]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i977[i + 0]) );
  }
  i974.files = i976
  i974.componentToPrefabIds = i975[1]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i981 = data
  i980.path = i981[0]
  request.r(i981[1], i981[2], 0, i980, 'unityObject')
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i983 = data
  var i985 = i983[0]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i985[i + 0]) );
  }
  i982.scriptsExecutionOrder = i984
  var i987 = i983[1]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i987[i + 0]) );
  }
  i982.sortingLayers = i986
  var i989 = i983[2]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i989[i + 0]) );
  }
  i982.cullingLayers = i988
  i982.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i983[3], i982.timeSettings)
  i982.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i983[4], i982.physicsSettings)
  i982.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i983[5], i982.physics2DSettings)
  i982.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i983[6], i982.qualitySettings)
  i982.enableRealtimeShadows = !!i983[7]
  i982.enableAutoInstancing = !!i983[8]
  i982.enableDynamicBatching = !!i983[9]
  i982.lightmapEncodingQuality = i983[10]
  i982.desiredColorSpace = i983[11]
  var i991 = i983[12]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( i991[i + 0] );
  }
  i982.allTags = i990
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i995 = data
  i994.name = i995[0]
  i994.value = i995[1]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i999 = data
  i998.id = i999[0]
  i998.name = i999[1]
  i998.value = i999[2]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1003 = data
  i1002.id = i1003[0]
  i1002.name = i1003[1]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1005 = data
  i1004.fixedDeltaTime = i1005[0]
  i1004.maximumDeltaTime = i1005[1]
  i1004.timeScale = i1005[2]
  i1004.maximumParticleTimestep = i1005[3]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1007 = data
  i1006.gravity = new pc.Vec3( i1007[0], i1007[1], i1007[2] )
  i1006.defaultSolverIterations = i1007[3]
  i1006.bounceThreshold = i1007[4]
  i1006.autoSyncTransforms = !!i1007[5]
  i1006.autoSimulation = !!i1007[6]
  var i1009 = i1007[7]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1009[i + 0]) );
  }
  i1006.collisionMatrix = i1008
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1013 = data
  i1012.enabled = !!i1013[0]
  i1012.layerId = i1013[1]
  i1012.otherLayerId = i1013[2]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'material')
  i1014.gravity = new pc.Vec2( i1015[2], i1015[3] )
  i1014.positionIterations = i1015[4]
  i1014.velocityIterations = i1015[5]
  i1014.velocityThreshold = i1015[6]
  i1014.maxLinearCorrection = i1015[7]
  i1014.maxAngularCorrection = i1015[8]
  i1014.maxTranslationSpeed = i1015[9]
  i1014.maxRotationSpeed = i1015[10]
  i1014.baumgarteScale = i1015[11]
  i1014.baumgarteTOIScale = i1015[12]
  i1014.timeToSleep = i1015[13]
  i1014.linearSleepTolerance = i1015[14]
  i1014.angularSleepTolerance = i1015[15]
  i1014.defaultContactOffset = i1015[16]
  i1014.autoSimulation = !!i1015[17]
  i1014.queriesHitTriggers = !!i1015[18]
  i1014.queriesStartInColliders = !!i1015[19]
  i1014.callbacksOnDisable = !!i1015[20]
  i1014.reuseCollisionCallbacks = !!i1015[21]
  i1014.autoSyncTransforms = !!i1015[22]
  var i1017 = i1015[23]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1017[i + 0]) );
  }
  i1014.collisionMatrix = i1016
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1021 = data
  i1020.enabled = !!i1021[0]
  i1020.layerId = i1021[1]
  i1020.otherLayerId = i1021[2]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1025[i + 0]) );
  }
  i1022.qualityLevels = i1024
  var i1027 = i1023[1]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( i1027[i + 0] );
  }
  i1022.names = i1026
  i1022.shadows = i1023[2]
  i1022.anisotropicFiltering = i1023[3]
  i1022.antiAliasing = i1023[4]
  i1022.lodBias = i1023[5]
  i1022.shadowCascades = i1023[6]
  i1022.shadowDistance = i1023[7]
  i1022.shadowmaskMode = i1023[8]
  i1022.shadowProjection = i1023[9]
  i1022.shadowResolution = i1023[10]
  i1022.softParticles = !!i1023[11]
  i1022.softVegetation = !!i1023[12]
  i1022.activeColorSpace = i1023[13]
  i1022.desiredColorSpace = i1023[14]
  i1022.masterTextureLimit = i1023[15]
  i1022.maxQueuedFrames = i1023[16]
  i1022.particleRaycastBudget = i1023[17]
  i1022.pixelLightCount = i1023[18]
  i1022.realtimeReflectionProbes = !!i1023[19]
  i1022.shadowCascade2Split = i1023[20]
  i1022.shadowCascade4Split = new pc.Vec3( i1023[21], i1023[22], i1023[23] )
  i1022.streamingMipmapsActive = !!i1023[24]
  i1022.vSyncCount = i1023[25]
  i1022.asyncUploadBufferSize = i1023[26]
  i1022.asyncUploadTimeSlice = i1023[27]
  i1022.billboardsFaceCameraPosition = !!i1023[28]
  i1022.shadowNearPlaneOffset = i1023[29]
  i1022.streamingMipmapsMemoryBudget = i1023[30]
  i1022.maximumLODLevel = i1023[31]
  i1022.streamingMipmapsAddAllCameras = !!i1023[32]
  i1022.streamingMipmapsMaxLevelReduction = i1023[33]
  i1022.streamingMipmapsRenderersPerFrame = i1023[34]
  i1022.resolutionScalingFixedDPIFactor = i1023[35]
  i1022.streamingMipmapsMaxFileIORequests = i1023[36]
  i1022.currentQualityLevel = i1023[37]
  return i1022
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1030 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1031 = data
  i1030.xPlacement = i1031[0]
  i1030.yPlacement = i1031[1]
  i1030.xAdvance = i1031[2]
  i1030.yAdvance = i1031[3]
  return i1030
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[12],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[12],"78":[79],"80":[81],"82":[81],"19":[2],"34":[16],"83":[2],"84":[85],"86":[87],"88":[85],"89":[2],"90":[2],"21":[19],"6":[3,2],"91":[2],"20":[19],"30":[2],"92":[2],"93":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[3,2],"101":[2],"102":[2],"103":[2],"104":[2],"105":[3,2],"106":[2],"107":[36],"108":[36],"37":[36],"109":[36],"110":[12],"111":[12],"112":[113],"114":[12],"115":[2],"116":[79,2],"17":[2,3],"117":[2],"118":[3,2],"119":[79],"120":[3,2],"121":[2],"122":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","TMPro.TMP_FontAsset","UnityEngine.Material","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "5.8";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "BasketVersion";

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

Deserializers.buildID = "c9695114-bda5-41a5-87d4-4b149f47cdf5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

