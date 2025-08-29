var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointSpring' )
  var i529 = data
  i528.spring = i529[0]
  i528.damper = i529[1]
  i528.targetPosition = i529[2]
  return i528
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointMotor' )
  var i531 = data
  i530.m_TargetVelocity = i531[0]
  i530.m_Force = i531[1]
  i530.m_FreeSpin = i531[2]
  return i530
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointLimits' )
  var i533 = data
  i532.m_Min = i533[0]
  i532.m_Max = i533[1]
  i532.m_Bounciness = i533[2]
  i532.m_BounceMinVelocity = i533[3]
  i532.m_ContactDistance = i533[4]
  i532.minBounce = i533[5]
  i532.maxBounce = i533[6]
  return i532
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointDrive' )
  var i535 = data
  i534.m_PositionSpring = i535[0]
  i534.m_PositionDamper = i535[1]
  i534.m_MaximumForce = i535[2]
  i534.m_UseAcceleration = i535[3]
  return i534
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i537 = data
  i536.m_Spring = i537[0]
  i536.m_Damper = i537[1]
  return i536
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i539 = data
  i538.m_Limit = i539[0]
  i538.m_Bounciness = i539[1]
  i538.m_ContactDistance = i539[2]
  return i538
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i541 = data
  i540.m_ExtremumSlip = i541[0]
  i540.m_ExtremumValue = i541[1]
  i540.m_AsymptoteSlip = i541[2]
  i540.m_AsymptoteValue = i541[3]
  i540.m_Stiffness = i541[4]
  return i540
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i543 = data
  i542.m_LowerAngle = i543[0]
  i542.m_UpperAngle = i543[1]
  return i542
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i545 = data
  i544.m_MotorSpeed = i545[0]
  i544.m_MaximumMotorTorque = i545[1]
  return i544
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i547 = data
  i546.m_DampingRatio = i547[0]
  i546.m_Frequency = i547[1]
  i546.m_Angle = i547[2]
  return i546
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i549 = data
  i548.m_LowerTranslation = i549[0]
  i548.m_UpperTranslation = i549[1]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i551 = data
  i550.name = i551[0]
  i550.width = i551[1]
  i550.height = i551[2]
  i550.mipmapCount = i551[3]
  i550.anisoLevel = i551[4]
  i550.filterMode = i551[5]
  i550.hdr = !!i551[6]
  i550.format = i551[7]
  i550.wrapMode = i551[8]
  i550.alphaIsTransparency = !!i551[9]
  i550.alphaSource = i551[10]
  i550.graphicsFormat = i551[11]
  i550.sRGBTexture = !!i551[12]
  i550.desiredColorSpace = i551[13]
  i550.wrapU = i551[14]
  i550.wrapV = i551[15]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i552 = root || new pc.UnityMaterial()
  var i553 = data
  i552.name = i553[0]
  request.r(i553[1], i553[2], 0, i552, 'shader')
  i552.renderQueue = i553[3]
  i552.enableInstancing = !!i553[4]
  var i555 = i553[5]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i555[i + 0]) );
  }
  i552.floatParameters = i554
  var i557 = i553[6]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i557[i + 0]) );
  }
  i552.colorParameters = i556
  var i559 = i553[7]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i559[i + 0]) );
  }
  i552.vectorParameters = i558
  var i561 = i553[8]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i561[i + 0]) );
  }
  i552.textureParameters = i560
  var i563 = i553[9]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i563[i + 0]) );
  }
  i552.materialFlags = i562
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i567 = data
  i566.name = i567[0]
  i566.value = i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i571 = data
  i570.name = i571[0]
  i570.value = new pc.Color(i571[1], i571[2], i571[3], i571[4])
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i575 = data
  i574.name = i575[0]
  i574.value = new pc.Vec4( i575[1], i575[2], i575[3], i575[4] )
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i579 = data
  i578.name = i579[0]
  request.r(i579[1], i579[2], 0, i578, 'value')
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i583 = data
  i582.name = i583[0]
  i582.enabled = !!i583[1]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i585 = data
  i584.pivot = new pc.Vec2( i585[0], i585[1] )
  i584.anchorMin = new pc.Vec2( i585[2], i585[3] )
  i584.anchorMax = new pc.Vec2( i585[4], i585[5] )
  i584.sizeDelta = new pc.Vec2( i585[6], i585[7] )
  i584.anchoredPosition3D = new pc.Vec3( i585[8], i585[9], i585[10] )
  i584.rotation = new pc.Quat(i585[11], i585[12], i585[13], i585[14])
  i584.scale = new pc.Vec3( i585[15], i585[16], i585[17] )
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i587 = data
  i586.cullTransparentMesh = !!i587[0]
  return i586
}

Deserializers["People"] = function (request, data, root) {
  var i588 = root || request.c( 'People' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, '_endPoint')
  request.r(i589[2], i589[3], 0, i588, 'Bank')
  var i591 = i589[4]
  var i590 = new (System.Collections.Generic.List$1(Bridge.ns('Cup')))
  for(var i = 0; i < i591.length; i += 1) {
    i590.add(request.d('Cup', i591[i + 0]));
  }
  i588.Cups = i590
  request.r(i589[5], i589[6], 0, i588, '_finishSound')
  return i588
}

Deserializers["Cup"] = function (request, data, root) {
  var i594 = root || request.c( 'Cup' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'ReadyImage')
  request.r(i595[2], i595[3], 0, i594, 'AdditiveImage1')
  request.r(i595[4], i595[5], 0, i594, 'AdditiveImage2')
  request.r(i595[6], i595[7], 0, i594, 'SizeText')
  i594.CupType = i595[8]
  i594.JuiceType = i595[9]
  i594.AdditiveType1 = i595[10]
  i594.AdditiveType2 = i595[11]
  i594.IsReady = !!i595[12]
  i594.IsActive = !!i595[13]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'clip')
  request.r(i597[2], i597[3], 0, i596, 'outputAudioMixerGroup')
  i596.playOnAwake = !!i597[4]
  i596.loop = !!i597[5]
  i596.time = i597[6]
  i596.volume = i597[7]
  i596.pitch = i597[8]
  i596.enabled = !!i597[9]
  return i596
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.UI.Image' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'm_Sprite')
  i598.m_Type = i599[2]
  i598.m_PreserveAspect = !!i599[3]
  i598.m_FillCenter = !!i599[4]
  i598.m_FillMethod = i599[5]
  i598.m_FillAmount = i599[6]
  i598.m_FillClockwise = !!i599[7]
  i598.m_FillOrigin = i599[8]
  i598.m_UseSpriteMesh = !!i599[9]
  i598.m_PixelsPerUnitMultiplier = i599[10]
  request.r(i599[11], i599[12], 0, i598, 'm_Material')
  i598.m_Maskable = !!i599[13]
  i598.m_Color = new pc.Color(i599[14], i599[15], i599[16], i599[17])
  i598.m_RaycastTarget = !!i599[18]
  i598.m_RaycastPadding = new pc.Vec4( i599[19], i599[20], i599[21], i599[22] )
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i601 = data
  i600.name = i601[0]
  i600.tagId = i601[1]
  i600.enabled = !!i601[2]
  i600.isStatic = !!i601[3]
  i600.layer = i601[4]
  return i600
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.Button' )
  var i603 = data
  i602.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i603[0], i602.m_OnClick)
  i602.m_Navigation = request.d('UnityEngine.UI.Navigation', i603[1], i602.m_Navigation)
  i602.m_Transition = i603[2]
  i602.m_Colors = request.d('UnityEngine.UI.ColorBlock', i603[3], i602.m_Colors)
  i602.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i603[4], i602.m_SpriteState)
  i602.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i603[5], i602.m_AnimationTriggers)
  i602.m_Interactable = !!i603[6]
  request.r(i603[7], i603[8], 0, i602, 'm_TargetGraphic')
  return i602
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i605 = data
  i604.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i605[0], i604.m_PersistentCalls)
  return i604
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i607 = data
  var i609 = i607[0]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i609.length; i += 1) {
    i608.add(request.d('UnityEngine.Events.PersistentCall', i609[i + 0]));
  }
  i606.m_Calls = i608
  return i606
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'm_Target')
  i612.m_TargetAssemblyTypeName = i613[2]
  i612.m_MethodName = i613[3]
  i612.m_Mode = i613[4]
  i612.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i613[5], i612.m_Arguments)
  i612.m_CallState = i613[6]
  return i612
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'm_ObjectArgument')
  i614.m_ObjectArgumentAssemblyTypeName = i615[2]
  i614.m_IntArgument = i615[3]
  i614.m_FloatArgument = i615[4]
  i614.m_StringArgument = i615[5]
  i614.m_BoolArgument = !!i615[6]
  return i614
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i617 = data
  i616.m_Mode = i617[0]
  i616.m_WrapAround = !!i617[1]
  request.r(i617[2], i617[3], 0, i616, 'm_SelectOnUp')
  request.r(i617[4], i617[5], 0, i616, 'm_SelectOnDown')
  request.r(i617[6], i617[7], 0, i616, 'm_SelectOnLeft')
  request.r(i617[8], i617[9], 0, i616, 'm_SelectOnRight')
  return i616
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i619 = data
  i618.m_NormalColor = new pc.Color(i619[0], i619[1], i619[2], i619[3])
  i618.m_HighlightedColor = new pc.Color(i619[4], i619[5], i619[6], i619[7])
  i618.m_PressedColor = new pc.Color(i619[8], i619[9], i619[10], i619[11])
  i618.m_SelectedColor = new pc.Color(i619[12], i619[13], i619[14], i619[15])
  i618.m_DisabledColor = new pc.Color(i619[16], i619[17], i619[18], i619[19])
  i618.m_ColorMultiplier = i619[20]
  i618.m_FadeDuration = i619[21]
  return i618
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_HighlightedSprite')
  request.r(i621[2], i621[3], 0, i620, 'm_PressedSprite')
  request.r(i621[4], i621[5], 0, i620, 'm_SelectedSprite')
  request.r(i621[6], i621[7], 0, i620, 'm_DisabledSprite')
  return i620
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i623 = data
  i622.m_NormalTrigger = i623[0]
  i622.m_HighlightedTrigger = i623[1]
  i622.m_PressedTrigger = i623[2]
  i622.m_SelectedTrigger = i623[3]
  i622.m_DisabledTrigger = i623[4]
  return i622
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i624 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i625 = data
  i624.m_hasFontAssetChanged = !!i625[0]
  request.r(i625[1], i625[2], 0, i624, 'm_baseMaterial')
  i624.m_maskOffset = new pc.Vec4( i625[3], i625[4], i625[5], i625[6] )
  i624.m_text = i625[7]
  i624.m_isRightToLeft = !!i625[8]
  request.r(i625[9], i625[10], 0, i624, 'm_fontAsset')
  request.r(i625[11], i625[12], 0, i624, 'm_sharedMaterial')
  var i627 = i625[13]
  var i626 = []
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 2, i626, '')
  }
  i624.m_fontSharedMaterials = i626
  request.r(i625[14], i625[15], 0, i624, 'm_fontMaterial')
  var i629 = i625[16]
  var i628 = []
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 2, i628, '')
  }
  i624.m_fontMaterials = i628
  i624.m_fontColor32 = UnityEngine.Color32.ConstructColor(i625[17], i625[18], i625[19], i625[20])
  i624.m_fontColor = new pc.Color(i625[21], i625[22], i625[23], i625[24])
  i624.m_enableVertexGradient = !!i625[25]
  i624.m_colorMode = i625[26]
  i624.m_fontColorGradient = request.d('TMPro.VertexGradient', i625[27], i624.m_fontColorGradient)
  request.r(i625[28], i625[29], 0, i624, 'm_fontColorGradientPreset')
  request.r(i625[30], i625[31], 0, i624, 'm_spriteAsset')
  i624.m_tintAllSprites = !!i625[32]
  request.r(i625[33], i625[34], 0, i624, 'm_StyleSheet')
  i624.m_TextStyleHashCode = i625[35]
  i624.m_overrideHtmlColors = !!i625[36]
  i624.m_faceColor = UnityEngine.Color32.ConstructColor(i625[37], i625[38], i625[39], i625[40])
  i624.m_fontSize = i625[41]
  i624.m_fontSizeBase = i625[42]
  i624.m_fontWeight = i625[43]
  i624.m_enableAutoSizing = !!i625[44]
  i624.m_fontSizeMin = i625[45]
  i624.m_fontSizeMax = i625[46]
  i624.m_fontStyle = i625[47]
  i624.m_HorizontalAlignment = i625[48]
  i624.m_VerticalAlignment = i625[49]
  i624.m_textAlignment = i625[50]
  i624.m_characterSpacing = i625[51]
  i624.m_wordSpacing = i625[52]
  i624.m_lineSpacing = i625[53]
  i624.m_lineSpacingMax = i625[54]
  i624.m_paragraphSpacing = i625[55]
  i624.m_charWidthMaxAdj = i625[56]
  i624.m_enableWordWrapping = !!i625[57]
  i624.m_wordWrappingRatios = i625[58]
  i624.m_overflowMode = i625[59]
  request.r(i625[60], i625[61], 0, i624, 'm_linkedTextComponent')
  request.r(i625[62], i625[63], 0, i624, 'parentLinkedComponent')
  i624.m_enableKerning = !!i625[64]
  i624.m_enableExtraPadding = !!i625[65]
  i624.checkPaddingRequired = !!i625[66]
  i624.m_isRichText = !!i625[67]
  i624.m_parseCtrlCharacters = !!i625[68]
  i624.m_isOrthographic = !!i625[69]
  i624.m_isCullingEnabled = !!i625[70]
  i624.m_horizontalMapping = i625[71]
  i624.m_verticalMapping = i625[72]
  i624.m_uvLineOffset = i625[73]
  i624.m_geometrySortingOrder = i625[74]
  i624.m_IsTextObjectScaleStatic = !!i625[75]
  i624.m_VertexBufferAutoSizeReduction = !!i625[76]
  i624.m_useMaxVisibleDescender = !!i625[77]
  i624.m_pageToDisplay = i625[78]
  i624.m_margin = new pc.Vec4( i625[79], i625[80], i625[81], i625[82] )
  i624.m_isUsingLegacyAnimationComponent = !!i625[83]
  i624.m_isVolumetricText = !!i625[84]
  request.r(i625[85], i625[86], 0, i624, 'm_Material')
  i624.m_Maskable = !!i625[87]
  i624.m_Color = new pc.Color(i625[88], i625[89], i625[90], i625[91])
  i624.m_RaycastTarget = !!i625[92]
  i624.m_RaycastPadding = new pc.Vec4( i625[93], i625[94], i625[95], i625[96] )
  return i624
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i632 = root || request.c( 'TMPro.VertexGradient' )
  var i633 = data
  i632.topLeft = new pc.Color(i633[0], i633[1], i633[2], i633[3])
  i632.topRight = new pc.Color(i633[4], i633[5], i633[6], i633[7])
  i632.bottomLeft = new pc.Color(i633[8], i633[9], i633[10], i633[11])
  i632.bottomRight = new pc.Color(i633[12], i633[13], i633[14], i633[15])
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i635 = data
  i634.name = i635[0]
  i634.index = i635[1]
  i634.startup = !!i635[2]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i637 = data
  i636.position = new pc.Vec3( i637[0], i637[1], i637[2] )
  i636.scale = new pc.Vec3( i637[3], i637[4], i637[5] )
  i636.rotation = new pc.Quat(i637[6], i637[7], i637[8], i637[9])
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i639 = data
  i638.enabled = !!i639[0]
  i638.aspect = i639[1]
  i638.orthographic = !!i639[2]
  i638.orthographicSize = i639[3]
  i638.backgroundColor = new pc.Color(i639[4], i639[5], i639[6], i639[7])
  i638.nearClipPlane = i639[8]
  i638.farClipPlane = i639[9]
  i638.fieldOfView = i639[10]
  i638.depth = i639[11]
  i638.clearFlags = i639[12]
  i638.cullingMask = i639[13]
  i638.rect = i639[14]
  request.r(i639[15], i639[16], 0, i638, 'targetTexture')
  i638.usePhysicalProperties = !!i639[17]
  i638.focalLength = i639[18]
  i638.sensorSize = new pc.Vec2( i639[19], i639[20] )
  i638.lensShift = new pc.Vec2( i639[21], i639[22] )
  i638.gateFit = i639[23]
  i638.commandBufferCount = i639[24]
  i638.cameraType = i639[25]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'animatorController')
  request.r(i641[2], i641[3], 0, i640, 'avatar')
  i640.updateMode = i641[4]
  i640.hasTransformHierarchy = !!i641[5]
  i640.applyRootMotion = !!i641[6]
  var i643 = i641[7]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i640.humanBones = i642
  i640.enabled = !!i641[8]
  return i640
}

Deserializers["Bank"] = function (request, data, root) {
  var i646 = root || request.c( 'Bank' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'BuyBigCupButton')
  request.r(i647[2], i647[3], 0, i646, 'BigCupButton')
  request.r(i647[4], i647[5], 0, i646, 'MiddleCupButton')
  request.r(i647[6], i647[7], 0, i646, 'MoneyText')
  request.r(i647[8], i647[9], 0, i646, 'Tutorial')
  request.r(i647[10], i647[11], 0, i646, 'BuyAdditiveButton')
  request.r(i647[12], i647[13], 0, i646, 'BuyJuiceButton')
  request.r(i647[14], i647[15], 0, i646, 'JuiceButton1')
  request.r(i647[16], i647[17], 0, i646, 'JuiceButton2')
  request.r(i647[18], i647[19], 0, i646, 'JuiceButton3')
  request.r(i647[20], i647[21], 0, i646, 'Additive1Button')
  request.r(i647[22], i647[23], 0, i646, 'Additive2Button')
  i646.Money = i647[24]
  i646.IsBigCupBuy = !!i647[25]
  i646.IsJuiceBuy = !!i647[26]
  i646.IsAdditiveBuy = !!i647[27]
  request.r(i647[28], i647[29], 0, i646, '_buySound')
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i649 = data
  i648.enabled = !!i649[0]
  i648.planeDistance = i649[1]
  i648.referencePixelsPerUnit = i649[2]
  i648.isFallbackOverlay = !!i649[3]
  i648.renderMode = i649[4]
  i648.renderOrder = i649[5]
  i648.sortingLayerName = i649[6]
  i648.sortingOrder = i649[7]
  i648.scaleFactor = i649[8]
  request.r(i649[9], i649[10], 0, i648, 'worldCamera')
  i648.overrideSorting = !!i649[11]
  i648.pixelPerfect = !!i649[12]
  i648.targetDisplay = i649[13]
  i648.overridePixelPerfect = !!i649[14]
  return i648
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i651 = data
  i650.m_UiScaleMode = i651[0]
  i650.m_ReferencePixelsPerUnit = i651[1]
  i650.m_ScaleFactor = i651[2]
  i650.m_ReferenceResolution = new pc.Vec2( i651[3], i651[4] )
  i650.m_ScreenMatchMode = i651[5]
  i650.m_MatchWidthOrHeight = i651[6]
  i650.m_PhysicalUnit = i651[7]
  i650.m_FallbackScreenDPI = i651[8]
  i650.m_DefaultSpriteDPI = i651[9]
  i650.m_DynamicPixelsPerUnit = i651[10]
  i650.m_PresetInfoIsWorld = !!i651[11]
  return i650
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i653 = data
  i652.m_IgnoreReversedGraphics = !!i653[0]
  i652.m_BlockingObjects = i653[1]
  i652.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i653[2] )
  return i652
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i654 = root || request.c( 'ImageShiftOnOrientation' )
  var i655 = data
  var i657 = i655[0]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('ItemSwitcherData', i657[i + 0]) );
  }
  i654.Items = i656
  request.r(i655[1], i655[2], 0, i654, '_backHorizontal')
  request.r(i655[3], i655[4], 0, i654, '_backVertical')
  request.r(i655[5], i655[6], 0, i654, '_tableHorizontal')
  request.r(i655[7], i655[8], 0, i654, '_tableVertical')
  i654.IsDebug = !!i655[9]
  i654.CanCopy = !!i655[10]
  return i654
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i660 = root || request.c( 'ItemSwitcherData' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'Target')
  i660.HorizontalAnchoredPosition = new pc.Vec2( i661[2], i661[3] )
  i660.SizeHorizontal = new pc.Vec2( i661[4], i661[5] )
  i660.VerticalAnchoredPosition = new pc.Vec2( i661[6], i661[7] )
  i660.SizeVertical = new pc.Vec2( i661[8], i661[9] )
  i660.MinHorizontal = new pc.Vec2( i661[10], i661[11] )
  i660.MaxHorizontal = new pc.Vec2( i661[12], i661[13] )
  i660.MinVertical = new pc.Vec2( i661[14], i661[15] )
  i660.MaxVertical = new pc.Vec2( i661[16], i661[17] )
  i660.IsAnchored = !!i661[18]
  i660.IsDebug = !!i661[19]
  i660.CopyHorizontal = !!i661[20]
  i660.CopyVertical = !!i661[21]
  return i660
}

Deserializers["Point"] = function (request, data, root) {
  var i662 = root || request.c( 'Point' )
  var i663 = data
  return i662
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i664 = root || request.c( 'PeopleContainer' )
  var i665 = data
  var i667 = i665[0]
  var i666 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i667.length; i += 2) {
  request.r(i667[i + 0], i667[i + 1], 1, i666, '')
  }
  i664.CurrentPeoples = i666
  var i669 = i665[1]
  var i668 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 1, i668, '')
  }
  i664._peoples = i668
  request.r(i665[2], i665[3], 0, i664, '_tutorialPeople')
  request.r(i665[4], i665[5], 0, i664, '_spawnPoint')
  request.r(i665[6], i665[7], 0, i664, '_point1')
  request.r(i665[8], i665[9], 0, i664, '_point2')
  request.r(i665[10], i665[11], 0, i664, '_endPoint')
  request.r(i665[12], i665[13], 0, i664, '_juiceConfig')
  request.r(i665[14], i665[15], 0, i664, '_tutorial')
  return i664
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i673 = data
  i672.m_HorizontalFit = i673[0]
  i672.m_VerticalFit = i673[1]
  return i672
}

Deserializers["BackImage"] = function (request, data, root) {
  var i674 = root || request.c( 'BackImage' )
  var i675 = data
  return i674
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i676 = root || request.c( 'AheadImage' )
  var i677 = data
  return i676
}

Deserializers["Order"] = function (request, data, root) {
  var i678 = root || request.c( 'Order' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, '_juiceAnimator')
  request.r(i679[2], i679[3], 0, i678, '_cupAnimator')
  request.r(i679[4], i679[5], 0, i678, '_canvasAnimator')
  i678.CupType = i679[6]
  i678.JuiceType = i679[7]
  i678.AdditiveType1 = i679[8]
  i678.AdditiveType2 = i679[9]
  i678.IsFree = !!i679[10]
  i678.IsSpriteReady = !!i679[11]
  i678.IsCupReady = !!i679[12]
  i678.IsJuiceReady = !!i679[13]
  i678.IsPouring = !!i679[14]
  request.r(i679[15], i679[16], 0, i678, '_iceButton')
  request.r(i679[17], i679[18], 0, i678, '_grassButton')
  request.r(i679[19], i679[20], 0, i678, '_juiceBallsButton')
  request.r(i679[21], i679[22], 0, i678, '_strawButton')
  request.r(i679[23], i679[24], 0, i678, '_bigCupButton')
  request.r(i679[25], i679[26], 0, i678, '_middleCupButton')
  request.r(i679[27], i679[28], 0, i678, '_smallCupButton')
  request.r(i679[29], i679[30], 0, i678, '_appleButton')
  request.r(i679[31], i679[32], 0, i678, '_orangeButton')
  request.r(i679[33], i679[34], 0, i678, '_multifruitButton')
  request.r(i679[35], i679[36], 0, i678, '_tomatoButton')
  request.r(i679[37], i679[38], 0, i678, '_cherryButton')
  request.r(i679[39], i679[40], 0, i678, '_smallRawJuiceImage')
  request.r(i679[41], i679[42], 0, i678, '_middleRawJuiceImage')
  request.r(i679[43], i679[44], 0, i678, '_bigRawJuiceImage')
  request.r(i679[45], i679[46], 0, i678, '_smallReadyJuiceImage')
  request.r(i679[47], i679[48], 0, i678, '_middleReadyJuiceImage')
  request.r(i679[49], i679[50], 0, i678, '_bigReadyJuiceImage')
  request.r(i679[51], i679[52], 0, i678, '_backImage')
  request.r(i679[53], i679[54], 0, i678, '_aheadImage')
  request.r(i679[55], i679[56], 0, i678, '_config')
  request.r(i679[57], i679[58], 0, i678, '_takeOrderButton')
  request.r(i679[59], i679[60], 0, i678, '_peopleContainer')
  request.r(i679[61], i679[62], 0, i678, '_tutorial')
  request.r(i679[63], i679[64], 0, i678, '_bText')
  request.r(i679[65], i679[66], 0, i678, '_mText')
  request.r(i679[67], i679[68], 0, i678, '_sText')
  request.r(i679[69], i679[70], 0, i678, '_garbageButton')
  request.r(i679[71], i679[72], 0, i678, '_clickSound')
  request.r(i679[73], i679[74], 0, i678, '_juiceSound')
  return i678
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i680 = root || request.c( 'Tutorial' )
  var i681 = data
  i680.IsTutorial = !!i681[0]
  request.r(i681[1], i681[2], 0, i680, 'Finger1')
  request.r(i681[3], i681[4], 0, i680, 'Finger2')
  request.r(i681[5], i681[6], 0, i680, 'Finger3')
  request.r(i681[7], i681[8], 0, i680, 'Finger4')
  request.r(i681[9], i681[10], 0, i680, 'Finger5')
  request.r(i681[11], i681[12], 0, i680, 'BuyBigCupFinger')
  request.r(i681[13], i681[14], 0, i680, 'BuyJuiceFinger')
  request.r(i681[15], i681[16], 0, i680, 'SmallCupButton')
  request.r(i681[17], i681[18], 0, i680, 'JuiceButton')
  request.r(i681[19], i681[20], 0, i680, 'StrawButton')
  request.r(i681[21], i681[22], 0, i680, 'AdditiveButton')
  request.r(i681[23], i681[24], 0, i680, 'ReadyButton')
  var i683 = i681[25]
  var i682 = []
  for(var i = 0; i < i683.length; i += 2) {
  request.r(i683[i + 0], i683[i + 1], 2, i682, '')
  }
  i680.Buttons = i682
  request.r(i681[26], i681[27], 0, i680, 'Bank')
  return i680
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i686 = root || request.c( 'SoundSwitcher' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, '_onImage')
  request.r(i687[2], i687[3], 0, i686, '_offImage')
  return i686
}

Deserializers["Fix.ClickCta"] = function (request, data, root) {
  var i688 = root || request.c( 'Fix.ClickCta' )
  var i689 = data
  return i688
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'm_FirstSelected')
  i690.m_sendNavigationEvents = !!i691[2]
  i690.m_DragThreshold = i691[3]
  return i690
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i693 = data
  i692.m_HorizontalAxis = i693[0]
  i692.m_VerticalAxis = i693[1]
  i692.m_SubmitButton = i693[2]
  i692.m_CancelButton = i693[3]
  i692.m_InputActionsPerSecond = i693[4]
  i692.m_RepeatDelay = i693[5]
  i692.m_ForceModuleActive = !!i693[6]
  i692.m_SendPointerHoverToParent = !!i693[7]
  return i692
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i694 = root || request.c( 'JuiceConfig' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'EntityBigCup')
  request.r(i695[2], i695[3], 0, i694, 'TomatoBigCup')
  request.r(i695[4], i695[5], 0, i694, 'AppleBigCup')
  request.r(i695[6], i695[7], 0, i694, 'OrangeBigCup')
  request.r(i695[8], i695[9], 0, i694, 'CherryBigCup')
  request.r(i695[10], i695[11], 0, i694, 'MultifruitBigCup')
  request.r(i695[12], i695[13], 0, i694, 'TomatoBigStrawCup')
  request.r(i695[14], i695[15], 0, i694, 'MultifruitBigStrawCup')
  request.r(i695[16], i695[17], 0, i694, 'AppleBigStrawCup')
  request.r(i695[18], i695[19], 0, i694, 'OrangeBigStrawCup')
  request.r(i695[20], i695[21], 0, i694, 'CherryBigStrawCup')
  request.r(i695[22], i695[23], 0, i694, 'MultifruitBigBallsCup')
  request.r(i695[24], i695[25], 0, i694, 'TomatoBigBallsCup')
  request.r(i695[26], i695[27], 0, i694, 'AppleBigBallsCup')
  request.r(i695[28], i695[29], 0, i694, 'OrangeBigBallsCup')
  request.r(i695[30], i695[31], 0, i694, 'CherryBigBallsCup')
  request.r(i695[32], i695[33], 0, i694, 'EntityMiddleCup')
  request.r(i695[34], i695[35], 0, i694, 'TomatoMiddleCup')
  request.r(i695[36], i695[37], 0, i694, 'AppleMiddleCup')
  request.r(i695[38], i695[39], 0, i694, 'OrangeMiddleCup')
  request.r(i695[40], i695[41], 0, i694, 'CherryMiddleCup')
  request.r(i695[42], i695[43], 0, i694, 'MultifruitMiddleCup')
  request.r(i695[44], i695[45], 0, i694, 'TomatoMiddleStrawCup')
  request.r(i695[46], i695[47], 0, i694, 'MultifruitMiddleStrawCup')
  request.r(i695[48], i695[49], 0, i694, 'AppleMiddleStrawCup')
  request.r(i695[50], i695[51], 0, i694, 'OrangeMiddleStrawCup')
  request.r(i695[52], i695[53], 0, i694, 'CherryMiddleStrawCup')
  request.r(i695[54], i695[55], 0, i694, 'MultifruitMiddleBallsCup')
  request.r(i695[56], i695[57], 0, i694, 'TomatoMiddleBallsCup')
  request.r(i695[58], i695[59], 0, i694, 'AppleMiddleBallsCup')
  request.r(i695[60], i695[61], 0, i694, 'OrangeMiddleBallsCup')
  request.r(i695[62], i695[63], 0, i694, 'CherryMiddleBallsCup')
  request.r(i695[64], i695[65], 0, i694, 'EntitySmallCup')
  request.r(i695[66], i695[67], 0, i694, 'TomatoSmallCup')
  request.r(i695[68], i695[69], 0, i694, 'AppleSmallCup')
  request.r(i695[70], i695[71], 0, i694, 'OrangeSmallCup')
  request.r(i695[72], i695[73], 0, i694, 'CherrySmallCup')
  request.r(i695[74], i695[75], 0, i694, 'MultifruitSmallCup')
  request.r(i695[76], i695[77], 0, i694, 'TomatoSmallStrawCup')
  request.r(i695[78], i695[79], 0, i694, 'AppleSmallStrawCup')
  request.r(i695[80], i695[81], 0, i694, 'OrangeSmallStrawCup')
  request.r(i695[82], i695[83], 0, i694, 'CherrySmallStrawCup')
  request.r(i695[84], i695[85], 0, i694, 'MultifruitSmallStrawCup')
  request.r(i695[86], i695[87], 0, i694, 'AppleSmallBallsCup')
  request.r(i695[88], i695[89], 0, i694, 'TomatoSmallBallsCup')
  request.r(i695[90], i695[91], 0, i694, 'OrangeSmallBallsCup')
  request.r(i695[92], i695[93], 0, i694, 'CherrySmallBallsCup')
  request.r(i695[94], i695[95], 0, i694, 'MultifruitSmallBallsCup')
  request.r(i695[96], i695[97], 0, i694, 'JuiceBallAdditive')
  request.r(i695[98], i695[99], 0, i694, 'IceAdditive')
  request.r(i695[100], i695[101], 0, i694, 'GrassAdditive')
  return i694
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i696 = root || request.c( 'TouchIdleTimer' )
  var i697 = data
  return i696
}

Deserializers["Helper"] = function (request, data, root) {
  var i698 = root || request.c( 'Helper' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, '_smallCupFinger')
  request.r(i699[2], i699[3], 0, i698, '_middleCupFinger')
  request.r(i699[4], i699[5], 0, i698, '_bigCupFinger')
  request.r(i699[6], i699[7], 0, i698, '_iceFinger')
  request.r(i699[8], i699[9], 0, i698, '_grassFinger')
  request.r(i699[10], i699[11], 0, i698, '_juiceballFinger')
  request.r(i699[12], i699[13], 0, i698, '_appleFinger')
  request.r(i699[14], i699[15], 0, i698, '_cherryFinger')
  request.r(i699[16], i699[17], 0, i698, '_orangeFinger')
  request.r(i699[18], i699[19], 0, i698, '_multifruitFinger')
  request.r(i699[20], i699[21], 0, i698, '_tomatoFinger')
  request.r(i699[22], i699[23], 0, i698, '_strawFinger')
  request.r(i699[24], i699[25], 0, i698, '_readyFinger')
  var i701 = i699[26]
  var i700 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 1, i700, '')
  }
  i698._juiseButtons = i700
  request.r(i699[27], i699[28], 0, i698, '_peoples')
  request.r(i699[29], i699[30], 0, i698, '_tutorial')
  request.r(i699[31], i699[32], 0, i698, '_order')
  request.r(i699[33], i699[34], 0, i698, '_strawButton')
  request.r(i699[35], i699[36], 0, i698, '_bigCupButton')
  request.r(i699[37], i699[38], 0, i698, '_middleCupButton')
  request.r(i699[39], i699[40], 0, i698, '_smallCupButton')
  request.r(i699[41], i699[42], 0, i698, '_grassButton')
  request.r(i699[43], i699[44], 0, i698, '_juiceballButton')
  request.r(i699[45], i699[46], 0, i698, '_iceButton')
  request.r(i699[47], i699[48], 0, i698, '_readyButton')
  request.r(i699[49], i699[50], 0, i698, '_touchIdleTimer')
  request.r(i699[51], i699[52], 0, i698, '_finalScreen')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i705 = data
  i704.ambientIntensity = i705[0]
  i704.reflectionIntensity = i705[1]
  i704.ambientMode = i705[2]
  i704.ambientLight = new pc.Color(i705[3], i705[4], i705[5], i705[6])
  i704.ambientSkyColor = new pc.Color(i705[7], i705[8], i705[9], i705[10])
  i704.ambientGroundColor = new pc.Color(i705[11], i705[12], i705[13], i705[14])
  i704.ambientEquatorColor = new pc.Color(i705[15], i705[16], i705[17], i705[18])
  i704.fogColor = new pc.Color(i705[19], i705[20], i705[21], i705[22])
  i704.fogEndDistance = i705[23]
  i704.fogStartDistance = i705[24]
  i704.fogDensity = i705[25]
  i704.fog = !!i705[26]
  request.r(i705[27], i705[28], 0, i704, 'skybox')
  i704.fogMode = i705[29]
  var i707 = i705[30]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i707[i + 0]) );
  }
  i704.lightmaps = i706
  i704.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i705[31], i704.lightProbes)
  i704.lightmapsMode = i705[32]
  i704.mixedBakeMode = i705[33]
  i704.environmentLightingMode = i705[34]
  i704.ambientProbe = new pc.SphericalHarmonicsL2(i705[35])
  i704.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i705[36])
  i704.useReferenceAmbientProbe = !!i705[37]
  request.r(i705[38], i705[39], 0, i704, 'customReflection')
  request.r(i705[40], i705[41], 0, i704, 'defaultReflection')
  i704.defaultReflectionMode = i705[42]
  i704.defaultReflectionResolution = i705[43]
  i704.sunLightObjectId = i705[44]
  i704.pixelLightCount = i705[45]
  i704.defaultReflectionHDR = !!i705[46]
  i704.hasLightDataAsset = !!i705[47]
  i704.hasManualGenerate = !!i705[48]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'lightmapColor')
  request.r(i711[2], i711[3], 0, i710, 'lightmapDirection')
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i712 = root || new UnityEngine.LightProbes()
  var i713 = data
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i721 = data
  var i723 = i721[0]
  var i722 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i723.length; i += 1) {
    i722.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i723[i + 0]));
  }
  i720.ShaderCompilationErrors = i722
  i720.name = i721[1]
  i720.guid = i721[2]
  var i725 = i721[3]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( i725[i + 0] );
  }
  i720.shaderDefinedKeywords = i724
  var i727 = i721[4]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i727[i + 0]) );
  }
  i720.passes = i726
  var i729 = i721[5]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i729[i + 0]) );
  }
  i720.usePasses = i728
  var i731 = i721[6]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i731[i + 0]) );
  }
  i720.defaultParameterValues = i730
  request.r(i721[7], i721[8], 0, i720, 'unityFallbackShader')
  i720.readDepth = !!i721[9]
  i720.isCreatedByShaderGraph = !!i721[10]
  i720.compiled = !!i721[11]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i735 = data
  i734.shaderName = i735[0]
  i734.errorMessage = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i740 = root || new pc.UnityShaderPass()
  var i741 = data
  i740.id = i741[0]
  i740.subShaderIndex = i741[1]
  i740.name = i741[2]
  i740.passType = i741[3]
  i740.grabPassTextureName = i741[4]
  i740.usePass = !!i741[5]
  i740.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[6], i740.zTest)
  i740.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[7], i740.zWrite)
  i740.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[8], i740.culling)
  i740.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i741[9], i740.blending)
  i740.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i741[10], i740.alphaBlending)
  i740.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[11], i740.colorWriteMask)
  i740.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[12], i740.offsetUnits)
  i740.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[13], i740.offsetFactor)
  i740.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[14], i740.stencilRef)
  i740.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[15], i740.stencilReadMask)
  i740.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[16], i740.stencilWriteMask)
  i740.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i741[17], i740.stencilOp)
  i740.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i741[18], i740.stencilOpFront)
  i740.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i741[19], i740.stencilOpBack)
  var i743 = i741[20]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i743[i + 0]) );
  }
  i740.tags = i742
  var i745 = i741[21]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( i745[i + 0] );
  }
  i740.passDefinedKeywords = i744
  var i747 = i741[22]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i747[i + 0]) );
  }
  i740.passDefinedKeywordGroups = i746
  var i749 = i741[23]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i749[i + 0]) );
  }
  i740.variants = i748
  var i751 = i741[24]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i751[i + 0]) );
  }
  i740.excludedVariants = i750
  i740.hasDepthReader = !!i741[25]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i753 = data
  i752.val = i753[0]
  i752.name = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i755 = data
  i754.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[0], i754.src)
  i754.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[1], i754.dst)
  i754.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[2], i754.op)
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i757 = data
  i756.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[0], i756.pass)
  i756.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[1], i756.fail)
  i756.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[2], i756.zFail)
  i756.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[3], i756.comp)
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i761 = data
  i760.name = i761[0]
  i760.value = i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i765 = data
  var i767 = i765[0]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( i767[i + 0] );
  }
  i764.keywords = i766
  i764.hasDiscard = !!i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i771 = data
  i770.passId = i771[0]
  i770.subShaderIndex = i771[1]
  var i773 = i771[2]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( i773[i + 0] );
  }
  i770.keywords = i772
  i770.vertexProgram = i771[3]
  i770.fragmentProgram = i771[4]
  i770.exportedForWebGl2 = !!i771[5]
  i770.readDepth = !!i771[6]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'shader')
  i776.pass = i777[2]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i781 = data
  i780.name = i781[0]
  i780.type = i781[1]
  i780.value = new pc.Vec4( i781[2], i781[3], i781[4], i781[5] )
  i780.textureValue = i781[6]
  i780.shaderPropertyFlag = i781[7]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i783 = data
  i782.name = i783[0]
  request.r(i783[1], i783[2], 0, i782, 'texture')
  i782.aabb = i783[3]
  i782.vertices = i783[4]
  i782.triangles = i783[5]
  i782.textureRect = UnityEngine.Rect.MinMaxRect(i783[6], i783[7], i783[8], i783[9])
  i782.packedRect = UnityEngine.Rect.MinMaxRect(i783[10], i783[11], i783[12], i783[13])
  i782.border = new pc.Vec4( i783[14], i783[15], i783[16], i783[17] )
  i782.transparency = i783[18]
  i782.bounds = i783[19]
  i782.pixelsPerUnit = i783[20]
  i782.textureWidth = i783[21]
  i782.textureHeight = i783[22]
  i782.nativeSize = new pc.Vec2( i783[23], i783[24] )
  i782.pivot = new pc.Vec2( i783[25], i783[26] )
  i782.textureRectOffset = new pc.Vec2( i783[27], i783[28] )
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i785 = data
  i784.name = i785[0]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i787 = data
  i786.name = i787[0]
  i786.wrapMode = i787[1]
  i786.isLooping = !!i787[2]
  i786.length = i787[3]
  var i789 = i787[4]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i789[i + 0]) );
  }
  i786.curves = i788
  var i791 = i787[5]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i791[i + 0]) );
  }
  i786.events = i790
  i786.halfPrecision = !!i787[6]
  i786._frameRate = i787[7]
  i786.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i787[8], i786.localBounds)
  i786.hasMuscleCurves = !!i787[9]
  var i793 = i787[10]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( i793[i + 0] );
  }
  i786.clipMuscleConstant = i792
  i786.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i787[11], i786.clipBindingConstant)
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i797 = data
  i796.path = i797[0]
  i796.hash = i797[1]
  i796.componentType = i797[2]
  i796.property = i797[3]
  i796.keys = i797[4]
  var i799 = i797[5]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i799[i + 0]) );
  }
  i796.objectReferenceKeys = i798
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i803 = data
  i802.time = i803[0]
  request.r(i803[1], i803[2], 0, i802, 'value')
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i807 = data
  i806.functionName = i807[0]
  i806.floatParameter = i807[1]
  i806.intParameter = i807[2]
  i806.stringParameter = i807[3]
  request.r(i807[4], i807[5], 0, i806, 'objectReferenceParameter')
  i806.time = i807[6]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i809 = data
  i808.center = new pc.Vec3( i809[0], i809[1], i809[2] )
  i808.extends = new pc.Vec3( i809[3], i809[4], i809[5] )
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i813 = data
  var i815 = i813[0]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( i815[i + 0] );
  }
  i812.genericBindings = i814
  var i817 = i813[1]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i812.pptrCurveMapping = i816
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i819 = data
  i818.name = i819[0]
  i818.ascent = i819[1]
  i818.originalLineHeight = i819[2]
  i818.fontSize = i819[3]
  var i821 = i819[4]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i821[i + 0]) );
  }
  i818.characterInfo = i820
  request.r(i819[5], i819[6], 0, i818, 'texture')
  i818.originalFontSize = i819[7]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i825 = data
  i824.index = i825[0]
  i824.advance = i825[1]
  i824.bearing = i825[2]
  i824.glyphWidth = i825[3]
  i824.glyphHeight = i825[4]
  i824.minX = i825[5]
  i824.maxX = i825[6]
  i824.minY = i825[7]
  i824.maxY = i825[8]
  i824.uvBottomLeftX = i825[9]
  i824.uvBottomLeftY = i825[10]
  i824.uvBottomRightX = i825[11]
  i824.uvBottomRightY = i825[12]
  i824.uvTopLeftX = i825[13]
  i824.uvTopLeftY = i825[14]
  i824.uvTopRightX = i825[15]
  i824.uvTopRightY = i825[16]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i827 = data
  i826.name = i827[0]
  var i829 = i827[1]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i829[i + 0]) );
  }
  i826.layers = i828
  var i831 = i827[2]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i831[i + 0]) );
  }
  i826.parameters = i830
  i826.animationClips = i827[3]
  i826.avatarUnsupported = i827[4]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i835 = data
  i834.name = i835[0]
  i834.defaultWeight = i835[1]
  i834.blendingMode = i835[2]
  i834.avatarMask = i835[3]
  i834.syncedLayerIndex = i835[4]
  i834.syncedLayerAffectsTiming = !!i835[5]
  i834.syncedLayers = i835[6]
  i834.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i835[7], i834.stateMachine)
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i837 = data
  i836.id = i837[0]
  i836.name = i837[1]
  i836.path = i837[2]
  var i839 = i837[3]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i839[i + 0]) );
  }
  i836.states = i838
  var i841 = i837[4]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i841[i + 0]) );
  }
  i836.machines = i840
  var i843 = i837[5]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i843[i + 0]) );
  }
  i836.entryStateTransitions = i842
  var i845 = i837[6]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i845[i + 0]) );
  }
  i836.exitStateTransitions = i844
  var i847 = i837[7]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i847[i + 0]) );
  }
  i836.anyStateTransitions = i846
  i836.defaultStateId = i837[8]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i851 = data
  i850.id = i851[0]
  i850.name = i851[1]
  i850.cycleOffset = i851[2]
  i850.cycleOffsetParameter = i851[3]
  i850.cycleOffsetParameterActive = !!i851[4]
  i850.mirror = !!i851[5]
  i850.mirrorParameter = i851[6]
  i850.mirrorParameterActive = !!i851[7]
  i850.motionId = i851[8]
  i850.nameHash = i851[9]
  i850.fullPathHash = i851[10]
  i850.speed = i851[11]
  i850.speedParameter = i851[12]
  i850.speedParameterActive = !!i851[13]
  i850.tag = i851[14]
  i850.tagHash = i851[15]
  i850.writeDefaultValues = !!i851[16]
  var i853 = i851[17]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i850.behaviours = i852
  var i855 = i851[18]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i855[i + 0]) );
  }
  i850.transitions = i854
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i861 = data
  i860.fullPath = i861[0]
  i860.canTransitionToSelf = !!i861[1]
  i860.duration = i861[2]
  i860.exitTime = i861[3]
  i860.hasExitTime = !!i861[4]
  i860.hasFixedDuration = !!i861[5]
  i860.interruptionSource = i861[6]
  i860.offset = i861[7]
  i860.orderedInterruption = !!i861[8]
  i860.destinationStateId = i861[9]
  i860.isExit = !!i861[10]
  i860.mute = !!i861[11]
  i860.solo = !!i861[12]
  var i863 = i861[13]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i863[i + 0]) );
  }
  i860.conditions = i862
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i869 = data
  i868.destinationStateId = i869[0]
  i868.isExit = !!i869[1]
  i868.mute = !!i869[2]
  i868.solo = !!i869[3]
  var i871 = i869[4]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i871[i + 0]) );
  }
  i868.conditions = i870
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i875 = data
  i874.mode = i875[0]
  i874.parameter = i875[1]
  i874.threshold = i875[2]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i879 = data
  i878.defaultBool = !!i879[0]
  i878.defaultFloat = i879[1]
  i878.defaultInt = i879[2]
  i878.name = i879[3]
  i878.nameHash = i879[4]
  i878.type = i879[5]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i881 = data
  i880.name = i881[0]
  i880.bytes64 = i881[1]
  i880.data = i881[2]
  return i880
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i882 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i883 = data
  i882.hashCode = i883[0]
  request.r(i883[1], i883[2], 0, i882, 'material')
  i882.materialHashCode = i883[3]
  request.r(i883[4], i883[5], 0, i882, 'atlas')
  i882.normalStyle = i883[6]
  i882.normalSpacingOffset = i883[7]
  i882.boldStyle = i883[8]
  i882.boldSpacing = i883[9]
  i882.italicStyle = i883[10]
  i882.tabSize = i883[11]
  i882.m_Version = i883[12]
  i882.m_SourceFontFileGUID = i883[13]
  request.r(i883[14], i883[15], 0, i882, 'm_SourceFontFile_EditorRef')
  request.r(i883[16], i883[17], 0, i882, 'm_SourceFontFile')
  i882.m_AtlasPopulationMode = i883[18]
  i882.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i883[19], i882.m_FaceInfo)
  var i885 = i883[20]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('UnityEngine.TextCore.Glyph', i885[i + 0]));
  }
  i882.m_GlyphTable = i884
  var i887 = i883[21]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(request.d('TMPro.TMP_Character', i887[i + 0]));
  }
  i882.m_CharacterTable = i886
  var i889 = i883[22]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i882.m_AtlasTextures = i888
  i882.m_AtlasTextureIndex = i883[23]
  i882.m_IsMultiAtlasTexturesEnabled = !!i883[24]
  i882.m_ClearDynamicDataOnBuild = !!i883[25]
  var i891 = i883[26]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i891.length; i += 1) {
    i890.add(request.d('UnityEngine.TextCore.GlyphRect', i891[i + 0]));
  }
  i882.m_UsedGlyphRects = i890
  var i893 = i883[27]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('UnityEngine.TextCore.GlyphRect', i893[i + 0]));
  }
  i882.m_FreeGlyphRects = i892
  i882.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i883[28], i882.m_fontInfo)
  i882.m_AtlasWidth = i883[29]
  i882.m_AtlasHeight = i883[30]
  i882.m_AtlasPadding = i883[31]
  i882.m_AtlasRenderMode = i883[32]
  var i895 = i883[33]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('TMPro.TMP_Glyph', i895[i + 0]));
  }
  i882.m_glyphInfoList = i894
  i882.m_KerningTable = request.d('TMPro.KerningTable', i883[34], i882.m_KerningTable)
  i882.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i883[35], i882.m_FontFeatureTable)
  var i897 = i883[36]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 1, i896, '')
  }
  i882.fallbackFontAssets = i896
  var i899 = i883[37]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 1, i898, '')
  }
  i882.m_FallbackFontAssetTable = i898
  i882.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i883[38], i882.m_CreationSettings)
  var i901 = i883[39]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('TMPro.TMP_FontWeightPair', i901[i + 0]) );
  }
  i882.m_FontWeightTable = i900
  var i903 = i883[40]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('TMPro.TMP_FontWeightPair', i903[i + 0]) );
  }
  i882.fontWeights = i902
  return i882
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i905 = data
  i904.m_FaceIndex = i905[0]
  i904.m_FamilyName = i905[1]
  i904.m_StyleName = i905[2]
  i904.m_PointSize = i905[3]
  i904.m_Scale = i905[4]
  i904.m_UnitsPerEM = i905[5]
  i904.m_LineHeight = i905[6]
  i904.m_AscentLine = i905[7]
  i904.m_CapLine = i905[8]
  i904.m_MeanLine = i905[9]
  i904.m_Baseline = i905[10]
  i904.m_DescentLine = i905[11]
  i904.m_SuperscriptOffset = i905[12]
  i904.m_SuperscriptSize = i905[13]
  i904.m_SubscriptOffset = i905[14]
  i904.m_SubscriptSize = i905[15]
  i904.m_UnderlineOffset = i905[16]
  i904.m_UnderlineThickness = i905[17]
  i904.m_StrikethroughOffset = i905[18]
  i904.m_StrikethroughThickness = i905[19]
  i904.m_TabWidth = i905[20]
  return i904
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i909 = data
  i908.m_Index = i909[0]
  i908.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i909[1], i908.m_Metrics)
  i908.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i909[2], i908.m_GlyphRect)
  i908.m_Scale = i909[3]
  i908.m_AtlasIndex = i909[4]
  i908.m_ClassDefinitionType = i909[5]
  return i908
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i911 = data
  i910.m_Width = i911[0]
  i910.m_Height = i911[1]
  i910.m_HorizontalBearingX = i911[2]
  i910.m_HorizontalBearingY = i911[3]
  i910.m_HorizontalAdvance = i911[4]
  return i910
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i913 = data
  i912.m_X = i913[0]
  i912.m_Y = i913[1]
  i912.m_Width = i913[2]
  i912.m_Height = i913[3]
  return i912
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i916 = root || request.c( 'TMPro.TMP_Character' )
  var i917 = data
  i916.m_ElementType = i917[0]
  i916.m_Unicode = i917[1]
  i916.m_GlyphIndex = i917[2]
  i916.m_Scale = i917[3]
  return i916
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i923 = data
  i922.Name = i923[0]
  i922.PointSize = i923[1]
  i922.Scale = i923[2]
  i922.CharacterCount = i923[3]
  i922.LineHeight = i923[4]
  i922.Baseline = i923[5]
  i922.Ascender = i923[6]
  i922.CapHeight = i923[7]
  i922.Descender = i923[8]
  i922.CenterLine = i923[9]
  i922.SuperscriptOffset = i923[10]
  i922.SubscriptOffset = i923[11]
  i922.SubSize = i923[12]
  i922.Underline = i923[13]
  i922.UnderlineThickness = i923[14]
  i922.strikethrough = i923[15]
  i922.strikethroughThickness = i923[16]
  i922.TabWidth = i923[17]
  i922.Padding = i923[18]
  i922.AtlasWidth = i923[19]
  i922.AtlasHeight = i923[20]
  return i922
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.TMP_Glyph' )
  var i927 = data
  i926.id = i927[0]
  i926.x = i927[1]
  i926.y = i927[2]
  i926.width = i927[3]
  i926.height = i927[4]
  i926.xOffset = i927[5]
  i926.yOffset = i927[6]
  i926.xAdvance = i927[7]
  i926.scale = i927[8]
  return i926
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i928 = root || request.c( 'TMPro.KerningTable' )
  var i929 = data
  var i931 = i929[0]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i931.length; i += 1) {
    i930.add(request.d('TMPro.KerningPair', i931[i + 0]));
  }
  i928.kerningPairs = i930
  return i928
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.KerningPair' )
  var i935 = data
  i934.xOffset = i935[0]
  i934.m_FirstGlyph = i935[1]
  i934.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i935[2], i934.m_FirstGlyphAdjustments)
  i934.m_SecondGlyph = i935[3]
  i934.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i935[4], i934.m_SecondGlyphAdjustments)
  i934.m_IgnoreSpacingAdjustments = !!i935[5]
  return i934
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i936 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i937 = data
  var i939 = i937[0]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i939[i + 0]));
  }
  i936.m_GlyphPairAdjustmentRecords = i938
  return i936
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i943 = data
  i942.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i943[0], i942.m_FirstAdjustmentRecord)
  i942.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i943[1], i942.m_SecondAdjustmentRecord)
  i942.m_FeatureLookupFlags = i943[2]
  return i942
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i944 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i945 = data
  i944.m_GlyphIndex = i945[0]
  i944.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i945[1], i944.m_GlyphValueRecord)
  return i944
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i946 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i947 = data
  i946.m_XPlacement = i947[0]
  i946.m_YPlacement = i947[1]
  i946.m_XAdvance = i947[2]
  i946.m_YAdvance = i947[3]
  return i946
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i951 = data
  i950.sourceFontFileName = i951[0]
  i950.sourceFontFileGUID = i951[1]
  i950.pointSizeSamplingMode = i951[2]
  i950.pointSize = i951[3]
  i950.padding = i951[4]
  i950.packingMode = i951[5]
  i950.atlasWidth = i951[6]
  i950.atlasHeight = i951[7]
  i950.characterSetSelectionMode = i951[8]
  i950.characterSequence = i951[9]
  i950.referencedFontAssetGUID = i951[10]
  i950.referencedTextAssetGUID = i951[11]
  i950.fontStyle = i951[12]
  i950.fontStyleModifier = i951[13]
  i950.renderMode = i951[14]
  i950.includeFontFeatures = !!i951[15]
  return i950
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'regularTypeface')
  request.r(i955[2], i955[3], 0, i954, 'italicTypeface')
  return i954
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i956 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i957 = data
  i956.useSafeMode = !!i957[0]
  i956.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i957[1], i956.safeModeOptions)
  i956.timeScale = i957[2]
  i956.unscaledTimeScale = i957[3]
  i956.useSmoothDeltaTime = !!i957[4]
  i956.maxSmoothUnscaledTime = i957[5]
  i956.rewindCallbackMode = i957[6]
  i956.showUnityEditorReport = !!i957[7]
  i956.logBehaviour = i957[8]
  i956.drawGizmos = !!i957[9]
  i956.defaultRecyclable = !!i957[10]
  i956.defaultAutoPlay = i957[11]
  i956.defaultUpdateType = i957[12]
  i956.defaultTimeScaleIndependent = !!i957[13]
  i956.defaultEaseType = i957[14]
  i956.defaultEaseOvershootOrAmplitude = i957[15]
  i956.defaultEasePeriod = i957[16]
  i956.defaultAutoKill = !!i957[17]
  i956.defaultLoopType = i957[18]
  i956.debugMode = !!i957[19]
  i956.debugStoreTargetId = !!i957[20]
  i956.showPreviewPanel = !!i957[21]
  i956.storeSettingsLocation = i957[22]
  i956.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i957[23], i956.modules)
  i956.createASMDEF = !!i957[24]
  i956.showPlayingTweens = !!i957[25]
  i956.showPausedTweens = !!i957[26]
  return i956
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i958 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i959 = data
  i958.logBehaviour = i959[0]
  i958.nestedTweenFailureBehaviour = i959[1]
  return i958
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i960 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i961 = data
  i960.showPanel = !!i961[0]
  i960.audioEnabled = !!i961[1]
  i960.physicsEnabled = !!i961[2]
  i960.physics2DEnabled = !!i961[3]
  i960.spriteEnabled = !!i961[4]
  i960.uiEnabled = !!i961[5]
  i960.textMeshProEnabled = !!i961[6]
  i960.tk2DEnabled = !!i961[7]
  i960.deAudioEnabled = !!i961[8]
  i960.deUnityExtendedEnabled = !!i961[9]
  i960.epoOutlineEnabled = !!i961[10]
  return i960
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.TMP_Settings' )
  var i963 = data
  i962.m_enableWordWrapping = !!i963[0]
  i962.m_enableKerning = !!i963[1]
  i962.m_enableExtraPadding = !!i963[2]
  i962.m_enableTintAllSprites = !!i963[3]
  i962.m_enableParseEscapeCharacters = !!i963[4]
  i962.m_EnableRaycastTarget = !!i963[5]
  i962.m_GetFontFeaturesAtRuntime = !!i963[6]
  i962.m_missingGlyphCharacter = i963[7]
  i962.m_warningsDisabled = !!i963[8]
  request.r(i963[9], i963[10], 0, i962, 'm_defaultFontAsset')
  i962.m_defaultFontAssetPath = i963[11]
  i962.m_defaultFontSize = i963[12]
  i962.m_defaultAutoSizeMinRatio = i963[13]
  i962.m_defaultAutoSizeMaxRatio = i963[14]
  i962.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i963[15], i963[16] )
  i962.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i963[17], i963[18] )
  i962.m_autoSizeTextContainer = !!i963[19]
  i962.m_IsTextObjectScaleStatic = !!i963[20]
  var i965 = i963[21]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 1, i964, '')
  }
  i962.m_fallbackFontAssets = i964
  i962.m_matchMaterialPreset = !!i963[22]
  request.r(i963[23], i963[24], 0, i962, 'm_defaultSpriteAsset')
  i962.m_defaultSpriteAssetPath = i963[25]
  i962.m_enableEmojiSupport = !!i963[26]
  i962.m_MissingCharacterSpriteUnicode = i963[27]
  i962.m_defaultColorGradientPresetsPath = i963[28]
  request.r(i963[29], i963[30], 0, i962, 'm_defaultStyleSheet')
  i962.m_StyleSheetsResourcePath = i963[31]
  request.r(i963[32], i963[33], 0, i962, 'm_leadingCharacters')
  request.r(i963[34], i963[35], 0, i962, 'm_followingCharacters')
  i962.m_UseModernHangulLineBreakingRules = !!i963[36]
  return i962
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i966 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i967 = data
  i966.hashCode = i967[0]
  request.r(i967[1], i967[2], 0, i966, 'material')
  i966.materialHashCode = i967[3]
  request.r(i967[4], i967[5], 0, i966, 'spriteSheet')
  var i969 = i967[6]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i969.length; i += 1) {
    i968.add(request.d('TMPro.TMP_Sprite', i969[i + 0]));
  }
  i966.spriteInfoList = i968
  var i971 = i967[7]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 1, i970, '')
  }
  i966.fallbackSpriteAssets = i970
  i966.m_Version = i967[8]
  i966.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i967[9], i966.m_FaceInfo)
  var i973 = i967[10]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i973.length; i += 1) {
    i972.add(request.d('TMPro.TMP_SpriteCharacter', i973[i + 0]));
  }
  i966.m_SpriteCharacterTable = i972
  var i975 = i967[11]
  var i974 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i975.length; i += 1) {
    i974.add(request.d('TMPro.TMP_SpriteGlyph', i975[i + 0]));
  }
  i966.m_SpriteGlyphTable = i974
  return i966
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_Sprite' )
  var i979 = data
  i978.name = i979[0]
  i978.hashCode = i979[1]
  i978.unicode = i979[2]
  i978.pivot = new pc.Vec2( i979[3], i979[4] )
  request.r(i979[5], i979[6], 0, i978, 'sprite')
  i978.id = i979[7]
  i978.x = i979[8]
  i978.y = i979[9]
  i978.width = i979[10]
  i978.height = i979[11]
  i978.xOffset = i979[12]
  i978.yOffset = i979[13]
  i978.xAdvance = i979[14]
  i978.scale = i979[15]
  return i978
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i985 = data
  i984.m_Name = i985[0]
  i984.m_HashCode = i985[1]
  i984.m_ElementType = i985[2]
  i984.m_Unicode = i985[3]
  i984.m_GlyphIndex = i985[4]
  i984.m_Scale = i985[5]
  return i984
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'sprite')
  i988.m_Index = i989[2]
  i988.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i989[3], i988.m_Metrics)
  i988.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i989[4], i988.m_GlyphRect)
  i988.m_Scale = i989[5]
  i988.m_AtlasIndex = i989[6]
  i988.m_ClassDefinitionType = i989[7]
  return i988
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i990 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i991 = data
  var i993 = i991[0]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(request.d('TMPro.TMP_Style', i993[i + 0]));
  }
  i990.m_StyleList = i992
  return i990
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.TMP_Style' )
  var i997 = data
  i996.m_Name = i997[0]
  i996.m_HashCode = i997[1]
  i996.m_OpeningDefinition = i997[2]
  i996.m_ClosingDefinition = i997[3]
  i996.m_OpeningTagArray = i997[4]
  i996.m_ClosingTagArray = i997[5]
  i996.m_OpeningTagUnicodeArray = i997[6]
  i996.m_ClosingTagUnicodeArray = i997[7]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i999 = data
  var i1001 = i999[0]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1001[i + 0]) );
  }
  i998.files = i1000
  i998.componentToPrefabIds = i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1005 = data
  i1004.path = i1005[0]
  request.r(i1005[1], i1005[2], 0, i1004, 'unityObject')
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1007 = data
  var i1009 = i1007[0]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1009[i + 0]) );
  }
  i1006.scriptsExecutionOrder = i1008
  var i1011 = i1007[1]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1011[i + 0]) );
  }
  i1006.sortingLayers = i1010
  var i1013 = i1007[2]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1013[i + 0]) );
  }
  i1006.cullingLayers = i1012
  i1006.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1007[3], i1006.timeSettings)
  i1006.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1007[4], i1006.physicsSettings)
  i1006.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1007[5], i1006.physics2DSettings)
  i1006.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1007[6], i1006.qualitySettings)
  i1006.enableRealtimeShadows = !!i1007[7]
  i1006.enableAutoInstancing = !!i1007[8]
  i1006.enableDynamicBatching = !!i1007[9]
  i1006.lightmapEncodingQuality = i1007[10]
  i1006.desiredColorSpace = i1007[11]
  var i1015 = i1007[12]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( i1015[i + 0] );
  }
  i1006.allTags = i1014
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1019 = data
  i1018.name = i1019[0]
  i1018.value = i1019[1]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1023 = data
  i1022.id = i1023[0]
  i1022.name = i1023[1]
  i1022.value = i1023[2]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1027 = data
  i1026.id = i1027[0]
  i1026.name = i1027[1]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1029 = data
  i1028.fixedDeltaTime = i1029[0]
  i1028.maximumDeltaTime = i1029[1]
  i1028.timeScale = i1029[2]
  i1028.maximumParticleTimestep = i1029[3]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1031 = data
  i1030.gravity = new pc.Vec3( i1031[0], i1031[1], i1031[2] )
  i1030.defaultSolverIterations = i1031[3]
  i1030.bounceThreshold = i1031[4]
  i1030.autoSyncTransforms = !!i1031[5]
  i1030.autoSimulation = !!i1031[6]
  var i1033 = i1031[7]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1033[i + 0]) );
  }
  i1030.collisionMatrix = i1032
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1037 = data
  i1036.enabled = !!i1037[0]
  i1036.layerId = i1037[1]
  i1036.otherLayerId = i1037[2]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'material')
  i1038.gravity = new pc.Vec2( i1039[2], i1039[3] )
  i1038.positionIterations = i1039[4]
  i1038.velocityIterations = i1039[5]
  i1038.velocityThreshold = i1039[6]
  i1038.maxLinearCorrection = i1039[7]
  i1038.maxAngularCorrection = i1039[8]
  i1038.maxTranslationSpeed = i1039[9]
  i1038.maxRotationSpeed = i1039[10]
  i1038.baumgarteScale = i1039[11]
  i1038.baumgarteTOIScale = i1039[12]
  i1038.timeToSleep = i1039[13]
  i1038.linearSleepTolerance = i1039[14]
  i1038.angularSleepTolerance = i1039[15]
  i1038.defaultContactOffset = i1039[16]
  i1038.autoSimulation = !!i1039[17]
  i1038.queriesHitTriggers = !!i1039[18]
  i1038.queriesStartInColliders = !!i1039[19]
  i1038.callbacksOnDisable = !!i1039[20]
  i1038.reuseCollisionCallbacks = !!i1039[21]
  i1038.autoSyncTransforms = !!i1039[22]
  var i1041 = i1039[23]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1041[i + 0]) );
  }
  i1038.collisionMatrix = i1040
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1045 = data
  i1044.enabled = !!i1045[0]
  i1044.layerId = i1045[1]
  i1044.otherLayerId = i1045[2]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1047 = data
  var i1049 = i1047[0]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1049[i + 0]) );
  }
  i1046.qualityLevels = i1048
  var i1051 = i1047[1]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( i1051[i + 0] );
  }
  i1046.names = i1050
  i1046.shadows = i1047[2]
  i1046.anisotropicFiltering = i1047[3]
  i1046.antiAliasing = i1047[4]
  i1046.lodBias = i1047[5]
  i1046.shadowCascades = i1047[6]
  i1046.shadowDistance = i1047[7]
  i1046.shadowmaskMode = i1047[8]
  i1046.shadowProjection = i1047[9]
  i1046.shadowResolution = i1047[10]
  i1046.softParticles = !!i1047[11]
  i1046.softVegetation = !!i1047[12]
  i1046.activeColorSpace = i1047[13]
  i1046.desiredColorSpace = i1047[14]
  i1046.masterTextureLimit = i1047[15]
  i1046.maxQueuedFrames = i1047[16]
  i1046.particleRaycastBudget = i1047[17]
  i1046.pixelLightCount = i1047[18]
  i1046.realtimeReflectionProbes = !!i1047[19]
  i1046.shadowCascade2Split = i1047[20]
  i1046.shadowCascade4Split = new pc.Vec3( i1047[21], i1047[22], i1047[23] )
  i1046.streamingMipmapsActive = !!i1047[24]
  i1046.vSyncCount = i1047[25]
  i1046.asyncUploadBufferSize = i1047[26]
  i1046.asyncUploadTimeSlice = i1047[27]
  i1046.billboardsFaceCameraPosition = !!i1047[28]
  i1046.shadowNearPlaneOffset = i1047[29]
  i1046.streamingMipmapsMemoryBudget = i1047[30]
  i1046.maximumLODLevel = i1047[31]
  i1046.streamingMipmapsAddAllCameras = !!i1047[32]
  i1046.streamingMipmapsMaxLevelReduction = i1047[33]
  i1046.streamingMipmapsRenderersPerFrame = i1047[34]
  i1046.resolutionScalingFixedDPIFactor = i1047[35]
  i1046.streamingMipmapsMaxFileIORequests = i1047[36]
  i1046.currentQualityLevel = i1047[37]
  return i1046
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1054 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1055 = data
  i1054.xPlacement = i1055[0]
  i1054.yPlacement = i1055[1]
  i1054.xAdvance = i1055[2]
  i1054.yAdvance = i1055[3]
  return i1054
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[17],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[17],"80":[81],"82":[83],"84":[83],"22":[2],"35":[11],"85":[2],"86":[87],"88":[89],"90":[87],"91":[2],"92":[2],"24":[22],"9":[3,2],"93":[2],"23":[22],"31":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[2],"101":[2],"102":[3,2],"103":[2],"104":[2],"105":[2],"106":[2],"107":[3,2],"108":[2],"109":[38],"110":[38],"39":[38],"111":[38],"112":[17],"113":[17],"114":[115],"116":[17],"117":[2],"118":[81,2],"13":[2,3],"119":[2],"120":[3,2],"121":[81],"122":[3,2],"123":[2],"124":[87]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.Object","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","Fix.ClickCta","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "22.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "FewCups";

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

Deserializers.buildID = "14e59975-9c95-4467-8ef4-6d7caaf2bd40";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

