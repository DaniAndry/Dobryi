var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointSpring' )
  var i519 = data
  i518.spring = i519[0]
  i518.damper = i519[1]
  i518.targetPosition = i519[2]
  return i518
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.JointMotor' )
  var i521 = data
  i520.m_TargetVelocity = i521[0]
  i520.m_Force = i521[1]
  i520.m_FreeSpin = i521[2]
  return i520
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointLimits' )
  var i523 = data
  i522.m_Min = i523[0]
  i522.m_Max = i523[1]
  i522.m_Bounciness = i523[2]
  i522.m_BounceMinVelocity = i523[3]
  i522.m_ContactDistance = i523[4]
  i522.minBounce = i523[5]
  i522.maxBounce = i523[6]
  return i522
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointDrive' )
  var i525 = data
  i524.m_PositionSpring = i525[0]
  i524.m_PositionDamper = i525[1]
  i524.m_MaximumForce = i525[2]
  i524.m_UseAcceleration = i525[3]
  return i524
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i527 = data
  i526.m_Spring = i527[0]
  i526.m_Damper = i527[1]
  return i526
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i529 = data
  i528.m_Limit = i529[0]
  i528.m_Bounciness = i529[1]
  i528.m_ContactDistance = i529[2]
  return i528
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i531 = data
  i530.m_ExtremumSlip = i531[0]
  i530.m_ExtremumValue = i531[1]
  i530.m_AsymptoteSlip = i531[2]
  i530.m_AsymptoteValue = i531[3]
  i530.m_Stiffness = i531[4]
  return i530
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i533 = data
  i532.m_LowerAngle = i533[0]
  i532.m_UpperAngle = i533[1]
  return i532
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i535 = data
  i534.m_MotorSpeed = i535[0]
  i534.m_MaximumMotorTorque = i535[1]
  return i534
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i537 = data
  i536.m_DampingRatio = i537[0]
  i536.m_Frequency = i537[1]
  i536.m_Angle = i537[2]
  return i536
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i539 = data
  i538.m_LowerTranslation = i539[0]
  i538.m_UpperTranslation = i539[1]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i541 = data
  i540.name = i541[0]
  i540.width = i541[1]
  i540.height = i541[2]
  i540.mipmapCount = i541[3]
  i540.anisoLevel = i541[4]
  i540.filterMode = i541[5]
  i540.hdr = !!i541[6]
  i540.format = i541[7]
  i540.wrapMode = i541[8]
  i540.alphaIsTransparency = !!i541[9]
  i540.alphaSource = i541[10]
  i540.graphicsFormat = i541[11]
  i540.sRGBTexture = !!i541[12]
  i540.desiredColorSpace = i541[13]
  i540.wrapU = i541[14]
  i540.wrapV = i541[15]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i542 = root || new pc.UnityMaterial()
  var i543 = data
  i542.name = i543[0]
  request.r(i543[1], i543[2], 0, i542, 'shader')
  i542.renderQueue = i543[3]
  i542.enableInstancing = !!i543[4]
  var i545 = i543[5]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i545[i + 0]) );
  }
  i542.floatParameters = i544
  var i547 = i543[6]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i547[i + 0]) );
  }
  i542.colorParameters = i546
  var i549 = i543[7]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i549[i + 0]) );
  }
  i542.vectorParameters = i548
  var i551 = i543[8]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i551[i + 0]) );
  }
  i542.textureParameters = i550
  var i553 = i543[9]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i553[i + 0]) );
  }
  i542.materialFlags = i552
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i557 = data
  i556.name = i557[0]
  i556.value = i557[1]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i561 = data
  i560.name = i561[0]
  i560.value = new pc.Color(i561[1], i561[2], i561[3], i561[4])
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i565 = data
  i564.name = i565[0]
  i564.value = new pc.Vec4( i565[1], i565[2], i565[3], i565[4] )
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i569 = data
  i568.name = i569[0]
  request.r(i569[1], i569[2], 0, i568, 'value')
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i573 = data
  i572.name = i573[0]
  i572.enabled = !!i573[1]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i575 = data
  i574.pivot = new pc.Vec2( i575[0], i575[1] )
  i574.anchorMin = new pc.Vec2( i575[2], i575[3] )
  i574.anchorMax = new pc.Vec2( i575[4], i575[5] )
  i574.sizeDelta = new pc.Vec2( i575[6], i575[7] )
  i574.anchoredPosition3D = new pc.Vec3( i575[8], i575[9], i575[10] )
  i574.rotation = new pc.Quat(i575[11], i575[12], i575[13], i575[14])
  i574.scale = new pc.Vec3( i575[15], i575[16], i575[17] )
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i577 = data
  i576.cullTransparentMesh = !!i577[0]
  return i576
}

Deserializers["People"] = function (request, data, root) {
  var i578 = root || request.c( 'People' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, '_readyImage')
  request.r(i579[2], i579[3], 0, i578, '_additiveImage1')
  request.r(i579[4], i579[5], 0, i578, '_additiveImage2')
  request.r(i579[6], i579[7], 0, i578, '_endPoint')
  request.r(i579[8], i579[9], 0, i578, 'Bank')
  request.r(i579[10], i579[11], 0, i578, '_sizeText')
  i578.CupType = i579[12]
  i578.JuiceType = i579[13]
  i578.AdditiveType1 = i579[14]
  i578.AdditiveType2 = i579[15]
  request.r(i579[16], i579[17], 0, i578, '_finishSound')
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'clip')
  request.r(i581[2], i581[3], 0, i580, 'outputAudioMixerGroup')
  i580.playOnAwake = !!i581[4]
  i580.loop = !!i581[5]
  i580.time = i581[6]
  i580.volume = i581[7]
  i580.pitch = i581[8]
  i580.enabled = !!i581[9]
  return i580
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.Image' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'm_Sprite')
  i582.m_Type = i583[2]
  i582.m_PreserveAspect = !!i583[3]
  i582.m_FillCenter = !!i583[4]
  i582.m_FillMethod = i583[5]
  i582.m_FillAmount = i583[6]
  i582.m_FillClockwise = !!i583[7]
  i582.m_FillOrigin = i583[8]
  i582.m_UseSpriteMesh = !!i583[9]
  i582.m_PixelsPerUnitMultiplier = i583[10]
  request.r(i583[11], i583[12], 0, i582, 'm_Material')
  i582.m_Maskable = !!i583[13]
  i582.m_Color = new pc.Color(i583[14], i583[15], i583[16], i583[17])
  i582.m_RaycastTarget = !!i583[18]
  i582.m_RaycastPadding = new pc.Vec4( i583[19], i583[20], i583[21], i583[22] )
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i585 = data
  i584.name = i585[0]
  i584.tagId = i585[1]
  i584.enabled = !!i585[2]
  i584.isStatic = !!i585[3]
  i584.layer = i585[4]
  return i584
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.UI.Button' )
  var i587 = data
  i586.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i587[0], i586.m_OnClick)
  i586.m_Navigation = request.d('UnityEngine.UI.Navigation', i587[1], i586.m_Navigation)
  i586.m_Transition = i587[2]
  i586.m_Colors = request.d('UnityEngine.UI.ColorBlock', i587[3], i586.m_Colors)
  i586.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i587[4], i586.m_SpriteState)
  i586.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i587[5], i586.m_AnimationTriggers)
  i586.m_Interactable = !!i587[6]
  request.r(i587[7], i587[8], 0, i586, 'm_TargetGraphic')
  return i586
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i589 = data
  i588.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i589[0], i588.m_PersistentCalls)
  return i588
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i591 = data
  var i593 = i591[0]
  var i592 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i593.length; i += 1) {
    i592.add(request.d('UnityEngine.Events.PersistentCall', i593[i + 0]));
  }
  i590.m_Calls = i592
  return i590
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'm_Target')
  i596.m_TargetAssemblyTypeName = i597[2]
  i596.m_MethodName = i597[3]
  i596.m_Mode = i597[4]
  i596.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i597[5], i596.m_Arguments)
  i596.m_CallState = i597[6]
  return i596
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'm_ObjectArgument')
  i598.m_ObjectArgumentAssemblyTypeName = i599[2]
  i598.m_IntArgument = i599[3]
  i598.m_FloatArgument = i599[4]
  i598.m_StringArgument = i599[5]
  i598.m_BoolArgument = !!i599[6]
  return i598
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i601 = data
  i600.m_Mode = i601[0]
  i600.m_WrapAround = !!i601[1]
  request.r(i601[2], i601[3], 0, i600, 'm_SelectOnUp')
  request.r(i601[4], i601[5], 0, i600, 'm_SelectOnDown')
  request.r(i601[6], i601[7], 0, i600, 'm_SelectOnLeft')
  request.r(i601[8], i601[9], 0, i600, 'm_SelectOnRight')
  return i600
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i603 = data
  i602.m_NormalColor = new pc.Color(i603[0], i603[1], i603[2], i603[3])
  i602.m_HighlightedColor = new pc.Color(i603[4], i603[5], i603[6], i603[7])
  i602.m_PressedColor = new pc.Color(i603[8], i603[9], i603[10], i603[11])
  i602.m_SelectedColor = new pc.Color(i603[12], i603[13], i603[14], i603[15])
  i602.m_DisabledColor = new pc.Color(i603[16], i603[17], i603[18], i603[19])
  i602.m_ColorMultiplier = i603[20]
  i602.m_FadeDuration = i603[21]
  return i602
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'm_HighlightedSprite')
  request.r(i605[2], i605[3], 0, i604, 'm_PressedSprite')
  request.r(i605[4], i605[5], 0, i604, 'm_SelectedSprite')
  request.r(i605[6], i605[7], 0, i604, 'm_DisabledSprite')
  return i604
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i607 = data
  i606.m_NormalTrigger = i607[0]
  i606.m_HighlightedTrigger = i607[1]
  i606.m_PressedTrigger = i607[2]
  i606.m_SelectedTrigger = i607[3]
  i606.m_DisabledTrigger = i607[4]
  return i606
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i608 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i609 = data
  i608.m_hasFontAssetChanged = !!i609[0]
  request.r(i609[1], i609[2], 0, i608, 'm_baseMaterial')
  i608.m_maskOffset = new pc.Vec4( i609[3], i609[4], i609[5], i609[6] )
  i608.m_text = i609[7]
  i608.m_isRightToLeft = !!i609[8]
  request.r(i609[9], i609[10], 0, i608, 'm_fontAsset')
  request.r(i609[11], i609[12], 0, i608, 'm_sharedMaterial')
  var i611 = i609[13]
  var i610 = []
  for(var i = 0; i < i611.length; i += 2) {
  request.r(i611[i + 0], i611[i + 1], 2, i610, '')
  }
  i608.m_fontSharedMaterials = i610
  request.r(i609[14], i609[15], 0, i608, 'm_fontMaterial')
  var i613 = i609[16]
  var i612 = []
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 2, i612, '')
  }
  i608.m_fontMaterials = i612
  i608.m_fontColor32 = UnityEngine.Color32.ConstructColor(i609[17], i609[18], i609[19], i609[20])
  i608.m_fontColor = new pc.Color(i609[21], i609[22], i609[23], i609[24])
  i608.m_enableVertexGradient = !!i609[25]
  i608.m_colorMode = i609[26]
  i608.m_fontColorGradient = request.d('TMPro.VertexGradient', i609[27], i608.m_fontColorGradient)
  request.r(i609[28], i609[29], 0, i608, 'm_fontColorGradientPreset')
  request.r(i609[30], i609[31], 0, i608, 'm_spriteAsset')
  i608.m_tintAllSprites = !!i609[32]
  request.r(i609[33], i609[34], 0, i608, 'm_StyleSheet')
  i608.m_TextStyleHashCode = i609[35]
  i608.m_overrideHtmlColors = !!i609[36]
  i608.m_faceColor = UnityEngine.Color32.ConstructColor(i609[37], i609[38], i609[39], i609[40])
  i608.m_fontSize = i609[41]
  i608.m_fontSizeBase = i609[42]
  i608.m_fontWeight = i609[43]
  i608.m_enableAutoSizing = !!i609[44]
  i608.m_fontSizeMin = i609[45]
  i608.m_fontSizeMax = i609[46]
  i608.m_fontStyle = i609[47]
  i608.m_HorizontalAlignment = i609[48]
  i608.m_VerticalAlignment = i609[49]
  i608.m_textAlignment = i609[50]
  i608.m_characterSpacing = i609[51]
  i608.m_wordSpacing = i609[52]
  i608.m_lineSpacing = i609[53]
  i608.m_lineSpacingMax = i609[54]
  i608.m_paragraphSpacing = i609[55]
  i608.m_charWidthMaxAdj = i609[56]
  i608.m_enableWordWrapping = !!i609[57]
  i608.m_wordWrappingRatios = i609[58]
  i608.m_overflowMode = i609[59]
  request.r(i609[60], i609[61], 0, i608, 'm_linkedTextComponent')
  request.r(i609[62], i609[63], 0, i608, 'parentLinkedComponent')
  i608.m_enableKerning = !!i609[64]
  i608.m_enableExtraPadding = !!i609[65]
  i608.checkPaddingRequired = !!i609[66]
  i608.m_isRichText = !!i609[67]
  i608.m_parseCtrlCharacters = !!i609[68]
  i608.m_isOrthographic = !!i609[69]
  i608.m_isCullingEnabled = !!i609[70]
  i608.m_horizontalMapping = i609[71]
  i608.m_verticalMapping = i609[72]
  i608.m_uvLineOffset = i609[73]
  i608.m_geometrySortingOrder = i609[74]
  i608.m_IsTextObjectScaleStatic = !!i609[75]
  i608.m_VertexBufferAutoSizeReduction = !!i609[76]
  i608.m_useMaxVisibleDescender = !!i609[77]
  i608.m_pageToDisplay = i609[78]
  i608.m_margin = new pc.Vec4( i609[79], i609[80], i609[81], i609[82] )
  i608.m_isUsingLegacyAnimationComponent = !!i609[83]
  i608.m_isVolumetricText = !!i609[84]
  request.r(i609[85], i609[86], 0, i608, 'm_Material')
  i608.m_Maskable = !!i609[87]
  i608.m_Color = new pc.Color(i609[88], i609[89], i609[90], i609[91])
  i608.m_RaycastTarget = !!i609[92]
  i608.m_RaycastPadding = new pc.Vec4( i609[93], i609[94], i609[95], i609[96] )
  return i608
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i616 = root || request.c( 'TMPro.VertexGradient' )
  var i617 = data
  i616.topLeft = new pc.Color(i617[0], i617[1], i617[2], i617[3])
  i616.topRight = new pc.Color(i617[4], i617[5], i617[6], i617[7])
  i616.bottomLeft = new pc.Color(i617[8], i617[9], i617[10], i617[11])
  i616.bottomRight = new pc.Color(i617[12], i617[13], i617[14], i617[15])
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i619 = data
  i618.name = i619[0]
  i618.index = i619[1]
  i618.startup = !!i619[2]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i621 = data
  i620.position = new pc.Vec3( i621[0], i621[1], i621[2] )
  i620.scale = new pc.Vec3( i621[3], i621[4], i621[5] )
  i620.rotation = new pc.Quat(i621[6], i621[7], i621[8], i621[9])
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i623 = data
  i622.enabled = !!i623[0]
  i622.aspect = i623[1]
  i622.orthographic = !!i623[2]
  i622.orthographicSize = i623[3]
  i622.backgroundColor = new pc.Color(i623[4], i623[5], i623[6], i623[7])
  i622.nearClipPlane = i623[8]
  i622.farClipPlane = i623[9]
  i622.fieldOfView = i623[10]
  i622.depth = i623[11]
  i622.clearFlags = i623[12]
  i622.cullingMask = i623[13]
  i622.rect = i623[14]
  request.r(i623[15], i623[16], 0, i622, 'targetTexture')
  i622.usePhysicalProperties = !!i623[17]
  i622.focalLength = i623[18]
  i622.sensorSize = new pc.Vec2( i623[19], i623[20] )
  i622.lensShift = new pc.Vec2( i623[21], i623[22] )
  i622.gateFit = i623[23]
  i622.commandBufferCount = i623[24]
  i622.cameraType = i623[25]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'animatorController')
  request.r(i625[2], i625[3], 0, i624, 'avatar')
  i624.updateMode = i625[4]
  i624.hasTransformHierarchy = !!i625[5]
  i624.applyRootMotion = !!i625[6]
  var i627 = i625[7]
  var i626 = []
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 2, i626, '')
  }
  i624.humanBones = i626
  i624.enabled = !!i625[8]
  return i624
}

Deserializers["Bank"] = function (request, data, root) {
  var i630 = root || request.c( 'Bank' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'BuyBigCupButton')
  request.r(i631[2], i631[3], 0, i630, 'BigCupButton')
  request.r(i631[4], i631[5], 0, i630, 'MiddleCupButton')
  request.r(i631[6], i631[7], 0, i630, 'MoneyText')
  request.r(i631[8], i631[9], 0, i630, 'Tutorial')
  request.r(i631[10], i631[11], 0, i630, 'BuyAdditiveButton')
  request.r(i631[12], i631[13], 0, i630, 'BuyJuiceButton')
  request.r(i631[14], i631[15], 0, i630, 'JuiceButton1')
  request.r(i631[16], i631[17], 0, i630, 'JuiceButton2')
  request.r(i631[18], i631[19], 0, i630, 'JuiceButton3')
  request.r(i631[20], i631[21], 0, i630, 'Additive1Button')
  request.r(i631[22], i631[23], 0, i630, 'Additive2Button')
  i630.Money = i631[24]
  i630.IsBigCupBuy = !!i631[25]
  i630.IsJuiceBuy = !!i631[26]
  i630.IsAdditiveBuy = !!i631[27]
  request.r(i631[28], i631[29], 0, i630, '_buySound')
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i633 = data
  i632.enabled = !!i633[0]
  i632.planeDistance = i633[1]
  i632.referencePixelsPerUnit = i633[2]
  i632.isFallbackOverlay = !!i633[3]
  i632.renderMode = i633[4]
  i632.renderOrder = i633[5]
  i632.sortingLayerName = i633[6]
  i632.sortingOrder = i633[7]
  i632.scaleFactor = i633[8]
  request.r(i633[9], i633[10], 0, i632, 'worldCamera')
  i632.overrideSorting = !!i633[11]
  i632.pixelPerfect = !!i633[12]
  i632.targetDisplay = i633[13]
  i632.overridePixelPerfect = !!i633[14]
  return i632
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i635 = data
  i634.m_UiScaleMode = i635[0]
  i634.m_ReferencePixelsPerUnit = i635[1]
  i634.m_ScaleFactor = i635[2]
  i634.m_ReferenceResolution = new pc.Vec2( i635[3], i635[4] )
  i634.m_ScreenMatchMode = i635[5]
  i634.m_MatchWidthOrHeight = i635[6]
  i634.m_PhysicalUnit = i635[7]
  i634.m_FallbackScreenDPI = i635[8]
  i634.m_DefaultSpriteDPI = i635[9]
  i634.m_DynamicPixelsPerUnit = i635[10]
  i634.m_PresetInfoIsWorld = !!i635[11]
  return i634
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i637 = data
  i636.m_IgnoreReversedGraphics = !!i637[0]
  i636.m_BlockingObjects = i637[1]
  i636.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i637[2] )
  return i636
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i638 = root || request.c( 'ImageShiftOnOrientation' )
  var i639 = data
  var i641 = i639[0]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('ItemSwitcherData', i641[i + 0]) );
  }
  i638.Items = i640
  request.r(i639[1], i639[2], 0, i638, '_backHorizontal')
  request.r(i639[3], i639[4], 0, i638, '_backVertical')
  request.r(i639[5], i639[6], 0, i638, '_tableHorizontal')
  request.r(i639[7], i639[8], 0, i638, '_tableVertical')
  i638.IsDebug = !!i639[9]
  i638.CanCopy = !!i639[10]
  return i638
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i644 = root || request.c( 'ItemSwitcherData' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'Target')
  i644.HorizontalAnchoredPosition = new pc.Vec2( i645[2], i645[3] )
  i644.SizeHorizontal = new pc.Vec2( i645[4], i645[5] )
  i644.VerticalAnchoredPosition = new pc.Vec2( i645[6], i645[7] )
  i644.SizeVertical = new pc.Vec2( i645[8], i645[9] )
  i644.MinHorizontal = new pc.Vec2( i645[10], i645[11] )
  i644.MaxHorizontal = new pc.Vec2( i645[12], i645[13] )
  i644.MinVertical = new pc.Vec2( i645[14], i645[15] )
  i644.MaxVertical = new pc.Vec2( i645[16], i645[17] )
  i644.IsAnchored = !!i645[18]
  i644.IsDebug = !!i645[19]
  i644.CopyHorizontal = !!i645[20]
  i644.CopyVertical = !!i645[21]
  return i644
}

Deserializers["Point"] = function (request, data, root) {
  var i646 = root || request.c( 'Point' )
  var i647 = data
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

Deserializers["BackImage"] = function (request, data, root) {
  var i658 = root || request.c( 'BackImage' )
  var i659 = data
  return i658
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i660 = root || request.c( 'AheadImage' )
  var i661 = data
  return i660
}

Deserializers["Order"] = function (request, data, root) {
  var i662 = root || request.c( 'Order' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, '_juiceAnimator')
  request.r(i663[2], i663[3], 0, i662, '_cupAnimator')
  request.r(i663[4], i663[5], 0, i662, '_canvasAnimator')
  i662.CupType = i663[6]
  i662.JuiceType = i663[7]
  i662.AdditiveType1 = i663[8]
  i662.AdditiveType2 = i663[9]
  i662.IsFree = !!i663[10]
  i662.IsSpriteReady = !!i663[11]
  i662.IsCupReady = !!i663[12]
  i662.IsJuiceReady = !!i663[13]
  i662.IsPouring = !!i663[14]
  request.r(i663[15], i663[16], 0, i662, '_iceButton')
  request.r(i663[17], i663[18], 0, i662, '_grassButton')
  request.r(i663[19], i663[20], 0, i662, '_juiceBallsButton')
  request.r(i663[21], i663[22], 0, i662, '_strawButton')
  request.r(i663[23], i663[24], 0, i662, '_bigCupButton')
  request.r(i663[25], i663[26], 0, i662, '_middleCupButton')
  request.r(i663[27], i663[28], 0, i662, '_smallCupButton')
  request.r(i663[29], i663[30], 0, i662, '_appleButton')
  request.r(i663[31], i663[32], 0, i662, '_orangeButton')
  request.r(i663[33], i663[34], 0, i662, '_multifruitButton')
  request.r(i663[35], i663[36], 0, i662, '_tomatoButton')
  request.r(i663[37], i663[38], 0, i662, '_cherryButton')
  request.r(i663[39], i663[40], 0, i662, '_smallRawJuiceImage')
  request.r(i663[41], i663[42], 0, i662, '_middleRawJuiceImage')
  request.r(i663[43], i663[44], 0, i662, '_bigRawJuiceImage')
  request.r(i663[45], i663[46], 0, i662, '_smallReadyJuiceImage')
  request.r(i663[47], i663[48], 0, i662, '_middleReadyJuiceImage')
  request.r(i663[49], i663[50], 0, i662, '_bigReadyJuiceImage')
  request.r(i663[51], i663[52], 0, i662, '_backImage')
  request.r(i663[53], i663[54], 0, i662, '_aheadImage')
  request.r(i663[55], i663[56], 0, i662, '_config')
  request.r(i663[57], i663[58], 0, i662, '_takeOrderButton')
  request.r(i663[59], i663[60], 0, i662, '_peopleContainer')
  request.r(i663[61], i663[62], 0, i662, '_tutorial')
  request.r(i663[63], i663[64], 0, i662, '_bText')
  request.r(i663[65], i663[66], 0, i662, '_mText')
  request.r(i663[67], i663[68], 0, i662, '_sText')
  request.r(i663[69], i663[70], 0, i662, '_garbageButton')
  request.r(i663[71], i663[72], 0, i662, '_clickSound')
  request.r(i663[73], i663[74], 0, i662, '_juiceSound')
  return i662
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i664 = root || request.c( 'Tutorial' )
  var i665 = data
  i664.IsTutorial = !!i665[0]
  request.r(i665[1], i665[2], 0, i664, 'Finger1')
  request.r(i665[3], i665[4], 0, i664, 'Finger2')
  request.r(i665[5], i665[6], 0, i664, 'Finger3')
  request.r(i665[7], i665[8], 0, i664, 'Finger4')
  request.r(i665[9], i665[10], 0, i664, 'Finger5')
  request.r(i665[11], i665[12], 0, i664, 'BuyBigCupFinger')
  request.r(i665[13], i665[14], 0, i664, 'BuyJuiceFinger')
  request.r(i665[15], i665[16], 0, i664, 'SmallCupButton')
  request.r(i665[17], i665[18], 0, i664, 'JuiceButton')
  request.r(i665[19], i665[20], 0, i664, 'StrawButton')
  request.r(i665[21], i665[22], 0, i664, 'AdditiveButton')
  request.r(i665[23], i665[24], 0, i664, 'ReadyButton')
  var i667 = i665[25]
  var i666 = []
  for(var i = 0; i < i667.length; i += 2) {
  request.r(i667[i + 0], i667[i + 1], 2, i666, '')
  }
  i664.Buttons = i666
  request.r(i665[26], i665[27], 0, i664, 'Bank')
  return i664
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i670 = root || request.c( 'SoundSwitcher' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, '_onImage')
  request.r(i671[2], i671[3], 0, i670, '_offImage')
  return i670
}

Deserializers["Fix.ClickCta"] = function (request, data, root) {
  var i672 = root || request.c( 'Fix.ClickCta' )
  var i673 = data
  return i672
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'm_FirstSelected')
  i674.m_sendNavigationEvents = !!i675[2]
  i674.m_DragThreshold = i675[3]
  return i674
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i677 = data
  i676.m_HorizontalAxis = i677[0]
  i676.m_VerticalAxis = i677[1]
  i676.m_SubmitButton = i677[2]
  i676.m_CancelButton = i677[3]
  i676.m_InputActionsPerSecond = i677[4]
  i676.m_RepeatDelay = i677[5]
  i676.m_ForceModuleActive = !!i677[6]
  i676.m_SendPointerHoverToParent = !!i677[7]
  return i676
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i678 = root || request.c( 'JuiceConfig' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'EntityBigCup')
  request.r(i679[2], i679[3], 0, i678, 'TomatoBigCup')
  request.r(i679[4], i679[5], 0, i678, 'AppleBigCup')
  request.r(i679[6], i679[7], 0, i678, 'OrangeBigCup')
  request.r(i679[8], i679[9], 0, i678, 'CherryBigCup')
  request.r(i679[10], i679[11], 0, i678, 'MultifruitBigCup')
  request.r(i679[12], i679[13], 0, i678, 'TomatoBigStrawCup')
  request.r(i679[14], i679[15], 0, i678, 'MultifruitBigStrawCup')
  request.r(i679[16], i679[17], 0, i678, 'AppleBigStrawCup')
  request.r(i679[18], i679[19], 0, i678, 'OrangeBigStrawCup')
  request.r(i679[20], i679[21], 0, i678, 'CherryBigStrawCup')
  request.r(i679[22], i679[23], 0, i678, 'MultifruitBigBallsCup')
  request.r(i679[24], i679[25], 0, i678, 'TomatoBigBallsCup')
  request.r(i679[26], i679[27], 0, i678, 'AppleBigBallsCup')
  request.r(i679[28], i679[29], 0, i678, 'OrangeBigBallsCup')
  request.r(i679[30], i679[31], 0, i678, 'CherryBigBallsCup')
  request.r(i679[32], i679[33], 0, i678, 'EntityMiddleCup')
  request.r(i679[34], i679[35], 0, i678, 'TomatoMiddleCup')
  request.r(i679[36], i679[37], 0, i678, 'AppleMiddleCup')
  request.r(i679[38], i679[39], 0, i678, 'OrangeMiddleCup')
  request.r(i679[40], i679[41], 0, i678, 'CherryMiddleCup')
  request.r(i679[42], i679[43], 0, i678, 'MultifruitMiddleCup')
  request.r(i679[44], i679[45], 0, i678, 'TomatoMiddleStrawCup')
  request.r(i679[46], i679[47], 0, i678, 'MultifruitMiddleStrawCup')
  request.r(i679[48], i679[49], 0, i678, 'AppleMiddleStrawCup')
  request.r(i679[50], i679[51], 0, i678, 'OrangeMiddleStrawCup')
  request.r(i679[52], i679[53], 0, i678, 'CherryMiddleStrawCup')
  request.r(i679[54], i679[55], 0, i678, 'MultifruitMiddleBallsCup')
  request.r(i679[56], i679[57], 0, i678, 'TomatoMiddleBallsCup')
  request.r(i679[58], i679[59], 0, i678, 'AppleMiddleBallsCup')
  request.r(i679[60], i679[61], 0, i678, 'OrangeMiddleBallsCup')
  request.r(i679[62], i679[63], 0, i678, 'CherryMiddleBallsCup')
  request.r(i679[64], i679[65], 0, i678, 'EntitySmallCup')
  request.r(i679[66], i679[67], 0, i678, 'TomatoSmallCup')
  request.r(i679[68], i679[69], 0, i678, 'AppleSmallCup')
  request.r(i679[70], i679[71], 0, i678, 'OrangeSmallCup')
  request.r(i679[72], i679[73], 0, i678, 'CherrySmallCup')
  request.r(i679[74], i679[75], 0, i678, 'MultifruitSmallCup')
  request.r(i679[76], i679[77], 0, i678, 'TomatoSmallStrawCup')
  request.r(i679[78], i679[79], 0, i678, 'AppleSmallStrawCup')
  request.r(i679[80], i679[81], 0, i678, 'OrangeSmallStrawCup')
  request.r(i679[82], i679[83], 0, i678, 'CherrySmallStrawCup')
  request.r(i679[84], i679[85], 0, i678, 'MultifruitSmallStrawCup')
  request.r(i679[86], i679[87], 0, i678, 'AppleSmallBallsCup')
  request.r(i679[88], i679[89], 0, i678, 'TomatoSmallBallsCup')
  request.r(i679[90], i679[91], 0, i678, 'OrangeSmallBallsCup')
  request.r(i679[92], i679[93], 0, i678, 'CherrySmallBallsCup')
  request.r(i679[94], i679[95], 0, i678, 'MultifruitSmallBallsCup')
  request.r(i679[96], i679[97], 0, i678, 'JuiceBallAdditive')
  request.r(i679[98], i679[99], 0, i678, 'IceAdditive')
  request.r(i679[100], i679[101], 0, i678, 'GrassAdditive')
  return i678
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i680 = root || request.c( 'TouchIdleTimer' )
  var i681 = data
  return i680
}

Deserializers["Helper"] = function (request, data, root) {
  var i682 = root || request.c( 'Helper' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, '_smallCupFinger')
  request.r(i683[2], i683[3], 0, i682, '_middleCupFinger')
  request.r(i683[4], i683[5], 0, i682, '_bigCupFinger')
  request.r(i683[6], i683[7], 0, i682, '_iceFinger')
  request.r(i683[8], i683[9], 0, i682, '_grassFinger')
  request.r(i683[10], i683[11], 0, i682, '_juiceballFinger')
  request.r(i683[12], i683[13], 0, i682, '_appleFinger')
  request.r(i683[14], i683[15], 0, i682, '_cherryFinger')
  request.r(i683[16], i683[17], 0, i682, '_orangeFinger')
  request.r(i683[18], i683[19], 0, i682, '_multifruitFinger')
  request.r(i683[20], i683[21], 0, i682, '_tomatoFinger')
  request.r(i683[22], i683[23], 0, i682, '_strawFinger')
  request.r(i683[24], i683[25], 0, i682, '_readyFinger')
  request.r(i683[26], i683[27], 0, i682, '_peoples')
  request.r(i683[28], i683[29], 0, i682, '_tutorial')
  request.r(i683[30], i683[31], 0, i682, '_order')
  request.r(i683[32], i683[33], 0, i682, '_strawButton')
  request.r(i683[34], i683[35], 0, i682, '_bigCupButton')
  request.r(i683[36], i683[37], 0, i682, '_middleCupButton')
  request.r(i683[38], i683[39], 0, i682, '_smallCupButton')
  request.r(i683[40], i683[41], 0, i682, '_readyButton')
  request.r(i683[42], i683[43], 0, i682, '_touchIdleTimer')
  request.r(i683[44], i683[45], 0, i682, '_finalScreen')
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i685 = data
  i684.ambientIntensity = i685[0]
  i684.reflectionIntensity = i685[1]
  i684.ambientMode = i685[2]
  i684.ambientLight = new pc.Color(i685[3], i685[4], i685[5], i685[6])
  i684.ambientSkyColor = new pc.Color(i685[7], i685[8], i685[9], i685[10])
  i684.ambientGroundColor = new pc.Color(i685[11], i685[12], i685[13], i685[14])
  i684.ambientEquatorColor = new pc.Color(i685[15], i685[16], i685[17], i685[18])
  i684.fogColor = new pc.Color(i685[19], i685[20], i685[21], i685[22])
  i684.fogEndDistance = i685[23]
  i684.fogStartDistance = i685[24]
  i684.fogDensity = i685[25]
  i684.fog = !!i685[26]
  request.r(i685[27], i685[28], 0, i684, 'skybox')
  i684.fogMode = i685[29]
  var i687 = i685[30]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i687[i + 0]) );
  }
  i684.lightmaps = i686
  i684.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i685[31], i684.lightProbes)
  i684.lightmapsMode = i685[32]
  i684.mixedBakeMode = i685[33]
  i684.environmentLightingMode = i685[34]
  i684.ambientProbe = new pc.SphericalHarmonicsL2(i685[35])
  i684.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i685[36])
  i684.useReferenceAmbientProbe = !!i685[37]
  request.r(i685[38], i685[39], 0, i684, 'customReflection')
  request.r(i685[40], i685[41], 0, i684, 'defaultReflection')
  i684.defaultReflectionMode = i685[42]
  i684.defaultReflectionResolution = i685[43]
  i684.sunLightObjectId = i685[44]
  i684.pixelLightCount = i685[45]
  i684.defaultReflectionHDR = !!i685[46]
  i684.hasLightDataAsset = !!i685[47]
  i684.hasManualGenerate = !!i685[48]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'lightmapColor')
  request.r(i691[2], i691[3], 0, i690, 'lightmapDirection')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i692 = root || new UnityEngine.LightProbes()
  var i693 = data
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i701 = data
  var i703 = i701[0]
  var i702 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i703.length; i += 1) {
    i702.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i703[i + 0]));
  }
  i700.ShaderCompilationErrors = i702
  i700.name = i701[1]
  i700.guid = i701[2]
  var i705 = i701[3]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( i705[i + 0] );
  }
  i700.shaderDefinedKeywords = i704
  var i707 = i701[4]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i707[i + 0]) );
  }
  i700.passes = i706
  var i709 = i701[5]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i709[i + 0]) );
  }
  i700.usePasses = i708
  var i711 = i701[6]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i711[i + 0]) );
  }
  i700.defaultParameterValues = i710
  request.r(i701[7], i701[8], 0, i700, 'unityFallbackShader')
  i700.readDepth = !!i701[9]
  i700.isCreatedByShaderGraph = !!i701[10]
  i700.compiled = !!i701[11]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i715 = data
  i714.shaderName = i715[0]
  i714.errorMessage = i715[1]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i720 = root || new pc.UnityShaderPass()
  var i721 = data
  i720.id = i721[0]
  i720.subShaderIndex = i721[1]
  i720.name = i721[2]
  i720.passType = i721[3]
  i720.grabPassTextureName = i721[4]
  i720.usePass = !!i721[5]
  i720.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[6], i720.zTest)
  i720.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[7], i720.zWrite)
  i720.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[8], i720.culling)
  i720.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i721[9], i720.blending)
  i720.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i721[10], i720.alphaBlending)
  i720.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[11], i720.colorWriteMask)
  i720.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[12], i720.offsetUnits)
  i720.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[13], i720.offsetFactor)
  i720.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[14], i720.stencilRef)
  i720.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[15], i720.stencilReadMask)
  i720.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i721[16], i720.stencilWriteMask)
  i720.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i721[17], i720.stencilOp)
  i720.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i721[18], i720.stencilOpFront)
  i720.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i721[19], i720.stencilOpBack)
  var i723 = i721[20]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i723[i + 0]) );
  }
  i720.tags = i722
  var i725 = i721[21]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( i725[i + 0] );
  }
  i720.passDefinedKeywords = i724
  var i727 = i721[22]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i727[i + 0]) );
  }
  i720.passDefinedKeywordGroups = i726
  var i729 = i721[23]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i729[i + 0]) );
  }
  i720.variants = i728
  var i731 = i721[24]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i731[i + 0]) );
  }
  i720.excludedVariants = i730
  i720.hasDepthReader = !!i721[25]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i733 = data
  i732.val = i733[0]
  i732.name = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i735 = data
  i734.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[0], i734.src)
  i734.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[1], i734.dst)
  i734.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[2], i734.op)
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i737 = data
  i736.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[0], i736.pass)
  i736.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[1], i736.fail)
  i736.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[2], i736.zFail)
  i736.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[3], i736.comp)
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i741 = data
  i740.name = i741[0]
  i740.value = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i745 = data
  var i747 = i745[0]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( i747[i + 0] );
  }
  i744.keywords = i746
  i744.hasDiscard = !!i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i751 = data
  i750.passId = i751[0]
  i750.subShaderIndex = i751[1]
  var i753 = i751[2]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( i753[i + 0] );
  }
  i750.keywords = i752
  i750.vertexProgram = i751[3]
  i750.fragmentProgram = i751[4]
  i750.exportedForWebGl2 = !!i751[5]
  i750.readDepth = !!i751[6]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i757 = data
  request.r(i757[0], i757[1], 0, i756, 'shader')
  i756.pass = i757[2]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i761 = data
  i760.name = i761[0]
  i760.type = i761[1]
  i760.value = new pc.Vec4( i761[2], i761[3], i761[4], i761[5] )
  i760.textureValue = i761[6]
  i760.shaderPropertyFlag = i761[7]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i763 = data
  i762.name = i763[0]
  request.r(i763[1], i763[2], 0, i762, 'texture')
  i762.aabb = i763[3]
  i762.vertices = i763[4]
  i762.triangles = i763[5]
  i762.textureRect = UnityEngine.Rect.MinMaxRect(i763[6], i763[7], i763[8], i763[9])
  i762.packedRect = UnityEngine.Rect.MinMaxRect(i763[10], i763[11], i763[12], i763[13])
  i762.border = new pc.Vec4( i763[14], i763[15], i763[16], i763[17] )
  i762.transparency = i763[18]
  i762.bounds = i763[19]
  i762.pixelsPerUnit = i763[20]
  i762.textureWidth = i763[21]
  i762.textureHeight = i763[22]
  i762.nativeSize = new pc.Vec2( i763[23], i763[24] )
  i762.pivot = new pc.Vec2( i763[25], i763[26] )
  i762.textureRectOffset = new pc.Vec2( i763[27], i763[28] )
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i765 = data
  i764.name = i765[0]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i767 = data
  i766.name = i767[0]
  i766.wrapMode = i767[1]
  i766.isLooping = !!i767[2]
  i766.length = i767[3]
  var i769 = i767[4]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i769[i + 0]) );
  }
  i766.curves = i768
  var i771 = i767[5]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i771[i + 0]) );
  }
  i766.events = i770
  i766.halfPrecision = !!i767[6]
  i766._frameRate = i767[7]
  i766.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i767[8], i766.localBounds)
  i766.hasMuscleCurves = !!i767[9]
  var i773 = i767[10]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( i773[i + 0] );
  }
  i766.clipMuscleConstant = i772
  i766.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i767[11], i766.clipBindingConstant)
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i777 = data
  i776.path = i777[0]
  i776.hash = i777[1]
  i776.componentType = i777[2]
  i776.property = i777[3]
  i776.keys = i777[4]
  var i779 = i777[5]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i779[i + 0]) );
  }
  i776.objectReferenceKeys = i778
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i783 = data
  i782.time = i783[0]
  request.r(i783[1], i783[2], 0, i782, 'value')
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i787 = data
  i786.functionName = i787[0]
  i786.floatParameter = i787[1]
  i786.intParameter = i787[2]
  i786.stringParameter = i787[3]
  request.r(i787[4], i787[5], 0, i786, 'objectReferenceParameter')
  i786.time = i787[6]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i789 = data
  i788.center = new pc.Vec3( i789[0], i789[1], i789[2] )
  i788.extends = new pc.Vec3( i789[3], i789[4], i789[5] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i793 = data
  var i795 = i793[0]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( i795[i + 0] );
  }
  i792.genericBindings = i794
  var i797 = i793[1]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( i797[i + 0] );
  }
  i792.pptrCurveMapping = i796
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i799 = data
  i798.name = i799[0]
  i798.ascent = i799[1]
  i798.originalLineHeight = i799[2]
  i798.fontSize = i799[3]
  var i801 = i799[4]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i801[i + 0]) );
  }
  i798.characterInfo = i800
  request.r(i799[5], i799[6], 0, i798, 'texture')
  i798.originalFontSize = i799[7]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i805 = data
  i804.index = i805[0]
  i804.advance = i805[1]
  i804.bearing = i805[2]
  i804.glyphWidth = i805[3]
  i804.glyphHeight = i805[4]
  i804.minX = i805[5]
  i804.maxX = i805[6]
  i804.minY = i805[7]
  i804.maxY = i805[8]
  i804.uvBottomLeftX = i805[9]
  i804.uvBottomLeftY = i805[10]
  i804.uvBottomRightX = i805[11]
  i804.uvBottomRightY = i805[12]
  i804.uvTopLeftX = i805[13]
  i804.uvTopLeftY = i805[14]
  i804.uvTopRightX = i805[15]
  i804.uvTopRightY = i805[16]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i807 = data
  i806.name = i807[0]
  var i809 = i807[1]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i809[i + 0]) );
  }
  i806.layers = i808
  var i811 = i807[2]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i811[i + 0]) );
  }
  i806.parameters = i810
  i806.animationClips = i807[3]
  i806.avatarUnsupported = i807[4]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i815 = data
  i814.name = i815[0]
  i814.defaultWeight = i815[1]
  i814.blendingMode = i815[2]
  i814.avatarMask = i815[3]
  i814.syncedLayerIndex = i815[4]
  i814.syncedLayerAffectsTiming = !!i815[5]
  i814.syncedLayers = i815[6]
  i814.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i815[7], i814.stateMachine)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i817 = data
  i816.id = i817[0]
  i816.name = i817[1]
  i816.path = i817[2]
  var i819 = i817[3]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i819[i + 0]) );
  }
  i816.states = i818
  var i821 = i817[4]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i821[i + 0]) );
  }
  i816.machines = i820
  var i823 = i817[5]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i823[i + 0]) );
  }
  i816.entryStateTransitions = i822
  var i825 = i817[6]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i825[i + 0]) );
  }
  i816.exitStateTransitions = i824
  var i827 = i817[7]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i827[i + 0]) );
  }
  i816.anyStateTransitions = i826
  i816.defaultStateId = i817[8]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i831 = data
  i830.id = i831[0]
  i830.name = i831[1]
  i830.cycleOffset = i831[2]
  i830.cycleOffsetParameter = i831[3]
  i830.cycleOffsetParameterActive = !!i831[4]
  i830.mirror = !!i831[5]
  i830.mirrorParameter = i831[6]
  i830.mirrorParameterActive = !!i831[7]
  i830.motionId = i831[8]
  i830.nameHash = i831[9]
  i830.fullPathHash = i831[10]
  i830.speed = i831[11]
  i830.speedParameter = i831[12]
  i830.speedParameterActive = !!i831[13]
  i830.tag = i831[14]
  i830.tagHash = i831[15]
  i830.writeDefaultValues = !!i831[16]
  var i833 = i831[17]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.behaviours = i832
  var i835 = i831[18]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i835[i + 0]) );
  }
  i830.transitions = i834
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i841 = data
  i840.fullPath = i841[0]
  i840.canTransitionToSelf = !!i841[1]
  i840.duration = i841[2]
  i840.exitTime = i841[3]
  i840.hasExitTime = !!i841[4]
  i840.hasFixedDuration = !!i841[5]
  i840.interruptionSource = i841[6]
  i840.offset = i841[7]
  i840.orderedInterruption = !!i841[8]
  i840.destinationStateId = i841[9]
  i840.isExit = !!i841[10]
  i840.mute = !!i841[11]
  i840.solo = !!i841[12]
  var i843 = i841[13]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i843[i + 0]) );
  }
  i840.conditions = i842
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i849 = data
  i848.destinationStateId = i849[0]
  i848.isExit = !!i849[1]
  i848.mute = !!i849[2]
  i848.solo = !!i849[3]
  var i851 = i849[4]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i851[i + 0]) );
  }
  i848.conditions = i850
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i855 = data
  i854.mode = i855[0]
  i854.parameter = i855[1]
  i854.threshold = i855[2]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i859 = data
  i858.defaultBool = !!i859[0]
  i858.defaultFloat = i859[1]
  i858.defaultInt = i859[2]
  i858.name = i859[3]
  i858.nameHash = i859[4]
  i858.type = i859[5]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i861 = data
  i860.name = i861[0]
  i860.bytes64 = i861[1]
  i860.data = i861[2]
  return i860
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i863 = data
  i862.hashCode = i863[0]
  request.r(i863[1], i863[2], 0, i862, 'material')
  i862.materialHashCode = i863[3]
  request.r(i863[4], i863[5], 0, i862, 'atlas')
  i862.normalStyle = i863[6]
  i862.normalSpacingOffset = i863[7]
  i862.boldStyle = i863[8]
  i862.boldSpacing = i863[9]
  i862.italicStyle = i863[10]
  i862.tabSize = i863[11]
  i862.m_Version = i863[12]
  i862.m_SourceFontFileGUID = i863[13]
  request.r(i863[14], i863[15], 0, i862, 'm_SourceFontFile_EditorRef')
  request.r(i863[16], i863[17], 0, i862, 'm_SourceFontFile')
  i862.m_AtlasPopulationMode = i863[18]
  i862.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i863[19], i862.m_FaceInfo)
  var i865 = i863[20]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i865.length; i += 1) {
    i864.add(request.d('UnityEngine.TextCore.Glyph', i865[i + 0]));
  }
  i862.m_GlyphTable = i864
  var i867 = i863[21]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i867.length; i += 1) {
    i866.add(request.d('TMPro.TMP_Character', i867[i + 0]));
  }
  i862.m_CharacterTable = i866
  var i869 = i863[22]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i862.m_AtlasTextures = i868
  i862.m_AtlasTextureIndex = i863[23]
  i862.m_IsMultiAtlasTexturesEnabled = !!i863[24]
  i862.m_ClearDynamicDataOnBuild = !!i863[25]
  var i871 = i863[26]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(request.d('UnityEngine.TextCore.GlyphRect', i871[i + 0]));
  }
  i862.m_UsedGlyphRects = i870
  var i873 = i863[27]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i873.length; i += 1) {
    i872.add(request.d('UnityEngine.TextCore.GlyphRect', i873[i + 0]));
  }
  i862.m_FreeGlyphRects = i872
  i862.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i863[28], i862.m_fontInfo)
  i862.m_AtlasWidth = i863[29]
  i862.m_AtlasHeight = i863[30]
  i862.m_AtlasPadding = i863[31]
  i862.m_AtlasRenderMode = i863[32]
  var i875 = i863[33]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i875.length; i += 1) {
    i874.add(request.d('TMPro.TMP_Glyph', i875[i + 0]));
  }
  i862.m_glyphInfoList = i874
  i862.m_KerningTable = request.d('TMPro.KerningTable', i863[34], i862.m_KerningTable)
  i862.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i863[35], i862.m_FontFeatureTable)
  var i877 = i863[36]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 1, i876, '')
  }
  i862.fallbackFontAssets = i876
  var i879 = i863[37]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 1, i878, '')
  }
  i862.m_FallbackFontAssetTable = i878
  i862.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i863[38], i862.m_CreationSettings)
  var i881 = i863[39]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('TMPro.TMP_FontWeightPair', i881[i + 0]) );
  }
  i862.m_FontWeightTable = i880
  var i883 = i863[40]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('TMPro.TMP_FontWeightPair', i883[i + 0]) );
  }
  i862.fontWeights = i882
  return i862
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i885 = data
  i884.m_FaceIndex = i885[0]
  i884.m_FamilyName = i885[1]
  i884.m_StyleName = i885[2]
  i884.m_PointSize = i885[3]
  i884.m_Scale = i885[4]
  i884.m_UnitsPerEM = i885[5]
  i884.m_LineHeight = i885[6]
  i884.m_AscentLine = i885[7]
  i884.m_CapLine = i885[8]
  i884.m_MeanLine = i885[9]
  i884.m_Baseline = i885[10]
  i884.m_DescentLine = i885[11]
  i884.m_SuperscriptOffset = i885[12]
  i884.m_SuperscriptSize = i885[13]
  i884.m_SubscriptOffset = i885[14]
  i884.m_SubscriptSize = i885[15]
  i884.m_UnderlineOffset = i885[16]
  i884.m_UnderlineThickness = i885[17]
  i884.m_StrikethroughOffset = i885[18]
  i884.m_StrikethroughThickness = i885[19]
  i884.m_TabWidth = i885[20]
  return i884
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i889 = data
  i888.m_Index = i889[0]
  i888.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i889[1], i888.m_Metrics)
  i888.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i889[2], i888.m_GlyphRect)
  i888.m_Scale = i889[3]
  i888.m_AtlasIndex = i889[4]
  i888.m_ClassDefinitionType = i889[5]
  return i888
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i891 = data
  i890.m_Width = i891[0]
  i890.m_Height = i891[1]
  i890.m_HorizontalBearingX = i891[2]
  i890.m_HorizontalBearingY = i891[3]
  i890.m_HorizontalAdvance = i891[4]
  return i890
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i893 = data
  i892.m_X = i893[0]
  i892.m_Y = i893[1]
  i892.m_Width = i893[2]
  i892.m_Height = i893[3]
  return i892
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.TMP_Character' )
  var i897 = data
  i896.m_ElementType = i897[0]
  i896.m_Unicode = i897[1]
  i896.m_GlyphIndex = i897[2]
  i896.m_Scale = i897[3]
  return i896
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i902 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i903 = data
  i902.Name = i903[0]
  i902.PointSize = i903[1]
  i902.Scale = i903[2]
  i902.CharacterCount = i903[3]
  i902.LineHeight = i903[4]
  i902.Baseline = i903[5]
  i902.Ascender = i903[6]
  i902.CapHeight = i903[7]
  i902.Descender = i903[8]
  i902.CenterLine = i903[9]
  i902.SuperscriptOffset = i903[10]
  i902.SubscriptOffset = i903[11]
  i902.SubSize = i903[12]
  i902.Underline = i903[13]
  i902.UnderlineThickness = i903[14]
  i902.strikethrough = i903[15]
  i902.strikethroughThickness = i903[16]
  i902.TabWidth = i903[17]
  i902.Padding = i903[18]
  i902.AtlasWidth = i903[19]
  i902.AtlasHeight = i903[20]
  return i902
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i906 = root || request.c( 'TMPro.TMP_Glyph' )
  var i907 = data
  i906.id = i907[0]
  i906.x = i907[1]
  i906.y = i907[2]
  i906.width = i907[3]
  i906.height = i907[4]
  i906.xOffset = i907[5]
  i906.yOffset = i907[6]
  i906.xAdvance = i907[7]
  i906.scale = i907[8]
  return i906
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i908 = root || request.c( 'TMPro.KerningTable' )
  var i909 = data
  var i911 = i909[0]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i911.length; i += 1) {
    i910.add(request.d('TMPro.KerningPair', i911[i + 0]));
  }
  i908.kerningPairs = i910
  return i908
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.KerningPair' )
  var i915 = data
  i914.xOffset = i915[0]
  i914.m_FirstGlyph = i915[1]
  i914.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i915[2], i914.m_FirstGlyphAdjustments)
  i914.m_SecondGlyph = i915[3]
  i914.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i915[4], i914.m_SecondGlyphAdjustments)
  i914.m_IgnoreSpacingAdjustments = !!i915[5]
  return i914
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i916 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i917 = data
  var i919 = i917[0]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i919.length; i += 1) {
    i918.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i919[i + 0]));
  }
  i916.m_GlyphPairAdjustmentRecords = i918
  return i916
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i923 = data
  i922.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i923[0], i922.m_FirstAdjustmentRecord)
  i922.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i923[1], i922.m_SecondAdjustmentRecord)
  i922.m_FeatureLookupFlags = i923[2]
  return i922
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i924 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i925 = data
  i924.m_GlyphIndex = i925[0]
  i924.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i925[1], i924.m_GlyphValueRecord)
  return i924
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i927 = data
  i926.m_XPlacement = i927[0]
  i926.m_YPlacement = i927[1]
  i926.m_XAdvance = i927[2]
  i926.m_YAdvance = i927[3]
  return i926
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i931 = data
  i930.sourceFontFileName = i931[0]
  i930.sourceFontFileGUID = i931[1]
  i930.pointSizeSamplingMode = i931[2]
  i930.pointSize = i931[3]
  i930.padding = i931[4]
  i930.packingMode = i931[5]
  i930.atlasWidth = i931[6]
  i930.atlasHeight = i931[7]
  i930.characterSetSelectionMode = i931[8]
  i930.characterSequence = i931[9]
  i930.referencedFontAssetGUID = i931[10]
  i930.referencedTextAssetGUID = i931[11]
  i930.fontStyle = i931[12]
  i930.fontStyleModifier = i931[13]
  i930.renderMode = i931[14]
  i930.includeFontFeatures = !!i931[15]
  return i930
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'regularTypeface')
  request.r(i935[2], i935[3], 0, i934, 'italicTypeface')
  return i934
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i936 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i937 = data
  i936.useSafeMode = !!i937[0]
  i936.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i937[1], i936.safeModeOptions)
  i936.timeScale = i937[2]
  i936.unscaledTimeScale = i937[3]
  i936.useSmoothDeltaTime = !!i937[4]
  i936.maxSmoothUnscaledTime = i937[5]
  i936.rewindCallbackMode = i937[6]
  i936.showUnityEditorReport = !!i937[7]
  i936.logBehaviour = i937[8]
  i936.drawGizmos = !!i937[9]
  i936.defaultRecyclable = !!i937[10]
  i936.defaultAutoPlay = i937[11]
  i936.defaultUpdateType = i937[12]
  i936.defaultTimeScaleIndependent = !!i937[13]
  i936.defaultEaseType = i937[14]
  i936.defaultEaseOvershootOrAmplitude = i937[15]
  i936.defaultEasePeriod = i937[16]
  i936.defaultAutoKill = !!i937[17]
  i936.defaultLoopType = i937[18]
  i936.debugMode = !!i937[19]
  i936.debugStoreTargetId = !!i937[20]
  i936.showPreviewPanel = !!i937[21]
  i936.storeSettingsLocation = i937[22]
  i936.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i937[23], i936.modules)
  i936.createASMDEF = !!i937[24]
  i936.showPlayingTweens = !!i937[25]
  i936.showPausedTweens = !!i937[26]
  return i936
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i938 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i939 = data
  i938.logBehaviour = i939[0]
  i938.nestedTweenFailureBehaviour = i939[1]
  return i938
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i940 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i941 = data
  i940.showPanel = !!i941[0]
  i940.audioEnabled = !!i941[1]
  i940.physicsEnabled = !!i941[2]
  i940.physics2DEnabled = !!i941[3]
  i940.spriteEnabled = !!i941[4]
  i940.uiEnabled = !!i941[5]
  i940.textMeshProEnabled = !!i941[6]
  i940.tk2DEnabled = !!i941[7]
  i940.deAudioEnabled = !!i941[8]
  i940.deUnityExtendedEnabled = !!i941[9]
  i940.epoOutlineEnabled = !!i941[10]
  return i940
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.TMP_Settings' )
  var i943 = data
  i942.m_enableWordWrapping = !!i943[0]
  i942.m_enableKerning = !!i943[1]
  i942.m_enableExtraPadding = !!i943[2]
  i942.m_enableTintAllSprites = !!i943[3]
  i942.m_enableParseEscapeCharacters = !!i943[4]
  i942.m_EnableRaycastTarget = !!i943[5]
  i942.m_GetFontFeaturesAtRuntime = !!i943[6]
  i942.m_missingGlyphCharacter = i943[7]
  i942.m_warningsDisabled = !!i943[8]
  request.r(i943[9], i943[10], 0, i942, 'm_defaultFontAsset')
  i942.m_defaultFontAssetPath = i943[11]
  i942.m_defaultFontSize = i943[12]
  i942.m_defaultAutoSizeMinRatio = i943[13]
  i942.m_defaultAutoSizeMaxRatio = i943[14]
  i942.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i943[15], i943[16] )
  i942.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i943[17], i943[18] )
  i942.m_autoSizeTextContainer = !!i943[19]
  i942.m_IsTextObjectScaleStatic = !!i943[20]
  var i945 = i943[21]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 1, i944, '')
  }
  i942.m_fallbackFontAssets = i944
  i942.m_matchMaterialPreset = !!i943[22]
  request.r(i943[23], i943[24], 0, i942, 'm_defaultSpriteAsset')
  i942.m_defaultSpriteAssetPath = i943[25]
  i942.m_enableEmojiSupport = !!i943[26]
  i942.m_MissingCharacterSpriteUnicode = i943[27]
  i942.m_defaultColorGradientPresetsPath = i943[28]
  request.r(i943[29], i943[30], 0, i942, 'm_defaultStyleSheet')
  i942.m_StyleSheetsResourcePath = i943[31]
  request.r(i943[32], i943[33], 0, i942, 'm_leadingCharacters')
  request.r(i943[34], i943[35], 0, i942, 'm_followingCharacters')
  i942.m_UseModernHangulLineBreakingRules = !!i943[36]
  return i942
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i947 = data
  i946.hashCode = i947[0]
  request.r(i947[1], i947[2], 0, i946, 'material')
  i946.materialHashCode = i947[3]
  request.r(i947[4], i947[5], 0, i946, 'spriteSheet')
  var i949 = i947[6]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('TMPro.TMP_Sprite', i949[i + 0]));
  }
  i946.spriteInfoList = i948
  var i951 = i947[7]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 1, i950, '')
  }
  i946.fallbackSpriteAssets = i950
  i946.m_Version = i947[8]
  i946.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i947[9], i946.m_FaceInfo)
  var i953 = i947[10]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('TMPro.TMP_SpriteCharacter', i953[i + 0]));
  }
  i946.m_SpriteCharacterTable = i952
  var i955 = i947[11]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i955.length; i += 1) {
    i954.add(request.d('TMPro.TMP_SpriteGlyph', i955[i + 0]));
  }
  i946.m_SpriteGlyphTable = i954
  return i946
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.TMP_Sprite' )
  var i959 = data
  i958.name = i959[0]
  i958.hashCode = i959[1]
  i958.unicode = i959[2]
  i958.pivot = new pc.Vec2( i959[3], i959[4] )
  request.r(i959[5], i959[6], 0, i958, 'sprite')
  i958.id = i959[7]
  i958.x = i959[8]
  i958.y = i959[9]
  i958.width = i959[10]
  i958.height = i959[11]
  i958.xOffset = i959[12]
  i958.yOffset = i959[13]
  i958.xAdvance = i959[14]
  i958.scale = i959[15]
  return i958
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i965 = data
  i964.m_Name = i965[0]
  i964.m_HashCode = i965[1]
  i964.m_ElementType = i965[2]
  i964.m_Unicode = i965[3]
  i964.m_GlyphIndex = i965[4]
  i964.m_Scale = i965[5]
  return i964
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'sprite')
  i968.m_Index = i969[2]
  i968.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i969[3], i968.m_Metrics)
  i968.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i969[4], i968.m_GlyphRect)
  i968.m_Scale = i969[5]
  i968.m_AtlasIndex = i969[6]
  i968.m_ClassDefinitionType = i969[7]
  return i968
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i971 = data
  var i973 = i971[0]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i973.length; i += 1) {
    i972.add(request.d('TMPro.TMP_Style', i973[i + 0]));
  }
  i970.m_StyleList = i972
  return i970
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.TMP_Style' )
  var i977 = data
  i976.m_Name = i977[0]
  i976.m_HashCode = i977[1]
  i976.m_OpeningDefinition = i977[2]
  i976.m_ClosingDefinition = i977[3]
  i976.m_OpeningTagArray = i977[4]
  i976.m_ClosingTagArray = i977[5]
  i976.m_OpeningTagUnicodeArray = i977[6]
  i976.m_ClosingTagUnicodeArray = i977[7]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i979 = data
  var i981 = i979[0]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i981[i + 0]) );
  }
  i978.files = i980
  i978.componentToPrefabIds = i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i985 = data
  i984.path = i985[0]
  request.r(i985[1], i985[2], 0, i984, 'unityObject')
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i987 = data
  var i989 = i987[0]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i989[i + 0]) );
  }
  i986.scriptsExecutionOrder = i988
  var i991 = i987[1]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i991[i + 0]) );
  }
  i986.sortingLayers = i990
  var i993 = i987[2]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i993[i + 0]) );
  }
  i986.cullingLayers = i992
  i986.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i987[3], i986.timeSettings)
  i986.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i987[4], i986.physicsSettings)
  i986.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i987[5], i986.physics2DSettings)
  i986.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i987[6], i986.qualitySettings)
  i986.enableRealtimeShadows = !!i987[7]
  i986.enableAutoInstancing = !!i987[8]
  i986.enableDynamicBatching = !!i987[9]
  i986.lightmapEncodingQuality = i987[10]
  i986.desiredColorSpace = i987[11]
  var i995 = i987[12]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( i995[i + 0] );
  }
  i986.allTags = i994
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i999 = data
  i998.name = i999[0]
  i998.value = i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1003 = data
  i1002.id = i1003[0]
  i1002.name = i1003[1]
  i1002.value = i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1007 = data
  i1006.id = i1007[0]
  i1006.name = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1009 = data
  i1008.fixedDeltaTime = i1009[0]
  i1008.maximumDeltaTime = i1009[1]
  i1008.timeScale = i1009[2]
  i1008.maximumParticleTimestep = i1009[3]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1011 = data
  i1010.gravity = new pc.Vec3( i1011[0], i1011[1], i1011[2] )
  i1010.defaultSolverIterations = i1011[3]
  i1010.bounceThreshold = i1011[4]
  i1010.autoSyncTransforms = !!i1011[5]
  i1010.autoSimulation = !!i1011[6]
  var i1013 = i1011[7]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1013[i + 0]) );
  }
  i1010.collisionMatrix = i1012
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1017 = data
  i1016.enabled = !!i1017[0]
  i1016.layerId = i1017[1]
  i1016.otherLayerId = i1017[2]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'material')
  i1018.gravity = new pc.Vec2( i1019[2], i1019[3] )
  i1018.positionIterations = i1019[4]
  i1018.velocityIterations = i1019[5]
  i1018.velocityThreshold = i1019[6]
  i1018.maxLinearCorrection = i1019[7]
  i1018.maxAngularCorrection = i1019[8]
  i1018.maxTranslationSpeed = i1019[9]
  i1018.maxRotationSpeed = i1019[10]
  i1018.baumgarteScale = i1019[11]
  i1018.baumgarteTOIScale = i1019[12]
  i1018.timeToSleep = i1019[13]
  i1018.linearSleepTolerance = i1019[14]
  i1018.angularSleepTolerance = i1019[15]
  i1018.defaultContactOffset = i1019[16]
  i1018.autoSimulation = !!i1019[17]
  i1018.queriesHitTriggers = !!i1019[18]
  i1018.queriesStartInColliders = !!i1019[19]
  i1018.callbacksOnDisable = !!i1019[20]
  i1018.reuseCollisionCallbacks = !!i1019[21]
  i1018.autoSyncTransforms = !!i1019[22]
  var i1021 = i1019[23]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1021[i + 0]) );
  }
  i1018.collisionMatrix = i1020
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1025 = data
  i1024.enabled = !!i1025[0]
  i1024.layerId = i1025[1]
  i1024.otherLayerId = i1025[2]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1029[i + 0]) );
  }
  i1026.qualityLevels = i1028
  var i1031 = i1027[1]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1026.names = i1030
  i1026.shadows = i1027[2]
  i1026.anisotropicFiltering = i1027[3]
  i1026.antiAliasing = i1027[4]
  i1026.lodBias = i1027[5]
  i1026.shadowCascades = i1027[6]
  i1026.shadowDistance = i1027[7]
  i1026.shadowmaskMode = i1027[8]
  i1026.shadowProjection = i1027[9]
  i1026.shadowResolution = i1027[10]
  i1026.softParticles = !!i1027[11]
  i1026.softVegetation = !!i1027[12]
  i1026.activeColorSpace = i1027[13]
  i1026.desiredColorSpace = i1027[14]
  i1026.masterTextureLimit = i1027[15]
  i1026.maxQueuedFrames = i1027[16]
  i1026.particleRaycastBudget = i1027[17]
  i1026.pixelLightCount = i1027[18]
  i1026.realtimeReflectionProbes = !!i1027[19]
  i1026.shadowCascade2Split = i1027[20]
  i1026.shadowCascade4Split = new pc.Vec3( i1027[21], i1027[22], i1027[23] )
  i1026.streamingMipmapsActive = !!i1027[24]
  i1026.vSyncCount = i1027[25]
  i1026.asyncUploadBufferSize = i1027[26]
  i1026.asyncUploadTimeSlice = i1027[27]
  i1026.billboardsFaceCameraPosition = !!i1027[28]
  i1026.shadowNearPlaneOffset = i1027[29]
  i1026.streamingMipmapsMemoryBudget = i1027[30]
  i1026.maximumLODLevel = i1027[31]
  i1026.streamingMipmapsAddAllCameras = !!i1027[32]
  i1026.streamingMipmapsMaxLevelReduction = i1027[33]
  i1026.streamingMipmapsRenderersPerFrame = i1027[34]
  i1026.resolutionScalingFixedDPIFactor = i1027[35]
  i1026.streamingMipmapsMaxFileIORequests = i1027[36]
  i1026.currentQualityLevel = i1027[37]
  return i1026
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1034 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1035 = data
  i1034.xPlacement = i1035[0]
  i1034.yPlacement = i1035[1]
  i1034.xAdvance = i1035[2]
  i1034.yAdvance = i1035[3]
  return i1034
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[17],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[17],"80":[81],"82":[83],"84":[83],"22":[2],"35":[11],"85":[2],"86":[87],"88":[89],"90":[87],"91":[2],"92":[2],"24":[22],"6":[3,2],"93":[2],"23":[22],"31":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[2],"101":[2],"102":[3,2],"103":[2],"104":[2],"105":[2],"106":[2],"107":[3,2],"108":[2],"109":[38],"110":[38],"39":[38],"111":[38],"112":[17],"113":[17],"114":[115],"116":[17],"117":[2],"118":[81,2],"13":[2,3],"119":[2],"120":[3,2],"121":[81],"122":[3,2],"123":[2],"124":[87]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.Object","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","Fix.ClickCta","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "22.0";

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

Deserializers.buildID = "7c31b5be-366f-4db0-818d-4ace1b664b5c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

