var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4722 = root || request.c( 'UnityEngine.JointSpring' )
  var i4723 = data
  i4722.spring = i4723[0]
  i4722.damper = i4723[1]
  i4722.targetPosition = i4723[2]
  return i4722
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4724 = root || request.c( 'UnityEngine.JointMotor' )
  var i4725 = data
  i4724.m_TargetVelocity = i4725[0]
  i4724.m_Force = i4725[1]
  i4724.m_FreeSpin = i4725[2]
  return i4724
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4726 = root || request.c( 'UnityEngine.JointLimits' )
  var i4727 = data
  i4726.m_Min = i4727[0]
  i4726.m_Max = i4727[1]
  i4726.m_Bounciness = i4727[2]
  i4726.m_BounceMinVelocity = i4727[3]
  i4726.m_ContactDistance = i4727[4]
  i4726.minBounce = i4727[5]
  i4726.maxBounce = i4727[6]
  return i4726
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4728 = root || request.c( 'UnityEngine.JointDrive' )
  var i4729 = data
  i4728.m_PositionSpring = i4729[0]
  i4728.m_PositionDamper = i4729[1]
  i4728.m_MaximumForce = i4729[2]
  i4728.m_UseAcceleration = i4729[3]
  return i4728
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4730 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4731 = data
  i4730.m_Spring = i4731[0]
  i4730.m_Damper = i4731[1]
  return i4730
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4732 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4733 = data
  i4732.m_Limit = i4733[0]
  i4732.m_Bounciness = i4733[1]
  i4732.m_ContactDistance = i4733[2]
  return i4732
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4734 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4735 = data
  i4734.m_ExtremumSlip = i4735[0]
  i4734.m_ExtremumValue = i4735[1]
  i4734.m_AsymptoteSlip = i4735[2]
  i4734.m_AsymptoteValue = i4735[3]
  i4734.m_Stiffness = i4735[4]
  return i4734
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4736 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4737 = data
  i4736.m_LowerAngle = i4737[0]
  i4736.m_UpperAngle = i4737[1]
  return i4736
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4738 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4739 = data
  i4738.m_MotorSpeed = i4739[0]
  i4738.m_MaximumMotorTorque = i4739[1]
  return i4738
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4740 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4741 = data
  i4740.m_DampingRatio = i4741[0]
  i4740.m_Frequency = i4741[1]
  i4740.m_Angle = i4741[2]
  return i4740
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4742 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4743 = data
  i4742.m_LowerTranslation = i4743[0]
  i4742.m_UpperTranslation = i4743[1]
  return i4742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4745 = data
  i4744.name = i4745[0]
  i4744.width = i4745[1]
  i4744.height = i4745[2]
  i4744.mipmapCount = i4745[3]
  i4744.anisoLevel = i4745[4]
  i4744.filterMode = i4745[5]
  i4744.hdr = !!i4745[6]
  i4744.format = i4745[7]
  i4744.wrapMode = i4745[8]
  i4744.alphaIsTransparency = !!i4745[9]
  i4744.alphaSource = i4745[10]
  i4744.graphicsFormat = i4745[11]
  i4744.sRGBTexture = !!i4745[12]
  i4744.desiredColorSpace = i4745[13]
  i4744.wrapU = i4745[14]
  i4744.wrapV = i4745[15]
  return i4744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4746 = root || new pc.UnityMaterial()
  var i4747 = data
  i4746.name = i4747[0]
  request.r(i4747[1], i4747[2], 0, i4746, 'shader')
  i4746.renderQueue = i4747[3]
  i4746.enableInstancing = !!i4747[4]
  var i4749 = i4747[5]
  var i4748 = []
  for(var i = 0; i < i4749.length; i += 1) {
    i4748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4749[i + 0]) );
  }
  i4746.floatParameters = i4748
  var i4751 = i4747[6]
  var i4750 = []
  for(var i = 0; i < i4751.length; i += 1) {
    i4750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4751[i + 0]) );
  }
  i4746.colorParameters = i4750
  var i4753 = i4747[7]
  var i4752 = []
  for(var i = 0; i < i4753.length; i += 1) {
    i4752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4753[i + 0]) );
  }
  i4746.vectorParameters = i4752
  var i4755 = i4747[8]
  var i4754 = []
  for(var i = 0; i < i4755.length; i += 1) {
    i4754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4755[i + 0]) );
  }
  i4746.textureParameters = i4754
  var i4757 = i4747[9]
  var i4756 = []
  for(var i = 0; i < i4757.length; i += 1) {
    i4756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4757[i + 0]) );
  }
  i4746.materialFlags = i4756
  return i4746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4761 = data
  i4760.name = i4761[0]
  i4760.value = i4761[1]
  return i4760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4765 = data
  i4764.name = i4765[0]
  i4764.value = new pc.Color(i4765[1], i4765[2], i4765[3], i4765[4])
  return i4764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4769 = data
  i4768.name = i4769[0]
  i4768.value = new pc.Vec4( i4769[1], i4769[2], i4769[3], i4769[4] )
  return i4768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4773 = data
  i4772.name = i4773[0]
  request.r(i4773[1], i4773[2], 0, i4772, 'value')
  return i4772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4777 = data
  i4776.name = i4777[0]
  i4776.enabled = !!i4777[1]
  return i4776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4779 = data
  i4778.pivot = new pc.Vec2( i4779[0], i4779[1] )
  i4778.anchorMin = new pc.Vec2( i4779[2], i4779[3] )
  i4778.anchorMax = new pc.Vec2( i4779[4], i4779[5] )
  i4778.sizeDelta = new pc.Vec2( i4779[6], i4779[7] )
  i4778.anchoredPosition3D = new pc.Vec3( i4779[8], i4779[9], i4779[10] )
  i4778.rotation = new pc.Quat(i4779[11], i4779[12], i4779[13], i4779[14])
  i4778.scale = new pc.Vec3( i4779[15], i4779[16], i4779[17] )
  return i4778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4781 = data
  i4780.cullTransparentMesh = !!i4781[0]
  return i4780
}

Deserializers["People"] = function (request, data, root) {
  var i4782 = root || request.c( 'People' )
  var i4783 = data
  request.r(i4783[0], i4783[1], 0, i4782, '_readyImage')
  request.r(i4783[2], i4783[3], 0, i4782, '_additiveImage1')
  request.r(i4783[4], i4783[5], 0, i4782, '_additiveImage2')
  request.r(i4783[6], i4783[7], 0, i4782, '_endPoint')
  request.r(i4783[8], i4783[9], 0, i4782, 'Bank')
  request.r(i4783[10], i4783[11], 0, i4782, '_sizeText')
  i4782.CupType = i4783[12]
  i4782.JuiceType = i4783[13]
  i4782.AdditiveType1 = i4783[14]
  i4782.AdditiveType2 = i4783[15]
  request.r(i4783[16], i4783[17], 0, i4782, '_finishSound')
  return i4782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4785 = data
  request.r(i4785[0], i4785[1], 0, i4784, 'clip')
  request.r(i4785[2], i4785[3], 0, i4784, 'outputAudioMixerGroup')
  i4784.playOnAwake = !!i4785[4]
  i4784.loop = !!i4785[5]
  i4784.time = i4785[6]
  i4784.volume = i4785[7]
  i4784.pitch = i4785[8]
  i4784.enabled = !!i4785[9]
  return i4784
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4786 = root || request.c( 'UnityEngine.UI.Image' )
  var i4787 = data
  request.r(i4787[0], i4787[1], 0, i4786, 'm_Sprite')
  i4786.m_Type = i4787[2]
  i4786.m_PreserveAspect = !!i4787[3]
  i4786.m_FillCenter = !!i4787[4]
  i4786.m_FillMethod = i4787[5]
  i4786.m_FillAmount = i4787[6]
  i4786.m_FillClockwise = !!i4787[7]
  i4786.m_FillOrigin = i4787[8]
  i4786.m_UseSpriteMesh = !!i4787[9]
  i4786.m_PixelsPerUnitMultiplier = i4787[10]
  request.r(i4787[11], i4787[12], 0, i4786, 'm_Material')
  i4786.m_Maskable = !!i4787[13]
  i4786.m_Color = new pc.Color(i4787[14], i4787[15], i4787[16], i4787[17])
  i4786.m_RaycastTarget = !!i4787[18]
  i4786.m_RaycastPadding = new pc.Vec4( i4787[19], i4787[20], i4787[21], i4787[22] )
  return i4786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4789 = data
  i4788.name = i4789[0]
  i4788.tagId = i4789[1]
  i4788.enabled = !!i4789[2]
  i4788.isStatic = !!i4789[3]
  i4788.layer = i4789[4]
  return i4788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4791 = data
  i4790.name = i4791[0]
  i4790.index = i4791[1]
  i4790.startup = !!i4791[2]
  return i4790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4793 = data
  i4792.position = new pc.Vec3( i4793[0], i4793[1], i4793[2] )
  i4792.scale = new pc.Vec3( i4793[3], i4793[4], i4793[5] )
  i4792.rotation = new pc.Quat(i4793[6], i4793[7], i4793[8], i4793[9])
  return i4792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4795 = data
  i4794.enabled = !!i4795[0]
  i4794.aspect = i4795[1]
  i4794.orthographic = !!i4795[2]
  i4794.orthographicSize = i4795[3]
  i4794.backgroundColor = new pc.Color(i4795[4], i4795[5], i4795[6], i4795[7])
  i4794.nearClipPlane = i4795[8]
  i4794.farClipPlane = i4795[9]
  i4794.fieldOfView = i4795[10]
  i4794.depth = i4795[11]
  i4794.clearFlags = i4795[12]
  i4794.cullingMask = i4795[13]
  i4794.rect = i4795[14]
  request.r(i4795[15], i4795[16], 0, i4794, 'targetTexture')
  i4794.usePhysicalProperties = !!i4795[17]
  i4794.focalLength = i4795[18]
  i4794.sensorSize = new pc.Vec2( i4795[19], i4795[20] )
  i4794.lensShift = new pc.Vec2( i4795[21], i4795[22] )
  i4794.gateFit = i4795[23]
  i4794.commandBufferCount = i4795[24]
  i4794.cameraType = i4795[25]
  return i4794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4797 = data
  request.r(i4797[0], i4797[1], 0, i4796, 'animatorController')
  request.r(i4797[2], i4797[3], 0, i4796, 'avatar')
  i4796.updateMode = i4797[4]
  i4796.hasTransformHierarchy = !!i4797[5]
  i4796.applyRootMotion = !!i4797[6]
  var i4799 = i4797[7]
  var i4798 = []
  for(var i = 0; i < i4799.length; i += 2) {
  request.r(i4799[i + 0], i4799[i + 1], 2, i4798, '')
  }
  i4796.humanBones = i4798
  i4796.enabled = !!i4797[8]
  return i4796
}

Deserializers["Bank"] = function (request, data, root) {
  var i4802 = root || request.c( 'Bank' )
  var i4803 = data
  request.r(i4803[0], i4803[1], 0, i4802, 'BuyBigCupButton')
  request.r(i4803[2], i4803[3], 0, i4802, 'BigCupButton')
  request.r(i4803[4], i4803[5], 0, i4802, 'MiddleCupButton')
  request.r(i4803[6], i4803[7], 0, i4802, 'MoneyText')
  request.r(i4803[8], i4803[9], 0, i4802, 'Tutorial')
  request.r(i4803[10], i4803[11], 0, i4802, 'BuyAdditiveButton')
  request.r(i4803[12], i4803[13], 0, i4802, 'BuyJuiceButton')
  request.r(i4803[14], i4803[15], 0, i4802, 'JuiceButton1')
  request.r(i4803[16], i4803[17], 0, i4802, 'JuiceButton2')
  request.r(i4803[18], i4803[19], 0, i4802, 'JuiceButton3')
  request.r(i4803[20], i4803[21], 0, i4802, 'Additive1Button')
  request.r(i4803[22], i4803[23], 0, i4802, 'Additive2Button')
  i4802.Money = i4803[24]
  i4802.IsBigCupBuy = !!i4803[25]
  i4802.IsJuiceBuy = !!i4803[26]
  i4802.IsAdditiveBuy = !!i4803[27]
  request.r(i4803[28], i4803[29], 0, i4802, '_buySound')
  return i4802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4805 = data
  i4804.enabled = !!i4805[0]
  i4804.planeDistance = i4805[1]
  i4804.referencePixelsPerUnit = i4805[2]
  i4804.isFallbackOverlay = !!i4805[3]
  i4804.renderMode = i4805[4]
  i4804.renderOrder = i4805[5]
  i4804.sortingLayerName = i4805[6]
  i4804.sortingOrder = i4805[7]
  i4804.scaleFactor = i4805[8]
  request.r(i4805[9], i4805[10], 0, i4804, 'worldCamera')
  i4804.overrideSorting = !!i4805[11]
  i4804.pixelPerfect = !!i4805[12]
  i4804.targetDisplay = i4805[13]
  i4804.overridePixelPerfect = !!i4805[14]
  return i4804
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4806 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4807 = data
  i4806.m_UiScaleMode = i4807[0]
  i4806.m_ReferencePixelsPerUnit = i4807[1]
  i4806.m_ScaleFactor = i4807[2]
  i4806.m_ReferenceResolution = new pc.Vec2( i4807[3], i4807[4] )
  i4806.m_ScreenMatchMode = i4807[5]
  i4806.m_MatchWidthOrHeight = i4807[6]
  i4806.m_PhysicalUnit = i4807[7]
  i4806.m_FallbackScreenDPI = i4807[8]
  i4806.m_DefaultSpriteDPI = i4807[9]
  i4806.m_DynamicPixelsPerUnit = i4807[10]
  i4806.m_PresetInfoIsWorld = !!i4807[11]
  return i4806
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4808 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4809 = data
  i4808.m_IgnoreReversedGraphics = !!i4809[0]
  i4808.m_BlockingObjects = i4809[1]
  i4808.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4809[2] )
  return i4808
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i4810 = root || request.c( 'ImageShiftOnOrientation' )
  var i4811 = data
  var i4813 = i4811[0]
  var i4812 = []
  for(var i = 0; i < i4813.length; i += 1) {
    i4812.push( request.d('ItemSwitcherData', i4813[i + 0]) );
  }
  i4810.Items = i4812
  request.r(i4811[1], i4811[2], 0, i4810, '_backHorizontal')
  request.r(i4811[3], i4811[4], 0, i4810, '_backVertical')
  request.r(i4811[5], i4811[6], 0, i4810, '_tableHorizontal')
  request.r(i4811[7], i4811[8], 0, i4810, '_tableVertical')
  i4810.IsDebug = !!i4811[9]
  i4810.CanCopy = !!i4811[10]
  return i4810
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i4816 = root || request.c( 'ItemSwitcherData' )
  var i4817 = data
  request.r(i4817[0], i4817[1], 0, i4816, 'Target')
  i4816.HorizontalAnchoredPosition = new pc.Vec2( i4817[2], i4817[3] )
  i4816.SizeHorizontal = new pc.Vec2( i4817[4], i4817[5] )
  i4816.VerticalAnchoredPosition = new pc.Vec2( i4817[6], i4817[7] )
  i4816.SizeVertical = new pc.Vec2( i4817[8], i4817[9] )
  i4816.MinHorizontal = new pc.Vec2( i4817[10], i4817[11] )
  i4816.MaxHorizontal = new pc.Vec2( i4817[12], i4817[13] )
  i4816.MinVertical = new pc.Vec2( i4817[14], i4817[15] )
  i4816.MaxVertical = new pc.Vec2( i4817[16], i4817[17] )
  i4816.IsAnchored = !!i4817[18]
  i4816.IsDebug = !!i4817[19]
  i4816.CopyHorizontal = !!i4817[20]
  i4816.CopyVertical = !!i4817[21]
  return i4816
}

Deserializers["Point"] = function (request, data, root) {
  var i4818 = root || request.c( 'Point' )
  var i4819 = data
  return i4818
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4820 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4821 = data
  i4820.m_hasFontAssetChanged = !!i4821[0]
  request.r(i4821[1], i4821[2], 0, i4820, 'm_baseMaterial')
  i4820.m_maskOffset = new pc.Vec4( i4821[3], i4821[4], i4821[5], i4821[6] )
  i4820.m_text = i4821[7]
  i4820.m_isRightToLeft = !!i4821[8]
  request.r(i4821[9], i4821[10], 0, i4820, 'm_fontAsset')
  request.r(i4821[11], i4821[12], 0, i4820, 'm_sharedMaterial')
  var i4823 = i4821[13]
  var i4822 = []
  for(var i = 0; i < i4823.length; i += 2) {
  request.r(i4823[i + 0], i4823[i + 1], 2, i4822, '')
  }
  i4820.m_fontSharedMaterials = i4822
  request.r(i4821[14], i4821[15], 0, i4820, 'm_fontMaterial')
  var i4825 = i4821[16]
  var i4824 = []
  for(var i = 0; i < i4825.length; i += 2) {
  request.r(i4825[i + 0], i4825[i + 1], 2, i4824, '')
  }
  i4820.m_fontMaterials = i4824
  i4820.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4821[17], i4821[18], i4821[19], i4821[20])
  i4820.m_fontColor = new pc.Color(i4821[21], i4821[22], i4821[23], i4821[24])
  i4820.m_enableVertexGradient = !!i4821[25]
  i4820.m_colorMode = i4821[26]
  i4820.m_fontColorGradient = request.d('TMPro.VertexGradient', i4821[27], i4820.m_fontColorGradient)
  request.r(i4821[28], i4821[29], 0, i4820, 'm_fontColorGradientPreset')
  request.r(i4821[30], i4821[31], 0, i4820, 'm_spriteAsset')
  i4820.m_tintAllSprites = !!i4821[32]
  request.r(i4821[33], i4821[34], 0, i4820, 'm_StyleSheet')
  i4820.m_TextStyleHashCode = i4821[35]
  i4820.m_overrideHtmlColors = !!i4821[36]
  i4820.m_faceColor = UnityEngine.Color32.ConstructColor(i4821[37], i4821[38], i4821[39], i4821[40])
  i4820.m_fontSize = i4821[41]
  i4820.m_fontSizeBase = i4821[42]
  i4820.m_fontWeight = i4821[43]
  i4820.m_enableAutoSizing = !!i4821[44]
  i4820.m_fontSizeMin = i4821[45]
  i4820.m_fontSizeMax = i4821[46]
  i4820.m_fontStyle = i4821[47]
  i4820.m_HorizontalAlignment = i4821[48]
  i4820.m_VerticalAlignment = i4821[49]
  i4820.m_textAlignment = i4821[50]
  i4820.m_characterSpacing = i4821[51]
  i4820.m_wordSpacing = i4821[52]
  i4820.m_lineSpacing = i4821[53]
  i4820.m_lineSpacingMax = i4821[54]
  i4820.m_paragraphSpacing = i4821[55]
  i4820.m_charWidthMaxAdj = i4821[56]
  i4820.m_enableWordWrapping = !!i4821[57]
  i4820.m_wordWrappingRatios = i4821[58]
  i4820.m_overflowMode = i4821[59]
  request.r(i4821[60], i4821[61], 0, i4820, 'm_linkedTextComponent')
  request.r(i4821[62], i4821[63], 0, i4820, 'parentLinkedComponent')
  i4820.m_enableKerning = !!i4821[64]
  i4820.m_enableExtraPadding = !!i4821[65]
  i4820.checkPaddingRequired = !!i4821[66]
  i4820.m_isRichText = !!i4821[67]
  i4820.m_parseCtrlCharacters = !!i4821[68]
  i4820.m_isOrthographic = !!i4821[69]
  i4820.m_isCullingEnabled = !!i4821[70]
  i4820.m_horizontalMapping = i4821[71]
  i4820.m_verticalMapping = i4821[72]
  i4820.m_uvLineOffset = i4821[73]
  i4820.m_geometrySortingOrder = i4821[74]
  i4820.m_IsTextObjectScaleStatic = !!i4821[75]
  i4820.m_VertexBufferAutoSizeReduction = !!i4821[76]
  i4820.m_useMaxVisibleDescender = !!i4821[77]
  i4820.m_pageToDisplay = i4821[78]
  i4820.m_margin = new pc.Vec4( i4821[79], i4821[80], i4821[81], i4821[82] )
  i4820.m_isUsingLegacyAnimationComponent = !!i4821[83]
  i4820.m_isVolumetricText = !!i4821[84]
  request.r(i4821[85], i4821[86], 0, i4820, 'm_Material')
  i4820.m_Maskable = !!i4821[87]
  i4820.m_Color = new pc.Color(i4821[88], i4821[89], i4821[90], i4821[91])
  i4820.m_RaycastTarget = !!i4821[92]
  i4820.m_RaycastPadding = new pc.Vec4( i4821[93], i4821[94], i4821[95], i4821[96] )
  return i4820
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4828 = root || request.c( 'TMPro.VertexGradient' )
  var i4829 = data
  i4828.topLeft = new pc.Color(i4829[0], i4829[1], i4829[2], i4829[3])
  i4828.topRight = new pc.Color(i4829[4], i4829[5], i4829[6], i4829[7])
  i4828.bottomLeft = new pc.Color(i4829[8], i4829[9], i4829[10], i4829[11])
  i4828.bottomRight = new pc.Color(i4829[12], i4829[13], i4829[14], i4829[15])
  return i4828
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i4830 = root || request.c( 'PeopleContainer' )
  var i4831 = data
  var i4833 = i4831[0]
  var i4832 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i4833.length; i += 2) {
  request.r(i4833[i + 0], i4833[i + 1], 1, i4832, '')
  }
  i4830.CurrentPeoples = i4832
  var i4835 = i4831[1]
  var i4834 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i4835.length; i += 2) {
  request.r(i4835[i + 0], i4835[i + 1], 1, i4834, '')
  }
  i4830._peoples = i4834
  request.r(i4831[2], i4831[3], 0, i4830, '_tutorialPeople')
  request.r(i4831[4], i4831[5], 0, i4830, '_spawnPoint')
  request.r(i4831[6], i4831[7], 0, i4830, '_point1')
  request.r(i4831[8], i4831[9], 0, i4830, '_point2')
  request.r(i4831[10], i4831[11], 0, i4830, '_endPoint')
  request.r(i4831[12], i4831[13], 0, i4830, '_juiceConfig')
  request.r(i4831[14], i4831[15], 0, i4830, '_tutorial')
  return i4830
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i4838 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i4839 = data
  i4838.m_HorizontalFit = i4839[0]
  i4838.m_VerticalFit = i4839[1]
  return i4838
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4840 = root || request.c( 'UnityEngine.UI.Button' )
  var i4841 = data
  i4840.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4841[0], i4840.m_OnClick)
  i4840.m_Navigation = request.d('UnityEngine.UI.Navigation', i4841[1], i4840.m_Navigation)
  i4840.m_Transition = i4841[2]
  i4840.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4841[3], i4840.m_Colors)
  i4840.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4841[4], i4840.m_SpriteState)
  i4840.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4841[5], i4840.m_AnimationTriggers)
  i4840.m_Interactable = !!i4841[6]
  request.r(i4841[7], i4841[8], 0, i4840, 'm_TargetGraphic')
  return i4840
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4842 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4843 = data
  i4842.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4843[0], i4842.m_PersistentCalls)
  return i4842
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4844 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4845 = data
  var i4847 = i4845[0]
  var i4846 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4847.length; i += 1) {
    i4846.add(request.d('UnityEngine.Events.PersistentCall', i4847[i + 0]));
  }
  i4844.m_Calls = i4846
  return i4844
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4850 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4851 = data
  request.r(i4851[0], i4851[1], 0, i4850, 'm_Target')
  i4850.m_TargetAssemblyTypeName = i4851[2]
  i4850.m_MethodName = i4851[3]
  i4850.m_Mode = i4851[4]
  i4850.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4851[5], i4850.m_Arguments)
  i4850.m_CallState = i4851[6]
  return i4850
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4852 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4853 = data
  request.r(i4853[0], i4853[1], 0, i4852, 'm_ObjectArgument')
  i4852.m_ObjectArgumentAssemblyTypeName = i4853[2]
  i4852.m_IntArgument = i4853[3]
  i4852.m_FloatArgument = i4853[4]
  i4852.m_StringArgument = i4853[5]
  i4852.m_BoolArgument = !!i4853[6]
  return i4852
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4854 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4855 = data
  i4854.m_Mode = i4855[0]
  i4854.m_WrapAround = !!i4855[1]
  request.r(i4855[2], i4855[3], 0, i4854, 'm_SelectOnUp')
  request.r(i4855[4], i4855[5], 0, i4854, 'm_SelectOnDown')
  request.r(i4855[6], i4855[7], 0, i4854, 'm_SelectOnLeft')
  request.r(i4855[8], i4855[9], 0, i4854, 'm_SelectOnRight')
  return i4854
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4856 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4857 = data
  i4856.m_NormalColor = new pc.Color(i4857[0], i4857[1], i4857[2], i4857[3])
  i4856.m_HighlightedColor = new pc.Color(i4857[4], i4857[5], i4857[6], i4857[7])
  i4856.m_PressedColor = new pc.Color(i4857[8], i4857[9], i4857[10], i4857[11])
  i4856.m_SelectedColor = new pc.Color(i4857[12], i4857[13], i4857[14], i4857[15])
  i4856.m_DisabledColor = new pc.Color(i4857[16], i4857[17], i4857[18], i4857[19])
  i4856.m_ColorMultiplier = i4857[20]
  i4856.m_FadeDuration = i4857[21]
  return i4856
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4858 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4859 = data
  request.r(i4859[0], i4859[1], 0, i4858, 'm_HighlightedSprite')
  request.r(i4859[2], i4859[3], 0, i4858, 'm_PressedSprite')
  request.r(i4859[4], i4859[5], 0, i4858, 'm_SelectedSprite')
  request.r(i4859[6], i4859[7], 0, i4858, 'm_DisabledSprite')
  return i4858
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4860 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4861 = data
  i4860.m_NormalTrigger = i4861[0]
  i4860.m_HighlightedTrigger = i4861[1]
  i4860.m_PressedTrigger = i4861[2]
  i4860.m_SelectedTrigger = i4861[3]
  i4860.m_DisabledTrigger = i4861[4]
  return i4860
}

Deserializers["BackImage"] = function (request, data, root) {
  var i4862 = root || request.c( 'BackImage' )
  var i4863 = data
  return i4862
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i4864 = root || request.c( 'AheadImage' )
  var i4865 = data
  return i4864
}

Deserializers["Order"] = function (request, data, root) {
  var i4866 = root || request.c( 'Order' )
  var i4867 = data
  request.r(i4867[0], i4867[1], 0, i4866, '_juiceAnimator')
  request.r(i4867[2], i4867[3], 0, i4866, '_cupAnimator')
  request.r(i4867[4], i4867[5], 0, i4866, '_canvasAnimator')
  i4866.CupType = i4867[6]
  i4866.JuiceType = i4867[7]
  i4866.AdditiveType1 = i4867[8]
  i4866.AdditiveType2 = i4867[9]
  i4866.IsFree = !!i4867[10]
  i4866.IsSpriteReady = !!i4867[11]
  i4866.IsCupReady = !!i4867[12]
  i4866.IsJuiceReady = !!i4867[13]
  request.r(i4867[14], i4867[15], 0, i4866, '_iceButton')
  request.r(i4867[16], i4867[17], 0, i4866, '_grassButton')
  request.r(i4867[18], i4867[19], 0, i4866, '_juiceBallsButton')
  request.r(i4867[20], i4867[21], 0, i4866, '_strawButton')
  request.r(i4867[22], i4867[23], 0, i4866, '_bigCupButton')
  request.r(i4867[24], i4867[25], 0, i4866, '_middleCupButton')
  request.r(i4867[26], i4867[27], 0, i4866, '_smallCupButton')
  request.r(i4867[28], i4867[29], 0, i4866, '_appleButton')
  request.r(i4867[30], i4867[31], 0, i4866, '_orangeButton')
  request.r(i4867[32], i4867[33], 0, i4866, '_multifruitButton')
  request.r(i4867[34], i4867[35], 0, i4866, '_tomatoButton')
  request.r(i4867[36], i4867[37], 0, i4866, '_cherryButton')
  request.r(i4867[38], i4867[39], 0, i4866, '_smallRawJuiceImage')
  request.r(i4867[40], i4867[41], 0, i4866, '_middleRawJuiceImage')
  request.r(i4867[42], i4867[43], 0, i4866, '_bigRawJuiceImage')
  request.r(i4867[44], i4867[45], 0, i4866, '_smallReadyJuiceImage')
  request.r(i4867[46], i4867[47], 0, i4866, '_middleReadyJuiceImage')
  request.r(i4867[48], i4867[49], 0, i4866, '_bigReadyJuiceImage')
  request.r(i4867[50], i4867[51], 0, i4866, '_backImage')
  request.r(i4867[52], i4867[53], 0, i4866, '_aheadImage')
  request.r(i4867[54], i4867[55], 0, i4866, '_config')
  request.r(i4867[56], i4867[57], 0, i4866, '_takeOrderButton')
  request.r(i4867[58], i4867[59], 0, i4866, '_peopleContainer')
  request.r(i4867[60], i4867[61], 0, i4866, '_tutorial')
  request.r(i4867[62], i4867[63], 0, i4866, '_bText')
  request.r(i4867[64], i4867[65], 0, i4866, '_mText')
  request.r(i4867[66], i4867[67], 0, i4866, '_sText')
  request.r(i4867[68], i4867[69], 0, i4866, '_clickSound')
  request.r(i4867[70], i4867[71], 0, i4866, '_juiceSound')
  return i4866
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i4868 = root || request.c( 'Tutorial' )
  var i4869 = data
  i4868.IsTutorial = !!i4869[0]
  request.r(i4869[1], i4869[2], 0, i4868, 'Finger1')
  request.r(i4869[3], i4869[4], 0, i4868, 'Finger2')
  request.r(i4869[5], i4869[6], 0, i4868, 'Finger3')
  request.r(i4869[7], i4869[8], 0, i4868, 'Finger4')
  request.r(i4869[9], i4869[10], 0, i4868, 'Finger5')
  request.r(i4869[11], i4869[12], 0, i4868, 'BuyBigCupFinger')
  request.r(i4869[13], i4869[14], 0, i4868, 'BuyJuiceFinger')
  request.r(i4869[15], i4869[16], 0, i4868, 'SmallCupButton')
  request.r(i4869[17], i4869[18], 0, i4868, 'JuiceButton')
  request.r(i4869[19], i4869[20], 0, i4868, 'StrawButton')
  request.r(i4869[21], i4869[22], 0, i4868, 'AdditiveButton')
  request.r(i4869[23], i4869[24], 0, i4868, 'ReadyButton')
  var i4871 = i4869[25]
  var i4870 = []
  for(var i = 0; i < i4871.length; i += 2) {
  request.r(i4871[i + 0], i4871[i + 1], 2, i4870, '')
  }
  i4868.Buttons = i4870
  request.r(i4869[26], i4869[27], 0, i4868, 'Bank')
  return i4868
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4874 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4875 = data
  request.r(i4875[0], i4875[1], 0, i4874, 'm_FirstSelected')
  i4874.m_sendNavigationEvents = !!i4875[2]
  i4874.m_DragThreshold = i4875[3]
  return i4874
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4876 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4877 = data
  i4876.m_HorizontalAxis = i4877[0]
  i4876.m_VerticalAxis = i4877[1]
  i4876.m_SubmitButton = i4877[2]
  i4876.m_CancelButton = i4877[3]
  i4876.m_InputActionsPerSecond = i4877[4]
  i4876.m_RepeatDelay = i4877[5]
  i4876.m_ForceModuleActive = !!i4877[6]
  i4876.m_SendPointerHoverToParent = !!i4877[7]
  return i4876
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i4878 = root || request.c( 'JuiceConfig' )
  var i4879 = data
  request.r(i4879[0], i4879[1], 0, i4878, 'EntityBigCup')
  request.r(i4879[2], i4879[3], 0, i4878, 'TomatoBigCup')
  request.r(i4879[4], i4879[5], 0, i4878, 'AppleBigCup')
  request.r(i4879[6], i4879[7], 0, i4878, 'OrangeBigCup')
  request.r(i4879[8], i4879[9], 0, i4878, 'CherryBigCup')
  request.r(i4879[10], i4879[11], 0, i4878, 'MultifruitBigCup')
  request.r(i4879[12], i4879[13], 0, i4878, 'TomatoBigStrawCup')
  request.r(i4879[14], i4879[15], 0, i4878, 'MultifruitBigStrawCup')
  request.r(i4879[16], i4879[17], 0, i4878, 'AppleBigStrawCup')
  request.r(i4879[18], i4879[19], 0, i4878, 'OrangeBigStrawCup')
  request.r(i4879[20], i4879[21], 0, i4878, 'CherryBigStrawCup')
  request.r(i4879[22], i4879[23], 0, i4878, 'MultifruitBigBallsCup')
  request.r(i4879[24], i4879[25], 0, i4878, 'TomatoBigBallsCup')
  request.r(i4879[26], i4879[27], 0, i4878, 'AppleBigBallsCup')
  request.r(i4879[28], i4879[29], 0, i4878, 'OrangeBigBallsCup')
  request.r(i4879[30], i4879[31], 0, i4878, 'CherryBigBallsCup')
  request.r(i4879[32], i4879[33], 0, i4878, 'EntityMiddleCup')
  request.r(i4879[34], i4879[35], 0, i4878, 'TomatoMiddleCup')
  request.r(i4879[36], i4879[37], 0, i4878, 'AppleMiddleCup')
  request.r(i4879[38], i4879[39], 0, i4878, 'OrangeMiddleCup')
  request.r(i4879[40], i4879[41], 0, i4878, 'CherryMiddleCup')
  request.r(i4879[42], i4879[43], 0, i4878, 'MultifruitMiddleCup')
  request.r(i4879[44], i4879[45], 0, i4878, 'TomatoMiddleStrawCup')
  request.r(i4879[46], i4879[47], 0, i4878, 'MultifruitMiddleStrawCup')
  request.r(i4879[48], i4879[49], 0, i4878, 'AppleMiddleStrawCup')
  request.r(i4879[50], i4879[51], 0, i4878, 'OrangeMiddleStrawCup')
  request.r(i4879[52], i4879[53], 0, i4878, 'CherryMiddleStrawCup')
  request.r(i4879[54], i4879[55], 0, i4878, 'MultifruitMiddleBallsCup')
  request.r(i4879[56], i4879[57], 0, i4878, 'TomatoMiddleBallsCup')
  request.r(i4879[58], i4879[59], 0, i4878, 'AppleMiddleBallsCup')
  request.r(i4879[60], i4879[61], 0, i4878, 'OrangeMiddleBallsCup')
  request.r(i4879[62], i4879[63], 0, i4878, 'CherryMiddleBallsCup')
  request.r(i4879[64], i4879[65], 0, i4878, 'EntitySmallCup')
  request.r(i4879[66], i4879[67], 0, i4878, 'TomatoSmallCup')
  request.r(i4879[68], i4879[69], 0, i4878, 'AppleSmallCup')
  request.r(i4879[70], i4879[71], 0, i4878, 'OrangeSmallCup')
  request.r(i4879[72], i4879[73], 0, i4878, 'CherrySmallCup')
  request.r(i4879[74], i4879[75], 0, i4878, 'MultifruitSmallCup')
  request.r(i4879[76], i4879[77], 0, i4878, 'TomatoSmallStrawCup')
  request.r(i4879[78], i4879[79], 0, i4878, 'AppleSmallStrawCup')
  request.r(i4879[80], i4879[81], 0, i4878, 'OrangeSmallStrawCup')
  request.r(i4879[82], i4879[83], 0, i4878, 'CherrySmallStrawCup')
  request.r(i4879[84], i4879[85], 0, i4878, 'MultifruitSmallStrawCup')
  request.r(i4879[86], i4879[87], 0, i4878, 'AppleSmallBallsCup')
  request.r(i4879[88], i4879[89], 0, i4878, 'TomatoSmallBallsCup')
  request.r(i4879[90], i4879[91], 0, i4878, 'OrangeSmallBallsCup')
  request.r(i4879[92], i4879[93], 0, i4878, 'CherrySmallBallsCup')
  request.r(i4879[94], i4879[95], 0, i4878, 'MultifruitSmallBallsCup')
  request.r(i4879[96], i4879[97], 0, i4878, 'JuiceBallAdditive')
  request.r(i4879[98], i4879[99], 0, i4878, 'IceAdditive')
  request.r(i4879[100], i4879[101], 0, i4878, 'GrassAdditive')
  return i4878
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i4880 = root || request.c( 'TouchIdleTimer' )
  var i4881 = data
  return i4880
}

Deserializers["Helper"] = function (request, data, root) {
  var i4882 = root || request.c( 'Helper' )
  var i4883 = data
  request.r(i4883[0], i4883[1], 0, i4882, '_smallCupFinger')
  request.r(i4883[2], i4883[3], 0, i4882, '_middleCupFinger')
  request.r(i4883[4], i4883[5], 0, i4882, '_bigCupFinger')
  request.r(i4883[6], i4883[7], 0, i4882, '_iceFinger')
  request.r(i4883[8], i4883[9], 0, i4882, '_grassFinger')
  request.r(i4883[10], i4883[11], 0, i4882, '_juiceballFinger')
  request.r(i4883[12], i4883[13], 0, i4882, '_appleFinger')
  request.r(i4883[14], i4883[15], 0, i4882, '_cherryFinger')
  request.r(i4883[16], i4883[17], 0, i4882, '_orangeFinger')
  request.r(i4883[18], i4883[19], 0, i4882, '_multifruitFinger')
  request.r(i4883[20], i4883[21], 0, i4882, '_tomatoFinger')
  request.r(i4883[22], i4883[23], 0, i4882, '_strawFinger')
  request.r(i4883[24], i4883[25], 0, i4882, '_readyFinger')
  request.r(i4883[26], i4883[27], 0, i4882, '_peoples')
  request.r(i4883[28], i4883[29], 0, i4882, '_tutorial')
  request.r(i4883[30], i4883[31], 0, i4882, '_order')
  request.r(i4883[32], i4883[33], 0, i4882, '_strawButton')
  request.r(i4883[34], i4883[35], 0, i4882, '_bigCupButton')
  request.r(i4883[36], i4883[37], 0, i4882, '_middleCupButton')
  request.r(i4883[38], i4883[39], 0, i4882, '_smallCupButton')
  request.r(i4883[40], i4883[41], 0, i4882, '_readyButton')
  request.r(i4883[42], i4883[43], 0, i4882, '_touchIdleTimer')
  request.r(i4883[44], i4883[45], 0, i4882, '_finalScreen')
  return i4882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4885 = data
  i4884.ambientIntensity = i4885[0]
  i4884.reflectionIntensity = i4885[1]
  i4884.ambientMode = i4885[2]
  i4884.ambientLight = new pc.Color(i4885[3], i4885[4], i4885[5], i4885[6])
  i4884.ambientSkyColor = new pc.Color(i4885[7], i4885[8], i4885[9], i4885[10])
  i4884.ambientGroundColor = new pc.Color(i4885[11], i4885[12], i4885[13], i4885[14])
  i4884.ambientEquatorColor = new pc.Color(i4885[15], i4885[16], i4885[17], i4885[18])
  i4884.fogColor = new pc.Color(i4885[19], i4885[20], i4885[21], i4885[22])
  i4884.fogEndDistance = i4885[23]
  i4884.fogStartDistance = i4885[24]
  i4884.fogDensity = i4885[25]
  i4884.fog = !!i4885[26]
  request.r(i4885[27], i4885[28], 0, i4884, 'skybox')
  i4884.fogMode = i4885[29]
  var i4887 = i4885[30]
  var i4886 = []
  for(var i = 0; i < i4887.length; i += 1) {
    i4886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4887[i + 0]) );
  }
  i4884.lightmaps = i4886
  i4884.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4885[31], i4884.lightProbes)
  i4884.lightmapsMode = i4885[32]
  i4884.mixedBakeMode = i4885[33]
  i4884.environmentLightingMode = i4885[34]
  i4884.ambientProbe = new pc.SphericalHarmonicsL2(i4885[35])
  i4884.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4885[36])
  i4884.useReferenceAmbientProbe = !!i4885[37]
  request.r(i4885[38], i4885[39], 0, i4884, 'customReflection')
  request.r(i4885[40], i4885[41], 0, i4884, 'defaultReflection')
  i4884.defaultReflectionMode = i4885[42]
  i4884.defaultReflectionResolution = i4885[43]
  i4884.sunLightObjectId = i4885[44]
  i4884.pixelLightCount = i4885[45]
  i4884.defaultReflectionHDR = !!i4885[46]
  i4884.hasLightDataAsset = !!i4885[47]
  i4884.hasManualGenerate = !!i4885[48]
  return i4884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4891 = data
  request.r(i4891[0], i4891[1], 0, i4890, 'lightmapColor')
  request.r(i4891[2], i4891[3], 0, i4890, 'lightmapDirection')
  return i4890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4892 = root || new UnityEngine.LightProbes()
  var i4893 = data
  return i4892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4901 = data
  var i4903 = i4901[0]
  var i4902 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4903.length; i += 1) {
    i4902.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4903[i + 0]));
  }
  i4900.ShaderCompilationErrors = i4902
  i4900.name = i4901[1]
  i4900.guid = i4901[2]
  var i4905 = i4901[3]
  var i4904 = []
  for(var i = 0; i < i4905.length; i += 1) {
    i4904.push( i4905[i + 0] );
  }
  i4900.shaderDefinedKeywords = i4904
  var i4907 = i4901[4]
  var i4906 = []
  for(var i = 0; i < i4907.length; i += 1) {
    i4906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4907[i + 0]) );
  }
  i4900.passes = i4906
  var i4909 = i4901[5]
  var i4908 = []
  for(var i = 0; i < i4909.length; i += 1) {
    i4908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4909[i + 0]) );
  }
  i4900.usePasses = i4908
  var i4911 = i4901[6]
  var i4910 = []
  for(var i = 0; i < i4911.length; i += 1) {
    i4910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4911[i + 0]) );
  }
  i4900.defaultParameterValues = i4910
  request.r(i4901[7], i4901[8], 0, i4900, 'unityFallbackShader')
  i4900.readDepth = !!i4901[9]
  i4900.isCreatedByShaderGraph = !!i4901[10]
  i4900.compiled = !!i4901[11]
  return i4900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4915 = data
  i4914.shaderName = i4915[0]
  i4914.errorMessage = i4915[1]
  return i4914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4920 = root || new pc.UnityShaderPass()
  var i4921 = data
  i4920.id = i4921[0]
  i4920.subShaderIndex = i4921[1]
  i4920.name = i4921[2]
  i4920.passType = i4921[3]
  i4920.grabPassTextureName = i4921[4]
  i4920.usePass = !!i4921[5]
  i4920.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4921[6], i4920.zTest)
  i4920.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4921[7], i4920.zWrite)
  i4920.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4921[8], i4920.culling)
  i4920.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4921[9], i4920.blending)
  i4920.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4921[10], i4920.alphaBlending)
  i4920.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4921[11], i4920.colorWriteMask)
  i4920.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4921[12], i4920.offsetUnits)
  i4920.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4921[13], i4920.offsetFactor)
  i4920.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4921[14], i4920.stencilRef)
  i4920.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4921[15], i4920.stencilReadMask)
  i4920.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4921[16], i4920.stencilWriteMask)
  i4920.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4921[17], i4920.stencilOp)
  i4920.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4921[18], i4920.stencilOpFront)
  i4920.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4921[19], i4920.stencilOpBack)
  var i4923 = i4921[20]
  var i4922 = []
  for(var i = 0; i < i4923.length; i += 1) {
    i4922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4923[i + 0]) );
  }
  i4920.tags = i4922
  var i4925 = i4921[21]
  var i4924 = []
  for(var i = 0; i < i4925.length; i += 1) {
    i4924.push( i4925[i + 0] );
  }
  i4920.passDefinedKeywords = i4924
  var i4927 = i4921[22]
  var i4926 = []
  for(var i = 0; i < i4927.length; i += 1) {
    i4926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4927[i + 0]) );
  }
  i4920.passDefinedKeywordGroups = i4926
  var i4929 = i4921[23]
  var i4928 = []
  for(var i = 0; i < i4929.length; i += 1) {
    i4928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4929[i + 0]) );
  }
  i4920.variants = i4928
  var i4931 = i4921[24]
  var i4930 = []
  for(var i = 0; i < i4931.length; i += 1) {
    i4930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4931[i + 0]) );
  }
  i4920.excludedVariants = i4930
  i4920.hasDepthReader = !!i4921[25]
  return i4920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4933 = data
  i4932.val = i4933[0]
  i4932.name = i4933[1]
  return i4932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4935 = data
  i4934.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4935[0], i4934.src)
  i4934.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4935[1], i4934.dst)
  i4934.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4935[2], i4934.op)
  return i4934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4937 = data
  i4936.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4937[0], i4936.pass)
  i4936.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4937[1], i4936.fail)
  i4936.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4937[2], i4936.zFail)
  i4936.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4937[3], i4936.comp)
  return i4936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4941 = data
  i4940.name = i4941[0]
  i4940.value = i4941[1]
  return i4940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4945 = data
  var i4947 = i4945[0]
  var i4946 = []
  for(var i = 0; i < i4947.length; i += 1) {
    i4946.push( i4947[i + 0] );
  }
  i4944.keywords = i4946
  i4944.hasDiscard = !!i4945[1]
  return i4944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4951 = data
  i4950.passId = i4951[0]
  i4950.subShaderIndex = i4951[1]
  var i4953 = i4951[2]
  var i4952 = []
  for(var i = 0; i < i4953.length; i += 1) {
    i4952.push( i4953[i + 0] );
  }
  i4950.keywords = i4952
  i4950.vertexProgram = i4951[3]
  i4950.fragmentProgram = i4951[4]
  i4950.exportedForWebGl2 = !!i4951[5]
  i4950.readDepth = !!i4951[6]
  return i4950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4957 = data
  request.r(i4957[0], i4957[1], 0, i4956, 'shader')
  i4956.pass = i4957[2]
  return i4956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4961 = data
  i4960.name = i4961[0]
  i4960.type = i4961[1]
  i4960.value = new pc.Vec4( i4961[2], i4961[3], i4961[4], i4961[5] )
  i4960.textureValue = i4961[6]
  i4960.shaderPropertyFlag = i4961[7]
  return i4960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4963 = data
  i4962.name = i4963[0]
  request.r(i4963[1], i4963[2], 0, i4962, 'texture')
  i4962.aabb = i4963[3]
  i4962.vertices = i4963[4]
  i4962.triangles = i4963[5]
  i4962.textureRect = UnityEngine.Rect.MinMaxRect(i4963[6], i4963[7], i4963[8], i4963[9])
  i4962.packedRect = UnityEngine.Rect.MinMaxRect(i4963[10], i4963[11], i4963[12], i4963[13])
  i4962.border = new pc.Vec4( i4963[14], i4963[15], i4963[16], i4963[17] )
  i4962.transparency = i4963[18]
  i4962.bounds = i4963[19]
  i4962.pixelsPerUnit = i4963[20]
  i4962.textureWidth = i4963[21]
  i4962.textureHeight = i4963[22]
  i4962.nativeSize = new pc.Vec2( i4963[23], i4963[24] )
  i4962.pivot = new pc.Vec2( i4963[25], i4963[26] )
  i4962.textureRectOffset = new pc.Vec2( i4963[27], i4963[28] )
  return i4962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4965 = data
  i4964.name = i4965[0]
  return i4964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4967 = data
  i4966.name = i4967[0]
  i4966.wrapMode = i4967[1]
  i4966.isLooping = !!i4967[2]
  i4966.length = i4967[3]
  var i4969 = i4967[4]
  var i4968 = []
  for(var i = 0; i < i4969.length; i += 1) {
    i4968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4969[i + 0]) );
  }
  i4966.curves = i4968
  var i4971 = i4967[5]
  var i4970 = []
  for(var i = 0; i < i4971.length; i += 1) {
    i4970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4971[i + 0]) );
  }
  i4966.events = i4970
  i4966.halfPrecision = !!i4967[6]
  i4966._frameRate = i4967[7]
  i4966.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4967[8], i4966.localBounds)
  i4966.hasMuscleCurves = !!i4967[9]
  var i4973 = i4967[10]
  var i4972 = []
  for(var i = 0; i < i4973.length; i += 1) {
    i4972.push( i4973[i + 0] );
  }
  i4966.clipMuscleConstant = i4972
  i4966.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4967[11], i4966.clipBindingConstant)
  return i4966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4977 = data
  i4976.path = i4977[0]
  i4976.hash = i4977[1]
  i4976.componentType = i4977[2]
  i4976.property = i4977[3]
  i4976.keys = i4977[4]
  var i4979 = i4977[5]
  var i4978 = []
  for(var i = 0; i < i4979.length; i += 1) {
    i4978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4979[i + 0]) );
  }
  i4976.objectReferenceKeys = i4978
  return i4976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4983 = data
  i4982.time = i4983[0]
  request.r(i4983[1], i4983[2], 0, i4982, 'value')
  return i4982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4987 = data
  i4986.functionName = i4987[0]
  i4986.floatParameter = i4987[1]
  i4986.intParameter = i4987[2]
  i4986.stringParameter = i4987[3]
  request.r(i4987[4], i4987[5], 0, i4986, 'objectReferenceParameter')
  i4986.time = i4987[6]
  return i4986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4989 = data
  i4988.center = new pc.Vec3( i4989[0], i4989[1], i4989[2] )
  i4988.extends = new pc.Vec3( i4989[3], i4989[4], i4989[5] )
  return i4988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4993 = data
  var i4995 = i4993[0]
  var i4994 = []
  for(var i = 0; i < i4995.length; i += 1) {
    i4994.push( i4995[i + 0] );
  }
  i4992.genericBindings = i4994
  var i4997 = i4993[1]
  var i4996 = []
  for(var i = 0; i < i4997.length; i += 1) {
    i4996.push( i4997[i + 0] );
  }
  i4992.pptrCurveMapping = i4996
  return i4992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4999 = data
  i4998.name = i4999[0]
  i4998.ascent = i4999[1]
  i4998.originalLineHeight = i4999[2]
  i4998.fontSize = i4999[3]
  var i5001 = i4999[4]
  var i5000 = []
  for(var i = 0; i < i5001.length; i += 1) {
    i5000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5001[i + 0]) );
  }
  i4998.characterInfo = i5000
  request.r(i4999[5], i4999[6], 0, i4998, 'texture')
  i4998.originalFontSize = i4999[7]
  return i4998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5005 = data
  i5004.index = i5005[0]
  i5004.advance = i5005[1]
  i5004.bearing = i5005[2]
  i5004.glyphWidth = i5005[3]
  i5004.glyphHeight = i5005[4]
  i5004.minX = i5005[5]
  i5004.maxX = i5005[6]
  i5004.minY = i5005[7]
  i5004.maxY = i5005[8]
  i5004.uvBottomLeftX = i5005[9]
  i5004.uvBottomLeftY = i5005[10]
  i5004.uvBottomRightX = i5005[11]
  i5004.uvBottomRightY = i5005[12]
  i5004.uvTopLeftX = i5005[13]
  i5004.uvTopLeftY = i5005[14]
  i5004.uvTopRightX = i5005[15]
  i5004.uvTopRightY = i5005[16]
  return i5004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5007 = data
  i5006.name = i5007[0]
  var i5009 = i5007[1]
  var i5008 = []
  for(var i = 0; i < i5009.length; i += 1) {
    i5008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5009[i + 0]) );
  }
  i5006.layers = i5008
  var i5011 = i5007[2]
  var i5010 = []
  for(var i = 0; i < i5011.length; i += 1) {
    i5010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5011[i + 0]) );
  }
  i5006.parameters = i5010
  i5006.animationClips = i5007[3]
  i5006.avatarUnsupported = i5007[4]
  return i5006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5015 = data
  i5014.name = i5015[0]
  i5014.defaultWeight = i5015[1]
  i5014.blendingMode = i5015[2]
  i5014.avatarMask = i5015[3]
  i5014.syncedLayerIndex = i5015[4]
  i5014.syncedLayerAffectsTiming = !!i5015[5]
  i5014.syncedLayers = i5015[6]
  i5014.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5015[7], i5014.stateMachine)
  return i5014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5017 = data
  i5016.id = i5017[0]
  i5016.name = i5017[1]
  i5016.path = i5017[2]
  var i5019 = i5017[3]
  var i5018 = []
  for(var i = 0; i < i5019.length; i += 1) {
    i5018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5019[i + 0]) );
  }
  i5016.states = i5018
  var i5021 = i5017[4]
  var i5020 = []
  for(var i = 0; i < i5021.length; i += 1) {
    i5020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5021[i + 0]) );
  }
  i5016.machines = i5020
  var i5023 = i5017[5]
  var i5022 = []
  for(var i = 0; i < i5023.length; i += 1) {
    i5022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5023[i + 0]) );
  }
  i5016.entryStateTransitions = i5022
  var i5025 = i5017[6]
  var i5024 = []
  for(var i = 0; i < i5025.length; i += 1) {
    i5024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5025[i + 0]) );
  }
  i5016.exitStateTransitions = i5024
  var i5027 = i5017[7]
  var i5026 = []
  for(var i = 0; i < i5027.length; i += 1) {
    i5026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5027[i + 0]) );
  }
  i5016.anyStateTransitions = i5026
  i5016.defaultStateId = i5017[8]
  return i5016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5031 = data
  i5030.id = i5031[0]
  i5030.name = i5031[1]
  i5030.cycleOffset = i5031[2]
  i5030.cycleOffsetParameter = i5031[3]
  i5030.cycleOffsetParameterActive = !!i5031[4]
  i5030.mirror = !!i5031[5]
  i5030.mirrorParameter = i5031[6]
  i5030.mirrorParameterActive = !!i5031[7]
  i5030.motionId = i5031[8]
  i5030.nameHash = i5031[9]
  i5030.fullPathHash = i5031[10]
  i5030.speed = i5031[11]
  i5030.speedParameter = i5031[12]
  i5030.speedParameterActive = !!i5031[13]
  i5030.tag = i5031[14]
  i5030.tagHash = i5031[15]
  i5030.writeDefaultValues = !!i5031[16]
  var i5033 = i5031[17]
  var i5032 = []
  for(var i = 0; i < i5033.length; i += 2) {
  request.r(i5033[i + 0], i5033[i + 1], 2, i5032, '')
  }
  i5030.behaviours = i5032
  var i5035 = i5031[18]
  var i5034 = []
  for(var i = 0; i < i5035.length; i += 1) {
    i5034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5035[i + 0]) );
  }
  i5030.transitions = i5034
  return i5030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5041 = data
  i5040.fullPath = i5041[0]
  i5040.canTransitionToSelf = !!i5041[1]
  i5040.duration = i5041[2]
  i5040.exitTime = i5041[3]
  i5040.hasExitTime = !!i5041[4]
  i5040.hasFixedDuration = !!i5041[5]
  i5040.interruptionSource = i5041[6]
  i5040.offset = i5041[7]
  i5040.orderedInterruption = !!i5041[8]
  i5040.destinationStateId = i5041[9]
  i5040.isExit = !!i5041[10]
  i5040.mute = !!i5041[11]
  i5040.solo = !!i5041[12]
  var i5043 = i5041[13]
  var i5042 = []
  for(var i = 0; i < i5043.length; i += 1) {
    i5042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5043[i + 0]) );
  }
  i5040.conditions = i5042
  return i5040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5049 = data
  i5048.destinationStateId = i5049[0]
  i5048.isExit = !!i5049[1]
  i5048.mute = !!i5049[2]
  i5048.solo = !!i5049[3]
  var i5051 = i5049[4]
  var i5050 = []
  for(var i = 0; i < i5051.length; i += 1) {
    i5050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5051[i + 0]) );
  }
  i5048.conditions = i5050
  return i5048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5055 = data
  i5054.mode = i5055[0]
  i5054.parameter = i5055[1]
  i5054.threshold = i5055[2]
  return i5054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5059 = data
  i5058.defaultBool = !!i5059[0]
  i5058.defaultFloat = i5059[1]
  i5058.defaultInt = i5059[2]
  i5058.name = i5059[3]
  i5058.nameHash = i5059[4]
  i5058.type = i5059[5]
  return i5058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5061 = data
  i5060.name = i5061[0]
  i5060.bytes64 = i5061[1]
  i5060.data = i5061[2]
  return i5060
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5062 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5063 = data
  i5062.hashCode = i5063[0]
  request.r(i5063[1], i5063[2], 0, i5062, 'material')
  i5062.materialHashCode = i5063[3]
  request.r(i5063[4], i5063[5], 0, i5062, 'atlas')
  i5062.normalStyle = i5063[6]
  i5062.normalSpacingOffset = i5063[7]
  i5062.boldStyle = i5063[8]
  i5062.boldSpacing = i5063[9]
  i5062.italicStyle = i5063[10]
  i5062.tabSize = i5063[11]
  i5062.m_Version = i5063[12]
  i5062.m_SourceFontFileGUID = i5063[13]
  request.r(i5063[14], i5063[15], 0, i5062, 'm_SourceFontFile_EditorRef')
  request.r(i5063[16], i5063[17], 0, i5062, 'm_SourceFontFile')
  i5062.m_AtlasPopulationMode = i5063[18]
  i5062.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5063[19], i5062.m_FaceInfo)
  var i5065 = i5063[20]
  var i5064 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5065.length; i += 1) {
    i5064.add(request.d('UnityEngine.TextCore.Glyph', i5065[i + 0]));
  }
  i5062.m_GlyphTable = i5064
  var i5067 = i5063[21]
  var i5066 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5067.length; i += 1) {
    i5066.add(request.d('TMPro.TMP_Character', i5067[i + 0]));
  }
  i5062.m_CharacterTable = i5066
  var i5069 = i5063[22]
  var i5068 = []
  for(var i = 0; i < i5069.length; i += 2) {
  request.r(i5069[i + 0], i5069[i + 1], 2, i5068, '')
  }
  i5062.m_AtlasTextures = i5068
  i5062.m_AtlasTextureIndex = i5063[23]
  i5062.m_IsMultiAtlasTexturesEnabled = !!i5063[24]
  i5062.m_ClearDynamicDataOnBuild = !!i5063[25]
  var i5071 = i5063[26]
  var i5070 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5071.length; i += 1) {
    i5070.add(request.d('UnityEngine.TextCore.GlyphRect', i5071[i + 0]));
  }
  i5062.m_UsedGlyphRects = i5070
  var i5073 = i5063[27]
  var i5072 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5073.length; i += 1) {
    i5072.add(request.d('UnityEngine.TextCore.GlyphRect', i5073[i + 0]));
  }
  i5062.m_FreeGlyphRects = i5072
  i5062.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5063[28], i5062.m_fontInfo)
  i5062.m_AtlasWidth = i5063[29]
  i5062.m_AtlasHeight = i5063[30]
  i5062.m_AtlasPadding = i5063[31]
  i5062.m_AtlasRenderMode = i5063[32]
  var i5075 = i5063[33]
  var i5074 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5075.length; i += 1) {
    i5074.add(request.d('TMPro.TMP_Glyph', i5075[i + 0]));
  }
  i5062.m_glyphInfoList = i5074
  i5062.m_KerningTable = request.d('TMPro.KerningTable', i5063[34], i5062.m_KerningTable)
  i5062.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5063[35], i5062.m_FontFeatureTable)
  var i5077 = i5063[36]
  var i5076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5077.length; i += 2) {
  request.r(i5077[i + 0], i5077[i + 1], 1, i5076, '')
  }
  i5062.fallbackFontAssets = i5076
  var i5079 = i5063[37]
  var i5078 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5079.length; i += 2) {
  request.r(i5079[i + 0], i5079[i + 1], 1, i5078, '')
  }
  i5062.m_FallbackFontAssetTable = i5078
  i5062.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5063[38], i5062.m_CreationSettings)
  var i5081 = i5063[39]
  var i5080 = []
  for(var i = 0; i < i5081.length; i += 1) {
    i5080.push( request.d('TMPro.TMP_FontWeightPair', i5081[i + 0]) );
  }
  i5062.m_FontWeightTable = i5080
  var i5083 = i5063[40]
  var i5082 = []
  for(var i = 0; i < i5083.length; i += 1) {
    i5082.push( request.d('TMPro.TMP_FontWeightPair', i5083[i + 0]) );
  }
  i5062.fontWeights = i5082
  return i5062
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5084 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5085 = data
  i5084.m_FaceIndex = i5085[0]
  i5084.m_FamilyName = i5085[1]
  i5084.m_StyleName = i5085[2]
  i5084.m_PointSize = i5085[3]
  i5084.m_Scale = i5085[4]
  i5084.m_UnitsPerEM = i5085[5]
  i5084.m_LineHeight = i5085[6]
  i5084.m_AscentLine = i5085[7]
  i5084.m_CapLine = i5085[8]
  i5084.m_MeanLine = i5085[9]
  i5084.m_Baseline = i5085[10]
  i5084.m_DescentLine = i5085[11]
  i5084.m_SuperscriptOffset = i5085[12]
  i5084.m_SuperscriptSize = i5085[13]
  i5084.m_SubscriptOffset = i5085[14]
  i5084.m_SubscriptSize = i5085[15]
  i5084.m_UnderlineOffset = i5085[16]
  i5084.m_UnderlineThickness = i5085[17]
  i5084.m_StrikethroughOffset = i5085[18]
  i5084.m_StrikethroughThickness = i5085[19]
  i5084.m_TabWidth = i5085[20]
  return i5084
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5088 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5089 = data
  i5088.m_Index = i5089[0]
  i5088.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5089[1], i5088.m_Metrics)
  i5088.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5089[2], i5088.m_GlyphRect)
  i5088.m_Scale = i5089[3]
  i5088.m_AtlasIndex = i5089[4]
  i5088.m_ClassDefinitionType = i5089[5]
  return i5088
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5090 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5091 = data
  i5090.m_Width = i5091[0]
  i5090.m_Height = i5091[1]
  i5090.m_HorizontalBearingX = i5091[2]
  i5090.m_HorizontalBearingY = i5091[3]
  i5090.m_HorizontalAdvance = i5091[4]
  return i5090
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5092 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5093 = data
  i5092.m_X = i5093[0]
  i5092.m_Y = i5093[1]
  i5092.m_Width = i5093[2]
  i5092.m_Height = i5093[3]
  return i5092
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5096 = root || request.c( 'TMPro.TMP_Character' )
  var i5097 = data
  i5096.m_ElementType = i5097[0]
  i5096.m_Unicode = i5097[1]
  i5096.m_GlyphIndex = i5097[2]
  i5096.m_Scale = i5097[3]
  return i5096
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5102 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5103 = data
  i5102.Name = i5103[0]
  i5102.PointSize = i5103[1]
  i5102.Scale = i5103[2]
  i5102.CharacterCount = i5103[3]
  i5102.LineHeight = i5103[4]
  i5102.Baseline = i5103[5]
  i5102.Ascender = i5103[6]
  i5102.CapHeight = i5103[7]
  i5102.Descender = i5103[8]
  i5102.CenterLine = i5103[9]
  i5102.SuperscriptOffset = i5103[10]
  i5102.SubscriptOffset = i5103[11]
  i5102.SubSize = i5103[12]
  i5102.Underline = i5103[13]
  i5102.UnderlineThickness = i5103[14]
  i5102.strikethrough = i5103[15]
  i5102.strikethroughThickness = i5103[16]
  i5102.TabWidth = i5103[17]
  i5102.Padding = i5103[18]
  i5102.AtlasWidth = i5103[19]
  i5102.AtlasHeight = i5103[20]
  return i5102
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5106 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5107 = data
  i5106.id = i5107[0]
  i5106.x = i5107[1]
  i5106.y = i5107[2]
  i5106.width = i5107[3]
  i5106.height = i5107[4]
  i5106.xOffset = i5107[5]
  i5106.yOffset = i5107[6]
  i5106.xAdvance = i5107[7]
  i5106.scale = i5107[8]
  return i5106
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5108 = root || request.c( 'TMPro.KerningTable' )
  var i5109 = data
  var i5111 = i5109[0]
  var i5110 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5111.length; i += 1) {
    i5110.add(request.d('TMPro.KerningPair', i5111[i + 0]));
  }
  i5108.kerningPairs = i5110
  return i5108
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5114 = root || request.c( 'TMPro.KerningPair' )
  var i5115 = data
  i5114.xOffset = i5115[0]
  i5114.m_FirstGlyph = i5115[1]
  i5114.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5115[2], i5114.m_FirstGlyphAdjustments)
  i5114.m_SecondGlyph = i5115[3]
  i5114.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5115[4], i5114.m_SecondGlyphAdjustments)
  i5114.m_IgnoreSpacingAdjustments = !!i5115[5]
  return i5114
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5116 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5117 = data
  var i5119 = i5117[0]
  var i5118 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5119.length; i += 1) {
    i5118.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i5119[i + 0]));
  }
  i5116.m_GlyphPairAdjustmentRecords = i5118
  return i5116
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5122 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i5123 = data
  i5122.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5123[0], i5122.m_FirstAdjustmentRecord)
  i5122.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5123[1], i5122.m_SecondAdjustmentRecord)
  i5122.m_FeatureLookupFlags = i5123[2]
  return i5122
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5124 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i5125 = data
  i5124.m_GlyphIndex = i5125[0]
  i5124.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i5125[1], i5124.m_GlyphValueRecord)
  return i5124
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i5126 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i5127 = data
  i5126.m_XPlacement = i5127[0]
  i5126.m_YPlacement = i5127[1]
  i5126.m_XAdvance = i5127[2]
  i5126.m_YAdvance = i5127[3]
  return i5126
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5130 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5131 = data
  i5130.sourceFontFileName = i5131[0]
  i5130.sourceFontFileGUID = i5131[1]
  i5130.pointSizeSamplingMode = i5131[2]
  i5130.pointSize = i5131[3]
  i5130.padding = i5131[4]
  i5130.packingMode = i5131[5]
  i5130.atlasWidth = i5131[6]
  i5130.atlasHeight = i5131[7]
  i5130.characterSetSelectionMode = i5131[8]
  i5130.characterSequence = i5131[9]
  i5130.referencedFontAssetGUID = i5131[10]
  i5130.referencedTextAssetGUID = i5131[11]
  i5130.fontStyle = i5131[12]
  i5130.fontStyleModifier = i5131[13]
  i5130.renderMode = i5131[14]
  i5130.includeFontFeatures = !!i5131[15]
  return i5130
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5134 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5135 = data
  request.r(i5135[0], i5135[1], 0, i5134, 'regularTypeface')
  request.r(i5135[2], i5135[3], 0, i5134, 'italicTypeface')
  return i5134
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5136 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5137 = data
  i5136.useSafeMode = !!i5137[0]
  i5136.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5137[1], i5136.safeModeOptions)
  i5136.timeScale = i5137[2]
  i5136.unscaledTimeScale = i5137[3]
  i5136.useSmoothDeltaTime = !!i5137[4]
  i5136.maxSmoothUnscaledTime = i5137[5]
  i5136.rewindCallbackMode = i5137[6]
  i5136.showUnityEditorReport = !!i5137[7]
  i5136.logBehaviour = i5137[8]
  i5136.drawGizmos = !!i5137[9]
  i5136.defaultRecyclable = !!i5137[10]
  i5136.defaultAutoPlay = i5137[11]
  i5136.defaultUpdateType = i5137[12]
  i5136.defaultTimeScaleIndependent = !!i5137[13]
  i5136.defaultEaseType = i5137[14]
  i5136.defaultEaseOvershootOrAmplitude = i5137[15]
  i5136.defaultEasePeriod = i5137[16]
  i5136.defaultAutoKill = !!i5137[17]
  i5136.defaultLoopType = i5137[18]
  i5136.debugMode = !!i5137[19]
  i5136.debugStoreTargetId = !!i5137[20]
  i5136.showPreviewPanel = !!i5137[21]
  i5136.storeSettingsLocation = i5137[22]
  i5136.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5137[23], i5136.modules)
  i5136.createASMDEF = !!i5137[24]
  i5136.showPlayingTweens = !!i5137[25]
  i5136.showPausedTweens = !!i5137[26]
  return i5136
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5138 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5139 = data
  i5138.logBehaviour = i5139[0]
  i5138.nestedTweenFailureBehaviour = i5139[1]
  return i5138
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5140 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5141 = data
  i5140.showPanel = !!i5141[0]
  i5140.audioEnabled = !!i5141[1]
  i5140.physicsEnabled = !!i5141[2]
  i5140.physics2DEnabled = !!i5141[3]
  i5140.spriteEnabled = !!i5141[4]
  i5140.uiEnabled = !!i5141[5]
  i5140.textMeshProEnabled = !!i5141[6]
  i5140.tk2DEnabled = !!i5141[7]
  i5140.deAudioEnabled = !!i5141[8]
  i5140.deUnityExtendedEnabled = !!i5141[9]
  i5140.epoOutlineEnabled = !!i5141[10]
  return i5140
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5142 = root || request.c( 'TMPro.TMP_Settings' )
  var i5143 = data
  i5142.m_enableWordWrapping = !!i5143[0]
  i5142.m_enableKerning = !!i5143[1]
  i5142.m_enableExtraPadding = !!i5143[2]
  i5142.m_enableTintAllSprites = !!i5143[3]
  i5142.m_enableParseEscapeCharacters = !!i5143[4]
  i5142.m_EnableRaycastTarget = !!i5143[5]
  i5142.m_GetFontFeaturesAtRuntime = !!i5143[6]
  i5142.m_missingGlyphCharacter = i5143[7]
  i5142.m_warningsDisabled = !!i5143[8]
  request.r(i5143[9], i5143[10], 0, i5142, 'm_defaultFontAsset')
  i5142.m_defaultFontAssetPath = i5143[11]
  i5142.m_defaultFontSize = i5143[12]
  i5142.m_defaultAutoSizeMinRatio = i5143[13]
  i5142.m_defaultAutoSizeMaxRatio = i5143[14]
  i5142.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5143[15], i5143[16] )
  i5142.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5143[17], i5143[18] )
  i5142.m_autoSizeTextContainer = !!i5143[19]
  i5142.m_IsTextObjectScaleStatic = !!i5143[20]
  var i5145 = i5143[21]
  var i5144 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5145.length; i += 2) {
  request.r(i5145[i + 0], i5145[i + 1], 1, i5144, '')
  }
  i5142.m_fallbackFontAssets = i5144
  i5142.m_matchMaterialPreset = !!i5143[22]
  request.r(i5143[23], i5143[24], 0, i5142, 'm_defaultSpriteAsset')
  i5142.m_defaultSpriteAssetPath = i5143[25]
  i5142.m_enableEmojiSupport = !!i5143[26]
  i5142.m_MissingCharacterSpriteUnicode = i5143[27]
  i5142.m_defaultColorGradientPresetsPath = i5143[28]
  request.r(i5143[29], i5143[30], 0, i5142, 'm_defaultStyleSheet')
  i5142.m_StyleSheetsResourcePath = i5143[31]
  request.r(i5143[32], i5143[33], 0, i5142, 'm_leadingCharacters')
  request.r(i5143[34], i5143[35], 0, i5142, 'm_followingCharacters')
  i5142.m_UseModernHangulLineBreakingRules = !!i5143[36]
  return i5142
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5146 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5147 = data
  i5146.hashCode = i5147[0]
  request.r(i5147[1], i5147[2], 0, i5146, 'material')
  i5146.materialHashCode = i5147[3]
  request.r(i5147[4], i5147[5], 0, i5146, 'spriteSheet')
  var i5149 = i5147[6]
  var i5148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5149.length; i += 1) {
    i5148.add(request.d('TMPro.TMP_Sprite', i5149[i + 0]));
  }
  i5146.spriteInfoList = i5148
  var i5151 = i5147[7]
  var i5150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5151.length; i += 2) {
  request.r(i5151[i + 0], i5151[i + 1], 1, i5150, '')
  }
  i5146.fallbackSpriteAssets = i5150
  i5146.m_Version = i5147[8]
  i5146.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5147[9], i5146.m_FaceInfo)
  var i5153 = i5147[10]
  var i5152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5153.length; i += 1) {
    i5152.add(request.d('TMPro.TMP_SpriteCharacter', i5153[i + 0]));
  }
  i5146.m_SpriteCharacterTable = i5152
  var i5155 = i5147[11]
  var i5154 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5155.length; i += 1) {
    i5154.add(request.d('TMPro.TMP_SpriteGlyph', i5155[i + 0]));
  }
  i5146.m_SpriteGlyphTable = i5154
  return i5146
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5158 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5159 = data
  i5158.name = i5159[0]
  i5158.hashCode = i5159[1]
  i5158.unicode = i5159[2]
  i5158.pivot = new pc.Vec2( i5159[3], i5159[4] )
  request.r(i5159[5], i5159[6], 0, i5158, 'sprite')
  i5158.id = i5159[7]
  i5158.x = i5159[8]
  i5158.y = i5159[9]
  i5158.width = i5159[10]
  i5158.height = i5159[11]
  i5158.xOffset = i5159[12]
  i5158.yOffset = i5159[13]
  i5158.xAdvance = i5159[14]
  i5158.scale = i5159[15]
  return i5158
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5164 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5165 = data
  i5164.m_Name = i5165[0]
  i5164.m_HashCode = i5165[1]
  i5164.m_ElementType = i5165[2]
  i5164.m_Unicode = i5165[3]
  i5164.m_GlyphIndex = i5165[4]
  i5164.m_Scale = i5165[5]
  return i5164
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5168 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5169 = data
  request.r(i5169[0], i5169[1], 0, i5168, 'sprite')
  i5168.m_Index = i5169[2]
  i5168.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5169[3], i5168.m_Metrics)
  i5168.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5169[4], i5168.m_GlyphRect)
  i5168.m_Scale = i5169[5]
  i5168.m_AtlasIndex = i5169[6]
  i5168.m_ClassDefinitionType = i5169[7]
  return i5168
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5170 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5171 = data
  var i5173 = i5171[0]
  var i5172 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5173.length; i += 1) {
    i5172.add(request.d('TMPro.TMP_Style', i5173[i + 0]));
  }
  i5170.m_StyleList = i5172
  return i5170
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5176 = root || request.c( 'TMPro.TMP_Style' )
  var i5177 = data
  i5176.m_Name = i5177[0]
  i5176.m_HashCode = i5177[1]
  i5176.m_OpeningDefinition = i5177[2]
  i5176.m_ClosingDefinition = i5177[3]
  i5176.m_OpeningTagArray = i5177[4]
  i5176.m_ClosingTagArray = i5177[5]
  i5176.m_OpeningTagUnicodeArray = i5177[6]
  i5176.m_ClosingTagUnicodeArray = i5177[7]
  return i5176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5179 = data
  var i5181 = i5179[0]
  var i5180 = []
  for(var i = 0; i < i5181.length; i += 1) {
    i5180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5181[i + 0]) );
  }
  i5178.files = i5180
  i5178.componentToPrefabIds = i5179[1]
  return i5178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5185 = data
  i5184.path = i5185[0]
  request.r(i5185[1], i5185[2], 0, i5184, 'unityObject')
  return i5184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5187 = data
  var i5189 = i5187[0]
  var i5188 = []
  for(var i = 0; i < i5189.length; i += 1) {
    i5188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5189[i + 0]) );
  }
  i5186.scriptsExecutionOrder = i5188
  var i5191 = i5187[1]
  var i5190 = []
  for(var i = 0; i < i5191.length; i += 1) {
    i5190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5191[i + 0]) );
  }
  i5186.sortingLayers = i5190
  var i5193 = i5187[2]
  var i5192 = []
  for(var i = 0; i < i5193.length; i += 1) {
    i5192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5193[i + 0]) );
  }
  i5186.cullingLayers = i5192
  i5186.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5187[3], i5186.timeSettings)
  i5186.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5187[4], i5186.physicsSettings)
  i5186.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5187[5], i5186.physics2DSettings)
  i5186.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5187[6], i5186.qualitySettings)
  i5186.enableRealtimeShadows = !!i5187[7]
  i5186.enableAutoInstancing = !!i5187[8]
  i5186.enableDynamicBatching = !!i5187[9]
  i5186.lightmapEncodingQuality = i5187[10]
  i5186.desiredColorSpace = i5187[11]
  var i5195 = i5187[12]
  var i5194 = []
  for(var i = 0; i < i5195.length; i += 1) {
    i5194.push( i5195[i + 0] );
  }
  i5186.allTags = i5194
  return i5186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5199 = data
  i5198.name = i5199[0]
  i5198.value = i5199[1]
  return i5198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5203 = data
  i5202.id = i5203[0]
  i5202.name = i5203[1]
  i5202.value = i5203[2]
  return i5202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5207 = data
  i5206.id = i5207[0]
  i5206.name = i5207[1]
  return i5206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5209 = data
  i5208.fixedDeltaTime = i5209[0]
  i5208.maximumDeltaTime = i5209[1]
  i5208.timeScale = i5209[2]
  i5208.maximumParticleTimestep = i5209[3]
  return i5208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5211 = data
  i5210.gravity = new pc.Vec3( i5211[0], i5211[1], i5211[2] )
  i5210.defaultSolverIterations = i5211[3]
  i5210.bounceThreshold = i5211[4]
  i5210.autoSyncTransforms = !!i5211[5]
  i5210.autoSimulation = !!i5211[6]
  var i5213 = i5211[7]
  var i5212 = []
  for(var i = 0; i < i5213.length; i += 1) {
    i5212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5213[i + 0]) );
  }
  i5210.collisionMatrix = i5212
  return i5210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5217 = data
  i5216.enabled = !!i5217[0]
  i5216.layerId = i5217[1]
  i5216.otherLayerId = i5217[2]
  return i5216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5219 = data
  request.r(i5219[0], i5219[1], 0, i5218, 'material')
  i5218.gravity = new pc.Vec2( i5219[2], i5219[3] )
  i5218.positionIterations = i5219[4]
  i5218.velocityIterations = i5219[5]
  i5218.velocityThreshold = i5219[6]
  i5218.maxLinearCorrection = i5219[7]
  i5218.maxAngularCorrection = i5219[8]
  i5218.maxTranslationSpeed = i5219[9]
  i5218.maxRotationSpeed = i5219[10]
  i5218.baumgarteScale = i5219[11]
  i5218.baumgarteTOIScale = i5219[12]
  i5218.timeToSleep = i5219[13]
  i5218.linearSleepTolerance = i5219[14]
  i5218.angularSleepTolerance = i5219[15]
  i5218.defaultContactOffset = i5219[16]
  i5218.autoSimulation = !!i5219[17]
  i5218.queriesHitTriggers = !!i5219[18]
  i5218.queriesStartInColliders = !!i5219[19]
  i5218.callbacksOnDisable = !!i5219[20]
  i5218.reuseCollisionCallbacks = !!i5219[21]
  i5218.autoSyncTransforms = !!i5219[22]
  var i5221 = i5219[23]
  var i5220 = []
  for(var i = 0; i < i5221.length; i += 1) {
    i5220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5221[i + 0]) );
  }
  i5218.collisionMatrix = i5220
  return i5218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5225 = data
  i5224.enabled = !!i5225[0]
  i5224.layerId = i5225[1]
  i5224.otherLayerId = i5225[2]
  return i5224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5227 = data
  var i5229 = i5227[0]
  var i5228 = []
  for(var i = 0; i < i5229.length; i += 1) {
    i5228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5229[i + 0]) );
  }
  i5226.qualityLevels = i5228
  var i5231 = i5227[1]
  var i5230 = []
  for(var i = 0; i < i5231.length; i += 1) {
    i5230.push( i5231[i + 0] );
  }
  i5226.names = i5230
  i5226.shadows = i5227[2]
  i5226.anisotropicFiltering = i5227[3]
  i5226.antiAliasing = i5227[4]
  i5226.lodBias = i5227[5]
  i5226.shadowCascades = i5227[6]
  i5226.shadowDistance = i5227[7]
  i5226.shadowmaskMode = i5227[8]
  i5226.shadowProjection = i5227[9]
  i5226.shadowResolution = i5227[10]
  i5226.softParticles = !!i5227[11]
  i5226.softVegetation = !!i5227[12]
  i5226.activeColorSpace = i5227[13]
  i5226.desiredColorSpace = i5227[14]
  i5226.masterTextureLimit = i5227[15]
  i5226.maxQueuedFrames = i5227[16]
  i5226.particleRaycastBudget = i5227[17]
  i5226.pixelLightCount = i5227[18]
  i5226.realtimeReflectionProbes = !!i5227[19]
  i5226.shadowCascade2Split = i5227[20]
  i5226.shadowCascade4Split = new pc.Vec3( i5227[21], i5227[22], i5227[23] )
  i5226.streamingMipmapsActive = !!i5227[24]
  i5226.vSyncCount = i5227[25]
  i5226.asyncUploadBufferSize = i5227[26]
  i5226.asyncUploadTimeSlice = i5227[27]
  i5226.billboardsFaceCameraPosition = !!i5227[28]
  i5226.shadowNearPlaneOffset = i5227[29]
  i5226.streamingMipmapsMemoryBudget = i5227[30]
  i5226.maximumLODLevel = i5227[31]
  i5226.streamingMipmapsAddAllCameras = !!i5227[32]
  i5226.streamingMipmapsMaxLevelReduction = i5227[33]
  i5226.streamingMipmapsRenderersPerFrame = i5227[34]
  i5226.resolutionScalingFixedDPIFactor = i5227[35]
  i5226.streamingMipmapsMaxFileIORequests = i5227[36]
  i5226.currentQualityLevel = i5227[37]
  return i5226
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5234 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5235 = data
  i5234.xPlacement = i5235[0]
  i5234.yPlacement = i5235[1]
  i5234.xAdvance = i5235[2]
  i5234.yAdvance = i5235[3]
  return i5234
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[12],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[12],"77":[78],"79":[80],"81":[80],"19":[2],"82":[2],"83":[84],"85":[86],"87":[84],"88":[2],"89":[2],"21":[19],"6":[3,2],"90":[2],"20":[19],"30":[2],"91":[2],"92":[2],"93":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[3,2],"100":[2],"101":[2],"102":[2],"103":[2],"104":[3,2],"105":[2],"106":[35],"107":[35],"36":[35],"108":[35],"109":[12],"110":[12],"111":[112],"113":[12],"114":[2],"115":[78,2],"17":[2,3],"116":[2],"117":[3,2],"118":[78],"119":[3,2],"120":[2],"121":[84]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","TMPro.TMP_FontAsset","UnityEngine.Material","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 09:16:23";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Juice";

Deserializers.lunaAppID = "31439";

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

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.Playble";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "908bf18d-6980-491e-81fd-ec43f81367de";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

