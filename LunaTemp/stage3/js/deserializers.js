var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.JointSpring' )
  var i1579 = data
  i1578.spring = i1579[0]
  i1578.damper = i1579[1]
  i1578.targetPosition = i1579[2]
  return i1578
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1580 = root || request.c( 'UnityEngine.JointMotor' )
  var i1581 = data
  i1580.m_TargetVelocity = i1581[0]
  i1580.m_Force = i1581[1]
  i1580.m_FreeSpin = i1581[2]
  return i1580
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.JointLimits' )
  var i1583 = data
  i1582.m_Min = i1583[0]
  i1582.m_Max = i1583[1]
  i1582.m_Bounciness = i1583[2]
  i1582.m_BounceMinVelocity = i1583[3]
  i1582.m_ContactDistance = i1583[4]
  i1582.minBounce = i1583[5]
  i1582.maxBounce = i1583[6]
  return i1582
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.JointDrive' )
  var i1585 = data
  i1584.m_PositionSpring = i1585[0]
  i1584.m_PositionDamper = i1585[1]
  i1584.m_MaximumForce = i1585[2]
  i1584.m_UseAcceleration = i1585[3]
  return i1584
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1587 = data
  i1586.m_Spring = i1587[0]
  i1586.m_Damper = i1587[1]
  return i1586
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1589 = data
  i1588.m_Limit = i1589[0]
  i1588.m_Bounciness = i1589[1]
  i1588.m_ContactDistance = i1589[2]
  return i1588
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1591 = data
  i1590.m_ExtremumSlip = i1591[0]
  i1590.m_ExtremumValue = i1591[1]
  i1590.m_AsymptoteSlip = i1591[2]
  i1590.m_AsymptoteValue = i1591[3]
  i1590.m_Stiffness = i1591[4]
  return i1590
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1593 = data
  i1592.m_LowerAngle = i1593[0]
  i1592.m_UpperAngle = i1593[1]
  return i1592
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1594 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1595 = data
  i1594.m_MotorSpeed = i1595[0]
  i1594.m_MaximumMotorTorque = i1595[1]
  return i1594
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1597 = data
  i1596.m_DampingRatio = i1597[0]
  i1596.m_Frequency = i1597[1]
  i1596.m_Angle = i1597[2]
  return i1596
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1598 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1599 = data
  i1598.m_LowerTranslation = i1599[0]
  i1598.m_UpperTranslation = i1599[1]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1601 = data
  i1600.name = i1601[0]
  i1600.width = i1601[1]
  i1600.height = i1601[2]
  i1600.mipmapCount = i1601[3]
  i1600.anisoLevel = i1601[4]
  i1600.filterMode = i1601[5]
  i1600.hdr = !!i1601[6]
  i1600.format = i1601[7]
  i1600.wrapMode = i1601[8]
  i1600.alphaIsTransparency = !!i1601[9]
  i1600.alphaSource = i1601[10]
  i1600.graphicsFormat = i1601[11]
  i1600.sRGBTexture = !!i1601[12]
  i1600.desiredColorSpace = i1601[13]
  i1600.wrapU = i1601[14]
  i1600.wrapV = i1601[15]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1602 = root || new pc.UnityMaterial()
  var i1603 = data
  i1602.name = i1603[0]
  request.r(i1603[1], i1603[2], 0, i1602, 'shader')
  i1602.renderQueue = i1603[3]
  i1602.enableInstancing = !!i1603[4]
  var i1605 = i1603[5]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1605[i + 0]) );
  }
  i1602.floatParameters = i1604
  var i1607 = i1603[6]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1607[i + 0]) );
  }
  i1602.colorParameters = i1606
  var i1609 = i1603[7]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1609[i + 0]) );
  }
  i1602.vectorParameters = i1608
  var i1611 = i1603[8]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1611[i + 0]) );
  }
  i1602.textureParameters = i1610
  var i1613 = i1603[9]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1613[i + 0]) );
  }
  i1602.materialFlags = i1612
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1617 = data
  i1616.name = i1617[0]
  i1616.value = i1617[1]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1621 = data
  i1620.name = i1621[0]
  i1620.value = new pc.Color(i1621[1], i1621[2], i1621[3], i1621[4])
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1625 = data
  i1624.name = i1625[0]
  i1624.value = new pc.Vec4( i1625[1], i1625[2], i1625[3], i1625[4] )
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1629 = data
  i1628.name = i1629[0]
  request.r(i1629[1], i1629[2], 0, i1628, 'value')
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1633 = data
  i1632.name = i1633[0]
  i1632.enabled = !!i1633[1]
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1635 = data
  i1634.pivot = new pc.Vec2( i1635[0], i1635[1] )
  i1634.anchorMin = new pc.Vec2( i1635[2], i1635[3] )
  i1634.anchorMax = new pc.Vec2( i1635[4], i1635[5] )
  i1634.sizeDelta = new pc.Vec2( i1635[6], i1635[7] )
  i1634.anchoredPosition3D = new pc.Vec3( i1635[8], i1635[9], i1635[10] )
  i1634.rotation = new pc.Quat(i1635[11], i1635[12], i1635[13], i1635[14])
  i1634.scale = new pc.Vec3( i1635[15], i1635[16], i1635[17] )
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1637 = data
  i1636.cullTransparentMesh = !!i1637[0]
  return i1636
}

Deserializers["People"] = function (request, data, root) {
  var i1638 = root || request.c( 'People' )
  var i1639 = data
  request.r(i1639[0], i1639[1], 0, i1638, '_readyImage')
  request.r(i1639[2], i1639[3], 0, i1638, '_additiveImage1')
  request.r(i1639[4], i1639[5], 0, i1638, '_additiveImage2')
  request.r(i1639[6], i1639[7], 0, i1638, '_endPoint')
  request.r(i1639[8], i1639[9], 0, i1638, 'Bank')
  request.r(i1639[10], i1639[11], 0, i1638, '_sizeText')
  i1638.CupType = i1639[12]
  i1638.JuiceType = i1639[13]
  i1638.AdditiveType1 = i1639[14]
  i1638.AdditiveType2 = i1639[15]
  request.r(i1639[16], i1639[17], 0, i1638, '_finishSound')
  request.r(i1639[18], i1639[19], 0, i1638, '_happySlider')
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'clip')
  request.r(i1641[2], i1641[3], 0, i1640, 'outputAudioMixerGroup')
  i1640.playOnAwake = !!i1641[4]
  i1640.loop = !!i1641[5]
  i1640.time = i1641[6]
  i1640.volume = i1641[7]
  i1640.pitch = i1641[8]
  i1640.enabled = !!i1641[9]
  return i1640
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1642 = root || request.c( 'UnityEngine.UI.Image' )
  var i1643 = data
  request.r(i1643[0], i1643[1], 0, i1642, 'm_Sprite')
  i1642.m_Type = i1643[2]
  i1642.m_PreserveAspect = !!i1643[3]
  i1642.m_FillCenter = !!i1643[4]
  i1642.m_FillMethod = i1643[5]
  i1642.m_FillAmount = i1643[6]
  i1642.m_FillClockwise = !!i1643[7]
  i1642.m_FillOrigin = i1643[8]
  i1642.m_UseSpriteMesh = !!i1643[9]
  i1642.m_PixelsPerUnitMultiplier = i1643[10]
  request.r(i1643[11], i1643[12], 0, i1642, 'm_Material')
  i1642.m_Maskable = !!i1643[13]
  i1642.m_Color = new pc.Color(i1643[14], i1643[15], i1643[16], i1643[17])
  i1642.m_RaycastTarget = !!i1643[18]
  i1642.m_RaycastPadding = new pc.Vec4( i1643[19], i1643[20], i1643[21], i1643[22] )
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1645 = data
  i1644.name = i1645[0]
  i1644.tagId = i1645[1]
  i1644.enabled = !!i1645[2]
  i1644.isStatic = !!i1645[3]
  i1644.layer = i1645[4]
  return i1644
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.UI.Button' )
  var i1647 = data
  i1646.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1647[0], i1646.m_OnClick)
  i1646.m_Navigation = request.d('UnityEngine.UI.Navigation', i1647[1], i1646.m_Navigation)
  i1646.m_Transition = i1647[2]
  i1646.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1647[3], i1646.m_Colors)
  i1646.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1647[4], i1646.m_SpriteState)
  i1646.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1647[5], i1646.m_AnimationTriggers)
  i1646.m_Interactable = !!i1647[6]
  request.r(i1647[7], i1647[8], 0, i1646, 'm_TargetGraphic')
  return i1646
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1648 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1649 = data
  i1648.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1649[0], i1648.m_PersistentCalls)
  return i1648
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1650 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1651 = data
  var i1653 = i1651[0]
  var i1652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.add(request.d('UnityEngine.Events.PersistentCall', i1653[i + 0]));
  }
  i1650.m_Calls = i1652
  return i1650
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1656 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1657 = data
  request.r(i1657[0], i1657[1], 0, i1656, 'm_Target')
  i1656.m_TargetAssemblyTypeName = i1657[2]
  i1656.m_MethodName = i1657[3]
  i1656.m_Mode = i1657[4]
  i1656.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1657[5], i1656.m_Arguments)
  i1656.m_CallState = i1657[6]
  return i1656
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1659 = data
  request.r(i1659[0], i1659[1], 0, i1658, 'm_ObjectArgument')
  i1658.m_ObjectArgumentAssemblyTypeName = i1659[2]
  i1658.m_IntArgument = i1659[3]
  i1658.m_FloatArgument = i1659[4]
  i1658.m_StringArgument = i1659[5]
  i1658.m_BoolArgument = !!i1659[6]
  return i1658
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1661 = data
  i1660.m_Mode = i1661[0]
  i1660.m_WrapAround = !!i1661[1]
  request.r(i1661[2], i1661[3], 0, i1660, 'm_SelectOnUp')
  request.r(i1661[4], i1661[5], 0, i1660, 'm_SelectOnDown')
  request.r(i1661[6], i1661[7], 0, i1660, 'm_SelectOnLeft')
  request.r(i1661[8], i1661[9], 0, i1660, 'm_SelectOnRight')
  return i1660
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1663 = data
  i1662.m_NormalColor = new pc.Color(i1663[0], i1663[1], i1663[2], i1663[3])
  i1662.m_HighlightedColor = new pc.Color(i1663[4], i1663[5], i1663[6], i1663[7])
  i1662.m_PressedColor = new pc.Color(i1663[8], i1663[9], i1663[10], i1663[11])
  i1662.m_SelectedColor = new pc.Color(i1663[12], i1663[13], i1663[14], i1663[15])
  i1662.m_DisabledColor = new pc.Color(i1663[16], i1663[17], i1663[18], i1663[19])
  i1662.m_ColorMultiplier = i1663[20]
  i1662.m_FadeDuration = i1663[21]
  return i1662
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1665 = data
  request.r(i1665[0], i1665[1], 0, i1664, 'm_HighlightedSprite')
  request.r(i1665[2], i1665[3], 0, i1664, 'm_PressedSprite')
  request.r(i1665[4], i1665[5], 0, i1664, 'm_SelectedSprite')
  request.r(i1665[6], i1665[7], 0, i1664, 'm_DisabledSprite')
  return i1664
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1666 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1667 = data
  i1666.m_NormalTrigger = i1667[0]
  i1666.m_HighlightedTrigger = i1667[1]
  i1666.m_PressedTrigger = i1667[2]
  i1666.m_SelectedTrigger = i1667[3]
  i1666.m_DisabledTrigger = i1667[4]
  return i1666
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1668 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1669 = data
  i1668.m_hasFontAssetChanged = !!i1669[0]
  request.r(i1669[1], i1669[2], 0, i1668, 'm_baseMaterial')
  i1668.m_maskOffset = new pc.Vec4( i1669[3], i1669[4], i1669[5], i1669[6] )
  i1668.m_text = i1669[7]
  i1668.m_isRightToLeft = !!i1669[8]
  request.r(i1669[9], i1669[10], 0, i1668, 'm_fontAsset')
  request.r(i1669[11], i1669[12], 0, i1668, 'm_sharedMaterial')
  var i1671 = i1669[13]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 2) {
  request.r(i1671[i + 0], i1671[i + 1], 2, i1670, '')
  }
  i1668.m_fontSharedMaterials = i1670
  request.r(i1669[14], i1669[15], 0, i1668, 'm_fontMaterial')
  var i1673 = i1669[16]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 2) {
  request.r(i1673[i + 0], i1673[i + 1], 2, i1672, '')
  }
  i1668.m_fontMaterials = i1672
  i1668.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1669[17], i1669[18], i1669[19], i1669[20])
  i1668.m_fontColor = new pc.Color(i1669[21], i1669[22], i1669[23], i1669[24])
  i1668.m_enableVertexGradient = !!i1669[25]
  i1668.m_colorMode = i1669[26]
  i1668.m_fontColorGradient = request.d('TMPro.VertexGradient', i1669[27], i1668.m_fontColorGradient)
  request.r(i1669[28], i1669[29], 0, i1668, 'm_fontColorGradientPreset')
  request.r(i1669[30], i1669[31], 0, i1668, 'm_spriteAsset')
  i1668.m_tintAllSprites = !!i1669[32]
  request.r(i1669[33], i1669[34], 0, i1668, 'm_StyleSheet')
  i1668.m_TextStyleHashCode = i1669[35]
  i1668.m_overrideHtmlColors = !!i1669[36]
  i1668.m_faceColor = UnityEngine.Color32.ConstructColor(i1669[37], i1669[38], i1669[39], i1669[40])
  i1668.m_fontSize = i1669[41]
  i1668.m_fontSizeBase = i1669[42]
  i1668.m_fontWeight = i1669[43]
  i1668.m_enableAutoSizing = !!i1669[44]
  i1668.m_fontSizeMin = i1669[45]
  i1668.m_fontSizeMax = i1669[46]
  i1668.m_fontStyle = i1669[47]
  i1668.m_HorizontalAlignment = i1669[48]
  i1668.m_VerticalAlignment = i1669[49]
  i1668.m_textAlignment = i1669[50]
  i1668.m_characterSpacing = i1669[51]
  i1668.m_wordSpacing = i1669[52]
  i1668.m_lineSpacing = i1669[53]
  i1668.m_lineSpacingMax = i1669[54]
  i1668.m_paragraphSpacing = i1669[55]
  i1668.m_charWidthMaxAdj = i1669[56]
  i1668.m_enableWordWrapping = !!i1669[57]
  i1668.m_wordWrappingRatios = i1669[58]
  i1668.m_overflowMode = i1669[59]
  request.r(i1669[60], i1669[61], 0, i1668, 'm_linkedTextComponent')
  request.r(i1669[62], i1669[63], 0, i1668, 'parentLinkedComponent')
  i1668.m_enableKerning = !!i1669[64]
  i1668.m_enableExtraPadding = !!i1669[65]
  i1668.checkPaddingRequired = !!i1669[66]
  i1668.m_isRichText = !!i1669[67]
  i1668.m_parseCtrlCharacters = !!i1669[68]
  i1668.m_isOrthographic = !!i1669[69]
  i1668.m_isCullingEnabled = !!i1669[70]
  i1668.m_horizontalMapping = i1669[71]
  i1668.m_verticalMapping = i1669[72]
  i1668.m_uvLineOffset = i1669[73]
  i1668.m_geometrySortingOrder = i1669[74]
  i1668.m_IsTextObjectScaleStatic = !!i1669[75]
  i1668.m_VertexBufferAutoSizeReduction = !!i1669[76]
  i1668.m_useMaxVisibleDescender = !!i1669[77]
  i1668.m_pageToDisplay = i1669[78]
  i1668.m_margin = new pc.Vec4( i1669[79], i1669[80], i1669[81], i1669[82] )
  i1668.m_isUsingLegacyAnimationComponent = !!i1669[83]
  i1668.m_isVolumetricText = !!i1669[84]
  request.r(i1669[85], i1669[86], 0, i1668, 'm_Material')
  i1668.m_Maskable = !!i1669[87]
  i1668.m_Color = new pc.Color(i1669[88], i1669[89], i1669[90], i1669[91])
  i1668.m_RaycastTarget = !!i1669[92]
  i1668.m_RaycastPadding = new pc.Vec4( i1669[93], i1669[94], i1669[95], i1669[96] )
  return i1668
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1676 = root || request.c( 'TMPro.VertexGradient' )
  var i1677 = data
  i1676.topLeft = new pc.Color(i1677[0], i1677[1], i1677[2], i1677[3])
  i1676.topRight = new pc.Color(i1677[4], i1677[5], i1677[6], i1677[7])
  i1676.bottomLeft = new pc.Color(i1677[8], i1677[9], i1677[10], i1677[11])
  i1676.bottomRight = new pc.Color(i1677[12], i1677[13], i1677[14], i1677[15])
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1679 = data
  i1678.name = i1679[0]
  i1678.index = i1679[1]
  i1678.startup = !!i1679[2]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1681 = data
  i1680.position = new pc.Vec3( i1681[0], i1681[1], i1681[2] )
  i1680.scale = new pc.Vec3( i1681[3], i1681[4], i1681[5] )
  i1680.rotation = new pc.Quat(i1681[6], i1681[7], i1681[8], i1681[9])
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1683 = data
  i1682.enabled = !!i1683[0]
  i1682.aspect = i1683[1]
  i1682.orthographic = !!i1683[2]
  i1682.orthographicSize = i1683[3]
  i1682.backgroundColor = new pc.Color(i1683[4], i1683[5], i1683[6], i1683[7])
  i1682.nearClipPlane = i1683[8]
  i1682.farClipPlane = i1683[9]
  i1682.fieldOfView = i1683[10]
  i1682.depth = i1683[11]
  i1682.clearFlags = i1683[12]
  i1682.cullingMask = i1683[13]
  i1682.rect = i1683[14]
  request.r(i1683[15], i1683[16], 0, i1682, 'targetTexture')
  i1682.usePhysicalProperties = !!i1683[17]
  i1682.focalLength = i1683[18]
  i1682.sensorSize = new pc.Vec2( i1683[19], i1683[20] )
  i1682.lensShift = new pc.Vec2( i1683[21], i1683[22] )
  i1682.gateFit = i1683[23]
  i1682.commandBufferCount = i1683[24]
  i1682.cameraType = i1683[25]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1685 = data
  request.r(i1685[0], i1685[1], 0, i1684, 'animatorController')
  request.r(i1685[2], i1685[3], 0, i1684, 'avatar')
  i1684.updateMode = i1685[4]
  i1684.hasTransformHierarchy = !!i1685[5]
  i1684.applyRootMotion = !!i1685[6]
  var i1687 = i1685[7]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 2) {
  request.r(i1687[i + 0], i1687[i + 1], 2, i1686, '')
  }
  i1684.humanBones = i1686
  i1684.enabled = !!i1685[8]
  return i1684
}

Deserializers["Bank"] = function (request, data, root) {
  var i1690 = root || request.c( 'Bank' )
  var i1691 = data
  request.r(i1691[0], i1691[1], 0, i1690, 'BuyBigCupButton')
  request.r(i1691[2], i1691[3], 0, i1690, 'BigCupButton')
  request.r(i1691[4], i1691[5], 0, i1690, 'MiddleCupButton')
  request.r(i1691[6], i1691[7], 0, i1690, 'MoneyText')
  request.r(i1691[8], i1691[9], 0, i1690, 'Tutorial')
  request.r(i1691[10], i1691[11], 0, i1690, 'BuyAdditiveButton')
  request.r(i1691[12], i1691[13], 0, i1690, 'BuyJuiceButton')
  request.r(i1691[14], i1691[15], 0, i1690, 'JuiceButton1')
  request.r(i1691[16], i1691[17], 0, i1690, 'JuiceButton2')
  request.r(i1691[18], i1691[19], 0, i1690, 'JuiceButton3')
  request.r(i1691[20], i1691[21], 0, i1690, 'Additive1Button')
  request.r(i1691[22], i1691[23], 0, i1690, 'Additive2Button')
  i1690.Money = i1691[24]
  i1690.IsBigCupBuy = !!i1691[25]
  i1690.IsJuiceBuy = !!i1691[26]
  i1690.IsAdditiveBuy = !!i1691[27]
  request.r(i1691[28], i1691[29], 0, i1690, '_buySound')
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1693 = data
  i1692.enabled = !!i1693[0]
  i1692.planeDistance = i1693[1]
  i1692.referencePixelsPerUnit = i1693[2]
  i1692.isFallbackOverlay = !!i1693[3]
  i1692.renderMode = i1693[4]
  i1692.renderOrder = i1693[5]
  i1692.sortingLayerName = i1693[6]
  i1692.sortingOrder = i1693[7]
  i1692.scaleFactor = i1693[8]
  request.r(i1693[9], i1693[10], 0, i1692, 'worldCamera')
  i1692.overrideSorting = !!i1693[11]
  i1692.pixelPerfect = !!i1693[12]
  i1692.targetDisplay = i1693[13]
  i1692.overridePixelPerfect = !!i1693[14]
  return i1692
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1695 = data
  i1694.m_UiScaleMode = i1695[0]
  i1694.m_ReferencePixelsPerUnit = i1695[1]
  i1694.m_ScaleFactor = i1695[2]
  i1694.m_ReferenceResolution = new pc.Vec2( i1695[3], i1695[4] )
  i1694.m_ScreenMatchMode = i1695[5]
  i1694.m_MatchWidthOrHeight = i1695[6]
  i1694.m_PhysicalUnit = i1695[7]
  i1694.m_FallbackScreenDPI = i1695[8]
  i1694.m_DefaultSpriteDPI = i1695[9]
  i1694.m_DynamicPixelsPerUnit = i1695[10]
  i1694.m_PresetInfoIsWorld = !!i1695[11]
  return i1694
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1696 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1697 = data
  i1696.m_IgnoreReversedGraphics = !!i1697[0]
  i1696.m_BlockingObjects = i1697[1]
  i1696.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1697[2] )
  return i1696
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i1698 = root || request.c( 'ImageShiftOnOrientation' )
  var i1699 = data
  var i1701 = i1699[0]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('ItemSwitcherData', i1701[i + 0]) );
  }
  i1698.Items = i1700
  request.r(i1699[1], i1699[2], 0, i1698, '_backHorizontal')
  request.r(i1699[3], i1699[4], 0, i1698, '_backVertical')
  request.r(i1699[5], i1699[6], 0, i1698, '_tableHorizontal')
  request.r(i1699[7], i1699[8], 0, i1698, '_tableVertical')
  i1698.IsDebug = !!i1699[9]
  i1698.CanCopy = !!i1699[10]
  return i1698
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i1704 = root || request.c( 'ItemSwitcherData' )
  var i1705 = data
  request.r(i1705[0], i1705[1], 0, i1704, 'Target')
  i1704.HorizontalAnchoredPosition = new pc.Vec2( i1705[2], i1705[3] )
  i1704.SizeHorizontal = new pc.Vec2( i1705[4], i1705[5] )
  i1704.VerticalAnchoredPosition = new pc.Vec2( i1705[6], i1705[7] )
  i1704.SizeVertical = new pc.Vec2( i1705[8], i1705[9] )
  i1704.MinHorizontal = new pc.Vec2( i1705[10], i1705[11] )
  i1704.MaxHorizontal = new pc.Vec2( i1705[12], i1705[13] )
  i1704.MinVertical = new pc.Vec2( i1705[14], i1705[15] )
  i1704.MaxVertical = new pc.Vec2( i1705[16], i1705[17] )
  i1704.IsAnchored = !!i1705[18]
  i1704.IsDebug = !!i1705[19]
  i1704.CopyHorizontal = !!i1705[20]
  i1704.CopyVertical = !!i1705[21]
  return i1704
}

Deserializers["Point"] = function (request, data, root) {
  var i1706 = root || request.c( 'Point' )
  var i1707 = data
  return i1706
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1708 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1709 = data
  request.r(i1709[0], i1709[1], 0, i1708, 'm_FillRect')
  request.r(i1709[2], i1709[3], 0, i1708, 'm_HandleRect')
  i1708.m_Direction = i1709[4]
  i1708.m_MinValue = i1709[5]
  i1708.m_MaxValue = i1709[6]
  i1708.m_WholeNumbers = !!i1709[7]
  i1708.m_Value = i1709[8]
  i1708.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1709[9], i1708.m_OnValueChanged)
  i1708.m_Navigation = request.d('UnityEngine.UI.Navigation', i1709[10], i1708.m_Navigation)
  i1708.m_Transition = i1709[11]
  i1708.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1709[12], i1708.m_Colors)
  i1708.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1709[13], i1708.m_SpriteState)
  i1708.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1709[14], i1708.m_AnimationTriggers)
  i1708.m_Interactable = !!i1709[15]
  request.r(i1709[16], i1709[17], 0, i1708, 'm_TargetGraphic')
  return i1708
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1710 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1711 = data
  i1710.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1711[0], i1710.m_PersistentCalls)
  return i1710
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i1712 = root || request.c( 'PeopleContainer' )
  var i1713 = data
  var i1715 = i1713[0]
  var i1714 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1715.length; i += 2) {
  request.r(i1715[i + 0], i1715[i + 1], 1, i1714, '')
  }
  i1712.CurrentPeoples = i1714
  var i1717 = i1713[1]
  var i1716 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1717.length; i += 2) {
  request.r(i1717[i + 0], i1717[i + 1], 1, i1716, '')
  }
  i1712._peoples = i1716
  request.r(i1713[2], i1713[3], 0, i1712, '_tutorialPeople')
  request.r(i1713[4], i1713[5], 0, i1712, '_spawnPoint')
  request.r(i1713[6], i1713[7], 0, i1712, '_point1')
  request.r(i1713[8], i1713[9], 0, i1712, '_point2')
  request.r(i1713[10], i1713[11], 0, i1712, '_endPoint')
  request.r(i1713[12], i1713[13], 0, i1712, '_juiceConfig')
  request.r(i1713[14], i1713[15], 0, i1712, '_tutorial')
  return i1712
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1720 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1721 = data
  i1720.m_HorizontalFit = i1721[0]
  i1720.m_VerticalFit = i1721[1]
  return i1720
}

Deserializers["BackImage"] = function (request, data, root) {
  var i1722 = root || request.c( 'BackImage' )
  var i1723 = data
  return i1722
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i1724 = root || request.c( 'AheadImage' )
  var i1725 = data
  return i1724
}

Deserializers["Order"] = function (request, data, root) {
  var i1726 = root || request.c( 'Order' )
  var i1727 = data
  request.r(i1727[0], i1727[1], 0, i1726, '_juiceAnimator')
  request.r(i1727[2], i1727[3], 0, i1726, '_cupAnimator')
  request.r(i1727[4], i1727[5], 0, i1726, '_canvasAnimator')
  i1726.CupType = i1727[6]
  i1726.JuiceType = i1727[7]
  i1726.AdditiveType1 = i1727[8]
  i1726.AdditiveType2 = i1727[9]
  i1726.IsFree = !!i1727[10]
  i1726.IsSpriteReady = !!i1727[11]
  i1726.IsCupReady = !!i1727[12]
  i1726.IsJuiceReady = !!i1727[13]
  i1726.IsPouring = !!i1727[14]
  request.r(i1727[15], i1727[16], 0, i1726, '_iceButton')
  request.r(i1727[17], i1727[18], 0, i1726, '_grassButton')
  request.r(i1727[19], i1727[20], 0, i1726, '_juiceBallsButton')
  request.r(i1727[21], i1727[22], 0, i1726, '_strawButton')
  request.r(i1727[23], i1727[24], 0, i1726, '_bigCupButton')
  request.r(i1727[25], i1727[26], 0, i1726, '_middleCupButton')
  request.r(i1727[27], i1727[28], 0, i1726, '_smallCupButton')
  request.r(i1727[29], i1727[30], 0, i1726, '_appleButton')
  request.r(i1727[31], i1727[32], 0, i1726, '_orangeButton')
  request.r(i1727[33], i1727[34], 0, i1726, '_multifruitButton')
  request.r(i1727[35], i1727[36], 0, i1726, '_tomatoButton')
  request.r(i1727[37], i1727[38], 0, i1726, '_cherryButton')
  request.r(i1727[39], i1727[40], 0, i1726, '_smallRawJuiceImage')
  request.r(i1727[41], i1727[42], 0, i1726, '_middleRawJuiceImage')
  request.r(i1727[43], i1727[44], 0, i1726, '_bigRawJuiceImage')
  request.r(i1727[45], i1727[46], 0, i1726, '_smallReadyJuiceImage')
  request.r(i1727[47], i1727[48], 0, i1726, '_middleReadyJuiceImage')
  request.r(i1727[49], i1727[50], 0, i1726, '_bigReadyJuiceImage')
  request.r(i1727[51], i1727[52], 0, i1726, '_backImage')
  request.r(i1727[53], i1727[54], 0, i1726, '_aheadImage')
  request.r(i1727[55], i1727[56], 0, i1726, '_config')
  request.r(i1727[57], i1727[58], 0, i1726, '_takeOrderButton')
  request.r(i1727[59], i1727[60], 0, i1726, '_peopleContainer')
  request.r(i1727[61], i1727[62], 0, i1726, '_tutorial')
  request.r(i1727[63], i1727[64], 0, i1726, '_bText')
  request.r(i1727[65], i1727[66], 0, i1726, '_mText')
  request.r(i1727[67], i1727[68], 0, i1726, '_sText')
  request.r(i1727[69], i1727[70], 0, i1726, '_garbageButton')
  request.r(i1727[71], i1727[72], 0, i1726, '_clickSound')
  request.r(i1727[73], i1727[74], 0, i1726, '_juiceSound')
  return i1726
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i1728 = root || request.c( 'Tutorial' )
  var i1729 = data
  i1728.IsTutorial = !!i1729[0]
  request.r(i1729[1], i1729[2], 0, i1728, 'Finger1')
  request.r(i1729[3], i1729[4], 0, i1728, 'Finger2')
  request.r(i1729[5], i1729[6], 0, i1728, 'Finger3')
  request.r(i1729[7], i1729[8], 0, i1728, 'Finger4')
  request.r(i1729[9], i1729[10], 0, i1728, 'Finger5')
  request.r(i1729[11], i1729[12], 0, i1728, 'BuyBigCupFinger')
  request.r(i1729[13], i1729[14], 0, i1728, 'BuyJuiceFinger')
  request.r(i1729[15], i1729[16], 0, i1728, 'SmallCupButton')
  request.r(i1729[17], i1729[18], 0, i1728, 'JuiceButton')
  request.r(i1729[19], i1729[20], 0, i1728, 'StrawButton')
  request.r(i1729[21], i1729[22], 0, i1728, 'AdditiveButton')
  request.r(i1729[23], i1729[24], 0, i1728, 'ReadyButton')
  var i1731 = i1729[25]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 2) {
  request.r(i1731[i + 0], i1731[i + 1], 2, i1730, '')
  }
  i1728.Buttons = i1730
  request.r(i1729[26], i1729[27], 0, i1728, 'Bank')
  return i1728
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i1734 = root || request.c( 'SoundSwitcher' )
  var i1735 = data
  request.r(i1735[0], i1735[1], 0, i1734, '_onImage')
  request.r(i1735[2], i1735[3], 0, i1734, '_offImage')
  return i1734
}

Deserializers["ClickCta"] = function (request, data, root) {
  var i1736 = root || request.c( 'ClickCta' )
  var i1737 = data
  return i1736
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1738 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1739 = data
  request.r(i1739[0], i1739[1], 0, i1738, 'm_FirstSelected')
  i1738.m_sendNavigationEvents = !!i1739[2]
  i1738.m_DragThreshold = i1739[3]
  return i1738
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1740 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1741 = data
  i1740.m_HorizontalAxis = i1741[0]
  i1740.m_VerticalAxis = i1741[1]
  i1740.m_SubmitButton = i1741[2]
  i1740.m_CancelButton = i1741[3]
  i1740.m_InputActionsPerSecond = i1741[4]
  i1740.m_RepeatDelay = i1741[5]
  i1740.m_ForceModuleActive = !!i1741[6]
  i1740.m_SendPointerHoverToParent = !!i1741[7]
  return i1740
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i1742 = root || request.c( 'JuiceConfig' )
  var i1743 = data
  request.r(i1743[0], i1743[1], 0, i1742, 'EntityBigCup')
  request.r(i1743[2], i1743[3], 0, i1742, 'TomatoBigCup')
  request.r(i1743[4], i1743[5], 0, i1742, 'AppleBigCup')
  request.r(i1743[6], i1743[7], 0, i1742, 'OrangeBigCup')
  request.r(i1743[8], i1743[9], 0, i1742, 'CherryBigCup')
  request.r(i1743[10], i1743[11], 0, i1742, 'MultifruitBigCup')
  request.r(i1743[12], i1743[13], 0, i1742, 'TomatoBigStrawCup')
  request.r(i1743[14], i1743[15], 0, i1742, 'MultifruitBigStrawCup')
  request.r(i1743[16], i1743[17], 0, i1742, 'AppleBigStrawCup')
  request.r(i1743[18], i1743[19], 0, i1742, 'OrangeBigStrawCup')
  request.r(i1743[20], i1743[21], 0, i1742, 'CherryBigStrawCup')
  request.r(i1743[22], i1743[23], 0, i1742, 'MultifruitBigBallsCup')
  request.r(i1743[24], i1743[25], 0, i1742, 'TomatoBigBallsCup')
  request.r(i1743[26], i1743[27], 0, i1742, 'AppleBigBallsCup')
  request.r(i1743[28], i1743[29], 0, i1742, 'OrangeBigBallsCup')
  request.r(i1743[30], i1743[31], 0, i1742, 'CherryBigBallsCup')
  request.r(i1743[32], i1743[33], 0, i1742, 'EntityMiddleCup')
  request.r(i1743[34], i1743[35], 0, i1742, 'TomatoMiddleCup')
  request.r(i1743[36], i1743[37], 0, i1742, 'AppleMiddleCup')
  request.r(i1743[38], i1743[39], 0, i1742, 'OrangeMiddleCup')
  request.r(i1743[40], i1743[41], 0, i1742, 'CherryMiddleCup')
  request.r(i1743[42], i1743[43], 0, i1742, 'MultifruitMiddleCup')
  request.r(i1743[44], i1743[45], 0, i1742, 'TomatoMiddleStrawCup')
  request.r(i1743[46], i1743[47], 0, i1742, 'MultifruitMiddleStrawCup')
  request.r(i1743[48], i1743[49], 0, i1742, 'AppleMiddleStrawCup')
  request.r(i1743[50], i1743[51], 0, i1742, 'OrangeMiddleStrawCup')
  request.r(i1743[52], i1743[53], 0, i1742, 'CherryMiddleStrawCup')
  request.r(i1743[54], i1743[55], 0, i1742, 'MultifruitMiddleBallsCup')
  request.r(i1743[56], i1743[57], 0, i1742, 'TomatoMiddleBallsCup')
  request.r(i1743[58], i1743[59], 0, i1742, 'AppleMiddleBallsCup')
  request.r(i1743[60], i1743[61], 0, i1742, 'OrangeMiddleBallsCup')
  request.r(i1743[62], i1743[63], 0, i1742, 'CherryMiddleBallsCup')
  request.r(i1743[64], i1743[65], 0, i1742, 'EntitySmallCup')
  request.r(i1743[66], i1743[67], 0, i1742, 'TomatoSmallCup')
  request.r(i1743[68], i1743[69], 0, i1742, 'AppleSmallCup')
  request.r(i1743[70], i1743[71], 0, i1742, 'OrangeSmallCup')
  request.r(i1743[72], i1743[73], 0, i1742, 'CherrySmallCup')
  request.r(i1743[74], i1743[75], 0, i1742, 'MultifruitSmallCup')
  request.r(i1743[76], i1743[77], 0, i1742, 'TomatoSmallStrawCup')
  request.r(i1743[78], i1743[79], 0, i1742, 'AppleSmallStrawCup')
  request.r(i1743[80], i1743[81], 0, i1742, 'OrangeSmallStrawCup')
  request.r(i1743[82], i1743[83], 0, i1742, 'CherrySmallStrawCup')
  request.r(i1743[84], i1743[85], 0, i1742, 'MultifruitSmallStrawCup')
  request.r(i1743[86], i1743[87], 0, i1742, 'AppleSmallBallsCup')
  request.r(i1743[88], i1743[89], 0, i1742, 'TomatoSmallBallsCup')
  request.r(i1743[90], i1743[91], 0, i1742, 'OrangeSmallBallsCup')
  request.r(i1743[92], i1743[93], 0, i1742, 'CherrySmallBallsCup')
  request.r(i1743[94], i1743[95], 0, i1742, 'MultifruitSmallBallsCup')
  request.r(i1743[96], i1743[97], 0, i1742, 'JuiceBallAdditive')
  request.r(i1743[98], i1743[99], 0, i1742, 'IceAdditive')
  request.r(i1743[100], i1743[101], 0, i1742, 'GrassAdditive')
  return i1742
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i1744 = root || request.c( 'TouchIdleTimer' )
  var i1745 = data
  return i1744
}

Deserializers["Helper"] = function (request, data, root) {
  var i1746 = root || request.c( 'Helper' )
  var i1747 = data
  request.r(i1747[0], i1747[1], 0, i1746, '_smallCupFinger')
  request.r(i1747[2], i1747[3], 0, i1746, '_middleCupFinger')
  request.r(i1747[4], i1747[5], 0, i1746, '_bigCupFinger')
  request.r(i1747[6], i1747[7], 0, i1746, '_iceFinger')
  request.r(i1747[8], i1747[9], 0, i1746, '_grassFinger')
  request.r(i1747[10], i1747[11], 0, i1746, '_juiceballFinger')
  request.r(i1747[12], i1747[13], 0, i1746, '_appleFinger')
  request.r(i1747[14], i1747[15], 0, i1746, '_cherryFinger')
  request.r(i1747[16], i1747[17], 0, i1746, '_orangeFinger')
  request.r(i1747[18], i1747[19], 0, i1746, '_multifruitFinger')
  request.r(i1747[20], i1747[21], 0, i1746, '_tomatoFinger')
  request.r(i1747[22], i1747[23], 0, i1746, '_strawFinger')
  request.r(i1747[24], i1747[25], 0, i1746, '_readyFinger')
  var i1749 = i1747[26]
  var i1748 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1749.length; i += 2) {
  request.r(i1749[i + 0], i1749[i + 1], 1, i1748, '')
  }
  i1746._juiseButtons = i1748
  request.r(i1747[27], i1747[28], 0, i1746, '_peoples')
  request.r(i1747[29], i1747[30], 0, i1746, '_tutorial')
  request.r(i1747[31], i1747[32], 0, i1746, '_order')
  request.r(i1747[33], i1747[34], 0, i1746, '_strawButton')
  request.r(i1747[35], i1747[36], 0, i1746, '_bigCupButton')
  request.r(i1747[37], i1747[38], 0, i1746, '_middleCupButton')
  request.r(i1747[39], i1747[40], 0, i1746, '_smallCupButton')
  request.r(i1747[41], i1747[42], 0, i1746, '_readyButton')
  request.r(i1747[43], i1747[44], 0, i1746, '_grassButton')
  request.r(i1747[45], i1747[46], 0, i1746, '_juiceballButton')
  request.r(i1747[47], i1747[48], 0, i1746, '_iceButton')
  request.r(i1747[49], i1747[50], 0, i1746, '_touchIdleTimer')
  request.r(i1747[51], i1747[52], 0, i1746, '_finalScreen')
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1753 = data
  i1752.ambientIntensity = i1753[0]
  i1752.reflectionIntensity = i1753[1]
  i1752.ambientMode = i1753[2]
  i1752.ambientLight = new pc.Color(i1753[3], i1753[4], i1753[5], i1753[6])
  i1752.ambientSkyColor = new pc.Color(i1753[7], i1753[8], i1753[9], i1753[10])
  i1752.ambientGroundColor = new pc.Color(i1753[11], i1753[12], i1753[13], i1753[14])
  i1752.ambientEquatorColor = new pc.Color(i1753[15], i1753[16], i1753[17], i1753[18])
  i1752.fogColor = new pc.Color(i1753[19], i1753[20], i1753[21], i1753[22])
  i1752.fogEndDistance = i1753[23]
  i1752.fogStartDistance = i1753[24]
  i1752.fogDensity = i1753[25]
  i1752.fog = !!i1753[26]
  request.r(i1753[27], i1753[28], 0, i1752, 'skybox')
  i1752.fogMode = i1753[29]
  var i1755 = i1753[30]
  var i1754 = []
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1755[i + 0]) );
  }
  i1752.lightmaps = i1754
  i1752.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1753[31], i1752.lightProbes)
  i1752.lightmapsMode = i1753[32]
  i1752.mixedBakeMode = i1753[33]
  i1752.environmentLightingMode = i1753[34]
  i1752.ambientProbe = new pc.SphericalHarmonicsL2(i1753[35])
  i1752.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1753[36])
  i1752.useReferenceAmbientProbe = !!i1753[37]
  request.r(i1753[38], i1753[39], 0, i1752, 'customReflection')
  request.r(i1753[40], i1753[41], 0, i1752, 'defaultReflection')
  i1752.defaultReflectionMode = i1753[42]
  i1752.defaultReflectionResolution = i1753[43]
  i1752.sunLightObjectId = i1753[44]
  i1752.pixelLightCount = i1753[45]
  i1752.defaultReflectionHDR = !!i1753[46]
  i1752.hasLightDataAsset = !!i1753[47]
  i1752.hasManualGenerate = !!i1753[48]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1759 = data
  request.r(i1759[0], i1759[1], 0, i1758, 'lightmapColor')
  request.r(i1759[2], i1759[3], 0, i1758, 'lightmapDirection')
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1760 = root || new UnityEngine.LightProbes()
  var i1761 = data
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1769 = data
  var i1771 = i1769[0]
  var i1770 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1771[i + 0]));
  }
  i1768.ShaderCompilationErrors = i1770
  i1768.name = i1769[1]
  i1768.guid = i1769[2]
  var i1773 = i1769[3]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( i1773[i + 0] );
  }
  i1768.shaderDefinedKeywords = i1772
  var i1775 = i1769[4]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1775[i + 0]) );
  }
  i1768.passes = i1774
  var i1777 = i1769[5]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1777[i + 0]) );
  }
  i1768.usePasses = i1776
  var i1779 = i1769[6]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1779[i + 0]) );
  }
  i1768.defaultParameterValues = i1778
  request.r(i1769[7], i1769[8], 0, i1768, 'unityFallbackShader')
  i1768.readDepth = !!i1769[9]
  i1768.isCreatedByShaderGraph = !!i1769[10]
  i1768.compiled = !!i1769[11]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1783 = data
  i1782.shaderName = i1783[0]
  i1782.errorMessage = i1783[1]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1788 = root || new pc.UnityShaderPass()
  var i1789 = data
  i1788.id = i1789[0]
  i1788.subShaderIndex = i1789[1]
  i1788.name = i1789[2]
  i1788.passType = i1789[3]
  i1788.grabPassTextureName = i1789[4]
  i1788.usePass = !!i1789[5]
  i1788.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[6], i1788.zTest)
  i1788.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[7], i1788.zWrite)
  i1788.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[8], i1788.culling)
  i1788.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1789[9], i1788.blending)
  i1788.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1789[10], i1788.alphaBlending)
  i1788.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[11], i1788.colorWriteMask)
  i1788.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[12], i1788.offsetUnits)
  i1788.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[13], i1788.offsetFactor)
  i1788.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[14], i1788.stencilRef)
  i1788.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[15], i1788.stencilReadMask)
  i1788.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[16], i1788.stencilWriteMask)
  i1788.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1789[17], i1788.stencilOp)
  i1788.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1789[18], i1788.stencilOpFront)
  i1788.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1789[19], i1788.stencilOpBack)
  var i1791 = i1789[20]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1791[i + 0]) );
  }
  i1788.tags = i1790
  var i1793 = i1789[21]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( i1793[i + 0] );
  }
  i1788.passDefinedKeywords = i1792
  var i1795 = i1789[22]
  var i1794 = []
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1795[i + 0]) );
  }
  i1788.passDefinedKeywordGroups = i1794
  var i1797 = i1789[23]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1797[i + 0]) );
  }
  i1788.variants = i1796
  var i1799 = i1789[24]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1799[i + 0]) );
  }
  i1788.excludedVariants = i1798
  i1788.hasDepthReader = !!i1789[25]
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1801 = data
  i1800.val = i1801[0]
  i1800.name = i1801[1]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1803 = data
  i1802.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1803[0], i1802.src)
  i1802.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1803[1], i1802.dst)
  i1802.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1803[2], i1802.op)
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1805 = data
  i1804.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1805[0], i1804.pass)
  i1804.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1805[1], i1804.fail)
  i1804.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1805[2], i1804.zFail)
  i1804.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1805[3], i1804.comp)
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1809 = data
  i1808.name = i1809[0]
  i1808.value = i1809[1]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1813 = data
  var i1815 = i1813[0]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( i1815[i + 0] );
  }
  i1812.keywords = i1814
  i1812.hasDiscard = !!i1813[1]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1819 = data
  i1818.passId = i1819[0]
  i1818.subShaderIndex = i1819[1]
  var i1821 = i1819[2]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( i1821[i + 0] );
  }
  i1818.keywords = i1820
  i1818.vertexProgram = i1819[3]
  i1818.fragmentProgram = i1819[4]
  i1818.exportedForWebGl2 = !!i1819[5]
  i1818.readDepth = !!i1819[6]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1825 = data
  request.r(i1825[0], i1825[1], 0, i1824, 'shader')
  i1824.pass = i1825[2]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1829 = data
  i1828.name = i1829[0]
  i1828.type = i1829[1]
  i1828.value = new pc.Vec4( i1829[2], i1829[3], i1829[4], i1829[5] )
  i1828.textureValue = i1829[6]
  i1828.shaderPropertyFlag = i1829[7]
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1831 = data
  i1830.name = i1831[0]
  request.r(i1831[1], i1831[2], 0, i1830, 'texture')
  i1830.aabb = i1831[3]
  i1830.vertices = i1831[4]
  i1830.triangles = i1831[5]
  i1830.textureRect = UnityEngine.Rect.MinMaxRect(i1831[6], i1831[7], i1831[8], i1831[9])
  i1830.packedRect = UnityEngine.Rect.MinMaxRect(i1831[10], i1831[11], i1831[12], i1831[13])
  i1830.border = new pc.Vec4( i1831[14], i1831[15], i1831[16], i1831[17] )
  i1830.transparency = i1831[18]
  i1830.bounds = i1831[19]
  i1830.pixelsPerUnit = i1831[20]
  i1830.textureWidth = i1831[21]
  i1830.textureHeight = i1831[22]
  i1830.nativeSize = new pc.Vec2( i1831[23], i1831[24] )
  i1830.pivot = new pc.Vec2( i1831[25], i1831[26] )
  i1830.textureRectOffset = new pc.Vec2( i1831[27], i1831[28] )
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1833 = data
  i1832.name = i1833[0]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1835 = data
  i1834.name = i1835[0]
  i1834.wrapMode = i1835[1]
  i1834.isLooping = !!i1835[2]
  i1834.length = i1835[3]
  var i1837 = i1835[4]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1837[i + 0]) );
  }
  i1834.curves = i1836
  var i1839 = i1835[5]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1839[i + 0]) );
  }
  i1834.events = i1838
  i1834.halfPrecision = !!i1835[6]
  i1834._frameRate = i1835[7]
  i1834.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1835[8], i1834.localBounds)
  i1834.hasMuscleCurves = !!i1835[9]
  var i1841 = i1835[10]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( i1841[i + 0] );
  }
  i1834.clipMuscleConstant = i1840
  i1834.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1835[11], i1834.clipBindingConstant)
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1845 = data
  i1844.path = i1845[0]
  i1844.hash = i1845[1]
  i1844.componentType = i1845[2]
  i1844.property = i1845[3]
  i1844.keys = i1845[4]
  var i1847 = i1845[5]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1847[i + 0]) );
  }
  i1844.objectReferenceKeys = i1846
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1851 = data
  i1850.time = i1851[0]
  request.r(i1851[1], i1851[2], 0, i1850, 'value')
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1855 = data
  i1854.functionName = i1855[0]
  i1854.floatParameter = i1855[1]
  i1854.intParameter = i1855[2]
  i1854.stringParameter = i1855[3]
  request.r(i1855[4], i1855[5], 0, i1854, 'objectReferenceParameter')
  i1854.time = i1855[6]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1857 = data
  i1856.center = new pc.Vec3( i1857[0], i1857[1], i1857[2] )
  i1856.extends = new pc.Vec3( i1857[3], i1857[4], i1857[5] )
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1861 = data
  var i1863 = i1861[0]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( i1863[i + 0] );
  }
  i1860.genericBindings = i1862
  var i1865 = i1861[1]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( i1865[i + 0] );
  }
  i1860.pptrCurveMapping = i1864
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1867 = data
  i1866.name = i1867[0]
  i1866.ascent = i1867[1]
  i1866.originalLineHeight = i1867[2]
  i1866.fontSize = i1867[3]
  var i1869 = i1867[4]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1869[i + 0]) );
  }
  i1866.characterInfo = i1868
  request.r(i1867[5], i1867[6], 0, i1866, 'texture')
  i1866.originalFontSize = i1867[7]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1873 = data
  i1872.index = i1873[0]
  i1872.advance = i1873[1]
  i1872.bearing = i1873[2]
  i1872.glyphWidth = i1873[3]
  i1872.glyphHeight = i1873[4]
  i1872.minX = i1873[5]
  i1872.maxX = i1873[6]
  i1872.minY = i1873[7]
  i1872.maxY = i1873[8]
  i1872.uvBottomLeftX = i1873[9]
  i1872.uvBottomLeftY = i1873[10]
  i1872.uvBottomRightX = i1873[11]
  i1872.uvBottomRightY = i1873[12]
  i1872.uvTopLeftX = i1873[13]
  i1872.uvTopLeftY = i1873[14]
  i1872.uvTopRightX = i1873[15]
  i1872.uvTopRightY = i1873[16]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1875 = data
  i1874.name = i1875[0]
  var i1877 = i1875[1]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1877[i + 0]) );
  }
  i1874.layers = i1876
  var i1879 = i1875[2]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1879[i + 0]) );
  }
  i1874.parameters = i1878
  i1874.animationClips = i1875[3]
  i1874.avatarUnsupported = i1875[4]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1883 = data
  i1882.name = i1883[0]
  i1882.defaultWeight = i1883[1]
  i1882.blendingMode = i1883[2]
  i1882.avatarMask = i1883[3]
  i1882.syncedLayerIndex = i1883[4]
  i1882.syncedLayerAffectsTiming = !!i1883[5]
  i1882.syncedLayers = i1883[6]
  i1882.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1883[7], i1882.stateMachine)
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1885 = data
  i1884.id = i1885[0]
  i1884.name = i1885[1]
  i1884.path = i1885[2]
  var i1887 = i1885[3]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1887[i + 0]) );
  }
  i1884.states = i1886
  var i1889 = i1885[4]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1889[i + 0]) );
  }
  i1884.machines = i1888
  var i1891 = i1885[5]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1891[i + 0]) );
  }
  i1884.entryStateTransitions = i1890
  var i1893 = i1885[6]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1893[i + 0]) );
  }
  i1884.exitStateTransitions = i1892
  var i1895 = i1885[7]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1895[i + 0]) );
  }
  i1884.anyStateTransitions = i1894
  i1884.defaultStateId = i1885[8]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1899 = data
  i1898.id = i1899[0]
  i1898.name = i1899[1]
  i1898.cycleOffset = i1899[2]
  i1898.cycleOffsetParameter = i1899[3]
  i1898.cycleOffsetParameterActive = !!i1899[4]
  i1898.mirror = !!i1899[5]
  i1898.mirrorParameter = i1899[6]
  i1898.mirrorParameterActive = !!i1899[7]
  i1898.motionId = i1899[8]
  i1898.nameHash = i1899[9]
  i1898.fullPathHash = i1899[10]
  i1898.speed = i1899[11]
  i1898.speedParameter = i1899[12]
  i1898.speedParameterActive = !!i1899[13]
  i1898.tag = i1899[14]
  i1898.tagHash = i1899[15]
  i1898.writeDefaultValues = !!i1899[16]
  var i1901 = i1899[17]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 2) {
  request.r(i1901[i + 0], i1901[i + 1], 2, i1900, '')
  }
  i1898.behaviours = i1900
  var i1903 = i1899[18]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1903[i + 0]) );
  }
  i1898.transitions = i1902
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1909 = data
  i1908.fullPath = i1909[0]
  i1908.canTransitionToSelf = !!i1909[1]
  i1908.duration = i1909[2]
  i1908.exitTime = i1909[3]
  i1908.hasExitTime = !!i1909[4]
  i1908.hasFixedDuration = !!i1909[5]
  i1908.interruptionSource = i1909[6]
  i1908.offset = i1909[7]
  i1908.orderedInterruption = !!i1909[8]
  i1908.destinationStateId = i1909[9]
  i1908.isExit = !!i1909[10]
  i1908.mute = !!i1909[11]
  i1908.solo = !!i1909[12]
  var i1911 = i1909[13]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1911[i + 0]) );
  }
  i1908.conditions = i1910
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1917 = data
  i1916.destinationStateId = i1917[0]
  i1916.isExit = !!i1917[1]
  i1916.mute = !!i1917[2]
  i1916.solo = !!i1917[3]
  var i1919 = i1917[4]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1919[i + 0]) );
  }
  i1916.conditions = i1918
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1923 = data
  i1922.mode = i1923[0]
  i1922.parameter = i1923[1]
  i1922.threshold = i1923[2]
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1927 = data
  i1926.defaultBool = !!i1927[0]
  i1926.defaultFloat = i1927[1]
  i1926.defaultInt = i1927[2]
  i1926.name = i1927[3]
  i1926.nameHash = i1927[4]
  i1926.type = i1927[5]
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1929 = data
  i1928.name = i1929[0]
  i1928.bytes64 = i1929[1]
  i1928.data = i1929[2]
  return i1928
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1930 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1931 = data
  i1930.hashCode = i1931[0]
  request.r(i1931[1], i1931[2], 0, i1930, 'material')
  i1930.materialHashCode = i1931[3]
  request.r(i1931[4], i1931[5], 0, i1930, 'atlas')
  i1930.normalStyle = i1931[6]
  i1930.normalSpacingOffset = i1931[7]
  i1930.boldStyle = i1931[8]
  i1930.boldSpacing = i1931[9]
  i1930.italicStyle = i1931[10]
  i1930.tabSize = i1931[11]
  i1930.m_Version = i1931[12]
  i1930.m_SourceFontFileGUID = i1931[13]
  request.r(i1931[14], i1931[15], 0, i1930, 'm_SourceFontFile_EditorRef')
  request.r(i1931[16], i1931[17], 0, i1930, 'm_SourceFontFile')
  i1930.m_AtlasPopulationMode = i1931[18]
  i1930.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1931[19], i1930.m_FaceInfo)
  var i1933 = i1931[20]
  var i1932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.add(request.d('UnityEngine.TextCore.Glyph', i1933[i + 0]));
  }
  i1930.m_GlyphTable = i1932
  var i1935 = i1931[21]
  var i1934 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.add(request.d('TMPro.TMP_Character', i1935[i + 0]));
  }
  i1930.m_CharacterTable = i1934
  var i1937 = i1931[22]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 2) {
  request.r(i1937[i + 0], i1937[i + 1], 2, i1936, '')
  }
  i1930.m_AtlasTextures = i1936
  i1930.m_AtlasTextureIndex = i1931[23]
  i1930.m_IsMultiAtlasTexturesEnabled = !!i1931[24]
  i1930.m_ClearDynamicDataOnBuild = !!i1931[25]
  var i1939 = i1931[26]
  var i1938 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1939.length; i += 1) {
    i1938.add(request.d('UnityEngine.TextCore.GlyphRect', i1939[i + 0]));
  }
  i1930.m_UsedGlyphRects = i1938
  var i1941 = i1931[27]
  var i1940 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.add(request.d('UnityEngine.TextCore.GlyphRect', i1941[i + 0]));
  }
  i1930.m_FreeGlyphRects = i1940
  i1930.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1931[28], i1930.m_fontInfo)
  i1930.m_AtlasWidth = i1931[29]
  i1930.m_AtlasHeight = i1931[30]
  i1930.m_AtlasPadding = i1931[31]
  i1930.m_AtlasRenderMode = i1931[32]
  var i1943 = i1931[33]
  var i1942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.add(request.d('TMPro.TMP_Glyph', i1943[i + 0]));
  }
  i1930.m_glyphInfoList = i1942
  i1930.m_KerningTable = request.d('TMPro.KerningTable', i1931[34], i1930.m_KerningTable)
  i1930.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1931[35], i1930.m_FontFeatureTable)
  var i1945 = i1931[36]
  var i1944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1945.length; i += 2) {
  request.r(i1945[i + 0], i1945[i + 1], 1, i1944, '')
  }
  i1930.fallbackFontAssets = i1944
  var i1947 = i1931[37]
  var i1946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1947.length; i += 2) {
  request.r(i1947[i + 0], i1947[i + 1], 1, i1946, '')
  }
  i1930.m_FallbackFontAssetTable = i1946
  i1930.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1931[38], i1930.m_CreationSettings)
  var i1949 = i1931[39]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( request.d('TMPro.TMP_FontWeightPair', i1949[i + 0]) );
  }
  i1930.m_FontWeightTable = i1948
  var i1951 = i1931[40]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( request.d('TMPro.TMP_FontWeightPair', i1951[i + 0]) );
  }
  i1930.fontWeights = i1950
  return i1930
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1953 = data
  i1952.m_FaceIndex = i1953[0]
  i1952.m_FamilyName = i1953[1]
  i1952.m_StyleName = i1953[2]
  i1952.m_PointSize = i1953[3]
  i1952.m_Scale = i1953[4]
  i1952.m_UnitsPerEM = i1953[5]
  i1952.m_LineHeight = i1953[6]
  i1952.m_AscentLine = i1953[7]
  i1952.m_CapLine = i1953[8]
  i1952.m_MeanLine = i1953[9]
  i1952.m_Baseline = i1953[10]
  i1952.m_DescentLine = i1953[11]
  i1952.m_SuperscriptOffset = i1953[12]
  i1952.m_SuperscriptSize = i1953[13]
  i1952.m_SubscriptOffset = i1953[14]
  i1952.m_SubscriptSize = i1953[15]
  i1952.m_UnderlineOffset = i1953[16]
  i1952.m_UnderlineThickness = i1953[17]
  i1952.m_StrikethroughOffset = i1953[18]
  i1952.m_StrikethroughThickness = i1953[19]
  i1952.m_TabWidth = i1953[20]
  return i1952
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1957 = data
  i1956.m_Index = i1957[0]
  i1956.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1957[1], i1956.m_Metrics)
  i1956.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1957[2], i1956.m_GlyphRect)
  i1956.m_Scale = i1957[3]
  i1956.m_AtlasIndex = i1957[4]
  i1956.m_ClassDefinitionType = i1957[5]
  return i1956
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1959 = data
  i1958.m_Width = i1959[0]
  i1958.m_Height = i1959[1]
  i1958.m_HorizontalBearingX = i1959[2]
  i1958.m_HorizontalBearingY = i1959[3]
  i1958.m_HorizontalAdvance = i1959[4]
  return i1958
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1961 = data
  i1960.m_X = i1961[0]
  i1960.m_Y = i1961[1]
  i1960.m_Width = i1961[2]
  i1960.m_Height = i1961[3]
  return i1960
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1964 = root || request.c( 'TMPro.TMP_Character' )
  var i1965 = data
  i1964.m_ElementType = i1965[0]
  i1964.m_Unicode = i1965[1]
  i1964.m_GlyphIndex = i1965[2]
  i1964.m_Scale = i1965[3]
  return i1964
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1970 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1971 = data
  i1970.Name = i1971[0]
  i1970.PointSize = i1971[1]
  i1970.Scale = i1971[2]
  i1970.CharacterCount = i1971[3]
  i1970.LineHeight = i1971[4]
  i1970.Baseline = i1971[5]
  i1970.Ascender = i1971[6]
  i1970.CapHeight = i1971[7]
  i1970.Descender = i1971[8]
  i1970.CenterLine = i1971[9]
  i1970.SuperscriptOffset = i1971[10]
  i1970.SubscriptOffset = i1971[11]
  i1970.SubSize = i1971[12]
  i1970.Underline = i1971[13]
  i1970.UnderlineThickness = i1971[14]
  i1970.strikethrough = i1971[15]
  i1970.strikethroughThickness = i1971[16]
  i1970.TabWidth = i1971[17]
  i1970.Padding = i1971[18]
  i1970.AtlasWidth = i1971[19]
  i1970.AtlasHeight = i1971[20]
  return i1970
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1974 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1975 = data
  i1974.id = i1975[0]
  i1974.x = i1975[1]
  i1974.y = i1975[2]
  i1974.width = i1975[3]
  i1974.height = i1975[4]
  i1974.xOffset = i1975[5]
  i1974.yOffset = i1975[6]
  i1974.xAdvance = i1975[7]
  i1974.scale = i1975[8]
  return i1974
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1976 = root || request.c( 'TMPro.KerningTable' )
  var i1977 = data
  var i1979 = i1977[0]
  var i1978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.add(request.d('TMPro.KerningPair', i1979[i + 0]));
  }
  i1976.kerningPairs = i1978
  return i1976
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1982 = root || request.c( 'TMPro.KerningPair' )
  var i1983 = data
  i1982.xOffset = i1983[0]
  i1982.m_FirstGlyph = i1983[1]
  i1982.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1983[2], i1982.m_FirstGlyphAdjustments)
  i1982.m_SecondGlyph = i1983[3]
  i1982.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1983[4], i1982.m_SecondGlyphAdjustments)
  i1982.m_IgnoreSpacingAdjustments = !!i1983[5]
  return i1982
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1984 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1985 = data
  var i1987 = i1985[0]
  var i1986 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1987[i + 0]));
  }
  i1984.m_GlyphPairAdjustmentRecords = i1986
  return i1984
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1990 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1991 = data
  i1990.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1991[0], i1990.m_FirstAdjustmentRecord)
  i1990.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1991[1], i1990.m_SecondAdjustmentRecord)
  i1990.m_FeatureLookupFlags = i1991[2]
  return i1990
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1992 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1993 = data
  i1992.m_GlyphIndex = i1993[0]
  i1992.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1993[1], i1992.m_GlyphValueRecord)
  return i1992
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1994 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1995 = data
  i1994.m_XPlacement = i1995[0]
  i1994.m_YPlacement = i1995[1]
  i1994.m_XAdvance = i1995[2]
  i1994.m_YAdvance = i1995[3]
  return i1994
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1998 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1999 = data
  i1998.sourceFontFileName = i1999[0]
  i1998.sourceFontFileGUID = i1999[1]
  i1998.pointSizeSamplingMode = i1999[2]
  i1998.pointSize = i1999[3]
  i1998.padding = i1999[4]
  i1998.packingMode = i1999[5]
  i1998.atlasWidth = i1999[6]
  i1998.atlasHeight = i1999[7]
  i1998.characterSetSelectionMode = i1999[8]
  i1998.characterSequence = i1999[9]
  i1998.referencedFontAssetGUID = i1999[10]
  i1998.referencedTextAssetGUID = i1999[11]
  i1998.fontStyle = i1999[12]
  i1998.fontStyleModifier = i1999[13]
  i1998.renderMode = i1999[14]
  i1998.includeFontFeatures = !!i1999[15]
  return i1998
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2002 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2003 = data
  request.r(i2003[0], i2003[1], 0, i2002, 'regularTypeface')
  request.r(i2003[2], i2003[3], 0, i2002, 'italicTypeface')
  return i2002
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2004 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2005 = data
  i2004.useSafeMode = !!i2005[0]
  i2004.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2005[1], i2004.safeModeOptions)
  i2004.timeScale = i2005[2]
  i2004.unscaledTimeScale = i2005[3]
  i2004.useSmoothDeltaTime = !!i2005[4]
  i2004.maxSmoothUnscaledTime = i2005[5]
  i2004.rewindCallbackMode = i2005[6]
  i2004.showUnityEditorReport = !!i2005[7]
  i2004.logBehaviour = i2005[8]
  i2004.drawGizmos = !!i2005[9]
  i2004.defaultRecyclable = !!i2005[10]
  i2004.defaultAutoPlay = i2005[11]
  i2004.defaultUpdateType = i2005[12]
  i2004.defaultTimeScaleIndependent = !!i2005[13]
  i2004.defaultEaseType = i2005[14]
  i2004.defaultEaseOvershootOrAmplitude = i2005[15]
  i2004.defaultEasePeriod = i2005[16]
  i2004.defaultAutoKill = !!i2005[17]
  i2004.defaultLoopType = i2005[18]
  i2004.debugMode = !!i2005[19]
  i2004.debugStoreTargetId = !!i2005[20]
  i2004.showPreviewPanel = !!i2005[21]
  i2004.storeSettingsLocation = i2005[22]
  i2004.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2005[23], i2004.modules)
  i2004.createASMDEF = !!i2005[24]
  i2004.showPlayingTweens = !!i2005[25]
  i2004.showPausedTweens = !!i2005[26]
  return i2004
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2006 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2007 = data
  i2006.logBehaviour = i2007[0]
  i2006.nestedTweenFailureBehaviour = i2007[1]
  return i2006
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2008 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2009 = data
  i2008.showPanel = !!i2009[0]
  i2008.audioEnabled = !!i2009[1]
  i2008.physicsEnabled = !!i2009[2]
  i2008.physics2DEnabled = !!i2009[3]
  i2008.spriteEnabled = !!i2009[4]
  i2008.uiEnabled = !!i2009[5]
  i2008.textMeshProEnabled = !!i2009[6]
  i2008.tk2DEnabled = !!i2009[7]
  i2008.deAudioEnabled = !!i2009[8]
  i2008.deUnityExtendedEnabled = !!i2009[9]
  i2008.epoOutlineEnabled = !!i2009[10]
  return i2008
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2010 = root || request.c( 'TMPro.TMP_Settings' )
  var i2011 = data
  i2010.m_enableWordWrapping = !!i2011[0]
  i2010.m_enableKerning = !!i2011[1]
  i2010.m_enableExtraPadding = !!i2011[2]
  i2010.m_enableTintAllSprites = !!i2011[3]
  i2010.m_enableParseEscapeCharacters = !!i2011[4]
  i2010.m_EnableRaycastTarget = !!i2011[5]
  i2010.m_GetFontFeaturesAtRuntime = !!i2011[6]
  i2010.m_missingGlyphCharacter = i2011[7]
  i2010.m_warningsDisabled = !!i2011[8]
  request.r(i2011[9], i2011[10], 0, i2010, 'm_defaultFontAsset')
  i2010.m_defaultFontAssetPath = i2011[11]
  i2010.m_defaultFontSize = i2011[12]
  i2010.m_defaultAutoSizeMinRatio = i2011[13]
  i2010.m_defaultAutoSizeMaxRatio = i2011[14]
  i2010.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2011[15], i2011[16] )
  i2010.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2011[17], i2011[18] )
  i2010.m_autoSizeTextContainer = !!i2011[19]
  i2010.m_IsTextObjectScaleStatic = !!i2011[20]
  var i2013 = i2011[21]
  var i2012 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2013.length; i += 2) {
  request.r(i2013[i + 0], i2013[i + 1], 1, i2012, '')
  }
  i2010.m_fallbackFontAssets = i2012
  i2010.m_matchMaterialPreset = !!i2011[22]
  request.r(i2011[23], i2011[24], 0, i2010, 'm_defaultSpriteAsset')
  i2010.m_defaultSpriteAssetPath = i2011[25]
  i2010.m_enableEmojiSupport = !!i2011[26]
  i2010.m_MissingCharacterSpriteUnicode = i2011[27]
  i2010.m_defaultColorGradientPresetsPath = i2011[28]
  request.r(i2011[29], i2011[30], 0, i2010, 'm_defaultStyleSheet')
  i2010.m_StyleSheetsResourcePath = i2011[31]
  request.r(i2011[32], i2011[33], 0, i2010, 'm_leadingCharacters')
  request.r(i2011[34], i2011[35], 0, i2010, 'm_followingCharacters')
  i2010.m_UseModernHangulLineBreakingRules = !!i2011[36]
  return i2010
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2014 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2015 = data
  i2014.hashCode = i2015[0]
  request.r(i2015[1], i2015[2], 0, i2014, 'material')
  i2014.materialHashCode = i2015[3]
  request.r(i2015[4], i2015[5], 0, i2014, 'spriteSheet')
  var i2017 = i2015[6]
  var i2016 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2017.length; i += 1) {
    i2016.add(request.d('TMPro.TMP_Sprite', i2017[i + 0]));
  }
  i2014.spriteInfoList = i2016
  var i2019 = i2015[7]
  var i2018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2019.length; i += 2) {
  request.r(i2019[i + 0], i2019[i + 1], 1, i2018, '')
  }
  i2014.fallbackSpriteAssets = i2018
  i2014.m_Version = i2015[8]
  i2014.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2015[9], i2014.m_FaceInfo)
  var i2021 = i2015[10]
  var i2020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.add(request.d('TMPro.TMP_SpriteCharacter', i2021[i + 0]));
  }
  i2014.m_SpriteCharacterTable = i2020
  var i2023 = i2015[11]
  var i2022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.add(request.d('TMPro.TMP_SpriteGlyph', i2023[i + 0]));
  }
  i2014.m_SpriteGlyphTable = i2022
  return i2014
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2026 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2027 = data
  i2026.name = i2027[0]
  i2026.hashCode = i2027[1]
  i2026.unicode = i2027[2]
  i2026.pivot = new pc.Vec2( i2027[3], i2027[4] )
  request.r(i2027[5], i2027[6], 0, i2026, 'sprite')
  i2026.id = i2027[7]
  i2026.x = i2027[8]
  i2026.y = i2027[9]
  i2026.width = i2027[10]
  i2026.height = i2027[11]
  i2026.xOffset = i2027[12]
  i2026.yOffset = i2027[13]
  i2026.xAdvance = i2027[14]
  i2026.scale = i2027[15]
  return i2026
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2032 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2033 = data
  i2032.m_Name = i2033[0]
  i2032.m_HashCode = i2033[1]
  i2032.m_ElementType = i2033[2]
  i2032.m_Unicode = i2033[3]
  i2032.m_GlyphIndex = i2033[4]
  i2032.m_Scale = i2033[5]
  return i2032
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2036 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2037 = data
  request.r(i2037[0], i2037[1], 0, i2036, 'sprite')
  i2036.m_Index = i2037[2]
  i2036.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2037[3], i2036.m_Metrics)
  i2036.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2037[4], i2036.m_GlyphRect)
  i2036.m_Scale = i2037[5]
  i2036.m_AtlasIndex = i2037[6]
  i2036.m_ClassDefinitionType = i2037[7]
  return i2036
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2038 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2039 = data
  var i2041 = i2039[0]
  var i2040 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.add(request.d('TMPro.TMP_Style', i2041[i + 0]));
  }
  i2038.m_StyleList = i2040
  return i2038
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2044 = root || request.c( 'TMPro.TMP_Style' )
  var i2045 = data
  i2044.m_Name = i2045[0]
  i2044.m_HashCode = i2045[1]
  i2044.m_OpeningDefinition = i2045[2]
  i2044.m_ClosingDefinition = i2045[3]
  i2044.m_OpeningTagArray = i2045[4]
  i2044.m_ClosingTagArray = i2045[5]
  i2044.m_OpeningTagUnicodeArray = i2045[6]
  i2044.m_ClosingTagUnicodeArray = i2045[7]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2047 = data
  var i2049 = i2047[0]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2049[i + 0]) );
  }
  i2046.files = i2048
  i2046.componentToPrefabIds = i2047[1]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2053 = data
  i2052.path = i2053[0]
  request.r(i2053[1], i2053[2], 0, i2052, 'unityObject')
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2055 = data
  var i2057 = i2055[0]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2057[i + 0]) );
  }
  i2054.scriptsExecutionOrder = i2056
  var i2059 = i2055[1]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2059[i + 0]) );
  }
  i2054.sortingLayers = i2058
  var i2061 = i2055[2]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2061[i + 0]) );
  }
  i2054.cullingLayers = i2060
  i2054.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2055[3], i2054.timeSettings)
  i2054.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2055[4], i2054.physicsSettings)
  i2054.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2055[5], i2054.physics2DSettings)
  i2054.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2055[6], i2054.qualitySettings)
  i2054.enableRealtimeShadows = !!i2055[7]
  i2054.enableAutoInstancing = !!i2055[8]
  i2054.enableDynamicBatching = !!i2055[9]
  i2054.lightmapEncodingQuality = i2055[10]
  i2054.desiredColorSpace = i2055[11]
  var i2063 = i2055[12]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( i2063[i + 0] );
  }
  i2054.allTags = i2062
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2067 = data
  i2066.name = i2067[0]
  i2066.value = i2067[1]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2071 = data
  i2070.id = i2071[0]
  i2070.name = i2071[1]
  i2070.value = i2071[2]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2075 = data
  i2074.id = i2075[0]
  i2074.name = i2075[1]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2077 = data
  i2076.fixedDeltaTime = i2077[0]
  i2076.maximumDeltaTime = i2077[1]
  i2076.timeScale = i2077[2]
  i2076.maximumParticleTimestep = i2077[3]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2079 = data
  i2078.gravity = new pc.Vec3( i2079[0], i2079[1], i2079[2] )
  i2078.defaultSolverIterations = i2079[3]
  i2078.bounceThreshold = i2079[4]
  i2078.autoSyncTransforms = !!i2079[5]
  i2078.autoSimulation = !!i2079[6]
  var i2081 = i2079[7]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2081[i + 0]) );
  }
  i2078.collisionMatrix = i2080
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2085 = data
  i2084.enabled = !!i2085[0]
  i2084.layerId = i2085[1]
  i2084.otherLayerId = i2085[2]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2087 = data
  request.r(i2087[0], i2087[1], 0, i2086, 'material')
  i2086.gravity = new pc.Vec2( i2087[2], i2087[3] )
  i2086.positionIterations = i2087[4]
  i2086.velocityIterations = i2087[5]
  i2086.velocityThreshold = i2087[6]
  i2086.maxLinearCorrection = i2087[7]
  i2086.maxAngularCorrection = i2087[8]
  i2086.maxTranslationSpeed = i2087[9]
  i2086.maxRotationSpeed = i2087[10]
  i2086.baumgarteScale = i2087[11]
  i2086.baumgarteTOIScale = i2087[12]
  i2086.timeToSleep = i2087[13]
  i2086.linearSleepTolerance = i2087[14]
  i2086.angularSleepTolerance = i2087[15]
  i2086.defaultContactOffset = i2087[16]
  i2086.autoSimulation = !!i2087[17]
  i2086.queriesHitTriggers = !!i2087[18]
  i2086.queriesStartInColliders = !!i2087[19]
  i2086.callbacksOnDisable = !!i2087[20]
  i2086.reuseCollisionCallbacks = !!i2087[21]
  i2086.autoSyncTransforms = !!i2087[22]
  var i2089 = i2087[23]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2089[i + 0]) );
  }
  i2086.collisionMatrix = i2088
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2093 = data
  i2092.enabled = !!i2093[0]
  i2092.layerId = i2093[1]
  i2092.otherLayerId = i2093[2]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2095 = data
  var i2097 = i2095[0]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2097[i + 0]) );
  }
  i2094.qualityLevels = i2096
  var i2099 = i2095[1]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.push( i2099[i + 0] );
  }
  i2094.names = i2098
  i2094.shadows = i2095[2]
  i2094.anisotropicFiltering = i2095[3]
  i2094.antiAliasing = i2095[4]
  i2094.lodBias = i2095[5]
  i2094.shadowCascades = i2095[6]
  i2094.shadowDistance = i2095[7]
  i2094.shadowmaskMode = i2095[8]
  i2094.shadowProjection = i2095[9]
  i2094.shadowResolution = i2095[10]
  i2094.softParticles = !!i2095[11]
  i2094.softVegetation = !!i2095[12]
  i2094.activeColorSpace = i2095[13]
  i2094.desiredColorSpace = i2095[14]
  i2094.masterTextureLimit = i2095[15]
  i2094.maxQueuedFrames = i2095[16]
  i2094.particleRaycastBudget = i2095[17]
  i2094.pixelLightCount = i2095[18]
  i2094.realtimeReflectionProbes = !!i2095[19]
  i2094.shadowCascade2Split = i2095[20]
  i2094.shadowCascade4Split = new pc.Vec3( i2095[21], i2095[22], i2095[23] )
  i2094.streamingMipmapsActive = !!i2095[24]
  i2094.vSyncCount = i2095[25]
  i2094.asyncUploadBufferSize = i2095[26]
  i2094.asyncUploadTimeSlice = i2095[27]
  i2094.billboardsFaceCameraPosition = !!i2095[28]
  i2094.shadowNearPlaneOffset = i2095[29]
  i2094.streamingMipmapsMemoryBudget = i2095[30]
  i2094.maximumLODLevel = i2095[31]
  i2094.streamingMipmapsAddAllCameras = !!i2095[32]
  i2094.streamingMipmapsMaxLevelReduction = i2095[33]
  i2094.streamingMipmapsRenderersPerFrame = i2095[34]
  i2094.resolutionScalingFixedDPIFactor = i2095[35]
  i2094.streamingMipmapsMaxFileIORequests = i2095[36]
  i2094.currentQualityLevel = i2095[37]
  return i2094
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2102 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2103 = data
  i2102.xPlacement = i2103[0]
  i2102.yPlacement = i2103[1]
  i2102.xAdvance = i2103[2]
  i2102.yAdvance = i2103[3]
  return i2102
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

Deserializers.creativeName = "Happy525235";

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

Deserializers.buildID = "3981025c-0dd0-4d73-a30a-21a0787b5172";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

