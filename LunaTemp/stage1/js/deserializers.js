var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.JointSpring' )
  var i521 = data
  i520.spring = i521[0]
  i520.damper = i521[1]
  i520.targetPosition = i521[2]
  return i520
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointMotor' )
  var i523 = data
  i522.m_TargetVelocity = i523[0]
  i522.m_Force = i523[1]
  i522.m_FreeSpin = i523[2]
  return i522
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointLimits' )
  var i525 = data
  i524.m_Min = i525[0]
  i524.m_Max = i525[1]
  i524.m_Bounciness = i525[2]
  i524.m_BounceMinVelocity = i525[3]
  i524.m_ContactDistance = i525[4]
  i524.minBounce = i525[5]
  i524.maxBounce = i525[6]
  return i524
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointDrive' )
  var i527 = data
  i526.m_PositionSpring = i527[0]
  i526.m_PositionDamper = i527[1]
  i526.m_MaximumForce = i527[2]
  i526.m_UseAcceleration = i527[3]
  return i526
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i529 = data
  i528.m_Spring = i529[0]
  i528.m_Damper = i529[1]
  return i528
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i531 = data
  i530.m_Limit = i531[0]
  i530.m_Bounciness = i531[1]
  i530.m_ContactDistance = i531[2]
  return i530
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i533 = data
  i532.m_ExtremumSlip = i533[0]
  i532.m_ExtremumValue = i533[1]
  i532.m_AsymptoteSlip = i533[2]
  i532.m_AsymptoteValue = i533[3]
  i532.m_Stiffness = i533[4]
  return i532
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i535 = data
  i534.m_LowerAngle = i535[0]
  i534.m_UpperAngle = i535[1]
  return i534
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i537 = data
  i536.m_MotorSpeed = i537[0]
  i536.m_MaximumMotorTorque = i537[1]
  return i536
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i539 = data
  i538.m_DampingRatio = i539[0]
  i538.m_Frequency = i539[1]
  i538.m_Angle = i539[2]
  return i538
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i541 = data
  i540.m_LowerTranslation = i541[0]
  i540.m_UpperTranslation = i541[1]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i543 = data
  i542.name = i543[0]
  i542.width = i543[1]
  i542.height = i543[2]
  i542.mipmapCount = i543[3]
  i542.anisoLevel = i543[4]
  i542.filterMode = i543[5]
  i542.hdr = !!i543[6]
  i542.format = i543[7]
  i542.wrapMode = i543[8]
  i542.alphaIsTransparency = !!i543[9]
  i542.alphaSource = i543[10]
  i542.graphicsFormat = i543[11]
  i542.sRGBTexture = !!i543[12]
  i542.desiredColorSpace = i543[13]
  i542.wrapU = i543[14]
  i542.wrapV = i543[15]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i544 = root || new pc.UnityMaterial()
  var i545 = data
  i544.name = i545[0]
  request.r(i545[1], i545[2], 0, i544, 'shader')
  i544.renderQueue = i545[3]
  i544.enableInstancing = !!i545[4]
  var i547 = i545[5]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i547[i + 0]) );
  }
  i544.floatParameters = i546
  var i549 = i545[6]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i549[i + 0]) );
  }
  i544.colorParameters = i548
  var i551 = i545[7]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i551[i + 0]) );
  }
  i544.vectorParameters = i550
  var i553 = i545[8]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i553[i + 0]) );
  }
  i544.textureParameters = i552
  var i555 = i545[9]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i555[i + 0]) );
  }
  i544.materialFlags = i554
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i559 = data
  i558.name = i559[0]
  i558.value = i559[1]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i563 = data
  i562.name = i563[0]
  i562.value = new pc.Color(i563[1], i563[2], i563[3], i563[4])
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i567 = data
  i566.name = i567[0]
  i566.value = new pc.Vec4( i567[1], i567[2], i567[3], i567[4] )
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i571 = data
  i570.name = i571[0]
  request.r(i571[1], i571[2], 0, i570, 'value')
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i575 = data
  i574.name = i575[0]
  i574.enabled = !!i575[1]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i577 = data
  i576.pivot = new pc.Vec2( i577[0], i577[1] )
  i576.anchorMin = new pc.Vec2( i577[2], i577[3] )
  i576.anchorMax = new pc.Vec2( i577[4], i577[5] )
  i576.sizeDelta = new pc.Vec2( i577[6], i577[7] )
  i576.anchoredPosition3D = new pc.Vec3( i577[8], i577[9], i577[10] )
  i576.rotation = new pc.Quat(i577[11], i577[12], i577[13], i577[14])
  i576.scale = new pc.Vec3( i577[15], i577[16], i577[17] )
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i579 = data
  i578.cullTransparentMesh = !!i579[0]
  return i578
}

Deserializers["People"] = function (request, data, root) {
  var i580 = root || request.c( 'People' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, '_readyImage')
  request.r(i581[2], i581[3], 0, i580, '_additiveImage1')
  request.r(i581[4], i581[5], 0, i580, '_additiveImage2')
  request.r(i581[6], i581[7], 0, i580, '_endPoint')
  request.r(i581[8], i581[9], 0, i580, 'Bank')
  request.r(i581[10], i581[11], 0, i580, '_sizeText')
  i580.CupType = i581[12]
  i580.JuiceType = i581[13]
  i580.AdditiveType1 = i581[14]
  i580.AdditiveType2 = i581[15]
  request.r(i581[16], i581[17], 0, i580, '_finishSound')
  request.r(i581[18], i581[19], 0, i580, '_happySlider')
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'clip')
  request.r(i583[2], i583[3], 0, i582, 'outputAudioMixerGroup')
  i582.playOnAwake = !!i583[4]
  i582.loop = !!i583[5]
  i582.time = i583[6]
  i582.volume = i583[7]
  i582.pitch = i583[8]
  i582.enabled = !!i583[9]
  return i582
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.Image' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'm_Sprite')
  i584.m_Type = i585[2]
  i584.m_PreserveAspect = !!i585[3]
  i584.m_FillCenter = !!i585[4]
  i584.m_FillMethod = i585[5]
  i584.m_FillAmount = i585[6]
  i584.m_FillClockwise = !!i585[7]
  i584.m_FillOrigin = i585[8]
  i584.m_UseSpriteMesh = !!i585[9]
  i584.m_PixelsPerUnitMultiplier = i585[10]
  request.r(i585[11], i585[12], 0, i584, 'm_Material')
  i584.m_Maskable = !!i585[13]
  i584.m_Color = new pc.Color(i585[14], i585[15], i585[16], i585[17])
  i584.m_RaycastTarget = !!i585[18]
  i584.m_RaycastPadding = new pc.Vec4( i585[19], i585[20], i585[21], i585[22] )
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i587 = data
  i586.name = i587[0]
  i586.tagId = i587[1]
  i586.enabled = !!i587[2]
  i586.isStatic = !!i587[3]
  i586.layer = i587[4]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i589 = data
  i588.name = i589[0]
  i588.index = i589[1]
  i588.startup = !!i589[2]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i591 = data
  i590.position = new pc.Vec3( i591[0], i591[1], i591[2] )
  i590.scale = new pc.Vec3( i591[3], i591[4], i591[5] )
  i590.rotation = new pc.Quat(i591[6], i591[7], i591[8], i591[9])
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i593 = data
  i592.enabled = !!i593[0]
  i592.aspect = i593[1]
  i592.orthographic = !!i593[2]
  i592.orthographicSize = i593[3]
  i592.backgroundColor = new pc.Color(i593[4], i593[5], i593[6], i593[7])
  i592.nearClipPlane = i593[8]
  i592.farClipPlane = i593[9]
  i592.fieldOfView = i593[10]
  i592.depth = i593[11]
  i592.clearFlags = i593[12]
  i592.cullingMask = i593[13]
  i592.rect = i593[14]
  request.r(i593[15], i593[16], 0, i592, 'targetTexture')
  i592.usePhysicalProperties = !!i593[17]
  i592.focalLength = i593[18]
  i592.sensorSize = new pc.Vec2( i593[19], i593[20] )
  i592.lensShift = new pc.Vec2( i593[21], i593[22] )
  i592.gateFit = i593[23]
  i592.commandBufferCount = i593[24]
  i592.cameraType = i593[25]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'animatorController')
  request.r(i595[2], i595[3], 0, i594, 'avatar')
  i594.updateMode = i595[4]
  i594.hasTransformHierarchy = !!i595[5]
  i594.applyRootMotion = !!i595[6]
  var i597 = i595[7]
  var i596 = []
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 2, i596, '')
  }
  i594.humanBones = i596
  i594.enabled = !!i595[8]
  return i594
}

Deserializers["Bank"] = function (request, data, root) {
  var i600 = root || request.c( 'Bank' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'BuyBigCupButton')
  request.r(i601[2], i601[3], 0, i600, 'BigCupButton')
  request.r(i601[4], i601[5], 0, i600, 'MiddleCupButton')
  request.r(i601[6], i601[7], 0, i600, 'MoneyText')
  request.r(i601[8], i601[9], 0, i600, 'Tutorial')
  request.r(i601[10], i601[11], 0, i600, 'BuyAdditiveButton')
  request.r(i601[12], i601[13], 0, i600, 'BuyJuiceButton')
  request.r(i601[14], i601[15], 0, i600, 'JuiceButton1')
  request.r(i601[16], i601[17], 0, i600, 'JuiceButton2')
  request.r(i601[18], i601[19], 0, i600, 'JuiceButton3')
  request.r(i601[20], i601[21], 0, i600, 'Additive1Button')
  request.r(i601[22], i601[23], 0, i600, 'Additive2Button')
  i600.Money = i601[24]
  i600.IsBigCupBuy = !!i601[25]
  i600.IsJuiceBuy = !!i601[26]
  i600.IsAdditiveBuy = !!i601[27]
  request.r(i601[28], i601[29], 0, i600, '_buySound')
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i603 = data
  i602.enabled = !!i603[0]
  i602.planeDistance = i603[1]
  i602.referencePixelsPerUnit = i603[2]
  i602.isFallbackOverlay = !!i603[3]
  i602.renderMode = i603[4]
  i602.renderOrder = i603[5]
  i602.sortingLayerName = i603[6]
  i602.sortingOrder = i603[7]
  i602.scaleFactor = i603[8]
  request.r(i603[9], i603[10], 0, i602, 'worldCamera')
  i602.overrideSorting = !!i603[11]
  i602.pixelPerfect = !!i603[12]
  i602.targetDisplay = i603[13]
  i602.overridePixelPerfect = !!i603[14]
  return i602
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i605 = data
  i604.m_UiScaleMode = i605[0]
  i604.m_ReferencePixelsPerUnit = i605[1]
  i604.m_ScaleFactor = i605[2]
  i604.m_ReferenceResolution = new pc.Vec2( i605[3], i605[4] )
  i604.m_ScreenMatchMode = i605[5]
  i604.m_MatchWidthOrHeight = i605[6]
  i604.m_PhysicalUnit = i605[7]
  i604.m_FallbackScreenDPI = i605[8]
  i604.m_DefaultSpriteDPI = i605[9]
  i604.m_DynamicPixelsPerUnit = i605[10]
  i604.m_PresetInfoIsWorld = !!i605[11]
  return i604
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i607 = data
  i606.m_IgnoreReversedGraphics = !!i607[0]
  i606.m_BlockingObjects = i607[1]
  i606.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i607[2] )
  return i606
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i608 = root || request.c( 'ImageShiftOnOrientation' )
  var i609 = data
  var i611 = i609[0]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('ItemSwitcherData', i611[i + 0]) );
  }
  i608.Items = i610
  request.r(i609[1], i609[2], 0, i608, '_backHorizontal')
  request.r(i609[3], i609[4], 0, i608, '_backVertical')
  request.r(i609[5], i609[6], 0, i608, '_tableHorizontal')
  request.r(i609[7], i609[8], 0, i608, '_tableVertical')
  i608.IsDebug = !!i609[9]
  i608.CanCopy = !!i609[10]
  return i608
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i614 = root || request.c( 'ItemSwitcherData' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'Target')
  i614.HorizontalAnchoredPosition = new pc.Vec2( i615[2], i615[3] )
  i614.SizeHorizontal = new pc.Vec2( i615[4], i615[5] )
  i614.VerticalAnchoredPosition = new pc.Vec2( i615[6], i615[7] )
  i614.SizeVertical = new pc.Vec2( i615[8], i615[9] )
  i614.MinHorizontal = new pc.Vec2( i615[10], i615[11] )
  i614.MaxHorizontal = new pc.Vec2( i615[12], i615[13] )
  i614.MinVertical = new pc.Vec2( i615[14], i615[15] )
  i614.MaxVertical = new pc.Vec2( i615[16], i615[17] )
  i614.IsAnchored = !!i615[18]
  i614.IsDebug = !!i615[19]
  i614.CopyHorizontal = !!i615[20]
  i614.CopyVertical = !!i615[21]
  return i614
}

Deserializers["Point"] = function (request, data, root) {
  var i616 = root || request.c( 'Point' )
  var i617 = data
  return i616
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i618 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i619 = data
  i618.m_hasFontAssetChanged = !!i619[0]
  request.r(i619[1], i619[2], 0, i618, 'm_baseMaterial')
  i618.m_maskOffset = new pc.Vec4( i619[3], i619[4], i619[5], i619[6] )
  i618.m_text = i619[7]
  i618.m_isRightToLeft = !!i619[8]
  request.r(i619[9], i619[10], 0, i618, 'm_fontAsset')
  request.r(i619[11], i619[12], 0, i618, 'm_sharedMaterial')
  var i621 = i619[13]
  var i620 = []
  for(var i = 0; i < i621.length; i += 2) {
  request.r(i621[i + 0], i621[i + 1], 2, i620, '')
  }
  i618.m_fontSharedMaterials = i620
  request.r(i619[14], i619[15], 0, i618, 'm_fontMaterial')
  var i623 = i619[16]
  var i622 = []
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 2, i622, '')
  }
  i618.m_fontMaterials = i622
  i618.m_fontColor32 = UnityEngine.Color32.ConstructColor(i619[17], i619[18], i619[19], i619[20])
  i618.m_fontColor = new pc.Color(i619[21], i619[22], i619[23], i619[24])
  i618.m_enableVertexGradient = !!i619[25]
  i618.m_colorMode = i619[26]
  i618.m_fontColorGradient = request.d('TMPro.VertexGradient', i619[27], i618.m_fontColorGradient)
  request.r(i619[28], i619[29], 0, i618, 'm_fontColorGradientPreset')
  request.r(i619[30], i619[31], 0, i618, 'm_spriteAsset')
  i618.m_tintAllSprites = !!i619[32]
  request.r(i619[33], i619[34], 0, i618, 'm_StyleSheet')
  i618.m_TextStyleHashCode = i619[35]
  i618.m_overrideHtmlColors = !!i619[36]
  i618.m_faceColor = UnityEngine.Color32.ConstructColor(i619[37], i619[38], i619[39], i619[40])
  i618.m_fontSize = i619[41]
  i618.m_fontSizeBase = i619[42]
  i618.m_fontWeight = i619[43]
  i618.m_enableAutoSizing = !!i619[44]
  i618.m_fontSizeMin = i619[45]
  i618.m_fontSizeMax = i619[46]
  i618.m_fontStyle = i619[47]
  i618.m_HorizontalAlignment = i619[48]
  i618.m_VerticalAlignment = i619[49]
  i618.m_textAlignment = i619[50]
  i618.m_characterSpacing = i619[51]
  i618.m_wordSpacing = i619[52]
  i618.m_lineSpacing = i619[53]
  i618.m_lineSpacingMax = i619[54]
  i618.m_paragraphSpacing = i619[55]
  i618.m_charWidthMaxAdj = i619[56]
  i618.m_enableWordWrapping = !!i619[57]
  i618.m_wordWrappingRatios = i619[58]
  i618.m_overflowMode = i619[59]
  request.r(i619[60], i619[61], 0, i618, 'm_linkedTextComponent')
  request.r(i619[62], i619[63], 0, i618, 'parentLinkedComponent')
  i618.m_enableKerning = !!i619[64]
  i618.m_enableExtraPadding = !!i619[65]
  i618.checkPaddingRequired = !!i619[66]
  i618.m_isRichText = !!i619[67]
  i618.m_parseCtrlCharacters = !!i619[68]
  i618.m_isOrthographic = !!i619[69]
  i618.m_isCullingEnabled = !!i619[70]
  i618.m_horizontalMapping = i619[71]
  i618.m_verticalMapping = i619[72]
  i618.m_uvLineOffset = i619[73]
  i618.m_geometrySortingOrder = i619[74]
  i618.m_IsTextObjectScaleStatic = !!i619[75]
  i618.m_VertexBufferAutoSizeReduction = !!i619[76]
  i618.m_useMaxVisibleDescender = !!i619[77]
  i618.m_pageToDisplay = i619[78]
  i618.m_margin = new pc.Vec4( i619[79], i619[80], i619[81], i619[82] )
  i618.m_isUsingLegacyAnimationComponent = !!i619[83]
  i618.m_isVolumetricText = !!i619[84]
  request.r(i619[85], i619[86], 0, i618, 'm_Material')
  i618.m_Maskable = !!i619[87]
  i618.m_Color = new pc.Color(i619[88], i619[89], i619[90], i619[91])
  i618.m_RaycastTarget = !!i619[92]
  i618.m_RaycastPadding = new pc.Vec4( i619[93], i619[94], i619[95], i619[96] )
  return i618
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i626 = root || request.c( 'TMPro.VertexGradient' )
  var i627 = data
  i626.topLeft = new pc.Color(i627[0], i627[1], i627[2], i627[3])
  i626.topRight = new pc.Color(i627[4], i627[5], i627[6], i627[7])
  i626.bottomLeft = new pc.Color(i627[8], i627[9], i627[10], i627[11])
  i626.bottomRight = new pc.Color(i627[12], i627[13], i627[14], i627[15])
  return i626
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.Slider' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'm_FillRect')
  request.r(i629[2], i629[3], 0, i628, 'm_HandleRect')
  i628.m_Direction = i629[4]
  i628.m_MinValue = i629[5]
  i628.m_MaxValue = i629[6]
  i628.m_WholeNumbers = !!i629[7]
  i628.m_Value = i629[8]
  i628.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i629[9], i628.m_OnValueChanged)
  i628.m_Navigation = request.d('UnityEngine.UI.Navigation', i629[10], i628.m_Navigation)
  i628.m_Transition = i629[11]
  i628.m_Colors = request.d('UnityEngine.UI.ColorBlock', i629[12], i628.m_Colors)
  i628.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i629[13], i628.m_SpriteState)
  i628.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i629[14], i628.m_AnimationTriggers)
  i628.m_Interactable = !!i629[15]
  request.r(i629[16], i629[17], 0, i628, 'm_TargetGraphic')
  return i628
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i631 = data
  i630.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i631[0], i630.m_PersistentCalls)
  return i630
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i633 = data
  var i635 = i633[0]
  var i634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i635.length; i += 1) {
    i634.add(request.d('UnityEngine.Events.PersistentCall', i635[i + 0]));
  }
  i632.m_Calls = i634
  return i632
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'm_Target')
  i638.m_TargetAssemblyTypeName = i639[2]
  i638.m_MethodName = i639[3]
  i638.m_Mode = i639[4]
  i638.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i639[5], i638.m_Arguments)
  i638.m_CallState = i639[6]
  return i638
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i641 = data
  i640.m_Mode = i641[0]
  i640.m_WrapAround = !!i641[1]
  request.r(i641[2], i641[3], 0, i640, 'm_SelectOnUp')
  request.r(i641[4], i641[5], 0, i640, 'm_SelectOnDown')
  request.r(i641[6], i641[7], 0, i640, 'm_SelectOnLeft')
  request.r(i641[8], i641[9], 0, i640, 'm_SelectOnRight')
  return i640
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i643 = data
  i642.m_NormalColor = new pc.Color(i643[0], i643[1], i643[2], i643[3])
  i642.m_HighlightedColor = new pc.Color(i643[4], i643[5], i643[6], i643[7])
  i642.m_PressedColor = new pc.Color(i643[8], i643[9], i643[10], i643[11])
  i642.m_SelectedColor = new pc.Color(i643[12], i643[13], i643[14], i643[15])
  i642.m_DisabledColor = new pc.Color(i643[16], i643[17], i643[18], i643[19])
  i642.m_ColorMultiplier = i643[20]
  i642.m_FadeDuration = i643[21]
  return i642
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'm_HighlightedSprite')
  request.r(i645[2], i645[3], 0, i644, 'm_PressedSprite')
  request.r(i645[4], i645[5], 0, i644, 'm_SelectedSprite')
  request.r(i645[6], i645[7], 0, i644, 'm_DisabledSprite')
  return i644
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i647 = data
  i646.m_NormalTrigger = i647[0]
  i646.m_HighlightedTrigger = i647[1]
  i646.m_PressedTrigger = i647[2]
  i646.m_SelectedTrigger = i647[3]
  i646.m_DisabledTrigger = i647[4]
  return i646
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i648 = root || request.c( 'PeopleContainer' )
  var i649 = data
  var i651 = i649[0]
  var i650 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 1, i650, '')
  }
  i648.CurrentPeoples = i650
  var i653 = i649[1]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 1, i652, '')
  }
  i648._peoples = i652
  request.r(i649[2], i649[3], 0, i648, '_tutorialPeople')
  request.r(i649[4], i649[5], 0, i648, '_spawnPoint')
  request.r(i649[6], i649[7], 0, i648, '_point1')
  request.r(i649[8], i649[9], 0, i648, '_point2')
  request.r(i649[10], i649[11], 0, i648, '_endPoint')
  request.r(i649[12], i649[13], 0, i648, '_juiceConfig')
  request.r(i649[14], i649[15], 0, i648, '_tutorial')
  return i648
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i657 = data
  i656.m_HorizontalFit = i657[0]
  i656.m_VerticalFit = i657[1]
  return i656
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.Button' )
  var i659 = data
  i658.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i659[0], i658.m_OnClick)
  i658.m_Navigation = request.d('UnityEngine.UI.Navigation', i659[1], i658.m_Navigation)
  i658.m_Transition = i659[2]
  i658.m_Colors = request.d('UnityEngine.UI.ColorBlock', i659[3], i658.m_Colors)
  i658.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i659[4], i658.m_SpriteState)
  i658.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i659[5], i658.m_AnimationTriggers)
  i658.m_Interactable = !!i659[6]
  request.r(i659[7], i659[8], 0, i658, 'm_TargetGraphic')
  return i658
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i661 = data
  i660.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i661[0], i660.m_PersistentCalls)
  return i660
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'm_ObjectArgument')
  i662.m_ObjectArgumentAssemblyTypeName = i663[2]
  i662.m_IntArgument = i663[3]
  i662.m_FloatArgument = i663[4]
  i662.m_StringArgument = i663[5]
  i662.m_BoolArgument = !!i663[6]
  return i662
}

Deserializers["BackImage"] = function (request, data, root) {
  var i664 = root || request.c( 'BackImage' )
  var i665 = data
  return i664
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i666 = root || request.c( 'AheadImage' )
  var i667 = data
  return i666
}

Deserializers["Order"] = function (request, data, root) {
  var i668 = root || request.c( 'Order' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, '_juiceAnimator')
  request.r(i669[2], i669[3], 0, i668, '_cupAnimator')
  request.r(i669[4], i669[5], 0, i668, '_canvasAnimator')
  i668.CupType = i669[6]
  i668.JuiceType = i669[7]
  i668.AdditiveType1 = i669[8]
  i668.AdditiveType2 = i669[9]
  i668.IsFree = !!i669[10]
  i668.IsSpriteReady = !!i669[11]
  i668.IsCupReady = !!i669[12]
  i668.IsJuiceReady = !!i669[13]
  i668.IsPouring = !!i669[14]
  request.r(i669[15], i669[16], 0, i668, '_iceButton')
  request.r(i669[17], i669[18], 0, i668, '_grassButton')
  request.r(i669[19], i669[20], 0, i668, '_juiceBallsButton')
  request.r(i669[21], i669[22], 0, i668, '_strawButton')
  request.r(i669[23], i669[24], 0, i668, '_bigCupButton')
  request.r(i669[25], i669[26], 0, i668, '_middleCupButton')
  request.r(i669[27], i669[28], 0, i668, '_smallCupButton')
  request.r(i669[29], i669[30], 0, i668, '_appleButton')
  request.r(i669[31], i669[32], 0, i668, '_orangeButton')
  request.r(i669[33], i669[34], 0, i668, '_multifruitButton')
  request.r(i669[35], i669[36], 0, i668, '_tomatoButton')
  request.r(i669[37], i669[38], 0, i668, '_cherryButton')
  request.r(i669[39], i669[40], 0, i668, '_smallRawJuiceImage')
  request.r(i669[41], i669[42], 0, i668, '_middleRawJuiceImage')
  request.r(i669[43], i669[44], 0, i668, '_bigRawJuiceImage')
  request.r(i669[45], i669[46], 0, i668, '_smallReadyJuiceImage')
  request.r(i669[47], i669[48], 0, i668, '_middleReadyJuiceImage')
  request.r(i669[49], i669[50], 0, i668, '_bigReadyJuiceImage')
  request.r(i669[51], i669[52], 0, i668, '_backImage')
  request.r(i669[53], i669[54], 0, i668, '_aheadImage')
  request.r(i669[55], i669[56], 0, i668, '_config')
  request.r(i669[57], i669[58], 0, i668, '_takeOrderButton')
  request.r(i669[59], i669[60], 0, i668, '_peopleContainer')
  request.r(i669[61], i669[62], 0, i668, '_tutorial')
  request.r(i669[63], i669[64], 0, i668, '_bText')
  request.r(i669[65], i669[66], 0, i668, '_mText')
  request.r(i669[67], i669[68], 0, i668, '_sText')
  request.r(i669[69], i669[70], 0, i668, '_garbageButton')
  request.r(i669[71], i669[72], 0, i668, '_clickSound')
  request.r(i669[73], i669[74], 0, i668, '_juiceSound')
  return i668
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i670 = root || request.c( 'Tutorial' )
  var i671 = data
  i670.IsTutorial = !!i671[0]
  request.r(i671[1], i671[2], 0, i670, 'Finger1')
  request.r(i671[3], i671[4], 0, i670, 'Finger2')
  request.r(i671[5], i671[6], 0, i670, 'Finger3')
  request.r(i671[7], i671[8], 0, i670, 'Finger4')
  request.r(i671[9], i671[10], 0, i670, 'Finger5')
  request.r(i671[11], i671[12], 0, i670, 'BuyBigCupFinger')
  request.r(i671[13], i671[14], 0, i670, 'BuyJuiceFinger')
  request.r(i671[15], i671[16], 0, i670, 'SmallCupButton')
  request.r(i671[17], i671[18], 0, i670, 'JuiceButton')
  request.r(i671[19], i671[20], 0, i670, 'StrawButton')
  request.r(i671[21], i671[22], 0, i670, 'AdditiveButton')
  request.r(i671[23], i671[24], 0, i670, 'ReadyButton')
  var i673 = i671[25]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i670.Buttons = i672
  request.r(i671[26], i671[27], 0, i670, 'Bank')
  return i670
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i676 = root || request.c( 'SoundSwitcher' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, '_onImage')
  request.r(i677[2], i677[3], 0, i676, '_offImage')
  return i676
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'm_FirstSelected')
  i678.m_sendNavigationEvents = !!i679[2]
  i678.m_DragThreshold = i679[3]
  return i678
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i681 = data
  i680.m_HorizontalAxis = i681[0]
  i680.m_VerticalAxis = i681[1]
  i680.m_SubmitButton = i681[2]
  i680.m_CancelButton = i681[3]
  i680.m_InputActionsPerSecond = i681[4]
  i680.m_RepeatDelay = i681[5]
  i680.m_ForceModuleActive = !!i681[6]
  i680.m_SendPointerHoverToParent = !!i681[7]
  return i680
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i682 = root || request.c( 'JuiceConfig' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'EntityBigCup')
  request.r(i683[2], i683[3], 0, i682, 'TomatoBigCup')
  request.r(i683[4], i683[5], 0, i682, 'AppleBigCup')
  request.r(i683[6], i683[7], 0, i682, 'OrangeBigCup')
  request.r(i683[8], i683[9], 0, i682, 'CherryBigCup')
  request.r(i683[10], i683[11], 0, i682, 'MultifruitBigCup')
  request.r(i683[12], i683[13], 0, i682, 'TomatoBigStrawCup')
  request.r(i683[14], i683[15], 0, i682, 'MultifruitBigStrawCup')
  request.r(i683[16], i683[17], 0, i682, 'AppleBigStrawCup')
  request.r(i683[18], i683[19], 0, i682, 'OrangeBigStrawCup')
  request.r(i683[20], i683[21], 0, i682, 'CherryBigStrawCup')
  request.r(i683[22], i683[23], 0, i682, 'MultifruitBigBallsCup')
  request.r(i683[24], i683[25], 0, i682, 'TomatoBigBallsCup')
  request.r(i683[26], i683[27], 0, i682, 'AppleBigBallsCup')
  request.r(i683[28], i683[29], 0, i682, 'OrangeBigBallsCup')
  request.r(i683[30], i683[31], 0, i682, 'CherryBigBallsCup')
  request.r(i683[32], i683[33], 0, i682, 'EntityMiddleCup')
  request.r(i683[34], i683[35], 0, i682, 'TomatoMiddleCup')
  request.r(i683[36], i683[37], 0, i682, 'AppleMiddleCup')
  request.r(i683[38], i683[39], 0, i682, 'OrangeMiddleCup')
  request.r(i683[40], i683[41], 0, i682, 'CherryMiddleCup')
  request.r(i683[42], i683[43], 0, i682, 'MultifruitMiddleCup')
  request.r(i683[44], i683[45], 0, i682, 'TomatoMiddleStrawCup')
  request.r(i683[46], i683[47], 0, i682, 'MultifruitMiddleStrawCup')
  request.r(i683[48], i683[49], 0, i682, 'AppleMiddleStrawCup')
  request.r(i683[50], i683[51], 0, i682, 'OrangeMiddleStrawCup')
  request.r(i683[52], i683[53], 0, i682, 'CherryMiddleStrawCup')
  request.r(i683[54], i683[55], 0, i682, 'MultifruitMiddleBallsCup')
  request.r(i683[56], i683[57], 0, i682, 'TomatoMiddleBallsCup')
  request.r(i683[58], i683[59], 0, i682, 'AppleMiddleBallsCup')
  request.r(i683[60], i683[61], 0, i682, 'OrangeMiddleBallsCup')
  request.r(i683[62], i683[63], 0, i682, 'CherryMiddleBallsCup')
  request.r(i683[64], i683[65], 0, i682, 'EntitySmallCup')
  request.r(i683[66], i683[67], 0, i682, 'TomatoSmallCup')
  request.r(i683[68], i683[69], 0, i682, 'AppleSmallCup')
  request.r(i683[70], i683[71], 0, i682, 'OrangeSmallCup')
  request.r(i683[72], i683[73], 0, i682, 'CherrySmallCup')
  request.r(i683[74], i683[75], 0, i682, 'MultifruitSmallCup')
  request.r(i683[76], i683[77], 0, i682, 'TomatoSmallStrawCup')
  request.r(i683[78], i683[79], 0, i682, 'AppleSmallStrawCup')
  request.r(i683[80], i683[81], 0, i682, 'OrangeSmallStrawCup')
  request.r(i683[82], i683[83], 0, i682, 'CherrySmallStrawCup')
  request.r(i683[84], i683[85], 0, i682, 'MultifruitSmallStrawCup')
  request.r(i683[86], i683[87], 0, i682, 'AppleSmallBallsCup')
  request.r(i683[88], i683[89], 0, i682, 'TomatoSmallBallsCup')
  request.r(i683[90], i683[91], 0, i682, 'OrangeSmallBallsCup')
  request.r(i683[92], i683[93], 0, i682, 'CherrySmallBallsCup')
  request.r(i683[94], i683[95], 0, i682, 'MultifruitSmallBallsCup')
  request.r(i683[96], i683[97], 0, i682, 'JuiceBallAdditive')
  request.r(i683[98], i683[99], 0, i682, 'IceAdditive')
  request.r(i683[100], i683[101], 0, i682, 'GrassAdditive')
  return i682
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i684 = root || request.c( 'TouchIdleTimer' )
  var i685 = data
  return i684
}

Deserializers["Helper"] = function (request, data, root) {
  var i686 = root || request.c( 'Helper' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, '_smallCupFinger')
  request.r(i687[2], i687[3], 0, i686, '_middleCupFinger')
  request.r(i687[4], i687[5], 0, i686, '_bigCupFinger')
  request.r(i687[6], i687[7], 0, i686, '_iceFinger')
  request.r(i687[8], i687[9], 0, i686, '_grassFinger')
  request.r(i687[10], i687[11], 0, i686, '_juiceballFinger')
  request.r(i687[12], i687[13], 0, i686, '_appleFinger')
  request.r(i687[14], i687[15], 0, i686, '_cherryFinger')
  request.r(i687[16], i687[17], 0, i686, '_orangeFinger')
  request.r(i687[18], i687[19], 0, i686, '_multifruitFinger')
  request.r(i687[20], i687[21], 0, i686, '_tomatoFinger')
  request.r(i687[22], i687[23], 0, i686, '_strawFinger')
  request.r(i687[24], i687[25], 0, i686, '_readyFinger')
  request.r(i687[26], i687[27], 0, i686, '_peoples')
  request.r(i687[28], i687[29], 0, i686, '_tutorial')
  request.r(i687[30], i687[31], 0, i686, '_order')
  request.r(i687[32], i687[33], 0, i686, '_strawButton')
  request.r(i687[34], i687[35], 0, i686, '_bigCupButton')
  request.r(i687[36], i687[37], 0, i686, '_middleCupButton')
  request.r(i687[38], i687[39], 0, i686, '_smallCupButton')
  request.r(i687[40], i687[41], 0, i686, '_readyButton')
  request.r(i687[42], i687[43], 0, i686, '_touchIdleTimer')
  request.r(i687[44], i687[45], 0, i686, '_finalScreen')
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i689 = data
  i688.ambientIntensity = i689[0]
  i688.reflectionIntensity = i689[1]
  i688.ambientMode = i689[2]
  i688.ambientLight = new pc.Color(i689[3], i689[4], i689[5], i689[6])
  i688.ambientSkyColor = new pc.Color(i689[7], i689[8], i689[9], i689[10])
  i688.ambientGroundColor = new pc.Color(i689[11], i689[12], i689[13], i689[14])
  i688.ambientEquatorColor = new pc.Color(i689[15], i689[16], i689[17], i689[18])
  i688.fogColor = new pc.Color(i689[19], i689[20], i689[21], i689[22])
  i688.fogEndDistance = i689[23]
  i688.fogStartDistance = i689[24]
  i688.fogDensity = i689[25]
  i688.fog = !!i689[26]
  request.r(i689[27], i689[28], 0, i688, 'skybox')
  i688.fogMode = i689[29]
  var i691 = i689[30]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i691[i + 0]) );
  }
  i688.lightmaps = i690
  i688.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i689[31], i688.lightProbes)
  i688.lightmapsMode = i689[32]
  i688.mixedBakeMode = i689[33]
  i688.environmentLightingMode = i689[34]
  i688.ambientProbe = new pc.SphericalHarmonicsL2(i689[35])
  i688.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i689[36])
  i688.useReferenceAmbientProbe = !!i689[37]
  request.r(i689[38], i689[39], 0, i688, 'customReflection')
  request.r(i689[40], i689[41], 0, i688, 'defaultReflection')
  i688.defaultReflectionMode = i689[42]
  i688.defaultReflectionResolution = i689[43]
  i688.sunLightObjectId = i689[44]
  i688.pixelLightCount = i689[45]
  i688.defaultReflectionHDR = !!i689[46]
  i688.hasLightDataAsset = !!i689[47]
  i688.hasManualGenerate = !!i689[48]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'lightmapColor')
  request.r(i695[2], i695[3], 0, i694, 'lightmapDirection')
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i696 = root || new UnityEngine.LightProbes()
  var i697 = data
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i705 = data
  var i707 = i705[0]
  var i706 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i707.length; i += 1) {
    i706.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i707[i + 0]));
  }
  i704.ShaderCompilationErrors = i706
  i704.name = i705[1]
  i704.guid = i705[2]
  var i709 = i705[3]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( i709[i + 0] );
  }
  i704.shaderDefinedKeywords = i708
  var i711 = i705[4]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i711[i + 0]) );
  }
  i704.passes = i710
  var i713 = i705[5]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i713[i + 0]) );
  }
  i704.usePasses = i712
  var i715 = i705[6]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i715[i + 0]) );
  }
  i704.defaultParameterValues = i714
  request.r(i705[7], i705[8], 0, i704, 'unityFallbackShader')
  i704.readDepth = !!i705[9]
  i704.isCreatedByShaderGraph = !!i705[10]
  i704.compiled = !!i705[11]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i719 = data
  i718.shaderName = i719[0]
  i718.errorMessage = i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i724 = root || new pc.UnityShaderPass()
  var i725 = data
  i724.id = i725[0]
  i724.subShaderIndex = i725[1]
  i724.name = i725[2]
  i724.passType = i725[3]
  i724.grabPassTextureName = i725[4]
  i724.usePass = !!i725[5]
  i724.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[6], i724.zTest)
  i724.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[7], i724.zWrite)
  i724.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[8], i724.culling)
  i724.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i725[9], i724.blending)
  i724.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i725[10], i724.alphaBlending)
  i724.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[11], i724.colorWriteMask)
  i724.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[12], i724.offsetUnits)
  i724.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[13], i724.offsetFactor)
  i724.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[14], i724.stencilRef)
  i724.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[15], i724.stencilReadMask)
  i724.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i725[16], i724.stencilWriteMask)
  i724.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i725[17], i724.stencilOp)
  i724.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i725[18], i724.stencilOpFront)
  i724.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i725[19], i724.stencilOpBack)
  var i727 = i725[20]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i727[i + 0]) );
  }
  i724.tags = i726
  var i729 = i725[21]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( i729[i + 0] );
  }
  i724.passDefinedKeywords = i728
  var i731 = i725[22]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i731[i + 0]) );
  }
  i724.passDefinedKeywordGroups = i730
  var i733 = i725[23]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i733[i + 0]) );
  }
  i724.variants = i732
  var i735 = i725[24]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i735[i + 0]) );
  }
  i724.excludedVariants = i734
  i724.hasDepthReader = !!i725[25]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i737 = data
  i736.val = i737[0]
  i736.name = i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i739 = data
  i738.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i739[0], i738.src)
  i738.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i739[1], i738.dst)
  i738.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i739[2], i738.op)
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i741 = data
  i740.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[0], i740.pass)
  i740.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[1], i740.fail)
  i740.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[2], i740.zFail)
  i740.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[3], i740.comp)
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i745 = data
  i744.name = i745[0]
  i744.value = i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i749 = data
  var i751 = i749[0]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( i751[i + 0] );
  }
  i748.keywords = i750
  i748.hasDiscard = !!i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i755 = data
  i754.passId = i755[0]
  i754.subShaderIndex = i755[1]
  var i757 = i755[2]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( i757[i + 0] );
  }
  i754.keywords = i756
  i754.vertexProgram = i755[3]
  i754.fragmentProgram = i755[4]
  i754.exportedForWebGl2 = !!i755[5]
  i754.readDepth = !!i755[6]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'shader')
  i760.pass = i761[2]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i765 = data
  i764.name = i765[0]
  i764.type = i765[1]
  i764.value = new pc.Vec4( i765[2], i765[3], i765[4], i765[5] )
  i764.textureValue = i765[6]
  i764.shaderPropertyFlag = i765[7]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i767 = data
  i766.name = i767[0]
  request.r(i767[1], i767[2], 0, i766, 'texture')
  i766.aabb = i767[3]
  i766.vertices = i767[4]
  i766.triangles = i767[5]
  i766.textureRect = UnityEngine.Rect.MinMaxRect(i767[6], i767[7], i767[8], i767[9])
  i766.packedRect = UnityEngine.Rect.MinMaxRect(i767[10], i767[11], i767[12], i767[13])
  i766.border = new pc.Vec4( i767[14], i767[15], i767[16], i767[17] )
  i766.transparency = i767[18]
  i766.bounds = i767[19]
  i766.pixelsPerUnit = i767[20]
  i766.textureWidth = i767[21]
  i766.textureHeight = i767[22]
  i766.nativeSize = new pc.Vec2( i767[23], i767[24] )
  i766.pivot = new pc.Vec2( i767[25], i767[26] )
  i766.textureRectOffset = new pc.Vec2( i767[27], i767[28] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i769 = data
  i768.name = i769[0]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i771 = data
  i770.name = i771[0]
  i770.wrapMode = i771[1]
  i770.isLooping = !!i771[2]
  i770.length = i771[3]
  var i773 = i771[4]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i773[i + 0]) );
  }
  i770.curves = i772
  var i775 = i771[5]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i775[i + 0]) );
  }
  i770.events = i774
  i770.halfPrecision = !!i771[6]
  i770._frameRate = i771[7]
  i770.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i771[8], i770.localBounds)
  i770.hasMuscleCurves = !!i771[9]
  var i777 = i771[10]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i770.clipMuscleConstant = i776
  i770.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i771[11], i770.clipBindingConstant)
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i781 = data
  i780.path = i781[0]
  i780.hash = i781[1]
  i780.componentType = i781[2]
  i780.property = i781[3]
  i780.keys = i781[4]
  var i783 = i781[5]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i783[i + 0]) );
  }
  i780.objectReferenceKeys = i782
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i787 = data
  i786.time = i787[0]
  request.r(i787[1], i787[2], 0, i786, 'value')
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i791 = data
  i790.functionName = i791[0]
  i790.floatParameter = i791[1]
  i790.intParameter = i791[2]
  i790.stringParameter = i791[3]
  request.r(i791[4], i791[5], 0, i790, 'objectReferenceParameter')
  i790.time = i791[6]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i793 = data
  i792.center = new pc.Vec3( i793[0], i793[1], i793[2] )
  i792.extends = new pc.Vec3( i793[3], i793[4], i793[5] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i797 = data
  var i799 = i797[0]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( i799[i + 0] );
  }
  i796.genericBindings = i798
  var i801 = i797[1]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( i801[i + 0] );
  }
  i796.pptrCurveMapping = i800
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i803 = data
  i802.name = i803[0]
  i802.ascent = i803[1]
  i802.originalLineHeight = i803[2]
  i802.fontSize = i803[3]
  var i805 = i803[4]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i805[i + 0]) );
  }
  i802.characterInfo = i804
  request.r(i803[5], i803[6], 0, i802, 'texture')
  i802.originalFontSize = i803[7]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i809 = data
  i808.index = i809[0]
  i808.advance = i809[1]
  i808.bearing = i809[2]
  i808.glyphWidth = i809[3]
  i808.glyphHeight = i809[4]
  i808.minX = i809[5]
  i808.maxX = i809[6]
  i808.minY = i809[7]
  i808.maxY = i809[8]
  i808.uvBottomLeftX = i809[9]
  i808.uvBottomLeftY = i809[10]
  i808.uvBottomRightX = i809[11]
  i808.uvBottomRightY = i809[12]
  i808.uvTopLeftX = i809[13]
  i808.uvTopLeftY = i809[14]
  i808.uvTopRightX = i809[15]
  i808.uvTopRightY = i809[16]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i811 = data
  i810.name = i811[0]
  var i813 = i811[1]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i813[i + 0]) );
  }
  i810.layers = i812
  var i815 = i811[2]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i815[i + 0]) );
  }
  i810.parameters = i814
  i810.animationClips = i811[3]
  i810.avatarUnsupported = i811[4]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i819 = data
  i818.name = i819[0]
  i818.defaultWeight = i819[1]
  i818.blendingMode = i819[2]
  i818.avatarMask = i819[3]
  i818.syncedLayerIndex = i819[4]
  i818.syncedLayerAffectsTiming = !!i819[5]
  i818.syncedLayers = i819[6]
  i818.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i819[7], i818.stateMachine)
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i821 = data
  i820.id = i821[0]
  i820.name = i821[1]
  i820.path = i821[2]
  var i823 = i821[3]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i823[i + 0]) );
  }
  i820.states = i822
  var i825 = i821[4]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i825[i + 0]) );
  }
  i820.machines = i824
  var i827 = i821[5]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i827[i + 0]) );
  }
  i820.entryStateTransitions = i826
  var i829 = i821[6]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i829[i + 0]) );
  }
  i820.exitStateTransitions = i828
  var i831 = i821[7]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i831[i + 0]) );
  }
  i820.anyStateTransitions = i830
  i820.defaultStateId = i821[8]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i835 = data
  i834.id = i835[0]
  i834.name = i835[1]
  i834.cycleOffset = i835[2]
  i834.cycleOffsetParameter = i835[3]
  i834.cycleOffsetParameterActive = !!i835[4]
  i834.mirror = !!i835[5]
  i834.mirrorParameter = i835[6]
  i834.mirrorParameterActive = !!i835[7]
  i834.motionId = i835[8]
  i834.nameHash = i835[9]
  i834.fullPathHash = i835[10]
  i834.speed = i835[11]
  i834.speedParameter = i835[12]
  i834.speedParameterActive = !!i835[13]
  i834.tag = i835[14]
  i834.tagHash = i835[15]
  i834.writeDefaultValues = !!i835[16]
  var i837 = i835[17]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.behaviours = i836
  var i839 = i835[18]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i839[i + 0]) );
  }
  i834.transitions = i838
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i845 = data
  i844.fullPath = i845[0]
  i844.canTransitionToSelf = !!i845[1]
  i844.duration = i845[2]
  i844.exitTime = i845[3]
  i844.hasExitTime = !!i845[4]
  i844.hasFixedDuration = !!i845[5]
  i844.interruptionSource = i845[6]
  i844.offset = i845[7]
  i844.orderedInterruption = !!i845[8]
  i844.destinationStateId = i845[9]
  i844.isExit = !!i845[10]
  i844.mute = !!i845[11]
  i844.solo = !!i845[12]
  var i847 = i845[13]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i847[i + 0]) );
  }
  i844.conditions = i846
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i853 = data
  i852.destinationStateId = i853[0]
  i852.isExit = !!i853[1]
  i852.mute = !!i853[2]
  i852.solo = !!i853[3]
  var i855 = i853[4]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i855[i + 0]) );
  }
  i852.conditions = i854
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i859 = data
  i858.mode = i859[0]
  i858.parameter = i859[1]
  i858.threshold = i859[2]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i863 = data
  i862.defaultBool = !!i863[0]
  i862.defaultFloat = i863[1]
  i862.defaultInt = i863[2]
  i862.name = i863[3]
  i862.nameHash = i863[4]
  i862.type = i863[5]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i865 = data
  i864.name = i865[0]
  i864.bytes64 = i865[1]
  i864.data = i865[2]
  return i864
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i867 = data
  i866.hashCode = i867[0]
  request.r(i867[1], i867[2], 0, i866, 'material')
  i866.materialHashCode = i867[3]
  request.r(i867[4], i867[5], 0, i866, 'atlas')
  i866.normalStyle = i867[6]
  i866.normalSpacingOffset = i867[7]
  i866.boldStyle = i867[8]
  i866.boldSpacing = i867[9]
  i866.italicStyle = i867[10]
  i866.tabSize = i867[11]
  i866.m_Version = i867[12]
  i866.m_SourceFontFileGUID = i867[13]
  request.r(i867[14], i867[15], 0, i866, 'm_SourceFontFile_EditorRef')
  request.r(i867[16], i867[17], 0, i866, 'm_SourceFontFile')
  i866.m_AtlasPopulationMode = i867[18]
  i866.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i867[19], i866.m_FaceInfo)
  var i869 = i867[20]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i869.length; i += 1) {
    i868.add(request.d('UnityEngine.TextCore.Glyph', i869[i + 0]));
  }
  i866.m_GlyphTable = i868
  var i871 = i867[21]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(request.d('TMPro.TMP_Character', i871[i + 0]));
  }
  i866.m_CharacterTable = i870
  var i873 = i867[22]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i866.m_AtlasTextures = i872
  i866.m_AtlasTextureIndex = i867[23]
  i866.m_IsMultiAtlasTexturesEnabled = !!i867[24]
  i866.m_ClearDynamicDataOnBuild = !!i867[25]
  var i875 = i867[26]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i875.length; i += 1) {
    i874.add(request.d('UnityEngine.TextCore.GlyphRect', i875[i + 0]));
  }
  i866.m_UsedGlyphRects = i874
  var i877 = i867[27]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i877.length; i += 1) {
    i876.add(request.d('UnityEngine.TextCore.GlyphRect', i877[i + 0]));
  }
  i866.m_FreeGlyphRects = i876
  i866.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i867[28], i866.m_fontInfo)
  i866.m_AtlasWidth = i867[29]
  i866.m_AtlasHeight = i867[30]
  i866.m_AtlasPadding = i867[31]
  i866.m_AtlasRenderMode = i867[32]
  var i879 = i867[33]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i879.length; i += 1) {
    i878.add(request.d('TMPro.TMP_Glyph', i879[i + 0]));
  }
  i866.m_glyphInfoList = i878
  i866.m_KerningTable = request.d('TMPro.KerningTable', i867[34], i866.m_KerningTable)
  i866.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i867[35], i866.m_FontFeatureTable)
  var i881 = i867[36]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 1, i880, '')
  }
  i866.fallbackFontAssets = i880
  var i883 = i867[37]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 1, i882, '')
  }
  i866.m_FallbackFontAssetTable = i882
  i866.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i867[38], i866.m_CreationSettings)
  var i885 = i867[39]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('TMPro.TMP_FontWeightPair', i885[i + 0]) );
  }
  i866.m_FontWeightTable = i884
  var i887 = i867[40]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('TMPro.TMP_FontWeightPair', i887[i + 0]) );
  }
  i866.fontWeights = i886
  return i866
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i889 = data
  i888.m_FaceIndex = i889[0]
  i888.m_FamilyName = i889[1]
  i888.m_StyleName = i889[2]
  i888.m_PointSize = i889[3]
  i888.m_Scale = i889[4]
  i888.m_UnitsPerEM = i889[5]
  i888.m_LineHeight = i889[6]
  i888.m_AscentLine = i889[7]
  i888.m_CapLine = i889[8]
  i888.m_MeanLine = i889[9]
  i888.m_Baseline = i889[10]
  i888.m_DescentLine = i889[11]
  i888.m_SuperscriptOffset = i889[12]
  i888.m_SuperscriptSize = i889[13]
  i888.m_SubscriptOffset = i889[14]
  i888.m_SubscriptSize = i889[15]
  i888.m_UnderlineOffset = i889[16]
  i888.m_UnderlineThickness = i889[17]
  i888.m_StrikethroughOffset = i889[18]
  i888.m_StrikethroughThickness = i889[19]
  i888.m_TabWidth = i889[20]
  return i888
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i893 = data
  i892.m_Index = i893[0]
  i892.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i893[1], i892.m_Metrics)
  i892.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i893[2], i892.m_GlyphRect)
  i892.m_Scale = i893[3]
  i892.m_AtlasIndex = i893[4]
  i892.m_ClassDefinitionType = i893[5]
  return i892
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i895 = data
  i894.m_Width = i895[0]
  i894.m_Height = i895[1]
  i894.m_HorizontalBearingX = i895[2]
  i894.m_HorizontalBearingY = i895[3]
  i894.m_HorizontalAdvance = i895[4]
  return i894
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i897 = data
  i896.m_X = i897[0]
  i896.m_Y = i897[1]
  i896.m_Width = i897[2]
  i896.m_Height = i897[3]
  return i896
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i900 = root || request.c( 'TMPro.TMP_Character' )
  var i901 = data
  i900.m_ElementType = i901[0]
  i900.m_Unicode = i901[1]
  i900.m_GlyphIndex = i901[2]
  i900.m_Scale = i901[3]
  return i900
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i906 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i907 = data
  i906.Name = i907[0]
  i906.PointSize = i907[1]
  i906.Scale = i907[2]
  i906.CharacterCount = i907[3]
  i906.LineHeight = i907[4]
  i906.Baseline = i907[5]
  i906.Ascender = i907[6]
  i906.CapHeight = i907[7]
  i906.Descender = i907[8]
  i906.CenterLine = i907[9]
  i906.SuperscriptOffset = i907[10]
  i906.SubscriptOffset = i907[11]
  i906.SubSize = i907[12]
  i906.Underline = i907[13]
  i906.UnderlineThickness = i907[14]
  i906.strikethrough = i907[15]
  i906.strikethroughThickness = i907[16]
  i906.TabWidth = i907[17]
  i906.Padding = i907[18]
  i906.AtlasWidth = i907[19]
  i906.AtlasHeight = i907[20]
  return i906
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.TMP_Glyph' )
  var i911 = data
  i910.id = i911[0]
  i910.x = i911[1]
  i910.y = i911[2]
  i910.width = i911[3]
  i910.height = i911[4]
  i910.xOffset = i911[5]
  i910.yOffset = i911[6]
  i910.xAdvance = i911[7]
  i910.scale = i911[8]
  return i910
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.KerningTable' )
  var i913 = data
  var i915 = i913[0]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i915.length; i += 1) {
    i914.add(request.d('TMPro.KerningPair', i915[i + 0]));
  }
  i912.kerningPairs = i914
  return i912
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i918 = root || request.c( 'TMPro.KerningPair' )
  var i919 = data
  i918.xOffset = i919[0]
  i918.m_FirstGlyph = i919[1]
  i918.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i919[2], i918.m_FirstGlyphAdjustments)
  i918.m_SecondGlyph = i919[3]
  i918.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i919[4], i918.m_SecondGlyphAdjustments)
  i918.m_IgnoreSpacingAdjustments = !!i919[5]
  return i918
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i921 = data
  var i923 = i921[0]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i923[i + 0]));
  }
  i920.m_GlyphPairAdjustmentRecords = i922
  return i920
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i927 = data
  i926.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i927[0], i926.m_FirstAdjustmentRecord)
  i926.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i927[1], i926.m_SecondAdjustmentRecord)
  i926.m_FeatureLookupFlags = i927[2]
  return i926
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i928 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i929 = data
  i928.m_GlyphIndex = i929[0]
  i928.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i929[1], i928.m_GlyphValueRecord)
  return i928
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i931 = data
  i930.m_XPlacement = i931[0]
  i930.m_YPlacement = i931[1]
  i930.m_XAdvance = i931[2]
  i930.m_YAdvance = i931[3]
  return i930
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i935 = data
  i934.sourceFontFileName = i935[0]
  i934.sourceFontFileGUID = i935[1]
  i934.pointSizeSamplingMode = i935[2]
  i934.pointSize = i935[3]
  i934.padding = i935[4]
  i934.packingMode = i935[5]
  i934.atlasWidth = i935[6]
  i934.atlasHeight = i935[7]
  i934.characterSetSelectionMode = i935[8]
  i934.characterSequence = i935[9]
  i934.referencedFontAssetGUID = i935[10]
  i934.referencedTextAssetGUID = i935[11]
  i934.fontStyle = i935[12]
  i934.fontStyleModifier = i935[13]
  i934.renderMode = i935[14]
  i934.includeFontFeatures = !!i935[15]
  return i934
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'regularTypeface')
  request.r(i939[2], i939[3], 0, i938, 'italicTypeface')
  return i938
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i940 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i941 = data
  i940.useSafeMode = !!i941[0]
  i940.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i941[1], i940.safeModeOptions)
  i940.timeScale = i941[2]
  i940.unscaledTimeScale = i941[3]
  i940.useSmoothDeltaTime = !!i941[4]
  i940.maxSmoothUnscaledTime = i941[5]
  i940.rewindCallbackMode = i941[6]
  i940.showUnityEditorReport = !!i941[7]
  i940.logBehaviour = i941[8]
  i940.drawGizmos = !!i941[9]
  i940.defaultRecyclable = !!i941[10]
  i940.defaultAutoPlay = i941[11]
  i940.defaultUpdateType = i941[12]
  i940.defaultTimeScaleIndependent = !!i941[13]
  i940.defaultEaseType = i941[14]
  i940.defaultEaseOvershootOrAmplitude = i941[15]
  i940.defaultEasePeriod = i941[16]
  i940.defaultAutoKill = !!i941[17]
  i940.defaultLoopType = i941[18]
  i940.debugMode = !!i941[19]
  i940.debugStoreTargetId = !!i941[20]
  i940.showPreviewPanel = !!i941[21]
  i940.storeSettingsLocation = i941[22]
  i940.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i941[23], i940.modules)
  i940.createASMDEF = !!i941[24]
  i940.showPlayingTweens = !!i941[25]
  i940.showPausedTweens = !!i941[26]
  return i940
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i942 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i943 = data
  i942.logBehaviour = i943[0]
  i942.nestedTweenFailureBehaviour = i943[1]
  return i942
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i944 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i945 = data
  i944.showPanel = !!i945[0]
  i944.audioEnabled = !!i945[1]
  i944.physicsEnabled = !!i945[2]
  i944.physics2DEnabled = !!i945[3]
  i944.spriteEnabled = !!i945[4]
  i944.uiEnabled = !!i945[5]
  i944.textMeshProEnabled = !!i945[6]
  i944.tk2DEnabled = !!i945[7]
  i944.deAudioEnabled = !!i945[8]
  i944.deUnityExtendedEnabled = !!i945[9]
  i944.epoOutlineEnabled = !!i945[10]
  return i944
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_Settings' )
  var i947 = data
  i946.m_enableWordWrapping = !!i947[0]
  i946.m_enableKerning = !!i947[1]
  i946.m_enableExtraPadding = !!i947[2]
  i946.m_enableTintAllSprites = !!i947[3]
  i946.m_enableParseEscapeCharacters = !!i947[4]
  i946.m_EnableRaycastTarget = !!i947[5]
  i946.m_GetFontFeaturesAtRuntime = !!i947[6]
  i946.m_missingGlyphCharacter = i947[7]
  i946.m_warningsDisabled = !!i947[8]
  request.r(i947[9], i947[10], 0, i946, 'm_defaultFontAsset')
  i946.m_defaultFontAssetPath = i947[11]
  i946.m_defaultFontSize = i947[12]
  i946.m_defaultAutoSizeMinRatio = i947[13]
  i946.m_defaultAutoSizeMaxRatio = i947[14]
  i946.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i947[15], i947[16] )
  i946.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i947[17], i947[18] )
  i946.m_autoSizeTextContainer = !!i947[19]
  i946.m_IsTextObjectScaleStatic = !!i947[20]
  var i949 = i947[21]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 1, i948, '')
  }
  i946.m_fallbackFontAssets = i948
  i946.m_matchMaterialPreset = !!i947[22]
  request.r(i947[23], i947[24], 0, i946, 'm_defaultSpriteAsset')
  i946.m_defaultSpriteAssetPath = i947[25]
  i946.m_enableEmojiSupport = !!i947[26]
  i946.m_MissingCharacterSpriteUnicode = i947[27]
  i946.m_defaultColorGradientPresetsPath = i947[28]
  request.r(i947[29], i947[30], 0, i946, 'm_defaultStyleSheet')
  i946.m_StyleSheetsResourcePath = i947[31]
  request.r(i947[32], i947[33], 0, i946, 'm_leadingCharacters')
  request.r(i947[34], i947[35], 0, i946, 'm_followingCharacters')
  i946.m_UseModernHangulLineBreakingRules = !!i947[36]
  return i946
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i951 = data
  i950.hashCode = i951[0]
  request.r(i951[1], i951[2], 0, i950, 'material')
  i950.materialHashCode = i951[3]
  request.r(i951[4], i951[5], 0, i950, 'spriteSheet')
  var i953 = i951[6]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('TMPro.TMP_Sprite', i953[i + 0]));
  }
  i950.spriteInfoList = i952
  var i955 = i951[7]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 1, i954, '')
  }
  i950.fallbackSpriteAssets = i954
  i950.m_Version = i951[8]
  i950.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i951[9], i950.m_FaceInfo)
  var i957 = i951[10]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('TMPro.TMP_SpriteCharacter', i957[i + 0]));
  }
  i950.m_SpriteCharacterTable = i956
  var i959 = i951[11]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i959.length; i += 1) {
    i958.add(request.d('TMPro.TMP_SpriteGlyph', i959[i + 0]));
  }
  i950.m_SpriteGlyphTable = i958
  return i950
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.TMP_Sprite' )
  var i963 = data
  i962.name = i963[0]
  i962.hashCode = i963[1]
  i962.unicode = i963[2]
  i962.pivot = new pc.Vec2( i963[3], i963[4] )
  request.r(i963[5], i963[6], 0, i962, 'sprite')
  i962.id = i963[7]
  i962.x = i963[8]
  i962.y = i963[9]
  i962.width = i963[10]
  i962.height = i963[11]
  i962.xOffset = i963[12]
  i962.yOffset = i963[13]
  i962.xAdvance = i963[14]
  i962.scale = i963[15]
  return i962
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i969 = data
  i968.m_Name = i969[0]
  i968.m_HashCode = i969[1]
  i968.m_ElementType = i969[2]
  i968.m_Unicode = i969[3]
  i968.m_GlyphIndex = i969[4]
  i968.m_Scale = i969[5]
  return i968
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'sprite')
  i972.m_Index = i973[2]
  i972.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i973[3], i972.m_Metrics)
  i972.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i973[4], i972.m_GlyphRect)
  i972.m_Scale = i973[5]
  i972.m_AtlasIndex = i973[6]
  i972.m_ClassDefinitionType = i973[7]
  return i972
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i975 = data
  var i977 = i975[0]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i977.length; i += 1) {
    i976.add(request.d('TMPro.TMP_Style', i977[i + 0]));
  }
  i974.m_StyleList = i976
  return i974
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.TMP_Style' )
  var i981 = data
  i980.m_Name = i981[0]
  i980.m_HashCode = i981[1]
  i980.m_OpeningDefinition = i981[2]
  i980.m_ClosingDefinition = i981[3]
  i980.m_OpeningTagArray = i981[4]
  i980.m_ClosingTagArray = i981[5]
  i980.m_OpeningTagUnicodeArray = i981[6]
  i980.m_ClosingTagUnicodeArray = i981[7]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i983 = data
  var i985 = i983[0]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i985[i + 0]) );
  }
  i982.files = i984
  i982.componentToPrefabIds = i983[1]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i989 = data
  i988.path = i989[0]
  request.r(i989[1], i989[2], 0, i988, 'unityObject')
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i991 = data
  var i993 = i991[0]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i993[i + 0]) );
  }
  i990.scriptsExecutionOrder = i992
  var i995 = i991[1]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i995[i + 0]) );
  }
  i990.sortingLayers = i994
  var i997 = i991[2]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i997[i + 0]) );
  }
  i990.cullingLayers = i996
  i990.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i991[3], i990.timeSettings)
  i990.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i991[4], i990.physicsSettings)
  i990.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i991[5], i990.physics2DSettings)
  i990.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i991[6], i990.qualitySettings)
  i990.enableRealtimeShadows = !!i991[7]
  i990.enableAutoInstancing = !!i991[8]
  i990.enableDynamicBatching = !!i991[9]
  i990.lightmapEncodingQuality = i991[10]
  i990.desiredColorSpace = i991[11]
  var i999 = i991[12]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( i999[i + 0] );
  }
  i990.allTags = i998
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.value = i1003[1]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1007 = data
  i1006.id = i1007[0]
  i1006.name = i1007[1]
  i1006.value = i1007[2]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1011 = data
  i1010.id = i1011[0]
  i1010.name = i1011[1]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1013 = data
  i1012.fixedDeltaTime = i1013[0]
  i1012.maximumDeltaTime = i1013[1]
  i1012.timeScale = i1013[2]
  i1012.maximumParticleTimestep = i1013[3]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1015 = data
  i1014.gravity = new pc.Vec3( i1015[0], i1015[1], i1015[2] )
  i1014.defaultSolverIterations = i1015[3]
  i1014.bounceThreshold = i1015[4]
  i1014.autoSyncTransforms = !!i1015[5]
  i1014.autoSimulation = !!i1015[6]
  var i1017 = i1015[7]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1017[i + 0]) );
  }
  i1014.collisionMatrix = i1016
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1021 = data
  i1020.enabled = !!i1021[0]
  i1020.layerId = i1021[1]
  i1020.otherLayerId = i1021[2]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'material')
  i1022.gravity = new pc.Vec2( i1023[2], i1023[3] )
  i1022.positionIterations = i1023[4]
  i1022.velocityIterations = i1023[5]
  i1022.velocityThreshold = i1023[6]
  i1022.maxLinearCorrection = i1023[7]
  i1022.maxAngularCorrection = i1023[8]
  i1022.maxTranslationSpeed = i1023[9]
  i1022.maxRotationSpeed = i1023[10]
  i1022.baumgarteScale = i1023[11]
  i1022.baumgarteTOIScale = i1023[12]
  i1022.timeToSleep = i1023[13]
  i1022.linearSleepTolerance = i1023[14]
  i1022.angularSleepTolerance = i1023[15]
  i1022.defaultContactOffset = i1023[16]
  i1022.autoSimulation = !!i1023[17]
  i1022.queriesHitTriggers = !!i1023[18]
  i1022.queriesStartInColliders = !!i1023[19]
  i1022.callbacksOnDisable = !!i1023[20]
  i1022.reuseCollisionCallbacks = !!i1023[21]
  i1022.autoSyncTransforms = !!i1023[22]
  var i1025 = i1023[23]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1025[i + 0]) );
  }
  i1022.collisionMatrix = i1024
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1029 = data
  i1028.enabled = !!i1029[0]
  i1028.layerId = i1029[1]
  i1028.otherLayerId = i1029[2]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1033[i + 0]) );
  }
  i1030.qualityLevels = i1032
  var i1035 = i1031[1]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1030.names = i1034
  i1030.shadows = i1031[2]
  i1030.anisotropicFiltering = i1031[3]
  i1030.antiAliasing = i1031[4]
  i1030.lodBias = i1031[5]
  i1030.shadowCascades = i1031[6]
  i1030.shadowDistance = i1031[7]
  i1030.shadowmaskMode = i1031[8]
  i1030.shadowProjection = i1031[9]
  i1030.shadowResolution = i1031[10]
  i1030.softParticles = !!i1031[11]
  i1030.softVegetation = !!i1031[12]
  i1030.activeColorSpace = i1031[13]
  i1030.desiredColorSpace = i1031[14]
  i1030.masterTextureLimit = i1031[15]
  i1030.maxQueuedFrames = i1031[16]
  i1030.particleRaycastBudget = i1031[17]
  i1030.pixelLightCount = i1031[18]
  i1030.realtimeReflectionProbes = !!i1031[19]
  i1030.shadowCascade2Split = i1031[20]
  i1030.shadowCascade4Split = new pc.Vec3( i1031[21], i1031[22], i1031[23] )
  i1030.streamingMipmapsActive = !!i1031[24]
  i1030.vSyncCount = i1031[25]
  i1030.asyncUploadBufferSize = i1031[26]
  i1030.asyncUploadTimeSlice = i1031[27]
  i1030.billboardsFaceCameraPosition = !!i1031[28]
  i1030.shadowNearPlaneOffset = i1031[29]
  i1030.streamingMipmapsMemoryBudget = i1031[30]
  i1030.maximumLODLevel = i1031[31]
  i1030.streamingMipmapsAddAllCameras = !!i1031[32]
  i1030.streamingMipmapsMaxLevelReduction = i1031[33]
  i1030.streamingMipmapsRenderersPerFrame = i1031[34]
  i1030.resolutionScalingFixedDPIFactor = i1031[35]
  i1030.streamingMipmapsMaxFileIORequests = i1031[36]
  i1030.currentQualityLevel = i1031[37]
  return i1030
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1039 = data
  i1038.xPlacement = i1039[0]
  i1038.yPlacement = i1039[1]
  i1038.xAdvance = i1039[2]
  i1038.yAdvance = i1039[3]
  return i1038
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[12],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[12],"79":[80],"81":[82],"83":[82],"19":[2],"35":[16],"84":[2],"85":[86],"87":[88],"89":[86],"90":[2],"91":[2],"21":[19],"6":[3,2],"92":[2],"20":[19],"31":[2],"93":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[2],"101":[3,2],"102":[2],"103":[2],"104":[2],"26":[2],"105":[3,2],"106":[2],"107":[37],"108":[37],"38":[37],"109":[37],"110":[12],"111":[12],"112":[113],"114":[12],"115":[2],"116":[80,2],"17":[2,3],"117":[2],"118":[3,2],"119":[80],"120":[3,2],"121":[2],"122":[86]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","UnityEngine.UI.Slider","TMPro.TMP_FontAsset","UnityEngine.Material","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "6.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Happy2";

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

Deserializers.buildID = "aa50925f-8036-4d0d-a5b8-4d491578ed3e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

