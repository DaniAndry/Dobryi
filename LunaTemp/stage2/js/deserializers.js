var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.JointSpring' )
  var i1573 = data
  i1572.spring = i1573[0]
  i1572.damper = i1573[1]
  i1572.targetPosition = i1573[2]
  return i1572
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.JointMotor' )
  var i1575 = data
  i1574.m_TargetVelocity = i1575[0]
  i1574.m_Force = i1575[1]
  i1574.m_FreeSpin = i1575[2]
  return i1574
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.JointLimits' )
  var i1577 = data
  i1576.m_Min = i1577[0]
  i1576.m_Max = i1577[1]
  i1576.m_Bounciness = i1577[2]
  i1576.m_BounceMinVelocity = i1577[3]
  i1576.m_ContactDistance = i1577[4]
  i1576.minBounce = i1577[5]
  i1576.maxBounce = i1577[6]
  return i1576
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.JointDrive' )
  var i1579 = data
  i1578.m_PositionSpring = i1579[0]
  i1578.m_PositionDamper = i1579[1]
  i1578.m_MaximumForce = i1579[2]
  i1578.m_UseAcceleration = i1579[3]
  return i1578
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1580 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1581 = data
  i1580.m_Spring = i1581[0]
  i1580.m_Damper = i1581[1]
  return i1580
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1583 = data
  i1582.m_Limit = i1583[0]
  i1582.m_Bounciness = i1583[1]
  i1582.m_ContactDistance = i1583[2]
  return i1582
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1585 = data
  i1584.m_ExtremumSlip = i1585[0]
  i1584.m_ExtremumValue = i1585[1]
  i1584.m_AsymptoteSlip = i1585[2]
  i1584.m_AsymptoteValue = i1585[3]
  i1584.m_Stiffness = i1585[4]
  return i1584
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1587 = data
  i1586.m_LowerAngle = i1587[0]
  i1586.m_UpperAngle = i1587[1]
  return i1586
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1589 = data
  i1588.m_MotorSpeed = i1589[0]
  i1588.m_MaximumMotorTorque = i1589[1]
  return i1588
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1591 = data
  i1590.m_DampingRatio = i1591[0]
  i1590.m_Frequency = i1591[1]
  i1590.m_Angle = i1591[2]
  return i1590
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1593 = data
  i1592.m_LowerTranslation = i1593[0]
  i1592.m_UpperTranslation = i1593[1]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1595 = data
  i1594.name = i1595[0]
  i1594.width = i1595[1]
  i1594.height = i1595[2]
  i1594.mipmapCount = i1595[3]
  i1594.anisoLevel = i1595[4]
  i1594.filterMode = i1595[5]
  i1594.hdr = !!i1595[6]
  i1594.format = i1595[7]
  i1594.wrapMode = i1595[8]
  i1594.alphaIsTransparency = !!i1595[9]
  i1594.alphaSource = i1595[10]
  i1594.graphicsFormat = i1595[11]
  i1594.sRGBTexture = !!i1595[12]
  i1594.desiredColorSpace = i1595[13]
  i1594.wrapU = i1595[14]
  i1594.wrapV = i1595[15]
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1596 = root || new pc.UnityMaterial()
  var i1597 = data
  i1596.name = i1597[0]
  request.r(i1597[1], i1597[2], 0, i1596, 'shader')
  i1596.renderQueue = i1597[3]
  i1596.enableInstancing = !!i1597[4]
  var i1599 = i1597[5]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 1) {
    i1598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1599[i + 0]) );
  }
  i1596.floatParameters = i1598
  var i1601 = i1597[6]
  var i1600 = []
  for(var i = 0; i < i1601.length; i += 1) {
    i1600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1601[i + 0]) );
  }
  i1596.colorParameters = i1600
  var i1603 = i1597[7]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1603[i + 0]) );
  }
  i1596.vectorParameters = i1602
  var i1605 = i1597[8]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1605[i + 0]) );
  }
  i1596.textureParameters = i1604
  var i1607 = i1597[9]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1607[i + 0]) );
  }
  i1596.materialFlags = i1606
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1611 = data
  i1610.name = i1611[0]
  i1610.value = i1611[1]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1615 = data
  i1614.name = i1615[0]
  i1614.value = new pc.Color(i1615[1], i1615[2], i1615[3], i1615[4])
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1619 = data
  i1618.name = i1619[0]
  i1618.value = new pc.Vec4( i1619[1], i1619[2], i1619[3], i1619[4] )
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1623 = data
  i1622.name = i1623[0]
  request.r(i1623[1], i1623[2], 0, i1622, 'value')
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1627 = data
  i1626.name = i1627[0]
  i1626.enabled = !!i1627[1]
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1629 = data
  i1628.pivot = new pc.Vec2( i1629[0], i1629[1] )
  i1628.anchorMin = new pc.Vec2( i1629[2], i1629[3] )
  i1628.anchorMax = new pc.Vec2( i1629[4], i1629[5] )
  i1628.sizeDelta = new pc.Vec2( i1629[6], i1629[7] )
  i1628.anchoredPosition3D = new pc.Vec3( i1629[8], i1629[9], i1629[10] )
  i1628.rotation = new pc.Quat(i1629[11], i1629[12], i1629[13], i1629[14])
  i1628.scale = new pc.Vec3( i1629[15], i1629[16], i1629[17] )
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1631 = data
  i1630.cullTransparentMesh = !!i1631[0]
  return i1630
}

Deserializers["People"] = function (request, data, root) {
  var i1632 = root || request.c( 'People' )
  var i1633 = data
  request.r(i1633[0], i1633[1], 0, i1632, '_readyImage')
  request.r(i1633[2], i1633[3], 0, i1632, '_additiveImage1')
  request.r(i1633[4], i1633[5], 0, i1632, '_additiveImage2')
  request.r(i1633[6], i1633[7], 0, i1632, '_endPoint')
  request.r(i1633[8], i1633[9], 0, i1632, 'Bank')
  request.r(i1633[10], i1633[11], 0, i1632, '_sizeText')
  i1632.CupType = i1633[12]
  i1632.JuiceType1 = i1633[13]
  i1632.JuiceType2 = i1633[14]
  i1632.AdditiveType1 = i1633[15]
  i1632.AdditiveType2 = i1633[16]
  request.r(i1633[17], i1633[18], 0, i1632, '_finishSound')
  request.r(i1633[19], i1633[20], 0, i1632, '_readySmall')
  request.r(i1633[21], i1633[22], 0, i1632, '_readyMiddle')
  request.r(i1633[23], i1633[24], 0, i1632, '_readyBig')
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1635 = data
  request.r(i1635[0], i1635[1], 0, i1634, 'clip')
  request.r(i1635[2], i1635[3], 0, i1634, 'outputAudioMixerGroup')
  i1634.playOnAwake = !!i1635[4]
  i1634.loop = !!i1635[5]
  i1634.time = i1635[6]
  i1634.volume = i1635[7]
  i1634.pitch = i1635[8]
  i1634.enabled = !!i1635[9]
  return i1634
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.UI.Image' )
  var i1637 = data
  request.r(i1637[0], i1637[1], 0, i1636, 'm_Sprite')
  i1636.m_Type = i1637[2]
  i1636.m_PreserveAspect = !!i1637[3]
  i1636.m_FillCenter = !!i1637[4]
  i1636.m_FillMethod = i1637[5]
  i1636.m_FillAmount = i1637[6]
  i1636.m_FillClockwise = !!i1637[7]
  i1636.m_FillOrigin = i1637[8]
  i1636.m_UseSpriteMesh = !!i1637[9]
  i1636.m_PixelsPerUnitMultiplier = i1637[10]
  request.r(i1637[11], i1637[12], 0, i1636, 'm_Material')
  i1636.m_Maskable = !!i1637[13]
  i1636.m_Color = new pc.Color(i1637[14], i1637[15], i1637[16], i1637[17])
  i1636.m_RaycastTarget = !!i1637[18]
  i1636.m_RaycastPadding = new pc.Vec4( i1637[19], i1637[20], i1637[21], i1637[22] )
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1639 = data
  i1638.name = i1639[0]
  i1638.tagId = i1639[1]
  i1638.enabled = !!i1639[2]
  i1638.isStatic = !!i1639[3]
  i1638.layer = i1639[4]
  return i1638
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1640 = root || request.c( 'UnityEngine.UI.Button' )
  var i1641 = data
  i1640.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1641[0], i1640.m_OnClick)
  i1640.m_Navigation = request.d('UnityEngine.UI.Navigation', i1641[1], i1640.m_Navigation)
  i1640.m_Transition = i1641[2]
  i1640.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1641[3], i1640.m_Colors)
  i1640.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1641[4], i1640.m_SpriteState)
  i1640.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1641[5], i1640.m_AnimationTriggers)
  i1640.m_Interactable = !!i1641[6]
  request.r(i1641[7], i1641[8], 0, i1640, 'm_TargetGraphic')
  return i1640
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1642 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1643 = data
  i1642.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1643[0], i1642.m_PersistentCalls)
  return i1642
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1645 = data
  var i1647 = i1645[0]
  var i1646 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.add(request.d('UnityEngine.Events.PersistentCall', i1647[i + 0]));
  }
  i1644.m_Calls = i1646
  return i1644
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1650 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1651 = data
  request.r(i1651[0], i1651[1], 0, i1650, 'm_Target')
  i1650.m_TargetAssemblyTypeName = i1651[2]
  i1650.m_MethodName = i1651[3]
  i1650.m_Mode = i1651[4]
  i1650.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1651[5], i1650.m_Arguments)
  i1650.m_CallState = i1651[6]
  return i1650
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1653 = data
  request.r(i1653[0], i1653[1], 0, i1652, 'm_ObjectArgument')
  i1652.m_ObjectArgumentAssemblyTypeName = i1653[2]
  i1652.m_IntArgument = i1653[3]
  i1652.m_FloatArgument = i1653[4]
  i1652.m_StringArgument = i1653[5]
  i1652.m_BoolArgument = !!i1653[6]
  return i1652
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1655 = data
  i1654.m_Mode = i1655[0]
  i1654.m_WrapAround = !!i1655[1]
  request.r(i1655[2], i1655[3], 0, i1654, 'm_SelectOnUp')
  request.r(i1655[4], i1655[5], 0, i1654, 'm_SelectOnDown')
  request.r(i1655[6], i1655[7], 0, i1654, 'm_SelectOnLeft')
  request.r(i1655[8], i1655[9], 0, i1654, 'm_SelectOnRight')
  return i1654
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1656 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1657 = data
  i1656.m_NormalColor = new pc.Color(i1657[0], i1657[1], i1657[2], i1657[3])
  i1656.m_HighlightedColor = new pc.Color(i1657[4], i1657[5], i1657[6], i1657[7])
  i1656.m_PressedColor = new pc.Color(i1657[8], i1657[9], i1657[10], i1657[11])
  i1656.m_SelectedColor = new pc.Color(i1657[12], i1657[13], i1657[14], i1657[15])
  i1656.m_DisabledColor = new pc.Color(i1657[16], i1657[17], i1657[18], i1657[19])
  i1656.m_ColorMultiplier = i1657[20]
  i1656.m_FadeDuration = i1657[21]
  return i1656
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1659 = data
  request.r(i1659[0], i1659[1], 0, i1658, 'm_HighlightedSprite')
  request.r(i1659[2], i1659[3], 0, i1658, 'm_PressedSprite')
  request.r(i1659[4], i1659[5], 0, i1658, 'm_SelectedSprite')
  request.r(i1659[6], i1659[7], 0, i1658, 'm_DisabledSprite')
  return i1658
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1661 = data
  i1660.m_NormalTrigger = i1661[0]
  i1660.m_HighlightedTrigger = i1661[1]
  i1660.m_PressedTrigger = i1661[2]
  i1660.m_SelectedTrigger = i1661[3]
  i1660.m_DisabledTrigger = i1661[4]
  return i1660
}

Deserializers["ClickCta"] = function (request, data, root) {
  var i1662 = root || request.c( 'ClickCta' )
  var i1663 = data
  return i1662
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1664 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1665 = data
  i1664.m_hasFontAssetChanged = !!i1665[0]
  request.r(i1665[1], i1665[2], 0, i1664, 'm_baseMaterial')
  i1664.m_maskOffset = new pc.Vec4( i1665[3], i1665[4], i1665[5], i1665[6] )
  i1664.m_text = i1665[7]
  i1664.m_isRightToLeft = !!i1665[8]
  request.r(i1665[9], i1665[10], 0, i1664, 'm_fontAsset')
  request.r(i1665[11], i1665[12], 0, i1664, 'm_sharedMaterial')
  var i1667 = i1665[13]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 2) {
  request.r(i1667[i + 0], i1667[i + 1], 2, i1666, '')
  }
  i1664.m_fontSharedMaterials = i1666
  request.r(i1665[14], i1665[15], 0, i1664, 'm_fontMaterial')
  var i1669 = i1665[16]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 2) {
  request.r(i1669[i + 0], i1669[i + 1], 2, i1668, '')
  }
  i1664.m_fontMaterials = i1668
  i1664.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1665[17], i1665[18], i1665[19], i1665[20])
  i1664.m_fontColor = new pc.Color(i1665[21], i1665[22], i1665[23], i1665[24])
  i1664.m_enableVertexGradient = !!i1665[25]
  i1664.m_colorMode = i1665[26]
  i1664.m_fontColorGradient = request.d('TMPro.VertexGradient', i1665[27], i1664.m_fontColorGradient)
  request.r(i1665[28], i1665[29], 0, i1664, 'm_fontColorGradientPreset')
  request.r(i1665[30], i1665[31], 0, i1664, 'm_spriteAsset')
  i1664.m_tintAllSprites = !!i1665[32]
  request.r(i1665[33], i1665[34], 0, i1664, 'm_StyleSheet')
  i1664.m_TextStyleHashCode = i1665[35]
  i1664.m_overrideHtmlColors = !!i1665[36]
  i1664.m_faceColor = UnityEngine.Color32.ConstructColor(i1665[37], i1665[38], i1665[39], i1665[40])
  i1664.m_fontSize = i1665[41]
  i1664.m_fontSizeBase = i1665[42]
  i1664.m_fontWeight = i1665[43]
  i1664.m_enableAutoSizing = !!i1665[44]
  i1664.m_fontSizeMin = i1665[45]
  i1664.m_fontSizeMax = i1665[46]
  i1664.m_fontStyle = i1665[47]
  i1664.m_HorizontalAlignment = i1665[48]
  i1664.m_VerticalAlignment = i1665[49]
  i1664.m_textAlignment = i1665[50]
  i1664.m_characterSpacing = i1665[51]
  i1664.m_wordSpacing = i1665[52]
  i1664.m_lineSpacing = i1665[53]
  i1664.m_lineSpacingMax = i1665[54]
  i1664.m_paragraphSpacing = i1665[55]
  i1664.m_charWidthMaxAdj = i1665[56]
  i1664.m_enableWordWrapping = !!i1665[57]
  i1664.m_wordWrappingRatios = i1665[58]
  i1664.m_overflowMode = i1665[59]
  request.r(i1665[60], i1665[61], 0, i1664, 'm_linkedTextComponent')
  request.r(i1665[62], i1665[63], 0, i1664, 'parentLinkedComponent')
  i1664.m_enableKerning = !!i1665[64]
  i1664.m_enableExtraPadding = !!i1665[65]
  i1664.checkPaddingRequired = !!i1665[66]
  i1664.m_isRichText = !!i1665[67]
  i1664.m_parseCtrlCharacters = !!i1665[68]
  i1664.m_isOrthographic = !!i1665[69]
  i1664.m_isCullingEnabled = !!i1665[70]
  i1664.m_horizontalMapping = i1665[71]
  i1664.m_verticalMapping = i1665[72]
  i1664.m_uvLineOffset = i1665[73]
  i1664.m_geometrySortingOrder = i1665[74]
  i1664.m_IsTextObjectScaleStatic = !!i1665[75]
  i1664.m_VertexBufferAutoSizeReduction = !!i1665[76]
  i1664.m_useMaxVisibleDescender = !!i1665[77]
  i1664.m_pageToDisplay = i1665[78]
  i1664.m_margin = new pc.Vec4( i1665[79], i1665[80], i1665[81], i1665[82] )
  i1664.m_isUsingLegacyAnimationComponent = !!i1665[83]
  i1664.m_isVolumetricText = !!i1665[84]
  request.r(i1665[85], i1665[86], 0, i1664, 'm_Material')
  i1664.m_Maskable = !!i1665[87]
  i1664.m_Color = new pc.Color(i1665[88], i1665[89], i1665[90], i1665[91])
  i1664.m_RaycastTarget = !!i1665[92]
  i1664.m_RaycastPadding = new pc.Vec4( i1665[93], i1665[94], i1665[95], i1665[96] )
  return i1664
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1672 = root || request.c( 'TMPro.VertexGradient' )
  var i1673 = data
  i1672.topLeft = new pc.Color(i1673[0], i1673[1], i1673[2], i1673[3])
  i1672.topRight = new pc.Color(i1673[4], i1673[5], i1673[6], i1673[7])
  i1672.bottomLeft = new pc.Color(i1673[8], i1673[9], i1673[10], i1673[11])
  i1672.bottomRight = new pc.Color(i1673[12], i1673[13], i1673[14], i1673[15])
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1675 = data
  i1674.name = i1675[0]
  i1674.index = i1675[1]
  i1674.startup = !!i1675[2]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1677 = data
  i1676.position = new pc.Vec3( i1677[0], i1677[1], i1677[2] )
  i1676.scale = new pc.Vec3( i1677[3], i1677[4], i1677[5] )
  i1676.rotation = new pc.Quat(i1677[6], i1677[7], i1677[8], i1677[9])
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1679 = data
  i1678.enabled = !!i1679[0]
  i1678.aspect = i1679[1]
  i1678.orthographic = !!i1679[2]
  i1678.orthographicSize = i1679[3]
  i1678.backgroundColor = new pc.Color(i1679[4], i1679[5], i1679[6], i1679[7])
  i1678.nearClipPlane = i1679[8]
  i1678.farClipPlane = i1679[9]
  i1678.fieldOfView = i1679[10]
  i1678.depth = i1679[11]
  i1678.clearFlags = i1679[12]
  i1678.cullingMask = i1679[13]
  i1678.rect = i1679[14]
  request.r(i1679[15], i1679[16], 0, i1678, 'targetTexture')
  i1678.usePhysicalProperties = !!i1679[17]
  i1678.focalLength = i1679[18]
  i1678.sensorSize = new pc.Vec2( i1679[19], i1679[20] )
  i1678.lensShift = new pc.Vec2( i1679[21], i1679[22] )
  i1678.gateFit = i1679[23]
  i1678.commandBufferCount = i1679[24]
  i1678.cameraType = i1679[25]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1681 = data
  request.r(i1681[0], i1681[1], 0, i1680, 'animatorController')
  request.r(i1681[2], i1681[3], 0, i1680, 'avatar')
  i1680.updateMode = i1681[4]
  i1680.hasTransformHierarchy = !!i1681[5]
  i1680.applyRootMotion = !!i1681[6]
  var i1683 = i1681[7]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 2) {
  request.r(i1683[i + 0], i1683[i + 1], 2, i1682, '')
  }
  i1680.humanBones = i1682
  i1680.enabled = !!i1681[8]
  return i1680
}

Deserializers["Bank"] = function (request, data, root) {
  var i1686 = root || request.c( 'Bank' )
  var i1687 = data
  request.r(i1687[0], i1687[1], 0, i1686, 'BuyBigCupButton')
  request.r(i1687[2], i1687[3], 0, i1686, 'BigCupButton')
  request.r(i1687[4], i1687[5], 0, i1686, 'MiddleCupButton')
  request.r(i1687[6], i1687[7], 0, i1686, 'MoneyText')
  request.r(i1687[8], i1687[9], 0, i1686, 'Tutorial')
  request.r(i1687[10], i1687[11], 0, i1686, 'BuyAdditiveButton')
  request.r(i1687[12], i1687[13], 0, i1686, 'BuyJuiceButton')
  request.r(i1687[14], i1687[15], 0, i1686, 'JuiceButton1')
  request.r(i1687[16], i1687[17], 0, i1686, 'JuiceButton2')
  request.r(i1687[18], i1687[19], 0, i1686, 'JuiceButton3')
  request.r(i1687[20], i1687[21], 0, i1686, 'Additive1Button')
  request.r(i1687[22], i1687[23], 0, i1686, 'Additive2Button')
  i1686.Money = i1687[24]
  i1686.IsBigCupBuy = !!i1687[25]
  i1686.IsJuiceBuy = !!i1687[26]
  i1686.IsAdditiveBuy = !!i1687[27]
  request.r(i1687[28], i1687[29], 0, i1686, '_buySound')
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1689 = data
  i1688.enabled = !!i1689[0]
  i1688.planeDistance = i1689[1]
  i1688.referencePixelsPerUnit = i1689[2]
  i1688.isFallbackOverlay = !!i1689[3]
  i1688.renderMode = i1689[4]
  i1688.renderOrder = i1689[5]
  i1688.sortingLayerName = i1689[6]
  i1688.sortingOrder = i1689[7]
  i1688.scaleFactor = i1689[8]
  request.r(i1689[9], i1689[10], 0, i1688, 'worldCamera')
  i1688.overrideSorting = !!i1689[11]
  i1688.pixelPerfect = !!i1689[12]
  i1688.targetDisplay = i1689[13]
  i1688.overridePixelPerfect = !!i1689[14]
  return i1688
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1690 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1691 = data
  i1690.m_UiScaleMode = i1691[0]
  i1690.m_ReferencePixelsPerUnit = i1691[1]
  i1690.m_ScaleFactor = i1691[2]
  i1690.m_ReferenceResolution = new pc.Vec2( i1691[3], i1691[4] )
  i1690.m_ScreenMatchMode = i1691[5]
  i1690.m_MatchWidthOrHeight = i1691[6]
  i1690.m_PhysicalUnit = i1691[7]
  i1690.m_FallbackScreenDPI = i1691[8]
  i1690.m_DefaultSpriteDPI = i1691[9]
  i1690.m_DynamicPixelsPerUnit = i1691[10]
  i1690.m_PresetInfoIsWorld = !!i1691[11]
  return i1690
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1693 = data
  i1692.m_IgnoreReversedGraphics = !!i1693[0]
  i1692.m_BlockingObjects = i1693[1]
  i1692.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1693[2] )
  return i1692
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i1694 = root || request.c( 'ImageShiftOnOrientation' )
  var i1695 = data
  var i1697 = i1695[0]
  var i1696 = []
  for(var i = 0; i < i1697.length; i += 1) {
    i1696.push( request.d('ItemSwitcherData', i1697[i + 0]) );
  }
  i1694.Items = i1696
  request.r(i1695[1], i1695[2], 0, i1694, '_backHorizontal')
  request.r(i1695[3], i1695[4], 0, i1694, '_backVertical')
  request.r(i1695[5], i1695[6], 0, i1694, '_tableHorizontal')
  request.r(i1695[7], i1695[8], 0, i1694, '_tableVertical')
  i1694.IsDebug = !!i1695[9]
  i1694.CanCopy = !!i1695[10]
  return i1694
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i1700 = root || request.c( 'ItemSwitcherData' )
  var i1701 = data
  request.r(i1701[0], i1701[1], 0, i1700, 'Target')
  i1700.HorizontalAnchoredPosition = new pc.Vec2( i1701[2], i1701[3] )
  i1700.SizeHorizontal = new pc.Vec2( i1701[4], i1701[5] )
  i1700.VerticalAnchoredPosition = new pc.Vec2( i1701[6], i1701[7] )
  i1700.SizeVertical = new pc.Vec2( i1701[8], i1701[9] )
  i1700.MinHorizontal = new pc.Vec2( i1701[10], i1701[11] )
  i1700.MaxHorizontal = new pc.Vec2( i1701[12], i1701[13] )
  i1700.MinVertical = new pc.Vec2( i1701[14], i1701[15] )
  i1700.MaxVertical = new pc.Vec2( i1701[16], i1701[17] )
  i1700.IsAnchored = !!i1701[18]
  i1700.IsDebug = !!i1701[19]
  i1700.CopyHorizontal = !!i1701[20]
  i1700.CopyVertical = !!i1701[21]
  return i1700
}

Deserializers["Point"] = function (request, data, root) {
  var i1702 = root || request.c( 'Point' )
  var i1703 = data
  return i1702
}

Deserializers["MixImage"] = function (request, data, root) {
  var i1704 = root || request.c( 'MixImage' )
  var i1705 = data
  request.r(i1705[0], i1705[1], 0, i1704, 'Image')
  return i1704
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i1706 = root || request.c( 'PeopleContainer' )
  var i1707 = data
  var i1709 = i1707[0]
  var i1708 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1709.length; i += 2) {
  request.r(i1709[i + 0], i1709[i + 1], 1, i1708, '')
  }
  i1706.CurrentPeoples = i1708
  var i1711 = i1707[1]
  var i1710 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1711.length; i += 2) {
  request.r(i1711[i + 0], i1711[i + 1], 1, i1710, '')
  }
  i1706._peoples = i1710
  request.r(i1707[2], i1707[3], 0, i1706, '_tutorialPeople')
  request.r(i1707[4], i1707[5], 0, i1706, '_spawnPoint')
  request.r(i1707[6], i1707[7], 0, i1706, '_point1')
  request.r(i1707[8], i1707[9], 0, i1706, '_point2')
  request.r(i1707[10], i1707[11], 0, i1706, '_endPoint')
  request.r(i1707[12], i1707[13], 0, i1706, '_juiceConfig')
  request.r(i1707[14], i1707[15], 0, i1706, '_tutorial')
  return i1706
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1714 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1715 = data
  i1714.m_HorizontalFit = i1715[0]
  i1714.m_VerticalFit = i1715[1]
  return i1714
}

Deserializers["BackImage"] = function (request, data, root) {
  var i1716 = root || request.c( 'BackImage' )
  var i1717 = data
  return i1716
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i1718 = root || request.c( 'AheadImage' )
  var i1719 = data
  return i1718
}

Deserializers["Order"] = function (request, data, root) {
  var i1720 = root || request.c( 'Order' )
  var i1721 = data
  request.r(i1721[0], i1721[1], 0, i1720, '_juiceAnimator')
  request.r(i1721[2], i1721[3], 0, i1720, '_cupAnimator')
  request.r(i1721[4], i1721[5], 0, i1720, '_canvasAnimator')
  i1720.CupType = i1721[6]
  i1720.JuiceType1 = i1721[7]
  i1720.JuiceType2 = i1721[8]
  i1720.AdditiveType1 = i1721[9]
  i1720.AdditiveType2 = i1721[10]
  i1720.IsFree = !!i1721[11]
  i1720.IsSpriteReady = !!i1721[12]
  i1720.IsCupReady = !!i1721[13]
  i1720.IsJuiceReady = !!i1721[14]
  i1720.IsPouring = !!i1721[15]
  request.r(i1721[16], i1721[17], 0, i1720, '_iceButton')
  request.r(i1721[18], i1721[19], 0, i1720, '_grassButton')
  request.r(i1721[20], i1721[21], 0, i1720, '_juiceBallsButton')
  request.r(i1721[22], i1721[23], 0, i1720, '_strawButton')
  request.r(i1721[24], i1721[25], 0, i1720, '_bigCupButton')
  request.r(i1721[26], i1721[27], 0, i1720, '_middleCupButton')
  request.r(i1721[28], i1721[29], 0, i1720, '_smallCupButton')
  request.r(i1721[30], i1721[31], 0, i1720, '_appleButton')
  request.r(i1721[32], i1721[33], 0, i1720, '_orangeButton')
  request.r(i1721[34], i1721[35], 0, i1720, '_multifruitButton')
  request.r(i1721[36], i1721[37], 0, i1720, '_tomatoButton')
  request.r(i1721[38], i1721[39], 0, i1720, '_cherryButton')
  request.r(i1721[40], i1721[41], 0, i1720, '_smallRawJuiceImage')
  request.r(i1721[42], i1721[43], 0, i1720, '_middleRawJuiceImage')
  request.r(i1721[44], i1721[45], 0, i1720, '_bigRawJuiceImage')
  request.r(i1721[46], i1721[47], 0, i1720, '_smallReadyJuiceImage')
  request.r(i1721[48], i1721[49], 0, i1720, '_middleReadyJuiceImage')
  request.r(i1721[50], i1721[51], 0, i1720, '_bigReadyJuiceImage')
  request.r(i1721[52], i1721[53], 0, i1720, '_backImage')
  request.r(i1721[54], i1721[55], 0, i1720, '_aheadImage')
  request.r(i1721[56], i1721[57], 0, i1720, '_config')
  request.r(i1721[58], i1721[59], 0, i1720, '_takeOrderButton')
  request.r(i1721[60], i1721[61], 0, i1720, '_peopleContainer')
  request.r(i1721[62], i1721[63], 0, i1720, '_tutorial')
  request.r(i1721[64], i1721[65], 0, i1720, '_bText')
  request.r(i1721[66], i1721[67], 0, i1720, '_mText')
  request.r(i1721[68], i1721[69], 0, i1720, '_sText')
  request.r(i1721[70], i1721[71], 0, i1720, '_garbageButton')
  request.r(i1721[72], i1721[73], 0, i1720, '_clickSound')
  request.r(i1721[74], i1721[75], 0, i1720, '_juiceSound')
  return i1720
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i1722 = root || request.c( 'Tutorial' )
  var i1723 = data
  i1722.IsTutorial = !!i1723[0]
  request.r(i1723[1], i1723[2], 0, i1722, 'Finger1')
  request.r(i1723[3], i1723[4], 0, i1722, 'Finger2')
  request.r(i1723[5], i1723[6], 0, i1722, 'FingerCherry')
  request.r(i1723[7], i1723[8], 0, i1722, 'Finger3')
  request.r(i1723[9], i1723[10], 0, i1722, 'Finger4')
  request.r(i1723[11], i1723[12], 0, i1722, 'Finger5')
  request.r(i1723[13], i1723[14], 0, i1722, 'BuyBigCupFinger')
  request.r(i1723[15], i1723[16], 0, i1722, 'BuyJuiceFinger')
  request.r(i1723[17], i1723[18], 0, i1722, 'SmallCupButton')
  request.r(i1723[19], i1723[20], 0, i1722, 'JuiceButton')
  request.r(i1723[21], i1723[22], 0, i1722, 'JuiceButton2')
  request.r(i1723[23], i1723[24], 0, i1722, 'StrawButton')
  request.r(i1723[25], i1723[26], 0, i1722, 'AdditiveButton')
  request.r(i1723[27], i1723[28], 0, i1722, 'ReadyButton')
  var i1725 = i1723[29]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 2) {
  request.r(i1725[i + 0], i1725[i + 1], 2, i1724, '')
  }
  i1722.Buttons = i1724
  request.r(i1723[30], i1723[31], 0, i1722, 'Bank')
  return i1722
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i1728 = root || request.c( 'SoundSwitcher' )
  var i1729 = data
  request.r(i1729[0], i1729[1], 0, i1728, '_onImage')
  request.r(i1729[2], i1729[3], 0, i1728, '_offImage')
  return i1728
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1730 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1731 = data
  request.r(i1731[0], i1731[1], 0, i1730, 'm_FirstSelected')
  i1730.m_sendNavigationEvents = !!i1731[2]
  i1730.m_DragThreshold = i1731[3]
  return i1730
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1732 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1733 = data
  i1732.m_HorizontalAxis = i1733[0]
  i1732.m_VerticalAxis = i1733[1]
  i1732.m_SubmitButton = i1733[2]
  i1732.m_CancelButton = i1733[3]
  i1732.m_InputActionsPerSecond = i1733[4]
  i1732.m_RepeatDelay = i1733[5]
  i1732.m_ForceModuleActive = !!i1733[6]
  i1732.m_SendPointerHoverToParent = !!i1733[7]
  return i1732
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i1734 = root || request.c( 'JuiceConfig' )
  var i1735 = data
  request.r(i1735[0], i1735[1], 0, i1734, 'EntityBigCup')
  request.r(i1735[2], i1735[3], 0, i1734, 'TomatoBigCup')
  request.r(i1735[4], i1735[5], 0, i1734, 'AppleBigCup')
  request.r(i1735[6], i1735[7], 0, i1734, 'OrangeBigCup')
  request.r(i1735[8], i1735[9], 0, i1734, 'CherryBigCup')
  request.r(i1735[10], i1735[11], 0, i1734, 'MultifruitBigCup')
  request.r(i1735[12], i1735[13], 0, i1734, 'TomatoBigStrawCup')
  request.r(i1735[14], i1735[15], 0, i1734, 'MultifruitBigStrawCup')
  request.r(i1735[16], i1735[17], 0, i1734, 'AppleBigStrawCup')
  request.r(i1735[18], i1735[19], 0, i1734, 'OrangeBigStrawCup')
  request.r(i1735[20], i1735[21], 0, i1734, 'CherryBigStrawCup')
  request.r(i1735[22], i1735[23], 0, i1734, 'MultifruitBigBallsCup')
  request.r(i1735[24], i1735[25], 0, i1734, 'TomatoBigBallsCup')
  request.r(i1735[26], i1735[27], 0, i1734, 'AppleBigBallsCup')
  request.r(i1735[28], i1735[29], 0, i1734, 'OrangeBigBallsCup')
  request.r(i1735[30], i1735[31], 0, i1734, 'CherryBigBallsCup')
  request.r(i1735[32], i1735[33], 0, i1734, 'EntityMiddleCup')
  request.r(i1735[34], i1735[35], 0, i1734, 'TomatoMiddleCup')
  request.r(i1735[36], i1735[37], 0, i1734, 'AppleMiddleCup')
  request.r(i1735[38], i1735[39], 0, i1734, 'OrangeMiddleCup')
  request.r(i1735[40], i1735[41], 0, i1734, 'CherryMiddleCup')
  request.r(i1735[42], i1735[43], 0, i1734, 'MultifruitMiddleCup')
  request.r(i1735[44], i1735[45], 0, i1734, 'TomatoMiddleStrawCup')
  request.r(i1735[46], i1735[47], 0, i1734, 'MultifruitMiddleStrawCup')
  request.r(i1735[48], i1735[49], 0, i1734, 'AppleMiddleStrawCup')
  request.r(i1735[50], i1735[51], 0, i1734, 'OrangeMiddleStrawCup')
  request.r(i1735[52], i1735[53], 0, i1734, 'CherryMiddleStrawCup')
  request.r(i1735[54], i1735[55], 0, i1734, 'MultifruitMiddleBallsCup')
  request.r(i1735[56], i1735[57], 0, i1734, 'TomatoMiddleBallsCup')
  request.r(i1735[58], i1735[59], 0, i1734, 'AppleMiddleBallsCup')
  request.r(i1735[60], i1735[61], 0, i1734, 'OrangeMiddleBallsCup')
  request.r(i1735[62], i1735[63], 0, i1734, 'CherryMiddleBallsCup')
  request.r(i1735[64], i1735[65], 0, i1734, 'EntitySmallCup')
  request.r(i1735[66], i1735[67], 0, i1734, 'TomatoSmallCup')
  request.r(i1735[68], i1735[69], 0, i1734, 'AppleSmallCup')
  request.r(i1735[70], i1735[71], 0, i1734, 'OrangeSmallCup')
  request.r(i1735[72], i1735[73], 0, i1734, 'CherrySmallCup')
  request.r(i1735[74], i1735[75], 0, i1734, 'MultifruitSmallCup')
  request.r(i1735[76], i1735[77], 0, i1734, 'TomatoSmallStrawCup')
  request.r(i1735[78], i1735[79], 0, i1734, 'AppleSmallStrawCup')
  request.r(i1735[80], i1735[81], 0, i1734, 'OrangeSmallStrawCup')
  request.r(i1735[82], i1735[83], 0, i1734, 'CherrySmallStrawCup')
  request.r(i1735[84], i1735[85], 0, i1734, 'MultifruitSmallStrawCup')
  request.r(i1735[86], i1735[87], 0, i1734, 'AppleSmallBallsCup')
  request.r(i1735[88], i1735[89], 0, i1734, 'TomatoSmallBallsCup')
  request.r(i1735[90], i1735[91], 0, i1734, 'OrangeSmallBallsCup')
  request.r(i1735[92], i1735[93], 0, i1734, 'CherrySmallBallsCup')
  request.r(i1735[94], i1735[95], 0, i1734, 'MultifruitSmallBallsCup')
  request.r(i1735[96], i1735[97], 0, i1734, 'JuiceBallAdditive')
  request.r(i1735[98], i1735[99], 0, i1734, 'IceAdditive')
  request.r(i1735[100], i1735[101], 0, i1734, 'GrassAdditive')
  request.r(i1735[102], i1735[103], 0, i1734, 'SmallApple')
  request.r(i1735[104], i1735[105], 0, i1734, 'SmallOrange')
  request.r(i1735[106], i1735[107], 0, i1734, 'SmallCherry')
  request.r(i1735[108], i1735[109], 0, i1734, 'SmallMultifruit')
  request.r(i1735[110], i1735[111], 0, i1734, 'SmallTomato')
  request.r(i1735[112], i1735[113], 0, i1734, 'MiddleApple')
  request.r(i1735[114], i1735[115], 0, i1734, 'MiddleOrange')
  request.r(i1735[116], i1735[117], 0, i1734, 'MiddleCherry')
  request.r(i1735[118], i1735[119], 0, i1734, 'MiddleMultifruit')
  request.r(i1735[120], i1735[121], 0, i1734, 'MiddleTomato')
  request.r(i1735[122], i1735[123], 0, i1734, 'BigApple')
  request.r(i1735[124], i1735[125], 0, i1734, 'BigOrange')
  request.r(i1735[126], i1735[127], 0, i1734, 'BigCherry')
  request.r(i1735[128], i1735[129], 0, i1734, 'BigMultifruit')
  request.r(i1735[130], i1735[131], 0, i1734, 'BigTomato')
  return i1734
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i1736 = root || request.c( 'TouchIdleTimer' )
  var i1737 = data
  return i1736
}

Deserializers["Helper"] = function (request, data, root) {
  var i1738 = root || request.c( 'Helper' )
  var i1739 = data
  request.r(i1739[0], i1739[1], 0, i1738, '_smallCupFinger')
  request.r(i1739[2], i1739[3], 0, i1738, '_middleCupFinger')
  request.r(i1739[4], i1739[5], 0, i1738, '_bigCupFinger')
  request.r(i1739[6], i1739[7], 0, i1738, '_iceFinger')
  request.r(i1739[8], i1739[9], 0, i1738, '_grassFinger')
  request.r(i1739[10], i1739[11], 0, i1738, '_juiceballFinger')
  request.r(i1739[12], i1739[13], 0, i1738, '_appleFinger')
  request.r(i1739[14], i1739[15], 0, i1738, '_cherryFinger')
  request.r(i1739[16], i1739[17], 0, i1738, '_orangeFinger')
  request.r(i1739[18], i1739[19], 0, i1738, '_multifruitFinger')
  request.r(i1739[20], i1739[21], 0, i1738, '_tomatoFinger')
  request.r(i1739[22], i1739[23], 0, i1738, '_strawFinger')
  request.r(i1739[24], i1739[25], 0, i1738, '_readyFinger')
  var i1741 = i1739[26]
  var i1740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1741.length; i += 2) {
  request.r(i1741[i + 0], i1741[i + 1], 1, i1740, '')
  }
  i1738._juiseButtons = i1740
  request.r(i1739[27], i1739[28], 0, i1738, '_grassButton')
  request.r(i1739[29], i1739[30], 0, i1738, '_juiceballButton')
  request.r(i1739[31], i1739[32], 0, i1738, '_iceButton')
  request.r(i1739[33], i1739[34], 0, i1738, '_peoples')
  request.r(i1739[35], i1739[36], 0, i1738, '_tutorial')
  request.r(i1739[37], i1739[38], 0, i1738, '_order')
  request.r(i1739[39], i1739[40], 0, i1738, '_strawButton')
  request.r(i1739[41], i1739[42], 0, i1738, '_bigCupButton')
  request.r(i1739[43], i1739[44], 0, i1738, '_middleCupButton')
  request.r(i1739[45], i1739[46], 0, i1738, '_smallCupButton')
  request.r(i1739[47], i1739[48], 0, i1738, '_readyButton')
  request.r(i1739[49], i1739[50], 0, i1738, '_touchIdleTimer')
  request.r(i1739[51], i1739[52], 0, i1738, '_finalScreen')
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1745 = data
  i1744.ambientIntensity = i1745[0]
  i1744.reflectionIntensity = i1745[1]
  i1744.ambientMode = i1745[2]
  i1744.ambientLight = new pc.Color(i1745[3], i1745[4], i1745[5], i1745[6])
  i1744.ambientSkyColor = new pc.Color(i1745[7], i1745[8], i1745[9], i1745[10])
  i1744.ambientGroundColor = new pc.Color(i1745[11], i1745[12], i1745[13], i1745[14])
  i1744.ambientEquatorColor = new pc.Color(i1745[15], i1745[16], i1745[17], i1745[18])
  i1744.fogColor = new pc.Color(i1745[19], i1745[20], i1745[21], i1745[22])
  i1744.fogEndDistance = i1745[23]
  i1744.fogStartDistance = i1745[24]
  i1744.fogDensity = i1745[25]
  i1744.fog = !!i1745[26]
  request.r(i1745[27], i1745[28], 0, i1744, 'skybox')
  i1744.fogMode = i1745[29]
  var i1747 = i1745[30]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1747[i + 0]) );
  }
  i1744.lightmaps = i1746
  i1744.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1745[31], i1744.lightProbes)
  i1744.lightmapsMode = i1745[32]
  i1744.mixedBakeMode = i1745[33]
  i1744.environmentLightingMode = i1745[34]
  i1744.ambientProbe = new pc.SphericalHarmonicsL2(i1745[35])
  i1744.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1745[36])
  i1744.useReferenceAmbientProbe = !!i1745[37]
  request.r(i1745[38], i1745[39], 0, i1744, 'customReflection')
  request.r(i1745[40], i1745[41], 0, i1744, 'defaultReflection')
  i1744.defaultReflectionMode = i1745[42]
  i1744.defaultReflectionResolution = i1745[43]
  i1744.sunLightObjectId = i1745[44]
  i1744.pixelLightCount = i1745[45]
  i1744.defaultReflectionHDR = !!i1745[46]
  i1744.hasLightDataAsset = !!i1745[47]
  i1744.hasManualGenerate = !!i1745[48]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1751 = data
  request.r(i1751[0], i1751[1], 0, i1750, 'lightmapColor')
  request.r(i1751[2], i1751[3], 0, i1750, 'lightmapDirection')
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1752 = root || new UnityEngine.LightProbes()
  var i1753 = data
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1761 = data
  var i1763 = i1761[0]
  var i1762 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1763[i + 0]));
  }
  i1760.ShaderCompilationErrors = i1762
  i1760.name = i1761[1]
  i1760.guid = i1761[2]
  var i1765 = i1761[3]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( i1765[i + 0] );
  }
  i1760.shaderDefinedKeywords = i1764
  var i1767 = i1761[4]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1767[i + 0]) );
  }
  i1760.passes = i1766
  var i1769 = i1761[5]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1769[i + 0]) );
  }
  i1760.usePasses = i1768
  var i1771 = i1761[6]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1771[i + 0]) );
  }
  i1760.defaultParameterValues = i1770
  request.r(i1761[7], i1761[8], 0, i1760, 'unityFallbackShader')
  i1760.readDepth = !!i1761[9]
  i1760.isCreatedByShaderGraph = !!i1761[10]
  i1760.compiled = !!i1761[11]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1775 = data
  i1774.shaderName = i1775[0]
  i1774.errorMessage = i1775[1]
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1780 = root || new pc.UnityShaderPass()
  var i1781 = data
  i1780.id = i1781[0]
  i1780.subShaderIndex = i1781[1]
  i1780.name = i1781[2]
  i1780.passType = i1781[3]
  i1780.grabPassTextureName = i1781[4]
  i1780.usePass = !!i1781[5]
  i1780.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[6], i1780.zTest)
  i1780.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[7], i1780.zWrite)
  i1780.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[8], i1780.culling)
  i1780.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1781[9], i1780.blending)
  i1780.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1781[10], i1780.alphaBlending)
  i1780.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[11], i1780.colorWriteMask)
  i1780.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[12], i1780.offsetUnits)
  i1780.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[13], i1780.offsetFactor)
  i1780.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[14], i1780.stencilRef)
  i1780.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[15], i1780.stencilReadMask)
  i1780.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1781[16], i1780.stencilWriteMask)
  i1780.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1781[17], i1780.stencilOp)
  i1780.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1781[18], i1780.stencilOpFront)
  i1780.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1781[19], i1780.stencilOpBack)
  var i1783 = i1781[20]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1783[i + 0]) );
  }
  i1780.tags = i1782
  var i1785 = i1781[21]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( i1785[i + 0] );
  }
  i1780.passDefinedKeywords = i1784
  var i1787 = i1781[22]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1787[i + 0]) );
  }
  i1780.passDefinedKeywordGroups = i1786
  var i1789 = i1781[23]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1789[i + 0]) );
  }
  i1780.variants = i1788
  var i1791 = i1781[24]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1791[i + 0]) );
  }
  i1780.excludedVariants = i1790
  i1780.hasDepthReader = !!i1781[25]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1793 = data
  i1792.val = i1793[0]
  i1792.name = i1793[1]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1795 = data
  i1794.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1795[0], i1794.src)
  i1794.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1795[1], i1794.dst)
  i1794.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1795[2], i1794.op)
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1797 = data
  i1796.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[0], i1796.pass)
  i1796.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[1], i1796.fail)
  i1796.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[2], i1796.zFail)
  i1796.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[3], i1796.comp)
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1801 = data
  i1800.name = i1801[0]
  i1800.value = i1801[1]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1805 = data
  var i1807 = i1805[0]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( i1807[i + 0] );
  }
  i1804.keywords = i1806
  i1804.hasDiscard = !!i1805[1]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1811 = data
  i1810.passId = i1811[0]
  i1810.subShaderIndex = i1811[1]
  var i1813 = i1811[2]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( i1813[i + 0] );
  }
  i1810.keywords = i1812
  i1810.vertexProgram = i1811[3]
  i1810.fragmentProgram = i1811[4]
  i1810.exportedForWebGl2 = !!i1811[5]
  i1810.readDepth = !!i1811[6]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1817 = data
  request.r(i1817[0], i1817[1], 0, i1816, 'shader')
  i1816.pass = i1817[2]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1821 = data
  i1820.name = i1821[0]
  i1820.type = i1821[1]
  i1820.value = new pc.Vec4( i1821[2], i1821[3], i1821[4], i1821[5] )
  i1820.textureValue = i1821[6]
  i1820.shaderPropertyFlag = i1821[7]
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1823 = data
  i1822.name = i1823[0]
  request.r(i1823[1], i1823[2], 0, i1822, 'texture')
  i1822.aabb = i1823[3]
  i1822.vertices = i1823[4]
  i1822.triangles = i1823[5]
  i1822.textureRect = UnityEngine.Rect.MinMaxRect(i1823[6], i1823[7], i1823[8], i1823[9])
  i1822.packedRect = UnityEngine.Rect.MinMaxRect(i1823[10], i1823[11], i1823[12], i1823[13])
  i1822.border = new pc.Vec4( i1823[14], i1823[15], i1823[16], i1823[17] )
  i1822.transparency = i1823[18]
  i1822.bounds = i1823[19]
  i1822.pixelsPerUnit = i1823[20]
  i1822.textureWidth = i1823[21]
  i1822.textureHeight = i1823[22]
  i1822.nativeSize = new pc.Vec2( i1823[23], i1823[24] )
  i1822.pivot = new pc.Vec2( i1823[25], i1823[26] )
  i1822.textureRectOffset = new pc.Vec2( i1823[27], i1823[28] )
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1825 = data
  i1824.name = i1825[0]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1827 = data
  i1826.name = i1827[0]
  i1826.wrapMode = i1827[1]
  i1826.isLooping = !!i1827[2]
  i1826.length = i1827[3]
  var i1829 = i1827[4]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1829[i + 0]) );
  }
  i1826.curves = i1828
  var i1831 = i1827[5]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1831[i + 0]) );
  }
  i1826.events = i1830
  i1826.halfPrecision = !!i1827[6]
  i1826._frameRate = i1827[7]
  i1826.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1827[8], i1826.localBounds)
  i1826.hasMuscleCurves = !!i1827[9]
  var i1833 = i1827[10]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( i1833[i + 0] );
  }
  i1826.clipMuscleConstant = i1832
  i1826.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1827[11], i1826.clipBindingConstant)
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1837 = data
  i1836.path = i1837[0]
  i1836.hash = i1837[1]
  i1836.componentType = i1837[2]
  i1836.property = i1837[3]
  i1836.keys = i1837[4]
  var i1839 = i1837[5]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1839[i + 0]) );
  }
  i1836.objectReferenceKeys = i1838
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1843 = data
  i1842.time = i1843[0]
  request.r(i1843[1], i1843[2], 0, i1842, 'value')
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1847 = data
  i1846.functionName = i1847[0]
  i1846.floatParameter = i1847[1]
  i1846.intParameter = i1847[2]
  i1846.stringParameter = i1847[3]
  request.r(i1847[4], i1847[5], 0, i1846, 'objectReferenceParameter')
  i1846.time = i1847[6]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1849 = data
  i1848.center = new pc.Vec3( i1849[0], i1849[1], i1849[2] )
  i1848.extends = new pc.Vec3( i1849[3], i1849[4], i1849[5] )
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1853 = data
  var i1855 = i1853[0]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.push( i1855[i + 0] );
  }
  i1852.genericBindings = i1854
  var i1857 = i1853[1]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( i1857[i + 0] );
  }
  i1852.pptrCurveMapping = i1856
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1859 = data
  i1858.name = i1859[0]
  i1858.ascent = i1859[1]
  i1858.originalLineHeight = i1859[2]
  i1858.fontSize = i1859[3]
  var i1861 = i1859[4]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1861[i + 0]) );
  }
  i1858.characterInfo = i1860
  request.r(i1859[5], i1859[6], 0, i1858, 'texture')
  i1858.originalFontSize = i1859[7]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1865 = data
  i1864.index = i1865[0]
  i1864.advance = i1865[1]
  i1864.bearing = i1865[2]
  i1864.glyphWidth = i1865[3]
  i1864.glyphHeight = i1865[4]
  i1864.minX = i1865[5]
  i1864.maxX = i1865[6]
  i1864.minY = i1865[7]
  i1864.maxY = i1865[8]
  i1864.uvBottomLeftX = i1865[9]
  i1864.uvBottomLeftY = i1865[10]
  i1864.uvBottomRightX = i1865[11]
  i1864.uvBottomRightY = i1865[12]
  i1864.uvTopLeftX = i1865[13]
  i1864.uvTopLeftY = i1865[14]
  i1864.uvTopRightX = i1865[15]
  i1864.uvTopRightY = i1865[16]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1867 = data
  i1866.name = i1867[0]
  var i1869 = i1867[1]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1869[i + 0]) );
  }
  i1866.layers = i1868
  var i1871 = i1867[2]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1871[i + 0]) );
  }
  i1866.parameters = i1870
  i1866.animationClips = i1867[3]
  i1866.avatarUnsupported = i1867[4]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1875 = data
  i1874.name = i1875[0]
  i1874.defaultWeight = i1875[1]
  i1874.blendingMode = i1875[2]
  i1874.avatarMask = i1875[3]
  i1874.syncedLayerIndex = i1875[4]
  i1874.syncedLayerAffectsTiming = !!i1875[5]
  i1874.syncedLayers = i1875[6]
  i1874.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1875[7], i1874.stateMachine)
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1877 = data
  i1876.id = i1877[0]
  i1876.name = i1877[1]
  i1876.path = i1877[2]
  var i1879 = i1877[3]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1879[i + 0]) );
  }
  i1876.states = i1878
  var i1881 = i1877[4]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1881[i + 0]) );
  }
  i1876.machines = i1880
  var i1883 = i1877[5]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1883[i + 0]) );
  }
  i1876.entryStateTransitions = i1882
  var i1885 = i1877[6]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1885[i + 0]) );
  }
  i1876.exitStateTransitions = i1884
  var i1887 = i1877[7]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1887[i + 0]) );
  }
  i1876.anyStateTransitions = i1886
  i1876.defaultStateId = i1877[8]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1891 = data
  i1890.id = i1891[0]
  i1890.name = i1891[1]
  i1890.cycleOffset = i1891[2]
  i1890.cycleOffsetParameter = i1891[3]
  i1890.cycleOffsetParameterActive = !!i1891[4]
  i1890.mirror = !!i1891[5]
  i1890.mirrorParameter = i1891[6]
  i1890.mirrorParameterActive = !!i1891[7]
  i1890.motionId = i1891[8]
  i1890.nameHash = i1891[9]
  i1890.fullPathHash = i1891[10]
  i1890.speed = i1891[11]
  i1890.speedParameter = i1891[12]
  i1890.speedParameterActive = !!i1891[13]
  i1890.tag = i1891[14]
  i1890.tagHash = i1891[15]
  i1890.writeDefaultValues = !!i1891[16]
  var i1893 = i1891[17]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 2) {
  request.r(i1893[i + 0], i1893[i + 1], 2, i1892, '')
  }
  i1890.behaviours = i1892
  var i1895 = i1891[18]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1895[i + 0]) );
  }
  i1890.transitions = i1894
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1901 = data
  i1900.fullPath = i1901[0]
  i1900.canTransitionToSelf = !!i1901[1]
  i1900.duration = i1901[2]
  i1900.exitTime = i1901[3]
  i1900.hasExitTime = !!i1901[4]
  i1900.hasFixedDuration = !!i1901[5]
  i1900.interruptionSource = i1901[6]
  i1900.offset = i1901[7]
  i1900.orderedInterruption = !!i1901[8]
  i1900.destinationStateId = i1901[9]
  i1900.isExit = !!i1901[10]
  i1900.mute = !!i1901[11]
  i1900.solo = !!i1901[12]
  var i1903 = i1901[13]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1903[i + 0]) );
  }
  i1900.conditions = i1902
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1909 = data
  i1908.destinationStateId = i1909[0]
  i1908.isExit = !!i1909[1]
  i1908.mute = !!i1909[2]
  i1908.solo = !!i1909[3]
  var i1911 = i1909[4]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1911[i + 0]) );
  }
  i1908.conditions = i1910
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1915 = data
  i1914.mode = i1915[0]
  i1914.parameter = i1915[1]
  i1914.threshold = i1915[2]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1919 = data
  i1918.defaultBool = !!i1919[0]
  i1918.defaultFloat = i1919[1]
  i1918.defaultInt = i1919[2]
  i1918.name = i1919[3]
  i1918.nameHash = i1919[4]
  i1918.type = i1919[5]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1921 = data
  i1920.name = i1921[0]
  i1920.bytes64 = i1921[1]
  i1920.data = i1921[2]
  return i1920
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1922 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1923 = data
  i1922.hashCode = i1923[0]
  request.r(i1923[1], i1923[2], 0, i1922, 'material')
  i1922.materialHashCode = i1923[3]
  request.r(i1923[4], i1923[5], 0, i1922, 'atlas')
  i1922.normalStyle = i1923[6]
  i1922.normalSpacingOffset = i1923[7]
  i1922.boldStyle = i1923[8]
  i1922.boldSpacing = i1923[9]
  i1922.italicStyle = i1923[10]
  i1922.tabSize = i1923[11]
  i1922.m_Version = i1923[12]
  i1922.m_SourceFontFileGUID = i1923[13]
  request.r(i1923[14], i1923[15], 0, i1922, 'm_SourceFontFile_EditorRef')
  request.r(i1923[16], i1923[17], 0, i1922, 'm_SourceFontFile')
  i1922.m_AtlasPopulationMode = i1923[18]
  i1922.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1923[19], i1922.m_FaceInfo)
  var i1925 = i1923[20]
  var i1924 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.add(request.d('UnityEngine.TextCore.Glyph', i1925[i + 0]));
  }
  i1922.m_GlyphTable = i1924
  var i1927 = i1923[21]
  var i1926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.add(request.d('TMPro.TMP_Character', i1927[i + 0]));
  }
  i1922.m_CharacterTable = i1926
  var i1929 = i1923[22]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 2) {
  request.r(i1929[i + 0], i1929[i + 1], 2, i1928, '')
  }
  i1922.m_AtlasTextures = i1928
  i1922.m_AtlasTextureIndex = i1923[23]
  i1922.m_IsMultiAtlasTexturesEnabled = !!i1923[24]
  i1922.m_ClearDynamicDataOnBuild = !!i1923[25]
  var i1931 = i1923[26]
  var i1930 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.add(request.d('UnityEngine.TextCore.GlyphRect', i1931[i + 0]));
  }
  i1922.m_UsedGlyphRects = i1930
  var i1933 = i1923[27]
  var i1932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.add(request.d('UnityEngine.TextCore.GlyphRect', i1933[i + 0]));
  }
  i1922.m_FreeGlyphRects = i1932
  i1922.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1923[28], i1922.m_fontInfo)
  i1922.m_AtlasWidth = i1923[29]
  i1922.m_AtlasHeight = i1923[30]
  i1922.m_AtlasPadding = i1923[31]
  i1922.m_AtlasRenderMode = i1923[32]
  var i1935 = i1923[33]
  var i1934 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.add(request.d('TMPro.TMP_Glyph', i1935[i + 0]));
  }
  i1922.m_glyphInfoList = i1934
  i1922.m_KerningTable = request.d('TMPro.KerningTable', i1923[34], i1922.m_KerningTable)
  i1922.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1923[35], i1922.m_FontFeatureTable)
  var i1937 = i1923[36]
  var i1936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1937.length; i += 2) {
  request.r(i1937[i + 0], i1937[i + 1], 1, i1936, '')
  }
  i1922.fallbackFontAssets = i1936
  var i1939 = i1923[37]
  var i1938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1939.length; i += 2) {
  request.r(i1939[i + 0], i1939[i + 1], 1, i1938, '')
  }
  i1922.m_FallbackFontAssetTable = i1938
  i1922.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1923[38], i1922.m_CreationSettings)
  var i1941 = i1923[39]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( request.d('TMPro.TMP_FontWeightPair', i1941[i + 0]) );
  }
  i1922.m_FontWeightTable = i1940
  var i1943 = i1923[40]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( request.d('TMPro.TMP_FontWeightPair', i1943[i + 0]) );
  }
  i1922.fontWeights = i1942
  return i1922
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1944 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1945 = data
  i1944.m_FaceIndex = i1945[0]
  i1944.m_FamilyName = i1945[1]
  i1944.m_StyleName = i1945[2]
  i1944.m_PointSize = i1945[3]
  i1944.m_Scale = i1945[4]
  i1944.m_UnitsPerEM = i1945[5]
  i1944.m_LineHeight = i1945[6]
  i1944.m_AscentLine = i1945[7]
  i1944.m_CapLine = i1945[8]
  i1944.m_MeanLine = i1945[9]
  i1944.m_Baseline = i1945[10]
  i1944.m_DescentLine = i1945[11]
  i1944.m_SuperscriptOffset = i1945[12]
  i1944.m_SuperscriptSize = i1945[13]
  i1944.m_SubscriptOffset = i1945[14]
  i1944.m_SubscriptSize = i1945[15]
  i1944.m_UnderlineOffset = i1945[16]
  i1944.m_UnderlineThickness = i1945[17]
  i1944.m_StrikethroughOffset = i1945[18]
  i1944.m_StrikethroughThickness = i1945[19]
  i1944.m_TabWidth = i1945[20]
  return i1944
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1948 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1949 = data
  i1948.m_Index = i1949[0]
  i1948.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1949[1], i1948.m_Metrics)
  i1948.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1949[2], i1948.m_GlyphRect)
  i1948.m_Scale = i1949[3]
  i1948.m_AtlasIndex = i1949[4]
  i1948.m_ClassDefinitionType = i1949[5]
  return i1948
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1951 = data
  i1950.m_Width = i1951[0]
  i1950.m_Height = i1951[1]
  i1950.m_HorizontalBearingX = i1951[2]
  i1950.m_HorizontalBearingY = i1951[3]
  i1950.m_HorizontalAdvance = i1951[4]
  return i1950
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1953 = data
  i1952.m_X = i1953[0]
  i1952.m_Y = i1953[1]
  i1952.m_Width = i1953[2]
  i1952.m_Height = i1953[3]
  return i1952
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1956 = root || request.c( 'TMPro.TMP_Character' )
  var i1957 = data
  i1956.m_ElementType = i1957[0]
  i1956.m_Unicode = i1957[1]
  i1956.m_GlyphIndex = i1957[2]
  i1956.m_Scale = i1957[3]
  return i1956
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1962 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1963 = data
  i1962.Name = i1963[0]
  i1962.PointSize = i1963[1]
  i1962.Scale = i1963[2]
  i1962.CharacterCount = i1963[3]
  i1962.LineHeight = i1963[4]
  i1962.Baseline = i1963[5]
  i1962.Ascender = i1963[6]
  i1962.CapHeight = i1963[7]
  i1962.Descender = i1963[8]
  i1962.CenterLine = i1963[9]
  i1962.SuperscriptOffset = i1963[10]
  i1962.SubscriptOffset = i1963[11]
  i1962.SubSize = i1963[12]
  i1962.Underline = i1963[13]
  i1962.UnderlineThickness = i1963[14]
  i1962.strikethrough = i1963[15]
  i1962.strikethroughThickness = i1963[16]
  i1962.TabWidth = i1963[17]
  i1962.Padding = i1963[18]
  i1962.AtlasWidth = i1963[19]
  i1962.AtlasHeight = i1963[20]
  return i1962
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1966 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1967 = data
  i1966.id = i1967[0]
  i1966.x = i1967[1]
  i1966.y = i1967[2]
  i1966.width = i1967[3]
  i1966.height = i1967[4]
  i1966.xOffset = i1967[5]
  i1966.yOffset = i1967[6]
  i1966.xAdvance = i1967[7]
  i1966.scale = i1967[8]
  return i1966
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1968 = root || request.c( 'TMPro.KerningTable' )
  var i1969 = data
  var i1971 = i1969[0]
  var i1970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.add(request.d('TMPro.KerningPair', i1971[i + 0]));
  }
  i1968.kerningPairs = i1970
  return i1968
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1974 = root || request.c( 'TMPro.KerningPair' )
  var i1975 = data
  i1974.xOffset = i1975[0]
  i1974.m_FirstGlyph = i1975[1]
  i1974.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1975[2], i1974.m_FirstGlyphAdjustments)
  i1974.m_SecondGlyph = i1975[3]
  i1974.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1975[4], i1974.m_SecondGlyphAdjustments)
  i1974.m_IgnoreSpacingAdjustments = !!i1975[5]
  return i1974
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1976 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1977 = data
  var i1979 = i1977[0]
  var i1978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1979[i + 0]));
  }
  i1976.m_GlyphPairAdjustmentRecords = i1978
  return i1976
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1982 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1983 = data
  i1982.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1983[0], i1982.m_FirstAdjustmentRecord)
  i1982.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1983[1], i1982.m_SecondAdjustmentRecord)
  i1982.m_FeatureLookupFlags = i1983[2]
  return i1982
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1984 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1985 = data
  i1984.m_GlyphIndex = i1985[0]
  i1984.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1985[1], i1984.m_GlyphValueRecord)
  return i1984
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1986 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1987 = data
  i1986.m_XPlacement = i1987[0]
  i1986.m_YPlacement = i1987[1]
  i1986.m_XAdvance = i1987[2]
  i1986.m_YAdvance = i1987[3]
  return i1986
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1990 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1991 = data
  i1990.sourceFontFileName = i1991[0]
  i1990.sourceFontFileGUID = i1991[1]
  i1990.pointSizeSamplingMode = i1991[2]
  i1990.pointSize = i1991[3]
  i1990.padding = i1991[4]
  i1990.packingMode = i1991[5]
  i1990.atlasWidth = i1991[6]
  i1990.atlasHeight = i1991[7]
  i1990.characterSetSelectionMode = i1991[8]
  i1990.characterSequence = i1991[9]
  i1990.referencedFontAssetGUID = i1991[10]
  i1990.referencedTextAssetGUID = i1991[11]
  i1990.fontStyle = i1991[12]
  i1990.fontStyleModifier = i1991[13]
  i1990.renderMode = i1991[14]
  i1990.includeFontFeatures = !!i1991[15]
  return i1990
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1994 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1995 = data
  request.r(i1995[0], i1995[1], 0, i1994, 'regularTypeface')
  request.r(i1995[2], i1995[3], 0, i1994, 'italicTypeface')
  return i1994
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1996 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1997 = data
  i1996.useSafeMode = !!i1997[0]
  i1996.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1997[1], i1996.safeModeOptions)
  i1996.timeScale = i1997[2]
  i1996.unscaledTimeScale = i1997[3]
  i1996.useSmoothDeltaTime = !!i1997[4]
  i1996.maxSmoothUnscaledTime = i1997[5]
  i1996.rewindCallbackMode = i1997[6]
  i1996.showUnityEditorReport = !!i1997[7]
  i1996.logBehaviour = i1997[8]
  i1996.drawGizmos = !!i1997[9]
  i1996.defaultRecyclable = !!i1997[10]
  i1996.defaultAutoPlay = i1997[11]
  i1996.defaultUpdateType = i1997[12]
  i1996.defaultTimeScaleIndependent = !!i1997[13]
  i1996.defaultEaseType = i1997[14]
  i1996.defaultEaseOvershootOrAmplitude = i1997[15]
  i1996.defaultEasePeriod = i1997[16]
  i1996.defaultAutoKill = !!i1997[17]
  i1996.defaultLoopType = i1997[18]
  i1996.debugMode = !!i1997[19]
  i1996.debugStoreTargetId = !!i1997[20]
  i1996.showPreviewPanel = !!i1997[21]
  i1996.storeSettingsLocation = i1997[22]
  i1996.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1997[23], i1996.modules)
  i1996.createASMDEF = !!i1997[24]
  i1996.showPlayingTweens = !!i1997[25]
  i1996.showPausedTweens = !!i1997[26]
  return i1996
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1998 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1999 = data
  i1998.logBehaviour = i1999[0]
  i1998.nestedTweenFailureBehaviour = i1999[1]
  return i1998
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2000 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2001 = data
  i2000.showPanel = !!i2001[0]
  i2000.audioEnabled = !!i2001[1]
  i2000.physicsEnabled = !!i2001[2]
  i2000.physics2DEnabled = !!i2001[3]
  i2000.spriteEnabled = !!i2001[4]
  i2000.uiEnabled = !!i2001[5]
  i2000.textMeshProEnabled = !!i2001[6]
  i2000.tk2DEnabled = !!i2001[7]
  i2000.deAudioEnabled = !!i2001[8]
  i2000.deUnityExtendedEnabled = !!i2001[9]
  i2000.epoOutlineEnabled = !!i2001[10]
  return i2000
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2002 = root || request.c( 'TMPro.TMP_Settings' )
  var i2003 = data
  i2002.m_enableWordWrapping = !!i2003[0]
  i2002.m_enableKerning = !!i2003[1]
  i2002.m_enableExtraPadding = !!i2003[2]
  i2002.m_enableTintAllSprites = !!i2003[3]
  i2002.m_enableParseEscapeCharacters = !!i2003[4]
  i2002.m_EnableRaycastTarget = !!i2003[5]
  i2002.m_GetFontFeaturesAtRuntime = !!i2003[6]
  i2002.m_missingGlyphCharacter = i2003[7]
  i2002.m_warningsDisabled = !!i2003[8]
  request.r(i2003[9], i2003[10], 0, i2002, 'm_defaultFontAsset')
  i2002.m_defaultFontAssetPath = i2003[11]
  i2002.m_defaultFontSize = i2003[12]
  i2002.m_defaultAutoSizeMinRatio = i2003[13]
  i2002.m_defaultAutoSizeMaxRatio = i2003[14]
  i2002.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2003[15], i2003[16] )
  i2002.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2003[17], i2003[18] )
  i2002.m_autoSizeTextContainer = !!i2003[19]
  i2002.m_IsTextObjectScaleStatic = !!i2003[20]
  var i2005 = i2003[21]
  var i2004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2005.length; i += 2) {
  request.r(i2005[i + 0], i2005[i + 1], 1, i2004, '')
  }
  i2002.m_fallbackFontAssets = i2004
  i2002.m_matchMaterialPreset = !!i2003[22]
  request.r(i2003[23], i2003[24], 0, i2002, 'm_defaultSpriteAsset')
  i2002.m_defaultSpriteAssetPath = i2003[25]
  i2002.m_enableEmojiSupport = !!i2003[26]
  i2002.m_MissingCharacterSpriteUnicode = i2003[27]
  i2002.m_defaultColorGradientPresetsPath = i2003[28]
  request.r(i2003[29], i2003[30], 0, i2002, 'm_defaultStyleSheet')
  i2002.m_StyleSheetsResourcePath = i2003[31]
  request.r(i2003[32], i2003[33], 0, i2002, 'm_leadingCharacters')
  request.r(i2003[34], i2003[35], 0, i2002, 'm_followingCharacters')
  i2002.m_UseModernHangulLineBreakingRules = !!i2003[36]
  return i2002
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2006 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2007 = data
  i2006.hashCode = i2007[0]
  request.r(i2007[1], i2007[2], 0, i2006, 'material')
  i2006.materialHashCode = i2007[3]
  request.r(i2007[4], i2007[5], 0, i2006, 'spriteSheet')
  var i2009 = i2007[6]
  var i2008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.add(request.d('TMPro.TMP_Sprite', i2009[i + 0]));
  }
  i2006.spriteInfoList = i2008
  var i2011 = i2007[7]
  var i2010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2011.length; i += 2) {
  request.r(i2011[i + 0], i2011[i + 1], 1, i2010, '')
  }
  i2006.fallbackSpriteAssets = i2010
  i2006.m_Version = i2007[8]
  i2006.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2007[9], i2006.m_FaceInfo)
  var i2013 = i2007[10]
  var i2012 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.add(request.d('TMPro.TMP_SpriteCharacter', i2013[i + 0]));
  }
  i2006.m_SpriteCharacterTable = i2012
  var i2015 = i2007[11]
  var i2014 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.add(request.d('TMPro.TMP_SpriteGlyph', i2015[i + 0]));
  }
  i2006.m_SpriteGlyphTable = i2014
  return i2006
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2018 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2019 = data
  i2018.name = i2019[0]
  i2018.hashCode = i2019[1]
  i2018.unicode = i2019[2]
  i2018.pivot = new pc.Vec2( i2019[3], i2019[4] )
  request.r(i2019[5], i2019[6], 0, i2018, 'sprite')
  i2018.id = i2019[7]
  i2018.x = i2019[8]
  i2018.y = i2019[9]
  i2018.width = i2019[10]
  i2018.height = i2019[11]
  i2018.xOffset = i2019[12]
  i2018.yOffset = i2019[13]
  i2018.xAdvance = i2019[14]
  i2018.scale = i2019[15]
  return i2018
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2024 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2025 = data
  i2024.m_Name = i2025[0]
  i2024.m_HashCode = i2025[1]
  i2024.m_ElementType = i2025[2]
  i2024.m_Unicode = i2025[3]
  i2024.m_GlyphIndex = i2025[4]
  i2024.m_Scale = i2025[5]
  return i2024
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2028 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2029 = data
  request.r(i2029[0], i2029[1], 0, i2028, 'sprite')
  i2028.m_Index = i2029[2]
  i2028.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2029[3], i2028.m_Metrics)
  i2028.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2029[4], i2028.m_GlyphRect)
  i2028.m_Scale = i2029[5]
  i2028.m_AtlasIndex = i2029[6]
  i2028.m_ClassDefinitionType = i2029[7]
  return i2028
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2030 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2031 = data
  var i2033 = i2031[0]
  var i2032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.add(request.d('TMPro.TMP_Style', i2033[i + 0]));
  }
  i2030.m_StyleList = i2032
  return i2030
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2036 = root || request.c( 'TMPro.TMP_Style' )
  var i2037 = data
  i2036.m_Name = i2037[0]
  i2036.m_HashCode = i2037[1]
  i2036.m_OpeningDefinition = i2037[2]
  i2036.m_ClosingDefinition = i2037[3]
  i2036.m_OpeningTagArray = i2037[4]
  i2036.m_ClosingTagArray = i2037[5]
  i2036.m_OpeningTagUnicodeArray = i2037[6]
  i2036.m_ClosingTagUnicodeArray = i2037[7]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2039 = data
  var i2041 = i2039[0]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2041[i + 0]) );
  }
  i2038.files = i2040
  i2038.componentToPrefabIds = i2039[1]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2045 = data
  i2044.path = i2045[0]
  request.r(i2045[1], i2045[2], 0, i2044, 'unityObject')
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2047 = data
  var i2049 = i2047[0]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2049[i + 0]) );
  }
  i2046.scriptsExecutionOrder = i2048
  var i2051 = i2047[1]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2051[i + 0]) );
  }
  i2046.sortingLayers = i2050
  var i2053 = i2047[2]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2053[i + 0]) );
  }
  i2046.cullingLayers = i2052
  i2046.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2047[3], i2046.timeSettings)
  i2046.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2047[4], i2046.physicsSettings)
  i2046.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2047[5], i2046.physics2DSettings)
  i2046.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2047[6], i2046.qualitySettings)
  i2046.enableRealtimeShadows = !!i2047[7]
  i2046.enableAutoInstancing = !!i2047[8]
  i2046.enableDynamicBatching = !!i2047[9]
  i2046.lightmapEncodingQuality = i2047[10]
  i2046.desiredColorSpace = i2047[11]
  var i2055 = i2047[12]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( i2055[i + 0] );
  }
  i2046.allTags = i2054
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2059 = data
  i2058.name = i2059[0]
  i2058.value = i2059[1]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2063 = data
  i2062.id = i2063[0]
  i2062.name = i2063[1]
  i2062.value = i2063[2]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2067 = data
  i2066.id = i2067[0]
  i2066.name = i2067[1]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2069 = data
  i2068.fixedDeltaTime = i2069[0]
  i2068.maximumDeltaTime = i2069[1]
  i2068.timeScale = i2069[2]
  i2068.maximumParticleTimestep = i2069[3]
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2071 = data
  i2070.gravity = new pc.Vec3( i2071[0], i2071[1], i2071[2] )
  i2070.defaultSolverIterations = i2071[3]
  i2070.bounceThreshold = i2071[4]
  i2070.autoSyncTransforms = !!i2071[5]
  i2070.autoSimulation = !!i2071[6]
  var i2073 = i2071[7]
  var i2072 = []
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2073[i + 0]) );
  }
  i2070.collisionMatrix = i2072
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2077 = data
  i2076.enabled = !!i2077[0]
  i2076.layerId = i2077[1]
  i2076.otherLayerId = i2077[2]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2079 = data
  request.r(i2079[0], i2079[1], 0, i2078, 'material')
  i2078.gravity = new pc.Vec2( i2079[2], i2079[3] )
  i2078.positionIterations = i2079[4]
  i2078.velocityIterations = i2079[5]
  i2078.velocityThreshold = i2079[6]
  i2078.maxLinearCorrection = i2079[7]
  i2078.maxAngularCorrection = i2079[8]
  i2078.maxTranslationSpeed = i2079[9]
  i2078.maxRotationSpeed = i2079[10]
  i2078.baumgarteScale = i2079[11]
  i2078.baumgarteTOIScale = i2079[12]
  i2078.timeToSleep = i2079[13]
  i2078.linearSleepTolerance = i2079[14]
  i2078.angularSleepTolerance = i2079[15]
  i2078.defaultContactOffset = i2079[16]
  i2078.autoSimulation = !!i2079[17]
  i2078.queriesHitTriggers = !!i2079[18]
  i2078.queriesStartInColliders = !!i2079[19]
  i2078.callbacksOnDisable = !!i2079[20]
  i2078.reuseCollisionCallbacks = !!i2079[21]
  i2078.autoSyncTransforms = !!i2079[22]
  var i2081 = i2079[23]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2081[i + 0]) );
  }
  i2078.collisionMatrix = i2080
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2085 = data
  i2084.enabled = !!i2085[0]
  i2084.layerId = i2085[1]
  i2084.otherLayerId = i2085[2]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2087 = data
  var i2089 = i2087[0]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2089[i + 0]) );
  }
  i2086.qualityLevels = i2088
  var i2091 = i2087[1]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.push( i2091[i + 0] );
  }
  i2086.names = i2090
  i2086.shadows = i2087[2]
  i2086.anisotropicFiltering = i2087[3]
  i2086.antiAliasing = i2087[4]
  i2086.lodBias = i2087[5]
  i2086.shadowCascades = i2087[6]
  i2086.shadowDistance = i2087[7]
  i2086.shadowmaskMode = i2087[8]
  i2086.shadowProjection = i2087[9]
  i2086.shadowResolution = i2087[10]
  i2086.softParticles = !!i2087[11]
  i2086.softVegetation = !!i2087[12]
  i2086.activeColorSpace = i2087[13]
  i2086.desiredColorSpace = i2087[14]
  i2086.masterTextureLimit = i2087[15]
  i2086.maxQueuedFrames = i2087[16]
  i2086.particleRaycastBudget = i2087[17]
  i2086.pixelLightCount = i2087[18]
  i2086.realtimeReflectionProbes = !!i2087[19]
  i2086.shadowCascade2Split = i2087[20]
  i2086.shadowCascade4Split = new pc.Vec3( i2087[21], i2087[22], i2087[23] )
  i2086.streamingMipmapsActive = !!i2087[24]
  i2086.vSyncCount = i2087[25]
  i2086.asyncUploadBufferSize = i2087[26]
  i2086.asyncUploadTimeSlice = i2087[27]
  i2086.billboardsFaceCameraPosition = !!i2087[28]
  i2086.shadowNearPlaneOffset = i2087[29]
  i2086.streamingMipmapsMemoryBudget = i2087[30]
  i2086.maximumLODLevel = i2087[31]
  i2086.streamingMipmapsAddAllCameras = !!i2087[32]
  i2086.streamingMipmapsMaxLevelReduction = i2087[33]
  i2086.streamingMipmapsRenderersPerFrame = i2087[34]
  i2086.resolutionScalingFixedDPIFactor = i2087[35]
  i2086.streamingMipmapsMaxFileIORequests = i2087[36]
  i2086.currentQualityLevel = i2087[37]
  return i2086
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2094 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2095 = data
  i2094.xPlacement = i2095[0]
  i2094.yPlacement = i2095[1]
  i2094.xAdvance = i2095[2]
  i2094.yAdvance = i2095[3]
  return i2094
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[17],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[17],"80":[81],"82":[83],"84":[83],"22":[2],"36":[11],"85":[2],"86":[87],"88":[89],"90":[87],"91":[2],"92":[2],"24":[22],"6":[3,2],"93":[2],"23":[22],"32":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[2],"101":[2],"102":[3,2],"103":[2],"104":[2],"105":[2],"106":[2],"107":[3,2],"108":[2],"109":[38],"110":[38],"39":[38],"111":[38],"112":[17],"113":[17],"114":[115],"116":[17],"117":[2],"118":[81,2],"13":[2,3],"119":[2],"120":[3,2],"121":[81],"122":[3,2],"123":[2],"124":[87]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.UI.Button","ClickCta","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","MixImage","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "13.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "MixVersion4124124";

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

Deserializers.buildID = "6960f6be-e1d3-4e37-ba61-cb93a3fa2b0f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

