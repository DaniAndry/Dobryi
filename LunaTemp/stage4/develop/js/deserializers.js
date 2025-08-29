var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointSpring' )
  var i525 = data
  i524.spring = i525[0]
  i524.damper = i525[1]
  i524.targetPosition = i525[2]
  return i524
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointMotor' )
  var i527 = data
  i526.m_TargetVelocity = i527[0]
  i526.m_Force = i527[1]
  i526.m_FreeSpin = i527[2]
  return i526
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointLimits' )
  var i529 = data
  i528.m_Min = i529[0]
  i528.m_Max = i529[1]
  i528.m_Bounciness = i529[2]
  i528.m_BounceMinVelocity = i529[3]
  i528.m_ContactDistance = i529[4]
  i528.minBounce = i529[5]
  i528.maxBounce = i529[6]
  return i528
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointDrive' )
  var i531 = data
  i530.m_PositionSpring = i531[0]
  i530.m_PositionDamper = i531[1]
  i530.m_MaximumForce = i531[2]
  i530.m_UseAcceleration = i531[3]
  return i530
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i533 = data
  i532.m_Spring = i533[0]
  i532.m_Damper = i533[1]
  return i532
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i535 = data
  i534.m_Limit = i535[0]
  i534.m_Bounciness = i535[1]
  i534.m_ContactDistance = i535[2]
  return i534
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i537 = data
  i536.m_ExtremumSlip = i537[0]
  i536.m_ExtremumValue = i537[1]
  i536.m_AsymptoteSlip = i537[2]
  i536.m_AsymptoteValue = i537[3]
  i536.m_Stiffness = i537[4]
  return i536
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i539 = data
  i538.m_LowerAngle = i539[0]
  i538.m_UpperAngle = i539[1]
  return i538
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i541 = data
  i540.m_MotorSpeed = i541[0]
  i540.m_MaximumMotorTorque = i541[1]
  return i540
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i543 = data
  i542.m_DampingRatio = i543[0]
  i542.m_Frequency = i543[1]
  i542.m_Angle = i543[2]
  return i542
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i545 = data
  i544.m_LowerTranslation = i545[0]
  i544.m_UpperTranslation = i545[1]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i547 = data
  i546.name = i547[0]
  i546.width = i547[1]
  i546.height = i547[2]
  i546.mipmapCount = i547[3]
  i546.anisoLevel = i547[4]
  i546.filterMode = i547[5]
  i546.hdr = !!i547[6]
  i546.format = i547[7]
  i546.wrapMode = i547[8]
  i546.alphaIsTransparency = !!i547[9]
  i546.alphaSource = i547[10]
  i546.graphicsFormat = i547[11]
  i546.sRGBTexture = !!i547[12]
  i546.desiredColorSpace = i547[13]
  i546.wrapU = i547[14]
  i546.wrapV = i547[15]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i548 = root || new pc.UnityMaterial()
  var i549 = data
  i548.name = i549[0]
  request.r(i549[1], i549[2], 0, i548, 'shader')
  i548.renderQueue = i549[3]
  i548.enableInstancing = !!i549[4]
  var i551 = i549[5]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i551[i + 0]) );
  }
  i548.floatParameters = i550
  var i553 = i549[6]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i553[i + 0]) );
  }
  i548.colorParameters = i552
  var i555 = i549[7]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i555[i + 0]) );
  }
  i548.vectorParameters = i554
  var i557 = i549[8]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i557[i + 0]) );
  }
  i548.textureParameters = i556
  var i559 = i549[9]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i559[i + 0]) );
  }
  i548.materialFlags = i558
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i563 = data
  i562.name = i563[0]
  i562.value = i563[1]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i567 = data
  i566.name = i567[0]
  i566.value = new pc.Color(i567[1], i567[2], i567[3], i567[4])
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i571 = data
  i570.name = i571[0]
  i570.value = new pc.Vec4( i571[1], i571[2], i571[3], i571[4] )
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i575 = data
  i574.name = i575[0]
  request.r(i575[1], i575[2], 0, i574, 'value')
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i579 = data
  i578.name = i579[0]
  i578.enabled = !!i579[1]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i581 = data
  i580.pivot = new pc.Vec2( i581[0], i581[1] )
  i580.anchorMin = new pc.Vec2( i581[2], i581[3] )
  i580.anchorMax = new pc.Vec2( i581[4], i581[5] )
  i580.sizeDelta = new pc.Vec2( i581[6], i581[7] )
  i580.anchoredPosition3D = new pc.Vec3( i581[8], i581[9], i581[10] )
  i580.rotation = new pc.Quat(i581[11], i581[12], i581[13], i581[14])
  i580.scale = new pc.Vec3( i581[15], i581[16], i581[17] )
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i583 = data
  i582.cullTransparentMesh = !!i583[0]
  return i582
}

Deserializers["People"] = function (request, data, root) {
  var i584 = root || request.c( 'People' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, '_readyImage')
  request.r(i585[2], i585[3], 0, i584, '_additiveImage1')
  request.r(i585[4], i585[5], 0, i584, '_additiveImage2')
  request.r(i585[6], i585[7], 0, i584, '_endPoint')
  request.r(i585[8], i585[9], 0, i584, 'Bank')
  request.r(i585[10], i585[11], 0, i584, '_sizeText')
  i584.CupType = i585[12]
  i584.JuiceType1 = i585[13]
  i584.JuiceType2 = i585[14]
  i584.AdditiveType1 = i585[15]
  i584.AdditiveType2 = i585[16]
  request.r(i585[17], i585[18], 0, i584, '_finishSound')
  request.r(i585[19], i585[20], 0, i584, '_readySmall')
  request.r(i585[21], i585[22], 0, i584, '_readyMiddle')
  request.r(i585[23], i585[24], 0, i584, '_readyBig')
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'clip')
  request.r(i587[2], i587[3], 0, i586, 'outputAudioMixerGroup')
  i586.playOnAwake = !!i587[4]
  i586.loop = !!i587[5]
  i586.time = i587[6]
  i586.volume = i587[7]
  i586.pitch = i587[8]
  i586.enabled = !!i587[9]
  return i586
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.UI.Image' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'm_Sprite')
  i588.m_Type = i589[2]
  i588.m_PreserveAspect = !!i589[3]
  i588.m_FillCenter = !!i589[4]
  i588.m_FillMethod = i589[5]
  i588.m_FillAmount = i589[6]
  i588.m_FillClockwise = !!i589[7]
  i588.m_FillOrigin = i589[8]
  i588.m_UseSpriteMesh = !!i589[9]
  i588.m_PixelsPerUnitMultiplier = i589[10]
  request.r(i589[11], i589[12], 0, i588, 'm_Material')
  i588.m_Maskable = !!i589[13]
  i588.m_Color = new pc.Color(i589[14], i589[15], i589[16], i589[17])
  i588.m_RaycastTarget = !!i589[18]
  i588.m_RaycastPadding = new pc.Vec4( i589[19], i589[20], i589[21], i589[22] )
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i591 = data
  i590.name = i591[0]
  i590.tagId = i591[1]
  i590.enabled = !!i591[2]
  i590.isStatic = !!i591[3]
  i590.layer = i591[4]
  return i590
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.Button' )
  var i593 = data
  i592.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i593[0], i592.m_OnClick)
  i592.m_Navigation = request.d('UnityEngine.UI.Navigation', i593[1], i592.m_Navigation)
  i592.m_Transition = i593[2]
  i592.m_Colors = request.d('UnityEngine.UI.ColorBlock', i593[3], i592.m_Colors)
  i592.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i593[4], i592.m_SpriteState)
  i592.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i593[5], i592.m_AnimationTriggers)
  i592.m_Interactable = !!i593[6]
  request.r(i593[7], i593[8], 0, i592, 'm_TargetGraphic')
  return i592
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i595 = data
  i594.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i595[0], i594.m_PersistentCalls)
  return i594
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i597 = data
  var i599 = i597[0]
  var i598 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i599.length; i += 1) {
    i598.add(request.d('UnityEngine.Events.PersistentCall', i599[i + 0]));
  }
  i596.m_Calls = i598
  return i596
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'm_Target')
  i602.m_TargetAssemblyTypeName = i603[2]
  i602.m_MethodName = i603[3]
  i602.m_Mode = i603[4]
  i602.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i603[5], i602.m_Arguments)
  i602.m_CallState = i603[6]
  return i602
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'm_ObjectArgument')
  i604.m_ObjectArgumentAssemblyTypeName = i605[2]
  i604.m_IntArgument = i605[3]
  i604.m_FloatArgument = i605[4]
  i604.m_StringArgument = i605[5]
  i604.m_BoolArgument = !!i605[6]
  return i604
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i607 = data
  i606.m_Mode = i607[0]
  i606.m_WrapAround = !!i607[1]
  request.r(i607[2], i607[3], 0, i606, 'm_SelectOnUp')
  request.r(i607[4], i607[5], 0, i606, 'm_SelectOnDown')
  request.r(i607[6], i607[7], 0, i606, 'm_SelectOnLeft')
  request.r(i607[8], i607[9], 0, i606, 'm_SelectOnRight')
  return i606
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i609 = data
  i608.m_NormalColor = new pc.Color(i609[0], i609[1], i609[2], i609[3])
  i608.m_HighlightedColor = new pc.Color(i609[4], i609[5], i609[6], i609[7])
  i608.m_PressedColor = new pc.Color(i609[8], i609[9], i609[10], i609[11])
  i608.m_SelectedColor = new pc.Color(i609[12], i609[13], i609[14], i609[15])
  i608.m_DisabledColor = new pc.Color(i609[16], i609[17], i609[18], i609[19])
  i608.m_ColorMultiplier = i609[20]
  i608.m_FadeDuration = i609[21]
  return i608
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'm_HighlightedSprite')
  request.r(i611[2], i611[3], 0, i610, 'm_PressedSprite')
  request.r(i611[4], i611[5], 0, i610, 'm_SelectedSprite')
  request.r(i611[6], i611[7], 0, i610, 'm_DisabledSprite')
  return i610
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i613 = data
  i612.m_NormalTrigger = i613[0]
  i612.m_HighlightedTrigger = i613[1]
  i612.m_PressedTrigger = i613[2]
  i612.m_SelectedTrigger = i613[3]
  i612.m_DisabledTrigger = i613[4]
  return i612
}

Deserializers["Source.ClickCta"] = function (request, data, root) {
  var i614 = root || request.c( 'Source.ClickCta' )
  var i615 = data
  return i614
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i616 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i617 = data
  i616.m_hasFontAssetChanged = !!i617[0]
  request.r(i617[1], i617[2], 0, i616, 'm_baseMaterial')
  i616.m_maskOffset = new pc.Vec4( i617[3], i617[4], i617[5], i617[6] )
  i616.m_text = i617[7]
  i616.m_isRightToLeft = !!i617[8]
  request.r(i617[9], i617[10], 0, i616, 'm_fontAsset')
  request.r(i617[11], i617[12], 0, i616, 'm_sharedMaterial')
  var i619 = i617[13]
  var i618 = []
  for(var i = 0; i < i619.length; i += 2) {
  request.r(i619[i + 0], i619[i + 1], 2, i618, '')
  }
  i616.m_fontSharedMaterials = i618
  request.r(i617[14], i617[15], 0, i616, 'm_fontMaterial')
  var i621 = i617[16]
  var i620 = []
  for(var i = 0; i < i621.length; i += 2) {
  request.r(i621[i + 0], i621[i + 1], 2, i620, '')
  }
  i616.m_fontMaterials = i620
  i616.m_fontColor32 = UnityEngine.Color32.ConstructColor(i617[17], i617[18], i617[19], i617[20])
  i616.m_fontColor = new pc.Color(i617[21], i617[22], i617[23], i617[24])
  i616.m_enableVertexGradient = !!i617[25]
  i616.m_colorMode = i617[26]
  i616.m_fontColorGradient = request.d('TMPro.VertexGradient', i617[27], i616.m_fontColorGradient)
  request.r(i617[28], i617[29], 0, i616, 'm_fontColorGradientPreset')
  request.r(i617[30], i617[31], 0, i616, 'm_spriteAsset')
  i616.m_tintAllSprites = !!i617[32]
  request.r(i617[33], i617[34], 0, i616, 'm_StyleSheet')
  i616.m_TextStyleHashCode = i617[35]
  i616.m_overrideHtmlColors = !!i617[36]
  i616.m_faceColor = UnityEngine.Color32.ConstructColor(i617[37], i617[38], i617[39], i617[40])
  i616.m_fontSize = i617[41]
  i616.m_fontSizeBase = i617[42]
  i616.m_fontWeight = i617[43]
  i616.m_enableAutoSizing = !!i617[44]
  i616.m_fontSizeMin = i617[45]
  i616.m_fontSizeMax = i617[46]
  i616.m_fontStyle = i617[47]
  i616.m_HorizontalAlignment = i617[48]
  i616.m_VerticalAlignment = i617[49]
  i616.m_textAlignment = i617[50]
  i616.m_characterSpacing = i617[51]
  i616.m_wordSpacing = i617[52]
  i616.m_lineSpacing = i617[53]
  i616.m_lineSpacingMax = i617[54]
  i616.m_paragraphSpacing = i617[55]
  i616.m_charWidthMaxAdj = i617[56]
  i616.m_enableWordWrapping = !!i617[57]
  i616.m_wordWrappingRatios = i617[58]
  i616.m_overflowMode = i617[59]
  request.r(i617[60], i617[61], 0, i616, 'm_linkedTextComponent')
  request.r(i617[62], i617[63], 0, i616, 'parentLinkedComponent')
  i616.m_enableKerning = !!i617[64]
  i616.m_enableExtraPadding = !!i617[65]
  i616.checkPaddingRequired = !!i617[66]
  i616.m_isRichText = !!i617[67]
  i616.m_parseCtrlCharacters = !!i617[68]
  i616.m_isOrthographic = !!i617[69]
  i616.m_isCullingEnabled = !!i617[70]
  i616.m_horizontalMapping = i617[71]
  i616.m_verticalMapping = i617[72]
  i616.m_uvLineOffset = i617[73]
  i616.m_geometrySortingOrder = i617[74]
  i616.m_IsTextObjectScaleStatic = !!i617[75]
  i616.m_VertexBufferAutoSizeReduction = !!i617[76]
  i616.m_useMaxVisibleDescender = !!i617[77]
  i616.m_pageToDisplay = i617[78]
  i616.m_margin = new pc.Vec4( i617[79], i617[80], i617[81], i617[82] )
  i616.m_isUsingLegacyAnimationComponent = !!i617[83]
  i616.m_isVolumetricText = !!i617[84]
  request.r(i617[85], i617[86], 0, i616, 'm_Material')
  i616.m_Maskable = !!i617[87]
  i616.m_Color = new pc.Color(i617[88], i617[89], i617[90], i617[91])
  i616.m_RaycastTarget = !!i617[92]
  i616.m_RaycastPadding = new pc.Vec4( i617[93], i617[94], i617[95], i617[96] )
  return i616
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i624 = root || request.c( 'TMPro.VertexGradient' )
  var i625 = data
  i624.topLeft = new pc.Color(i625[0], i625[1], i625[2], i625[3])
  i624.topRight = new pc.Color(i625[4], i625[5], i625[6], i625[7])
  i624.bottomLeft = new pc.Color(i625[8], i625[9], i625[10], i625[11])
  i624.bottomRight = new pc.Color(i625[12], i625[13], i625[14], i625[15])
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i627 = data
  i626.name = i627[0]
  i626.index = i627[1]
  i626.startup = !!i627[2]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i629 = data
  i628.position = new pc.Vec3( i629[0], i629[1], i629[2] )
  i628.scale = new pc.Vec3( i629[3], i629[4], i629[5] )
  i628.rotation = new pc.Quat(i629[6], i629[7], i629[8], i629[9])
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i631 = data
  i630.enabled = !!i631[0]
  i630.aspect = i631[1]
  i630.orthographic = !!i631[2]
  i630.orthographicSize = i631[3]
  i630.backgroundColor = new pc.Color(i631[4], i631[5], i631[6], i631[7])
  i630.nearClipPlane = i631[8]
  i630.farClipPlane = i631[9]
  i630.fieldOfView = i631[10]
  i630.depth = i631[11]
  i630.clearFlags = i631[12]
  i630.cullingMask = i631[13]
  i630.rect = i631[14]
  request.r(i631[15], i631[16], 0, i630, 'targetTexture')
  i630.usePhysicalProperties = !!i631[17]
  i630.focalLength = i631[18]
  i630.sensorSize = new pc.Vec2( i631[19], i631[20] )
  i630.lensShift = new pc.Vec2( i631[21], i631[22] )
  i630.gateFit = i631[23]
  i630.commandBufferCount = i631[24]
  i630.cameraType = i631[25]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'animatorController')
  request.r(i633[2], i633[3], 0, i632, 'avatar')
  i632.updateMode = i633[4]
  i632.hasTransformHierarchy = !!i633[5]
  i632.applyRootMotion = !!i633[6]
  var i635 = i633[7]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 2, i634, '')
  }
  i632.humanBones = i634
  i632.enabled = !!i633[8]
  return i632
}

Deserializers["Bank"] = function (request, data, root) {
  var i638 = root || request.c( 'Bank' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'BuyBigCupButton')
  request.r(i639[2], i639[3], 0, i638, 'BigCupButton')
  request.r(i639[4], i639[5], 0, i638, 'MiddleCupButton')
  request.r(i639[6], i639[7], 0, i638, 'MoneyText')
  request.r(i639[8], i639[9], 0, i638, 'Tutorial')
  request.r(i639[10], i639[11], 0, i638, 'BuyAdditiveButton')
  request.r(i639[12], i639[13], 0, i638, 'BuyJuiceButton')
  request.r(i639[14], i639[15], 0, i638, 'JuiceButton1')
  request.r(i639[16], i639[17], 0, i638, 'JuiceButton2')
  request.r(i639[18], i639[19], 0, i638, 'JuiceButton3')
  request.r(i639[20], i639[21], 0, i638, 'Additive1Button')
  request.r(i639[22], i639[23], 0, i638, 'Additive2Button')
  i638.Money = i639[24]
  i638.IsBigCupBuy = !!i639[25]
  i638.IsJuiceBuy = !!i639[26]
  i638.IsAdditiveBuy = !!i639[27]
  request.r(i639[28], i639[29], 0, i638, '_buySound')
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i641 = data
  i640.enabled = !!i641[0]
  i640.planeDistance = i641[1]
  i640.referencePixelsPerUnit = i641[2]
  i640.isFallbackOverlay = !!i641[3]
  i640.renderMode = i641[4]
  i640.renderOrder = i641[5]
  i640.sortingLayerName = i641[6]
  i640.sortingOrder = i641[7]
  i640.scaleFactor = i641[8]
  request.r(i641[9], i641[10], 0, i640, 'worldCamera')
  i640.overrideSorting = !!i641[11]
  i640.pixelPerfect = !!i641[12]
  i640.targetDisplay = i641[13]
  i640.overridePixelPerfect = !!i641[14]
  return i640
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i643 = data
  i642.m_UiScaleMode = i643[0]
  i642.m_ReferencePixelsPerUnit = i643[1]
  i642.m_ScaleFactor = i643[2]
  i642.m_ReferenceResolution = new pc.Vec2( i643[3], i643[4] )
  i642.m_ScreenMatchMode = i643[5]
  i642.m_MatchWidthOrHeight = i643[6]
  i642.m_PhysicalUnit = i643[7]
  i642.m_FallbackScreenDPI = i643[8]
  i642.m_DefaultSpriteDPI = i643[9]
  i642.m_DynamicPixelsPerUnit = i643[10]
  i642.m_PresetInfoIsWorld = !!i643[11]
  return i642
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i645 = data
  i644.m_IgnoreReversedGraphics = !!i645[0]
  i644.m_BlockingObjects = i645[1]
  i644.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i645[2] )
  return i644
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i646 = root || request.c( 'ImageShiftOnOrientation' )
  var i647 = data
  var i649 = i647[0]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('ItemSwitcherData', i649[i + 0]) );
  }
  i646.Items = i648
  request.r(i647[1], i647[2], 0, i646, '_backHorizontal')
  request.r(i647[3], i647[4], 0, i646, '_backVertical')
  request.r(i647[5], i647[6], 0, i646, '_tableHorizontal')
  request.r(i647[7], i647[8], 0, i646, '_tableVertical')
  i646.IsDebug = !!i647[9]
  i646.CanCopy = !!i647[10]
  return i646
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i652 = root || request.c( 'ItemSwitcherData' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'Target')
  i652.HorizontalAnchoredPosition = new pc.Vec2( i653[2], i653[3] )
  i652.SizeHorizontal = new pc.Vec2( i653[4], i653[5] )
  i652.VerticalAnchoredPosition = new pc.Vec2( i653[6], i653[7] )
  i652.SizeVertical = new pc.Vec2( i653[8], i653[9] )
  i652.MinHorizontal = new pc.Vec2( i653[10], i653[11] )
  i652.MaxHorizontal = new pc.Vec2( i653[12], i653[13] )
  i652.MinVertical = new pc.Vec2( i653[14], i653[15] )
  i652.MaxVertical = new pc.Vec2( i653[16], i653[17] )
  i652.IsAnchored = !!i653[18]
  i652.IsDebug = !!i653[19]
  i652.CopyHorizontal = !!i653[20]
  i652.CopyVertical = !!i653[21]
  return i652
}

Deserializers["Point"] = function (request, data, root) {
  var i654 = root || request.c( 'Point' )
  var i655 = data
  return i654
}

Deserializers["MixImage"] = function (request, data, root) {
  var i656 = root || request.c( 'MixImage' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'Image')
  return i656
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i658 = root || request.c( 'PeopleContainer' )
  var i659 = data
  var i661 = i659[0]
  var i660 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i661.length; i += 2) {
  request.r(i661[i + 0], i661[i + 1], 1, i660, '')
  }
  i658.CurrentPeoples = i660
  var i663 = i659[1]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 1, i662, '')
  }
  i658._peoples = i662
  request.r(i659[2], i659[3], 0, i658, '_tutorialPeople')
  request.r(i659[4], i659[5], 0, i658, '_spawnPoint')
  request.r(i659[6], i659[7], 0, i658, '_point1')
  request.r(i659[8], i659[9], 0, i658, '_point2')
  request.r(i659[10], i659[11], 0, i658, '_endPoint')
  request.r(i659[12], i659[13], 0, i658, '_juiceConfig')
  request.r(i659[14], i659[15], 0, i658, '_tutorial')
  return i658
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i667 = data
  i666.m_HorizontalFit = i667[0]
  i666.m_VerticalFit = i667[1]
  return i666
}

Deserializers["BackImage"] = function (request, data, root) {
  var i668 = root || request.c( 'BackImage' )
  var i669 = data
  return i668
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i670 = root || request.c( 'AheadImage' )
  var i671 = data
  return i670
}

Deserializers["Order"] = function (request, data, root) {
  var i672 = root || request.c( 'Order' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, '_juiceAnimator')
  request.r(i673[2], i673[3], 0, i672, '_cupAnimator')
  request.r(i673[4], i673[5], 0, i672, '_canvasAnimator')
  i672.CupType = i673[6]
  i672.JuiceType1 = i673[7]
  i672.JuiceType2 = i673[8]
  i672.AdditiveType1 = i673[9]
  i672.AdditiveType2 = i673[10]
  i672.IsFree = !!i673[11]
  i672.IsSpriteReady = !!i673[12]
  i672.IsCupReady = !!i673[13]
  i672.IsJuiceReady = !!i673[14]
  i672.IsPouring = !!i673[15]
  request.r(i673[16], i673[17], 0, i672, '_iceButton')
  request.r(i673[18], i673[19], 0, i672, '_grassButton')
  request.r(i673[20], i673[21], 0, i672, '_juiceBallsButton')
  request.r(i673[22], i673[23], 0, i672, '_strawButton')
  request.r(i673[24], i673[25], 0, i672, '_bigCupButton')
  request.r(i673[26], i673[27], 0, i672, '_middleCupButton')
  request.r(i673[28], i673[29], 0, i672, '_smallCupButton')
  request.r(i673[30], i673[31], 0, i672, '_appleButton')
  request.r(i673[32], i673[33], 0, i672, '_orangeButton')
  request.r(i673[34], i673[35], 0, i672, '_multifruitButton')
  request.r(i673[36], i673[37], 0, i672, '_tomatoButton')
  request.r(i673[38], i673[39], 0, i672, '_cherryButton')
  request.r(i673[40], i673[41], 0, i672, '_smallRawJuiceImage')
  request.r(i673[42], i673[43], 0, i672, '_middleRawJuiceImage')
  request.r(i673[44], i673[45], 0, i672, '_bigRawJuiceImage')
  request.r(i673[46], i673[47], 0, i672, '_smallReadyJuiceImage')
  request.r(i673[48], i673[49], 0, i672, '_middleReadyJuiceImage')
  request.r(i673[50], i673[51], 0, i672, '_bigReadyJuiceImage')
  request.r(i673[52], i673[53], 0, i672, '_backImage')
  request.r(i673[54], i673[55], 0, i672, '_aheadImage')
  request.r(i673[56], i673[57], 0, i672, '_config')
  request.r(i673[58], i673[59], 0, i672, '_takeOrderButton')
  request.r(i673[60], i673[61], 0, i672, '_peopleContainer')
  request.r(i673[62], i673[63], 0, i672, '_tutorial')
  request.r(i673[64], i673[65], 0, i672, '_bText')
  request.r(i673[66], i673[67], 0, i672, '_mText')
  request.r(i673[68], i673[69], 0, i672, '_sText')
  request.r(i673[70], i673[71], 0, i672, '_garbageButton')
  request.r(i673[72], i673[73], 0, i672, '_clickSound')
  request.r(i673[74], i673[75], 0, i672, '_juiceSound')
  return i672
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i674 = root || request.c( 'Tutorial' )
  var i675 = data
  i674.IsTutorial = !!i675[0]
  request.r(i675[1], i675[2], 0, i674, 'Finger1')
  request.r(i675[3], i675[4], 0, i674, 'Finger2')
  request.r(i675[5], i675[6], 0, i674, 'FingerCherry')
  request.r(i675[7], i675[8], 0, i674, 'Finger3')
  request.r(i675[9], i675[10], 0, i674, 'Finger4')
  request.r(i675[11], i675[12], 0, i674, 'Finger5')
  request.r(i675[13], i675[14], 0, i674, 'BuyBigCupFinger')
  request.r(i675[15], i675[16], 0, i674, 'BuyJuiceFinger')
  request.r(i675[17], i675[18], 0, i674, 'SmallCupButton')
  request.r(i675[19], i675[20], 0, i674, 'JuiceButton')
  request.r(i675[21], i675[22], 0, i674, 'JuiceButton2')
  request.r(i675[23], i675[24], 0, i674, 'StrawButton')
  request.r(i675[25], i675[26], 0, i674, 'AdditiveButton')
  request.r(i675[27], i675[28], 0, i674, 'ReadyButton')
  var i677 = i675[29]
  var i676 = []
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 2, i676, '')
  }
  i674.Buttons = i676
  request.r(i675[30], i675[31], 0, i674, 'Bank')
  return i674
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i680 = root || request.c( 'SoundSwitcher' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, '_onImage')
  request.r(i681[2], i681[3], 0, i680, '_offImage')
  return i680
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'm_FirstSelected')
  i682.m_sendNavigationEvents = !!i683[2]
  i682.m_DragThreshold = i683[3]
  return i682
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i685 = data
  i684.m_HorizontalAxis = i685[0]
  i684.m_VerticalAxis = i685[1]
  i684.m_SubmitButton = i685[2]
  i684.m_CancelButton = i685[3]
  i684.m_InputActionsPerSecond = i685[4]
  i684.m_RepeatDelay = i685[5]
  i684.m_ForceModuleActive = !!i685[6]
  i684.m_SendPointerHoverToParent = !!i685[7]
  return i684
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i686 = root || request.c( 'JuiceConfig' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'EntityBigCup')
  request.r(i687[2], i687[3], 0, i686, 'TomatoBigCup')
  request.r(i687[4], i687[5], 0, i686, 'AppleBigCup')
  request.r(i687[6], i687[7], 0, i686, 'OrangeBigCup')
  request.r(i687[8], i687[9], 0, i686, 'CherryBigCup')
  request.r(i687[10], i687[11], 0, i686, 'MultifruitBigCup')
  request.r(i687[12], i687[13], 0, i686, 'TomatoBigStrawCup')
  request.r(i687[14], i687[15], 0, i686, 'MultifruitBigStrawCup')
  request.r(i687[16], i687[17], 0, i686, 'AppleBigStrawCup')
  request.r(i687[18], i687[19], 0, i686, 'OrangeBigStrawCup')
  request.r(i687[20], i687[21], 0, i686, 'CherryBigStrawCup')
  request.r(i687[22], i687[23], 0, i686, 'MultifruitBigBallsCup')
  request.r(i687[24], i687[25], 0, i686, 'TomatoBigBallsCup')
  request.r(i687[26], i687[27], 0, i686, 'AppleBigBallsCup')
  request.r(i687[28], i687[29], 0, i686, 'OrangeBigBallsCup')
  request.r(i687[30], i687[31], 0, i686, 'CherryBigBallsCup')
  request.r(i687[32], i687[33], 0, i686, 'EntityMiddleCup')
  request.r(i687[34], i687[35], 0, i686, 'TomatoMiddleCup')
  request.r(i687[36], i687[37], 0, i686, 'AppleMiddleCup')
  request.r(i687[38], i687[39], 0, i686, 'OrangeMiddleCup')
  request.r(i687[40], i687[41], 0, i686, 'CherryMiddleCup')
  request.r(i687[42], i687[43], 0, i686, 'MultifruitMiddleCup')
  request.r(i687[44], i687[45], 0, i686, 'TomatoMiddleStrawCup')
  request.r(i687[46], i687[47], 0, i686, 'MultifruitMiddleStrawCup')
  request.r(i687[48], i687[49], 0, i686, 'AppleMiddleStrawCup')
  request.r(i687[50], i687[51], 0, i686, 'OrangeMiddleStrawCup')
  request.r(i687[52], i687[53], 0, i686, 'CherryMiddleStrawCup')
  request.r(i687[54], i687[55], 0, i686, 'MultifruitMiddleBallsCup')
  request.r(i687[56], i687[57], 0, i686, 'TomatoMiddleBallsCup')
  request.r(i687[58], i687[59], 0, i686, 'AppleMiddleBallsCup')
  request.r(i687[60], i687[61], 0, i686, 'OrangeMiddleBallsCup')
  request.r(i687[62], i687[63], 0, i686, 'CherryMiddleBallsCup')
  request.r(i687[64], i687[65], 0, i686, 'EntitySmallCup')
  request.r(i687[66], i687[67], 0, i686, 'TomatoSmallCup')
  request.r(i687[68], i687[69], 0, i686, 'AppleSmallCup')
  request.r(i687[70], i687[71], 0, i686, 'OrangeSmallCup')
  request.r(i687[72], i687[73], 0, i686, 'CherrySmallCup')
  request.r(i687[74], i687[75], 0, i686, 'MultifruitSmallCup')
  request.r(i687[76], i687[77], 0, i686, 'TomatoSmallStrawCup')
  request.r(i687[78], i687[79], 0, i686, 'AppleSmallStrawCup')
  request.r(i687[80], i687[81], 0, i686, 'OrangeSmallStrawCup')
  request.r(i687[82], i687[83], 0, i686, 'CherrySmallStrawCup')
  request.r(i687[84], i687[85], 0, i686, 'MultifruitSmallStrawCup')
  request.r(i687[86], i687[87], 0, i686, 'AppleSmallBallsCup')
  request.r(i687[88], i687[89], 0, i686, 'TomatoSmallBallsCup')
  request.r(i687[90], i687[91], 0, i686, 'OrangeSmallBallsCup')
  request.r(i687[92], i687[93], 0, i686, 'CherrySmallBallsCup')
  request.r(i687[94], i687[95], 0, i686, 'MultifruitSmallBallsCup')
  request.r(i687[96], i687[97], 0, i686, 'JuiceBallAdditive')
  request.r(i687[98], i687[99], 0, i686, 'IceAdditive')
  request.r(i687[100], i687[101], 0, i686, 'GrassAdditive')
  request.r(i687[102], i687[103], 0, i686, 'SmallApple')
  request.r(i687[104], i687[105], 0, i686, 'SmallOrange')
  request.r(i687[106], i687[107], 0, i686, 'SmallCherry')
  request.r(i687[108], i687[109], 0, i686, 'SmallMultifruit')
  request.r(i687[110], i687[111], 0, i686, 'SmallTomato')
  request.r(i687[112], i687[113], 0, i686, 'MiddleApple')
  request.r(i687[114], i687[115], 0, i686, 'MiddleOrange')
  request.r(i687[116], i687[117], 0, i686, 'MiddleCherry')
  request.r(i687[118], i687[119], 0, i686, 'MiddleMultifruit')
  request.r(i687[120], i687[121], 0, i686, 'MiddleTomato')
  request.r(i687[122], i687[123], 0, i686, 'BigApple')
  request.r(i687[124], i687[125], 0, i686, 'BigOrange')
  request.r(i687[126], i687[127], 0, i686, 'BigCherry')
  request.r(i687[128], i687[129], 0, i686, 'BigMultifruit')
  request.r(i687[130], i687[131], 0, i686, 'BigTomato')
  return i686
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i688 = root || request.c( 'TouchIdleTimer' )
  var i689 = data
  return i688
}

Deserializers["Helper"] = function (request, data, root) {
  var i690 = root || request.c( 'Helper' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, '_smallCupFinger')
  request.r(i691[2], i691[3], 0, i690, '_middleCupFinger')
  request.r(i691[4], i691[5], 0, i690, '_bigCupFinger')
  request.r(i691[6], i691[7], 0, i690, '_iceFinger')
  request.r(i691[8], i691[9], 0, i690, '_grassFinger')
  request.r(i691[10], i691[11], 0, i690, '_juiceballFinger')
  request.r(i691[12], i691[13], 0, i690, '_appleFinger')
  request.r(i691[14], i691[15], 0, i690, '_cherryFinger')
  request.r(i691[16], i691[17], 0, i690, '_orangeFinger')
  request.r(i691[18], i691[19], 0, i690, '_multifruitFinger')
  request.r(i691[20], i691[21], 0, i690, '_tomatoFinger')
  request.r(i691[22], i691[23], 0, i690, '_strawFinger')
  request.r(i691[24], i691[25], 0, i690, '_readyFinger')
  var i693 = i691[26]
  var i692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 1, i692, '')
  }
  i690._juiseButtons = i692
  request.r(i691[27], i691[28], 0, i690, '_grassButton')
  request.r(i691[29], i691[30], 0, i690, '_juiceballButton')
  request.r(i691[31], i691[32], 0, i690, '_iceButton')
  request.r(i691[33], i691[34], 0, i690, '_peoples')
  request.r(i691[35], i691[36], 0, i690, '_tutorial')
  request.r(i691[37], i691[38], 0, i690, '_order')
  request.r(i691[39], i691[40], 0, i690, '_strawButton')
  request.r(i691[41], i691[42], 0, i690, '_bigCupButton')
  request.r(i691[43], i691[44], 0, i690, '_middleCupButton')
  request.r(i691[45], i691[46], 0, i690, '_smallCupButton')
  request.r(i691[47], i691[48], 0, i690, '_readyButton')
  request.r(i691[49], i691[50], 0, i690, '_touchIdleTimer')
  request.r(i691[51], i691[52], 0, i690, '_finalScreen')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i697 = data
  i696.ambientIntensity = i697[0]
  i696.reflectionIntensity = i697[1]
  i696.ambientMode = i697[2]
  i696.ambientLight = new pc.Color(i697[3], i697[4], i697[5], i697[6])
  i696.ambientSkyColor = new pc.Color(i697[7], i697[8], i697[9], i697[10])
  i696.ambientGroundColor = new pc.Color(i697[11], i697[12], i697[13], i697[14])
  i696.ambientEquatorColor = new pc.Color(i697[15], i697[16], i697[17], i697[18])
  i696.fogColor = new pc.Color(i697[19], i697[20], i697[21], i697[22])
  i696.fogEndDistance = i697[23]
  i696.fogStartDistance = i697[24]
  i696.fogDensity = i697[25]
  i696.fog = !!i697[26]
  request.r(i697[27], i697[28], 0, i696, 'skybox')
  i696.fogMode = i697[29]
  var i699 = i697[30]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i699[i + 0]) );
  }
  i696.lightmaps = i698
  i696.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i697[31], i696.lightProbes)
  i696.lightmapsMode = i697[32]
  i696.mixedBakeMode = i697[33]
  i696.environmentLightingMode = i697[34]
  i696.ambientProbe = new pc.SphericalHarmonicsL2(i697[35])
  i696.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i697[36])
  i696.useReferenceAmbientProbe = !!i697[37]
  request.r(i697[38], i697[39], 0, i696, 'customReflection')
  request.r(i697[40], i697[41], 0, i696, 'defaultReflection')
  i696.defaultReflectionMode = i697[42]
  i696.defaultReflectionResolution = i697[43]
  i696.sunLightObjectId = i697[44]
  i696.pixelLightCount = i697[45]
  i696.defaultReflectionHDR = !!i697[46]
  i696.hasLightDataAsset = !!i697[47]
  i696.hasManualGenerate = !!i697[48]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'lightmapColor')
  request.r(i703[2], i703[3], 0, i702, 'lightmapDirection')
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i704 = root || new UnityEngine.LightProbes()
  var i705 = data
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i713 = data
  var i715 = i713[0]
  var i714 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i715.length; i += 1) {
    i714.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i715[i + 0]));
  }
  i712.ShaderCompilationErrors = i714
  i712.name = i713[1]
  i712.guid = i713[2]
  var i717 = i713[3]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( i717[i + 0] );
  }
  i712.shaderDefinedKeywords = i716
  var i719 = i713[4]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i719[i + 0]) );
  }
  i712.passes = i718
  var i721 = i713[5]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i721[i + 0]) );
  }
  i712.usePasses = i720
  var i723 = i713[6]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i723[i + 0]) );
  }
  i712.defaultParameterValues = i722
  request.r(i713[7], i713[8], 0, i712, 'unityFallbackShader')
  i712.readDepth = !!i713[9]
  i712.isCreatedByShaderGraph = !!i713[10]
  i712.compiled = !!i713[11]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i727 = data
  i726.shaderName = i727[0]
  i726.errorMessage = i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i732 = root || new pc.UnityShaderPass()
  var i733 = data
  i732.id = i733[0]
  i732.subShaderIndex = i733[1]
  i732.name = i733[2]
  i732.passType = i733[3]
  i732.grabPassTextureName = i733[4]
  i732.usePass = !!i733[5]
  i732.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[6], i732.zTest)
  i732.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[7], i732.zWrite)
  i732.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[8], i732.culling)
  i732.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i733[9], i732.blending)
  i732.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i733[10], i732.alphaBlending)
  i732.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[11], i732.colorWriteMask)
  i732.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[12], i732.offsetUnits)
  i732.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[13], i732.offsetFactor)
  i732.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[14], i732.stencilRef)
  i732.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[15], i732.stencilReadMask)
  i732.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[16], i732.stencilWriteMask)
  i732.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i733[17], i732.stencilOp)
  i732.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i733[18], i732.stencilOpFront)
  i732.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i733[19], i732.stencilOpBack)
  var i735 = i733[20]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i735[i + 0]) );
  }
  i732.tags = i734
  var i737 = i733[21]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( i737[i + 0] );
  }
  i732.passDefinedKeywords = i736
  var i739 = i733[22]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i739[i + 0]) );
  }
  i732.passDefinedKeywordGroups = i738
  var i741 = i733[23]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i741[i + 0]) );
  }
  i732.variants = i740
  var i743 = i733[24]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i743[i + 0]) );
  }
  i732.excludedVariants = i742
  i732.hasDepthReader = !!i733[25]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i745 = data
  i744.val = i745[0]
  i744.name = i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i747 = data
  i746.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[0], i746.src)
  i746.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[1], i746.dst)
  i746.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[2], i746.op)
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i749 = data
  i748.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[0], i748.pass)
  i748.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[1], i748.fail)
  i748.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[2], i748.zFail)
  i748.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[3], i748.comp)
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i753 = data
  i752.name = i753[0]
  i752.value = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i757 = data
  var i759 = i757[0]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( i759[i + 0] );
  }
  i756.keywords = i758
  i756.hasDiscard = !!i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i763 = data
  i762.passId = i763[0]
  i762.subShaderIndex = i763[1]
  var i765 = i763[2]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( i765[i + 0] );
  }
  i762.keywords = i764
  i762.vertexProgram = i763[3]
  i762.fragmentProgram = i763[4]
  i762.exportedForWebGl2 = !!i763[5]
  i762.readDepth = !!i763[6]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'shader')
  i768.pass = i769[2]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i773 = data
  i772.name = i773[0]
  i772.type = i773[1]
  i772.value = new pc.Vec4( i773[2], i773[3], i773[4], i773[5] )
  i772.textureValue = i773[6]
  i772.shaderPropertyFlag = i773[7]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i775 = data
  i774.name = i775[0]
  request.r(i775[1], i775[2], 0, i774, 'texture')
  i774.aabb = i775[3]
  i774.vertices = i775[4]
  i774.triangles = i775[5]
  i774.textureRect = UnityEngine.Rect.MinMaxRect(i775[6], i775[7], i775[8], i775[9])
  i774.packedRect = UnityEngine.Rect.MinMaxRect(i775[10], i775[11], i775[12], i775[13])
  i774.border = new pc.Vec4( i775[14], i775[15], i775[16], i775[17] )
  i774.transparency = i775[18]
  i774.bounds = i775[19]
  i774.pixelsPerUnit = i775[20]
  i774.textureWidth = i775[21]
  i774.textureHeight = i775[22]
  i774.nativeSize = new pc.Vec2( i775[23], i775[24] )
  i774.pivot = new pc.Vec2( i775[25], i775[26] )
  i774.textureRectOffset = new pc.Vec2( i775[27], i775[28] )
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i777 = data
  i776.name = i777[0]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i779 = data
  i778.name = i779[0]
  i778.wrapMode = i779[1]
  i778.isLooping = !!i779[2]
  i778.length = i779[3]
  var i781 = i779[4]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i781[i + 0]) );
  }
  i778.curves = i780
  var i783 = i779[5]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i783[i + 0]) );
  }
  i778.events = i782
  i778.halfPrecision = !!i779[6]
  i778._frameRate = i779[7]
  i778.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i779[8], i778.localBounds)
  i778.hasMuscleCurves = !!i779[9]
  var i785 = i779[10]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i778.clipMuscleConstant = i784
  i778.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i779[11], i778.clipBindingConstant)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i789 = data
  i788.path = i789[0]
  i788.hash = i789[1]
  i788.componentType = i789[2]
  i788.property = i789[3]
  i788.keys = i789[4]
  var i791 = i789[5]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i791[i + 0]) );
  }
  i788.objectReferenceKeys = i790
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i795 = data
  i794.time = i795[0]
  request.r(i795[1], i795[2], 0, i794, 'value')
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i799 = data
  i798.functionName = i799[0]
  i798.floatParameter = i799[1]
  i798.intParameter = i799[2]
  i798.stringParameter = i799[3]
  request.r(i799[4], i799[5], 0, i798, 'objectReferenceParameter')
  i798.time = i799[6]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i801 = data
  i800.center = new pc.Vec3( i801[0], i801[1], i801[2] )
  i800.extends = new pc.Vec3( i801[3], i801[4], i801[5] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i805 = data
  var i807 = i805[0]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( i807[i + 0] );
  }
  i804.genericBindings = i806
  var i809 = i805[1]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i804.pptrCurveMapping = i808
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i811 = data
  i810.name = i811[0]
  i810.ascent = i811[1]
  i810.originalLineHeight = i811[2]
  i810.fontSize = i811[3]
  var i813 = i811[4]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i813[i + 0]) );
  }
  i810.characterInfo = i812
  request.r(i811[5], i811[6], 0, i810, 'texture')
  i810.originalFontSize = i811[7]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i817 = data
  i816.index = i817[0]
  i816.advance = i817[1]
  i816.bearing = i817[2]
  i816.glyphWidth = i817[3]
  i816.glyphHeight = i817[4]
  i816.minX = i817[5]
  i816.maxX = i817[6]
  i816.minY = i817[7]
  i816.maxY = i817[8]
  i816.uvBottomLeftX = i817[9]
  i816.uvBottomLeftY = i817[10]
  i816.uvBottomRightX = i817[11]
  i816.uvBottomRightY = i817[12]
  i816.uvTopLeftX = i817[13]
  i816.uvTopLeftY = i817[14]
  i816.uvTopRightX = i817[15]
  i816.uvTopRightY = i817[16]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i819 = data
  i818.name = i819[0]
  var i821 = i819[1]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i821[i + 0]) );
  }
  i818.layers = i820
  var i823 = i819[2]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i823[i + 0]) );
  }
  i818.parameters = i822
  i818.animationClips = i819[3]
  i818.avatarUnsupported = i819[4]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i827 = data
  i826.name = i827[0]
  i826.defaultWeight = i827[1]
  i826.blendingMode = i827[2]
  i826.avatarMask = i827[3]
  i826.syncedLayerIndex = i827[4]
  i826.syncedLayerAffectsTiming = !!i827[5]
  i826.syncedLayers = i827[6]
  i826.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i827[7], i826.stateMachine)
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i829 = data
  i828.id = i829[0]
  i828.name = i829[1]
  i828.path = i829[2]
  var i831 = i829[3]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i831[i + 0]) );
  }
  i828.states = i830
  var i833 = i829[4]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i833[i + 0]) );
  }
  i828.machines = i832
  var i835 = i829[5]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i835[i + 0]) );
  }
  i828.entryStateTransitions = i834
  var i837 = i829[6]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i837[i + 0]) );
  }
  i828.exitStateTransitions = i836
  var i839 = i829[7]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i839[i + 0]) );
  }
  i828.anyStateTransitions = i838
  i828.defaultStateId = i829[8]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i843 = data
  i842.id = i843[0]
  i842.name = i843[1]
  i842.cycleOffset = i843[2]
  i842.cycleOffsetParameter = i843[3]
  i842.cycleOffsetParameterActive = !!i843[4]
  i842.mirror = !!i843[5]
  i842.mirrorParameter = i843[6]
  i842.mirrorParameterActive = !!i843[7]
  i842.motionId = i843[8]
  i842.nameHash = i843[9]
  i842.fullPathHash = i843[10]
  i842.speed = i843[11]
  i842.speedParameter = i843[12]
  i842.speedParameterActive = !!i843[13]
  i842.tag = i843[14]
  i842.tagHash = i843[15]
  i842.writeDefaultValues = !!i843[16]
  var i845 = i843[17]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.behaviours = i844
  var i847 = i843[18]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i847[i + 0]) );
  }
  i842.transitions = i846
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i853 = data
  i852.fullPath = i853[0]
  i852.canTransitionToSelf = !!i853[1]
  i852.duration = i853[2]
  i852.exitTime = i853[3]
  i852.hasExitTime = !!i853[4]
  i852.hasFixedDuration = !!i853[5]
  i852.interruptionSource = i853[6]
  i852.offset = i853[7]
  i852.orderedInterruption = !!i853[8]
  i852.destinationStateId = i853[9]
  i852.isExit = !!i853[10]
  i852.mute = !!i853[11]
  i852.solo = !!i853[12]
  var i855 = i853[13]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i855[i + 0]) );
  }
  i852.conditions = i854
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i861 = data
  i860.destinationStateId = i861[0]
  i860.isExit = !!i861[1]
  i860.mute = !!i861[2]
  i860.solo = !!i861[3]
  var i863 = i861[4]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i863[i + 0]) );
  }
  i860.conditions = i862
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i867 = data
  i866.mode = i867[0]
  i866.parameter = i867[1]
  i866.threshold = i867[2]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i871 = data
  i870.defaultBool = !!i871[0]
  i870.defaultFloat = i871[1]
  i870.defaultInt = i871[2]
  i870.name = i871[3]
  i870.nameHash = i871[4]
  i870.type = i871[5]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i873 = data
  i872.name = i873[0]
  i872.bytes64 = i873[1]
  i872.data = i873[2]
  return i872
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i874 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i875 = data
  i874.hashCode = i875[0]
  request.r(i875[1], i875[2], 0, i874, 'material')
  i874.materialHashCode = i875[3]
  request.r(i875[4], i875[5], 0, i874, 'atlas')
  i874.normalStyle = i875[6]
  i874.normalSpacingOffset = i875[7]
  i874.boldStyle = i875[8]
  i874.boldSpacing = i875[9]
  i874.italicStyle = i875[10]
  i874.tabSize = i875[11]
  i874.m_Version = i875[12]
  i874.m_SourceFontFileGUID = i875[13]
  request.r(i875[14], i875[15], 0, i874, 'm_SourceFontFile_EditorRef')
  request.r(i875[16], i875[17], 0, i874, 'm_SourceFontFile')
  i874.m_AtlasPopulationMode = i875[18]
  i874.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i875[19], i874.m_FaceInfo)
  var i877 = i875[20]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i877.length; i += 1) {
    i876.add(request.d('UnityEngine.TextCore.Glyph', i877[i + 0]));
  }
  i874.m_GlyphTable = i876
  var i879 = i875[21]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i879.length; i += 1) {
    i878.add(request.d('TMPro.TMP_Character', i879[i + 0]));
  }
  i874.m_CharacterTable = i878
  var i881 = i875[22]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i874.m_AtlasTextures = i880
  i874.m_AtlasTextureIndex = i875[23]
  i874.m_IsMultiAtlasTexturesEnabled = !!i875[24]
  i874.m_ClearDynamicDataOnBuild = !!i875[25]
  var i883 = i875[26]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('UnityEngine.TextCore.GlyphRect', i883[i + 0]));
  }
  i874.m_UsedGlyphRects = i882
  var i885 = i875[27]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('UnityEngine.TextCore.GlyphRect', i885[i + 0]));
  }
  i874.m_FreeGlyphRects = i884
  i874.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i875[28], i874.m_fontInfo)
  i874.m_AtlasWidth = i875[29]
  i874.m_AtlasHeight = i875[30]
  i874.m_AtlasPadding = i875[31]
  i874.m_AtlasRenderMode = i875[32]
  var i887 = i875[33]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(request.d('TMPro.TMP_Glyph', i887[i + 0]));
  }
  i874.m_glyphInfoList = i886
  i874.m_KerningTable = request.d('TMPro.KerningTable', i875[34], i874.m_KerningTable)
  i874.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i875[35], i874.m_FontFeatureTable)
  var i889 = i875[36]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 1, i888, '')
  }
  i874.fallbackFontAssets = i888
  var i891 = i875[37]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 1, i890, '')
  }
  i874.m_FallbackFontAssetTable = i890
  i874.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i875[38], i874.m_CreationSettings)
  var i893 = i875[39]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('TMPro.TMP_FontWeightPair', i893[i + 0]) );
  }
  i874.m_FontWeightTable = i892
  var i895 = i875[40]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('TMPro.TMP_FontWeightPair', i895[i + 0]) );
  }
  i874.fontWeights = i894
  return i874
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i897 = data
  i896.m_FaceIndex = i897[0]
  i896.m_FamilyName = i897[1]
  i896.m_StyleName = i897[2]
  i896.m_PointSize = i897[3]
  i896.m_Scale = i897[4]
  i896.m_UnitsPerEM = i897[5]
  i896.m_LineHeight = i897[6]
  i896.m_AscentLine = i897[7]
  i896.m_CapLine = i897[8]
  i896.m_MeanLine = i897[9]
  i896.m_Baseline = i897[10]
  i896.m_DescentLine = i897[11]
  i896.m_SuperscriptOffset = i897[12]
  i896.m_SuperscriptSize = i897[13]
  i896.m_SubscriptOffset = i897[14]
  i896.m_SubscriptSize = i897[15]
  i896.m_UnderlineOffset = i897[16]
  i896.m_UnderlineThickness = i897[17]
  i896.m_StrikethroughOffset = i897[18]
  i896.m_StrikethroughThickness = i897[19]
  i896.m_TabWidth = i897[20]
  return i896
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i901 = data
  i900.m_Index = i901[0]
  i900.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i901[1], i900.m_Metrics)
  i900.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i901[2], i900.m_GlyphRect)
  i900.m_Scale = i901[3]
  i900.m_AtlasIndex = i901[4]
  i900.m_ClassDefinitionType = i901[5]
  return i900
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i903 = data
  i902.m_Width = i903[0]
  i902.m_Height = i903[1]
  i902.m_HorizontalBearingX = i903[2]
  i902.m_HorizontalBearingY = i903[3]
  i902.m_HorizontalAdvance = i903[4]
  return i902
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i905 = data
  i904.m_X = i905[0]
  i904.m_Y = i905[1]
  i904.m_Width = i905[2]
  i904.m_Height = i905[3]
  return i904
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i908 = root || request.c( 'TMPro.TMP_Character' )
  var i909 = data
  i908.m_ElementType = i909[0]
  i908.m_Unicode = i909[1]
  i908.m_GlyphIndex = i909[2]
  i908.m_Scale = i909[3]
  return i908
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i915 = data
  i914.Name = i915[0]
  i914.PointSize = i915[1]
  i914.Scale = i915[2]
  i914.CharacterCount = i915[3]
  i914.LineHeight = i915[4]
  i914.Baseline = i915[5]
  i914.Ascender = i915[6]
  i914.CapHeight = i915[7]
  i914.Descender = i915[8]
  i914.CenterLine = i915[9]
  i914.SuperscriptOffset = i915[10]
  i914.SubscriptOffset = i915[11]
  i914.SubSize = i915[12]
  i914.Underline = i915[13]
  i914.UnderlineThickness = i915[14]
  i914.strikethrough = i915[15]
  i914.strikethroughThickness = i915[16]
  i914.TabWidth = i915[17]
  i914.Padding = i915[18]
  i914.AtlasWidth = i915[19]
  i914.AtlasHeight = i915[20]
  return i914
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i918 = root || request.c( 'TMPro.TMP_Glyph' )
  var i919 = data
  i918.id = i919[0]
  i918.x = i919[1]
  i918.y = i919[2]
  i918.width = i919[3]
  i918.height = i919[4]
  i918.xOffset = i919[5]
  i918.yOffset = i919[6]
  i918.xAdvance = i919[7]
  i918.scale = i919[8]
  return i918
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.KerningTable' )
  var i921 = data
  var i923 = i921[0]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i923.length; i += 1) {
    i922.add(request.d('TMPro.KerningPair', i923[i + 0]));
  }
  i920.kerningPairs = i922
  return i920
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.KerningPair' )
  var i927 = data
  i926.xOffset = i927[0]
  i926.m_FirstGlyph = i927[1]
  i926.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i927[2], i926.m_FirstGlyphAdjustments)
  i926.m_SecondGlyph = i927[3]
  i926.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i927[4], i926.m_SecondGlyphAdjustments)
  i926.m_IgnoreSpacingAdjustments = !!i927[5]
  return i926
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i928 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i929 = data
  var i931 = i929[0]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i931.length; i += 1) {
    i930.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i931[i + 0]));
  }
  i928.m_GlyphPairAdjustmentRecords = i930
  return i928
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i935 = data
  i934.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i935[0], i934.m_FirstAdjustmentRecord)
  i934.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i935[1], i934.m_SecondAdjustmentRecord)
  i934.m_FeatureLookupFlags = i935[2]
  return i934
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i936 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i937 = data
  i936.m_GlyphIndex = i937[0]
  i936.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i937[1], i936.m_GlyphValueRecord)
  return i936
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i939 = data
  i938.m_XPlacement = i939[0]
  i938.m_YPlacement = i939[1]
  i938.m_XAdvance = i939[2]
  i938.m_YAdvance = i939[3]
  return i938
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i943 = data
  i942.sourceFontFileName = i943[0]
  i942.sourceFontFileGUID = i943[1]
  i942.pointSizeSamplingMode = i943[2]
  i942.pointSize = i943[3]
  i942.padding = i943[4]
  i942.packingMode = i943[5]
  i942.atlasWidth = i943[6]
  i942.atlasHeight = i943[7]
  i942.characterSetSelectionMode = i943[8]
  i942.characterSequence = i943[9]
  i942.referencedFontAssetGUID = i943[10]
  i942.referencedTextAssetGUID = i943[11]
  i942.fontStyle = i943[12]
  i942.fontStyleModifier = i943[13]
  i942.renderMode = i943[14]
  i942.includeFontFeatures = !!i943[15]
  return i942
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'regularTypeface')
  request.r(i947[2], i947[3], 0, i946, 'italicTypeface')
  return i946
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i948 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i949 = data
  i948.useSafeMode = !!i949[0]
  i948.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i949[1], i948.safeModeOptions)
  i948.timeScale = i949[2]
  i948.unscaledTimeScale = i949[3]
  i948.useSmoothDeltaTime = !!i949[4]
  i948.maxSmoothUnscaledTime = i949[5]
  i948.rewindCallbackMode = i949[6]
  i948.showUnityEditorReport = !!i949[7]
  i948.logBehaviour = i949[8]
  i948.drawGizmos = !!i949[9]
  i948.defaultRecyclable = !!i949[10]
  i948.defaultAutoPlay = i949[11]
  i948.defaultUpdateType = i949[12]
  i948.defaultTimeScaleIndependent = !!i949[13]
  i948.defaultEaseType = i949[14]
  i948.defaultEaseOvershootOrAmplitude = i949[15]
  i948.defaultEasePeriod = i949[16]
  i948.defaultAutoKill = !!i949[17]
  i948.defaultLoopType = i949[18]
  i948.debugMode = !!i949[19]
  i948.debugStoreTargetId = !!i949[20]
  i948.showPreviewPanel = !!i949[21]
  i948.storeSettingsLocation = i949[22]
  i948.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i949[23], i948.modules)
  i948.createASMDEF = !!i949[24]
  i948.showPlayingTweens = !!i949[25]
  i948.showPausedTweens = !!i949[26]
  return i948
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i950 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i951 = data
  i950.logBehaviour = i951[0]
  i950.nestedTweenFailureBehaviour = i951[1]
  return i950
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i952 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i953 = data
  i952.showPanel = !!i953[0]
  i952.audioEnabled = !!i953[1]
  i952.physicsEnabled = !!i953[2]
  i952.physics2DEnabled = !!i953[3]
  i952.spriteEnabled = !!i953[4]
  i952.uiEnabled = !!i953[5]
  i952.textMeshProEnabled = !!i953[6]
  i952.tk2DEnabled = !!i953[7]
  i952.deAudioEnabled = !!i953[8]
  i952.deUnityExtendedEnabled = !!i953[9]
  i952.epoOutlineEnabled = !!i953[10]
  return i952
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.TMP_Settings' )
  var i955 = data
  i954.m_enableWordWrapping = !!i955[0]
  i954.m_enableKerning = !!i955[1]
  i954.m_enableExtraPadding = !!i955[2]
  i954.m_enableTintAllSprites = !!i955[3]
  i954.m_enableParseEscapeCharacters = !!i955[4]
  i954.m_EnableRaycastTarget = !!i955[5]
  i954.m_GetFontFeaturesAtRuntime = !!i955[6]
  i954.m_missingGlyphCharacter = i955[7]
  i954.m_warningsDisabled = !!i955[8]
  request.r(i955[9], i955[10], 0, i954, 'm_defaultFontAsset')
  i954.m_defaultFontAssetPath = i955[11]
  i954.m_defaultFontSize = i955[12]
  i954.m_defaultAutoSizeMinRatio = i955[13]
  i954.m_defaultAutoSizeMaxRatio = i955[14]
  i954.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i955[15], i955[16] )
  i954.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i955[17], i955[18] )
  i954.m_autoSizeTextContainer = !!i955[19]
  i954.m_IsTextObjectScaleStatic = !!i955[20]
  var i957 = i955[21]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 1, i956, '')
  }
  i954.m_fallbackFontAssets = i956
  i954.m_matchMaterialPreset = !!i955[22]
  request.r(i955[23], i955[24], 0, i954, 'm_defaultSpriteAsset')
  i954.m_defaultSpriteAssetPath = i955[25]
  i954.m_enableEmojiSupport = !!i955[26]
  i954.m_MissingCharacterSpriteUnicode = i955[27]
  i954.m_defaultColorGradientPresetsPath = i955[28]
  request.r(i955[29], i955[30], 0, i954, 'm_defaultStyleSheet')
  i954.m_StyleSheetsResourcePath = i955[31]
  request.r(i955[32], i955[33], 0, i954, 'm_leadingCharacters')
  request.r(i955[34], i955[35], 0, i954, 'm_followingCharacters')
  i954.m_UseModernHangulLineBreakingRules = !!i955[36]
  return i954
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i959 = data
  i958.hashCode = i959[0]
  request.r(i959[1], i959[2], 0, i958, 'material')
  i958.materialHashCode = i959[3]
  request.r(i959[4], i959[5], 0, i958, 'spriteSheet')
  var i961 = i959[6]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i961.length; i += 1) {
    i960.add(request.d('TMPro.TMP_Sprite', i961[i + 0]));
  }
  i958.spriteInfoList = i960
  var i963 = i959[7]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i963.length; i += 2) {
  request.r(i963[i + 0], i963[i + 1], 1, i962, '')
  }
  i958.fallbackSpriteAssets = i962
  i958.m_Version = i959[8]
  i958.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i959[9], i958.m_FaceInfo)
  var i965 = i959[10]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i965.length; i += 1) {
    i964.add(request.d('TMPro.TMP_SpriteCharacter', i965[i + 0]));
  }
  i958.m_SpriteCharacterTable = i964
  var i967 = i959[11]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(request.d('TMPro.TMP_SpriteGlyph', i967[i + 0]));
  }
  i958.m_SpriteGlyphTable = i966
  return i958
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.TMP_Sprite' )
  var i971 = data
  i970.name = i971[0]
  i970.hashCode = i971[1]
  i970.unicode = i971[2]
  i970.pivot = new pc.Vec2( i971[3], i971[4] )
  request.r(i971[5], i971[6], 0, i970, 'sprite')
  i970.id = i971[7]
  i970.x = i971[8]
  i970.y = i971[9]
  i970.width = i971[10]
  i970.height = i971[11]
  i970.xOffset = i971[12]
  i970.yOffset = i971[13]
  i970.xAdvance = i971[14]
  i970.scale = i971[15]
  return i970
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i977 = data
  i976.m_Name = i977[0]
  i976.m_HashCode = i977[1]
  i976.m_ElementType = i977[2]
  i976.m_Unicode = i977[3]
  i976.m_GlyphIndex = i977[4]
  i976.m_Scale = i977[5]
  return i976
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'sprite')
  i980.m_Index = i981[2]
  i980.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i981[3], i980.m_Metrics)
  i980.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i981[4], i980.m_GlyphRect)
  i980.m_Scale = i981[5]
  i980.m_AtlasIndex = i981[6]
  i980.m_ClassDefinitionType = i981[7]
  return i980
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i983 = data
  var i985 = i983[0]
  var i984 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i985.length; i += 1) {
    i984.add(request.d('TMPro.TMP_Style', i985[i + 0]));
  }
  i982.m_StyleList = i984
  return i982
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.TMP_Style' )
  var i989 = data
  i988.m_Name = i989[0]
  i988.m_HashCode = i989[1]
  i988.m_OpeningDefinition = i989[2]
  i988.m_ClosingDefinition = i989[3]
  i988.m_OpeningTagArray = i989[4]
  i988.m_ClosingTagArray = i989[5]
  i988.m_OpeningTagUnicodeArray = i989[6]
  i988.m_ClosingTagUnicodeArray = i989[7]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i991 = data
  var i993 = i991[0]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i993[i + 0]) );
  }
  i990.files = i992
  i990.componentToPrefabIds = i991[1]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i997 = data
  i996.path = i997[0]
  request.r(i997[1], i997[2], 0, i996, 'unityObject')
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i999 = data
  var i1001 = i999[0]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1001[i + 0]) );
  }
  i998.scriptsExecutionOrder = i1000
  var i1003 = i999[1]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1003[i + 0]) );
  }
  i998.sortingLayers = i1002
  var i1005 = i999[2]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1005[i + 0]) );
  }
  i998.cullingLayers = i1004
  i998.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i999[3], i998.timeSettings)
  i998.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i999[4], i998.physicsSettings)
  i998.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i999[5], i998.physics2DSettings)
  i998.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i999[6], i998.qualitySettings)
  i998.enableRealtimeShadows = !!i999[7]
  i998.enableAutoInstancing = !!i999[8]
  i998.enableDynamicBatching = !!i999[9]
  i998.lightmapEncodingQuality = i999[10]
  i998.desiredColorSpace = i999[11]
  var i1007 = i999[12]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( i1007[i + 0] );
  }
  i998.allTags = i1006
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1011 = data
  i1010.name = i1011[0]
  i1010.value = i1011[1]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1015 = data
  i1014.id = i1015[0]
  i1014.name = i1015[1]
  i1014.value = i1015[2]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1019 = data
  i1018.id = i1019[0]
  i1018.name = i1019[1]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1021 = data
  i1020.fixedDeltaTime = i1021[0]
  i1020.maximumDeltaTime = i1021[1]
  i1020.timeScale = i1021[2]
  i1020.maximumParticleTimestep = i1021[3]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1023 = data
  i1022.gravity = new pc.Vec3( i1023[0], i1023[1], i1023[2] )
  i1022.defaultSolverIterations = i1023[3]
  i1022.bounceThreshold = i1023[4]
  i1022.autoSyncTransforms = !!i1023[5]
  i1022.autoSimulation = !!i1023[6]
  var i1025 = i1023[7]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1025[i + 0]) );
  }
  i1022.collisionMatrix = i1024
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1029 = data
  i1028.enabled = !!i1029[0]
  i1028.layerId = i1029[1]
  i1028.otherLayerId = i1029[2]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'material')
  i1030.gravity = new pc.Vec2( i1031[2], i1031[3] )
  i1030.positionIterations = i1031[4]
  i1030.velocityIterations = i1031[5]
  i1030.velocityThreshold = i1031[6]
  i1030.maxLinearCorrection = i1031[7]
  i1030.maxAngularCorrection = i1031[8]
  i1030.maxTranslationSpeed = i1031[9]
  i1030.maxRotationSpeed = i1031[10]
  i1030.baumgarteScale = i1031[11]
  i1030.baumgarteTOIScale = i1031[12]
  i1030.timeToSleep = i1031[13]
  i1030.linearSleepTolerance = i1031[14]
  i1030.angularSleepTolerance = i1031[15]
  i1030.defaultContactOffset = i1031[16]
  i1030.autoSimulation = !!i1031[17]
  i1030.queriesHitTriggers = !!i1031[18]
  i1030.queriesStartInColliders = !!i1031[19]
  i1030.callbacksOnDisable = !!i1031[20]
  i1030.reuseCollisionCallbacks = !!i1031[21]
  i1030.autoSyncTransforms = !!i1031[22]
  var i1033 = i1031[23]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1033[i + 0]) );
  }
  i1030.collisionMatrix = i1032
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1037 = data
  i1036.enabled = !!i1037[0]
  i1036.layerId = i1037[1]
  i1036.otherLayerId = i1037[2]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1039 = data
  var i1041 = i1039[0]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1041[i + 0]) );
  }
  i1038.qualityLevels = i1040
  var i1043 = i1039[1]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( i1043[i + 0] );
  }
  i1038.names = i1042
  i1038.shadows = i1039[2]
  i1038.anisotropicFiltering = i1039[3]
  i1038.antiAliasing = i1039[4]
  i1038.lodBias = i1039[5]
  i1038.shadowCascades = i1039[6]
  i1038.shadowDistance = i1039[7]
  i1038.shadowmaskMode = i1039[8]
  i1038.shadowProjection = i1039[9]
  i1038.shadowResolution = i1039[10]
  i1038.softParticles = !!i1039[11]
  i1038.softVegetation = !!i1039[12]
  i1038.activeColorSpace = i1039[13]
  i1038.desiredColorSpace = i1039[14]
  i1038.masterTextureLimit = i1039[15]
  i1038.maxQueuedFrames = i1039[16]
  i1038.particleRaycastBudget = i1039[17]
  i1038.pixelLightCount = i1039[18]
  i1038.realtimeReflectionProbes = !!i1039[19]
  i1038.shadowCascade2Split = i1039[20]
  i1038.shadowCascade4Split = new pc.Vec3( i1039[21], i1039[22], i1039[23] )
  i1038.streamingMipmapsActive = !!i1039[24]
  i1038.vSyncCount = i1039[25]
  i1038.asyncUploadBufferSize = i1039[26]
  i1038.asyncUploadTimeSlice = i1039[27]
  i1038.billboardsFaceCameraPosition = !!i1039[28]
  i1038.shadowNearPlaneOffset = i1039[29]
  i1038.streamingMipmapsMemoryBudget = i1039[30]
  i1038.maximumLODLevel = i1039[31]
  i1038.streamingMipmapsAddAllCameras = !!i1039[32]
  i1038.streamingMipmapsMaxLevelReduction = i1039[33]
  i1038.streamingMipmapsRenderersPerFrame = i1039[34]
  i1038.resolutionScalingFixedDPIFactor = i1039[35]
  i1038.streamingMipmapsMaxFileIORequests = i1039[36]
  i1038.currentQualityLevel = i1039[37]
  return i1038
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1046 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1047 = data
  i1046.xPlacement = i1047[0]
  i1046.yPlacement = i1047[1]
  i1046.xAdvance = i1047[2]
  i1046.yAdvance = i1047[3]
  return i1046
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[17],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[17],"80":[81],"82":[83],"84":[83],"22":[2],"36":[11],"85":[2],"86":[87],"88":[89],"90":[87],"91":[2],"92":[2],"24":[22],"6":[3,2],"93":[2],"23":[22],"32":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[2],"101":[2],"102":[3,2],"103":[2],"104":[2],"105":[2],"106":[2],"107":[3,2],"108":[2],"109":[38],"110":[38],"39":[38],"111":[38],"112":[17],"113":[17],"114":[115],"116":[17],"117":[2],"118":[81,2],"13":[2,3],"119":[2],"120":[3,2],"121":[81],"122":[3,2],"123":[2],"124":[87]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.UI.Button","Source.ClickCta","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","MixImage","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "21.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "MixVersion41241248";

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

Deserializers.buildID = "44634d91-d565-46dc-aa40-37870f3f3417";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

