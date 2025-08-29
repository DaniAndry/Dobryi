var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.JointSpring' )
  var i1567 = data
  i1566.spring = i1567[0]
  i1566.damper = i1567[1]
  i1566.targetPosition = i1567[2]
  return i1566
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.JointMotor' )
  var i1569 = data
  i1568.m_TargetVelocity = i1569[0]
  i1568.m_Force = i1569[1]
  i1568.m_FreeSpin = i1569[2]
  return i1568
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1570 = root || request.c( 'UnityEngine.JointLimits' )
  var i1571 = data
  i1570.m_Min = i1571[0]
  i1570.m_Max = i1571[1]
  i1570.m_Bounciness = i1571[2]
  i1570.m_BounceMinVelocity = i1571[3]
  i1570.m_ContactDistance = i1571[4]
  i1570.minBounce = i1571[5]
  i1570.maxBounce = i1571[6]
  return i1570
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.JointDrive' )
  var i1573 = data
  i1572.m_PositionSpring = i1573[0]
  i1572.m_PositionDamper = i1573[1]
  i1572.m_MaximumForce = i1573[2]
  i1572.m_UseAcceleration = i1573[3]
  return i1572
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1575 = data
  i1574.m_Spring = i1575[0]
  i1574.m_Damper = i1575[1]
  return i1574
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1577 = data
  i1576.m_Limit = i1577[0]
  i1576.m_Bounciness = i1577[1]
  i1576.m_ContactDistance = i1577[2]
  return i1576
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1579 = data
  i1578.m_ExtremumSlip = i1579[0]
  i1578.m_ExtremumValue = i1579[1]
  i1578.m_AsymptoteSlip = i1579[2]
  i1578.m_AsymptoteValue = i1579[3]
  i1578.m_Stiffness = i1579[4]
  return i1578
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1580 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1581 = data
  i1580.m_LowerAngle = i1581[0]
  i1580.m_UpperAngle = i1581[1]
  return i1580
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1583 = data
  i1582.m_MotorSpeed = i1583[0]
  i1582.m_MaximumMotorTorque = i1583[1]
  return i1582
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1585 = data
  i1584.m_DampingRatio = i1585[0]
  i1584.m_Frequency = i1585[1]
  i1584.m_Angle = i1585[2]
  return i1584
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1587 = data
  i1586.m_LowerTranslation = i1587[0]
  i1586.m_UpperTranslation = i1587[1]
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1589 = data
  i1588.name = i1589[0]
  i1588.width = i1589[1]
  i1588.height = i1589[2]
  i1588.mipmapCount = i1589[3]
  i1588.anisoLevel = i1589[4]
  i1588.filterMode = i1589[5]
  i1588.hdr = !!i1589[6]
  i1588.format = i1589[7]
  i1588.wrapMode = i1589[8]
  i1588.alphaIsTransparency = !!i1589[9]
  i1588.alphaSource = i1589[10]
  i1588.graphicsFormat = i1589[11]
  i1588.sRGBTexture = !!i1589[12]
  i1588.desiredColorSpace = i1589[13]
  i1588.wrapU = i1589[14]
  i1588.wrapV = i1589[15]
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1590 = root || new pc.UnityMaterial()
  var i1591 = data
  i1590.name = i1591[0]
  request.r(i1591[1], i1591[2], 0, i1590, 'shader')
  i1590.renderQueue = i1591[3]
  i1590.enableInstancing = !!i1591[4]
  var i1593 = i1591[5]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1593[i + 0]) );
  }
  i1590.floatParameters = i1592
  var i1595 = i1591[6]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 1) {
    i1594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1595[i + 0]) );
  }
  i1590.colorParameters = i1594
  var i1597 = i1591[7]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1597[i + 0]) );
  }
  i1590.vectorParameters = i1596
  var i1599 = i1591[8]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 1) {
    i1598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1599[i + 0]) );
  }
  i1590.textureParameters = i1598
  var i1601 = i1591[9]
  var i1600 = []
  for(var i = 0; i < i1601.length; i += 1) {
    i1600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1601[i + 0]) );
  }
  i1590.materialFlags = i1600
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1605 = data
  i1604.name = i1605[0]
  i1604.value = i1605[1]
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1609 = data
  i1608.name = i1609[0]
  i1608.value = new pc.Color(i1609[1], i1609[2], i1609[3], i1609[4])
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1613 = data
  i1612.name = i1613[0]
  i1612.value = new pc.Vec4( i1613[1], i1613[2], i1613[3], i1613[4] )
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1617 = data
  i1616.name = i1617[0]
  request.r(i1617[1], i1617[2], 0, i1616, 'value')
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1621 = data
  i1620.name = i1621[0]
  i1620.enabled = !!i1621[1]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1623 = data
  i1622.pivot = new pc.Vec2( i1623[0], i1623[1] )
  i1622.anchorMin = new pc.Vec2( i1623[2], i1623[3] )
  i1622.anchorMax = new pc.Vec2( i1623[4], i1623[5] )
  i1622.sizeDelta = new pc.Vec2( i1623[6], i1623[7] )
  i1622.anchoredPosition3D = new pc.Vec3( i1623[8], i1623[9], i1623[10] )
  i1622.rotation = new pc.Quat(i1623[11], i1623[12], i1623[13], i1623[14])
  i1622.scale = new pc.Vec3( i1623[15], i1623[16], i1623[17] )
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1625 = data
  i1624.cullTransparentMesh = !!i1625[0]
  return i1624
}

Deserializers["People"] = function (request, data, root) {
  var i1626 = root || request.c( 'People' )
  var i1627 = data
  request.r(i1627[0], i1627[1], 0, i1626, '_readyImage')
  request.r(i1627[2], i1627[3], 0, i1626, '_additiveImage1')
  request.r(i1627[4], i1627[5], 0, i1626, '_additiveImage2')
  request.r(i1627[6], i1627[7], 0, i1626, '_endPoint')
  request.r(i1627[8], i1627[9], 0, i1626, 'Bank')
  request.r(i1627[10], i1627[11], 0, i1626, '_sizeText')
  i1626.CupType = i1627[12]
  i1626.JuiceType = i1627[13]
  i1626.AdditiveType1 = i1627[14]
  i1626.AdditiveType2 = i1627[15]
  request.r(i1627[16], i1627[17], 0, i1626, '_finishSound')
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1629 = data
  request.r(i1629[0], i1629[1], 0, i1628, 'clip')
  request.r(i1629[2], i1629[3], 0, i1628, 'outputAudioMixerGroup')
  i1628.playOnAwake = !!i1629[4]
  i1628.loop = !!i1629[5]
  i1628.time = i1629[6]
  i1628.volume = i1629[7]
  i1628.pitch = i1629[8]
  i1628.enabled = !!i1629[9]
  return i1628
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1630 = root || request.c( 'UnityEngine.UI.Image' )
  var i1631 = data
  request.r(i1631[0], i1631[1], 0, i1630, 'm_Sprite')
  i1630.m_Type = i1631[2]
  i1630.m_PreserveAspect = !!i1631[3]
  i1630.m_FillCenter = !!i1631[4]
  i1630.m_FillMethod = i1631[5]
  i1630.m_FillAmount = i1631[6]
  i1630.m_FillClockwise = !!i1631[7]
  i1630.m_FillOrigin = i1631[8]
  i1630.m_UseSpriteMesh = !!i1631[9]
  i1630.m_PixelsPerUnitMultiplier = i1631[10]
  request.r(i1631[11], i1631[12], 0, i1630, 'm_Material')
  i1630.m_Maskable = !!i1631[13]
  i1630.m_Color = new pc.Color(i1631[14], i1631[15], i1631[16], i1631[17])
  i1630.m_RaycastTarget = !!i1631[18]
  i1630.m_RaycastPadding = new pc.Vec4( i1631[19], i1631[20], i1631[21], i1631[22] )
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1633 = data
  i1632.name = i1633[0]
  i1632.tagId = i1633[1]
  i1632.enabled = !!i1633[2]
  i1632.isStatic = !!i1633[3]
  i1632.layer = i1633[4]
  return i1632
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.UI.Button' )
  var i1635 = data
  i1634.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1635[0], i1634.m_OnClick)
  i1634.m_Navigation = request.d('UnityEngine.UI.Navigation', i1635[1], i1634.m_Navigation)
  i1634.m_Transition = i1635[2]
  i1634.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1635[3], i1634.m_Colors)
  i1634.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1635[4], i1634.m_SpriteState)
  i1634.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1635[5], i1634.m_AnimationTriggers)
  i1634.m_Interactable = !!i1635[6]
  request.r(i1635[7], i1635[8], 0, i1634, 'm_TargetGraphic')
  return i1634
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1637 = data
  i1636.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1637[0], i1636.m_PersistentCalls)
  return i1636
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1639 = data
  var i1641 = i1639[0]
  var i1640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.add(request.d('UnityEngine.Events.PersistentCall', i1641[i + 0]));
  }
  i1638.m_Calls = i1640
  return i1638
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1645 = data
  request.r(i1645[0], i1645[1], 0, i1644, 'm_Target')
  i1644.m_TargetAssemblyTypeName = i1645[2]
  i1644.m_MethodName = i1645[3]
  i1644.m_Mode = i1645[4]
  i1644.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1645[5], i1644.m_Arguments)
  i1644.m_CallState = i1645[6]
  return i1644
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1647 = data
  request.r(i1647[0], i1647[1], 0, i1646, 'm_ObjectArgument')
  i1646.m_ObjectArgumentAssemblyTypeName = i1647[2]
  i1646.m_IntArgument = i1647[3]
  i1646.m_FloatArgument = i1647[4]
  i1646.m_StringArgument = i1647[5]
  i1646.m_BoolArgument = !!i1647[6]
  return i1646
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1648 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1649 = data
  i1648.m_Mode = i1649[0]
  i1648.m_WrapAround = !!i1649[1]
  request.r(i1649[2], i1649[3], 0, i1648, 'm_SelectOnUp')
  request.r(i1649[4], i1649[5], 0, i1648, 'm_SelectOnDown')
  request.r(i1649[6], i1649[7], 0, i1648, 'm_SelectOnLeft')
  request.r(i1649[8], i1649[9], 0, i1648, 'm_SelectOnRight')
  return i1648
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1650 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1651 = data
  i1650.m_NormalColor = new pc.Color(i1651[0], i1651[1], i1651[2], i1651[3])
  i1650.m_HighlightedColor = new pc.Color(i1651[4], i1651[5], i1651[6], i1651[7])
  i1650.m_PressedColor = new pc.Color(i1651[8], i1651[9], i1651[10], i1651[11])
  i1650.m_SelectedColor = new pc.Color(i1651[12], i1651[13], i1651[14], i1651[15])
  i1650.m_DisabledColor = new pc.Color(i1651[16], i1651[17], i1651[18], i1651[19])
  i1650.m_ColorMultiplier = i1651[20]
  i1650.m_FadeDuration = i1651[21]
  return i1650
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1653 = data
  request.r(i1653[0], i1653[1], 0, i1652, 'm_HighlightedSprite')
  request.r(i1653[2], i1653[3], 0, i1652, 'm_PressedSprite')
  request.r(i1653[4], i1653[5], 0, i1652, 'm_SelectedSprite')
  request.r(i1653[6], i1653[7], 0, i1652, 'm_DisabledSprite')
  return i1652
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1655 = data
  i1654.m_NormalTrigger = i1655[0]
  i1654.m_HighlightedTrigger = i1655[1]
  i1654.m_PressedTrigger = i1655[2]
  i1654.m_SelectedTrigger = i1655[3]
  i1654.m_DisabledTrigger = i1655[4]
  return i1654
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1656 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1657 = data
  i1656.m_hasFontAssetChanged = !!i1657[0]
  request.r(i1657[1], i1657[2], 0, i1656, 'm_baseMaterial')
  i1656.m_maskOffset = new pc.Vec4( i1657[3], i1657[4], i1657[5], i1657[6] )
  i1656.m_text = i1657[7]
  i1656.m_isRightToLeft = !!i1657[8]
  request.r(i1657[9], i1657[10], 0, i1656, 'm_fontAsset')
  request.r(i1657[11], i1657[12], 0, i1656, 'm_sharedMaterial')
  var i1659 = i1657[13]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 2) {
  request.r(i1659[i + 0], i1659[i + 1], 2, i1658, '')
  }
  i1656.m_fontSharedMaterials = i1658
  request.r(i1657[14], i1657[15], 0, i1656, 'm_fontMaterial')
  var i1661 = i1657[16]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 2) {
  request.r(i1661[i + 0], i1661[i + 1], 2, i1660, '')
  }
  i1656.m_fontMaterials = i1660
  i1656.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1657[17], i1657[18], i1657[19], i1657[20])
  i1656.m_fontColor = new pc.Color(i1657[21], i1657[22], i1657[23], i1657[24])
  i1656.m_enableVertexGradient = !!i1657[25]
  i1656.m_colorMode = i1657[26]
  i1656.m_fontColorGradient = request.d('TMPro.VertexGradient', i1657[27], i1656.m_fontColorGradient)
  request.r(i1657[28], i1657[29], 0, i1656, 'm_fontColorGradientPreset')
  request.r(i1657[30], i1657[31], 0, i1656, 'm_spriteAsset')
  i1656.m_tintAllSprites = !!i1657[32]
  request.r(i1657[33], i1657[34], 0, i1656, 'm_StyleSheet')
  i1656.m_TextStyleHashCode = i1657[35]
  i1656.m_overrideHtmlColors = !!i1657[36]
  i1656.m_faceColor = UnityEngine.Color32.ConstructColor(i1657[37], i1657[38], i1657[39], i1657[40])
  i1656.m_fontSize = i1657[41]
  i1656.m_fontSizeBase = i1657[42]
  i1656.m_fontWeight = i1657[43]
  i1656.m_enableAutoSizing = !!i1657[44]
  i1656.m_fontSizeMin = i1657[45]
  i1656.m_fontSizeMax = i1657[46]
  i1656.m_fontStyle = i1657[47]
  i1656.m_HorizontalAlignment = i1657[48]
  i1656.m_VerticalAlignment = i1657[49]
  i1656.m_textAlignment = i1657[50]
  i1656.m_characterSpacing = i1657[51]
  i1656.m_wordSpacing = i1657[52]
  i1656.m_lineSpacing = i1657[53]
  i1656.m_lineSpacingMax = i1657[54]
  i1656.m_paragraphSpacing = i1657[55]
  i1656.m_charWidthMaxAdj = i1657[56]
  i1656.m_enableWordWrapping = !!i1657[57]
  i1656.m_wordWrappingRatios = i1657[58]
  i1656.m_overflowMode = i1657[59]
  request.r(i1657[60], i1657[61], 0, i1656, 'm_linkedTextComponent')
  request.r(i1657[62], i1657[63], 0, i1656, 'parentLinkedComponent')
  i1656.m_enableKerning = !!i1657[64]
  i1656.m_enableExtraPadding = !!i1657[65]
  i1656.checkPaddingRequired = !!i1657[66]
  i1656.m_isRichText = !!i1657[67]
  i1656.m_parseCtrlCharacters = !!i1657[68]
  i1656.m_isOrthographic = !!i1657[69]
  i1656.m_isCullingEnabled = !!i1657[70]
  i1656.m_horizontalMapping = i1657[71]
  i1656.m_verticalMapping = i1657[72]
  i1656.m_uvLineOffset = i1657[73]
  i1656.m_geometrySortingOrder = i1657[74]
  i1656.m_IsTextObjectScaleStatic = !!i1657[75]
  i1656.m_VertexBufferAutoSizeReduction = !!i1657[76]
  i1656.m_useMaxVisibleDescender = !!i1657[77]
  i1656.m_pageToDisplay = i1657[78]
  i1656.m_margin = new pc.Vec4( i1657[79], i1657[80], i1657[81], i1657[82] )
  i1656.m_isUsingLegacyAnimationComponent = !!i1657[83]
  i1656.m_isVolumetricText = !!i1657[84]
  request.r(i1657[85], i1657[86], 0, i1656, 'm_Material')
  i1656.m_Maskable = !!i1657[87]
  i1656.m_Color = new pc.Color(i1657[88], i1657[89], i1657[90], i1657[91])
  i1656.m_RaycastTarget = !!i1657[92]
  i1656.m_RaycastPadding = new pc.Vec4( i1657[93], i1657[94], i1657[95], i1657[96] )
  return i1656
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1664 = root || request.c( 'TMPro.VertexGradient' )
  var i1665 = data
  i1664.topLeft = new pc.Color(i1665[0], i1665[1], i1665[2], i1665[3])
  i1664.topRight = new pc.Color(i1665[4], i1665[5], i1665[6], i1665[7])
  i1664.bottomLeft = new pc.Color(i1665[8], i1665[9], i1665[10], i1665[11])
  i1664.bottomRight = new pc.Color(i1665[12], i1665[13], i1665[14], i1665[15])
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1667 = data
  i1666.name = i1667[0]
  i1666.index = i1667[1]
  i1666.startup = !!i1667[2]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1669 = data
  i1668.position = new pc.Vec3( i1669[0], i1669[1], i1669[2] )
  i1668.scale = new pc.Vec3( i1669[3], i1669[4], i1669[5] )
  i1668.rotation = new pc.Quat(i1669[6], i1669[7], i1669[8], i1669[9])
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1671 = data
  i1670.enabled = !!i1671[0]
  i1670.aspect = i1671[1]
  i1670.orthographic = !!i1671[2]
  i1670.orthographicSize = i1671[3]
  i1670.backgroundColor = new pc.Color(i1671[4], i1671[5], i1671[6], i1671[7])
  i1670.nearClipPlane = i1671[8]
  i1670.farClipPlane = i1671[9]
  i1670.fieldOfView = i1671[10]
  i1670.depth = i1671[11]
  i1670.clearFlags = i1671[12]
  i1670.cullingMask = i1671[13]
  i1670.rect = i1671[14]
  request.r(i1671[15], i1671[16], 0, i1670, 'targetTexture')
  i1670.usePhysicalProperties = !!i1671[17]
  i1670.focalLength = i1671[18]
  i1670.sensorSize = new pc.Vec2( i1671[19], i1671[20] )
  i1670.lensShift = new pc.Vec2( i1671[21], i1671[22] )
  i1670.gateFit = i1671[23]
  i1670.commandBufferCount = i1671[24]
  i1670.cameraType = i1671[25]
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1673 = data
  request.r(i1673[0], i1673[1], 0, i1672, 'animatorController')
  request.r(i1673[2], i1673[3], 0, i1672, 'avatar')
  i1672.updateMode = i1673[4]
  i1672.hasTransformHierarchy = !!i1673[5]
  i1672.applyRootMotion = !!i1673[6]
  var i1675 = i1673[7]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 2) {
  request.r(i1675[i + 0], i1675[i + 1], 2, i1674, '')
  }
  i1672.humanBones = i1674
  i1672.enabled = !!i1673[8]
  return i1672
}

Deserializers["Bank"] = function (request, data, root) {
  var i1678 = root || request.c( 'Bank' )
  var i1679 = data
  request.r(i1679[0], i1679[1], 0, i1678, 'BuyBigCupButton')
  request.r(i1679[2], i1679[3], 0, i1678, 'BigCupButton')
  request.r(i1679[4], i1679[5], 0, i1678, 'MiddleCupButton')
  request.r(i1679[6], i1679[7], 0, i1678, 'MoneyText')
  request.r(i1679[8], i1679[9], 0, i1678, 'Tutorial')
  request.r(i1679[10], i1679[11], 0, i1678, 'BuyAdditiveButton')
  request.r(i1679[12], i1679[13], 0, i1678, 'BuyJuiceButton')
  request.r(i1679[14], i1679[15], 0, i1678, 'JuiceButton1')
  request.r(i1679[16], i1679[17], 0, i1678, 'JuiceButton2')
  request.r(i1679[18], i1679[19], 0, i1678, 'JuiceButton3')
  request.r(i1679[20], i1679[21], 0, i1678, 'Additive1Button')
  request.r(i1679[22], i1679[23], 0, i1678, 'Additive2Button')
  i1678.Money = i1679[24]
  i1678.IsBigCupBuy = !!i1679[25]
  i1678.IsJuiceBuy = !!i1679[26]
  i1678.IsAdditiveBuy = !!i1679[27]
  request.r(i1679[28], i1679[29], 0, i1678, '_buySound')
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1681 = data
  i1680.enabled = !!i1681[0]
  i1680.planeDistance = i1681[1]
  i1680.referencePixelsPerUnit = i1681[2]
  i1680.isFallbackOverlay = !!i1681[3]
  i1680.renderMode = i1681[4]
  i1680.renderOrder = i1681[5]
  i1680.sortingLayerName = i1681[6]
  i1680.sortingOrder = i1681[7]
  i1680.scaleFactor = i1681[8]
  request.r(i1681[9], i1681[10], 0, i1680, 'worldCamera')
  i1680.overrideSorting = !!i1681[11]
  i1680.pixelPerfect = !!i1681[12]
  i1680.targetDisplay = i1681[13]
  i1680.overridePixelPerfect = !!i1681[14]
  return i1680
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1682 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1683 = data
  i1682.m_UiScaleMode = i1683[0]
  i1682.m_ReferencePixelsPerUnit = i1683[1]
  i1682.m_ScaleFactor = i1683[2]
  i1682.m_ReferenceResolution = new pc.Vec2( i1683[3], i1683[4] )
  i1682.m_ScreenMatchMode = i1683[5]
  i1682.m_MatchWidthOrHeight = i1683[6]
  i1682.m_PhysicalUnit = i1683[7]
  i1682.m_FallbackScreenDPI = i1683[8]
  i1682.m_DefaultSpriteDPI = i1683[9]
  i1682.m_DynamicPixelsPerUnit = i1683[10]
  i1682.m_PresetInfoIsWorld = !!i1683[11]
  return i1682
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1684 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1685 = data
  i1684.m_IgnoreReversedGraphics = !!i1685[0]
  i1684.m_BlockingObjects = i1685[1]
  i1684.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1685[2] )
  return i1684
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i1686 = root || request.c( 'ImageShiftOnOrientation' )
  var i1687 = data
  var i1689 = i1687[0]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( request.d('ItemSwitcherData', i1689[i + 0]) );
  }
  i1686.Items = i1688
  request.r(i1687[1], i1687[2], 0, i1686, '_backHorizontal')
  request.r(i1687[3], i1687[4], 0, i1686, '_backVertical')
  request.r(i1687[5], i1687[6], 0, i1686, '_tableHorizontal')
  request.r(i1687[7], i1687[8], 0, i1686, '_tableVertical')
  i1686.IsDebug = !!i1687[9]
  i1686.CanCopy = !!i1687[10]
  return i1686
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i1692 = root || request.c( 'ItemSwitcherData' )
  var i1693 = data
  request.r(i1693[0], i1693[1], 0, i1692, 'Target')
  i1692.HorizontalAnchoredPosition = new pc.Vec2( i1693[2], i1693[3] )
  i1692.SizeHorizontal = new pc.Vec2( i1693[4], i1693[5] )
  i1692.VerticalAnchoredPosition = new pc.Vec2( i1693[6], i1693[7] )
  i1692.SizeVertical = new pc.Vec2( i1693[8], i1693[9] )
  i1692.MinHorizontal = new pc.Vec2( i1693[10], i1693[11] )
  i1692.MaxHorizontal = new pc.Vec2( i1693[12], i1693[13] )
  i1692.MinVertical = new pc.Vec2( i1693[14], i1693[15] )
  i1692.MaxVertical = new pc.Vec2( i1693[16], i1693[17] )
  i1692.IsAnchored = !!i1693[18]
  i1692.IsDebug = !!i1693[19]
  i1692.CopyHorizontal = !!i1693[20]
  i1692.CopyVertical = !!i1693[21]
  return i1692
}

Deserializers["Point"] = function (request, data, root) {
  var i1694 = root || request.c( 'Point' )
  var i1695 = data
  return i1694
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i1696 = root || request.c( 'PeopleContainer' )
  var i1697 = data
  var i1699 = i1697[0]
  var i1698 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1699.length; i += 2) {
  request.r(i1699[i + 0], i1699[i + 1], 1, i1698, '')
  }
  i1696.CurrentPeoples = i1698
  var i1701 = i1697[1]
  var i1700 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1701.length; i += 2) {
  request.r(i1701[i + 0], i1701[i + 1], 1, i1700, '')
  }
  i1696._peoples = i1700
  request.r(i1697[2], i1697[3], 0, i1696, '_tutorialPeople')
  request.r(i1697[4], i1697[5], 0, i1696, '_spawnPoint')
  request.r(i1697[6], i1697[7], 0, i1696, '_point1')
  request.r(i1697[8], i1697[9], 0, i1696, '_point2')
  request.r(i1697[10], i1697[11], 0, i1696, '_endPoint')
  request.r(i1697[12], i1697[13], 0, i1696, '_juiceConfig')
  request.r(i1697[14], i1697[15], 0, i1696, '_tutorial')
  return i1696
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1705 = data
  i1704.m_HorizontalFit = i1705[0]
  i1704.m_VerticalFit = i1705[1]
  return i1704
}

Deserializers["BackImage"] = function (request, data, root) {
  var i1706 = root || request.c( 'BackImage' )
  var i1707 = data
  return i1706
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i1708 = root || request.c( 'AheadImage' )
  var i1709 = data
  return i1708
}

Deserializers["Order"] = function (request, data, root) {
  var i1710 = root || request.c( 'Order' )
  var i1711 = data
  request.r(i1711[0], i1711[1], 0, i1710, '_juiceAnimator')
  request.r(i1711[2], i1711[3], 0, i1710, '_cupAnimator')
  request.r(i1711[4], i1711[5], 0, i1710, '_canvasAnimator')
  i1710.CupType = i1711[6]
  i1710.JuiceType = i1711[7]
  i1710.AdditiveType1 = i1711[8]
  i1710.AdditiveType2 = i1711[9]
  i1710.IsFree = !!i1711[10]
  i1710.IsSpriteReady = !!i1711[11]
  i1710.IsCupReady = !!i1711[12]
  i1710.IsJuiceReady = !!i1711[13]
  i1710.IsPouring = !!i1711[14]
  request.r(i1711[15], i1711[16], 0, i1710, '_iceButton')
  request.r(i1711[17], i1711[18], 0, i1710, '_grassButton')
  request.r(i1711[19], i1711[20], 0, i1710, '_juiceBallsButton')
  request.r(i1711[21], i1711[22], 0, i1710, '_strawButton')
  request.r(i1711[23], i1711[24], 0, i1710, '_bigCupButton')
  request.r(i1711[25], i1711[26], 0, i1710, '_middleCupButton')
  request.r(i1711[27], i1711[28], 0, i1710, '_smallCupButton')
  request.r(i1711[29], i1711[30], 0, i1710, '_appleButton')
  request.r(i1711[31], i1711[32], 0, i1710, '_orangeButton')
  request.r(i1711[33], i1711[34], 0, i1710, '_multifruitButton')
  request.r(i1711[35], i1711[36], 0, i1710, '_tomatoButton')
  request.r(i1711[37], i1711[38], 0, i1710, '_cherryButton')
  request.r(i1711[39], i1711[40], 0, i1710, '_smallRawJuiceImage')
  request.r(i1711[41], i1711[42], 0, i1710, '_middleRawJuiceImage')
  request.r(i1711[43], i1711[44], 0, i1710, '_bigRawJuiceImage')
  request.r(i1711[45], i1711[46], 0, i1710, '_smallReadyJuiceImage')
  request.r(i1711[47], i1711[48], 0, i1710, '_middleReadyJuiceImage')
  request.r(i1711[49], i1711[50], 0, i1710, '_bigReadyJuiceImage')
  request.r(i1711[51], i1711[52], 0, i1710, '_backImage')
  request.r(i1711[53], i1711[54], 0, i1710, '_aheadImage')
  request.r(i1711[55], i1711[56], 0, i1710, '_config')
  request.r(i1711[57], i1711[58], 0, i1710, '_takeOrderButton')
  request.r(i1711[59], i1711[60], 0, i1710, '_peopleContainer')
  request.r(i1711[61], i1711[62], 0, i1710, '_tutorial')
  request.r(i1711[63], i1711[64], 0, i1710, '_bText')
  request.r(i1711[65], i1711[66], 0, i1710, '_mText')
  request.r(i1711[67], i1711[68], 0, i1710, '_sText')
  request.r(i1711[69], i1711[70], 0, i1710, '_garbageButton')
  request.r(i1711[71], i1711[72], 0, i1710, '_clickSound')
  request.r(i1711[73], i1711[74], 0, i1710, '_juiceSound')
  return i1710
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i1712 = root || request.c( 'Tutorial' )
  var i1713 = data
  i1712.IsTutorial = !!i1713[0]
  request.r(i1713[1], i1713[2], 0, i1712, 'Finger1')
  request.r(i1713[3], i1713[4], 0, i1712, 'Finger2')
  request.r(i1713[5], i1713[6], 0, i1712, 'Finger3')
  request.r(i1713[7], i1713[8], 0, i1712, 'Finger4')
  request.r(i1713[9], i1713[10], 0, i1712, 'Finger5')
  request.r(i1713[11], i1713[12], 0, i1712, 'BuyBigCupFinger')
  request.r(i1713[13], i1713[14], 0, i1712, 'BuyJuiceFinger')
  request.r(i1713[15], i1713[16], 0, i1712, 'SmallCupButton')
  request.r(i1713[17], i1713[18], 0, i1712, 'JuiceButton')
  request.r(i1713[19], i1713[20], 0, i1712, 'StrawButton')
  request.r(i1713[21], i1713[22], 0, i1712, 'AdditiveButton')
  request.r(i1713[23], i1713[24], 0, i1712, 'ReadyButton')
  var i1715 = i1713[25]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 2) {
  request.r(i1715[i + 0], i1715[i + 1], 2, i1714, '')
  }
  i1712.Buttons = i1714
  request.r(i1713[26], i1713[27], 0, i1712, 'Bank')
  return i1712
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i1718 = root || request.c( 'SoundSwitcher' )
  var i1719 = data
  request.r(i1719[0], i1719[1], 0, i1718, '_onImage')
  request.r(i1719[2], i1719[3], 0, i1718, '_offImage')
  return i1718
}

Deserializers["Fix.ClickCta"] = function (request, data, root) {
  var i1720 = root || request.c( 'Fix.ClickCta' )
  var i1721 = data
  return i1720
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1722 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1723 = data
  request.r(i1723[0], i1723[1], 0, i1722, 'm_FirstSelected')
  i1722.m_sendNavigationEvents = !!i1723[2]
  i1722.m_DragThreshold = i1723[3]
  return i1722
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1724 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1725 = data
  i1724.m_HorizontalAxis = i1725[0]
  i1724.m_VerticalAxis = i1725[1]
  i1724.m_SubmitButton = i1725[2]
  i1724.m_CancelButton = i1725[3]
  i1724.m_InputActionsPerSecond = i1725[4]
  i1724.m_RepeatDelay = i1725[5]
  i1724.m_ForceModuleActive = !!i1725[6]
  i1724.m_SendPointerHoverToParent = !!i1725[7]
  return i1724
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i1726 = root || request.c( 'JuiceConfig' )
  var i1727 = data
  request.r(i1727[0], i1727[1], 0, i1726, 'EntityBigCup')
  request.r(i1727[2], i1727[3], 0, i1726, 'TomatoBigCup')
  request.r(i1727[4], i1727[5], 0, i1726, 'AppleBigCup')
  request.r(i1727[6], i1727[7], 0, i1726, 'OrangeBigCup')
  request.r(i1727[8], i1727[9], 0, i1726, 'CherryBigCup')
  request.r(i1727[10], i1727[11], 0, i1726, 'MultifruitBigCup')
  request.r(i1727[12], i1727[13], 0, i1726, 'TomatoBigStrawCup')
  request.r(i1727[14], i1727[15], 0, i1726, 'MultifruitBigStrawCup')
  request.r(i1727[16], i1727[17], 0, i1726, 'AppleBigStrawCup')
  request.r(i1727[18], i1727[19], 0, i1726, 'OrangeBigStrawCup')
  request.r(i1727[20], i1727[21], 0, i1726, 'CherryBigStrawCup')
  request.r(i1727[22], i1727[23], 0, i1726, 'MultifruitBigBallsCup')
  request.r(i1727[24], i1727[25], 0, i1726, 'TomatoBigBallsCup')
  request.r(i1727[26], i1727[27], 0, i1726, 'AppleBigBallsCup')
  request.r(i1727[28], i1727[29], 0, i1726, 'OrangeBigBallsCup')
  request.r(i1727[30], i1727[31], 0, i1726, 'CherryBigBallsCup')
  request.r(i1727[32], i1727[33], 0, i1726, 'EntityMiddleCup')
  request.r(i1727[34], i1727[35], 0, i1726, 'TomatoMiddleCup')
  request.r(i1727[36], i1727[37], 0, i1726, 'AppleMiddleCup')
  request.r(i1727[38], i1727[39], 0, i1726, 'OrangeMiddleCup')
  request.r(i1727[40], i1727[41], 0, i1726, 'CherryMiddleCup')
  request.r(i1727[42], i1727[43], 0, i1726, 'MultifruitMiddleCup')
  request.r(i1727[44], i1727[45], 0, i1726, 'TomatoMiddleStrawCup')
  request.r(i1727[46], i1727[47], 0, i1726, 'MultifruitMiddleStrawCup')
  request.r(i1727[48], i1727[49], 0, i1726, 'AppleMiddleStrawCup')
  request.r(i1727[50], i1727[51], 0, i1726, 'OrangeMiddleStrawCup')
  request.r(i1727[52], i1727[53], 0, i1726, 'CherryMiddleStrawCup')
  request.r(i1727[54], i1727[55], 0, i1726, 'MultifruitMiddleBallsCup')
  request.r(i1727[56], i1727[57], 0, i1726, 'TomatoMiddleBallsCup')
  request.r(i1727[58], i1727[59], 0, i1726, 'AppleMiddleBallsCup')
  request.r(i1727[60], i1727[61], 0, i1726, 'OrangeMiddleBallsCup')
  request.r(i1727[62], i1727[63], 0, i1726, 'CherryMiddleBallsCup')
  request.r(i1727[64], i1727[65], 0, i1726, 'EntitySmallCup')
  request.r(i1727[66], i1727[67], 0, i1726, 'TomatoSmallCup')
  request.r(i1727[68], i1727[69], 0, i1726, 'AppleSmallCup')
  request.r(i1727[70], i1727[71], 0, i1726, 'OrangeSmallCup')
  request.r(i1727[72], i1727[73], 0, i1726, 'CherrySmallCup')
  request.r(i1727[74], i1727[75], 0, i1726, 'MultifruitSmallCup')
  request.r(i1727[76], i1727[77], 0, i1726, 'TomatoSmallStrawCup')
  request.r(i1727[78], i1727[79], 0, i1726, 'AppleSmallStrawCup')
  request.r(i1727[80], i1727[81], 0, i1726, 'OrangeSmallStrawCup')
  request.r(i1727[82], i1727[83], 0, i1726, 'CherrySmallStrawCup')
  request.r(i1727[84], i1727[85], 0, i1726, 'MultifruitSmallStrawCup')
  request.r(i1727[86], i1727[87], 0, i1726, 'AppleSmallBallsCup')
  request.r(i1727[88], i1727[89], 0, i1726, 'TomatoSmallBallsCup')
  request.r(i1727[90], i1727[91], 0, i1726, 'OrangeSmallBallsCup')
  request.r(i1727[92], i1727[93], 0, i1726, 'CherrySmallBallsCup')
  request.r(i1727[94], i1727[95], 0, i1726, 'MultifruitSmallBallsCup')
  request.r(i1727[96], i1727[97], 0, i1726, 'JuiceBallAdditive')
  request.r(i1727[98], i1727[99], 0, i1726, 'IceAdditive')
  request.r(i1727[100], i1727[101], 0, i1726, 'GrassAdditive')
  return i1726
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i1728 = root || request.c( 'TouchIdleTimer' )
  var i1729 = data
  return i1728
}

Deserializers["Helper"] = function (request, data, root) {
  var i1730 = root || request.c( 'Helper' )
  var i1731 = data
  request.r(i1731[0], i1731[1], 0, i1730, '_smallCupFinger')
  request.r(i1731[2], i1731[3], 0, i1730, '_middleCupFinger')
  request.r(i1731[4], i1731[5], 0, i1730, '_bigCupFinger')
  request.r(i1731[6], i1731[7], 0, i1730, '_iceFinger')
  request.r(i1731[8], i1731[9], 0, i1730, '_grassFinger')
  request.r(i1731[10], i1731[11], 0, i1730, '_juiceballFinger')
  request.r(i1731[12], i1731[13], 0, i1730, '_appleFinger')
  request.r(i1731[14], i1731[15], 0, i1730, '_cherryFinger')
  request.r(i1731[16], i1731[17], 0, i1730, '_orangeFinger')
  request.r(i1731[18], i1731[19], 0, i1730, '_multifruitFinger')
  request.r(i1731[20], i1731[21], 0, i1730, '_tomatoFinger')
  request.r(i1731[22], i1731[23], 0, i1730, '_strawFinger')
  request.r(i1731[24], i1731[25], 0, i1730, '_readyFinger')
  var i1733 = i1731[26]
  var i1732 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1733.length; i += 2) {
  request.r(i1733[i + 0], i1733[i + 1], 1, i1732, '')
  }
  i1730._juiseButtons = i1732
  request.r(i1731[27], i1731[28], 0, i1730, '_peoples')
  request.r(i1731[29], i1731[30], 0, i1730, '_tutorial')
  request.r(i1731[31], i1731[32], 0, i1730, '_order')
  request.r(i1731[33], i1731[34], 0, i1730, '_strawButton')
  request.r(i1731[35], i1731[36], 0, i1730, '_bigCupButton')
  request.r(i1731[37], i1731[38], 0, i1730, '_middleCupButton')
  request.r(i1731[39], i1731[40], 0, i1730, '_smallCupButton')
  request.r(i1731[41], i1731[42], 0, i1730, '_readyButton')
  request.r(i1731[43], i1731[44], 0, i1730, '_grassButton')
  request.r(i1731[45], i1731[46], 0, i1730, '_juiceballButton')
  request.r(i1731[47], i1731[48], 0, i1730, '_iceButton')
  request.r(i1731[49], i1731[50], 0, i1730, '_touchIdleTimer')
  request.r(i1731[51], i1731[52], 0, i1730, '_finalScreen')
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1737 = data
  i1736.ambientIntensity = i1737[0]
  i1736.reflectionIntensity = i1737[1]
  i1736.ambientMode = i1737[2]
  i1736.ambientLight = new pc.Color(i1737[3], i1737[4], i1737[5], i1737[6])
  i1736.ambientSkyColor = new pc.Color(i1737[7], i1737[8], i1737[9], i1737[10])
  i1736.ambientGroundColor = new pc.Color(i1737[11], i1737[12], i1737[13], i1737[14])
  i1736.ambientEquatorColor = new pc.Color(i1737[15], i1737[16], i1737[17], i1737[18])
  i1736.fogColor = new pc.Color(i1737[19], i1737[20], i1737[21], i1737[22])
  i1736.fogEndDistance = i1737[23]
  i1736.fogStartDistance = i1737[24]
  i1736.fogDensity = i1737[25]
  i1736.fog = !!i1737[26]
  request.r(i1737[27], i1737[28], 0, i1736, 'skybox')
  i1736.fogMode = i1737[29]
  var i1739 = i1737[30]
  var i1738 = []
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1739[i + 0]) );
  }
  i1736.lightmaps = i1738
  i1736.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1737[31], i1736.lightProbes)
  i1736.lightmapsMode = i1737[32]
  i1736.mixedBakeMode = i1737[33]
  i1736.environmentLightingMode = i1737[34]
  i1736.ambientProbe = new pc.SphericalHarmonicsL2(i1737[35])
  i1736.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1737[36])
  i1736.useReferenceAmbientProbe = !!i1737[37]
  request.r(i1737[38], i1737[39], 0, i1736, 'customReflection')
  request.r(i1737[40], i1737[41], 0, i1736, 'defaultReflection')
  i1736.defaultReflectionMode = i1737[42]
  i1736.defaultReflectionResolution = i1737[43]
  i1736.sunLightObjectId = i1737[44]
  i1736.pixelLightCount = i1737[45]
  i1736.defaultReflectionHDR = !!i1737[46]
  i1736.hasLightDataAsset = !!i1737[47]
  i1736.hasManualGenerate = !!i1737[48]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1743 = data
  request.r(i1743[0], i1743[1], 0, i1742, 'lightmapColor')
  request.r(i1743[2], i1743[3], 0, i1742, 'lightmapDirection')
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1744 = root || new UnityEngine.LightProbes()
  var i1745 = data
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1753 = data
  var i1755 = i1753[0]
  var i1754 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1755[i + 0]));
  }
  i1752.ShaderCompilationErrors = i1754
  i1752.name = i1753[1]
  i1752.guid = i1753[2]
  var i1757 = i1753[3]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.push( i1757[i + 0] );
  }
  i1752.shaderDefinedKeywords = i1756
  var i1759 = i1753[4]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1759[i + 0]) );
  }
  i1752.passes = i1758
  var i1761 = i1753[5]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1761[i + 0]) );
  }
  i1752.usePasses = i1760
  var i1763 = i1753[6]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1763[i + 0]) );
  }
  i1752.defaultParameterValues = i1762
  request.r(i1753[7], i1753[8], 0, i1752, 'unityFallbackShader')
  i1752.readDepth = !!i1753[9]
  i1752.isCreatedByShaderGraph = !!i1753[10]
  i1752.compiled = !!i1753[11]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1767 = data
  i1766.shaderName = i1767[0]
  i1766.errorMessage = i1767[1]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1772 = root || new pc.UnityShaderPass()
  var i1773 = data
  i1772.id = i1773[0]
  i1772.subShaderIndex = i1773[1]
  i1772.name = i1773[2]
  i1772.passType = i1773[3]
  i1772.grabPassTextureName = i1773[4]
  i1772.usePass = !!i1773[5]
  i1772.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[6], i1772.zTest)
  i1772.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[7], i1772.zWrite)
  i1772.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[8], i1772.culling)
  i1772.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1773[9], i1772.blending)
  i1772.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1773[10], i1772.alphaBlending)
  i1772.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[11], i1772.colorWriteMask)
  i1772.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[12], i1772.offsetUnits)
  i1772.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[13], i1772.offsetFactor)
  i1772.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[14], i1772.stencilRef)
  i1772.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[15], i1772.stencilReadMask)
  i1772.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[16], i1772.stencilWriteMask)
  i1772.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1773[17], i1772.stencilOp)
  i1772.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1773[18], i1772.stencilOpFront)
  i1772.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1773[19], i1772.stencilOpBack)
  var i1775 = i1773[20]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1775[i + 0]) );
  }
  i1772.tags = i1774
  var i1777 = i1773[21]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.push( i1777[i + 0] );
  }
  i1772.passDefinedKeywords = i1776
  var i1779 = i1773[22]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1779[i + 0]) );
  }
  i1772.passDefinedKeywordGroups = i1778
  var i1781 = i1773[23]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1781[i + 0]) );
  }
  i1772.variants = i1780
  var i1783 = i1773[24]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1783[i + 0]) );
  }
  i1772.excludedVariants = i1782
  i1772.hasDepthReader = !!i1773[25]
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1785 = data
  i1784.val = i1785[0]
  i1784.name = i1785[1]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1787 = data
  i1786.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1787[0], i1786.src)
  i1786.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1787[1], i1786.dst)
  i1786.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1787[2], i1786.op)
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1789 = data
  i1788.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[0], i1788.pass)
  i1788.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[1], i1788.fail)
  i1788.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[2], i1788.zFail)
  i1788.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1789[3], i1788.comp)
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1793 = data
  i1792.name = i1793[0]
  i1792.value = i1793[1]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1797 = data
  var i1799 = i1797[0]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( i1799[i + 0] );
  }
  i1796.keywords = i1798
  i1796.hasDiscard = !!i1797[1]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1803 = data
  i1802.passId = i1803[0]
  i1802.subShaderIndex = i1803[1]
  var i1805 = i1803[2]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( i1805[i + 0] );
  }
  i1802.keywords = i1804
  i1802.vertexProgram = i1803[3]
  i1802.fragmentProgram = i1803[4]
  i1802.exportedForWebGl2 = !!i1803[5]
  i1802.readDepth = !!i1803[6]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1809 = data
  request.r(i1809[0], i1809[1], 0, i1808, 'shader')
  i1808.pass = i1809[2]
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1813 = data
  i1812.name = i1813[0]
  i1812.type = i1813[1]
  i1812.value = new pc.Vec4( i1813[2], i1813[3], i1813[4], i1813[5] )
  i1812.textureValue = i1813[6]
  i1812.shaderPropertyFlag = i1813[7]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1815 = data
  i1814.name = i1815[0]
  request.r(i1815[1], i1815[2], 0, i1814, 'texture')
  i1814.aabb = i1815[3]
  i1814.vertices = i1815[4]
  i1814.triangles = i1815[5]
  i1814.textureRect = UnityEngine.Rect.MinMaxRect(i1815[6], i1815[7], i1815[8], i1815[9])
  i1814.packedRect = UnityEngine.Rect.MinMaxRect(i1815[10], i1815[11], i1815[12], i1815[13])
  i1814.border = new pc.Vec4( i1815[14], i1815[15], i1815[16], i1815[17] )
  i1814.transparency = i1815[18]
  i1814.bounds = i1815[19]
  i1814.pixelsPerUnit = i1815[20]
  i1814.textureWidth = i1815[21]
  i1814.textureHeight = i1815[22]
  i1814.nativeSize = new pc.Vec2( i1815[23], i1815[24] )
  i1814.pivot = new pc.Vec2( i1815[25], i1815[26] )
  i1814.textureRectOffset = new pc.Vec2( i1815[27], i1815[28] )
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1817 = data
  i1816.name = i1817[0]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1819 = data
  i1818.name = i1819[0]
  i1818.wrapMode = i1819[1]
  i1818.isLooping = !!i1819[2]
  i1818.length = i1819[3]
  var i1821 = i1819[4]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1821[i + 0]) );
  }
  i1818.curves = i1820
  var i1823 = i1819[5]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1823[i + 0]) );
  }
  i1818.events = i1822
  i1818.halfPrecision = !!i1819[6]
  i1818._frameRate = i1819[7]
  i1818.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1819[8], i1818.localBounds)
  i1818.hasMuscleCurves = !!i1819[9]
  var i1825 = i1819[10]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( i1825[i + 0] );
  }
  i1818.clipMuscleConstant = i1824
  i1818.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1819[11], i1818.clipBindingConstant)
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1829 = data
  i1828.path = i1829[0]
  i1828.hash = i1829[1]
  i1828.componentType = i1829[2]
  i1828.property = i1829[3]
  i1828.keys = i1829[4]
  var i1831 = i1829[5]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1831[i + 0]) );
  }
  i1828.objectReferenceKeys = i1830
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1835 = data
  i1834.time = i1835[0]
  request.r(i1835[1], i1835[2], 0, i1834, 'value')
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1839 = data
  i1838.functionName = i1839[0]
  i1838.floatParameter = i1839[1]
  i1838.intParameter = i1839[2]
  i1838.stringParameter = i1839[3]
  request.r(i1839[4], i1839[5], 0, i1838, 'objectReferenceParameter')
  i1838.time = i1839[6]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1841 = data
  i1840.center = new pc.Vec3( i1841[0], i1841[1], i1841[2] )
  i1840.extends = new pc.Vec3( i1841[3], i1841[4], i1841[5] )
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1845 = data
  var i1847 = i1845[0]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( i1847[i + 0] );
  }
  i1844.genericBindings = i1846
  var i1849 = i1845[1]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( i1849[i + 0] );
  }
  i1844.pptrCurveMapping = i1848
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1851 = data
  i1850.name = i1851[0]
  i1850.ascent = i1851[1]
  i1850.originalLineHeight = i1851[2]
  i1850.fontSize = i1851[3]
  var i1853 = i1851[4]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1853[i + 0]) );
  }
  i1850.characterInfo = i1852
  request.r(i1851[5], i1851[6], 0, i1850, 'texture')
  i1850.originalFontSize = i1851[7]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1857 = data
  i1856.index = i1857[0]
  i1856.advance = i1857[1]
  i1856.bearing = i1857[2]
  i1856.glyphWidth = i1857[3]
  i1856.glyphHeight = i1857[4]
  i1856.minX = i1857[5]
  i1856.maxX = i1857[6]
  i1856.minY = i1857[7]
  i1856.maxY = i1857[8]
  i1856.uvBottomLeftX = i1857[9]
  i1856.uvBottomLeftY = i1857[10]
  i1856.uvBottomRightX = i1857[11]
  i1856.uvBottomRightY = i1857[12]
  i1856.uvTopLeftX = i1857[13]
  i1856.uvTopLeftY = i1857[14]
  i1856.uvTopRightX = i1857[15]
  i1856.uvTopRightY = i1857[16]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1859 = data
  i1858.name = i1859[0]
  var i1861 = i1859[1]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1861[i + 0]) );
  }
  i1858.layers = i1860
  var i1863 = i1859[2]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1863[i + 0]) );
  }
  i1858.parameters = i1862
  i1858.animationClips = i1859[3]
  i1858.avatarUnsupported = i1859[4]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1867 = data
  i1866.name = i1867[0]
  i1866.defaultWeight = i1867[1]
  i1866.blendingMode = i1867[2]
  i1866.avatarMask = i1867[3]
  i1866.syncedLayerIndex = i1867[4]
  i1866.syncedLayerAffectsTiming = !!i1867[5]
  i1866.syncedLayers = i1867[6]
  i1866.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1867[7], i1866.stateMachine)
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1869 = data
  i1868.id = i1869[0]
  i1868.name = i1869[1]
  i1868.path = i1869[2]
  var i1871 = i1869[3]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1871[i + 0]) );
  }
  i1868.states = i1870
  var i1873 = i1869[4]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1873[i + 0]) );
  }
  i1868.machines = i1872
  var i1875 = i1869[5]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1875[i + 0]) );
  }
  i1868.entryStateTransitions = i1874
  var i1877 = i1869[6]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1877[i + 0]) );
  }
  i1868.exitStateTransitions = i1876
  var i1879 = i1869[7]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1879[i + 0]) );
  }
  i1868.anyStateTransitions = i1878
  i1868.defaultStateId = i1869[8]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1883 = data
  i1882.id = i1883[0]
  i1882.name = i1883[1]
  i1882.cycleOffset = i1883[2]
  i1882.cycleOffsetParameter = i1883[3]
  i1882.cycleOffsetParameterActive = !!i1883[4]
  i1882.mirror = !!i1883[5]
  i1882.mirrorParameter = i1883[6]
  i1882.mirrorParameterActive = !!i1883[7]
  i1882.motionId = i1883[8]
  i1882.nameHash = i1883[9]
  i1882.fullPathHash = i1883[10]
  i1882.speed = i1883[11]
  i1882.speedParameter = i1883[12]
  i1882.speedParameterActive = !!i1883[13]
  i1882.tag = i1883[14]
  i1882.tagHash = i1883[15]
  i1882.writeDefaultValues = !!i1883[16]
  var i1885 = i1883[17]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 2) {
  request.r(i1885[i + 0], i1885[i + 1], 2, i1884, '')
  }
  i1882.behaviours = i1884
  var i1887 = i1883[18]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1887[i + 0]) );
  }
  i1882.transitions = i1886
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1893 = data
  i1892.fullPath = i1893[0]
  i1892.canTransitionToSelf = !!i1893[1]
  i1892.duration = i1893[2]
  i1892.exitTime = i1893[3]
  i1892.hasExitTime = !!i1893[4]
  i1892.hasFixedDuration = !!i1893[5]
  i1892.interruptionSource = i1893[6]
  i1892.offset = i1893[7]
  i1892.orderedInterruption = !!i1893[8]
  i1892.destinationStateId = i1893[9]
  i1892.isExit = !!i1893[10]
  i1892.mute = !!i1893[11]
  i1892.solo = !!i1893[12]
  var i1895 = i1893[13]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1895[i + 0]) );
  }
  i1892.conditions = i1894
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1901 = data
  i1900.destinationStateId = i1901[0]
  i1900.isExit = !!i1901[1]
  i1900.mute = !!i1901[2]
  i1900.solo = !!i1901[3]
  var i1903 = i1901[4]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1903[i + 0]) );
  }
  i1900.conditions = i1902
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1907 = data
  i1906.mode = i1907[0]
  i1906.parameter = i1907[1]
  i1906.threshold = i1907[2]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1911 = data
  i1910.defaultBool = !!i1911[0]
  i1910.defaultFloat = i1911[1]
  i1910.defaultInt = i1911[2]
  i1910.name = i1911[3]
  i1910.nameHash = i1911[4]
  i1910.type = i1911[5]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1913 = data
  i1912.name = i1913[0]
  i1912.bytes64 = i1913[1]
  i1912.data = i1913[2]
  return i1912
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1914 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1915 = data
  i1914.hashCode = i1915[0]
  request.r(i1915[1], i1915[2], 0, i1914, 'material')
  i1914.materialHashCode = i1915[3]
  request.r(i1915[4], i1915[5], 0, i1914, 'atlas')
  i1914.normalStyle = i1915[6]
  i1914.normalSpacingOffset = i1915[7]
  i1914.boldStyle = i1915[8]
  i1914.boldSpacing = i1915[9]
  i1914.italicStyle = i1915[10]
  i1914.tabSize = i1915[11]
  i1914.m_Version = i1915[12]
  i1914.m_SourceFontFileGUID = i1915[13]
  request.r(i1915[14], i1915[15], 0, i1914, 'm_SourceFontFile_EditorRef')
  request.r(i1915[16], i1915[17], 0, i1914, 'm_SourceFontFile')
  i1914.m_AtlasPopulationMode = i1915[18]
  i1914.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1915[19], i1914.m_FaceInfo)
  var i1917 = i1915[20]
  var i1916 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.add(request.d('UnityEngine.TextCore.Glyph', i1917[i + 0]));
  }
  i1914.m_GlyphTable = i1916
  var i1919 = i1915[21]
  var i1918 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.add(request.d('TMPro.TMP_Character', i1919[i + 0]));
  }
  i1914.m_CharacterTable = i1918
  var i1921 = i1915[22]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 2) {
  request.r(i1921[i + 0], i1921[i + 1], 2, i1920, '')
  }
  i1914.m_AtlasTextures = i1920
  i1914.m_AtlasTextureIndex = i1915[23]
  i1914.m_IsMultiAtlasTexturesEnabled = !!i1915[24]
  i1914.m_ClearDynamicDataOnBuild = !!i1915[25]
  var i1923 = i1915[26]
  var i1922 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.add(request.d('UnityEngine.TextCore.GlyphRect', i1923[i + 0]));
  }
  i1914.m_UsedGlyphRects = i1922
  var i1925 = i1915[27]
  var i1924 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.add(request.d('UnityEngine.TextCore.GlyphRect', i1925[i + 0]));
  }
  i1914.m_FreeGlyphRects = i1924
  i1914.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1915[28], i1914.m_fontInfo)
  i1914.m_AtlasWidth = i1915[29]
  i1914.m_AtlasHeight = i1915[30]
  i1914.m_AtlasPadding = i1915[31]
  i1914.m_AtlasRenderMode = i1915[32]
  var i1927 = i1915[33]
  var i1926 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.add(request.d('TMPro.TMP_Glyph', i1927[i + 0]));
  }
  i1914.m_glyphInfoList = i1926
  i1914.m_KerningTable = request.d('TMPro.KerningTable', i1915[34], i1914.m_KerningTable)
  i1914.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1915[35], i1914.m_FontFeatureTable)
  var i1929 = i1915[36]
  var i1928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1929.length; i += 2) {
  request.r(i1929[i + 0], i1929[i + 1], 1, i1928, '')
  }
  i1914.fallbackFontAssets = i1928
  var i1931 = i1915[37]
  var i1930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1931.length; i += 2) {
  request.r(i1931[i + 0], i1931[i + 1], 1, i1930, '')
  }
  i1914.m_FallbackFontAssetTable = i1930
  i1914.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1915[38], i1914.m_CreationSettings)
  var i1933 = i1915[39]
  var i1932 = []
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.push( request.d('TMPro.TMP_FontWeightPair', i1933[i + 0]) );
  }
  i1914.m_FontWeightTable = i1932
  var i1935 = i1915[40]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.push( request.d('TMPro.TMP_FontWeightPair', i1935[i + 0]) );
  }
  i1914.fontWeights = i1934
  return i1914
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1936 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1937 = data
  i1936.m_FaceIndex = i1937[0]
  i1936.m_FamilyName = i1937[1]
  i1936.m_StyleName = i1937[2]
  i1936.m_PointSize = i1937[3]
  i1936.m_Scale = i1937[4]
  i1936.m_UnitsPerEM = i1937[5]
  i1936.m_LineHeight = i1937[6]
  i1936.m_AscentLine = i1937[7]
  i1936.m_CapLine = i1937[8]
  i1936.m_MeanLine = i1937[9]
  i1936.m_Baseline = i1937[10]
  i1936.m_DescentLine = i1937[11]
  i1936.m_SuperscriptOffset = i1937[12]
  i1936.m_SuperscriptSize = i1937[13]
  i1936.m_SubscriptOffset = i1937[14]
  i1936.m_SubscriptSize = i1937[15]
  i1936.m_UnderlineOffset = i1937[16]
  i1936.m_UnderlineThickness = i1937[17]
  i1936.m_StrikethroughOffset = i1937[18]
  i1936.m_StrikethroughThickness = i1937[19]
  i1936.m_TabWidth = i1937[20]
  return i1936
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1940 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1941 = data
  i1940.m_Index = i1941[0]
  i1940.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1941[1], i1940.m_Metrics)
  i1940.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1941[2], i1940.m_GlyphRect)
  i1940.m_Scale = i1941[3]
  i1940.m_AtlasIndex = i1941[4]
  i1940.m_ClassDefinitionType = i1941[5]
  return i1940
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1943 = data
  i1942.m_Width = i1943[0]
  i1942.m_Height = i1943[1]
  i1942.m_HorizontalBearingX = i1943[2]
  i1942.m_HorizontalBearingY = i1943[3]
  i1942.m_HorizontalAdvance = i1943[4]
  return i1942
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1944 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1945 = data
  i1944.m_X = i1945[0]
  i1944.m_Y = i1945[1]
  i1944.m_Width = i1945[2]
  i1944.m_Height = i1945[3]
  return i1944
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1948 = root || request.c( 'TMPro.TMP_Character' )
  var i1949 = data
  i1948.m_ElementType = i1949[0]
  i1948.m_Unicode = i1949[1]
  i1948.m_GlyphIndex = i1949[2]
  i1948.m_Scale = i1949[3]
  return i1948
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1954 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1955 = data
  i1954.Name = i1955[0]
  i1954.PointSize = i1955[1]
  i1954.Scale = i1955[2]
  i1954.CharacterCount = i1955[3]
  i1954.LineHeight = i1955[4]
  i1954.Baseline = i1955[5]
  i1954.Ascender = i1955[6]
  i1954.CapHeight = i1955[7]
  i1954.Descender = i1955[8]
  i1954.CenterLine = i1955[9]
  i1954.SuperscriptOffset = i1955[10]
  i1954.SubscriptOffset = i1955[11]
  i1954.SubSize = i1955[12]
  i1954.Underline = i1955[13]
  i1954.UnderlineThickness = i1955[14]
  i1954.strikethrough = i1955[15]
  i1954.strikethroughThickness = i1955[16]
  i1954.TabWidth = i1955[17]
  i1954.Padding = i1955[18]
  i1954.AtlasWidth = i1955[19]
  i1954.AtlasHeight = i1955[20]
  return i1954
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1958 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1959 = data
  i1958.id = i1959[0]
  i1958.x = i1959[1]
  i1958.y = i1959[2]
  i1958.width = i1959[3]
  i1958.height = i1959[4]
  i1958.xOffset = i1959[5]
  i1958.yOffset = i1959[6]
  i1958.xAdvance = i1959[7]
  i1958.scale = i1959[8]
  return i1958
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1960 = root || request.c( 'TMPro.KerningTable' )
  var i1961 = data
  var i1963 = i1961[0]
  var i1962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.add(request.d('TMPro.KerningPair', i1963[i + 0]));
  }
  i1960.kerningPairs = i1962
  return i1960
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1966 = root || request.c( 'TMPro.KerningPair' )
  var i1967 = data
  i1966.xOffset = i1967[0]
  i1966.m_FirstGlyph = i1967[1]
  i1966.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1967[2], i1966.m_FirstGlyphAdjustments)
  i1966.m_SecondGlyph = i1967[3]
  i1966.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1967[4], i1966.m_SecondGlyphAdjustments)
  i1966.m_IgnoreSpacingAdjustments = !!i1967[5]
  return i1966
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1968 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1969 = data
  var i1971 = i1969[0]
  var i1970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1971[i + 0]));
  }
  i1968.m_GlyphPairAdjustmentRecords = i1970
  return i1968
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1974 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1975 = data
  i1974.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1975[0], i1974.m_FirstAdjustmentRecord)
  i1974.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1975[1], i1974.m_SecondAdjustmentRecord)
  i1974.m_FeatureLookupFlags = i1975[2]
  return i1974
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1976 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1977 = data
  i1976.m_GlyphIndex = i1977[0]
  i1976.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1977[1], i1976.m_GlyphValueRecord)
  return i1976
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1978 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1979 = data
  i1978.m_XPlacement = i1979[0]
  i1978.m_YPlacement = i1979[1]
  i1978.m_XAdvance = i1979[2]
  i1978.m_YAdvance = i1979[3]
  return i1978
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1982 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1983 = data
  i1982.sourceFontFileName = i1983[0]
  i1982.sourceFontFileGUID = i1983[1]
  i1982.pointSizeSamplingMode = i1983[2]
  i1982.pointSize = i1983[3]
  i1982.padding = i1983[4]
  i1982.packingMode = i1983[5]
  i1982.atlasWidth = i1983[6]
  i1982.atlasHeight = i1983[7]
  i1982.characterSetSelectionMode = i1983[8]
  i1982.characterSequence = i1983[9]
  i1982.referencedFontAssetGUID = i1983[10]
  i1982.referencedTextAssetGUID = i1983[11]
  i1982.fontStyle = i1983[12]
  i1982.fontStyleModifier = i1983[13]
  i1982.renderMode = i1983[14]
  i1982.includeFontFeatures = !!i1983[15]
  return i1982
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1986 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1987 = data
  request.r(i1987[0], i1987[1], 0, i1986, 'regularTypeface')
  request.r(i1987[2], i1987[3], 0, i1986, 'italicTypeface')
  return i1986
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1988 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1989 = data
  i1988.useSafeMode = !!i1989[0]
  i1988.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1989[1], i1988.safeModeOptions)
  i1988.timeScale = i1989[2]
  i1988.unscaledTimeScale = i1989[3]
  i1988.useSmoothDeltaTime = !!i1989[4]
  i1988.maxSmoothUnscaledTime = i1989[5]
  i1988.rewindCallbackMode = i1989[6]
  i1988.showUnityEditorReport = !!i1989[7]
  i1988.logBehaviour = i1989[8]
  i1988.drawGizmos = !!i1989[9]
  i1988.defaultRecyclable = !!i1989[10]
  i1988.defaultAutoPlay = i1989[11]
  i1988.defaultUpdateType = i1989[12]
  i1988.defaultTimeScaleIndependent = !!i1989[13]
  i1988.defaultEaseType = i1989[14]
  i1988.defaultEaseOvershootOrAmplitude = i1989[15]
  i1988.defaultEasePeriod = i1989[16]
  i1988.defaultAutoKill = !!i1989[17]
  i1988.defaultLoopType = i1989[18]
  i1988.debugMode = !!i1989[19]
  i1988.debugStoreTargetId = !!i1989[20]
  i1988.showPreviewPanel = !!i1989[21]
  i1988.storeSettingsLocation = i1989[22]
  i1988.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1989[23], i1988.modules)
  i1988.createASMDEF = !!i1989[24]
  i1988.showPlayingTweens = !!i1989[25]
  i1988.showPausedTweens = !!i1989[26]
  return i1988
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1990 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1991 = data
  i1990.logBehaviour = i1991[0]
  i1990.nestedTweenFailureBehaviour = i1991[1]
  return i1990
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1992 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1993 = data
  i1992.showPanel = !!i1993[0]
  i1992.audioEnabled = !!i1993[1]
  i1992.physicsEnabled = !!i1993[2]
  i1992.physics2DEnabled = !!i1993[3]
  i1992.spriteEnabled = !!i1993[4]
  i1992.uiEnabled = !!i1993[5]
  i1992.textMeshProEnabled = !!i1993[6]
  i1992.tk2DEnabled = !!i1993[7]
  i1992.deAudioEnabled = !!i1993[8]
  i1992.deUnityExtendedEnabled = !!i1993[9]
  i1992.epoOutlineEnabled = !!i1993[10]
  return i1992
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1994 = root || request.c( 'TMPro.TMP_Settings' )
  var i1995 = data
  i1994.m_enableWordWrapping = !!i1995[0]
  i1994.m_enableKerning = !!i1995[1]
  i1994.m_enableExtraPadding = !!i1995[2]
  i1994.m_enableTintAllSprites = !!i1995[3]
  i1994.m_enableParseEscapeCharacters = !!i1995[4]
  i1994.m_EnableRaycastTarget = !!i1995[5]
  i1994.m_GetFontFeaturesAtRuntime = !!i1995[6]
  i1994.m_missingGlyphCharacter = i1995[7]
  i1994.m_warningsDisabled = !!i1995[8]
  request.r(i1995[9], i1995[10], 0, i1994, 'm_defaultFontAsset')
  i1994.m_defaultFontAssetPath = i1995[11]
  i1994.m_defaultFontSize = i1995[12]
  i1994.m_defaultAutoSizeMinRatio = i1995[13]
  i1994.m_defaultAutoSizeMaxRatio = i1995[14]
  i1994.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1995[15], i1995[16] )
  i1994.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1995[17], i1995[18] )
  i1994.m_autoSizeTextContainer = !!i1995[19]
  i1994.m_IsTextObjectScaleStatic = !!i1995[20]
  var i1997 = i1995[21]
  var i1996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1997.length; i += 2) {
  request.r(i1997[i + 0], i1997[i + 1], 1, i1996, '')
  }
  i1994.m_fallbackFontAssets = i1996
  i1994.m_matchMaterialPreset = !!i1995[22]
  request.r(i1995[23], i1995[24], 0, i1994, 'm_defaultSpriteAsset')
  i1994.m_defaultSpriteAssetPath = i1995[25]
  i1994.m_enableEmojiSupport = !!i1995[26]
  i1994.m_MissingCharacterSpriteUnicode = i1995[27]
  i1994.m_defaultColorGradientPresetsPath = i1995[28]
  request.r(i1995[29], i1995[30], 0, i1994, 'm_defaultStyleSheet')
  i1994.m_StyleSheetsResourcePath = i1995[31]
  request.r(i1995[32], i1995[33], 0, i1994, 'm_leadingCharacters')
  request.r(i1995[34], i1995[35], 0, i1994, 'm_followingCharacters')
  i1994.m_UseModernHangulLineBreakingRules = !!i1995[36]
  return i1994
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1998 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1999 = data
  i1998.hashCode = i1999[0]
  request.r(i1999[1], i1999[2], 0, i1998, 'material')
  i1998.materialHashCode = i1999[3]
  request.r(i1999[4], i1999[5], 0, i1998, 'spriteSheet')
  var i2001 = i1999[6]
  var i2000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.add(request.d('TMPro.TMP_Sprite', i2001[i + 0]));
  }
  i1998.spriteInfoList = i2000
  var i2003 = i1999[7]
  var i2002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2003.length; i += 2) {
  request.r(i2003[i + 0], i2003[i + 1], 1, i2002, '')
  }
  i1998.fallbackSpriteAssets = i2002
  i1998.m_Version = i1999[8]
  i1998.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1999[9], i1998.m_FaceInfo)
  var i2005 = i1999[10]
  var i2004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.add(request.d('TMPro.TMP_SpriteCharacter', i2005[i + 0]));
  }
  i1998.m_SpriteCharacterTable = i2004
  var i2007 = i1999[11]
  var i2006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.add(request.d('TMPro.TMP_SpriteGlyph', i2007[i + 0]));
  }
  i1998.m_SpriteGlyphTable = i2006
  return i1998
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2010 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2011 = data
  i2010.name = i2011[0]
  i2010.hashCode = i2011[1]
  i2010.unicode = i2011[2]
  i2010.pivot = new pc.Vec2( i2011[3], i2011[4] )
  request.r(i2011[5], i2011[6], 0, i2010, 'sprite')
  i2010.id = i2011[7]
  i2010.x = i2011[8]
  i2010.y = i2011[9]
  i2010.width = i2011[10]
  i2010.height = i2011[11]
  i2010.xOffset = i2011[12]
  i2010.yOffset = i2011[13]
  i2010.xAdvance = i2011[14]
  i2010.scale = i2011[15]
  return i2010
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2016 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2017 = data
  i2016.m_Name = i2017[0]
  i2016.m_HashCode = i2017[1]
  i2016.m_ElementType = i2017[2]
  i2016.m_Unicode = i2017[3]
  i2016.m_GlyphIndex = i2017[4]
  i2016.m_Scale = i2017[5]
  return i2016
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2020 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2021 = data
  request.r(i2021[0], i2021[1], 0, i2020, 'sprite')
  i2020.m_Index = i2021[2]
  i2020.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2021[3], i2020.m_Metrics)
  i2020.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2021[4], i2020.m_GlyphRect)
  i2020.m_Scale = i2021[5]
  i2020.m_AtlasIndex = i2021[6]
  i2020.m_ClassDefinitionType = i2021[7]
  return i2020
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2022 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2023 = data
  var i2025 = i2023[0]
  var i2024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.add(request.d('TMPro.TMP_Style', i2025[i + 0]));
  }
  i2022.m_StyleList = i2024
  return i2022
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2028 = root || request.c( 'TMPro.TMP_Style' )
  var i2029 = data
  i2028.m_Name = i2029[0]
  i2028.m_HashCode = i2029[1]
  i2028.m_OpeningDefinition = i2029[2]
  i2028.m_ClosingDefinition = i2029[3]
  i2028.m_OpeningTagArray = i2029[4]
  i2028.m_ClosingTagArray = i2029[5]
  i2028.m_OpeningTagUnicodeArray = i2029[6]
  i2028.m_ClosingTagUnicodeArray = i2029[7]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2031 = data
  var i2033 = i2031[0]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2033[i + 0]) );
  }
  i2030.files = i2032
  i2030.componentToPrefabIds = i2031[1]
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2037 = data
  i2036.path = i2037[0]
  request.r(i2037[1], i2037[2], 0, i2036, 'unityObject')
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2039 = data
  var i2041 = i2039[0]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2041[i + 0]) );
  }
  i2038.scriptsExecutionOrder = i2040
  var i2043 = i2039[1]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2043[i + 0]) );
  }
  i2038.sortingLayers = i2042
  var i2045 = i2039[2]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2045[i + 0]) );
  }
  i2038.cullingLayers = i2044
  i2038.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2039[3], i2038.timeSettings)
  i2038.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2039[4], i2038.physicsSettings)
  i2038.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2039[5], i2038.physics2DSettings)
  i2038.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2039[6], i2038.qualitySettings)
  i2038.enableRealtimeShadows = !!i2039[7]
  i2038.enableAutoInstancing = !!i2039[8]
  i2038.enableDynamicBatching = !!i2039[9]
  i2038.lightmapEncodingQuality = i2039[10]
  i2038.desiredColorSpace = i2039[11]
  var i2047 = i2039[12]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.push( i2047[i + 0] );
  }
  i2038.allTags = i2046
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2051 = data
  i2050.name = i2051[0]
  i2050.value = i2051[1]
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2055 = data
  i2054.id = i2055[0]
  i2054.name = i2055[1]
  i2054.value = i2055[2]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2059 = data
  i2058.id = i2059[0]
  i2058.name = i2059[1]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2061 = data
  i2060.fixedDeltaTime = i2061[0]
  i2060.maximumDeltaTime = i2061[1]
  i2060.timeScale = i2061[2]
  i2060.maximumParticleTimestep = i2061[3]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2063 = data
  i2062.gravity = new pc.Vec3( i2063[0], i2063[1], i2063[2] )
  i2062.defaultSolverIterations = i2063[3]
  i2062.bounceThreshold = i2063[4]
  i2062.autoSyncTransforms = !!i2063[5]
  i2062.autoSimulation = !!i2063[6]
  var i2065 = i2063[7]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2065[i + 0]) );
  }
  i2062.collisionMatrix = i2064
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2069 = data
  i2068.enabled = !!i2069[0]
  i2068.layerId = i2069[1]
  i2068.otherLayerId = i2069[2]
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2071 = data
  request.r(i2071[0], i2071[1], 0, i2070, 'material')
  i2070.gravity = new pc.Vec2( i2071[2], i2071[3] )
  i2070.positionIterations = i2071[4]
  i2070.velocityIterations = i2071[5]
  i2070.velocityThreshold = i2071[6]
  i2070.maxLinearCorrection = i2071[7]
  i2070.maxAngularCorrection = i2071[8]
  i2070.maxTranslationSpeed = i2071[9]
  i2070.maxRotationSpeed = i2071[10]
  i2070.baumgarteScale = i2071[11]
  i2070.baumgarteTOIScale = i2071[12]
  i2070.timeToSleep = i2071[13]
  i2070.linearSleepTolerance = i2071[14]
  i2070.angularSleepTolerance = i2071[15]
  i2070.defaultContactOffset = i2071[16]
  i2070.autoSimulation = !!i2071[17]
  i2070.queriesHitTriggers = !!i2071[18]
  i2070.queriesStartInColliders = !!i2071[19]
  i2070.callbacksOnDisable = !!i2071[20]
  i2070.reuseCollisionCallbacks = !!i2071[21]
  i2070.autoSyncTransforms = !!i2071[22]
  var i2073 = i2071[23]
  var i2072 = []
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2073[i + 0]) );
  }
  i2070.collisionMatrix = i2072
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2077 = data
  i2076.enabled = !!i2077[0]
  i2076.layerId = i2077[1]
  i2076.otherLayerId = i2077[2]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2079 = data
  var i2081 = i2079[0]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2081[i + 0]) );
  }
  i2078.qualityLevels = i2080
  var i2083 = i2079[1]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( i2083[i + 0] );
  }
  i2078.names = i2082
  i2078.shadows = i2079[2]
  i2078.anisotropicFiltering = i2079[3]
  i2078.antiAliasing = i2079[4]
  i2078.lodBias = i2079[5]
  i2078.shadowCascades = i2079[6]
  i2078.shadowDistance = i2079[7]
  i2078.shadowmaskMode = i2079[8]
  i2078.shadowProjection = i2079[9]
  i2078.shadowResolution = i2079[10]
  i2078.softParticles = !!i2079[11]
  i2078.softVegetation = !!i2079[12]
  i2078.activeColorSpace = i2079[13]
  i2078.desiredColorSpace = i2079[14]
  i2078.masterTextureLimit = i2079[15]
  i2078.maxQueuedFrames = i2079[16]
  i2078.particleRaycastBudget = i2079[17]
  i2078.pixelLightCount = i2079[18]
  i2078.realtimeReflectionProbes = !!i2079[19]
  i2078.shadowCascade2Split = i2079[20]
  i2078.shadowCascade4Split = new pc.Vec3( i2079[21], i2079[22], i2079[23] )
  i2078.streamingMipmapsActive = !!i2079[24]
  i2078.vSyncCount = i2079[25]
  i2078.asyncUploadBufferSize = i2079[26]
  i2078.asyncUploadTimeSlice = i2079[27]
  i2078.billboardsFaceCameraPosition = !!i2079[28]
  i2078.shadowNearPlaneOffset = i2079[29]
  i2078.streamingMipmapsMemoryBudget = i2079[30]
  i2078.maximumLODLevel = i2079[31]
  i2078.streamingMipmapsAddAllCameras = !!i2079[32]
  i2078.streamingMipmapsMaxLevelReduction = i2079[33]
  i2078.streamingMipmapsRenderersPerFrame = i2079[34]
  i2078.resolutionScalingFixedDPIFactor = i2079[35]
  i2078.streamingMipmapsMaxFileIORequests = i2079[36]
  i2078.currentQualityLevel = i2079[37]
  return i2078
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2086 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2087 = data
  i2086.xPlacement = i2087[0]
  i2086.yPlacement = i2087[1]
  i2086.xAdvance = i2087[2]
  i2086.yAdvance = i2087[3]
  return i2086
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[17],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[17],"80":[81],"82":[83],"84":[83],"22":[2],"35":[11],"85":[2],"86":[87],"88":[89],"90":[87],"91":[2],"92":[2],"24":[22],"6":[3,2],"93":[2],"23":[22],"31":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[2],"101":[2],"102":[3,2],"103":[2],"104":[2],"105":[2],"106":[2],"107":[3,2],"108":[2],"109":[37],"110":[37],"38":[37],"111":[37],"112":[17],"113":[17],"114":[115],"116":[17],"117":[2],"118":[81,2],"13":[2,3],"119":[2],"120":[3,2],"121":[81],"122":[3,2],"123":[2],"124":[87]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.Object","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","Fix.ClickCta","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","Helper","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "22.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "DefaultVersion";

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

Deserializers.buildID = "2feb0dbb-de14-4e18-9e57-72c942aa22c8";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

