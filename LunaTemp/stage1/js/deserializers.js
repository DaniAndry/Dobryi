var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3654 = root || request.c( 'UnityEngine.JointSpring' )
  var i3655 = data
  i3654.spring = i3655[0]
  i3654.damper = i3655[1]
  i3654.targetPosition = i3655[2]
  return i3654
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3656 = root || request.c( 'UnityEngine.JointMotor' )
  var i3657 = data
  i3656.m_TargetVelocity = i3657[0]
  i3656.m_Force = i3657[1]
  i3656.m_FreeSpin = i3657[2]
  return i3656
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3658 = root || request.c( 'UnityEngine.JointLimits' )
  var i3659 = data
  i3658.m_Min = i3659[0]
  i3658.m_Max = i3659[1]
  i3658.m_Bounciness = i3659[2]
  i3658.m_BounceMinVelocity = i3659[3]
  i3658.m_ContactDistance = i3659[4]
  i3658.minBounce = i3659[5]
  i3658.maxBounce = i3659[6]
  return i3658
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3660 = root || request.c( 'UnityEngine.JointDrive' )
  var i3661 = data
  i3660.m_PositionSpring = i3661[0]
  i3660.m_PositionDamper = i3661[1]
  i3660.m_MaximumForce = i3661[2]
  i3660.m_UseAcceleration = i3661[3]
  return i3660
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3662 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3663 = data
  i3662.m_Spring = i3663[0]
  i3662.m_Damper = i3663[1]
  return i3662
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3664 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3665 = data
  i3664.m_Limit = i3665[0]
  i3664.m_Bounciness = i3665[1]
  i3664.m_ContactDistance = i3665[2]
  return i3664
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3666 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3667 = data
  i3666.m_ExtremumSlip = i3667[0]
  i3666.m_ExtremumValue = i3667[1]
  i3666.m_AsymptoteSlip = i3667[2]
  i3666.m_AsymptoteValue = i3667[3]
  i3666.m_Stiffness = i3667[4]
  return i3666
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3668 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3669 = data
  i3668.m_LowerAngle = i3669[0]
  i3668.m_UpperAngle = i3669[1]
  return i3668
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3670 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3671 = data
  i3670.m_MotorSpeed = i3671[0]
  i3670.m_MaximumMotorTorque = i3671[1]
  return i3670
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3672 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3673 = data
  i3672.m_DampingRatio = i3673[0]
  i3672.m_Frequency = i3673[1]
  i3672.m_Angle = i3673[2]
  return i3672
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3674 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3675 = data
  i3674.m_LowerTranslation = i3675[0]
  i3674.m_UpperTranslation = i3675[1]
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3677 = data
  i3676.name = i3677[0]
  i3676.width = i3677[1]
  i3676.height = i3677[2]
  i3676.mipmapCount = i3677[3]
  i3676.anisoLevel = i3677[4]
  i3676.filterMode = i3677[5]
  i3676.hdr = !!i3677[6]
  i3676.format = i3677[7]
  i3676.wrapMode = i3677[8]
  i3676.alphaIsTransparency = !!i3677[9]
  i3676.alphaSource = i3677[10]
  i3676.graphicsFormat = i3677[11]
  i3676.sRGBTexture = !!i3677[12]
  i3676.desiredColorSpace = i3677[13]
  i3676.wrapU = i3677[14]
  i3676.wrapV = i3677[15]
  return i3676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3678 = root || new pc.UnityMaterial()
  var i3679 = data
  i3678.name = i3679[0]
  request.r(i3679[1], i3679[2], 0, i3678, 'shader')
  i3678.renderQueue = i3679[3]
  i3678.enableInstancing = !!i3679[4]
  var i3681 = i3679[5]
  var i3680 = []
  for(var i = 0; i < i3681.length; i += 1) {
    i3680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3681[i + 0]) );
  }
  i3678.floatParameters = i3680
  var i3683 = i3679[6]
  var i3682 = []
  for(var i = 0; i < i3683.length; i += 1) {
    i3682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3683[i + 0]) );
  }
  i3678.colorParameters = i3682
  var i3685 = i3679[7]
  var i3684 = []
  for(var i = 0; i < i3685.length; i += 1) {
    i3684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3685[i + 0]) );
  }
  i3678.vectorParameters = i3684
  var i3687 = i3679[8]
  var i3686 = []
  for(var i = 0; i < i3687.length; i += 1) {
    i3686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3687[i + 0]) );
  }
  i3678.textureParameters = i3686
  var i3689 = i3679[9]
  var i3688 = []
  for(var i = 0; i < i3689.length; i += 1) {
    i3688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3689[i + 0]) );
  }
  i3678.materialFlags = i3688
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3693 = data
  i3692.name = i3693[0]
  i3692.value = i3693[1]
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3697 = data
  i3696.name = i3697[0]
  i3696.value = new pc.Color(i3697[1], i3697[2], i3697[3], i3697[4])
  return i3696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3701 = data
  i3700.name = i3701[0]
  i3700.value = new pc.Vec4( i3701[1], i3701[2], i3701[3], i3701[4] )
  return i3700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3705 = data
  i3704.name = i3705[0]
  request.r(i3705[1], i3705[2], 0, i3704, 'value')
  return i3704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3709 = data
  i3708.name = i3709[0]
  i3708.enabled = !!i3709[1]
  return i3708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3711 = data
  i3710.pivot = new pc.Vec2( i3711[0], i3711[1] )
  i3710.anchorMin = new pc.Vec2( i3711[2], i3711[3] )
  i3710.anchorMax = new pc.Vec2( i3711[4], i3711[5] )
  i3710.sizeDelta = new pc.Vec2( i3711[6], i3711[7] )
  i3710.anchoredPosition3D = new pc.Vec3( i3711[8], i3711[9], i3711[10] )
  i3710.rotation = new pc.Quat(i3711[11], i3711[12], i3711[13], i3711[14])
  i3710.scale = new pc.Vec3( i3711[15], i3711[16], i3711[17] )
  return i3710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3713 = data
  i3712.cullTransparentMesh = !!i3713[0]
  return i3712
}

Deserializers["People"] = function (request, data, root) {
  var i3714 = root || request.c( 'People' )
  var i3715 = data
  request.r(i3715[0], i3715[1], 0, i3714, '_readyImage')
  request.r(i3715[2], i3715[3], 0, i3714, '_additiveImage1')
  request.r(i3715[4], i3715[5], 0, i3714, '_additiveImage2')
  request.r(i3715[6], i3715[7], 0, i3714, '_endPoint')
  request.r(i3715[8], i3715[9], 0, i3714, 'Bank')
  request.r(i3715[10], i3715[11], 0, i3714, '_sizeText')
  i3714.CupType = i3715[12]
  i3714.JuiceType = i3715[13]
  i3714.AdditiveType1 = i3715[14]
  i3714.AdditiveType2 = i3715[15]
  request.r(i3715[16], i3715[17], 0, i3714, '_finishSound')
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3717 = data
  request.r(i3717[0], i3717[1], 0, i3716, 'clip')
  request.r(i3717[2], i3717[3], 0, i3716, 'outputAudioMixerGroup')
  i3716.playOnAwake = !!i3717[4]
  i3716.loop = !!i3717[5]
  i3716.time = i3717[6]
  i3716.volume = i3717[7]
  i3716.pitch = i3717[8]
  i3716.enabled = !!i3717[9]
  return i3716
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3718 = root || request.c( 'UnityEngine.UI.Image' )
  var i3719 = data
  request.r(i3719[0], i3719[1], 0, i3718, 'm_Sprite')
  i3718.m_Type = i3719[2]
  i3718.m_PreserveAspect = !!i3719[3]
  i3718.m_FillCenter = !!i3719[4]
  i3718.m_FillMethod = i3719[5]
  i3718.m_FillAmount = i3719[6]
  i3718.m_FillClockwise = !!i3719[7]
  i3718.m_FillOrigin = i3719[8]
  i3718.m_UseSpriteMesh = !!i3719[9]
  i3718.m_PixelsPerUnitMultiplier = i3719[10]
  request.r(i3719[11], i3719[12], 0, i3718, 'm_Material')
  i3718.m_Maskable = !!i3719[13]
  i3718.m_Color = new pc.Color(i3719[14], i3719[15], i3719[16], i3719[17])
  i3718.m_RaycastTarget = !!i3719[18]
  i3718.m_RaycastPadding = new pc.Vec4( i3719[19], i3719[20], i3719[21], i3719[22] )
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3721 = data
  i3720.name = i3721[0]
  i3720.tagId = i3721[1]
  i3720.enabled = !!i3721[2]
  i3720.isStatic = !!i3721[3]
  i3720.layer = i3721[4]
  return i3720
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3722 = root || request.c( 'UnityEngine.UI.Button' )
  var i3723 = data
  i3722.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3723[0], i3722.m_OnClick)
  i3722.m_Navigation = request.d('UnityEngine.UI.Navigation', i3723[1], i3722.m_Navigation)
  i3722.m_Transition = i3723[2]
  i3722.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3723[3], i3722.m_Colors)
  i3722.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3723[4], i3722.m_SpriteState)
  i3722.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3723[5], i3722.m_AnimationTriggers)
  i3722.m_Interactable = !!i3723[6]
  request.r(i3723[7], i3723[8], 0, i3722, 'm_TargetGraphic')
  return i3722
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3724 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3725 = data
  i3724.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3725[0], i3724.m_PersistentCalls)
  return i3724
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3726 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3727 = data
  var i3729 = i3727[0]
  var i3728 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3729.length; i += 1) {
    i3728.add(request.d('UnityEngine.Events.PersistentCall', i3729[i + 0]));
  }
  i3726.m_Calls = i3728
  return i3726
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3732 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3733 = data
  request.r(i3733[0], i3733[1], 0, i3732, 'm_Target')
  i3732.m_TargetAssemblyTypeName = i3733[2]
  i3732.m_MethodName = i3733[3]
  i3732.m_Mode = i3733[4]
  i3732.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3733[5], i3732.m_Arguments)
  i3732.m_CallState = i3733[6]
  return i3732
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3734 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3735 = data
  request.r(i3735[0], i3735[1], 0, i3734, 'm_ObjectArgument')
  i3734.m_ObjectArgumentAssemblyTypeName = i3735[2]
  i3734.m_IntArgument = i3735[3]
  i3734.m_FloatArgument = i3735[4]
  i3734.m_StringArgument = i3735[5]
  i3734.m_BoolArgument = !!i3735[6]
  return i3734
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3736 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3737 = data
  i3736.m_Mode = i3737[0]
  i3736.m_WrapAround = !!i3737[1]
  request.r(i3737[2], i3737[3], 0, i3736, 'm_SelectOnUp')
  request.r(i3737[4], i3737[5], 0, i3736, 'm_SelectOnDown')
  request.r(i3737[6], i3737[7], 0, i3736, 'm_SelectOnLeft')
  request.r(i3737[8], i3737[9], 0, i3736, 'm_SelectOnRight')
  return i3736
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3738 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3739 = data
  i3738.m_NormalColor = new pc.Color(i3739[0], i3739[1], i3739[2], i3739[3])
  i3738.m_HighlightedColor = new pc.Color(i3739[4], i3739[5], i3739[6], i3739[7])
  i3738.m_PressedColor = new pc.Color(i3739[8], i3739[9], i3739[10], i3739[11])
  i3738.m_SelectedColor = new pc.Color(i3739[12], i3739[13], i3739[14], i3739[15])
  i3738.m_DisabledColor = new pc.Color(i3739[16], i3739[17], i3739[18], i3739[19])
  i3738.m_ColorMultiplier = i3739[20]
  i3738.m_FadeDuration = i3739[21]
  return i3738
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3740 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3741 = data
  request.r(i3741[0], i3741[1], 0, i3740, 'm_HighlightedSprite')
  request.r(i3741[2], i3741[3], 0, i3740, 'm_PressedSprite')
  request.r(i3741[4], i3741[5], 0, i3740, 'm_SelectedSprite')
  request.r(i3741[6], i3741[7], 0, i3740, 'm_DisabledSprite')
  return i3740
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3742 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3743 = data
  i3742.m_NormalTrigger = i3743[0]
  i3742.m_HighlightedTrigger = i3743[1]
  i3742.m_PressedTrigger = i3743[2]
  i3742.m_SelectedTrigger = i3743[3]
  i3742.m_DisabledTrigger = i3743[4]
  return i3742
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3744 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3745 = data
  i3744.m_hasFontAssetChanged = !!i3745[0]
  request.r(i3745[1], i3745[2], 0, i3744, 'm_baseMaterial')
  i3744.m_maskOffset = new pc.Vec4( i3745[3], i3745[4], i3745[5], i3745[6] )
  i3744.m_text = i3745[7]
  i3744.m_isRightToLeft = !!i3745[8]
  request.r(i3745[9], i3745[10], 0, i3744, 'm_fontAsset')
  request.r(i3745[11], i3745[12], 0, i3744, 'm_sharedMaterial')
  var i3747 = i3745[13]
  var i3746 = []
  for(var i = 0; i < i3747.length; i += 2) {
  request.r(i3747[i + 0], i3747[i + 1], 2, i3746, '')
  }
  i3744.m_fontSharedMaterials = i3746
  request.r(i3745[14], i3745[15], 0, i3744, 'm_fontMaterial')
  var i3749 = i3745[16]
  var i3748 = []
  for(var i = 0; i < i3749.length; i += 2) {
  request.r(i3749[i + 0], i3749[i + 1], 2, i3748, '')
  }
  i3744.m_fontMaterials = i3748
  i3744.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3745[17], i3745[18], i3745[19], i3745[20])
  i3744.m_fontColor = new pc.Color(i3745[21], i3745[22], i3745[23], i3745[24])
  i3744.m_enableVertexGradient = !!i3745[25]
  i3744.m_colorMode = i3745[26]
  i3744.m_fontColorGradient = request.d('TMPro.VertexGradient', i3745[27], i3744.m_fontColorGradient)
  request.r(i3745[28], i3745[29], 0, i3744, 'm_fontColorGradientPreset')
  request.r(i3745[30], i3745[31], 0, i3744, 'm_spriteAsset')
  i3744.m_tintAllSprites = !!i3745[32]
  request.r(i3745[33], i3745[34], 0, i3744, 'm_StyleSheet')
  i3744.m_TextStyleHashCode = i3745[35]
  i3744.m_overrideHtmlColors = !!i3745[36]
  i3744.m_faceColor = UnityEngine.Color32.ConstructColor(i3745[37], i3745[38], i3745[39], i3745[40])
  i3744.m_fontSize = i3745[41]
  i3744.m_fontSizeBase = i3745[42]
  i3744.m_fontWeight = i3745[43]
  i3744.m_enableAutoSizing = !!i3745[44]
  i3744.m_fontSizeMin = i3745[45]
  i3744.m_fontSizeMax = i3745[46]
  i3744.m_fontStyle = i3745[47]
  i3744.m_HorizontalAlignment = i3745[48]
  i3744.m_VerticalAlignment = i3745[49]
  i3744.m_textAlignment = i3745[50]
  i3744.m_characterSpacing = i3745[51]
  i3744.m_wordSpacing = i3745[52]
  i3744.m_lineSpacing = i3745[53]
  i3744.m_lineSpacingMax = i3745[54]
  i3744.m_paragraphSpacing = i3745[55]
  i3744.m_charWidthMaxAdj = i3745[56]
  i3744.m_enableWordWrapping = !!i3745[57]
  i3744.m_wordWrappingRatios = i3745[58]
  i3744.m_overflowMode = i3745[59]
  request.r(i3745[60], i3745[61], 0, i3744, 'm_linkedTextComponent')
  request.r(i3745[62], i3745[63], 0, i3744, 'parentLinkedComponent')
  i3744.m_enableKerning = !!i3745[64]
  i3744.m_enableExtraPadding = !!i3745[65]
  i3744.checkPaddingRequired = !!i3745[66]
  i3744.m_isRichText = !!i3745[67]
  i3744.m_parseCtrlCharacters = !!i3745[68]
  i3744.m_isOrthographic = !!i3745[69]
  i3744.m_isCullingEnabled = !!i3745[70]
  i3744.m_horizontalMapping = i3745[71]
  i3744.m_verticalMapping = i3745[72]
  i3744.m_uvLineOffset = i3745[73]
  i3744.m_geometrySortingOrder = i3745[74]
  i3744.m_IsTextObjectScaleStatic = !!i3745[75]
  i3744.m_VertexBufferAutoSizeReduction = !!i3745[76]
  i3744.m_useMaxVisibleDescender = !!i3745[77]
  i3744.m_pageToDisplay = i3745[78]
  i3744.m_margin = new pc.Vec4( i3745[79], i3745[80], i3745[81], i3745[82] )
  i3744.m_isUsingLegacyAnimationComponent = !!i3745[83]
  i3744.m_isVolumetricText = !!i3745[84]
  request.r(i3745[85], i3745[86], 0, i3744, 'm_Material')
  i3744.m_Maskable = !!i3745[87]
  i3744.m_Color = new pc.Color(i3745[88], i3745[89], i3745[90], i3745[91])
  i3744.m_RaycastTarget = !!i3745[92]
  i3744.m_RaycastPadding = new pc.Vec4( i3745[93], i3745[94], i3745[95], i3745[96] )
  return i3744
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3752 = root || request.c( 'TMPro.VertexGradient' )
  var i3753 = data
  i3752.topLeft = new pc.Color(i3753[0], i3753[1], i3753[2], i3753[3])
  i3752.topRight = new pc.Color(i3753[4], i3753[5], i3753[6], i3753[7])
  i3752.bottomLeft = new pc.Color(i3753[8], i3753[9], i3753[10], i3753[11])
  i3752.bottomRight = new pc.Color(i3753[12], i3753[13], i3753[14], i3753[15])
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3755 = data
  i3754.name = i3755[0]
  i3754.index = i3755[1]
  i3754.startup = !!i3755[2]
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3757 = data
  i3756.position = new pc.Vec3( i3757[0], i3757[1], i3757[2] )
  i3756.scale = new pc.Vec3( i3757[3], i3757[4], i3757[5] )
  i3756.rotation = new pc.Quat(i3757[6], i3757[7], i3757[8], i3757[9])
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3759 = data
  i3758.enabled = !!i3759[0]
  i3758.aspect = i3759[1]
  i3758.orthographic = !!i3759[2]
  i3758.orthographicSize = i3759[3]
  i3758.backgroundColor = new pc.Color(i3759[4], i3759[5], i3759[6], i3759[7])
  i3758.nearClipPlane = i3759[8]
  i3758.farClipPlane = i3759[9]
  i3758.fieldOfView = i3759[10]
  i3758.depth = i3759[11]
  i3758.clearFlags = i3759[12]
  i3758.cullingMask = i3759[13]
  i3758.rect = i3759[14]
  request.r(i3759[15], i3759[16], 0, i3758, 'targetTexture')
  i3758.usePhysicalProperties = !!i3759[17]
  i3758.focalLength = i3759[18]
  i3758.sensorSize = new pc.Vec2( i3759[19], i3759[20] )
  i3758.lensShift = new pc.Vec2( i3759[21], i3759[22] )
  i3758.gateFit = i3759[23]
  i3758.commandBufferCount = i3759[24]
  i3758.cameraType = i3759[25]
  return i3758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3761 = data
  request.r(i3761[0], i3761[1], 0, i3760, 'animatorController')
  request.r(i3761[2], i3761[3], 0, i3760, 'avatar')
  i3760.updateMode = i3761[4]
  i3760.hasTransformHierarchy = !!i3761[5]
  i3760.applyRootMotion = !!i3761[6]
  var i3763 = i3761[7]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 2) {
  request.r(i3763[i + 0], i3763[i + 1], 2, i3762, '')
  }
  i3760.humanBones = i3762
  i3760.enabled = !!i3761[8]
  return i3760
}

Deserializers["Bank"] = function (request, data, root) {
  var i3766 = root || request.c( 'Bank' )
  var i3767 = data
  request.r(i3767[0], i3767[1], 0, i3766, 'BuyBigCupButton')
  request.r(i3767[2], i3767[3], 0, i3766, 'BigCupButton')
  request.r(i3767[4], i3767[5], 0, i3766, 'MiddleCupButton')
  request.r(i3767[6], i3767[7], 0, i3766, 'MoneyText')
  request.r(i3767[8], i3767[9], 0, i3766, 'Tutorial')
  request.r(i3767[10], i3767[11], 0, i3766, 'BuyAdditiveButton')
  request.r(i3767[12], i3767[13], 0, i3766, 'BuyJuiceButton')
  request.r(i3767[14], i3767[15], 0, i3766, 'JuiceButton1')
  request.r(i3767[16], i3767[17], 0, i3766, 'JuiceButton2')
  request.r(i3767[18], i3767[19], 0, i3766, 'JuiceButton3')
  request.r(i3767[20], i3767[21], 0, i3766, 'Additive1Button')
  request.r(i3767[22], i3767[23], 0, i3766, 'Additive2Button')
  i3766.Money = i3767[24]
  i3766.IsBigCupBuy = !!i3767[25]
  i3766.IsJuiceBuy = !!i3767[26]
  i3766.IsAdditiveBuy = !!i3767[27]
  request.r(i3767[28], i3767[29], 0, i3766, '_buySound')
  return i3766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3769 = data
  i3768.enabled = !!i3769[0]
  i3768.planeDistance = i3769[1]
  i3768.referencePixelsPerUnit = i3769[2]
  i3768.isFallbackOverlay = !!i3769[3]
  i3768.renderMode = i3769[4]
  i3768.renderOrder = i3769[5]
  i3768.sortingLayerName = i3769[6]
  i3768.sortingOrder = i3769[7]
  i3768.scaleFactor = i3769[8]
  request.r(i3769[9], i3769[10], 0, i3768, 'worldCamera')
  i3768.overrideSorting = !!i3769[11]
  i3768.pixelPerfect = !!i3769[12]
  i3768.targetDisplay = i3769[13]
  i3768.overridePixelPerfect = !!i3769[14]
  return i3768
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3770 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3771 = data
  i3770.m_UiScaleMode = i3771[0]
  i3770.m_ReferencePixelsPerUnit = i3771[1]
  i3770.m_ScaleFactor = i3771[2]
  i3770.m_ReferenceResolution = new pc.Vec2( i3771[3], i3771[4] )
  i3770.m_ScreenMatchMode = i3771[5]
  i3770.m_MatchWidthOrHeight = i3771[6]
  i3770.m_PhysicalUnit = i3771[7]
  i3770.m_FallbackScreenDPI = i3771[8]
  i3770.m_DefaultSpriteDPI = i3771[9]
  i3770.m_DynamicPixelsPerUnit = i3771[10]
  i3770.m_PresetInfoIsWorld = !!i3771[11]
  return i3770
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3772 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3773 = data
  i3772.m_IgnoreReversedGraphics = !!i3773[0]
  i3772.m_BlockingObjects = i3773[1]
  i3772.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3773[2] )
  return i3772
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i3774 = root || request.c( 'ImageShiftOnOrientation' )
  var i3775 = data
  var i3777 = i3775[0]
  var i3776 = []
  for(var i = 0; i < i3777.length; i += 1) {
    i3776.push( request.d('ItemSwitcherData', i3777[i + 0]) );
  }
  i3774.Items = i3776
  request.r(i3775[1], i3775[2], 0, i3774, '_backHorizontal')
  request.r(i3775[3], i3775[4], 0, i3774, '_backVertical')
  request.r(i3775[5], i3775[6], 0, i3774, '_tableHorizontal')
  request.r(i3775[7], i3775[8], 0, i3774, '_tableVertical')
  i3774.IsDebug = !!i3775[9]
  i3774.CanCopy = !!i3775[10]
  return i3774
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i3780 = root || request.c( 'ItemSwitcherData' )
  var i3781 = data
  request.r(i3781[0], i3781[1], 0, i3780, 'Target')
  i3780.HorizontalAnchoredPosition = new pc.Vec2( i3781[2], i3781[3] )
  i3780.SizeHorizontal = new pc.Vec2( i3781[4], i3781[5] )
  i3780.VerticalAnchoredPosition = new pc.Vec2( i3781[6], i3781[7] )
  i3780.SizeVertical = new pc.Vec2( i3781[8], i3781[9] )
  i3780.MinHorizontal = new pc.Vec2( i3781[10], i3781[11] )
  i3780.MaxHorizontal = new pc.Vec2( i3781[12], i3781[13] )
  i3780.MinVertical = new pc.Vec2( i3781[14], i3781[15] )
  i3780.MaxVertical = new pc.Vec2( i3781[16], i3781[17] )
  i3780.IsAnchored = !!i3781[18]
  i3780.IsDebug = !!i3781[19]
  i3780.CopyHorizontal = !!i3781[20]
  i3780.CopyVertical = !!i3781[21]
  return i3780
}

Deserializers["Point"] = function (request, data, root) {
  var i3782 = root || request.c( 'Point' )
  var i3783 = data
  return i3782
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i3784 = root || request.c( 'PeopleContainer' )
  var i3785 = data
  var i3787 = i3785[0]
  var i3786 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i3787.length; i += 2) {
  request.r(i3787[i + 0], i3787[i + 1], 1, i3786, '')
  }
  i3784.CurrentPeoples = i3786
  var i3789 = i3785[1]
  var i3788 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i3789.length; i += 2) {
  request.r(i3789[i + 0], i3789[i + 1], 1, i3788, '')
  }
  i3784._peoples = i3788
  request.r(i3785[2], i3785[3], 0, i3784, '_tutorialPeople')
  request.r(i3785[4], i3785[5], 0, i3784, '_spawnPoint')
  request.r(i3785[6], i3785[7], 0, i3784, '_point1')
  request.r(i3785[8], i3785[9], 0, i3784, '_point2')
  request.r(i3785[10], i3785[11], 0, i3784, '_endPoint')
  request.r(i3785[12], i3785[13], 0, i3784, '_juiceConfig')
  request.r(i3785[14], i3785[15], 0, i3784, '_tutorial')
  return i3784
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i3792 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i3793 = data
  i3792.m_HorizontalFit = i3793[0]
  i3792.m_VerticalFit = i3793[1]
  return i3792
}

Deserializers["BackImage"] = function (request, data, root) {
  var i3794 = root || request.c( 'BackImage' )
  var i3795 = data
  return i3794
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i3796 = root || request.c( 'AheadImage' )
  var i3797 = data
  return i3796
}

Deserializers["Order"] = function (request, data, root) {
  var i3798 = root || request.c( 'Order' )
  var i3799 = data
  request.r(i3799[0], i3799[1], 0, i3798, '_juiceAnimator')
  request.r(i3799[2], i3799[3], 0, i3798, '_cupAnimator')
  request.r(i3799[4], i3799[5], 0, i3798, '_canvasAnimator')
  i3798.CupType = i3799[6]
  i3798.JuiceType = i3799[7]
  i3798.AdditiveType1 = i3799[8]
  i3798.AdditiveType2 = i3799[9]
  i3798.IsFree = !!i3799[10]
  i3798.IsSpriteReady = !!i3799[11]
  i3798.IsCupReady = !!i3799[12]
  i3798.IsJuiceReady = !!i3799[13]
  i3798.IsPouring = !!i3799[14]
  request.r(i3799[15], i3799[16], 0, i3798, '_iceButton')
  request.r(i3799[17], i3799[18], 0, i3798, '_grassButton')
  request.r(i3799[19], i3799[20], 0, i3798, '_juiceBallsButton')
  request.r(i3799[21], i3799[22], 0, i3798, '_strawButton')
  request.r(i3799[23], i3799[24], 0, i3798, '_bigCupButton')
  request.r(i3799[25], i3799[26], 0, i3798, '_middleCupButton')
  request.r(i3799[27], i3799[28], 0, i3798, '_smallCupButton')
  request.r(i3799[29], i3799[30], 0, i3798, '_appleButton')
  request.r(i3799[31], i3799[32], 0, i3798, '_orangeButton')
  request.r(i3799[33], i3799[34], 0, i3798, '_multifruitButton')
  request.r(i3799[35], i3799[36], 0, i3798, '_tomatoButton')
  request.r(i3799[37], i3799[38], 0, i3798, '_cherryButton')
  request.r(i3799[39], i3799[40], 0, i3798, '_smallRawJuiceImage')
  request.r(i3799[41], i3799[42], 0, i3798, '_middleRawJuiceImage')
  request.r(i3799[43], i3799[44], 0, i3798, '_bigRawJuiceImage')
  request.r(i3799[45], i3799[46], 0, i3798, '_smallReadyJuiceImage')
  request.r(i3799[47], i3799[48], 0, i3798, '_middleReadyJuiceImage')
  request.r(i3799[49], i3799[50], 0, i3798, '_bigReadyJuiceImage')
  request.r(i3799[51], i3799[52], 0, i3798, '_backImage')
  request.r(i3799[53], i3799[54], 0, i3798, '_aheadImage')
  request.r(i3799[55], i3799[56], 0, i3798, '_config')
  request.r(i3799[57], i3799[58], 0, i3798, '_takeOrderButton')
  request.r(i3799[59], i3799[60], 0, i3798, '_peopleContainer')
  request.r(i3799[61], i3799[62], 0, i3798, '_tutorial')
  request.r(i3799[63], i3799[64], 0, i3798, '_bText')
  request.r(i3799[65], i3799[66], 0, i3798, '_mText')
  request.r(i3799[67], i3799[68], 0, i3798, '_sText')
  request.r(i3799[69], i3799[70], 0, i3798, '_garbageButton')
  request.r(i3799[71], i3799[72], 0, i3798, '_clickSound')
  request.r(i3799[73], i3799[74], 0, i3798, '_juiceSound')
  return i3798
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i3800 = root || request.c( 'Tutorial' )
  var i3801 = data
  i3800.IsTutorial = !!i3801[0]
  request.r(i3801[1], i3801[2], 0, i3800, 'Finger1')
  request.r(i3801[3], i3801[4], 0, i3800, 'Finger2')
  request.r(i3801[5], i3801[6], 0, i3800, 'Finger3')
  request.r(i3801[7], i3801[8], 0, i3800, 'Finger4')
  request.r(i3801[9], i3801[10], 0, i3800, 'Finger5')
  request.r(i3801[11], i3801[12], 0, i3800, 'BuyBigCupFinger')
  request.r(i3801[13], i3801[14], 0, i3800, 'BuyJuiceFinger')
  request.r(i3801[15], i3801[16], 0, i3800, 'SmallCupButton')
  request.r(i3801[17], i3801[18], 0, i3800, 'JuiceButton')
  request.r(i3801[19], i3801[20], 0, i3800, 'StrawButton')
  request.r(i3801[21], i3801[22], 0, i3800, 'AdditiveButton')
  request.r(i3801[23], i3801[24], 0, i3800, 'ReadyButton')
  var i3803 = i3801[25]
  var i3802 = []
  for(var i = 0; i < i3803.length; i += 2) {
  request.r(i3803[i + 0], i3803[i + 1], 2, i3802, '')
  }
  i3800.Buttons = i3802
  request.r(i3801[26], i3801[27], 0, i3800, 'Bank')
  return i3800
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i3806 = root || request.c( 'SoundSwitcher' )
  var i3807 = data
  request.r(i3807[0], i3807[1], 0, i3806, '_onImage')
  request.r(i3807[2], i3807[3], 0, i3806, '_offImage')
  return i3806
}

Deserializers["ClickCta"] = function (request, data, root) {
  var i3808 = root || request.c( 'ClickCta' )
  var i3809 = data
  return i3808
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3810 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3811 = data
  request.r(i3811[0], i3811[1], 0, i3810, 'm_FirstSelected')
  i3810.m_sendNavigationEvents = !!i3811[2]
  i3810.m_DragThreshold = i3811[3]
  return i3810
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3812 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3813 = data
  i3812.m_HorizontalAxis = i3813[0]
  i3812.m_VerticalAxis = i3813[1]
  i3812.m_SubmitButton = i3813[2]
  i3812.m_CancelButton = i3813[3]
  i3812.m_InputActionsPerSecond = i3813[4]
  i3812.m_RepeatDelay = i3813[5]
  i3812.m_ForceModuleActive = !!i3813[6]
  i3812.m_SendPointerHoverToParent = !!i3813[7]
  return i3812
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i3814 = root || request.c( 'JuiceConfig' )
  var i3815 = data
  request.r(i3815[0], i3815[1], 0, i3814, 'EntityBigCup')
  request.r(i3815[2], i3815[3], 0, i3814, 'TomatoBigCup')
  request.r(i3815[4], i3815[5], 0, i3814, 'AppleBigCup')
  request.r(i3815[6], i3815[7], 0, i3814, 'OrangeBigCup')
  request.r(i3815[8], i3815[9], 0, i3814, 'CherryBigCup')
  request.r(i3815[10], i3815[11], 0, i3814, 'MultifruitBigCup')
  request.r(i3815[12], i3815[13], 0, i3814, 'TomatoBigStrawCup')
  request.r(i3815[14], i3815[15], 0, i3814, 'MultifruitBigStrawCup')
  request.r(i3815[16], i3815[17], 0, i3814, 'AppleBigStrawCup')
  request.r(i3815[18], i3815[19], 0, i3814, 'OrangeBigStrawCup')
  request.r(i3815[20], i3815[21], 0, i3814, 'CherryBigStrawCup')
  request.r(i3815[22], i3815[23], 0, i3814, 'MultifruitBigBallsCup')
  request.r(i3815[24], i3815[25], 0, i3814, 'TomatoBigBallsCup')
  request.r(i3815[26], i3815[27], 0, i3814, 'AppleBigBallsCup')
  request.r(i3815[28], i3815[29], 0, i3814, 'OrangeBigBallsCup')
  request.r(i3815[30], i3815[31], 0, i3814, 'CherryBigBallsCup')
  request.r(i3815[32], i3815[33], 0, i3814, 'EntityMiddleCup')
  request.r(i3815[34], i3815[35], 0, i3814, 'TomatoMiddleCup')
  request.r(i3815[36], i3815[37], 0, i3814, 'AppleMiddleCup')
  request.r(i3815[38], i3815[39], 0, i3814, 'OrangeMiddleCup')
  request.r(i3815[40], i3815[41], 0, i3814, 'CherryMiddleCup')
  request.r(i3815[42], i3815[43], 0, i3814, 'MultifruitMiddleCup')
  request.r(i3815[44], i3815[45], 0, i3814, 'TomatoMiddleStrawCup')
  request.r(i3815[46], i3815[47], 0, i3814, 'MultifruitMiddleStrawCup')
  request.r(i3815[48], i3815[49], 0, i3814, 'AppleMiddleStrawCup')
  request.r(i3815[50], i3815[51], 0, i3814, 'OrangeMiddleStrawCup')
  request.r(i3815[52], i3815[53], 0, i3814, 'CherryMiddleStrawCup')
  request.r(i3815[54], i3815[55], 0, i3814, 'MultifruitMiddleBallsCup')
  request.r(i3815[56], i3815[57], 0, i3814, 'TomatoMiddleBallsCup')
  request.r(i3815[58], i3815[59], 0, i3814, 'AppleMiddleBallsCup')
  request.r(i3815[60], i3815[61], 0, i3814, 'OrangeMiddleBallsCup')
  request.r(i3815[62], i3815[63], 0, i3814, 'CherryMiddleBallsCup')
  request.r(i3815[64], i3815[65], 0, i3814, 'EntitySmallCup')
  request.r(i3815[66], i3815[67], 0, i3814, 'TomatoSmallCup')
  request.r(i3815[68], i3815[69], 0, i3814, 'AppleSmallCup')
  request.r(i3815[70], i3815[71], 0, i3814, 'OrangeSmallCup')
  request.r(i3815[72], i3815[73], 0, i3814, 'CherrySmallCup')
  request.r(i3815[74], i3815[75], 0, i3814, 'MultifruitSmallCup')
  request.r(i3815[76], i3815[77], 0, i3814, 'TomatoSmallStrawCup')
  request.r(i3815[78], i3815[79], 0, i3814, 'AppleSmallStrawCup')
  request.r(i3815[80], i3815[81], 0, i3814, 'OrangeSmallStrawCup')
  request.r(i3815[82], i3815[83], 0, i3814, 'CherrySmallStrawCup')
  request.r(i3815[84], i3815[85], 0, i3814, 'MultifruitSmallStrawCup')
  request.r(i3815[86], i3815[87], 0, i3814, 'AppleSmallBallsCup')
  request.r(i3815[88], i3815[89], 0, i3814, 'TomatoSmallBallsCup')
  request.r(i3815[90], i3815[91], 0, i3814, 'OrangeSmallBallsCup')
  request.r(i3815[92], i3815[93], 0, i3814, 'CherrySmallBallsCup')
  request.r(i3815[94], i3815[95], 0, i3814, 'MultifruitSmallBallsCup')
  request.r(i3815[96], i3815[97], 0, i3814, 'JuiceBallAdditive')
  request.r(i3815[98], i3815[99], 0, i3814, 'IceAdditive')
  request.r(i3815[100], i3815[101], 0, i3814, 'GrassAdditive')
  return i3814
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i3816 = root || request.c( 'TouchIdleTimer' )
  var i3817 = data
  return i3816
}

Deserializers["Helper"] = function (request, data, root) {
  var i3818 = root || request.c( 'Helper' )
  var i3819 = data
  request.r(i3819[0], i3819[1], 0, i3818, '_smallCupFinger')
  request.r(i3819[2], i3819[3], 0, i3818, '_middleCupFinger')
  request.r(i3819[4], i3819[5], 0, i3818, '_bigCupFinger')
  request.r(i3819[6], i3819[7], 0, i3818, '_iceFinger')
  request.r(i3819[8], i3819[9], 0, i3818, '_grassFinger')
  request.r(i3819[10], i3819[11], 0, i3818, '_juiceballFinger')
  request.r(i3819[12], i3819[13], 0, i3818, '_appleFinger')
  request.r(i3819[14], i3819[15], 0, i3818, '_cherryFinger')
  request.r(i3819[16], i3819[17], 0, i3818, '_orangeFinger')
  request.r(i3819[18], i3819[19], 0, i3818, '_multifruitFinger')
  request.r(i3819[20], i3819[21], 0, i3818, '_tomatoFinger')
  request.r(i3819[22], i3819[23], 0, i3818, '_strawFinger')
  request.r(i3819[24], i3819[25], 0, i3818, '_readyFinger')
  var i3821 = i3819[26]
  var i3820 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i3821.length; i += 2) {
  request.r(i3821[i + 0], i3821[i + 1], 1, i3820, '')
  }
  i3818._juiseButtons = i3820
  request.r(i3819[27], i3819[28], 0, i3818, '_peoples')
  request.r(i3819[29], i3819[30], 0, i3818, '_tutorial')
  request.r(i3819[31], i3819[32], 0, i3818, '_order')
  request.r(i3819[33], i3819[34], 0, i3818, '_strawButton')
  request.r(i3819[35], i3819[36], 0, i3818, '_bigCupButton')
  request.r(i3819[37], i3819[38], 0, i3818, '_middleCupButton')
  request.r(i3819[39], i3819[40], 0, i3818, '_smallCupButton')
  request.r(i3819[41], i3819[42], 0, i3818, '_readyButton')
  request.r(i3819[43], i3819[44], 0, i3818, '_grassButton')
  request.r(i3819[45], i3819[46], 0, i3818, '_juiceballButton')
  request.r(i3819[47], i3819[48], 0, i3818, '_iceButton')
  request.r(i3819[49], i3819[50], 0, i3818, '_touchIdleTimer')
  request.r(i3819[51], i3819[52], 0, i3818, '_finalScreen')
  return i3818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3825 = data
  i3824.ambientIntensity = i3825[0]
  i3824.reflectionIntensity = i3825[1]
  i3824.ambientMode = i3825[2]
  i3824.ambientLight = new pc.Color(i3825[3], i3825[4], i3825[5], i3825[6])
  i3824.ambientSkyColor = new pc.Color(i3825[7], i3825[8], i3825[9], i3825[10])
  i3824.ambientGroundColor = new pc.Color(i3825[11], i3825[12], i3825[13], i3825[14])
  i3824.ambientEquatorColor = new pc.Color(i3825[15], i3825[16], i3825[17], i3825[18])
  i3824.fogColor = new pc.Color(i3825[19], i3825[20], i3825[21], i3825[22])
  i3824.fogEndDistance = i3825[23]
  i3824.fogStartDistance = i3825[24]
  i3824.fogDensity = i3825[25]
  i3824.fog = !!i3825[26]
  request.r(i3825[27], i3825[28], 0, i3824, 'skybox')
  i3824.fogMode = i3825[29]
  var i3827 = i3825[30]
  var i3826 = []
  for(var i = 0; i < i3827.length; i += 1) {
    i3826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3827[i + 0]) );
  }
  i3824.lightmaps = i3826
  i3824.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3825[31], i3824.lightProbes)
  i3824.lightmapsMode = i3825[32]
  i3824.mixedBakeMode = i3825[33]
  i3824.environmentLightingMode = i3825[34]
  i3824.ambientProbe = new pc.SphericalHarmonicsL2(i3825[35])
  i3824.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3825[36])
  i3824.useReferenceAmbientProbe = !!i3825[37]
  request.r(i3825[38], i3825[39], 0, i3824, 'customReflection')
  request.r(i3825[40], i3825[41], 0, i3824, 'defaultReflection')
  i3824.defaultReflectionMode = i3825[42]
  i3824.defaultReflectionResolution = i3825[43]
  i3824.sunLightObjectId = i3825[44]
  i3824.pixelLightCount = i3825[45]
  i3824.defaultReflectionHDR = !!i3825[46]
  i3824.hasLightDataAsset = !!i3825[47]
  i3824.hasManualGenerate = !!i3825[48]
  return i3824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3831 = data
  request.r(i3831[0], i3831[1], 0, i3830, 'lightmapColor')
  request.r(i3831[2], i3831[3], 0, i3830, 'lightmapDirection')
  return i3830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3832 = root || new UnityEngine.LightProbes()
  var i3833 = data
  return i3832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3841 = data
  var i3843 = i3841[0]
  var i3842 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3843.length; i += 1) {
    i3842.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3843[i + 0]));
  }
  i3840.ShaderCompilationErrors = i3842
  i3840.name = i3841[1]
  i3840.guid = i3841[2]
  var i3845 = i3841[3]
  var i3844 = []
  for(var i = 0; i < i3845.length; i += 1) {
    i3844.push( i3845[i + 0] );
  }
  i3840.shaderDefinedKeywords = i3844
  var i3847 = i3841[4]
  var i3846 = []
  for(var i = 0; i < i3847.length; i += 1) {
    i3846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3847[i + 0]) );
  }
  i3840.passes = i3846
  var i3849 = i3841[5]
  var i3848 = []
  for(var i = 0; i < i3849.length; i += 1) {
    i3848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3849[i + 0]) );
  }
  i3840.usePasses = i3848
  var i3851 = i3841[6]
  var i3850 = []
  for(var i = 0; i < i3851.length; i += 1) {
    i3850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3851[i + 0]) );
  }
  i3840.defaultParameterValues = i3850
  request.r(i3841[7], i3841[8], 0, i3840, 'unityFallbackShader')
  i3840.readDepth = !!i3841[9]
  i3840.isCreatedByShaderGraph = !!i3841[10]
  i3840.compiled = !!i3841[11]
  return i3840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3855 = data
  i3854.shaderName = i3855[0]
  i3854.errorMessage = i3855[1]
  return i3854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3860 = root || new pc.UnityShaderPass()
  var i3861 = data
  i3860.id = i3861[0]
  i3860.subShaderIndex = i3861[1]
  i3860.name = i3861[2]
  i3860.passType = i3861[3]
  i3860.grabPassTextureName = i3861[4]
  i3860.usePass = !!i3861[5]
  i3860.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[6], i3860.zTest)
  i3860.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[7], i3860.zWrite)
  i3860.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[8], i3860.culling)
  i3860.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3861[9], i3860.blending)
  i3860.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3861[10], i3860.alphaBlending)
  i3860.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[11], i3860.colorWriteMask)
  i3860.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[12], i3860.offsetUnits)
  i3860.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[13], i3860.offsetFactor)
  i3860.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[14], i3860.stencilRef)
  i3860.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[15], i3860.stencilReadMask)
  i3860.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3861[16], i3860.stencilWriteMask)
  i3860.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3861[17], i3860.stencilOp)
  i3860.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3861[18], i3860.stencilOpFront)
  i3860.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3861[19], i3860.stencilOpBack)
  var i3863 = i3861[20]
  var i3862 = []
  for(var i = 0; i < i3863.length; i += 1) {
    i3862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3863[i + 0]) );
  }
  i3860.tags = i3862
  var i3865 = i3861[21]
  var i3864 = []
  for(var i = 0; i < i3865.length; i += 1) {
    i3864.push( i3865[i + 0] );
  }
  i3860.passDefinedKeywords = i3864
  var i3867 = i3861[22]
  var i3866 = []
  for(var i = 0; i < i3867.length; i += 1) {
    i3866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3867[i + 0]) );
  }
  i3860.passDefinedKeywordGroups = i3866
  var i3869 = i3861[23]
  var i3868 = []
  for(var i = 0; i < i3869.length; i += 1) {
    i3868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3869[i + 0]) );
  }
  i3860.variants = i3868
  var i3871 = i3861[24]
  var i3870 = []
  for(var i = 0; i < i3871.length; i += 1) {
    i3870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3871[i + 0]) );
  }
  i3860.excludedVariants = i3870
  i3860.hasDepthReader = !!i3861[25]
  return i3860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3873 = data
  i3872.val = i3873[0]
  i3872.name = i3873[1]
  return i3872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3875 = data
  i3874.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3875[0], i3874.src)
  i3874.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3875[1], i3874.dst)
  i3874.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3875[2], i3874.op)
  return i3874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3877 = data
  i3876.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3877[0], i3876.pass)
  i3876.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3877[1], i3876.fail)
  i3876.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3877[2], i3876.zFail)
  i3876.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3877[3], i3876.comp)
  return i3876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3881 = data
  i3880.name = i3881[0]
  i3880.value = i3881[1]
  return i3880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3885 = data
  var i3887 = i3885[0]
  var i3886 = []
  for(var i = 0; i < i3887.length; i += 1) {
    i3886.push( i3887[i + 0] );
  }
  i3884.keywords = i3886
  i3884.hasDiscard = !!i3885[1]
  return i3884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3891 = data
  i3890.passId = i3891[0]
  i3890.subShaderIndex = i3891[1]
  var i3893 = i3891[2]
  var i3892 = []
  for(var i = 0; i < i3893.length; i += 1) {
    i3892.push( i3893[i + 0] );
  }
  i3890.keywords = i3892
  i3890.vertexProgram = i3891[3]
  i3890.fragmentProgram = i3891[4]
  i3890.exportedForWebGl2 = !!i3891[5]
  i3890.readDepth = !!i3891[6]
  return i3890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3897 = data
  request.r(i3897[0], i3897[1], 0, i3896, 'shader')
  i3896.pass = i3897[2]
  return i3896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3901 = data
  i3900.name = i3901[0]
  i3900.type = i3901[1]
  i3900.value = new pc.Vec4( i3901[2], i3901[3], i3901[4], i3901[5] )
  i3900.textureValue = i3901[6]
  i3900.shaderPropertyFlag = i3901[7]
  return i3900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3903 = data
  i3902.name = i3903[0]
  request.r(i3903[1], i3903[2], 0, i3902, 'texture')
  i3902.aabb = i3903[3]
  i3902.vertices = i3903[4]
  i3902.triangles = i3903[5]
  i3902.textureRect = UnityEngine.Rect.MinMaxRect(i3903[6], i3903[7], i3903[8], i3903[9])
  i3902.packedRect = UnityEngine.Rect.MinMaxRect(i3903[10], i3903[11], i3903[12], i3903[13])
  i3902.border = new pc.Vec4( i3903[14], i3903[15], i3903[16], i3903[17] )
  i3902.transparency = i3903[18]
  i3902.bounds = i3903[19]
  i3902.pixelsPerUnit = i3903[20]
  i3902.textureWidth = i3903[21]
  i3902.textureHeight = i3903[22]
  i3902.nativeSize = new pc.Vec2( i3903[23], i3903[24] )
  i3902.pivot = new pc.Vec2( i3903[25], i3903[26] )
  i3902.textureRectOffset = new pc.Vec2( i3903[27], i3903[28] )
  return i3902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3905 = data
  i3904.name = i3905[0]
  return i3904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3907 = data
  i3906.name = i3907[0]
  i3906.wrapMode = i3907[1]
  i3906.isLooping = !!i3907[2]
  i3906.length = i3907[3]
  var i3909 = i3907[4]
  var i3908 = []
  for(var i = 0; i < i3909.length; i += 1) {
    i3908.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3909[i + 0]) );
  }
  i3906.curves = i3908
  var i3911 = i3907[5]
  var i3910 = []
  for(var i = 0; i < i3911.length; i += 1) {
    i3910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3911[i + 0]) );
  }
  i3906.events = i3910
  i3906.halfPrecision = !!i3907[6]
  i3906._frameRate = i3907[7]
  i3906.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3907[8], i3906.localBounds)
  i3906.hasMuscleCurves = !!i3907[9]
  var i3913 = i3907[10]
  var i3912 = []
  for(var i = 0; i < i3913.length; i += 1) {
    i3912.push( i3913[i + 0] );
  }
  i3906.clipMuscleConstant = i3912
  i3906.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3907[11], i3906.clipBindingConstant)
  return i3906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3917 = data
  i3916.path = i3917[0]
  i3916.hash = i3917[1]
  i3916.componentType = i3917[2]
  i3916.property = i3917[3]
  i3916.keys = i3917[4]
  var i3919 = i3917[5]
  var i3918 = []
  for(var i = 0; i < i3919.length; i += 1) {
    i3918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3919[i + 0]) );
  }
  i3916.objectReferenceKeys = i3918
  return i3916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3923 = data
  i3922.time = i3923[0]
  request.r(i3923[1], i3923[2], 0, i3922, 'value')
  return i3922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3927 = data
  i3926.functionName = i3927[0]
  i3926.floatParameter = i3927[1]
  i3926.intParameter = i3927[2]
  i3926.stringParameter = i3927[3]
  request.r(i3927[4], i3927[5], 0, i3926, 'objectReferenceParameter')
  i3926.time = i3927[6]
  return i3926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3929 = data
  i3928.center = new pc.Vec3( i3929[0], i3929[1], i3929[2] )
  i3928.extends = new pc.Vec3( i3929[3], i3929[4], i3929[5] )
  return i3928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3933 = data
  var i3935 = i3933[0]
  var i3934 = []
  for(var i = 0; i < i3935.length; i += 1) {
    i3934.push( i3935[i + 0] );
  }
  i3932.genericBindings = i3934
  var i3937 = i3933[1]
  var i3936 = []
  for(var i = 0; i < i3937.length; i += 1) {
    i3936.push( i3937[i + 0] );
  }
  i3932.pptrCurveMapping = i3936
  return i3932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3939 = data
  i3938.name = i3939[0]
  i3938.ascent = i3939[1]
  i3938.originalLineHeight = i3939[2]
  i3938.fontSize = i3939[3]
  var i3941 = i3939[4]
  var i3940 = []
  for(var i = 0; i < i3941.length; i += 1) {
    i3940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3941[i + 0]) );
  }
  i3938.characterInfo = i3940
  request.r(i3939[5], i3939[6], 0, i3938, 'texture')
  i3938.originalFontSize = i3939[7]
  return i3938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3945 = data
  i3944.index = i3945[0]
  i3944.advance = i3945[1]
  i3944.bearing = i3945[2]
  i3944.glyphWidth = i3945[3]
  i3944.glyphHeight = i3945[4]
  i3944.minX = i3945[5]
  i3944.maxX = i3945[6]
  i3944.minY = i3945[7]
  i3944.maxY = i3945[8]
  i3944.uvBottomLeftX = i3945[9]
  i3944.uvBottomLeftY = i3945[10]
  i3944.uvBottomRightX = i3945[11]
  i3944.uvBottomRightY = i3945[12]
  i3944.uvTopLeftX = i3945[13]
  i3944.uvTopLeftY = i3945[14]
  i3944.uvTopRightX = i3945[15]
  i3944.uvTopRightY = i3945[16]
  return i3944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3947 = data
  i3946.name = i3947[0]
  var i3949 = i3947[1]
  var i3948 = []
  for(var i = 0; i < i3949.length; i += 1) {
    i3948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3949[i + 0]) );
  }
  i3946.layers = i3948
  var i3951 = i3947[2]
  var i3950 = []
  for(var i = 0; i < i3951.length; i += 1) {
    i3950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3951[i + 0]) );
  }
  i3946.parameters = i3950
  i3946.animationClips = i3947[3]
  i3946.avatarUnsupported = i3947[4]
  return i3946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3955 = data
  i3954.name = i3955[0]
  i3954.defaultWeight = i3955[1]
  i3954.blendingMode = i3955[2]
  i3954.avatarMask = i3955[3]
  i3954.syncedLayerIndex = i3955[4]
  i3954.syncedLayerAffectsTiming = !!i3955[5]
  i3954.syncedLayers = i3955[6]
  i3954.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3955[7], i3954.stateMachine)
  return i3954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3957 = data
  i3956.id = i3957[0]
  i3956.name = i3957[1]
  i3956.path = i3957[2]
  var i3959 = i3957[3]
  var i3958 = []
  for(var i = 0; i < i3959.length; i += 1) {
    i3958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3959[i + 0]) );
  }
  i3956.states = i3958
  var i3961 = i3957[4]
  var i3960 = []
  for(var i = 0; i < i3961.length; i += 1) {
    i3960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3961[i + 0]) );
  }
  i3956.machines = i3960
  var i3963 = i3957[5]
  var i3962 = []
  for(var i = 0; i < i3963.length; i += 1) {
    i3962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3963[i + 0]) );
  }
  i3956.entryStateTransitions = i3962
  var i3965 = i3957[6]
  var i3964 = []
  for(var i = 0; i < i3965.length; i += 1) {
    i3964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3965[i + 0]) );
  }
  i3956.exitStateTransitions = i3964
  var i3967 = i3957[7]
  var i3966 = []
  for(var i = 0; i < i3967.length; i += 1) {
    i3966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3967[i + 0]) );
  }
  i3956.anyStateTransitions = i3966
  i3956.defaultStateId = i3957[8]
  return i3956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3971 = data
  i3970.id = i3971[0]
  i3970.name = i3971[1]
  i3970.cycleOffset = i3971[2]
  i3970.cycleOffsetParameter = i3971[3]
  i3970.cycleOffsetParameterActive = !!i3971[4]
  i3970.mirror = !!i3971[5]
  i3970.mirrorParameter = i3971[6]
  i3970.mirrorParameterActive = !!i3971[7]
  i3970.motionId = i3971[8]
  i3970.nameHash = i3971[9]
  i3970.fullPathHash = i3971[10]
  i3970.speed = i3971[11]
  i3970.speedParameter = i3971[12]
  i3970.speedParameterActive = !!i3971[13]
  i3970.tag = i3971[14]
  i3970.tagHash = i3971[15]
  i3970.writeDefaultValues = !!i3971[16]
  var i3973 = i3971[17]
  var i3972 = []
  for(var i = 0; i < i3973.length; i += 2) {
  request.r(i3973[i + 0], i3973[i + 1], 2, i3972, '')
  }
  i3970.behaviours = i3972
  var i3975 = i3971[18]
  var i3974 = []
  for(var i = 0; i < i3975.length; i += 1) {
    i3974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3975[i + 0]) );
  }
  i3970.transitions = i3974
  return i3970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3981 = data
  i3980.fullPath = i3981[0]
  i3980.canTransitionToSelf = !!i3981[1]
  i3980.duration = i3981[2]
  i3980.exitTime = i3981[3]
  i3980.hasExitTime = !!i3981[4]
  i3980.hasFixedDuration = !!i3981[5]
  i3980.interruptionSource = i3981[6]
  i3980.offset = i3981[7]
  i3980.orderedInterruption = !!i3981[8]
  i3980.destinationStateId = i3981[9]
  i3980.isExit = !!i3981[10]
  i3980.mute = !!i3981[11]
  i3980.solo = !!i3981[12]
  var i3983 = i3981[13]
  var i3982 = []
  for(var i = 0; i < i3983.length; i += 1) {
    i3982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3983[i + 0]) );
  }
  i3980.conditions = i3982
  return i3980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3989 = data
  i3988.destinationStateId = i3989[0]
  i3988.isExit = !!i3989[1]
  i3988.mute = !!i3989[2]
  i3988.solo = !!i3989[3]
  var i3991 = i3989[4]
  var i3990 = []
  for(var i = 0; i < i3991.length; i += 1) {
    i3990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3991[i + 0]) );
  }
  i3988.conditions = i3990
  return i3988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3995 = data
  i3994.mode = i3995[0]
  i3994.parameter = i3995[1]
  i3994.threshold = i3995[2]
  return i3994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3999 = data
  i3998.defaultBool = !!i3999[0]
  i3998.defaultFloat = i3999[1]
  i3998.defaultInt = i3999[2]
  i3998.name = i3999[3]
  i3998.nameHash = i3999[4]
  i3998.type = i3999[5]
  return i3998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4001 = data
  i4000.name = i4001[0]
  i4000.bytes64 = i4001[1]
  i4000.data = i4001[2]
  return i4000
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4002 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4003 = data
  i4002.hashCode = i4003[0]
  request.r(i4003[1], i4003[2], 0, i4002, 'material')
  i4002.materialHashCode = i4003[3]
  request.r(i4003[4], i4003[5], 0, i4002, 'atlas')
  i4002.normalStyle = i4003[6]
  i4002.normalSpacingOffset = i4003[7]
  i4002.boldStyle = i4003[8]
  i4002.boldSpacing = i4003[9]
  i4002.italicStyle = i4003[10]
  i4002.tabSize = i4003[11]
  i4002.m_Version = i4003[12]
  i4002.m_SourceFontFileGUID = i4003[13]
  request.r(i4003[14], i4003[15], 0, i4002, 'm_SourceFontFile_EditorRef')
  request.r(i4003[16], i4003[17], 0, i4002, 'm_SourceFontFile')
  i4002.m_AtlasPopulationMode = i4003[18]
  i4002.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4003[19], i4002.m_FaceInfo)
  var i4005 = i4003[20]
  var i4004 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4005.length; i += 1) {
    i4004.add(request.d('UnityEngine.TextCore.Glyph', i4005[i + 0]));
  }
  i4002.m_GlyphTable = i4004
  var i4007 = i4003[21]
  var i4006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.add(request.d('TMPro.TMP_Character', i4007[i + 0]));
  }
  i4002.m_CharacterTable = i4006
  var i4009 = i4003[22]
  var i4008 = []
  for(var i = 0; i < i4009.length; i += 2) {
  request.r(i4009[i + 0], i4009[i + 1], 2, i4008, '')
  }
  i4002.m_AtlasTextures = i4008
  i4002.m_AtlasTextureIndex = i4003[23]
  i4002.m_IsMultiAtlasTexturesEnabled = !!i4003[24]
  i4002.m_ClearDynamicDataOnBuild = !!i4003[25]
  var i4011 = i4003[26]
  var i4010 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4011.length; i += 1) {
    i4010.add(request.d('UnityEngine.TextCore.GlyphRect', i4011[i + 0]));
  }
  i4002.m_UsedGlyphRects = i4010
  var i4013 = i4003[27]
  var i4012 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4013.length; i += 1) {
    i4012.add(request.d('UnityEngine.TextCore.GlyphRect', i4013[i + 0]));
  }
  i4002.m_FreeGlyphRects = i4012
  i4002.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4003[28], i4002.m_fontInfo)
  i4002.m_AtlasWidth = i4003[29]
  i4002.m_AtlasHeight = i4003[30]
  i4002.m_AtlasPadding = i4003[31]
  i4002.m_AtlasRenderMode = i4003[32]
  var i4015 = i4003[33]
  var i4014 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4015.length; i += 1) {
    i4014.add(request.d('TMPro.TMP_Glyph', i4015[i + 0]));
  }
  i4002.m_glyphInfoList = i4014
  i4002.m_KerningTable = request.d('TMPro.KerningTable', i4003[34], i4002.m_KerningTable)
  i4002.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4003[35], i4002.m_FontFeatureTable)
  var i4017 = i4003[36]
  var i4016 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4017.length; i += 2) {
  request.r(i4017[i + 0], i4017[i + 1], 1, i4016, '')
  }
  i4002.fallbackFontAssets = i4016
  var i4019 = i4003[37]
  var i4018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4019.length; i += 2) {
  request.r(i4019[i + 0], i4019[i + 1], 1, i4018, '')
  }
  i4002.m_FallbackFontAssetTable = i4018
  i4002.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4003[38], i4002.m_CreationSettings)
  var i4021 = i4003[39]
  var i4020 = []
  for(var i = 0; i < i4021.length; i += 1) {
    i4020.push( request.d('TMPro.TMP_FontWeightPair', i4021[i + 0]) );
  }
  i4002.m_FontWeightTable = i4020
  var i4023 = i4003[40]
  var i4022 = []
  for(var i = 0; i < i4023.length; i += 1) {
    i4022.push( request.d('TMPro.TMP_FontWeightPair', i4023[i + 0]) );
  }
  i4002.fontWeights = i4022
  return i4002
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4024 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4025 = data
  i4024.m_FaceIndex = i4025[0]
  i4024.m_FamilyName = i4025[1]
  i4024.m_StyleName = i4025[2]
  i4024.m_PointSize = i4025[3]
  i4024.m_Scale = i4025[4]
  i4024.m_UnitsPerEM = i4025[5]
  i4024.m_LineHeight = i4025[6]
  i4024.m_AscentLine = i4025[7]
  i4024.m_CapLine = i4025[8]
  i4024.m_MeanLine = i4025[9]
  i4024.m_Baseline = i4025[10]
  i4024.m_DescentLine = i4025[11]
  i4024.m_SuperscriptOffset = i4025[12]
  i4024.m_SuperscriptSize = i4025[13]
  i4024.m_SubscriptOffset = i4025[14]
  i4024.m_SubscriptSize = i4025[15]
  i4024.m_UnderlineOffset = i4025[16]
  i4024.m_UnderlineThickness = i4025[17]
  i4024.m_StrikethroughOffset = i4025[18]
  i4024.m_StrikethroughThickness = i4025[19]
  i4024.m_TabWidth = i4025[20]
  return i4024
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4028 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4029 = data
  i4028.m_Index = i4029[0]
  i4028.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4029[1], i4028.m_Metrics)
  i4028.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4029[2], i4028.m_GlyphRect)
  i4028.m_Scale = i4029[3]
  i4028.m_AtlasIndex = i4029[4]
  i4028.m_ClassDefinitionType = i4029[5]
  return i4028
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4030 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4031 = data
  i4030.m_Width = i4031[0]
  i4030.m_Height = i4031[1]
  i4030.m_HorizontalBearingX = i4031[2]
  i4030.m_HorizontalBearingY = i4031[3]
  i4030.m_HorizontalAdvance = i4031[4]
  return i4030
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4032 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4033 = data
  i4032.m_X = i4033[0]
  i4032.m_Y = i4033[1]
  i4032.m_Width = i4033[2]
  i4032.m_Height = i4033[3]
  return i4032
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4036 = root || request.c( 'TMPro.TMP_Character' )
  var i4037 = data
  i4036.m_ElementType = i4037[0]
  i4036.m_Unicode = i4037[1]
  i4036.m_GlyphIndex = i4037[2]
  i4036.m_Scale = i4037[3]
  return i4036
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4042 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4043 = data
  i4042.Name = i4043[0]
  i4042.PointSize = i4043[1]
  i4042.Scale = i4043[2]
  i4042.CharacterCount = i4043[3]
  i4042.LineHeight = i4043[4]
  i4042.Baseline = i4043[5]
  i4042.Ascender = i4043[6]
  i4042.CapHeight = i4043[7]
  i4042.Descender = i4043[8]
  i4042.CenterLine = i4043[9]
  i4042.SuperscriptOffset = i4043[10]
  i4042.SubscriptOffset = i4043[11]
  i4042.SubSize = i4043[12]
  i4042.Underline = i4043[13]
  i4042.UnderlineThickness = i4043[14]
  i4042.strikethrough = i4043[15]
  i4042.strikethroughThickness = i4043[16]
  i4042.TabWidth = i4043[17]
  i4042.Padding = i4043[18]
  i4042.AtlasWidth = i4043[19]
  i4042.AtlasHeight = i4043[20]
  return i4042
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4046 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4047 = data
  i4046.id = i4047[0]
  i4046.x = i4047[1]
  i4046.y = i4047[2]
  i4046.width = i4047[3]
  i4046.height = i4047[4]
  i4046.xOffset = i4047[5]
  i4046.yOffset = i4047[6]
  i4046.xAdvance = i4047[7]
  i4046.scale = i4047[8]
  return i4046
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4048 = root || request.c( 'TMPro.KerningTable' )
  var i4049 = data
  var i4051 = i4049[0]
  var i4050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4051.length; i += 1) {
    i4050.add(request.d('TMPro.KerningPair', i4051[i + 0]));
  }
  i4048.kerningPairs = i4050
  return i4048
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4054 = root || request.c( 'TMPro.KerningPair' )
  var i4055 = data
  i4054.xOffset = i4055[0]
  i4054.m_FirstGlyph = i4055[1]
  i4054.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4055[2], i4054.m_FirstGlyphAdjustments)
  i4054.m_SecondGlyph = i4055[3]
  i4054.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4055[4], i4054.m_SecondGlyphAdjustments)
  i4054.m_IgnoreSpacingAdjustments = !!i4055[5]
  return i4054
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4056 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4057 = data
  var i4059 = i4057[0]
  var i4058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4059.length; i += 1) {
    i4058.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i4059[i + 0]));
  }
  i4056.m_GlyphPairAdjustmentRecords = i4058
  return i4056
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4062 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i4063 = data
  i4062.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4063[0], i4062.m_FirstAdjustmentRecord)
  i4062.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4063[1], i4062.m_SecondAdjustmentRecord)
  i4062.m_FeatureLookupFlags = i4063[2]
  return i4062
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4064 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4065 = data
  i4064.m_GlyphIndex = i4065[0]
  i4064.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4065[1], i4064.m_GlyphValueRecord)
  return i4064
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4066 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4067 = data
  i4066.m_XPlacement = i4067[0]
  i4066.m_YPlacement = i4067[1]
  i4066.m_XAdvance = i4067[2]
  i4066.m_YAdvance = i4067[3]
  return i4066
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4070 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4071 = data
  i4070.sourceFontFileName = i4071[0]
  i4070.sourceFontFileGUID = i4071[1]
  i4070.pointSizeSamplingMode = i4071[2]
  i4070.pointSize = i4071[3]
  i4070.padding = i4071[4]
  i4070.packingMode = i4071[5]
  i4070.atlasWidth = i4071[6]
  i4070.atlasHeight = i4071[7]
  i4070.characterSetSelectionMode = i4071[8]
  i4070.characterSequence = i4071[9]
  i4070.referencedFontAssetGUID = i4071[10]
  i4070.referencedTextAssetGUID = i4071[11]
  i4070.fontStyle = i4071[12]
  i4070.fontStyleModifier = i4071[13]
  i4070.renderMode = i4071[14]
  i4070.includeFontFeatures = !!i4071[15]
  return i4070
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4074 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4075 = data
  request.r(i4075[0], i4075[1], 0, i4074, 'regularTypeface')
  request.r(i4075[2], i4075[3], 0, i4074, 'italicTypeface')
  return i4074
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4076 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4077 = data
  i4076.useSafeMode = !!i4077[0]
  i4076.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4077[1], i4076.safeModeOptions)
  i4076.timeScale = i4077[2]
  i4076.unscaledTimeScale = i4077[3]
  i4076.useSmoothDeltaTime = !!i4077[4]
  i4076.maxSmoothUnscaledTime = i4077[5]
  i4076.rewindCallbackMode = i4077[6]
  i4076.showUnityEditorReport = !!i4077[7]
  i4076.logBehaviour = i4077[8]
  i4076.drawGizmos = !!i4077[9]
  i4076.defaultRecyclable = !!i4077[10]
  i4076.defaultAutoPlay = i4077[11]
  i4076.defaultUpdateType = i4077[12]
  i4076.defaultTimeScaleIndependent = !!i4077[13]
  i4076.defaultEaseType = i4077[14]
  i4076.defaultEaseOvershootOrAmplitude = i4077[15]
  i4076.defaultEasePeriod = i4077[16]
  i4076.defaultAutoKill = !!i4077[17]
  i4076.defaultLoopType = i4077[18]
  i4076.debugMode = !!i4077[19]
  i4076.debugStoreTargetId = !!i4077[20]
  i4076.showPreviewPanel = !!i4077[21]
  i4076.storeSettingsLocation = i4077[22]
  i4076.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4077[23], i4076.modules)
  i4076.createASMDEF = !!i4077[24]
  i4076.showPlayingTweens = !!i4077[25]
  i4076.showPausedTweens = !!i4077[26]
  return i4076
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4078 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4079 = data
  i4078.logBehaviour = i4079[0]
  i4078.nestedTweenFailureBehaviour = i4079[1]
  return i4078
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4080 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4081 = data
  i4080.showPanel = !!i4081[0]
  i4080.audioEnabled = !!i4081[1]
  i4080.physicsEnabled = !!i4081[2]
  i4080.physics2DEnabled = !!i4081[3]
  i4080.spriteEnabled = !!i4081[4]
  i4080.uiEnabled = !!i4081[5]
  i4080.textMeshProEnabled = !!i4081[6]
  i4080.tk2DEnabled = !!i4081[7]
  i4080.deAudioEnabled = !!i4081[8]
  i4080.deUnityExtendedEnabled = !!i4081[9]
  i4080.epoOutlineEnabled = !!i4081[10]
  return i4080
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4082 = root || request.c( 'TMPro.TMP_Settings' )
  var i4083 = data
  i4082.m_enableWordWrapping = !!i4083[0]
  i4082.m_enableKerning = !!i4083[1]
  i4082.m_enableExtraPadding = !!i4083[2]
  i4082.m_enableTintAllSprites = !!i4083[3]
  i4082.m_enableParseEscapeCharacters = !!i4083[4]
  i4082.m_EnableRaycastTarget = !!i4083[5]
  i4082.m_GetFontFeaturesAtRuntime = !!i4083[6]
  i4082.m_missingGlyphCharacter = i4083[7]
  i4082.m_warningsDisabled = !!i4083[8]
  request.r(i4083[9], i4083[10], 0, i4082, 'm_defaultFontAsset')
  i4082.m_defaultFontAssetPath = i4083[11]
  i4082.m_defaultFontSize = i4083[12]
  i4082.m_defaultAutoSizeMinRatio = i4083[13]
  i4082.m_defaultAutoSizeMaxRatio = i4083[14]
  i4082.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4083[15], i4083[16] )
  i4082.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4083[17], i4083[18] )
  i4082.m_autoSizeTextContainer = !!i4083[19]
  i4082.m_IsTextObjectScaleStatic = !!i4083[20]
  var i4085 = i4083[21]
  var i4084 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4085.length; i += 2) {
  request.r(i4085[i + 0], i4085[i + 1], 1, i4084, '')
  }
  i4082.m_fallbackFontAssets = i4084
  i4082.m_matchMaterialPreset = !!i4083[22]
  request.r(i4083[23], i4083[24], 0, i4082, 'm_defaultSpriteAsset')
  i4082.m_defaultSpriteAssetPath = i4083[25]
  i4082.m_enableEmojiSupport = !!i4083[26]
  i4082.m_MissingCharacterSpriteUnicode = i4083[27]
  i4082.m_defaultColorGradientPresetsPath = i4083[28]
  request.r(i4083[29], i4083[30], 0, i4082, 'm_defaultStyleSheet')
  i4082.m_StyleSheetsResourcePath = i4083[31]
  request.r(i4083[32], i4083[33], 0, i4082, 'm_leadingCharacters')
  request.r(i4083[34], i4083[35], 0, i4082, 'm_followingCharacters')
  i4082.m_UseModernHangulLineBreakingRules = !!i4083[36]
  return i4082
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4086 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4087 = data
  i4086.hashCode = i4087[0]
  request.r(i4087[1], i4087[2], 0, i4086, 'material')
  i4086.materialHashCode = i4087[3]
  request.r(i4087[4], i4087[5], 0, i4086, 'spriteSheet')
  var i4089 = i4087[6]
  var i4088 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4089.length; i += 1) {
    i4088.add(request.d('TMPro.TMP_Sprite', i4089[i + 0]));
  }
  i4086.spriteInfoList = i4088
  var i4091 = i4087[7]
  var i4090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4091.length; i += 2) {
  request.r(i4091[i + 0], i4091[i + 1], 1, i4090, '')
  }
  i4086.fallbackSpriteAssets = i4090
  i4086.m_Version = i4087[8]
  i4086.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4087[9], i4086.m_FaceInfo)
  var i4093 = i4087[10]
  var i4092 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4093.length; i += 1) {
    i4092.add(request.d('TMPro.TMP_SpriteCharacter', i4093[i + 0]));
  }
  i4086.m_SpriteCharacterTable = i4092
  var i4095 = i4087[11]
  var i4094 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4095.length; i += 1) {
    i4094.add(request.d('TMPro.TMP_SpriteGlyph', i4095[i + 0]));
  }
  i4086.m_SpriteGlyphTable = i4094
  return i4086
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4098 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4099 = data
  i4098.name = i4099[0]
  i4098.hashCode = i4099[1]
  i4098.unicode = i4099[2]
  i4098.pivot = new pc.Vec2( i4099[3], i4099[4] )
  request.r(i4099[5], i4099[6], 0, i4098, 'sprite')
  i4098.id = i4099[7]
  i4098.x = i4099[8]
  i4098.y = i4099[9]
  i4098.width = i4099[10]
  i4098.height = i4099[11]
  i4098.xOffset = i4099[12]
  i4098.yOffset = i4099[13]
  i4098.xAdvance = i4099[14]
  i4098.scale = i4099[15]
  return i4098
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4104 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4105 = data
  i4104.m_Name = i4105[0]
  i4104.m_HashCode = i4105[1]
  i4104.m_ElementType = i4105[2]
  i4104.m_Unicode = i4105[3]
  i4104.m_GlyphIndex = i4105[4]
  i4104.m_Scale = i4105[5]
  return i4104
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4108 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4109 = data
  request.r(i4109[0], i4109[1], 0, i4108, 'sprite')
  i4108.m_Index = i4109[2]
  i4108.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4109[3], i4108.m_Metrics)
  i4108.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4109[4], i4108.m_GlyphRect)
  i4108.m_Scale = i4109[5]
  i4108.m_AtlasIndex = i4109[6]
  i4108.m_ClassDefinitionType = i4109[7]
  return i4108
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4110 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4111 = data
  var i4113 = i4111[0]
  var i4112 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4113.length; i += 1) {
    i4112.add(request.d('TMPro.TMP_Style', i4113[i + 0]));
  }
  i4110.m_StyleList = i4112
  return i4110
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4116 = root || request.c( 'TMPro.TMP_Style' )
  var i4117 = data
  i4116.m_Name = i4117[0]
  i4116.m_HashCode = i4117[1]
  i4116.m_OpeningDefinition = i4117[2]
  i4116.m_ClosingDefinition = i4117[3]
  i4116.m_OpeningTagArray = i4117[4]
  i4116.m_ClosingTagArray = i4117[5]
  i4116.m_OpeningTagUnicodeArray = i4117[6]
  i4116.m_ClosingTagUnicodeArray = i4117[7]
  return i4116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4119 = data
  var i4121 = i4119[0]
  var i4120 = []
  for(var i = 0; i < i4121.length; i += 1) {
    i4120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4121[i + 0]) );
  }
  i4118.files = i4120
  i4118.componentToPrefabIds = i4119[1]
  return i4118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4125 = data
  i4124.path = i4125[0]
  request.r(i4125[1], i4125[2], 0, i4124, 'unityObject')
  return i4124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4127 = data
  var i4129 = i4127[0]
  var i4128 = []
  for(var i = 0; i < i4129.length; i += 1) {
    i4128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4129[i + 0]) );
  }
  i4126.scriptsExecutionOrder = i4128
  var i4131 = i4127[1]
  var i4130 = []
  for(var i = 0; i < i4131.length; i += 1) {
    i4130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4131[i + 0]) );
  }
  i4126.sortingLayers = i4130
  var i4133 = i4127[2]
  var i4132 = []
  for(var i = 0; i < i4133.length; i += 1) {
    i4132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4133[i + 0]) );
  }
  i4126.cullingLayers = i4132
  i4126.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4127[3], i4126.timeSettings)
  i4126.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4127[4], i4126.physicsSettings)
  i4126.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4127[5], i4126.physics2DSettings)
  i4126.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4127[6], i4126.qualitySettings)
  i4126.enableRealtimeShadows = !!i4127[7]
  i4126.enableAutoInstancing = !!i4127[8]
  i4126.enableDynamicBatching = !!i4127[9]
  i4126.lightmapEncodingQuality = i4127[10]
  i4126.desiredColorSpace = i4127[11]
  var i4135 = i4127[12]
  var i4134 = []
  for(var i = 0; i < i4135.length; i += 1) {
    i4134.push( i4135[i + 0] );
  }
  i4126.allTags = i4134
  return i4126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4139 = data
  i4138.name = i4139[0]
  i4138.value = i4139[1]
  return i4138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4143 = data
  i4142.id = i4143[0]
  i4142.name = i4143[1]
  i4142.value = i4143[2]
  return i4142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4147 = data
  i4146.id = i4147[0]
  i4146.name = i4147[1]
  return i4146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4149 = data
  i4148.fixedDeltaTime = i4149[0]
  i4148.maximumDeltaTime = i4149[1]
  i4148.timeScale = i4149[2]
  i4148.maximumParticleTimestep = i4149[3]
  return i4148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4151 = data
  i4150.gravity = new pc.Vec3( i4151[0], i4151[1], i4151[2] )
  i4150.defaultSolverIterations = i4151[3]
  i4150.bounceThreshold = i4151[4]
  i4150.autoSyncTransforms = !!i4151[5]
  i4150.autoSimulation = !!i4151[6]
  var i4153 = i4151[7]
  var i4152 = []
  for(var i = 0; i < i4153.length; i += 1) {
    i4152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4153[i + 0]) );
  }
  i4150.collisionMatrix = i4152
  return i4150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4157 = data
  i4156.enabled = !!i4157[0]
  i4156.layerId = i4157[1]
  i4156.otherLayerId = i4157[2]
  return i4156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4159 = data
  request.r(i4159[0], i4159[1], 0, i4158, 'material')
  i4158.gravity = new pc.Vec2( i4159[2], i4159[3] )
  i4158.positionIterations = i4159[4]
  i4158.velocityIterations = i4159[5]
  i4158.velocityThreshold = i4159[6]
  i4158.maxLinearCorrection = i4159[7]
  i4158.maxAngularCorrection = i4159[8]
  i4158.maxTranslationSpeed = i4159[9]
  i4158.maxRotationSpeed = i4159[10]
  i4158.baumgarteScale = i4159[11]
  i4158.baumgarteTOIScale = i4159[12]
  i4158.timeToSleep = i4159[13]
  i4158.linearSleepTolerance = i4159[14]
  i4158.angularSleepTolerance = i4159[15]
  i4158.defaultContactOffset = i4159[16]
  i4158.autoSimulation = !!i4159[17]
  i4158.queriesHitTriggers = !!i4159[18]
  i4158.queriesStartInColliders = !!i4159[19]
  i4158.callbacksOnDisable = !!i4159[20]
  i4158.reuseCollisionCallbacks = !!i4159[21]
  i4158.autoSyncTransforms = !!i4159[22]
  var i4161 = i4159[23]
  var i4160 = []
  for(var i = 0; i < i4161.length; i += 1) {
    i4160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4161[i + 0]) );
  }
  i4158.collisionMatrix = i4160
  return i4158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4165 = data
  i4164.enabled = !!i4165[0]
  i4164.layerId = i4165[1]
  i4164.otherLayerId = i4165[2]
  return i4164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4167 = data
  var i4169 = i4167[0]
  var i4168 = []
  for(var i = 0; i < i4169.length; i += 1) {
    i4168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4169[i + 0]) );
  }
  i4166.qualityLevels = i4168
  var i4171 = i4167[1]
  var i4170 = []
  for(var i = 0; i < i4171.length; i += 1) {
    i4170.push( i4171[i + 0] );
  }
  i4166.names = i4170
  i4166.shadows = i4167[2]
  i4166.anisotropicFiltering = i4167[3]
  i4166.antiAliasing = i4167[4]
  i4166.lodBias = i4167[5]
  i4166.shadowCascades = i4167[6]
  i4166.shadowDistance = i4167[7]
  i4166.shadowmaskMode = i4167[8]
  i4166.shadowProjection = i4167[9]
  i4166.shadowResolution = i4167[10]
  i4166.softParticles = !!i4167[11]
  i4166.softVegetation = !!i4167[12]
  i4166.activeColorSpace = i4167[13]
  i4166.desiredColorSpace = i4167[14]
  i4166.masterTextureLimit = i4167[15]
  i4166.maxQueuedFrames = i4167[16]
  i4166.particleRaycastBudget = i4167[17]
  i4166.pixelLightCount = i4167[18]
  i4166.realtimeReflectionProbes = !!i4167[19]
  i4166.shadowCascade2Split = i4167[20]
  i4166.shadowCascade4Split = new pc.Vec3( i4167[21], i4167[22], i4167[23] )
  i4166.streamingMipmapsActive = !!i4167[24]
  i4166.vSyncCount = i4167[25]
  i4166.asyncUploadBufferSize = i4167[26]
  i4166.asyncUploadTimeSlice = i4167[27]
  i4166.billboardsFaceCameraPosition = !!i4167[28]
  i4166.shadowNearPlaneOffset = i4167[29]
  i4166.streamingMipmapsMemoryBudget = i4167[30]
  i4166.maximumLODLevel = i4167[31]
  i4166.streamingMipmapsAddAllCameras = !!i4167[32]
  i4166.streamingMipmapsMaxLevelReduction = i4167[33]
  i4166.streamingMipmapsRenderersPerFrame = i4167[34]
  i4166.resolutionScalingFixedDPIFactor = i4167[35]
  i4166.streamingMipmapsMaxFileIORequests = i4167[36]
  i4166.currentQualityLevel = i4167[37]
  return i4166
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4174 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4175 = data
  i4174.xPlacement = i4175[0]
  i4174.yPlacement = i4175[1]
  i4174.xAdvance = i4175[2]
  i4174.yAdvance = i4175[3]
  return i4174
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[17],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[17],"80":[81],"82":[83],"84":[83],"22":[2],"35":[11],"85":[2],"86":[87],"88":[89],"90":[87],"91":[2],"92":[2],"24":[22],"6":[3,2],"93":[2],"23":[22],"31":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[2],"101":[2],"102":[3,2],"103":[2],"104":[2],"105":[2],"106":[2],"107":[3,2],"108":[2],"109":[37],"110":[37],"38":[37],"111":[37],"112":[17],"113":[17],"114":[115],"116":[17],"117":[2],"118":[81,2],"13":[2,3],"119":[2],"120":[3,2],"121":[81],"122":[3,2],"123":[2],"124":[87]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.Object","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","ClickCta","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","Helper","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "13.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "DefaultVersion54525";

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

Deserializers.buildID = "e9ed15cf-3cfb-4865-a2ea-5960c2bf46f0";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

