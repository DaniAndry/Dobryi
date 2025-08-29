var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.JointSpring' )
  var i1585 = data
  i1584.spring = i1585[0]
  i1584.damper = i1585[1]
  i1584.targetPosition = i1585[2]
  return i1584
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.JointMotor' )
  var i1587 = data
  i1586.m_TargetVelocity = i1587[0]
  i1586.m_Force = i1587[1]
  i1586.m_FreeSpin = i1587[2]
  return i1586
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.JointLimits' )
  var i1589 = data
  i1588.m_Min = i1589[0]
  i1588.m_Max = i1589[1]
  i1588.m_Bounciness = i1589[2]
  i1588.m_BounceMinVelocity = i1589[3]
  i1588.m_ContactDistance = i1589[4]
  i1588.minBounce = i1589[5]
  i1588.maxBounce = i1589[6]
  return i1588
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.JointDrive' )
  var i1591 = data
  i1590.m_PositionSpring = i1591[0]
  i1590.m_PositionDamper = i1591[1]
  i1590.m_MaximumForce = i1591[2]
  i1590.m_UseAcceleration = i1591[3]
  return i1590
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1593 = data
  i1592.m_Spring = i1593[0]
  i1592.m_Damper = i1593[1]
  return i1592
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1594 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1595 = data
  i1594.m_Limit = i1595[0]
  i1594.m_Bounciness = i1595[1]
  i1594.m_ContactDistance = i1595[2]
  return i1594
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1597 = data
  i1596.m_ExtremumSlip = i1597[0]
  i1596.m_ExtremumValue = i1597[1]
  i1596.m_AsymptoteSlip = i1597[2]
  i1596.m_AsymptoteValue = i1597[3]
  i1596.m_Stiffness = i1597[4]
  return i1596
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1598 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1599 = data
  i1598.m_LowerAngle = i1599[0]
  i1598.m_UpperAngle = i1599[1]
  return i1598
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1600 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1601 = data
  i1600.m_MotorSpeed = i1601[0]
  i1600.m_MaximumMotorTorque = i1601[1]
  return i1600
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1603 = data
  i1602.m_DampingRatio = i1603[0]
  i1602.m_Frequency = i1603[1]
  i1602.m_Angle = i1603[2]
  return i1602
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1605 = data
  i1604.m_LowerTranslation = i1605[0]
  i1604.m_UpperTranslation = i1605[1]
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1607 = data
  i1606.name = i1607[0]
  i1606.width = i1607[1]
  i1606.height = i1607[2]
  i1606.mipmapCount = i1607[3]
  i1606.anisoLevel = i1607[4]
  i1606.filterMode = i1607[5]
  i1606.hdr = !!i1607[6]
  i1606.format = i1607[7]
  i1606.wrapMode = i1607[8]
  i1606.alphaIsTransparency = !!i1607[9]
  i1606.alphaSource = i1607[10]
  i1606.graphicsFormat = i1607[11]
  i1606.sRGBTexture = !!i1607[12]
  i1606.desiredColorSpace = i1607[13]
  i1606.wrapU = i1607[14]
  i1606.wrapV = i1607[15]
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1608 = root || new pc.UnityMaterial()
  var i1609 = data
  i1608.name = i1609[0]
  request.r(i1609[1], i1609[2], 0, i1608, 'shader')
  i1608.renderQueue = i1609[3]
  i1608.enableInstancing = !!i1609[4]
  var i1611 = i1609[5]
  var i1610 = []
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1611[i + 0]) );
  }
  i1608.floatParameters = i1610
  var i1613 = i1609[6]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1613[i + 0]) );
  }
  i1608.colorParameters = i1612
  var i1615 = i1609[7]
  var i1614 = []
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1615[i + 0]) );
  }
  i1608.vectorParameters = i1614
  var i1617 = i1609[8]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1617[i + 0]) );
  }
  i1608.textureParameters = i1616
  var i1619 = i1609[9]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 1) {
    i1618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1619[i + 0]) );
  }
  i1608.materialFlags = i1618
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1623 = data
  i1622.name = i1623[0]
  i1622.value = i1623[1]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1627 = data
  i1626.name = i1627[0]
  i1626.value = new pc.Color(i1627[1], i1627[2], i1627[3], i1627[4])
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1631 = data
  i1630.name = i1631[0]
  i1630.value = new pc.Vec4( i1631[1], i1631[2], i1631[3], i1631[4] )
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1635 = data
  i1634.name = i1635[0]
  request.r(i1635[1], i1635[2], 0, i1634, 'value')
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1639 = data
  i1638.name = i1639[0]
  i1638.enabled = !!i1639[1]
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1641 = data
  i1640.pivot = new pc.Vec2( i1641[0], i1641[1] )
  i1640.anchorMin = new pc.Vec2( i1641[2], i1641[3] )
  i1640.anchorMax = new pc.Vec2( i1641[4], i1641[5] )
  i1640.sizeDelta = new pc.Vec2( i1641[6], i1641[7] )
  i1640.anchoredPosition3D = new pc.Vec3( i1641[8], i1641[9], i1641[10] )
  i1640.rotation = new pc.Quat(i1641[11], i1641[12], i1641[13], i1641[14])
  i1640.scale = new pc.Vec3( i1641[15], i1641[16], i1641[17] )
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1643 = data
  i1642.cullTransparentMesh = !!i1643[0]
  return i1642
}

Deserializers["People"] = function (request, data, root) {
  var i1644 = root || request.c( 'People' )
  var i1645 = data
  request.r(i1645[0], i1645[1], 0, i1644, '_endPoint')
  request.r(i1645[2], i1645[3], 0, i1644, 'Bank')
  var i1647 = i1645[4]
  var i1646 = new (System.Collections.Generic.List$1(Bridge.ns('Cup')))
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.add(request.d('Cup', i1647[i + 0]));
  }
  i1644.Cups = i1646
  request.r(i1645[5], i1645[6], 0, i1644, '_finishSound')
  return i1644
}

Deserializers["Cup"] = function (request, data, root) {
  var i1650 = root || request.c( 'Cup' )
  var i1651 = data
  request.r(i1651[0], i1651[1], 0, i1650, 'ReadyImage')
  request.r(i1651[2], i1651[3], 0, i1650, 'AdditiveImage1')
  request.r(i1651[4], i1651[5], 0, i1650, 'AdditiveImage2')
  request.r(i1651[6], i1651[7], 0, i1650, 'SizeText')
  i1650.CupType = i1651[8]
  i1650.JuiceType = i1651[9]
  i1650.AdditiveType1 = i1651[10]
  i1650.AdditiveType2 = i1651[11]
  i1650.IsReady = !!i1651[12]
  i1650.IsActive = !!i1651[13]
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1653 = data
  request.r(i1653[0], i1653[1], 0, i1652, 'clip')
  request.r(i1653[2], i1653[3], 0, i1652, 'outputAudioMixerGroup')
  i1652.playOnAwake = !!i1653[4]
  i1652.loop = !!i1653[5]
  i1652.time = i1653[6]
  i1652.volume = i1653[7]
  i1652.pitch = i1653[8]
  i1652.enabled = !!i1653[9]
  return i1652
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.UI.Image' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'm_Sprite')
  i1654.m_Type = i1655[2]
  i1654.m_PreserveAspect = !!i1655[3]
  i1654.m_FillCenter = !!i1655[4]
  i1654.m_FillMethod = i1655[5]
  i1654.m_FillAmount = i1655[6]
  i1654.m_FillClockwise = !!i1655[7]
  i1654.m_FillOrigin = i1655[8]
  i1654.m_UseSpriteMesh = !!i1655[9]
  i1654.m_PixelsPerUnitMultiplier = i1655[10]
  request.r(i1655[11], i1655[12], 0, i1654, 'm_Material')
  i1654.m_Maskable = !!i1655[13]
  i1654.m_Color = new pc.Color(i1655[14], i1655[15], i1655[16], i1655[17])
  i1654.m_RaycastTarget = !!i1655[18]
  i1654.m_RaycastPadding = new pc.Vec4( i1655[19], i1655[20], i1655[21], i1655[22] )
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1657 = data
  i1656.name = i1657[0]
  i1656.tagId = i1657[1]
  i1656.enabled = !!i1657[2]
  i1656.isStatic = !!i1657[3]
  i1656.layer = i1657[4]
  return i1656
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.UI.Button' )
  var i1659 = data
  i1658.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1659[0], i1658.m_OnClick)
  i1658.m_Navigation = request.d('UnityEngine.UI.Navigation', i1659[1], i1658.m_Navigation)
  i1658.m_Transition = i1659[2]
  i1658.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1659[3], i1658.m_Colors)
  i1658.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1659[4], i1658.m_SpriteState)
  i1658.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1659[5], i1658.m_AnimationTriggers)
  i1658.m_Interactable = !!i1659[6]
  request.r(i1659[7], i1659[8], 0, i1658, 'm_TargetGraphic')
  return i1658
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1661 = data
  i1660.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1661[0], i1660.m_PersistentCalls)
  return i1660
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1663 = data
  var i1665 = i1663[0]
  var i1664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.add(request.d('UnityEngine.Events.PersistentCall', i1665[i + 0]));
  }
  i1662.m_Calls = i1664
  return i1662
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1669 = data
  request.r(i1669[0], i1669[1], 0, i1668, 'm_Target')
  i1668.m_TargetAssemblyTypeName = i1669[2]
  i1668.m_MethodName = i1669[3]
  i1668.m_Mode = i1669[4]
  i1668.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1669[5], i1668.m_Arguments)
  i1668.m_CallState = i1669[6]
  return i1668
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1671 = data
  request.r(i1671[0], i1671[1], 0, i1670, 'm_ObjectArgument')
  i1670.m_ObjectArgumentAssemblyTypeName = i1671[2]
  i1670.m_IntArgument = i1671[3]
  i1670.m_FloatArgument = i1671[4]
  i1670.m_StringArgument = i1671[5]
  i1670.m_BoolArgument = !!i1671[6]
  return i1670
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1672 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1673 = data
  i1672.m_Mode = i1673[0]
  i1672.m_WrapAround = !!i1673[1]
  request.r(i1673[2], i1673[3], 0, i1672, 'm_SelectOnUp')
  request.r(i1673[4], i1673[5], 0, i1672, 'm_SelectOnDown')
  request.r(i1673[6], i1673[7], 0, i1672, 'm_SelectOnLeft')
  request.r(i1673[8], i1673[9], 0, i1672, 'm_SelectOnRight')
  return i1672
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1674 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1675 = data
  i1674.m_NormalColor = new pc.Color(i1675[0], i1675[1], i1675[2], i1675[3])
  i1674.m_HighlightedColor = new pc.Color(i1675[4], i1675[5], i1675[6], i1675[7])
  i1674.m_PressedColor = new pc.Color(i1675[8], i1675[9], i1675[10], i1675[11])
  i1674.m_SelectedColor = new pc.Color(i1675[12], i1675[13], i1675[14], i1675[15])
  i1674.m_DisabledColor = new pc.Color(i1675[16], i1675[17], i1675[18], i1675[19])
  i1674.m_ColorMultiplier = i1675[20]
  i1674.m_FadeDuration = i1675[21]
  return i1674
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1676 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, 'm_HighlightedSprite')
  request.r(i1677[2], i1677[3], 0, i1676, 'm_PressedSprite')
  request.r(i1677[4], i1677[5], 0, i1676, 'm_SelectedSprite')
  request.r(i1677[6], i1677[7], 0, i1676, 'm_DisabledSprite')
  return i1676
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1679 = data
  i1678.m_NormalTrigger = i1679[0]
  i1678.m_HighlightedTrigger = i1679[1]
  i1678.m_PressedTrigger = i1679[2]
  i1678.m_SelectedTrigger = i1679[3]
  i1678.m_DisabledTrigger = i1679[4]
  return i1678
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1680 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1681 = data
  i1680.m_hasFontAssetChanged = !!i1681[0]
  request.r(i1681[1], i1681[2], 0, i1680, 'm_baseMaterial')
  i1680.m_maskOffset = new pc.Vec4( i1681[3], i1681[4], i1681[5], i1681[6] )
  i1680.m_text = i1681[7]
  i1680.m_isRightToLeft = !!i1681[8]
  request.r(i1681[9], i1681[10], 0, i1680, 'm_fontAsset')
  request.r(i1681[11], i1681[12], 0, i1680, 'm_sharedMaterial')
  var i1683 = i1681[13]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 2) {
  request.r(i1683[i + 0], i1683[i + 1], 2, i1682, '')
  }
  i1680.m_fontSharedMaterials = i1682
  request.r(i1681[14], i1681[15], 0, i1680, 'm_fontMaterial')
  var i1685 = i1681[16]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 2) {
  request.r(i1685[i + 0], i1685[i + 1], 2, i1684, '')
  }
  i1680.m_fontMaterials = i1684
  i1680.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1681[17], i1681[18], i1681[19], i1681[20])
  i1680.m_fontColor = new pc.Color(i1681[21], i1681[22], i1681[23], i1681[24])
  i1680.m_enableVertexGradient = !!i1681[25]
  i1680.m_colorMode = i1681[26]
  i1680.m_fontColorGradient = request.d('TMPro.VertexGradient', i1681[27], i1680.m_fontColorGradient)
  request.r(i1681[28], i1681[29], 0, i1680, 'm_fontColorGradientPreset')
  request.r(i1681[30], i1681[31], 0, i1680, 'm_spriteAsset')
  i1680.m_tintAllSprites = !!i1681[32]
  request.r(i1681[33], i1681[34], 0, i1680, 'm_StyleSheet')
  i1680.m_TextStyleHashCode = i1681[35]
  i1680.m_overrideHtmlColors = !!i1681[36]
  i1680.m_faceColor = UnityEngine.Color32.ConstructColor(i1681[37], i1681[38], i1681[39], i1681[40])
  i1680.m_fontSize = i1681[41]
  i1680.m_fontSizeBase = i1681[42]
  i1680.m_fontWeight = i1681[43]
  i1680.m_enableAutoSizing = !!i1681[44]
  i1680.m_fontSizeMin = i1681[45]
  i1680.m_fontSizeMax = i1681[46]
  i1680.m_fontStyle = i1681[47]
  i1680.m_HorizontalAlignment = i1681[48]
  i1680.m_VerticalAlignment = i1681[49]
  i1680.m_textAlignment = i1681[50]
  i1680.m_characterSpacing = i1681[51]
  i1680.m_wordSpacing = i1681[52]
  i1680.m_lineSpacing = i1681[53]
  i1680.m_lineSpacingMax = i1681[54]
  i1680.m_paragraphSpacing = i1681[55]
  i1680.m_charWidthMaxAdj = i1681[56]
  i1680.m_enableWordWrapping = !!i1681[57]
  i1680.m_wordWrappingRatios = i1681[58]
  i1680.m_overflowMode = i1681[59]
  request.r(i1681[60], i1681[61], 0, i1680, 'm_linkedTextComponent')
  request.r(i1681[62], i1681[63], 0, i1680, 'parentLinkedComponent')
  i1680.m_enableKerning = !!i1681[64]
  i1680.m_enableExtraPadding = !!i1681[65]
  i1680.checkPaddingRequired = !!i1681[66]
  i1680.m_isRichText = !!i1681[67]
  i1680.m_parseCtrlCharacters = !!i1681[68]
  i1680.m_isOrthographic = !!i1681[69]
  i1680.m_isCullingEnabled = !!i1681[70]
  i1680.m_horizontalMapping = i1681[71]
  i1680.m_verticalMapping = i1681[72]
  i1680.m_uvLineOffset = i1681[73]
  i1680.m_geometrySortingOrder = i1681[74]
  i1680.m_IsTextObjectScaleStatic = !!i1681[75]
  i1680.m_VertexBufferAutoSizeReduction = !!i1681[76]
  i1680.m_useMaxVisibleDescender = !!i1681[77]
  i1680.m_pageToDisplay = i1681[78]
  i1680.m_margin = new pc.Vec4( i1681[79], i1681[80], i1681[81], i1681[82] )
  i1680.m_isUsingLegacyAnimationComponent = !!i1681[83]
  i1680.m_isVolumetricText = !!i1681[84]
  request.r(i1681[85], i1681[86], 0, i1680, 'm_Material')
  i1680.m_Maskable = !!i1681[87]
  i1680.m_Color = new pc.Color(i1681[88], i1681[89], i1681[90], i1681[91])
  i1680.m_RaycastTarget = !!i1681[92]
  i1680.m_RaycastPadding = new pc.Vec4( i1681[93], i1681[94], i1681[95], i1681[96] )
  return i1680
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1688 = root || request.c( 'TMPro.VertexGradient' )
  var i1689 = data
  i1688.topLeft = new pc.Color(i1689[0], i1689[1], i1689[2], i1689[3])
  i1688.topRight = new pc.Color(i1689[4], i1689[5], i1689[6], i1689[7])
  i1688.bottomLeft = new pc.Color(i1689[8], i1689[9], i1689[10], i1689[11])
  i1688.bottomRight = new pc.Color(i1689[12], i1689[13], i1689[14], i1689[15])
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1691 = data
  i1690.name = i1691[0]
  i1690.index = i1691[1]
  i1690.startup = !!i1691[2]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1693 = data
  i1692.position = new pc.Vec3( i1693[0], i1693[1], i1693[2] )
  i1692.scale = new pc.Vec3( i1693[3], i1693[4], i1693[5] )
  i1692.rotation = new pc.Quat(i1693[6], i1693[7], i1693[8], i1693[9])
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1695 = data
  i1694.enabled = !!i1695[0]
  i1694.aspect = i1695[1]
  i1694.orthographic = !!i1695[2]
  i1694.orthographicSize = i1695[3]
  i1694.backgroundColor = new pc.Color(i1695[4], i1695[5], i1695[6], i1695[7])
  i1694.nearClipPlane = i1695[8]
  i1694.farClipPlane = i1695[9]
  i1694.fieldOfView = i1695[10]
  i1694.depth = i1695[11]
  i1694.clearFlags = i1695[12]
  i1694.cullingMask = i1695[13]
  i1694.rect = i1695[14]
  request.r(i1695[15], i1695[16], 0, i1694, 'targetTexture')
  i1694.usePhysicalProperties = !!i1695[17]
  i1694.focalLength = i1695[18]
  i1694.sensorSize = new pc.Vec2( i1695[19], i1695[20] )
  i1694.lensShift = new pc.Vec2( i1695[21], i1695[22] )
  i1694.gateFit = i1695[23]
  i1694.commandBufferCount = i1695[24]
  i1694.cameraType = i1695[25]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1697 = data
  request.r(i1697[0], i1697[1], 0, i1696, 'animatorController')
  request.r(i1697[2], i1697[3], 0, i1696, 'avatar')
  i1696.updateMode = i1697[4]
  i1696.hasTransformHierarchy = !!i1697[5]
  i1696.applyRootMotion = !!i1697[6]
  var i1699 = i1697[7]
  var i1698 = []
  for(var i = 0; i < i1699.length; i += 2) {
  request.r(i1699[i + 0], i1699[i + 1], 2, i1698, '')
  }
  i1696.humanBones = i1698
  i1696.enabled = !!i1697[8]
  return i1696
}

Deserializers["Bank"] = function (request, data, root) {
  var i1702 = root || request.c( 'Bank' )
  var i1703 = data
  request.r(i1703[0], i1703[1], 0, i1702, 'BuyBigCupButton')
  request.r(i1703[2], i1703[3], 0, i1702, 'BigCupButton')
  request.r(i1703[4], i1703[5], 0, i1702, 'MiddleCupButton')
  request.r(i1703[6], i1703[7], 0, i1702, 'MoneyText')
  request.r(i1703[8], i1703[9], 0, i1702, 'Tutorial')
  request.r(i1703[10], i1703[11], 0, i1702, 'BuyAdditiveButton')
  request.r(i1703[12], i1703[13], 0, i1702, 'BuyJuiceButton')
  request.r(i1703[14], i1703[15], 0, i1702, 'JuiceButton1')
  request.r(i1703[16], i1703[17], 0, i1702, 'JuiceButton2')
  request.r(i1703[18], i1703[19], 0, i1702, 'JuiceButton3')
  request.r(i1703[20], i1703[21], 0, i1702, 'Additive1Button')
  request.r(i1703[22], i1703[23], 0, i1702, 'Additive2Button')
  i1702.Money = i1703[24]
  i1702.IsBigCupBuy = !!i1703[25]
  i1702.IsJuiceBuy = !!i1703[26]
  i1702.IsAdditiveBuy = !!i1703[27]
  request.r(i1703[28], i1703[29], 0, i1702, '_buySound')
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1705 = data
  i1704.enabled = !!i1705[0]
  i1704.planeDistance = i1705[1]
  i1704.referencePixelsPerUnit = i1705[2]
  i1704.isFallbackOverlay = !!i1705[3]
  i1704.renderMode = i1705[4]
  i1704.renderOrder = i1705[5]
  i1704.sortingLayerName = i1705[6]
  i1704.sortingOrder = i1705[7]
  i1704.scaleFactor = i1705[8]
  request.r(i1705[9], i1705[10], 0, i1704, 'worldCamera')
  i1704.overrideSorting = !!i1705[11]
  i1704.pixelPerfect = !!i1705[12]
  i1704.targetDisplay = i1705[13]
  i1704.overridePixelPerfect = !!i1705[14]
  return i1704
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1706 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1707 = data
  i1706.m_UiScaleMode = i1707[0]
  i1706.m_ReferencePixelsPerUnit = i1707[1]
  i1706.m_ScaleFactor = i1707[2]
  i1706.m_ReferenceResolution = new pc.Vec2( i1707[3], i1707[4] )
  i1706.m_ScreenMatchMode = i1707[5]
  i1706.m_MatchWidthOrHeight = i1707[6]
  i1706.m_PhysicalUnit = i1707[7]
  i1706.m_FallbackScreenDPI = i1707[8]
  i1706.m_DefaultSpriteDPI = i1707[9]
  i1706.m_DynamicPixelsPerUnit = i1707[10]
  i1706.m_PresetInfoIsWorld = !!i1707[11]
  return i1706
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1708 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1709 = data
  i1708.m_IgnoreReversedGraphics = !!i1709[0]
  i1708.m_BlockingObjects = i1709[1]
  i1708.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1709[2] )
  return i1708
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i1710 = root || request.c( 'ImageShiftOnOrientation' )
  var i1711 = data
  var i1713 = i1711[0]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.push( request.d('ItemSwitcherData', i1713[i + 0]) );
  }
  i1710.Items = i1712
  request.r(i1711[1], i1711[2], 0, i1710, '_backHorizontal')
  request.r(i1711[3], i1711[4], 0, i1710, '_backVertical')
  request.r(i1711[5], i1711[6], 0, i1710, '_tableHorizontal')
  request.r(i1711[7], i1711[8], 0, i1710, '_tableVertical')
  i1710.IsDebug = !!i1711[9]
  i1710.CanCopy = !!i1711[10]
  return i1710
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i1716 = root || request.c( 'ItemSwitcherData' )
  var i1717 = data
  request.r(i1717[0], i1717[1], 0, i1716, 'Target')
  i1716.HorizontalAnchoredPosition = new pc.Vec2( i1717[2], i1717[3] )
  i1716.SizeHorizontal = new pc.Vec2( i1717[4], i1717[5] )
  i1716.VerticalAnchoredPosition = new pc.Vec2( i1717[6], i1717[7] )
  i1716.SizeVertical = new pc.Vec2( i1717[8], i1717[9] )
  i1716.MinHorizontal = new pc.Vec2( i1717[10], i1717[11] )
  i1716.MaxHorizontal = new pc.Vec2( i1717[12], i1717[13] )
  i1716.MinVertical = new pc.Vec2( i1717[14], i1717[15] )
  i1716.MaxVertical = new pc.Vec2( i1717[16], i1717[17] )
  i1716.IsAnchored = !!i1717[18]
  i1716.IsDebug = !!i1717[19]
  i1716.CopyHorizontal = !!i1717[20]
  i1716.CopyVertical = !!i1717[21]
  return i1716
}

Deserializers["Point"] = function (request, data, root) {
  var i1718 = root || request.c( 'Point' )
  var i1719 = data
  return i1718
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i1720 = root || request.c( 'PeopleContainer' )
  var i1721 = data
  var i1723 = i1721[0]
  var i1722 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1723.length; i += 2) {
  request.r(i1723[i + 0], i1723[i + 1], 1, i1722, '')
  }
  i1720.CurrentPeoples = i1722
  var i1725 = i1721[1]
  var i1724 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1725.length; i += 2) {
  request.r(i1725[i + 0], i1725[i + 1], 1, i1724, '')
  }
  i1720._peoples = i1724
  request.r(i1721[2], i1721[3], 0, i1720, '_tutorialPeople')
  request.r(i1721[4], i1721[5], 0, i1720, '_spawnPoint')
  request.r(i1721[6], i1721[7], 0, i1720, '_point1')
  request.r(i1721[8], i1721[9], 0, i1720, '_point2')
  request.r(i1721[10], i1721[11], 0, i1720, '_endPoint')
  request.r(i1721[12], i1721[13], 0, i1720, '_juiceConfig')
  request.r(i1721[14], i1721[15], 0, i1720, '_tutorial')
  return i1720
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1728 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1729 = data
  i1728.m_HorizontalFit = i1729[0]
  i1728.m_VerticalFit = i1729[1]
  return i1728
}

Deserializers["BackImage"] = function (request, data, root) {
  var i1730 = root || request.c( 'BackImage' )
  var i1731 = data
  return i1730
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i1732 = root || request.c( 'AheadImage' )
  var i1733 = data
  return i1732
}

Deserializers["Order"] = function (request, data, root) {
  var i1734 = root || request.c( 'Order' )
  var i1735 = data
  request.r(i1735[0], i1735[1], 0, i1734, '_juiceAnimator')
  request.r(i1735[2], i1735[3], 0, i1734, '_cupAnimator')
  request.r(i1735[4], i1735[5], 0, i1734, '_canvasAnimator')
  i1734.CupType = i1735[6]
  i1734.JuiceType = i1735[7]
  i1734.AdditiveType1 = i1735[8]
  i1734.AdditiveType2 = i1735[9]
  i1734.IsFree = !!i1735[10]
  i1734.IsSpriteReady = !!i1735[11]
  i1734.IsCupReady = !!i1735[12]
  i1734.IsJuiceReady = !!i1735[13]
  i1734.IsPouring = !!i1735[14]
  request.r(i1735[15], i1735[16], 0, i1734, '_iceButton')
  request.r(i1735[17], i1735[18], 0, i1734, '_grassButton')
  request.r(i1735[19], i1735[20], 0, i1734, '_juiceBallsButton')
  request.r(i1735[21], i1735[22], 0, i1734, '_strawButton')
  request.r(i1735[23], i1735[24], 0, i1734, '_bigCupButton')
  request.r(i1735[25], i1735[26], 0, i1734, '_middleCupButton')
  request.r(i1735[27], i1735[28], 0, i1734, '_smallCupButton')
  request.r(i1735[29], i1735[30], 0, i1734, '_appleButton')
  request.r(i1735[31], i1735[32], 0, i1734, '_orangeButton')
  request.r(i1735[33], i1735[34], 0, i1734, '_multifruitButton')
  request.r(i1735[35], i1735[36], 0, i1734, '_tomatoButton')
  request.r(i1735[37], i1735[38], 0, i1734, '_cherryButton')
  request.r(i1735[39], i1735[40], 0, i1734, '_smallRawJuiceImage')
  request.r(i1735[41], i1735[42], 0, i1734, '_middleRawJuiceImage')
  request.r(i1735[43], i1735[44], 0, i1734, '_bigRawJuiceImage')
  request.r(i1735[45], i1735[46], 0, i1734, '_smallReadyJuiceImage')
  request.r(i1735[47], i1735[48], 0, i1734, '_middleReadyJuiceImage')
  request.r(i1735[49], i1735[50], 0, i1734, '_bigReadyJuiceImage')
  request.r(i1735[51], i1735[52], 0, i1734, '_backImage')
  request.r(i1735[53], i1735[54], 0, i1734, '_aheadImage')
  request.r(i1735[55], i1735[56], 0, i1734, '_config')
  request.r(i1735[57], i1735[58], 0, i1734, '_takeOrderButton')
  request.r(i1735[59], i1735[60], 0, i1734, '_peopleContainer')
  request.r(i1735[61], i1735[62], 0, i1734, '_tutorial')
  request.r(i1735[63], i1735[64], 0, i1734, '_bText')
  request.r(i1735[65], i1735[66], 0, i1734, '_mText')
  request.r(i1735[67], i1735[68], 0, i1734, '_sText')
  request.r(i1735[69], i1735[70], 0, i1734, '_garbageButton')
  request.r(i1735[71], i1735[72], 0, i1734, '_clickSound')
  request.r(i1735[73], i1735[74], 0, i1734, '_juiceSound')
  return i1734
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i1736 = root || request.c( 'Tutorial' )
  var i1737 = data
  i1736.IsTutorial = !!i1737[0]
  request.r(i1737[1], i1737[2], 0, i1736, 'Finger1')
  request.r(i1737[3], i1737[4], 0, i1736, 'Finger2')
  request.r(i1737[5], i1737[6], 0, i1736, 'Finger3')
  request.r(i1737[7], i1737[8], 0, i1736, 'Finger4')
  request.r(i1737[9], i1737[10], 0, i1736, 'Finger5')
  request.r(i1737[11], i1737[12], 0, i1736, 'BuyBigCupFinger')
  request.r(i1737[13], i1737[14], 0, i1736, 'BuyJuiceFinger')
  request.r(i1737[15], i1737[16], 0, i1736, 'SmallCupButton')
  request.r(i1737[17], i1737[18], 0, i1736, 'JuiceButton')
  request.r(i1737[19], i1737[20], 0, i1736, 'StrawButton')
  request.r(i1737[21], i1737[22], 0, i1736, 'AdditiveButton')
  request.r(i1737[23], i1737[24], 0, i1736, 'ReadyButton')
  var i1739 = i1737[25]
  var i1738 = []
  for(var i = 0; i < i1739.length; i += 2) {
  request.r(i1739[i + 0], i1739[i + 1], 2, i1738, '')
  }
  i1736.Buttons = i1738
  request.r(i1737[26], i1737[27], 0, i1736, 'Bank')
  return i1736
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i1742 = root || request.c( 'SoundSwitcher' )
  var i1743 = data
  request.r(i1743[0], i1743[1], 0, i1742, '_onImage')
  request.r(i1743[2], i1743[3], 0, i1742, '_offImage')
  return i1742
}

Deserializers["Fix.ClickCta"] = function (request, data, root) {
  var i1744 = root || request.c( 'Fix.ClickCta' )
  var i1745 = data
  return i1744
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1746 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1747 = data
  request.r(i1747[0], i1747[1], 0, i1746, 'm_FirstSelected')
  i1746.m_sendNavigationEvents = !!i1747[2]
  i1746.m_DragThreshold = i1747[3]
  return i1746
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1748 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1749 = data
  i1748.m_HorizontalAxis = i1749[0]
  i1748.m_VerticalAxis = i1749[1]
  i1748.m_SubmitButton = i1749[2]
  i1748.m_CancelButton = i1749[3]
  i1748.m_InputActionsPerSecond = i1749[4]
  i1748.m_RepeatDelay = i1749[5]
  i1748.m_ForceModuleActive = !!i1749[6]
  i1748.m_SendPointerHoverToParent = !!i1749[7]
  return i1748
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i1750 = root || request.c( 'JuiceConfig' )
  var i1751 = data
  request.r(i1751[0], i1751[1], 0, i1750, 'EntityBigCup')
  request.r(i1751[2], i1751[3], 0, i1750, 'TomatoBigCup')
  request.r(i1751[4], i1751[5], 0, i1750, 'AppleBigCup')
  request.r(i1751[6], i1751[7], 0, i1750, 'OrangeBigCup')
  request.r(i1751[8], i1751[9], 0, i1750, 'CherryBigCup')
  request.r(i1751[10], i1751[11], 0, i1750, 'MultifruitBigCup')
  request.r(i1751[12], i1751[13], 0, i1750, 'TomatoBigStrawCup')
  request.r(i1751[14], i1751[15], 0, i1750, 'MultifruitBigStrawCup')
  request.r(i1751[16], i1751[17], 0, i1750, 'AppleBigStrawCup')
  request.r(i1751[18], i1751[19], 0, i1750, 'OrangeBigStrawCup')
  request.r(i1751[20], i1751[21], 0, i1750, 'CherryBigStrawCup')
  request.r(i1751[22], i1751[23], 0, i1750, 'MultifruitBigBallsCup')
  request.r(i1751[24], i1751[25], 0, i1750, 'TomatoBigBallsCup')
  request.r(i1751[26], i1751[27], 0, i1750, 'AppleBigBallsCup')
  request.r(i1751[28], i1751[29], 0, i1750, 'OrangeBigBallsCup')
  request.r(i1751[30], i1751[31], 0, i1750, 'CherryBigBallsCup')
  request.r(i1751[32], i1751[33], 0, i1750, 'EntityMiddleCup')
  request.r(i1751[34], i1751[35], 0, i1750, 'TomatoMiddleCup')
  request.r(i1751[36], i1751[37], 0, i1750, 'AppleMiddleCup')
  request.r(i1751[38], i1751[39], 0, i1750, 'OrangeMiddleCup')
  request.r(i1751[40], i1751[41], 0, i1750, 'CherryMiddleCup')
  request.r(i1751[42], i1751[43], 0, i1750, 'MultifruitMiddleCup')
  request.r(i1751[44], i1751[45], 0, i1750, 'TomatoMiddleStrawCup')
  request.r(i1751[46], i1751[47], 0, i1750, 'MultifruitMiddleStrawCup')
  request.r(i1751[48], i1751[49], 0, i1750, 'AppleMiddleStrawCup')
  request.r(i1751[50], i1751[51], 0, i1750, 'OrangeMiddleStrawCup')
  request.r(i1751[52], i1751[53], 0, i1750, 'CherryMiddleStrawCup')
  request.r(i1751[54], i1751[55], 0, i1750, 'MultifruitMiddleBallsCup')
  request.r(i1751[56], i1751[57], 0, i1750, 'TomatoMiddleBallsCup')
  request.r(i1751[58], i1751[59], 0, i1750, 'AppleMiddleBallsCup')
  request.r(i1751[60], i1751[61], 0, i1750, 'OrangeMiddleBallsCup')
  request.r(i1751[62], i1751[63], 0, i1750, 'CherryMiddleBallsCup')
  request.r(i1751[64], i1751[65], 0, i1750, 'EntitySmallCup')
  request.r(i1751[66], i1751[67], 0, i1750, 'TomatoSmallCup')
  request.r(i1751[68], i1751[69], 0, i1750, 'AppleSmallCup')
  request.r(i1751[70], i1751[71], 0, i1750, 'OrangeSmallCup')
  request.r(i1751[72], i1751[73], 0, i1750, 'CherrySmallCup')
  request.r(i1751[74], i1751[75], 0, i1750, 'MultifruitSmallCup')
  request.r(i1751[76], i1751[77], 0, i1750, 'TomatoSmallStrawCup')
  request.r(i1751[78], i1751[79], 0, i1750, 'AppleSmallStrawCup')
  request.r(i1751[80], i1751[81], 0, i1750, 'OrangeSmallStrawCup')
  request.r(i1751[82], i1751[83], 0, i1750, 'CherrySmallStrawCup')
  request.r(i1751[84], i1751[85], 0, i1750, 'MultifruitSmallStrawCup')
  request.r(i1751[86], i1751[87], 0, i1750, 'AppleSmallBallsCup')
  request.r(i1751[88], i1751[89], 0, i1750, 'TomatoSmallBallsCup')
  request.r(i1751[90], i1751[91], 0, i1750, 'OrangeSmallBallsCup')
  request.r(i1751[92], i1751[93], 0, i1750, 'CherrySmallBallsCup')
  request.r(i1751[94], i1751[95], 0, i1750, 'MultifruitSmallBallsCup')
  request.r(i1751[96], i1751[97], 0, i1750, 'JuiceBallAdditive')
  request.r(i1751[98], i1751[99], 0, i1750, 'IceAdditive')
  request.r(i1751[100], i1751[101], 0, i1750, 'GrassAdditive')
  return i1750
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i1752 = root || request.c( 'TouchIdleTimer' )
  var i1753 = data
  return i1752
}

Deserializers["Helper"] = function (request, data, root) {
  var i1754 = root || request.c( 'Helper' )
  var i1755 = data
  request.r(i1755[0], i1755[1], 0, i1754, '_smallCupFinger')
  request.r(i1755[2], i1755[3], 0, i1754, '_middleCupFinger')
  request.r(i1755[4], i1755[5], 0, i1754, '_bigCupFinger')
  request.r(i1755[6], i1755[7], 0, i1754, '_iceFinger')
  request.r(i1755[8], i1755[9], 0, i1754, '_grassFinger')
  request.r(i1755[10], i1755[11], 0, i1754, '_juiceballFinger')
  request.r(i1755[12], i1755[13], 0, i1754, '_appleFinger')
  request.r(i1755[14], i1755[15], 0, i1754, '_cherryFinger')
  request.r(i1755[16], i1755[17], 0, i1754, '_orangeFinger')
  request.r(i1755[18], i1755[19], 0, i1754, '_multifruitFinger')
  request.r(i1755[20], i1755[21], 0, i1754, '_tomatoFinger')
  request.r(i1755[22], i1755[23], 0, i1754, '_strawFinger')
  request.r(i1755[24], i1755[25], 0, i1754, '_readyFinger')
  var i1757 = i1755[26]
  var i1756 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1757.length; i += 2) {
  request.r(i1757[i + 0], i1757[i + 1], 1, i1756, '')
  }
  i1754._juiseButtons = i1756
  request.r(i1755[27], i1755[28], 0, i1754, '_peoples')
  request.r(i1755[29], i1755[30], 0, i1754, '_tutorial')
  request.r(i1755[31], i1755[32], 0, i1754, '_order')
  request.r(i1755[33], i1755[34], 0, i1754, '_strawButton')
  request.r(i1755[35], i1755[36], 0, i1754, '_bigCupButton')
  request.r(i1755[37], i1755[38], 0, i1754, '_middleCupButton')
  request.r(i1755[39], i1755[40], 0, i1754, '_smallCupButton')
  request.r(i1755[41], i1755[42], 0, i1754, '_grassButton')
  request.r(i1755[43], i1755[44], 0, i1754, '_juiceballButton')
  request.r(i1755[45], i1755[46], 0, i1754, '_iceButton')
  request.r(i1755[47], i1755[48], 0, i1754, '_readyButton')
  request.r(i1755[49], i1755[50], 0, i1754, '_touchIdleTimer')
  request.r(i1755[51], i1755[52], 0, i1754, '_finalScreen')
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1761 = data
  i1760.ambientIntensity = i1761[0]
  i1760.reflectionIntensity = i1761[1]
  i1760.ambientMode = i1761[2]
  i1760.ambientLight = new pc.Color(i1761[3], i1761[4], i1761[5], i1761[6])
  i1760.ambientSkyColor = new pc.Color(i1761[7], i1761[8], i1761[9], i1761[10])
  i1760.ambientGroundColor = new pc.Color(i1761[11], i1761[12], i1761[13], i1761[14])
  i1760.ambientEquatorColor = new pc.Color(i1761[15], i1761[16], i1761[17], i1761[18])
  i1760.fogColor = new pc.Color(i1761[19], i1761[20], i1761[21], i1761[22])
  i1760.fogEndDistance = i1761[23]
  i1760.fogStartDistance = i1761[24]
  i1760.fogDensity = i1761[25]
  i1760.fog = !!i1761[26]
  request.r(i1761[27], i1761[28], 0, i1760, 'skybox')
  i1760.fogMode = i1761[29]
  var i1763 = i1761[30]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1763[i + 0]) );
  }
  i1760.lightmaps = i1762
  i1760.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1761[31], i1760.lightProbes)
  i1760.lightmapsMode = i1761[32]
  i1760.mixedBakeMode = i1761[33]
  i1760.environmentLightingMode = i1761[34]
  i1760.ambientProbe = new pc.SphericalHarmonicsL2(i1761[35])
  i1760.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1761[36])
  i1760.useReferenceAmbientProbe = !!i1761[37]
  request.r(i1761[38], i1761[39], 0, i1760, 'customReflection')
  request.r(i1761[40], i1761[41], 0, i1760, 'defaultReflection')
  i1760.defaultReflectionMode = i1761[42]
  i1760.defaultReflectionResolution = i1761[43]
  i1760.sunLightObjectId = i1761[44]
  i1760.pixelLightCount = i1761[45]
  i1760.defaultReflectionHDR = !!i1761[46]
  i1760.hasLightDataAsset = !!i1761[47]
  i1760.hasManualGenerate = !!i1761[48]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1767 = data
  request.r(i1767[0], i1767[1], 0, i1766, 'lightmapColor')
  request.r(i1767[2], i1767[3], 0, i1766, 'lightmapDirection')
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1768 = root || new UnityEngine.LightProbes()
  var i1769 = data
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1777 = data
  var i1779 = i1777[0]
  var i1778 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1779[i + 0]));
  }
  i1776.ShaderCompilationErrors = i1778
  i1776.name = i1777[1]
  i1776.guid = i1777[2]
  var i1781 = i1777[3]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( i1781[i + 0] );
  }
  i1776.shaderDefinedKeywords = i1780
  var i1783 = i1777[4]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1783[i + 0]) );
  }
  i1776.passes = i1782
  var i1785 = i1777[5]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1785[i + 0]) );
  }
  i1776.usePasses = i1784
  var i1787 = i1777[6]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1787[i + 0]) );
  }
  i1776.defaultParameterValues = i1786
  request.r(i1777[7], i1777[8], 0, i1776, 'unityFallbackShader')
  i1776.readDepth = !!i1777[9]
  i1776.isCreatedByShaderGraph = !!i1777[10]
  i1776.compiled = !!i1777[11]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1791 = data
  i1790.shaderName = i1791[0]
  i1790.errorMessage = i1791[1]
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1796 = root || new pc.UnityShaderPass()
  var i1797 = data
  i1796.id = i1797[0]
  i1796.subShaderIndex = i1797[1]
  i1796.name = i1797[2]
  i1796.passType = i1797[3]
  i1796.grabPassTextureName = i1797[4]
  i1796.usePass = !!i1797[5]
  i1796.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[6], i1796.zTest)
  i1796.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[7], i1796.zWrite)
  i1796.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[8], i1796.culling)
  i1796.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1797[9], i1796.blending)
  i1796.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1797[10], i1796.alphaBlending)
  i1796.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[11], i1796.colorWriteMask)
  i1796.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[12], i1796.offsetUnits)
  i1796.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[13], i1796.offsetFactor)
  i1796.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[14], i1796.stencilRef)
  i1796.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[15], i1796.stencilReadMask)
  i1796.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[16], i1796.stencilWriteMask)
  i1796.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1797[17], i1796.stencilOp)
  i1796.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1797[18], i1796.stencilOpFront)
  i1796.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1797[19], i1796.stencilOpBack)
  var i1799 = i1797[20]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1799[i + 0]) );
  }
  i1796.tags = i1798
  var i1801 = i1797[21]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.push( i1801[i + 0] );
  }
  i1796.passDefinedKeywords = i1800
  var i1803 = i1797[22]
  var i1802 = []
  for(var i = 0; i < i1803.length; i += 1) {
    i1802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1803[i + 0]) );
  }
  i1796.passDefinedKeywordGroups = i1802
  var i1805 = i1797[23]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1805[i + 0]) );
  }
  i1796.variants = i1804
  var i1807 = i1797[24]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1807[i + 0]) );
  }
  i1796.excludedVariants = i1806
  i1796.hasDepthReader = !!i1797[25]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1809 = data
  i1808.val = i1809[0]
  i1808.name = i1809[1]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1811 = data
  i1810.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1811[0], i1810.src)
  i1810.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1811[1], i1810.dst)
  i1810.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1811[2], i1810.op)
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1813 = data
  i1812.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1813[0], i1812.pass)
  i1812.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1813[1], i1812.fail)
  i1812.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1813[2], i1812.zFail)
  i1812.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1813[3], i1812.comp)
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1817 = data
  i1816.name = i1817[0]
  i1816.value = i1817[1]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1821 = data
  var i1823 = i1821[0]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( i1823[i + 0] );
  }
  i1820.keywords = i1822
  i1820.hasDiscard = !!i1821[1]
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1827 = data
  i1826.passId = i1827[0]
  i1826.subShaderIndex = i1827[1]
  var i1829 = i1827[2]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( i1829[i + 0] );
  }
  i1826.keywords = i1828
  i1826.vertexProgram = i1827[3]
  i1826.fragmentProgram = i1827[4]
  i1826.exportedForWebGl2 = !!i1827[5]
  i1826.readDepth = !!i1827[6]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1833 = data
  request.r(i1833[0], i1833[1], 0, i1832, 'shader')
  i1832.pass = i1833[2]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1837 = data
  i1836.name = i1837[0]
  i1836.type = i1837[1]
  i1836.value = new pc.Vec4( i1837[2], i1837[3], i1837[4], i1837[5] )
  i1836.textureValue = i1837[6]
  i1836.shaderPropertyFlag = i1837[7]
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1839 = data
  i1838.name = i1839[0]
  request.r(i1839[1], i1839[2], 0, i1838, 'texture')
  i1838.aabb = i1839[3]
  i1838.vertices = i1839[4]
  i1838.triangles = i1839[5]
  i1838.textureRect = UnityEngine.Rect.MinMaxRect(i1839[6], i1839[7], i1839[8], i1839[9])
  i1838.packedRect = UnityEngine.Rect.MinMaxRect(i1839[10], i1839[11], i1839[12], i1839[13])
  i1838.border = new pc.Vec4( i1839[14], i1839[15], i1839[16], i1839[17] )
  i1838.transparency = i1839[18]
  i1838.bounds = i1839[19]
  i1838.pixelsPerUnit = i1839[20]
  i1838.textureWidth = i1839[21]
  i1838.textureHeight = i1839[22]
  i1838.nativeSize = new pc.Vec2( i1839[23], i1839[24] )
  i1838.pivot = new pc.Vec2( i1839[25], i1839[26] )
  i1838.textureRectOffset = new pc.Vec2( i1839[27], i1839[28] )
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1841 = data
  i1840.name = i1841[0]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1843 = data
  i1842.name = i1843[0]
  i1842.wrapMode = i1843[1]
  i1842.isLooping = !!i1843[2]
  i1842.length = i1843[3]
  var i1845 = i1843[4]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1845[i + 0]) );
  }
  i1842.curves = i1844
  var i1847 = i1843[5]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1847[i + 0]) );
  }
  i1842.events = i1846
  i1842.halfPrecision = !!i1843[6]
  i1842._frameRate = i1843[7]
  i1842.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1843[8], i1842.localBounds)
  i1842.hasMuscleCurves = !!i1843[9]
  var i1849 = i1843[10]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( i1849[i + 0] );
  }
  i1842.clipMuscleConstant = i1848
  i1842.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1843[11], i1842.clipBindingConstant)
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1853 = data
  i1852.path = i1853[0]
  i1852.hash = i1853[1]
  i1852.componentType = i1853[2]
  i1852.property = i1853[3]
  i1852.keys = i1853[4]
  var i1855 = i1853[5]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1855[i + 0]) );
  }
  i1852.objectReferenceKeys = i1854
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1859 = data
  i1858.time = i1859[0]
  request.r(i1859[1], i1859[2], 0, i1858, 'value')
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1863 = data
  i1862.functionName = i1863[0]
  i1862.floatParameter = i1863[1]
  i1862.intParameter = i1863[2]
  i1862.stringParameter = i1863[3]
  request.r(i1863[4], i1863[5], 0, i1862, 'objectReferenceParameter')
  i1862.time = i1863[6]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1865 = data
  i1864.center = new pc.Vec3( i1865[0], i1865[1], i1865[2] )
  i1864.extends = new pc.Vec3( i1865[3], i1865[4], i1865[5] )
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1869 = data
  var i1871 = i1869[0]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( i1871[i + 0] );
  }
  i1868.genericBindings = i1870
  var i1873 = i1869[1]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( i1873[i + 0] );
  }
  i1868.pptrCurveMapping = i1872
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1875 = data
  i1874.name = i1875[0]
  i1874.ascent = i1875[1]
  i1874.originalLineHeight = i1875[2]
  i1874.fontSize = i1875[3]
  var i1877 = i1875[4]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1877[i + 0]) );
  }
  i1874.characterInfo = i1876
  request.r(i1875[5], i1875[6], 0, i1874, 'texture')
  i1874.originalFontSize = i1875[7]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1881 = data
  i1880.index = i1881[0]
  i1880.advance = i1881[1]
  i1880.bearing = i1881[2]
  i1880.glyphWidth = i1881[3]
  i1880.glyphHeight = i1881[4]
  i1880.minX = i1881[5]
  i1880.maxX = i1881[6]
  i1880.minY = i1881[7]
  i1880.maxY = i1881[8]
  i1880.uvBottomLeftX = i1881[9]
  i1880.uvBottomLeftY = i1881[10]
  i1880.uvBottomRightX = i1881[11]
  i1880.uvBottomRightY = i1881[12]
  i1880.uvTopLeftX = i1881[13]
  i1880.uvTopLeftY = i1881[14]
  i1880.uvTopRightX = i1881[15]
  i1880.uvTopRightY = i1881[16]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1883 = data
  i1882.name = i1883[0]
  var i1885 = i1883[1]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1885[i + 0]) );
  }
  i1882.layers = i1884
  var i1887 = i1883[2]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1887[i + 0]) );
  }
  i1882.parameters = i1886
  i1882.animationClips = i1883[3]
  i1882.avatarUnsupported = i1883[4]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1891 = data
  i1890.name = i1891[0]
  i1890.defaultWeight = i1891[1]
  i1890.blendingMode = i1891[2]
  i1890.avatarMask = i1891[3]
  i1890.syncedLayerIndex = i1891[4]
  i1890.syncedLayerAffectsTiming = !!i1891[5]
  i1890.syncedLayers = i1891[6]
  i1890.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1891[7], i1890.stateMachine)
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1893 = data
  i1892.id = i1893[0]
  i1892.name = i1893[1]
  i1892.path = i1893[2]
  var i1895 = i1893[3]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1895[i + 0]) );
  }
  i1892.states = i1894
  var i1897 = i1893[4]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1897[i + 0]) );
  }
  i1892.machines = i1896
  var i1899 = i1893[5]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1899[i + 0]) );
  }
  i1892.entryStateTransitions = i1898
  var i1901 = i1893[6]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1901[i + 0]) );
  }
  i1892.exitStateTransitions = i1900
  var i1903 = i1893[7]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1903[i + 0]) );
  }
  i1892.anyStateTransitions = i1902
  i1892.defaultStateId = i1893[8]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1907 = data
  i1906.id = i1907[0]
  i1906.name = i1907[1]
  i1906.cycleOffset = i1907[2]
  i1906.cycleOffsetParameter = i1907[3]
  i1906.cycleOffsetParameterActive = !!i1907[4]
  i1906.mirror = !!i1907[5]
  i1906.mirrorParameter = i1907[6]
  i1906.mirrorParameterActive = !!i1907[7]
  i1906.motionId = i1907[8]
  i1906.nameHash = i1907[9]
  i1906.fullPathHash = i1907[10]
  i1906.speed = i1907[11]
  i1906.speedParameter = i1907[12]
  i1906.speedParameterActive = !!i1907[13]
  i1906.tag = i1907[14]
  i1906.tagHash = i1907[15]
  i1906.writeDefaultValues = !!i1907[16]
  var i1909 = i1907[17]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 2) {
  request.r(i1909[i + 0], i1909[i + 1], 2, i1908, '')
  }
  i1906.behaviours = i1908
  var i1911 = i1907[18]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1911[i + 0]) );
  }
  i1906.transitions = i1910
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1917 = data
  i1916.fullPath = i1917[0]
  i1916.canTransitionToSelf = !!i1917[1]
  i1916.duration = i1917[2]
  i1916.exitTime = i1917[3]
  i1916.hasExitTime = !!i1917[4]
  i1916.hasFixedDuration = !!i1917[5]
  i1916.interruptionSource = i1917[6]
  i1916.offset = i1917[7]
  i1916.orderedInterruption = !!i1917[8]
  i1916.destinationStateId = i1917[9]
  i1916.isExit = !!i1917[10]
  i1916.mute = !!i1917[11]
  i1916.solo = !!i1917[12]
  var i1919 = i1917[13]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1919[i + 0]) );
  }
  i1916.conditions = i1918
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1925 = data
  i1924.destinationStateId = i1925[0]
  i1924.isExit = !!i1925[1]
  i1924.mute = !!i1925[2]
  i1924.solo = !!i1925[3]
  var i1927 = i1925[4]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1927[i + 0]) );
  }
  i1924.conditions = i1926
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1931 = data
  i1930.mode = i1931[0]
  i1930.parameter = i1931[1]
  i1930.threshold = i1931[2]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1935 = data
  i1934.defaultBool = !!i1935[0]
  i1934.defaultFloat = i1935[1]
  i1934.defaultInt = i1935[2]
  i1934.name = i1935[3]
  i1934.nameHash = i1935[4]
  i1934.type = i1935[5]
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1937 = data
  i1936.name = i1937[0]
  i1936.bytes64 = i1937[1]
  i1936.data = i1937[2]
  return i1936
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1938 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1939 = data
  i1938.hashCode = i1939[0]
  request.r(i1939[1], i1939[2], 0, i1938, 'material')
  i1938.materialHashCode = i1939[3]
  request.r(i1939[4], i1939[5], 0, i1938, 'atlas')
  i1938.normalStyle = i1939[6]
  i1938.normalSpacingOffset = i1939[7]
  i1938.boldStyle = i1939[8]
  i1938.boldSpacing = i1939[9]
  i1938.italicStyle = i1939[10]
  i1938.tabSize = i1939[11]
  i1938.m_Version = i1939[12]
  i1938.m_SourceFontFileGUID = i1939[13]
  request.r(i1939[14], i1939[15], 0, i1938, 'm_SourceFontFile_EditorRef')
  request.r(i1939[16], i1939[17], 0, i1938, 'm_SourceFontFile')
  i1938.m_AtlasPopulationMode = i1939[18]
  i1938.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1939[19], i1938.m_FaceInfo)
  var i1941 = i1939[20]
  var i1940 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.add(request.d('UnityEngine.TextCore.Glyph', i1941[i + 0]));
  }
  i1938.m_GlyphTable = i1940
  var i1943 = i1939[21]
  var i1942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.add(request.d('TMPro.TMP_Character', i1943[i + 0]));
  }
  i1938.m_CharacterTable = i1942
  var i1945 = i1939[22]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 2) {
  request.r(i1945[i + 0], i1945[i + 1], 2, i1944, '')
  }
  i1938.m_AtlasTextures = i1944
  i1938.m_AtlasTextureIndex = i1939[23]
  i1938.m_IsMultiAtlasTexturesEnabled = !!i1939[24]
  i1938.m_ClearDynamicDataOnBuild = !!i1939[25]
  var i1947 = i1939[26]
  var i1946 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.add(request.d('UnityEngine.TextCore.GlyphRect', i1947[i + 0]));
  }
  i1938.m_UsedGlyphRects = i1946
  var i1949 = i1939[27]
  var i1948 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.add(request.d('UnityEngine.TextCore.GlyphRect', i1949[i + 0]));
  }
  i1938.m_FreeGlyphRects = i1948
  i1938.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1939[28], i1938.m_fontInfo)
  i1938.m_AtlasWidth = i1939[29]
  i1938.m_AtlasHeight = i1939[30]
  i1938.m_AtlasPadding = i1939[31]
  i1938.m_AtlasRenderMode = i1939[32]
  var i1951 = i1939[33]
  var i1950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.add(request.d('TMPro.TMP_Glyph', i1951[i + 0]));
  }
  i1938.m_glyphInfoList = i1950
  i1938.m_KerningTable = request.d('TMPro.KerningTable', i1939[34], i1938.m_KerningTable)
  i1938.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1939[35], i1938.m_FontFeatureTable)
  var i1953 = i1939[36]
  var i1952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1953.length; i += 2) {
  request.r(i1953[i + 0], i1953[i + 1], 1, i1952, '')
  }
  i1938.fallbackFontAssets = i1952
  var i1955 = i1939[37]
  var i1954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1955.length; i += 2) {
  request.r(i1955[i + 0], i1955[i + 1], 1, i1954, '')
  }
  i1938.m_FallbackFontAssetTable = i1954
  i1938.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1939[38], i1938.m_CreationSettings)
  var i1957 = i1939[39]
  var i1956 = []
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.push( request.d('TMPro.TMP_FontWeightPair', i1957[i + 0]) );
  }
  i1938.m_FontWeightTable = i1956
  var i1959 = i1939[40]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( request.d('TMPro.TMP_FontWeightPair', i1959[i + 0]) );
  }
  i1938.fontWeights = i1958
  return i1938
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1961 = data
  i1960.m_FaceIndex = i1961[0]
  i1960.m_FamilyName = i1961[1]
  i1960.m_StyleName = i1961[2]
  i1960.m_PointSize = i1961[3]
  i1960.m_Scale = i1961[4]
  i1960.m_UnitsPerEM = i1961[5]
  i1960.m_LineHeight = i1961[6]
  i1960.m_AscentLine = i1961[7]
  i1960.m_CapLine = i1961[8]
  i1960.m_MeanLine = i1961[9]
  i1960.m_Baseline = i1961[10]
  i1960.m_DescentLine = i1961[11]
  i1960.m_SuperscriptOffset = i1961[12]
  i1960.m_SuperscriptSize = i1961[13]
  i1960.m_SubscriptOffset = i1961[14]
  i1960.m_SubscriptSize = i1961[15]
  i1960.m_UnderlineOffset = i1961[16]
  i1960.m_UnderlineThickness = i1961[17]
  i1960.m_StrikethroughOffset = i1961[18]
  i1960.m_StrikethroughThickness = i1961[19]
  i1960.m_TabWidth = i1961[20]
  return i1960
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1964 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1965 = data
  i1964.m_Index = i1965[0]
  i1964.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1965[1], i1964.m_Metrics)
  i1964.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1965[2], i1964.m_GlyphRect)
  i1964.m_Scale = i1965[3]
  i1964.m_AtlasIndex = i1965[4]
  i1964.m_ClassDefinitionType = i1965[5]
  return i1964
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1967 = data
  i1966.m_Width = i1967[0]
  i1966.m_Height = i1967[1]
  i1966.m_HorizontalBearingX = i1967[2]
  i1966.m_HorizontalBearingY = i1967[3]
  i1966.m_HorizontalAdvance = i1967[4]
  return i1966
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1968 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1969 = data
  i1968.m_X = i1969[0]
  i1968.m_Y = i1969[1]
  i1968.m_Width = i1969[2]
  i1968.m_Height = i1969[3]
  return i1968
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1972 = root || request.c( 'TMPro.TMP_Character' )
  var i1973 = data
  i1972.m_ElementType = i1973[0]
  i1972.m_Unicode = i1973[1]
  i1972.m_GlyphIndex = i1973[2]
  i1972.m_Scale = i1973[3]
  return i1972
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1978 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1979 = data
  i1978.Name = i1979[0]
  i1978.PointSize = i1979[1]
  i1978.Scale = i1979[2]
  i1978.CharacterCount = i1979[3]
  i1978.LineHeight = i1979[4]
  i1978.Baseline = i1979[5]
  i1978.Ascender = i1979[6]
  i1978.CapHeight = i1979[7]
  i1978.Descender = i1979[8]
  i1978.CenterLine = i1979[9]
  i1978.SuperscriptOffset = i1979[10]
  i1978.SubscriptOffset = i1979[11]
  i1978.SubSize = i1979[12]
  i1978.Underline = i1979[13]
  i1978.UnderlineThickness = i1979[14]
  i1978.strikethrough = i1979[15]
  i1978.strikethroughThickness = i1979[16]
  i1978.TabWidth = i1979[17]
  i1978.Padding = i1979[18]
  i1978.AtlasWidth = i1979[19]
  i1978.AtlasHeight = i1979[20]
  return i1978
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1982 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1983 = data
  i1982.id = i1983[0]
  i1982.x = i1983[1]
  i1982.y = i1983[2]
  i1982.width = i1983[3]
  i1982.height = i1983[4]
  i1982.xOffset = i1983[5]
  i1982.yOffset = i1983[6]
  i1982.xAdvance = i1983[7]
  i1982.scale = i1983[8]
  return i1982
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1984 = root || request.c( 'TMPro.KerningTable' )
  var i1985 = data
  var i1987 = i1985[0]
  var i1986 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.add(request.d('TMPro.KerningPair', i1987[i + 0]));
  }
  i1984.kerningPairs = i1986
  return i1984
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1990 = root || request.c( 'TMPro.KerningPair' )
  var i1991 = data
  i1990.xOffset = i1991[0]
  i1990.m_FirstGlyph = i1991[1]
  i1990.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1991[2], i1990.m_FirstGlyphAdjustments)
  i1990.m_SecondGlyph = i1991[3]
  i1990.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1991[4], i1990.m_SecondGlyphAdjustments)
  i1990.m_IgnoreSpacingAdjustments = !!i1991[5]
  return i1990
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1992 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1993 = data
  var i1995 = i1993[0]
  var i1994 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1995.length; i += 1) {
    i1994.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1995[i + 0]));
  }
  i1992.m_GlyphPairAdjustmentRecords = i1994
  return i1992
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1998 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1999 = data
  i1998.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1999[0], i1998.m_FirstAdjustmentRecord)
  i1998.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1999[1], i1998.m_SecondAdjustmentRecord)
  i1998.m_FeatureLookupFlags = i1999[2]
  return i1998
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2000 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2001 = data
  i2000.m_GlyphIndex = i2001[0]
  i2000.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2001[1], i2000.m_GlyphValueRecord)
  return i2000
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2002 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2003 = data
  i2002.m_XPlacement = i2003[0]
  i2002.m_YPlacement = i2003[1]
  i2002.m_XAdvance = i2003[2]
  i2002.m_YAdvance = i2003[3]
  return i2002
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2006 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2007 = data
  i2006.sourceFontFileName = i2007[0]
  i2006.sourceFontFileGUID = i2007[1]
  i2006.pointSizeSamplingMode = i2007[2]
  i2006.pointSize = i2007[3]
  i2006.padding = i2007[4]
  i2006.packingMode = i2007[5]
  i2006.atlasWidth = i2007[6]
  i2006.atlasHeight = i2007[7]
  i2006.characterSetSelectionMode = i2007[8]
  i2006.characterSequence = i2007[9]
  i2006.referencedFontAssetGUID = i2007[10]
  i2006.referencedTextAssetGUID = i2007[11]
  i2006.fontStyle = i2007[12]
  i2006.fontStyleModifier = i2007[13]
  i2006.renderMode = i2007[14]
  i2006.includeFontFeatures = !!i2007[15]
  return i2006
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2010 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2011 = data
  request.r(i2011[0], i2011[1], 0, i2010, 'regularTypeface')
  request.r(i2011[2], i2011[3], 0, i2010, 'italicTypeface')
  return i2010
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2012 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2013 = data
  i2012.useSafeMode = !!i2013[0]
  i2012.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2013[1], i2012.safeModeOptions)
  i2012.timeScale = i2013[2]
  i2012.unscaledTimeScale = i2013[3]
  i2012.useSmoothDeltaTime = !!i2013[4]
  i2012.maxSmoothUnscaledTime = i2013[5]
  i2012.rewindCallbackMode = i2013[6]
  i2012.showUnityEditorReport = !!i2013[7]
  i2012.logBehaviour = i2013[8]
  i2012.drawGizmos = !!i2013[9]
  i2012.defaultRecyclable = !!i2013[10]
  i2012.defaultAutoPlay = i2013[11]
  i2012.defaultUpdateType = i2013[12]
  i2012.defaultTimeScaleIndependent = !!i2013[13]
  i2012.defaultEaseType = i2013[14]
  i2012.defaultEaseOvershootOrAmplitude = i2013[15]
  i2012.defaultEasePeriod = i2013[16]
  i2012.defaultAutoKill = !!i2013[17]
  i2012.defaultLoopType = i2013[18]
  i2012.debugMode = !!i2013[19]
  i2012.debugStoreTargetId = !!i2013[20]
  i2012.showPreviewPanel = !!i2013[21]
  i2012.storeSettingsLocation = i2013[22]
  i2012.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2013[23], i2012.modules)
  i2012.createASMDEF = !!i2013[24]
  i2012.showPlayingTweens = !!i2013[25]
  i2012.showPausedTweens = !!i2013[26]
  return i2012
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2014 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2015 = data
  i2014.logBehaviour = i2015[0]
  i2014.nestedTweenFailureBehaviour = i2015[1]
  return i2014
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2016 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2017 = data
  i2016.showPanel = !!i2017[0]
  i2016.audioEnabled = !!i2017[1]
  i2016.physicsEnabled = !!i2017[2]
  i2016.physics2DEnabled = !!i2017[3]
  i2016.spriteEnabled = !!i2017[4]
  i2016.uiEnabled = !!i2017[5]
  i2016.textMeshProEnabled = !!i2017[6]
  i2016.tk2DEnabled = !!i2017[7]
  i2016.deAudioEnabled = !!i2017[8]
  i2016.deUnityExtendedEnabled = !!i2017[9]
  i2016.epoOutlineEnabled = !!i2017[10]
  return i2016
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2018 = root || request.c( 'TMPro.TMP_Settings' )
  var i2019 = data
  i2018.m_enableWordWrapping = !!i2019[0]
  i2018.m_enableKerning = !!i2019[1]
  i2018.m_enableExtraPadding = !!i2019[2]
  i2018.m_enableTintAllSprites = !!i2019[3]
  i2018.m_enableParseEscapeCharacters = !!i2019[4]
  i2018.m_EnableRaycastTarget = !!i2019[5]
  i2018.m_GetFontFeaturesAtRuntime = !!i2019[6]
  i2018.m_missingGlyphCharacter = i2019[7]
  i2018.m_warningsDisabled = !!i2019[8]
  request.r(i2019[9], i2019[10], 0, i2018, 'm_defaultFontAsset')
  i2018.m_defaultFontAssetPath = i2019[11]
  i2018.m_defaultFontSize = i2019[12]
  i2018.m_defaultAutoSizeMinRatio = i2019[13]
  i2018.m_defaultAutoSizeMaxRatio = i2019[14]
  i2018.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2019[15], i2019[16] )
  i2018.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2019[17], i2019[18] )
  i2018.m_autoSizeTextContainer = !!i2019[19]
  i2018.m_IsTextObjectScaleStatic = !!i2019[20]
  var i2021 = i2019[21]
  var i2020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2021.length; i += 2) {
  request.r(i2021[i + 0], i2021[i + 1], 1, i2020, '')
  }
  i2018.m_fallbackFontAssets = i2020
  i2018.m_matchMaterialPreset = !!i2019[22]
  request.r(i2019[23], i2019[24], 0, i2018, 'm_defaultSpriteAsset')
  i2018.m_defaultSpriteAssetPath = i2019[25]
  i2018.m_enableEmojiSupport = !!i2019[26]
  i2018.m_MissingCharacterSpriteUnicode = i2019[27]
  i2018.m_defaultColorGradientPresetsPath = i2019[28]
  request.r(i2019[29], i2019[30], 0, i2018, 'm_defaultStyleSheet')
  i2018.m_StyleSheetsResourcePath = i2019[31]
  request.r(i2019[32], i2019[33], 0, i2018, 'm_leadingCharacters')
  request.r(i2019[34], i2019[35], 0, i2018, 'm_followingCharacters')
  i2018.m_UseModernHangulLineBreakingRules = !!i2019[36]
  return i2018
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2022 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2023 = data
  i2022.hashCode = i2023[0]
  request.r(i2023[1], i2023[2], 0, i2022, 'material')
  i2022.materialHashCode = i2023[3]
  request.r(i2023[4], i2023[5], 0, i2022, 'spriteSheet')
  var i2025 = i2023[6]
  var i2024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.add(request.d('TMPro.TMP_Sprite', i2025[i + 0]));
  }
  i2022.spriteInfoList = i2024
  var i2027 = i2023[7]
  var i2026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2027.length; i += 2) {
  request.r(i2027[i + 0], i2027[i + 1], 1, i2026, '')
  }
  i2022.fallbackSpriteAssets = i2026
  i2022.m_Version = i2023[8]
  i2022.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2023[9], i2022.m_FaceInfo)
  var i2029 = i2023[10]
  var i2028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.add(request.d('TMPro.TMP_SpriteCharacter', i2029[i + 0]));
  }
  i2022.m_SpriteCharacterTable = i2028
  var i2031 = i2023[11]
  var i2030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.add(request.d('TMPro.TMP_SpriteGlyph', i2031[i + 0]));
  }
  i2022.m_SpriteGlyphTable = i2030
  return i2022
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2034 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2035 = data
  i2034.name = i2035[0]
  i2034.hashCode = i2035[1]
  i2034.unicode = i2035[2]
  i2034.pivot = new pc.Vec2( i2035[3], i2035[4] )
  request.r(i2035[5], i2035[6], 0, i2034, 'sprite')
  i2034.id = i2035[7]
  i2034.x = i2035[8]
  i2034.y = i2035[9]
  i2034.width = i2035[10]
  i2034.height = i2035[11]
  i2034.xOffset = i2035[12]
  i2034.yOffset = i2035[13]
  i2034.xAdvance = i2035[14]
  i2034.scale = i2035[15]
  return i2034
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2040 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2041 = data
  i2040.m_Name = i2041[0]
  i2040.m_HashCode = i2041[1]
  i2040.m_ElementType = i2041[2]
  i2040.m_Unicode = i2041[3]
  i2040.m_GlyphIndex = i2041[4]
  i2040.m_Scale = i2041[5]
  return i2040
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2044 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2045 = data
  request.r(i2045[0], i2045[1], 0, i2044, 'sprite')
  i2044.m_Index = i2045[2]
  i2044.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2045[3], i2044.m_Metrics)
  i2044.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2045[4], i2044.m_GlyphRect)
  i2044.m_Scale = i2045[5]
  i2044.m_AtlasIndex = i2045[6]
  i2044.m_ClassDefinitionType = i2045[7]
  return i2044
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2046 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2047 = data
  var i2049 = i2047[0]
  var i2048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.add(request.d('TMPro.TMP_Style', i2049[i + 0]));
  }
  i2046.m_StyleList = i2048
  return i2046
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2052 = root || request.c( 'TMPro.TMP_Style' )
  var i2053 = data
  i2052.m_Name = i2053[0]
  i2052.m_HashCode = i2053[1]
  i2052.m_OpeningDefinition = i2053[2]
  i2052.m_ClosingDefinition = i2053[3]
  i2052.m_OpeningTagArray = i2053[4]
  i2052.m_ClosingTagArray = i2053[5]
  i2052.m_OpeningTagUnicodeArray = i2053[6]
  i2052.m_ClosingTagUnicodeArray = i2053[7]
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2055 = data
  var i2057 = i2055[0]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2057[i + 0]) );
  }
  i2054.files = i2056
  i2054.componentToPrefabIds = i2055[1]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2061 = data
  i2060.path = i2061[0]
  request.r(i2061[1], i2061[2], 0, i2060, 'unityObject')
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2063 = data
  var i2065 = i2063[0]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2065[i + 0]) );
  }
  i2062.scriptsExecutionOrder = i2064
  var i2067 = i2063[1]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2067[i + 0]) );
  }
  i2062.sortingLayers = i2066
  var i2069 = i2063[2]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2069[i + 0]) );
  }
  i2062.cullingLayers = i2068
  i2062.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2063[3], i2062.timeSettings)
  i2062.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2063[4], i2062.physicsSettings)
  i2062.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2063[5], i2062.physics2DSettings)
  i2062.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2063[6], i2062.qualitySettings)
  i2062.enableRealtimeShadows = !!i2063[7]
  i2062.enableAutoInstancing = !!i2063[8]
  i2062.enableDynamicBatching = !!i2063[9]
  i2062.lightmapEncodingQuality = i2063[10]
  i2062.desiredColorSpace = i2063[11]
  var i2071 = i2063[12]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.push( i2071[i + 0] );
  }
  i2062.allTags = i2070
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2075 = data
  i2074.name = i2075[0]
  i2074.value = i2075[1]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2079 = data
  i2078.id = i2079[0]
  i2078.name = i2079[1]
  i2078.value = i2079[2]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2083 = data
  i2082.id = i2083[0]
  i2082.name = i2083[1]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2085 = data
  i2084.fixedDeltaTime = i2085[0]
  i2084.maximumDeltaTime = i2085[1]
  i2084.timeScale = i2085[2]
  i2084.maximumParticleTimestep = i2085[3]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2087 = data
  i2086.gravity = new pc.Vec3( i2087[0], i2087[1], i2087[2] )
  i2086.defaultSolverIterations = i2087[3]
  i2086.bounceThreshold = i2087[4]
  i2086.autoSyncTransforms = !!i2087[5]
  i2086.autoSimulation = !!i2087[6]
  var i2089 = i2087[7]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2089[i + 0]) );
  }
  i2086.collisionMatrix = i2088
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2093 = data
  i2092.enabled = !!i2093[0]
  i2092.layerId = i2093[1]
  i2092.otherLayerId = i2093[2]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2095 = data
  request.r(i2095[0], i2095[1], 0, i2094, 'material')
  i2094.gravity = new pc.Vec2( i2095[2], i2095[3] )
  i2094.positionIterations = i2095[4]
  i2094.velocityIterations = i2095[5]
  i2094.velocityThreshold = i2095[6]
  i2094.maxLinearCorrection = i2095[7]
  i2094.maxAngularCorrection = i2095[8]
  i2094.maxTranslationSpeed = i2095[9]
  i2094.maxRotationSpeed = i2095[10]
  i2094.baumgarteScale = i2095[11]
  i2094.baumgarteTOIScale = i2095[12]
  i2094.timeToSleep = i2095[13]
  i2094.linearSleepTolerance = i2095[14]
  i2094.angularSleepTolerance = i2095[15]
  i2094.defaultContactOffset = i2095[16]
  i2094.autoSimulation = !!i2095[17]
  i2094.queriesHitTriggers = !!i2095[18]
  i2094.queriesStartInColliders = !!i2095[19]
  i2094.callbacksOnDisable = !!i2095[20]
  i2094.reuseCollisionCallbacks = !!i2095[21]
  i2094.autoSyncTransforms = !!i2095[22]
  var i2097 = i2095[23]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2097[i + 0]) );
  }
  i2094.collisionMatrix = i2096
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2101 = data
  i2100.enabled = !!i2101[0]
  i2100.layerId = i2101[1]
  i2100.otherLayerId = i2101[2]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2103 = data
  var i2105 = i2103[0]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2105[i + 0]) );
  }
  i2102.qualityLevels = i2104
  var i2107 = i2103[1]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( i2107[i + 0] );
  }
  i2102.names = i2106
  i2102.shadows = i2103[2]
  i2102.anisotropicFiltering = i2103[3]
  i2102.antiAliasing = i2103[4]
  i2102.lodBias = i2103[5]
  i2102.shadowCascades = i2103[6]
  i2102.shadowDistance = i2103[7]
  i2102.shadowmaskMode = i2103[8]
  i2102.shadowProjection = i2103[9]
  i2102.shadowResolution = i2103[10]
  i2102.softParticles = !!i2103[11]
  i2102.softVegetation = !!i2103[12]
  i2102.activeColorSpace = i2103[13]
  i2102.desiredColorSpace = i2103[14]
  i2102.masterTextureLimit = i2103[15]
  i2102.maxQueuedFrames = i2103[16]
  i2102.particleRaycastBudget = i2103[17]
  i2102.pixelLightCount = i2103[18]
  i2102.realtimeReflectionProbes = !!i2103[19]
  i2102.shadowCascade2Split = i2103[20]
  i2102.shadowCascade4Split = new pc.Vec3( i2103[21], i2103[22], i2103[23] )
  i2102.streamingMipmapsActive = !!i2103[24]
  i2102.vSyncCount = i2103[25]
  i2102.asyncUploadBufferSize = i2103[26]
  i2102.asyncUploadTimeSlice = i2103[27]
  i2102.billboardsFaceCameraPosition = !!i2103[28]
  i2102.shadowNearPlaneOffset = i2103[29]
  i2102.streamingMipmapsMemoryBudget = i2103[30]
  i2102.maximumLODLevel = i2103[31]
  i2102.streamingMipmapsAddAllCameras = !!i2103[32]
  i2102.streamingMipmapsMaxLevelReduction = i2103[33]
  i2102.streamingMipmapsRenderersPerFrame = i2103[34]
  i2102.resolutionScalingFixedDPIFactor = i2103[35]
  i2102.streamingMipmapsMaxFileIORequests = i2103[36]
  i2102.currentQualityLevel = i2103[37]
  return i2102
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2110 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2111 = data
  i2110.xPlacement = i2111[0]
  i2110.yPlacement = i2111[1]
  i2110.xAdvance = i2111[2]
  i2110.yAdvance = i2111[3]
  return i2110
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[17],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[17],"80":[81],"82":[83],"84":[83],"22":[2],"35":[11],"85":[2],"86":[87],"88":[89],"90":[87],"91":[2],"92":[2],"24":[22],"9":[3,2],"93":[2],"23":[22],"31":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[2],"101":[2],"102":[3,2],"103":[2],"104":[2],"105":[2],"106":[2],"107":[3,2],"108":[2],"109":[38],"110":[38],"39":[38],"111":[38],"112":[17],"113":[17],"114":[115],"116":[17],"117":[2],"118":[81,2],"13":[2,3],"119":[2],"120":[3,2],"121":[81],"122":[3,2],"123":[2],"124":[87]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.Object","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","Fix.ClickCta","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "21.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "FewCups123442";

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

Deserializers.buildID = "93e03d59-39ab-4ef2-99e6-54ae444825da";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

