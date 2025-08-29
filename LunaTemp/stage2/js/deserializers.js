var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.JointSpring' )
  var i1555 = data
  i1554.spring = i1555[0]
  i1554.damper = i1555[1]
  i1554.targetPosition = i1555[2]
  return i1554
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1556 = root || request.c( 'UnityEngine.JointMotor' )
  var i1557 = data
  i1556.m_TargetVelocity = i1557[0]
  i1556.m_Force = i1557[1]
  i1556.m_FreeSpin = i1557[2]
  return i1556
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1558 = root || request.c( 'UnityEngine.JointLimits' )
  var i1559 = data
  i1558.m_Min = i1559[0]
  i1558.m_Max = i1559[1]
  i1558.m_Bounciness = i1559[2]
  i1558.m_BounceMinVelocity = i1559[3]
  i1558.m_ContactDistance = i1559[4]
  i1558.minBounce = i1559[5]
  i1558.maxBounce = i1559[6]
  return i1558
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1560 = root || request.c( 'UnityEngine.JointDrive' )
  var i1561 = data
  i1560.m_PositionSpring = i1561[0]
  i1560.m_PositionDamper = i1561[1]
  i1560.m_MaximumForce = i1561[2]
  i1560.m_UseAcceleration = i1561[3]
  return i1560
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1563 = data
  i1562.m_Spring = i1563[0]
  i1562.m_Damper = i1563[1]
  return i1562
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1564 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1565 = data
  i1564.m_Limit = i1565[0]
  i1564.m_Bounciness = i1565[1]
  i1564.m_ContactDistance = i1565[2]
  return i1564
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1567 = data
  i1566.m_ExtremumSlip = i1567[0]
  i1566.m_ExtremumValue = i1567[1]
  i1566.m_AsymptoteSlip = i1567[2]
  i1566.m_AsymptoteValue = i1567[3]
  i1566.m_Stiffness = i1567[4]
  return i1566
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1569 = data
  i1568.m_LowerAngle = i1569[0]
  i1568.m_UpperAngle = i1569[1]
  return i1568
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1570 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1571 = data
  i1570.m_MotorSpeed = i1571[0]
  i1570.m_MaximumMotorTorque = i1571[1]
  return i1570
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1573 = data
  i1572.m_DampingRatio = i1573[0]
  i1572.m_Frequency = i1573[1]
  i1572.m_Angle = i1573[2]
  return i1572
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1575 = data
  i1574.m_LowerTranslation = i1575[0]
  i1574.m_UpperTranslation = i1575[1]
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1577 = data
  i1576.name = i1577[0]
  i1576.width = i1577[1]
  i1576.height = i1577[2]
  i1576.mipmapCount = i1577[3]
  i1576.anisoLevel = i1577[4]
  i1576.filterMode = i1577[5]
  i1576.hdr = !!i1577[6]
  i1576.format = i1577[7]
  i1576.wrapMode = i1577[8]
  i1576.alphaIsTransparency = !!i1577[9]
  i1576.alphaSource = i1577[10]
  i1576.graphicsFormat = i1577[11]
  i1576.sRGBTexture = !!i1577[12]
  i1576.desiredColorSpace = i1577[13]
  i1576.wrapU = i1577[14]
  i1576.wrapV = i1577[15]
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1578 = root || new pc.UnityMaterial()
  var i1579 = data
  i1578.name = i1579[0]
  request.r(i1579[1], i1579[2], 0, i1578, 'shader')
  i1578.renderQueue = i1579[3]
  i1578.enableInstancing = !!i1579[4]
  var i1581 = i1579[5]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1581[i + 0]) );
  }
  i1578.floatParameters = i1580
  var i1583 = i1579[6]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1583[i + 0]) );
  }
  i1578.colorParameters = i1582
  var i1585 = i1579[7]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1585[i + 0]) );
  }
  i1578.vectorParameters = i1584
  var i1587 = i1579[8]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1587[i + 0]) );
  }
  i1578.textureParameters = i1586
  var i1589 = i1579[9]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1589[i + 0]) );
  }
  i1578.materialFlags = i1588
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1593 = data
  i1592.name = i1593[0]
  i1592.value = i1593[1]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1597 = data
  i1596.name = i1597[0]
  i1596.value = new pc.Color(i1597[1], i1597[2], i1597[3], i1597[4])
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1601 = data
  i1600.name = i1601[0]
  i1600.value = new pc.Vec4( i1601[1], i1601[2], i1601[3], i1601[4] )
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1605 = data
  i1604.name = i1605[0]
  request.r(i1605[1], i1605[2], 0, i1604, 'value')
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1609 = data
  i1608.name = i1609[0]
  i1608.enabled = !!i1609[1]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1611 = data
  i1610.pivot = new pc.Vec2( i1611[0], i1611[1] )
  i1610.anchorMin = new pc.Vec2( i1611[2], i1611[3] )
  i1610.anchorMax = new pc.Vec2( i1611[4], i1611[5] )
  i1610.sizeDelta = new pc.Vec2( i1611[6], i1611[7] )
  i1610.anchoredPosition3D = new pc.Vec3( i1611[8], i1611[9], i1611[10] )
  i1610.rotation = new pc.Quat(i1611[11], i1611[12], i1611[13], i1611[14])
  i1610.scale = new pc.Vec3( i1611[15], i1611[16], i1611[17] )
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1613 = data
  i1612.cullTransparentMesh = !!i1613[0]
  return i1612
}

Deserializers["People"] = function (request, data, root) {
  var i1614 = root || request.c( 'People' )
  var i1615 = data
  request.r(i1615[0], i1615[1], 0, i1614, '_readyImage')
  request.r(i1615[2], i1615[3], 0, i1614, '_additiveImage1')
  request.r(i1615[4], i1615[5], 0, i1614, '_additiveImage2')
  request.r(i1615[6], i1615[7], 0, i1614, '_endPoint')
  request.r(i1615[8], i1615[9], 0, i1614, 'Bank')
  request.r(i1615[10], i1615[11], 0, i1614, '_sizeText')
  i1614.CupType = i1615[12]
  i1614.JuiceType = i1615[13]
  i1614.AdditiveType1 = i1615[14]
  i1614.AdditiveType2 = i1615[15]
  request.r(i1615[16], i1615[17], 0, i1614, '_finishSound')
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1617 = data
  request.r(i1617[0], i1617[1], 0, i1616, 'clip')
  request.r(i1617[2], i1617[3], 0, i1616, 'outputAudioMixerGroup')
  i1616.playOnAwake = !!i1617[4]
  i1616.loop = !!i1617[5]
  i1616.time = i1617[6]
  i1616.volume = i1617[7]
  i1616.pitch = i1617[8]
  i1616.enabled = !!i1617[9]
  return i1616
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.UI.Image' )
  var i1619 = data
  request.r(i1619[0], i1619[1], 0, i1618, 'm_Sprite')
  i1618.m_Type = i1619[2]
  i1618.m_PreserveAspect = !!i1619[3]
  i1618.m_FillCenter = !!i1619[4]
  i1618.m_FillMethod = i1619[5]
  i1618.m_FillAmount = i1619[6]
  i1618.m_FillClockwise = !!i1619[7]
  i1618.m_FillOrigin = i1619[8]
  i1618.m_UseSpriteMesh = !!i1619[9]
  i1618.m_PixelsPerUnitMultiplier = i1619[10]
  request.r(i1619[11], i1619[12], 0, i1618, 'm_Material')
  i1618.m_Maskable = !!i1619[13]
  i1618.m_Color = new pc.Color(i1619[14], i1619[15], i1619[16], i1619[17])
  i1618.m_RaycastTarget = !!i1619[18]
  i1618.m_RaycastPadding = new pc.Vec4( i1619[19], i1619[20], i1619[21], i1619[22] )
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1621 = data
  i1620.name = i1621[0]
  i1620.tagId = i1621[1]
  i1620.enabled = !!i1621[2]
  i1620.isStatic = !!i1621[3]
  i1620.layer = i1621[4]
  return i1620
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1622 = root || request.c( 'UnityEngine.UI.Button' )
  var i1623 = data
  i1622.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1623[0], i1622.m_OnClick)
  i1622.m_Navigation = request.d('UnityEngine.UI.Navigation', i1623[1], i1622.m_Navigation)
  i1622.m_Transition = i1623[2]
  i1622.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1623[3], i1622.m_Colors)
  i1622.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1623[4], i1622.m_SpriteState)
  i1622.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1623[5], i1622.m_AnimationTriggers)
  i1622.m_Interactable = !!i1623[6]
  request.r(i1623[7], i1623[8], 0, i1622, 'm_TargetGraphic')
  return i1622
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1624 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1625 = data
  i1624.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1625[0], i1624.m_PersistentCalls)
  return i1624
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1627 = data
  var i1629 = i1627[0]
  var i1628 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.add(request.d('UnityEngine.Events.PersistentCall', i1629[i + 0]));
  }
  i1626.m_Calls = i1628
  return i1626
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1633 = data
  request.r(i1633[0], i1633[1], 0, i1632, 'm_Target')
  i1632.m_TargetAssemblyTypeName = i1633[2]
  i1632.m_MethodName = i1633[3]
  i1632.m_Mode = i1633[4]
  i1632.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1633[5], i1632.m_Arguments)
  i1632.m_CallState = i1633[6]
  return i1632
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1635 = data
  request.r(i1635[0], i1635[1], 0, i1634, 'm_ObjectArgument')
  i1634.m_ObjectArgumentAssemblyTypeName = i1635[2]
  i1634.m_IntArgument = i1635[3]
  i1634.m_FloatArgument = i1635[4]
  i1634.m_StringArgument = i1635[5]
  i1634.m_BoolArgument = !!i1635[6]
  return i1634
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1637 = data
  i1636.m_Mode = i1637[0]
  i1636.m_WrapAround = !!i1637[1]
  request.r(i1637[2], i1637[3], 0, i1636, 'm_SelectOnUp')
  request.r(i1637[4], i1637[5], 0, i1636, 'm_SelectOnDown')
  request.r(i1637[6], i1637[7], 0, i1636, 'm_SelectOnLeft')
  request.r(i1637[8], i1637[9], 0, i1636, 'm_SelectOnRight')
  return i1636
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1639 = data
  i1638.m_NormalColor = new pc.Color(i1639[0], i1639[1], i1639[2], i1639[3])
  i1638.m_HighlightedColor = new pc.Color(i1639[4], i1639[5], i1639[6], i1639[7])
  i1638.m_PressedColor = new pc.Color(i1639[8], i1639[9], i1639[10], i1639[11])
  i1638.m_SelectedColor = new pc.Color(i1639[12], i1639[13], i1639[14], i1639[15])
  i1638.m_DisabledColor = new pc.Color(i1639[16], i1639[17], i1639[18], i1639[19])
  i1638.m_ColorMultiplier = i1639[20]
  i1638.m_FadeDuration = i1639[21]
  return i1638
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1640 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'm_HighlightedSprite')
  request.r(i1641[2], i1641[3], 0, i1640, 'm_PressedSprite')
  request.r(i1641[4], i1641[5], 0, i1640, 'm_SelectedSprite')
  request.r(i1641[6], i1641[7], 0, i1640, 'm_DisabledSprite')
  return i1640
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1642 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1643 = data
  i1642.m_NormalTrigger = i1643[0]
  i1642.m_HighlightedTrigger = i1643[1]
  i1642.m_PressedTrigger = i1643[2]
  i1642.m_SelectedTrigger = i1643[3]
  i1642.m_DisabledTrigger = i1643[4]
  return i1642
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1644 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1645 = data
  i1644.m_hasFontAssetChanged = !!i1645[0]
  request.r(i1645[1], i1645[2], 0, i1644, 'm_baseMaterial')
  i1644.m_maskOffset = new pc.Vec4( i1645[3], i1645[4], i1645[5], i1645[6] )
  i1644.m_text = i1645[7]
  i1644.m_isRightToLeft = !!i1645[8]
  request.r(i1645[9], i1645[10], 0, i1644, 'm_fontAsset')
  request.r(i1645[11], i1645[12], 0, i1644, 'm_sharedMaterial')
  var i1647 = i1645[13]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 2) {
  request.r(i1647[i + 0], i1647[i + 1], 2, i1646, '')
  }
  i1644.m_fontSharedMaterials = i1646
  request.r(i1645[14], i1645[15], 0, i1644, 'm_fontMaterial')
  var i1649 = i1645[16]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 2) {
  request.r(i1649[i + 0], i1649[i + 1], 2, i1648, '')
  }
  i1644.m_fontMaterials = i1648
  i1644.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1645[17], i1645[18], i1645[19], i1645[20])
  i1644.m_fontColor = new pc.Color(i1645[21], i1645[22], i1645[23], i1645[24])
  i1644.m_enableVertexGradient = !!i1645[25]
  i1644.m_colorMode = i1645[26]
  i1644.m_fontColorGradient = request.d('TMPro.VertexGradient', i1645[27], i1644.m_fontColorGradient)
  request.r(i1645[28], i1645[29], 0, i1644, 'm_fontColorGradientPreset')
  request.r(i1645[30], i1645[31], 0, i1644, 'm_spriteAsset')
  i1644.m_tintAllSprites = !!i1645[32]
  request.r(i1645[33], i1645[34], 0, i1644, 'm_StyleSheet')
  i1644.m_TextStyleHashCode = i1645[35]
  i1644.m_overrideHtmlColors = !!i1645[36]
  i1644.m_faceColor = UnityEngine.Color32.ConstructColor(i1645[37], i1645[38], i1645[39], i1645[40])
  i1644.m_fontSize = i1645[41]
  i1644.m_fontSizeBase = i1645[42]
  i1644.m_fontWeight = i1645[43]
  i1644.m_enableAutoSizing = !!i1645[44]
  i1644.m_fontSizeMin = i1645[45]
  i1644.m_fontSizeMax = i1645[46]
  i1644.m_fontStyle = i1645[47]
  i1644.m_HorizontalAlignment = i1645[48]
  i1644.m_VerticalAlignment = i1645[49]
  i1644.m_textAlignment = i1645[50]
  i1644.m_characterSpacing = i1645[51]
  i1644.m_wordSpacing = i1645[52]
  i1644.m_lineSpacing = i1645[53]
  i1644.m_lineSpacingMax = i1645[54]
  i1644.m_paragraphSpacing = i1645[55]
  i1644.m_charWidthMaxAdj = i1645[56]
  i1644.m_enableWordWrapping = !!i1645[57]
  i1644.m_wordWrappingRatios = i1645[58]
  i1644.m_overflowMode = i1645[59]
  request.r(i1645[60], i1645[61], 0, i1644, 'm_linkedTextComponent')
  request.r(i1645[62], i1645[63], 0, i1644, 'parentLinkedComponent')
  i1644.m_enableKerning = !!i1645[64]
  i1644.m_enableExtraPadding = !!i1645[65]
  i1644.checkPaddingRequired = !!i1645[66]
  i1644.m_isRichText = !!i1645[67]
  i1644.m_parseCtrlCharacters = !!i1645[68]
  i1644.m_isOrthographic = !!i1645[69]
  i1644.m_isCullingEnabled = !!i1645[70]
  i1644.m_horizontalMapping = i1645[71]
  i1644.m_verticalMapping = i1645[72]
  i1644.m_uvLineOffset = i1645[73]
  i1644.m_geometrySortingOrder = i1645[74]
  i1644.m_IsTextObjectScaleStatic = !!i1645[75]
  i1644.m_VertexBufferAutoSizeReduction = !!i1645[76]
  i1644.m_useMaxVisibleDescender = !!i1645[77]
  i1644.m_pageToDisplay = i1645[78]
  i1644.m_margin = new pc.Vec4( i1645[79], i1645[80], i1645[81], i1645[82] )
  i1644.m_isUsingLegacyAnimationComponent = !!i1645[83]
  i1644.m_isVolumetricText = !!i1645[84]
  request.r(i1645[85], i1645[86], 0, i1644, 'm_Material')
  i1644.m_Maskable = !!i1645[87]
  i1644.m_Color = new pc.Color(i1645[88], i1645[89], i1645[90], i1645[91])
  i1644.m_RaycastTarget = !!i1645[92]
  i1644.m_RaycastPadding = new pc.Vec4( i1645[93], i1645[94], i1645[95], i1645[96] )
  return i1644
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1652 = root || request.c( 'TMPro.VertexGradient' )
  var i1653 = data
  i1652.topLeft = new pc.Color(i1653[0], i1653[1], i1653[2], i1653[3])
  i1652.topRight = new pc.Color(i1653[4], i1653[5], i1653[6], i1653[7])
  i1652.bottomLeft = new pc.Color(i1653[8], i1653[9], i1653[10], i1653[11])
  i1652.bottomRight = new pc.Color(i1653[12], i1653[13], i1653[14], i1653[15])
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1655 = data
  i1654.name = i1655[0]
  i1654.index = i1655[1]
  i1654.startup = !!i1655[2]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1657 = data
  i1656.position = new pc.Vec3( i1657[0], i1657[1], i1657[2] )
  i1656.scale = new pc.Vec3( i1657[3], i1657[4], i1657[5] )
  i1656.rotation = new pc.Quat(i1657[6], i1657[7], i1657[8], i1657[9])
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1659 = data
  i1658.enabled = !!i1659[0]
  i1658.aspect = i1659[1]
  i1658.orthographic = !!i1659[2]
  i1658.orthographicSize = i1659[3]
  i1658.backgroundColor = new pc.Color(i1659[4], i1659[5], i1659[6], i1659[7])
  i1658.nearClipPlane = i1659[8]
  i1658.farClipPlane = i1659[9]
  i1658.fieldOfView = i1659[10]
  i1658.depth = i1659[11]
  i1658.clearFlags = i1659[12]
  i1658.cullingMask = i1659[13]
  i1658.rect = i1659[14]
  request.r(i1659[15], i1659[16], 0, i1658, 'targetTexture')
  i1658.usePhysicalProperties = !!i1659[17]
  i1658.focalLength = i1659[18]
  i1658.sensorSize = new pc.Vec2( i1659[19], i1659[20] )
  i1658.lensShift = new pc.Vec2( i1659[21], i1659[22] )
  i1658.gateFit = i1659[23]
  i1658.commandBufferCount = i1659[24]
  i1658.cameraType = i1659[25]
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1661 = data
  request.r(i1661[0], i1661[1], 0, i1660, 'animatorController')
  request.r(i1661[2], i1661[3], 0, i1660, 'avatar')
  i1660.updateMode = i1661[4]
  i1660.hasTransformHierarchy = !!i1661[5]
  i1660.applyRootMotion = !!i1661[6]
  var i1663 = i1661[7]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 2) {
  request.r(i1663[i + 0], i1663[i + 1], 2, i1662, '')
  }
  i1660.humanBones = i1662
  i1660.enabled = !!i1661[8]
  return i1660
}

Deserializers["Bank"] = function (request, data, root) {
  var i1666 = root || request.c( 'Bank' )
  var i1667 = data
  request.r(i1667[0], i1667[1], 0, i1666, 'BuyBigCupButton')
  request.r(i1667[2], i1667[3], 0, i1666, 'BigCupButton')
  request.r(i1667[4], i1667[5], 0, i1666, 'MiddleCupButton')
  request.r(i1667[6], i1667[7], 0, i1666, 'MoneyText')
  request.r(i1667[8], i1667[9], 0, i1666, 'Tutorial')
  request.r(i1667[10], i1667[11], 0, i1666, 'BuyAdditiveButton')
  request.r(i1667[12], i1667[13], 0, i1666, 'BuyJuiceButton')
  request.r(i1667[14], i1667[15], 0, i1666, 'JuiceButton1')
  request.r(i1667[16], i1667[17], 0, i1666, 'JuiceButton2')
  request.r(i1667[18], i1667[19], 0, i1666, 'JuiceButton3')
  request.r(i1667[20], i1667[21], 0, i1666, 'Additive1Button')
  request.r(i1667[22], i1667[23], 0, i1666, 'Additive2Button')
  i1666.Money = i1667[24]
  i1666.IsBigCupBuy = !!i1667[25]
  i1666.IsJuiceBuy = !!i1667[26]
  i1666.IsAdditiveBuy = !!i1667[27]
  request.r(i1667[28], i1667[29], 0, i1666, '_buySound')
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1669 = data
  i1668.enabled = !!i1669[0]
  i1668.planeDistance = i1669[1]
  i1668.referencePixelsPerUnit = i1669[2]
  i1668.isFallbackOverlay = !!i1669[3]
  i1668.renderMode = i1669[4]
  i1668.renderOrder = i1669[5]
  i1668.sortingLayerName = i1669[6]
  i1668.sortingOrder = i1669[7]
  i1668.scaleFactor = i1669[8]
  request.r(i1669[9], i1669[10], 0, i1668, 'worldCamera')
  i1668.overrideSorting = !!i1669[11]
  i1668.pixelPerfect = !!i1669[12]
  i1668.targetDisplay = i1669[13]
  i1668.overridePixelPerfect = !!i1669[14]
  return i1668
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1671 = data
  i1670.m_UiScaleMode = i1671[0]
  i1670.m_ReferencePixelsPerUnit = i1671[1]
  i1670.m_ScaleFactor = i1671[2]
  i1670.m_ReferenceResolution = new pc.Vec2( i1671[3], i1671[4] )
  i1670.m_ScreenMatchMode = i1671[5]
  i1670.m_MatchWidthOrHeight = i1671[6]
  i1670.m_PhysicalUnit = i1671[7]
  i1670.m_FallbackScreenDPI = i1671[8]
  i1670.m_DefaultSpriteDPI = i1671[9]
  i1670.m_DynamicPixelsPerUnit = i1671[10]
  i1670.m_PresetInfoIsWorld = !!i1671[11]
  return i1670
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1672 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1673 = data
  i1672.m_IgnoreReversedGraphics = !!i1673[0]
  i1672.m_BlockingObjects = i1673[1]
  i1672.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1673[2] )
  return i1672
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i1674 = root || request.c( 'ImageShiftOnOrientation' )
  var i1675 = data
  var i1677 = i1675[0]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('ItemSwitcherData', i1677[i + 0]) );
  }
  i1674.Items = i1676
  request.r(i1675[1], i1675[2], 0, i1674, '_backHorizontal')
  request.r(i1675[3], i1675[4], 0, i1674, '_backVertical')
  request.r(i1675[5], i1675[6], 0, i1674, '_tableHorizontal')
  request.r(i1675[7], i1675[8], 0, i1674, '_tableVertical')
  i1674.IsDebug = !!i1675[9]
  i1674.CanCopy = !!i1675[10]
  return i1674
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i1680 = root || request.c( 'ItemSwitcherData' )
  var i1681 = data
  request.r(i1681[0], i1681[1], 0, i1680, 'Target')
  i1680.HorizontalAnchoredPosition = new pc.Vec2( i1681[2], i1681[3] )
  i1680.SizeHorizontal = new pc.Vec2( i1681[4], i1681[5] )
  i1680.VerticalAnchoredPosition = new pc.Vec2( i1681[6], i1681[7] )
  i1680.SizeVertical = new pc.Vec2( i1681[8], i1681[9] )
  i1680.MinHorizontal = new pc.Vec2( i1681[10], i1681[11] )
  i1680.MaxHorizontal = new pc.Vec2( i1681[12], i1681[13] )
  i1680.MinVertical = new pc.Vec2( i1681[14], i1681[15] )
  i1680.MaxVertical = new pc.Vec2( i1681[16], i1681[17] )
  i1680.IsAnchored = !!i1681[18]
  i1680.IsDebug = !!i1681[19]
  i1680.CopyHorizontal = !!i1681[20]
  i1680.CopyVertical = !!i1681[21]
  return i1680
}

Deserializers["Point"] = function (request, data, root) {
  var i1682 = root || request.c( 'Point' )
  var i1683 = data
  return i1682
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i1684 = root || request.c( 'PeopleContainer' )
  var i1685 = data
  var i1687 = i1685[0]
  var i1686 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1687.length; i += 2) {
  request.r(i1687[i + 0], i1687[i + 1], 1, i1686, '')
  }
  i1684.CurrentPeoples = i1686
  var i1689 = i1685[1]
  var i1688 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1689.length; i += 2) {
  request.r(i1689[i + 0], i1689[i + 1], 1, i1688, '')
  }
  i1684._peoples = i1688
  request.r(i1685[2], i1685[3], 0, i1684, '_tutorialPeople')
  request.r(i1685[4], i1685[5], 0, i1684, '_spawnPoint')
  request.r(i1685[6], i1685[7], 0, i1684, '_point1')
  request.r(i1685[8], i1685[9], 0, i1684, '_point2')
  request.r(i1685[10], i1685[11], 0, i1684, '_endPoint')
  request.r(i1685[12], i1685[13], 0, i1684, '_juiceConfig')
  request.r(i1685[14], i1685[15], 0, i1684, '_tutorial')
  return i1684
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1693 = data
  i1692.m_HorizontalFit = i1693[0]
  i1692.m_VerticalFit = i1693[1]
  return i1692
}

Deserializers["BackImage"] = function (request, data, root) {
  var i1694 = root || request.c( 'BackImage' )
  var i1695 = data
  return i1694
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i1696 = root || request.c( 'AheadImage' )
  var i1697 = data
  return i1696
}

Deserializers["Order"] = function (request, data, root) {
  var i1698 = root || request.c( 'Order' )
  var i1699 = data
  request.r(i1699[0], i1699[1], 0, i1698, '_juiceAnimator')
  request.r(i1699[2], i1699[3], 0, i1698, '_cupAnimator')
  request.r(i1699[4], i1699[5], 0, i1698, '_canvasAnimator')
  i1698.CupType = i1699[6]
  i1698.JuiceType = i1699[7]
  i1698.AdditiveType1 = i1699[8]
  i1698.AdditiveType2 = i1699[9]
  i1698.IsFree = !!i1699[10]
  i1698.IsSpriteReady = !!i1699[11]
  i1698.IsCupReady = !!i1699[12]
  i1698.IsJuiceReady = !!i1699[13]
  i1698.IsPouring = !!i1699[14]
  request.r(i1699[15], i1699[16], 0, i1698, '_iceButton')
  request.r(i1699[17], i1699[18], 0, i1698, '_grassButton')
  request.r(i1699[19], i1699[20], 0, i1698, '_juiceBallsButton')
  request.r(i1699[21], i1699[22], 0, i1698, '_strawButton')
  request.r(i1699[23], i1699[24], 0, i1698, '_bigCupButton')
  request.r(i1699[25], i1699[26], 0, i1698, '_middleCupButton')
  request.r(i1699[27], i1699[28], 0, i1698, '_smallCupButton')
  request.r(i1699[29], i1699[30], 0, i1698, '_appleButton')
  request.r(i1699[31], i1699[32], 0, i1698, '_orangeButton')
  request.r(i1699[33], i1699[34], 0, i1698, '_multifruitButton')
  request.r(i1699[35], i1699[36], 0, i1698, '_tomatoButton')
  request.r(i1699[37], i1699[38], 0, i1698, '_cherryButton')
  request.r(i1699[39], i1699[40], 0, i1698, '_smallRawJuiceImage')
  request.r(i1699[41], i1699[42], 0, i1698, '_middleRawJuiceImage')
  request.r(i1699[43], i1699[44], 0, i1698, '_bigRawJuiceImage')
  request.r(i1699[45], i1699[46], 0, i1698, '_smallReadyJuiceImage')
  request.r(i1699[47], i1699[48], 0, i1698, '_middleReadyJuiceImage')
  request.r(i1699[49], i1699[50], 0, i1698, '_bigReadyJuiceImage')
  request.r(i1699[51], i1699[52], 0, i1698, '_backImage')
  request.r(i1699[53], i1699[54], 0, i1698, '_aheadImage')
  request.r(i1699[55], i1699[56], 0, i1698, '_config')
  request.r(i1699[57], i1699[58], 0, i1698, '_takeOrderButton')
  request.r(i1699[59], i1699[60], 0, i1698, '_peopleContainer')
  request.r(i1699[61], i1699[62], 0, i1698, '_tutorial')
  request.r(i1699[63], i1699[64], 0, i1698, '_bText')
  request.r(i1699[65], i1699[66], 0, i1698, '_mText')
  request.r(i1699[67], i1699[68], 0, i1698, '_sText')
  request.r(i1699[69], i1699[70], 0, i1698, '_garbageButton')
  request.r(i1699[71], i1699[72], 0, i1698, '_clickSound')
  request.r(i1699[73], i1699[74], 0, i1698, '_juiceSound')
  return i1698
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i1700 = root || request.c( 'Tutorial' )
  var i1701 = data
  i1700.IsTutorial = !!i1701[0]
  request.r(i1701[1], i1701[2], 0, i1700, 'Finger1')
  request.r(i1701[3], i1701[4], 0, i1700, 'Finger2')
  request.r(i1701[5], i1701[6], 0, i1700, 'Finger3')
  request.r(i1701[7], i1701[8], 0, i1700, 'Finger4')
  request.r(i1701[9], i1701[10], 0, i1700, 'Finger5')
  request.r(i1701[11], i1701[12], 0, i1700, 'BuyBigCupFinger')
  request.r(i1701[13], i1701[14], 0, i1700, 'BuyJuiceFinger')
  request.r(i1701[15], i1701[16], 0, i1700, 'SmallCupButton')
  request.r(i1701[17], i1701[18], 0, i1700, 'JuiceButton')
  request.r(i1701[19], i1701[20], 0, i1700, 'StrawButton')
  request.r(i1701[21], i1701[22], 0, i1700, 'AdditiveButton')
  request.r(i1701[23], i1701[24], 0, i1700, 'ReadyButton')
  var i1703 = i1701[25]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 2) {
  request.r(i1703[i + 0], i1703[i + 1], 2, i1702, '')
  }
  i1700.Buttons = i1702
  request.r(i1701[26], i1701[27], 0, i1700, 'Bank')
  return i1700
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i1706 = root || request.c( 'SoundSwitcher' )
  var i1707 = data
  request.r(i1707[0], i1707[1], 0, i1706, '_onImage')
  request.r(i1707[2], i1707[3], 0, i1706, '_offImage')
  return i1706
}

Deserializers["Fix.ClickCta"] = function (request, data, root) {
  var i1708 = root || request.c( 'Fix.ClickCta' )
  var i1709 = data
  return i1708
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1710 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1711 = data
  request.r(i1711[0], i1711[1], 0, i1710, 'm_FirstSelected')
  i1710.m_sendNavigationEvents = !!i1711[2]
  i1710.m_DragThreshold = i1711[3]
  return i1710
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1713 = data
  i1712.m_HorizontalAxis = i1713[0]
  i1712.m_VerticalAxis = i1713[1]
  i1712.m_SubmitButton = i1713[2]
  i1712.m_CancelButton = i1713[3]
  i1712.m_InputActionsPerSecond = i1713[4]
  i1712.m_RepeatDelay = i1713[5]
  i1712.m_ForceModuleActive = !!i1713[6]
  i1712.m_SendPointerHoverToParent = !!i1713[7]
  return i1712
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i1714 = root || request.c( 'JuiceConfig' )
  var i1715 = data
  request.r(i1715[0], i1715[1], 0, i1714, 'EntityBigCup')
  request.r(i1715[2], i1715[3], 0, i1714, 'TomatoBigCup')
  request.r(i1715[4], i1715[5], 0, i1714, 'AppleBigCup')
  request.r(i1715[6], i1715[7], 0, i1714, 'OrangeBigCup')
  request.r(i1715[8], i1715[9], 0, i1714, 'CherryBigCup')
  request.r(i1715[10], i1715[11], 0, i1714, 'MultifruitBigCup')
  request.r(i1715[12], i1715[13], 0, i1714, 'TomatoBigStrawCup')
  request.r(i1715[14], i1715[15], 0, i1714, 'MultifruitBigStrawCup')
  request.r(i1715[16], i1715[17], 0, i1714, 'AppleBigStrawCup')
  request.r(i1715[18], i1715[19], 0, i1714, 'OrangeBigStrawCup')
  request.r(i1715[20], i1715[21], 0, i1714, 'CherryBigStrawCup')
  request.r(i1715[22], i1715[23], 0, i1714, 'MultifruitBigBallsCup')
  request.r(i1715[24], i1715[25], 0, i1714, 'TomatoBigBallsCup')
  request.r(i1715[26], i1715[27], 0, i1714, 'AppleBigBallsCup')
  request.r(i1715[28], i1715[29], 0, i1714, 'OrangeBigBallsCup')
  request.r(i1715[30], i1715[31], 0, i1714, 'CherryBigBallsCup')
  request.r(i1715[32], i1715[33], 0, i1714, 'EntityMiddleCup')
  request.r(i1715[34], i1715[35], 0, i1714, 'TomatoMiddleCup')
  request.r(i1715[36], i1715[37], 0, i1714, 'AppleMiddleCup')
  request.r(i1715[38], i1715[39], 0, i1714, 'OrangeMiddleCup')
  request.r(i1715[40], i1715[41], 0, i1714, 'CherryMiddleCup')
  request.r(i1715[42], i1715[43], 0, i1714, 'MultifruitMiddleCup')
  request.r(i1715[44], i1715[45], 0, i1714, 'TomatoMiddleStrawCup')
  request.r(i1715[46], i1715[47], 0, i1714, 'MultifruitMiddleStrawCup')
  request.r(i1715[48], i1715[49], 0, i1714, 'AppleMiddleStrawCup')
  request.r(i1715[50], i1715[51], 0, i1714, 'OrangeMiddleStrawCup')
  request.r(i1715[52], i1715[53], 0, i1714, 'CherryMiddleStrawCup')
  request.r(i1715[54], i1715[55], 0, i1714, 'MultifruitMiddleBallsCup')
  request.r(i1715[56], i1715[57], 0, i1714, 'TomatoMiddleBallsCup')
  request.r(i1715[58], i1715[59], 0, i1714, 'AppleMiddleBallsCup')
  request.r(i1715[60], i1715[61], 0, i1714, 'OrangeMiddleBallsCup')
  request.r(i1715[62], i1715[63], 0, i1714, 'CherryMiddleBallsCup')
  request.r(i1715[64], i1715[65], 0, i1714, 'EntitySmallCup')
  request.r(i1715[66], i1715[67], 0, i1714, 'TomatoSmallCup')
  request.r(i1715[68], i1715[69], 0, i1714, 'AppleSmallCup')
  request.r(i1715[70], i1715[71], 0, i1714, 'OrangeSmallCup')
  request.r(i1715[72], i1715[73], 0, i1714, 'CherrySmallCup')
  request.r(i1715[74], i1715[75], 0, i1714, 'MultifruitSmallCup')
  request.r(i1715[76], i1715[77], 0, i1714, 'TomatoSmallStrawCup')
  request.r(i1715[78], i1715[79], 0, i1714, 'AppleSmallStrawCup')
  request.r(i1715[80], i1715[81], 0, i1714, 'OrangeSmallStrawCup')
  request.r(i1715[82], i1715[83], 0, i1714, 'CherrySmallStrawCup')
  request.r(i1715[84], i1715[85], 0, i1714, 'MultifruitSmallStrawCup')
  request.r(i1715[86], i1715[87], 0, i1714, 'AppleSmallBallsCup')
  request.r(i1715[88], i1715[89], 0, i1714, 'TomatoSmallBallsCup')
  request.r(i1715[90], i1715[91], 0, i1714, 'OrangeSmallBallsCup')
  request.r(i1715[92], i1715[93], 0, i1714, 'CherrySmallBallsCup')
  request.r(i1715[94], i1715[95], 0, i1714, 'MultifruitSmallBallsCup')
  request.r(i1715[96], i1715[97], 0, i1714, 'JuiceBallAdditive')
  request.r(i1715[98], i1715[99], 0, i1714, 'IceAdditive')
  request.r(i1715[100], i1715[101], 0, i1714, 'GrassAdditive')
  return i1714
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i1716 = root || request.c( 'TouchIdleTimer' )
  var i1717 = data
  return i1716
}

Deserializers["Helper"] = function (request, data, root) {
  var i1718 = root || request.c( 'Helper' )
  var i1719 = data
  request.r(i1719[0], i1719[1], 0, i1718, '_smallCupFinger')
  request.r(i1719[2], i1719[3], 0, i1718, '_middleCupFinger')
  request.r(i1719[4], i1719[5], 0, i1718, '_bigCupFinger')
  request.r(i1719[6], i1719[7], 0, i1718, '_iceFinger')
  request.r(i1719[8], i1719[9], 0, i1718, '_grassFinger')
  request.r(i1719[10], i1719[11], 0, i1718, '_juiceballFinger')
  request.r(i1719[12], i1719[13], 0, i1718, '_appleFinger')
  request.r(i1719[14], i1719[15], 0, i1718, '_cherryFinger')
  request.r(i1719[16], i1719[17], 0, i1718, '_orangeFinger')
  request.r(i1719[18], i1719[19], 0, i1718, '_multifruitFinger')
  request.r(i1719[20], i1719[21], 0, i1718, '_tomatoFinger')
  request.r(i1719[22], i1719[23], 0, i1718, '_strawFinger')
  request.r(i1719[24], i1719[25], 0, i1718, '_readyFinger')
  request.r(i1719[26], i1719[27], 0, i1718, '_peoples')
  request.r(i1719[28], i1719[29], 0, i1718, '_tutorial')
  request.r(i1719[30], i1719[31], 0, i1718, '_order')
  request.r(i1719[32], i1719[33], 0, i1718, '_strawButton')
  request.r(i1719[34], i1719[35], 0, i1718, '_bigCupButton')
  request.r(i1719[36], i1719[37], 0, i1718, '_middleCupButton')
  request.r(i1719[38], i1719[39], 0, i1718, '_smallCupButton')
  request.r(i1719[40], i1719[41], 0, i1718, '_readyButton')
  request.r(i1719[42], i1719[43], 0, i1718, '_touchIdleTimer')
  request.r(i1719[44], i1719[45], 0, i1718, '_finalScreen')
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1721 = data
  i1720.ambientIntensity = i1721[0]
  i1720.reflectionIntensity = i1721[1]
  i1720.ambientMode = i1721[2]
  i1720.ambientLight = new pc.Color(i1721[3], i1721[4], i1721[5], i1721[6])
  i1720.ambientSkyColor = new pc.Color(i1721[7], i1721[8], i1721[9], i1721[10])
  i1720.ambientGroundColor = new pc.Color(i1721[11], i1721[12], i1721[13], i1721[14])
  i1720.ambientEquatorColor = new pc.Color(i1721[15], i1721[16], i1721[17], i1721[18])
  i1720.fogColor = new pc.Color(i1721[19], i1721[20], i1721[21], i1721[22])
  i1720.fogEndDistance = i1721[23]
  i1720.fogStartDistance = i1721[24]
  i1720.fogDensity = i1721[25]
  i1720.fog = !!i1721[26]
  request.r(i1721[27], i1721[28], 0, i1720, 'skybox')
  i1720.fogMode = i1721[29]
  var i1723 = i1721[30]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1723[i + 0]) );
  }
  i1720.lightmaps = i1722
  i1720.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1721[31], i1720.lightProbes)
  i1720.lightmapsMode = i1721[32]
  i1720.mixedBakeMode = i1721[33]
  i1720.environmentLightingMode = i1721[34]
  i1720.ambientProbe = new pc.SphericalHarmonicsL2(i1721[35])
  i1720.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1721[36])
  i1720.useReferenceAmbientProbe = !!i1721[37]
  request.r(i1721[38], i1721[39], 0, i1720, 'customReflection')
  request.r(i1721[40], i1721[41], 0, i1720, 'defaultReflection')
  i1720.defaultReflectionMode = i1721[42]
  i1720.defaultReflectionResolution = i1721[43]
  i1720.sunLightObjectId = i1721[44]
  i1720.pixelLightCount = i1721[45]
  i1720.defaultReflectionHDR = !!i1721[46]
  i1720.hasLightDataAsset = !!i1721[47]
  i1720.hasManualGenerate = !!i1721[48]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1727 = data
  request.r(i1727[0], i1727[1], 0, i1726, 'lightmapColor')
  request.r(i1727[2], i1727[3], 0, i1726, 'lightmapDirection')
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1728 = root || new UnityEngine.LightProbes()
  var i1729 = data
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1737 = data
  var i1739 = i1737[0]
  var i1738 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1739[i + 0]));
  }
  i1736.ShaderCompilationErrors = i1738
  i1736.name = i1737[1]
  i1736.guid = i1737[2]
  var i1741 = i1737[3]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.push( i1741[i + 0] );
  }
  i1736.shaderDefinedKeywords = i1740
  var i1743 = i1737[4]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1743[i + 0]) );
  }
  i1736.passes = i1742
  var i1745 = i1737[5]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1745[i + 0]) );
  }
  i1736.usePasses = i1744
  var i1747 = i1737[6]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1747[i + 0]) );
  }
  i1736.defaultParameterValues = i1746
  request.r(i1737[7], i1737[8], 0, i1736, 'unityFallbackShader')
  i1736.readDepth = !!i1737[9]
  i1736.isCreatedByShaderGraph = !!i1737[10]
  i1736.compiled = !!i1737[11]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1751 = data
  i1750.shaderName = i1751[0]
  i1750.errorMessage = i1751[1]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1756 = root || new pc.UnityShaderPass()
  var i1757 = data
  i1756.id = i1757[0]
  i1756.subShaderIndex = i1757[1]
  i1756.name = i1757[2]
  i1756.passType = i1757[3]
  i1756.grabPassTextureName = i1757[4]
  i1756.usePass = !!i1757[5]
  i1756.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[6], i1756.zTest)
  i1756.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[7], i1756.zWrite)
  i1756.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[8], i1756.culling)
  i1756.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1757[9], i1756.blending)
  i1756.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1757[10], i1756.alphaBlending)
  i1756.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[11], i1756.colorWriteMask)
  i1756.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[12], i1756.offsetUnits)
  i1756.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[13], i1756.offsetFactor)
  i1756.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[14], i1756.stencilRef)
  i1756.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[15], i1756.stencilReadMask)
  i1756.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[16], i1756.stencilWriteMask)
  i1756.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1757[17], i1756.stencilOp)
  i1756.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1757[18], i1756.stencilOpFront)
  i1756.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1757[19], i1756.stencilOpBack)
  var i1759 = i1757[20]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1759[i + 0]) );
  }
  i1756.tags = i1758
  var i1761 = i1757[21]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( i1761[i + 0] );
  }
  i1756.passDefinedKeywords = i1760
  var i1763 = i1757[22]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1763[i + 0]) );
  }
  i1756.passDefinedKeywordGroups = i1762
  var i1765 = i1757[23]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1765[i + 0]) );
  }
  i1756.variants = i1764
  var i1767 = i1757[24]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1767[i + 0]) );
  }
  i1756.excludedVariants = i1766
  i1756.hasDepthReader = !!i1757[25]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1769 = data
  i1768.val = i1769[0]
  i1768.name = i1769[1]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1771 = data
  i1770.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1771[0], i1770.src)
  i1770.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1771[1], i1770.dst)
  i1770.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1771[2], i1770.op)
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1773 = data
  i1772.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[0], i1772.pass)
  i1772.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[1], i1772.fail)
  i1772.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[2], i1772.zFail)
  i1772.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1773[3], i1772.comp)
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1777 = data
  i1776.name = i1777[0]
  i1776.value = i1777[1]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1781 = data
  var i1783 = i1781[0]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( i1783[i + 0] );
  }
  i1780.keywords = i1782
  i1780.hasDiscard = !!i1781[1]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1787 = data
  i1786.passId = i1787[0]
  i1786.subShaderIndex = i1787[1]
  var i1789 = i1787[2]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( i1789[i + 0] );
  }
  i1786.keywords = i1788
  i1786.vertexProgram = i1787[3]
  i1786.fragmentProgram = i1787[4]
  i1786.exportedForWebGl2 = !!i1787[5]
  i1786.readDepth = !!i1787[6]
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1793 = data
  request.r(i1793[0], i1793[1], 0, i1792, 'shader')
  i1792.pass = i1793[2]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1797 = data
  i1796.name = i1797[0]
  i1796.type = i1797[1]
  i1796.value = new pc.Vec4( i1797[2], i1797[3], i1797[4], i1797[5] )
  i1796.textureValue = i1797[6]
  i1796.shaderPropertyFlag = i1797[7]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1799 = data
  i1798.name = i1799[0]
  request.r(i1799[1], i1799[2], 0, i1798, 'texture')
  i1798.aabb = i1799[3]
  i1798.vertices = i1799[4]
  i1798.triangles = i1799[5]
  i1798.textureRect = UnityEngine.Rect.MinMaxRect(i1799[6], i1799[7], i1799[8], i1799[9])
  i1798.packedRect = UnityEngine.Rect.MinMaxRect(i1799[10], i1799[11], i1799[12], i1799[13])
  i1798.border = new pc.Vec4( i1799[14], i1799[15], i1799[16], i1799[17] )
  i1798.transparency = i1799[18]
  i1798.bounds = i1799[19]
  i1798.pixelsPerUnit = i1799[20]
  i1798.textureWidth = i1799[21]
  i1798.textureHeight = i1799[22]
  i1798.nativeSize = new pc.Vec2( i1799[23], i1799[24] )
  i1798.pivot = new pc.Vec2( i1799[25], i1799[26] )
  i1798.textureRectOffset = new pc.Vec2( i1799[27], i1799[28] )
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1801 = data
  i1800.name = i1801[0]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1803 = data
  i1802.name = i1803[0]
  i1802.wrapMode = i1803[1]
  i1802.isLooping = !!i1803[2]
  i1802.length = i1803[3]
  var i1805 = i1803[4]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1805[i + 0]) );
  }
  i1802.curves = i1804
  var i1807 = i1803[5]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1807[i + 0]) );
  }
  i1802.events = i1806
  i1802.halfPrecision = !!i1803[6]
  i1802._frameRate = i1803[7]
  i1802.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1803[8], i1802.localBounds)
  i1802.hasMuscleCurves = !!i1803[9]
  var i1809 = i1803[10]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( i1809[i + 0] );
  }
  i1802.clipMuscleConstant = i1808
  i1802.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1803[11], i1802.clipBindingConstant)
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1813 = data
  i1812.path = i1813[0]
  i1812.hash = i1813[1]
  i1812.componentType = i1813[2]
  i1812.property = i1813[3]
  i1812.keys = i1813[4]
  var i1815 = i1813[5]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1815[i + 0]) );
  }
  i1812.objectReferenceKeys = i1814
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1819 = data
  i1818.time = i1819[0]
  request.r(i1819[1], i1819[2], 0, i1818, 'value')
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1823 = data
  i1822.functionName = i1823[0]
  i1822.floatParameter = i1823[1]
  i1822.intParameter = i1823[2]
  i1822.stringParameter = i1823[3]
  request.r(i1823[4], i1823[5], 0, i1822, 'objectReferenceParameter')
  i1822.time = i1823[6]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1825 = data
  i1824.center = new pc.Vec3( i1825[0], i1825[1], i1825[2] )
  i1824.extends = new pc.Vec3( i1825[3], i1825[4], i1825[5] )
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1829 = data
  var i1831 = i1829[0]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( i1831[i + 0] );
  }
  i1828.genericBindings = i1830
  var i1833 = i1829[1]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( i1833[i + 0] );
  }
  i1828.pptrCurveMapping = i1832
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1835 = data
  i1834.name = i1835[0]
  i1834.ascent = i1835[1]
  i1834.originalLineHeight = i1835[2]
  i1834.fontSize = i1835[3]
  var i1837 = i1835[4]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1837[i + 0]) );
  }
  i1834.characterInfo = i1836
  request.r(i1835[5], i1835[6], 0, i1834, 'texture')
  i1834.originalFontSize = i1835[7]
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1841 = data
  i1840.index = i1841[0]
  i1840.advance = i1841[1]
  i1840.bearing = i1841[2]
  i1840.glyphWidth = i1841[3]
  i1840.glyphHeight = i1841[4]
  i1840.minX = i1841[5]
  i1840.maxX = i1841[6]
  i1840.minY = i1841[7]
  i1840.maxY = i1841[8]
  i1840.uvBottomLeftX = i1841[9]
  i1840.uvBottomLeftY = i1841[10]
  i1840.uvBottomRightX = i1841[11]
  i1840.uvBottomRightY = i1841[12]
  i1840.uvTopLeftX = i1841[13]
  i1840.uvTopLeftY = i1841[14]
  i1840.uvTopRightX = i1841[15]
  i1840.uvTopRightY = i1841[16]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1843 = data
  i1842.name = i1843[0]
  var i1845 = i1843[1]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1845[i + 0]) );
  }
  i1842.layers = i1844
  var i1847 = i1843[2]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1847[i + 0]) );
  }
  i1842.parameters = i1846
  i1842.animationClips = i1843[3]
  i1842.avatarUnsupported = i1843[4]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1851 = data
  i1850.name = i1851[0]
  i1850.defaultWeight = i1851[1]
  i1850.blendingMode = i1851[2]
  i1850.avatarMask = i1851[3]
  i1850.syncedLayerIndex = i1851[4]
  i1850.syncedLayerAffectsTiming = !!i1851[5]
  i1850.syncedLayers = i1851[6]
  i1850.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1851[7], i1850.stateMachine)
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1853 = data
  i1852.id = i1853[0]
  i1852.name = i1853[1]
  i1852.path = i1853[2]
  var i1855 = i1853[3]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1855[i + 0]) );
  }
  i1852.states = i1854
  var i1857 = i1853[4]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1857[i + 0]) );
  }
  i1852.machines = i1856
  var i1859 = i1853[5]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1859[i + 0]) );
  }
  i1852.entryStateTransitions = i1858
  var i1861 = i1853[6]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1861[i + 0]) );
  }
  i1852.exitStateTransitions = i1860
  var i1863 = i1853[7]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1863[i + 0]) );
  }
  i1852.anyStateTransitions = i1862
  i1852.defaultStateId = i1853[8]
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1867 = data
  i1866.id = i1867[0]
  i1866.name = i1867[1]
  i1866.cycleOffset = i1867[2]
  i1866.cycleOffsetParameter = i1867[3]
  i1866.cycleOffsetParameterActive = !!i1867[4]
  i1866.mirror = !!i1867[5]
  i1866.mirrorParameter = i1867[6]
  i1866.mirrorParameterActive = !!i1867[7]
  i1866.motionId = i1867[8]
  i1866.nameHash = i1867[9]
  i1866.fullPathHash = i1867[10]
  i1866.speed = i1867[11]
  i1866.speedParameter = i1867[12]
  i1866.speedParameterActive = !!i1867[13]
  i1866.tag = i1867[14]
  i1866.tagHash = i1867[15]
  i1866.writeDefaultValues = !!i1867[16]
  var i1869 = i1867[17]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 2) {
  request.r(i1869[i + 0], i1869[i + 1], 2, i1868, '')
  }
  i1866.behaviours = i1868
  var i1871 = i1867[18]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1871[i + 0]) );
  }
  i1866.transitions = i1870
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1877 = data
  i1876.fullPath = i1877[0]
  i1876.canTransitionToSelf = !!i1877[1]
  i1876.duration = i1877[2]
  i1876.exitTime = i1877[3]
  i1876.hasExitTime = !!i1877[4]
  i1876.hasFixedDuration = !!i1877[5]
  i1876.interruptionSource = i1877[6]
  i1876.offset = i1877[7]
  i1876.orderedInterruption = !!i1877[8]
  i1876.destinationStateId = i1877[9]
  i1876.isExit = !!i1877[10]
  i1876.mute = !!i1877[11]
  i1876.solo = !!i1877[12]
  var i1879 = i1877[13]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1879[i + 0]) );
  }
  i1876.conditions = i1878
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1885 = data
  i1884.destinationStateId = i1885[0]
  i1884.isExit = !!i1885[1]
  i1884.mute = !!i1885[2]
  i1884.solo = !!i1885[3]
  var i1887 = i1885[4]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1887[i + 0]) );
  }
  i1884.conditions = i1886
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1891 = data
  i1890.mode = i1891[0]
  i1890.parameter = i1891[1]
  i1890.threshold = i1891[2]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1895 = data
  i1894.defaultBool = !!i1895[0]
  i1894.defaultFloat = i1895[1]
  i1894.defaultInt = i1895[2]
  i1894.name = i1895[3]
  i1894.nameHash = i1895[4]
  i1894.type = i1895[5]
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1897 = data
  i1896.name = i1897[0]
  i1896.bytes64 = i1897[1]
  i1896.data = i1897[2]
  return i1896
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1898 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1899 = data
  i1898.hashCode = i1899[0]
  request.r(i1899[1], i1899[2], 0, i1898, 'material')
  i1898.materialHashCode = i1899[3]
  request.r(i1899[4], i1899[5], 0, i1898, 'atlas')
  i1898.normalStyle = i1899[6]
  i1898.normalSpacingOffset = i1899[7]
  i1898.boldStyle = i1899[8]
  i1898.boldSpacing = i1899[9]
  i1898.italicStyle = i1899[10]
  i1898.tabSize = i1899[11]
  i1898.m_Version = i1899[12]
  i1898.m_SourceFontFileGUID = i1899[13]
  request.r(i1899[14], i1899[15], 0, i1898, 'm_SourceFontFile_EditorRef')
  request.r(i1899[16], i1899[17], 0, i1898, 'm_SourceFontFile')
  i1898.m_AtlasPopulationMode = i1899[18]
  i1898.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1899[19], i1898.m_FaceInfo)
  var i1901 = i1899[20]
  var i1900 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.add(request.d('UnityEngine.TextCore.Glyph', i1901[i + 0]));
  }
  i1898.m_GlyphTable = i1900
  var i1903 = i1899[21]
  var i1902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.add(request.d('TMPro.TMP_Character', i1903[i + 0]));
  }
  i1898.m_CharacterTable = i1902
  var i1905 = i1899[22]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 2) {
  request.r(i1905[i + 0], i1905[i + 1], 2, i1904, '')
  }
  i1898.m_AtlasTextures = i1904
  i1898.m_AtlasTextureIndex = i1899[23]
  i1898.m_IsMultiAtlasTexturesEnabled = !!i1899[24]
  i1898.m_ClearDynamicDataOnBuild = !!i1899[25]
  var i1907 = i1899[26]
  var i1906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.add(request.d('UnityEngine.TextCore.GlyphRect', i1907[i + 0]));
  }
  i1898.m_UsedGlyphRects = i1906
  var i1909 = i1899[27]
  var i1908 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.add(request.d('UnityEngine.TextCore.GlyphRect', i1909[i + 0]));
  }
  i1898.m_FreeGlyphRects = i1908
  i1898.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1899[28], i1898.m_fontInfo)
  i1898.m_AtlasWidth = i1899[29]
  i1898.m_AtlasHeight = i1899[30]
  i1898.m_AtlasPadding = i1899[31]
  i1898.m_AtlasRenderMode = i1899[32]
  var i1911 = i1899[33]
  var i1910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.add(request.d('TMPro.TMP_Glyph', i1911[i + 0]));
  }
  i1898.m_glyphInfoList = i1910
  i1898.m_KerningTable = request.d('TMPro.KerningTable', i1899[34], i1898.m_KerningTable)
  i1898.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1899[35], i1898.m_FontFeatureTable)
  var i1913 = i1899[36]
  var i1912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1913.length; i += 2) {
  request.r(i1913[i + 0], i1913[i + 1], 1, i1912, '')
  }
  i1898.fallbackFontAssets = i1912
  var i1915 = i1899[37]
  var i1914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1915.length; i += 2) {
  request.r(i1915[i + 0], i1915[i + 1], 1, i1914, '')
  }
  i1898.m_FallbackFontAssetTable = i1914
  i1898.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1899[38], i1898.m_CreationSettings)
  var i1917 = i1899[39]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( request.d('TMPro.TMP_FontWeightPair', i1917[i + 0]) );
  }
  i1898.m_FontWeightTable = i1916
  var i1919 = i1899[40]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('TMPro.TMP_FontWeightPair', i1919[i + 0]) );
  }
  i1898.fontWeights = i1918
  return i1898
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1920 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1921 = data
  i1920.m_FaceIndex = i1921[0]
  i1920.m_FamilyName = i1921[1]
  i1920.m_StyleName = i1921[2]
  i1920.m_PointSize = i1921[3]
  i1920.m_Scale = i1921[4]
  i1920.m_UnitsPerEM = i1921[5]
  i1920.m_LineHeight = i1921[6]
  i1920.m_AscentLine = i1921[7]
  i1920.m_CapLine = i1921[8]
  i1920.m_MeanLine = i1921[9]
  i1920.m_Baseline = i1921[10]
  i1920.m_DescentLine = i1921[11]
  i1920.m_SuperscriptOffset = i1921[12]
  i1920.m_SuperscriptSize = i1921[13]
  i1920.m_SubscriptOffset = i1921[14]
  i1920.m_SubscriptSize = i1921[15]
  i1920.m_UnderlineOffset = i1921[16]
  i1920.m_UnderlineThickness = i1921[17]
  i1920.m_StrikethroughOffset = i1921[18]
  i1920.m_StrikethroughThickness = i1921[19]
  i1920.m_TabWidth = i1921[20]
  return i1920
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1924 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1925 = data
  i1924.m_Index = i1925[0]
  i1924.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1925[1], i1924.m_Metrics)
  i1924.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1925[2], i1924.m_GlyphRect)
  i1924.m_Scale = i1925[3]
  i1924.m_AtlasIndex = i1925[4]
  i1924.m_ClassDefinitionType = i1925[5]
  return i1924
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1926 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1927 = data
  i1926.m_Width = i1927[0]
  i1926.m_Height = i1927[1]
  i1926.m_HorizontalBearingX = i1927[2]
  i1926.m_HorizontalBearingY = i1927[3]
  i1926.m_HorizontalAdvance = i1927[4]
  return i1926
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1928 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1929 = data
  i1928.m_X = i1929[0]
  i1928.m_Y = i1929[1]
  i1928.m_Width = i1929[2]
  i1928.m_Height = i1929[3]
  return i1928
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1932 = root || request.c( 'TMPro.TMP_Character' )
  var i1933 = data
  i1932.m_ElementType = i1933[0]
  i1932.m_Unicode = i1933[1]
  i1932.m_GlyphIndex = i1933[2]
  i1932.m_Scale = i1933[3]
  return i1932
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1938 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1939 = data
  i1938.Name = i1939[0]
  i1938.PointSize = i1939[1]
  i1938.Scale = i1939[2]
  i1938.CharacterCount = i1939[3]
  i1938.LineHeight = i1939[4]
  i1938.Baseline = i1939[5]
  i1938.Ascender = i1939[6]
  i1938.CapHeight = i1939[7]
  i1938.Descender = i1939[8]
  i1938.CenterLine = i1939[9]
  i1938.SuperscriptOffset = i1939[10]
  i1938.SubscriptOffset = i1939[11]
  i1938.SubSize = i1939[12]
  i1938.Underline = i1939[13]
  i1938.UnderlineThickness = i1939[14]
  i1938.strikethrough = i1939[15]
  i1938.strikethroughThickness = i1939[16]
  i1938.TabWidth = i1939[17]
  i1938.Padding = i1939[18]
  i1938.AtlasWidth = i1939[19]
  i1938.AtlasHeight = i1939[20]
  return i1938
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1942 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1943 = data
  i1942.id = i1943[0]
  i1942.x = i1943[1]
  i1942.y = i1943[2]
  i1942.width = i1943[3]
  i1942.height = i1943[4]
  i1942.xOffset = i1943[5]
  i1942.yOffset = i1943[6]
  i1942.xAdvance = i1943[7]
  i1942.scale = i1943[8]
  return i1942
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1944 = root || request.c( 'TMPro.KerningTable' )
  var i1945 = data
  var i1947 = i1945[0]
  var i1946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.add(request.d('TMPro.KerningPair', i1947[i + 0]));
  }
  i1944.kerningPairs = i1946
  return i1944
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1950 = root || request.c( 'TMPro.KerningPair' )
  var i1951 = data
  i1950.xOffset = i1951[0]
  i1950.m_FirstGlyph = i1951[1]
  i1950.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1951[2], i1950.m_FirstGlyphAdjustments)
  i1950.m_SecondGlyph = i1951[3]
  i1950.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1951[4], i1950.m_SecondGlyphAdjustments)
  i1950.m_IgnoreSpacingAdjustments = !!i1951[5]
  return i1950
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1952 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1953 = data
  var i1955 = i1953[0]
  var i1954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1955[i + 0]));
  }
  i1952.m_GlyphPairAdjustmentRecords = i1954
  return i1952
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1958 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1959 = data
  i1958.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1959[0], i1958.m_FirstAdjustmentRecord)
  i1958.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1959[1], i1958.m_SecondAdjustmentRecord)
  i1958.m_FeatureLookupFlags = i1959[2]
  return i1958
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1960 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1961 = data
  i1960.m_GlyphIndex = i1961[0]
  i1960.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1961[1], i1960.m_GlyphValueRecord)
  return i1960
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1962 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1963 = data
  i1962.m_XPlacement = i1963[0]
  i1962.m_YPlacement = i1963[1]
  i1962.m_XAdvance = i1963[2]
  i1962.m_YAdvance = i1963[3]
  return i1962
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1966 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1967 = data
  i1966.sourceFontFileName = i1967[0]
  i1966.sourceFontFileGUID = i1967[1]
  i1966.pointSizeSamplingMode = i1967[2]
  i1966.pointSize = i1967[3]
  i1966.padding = i1967[4]
  i1966.packingMode = i1967[5]
  i1966.atlasWidth = i1967[6]
  i1966.atlasHeight = i1967[7]
  i1966.characterSetSelectionMode = i1967[8]
  i1966.characterSequence = i1967[9]
  i1966.referencedFontAssetGUID = i1967[10]
  i1966.referencedTextAssetGUID = i1967[11]
  i1966.fontStyle = i1967[12]
  i1966.fontStyleModifier = i1967[13]
  i1966.renderMode = i1967[14]
  i1966.includeFontFeatures = !!i1967[15]
  return i1966
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1970 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1971 = data
  request.r(i1971[0], i1971[1], 0, i1970, 'regularTypeface')
  request.r(i1971[2], i1971[3], 0, i1970, 'italicTypeface')
  return i1970
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1972 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1973 = data
  i1972.useSafeMode = !!i1973[0]
  i1972.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1973[1], i1972.safeModeOptions)
  i1972.timeScale = i1973[2]
  i1972.unscaledTimeScale = i1973[3]
  i1972.useSmoothDeltaTime = !!i1973[4]
  i1972.maxSmoothUnscaledTime = i1973[5]
  i1972.rewindCallbackMode = i1973[6]
  i1972.showUnityEditorReport = !!i1973[7]
  i1972.logBehaviour = i1973[8]
  i1972.drawGizmos = !!i1973[9]
  i1972.defaultRecyclable = !!i1973[10]
  i1972.defaultAutoPlay = i1973[11]
  i1972.defaultUpdateType = i1973[12]
  i1972.defaultTimeScaleIndependent = !!i1973[13]
  i1972.defaultEaseType = i1973[14]
  i1972.defaultEaseOvershootOrAmplitude = i1973[15]
  i1972.defaultEasePeriod = i1973[16]
  i1972.defaultAutoKill = !!i1973[17]
  i1972.defaultLoopType = i1973[18]
  i1972.debugMode = !!i1973[19]
  i1972.debugStoreTargetId = !!i1973[20]
  i1972.showPreviewPanel = !!i1973[21]
  i1972.storeSettingsLocation = i1973[22]
  i1972.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1973[23], i1972.modules)
  i1972.createASMDEF = !!i1973[24]
  i1972.showPlayingTweens = !!i1973[25]
  i1972.showPausedTweens = !!i1973[26]
  return i1972
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1974 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1975 = data
  i1974.logBehaviour = i1975[0]
  i1974.nestedTweenFailureBehaviour = i1975[1]
  return i1974
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1976 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1977 = data
  i1976.showPanel = !!i1977[0]
  i1976.audioEnabled = !!i1977[1]
  i1976.physicsEnabled = !!i1977[2]
  i1976.physics2DEnabled = !!i1977[3]
  i1976.spriteEnabled = !!i1977[4]
  i1976.uiEnabled = !!i1977[5]
  i1976.textMeshProEnabled = !!i1977[6]
  i1976.tk2DEnabled = !!i1977[7]
  i1976.deAudioEnabled = !!i1977[8]
  i1976.deUnityExtendedEnabled = !!i1977[9]
  i1976.epoOutlineEnabled = !!i1977[10]
  return i1976
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1978 = root || request.c( 'TMPro.TMP_Settings' )
  var i1979 = data
  i1978.m_enableWordWrapping = !!i1979[0]
  i1978.m_enableKerning = !!i1979[1]
  i1978.m_enableExtraPadding = !!i1979[2]
  i1978.m_enableTintAllSprites = !!i1979[3]
  i1978.m_enableParseEscapeCharacters = !!i1979[4]
  i1978.m_EnableRaycastTarget = !!i1979[5]
  i1978.m_GetFontFeaturesAtRuntime = !!i1979[6]
  i1978.m_missingGlyphCharacter = i1979[7]
  i1978.m_warningsDisabled = !!i1979[8]
  request.r(i1979[9], i1979[10], 0, i1978, 'm_defaultFontAsset')
  i1978.m_defaultFontAssetPath = i1979[11]
  i1978.m_defaultFontSize = i1979[12]
  i1978.m_defaultAutoSizeMinRatio = i1979[13]
  i1978.m_defaultAutoSizeMaxRatio = i1979[14]
  i1978.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1979[15], i1979[16] )
  i1978.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1979[17], i1979[18] )
  i1978.m_autoSizeTextContainer = !!i1979[19]
  i1978.m_IsTextObjectScaleStatic = !!i1979[20]
  var i1981 = i1979[21]
  var i1980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1981.length; i += 2) {
  request.r(i1981[i + 0], i1981[i + 1], 1, i1980, '')
  }
  i1978.m_fallbackFontAssets = i1980
  i1978.m_matchMaterialPreset = !!i1979[22]
  request.r(i1979[23], i1979[24], 0, i1978, 'm_defaultSpriteAsset')
  i1978.m_defaultSpriteAssetPath = i1979[25]
  i1978.m_enableEmojiSupport = !!i1979[26]
  i1978.m_MissingCharacterSpriteUnicode = i1979[27]
  i1978.m_defaultColorGradientPresetsPath = i1979[28]
  request.r(i1979[29], i1979[30], 0, i1978, 'm_defaultStyleSheet')
  i1978.m_StyleSheetsResourcePath = i1979[31]
  request.r(i1979[32], i1979[33], 0, i1978, 'm_leadingCharacters')
  request.r(i1979[34], i1979[35], 0, i1978, 'm_followingCharacters')
  i1978.m_UseModernHangulLineBreakingRules = !!i1979[36]
  return i1978
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1982 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1983 = data
  i1982.hashCode = i1983[0]
  request.r(i1983[1], i1983[2], 0, i1982, 'material')
  i1982.materialHashCode = i1983[3]
  request.r(i1983[4], i1983[5], 0, i1982, 'spriteSheet')
  var i1985 = i1983[6]
  var i1984 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.add(request.d('TMPro.TMP_Sprite', i1985[i + 0]));
  }
  i1982.spriteInfoList = i1984
  var i1987 = i1983[7]
  var i1986 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1987.length; i += 2) {
  request.r(i1987[i + 0], i1987[i + 1], 1, i1986, '')
  }
  i1982.fallbackSpriteAssets = i1986
  i1982.m_Version = i1983[8]
  i1982.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1983[9], i1982.m_FaceInfo)
  var i1989 = i1983[10]
  var i1988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.add(request.d('TMPro.TMP_SpriteCharacter', i1989[i + 0]));
  }
  i1982.m_SpriteCharacterTable = i1988
  var i1991 = i1983[11]
  var i1990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.add(request.d('TMPro.TMP_SpriteGlyph', i1991[i + 0]));
  }
  i1982.m_SpriteGlyphTable = i1990
  return i1982
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1994 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1995 = data
  i1994.name = i1995[0]
  i1994.hashCode = i1995[1]
  i1994.unicode = i1995[2]
  i1994.pivot = new pc.Vec2( i1995[3], i1995[4] )
  request.r(i1995[5], i1995[6], 0, i1994, 'sprite')
  i1994.id = i1995[7]
  i1994.x = i1995[8]
  i1994.y = i1995[9]
  i1994.width = i1995[10]
  i1994.height = i1995[11]
  i1994.xOffset = i1995[12]
  i1994.yOffset = i1995[13]
  i1994.xAdvance = i1995[14]
  i1994.scale = i1995[15]
  return i1994
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2000 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2001 = data
  i2000.m_Name = i2001[0]
  i2000.m_HashCode = i2001[1]
  i2000.m_ElementType = i2001[2]
  i2000.m_Unicode = i2001[3]
  i2000.m_GlyphIndex = i2001[4]
  i2000.m_Scale = i2001[5]
  return i2000
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2004 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2005 = data
  request.r(i2005[0], i2005[1], 0, i2004, 'sprite')
  i2004.m_Index = i2005[2]
  i2004.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2005[3], i2004.m_Metrics)
  i2004.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2005[4], i2004.m_GlyphRect)
  i2004.m_Scale = i2005[5]
  i2004.m_AtlasIndex = i2005[6]
  i2004.m_ClassDefinitionType = i2005[7]
  return i2004
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2006 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2007 = data
  var i2009 = i2007[0]
  var i2008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.add(request.d('TMPro.TMP_Style', i2009[i + 0]));
  }
  i2006.m_StyleList = i2008
  return i2006
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2012 = root || request.c( 'TMPro.TMP_Style' )
  var i2013 = data
  i2012.m_Name = i2013[0]
  i2012.m_HashCode = i2013[1]
  i2012.m_OpeningDefinition = i2013[2]
  i2012.m_ClosingDefinition = i2013[3]
  i2012.m_OpeningTagArray = i2013[4]
  i2012.m_ClosingTagArray = i2013[5]
  i2012.m_OpeningTagUnicodeArray = i2013[6]
  i2012.m_ClosingTagUnicodeArray = i2013[7]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2015 = data
  var i2017 = i2015[0]
  var i2016 = []
  for(var i = 0; i < i2017.length; i += 1) {
    i2016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2017[i + 0]) );
  }
  i2014.files = i2016
  i2014.componentToPrefabIds = i2015[1]
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2021 = data
  i2020.path = i2021[0]
  request.r(i2021[1], i2021[2], 0, i2020, 'unityObject')
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2023 = data
  var i2025 = i2023[0]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2025[i + 0]) );
  }
  i2022.scriptsExecutionOrder = i2024
  var i2027 = i2023[1]
  var i2026 = []
  for(var i = 0; i < i2027.length; i += 1) {
    i2026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2027[i + 0]) );
  }
  i2022.sortingLayers = i2026
  var i2029 = i2023[2]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2029[i + 0]) );
  }
  i2022.cullingLayers = i2028
  i2022.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2023[3], i2022.timeSettings)
  i2022.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2023[4], i2022.physicsSettings)
  i2022.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2023[5], i2022.physics2DSettings)
  i2022.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2023[6], i2022.qualitySettings)
  i2022.enableRealtimeShadows = !!i2023[7]
  i2022.enableAutoInstancing = !!i2023[8]
  i2022.enableDynamicBatching = !!i2023[9]
  i2022.lightmapEncodingQuality = i2023[10]
  i2022.desiredColorSpace = i2023[11]
  var i2031 = i2023[12]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( i2031[i + 0] );
  }
  i2022.allTags = i2030
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2035 = data
  i2034.name = i2035[0]
  i2034.value = i2035[1]
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2039 = data
  i2038.id = i2039[0]
  i2038.name = i2039[1]
  i2038.value = i2039[2]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2043 = data
  i2042.id = i2043[0]
  i2042.name = i2043[1]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2045 = data
  i2044.fixedDeltaTime = i2045[0]
  i2044.maximumDeltaTime = i2045[1]
  i2044.timeScale = i2045[2]
  i2044.maximumParticleTimestep = i2045[3]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2047 = data
  i2046.gravity = new pc.Vec3( i2047[0], i2047[1], i2047[2] )
  i2046.defaultSolverIterations = i2047[3]
  i2046.bounceThreshold = i2047[4]
  i2046.autoSyncTransforms = !!i2047[5]
  i2046.autoSimulation = !!i2047[6]
  var i2049 = i2047[7]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2049[i + 0]) );
  }
  i2046.collisionMatrix = i2048
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2053 = data
  i2052.enabled = !!i2053[0]
  i2052.layerId = i2053[1]
  i2052.otherLayerId = i2053[2]
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2055 = data
  request.r(i2055[0], i2055[1], 0, i2054, 'material')
  i2054.gravity = new pc.Vec2( i2055[2], i2055[3] )
  i2054.positionIterations = i2055[4]
  i2054.velocityIterations = i2055[5]
  i2054.velocityThreshold = i2055[6]
  i2054.maxLinearCorrection = i2055[7]
  i2054.maxAngularCorrection = i2055[8]
  i2054.maxTranslationSpeed = i2055[9]
  i2054.maxRotationSpeed = i2055[10]
  i2054.baumgarteScale = i2055[11]
  i2054.baumgarteTOIScale = i2055[12]
  i2054.timeToSleep = i2055[13]
  i2054.linearSleepTolerance = i2055[14]
  i2054.angularSleepTolerance = i2055[15]
  i2054.defaultContactOffset = i2055[16]
  i2054.autoSimulation = !!i2055[17]
  i2054.queriesHitTriggers = !!i2055[18]
  i2054.queriesStartInColliders = !!i2055[19]
  i2054.callbacksOnDisable = !!i2055[20]
  i2054.reuseCollisionCallbacks = !!i2055[21]
  i2054.autoSyncTransforms = !!i2055[22]
  var i2057 = i2055[23]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2057[i + 0]) );
  }
  i2054.collisionMatrix = i2056
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2061 = data
  i2060.enabled = !!i2061[0]
  i2060.layerId = i2061[1]
  i2060.otherLayerId = i2061[2]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2063 = data
  var i2065 = i2063[0]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2065[i + 0]) );
  }
  i2062.qualityLevels = i2064
  var i2067 = i2063[1]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( i2067[i + 0] );
  }
  i2062.names = i2066
  i2062.shadows = i2063[2]
  i2062.anisotropicFiltering = i2063[3]
  i2062.antiAliasing = i2063[4]
  i2062.lodBias = i2063[5]
  i2062.shadowCascades = i2063[6]
  i2062.shadowDistance = i2063[7]
  i2062.shadowmaskMode = i2063[8]
  i2062.shadowProjection = i2063[9]
  i2062.shadowResolution = i2063[10]
  i2062.softParticles = !!i2063[11]
  i2062.softVegetation = !!i2063[12]
  i2062.activeColorSpace = i2063[13]
  i2062.desiredColorSpace = i2063[14]
  i2062.masterTextureLimit = i2063[15]
  i2062.maxQueuedFrames = i2063[16]
  i2062.particleRaycastBudget = i2063[17]
  i2062.pixelLightCount = i2063[18]
  i2062.realtimeReflectionProbes = !!i2063[19]
  i2062.shadowCascade2Split = i2063[20]
  i2062.shadowCascade4Split = new pc.Vec3( i2063[21], i2063[22], i2063[23] )
  i2062.streamingMipmapsActive = !!i2063[24]
  i2062.vSyncCount = i2063[25]
  i2062.asyncUploadBufferSize = i2063[26]
  i2062.asyncUploadTimeSlice = i2063[27]
  i2062.billboardsFaceCameraPosition = !!i2063[28]
  i2062.shadowNearPlaneOffset = i2063[29]
  i2062.streamingMipmapsMemoryBudget = i2063[30]
  i2062.maximumLODLevel = i2063[31]
  i2062.streamingMipmapsAddAllCameras = !!i2063[32]
  i2062.streamingMipmapsMaxLevelReduction = i2063[33]
  i2062.streamingMipmapsRenderersPerFrame = i2063[34]
  i2062.resolutionScalingFixedDPIFactor = i2063[35]
  i2062.streamingMipmapsMaxFileIORequests = i2063[36]
  i2062.currentQualityLevel = i2063[37]
  return i2062
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2070 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2071 = data
  i2070.xPlacement = i2071[0]
  i2070.yPlacement = i2071[1]
  i2070.xAdvance = i2071[2]
  i2070.yAdvance = i2071[3]
  return i2070
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

Deserializers.buildID = "59bd9768-75e6-4935-b5e2-821e87156ab5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

