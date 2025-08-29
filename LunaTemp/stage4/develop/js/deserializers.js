var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointSpring' )
  var i523 = data
  i522.spring = i523[0]
  i522.damper = i523[1]
  i522.targetPosition = i523[2]
  return i522
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointMotor' )
  var i525 = data
  i524.m_TargetVelocity = i525[0]
  i524.m_Force = i525[1]
  i524.m_FreeSpin = i525[2]
  return i524
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointLimits' )
  var i527 = data
  i526.m_Min = i527[0]
  i526.m_Max = i527[1]
  i526.m_Bounciness = i527[2]
  i526.m_BounceMinVelocity = i527[3]
  i526.m_ContactDistance = i527[4]
  i526.minBounce = i527[5]
  i526.maxBounce = i527[6]
  return i526
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointDrive' )
  var i529 = data
  i528.m_PositionSpring = i529[0]
  i528.m_PositionDamper = i529[1]
  i528.m_MaximumForce = i529[2]
  i528.m_UseAcceleration = i529[3]
  return i528
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i531 = data
  i530.m_Spring = i531[0]
  i530.m_Damper = i531[1]
  return i530
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i533 = data
  i532.m_Limit = i533[0]
  i532.m_Bounciness = i533[1]
  i532.m_ContactDistance = i533[2]
  return i532
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i535 = data
  i534.m_ExtremumSlip = i535[0]
  i534.m_ExtremumValue = i535[1]
  i534.m_AsymptoteSlip = i535[2]
  i534.m_AsymptoteValue = i535[3]
  i534.m_Stiffness = i535[4]
  return i534
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i537 = data
  i536.m_LowerAngle = i537[0]
  i536.m_UpperAngle = i537[1]
  return i536
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i539 = data
  i538.m_MotorSpeed = i539[0]
  i538.m_MaximumMotorTorque = i539[1]
  return i538
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i541 = data
  i540.m_DampingRatio = i541[0]
  i540.m_Frequency = i541[1]
  i540.m_Angle = i541[2]
  return i540
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i543 = data
  i542.m_LowerTranslation = i543[0]
  i542.m_UpperTranslation = i543[1]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i545 = data
  i544.name = i545[0]
  i544.width = i545[1]
  i544.height = i545[2]
  i544.mipmapCount = i545[3]
  i544.anisoLevel = i545[4]
  i544.filterMode = i545[5]
  i544.hdr = !!i545[6]
  i544.format = i545[7]
  i544.wrapMode = i545[8]
  i544.alphaIsTransparency = !!i545[9]
  i544.alphaSource = i545[10]
  i544.graphicsFormat = i545[11]
  i544.sRGBTexture = !!i545[12]
  i544.desiredColorSpace = i545[13]
  i544.wrapU = i545[14]
  i544.wrapV = i545[15]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i546 = root || new pc.UnityMaterial()
  var i547 = data
  i546.name = i547[0]
  request.r(i547[1], i547[2], 0, i546, 'shader')
  i546.renderQueue = i547[3]
  i546.enableInstancing = !!i547[4]
  var i549 = i547[5]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i549[i + 0]) );
  }
  i546.floatParameters = i548
  var i551 = i547[6]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i551[i + 0]) );
  }
  i546.colorParameters = i550
  var i553 = i547[7]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i553[i + 0]) );
  }
  i546.vectorParameters = i552
  var i555 = i547[8]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i555[i + 0]) );
  }
  i546.textureParameters = i554
  var i557 = i547[9]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i557[i + 0]) );
  }
  i546.materialFlags = i556
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i561 = data
  i560.name = i561[0]
  i560.value = i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i565 = data
  i564.name = i565[0]
  i564.value = new pc.Color(i565[1], i565[2], i565[3], i565[4])
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i569 = data
  i568.name = i569[0]
  i568.value = new pc.Vec4( i569[1], i569[2], i569[3], i569[4] )
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i573 = data
  i572.name = i573[0]
  request.r(i573[1], i573[2], 0, i572, 'value')
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i577 = data
  i576.name = i577[0]
  i576.enabled = !!i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i579 = data
  i578.pivot = new pc.Vec2( i579[0], i579[1] )
  i578.anchorMin = new pc.Vec2( i579[2], i579[3] )
  i578.anchorMax = new pc.Vec2( i579[4], i579[5] )
  i578.sizeDelta = new pc.Vec2( i579[6], i579[7] )
  i578.anchoredPosition3D = new pc.Vec3( i579[8], i579[9], i579[10] )
  i578.rotation = new pc.Quat(i579[11], i579[12], i579[13], i579[14])
  i578.scale = new pc.Vec3( i579[15], i579[16], i579[17] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i581 = data
  i580.cullTransparentMesh = !!i581[0]
  return i580
}

Deserializers["People"] = function (request, data, root) {
  var i582 = root || request.c( 'People' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, '_readyImage')
  request.r(i583[2], i583[3], 0, i582, '_additiveImage1')
  request.r(i583[4], i583[5], 0, i582, '_additiveImage2')
  request.r(i583[6], i583[7], 0, i582, '_endPoint')
  request.r(i583[8], i583[9], 0, i582, 'Bank')
  request.r(i583[10], i583[11], 0, i582, '_sizeText')
  i582.CupType = i583[12]
  i582.JuiceType = i583[13]
  i582.AdditiveType1 = i583[14]
  i582.AdditiveType2 = i583[15]
  request.r(i583[16], i583[17], 0, i582, '_finishSound')
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'clip')
  request.r(i585[2], i585[3], 0, i584, 'outputAudioMixerGroup')
  i584.playOnAwake = !!i585[4]
  i584.loop = !!i585[5]
  i584.time = i585[6]
  i584.volume = i585[7]
  i584.pitch = i585[8]
  i584.enabled = !!i585[9]
  return i584
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.UI.Image' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'm_Sprite')
  i586.m_Type = i587[2]
  i586.m_PreserveAspect = !!i587[3]
  i586.m_FillCenter = !!i587[4]
  i586.m_FillMethod = i587[5]
  i586.m_FillAmount = i587[6]
  i586.m_FillClockwise = !!i587[7]
  i586.m_FillOrigin = i587[8]
  i586.m_UseSpriteMesh = !!i587[9]
  i586.m_PixelsPerUnitMultiplier = i587[10]
  request.r(i587[11], i587[12], 0, i586, 'm_Material')
  i586.m_Maskable = !!i587[13]
  i586.m_Color = new pc.Color(i587[14], i587[15], i587[16], i587[17])
  i586.m_RaycastTarget = !!i587[18]
  i586.m_RaycastPadding = new pc.Vec4( i587[19], i587[20], i587[21], i587[22] )
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i589 = data
  i588.name = i589[0]
  i588.tagId = i589[1]
  i588.enabled = !!i589[2]
  i588.isStatic = !!i589[3]
  i588.layer = i589[4]
  return i588
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.Button' )
  var i591 = data
  i590.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i591[0], i590.m_OnClick)
  i590.m_Navigation = request.d('UnityEngine.UI.Navigation', i591[1], i590.m_Navigation)
  i590.m_Transition = i591[2]
  i590.m_Colors = request.d('UnityEngine.UI.ColorBlock', i591[3], i590.m_Colors)
  i590.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i591[4], i590.m_SpriteState)
  i590.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i591[5], i590.m_AnimationTriggers)
  i590.m_Interactable = !!i591[6]
  request.r(i591[7], i591[8], 0, i590, 'm_TargetGraphic')
  return i590
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i593 = data
  i592.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i593[0], i592.m_PersistentCalls)
  return i592
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i595 = data
  var i597 = i595[0]
  var i596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i597.length; i += 1) {
    i596.add(request.d('UnityEngine.Events.PersistentCall', i597[i + 0]));
  }
  i594.m_Calls = i596
  return i594
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'm_Target')
  i600.m_TargetAssemblyTypeName = i601[2]
  i600.m_MethodName = i601[3]
  i600.m_Mode = i601[4]
  i600.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i601[5], i600.m_Arguments)
  i600.m_CallState = i601[6]
  return i600
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'm_ObjectArgument')
  i602.m_ObjectArgumentAssemblyTypeName = i603[2]
  i602.m_IntArgument = i603[3]
  i602.m_FloatArgument = i603[4]
  i602.m_StringArgument = i603[5]
  i602.m_BoolArgument = !!i603[6]
  return i602
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i605 = data
  i604.m_Mode = i605[0]
  i604.m_WrapAround = !!i605[1]
  request.r(i605[2], i605[3], 0, i604, 'm_SelectOnUp')
  request.r(i605[4], i605[5], 0, i604, 'm_SelectOnDown')
  request.r(i605[6], i605[7], 0, i604, 'm_SelectOnLeft')
  request.r(i605[8], i605[9], 0, i604, 'm_SelectOnRight')
  return i604
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i607 = data
  i606.m_NormalColor = new pc.Color(i607[0], i607[1], i607[2], i607[3])
  i606.m_HighlightedColor = new pc.Color(i607[4], i607[5], i607[6], i607[7])
  i606.m_PressedColor = new pc.Color(i607[8], i607[9], i607[10], i607[11])
  i606.m_SelectedColor = new pc.Color(i607[12], i607[13], i607[14], i607[15])
  i606.m_DisabledColor = new pc.Color(i607[16], i607[17], i607[18], i607[19])
  i606.m_ColorMultiplier = i607[20]
  i606.m_FadeDuration = i607[21]
  return i606
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'm_HighlightedSprite')
  request.r(i609[2], i609[3], 0, i608, 'm_PressedSprite')
  request.r(i609[4], i609[5], 0, i608, 'm_SelectedSprite')
  request.r(i609[6], i609[7], 0, i608, 'm_DisabledSprite')
  return i608
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i611 = data
  i610.m_NormalTrigger = i611[0]
  i610.m_HighlightedTrigger = i611[1]
  i610.m_PressedTrigger = i611[2]
  i610.m_SelectedTrigger = i611[3]
  i610.m_DisabledTrigger = i611[4]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i623 = data
  i622.name = i623[0]
  i622.index = i623[1]
  i622.startup = !!i623[2]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i625 = data
  i624.position = new pc.Vec3( i625[0], i625[1], i625[2] )
  i624.scale = new pc.Vec3( i625[3], i625[4], i625[5] )
  i624.rotation = new pc.Quat(i625[6], i625[7], i625[8], i625[9])
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i627 = data
  i626.enabled = !!i627[0]
  i626.aspect = i627[1]
  i626.orthographic = !!i627[2]
  i626.orthographicSize = i627[3]
  i626.backgroundColor = new pc.Color(i627[4], i627[5], i627[6], i627[7])
  i626.nearClipPlane = i627[8]
  i626.farClipPlane = i627[9]
  i626.fieldOfView = i627[10]
  i626.depth = i627[11]
  i626.clearFlags = i627[12]
  i626.cullingMask = i627[13]
  i626.rect = i627[14]
  request.r(i627[15], i627[16], 0, i626, 'targetTexture')
  i626.usePhysicalProperties = !!i627[17]
  i626.focalLength = i627[18]
  i626.sensorSize = new pc.Vec2( i627[19], i627[20] )
  i626.lensShift = new pc.Vec2( i627[21], i627[22] )
  i626.gateFit = i627[23]
  i626.commandBufferCount = i627[24]
  i626.cameraType = i627[25]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'animatorController')
  request.r(i629[2], i629[3], 0, i628, 'avatar')
  i628.updateMode = i629[4]
  i628.hasTransformHierarchy = !!i629[5]
  i628.applyRootMotion = !!i629[6]
  var i631 = i629[7]
  var i630 = []
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 2, i630, '')
  }
  i628.humanBones = i630
  i628.enabled = !!i629[8]
  return i628
}

Deserializers["Bank"] = function (request, data, root) {
  var i634 = root || request.c( 'Bank' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'BuyBigCupButton')
  request.r(i635[2], i635[3], 0, i634, 'BigCupButton')
  request.r(i635[4], i635[5], 0, i634, 'MiddleCupButton')
  request.r(i635[6], i635[7], 0, i634, 'MoneyText')
  request.r(i635[8], i635[9], 0, i634, 'Tutorial')
  request.r(i635[10], i635[11], 0, i634, 'BuyAdditiveButton')
  request.r(i635[12], i635[13], 0, i634, 'BuyJuiceButton')
  request.r(i635[14], i635[15], 0, i634, 'JuiceButton1')
  request.r(i635[16], i635[17], 0, i634, 'JuiceButton2')
  request.r(i635[18], i635[19], 0, i634, 'JuiceButton3')
  request.r(i635[20], i635[21], 0, i634, 'Additive1Button')
  request.r(i635[22], i635[23], 0, i634, 'Additive2Button')
  i634.Money = i635[24]
  i634.IsBigCupBuy = !!i635[25]
  i634.IsJuiceBuy = !!i635[26]
  i634.IsAdditiveBuy = !!i635[27]
  request.r(i635[28], i635[29], 0, i634, '_buySound')
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i637 = data
  i636.enabled = !!i637[0]
  i636.planeDistance = i637[1]
  i636.referencePixelsPerUnit = i637[2]
  i636.isFallbackOverlay = !!i637[3]
  i636.renderMode = i637[4]
  i636.renderOrder = i637[5]
  i636.sortingLayerName = i637[6]
  i636.sortingOrder = i637[7]
  i636.scaleFactor = i637[8]
  request.r(i637[9], i637[10], 0, i636, 'worldCamera')
  i636.overrideSorting = !!i637[11]
  i636.pixelPerfect = !!i637[12]
  i636.targetDisplay = i637[13]
  i636.overridePixelPerfect = !!i637[14]
  return i636
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i639 = data
  i638.m_UiScaleMode = i639[0]
  i638.m_ReferencePixelsPerUnit = i639[1]
  i638.m_ScaleFactor = i639[2]
  i638.m_ReferenceResolution = new pc.Vec2( i639[3], i639[4] )
  i638.m_ScreenMatchMode = i639[5]
  i638.m_MatchWidthOrHeight = i639[6]
  i638.m_PhysicalUnit = i639[7]
  i638.m_FallbackScreenDPI = i639[8]
  i638.m_DefaultSpriteDPI = i639[9]
  i638.m_DynamicPixelsPerUnit = i639[10]
  i638.m_PresetInfoIsWorld = !!i639[11]
  return i638
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i641 = data
  i640.m_IgnoreReversedGraphics = !!i641[0]
  i640.m_BlockingObjects = i641[1]
  i640.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i641[2] )
  return i640
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i642 = root || request.c( 'ImageShiftOnOrientation' )
  var i643 = data
  var i645 = i643[0]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('ItemSwitcherData', i645[i + 0]) );
  }
  i642.Items = i644
  request.r(i643[1], i643[2], 0, i642, '_backHorizontal')
  request.r(i643[3], i643[4], 0, i642, '_backVertical')
  request.r(i643[5], i643[6], 0, i642, '_tableHorizontal')
  request.r(i643[7], i643[8], 0, i642, '_tableVertical')
  i642.IsDebug = !!i643[9]
  i642.CanCopy = !!i643[10]
  return i642
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i648 = root || request.c( 'ItemSwitcherData' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'Target')
  i648.HorizontalAnchoredPosition = new pc.Vec2( i649[2], i649[3] )
  i648.SizeHorizontal = new pc.Vec2( i649[4], i649[5] )
  i648.VerticalAnchoredPosition = new pc.Vec2( i649[6], i649[7] )
  i648.SizeVertical = new pc.Vec2( i649[8], i649[9] )
  i648.MinHorizontal = new pc.Vec2( i649[10], i649[11] )
  i648.MaxHorizontal = new pc.Vec2( i649[12], i649[13] )
  i648.MinVertical = new pc.Vec2( i649[14], i649[15] )
  i648.MaxVertical = new pc.Vec2( i649[16], i649[17] )
  i648.IsAnchored = !!i649[18]
  i648.IsDebug = !!i649[19]
  i648.CopyHorizontal = !!i649[20]
  i648.CopyVertical = !!i649[21]
  return i648
}

Deserializers["Point"] = function (request, data, root) {
  var i650 = root || request.c( 'Point' )
  var i651 = data
  return i650
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i652 = root || request.c( 'PeopleContainer' )
  var i653 = data
  var i655 = i653[0]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 1, i654, '')
  }
  i652.CurrentPeoples = i654
  var i657 = i653[1]
  var i656 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 1, i656, '')
  }
  i652._peoples = i656
  request.r(i653[2], i653[3], 0, i652, '_tutorialPeople')
  request.r(i653[4], i653[5], 0, i652, '_spawnPoint')
  request.r(i653[6], i653[7], 0, i652, '_point1')
  request.r(i653[8], i653[9], 0, i652, '_point2')
  request.r(i653[10], i653[11], 0, i652, '_endPoint')
  request.r(i653[12], i653[13], 0, i652, '_juiceConfig')
  request.r(i653[14], i653[15], 0, i652, '_tutorial')
  return i652
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i661 = data
  i660.m_HorizontalFit = i661[0]
  i660.m_VerticalFit = i661[1]
  return i660
}

Deserializers["BackImage"] = function (request, data, root) {
  var i662 = root || request.c( 'BackImage' )
  var i663 = data
  return i662
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i664 = root || request.c( 'AheadImage' )
  var i665 = data
  return i664
}

Deserializers["Order"] = function (request, data, root) {
  var i666 = root || request.c( 'Order' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, '_juiceAnimator')
  request.r(i667[2], i667[3], 0, i666, '_cupAnimator')
  request.r(i667[4], i667[5], 0, i666, '_canvasAnimator')
  i666.CupType = i667[6]
  i666.JuiceType = i667[7]
  i666.AdditiveType1 = i667[8]
  i666.AdditiveType2 = i667[9]
  i666.IsFree = !!i667[10]
  i666.IsSpriteReady = !!i667[11]
  i666.IsCupReady = !!i667[12]
  i666.IsJuiceReady = !!i667[13]
  i666.IsPouring = !!i667[14]
  request.r(i667[15], i667[16], 0, i666, '_iceButton')
  request.r(i667[17], i667[18], 0, i666, '_grassButton')
  request.r(i667[19], i667[20], 0, i666, '_juiceBallsButton')
  request.r(i667[21], i667[22], 0, i666, '_strawButton')
  request.r(i667[23], i667[24], 0, i666, '_bigCupButton')
  request.r(i667[25], i667[26], 0, i666, '_middleCupButton')
  request.r(i667[27], i667[28], 0, i666, '_smallCupButton')
  request.r(i667[29], i667[30], 0, i666, '_appleButton')
  request.r(i667[31], i667[32], 0, i666, '_orangeButton')
  request.r(i667[33], i667[34], 0, i666, '_multifruitButton')
  request.r(i667[35], i667[36], 0, i666, '_tomatoButton')
  request.r(i667[37], i667[38], 0, i666, '_cherryButton')
  request.r(i667[39], i667[40], 0, i666, '_smallRawJuiceImage')
  request.r(i667[41], i667[42], 0, i666, '_middleRawJuiceImage')
  request.r(i667[43], i667[44], 0, i666, '_bigRawJuiceImage')
  request.r(i667[45], i667[46], 0, i666, '_smallReadyJuiceImage')
  request.r(i667[47], i667[48], 0, i666, '_middleReadyJuiceImage')
  request.r(i667[49], i667[50], 0, i666, '_bigReadyJuiceImage')
  request.r(i667[51], i667[52], 0, i666, '_backImage')
  request.r(i667[53], i667[54], 0, i666, '_aheadImage')
  request.r(i667[55], i667[56], 0, i666, '_config')
  request.r(i667[57], i667[58], 0, i666, '_takeOrderButton')
  request.r(i667[59], i667[60], 0, i666, '_peopleContainer')
  request.r(i667[61], i667[62], 0, i666, '_tutorial')
  request.r(i667[63], i667[64], 0, i666, '_bText')
  request.r(i667[65], i667[66], 0, i666, '_mText')
  request.r(i667[67], i667[68], 0, i666, '_sText')
  request.r(i667[69], i667[70], 0, i666, '_garbageButton')
  request.r(i667[71], i667[72], 0, i666, '_clickSound')
  request.r(i667[73], i667[74], 0, i666, '_juiceSound')
  return i666
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i668 = root || request.c( 'Tutorial' )
  var i669 = data
  i668.IsTutorial = !!i669[0]
  request.r(i669[1], i669[2], 0, i668, 'Finger1')
  request.r(i669[3], i669[4], 0, i668, 'Finger2')
  request.r(i669[5], i669[6], 0, i668, 'Finger3')
  request.r(i669[7], i669[8], 0, i668, 'Finger4')
  request.r(i669[9], i669[10], 0, i668, 'Finger5')
  request.r(i669[11], i669[12], 0, i668, 'BuyBigCupFinger')
  request.r(i669[13], i669[14], 0, i668, 'BuyJuiceFinger')
  request.r(i669[15], i669[16], 0, i668, 'SmallCupButton')
  request.r(i669[17], i669[18], 0, i668, 'JuiceButton')
  request.r(i669[19], i669[20], 0, i668, 'StrawButton')
  request.r(i669[21], i669[22], 0, i668, 'AdditiveButton')
  request.r(i669[23], i669[24], 0, i668, 'ReadyButton')
  var i671 = i669[25]
  var i670 = []
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 2, i670, '')
  }
  i668.Buttons = i670
  request.r(i669[26], i669[27], 0, i668, 'Bank')
  return i668
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i674 = root || request.c( 'SoundSwitcher' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, '_onImage')
  request.r(i675[2], i675[3], 0, i674, '_offImage')
  return i674
}

Deserializers["Luna.ClickCta"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.ClickCta' )
  var i677 = data
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
  var i689 = i687[26]
  var i688 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 1, i688, '')
  }
  i686._juiseButtons = i688
  request.r(i687[27], i687[28], 0, i686, '_peoples')
  request.r(i687[29], i687[30], 0, i686, '_tutorial')
  request.r(i687[31], i687[32], 0, i686, '_order')
  request.r(i687[33], i687[34], 0, i686, '_strawButton')
  request.r(i687[35], i687[36], 0, i686, '_bigCupButton')
  request.r(i687[37], i687[38], 0, i686, '_middleCupButton')
  request.r(i687[39], i687[40], 0, i686, '_smallCupButton')
  request.r(i687[41], i687[42], 0, i686, '_readyButton')
  request.r(i687[43], i687[44], 0, i686, '_grassButton')
  request.r(i687[45], i687[46], 0, i686, '_juiceballButton')
  request.r(i687[47], i687[48], 0, i686, '_iceButton')
  request.r(i687[49], i687[50], 0, i686, '_touchIdleTimer')
  request.r(i687[51], i687[52], 0, i686, '_finalScreen')
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i693 = data
  i692.ambientIntensity = i693[0]
  i692.reflectionIntensity = i693[1]
  i692.ambientMode = i693[2]
  i692.ambientLight = new pc.Color(i693[3], i693[4], i693[5], i693[6])
  i692.ambientSkyColor = new pc.Color(i693[7], i693[8], i693[9], i693[10])
  i692.ambientGroundColor = new pc.Color(i693[11], i693[12], i693[13], i693[14])
  i692.ambientEquatorColor = new pc.Color(i693[15], i693[16], i693[17], i693[18])
  i692.fogColor = new pc.Color(i693[19], i693[20], i693[21], i693[22])
  i692.fogEndDistance = i693[23]
  i692.fogStartDistance = i693[24]
  i692.fogDensity = i693[25]
  i692.fog = !!i693[26]
  request.r(i693[27], i693[28], 0, i692, 'skybox')
  i692.fogMode = i693[29]
  var i695 = i693[30]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i695[i + 0]) );
  }
  i692.lightmaps = i694
  i692.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i693[31], i692.lightProbes)
  i692.lightmapsMode = i693[32]
  i692.mixedBakeMode = i693[33]
  i692.environmentLightingMode = i693[34]
  i692.ambientProbe = new pc.SphericalHarmonicsL2(i693[35])
  i692.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i693[36])
  i692.useReferenceAmbientProbe = !!i693[37]
  request.r(i693[38], i693[39], 0, i692, 'customReflection')
  request.r(i693[40], i693[41], 0, i692, 'defaultReflection')
  i692.defaultReflectionMode = i693[42]
  i692.defaultReflectionResolution = i693[43]
  i692.sunLightObjectId = i693[44]
  i692.pixelLightCount = i693[45]
  i692.defaultReflectionHDR = !!i693[46]
  i692.hasLightDataAsset = !!i693[47]
  i692.hasManualGenerate = !!i693[48]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'lightmapColor')
  request.r(i699[2], i699[3], 0, i698, 'lightmapDirection')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i700 = root || new UnityEngine.LightProbes()
  var i701 = data
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i709 = data
  var i711 = i709[0]
  var i710 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i711.length; i += 1) {
    i710.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i711[i + 0]));
  }
  i708.ShaderCompilationErrors = i710
  i708.name = i709[1]
  i708.guid = i709[2]
  var i713 = i709[3]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( i713[i + 0] );
  }
  i708.shaderDefinedKeywords = i712
  var i715 = i709[4]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i715[i + 0]) );
  }
  i708.passes = i714
  var i717 = i709[5]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i717[i + 0]) );
  }
  i708.usePasses = i716
  var i719 = i709[6]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i719[i + 0]) );
  }
  i708.defaultParameterValues = i718
  request.r(i709[7], i709[8], 0, i708, 'unityFallbackShader')
  i708.readDepth = !!i709[9]
  i708.isCreatedByShaderGraph = !!i709[10]
  i708.compiled = !!i709[11]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i723 = data
  i722.shaderName = i723[0]
  i722.errorMessage = i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i728 = root || new pc.UnityShaderPass()
  var i729 = data
  i728.id = i729[0]
  i728.subShaderIndex = i729[1]
  i728.name = i729[2]
  i728.passType = i729[3]
  i728.grabPassTextureName = i729[4]
  i728.usePass = !!i729[5]
  i728.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[6], i728.zTest)
  i728.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[7], i728.zWrite)
  i728.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[8], i728.culling)
  i728.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i729[9], i728.blending)
  i728.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i729[10], i728.alphaBlending)
  i728.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[11], i728.colorWriteMask)
  i728.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[12], i728.offsetUnits)
  i728.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[13], i728.offsetFactor)
  i728.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[14], i728.stencilRef)
  i728.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[15], i728.stencilReadMask)
  i728.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[16], i728.stencilWriteMask)
  i728.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i729[17], i728.stencilOp)
  i728.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i729[18], i728.stencilOpFront)
  i728.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i729[19], i728.stencilOpBack)
  var i731 = i729[20]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i731[i + 0]) );
  }
  i728.tags = i730
  var i733 = i729[21]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( i733[i + 0] );
  }
  i728.passDefinedKeywords = i732
  var i735 = i729[22]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i735[i + 0]) );
  }
  i728.passDefinedKeywordGroups = i734
  var i737 = i729[23]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i737[i + 0]) );
  }
  i728.variants = i736
  var i739 = i729[24]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i739[i + 0]) );
  }
  i728.excludedVariants = i738
  i728.hasDepthReader = !!i729[25]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i741 = data
  i740.val = i741[0]
  i740.name = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i743 = data
  i742.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i743[0], i742.src)
  i742.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i743[1], i742.dst)
  i742.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i743[2], i742.op)
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i745 = data
  i744.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[0], i744.pass)
  i744.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[1], i744.fail)
  i744.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[2], i744.zFail)
  i744.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[3], i744.comp)
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i749 = data
  i748.name = i749[0]
  i748.value = i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i753 = data
  var i755 = i753[0]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( i755[i + 0] );
  }
  i752.keywords = i754
  i752.hasDiscard = !!i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i759 = data
  i758.passId = i759[0]
  i758.subShaderIndex = i759[1]
  var i761 = i759[2]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( i761[i + 0] );
  }
  i758.keywords = i760
  i758.vertexProgram = i759[3]
  i758.fragmentProgram = i759[4]
  i758.exportedForWebGl2 = !!i759[5]
  i758.readDepth = !!i759[6]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'shader')
  i764.pass = i765[2]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i769 = data
  i768.name = i769[0]
  i768.type = i769[1]
  i768.value = new pc.Vec4( i769[2], i769[3], i769[4], i769[5] )
  i768.textureValue = i769[6]
  i768.shaderPropertyFlag = i769[7]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i771 = data
  i770.name = i771[0]
  request.r(i771[1], i771[2], 0, i770, 'texture')
  i770.aabb = i771[3]
  i770.vertices = i771[4]
  i770.triangles = i771[5]
  i770.textureRect = UnityEngine.Rect.MinMaxRect(i771[6], i771[7], i771[8], i771[9])
  i770.packedRect = UnityEngine.Rect.MinMaxRect(i771[10], i771[11], i771[12], i771[13])
  i770.border = new pc.Vec4( i771[14], i771[15], i771[16], i771[17] )
  i770.transparency = i771[18]
  i770.bounds = i771[19]
  i770.pixelsPerUnit = i771[20]
  i770.textureWidth = i771[21]
  i770.textureHeight = i771[22]
  i770.nativeSize = new pc.Vec2( i771[23], i771[24] )
  i770.pivot = new pc.Vec2( i771[25], i771[26] )
  i770.textureRectOffset = new pc.Vec2( i771[27], i771[28] )
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i773 = data
  i772.name = i773[0]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i775 = data
  i774.name = i775[0]
  i774.wrapMode = i775[1]
  i774.isLooping = !!i775[2]
  i774.length = i775[3]
  var i777 = i775[4]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i777[i + 0]) );
  }
  i774.curves = i776
  var i779 = i775[5]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i779[i + 0]) );
  }
  i774.events = i778
  i774.halfPrecision = !!i775[6]
  i774._frameRate = i775[7]
  i774.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i775[8], i774.localBounds)
  i774.hasMuscleCurves = !!i775[9]
  var i781 = i775[10]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i774.clipMuscleConstant = i780
  i774.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i775[11], i774.clipBindingConstant)
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i785 = data
  i784.path = i785[0]
  i784.hash = i785[1]
  i784.componentType = i785[2]
  i784.property = i785[3]
  i784.keys = i785[4]
  var i787 = i785[5]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i787[i + 0]) );
  }
  i784.objectReferenceKeys = i786
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i791 = data
  i790.time = i791[0]
  request.r(i791[1], i791[2], 0, i790, 'value')
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i795 = data
  i794.functionName = i795[0]
  i794.floatParameter = i795[1]
  i794.intParameter = i795[2]
  i794.stringParameter = i795[3]
  request.r(i795[4], i795[5], 0, i794, 'objectReferenceParameter')
  i794.time = i795[6]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i797 = data
  i796.center = new pc.Vec3( i797[0], i797[1], i797[2] )
  i796.extends = new pc.Vec3( i797[3], i797[4], i797[5] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i801 = data
  var i803 = i801[0]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( i803[i + 0] );
  }
  i800.genericBindings = i802
  var i805 = i801[1]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( i805[i + 0] );
  }
  i800.pptrCurveMapping = i804
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i807 = data
  i806.name = i807[0]
  i806.ascent = i807[1]
  i806.originalLineHeight = i807[2]
  i806.fontSize = i807[3]
  var i809 = i807[4]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i809[i + 0]) );
  }
  i806.characterInfo = i808
  request.r(i807[5], i807[6], 0, i806, 'texture')
  i806.originalFontSize = i807[7]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i813 = data
  i812.index = i813[0]
  i812.advance = i813[1]
  i812.bearing = i813[2]
  i812.glyphWidth = i813[3]
  i812.glyphHeight = i813[4]
  i812.minX = i813[5]
  i812.maxX = i813[6]
  i812.minY = i813[7]
  i812.maxY = i813[8]
  i812.uvBottomLeftX = i813[9]
  i812.uvBottomLeftY = i813[10]
  i812.uvBottomRightX = i813[11]
  i812.uvBottomRightY = i813[12]
  i812.uvTopLeftX = i813[13]
  i812.uvTopLeftY = i813[14]
  i812.uvTopRightX = i813[15]
  i812.uvTopRightY = i813[16]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i815 = data
  i814.name = i815[0]
  var i817 = i815[1]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i817[i + 0]) );
  }
  i814.layers = i816
  var i819 = i815[2]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i819[i + 0]) );
  }
  i814.parameters = i818
  i814.animationClips = i815[3]
  i814.avatarUnsupported = i815[4]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i823 = data
  i822.name = i823[0]
  i822.defaultWeight = i823[1]
  i822.blendingMode = i823[2]
  i822.avatarMask = i823[3]
  i822.syncedLayerIndex = i823[4]
  i822.syncedLayerAffectsTiming = !!i823[5]
  i822.syncedLayers = i823[6]
  i822.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i823[7], i822.stateMachine)
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i825 = data
  i824.id = i825[0]
  i824.name = i825[1]
  i824.path = i825[2]
  var i827 = i825[3]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i827[i + 0]) );
  }
  i824.states = i826
  var i829 = i825[4]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i829[i + 0]) );
  }
  i824.machines = i828
  var i831 = i825[5]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i831[i + 0]) );
  }
  i824.entryStateTransitions = i830
  var i833 = i825[6]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i833[i + 0]) );
  }
  i824.exitStateTransitions = i832
  var i835 = i825[7]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i835[i + 0]) );
  }
  i824.anyStateTransitions = i834
  i824.defaultStateId = i825[8]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i839 = data
  i838.id = i839[0]
  i838.name = i839[1]
  i838.cycleOffset = i839[2]
  i838.cycleOffsetParameter = i839[3]
  i838.cycleOffsetParameterActive = !!i839[4]
  i838.mirror = !!i839[5]
  i838.mirrorParameter = i839[6]
  i838.mirrorParameterActive = !!i839[7]
  i838.motionId = i839[8]
  i838.nameHash = i839[9]
  i838.fullPathHash = i839[10]
  i838.speed = i839[11]
  i838.speedParameter = i839[12]
  i838.speedParameterActive = !!i839[13]
  i838.tag = i839[14]
  i838.tagHash = i839[15]
  i838.writeDefaultValues = !!i839[16]
  var i841 = i839[17]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i838.behaviours = i840
  var i843 = i839[18]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i843[i + 0]) );
  }
  i838.transitions = i842
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i849 = data
  i848.fullPath = i849[0]
  i848.canTransitionToSelf = !!i849[1]
  i848.duration = i849[2]
  i848.exitTime = i849[3]
  i848.hasExitTime = !!i849[4]
  i848.hasFixedDuration = !!i849[5]
  i848.interruptionSource = i849[6]
  i848.offset = i849[7]
  i848.orderedInterruption = !!i849[8]
  i848.destinationStateId = i849[9]
  i848.isExit = !!i849[10]
  i848.mute = !!i849[11]
  i848.solo = !!i849[12]
  var i851 = i849[13]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i851[i + 0]) );
  }
  i848.conditions = i850
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i857 = data
  i856.destinationStateId = i857[0]
  i856.isExit = !!i857[1]
  i856.mute = !!i857[2]
  i856.solo = !!i857[3]
  var i859 = i857[4]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i859[i + 0]) );
  }
  i856.conditions = i858
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i863 = data
  i862.mode = i863[0]
  i862.parameter = i863[1]
  i862.threshold = i863[2]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i867 = data
  i866.defaultBool = !!i867[0]
  i866.defaultFloat = i867[1]
  i866.defaultInt = i867[2]
  i866.name = i867[3]
  i866.nameHash = i867[4]
  i866.type = i867[5]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i869 = data
  i868.name = i869[0]
  i868.bytes64 = i869[1]
  i868.data = i869[2]
  return i868
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i871 = data
  i870.hashCode = i871[0]
  request.r(i871[1], i871[2], 0, i870, 'material')
  i870.materialHashCode = i871[3]
  request.r(i871[4], i871[5], 0, i870, 'atlas')
  i870.normalStyle = i871[6]
  i870.normalSpacingOffset = i871[7]
  i870.boldStyle = i871[8]
  i870.boldSpacing = i871[9]
  i870.italicStyle = i871[10]
  i870.tabSize = i871[11]
  i870.m_Version = i871[12]
  i870.m_SourceFontFileGUID = i871[13]
  request.r(i871[14], i871[15], 0, i870, 'm_SourceFontFile_EditorRef')
  request.r(i871[16], i871[17], 0, i870, 'm_SourceFontFile')
  i870.m_AtlasPopulationMode = i871[18]
  i870.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i871[19], i870.m_FaceInfo)
  var i873 = i871[20]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i873.length; i += 1) {
    i872.add(request.d('UnityEngine.TextCore.Glyph', i873[i + 0]));
  }
  i870.m_GlyphTable = i872
  var i875 = i871[21]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i875.length; i += 1) {
    i874.add(request.d('TMPro.TMP_Character', i875[i + 0]));
  }
  i870.m_CharacterTable = i874
  var i877 = i871[22]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i870.m_AtlasTextures = i876
  i870.m_AtlasTextureIndex = i871[23]
  i870.m_IsMultiAtlasTexturesEnabled = !!i871[24]
  i870.m_ClearDynamicDataOnBuild = !!i871[25]
  var i879 = i871[26]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i879.length; i += 1) {
    i878.add(request.d('UnityEngine.TextCore.GlyphRect', i879[i + 0]));
  }
  i870.m_UsedGlyphRects = i878
  var i881 = i871[27]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('UnityEngine.TextCore.GlyphRect', i881[i + 0]));
  }
  i870.m_FreeGlyphRects = i880
  i870.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i871[28], i870.m_fontInfo)
  i870.m_AtlasWidth = i871[29]
  i870.m_AtlasHeight = i871[30]
  i870.m_AtlasPadding = i871[31]
  i870.m_AtlasRenderMode = i871[32]
  var i883 = i871[33]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('TMPro.TMP_Glyph', i883[i + 0]));
  }
  i870.m_glyphInfoList = i882
  i870.m_KerningTable = request.d('TMPro.KerningTable', i871[34], i870.m_KerningTable)
  i870.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i871[35], i870.m_FontFeatureTable)
  var i885 = i871[36]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 1, i884, '')
  }
  i870.fallbackFontAssets = i884
  var i887 = i871[37]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 1, i886, '')
  }
  i870.m_FallbackFontAssetTable = i886
  i870.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i871[38], i870.m_CreationSettings)
  var i889 = i871[39]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('TMPro.TMP_FontWeightPair', i889[i + 0]) );
  }
  i870.m_FontWeightTable = i888
  var i891 = i871[40]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('TMPro.TMP_FontWeightPair', i891[i + 0]) );
  }
  i870.fontWeights = i890
  return i870
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i893 = data
  i892.m_FaceIndex = i893[0]
  i892.m_FamilyName = i893[1]
  i892.m_StyleName = i893[2]
  i892.m_PointSize = i893[3]
  i892.m_Scale = i893[4]
  i892.m_UnitsPerEM = i893[5]
  i892.m_LineHeight = i893[6]
  i892.m_AscentLine = i893[7]
  i892.m_CapLine = i893[8]
  i892.m_MeanLine = i893[9]
  i892.m_Baseline = i893[10]
  i892.m_DescentLine = i893[11]
  i892.m_SuperscriptOffset = i893[12]
  i892.m_SuperscriptSize = i893[13]
  i892.m_SubscriptOffset = i893[14]
  i892.m_SubscriptSize = i893[15]
  i892.m_UnderlineOffset = i893[16]
  i892.m_UnderlineThickness = i893[17]
  i892.m_StrikethroughOffset = i893[18]
  i892.m_StrikethroughThickness = i893[19]
  i892.m_TabWidth = i893[20]
  return i892
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i897 = data
  i896.m_Index = i897[0]
  i896.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i897[1], i896.m_Metrics)
  i896.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i897[2], i896.m_GlyphRect)
  i896.m_Scale = i897[3]
  i896.m_AtlasIndex = i897[4]
  i896.m_ClassDefinitionType = i897[5]
  return i896
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i899 = data
  i898.m_Width = i899[0]
  i898.m_Height = i899[1]
  i898.m_HorizontalBearingX = i899[2]
  i898.m_HorizontalBearingY = i899[3]
  i898.m_HorizontalAdvance = i899[4]
  return i898
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i901 = data
  i900.m_X = i901[0]
  i900.m_Y = i901[1]
  i900.m_Width = i901[2]
  i900.m_Height = i901[3]
  return i900
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i904 = root || request.c( 'TMPro.TMP_Character' )
  var i905 = data
  i904.m_ElementType = i905[0]
  i904.m_Unicode = i905[1]
  i904.m_GlyphIndex = i905[2]
  i904.m_Scale = i905[3]
  return i904
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i911 = data
  i910.Name = i911[0]
  i910.PointSize = i911[1]
  i910.Scale = i911[2]
  i910.CharacterCount = i911[3]
  i910.LineHeight = i911[4]
  i910.Baseline = i911[5]
  i910.Ascender = i911[6]
  i910.CapHeight = i911[7]
  i910.Descender = i911[8]
  i910.CenterLine = i911[9]
  i910.SuperscriptOffset = i911[10]
  i910.SubscriptOffset = i911[11]
  i910.SubSize = i911[12]
  i910.Underline = i911[13]
  i910.UnderlineThickness = i911[14]
  i910.strikethrough = i911[15]
  i910.strikethroughThickness = i911[16]
  i910.TabWidth = i911[17]
  i910.Padding = i911[18]
  i910.AtlasWidth = i911[19]
  i910.AtlasHeight = i911[20]
  return i910
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.TMP_Glyph' )
  var i915 = data
  i914.id = i915[0]
  i914.x = i915[1]
  i914.y = i915[2]
  i914.width = i915[3]
  i914.height = i915[4]
  i914.xOffset = i915[5]
  i914.yOffset = i915[6]
  i914.xAdvance = i915[7]
  i914.scale = i915[8]
  return i914
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i916 = root || request.c( 'TMPro.KerningTable' )
  var i917 = data
  var i919 = i917[0]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i919.length; i += 1) {
    i918.add(request.d('TMPro.KerningPair', i919[i + 0]));
  }
  i916.kerningPairs = i918
  return i916
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.KerningPair' )
  var i923 = data
  i922.xOffset = i923[0]
  i922.m_FirstGlyph = i923[1]
  i922.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i923[2], i922.m_FirstGlyphAdjustments)
  i922.m_SecondGlyph = i923[3]
  i922.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i923[4], i922.m_SecondGlyphAdjustments)
  i922.m_IgnoreSpacingAdjustments = !!i923[5]
  return i922
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i924 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i925 = data
  var i927 = i925[0]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i927[i + 0]));
  }
  i924.m_GlyphPairAdjustmentRecords = i926
  return i924
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i931 = data
  i930.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i931[0], i930.m_FirstAdjustmentRecord)
  i930.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i931[1], i930.m_SecondAdjustmentRecord)
  i930.m_FeatureLookupFlags = i931[2]
  return i930
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i933 = data
  i932.m_GlyphIndex = i933[0]
  i932.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i933[1], i932.m_GlyphValueRecord)
  return i932
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i935 = data
  i934.m_XPlacement = i935[0]
  i934.m_YPlacement = i935[1]
  i934.m_XAdvance = i935[2]
  i934.m_YAdvance = i935[3]
  return i934
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i939 = data
  i938.sourceFontFileName = i939[0]
  i938.sourceFontFileGUID = i939[1]
  i938.pointSizeSamplingMode = i939[2]
  i938.pointSize = i939[3]
  i938.padding = i939[4]
  i938.packingMode = i939[5]
  i938.atlasWidth = i939[6]
  i938.atlasHeight = i939[7]
  i938.characterSetSelectionMode = i939[8]
  i938.characterSequence = i939[9]
  i938.referencedFontAssetGUID = i939[10]
  i938.referencedTextAssetGUID = i939[11]
  i938.fontStyle = i939[12]
  i938.fontStyleModifier = i939[13]
  i938.renderMode = i939[14]
  i938.includeFontFeatures = !!i939[15]
  return i938
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'regularTypeface')
  request.r(i943[2], i943[3], 0, i942, 'italicTypeface')
  return i942
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i944 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i945 = data
  i944.useSafeMode = !!i945[0]
  i944.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i945[1], i944.safeModeOptions)
  i944.timeScale = i945[2]
  i944.unscaledTimeScale = i945[3]
  i944.useSmoothDeltaTime = !!i945[4]
  i944.maxSmoothUnscaledTime = i945[5]
  i944.rewindCallbackMode = i945[6]
  i944.showUnityEditorReport = !!i945[7]
  i944.logBehaviour = i945[8]
  i944.drawGizmos = !!i945[9]
  i944.defaultRecyclable = !!i945[10]
  i944.defaultAutoPlay = i945[11]
  i944.defaultUpdateType = i945[12]
  i944.defaultTimeScaleIndependent = !!i945[13]
  i944.defaultEaseType = i945[14]
  i944.defaultEaseOvershootOrAmplitude = i945[15]
  i944.defaultEasePeriod = i945[16]
  i944.defaultAutoKill = !!i945[17]
  i944.defaultLoopType = i945[18]
  i944.debugMode = !!i945[19]
  i944.debugStoreTargetId = !!i945[20]
  i944.showPreviewPanel = !!i945[21]
  i944.storeSettingsLocation = i945[22]
  i944.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i945[23], i944.modules)
  i944.createASMDEF = !!i945[24]
  i944.showPlayingTweens = !!i945[25]
  i944.showPausedTweens = !!i945[26]
  return i944
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i946 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i947 = data
  i946.logBehaviour = i947[0]
  i946.nestedTweenFailureBehaviour = i947[1]
  return i946
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i948 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i949 = data
  i948.showPanel = !!i949[0]
  i948.audioEnabled = !!i949[1]
  i948.physicsEnabled = !!i949[2]
  i948.physics2DEnabled = !!i949[3]
  i948.spriteEnabled = !!i949[4]
  i948.uiEnabled = !!i949[5]
  i948.textMeshProEnabled = !!i949[6]
  i948.tk2DEnabled = !!i949[7]
  i948.deAudioEnabled = !!i949[8]
  i948.deUnityExtendedEnabled = !!i949[9]
  i948.epoOutlineEnabled = !!i949[10]
  return i948
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.TMP_Settings' )
  var i951 = data
  i950.m_enableWordWrapping = !!i951[0]
  i950.m_enableKerning = !!i951[1]
  i950.m_enableExtraPadding = !!i951[2]
  i950.m_enableTintAllSprites = !!i951[3]
  i950.m_enableParseEscapeCharacters = !!i951[4]
  i950.m_EnableRaycastTarget = !!i951[5]
  i950.m_GetFontFeaturesAtRuntime = !!i951[6]
  i950.m_missingGlyphCharacter = i951[7]
  i950.m_warningsDisabled = !!i951[8]
  request.r(i951[9], i951[10], 0, i950, 'm_defaultFontAsset')
  i950.m_defaultFontAssetPath = i951[11]
  i950.m_defaultFontSize = i951[12]
  i950.m_defaultAutoSizeMinRatio = i951[13]
  i950.m_defaultAutoSizeMaxRatio = i951[14]
  i950.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i951[15], i951[16] )
  i950.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i951[17], i951[18] )
  i950.m_autoSizeTextContainer = !!i951[19]
  i950.m_IsTextObjectScaleStatic = !!i951[20]
  var i953 = i951[21]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 1, i952, '')
  }
  i950.m_fallbackFontAssets = i952
  i950.m_matchMaterialPreset = !!i951[22]
  request.r(i951[23], i951[24], 0, i950, 'm_defaultSpriteAsset')
  i950.m_defaultSpriteAssetPath = i951[25]
  i950.m_enableEmojiSupport = !!i951[26]
  i950.m_MissingCharacterSpriteUnicode = i951[27]
  i950.m_defaultColorGradientPresetsPath = i951[28]
  request.r(i951[29], i951[30], 0, i950, 'm_defaultStyleSheet')
  i950.m_StyleSheetsResourcePath = i951[31]
  request.r(i951[32], i951[33], 0, i950, 'm_leadingCharacters')
  request.r(i951[34], i951[35], 0, i950, 'm_followingCharacters')
  i950.m_UseModernHangulLineBreakingRules = !!i951[36]
  return i950
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i955 = data
  i954.hashCode = i955[0]
  request.r(i955[1], i955[2], 0, i954, 'material')
  i954.materialHashCode = i955[3]
  request.r(i955[4], i955[5], 0, i954, 'spriteSheet')
  var i957 = i955[6]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('TMPro.TMP_Sprite', i957[i + 0]));
  }
  i954.spriteInfoList = i956
  var i959 = i955[7]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 1, i958, '')
  }
  i954.fallbackSpriteAssets = i958
  i954.m_Version = i955[8]
  i954.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i955[9], i954.m_FaceInfo)
  var i961 = i955[10]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i961.length; i += 1) {
    i960.add(request.d('TMPro.TMP_SpriteCharacter', i961[i + 0]));
  }
  i954.m_SpriteCharacterTable = i960
  var i963 = i955[11]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i963.length; i += 1) {
    i962.add(request.d('TMPro.TMP_SpriteGlyph', i963[i + 0]));
  }
  i954.m_SpriteGlyphTable = i962
  return i954
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.TMP_Sprite' )
  var i967 = data
  i966.name = i967[0]
  i966.hashCode = i967[1]
  i966.unicode = i967[2]
  i966.pivot = new pc.Vec2( i967[3], i967[4] )
  request.r(i967[5], i967[6], 0, i966, 'sprite')
  i966.id = i967[7]
  i966.x = i967[8]
  i966.y = i967[9]
  i966.width = i967[10]
  i966.height = i967[11]
  i966.xOffset = i967[12]
  i966.yOffset = i967[13]
  i966.xAdvance = i967[14]
  i966.scale = i967[15]
  return i966
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i972 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i973 = data
  i972.m_Name = i973[0]
  i972.m_HashCode = i973[1]
  i972.m_ElementType = i973[2]
  i972.m_Unicode = i973[3]
  i972.m_GlyphIndex = i973[4]
  i972.m_Scale = i973[5]
  return i972
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'sprite')
  i976.m_Index = i977[2]
  i976.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i977[3], i976.m_Metrics)
  i976.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i977[4], i976.m_GlyphRect)
  i976.m_Scale = i977[5]
  i976.m_AtlasIndex = i977[6]
  i976.m_ClassDefinitionType = i977[7]
  return i976
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i979 = data
  var i981 = i979[0]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i981.length; i += 1) {
    i980.add(request.d('TMPro.TMP_Style', i981[i + 0]));
  }
  i978.m_StyleList = i980
  return i978
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.TMP_Style' )
  var i985 = data
  i984.m_Name = i985[0]
  i984.m_HashCode = i985[1]
  i984.m_OpeningDefinition = i985[2]
  i984.m_ClosingDefinition = i985[3]
  i984.m_OpeningTagArray = i985[4]
  i984.m_ClosingTagArray = i985[5]
  i984.m_OpeningTagUnicodeArray = i985[6]
  i984.m_ClosingTagUnicodeArray = i985[7]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i987 = data
  var i989 = i987[0]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i989[i + 0]) );
  }
  i986.files = i988
  i986.componentToPrefabIds = i987[1]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i993 = data
  i992.path = i993[0]
  request.r(i993[1], i993[2], 0, i992, 'unityObject')
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i995 = data
  var i997 = i995[0]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i997[i + 0]) );
  }
  i994.scriptsExecutionOrder = i996
  var i999 = i995[1]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i999[i + 0]) );
  }
  i994.sortingLayers = i998
  var i1001 = i995[2]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1001[i + 0]) );
  }
  i994.cullingLayers = i1000
  i994.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i995[3], i994.timeSettings)
  i994.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i995[4], i994.physicsSettings)
  i994.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i995[5], i994.physics2DSettings)
  i994.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i995[6], i994.qualitySettings)
  i994.enableRealtimeShadows = !!i995[7]
  i994.enableAutoInstancing = !!i995[8]
  i994.enableDynamicBatching = !!i995[9]
  i994.lightmapEncodingQuality = i995[10]
  i994.desiredColorSpace = i995[11]
  var i1003 = i995[12]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( i1003[i + 0] );
  }
  i994.allTags = i1002
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.value = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1011 = data
  i1010.id = i1011[0]
  i1010.name = i1011[1]
  i1010.value = i1011[2]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1015 = data
  i1014.id = i1015[0]
  i1014.name = i1015[1]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1017 = data
  i1016.fixedDeltaTime = i1017[0]
  i1016.maximumDeltaTime = i1017[1]
  i1016.timeScale = i1017[2]
  i1016.maximumParticleTimestep = i1017[3]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1019 = data
  i1018.gravity = new pc.Vec3( i1019[0], i1019[1], i1019[2] )
  i1018.defaultSolverIterations = i1019[3]
  i1018.bounceThreshold = i1019[4]
  i1018.autoSyncTransforms = !!i1019[5]
  i1018.autoSimulation = !!i1019[6]
  var i1021 = i1019[7]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1021[i + 0]) );
  }
  i1018.collisionMatrix = i1020
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1025 = data
  i1024.enabled = !!i1025[0]
  i1024.layerId = i1025[1]
  i1024.otherLayerId = i1025[2]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'material')
  i1026.gravity = new pc.Vec2( i1027[2], i1027[3] )
  i1026.positionIterations = i1027[4]
  i1026.velocityIterations = i1027[5]
  i1026.velocityThreshold = i1027[6]
  i1026.maxLinearCorrection = i1027[7]
  i1026.maxAngularCorrection = i1027[8]
  i1026.maxTranslationSpeed = i1027[9]
  i1026.maxRotationSpeed = i1027[10]
  i1026.baumgarteScale = i1027[11]
  i1026.baumgarteTOIScale = i1027[12]
  i1026.timeToSleep = i1027[13]
  i1026.linearSleepTolerance = i1027[14]
  i1026.angularSleepTolerance = i1027[15]
  i1026.defaultContactOffset = i1027[16]
  i1026.autoSimulation = !!i1027[17]
  i1026.queriesHitTriggers = !!i1027[18]
  i1026.queriesStartInColliders = !!i1027[19]
  i1026.callbacksOnDisable = !!i1027[20]
  i1026.reuseCollisionCallbacks = !!i1027[21]
  i1026.autoSyncTransforms = !!i1027[22]
  var i1029 = i1027[23]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1029[i + 0]) );
  }
  i1026.collisionMatrix = i1028
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1033 = data
  i1032.enabled = !!i1033[0]
  i1032.layerId = i1033[1]
  i1032.otherLayerId = i1033[2]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1035 = data
  var i1037 = i1035[0]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1037[i + 0]) );
  }
  i1034.qualityLevels = i1036
  var i1039 = i1035[1]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1034.names = i1038
  i1034.shadows = i1035[2]
  i1034.anisotropicFiltering = i1035[3]
  i1034.antiAliasing = i1035[4]
  i1034.lodBias = i1035[5]
  i1034.shadowCascades = i1035[6]
  i1034.shadowDistance = i1035[7]
  i1034.shadowmaskMode = i1035[8]
  i1034.shadowProjection = i1035[9]
  i1034.shadowResolution = i1035[10]
  i1034.softParticles = !!i1035[11]
  i1034.softVegetation = !!i1035[12]
  i1034.activeColorSpace = i1035[13]
  i1034.desiredColorSpace = i1035[14]
  i1034.masterTextureLimit = i1035[15]
  i1034.maxQueuedFrames = i1035[16]
  i1034.particleRaycastBudget = i1035[17]
  i1034.pixelLightCount = i1035[18]
  i1034.realtimeReflectionProbes = !!i1035[19]
  i1034.shadowCascade2Split = i1035[20]
  i1034.shadowCascade4Split = new pc.Vec3( i1035[21], i1035[22], i1035[23] )
  i1034.streamingMipmapsActive = !!i1035[24]
  i1034.vSyncCount = i1035[25]
  i1034.asyncUploadBufferSize = i1035[26]
  i1034.asyncUploadTimeSlice = i1035[27]
  i1034.billboardsFaceCameraPosition = !!i1035[28]
  i1034.shadowNearPlaneOffset = i1035[29]
  i1034.streamingMipmapsMemoryBudget = i1035[30]
  i1034.maximumLODLevel = i1035[31]
  i1034.streamingMipmapsAddAllCameras = !!i1035[32]
  i1034.streamingMipmapsMaxLevelReduction = i1035[33]
  i1034.streamingMipmapsRenderersPerFrame = i1035[34]
  i1034.resolutionScalingFixedDPIFactor = i1035[35]
  i1034.streamingMipmapsMaxFileIORequests = i1035[36]
  i1034.currentQualityLevel = i1035[37]
  return i1034
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1043 = data
  i1042.xPlacement = i1043[0]
  i1042.yPlacement = i1043[1]
  i1042.xAdvance = i1043[2]
  i1042.yAdvance = i1043[3]
  return i1042
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[17],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[17],"80":[81],"82":[83],"84":[83],"22":[2],"35":[11],"85":[2],"86":[87],"88":[89],"90":[87],"91":[2],"92":[2],"24":[22],"6":[3,2],"93":[2],"23":[22],"31":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[2],"101":[2],"102":[3,2],"103":[2],"104":[2],"105":[2],"106":[2],"107":[3,2],"108":[2],"109":[37],"110":[37],"38":[37],"111":[37],"112":[17],"113":[17],"114":[115],"116":[17],"117":[2],"118":[81,2],"13":[2,3],"119":[2],"120":[3,2],"121":[81],"122":[3,2],"123":[2],"124":[87]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.Object","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","Luna.ClickCta","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","Helper","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "21.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

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

Deserializers.buildID = "c9c26325-5b26-47c7-b2d9-d41c4498cb7d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

