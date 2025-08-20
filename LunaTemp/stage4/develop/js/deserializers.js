var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointSpring' )
  var i527 = data
  i526.spring = i527[0]
  i526.damper = i527[1]
  i526.targetPosition = i527[2]
  return i526
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointMotor' )
  var i529 = data
  i528.m_TargetVelocity = i529[0]
  i528.m_Force = i529[1]
  i528.m_FreeSpin = i529[2]
  return i528
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointLimits' )
  var i531 = data
  i530.m_Min = i531[0]
  i530.m_Max = i531[1]
  i530.m_Bounciness = i531[2]
  i530.m_BounceMinVelocity = i531[3]
  i530.m_ContactDistance = i531[4]
  i530.minBounce = i531[5]
  i530.maxBounce = i531[6]
  return i530
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointDrive' )
  var i533 = data
  i532.m_PositionSpring = i533[0]
  i532.m_PositionDamper = i533[1]
  i532.m_MaximumForce = i533[2]
  i532.m_UseAcceleration = i533[3]
  return i532
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i535 = data
  i534.m_Spring = i535[0]
  i534.m_Damper = i535[1]
  return i534
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i537 = data
  i536.m_Limit = i537[0]
  i536.m_Bounciness = i537[1]
  i536.m_ContactDistance = i537[2]
  return i536
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i539 = data
  i538.m_ExtremumSlip = i539[0]
  i538.m_ExtremumValue = i539[1]
  i538.m_AsymptoteSlip = i539[2]
  i538.m_AsymptoteValue = i539[3]
  i538.m_Stiffness = i539[4]
  return i538
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i541 = data
  i540.m_LowerAngle = i541[0]
  i540.m_UpperAngle = i541[1]
  return i540
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i543 = data
  i542.m_MotorSpeed = i543[0]
  i542.m_MaximumMotorTorque = i543[1]
  return i542
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i545 = data
  i544.m_DampingRatio = i545[0]
  i544.m_Frequency = i545[1]
  i544.m_Angle = i545[2]
  return i544
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i547 = data
  i546.m_LowerTranslation = i547[0]
  i546.m_UpperTranslation = i547[1]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i549 = data
  i548.name = i549[0]
  i548.width = i549[1]
  i548.height = i549[2]
  i548.mipmapCount = i549[3]
  i548.anisoLevel = i549[4]
  i548.filterMode = i549[5]
  i548.hdr = !!i549[6]
  i548.format = i549[7]
  i548.wrapMode = i549[8]
  i548.alphaIsTransparency = !!i549[9]
  i548.alphaSource = i549[10]
  i548.graphicsFormat = i549[11]
  i548.sRGBTexture = !!i549[12]
  i548.desiredColorSpace = i549[13]
  i548.wrapU = i549[14]
  i548.wrapV = i549[15]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i550 = root || new pc.UnityMaterial()
  var i551 = data
  i550.name = i551[0]
  request.r(i551[1], i551[2], 0, i550, 'shader')
  i550.renderQueue = i551[3]
  i550.enableInstancing = !!i551[4]
  var i553 = i551[5]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i553[i + 0]) );
  }
  i550.floatParameters = i552
  var i555 = i551[6]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i555[i + 0]) );
  }
  i550.colorParameters = i554
  var i557 = i551[7]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i557[i + 0]) );
  }
  i550.vectorParameters = i556
  var i559 = i551[8]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i559[i + 0]) );
  }
  i550.textureParameters = i558
  var i561 = i551[9]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i561[i + 0]) );
  }
  i550.materialFlags = i560
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i565 = data
  i564.name = i565[0]
  i564.value = i565[1]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i569 = data
  i568.name = i569[0]
  i568.value = new pc.Color(i569[1], i569[2], i569[3], i569[4])
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i573 = data
  i572.name = i573[0]
  i572.value = new pc.Vec4( i573[1], i573[2], i573[3], i573[4] )
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i577 = data
  i576.name = i577[0]
  request.r(i577[1], i577[2], 0, i576, 'value')
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i581 = data
  i580.name = i581[0]
  i580.enabled = !!i581[1]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i583 = data
  i582.pivot = new pc.Vec2( i583[0], i583[1] )
  i582.anchorMin = new pc.Vec2( i583[2], i583[3] )
  i582.anchorMax = new pc.Vec2( i583[4], i583[5] )
  i582.sizeDelta = new pc.Vec2( i583[6], i583[7] )
  i582.anchoredPosition3D = new pc.Vec3( i583[8], i583[9], i583[10] )
  i582.rotation = new pc.Quat(i583[11], i583[12], i583[13], i583[14])
  i582.scale = new pc.Vec3( i583[15], i583[16], i583[17] )
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i585 = data
  i584.cullTransparentMesh = !!i585[0]
  return i584
}

Deserializers["People"] = function (request, data, root) {
  var i586 = root || request.c( 'People' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, '_readyImage')
  request.r(i587[2], i587[3], 0, i586, '_additiveImage1')
  request.r(i587[4], i587[5], 0, i586, '_additiveImage2')
  request.r(i587[6], i587[7], 0, i586, '_endPoint')
  request.r(i587[8], i587[9], 0, i586, 'Bank')
  request.r(i587[10], i587[11], 0, i586, '_sizeText')
  i586.CupType = i587[12]
  i586.JuiceType = i587[13]
  i586.AdditiveType1 = i587[14]
  i586.AdditiveType2 = i587[15]
  request.r(i587[16], i587[17], 0, i586, '_finishSound')
  request.r(i587[18], i587[19], 0, i586, '_happySlider')
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'clip')
  request.r(i589[2], i589[3], 0, i588, 'outputAudioMixerGroup')
  i588.playOnAwake = !!i589[4]
  i588.loop = !!i589[5]
  i588.time = i589[6]
  i588.volume = i589[7]
  i588.pitch = i589[8]
  i588.enabled = !!i589[9]
  return i588
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.Image' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'm_Sprite')
  i590.m_Type = i591[2]
  i590.m_PreserveAspect = !!i591[3]
  i590.m_FillCenter = !!i591[4]
  i590.m_FillMethod = i591[5]
  i590.m_FillAmount = i591[6]
  i590.m_FillClockwise = !!i591[7]
  i590.m_FillOrigin = i591[8]
  i590.m_UseSpriteMesh = !!i591[9]
  i590.m_PixelsPerUnitMultiplier = i591[10]
  request.r(i591[11], i591[12], 0, i590, 'm_Material')
  i590.m_Maskable = !!i591[13]
  i590.m_Color = new pc.Color(i591[14], i591[15], i591[16], i591[17])
  i590.m_RaycastTarget = !!i591[18]
  i590.m_RaycastPadding = new pc.Vec4( i591[19], i591[20], i591[21], i591[22] )
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i593 = data
  i592.name = i593[0]
  i592.tagId = i593[1]
  i592.enabled = !!i593[2]
  i592.isStatic = !!i593[3]
  i592.layer = i593[4]
  return i592
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.Button' )
  var i595 = data
  i594.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i595[0], i594.m_OnClick)
  i594.m_Navigation = request.d('UnityEngine.UI.Navigation', i595[1], i594.m_Navigation)
  i594.m_Transition = i595[2]
  i594.m_Colors = request.d('UnityEngine.UI.ColorBlock', i595[3], i594.m_Colors)
  i594.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i595[4], i594.m_SpriteState)
  i594.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i595[5], i594.m_AnimationTriggers)
  i594.m_Interactable = !!i595[6]
  request.r(i595[7], i595[8], 0, i594, 'm_TargetGraphic')
  return i594
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i597 = data
  i596.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i597[0], i596.m_PersistentCalls)
  return i596
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i599 = data
  var i601 = i599[0]
  var i600 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i601.length; i += 1) {
    i600.add(request.d('UnityEngine.Events.PersistentCall', i601[i + 0]));
  }
  i598.m_Calls = i600
  return i598
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'm_Target')
  i604.m_TargetAssemblyTypeName = i605[2]
  i604.m_MethodName = i605[3]
  i604.m_Mode = i605[4]
  i604.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i605[5], i604.m_Arguments)
  i604.m_CallState = i605[6]
  return i604
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'm_ObjectArgument')
  i606.m_ObjectArgumentAssemblyTypeName = i607[2]
  i606.m_IntArgument = i607[3]
  i606.m_FloatArgument = i607[4]
  i606.m_StringArgument = i607[5]
  i606.m_BoolArgument = !!i607[6]
  return i606
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i609 = data
  i608.m_Mode = i609[0]
  i608.m_WrapAround = !!i609[1]
  request.r(i609[2], i609[3], 0, i608, 'm_SelectOnUp')
  request.r(i609[4], i609[5], 0, i608, 'm_SelectOnDown')
  request.r(i609[6], i609[7], 0, i608, 'm_SelectOnLeft')
  request.r(i609[8], i609[9], 0, i608, 'm_SelectOnRight')
  return i608
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i611 = data
  i610.m_NormalColor = new pc.Color(i611[0], i611[1], i611[2], i611[3])
  i610.m_HighlightedColor = new pc.Color(i611[4], i611[5], i611[6], i611[7])
  i610.m_PressedColor = new pc.Color(i611[8], i611[9], i611[10], i611[11])
  i610.m_SelectedColor = new pc.Color(i611[12], i611[13], i611[14], i611[15])
  i610.m_DisabledColor = new pc.Color(i611[16], i611[17], i611[18], i611[19])
  i610.m_ColorMultiplier = i611[20]
  i610.m_FadeDuration = i611[21]
  return i610
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'm_HighlightedSprite')
  request.r(i613[2], i613[3], 0, i612, 'm_PressedSprite')
  request.r(i613[4], i613[5], 0, i612, 'm_SelectedSprite')
  request.r(i613[6], i613[7], 0, i612, 'm_DisabledSprite')
  return i612
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i615 = data
  i614.m_NormalTrigger = i615[0]
  i614.m_HighlightedTrigger = i615[1]
  i614.m_PressedTrigger = i615[2]
  i614.m_SelectedTrigger = i615[3]
  i614.m_DisabledTrigger = i615[4]
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

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.Slider' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'm_FillRect')
  request.r(i657[2], i657[3], 0, i656, 'm_HandleRect')
  i656.m_Direction = i657[4]
  i656.m_MinValue = i657[5]
  i656.m_MaxValue = i657[6]
  i656.m_WholeNumbers = !!i657[7]
  i656.m_Value = i657[8]
  i656.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i657[9], i656.m_OnValueChanged)
  i656.m_Navigation = request.d('UnityEngine.UI.Navigation', i657[10], i656.m_Navigation)
  i656.m_Transition = i657[11]
  i656.m_Colors = request.d('UnityEngine.UI.ColorBlock', i657[12], i656.m_Colors)
  i656.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i657[13], i656.m_SpriteState)
  i656.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i657[14], i656.m_AnimationTriggers)
  i656.m_Interactable = !!i657[15]
  request.r(i657[16], i657[17], 0, i656, 'm_TargetGraphic')
  return i656
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i659 = data
  i658.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i659[0], i658.m_PersistentCalls)
  return i658
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i660 = root || request.c( 'PeopleContainer' )
  var i661 = data
  var i663 = i661[0]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 1, i662, '')
  }
  i660.CurrentPeoples = i662
  var i665 = i661[1]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 1, i664, '')
  }
  i660._peoples = i664
  request.r(i661[2], i661[3], 0, i660, '_tutorialPeople')
  request.r(i661[4], i661[5], 0, i660, '_spawnPoint')
  request.r(i661[6], i661[7], 0, i660, '_point1')
  request.r(i661[8], i661[9], 0, i660, '_point2')
  request.r(i661[10], i661[11], 0, i660, '_endPoint')
  request.r(i661[12], i661[13], 0, i660, '_juiceConfig')
  request.r(i661[14], i661[15], 0, i660, '_tutorial')
  return i660
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i669 = data
  i668.m_HorizontalFit = i669[0]
  i668.m_VerticalFit = i669[1]
  return i668
}

Deserializers["BackImage"] = function (request, data, root) {
  var i670 = root || request.c( 'BackImage' )
  var i671 = data
  return i670
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i672 = root || request.c( 'AheadImage' )
  var i673 = data
  return i672
}

Deserializers["Order"] = function (request, data, root) {
  var i674 = root || request.c( 'Order' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, '_juiceAnimator')
  request.r(i675[2], i675[3], 0, i674, '_cupAnimator')
  request.r(i675[4], i675[5], 0, i674, '_canvasAnimator')
  i674.CupType = i675[6]
  i674.JuiceType = i675[7]
  i674.AdditiveType1 = i675[8]
  i674.AdditiveType2 = i675[9]
  i674.IsFree = !!i675[10]
  i674.IsSpriteReady = !!i675[11]
  i674.IsCupReady = !!i675[12]
  i674.IsJuiceReady = !!i675[13]
  i674.IsPouring = !!i675[14]
  request.r(i675[15], i675[16], 0, i674, '_iceButton')
  request.r(i675[17], i675[18], 0, i674, '_grassButton')
  request.r(i675[19], i675[20], 0, i674, '_juiceBallsButton')
  request.r(i675[21], i675[22], 0, i674, '_strawButton')
  request.r(i675[23], i675[24], 0, i674, '_bigCupButton')
  request.r(i675[25], i675[26], 0, i674, '_middleCupButton')
  request.r(i675[27], i675[28], 0, i674, '_smallCupButton')
  request.r(i675[29], i675[30], 0, i674, '_appleButton')
  request.r(i675[31], i675[32], 0, i674, '_orangeButton')
  request.r(i675[33], i675[34], 0, i674, '_multifruitButton')
  request.r(i675[35], i675[36], 0, i674, '_tomatoButton')
  request.r(i675[37], i675[38], 0, i674, '_cherryButton')
  request.r(i675[39], i675[40], 0, i674, '_smallRawJuiceImage')
  request.r(i675[41], i675[42], 0, i674, '_middleRawJuiceImage')
  request.r(i675[43], i675[44], 0, i674, '_bigRawJuiceImage')
  request.r(i675[45], i675[46], 0, i674, '_smallReadyJuiceImage')
  request.r(i675[47], i675[48], 0, i674, '_middleReadyJuiceImage')
  request.r(i675[49], i675[50], 0, i674, '_bigReadyJuiceImage')
  request.r(i675[51], i675[52], 0, i674, '_backImage')
  request.r(i675[53], i675[54], 0, i674, '_aheadImage')
  request.r(i675[55], i675[56], 0, i674, '_config')
  request.r(i675[57], i675[58], 0, i674, '_takeOrderButton')
  request.r(i675[59], i675[60], 0, i674, '_peopleContainer')
  request.r(i675[61], i675[62], 0, i674, '_tutorial')
  request.r(i675[63], i675[64], 0, i674, '_bText')
  request.r(i675[65], i675[66], 0, i674, '_mText')
  request.r(i675[67], i675[68], 0, i674, '_sText')
  request.r(i675[69], i675[70], 0, i674, '_garbageButton')
  request.r(i675[71], i675[72], 0, i674, '_clickSound')
  request.r(i675[73], i675[74], 0, i674, '_juiceSound')
  return i674
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i676 = root || request.c( 'Tutorial' )
  var i677 = data
  i676.IsTutorial = !!i677[0]
  request.r(i677[1], i677[2], 0, i676, 'Finger1')
  request.r(i677[3], i677[4], 0, i676, 'Finger2')
  request.r(i677[5], i677[6], 0, i676, 'Finger3')
  request.r(i677[7], i677[8], 0, i676, 'Finger4')
  request.r(i677[9], i677[10], 0, i676, 'Finger5')
  request.r(i677[11], i677[12], 0, i676, 'BuyBigCupFinger')
  request.r(i677[13], i677[14], 0, i676, 'BuyJuiceFinger')
  request.r(i677[15], i677[16], 0, i676, 'SmallCupButton')
  request.r(i677[17], i677[18], 0, i676, 'JuiceButton')
  request.r(i677[19], i677[20], 0, i676, 'StrawButton')
  request.r(i677[21], i677[22], 0, i676, 'AdditiveButton')
  request.r(i677[23], i677[24], 0, i676, 'ReadyButton')
  var i679 = i677[25]
  var i678 = []
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 2, i678, '')
  }
  i676.Buttons = i678
  request.r(i677[26], i677[27], 0, i676, 'Bank')
  return i676
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i682 = root || request.c( 'SoundSwitcher' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, '_onImage')
  request.r(i683[2], i683[3], 0, i682, '_offImage')
  return i682
}

Deserializers["ClickCta"] = function (request, data, root) {
  var i684 = root || request.c( 'ClickCta' )
  var i685 = data
  return i684
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'm_FirstSelected')
  i686.m_sendNavigationEvents = !!i687[2]
  i686.m_DragThreshold = i687[3]
  return i686
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i689 = data
  i688.m_HorizontalAxis = i689[0]
  i688.m_VerticalAxis = i689[1]
  i688.m_SubmitButton = i689[2]
  i688.m_CancelButton = i689[3]
  i688.m_InputActionsPerSecond = i689[4]
  i688.m_RepeatDelay = i689[5]
  i688.m_ForceModuleActive = !!i689[6]
  i688.m_SendPointerHoverToParent = !!i689[7]
  return i688
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i690 = root || request.c( 'JuiceConfig' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'EntityBigCup')
  request.r(i691[2], i691[3], 0, i690, 'TomatoBigCup')
  request.r(i691[4], i691[5], 0, i690, 'AppleBigCup')
  request.r(i691[6], i691[7], 0, i690, 'OrangeBigCup')
  request.r(i691[8], i691[9], 0, i690, 'CherryBigCup')
  request.r(i691[10], i691[11], 0, i690, 'MultifruitBigCup')
  request.r(i691[12], i691[13], 0, i690, 'TomatoBigStrawCup')
  request.r(i691[14], i691[15], 0, i690, 'MultifruitBigStrawCup')
  request.r(i691[16], i691[17], 0, i690, 'AppleBigStrawCup')
  request.r(i691[18], i691[19], 0, i690, 'OrangeBigStrawCup')
  request.r(i691[20], i691[21], 0, i690, 'CherryBigStrawCup')
  request.r(i691[22], i691[23], 0, i690, 'MultifruitBigBallsCup')
  request.r(i691[24], i691[25], 0, i690, 'TomatoBigBallsCup')
  request.r(i691[26], i691[27], 0, i690, 'AppleBigBallsCup')
  request.r(i691[28], i691[29], 0, i690, 'OrangeBigBallsCup')
  request.r(i691[30], i691[31], 0, i690, 'CherryBigBallsCup')
  request.r(i691[32], i691[33], 0, i690, 'EntityMiddleCup')
  request.r(i691[34], i691[35], 0, i690, 'TomatoMiddleCup')
  request.r(i691[36], i691[37], 0, i690, 'AppleMiddleCup')
  request.r(i691[38], i691[39], 0, i690, 'OrangeMiddleCup')
  request.r(i691[40], i691[41], 0, i690, 'CherryMiddleCup')
  request.r(i691[42], i691[43], 0, i690, 'MultifruitMiddleCup')
  request.r(i691[44], i691[45], 0, i690, 'TomatoMiddleStrawCup')
  request.r(i691[46], i691[47], 0, i690, 'MultifruitMiddleStrawCup')
  request.r(i691[48], i691[49], 0, i690, 'AppleMiddleStrawCup')
  request.r(i691[50], i691[51], 0, i690, 'OrangeMiddleStrawCup')
  request.r(i691[52], i691[53], 0, i690, 'CherryMiddleStrawCup')
  request.r(i691[54], i691[55], 0, i690, 'MultifruitMiddleBallsCup')
  request.r(i691[56], i691[57], 0, i690, 'TomatoMiddleBallsCup')
  request.r(i691[58], i691[59], 0, i690, 'AppleMiddleBallsCup')
  request.r(i691[60], i691[61], 0, i690, 'OrangeMiddleBallsCup')
  request.r(i691[62], i691[63], 0, i690, 'CherryMiddleBallsCup')
  request.r(i691[64], i691[65], 0, i690, 'EntitySmallCup')
  request.r(i691[66], i691[67], 0, i690, 'TomatoSmallCup')
  request.r(i691[68], i691[69], 0, i690, 'AppleSmallCup')
  request.r(i691[70], i691[71], 0, i690, 'OrangeSmallCup')
  request.r(i691[72], i691[73], 0, i690, 'CherrySmallCup')
  request.r(i691[74], i691[75], 0, i690, 'MultifruitSmallCup')
  request.r(i691[76], i691[77], 0, i690, 'TomatoSmallStrawCup')
  request.r(i691[78], i691[79], 0, i690, 'AppleSmallStrawCup')
  request.r(i691[80], i691[81], 0, i690, 'OrangeSmallStrawCup')
  request.r(i691[82], i691[83], 0, i690, 'CherrySmallStrawCup')
  request.r(i691[84], i691[85], 0, i690, 'MultifruitSmallStrawCup')
  request.r(i691[86], i691[87], 0, i690, 'AppleSmallBallsCup')
  request.r(i691[88], i691[89], 0, i690, 'TomatoSmallBallsCup')
  request.r(i691[90], i691[91], 0, i690, 'OrangeSmallBallsCup')
  request.r(i691[92], i691[93], 0, i690, 'CherrySmallBallsCup')
  request.r(i691[94], i691[95], 0, i690, 'MultifruitSmallBallsCup')
  request.r(i691[96], i691[97], 0, i690, 'JuiceBallAdditive')
  request.r(i691[98], i691[99], 0, i690, 'IceAdditive')
  request.r(i691[100], i691[101], 0, i690, 'GrassAdditive')
  return i690
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i692 = root || request.c( 'TouchIdleTimer' )
  var i693 = data
  return i692
}

Deserializers["Helper"] = function (request, data, root) {
  var i694 = root || request.c( 'Helper' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, '_smallCupFinger')
  request.r(i695[2], i695[3], 0, i694, '_middleCupFinger')
  request.r(i695[4], i695[5], 0, i694, '_bigCupFinger')
  request.r(i695[6], i695[7], 0, i694, '_iceFinger')
  request.r(i695[8], i695[9], 0, i694, '_grassFinger')
  request.r(i695[10], i695[11], 0, i694, '_juiceballFinger')
  request.r(i695[12], i695[13], 0, i694, '_appleFinger')
  request.r(i695[14], i695[15], 0, i694, '_cherryFinger')
  request.r(i695[16], i695[17], 0, i694, '_orangeFinger')
  request.r(i695[18], i695[19], 0, i694, '_multifruitFinger')
  request.r(i695[20], i695[21], 0, i694, '_tomatoFinger')
  request.r(i695[22], i695[23], 0, i694, '_strawFinger')
  request.r(i695[24], i695[25], 0, i694, '_readyFinger')
  var i697 = i695[26]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 1, i696, '')
  }
  i694._juiseButtons = i696
  request.r(i695[27], i695[28], 0, i694, '_peoples')
  request.r(i695[29], i695[30], 0, i694, '_tutorial')
  request.r(i695[31], i695[32], 0, i694, '_order')
  request.r(i695[33], i695[34], 0, i694, '_strawButton')
  request.r(i695[35], i695[36], 0, i694, '_bigCupButton')
  request.r(i695[37], i695[38], 0, i694, '_middleCupButton')
  request.r(i695[39], i695[40], 0, i694, '_smallCupButton')
  request.r(i695[41], i695[42], 0, i694, '_readyButton')
  request.r(i695[43], i695[44], 0, i694, '_grassButton')
  request.r(i695[45], i695[46], 0, i694, '_juiceballButton')
  request.r(i695[47], i695[48], 0, i694, '_iceButton')
  request.r(i695[49], i695[50], 0, i694, '_touchIdleTimer')
  request.r(i695[51], i695[52], 0, i694, '_finalScreen')
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i701 = data
  i700.ambientIntensity = i701[0]
  i700.reflectionIntensity = i701[1]
  i700.ambientMode = i701[2]
  i700.ambientLight = new pc.Color(i701[3], i701[4], i701[5], i701[6])
  i700.ambientSkyColor = new pc.Color(i701[7], i701[8], i701[9], i701[10])
  i700.ambientGroundColor = new pc.Color(i701[11], i701[12], i701[13], i701[14])
  i700.ambientEquatorColor = new pc.Color(i701[15], i701[16], i701[17], i701[18])
  i700.fogColor = new pc.Color(i701[19], i701[20], i701[21], i701[22])
  i700.fogEndDistance = i701[23]
  i700.fogStartDistance = i701[24]
  i700.fogDensity = i701[25]
  i700.fog = !!i701[26]
  request.r(i701[27], i701[28], 0, i700, 'skybox')
  i700.fogMode = i701[29]
  var i703 = i701[30]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i703[i + 0]) );
  }
  i700.lightmaps = i702
  i700.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i701[31], i700.lightProbes)
  i700.lightmapsMode = i701[32]
  i700.mixedBakeMode = i701[33]
  i700.environmentLightingMode = i701[34]
  i700.ambientProbe = new pc.SphericalHarmonicsL2(i701[35])
  i700.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i701[36])
  i700.useReferenceAmbientProbe = !!i701[37]
  request.r(i701[38], i701[39], 0, i700, 'customReflection')
  request.r(i701[40], i701[41], 0, i700, 'defaultReflection')
  i700.defaultReflectionMode = i701[42]
  i700.defaultReflectionResolution = i701[43]
  i700.sunLightObjectId = i701[44]
  i700.pixelLightCount = i701[45]
  i700.defaultReflectionHDR = !!i701[46]
  i700.hasLightDataAsset = !!i701[47]
  i700.hasManualGenerate = !!i701[48]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'lightmapColor')
  request.r(i707[2], i707[3], 0, i706, 'lightmapDirection')
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i708 = root || new UnityEngine.LightProbes()
  var i709 = data
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i717 = data
  var i719 = i717[0]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i719.length; i += 1) {
    i718.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i719[i + 0]));
  }
  i716.ShaderCompilationErrors = i718
  i716.name = i717[1]
  i716.guid = i717[2]
  var i721 = i717[3]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( i721[i + 0] );
  }
  i716.shaderDefinedKeywords = i720
  var i723 = i717[4]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i723[i + 0]) );
  }
  i716.passes = i722
  var i725 = i717[5]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i725[i + 0]) );
  }
  i716.usePasses = i724
  var i727 = i717[6]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i727[i + 0]) );
  }
  i716.defaultParameterValues = i726
  request.r(i717[7], i717[8], 0, i716, 'unityFallbackShader')
  i716.readDepth = !!i717[9]
  i716.isCreatedByShaderGraph = !!i717[10]
  i716.compiled = !!i717[11]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i731 = data
  i730.shaderName = i731[0]
  i730.errorMessage = i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i736 = root || new pc.UnityShaderPass()
  var i737 = data
  i736.id = i737[0]
  i736.subShaderIndex = i737[1]
  i736.name = i737[2]
  i736.passType = i737[3]
  i736.grabPassTextureName = i737[4]
  i736.usePass = !!i737[5]
  i736.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[6], i736.zTest)
  i736.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[7], i736.zWrite)
  i736.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[8], i736.culling)
  i736.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i737[9], i736.blending)
  i736.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i737[10], i736.alphaBlending)
  i736.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[11], i736.colorWriteMask)
  i736.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[12], i736.offsetUnits)
  i736.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[13], i736.offsetFactor)
  i736.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[14], i736.stencilRef)
  i736.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[15], i736.stencilReadMask)
  i736.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[16], i736.stencilWriteMask)
  i736.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i737[17], i736.stencilOp)
  i736.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i737[18], i736.stencilOpFront)
  i736.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i737[19], i736.stencilOpBack)
  var i739 = i737[20]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i739[i + 0]) );
  }
  i736.tags = i738
  var i741 = i737[21]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( i741[i + 0] );
  }
  i736.passDefinedKeywords = i740
  var i743 = i737[22]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i743[i + 0]) );
  }
  i736.passDefinedKeywordGroups = i742
  var i745 = i737[23]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i745[i + 0]) );
  }
  i736.variants = i744
  var i747 = i737[24]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i747[i + 0]) );
  }
  i736.excludedVariants = i746
  i736.hasDepthReader = !!i737[25]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i749 = data
  i748.val = i749[0]
  i748.name = i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i751 = data
  i750.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i751[0], i750.src)
  i750.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i751[1], i750.dst)
  i750.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i751[2], i750.op)
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i753 = data
  i752.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[0], i752.pass)
  i752.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[1], i752.fail)
  i752.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[2], i752.zFail)
  i752.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[3], i752.comp)
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i757 = data
  i756.name = i757[0]
  i756.value = i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i761 = data
  var i763 = i761[0]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( i763[i + 0] );
  }
  i760.keywords = i762
  i760.hasDiscard = !!i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i767 = data
  i766.passId = i767[0]
  i766.subShaderIndex = i767[1]
  var i769 = i767[2]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( i769[i + 0] );
  }
  i766.keywords = i768
  i766.vertexProgram = i767[3]
  i766.fragmentProgram = i767[4]
  i766.exportedForWebGl2 = !!i767[5]
  i766.readDepth = !!i767[6]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'shader')
  i772.pass = i773[2]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i777 = data
  i776.name = i777[0]
  i776.type = i777[1]
  i776.value = new pc.Vec4( i777[2], i777[3], i777[4], i777[5] )
  i776.textureValue = i777[6]
  i776.shaderPropertyFlag = i777[7]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i779 = data
  i778.name = i779[0]
  request.r(i779[1], i779[2], 0, i778, 'texture')
  i778.aabb = i779[3]
  i778.vertices = i779[4]
  i778.triangles = i779[5]
  i778.textureRect = UnityEngine.Rect.MinMaxRect(i779[6], i779[7], i779[8], i779[9])
  i778.packedRect = UnityEngine.Rect.MinMaxRect(i779[10], i779[11], i779[12], i779[13])
  i778.border = new pc.Vec4( i779[14], i779[15], i779[16], i779[17] )
  i778.transparency = i779[18]
  i778.bounds = i779[19]
  i778.pixelsPerUnit = i779[20]
  i778.textureWidth = i779[21]
  i778.textureHeight = i779[22]
  i778.nativeSize = new pc.Vec2( i779[23], i779[24] )
  i778.pivot = new pc.Vec2( i779[25], i779[26] )
  i778.textureRectOffset = new pc.Vec2( i779[27], i779[28] )
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i781 = data
  i780.name = i781[0]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i783 = data
  i782.name = i783[0]
  i782.wrapMode = i783[1]
  i782.isLooping = !!i783[2]
  i782.length = i783[3]
  var i785 = i783[4]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i785[i + 0]) );
  }
  i782.curves = i784
  var i787 = i783[5]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i787[i + 0]) );
  }
  i782.events = i786
  i782.halfPrecision = !!i783[6]
  i782._frameRate = i783[7]
  i782.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i783[8], i782.localBounds)
  i782.hasMuscleCurves = !!i783[9]
  var i789 = i783[10]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( i789[i + 0] );
  }
  i782.clipMuscleConstant = i788
  i782.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i783[11], i782.clipBindingConstant)
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i793 = data
  i792.path = i793[0]
  i792.hash = i793[1]
  i792.componentType = i793[2]
  i792.property = i793[3]
  i792.keys = i793[4]
  var i795 = i793[5]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i795[i + 0]) );
  }
  i792.objectReferenceKeys = i794
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i799 = data
  i798.time = i799[0]
  request.r(i799[1], i799[2], 0, i798, 'value')
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i803 = data
  i802.functionName = i803[0]
  i802.floatParameter = i803[1]
  i802.intParameter = i803[2]
  i802.stringParameter = i803[3]
  request.r(i803[4], i803[5], 0, i802, 'objectReferenceParameter')
  i802.time = i803[6]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i805 = data
  i804.center = new pc.Vec3( i805[0], i805[1], i805[2] )
  i804.extends = new pc.Vec3( i805[3], i805[4], i805[5] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i809 = data
  var i811 = i809[0]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( i811[i + 0] );
  }
  i808.genericBindings = i810
  var i813 = i809[1]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( i813[i + 0] );
  }
  i808.pptrCurveMapping = i812
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i815 = data
  i814.name = i815[0]
  i814.ascent = i815[1]
  i814.originalLineHeight = i815[2]
  i814.fontSize = i815[3]
  var i817 = i815[4]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i817[i + 0]) );
  }
  i814.characterInfo = i816
  request.r(i815[5], i815[6], 0, i814, 'texture')
  i814.originalFontSize = i815[7]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i821 = data
  i820.index = i821[0]
  i820.advance = i821[1]
  i820.bearing = i821[2]
  i820.glyphWidth = i821[3]
  i820.glyphHeight = i821[4]
  i820.minX = i821[5]
  i820.maxX = i821[6]
  i820.minY = i821[7]
  i820.maxY = i821[8]
  i820.uvBottomLeftX = i821[9]
  i820.uvBottomLeftY = i821[10]
  i820.uvBottomRightX = i821[11]
  i820.uvBottomRightY = i821[12]
  i820.uvTopLeftX = i821[13]
  i820.uvTopLeftY = i821[14]
  i820.uvTopRightX = i821[15]
  i820.uvTopRightY = i821[16]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i823 = data
  i822.name = i823[0]
  var i825 = i823[1]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i825[i + 0]) );
  }
  i822.layers = i824
  var i827 = i823[2]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i827[i + 0]) );
  }
  i822.parameters = i826
  i822.animationClips = i823[3]
  i822.avatarUnsupported = i823[4]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i831 = data
  i830.name = i831[0]
  i830.defaultWeight = i831[1]
  i830.blendingMode = i831[2]
  i830.avatarMask = i831[3]
  i830.syncedLayerIndex = i831[4]
  i830.syncedLayerAffectsTiming = !!i831[5]
  i830.syncedLayers = i831[6]
  i830.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i831[7], i830.stateMachine)
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i833 = data
  i832.id = i833[0]
  i832.name = i833[1]
  i832.path = i833[2]
  var i835 = i833[3]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i835[i + 0]) );
  }
  i832.states = i834
  var i837 = i833[4]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i837[i + 0]) );
  }
  i832.machines = i836
  var i839 = i833[5]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i839[i + 0]) );
  }
  i832.entryStateTransitions = i838
  var i841 = i833[6]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i841[i + 0]) );
  }
  i832.exitStateTransitions = i840
  var i843 = i833[7]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i843[i + 0]) );
  }
  i832.anyStateTransitions = i842
  i832.defaultStateId = i833[8]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i847 = data
  i846.id = i847[0]
  i846.name = i847[1]
  i846.cycleOffset = i847[2]
  i846.cycleOffsetParameter = i847[3]
  i846.cycleOffsetParameterActive = !!i847[4]
  i846.mirror = !!i847[5]
  i846.mirrorParameter = i847[6]
  i846.mirrorParameterActive = !!i847[7]
  i846.motionId = i847[8]
  i846.nameHash = i847[9]
  i846.fullPathHash = i847[10]
  i846.speed = i847[11]
  i846.speedParameter = i847[12]
  i846.speedParameterActive = !!i847[13]
  i846.tag = i847[14]
  i846.tagHash = i847[15]
  i846.writeDefaultValues = !!i847[16]
  var i849 = i847[17]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.behaviours = i848
  var i851 = i847[18]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i851[i + 0]) );
  }
  i846.transitions = i850
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i857 = data
  i856.fullPath = i857[0]
  i856.canTransitionToSelf = !!i857[1]
  i856.duration = i857[2]
  i856.exitTime = i857[3]
  i856.hasExitTime = !!i857[4]
  i856.hasFixedDuration = !!i857[5]
  i856.interruptionSource = i857[6]
  i856.offset = i857[7]
  i856.orderedInterruption = !!i857[8]
  i856.destinationStateId = i857[9]
  i856.isExit = !!i857[10]
  i856.mute = !!i857[11]
  i856.solo = !!i857[12]
  var i859 = i857[13]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i859[i + 0]) );
  }
  i856.conditions = i858
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i865 = data
  i864.destinationStateId = i865[0]
  i864.isExit = !!i865[1]
  i864.mute = !!i865[2]
  i864.solo = !!i865[3]
  var i867 = i865[4]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i867[i + 0]) );
  }
  i864.conditions = i866
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i871 = data
  i870.mode = i871[0]
  i870.parameter = i871[1]
  i870.threshold = i871[2]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i875 = data
  i874.defaultBool = !!i875[0]
  i874.defaultFloat = i875[1]
  i874.defaultInt = i875[2]
  i874.name = i875[3]
  i874.nameHash = i875[4]
  i874.type = i875[5]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i877 = data
  i876.name = i877[0]
  i876.bytes64 = i877[1]
  i876.data = i877[2]
  return i876
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i879 = data
  i878.hashCode = i879[0]
  request.r(i879[1], i879[2], 0, i878, 'material')
  i878.materialHashCode = i879[3]
  request.r(i879[4], i879[5], 0, i878, 'atlas')
  i878.normalStyle = i879[6]
  i878.normalSpacingOffset = i879[7]
  i878.boldStyle = i879[8]
  i878.boldSpacing = i879[9]
  i878.italicStyle = i879[10]
  i878.tabSize = i879[11]
  i878.m_Version = i879[12]
  i878.m_SourceFontFileGUID = i879[13]
  request.r(i879[14], i879[15], 0, i878, 'm_SourceFontFile_EditorRef')
  request.r(i879[16], i879[17], 0, i878, 'm_SourceFontFile')
  i878.m_AtlasPopulationMode = i879[18]
  i878.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i879[19], i878.m_FaceInfo)
  var i881 = i879[20]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('UnityEngine.TextCore.Glyph', i881[i + 0]));
  }
  i878.m_GlyphTable = i880
  var i883 = i879[21]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('TMPro.TMP_Character', i883[i + 0]));
  }
  i878.m_CharacterTable = i882
  var i885 = i879[22]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i878.m_AtlasTextures = i884
  i878.m_AtlasTextureIndex = i879[23]
  i878.m_IsMultiAtlasTexturesEnabled = !!i879[24]
  i878.m_ClearDynamicDataOnBuild = !!i879[25]
  var i887 = i879[26]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(request.d('UnityEngine.TextCore.GlyphRect', i887[i + 0]));
  }
  i878.m_UsedGlyphRects = i886
  var i889 = i879[27]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('UnityEngine.TextCore.GlyphRect', i889[i + 0]));
  }
  i878.m_FreeGlyphRects = i888
  i878.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i879[28], i878.m_fontInfo)
  i878.m_AtlasWidth = i879[29]
  i878.m_AtlasHeight = i879[30]
  i878.m_AtlasPadding = i879[31]
  i878.m_AtlasRenderMode = i879[32]
  var i891 = i879[33]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i891.length; i += 1) {
    i890.add(request.d('TMPro.TMP_Glyph', i891[i + 0]));
  }
  i878.m_glyphInfoList = i890
  i878.m_KerningTable = request.d('TMPro.KerningTable', i879[34], i878.m_KerningTable)
  i878.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i879[35], i878.m_FontFeatureTable)
  var i893 = i879[36]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 1, i892, '')
  }
  i878.fallbackFontAssets = i892
  var i895 = i879[37]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 1, i894, '')
  }
  i878.m_FallbackFontAssetTable = i894
  i878.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i879[38], i878.m_CreationSettings)
  var i897 = i879[39]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('TMPro.TMP_FontWeightPair', i897[i + 0]) );
  }
  i878.m_FontWeightTable = i896
  var i899 = i879[40]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('TMPro.TMP_FontWeightPair', i899[i + 0]) );
  }
  i878.fontWeights = i898
  return i878
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i901 = data
  i900.m_FaceIndex = i901[0]
  i900.m_FamilyName = i901[1]
  i900.m_StyleName = i901[2]
  i900.m_PointSize = i901[3]
  i900.m_Scale = i901[4]
  i900.m_UnitsPerEM = i901[5]
  i900.m_LineHeight = i901[6]
  i900.m_AscentLine = i901[7]
  i900.m_CapLine = i901[8]
  i900.m_MeanLine = i901[9]
  i900.m_Baseline = i901[10]
  i900.m_DescentLine = i901[11]
  i900.m_SuperscriptOffset = i901[12]
  i900.m_SuperscriptSize = i901[13]
  i900.m_SubscriptOffset = i901[14]
  i900.m_SubscriptSize = i901[15]
  i900.m_UnderlineOffset = i901[16]
  i900.m_UnderlineThickness = i901[17]
  i900.m_StrikethroughOffset = i901[18]
  i900.m_StrikethroughThickness = i901[19]
  i900.m_TabWidth = i901[20]
  return i900
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i905 = data
  i904.m_Index = i905[0]
  i904.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i905[1], i904.m_Metrics)
  i904.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i905[2], i904.m_GlyphRect)
  i904.m_Scale = i905[3]
  i904.m_AtlasIndex = i905[4]
  i904.m_ClassDefinitionType = i905[5]
  return i904
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i907 = data
  i906.m_Width = i907[0]
  i906.m_Height = i907[1]
  i906.m_HorizontalBearingX = i907[2]
  i906.m_HorizontalBearingY = i907[3]
  i906.m_HorizontalAdvance = i907[4]
  return i906
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i909 = data
  i908.m_X = i909[0]
  i908.m_Y = i909[1]
  i908.m_Width = i909[2]
  i908.m_Height = i909[3]
  return i908
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.TMP_Character' )
  var i913 = data
  i912.m_ElementType = i913[0]
  i912.m_Unicode = i913[1]
  i912.m_GlyphIndex = i913[2]
  i912.m_Scale = i913[3]
  return i912
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i918 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i919 = data
  i918.Name = i919[0]
  i918.PointSize = i919[1]
  i918.Scale = i919[2]
  i918.CharacterCount = i919[3]
  i918.LineHeight = i919[4]
  i918.Baseline = i919[5]
  i918.Ascender = i919[6]
  i918.CapHeight = i919[7]
  i918.Descender = i919[8]
  i918.CenterLine = i919[9]
  i918.SuperscriptOffset = i919[10]
  i918.SubscriptOffset = i919[11]
  i918.SubSize = i919[12]
  i918.Underline = i919[13]
  i918.UnderlineThickness = i919[14]
  i918.strikethrough = i919[15]
  i918.strikethroughThickness = i919[16]
  i918.TabWidth = i919[17]
  i918.Padding = i919[18]
  i918.AtlasWidth = i919[19]
  i918.AtlasHeight = i919[20]
  return i918
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.TMP_Glyph' )
  var i923 = data
  i922.id = i923[0]
  i922.x = i923[1]
  i922.y = i923[2]
  i922.width = i923[3]
  i922.height = i923[4]
  i922.xOffset = i923[5]
  i922.yOffset = i923[6]
  i922.xAdvance = i923[7]
  i922.scale = i923[8]
  return i922
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i924 = root || request.c( 'TMPro.KerningTable' )
  var i925 = data
  var i927 = i925[0]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('TMPro.KerningPair', i927[i + 0]));
  }
  i924.kerningPairs = i926
  return i924
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.KerningPair' )
  var i931 = data
  i930.xOffset = i931[0]
  i930.m_FirstGlyph = i931[1]
  i930.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i931[2], i930.m_FirstGlyphAdjustments)
  i930.m_SecondGlyph = i931[3]
  i930.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i931[4], i930.m_SecondGlyphAdjustments)
  i930.m_IgnoreSpacingAdjustments = !!i931[5]
  return i930
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i933 = data
  var i935 = i933[0]
  var i934 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i935.length; i += 1) {
    i934.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i935[i + 0]));
  }
  i932.m_GlyphPairAdjustmentRecords = i934
  return i932
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i939 = data
  i938.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i939[0], i938.m_FirstAdjustmentRecord)
  i938.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i939[1], i938.m_SecondAdjustmentRecord)
  i938.m_FeatureLookupFlags = i939[2]
  return i938
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i940 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i941 = data
  i940.m_GlyphIndex = i941[0]
  i940.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i941[1], i940.m_GlyphValueRecord)
  return i940
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i943 = data
  i942.m_XPlacement = i943[0]
  i942.m_YPlacement = i943[1]
  i942.m_XAdvance = i943[2]
  i942.m_YAdvance = i943[3]
  return i942
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i947 = data
  i946.sourceFontFileName = i947[0]
  i946.sourceFontFileGUID = i947[1]
  i946.pointSizeSamplingMode = i947[2]
  i946.pointSize = i947[3]
  i946.padding = i947[4]
  i946.packingMode = i947[5]
  i946.atlasWidth = i947[6]
  i946.atlasHeight = i947[7]
  i946.characterSetSelectionMode = i947[8]
  i946.characterSequence = i947[9]
  i946.referencedFontAssetGUID = i947[10]
  i946.referencedTextAssetGUID = i947[11]
  i946.fontStyle = i947[12]
  i946.fontStyleModifier = i947[13]
  i946.renderMode = i947[14]
  i946.includeFontFeatures = !!i947[15]
  return i946
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'regularTypeface')
  request.r(i951[2], i951[3], 0, i950, 'italicTypeface')
  return i950
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i952 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i953 = data
  i952.useSafeMode = !!i953[0]
  i952.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i953[1], i952.safeModeOptions)
  i952.timeScale = i953[2]
  i952.unscaledTimeScale = i953[3]
  i952.useSmoothDeltaTime = !!i953[4]
  i952.maxSmoothUnscaledTime = i953[5]
  i952.rewindCallbackMode = i953[6]
  i952.showUnityEditorReport = !!i953[7]
  i952.logBehaviour = i953[8]
  i952.drawGizmos = !!i953[9]
  i952.defaultRecyclable = !!i953[10]
  i952.defaultAutoPlay = i953[11]
  i952.defaultUpdateType = i953[12]
  i952.defaultTimeScaleIndependent = !!i953[13]
  i952.defaultEaseType = i953[14]
  i952.defaultEaseOvershootOrAmplitude = i953[15]
  i952.defaultEasePeriod = i953[16]
  i952.defaultAutoKill = !!i953[17]
  i952.defaultLoopType = i953[18]
  i952.debugMode = !!i953[19]
  i952.debugStoreTargetId = !!i953[20]
  i952.showPreviewPanel = !!i953[21]
  i952.storeSettingsLocation = i953[22]
  i952.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i953[23], i952.modules)
  i952.createASMDEF = !!i953[24]
  i952.showPlayingTweens = !!i953[25]
  i952.showPausedTweens = !!i953[26]
  return i952
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i954 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i955 = data
  i954.logBehaviour = i955[0]
  i954.nestedTweenFailureBehaviour = i955[1]
  return i954
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i956 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i957 = data
  i956.showPanel = !!i957[0]
  i956.audioEnabled = !!i957[1]
  i956.physicsEnabled = !!i957[2]
  i956.physics2DEnabled = !!i957[3]
  i956.spriteEnabled = !!i957[4]
  i956.uiEnabled = !!i957[5]
  i956.textMeshProEnabled = !!i957[6]
  i956.tk2DEnabled = !!i957[7]
  i956.deAudioEnabled = !!i957[8]
  i956.deUnityExtendedEnabled = !!i957[9]
  i956.epoOutlineEnabled = !!i957[10]
  return i956
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.TMP_Settings' )
  var i959 = data
  i958.m_enableWordWrapping = !!i959[0]
  i958.m_enableKerning = !!i959[1]
  i958.m_enableExtraPadding = !!i959[2]
  i958.m_enableTintAllSprites = !!i959[3]
  i958.m_enableParseEscapeCharacters = !!i959[4]
  i958.m_EnableRaycastTarget = !!i959[5]
  i958.m_GetFontFeaturesAtRuntime = !!i959[6]
  i958.m_missingGlyphCharacter = i959[7]
  i958.m_warningsDisabled = !!i959[8]
  request.r(i959[9], i959[10], 0, i958, 'm_defaultFontAsset')
  i958.m_defaultFontAssetPath = i959[11]
  i958.m_defaultFontSize = i959[12]
  i958.m_defaultAutoSizeMinRatio = i959[13]
  i958.m_defaultAutoSizeMaxRatio = i959[14]
  i958.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i959[15], i959[16] )
  i958.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i959[17], i959[18] )
  i958.m_autoSizeTextContainer = !!i959[19]
  i958.m_IsTextObjectScaleStatic = !!i959[20]
  var i961 = i959[21]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 1, i960, '')
  }
  i958.m_fallbackFontAssets = i960
  i958.m_matchMaterialPreset = !!i959[22]
  request.r(i959[23], i959[24], 0, i958, 'm_defaultSpriteAsset')
  i958.m_defaultSpriteAssetPath = i959[25]
  i958.m_enableEmojiSupport = !!i959[26]
  i958.m_MissingCharacterSpriteUnicode = i959[27]
  i958.m_defaultColorGradientPresetsPath = i959[28]
  request.r(i959[29], i959[30], 0, i958, 'm_defaultStyleSheet')
  i958.m_StyleSheetsResourcePath = i959[31]
  request.r(i959[32], i959[33], 0, i958, 'm_leadingCharacters')
  request.r(i959[34], i959[35], 0, i958, 'm_followingCharacters')
  i958.m_UseModernHangulLineBreakingRules = !!i959[36]
  return i958
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i963 = data
  i962.hashCode = i963[0]
  request.r(i963[1], i963[2], 0, i962, 'material')
  i962.materialHashCode = i963[3]
  request.r(i963[4], i963[5], 0, i962, 'spriteSheet')
  var i965 = i963[6]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i965.length; i += 1) {
    i964.add(request.d('TMPro.TMP_Sprite', i965[i + 0]));
  }
  i962.spriteInfoList = i964
  var i967 = i963[7]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 1, i966, '')
  }
  i962.fallbackSpriteAssets = i966
  i962.m_Version = i963[8]
  i962.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i963[9], i962.m_FaceInfo)
  var i969 = i963[10]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i969.length; i += 1) {
    i968.add(request.d('TMPro.TMP_SpriteCharacter', i969[i + 0]));
  }
  i962.m_SpriteCharacterTable = i968
  var i971 = i963[11]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i971.length; i += 1) {
    i970.add(request.d('TMPro.TMP_SpriteGlyph', i971[i + 0]));
  }
  i962.m_SpriteGlyphTable = i970
  return i962
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.TMP_Sprite' )
  var i975 = data
  i974.name = i975[0]
  i974.hashCode = i975[1]
  i974.unicode = i975[2]
  i974.pivot = new pc.Vec2( i975[3], i975[4] )
  request.r(i975[5], i975[6], 0, i974, 'sprite')
  i974.id = i975[7]
  i974.x = i975[8]
  i974.y = i975[9]
  i974.width = i975[10]
  i974.height = i975[11]
  i974.xOffset = i975[12]
  i974.yOffset = i975[13]
  i974.xAdvance = i975[14]
  i974.scale = i975[15]
  return i974
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i981 = data
  i980.m_Name = i981[0]
  i980.m_HashCode = i981[1]
  i980.m_ElementType = i981[2]
  i980.m_Unicode = i981[3]
  i980.m_GlyphIndex = i981[4]
  i980.m_Scale = i981[5]
  return i980
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'sprite')
  i984.m_Index = i985[2]
  i984.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i985[3], i984.m_Metrics)
  i984.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i985[4], i984.m_GlyphRect)
  i984.m_Scale = i985[5]
  i984.m_AtlasIndex = i985[6]
  i984.m_ClassDefinitionType = i985[7]
  return i984
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i987 = data
  var i989 = i987[0]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('TMPro.TMP_Style', i989[i + 0]));
  }
  i986.m_StyleList = i988
  return i986
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.TMP_Style' )
  var i993 = data
  i992.m_Name = i993[0]
  i992.m_HashCode = i993[1]
  i992.m_OpeningDefinition = i993[2]
  i992.m_ClosingDefinition = i993[3]
  i992.m_OpeningTagArray = i993[4]
  i992.m_ClosingTagArray = i993[5]
  i992.m_OpeningTagUnicodeArray = i993[6]
  i992.m_ClosingTagUnicodeArray = i993[7]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i995 = data
  var i997 = i995[0]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i997[i + 0]) );
  }
  i994.files = i996
  i994.componentToPrefabIds = i995[1]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1001 = data
  i1000.path = i1001[0]
  request.r(i1001[1], i1001[2], 0, i1000, 'unityObject')
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1005[i + 0]) );
  }
  i1002.scriptsExecutionOrder = i1004
  var i1007 = i1003[1]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1007[i + 0]) );
  }
  i1002.sortingLayers = i1006
  var i1009 = i1003[2]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1009[i + 0]) );
  }
  i1002.cullingLayers = i1008
  i1002.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1003[3], i1002.timeSettings)
  i1002.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1003[4], i1002.physicsSettings)
  i1002.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1003[5], i1002.physics2DSettings)
  i1002.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1003[6], i1002.qualitySettings)
  i1002.enableRealtimeShadows = !!i1003[7]
  i1002.enableAutoInstancing = !!i1003[8]
  i1002.enableDynamicBatching = !!i1003[9]
  i1002.lightmapEncodingQuality = i1003[10]
  i1002.desiredColorSpace = i1003[11]
  var i1011 = i1003[12]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( i1011[i + 0] );
  }
  i1002.allTags = i1010
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.value = i1015[1]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1019 = data
  i1018.id = i1019[0]
  i1018.name = i1019[1]
  i1018.value = i1019[2]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1023 = data
  i1022.id = i1023[0]
  i1022.name = i1023[1]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1025 = data
  i1024.fixedDeltaTime = i1025[0]
  i1024.maximumDeltaTime = i1025[1]
  i1024.timeScale = i1025[2]
  i1024.maximumParticleTimestep = i1025[3]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1027 = data
  i1026.gravity = new pc.Vec3( i1027[0], i1027[1], i1027[2] )
  i1026.defaultSolverIterations = i1027[3]
  i1026.bounceThreshold = i1027[4]
  i1026.autoSyncTransforms = !!i1027[5]
  i1026.autoSimulation = !!i1027[6]
  var i1029 = i1027[7]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1029[i + 0]) );
  }
  i1026.collisionMatrix = i1028
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1033 = data
  i1032.enabled = !!i1033[0]
  i1032.layerId = i1033[1]
  i1032.otherLayerId = i1033[2]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'material')
  i1034.gravity = new pc.Vec2( i1035[2], i1035[3] )
  i1034.positionIterations = i1035[4]
  i1034.velocityIterations = i1035[5]
  i1034.velocityThreshold = i1035[6]
  i1034.maxLinearCorrection = i1035[7]
  i1034.maxAngularCorrection = i1035[8]
  i1034.maxTranslationSpeed = i1035[9]
  i1034.maxRotationSpeed = i1035[10]
  i1034.baumgarteScale = i1035[11]
  i1034.baumgarteTOIScale = i1035[12]
  i1034.timeToSleep = i1035[13]
  i1034.linearSleepTolerance = i1035[14]
  i1034.angularSleepTolerance = i1035[15]
  i1034.defaultContactOffset = i1035[16]
  i1034.autoSimulation = !!i1035[17]
  i1034.queriesHitTriggers = !!i1035[18]
  i1034.queriesStartInColliders = !!i1035[19]
  i1034.callbacksOnDisable = !!i1035[20]
  i1034.reuseCollisionCallbacks = !!i1035[21]
  i1034.autoSyncTransforms = !!i1035[22]
  var i1037 = i1035[23]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1037[i + 0]) );
  }
  i1034.collisionMatrix = i1036
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1041 = data
  i1040.enabled = !!i1041[0]
  i1040.layerId = i1041[1]
  i1040.otherLayerId = i1041[2]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1043 = data
  var i1045 = i1043[0]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1045[i + 0]) );
  }
  i1042.qualityLevels = i1044
  var i1047 = i1043[1]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( i1047[i + 0] );
  }
  i1042.names = i1046
  i1042.shadows = i1043[2]
  i1042.anisotropicFiltering = i1043[3]
  i1042.antiAliasing = i1043[4]
  i1042.lodBias = i1043[5]
  i1042.shadowCascades = i1043[6]
  i1042.shadowDistance = i1043[7]
  i1042.shadowmaskMode = i1043[8]
  i1042.shadowProjection = i1043[9]
  i1042.shadowResolution = i1043[10]
  i1042.softParticles = !!i1043[11]
  i1042.softVegetation = !!i1043[12]
  i1042.activeColorSpace = i1043[13]
  i1042.desiredColorSpace = i1043[14]
  i1042.masterTextureLimit = i1043[15]
  i1042.maxQueuedFrames = i1043[16]
  i1042.particleRaycastBudget = i1043[17]
  i1042.pixelLightCount = i1043[18]
  i1042.realtimeReflectionProbes = !!i1043[19]
  i1042.shadowCascade2Split = i1043[20]
  i1042.shadowCascade4Split = new pc.Vec3( i1043[21], i1043[22], i1043[23] )
  i1042.streamingMipmapsActive = !!i1043[24]
  i1042.vSyncCount = i1043[25]
  i1042.asyncUploadBufferSize = i1043[26]
  i1042.asyncUploadTimeSlice = i1043[27]
  i1042.billboardsFaceCameraPosition = !!i1043[28]
  i1042.shadowNearPlaneOffset = i1043[29]
  i1042.streamingMipmapsMemoryBudget = i1043[30]
  i1042.maximumLODLevel = i1043[31]
  i1042.streamingMipmapsAddAllCameras = !!i1043[32]
  i1042.streamingMipmapsMaxLevelReduction = i1043[33]
  i1042.streamingMipmapsRenderersPerFrame = i1043[34]
  i1042.resolutionScalingFixedDPIFactor = i1043[35]
  i1042.streamingMipmapsMaxFileIORequests = i1043[36]
  i1042.currentQualityLevel = i1043[37]
  return i1042
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1051 = data
  i1050.xPlacement = i1051[0]
  i1050.yPlacement = i1051[1]
  i1050.xAdvance = i1051[2]
  i1050.yAdvance = i1051[3]
  return i1050
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[17],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[17],"81":[82],"83":[84],"85":[84],"22":[2],"36":[11],"86":[2],"87":[88],"89":[90],"91":[88],"92":[2],"93":[2],"24":[22],"6":[3,2],"94":[2],"23":[22],"32":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[2],"101":[2],"102":[2],"103":[3,2],"104":[2],"105":[2],"106":[2],"29":[2],"107":[3,2],"108":[2],"109":[39],"110":[39],"40":[39],"111":[39],"112":[17],"113":[17],"114":[115],"116":[17],"117":[2],"118":[82,2],"13":[2,3],"119":[2],"120":[3,2],"121":[82],"122":[3,2],"123":[2],"124":[88]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.Object","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","UnityEngine.UI.Slider","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","ClickCta","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "13.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Happy52";

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

Deserializers.buildID = "8bace323-50da-4d59-b66b-d2cfc0ac067e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

