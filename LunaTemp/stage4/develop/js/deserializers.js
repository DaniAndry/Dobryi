var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1548 = root || request.c( 'UnityEngine.JointSpring' )
  var i1549 = data
  i1548.spring = i1549[0]
  i1548.damper = i1549[1]
  i1548.targetPosition = i1549[2]
  return i1548
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1550 = root || request.c( 'UnityEngine.JointMotor' )
  var i1551 = data
  i1550.m_TargetVelocity = i1551[0]
  i1550.m_Force = i1551[1]
  i1550.m_FreeSpin = i1551[2]
  return i1550
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.JointLimits' )
  var i1553 = data
  i1552.m_Min = i1553[0]
  i1552.m_Max = i1553[1]
  i1552.m_Bounciness = i1553[2]
  i1552.m_BounceMinVelocity = i1553[3]
  i1552.m_ContactDistance = i1553[4]
  i1552.minBounce = i1553[5]
  i1552.maxBounce = i1553[6]
  return i1552
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.JointDrive' )
  var i1555 = data
  i1554.m_PositionSpring = i1555[0]
  i1554.m_PositionDamper = i1555[1]
  i1554.m_MaximumForce = i1555[2]
  i1554.m_UseAcceleration = i1555[3]
  return i1554
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1556 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1557 = data
  i1556.m_Spring = i1557[0]
  i1556.m_Damper = i1557[1]
  return i1556
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1558 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1559 = data
  i1558.m_Limit = i1559[0]
  i1558.m_Bounciness = i1559[1]
  i1558.m_ContactDistance = i1559[2]
  return i1558
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1560 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1561 = data
  i1560.m_ExtremumSlip = i1561[0]
  i1560.m_ExtremumValue = i1561[1]
  i1560.m_AsymptoteSlip = i1561[2]
  i1560.m_AsymptoteValue = i1561[3]
  i1560.m_Stiffness = i1561[4]
  return i1560
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1563 = data
  i1562.m_LowerAngle = i1563[0]
  i1562.m_UpperAngle = i1563[1]
  return i1562
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1564 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1565 = data
  i1564.m_MotorSpeed = i1565[0]
  i1564.m_MaximumMotorTorque = i1565[1]
  return i1564
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1567 = data
  i1566.m_DampingRatio = i1567[0]
  i1566.m_Frequency = i1567[1]
  i1566.m_Angle = i1567[2]
  return i1566
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1569 = data
  i1568.m_LowerTranslation = i1569[0]
  i1568.m_UpperTranslation = i1569[1]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1571 = data
  i1570.name = i1571[0]
  i1570.width = i1571[1]
  i1570.height = i1571[2]
  i1570.mipmapCount = i1571[3]
  i1570.anisoLevel = i1571[4]
  i1570.filterMode = i1571[5]
  i1570.hdr = !!i1571[6]
  i1570.format = i1571[7]
  i1570.wrapMode = i1571[8]
  i1570.alphaIsTransparency = !!i1571[9]
  i1570.alphaSource = i1571[10]
  i1570.graphicsFormat = i1571[11]
  i1570.sRGBTexture = !!i1571[12]
  i1570.desiredColorSpace = i1571[13]
  i1570.wrapU = i1571[14]
  i1570.wrapV = i1571[15]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1572 = root || new pc.UnityMaterial()
  var i1573 = data
  i1572.name = i1573[0]
  request.r(i1573[1], i1573[2], 0, i1572, 'shader')
  i1572.renderQueue = i1573[3]
  i1572.enableInstancing = !!i1573[4]
  var i1575 = i1573[5]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1575[i + 0]) );
  }
  i1572.floatParameters = i1574
  var i1577 = i1573[6]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1577[i + 0]) );
  }
  i1572.colorParameters = i1576
  var i1579 = i1573[7]
  var i1578 = []
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1579[i + 0]) );
  }
  i1572.vectorParameters = i1578
  var i1581 = i1573[8]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1581[i + 0]) );
  }
  i1572.textureParameters = i1580
  var i1583 = i1573[9]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1583[i + 0]) );
  }
  i1572.materialFlags = i1582
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1587 = data
  i1586.name = i1587[0]
  i1586.value = i1587[1]
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1591 = data
  i1590.name = i1591[0]
  i1590.value = new pc.Color(i1591[1], i1591[2], i1591[3], i1591[4])
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1595 = data
  i1594.name = i1595[0]
  i1594.value = new pc.Vec4( i1595[1], i1595[2], i1595[3], i1595[4] )
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1599 = data
  i1598.name = i1599[0]
  request.r(i1599[1], i1599[2], 0, i1598, 'value')
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1603 = data
  i1602.name = i1603[0]
  i1602.enabled = !!i1603[1]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1605 = data
  i1604.pivot = new pc.Vec2( i1605[0], i1605[1] )
  i1604.anchorMin = new pc.Vec2( i1605[2], i1605[3] )
  i1604.anchorMax = new pc.Vec2( i1605[4], i1605[5] )
  i1604.sizeDelta = new pc.Vec2( i1605[6], i1605[7] )
  i1604.anchoredPosition3D = new pc.Vec3( i1605[8], i1605[9], i1605[10] )
  i1604.rotation = new pc.Quat(i1605[11], i1605[12], i1605[13], i1605[14])
  i1604.scale = new pc.Vec3( i1605[15], i1605[16], i1605[17] )
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1607 = data
  i1606.cullTransparentMesh = !!i1607[0]
  return i1606
}

Deserializers["People"] = function (request, data, root) {
  var i1608 = root || request.c( 'People' )
  var i1609 = data
  request.r(i1609[0], i1609[1], 0, i1608, '_readyImage')
  request.r(i1609[2], i1609[3], 0, i1608, '_additiveImage1')
  request.r(i1609[4], i1609[5], 0, i1608, '_additiveImage2')
  request.r(i1609[6], i1609[7], 0, i1608, '_endPoint')
  request.r(i1609[8], i1609[9], 0, i1608, 'Bank')
  request.r(i1609[10], i1609[11], 0, i1608, '_sizeText')
  i1608.CupType = i1609[12]
  i1608.JuiceType = i1609[13]
  i1608.AdditiveType1 = i1609[14]
  i1608.AdditiveType2 = i1609[15]
  request.r(i1609[16], i1609[17], 0, i1608, '_finishSound')
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1611 = data
  request.r(i1611[0], i1611[1], 0, i1610, 'clip')
  request.r(i1611[2], i1611[3], 0, i1610, 'outputAudioMixerGroup')
  i1610.playOnAwake = !!i1611[4]
  i1610.loop = !!i1611[5]
  i1610.time = i1611[6]
  i1610.volume = i1611[7]
  i1610.pitch = i1611[8]
  i1610.enabled = !!i1611[9]
  return i1610
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.UI.Image' )
  var i1613 = data
  request.r(i1613[0], i1613[1], 0, i1612, 'm_Sprite')
  i1612.m_Type = i1613[2]
  i1612.m_PreserveAspect = !!i1613[3]
  i1612.m_FillCenter = !!i1613[4]
  i1612.m_FillMethod = i1613[5]
  i1612.m_FillAmount = i1613[6]
  i1612.m_FillClockwise = !!i1613[7]
  i1612.m_FillOrigin = i1613[8]
  i1612.m_UseSpriteMesh = !!i1613[9]
  i1612.m_PixelsPerUnitMultiplier = i1613[10]
  request.r(i1613[11], i1613[12], 0, i1612, 'm_Material')
  i1612.m_Maskable = !!i1613[13]
  i1612.m_Color = new pc.Color(i1613[14], i1613[15], i1613[16], i1613[17])
  i1612.m_RaycastTarget = !!i1613[18]
  i1612.m_RaycastPadding = new pc.Vec4( i1613[19], i1613[20], i1613[21], i1613[22] )
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1615 = data
  i1614.name = i1615[0]
  i1614.tagId = i1615[1]
  i1614.enabled = !!i1615[2]
  i1614.isStatic = !!i1615[3]
  i1614.layer = i1615[4]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1617 = data
  i1616.name = i1617[0]
  i1616.index = i1617[1]
  i1616.startup = !!i1617[2]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1619 = data
  i1618.position = new pc.Vec3( i1619[0], i1619[1], i1619[2] )
  i1618.scale = new pc.Vec3( i1619[3], i1619[4], i1619[5] )
  i1618.rotation = new pc.Quat(i1619[6], i1619[7], i1619[8], i1619[9])
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1621 = data
  i1620.enabled = !!i1621[0]
  i1620.aspect = i1621[1]
  i1620.orthographic = !!i1621[2]
  i1620.orthographicSize = i1621[3]
  i1620.backgroundColor = new pc.Color(i1621[4], i1621[5], i1621[6], i1621[7])
  i1620.nearClipPlane = i1621[8]
  i1620.farClipPlane = i1621[9]
  i1620.fieldOfView = i1621[10]
  i1620.depth = i1621[11]
  i1620.clearFlags = i1621[12]
  i1620.cullingMask = i1621[13]
  i1620.rect = i1621[14]
  request.r(i1621[15], i1621[16], 0, i1620, 'targetTexture')
  i1620.usePhysicalProperties = !!i1621[17]
  i1620.focalLength = i1621[18]
  i1620.sensorSize = new pc.Vec2( i1621[19], i1621[20] )
  i1620.lensShift = new pc.Vec2( i1621[21], i1621[22] )
  i1620.gateFit = i1621[23]
  i1620.commandBufferCount = i1621[24]
  i1620.cameraType = i1621[25]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1623 = data
  request.r(i1623[0], i1623[1], 0, i1622, 'animatorController')
  request.r(i1623[2], i1623[3], 0, i1622, 'avatar')
  i1622.updateMode = i1623[4]
  i1622.hasTransformHierarchy = !!i1623[5]
  i1622.applyRootMotion = !!i1623[6]
  var i1625 = i1623[7]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 2) {
  request.r(i1625[i + 0], i1625[i + 1], 2, i1624, '')
  }
  i1622.humanBones = i1624
  i1622.enabled = !!i1623[8]
  return i1622
}

Deserializers["Bank"] = function (request, data, root) {
  var i1628 = root || request.c( 'Bank' )
  var i1629 = data
  request.r(i1629[0], i1629[1], 0, i1628, 'BuyBigCupButton')
  request.r(i1629[2], i1629[3], 0, i1628, 'BigCupButton')
  request.r(i1629[4], i1629[5], 0, i1628, 'MiddleCupButton')
  request.r(i1629[6], i1629[7], 0, i1628, 'MoneyText')
  request.r(i1629[8], i1629[9], 0, i1628, 'Tutorial')
  request.r(i1629[10], i1629[11], 0, i1628, 'BuyAdditiveButton')
  request.r(i1629[12], i1629[13], 0, i1628, 'BuyJuiceButton')
  request.r(i1629[14], i1629[15], 0, i1628, 'JuiceButton1')
  request.r(i1629[16], i1629[17], 0, i1628, 'JuiceButton2')
  request.r(i1629[18], i1629[19], 0, i1628, 'JuiceButton3')
  request.r(i1629[20], i1629[21], 0, i1628, 'Additive1Button')
  request.r(i1629[22], i1629[23], 0, i1628, 'Additive2Button')
  i1628.Money = i1629[24]
  i1628.IsBigCupBuy = !!i1629[25]
  i1628.IsJuiceBuy = !!i1629[26]
  i1628.IsAdditiveBuy = !!i1629[27]
  request.r(i1629[28], i1629[29], 0, i1628, '_buySound')
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1631 = data
  i1630.enabled = !!i1631[0]
  i1630.planeDistance = i1631[1]
  i1630.referencePixelsPerUnit = i1631[2]
  i1630.isFallbackOverlay = !!i1631[3]
  i1630.renderMode = i1631[4]
  i1630.renderOrder = i1631[5]
  i1630.sortingLayerName = i1631[6]
  i1630.sortingOrder = i1631[7]
  i1630.scaleFactor = i1631[8]
  request.r(i1631[9], i1631[10], 0, i1630, 'worldCamera')
  i1630.overrideSorting = !!i1631[11]
  i1630.pixelPerfect = !!i1631[12]
  i1630.targetDisplay = i1631[13]
  i1630.overridePixelPerfect = !!i1631[14]
  return i1630
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1633 = data
  i1632.m_UiScaleMode = i1633[0]
  i1632.m_ReferencePixelsPerUnit = i1633[1]
  i1632.m_ScaleFactor = i1633[2]
  i1632.m_ReferenceResolution = new pc.Vec2( i1633[3], i1633[4] )
  i1632.m_ScreenMatchMode = i1633[5]
  i1632.m_MatchWidthOrHeight = i1633[6]
  i1632.m_PhysicalUnit = i1633[7]
  i1632.m_FallbackScreenDPI = i1633[8]
  i1632.m_DefaultSpriteDPI = i1633[9]
  i1632.m_DynamicPixelsPerUnit = i1633[10]
  i1632.m_PresetInfoIsWorld = !!i1633[11]
  return i1632
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1635 = data
  i1634.m_IgnoreReversedGraphics = !!i1635[0]
  i1634.m_BlockingObjects = i1635[1]
  i1634.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1635[2] )
  return i1634
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i1636 = root || request.c( 'ImageShiftOnOrientation' )
  var i1637 = data
  var i1639 = i1637[0]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.push( request.d('ItemSwitcherData', i1639[i + 0]) );
  }
  i1636.Items = i1638
  request.r(i1637[1], i1637[2], 0, i1636, '_backHorizontal')
  request.r(i1637[3], i1637[4], 0, i1636, '_backVertical')
  request.r(i1637[5], i1637[6], 0, i1636, '_tableHorizontal')
  request.r(i1637[7], i1637[8], 0, i1636, '_tableVertical')
  i1636.IsDebug = !!i1637[9]
  i1636.CanCopy = !!i1637[10]
  return i1636
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i1642 = root || request.c( 'ItemSwitcherData' )
  var i1643 = data
  request.r(i1643[0], i1643[1], 0, i1642, 'Target')
  i1642.HorizontalAnchoredPosition = new pc.Vec2( i1643[2], i1643[3] )
  i1642.SizeHorizontal = new pc.Vec2( i1643[4], i1643[5] )
  i1642.VerticalAnchoredPosition = new pc.Vec2( i1643[6], i1643[7] )
  i1642.SizeVertical = new pc.Vec2( i1643[8], i1643[9] )
  i1642.MinHorizontal = new pc.Vec2( i1643[10], i1643[11] )
  i1642.MaxHorizontal = new pc.Vec2( i1643[12], i1643[13] )
  i1642.MinVertical = new pc.Vec2( i1643[14], i1643[15] )
  i1642.MaxVertical = new pc.Vec2( i1643[16], i1643[17] )
  i1642.IsAnchored = !!i1643[18]
  i1642.IsDebug = !!i1643[19]
  i1642.CopyHorizontal = !!i1643[20]
  i1642.CopyVertical = !!i1643[21]
  return i1642
}

Deserializers["Point"] = function (request, data, root) {
  var i1644 = root || request.c( 'Point' )
  var i1645 = data
  return i1644
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1646 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1647 = data
  i1646.m_hasFontAssetChanged = !!i1647[0]
  request.r(i1647[1], i1647[2], 0, i1646, 'm_baseMaterial')
  i1646.m_maskOffset = new pc.Vec4( i1647[3], i1647[4], i1647[5], i1647[6] )
  i1646.m_text = i1647[7]
  i1646.m_isRightToLeft = !!i1647[8]
  request.r(i1647[9], i1647[10], 0, i1646, 'm_fontAsset')
  request.r(i1647[11], i1647[12], 0, i1646, 'm_sharedMaterial')
  var i1649 = i1647[13]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 2) {
  request.r(i1649[i + 0], i1649[i + 1], 2, i1648, '')
  }
  i1646.m_fontSharedMaterials = i1648
  request.r(i1647[14], i1647[15], 0, i1646, 'm_fontMaterial')
  var i1651 = i1647[16]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 2) {
  request.r(i1651[i + 0], i1651[i + 1], 2, i1650, '')
  }
  i1646.m_fontMaterials = i1650
  i1646.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1647[17], i1647[18], i1647[19], i1647[20])
  i1646.m_fontColor = new pc.Color(i1647[21], i1647[22], i1647[23], i1647[24])
  i1646.m_enableVertexGradient = !!i1647[25]
  i1646.m_colorMode = i1647[26]
  i1646.m_fontColorGradient = request.d('TMPro.VertexGradient', i1647[27], i1646.m_fontColorGradient)
  request.r(i1647[28], i1647[29], 0, i1646, 'm_fontColorGradientPreset')
  request.r(i1647[30], i1647[31], 0, i1646, 'm_spriteAsset')
  i1646.m_tintAllSprites = !!i1647[32]
  request.r(i1647[33], i1647[34], 0, i1646, 'm_StyleSheet')
  i1646.m_TextStyleHashCode = i1647[35]
  i1646.m_overrideHtmlColors = !!i1647[36]
  i1646.m_faceColor = UnityEngine.Color32.ConstructColor(i1647[37], i1647[38], i1647[39], i1647[40])
  i1646.m_fontSize = i1647[41]
  i1646.m_fontSizeBase = i1647[42]
  i1646.m_fontWeight = i1647[43]
  i1646.m_enableAutoSizing = !!i1647[44]
  i1646.m_fontSizeMin = i1647[45]
  i1646.m_fontSizeMax = i1647[46]
  i1646.m_fontStyle = i1647[47]
  i1646.m_HorizontalAlignment = i1647[48]
  i1646.m_VerticalAlignment = i1647[49]
  i1646.m_textAlignment = i1647[50]
  i1646.m_characterSpacing = i1647[51]
  i1646.m_wordSpacing = i1647[52]
  i1646.m_lineSpacing = i1647[53]
  i1646.m_lineSpacingMax = i1647[54]
  i1646.m_paragraphSpacing = i1647[55]
  i1646.m_charWidthMaxAdj = i1647[56]
  i1646.m_enableWordWrapping = !!i1647[57]
  i1646.m_wordWrappingRatios = i1647[58]
  i1646.m_overflowMode = i1647[59]
  request.r(i1647[60], i1647[61], 0, i1646, 'm_linkedTextComponent')
  request.r(i1647[62], i1647[63], 0, i1646, 'parentLinkedComponent')
  i1646.m_enableKerning = !!i1647[64]
  i1646.m_enableExtraPadding = !!i1647[65]
  i1646.checkPaddingRequired = !!i1647[66]
  i1646.m_isRichText = !!i1647[67]
  i1646.m_parseCtrlCharacters = !!i1647[68]
  i1646.m_isOrthographic = !!i1647[69]
  i1646.m_isCullingEnabled = !!i1647[70]
  i1646.m_horizontalMapping = i1647[71]
  i1646.m_verticalMapping = i1647[72]
  i1646.m_uvLineOffset = i1647[73]
  i1646.m_geometrySortingOrder = i1647[74]
  i1646.m_IsTextObjectScaleStatic = !!i1647[75]
  i1646.m_VertexBufferAutoSizeReduction = !!i1647[76]
  i1646.m_useMaxVisibleDescender = !!i1647[77]
  i1646.m_pageToDisplay = i1647[78]
  i1646.m_margin = new pc.Vec4( i1647[79], i1647[80], i1647[81], i1647[82] )
  i1646.m_isUsingLegacyAnimationComponent = !!i1647[83]
  i1646.m_isVolumetricText = !!i1647[84]
  request.r(i1647[85], i1647[86], 0, i1646, 'm_Material')
  i1646.m_Maskable = !!i1647[87]
  i1646.m_Color = new pc.Color(i1647[88], i1647[89], i1647[90], i1647[91])
  i1646.m_RaycastTarget = !!i1647[92]
  i1646.m_RaycastPadding = new pc.Vec4( i1647[93], i1647[94], i1647[95], i1647[96] )
  return i1646
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1654 = root || request.c( 'TMPro.VertexGradient' )
  var i1655 = data
  i1654.topLeft = new pc.Color(i1655[0], i1655[1], i1655[2], i1655[3])
  i1654.topRight = new pc.Color(i1655[4], i1655[5], i1655[6], i1655[7])
  i1654.bottomLeft = new pc.Color(i1655[8], i1655[9], i1655[10], i1655[11])
  i1654.bottomRight = new pc.Color(i1655[12], i1655[13], i1655[14], i1655[15])
  return i1654
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i1656 = root || request.c( 'PeopleContainer' )
  var i1657 = data
  var i1659 = i1657[0]
  var i1658 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1659.length; i += 2) {
  request.r(i1659[i + 0], i1659[i + 1], 1, i1658, '')
  }
  i1656.CurrentPeoples = i1658
  var i1661 = i1657[1]
  var i1660 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1661.length; i += 2) {
  request.r(i1661[i + 0], i1661[i + 1], 1, i1660, '')
  }
  i1656._peoples = i1660
  request.r(i1657[2], i1657[3], 0, i1656, '_tutorialPeople')
  request.r(i1657[4], i1657[5], 0, i1656, '_spawnPoint')
  request.r(i1657[6], i1657[7], 0, i1656, '_point1')
  request.r(i1657[8], i1657[9], 0, i1656, '_point2')
  request.r(i1657[10], i1657[11], 0, i1656, '_endPoint')
  request.r(i1657[12], i1657[13], 0, i1656, '_juiceConfig')
  request.r(i1657[14], i1657[15], 0, i1656, '_tutorial')
  return i1656
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1665 = data
  i1664.m_HorizontalFit = i1665[0]
  i1664.m_VerticalFit = i1665[1]
  return i1664
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1666 = root || request.c( 'UnityEngine.UI.Button' )
  var i1667 = data
  i1666.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1667[0], i1666.m_OnClick)
  i1666.m_Navigation = request.d('UnityEngine.UI.Navigation', i1667[1], i1666.m_Navigation)
  i1666.m_Transition = i1667[2]
  i1666.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1667[3], i1666.m_Colors)
  i1666.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1667[4], i1666.m_SpriteState)
  i1666.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1667[5], i1666.m_AnimationTriggers)
  i1666.m_Interactable = !!i1667[6]
  request.r(i1667[7], i1667[8], 0, i1666, 'm_TargetGraphic')
  return i1666
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1669 = data
  i1668.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1669[0], i1668.m_PersistentCalls)
  return i1668
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1671 = data
  var i1673 = i1671[0]
  var i1672 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.add(request.d('UnityEngine.Events.PersistentCall', i1673[i + 0]));
  }
  i1670.m_Calls = i1672
  return i1670
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1676 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, 'm_Target')
  i1676.m_TargetAssemblyTypeName = i1677[2]
  i1676.m_MethodName = i1677[3]
  i1676.m_Mode = i1677[4]
  i1676.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1677[5], i1676.m_Arguments)
  i1676.m_CallState = i1677[6]
  return i1676
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1679 = data
  i1678.m_Mode = i1679[0]
  i1678.m_WrapAround = !!i1679[1]
  request.r(i1679[2], i1679[3], 0, i1678, 'm_SelectOnUp')
  request.r(i1679[4], i1679[5], 0, i1678, 'm_SelectOnDown')
  request.r(i1679[6], i1679[7], 0, i1678, 'm_SelectOnLeft')
  request.r(i1679[8], i1679[9], 0, i1678, 'm_SelectOnRight')
  return i1678
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1680 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1681 = data
  i1680.m_NormalColor = new pc.Color(i1681[0], i1681[1], i1681[2], i1681[3])
  i1680.m_HighlightedColor = new pc.Color(i1681[4], i1681[5], i1681[6], i1681[7])
  i1680.m_PressedColor = new pc.Color(i1681[8], i1681[9], i1681[10], i1681[11])
  i1680.m_SelectedColor = new pc.Color(i1681[12], i1681[13], i1681[14], i1681[15])
  i1680.m_DisabledColor = new pc.Color(i1681[16], i1681[17], i1681[18], i1681[19])
  i1680.m_ColorMultiplier = i1681[20]
  i1680.m_FadeDuration = i1681[21]
  return i1680
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1682 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1683 = data
  request.r(i1683[0], i1683[1], 0, i1682, 'm_HighlightedSprite')
  request.r(i1683[2], i1683[3], 0, i1682, 'm_PressedSprite')
  request.r(i1683[4], i1683[5], 0, i1682, 'm_SelectedSprite')
  request.r(i1683[6], i1683[7], 0, i1682, 'm_DisabledSprite')
  return i1682
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1684 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1685 = data
  i1684.m_NormalTrigger = i1685[0]
  i1684.m_HighlightedTrigger = i1685[1]
  i1684.m_PressedTrigger = i1685[2]
  i1684.m_SelectedTrigger = i1685[3]
  i1684.m_DisabledTrigger = i1685[4]
  return i1684
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1686 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1687 = data
  request.r(i1687[0], i1687[1], 0, i1686, 'm_ObjectArgument')
  i1686.m_ObjectArgumentAssemblyTypeName = i1687[2]
  i1686.m_IntArgument = i1687[3]
  i1686.m_FloatArgument = i1687[4]
  i1686.m_StringArgument = i1687[5]
  i1686.m_BoolArgument = !!i1687[6]
  return i1686
}

Deserializers["BackImage"] = function (request, data, root) {
  var i1688 = root || request.c( 'BackImage' )
  var i1689 = data
  return i1688
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i1690 = root || request.c( 'AheadImage' )
  var i1691 = data
  return i1690
}

Deserializers["Order"] = function (request, data, root) {
  var i1692 = root || request.c( 'Order' )
  var i1693 = data
  request.r(i1693[0], i1693[1], 0, i1692, '_juiceAnimator')
  request.r(i1693[2], i1693[3], 0, i1692, '_cupAnimator')
  request.r(i1693[4], i1693[5], 0, i1692, '_canvasAnimator')
  i1692.CupType = i1693[6]
  i1692.JuiceType = i1693[7]
  i1692.AdditiveType1 = i1693[8]
  i1692.AdditiveType2 = i1693[9]
  i1692.IsFree = !!i1693[10]
  i1692.IsSpriteReady = !!i1693[11]
  i1692.IsCupReady = !!i1693[12]
  i1692.IsJuiceReady = !!i1693[13]
  i1692.IsPouring = !!i1693[14]
  request.r(i1693[15], i1693[16], 0, i1692, '_iceButton')
  request.r(i1693[17], i1693[18], 0, i1692, '_grassButton')
  request.r(i1693[19], i1693[20], 0, i1692, '_juiceBallsButton')
  request.r(i1693[21], i1693[22], 0, i1692, '_strawButton')
  request.r(i1693[23], i1693[24], 0, i1692, '_bigCupButton')
  request.r(i1693[25], i1693[26], 0, i1692, '_middleCupButton')
  request.r(i1693[27], i1693[28], 0, i1692, '_smallCupButton')
  request.r(i1693[29], i1693[30], 0, i1692, '_appleButton')
  request.r(i1693[31], i1693[32], 0, i1692, '_orangeButton')
  request.r(i1693[33], i1693[34], 0, i1692, '_multifruitButton')
  request.r(i1693[35], i1693[36], 0, i1692, '_tomatoButton')
  request.r(i1693[37], i1693[38], 0, i1692, '_cherryButton')
  request.r(i1693[39], i1693[40], 0, i1692, '_smallRawJuiceImage')
  request.r(i1693[41], i1693[42], 0, i1692, '_middleRawJuiceImage')
  request.r(i1693[43], i1693[44], 0, i1692, '_bigRawJuiceImage')
  request.r(i1693[45], i1693[46], 0, i1692, '_smallReadyJuiceImage')
  request.r(i1693[47], i1693[48], 0, i1692, '_middleReadyJuiceImage')
  request.r(i1693[49], i1693[50], 0, i1692, '_bigReadyJuiceImage')
  request.r(i1693[51], i1693[52], 0, i1692, '_backImage')
  request.r(i1693[53], i1693[54], 0, i1692, '_aheadImage')
  request.r(i1693[55], i1693[56], 0, i1692, '_config')
  request.r(i1693[57], i1693[58], 0, i1692, '_takeOrderButton')
  request.r(i1693[59], i1693[60], 0, i1692, '_peopleContainer')
  request.r(i1693[61], i1693[62], 0, i1692, '_tutorial')
  request.r(i1693[63], i1693[64], 0, i1692, '_bText')
  request.r(i1693[65], i1693[66], 0, i1692, '_mText')
  request.r(i1693[67], i1693[68], 0, i1692, '_sText')
  request.r(i1693[69], i1693[70], 0, i1692, '_garbageButton')
  request.r(i1693[71], i1693[72], 0, i1692, '_clickSound')
  request.r(i1693[73], i1693[74], 0, i1692, '_juiceSound')
  return i1692
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i1694 = root || request.c( 'Tutorial' )
  var i1695 = data
  i1694.IsTutorial = !!i1695[0]
  request.r(i1695[1], i1695[2], 0, i1694, 'Finger1')
  request.r(i1695[3], i1695[4], 0, i1694, 'Finger2')
  request.r(i1695[5], i1695[6], 0, i1694, 'Finger3')
  request.r(i1695[7], i1695[8], 0, i1694, 'Finger4')
  request.r(i1695[9], i1695[10], 0, i1694, 'Finger5')
  request.r(i1695[11], i1695[12], 0, i1694, 'BuyBigCupFinger')
  request.r(i1695[13], i1695[14], 0, i1694, 'BuyJuiceFinger')
  request.r(i1695[15], i1695[16], 0, i1694, 'SmallCupButton')
  request.r(i1695[17], i1695[18], 0, i1694, 'JuiceButton')
  request.r(i1695[19], i1695[20], 0, i1694, 'StrawButton')
  request.r(i1695[21], i1695[22], 0, i1694, 'AdditiveButton')
  request.r(i1695[23], i1695[24], 0, i1694, 'ReadyButton')
  var i1697 = i1695[25]
  var i1696 = []
  for(var i = 0; i < i1697.length; i += 2) {
  request.r(i1697[i + 0], i1697[i + 1], 2, i1696, '')
  }
  i1694.Buttons = i1696
  request.r(i1695[26], i1695[27], 0, i1694, 'Bank')
  return i1694
}

Deserializers["SoundSwitcher"] = function (request, data, root) {
  var i1700 = root || request.c( 'SoundSwitcher' )
  var i1701 = data
  request.r(i1701[0], i1701[1], 0, i1700, '_onImage')
  request.r(i1701[2], i1701[3], 0, i1700, '_offImage')
  return i1700
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1703 = data
  request.r(i1703[0], i1703[1], 0, i1702, 'm_FirstSelected')
  i1702.m_sendNavigationEvents = !!i1703[2]
  i1702.m_DragThreshold = i1703[3]
  return i1702
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1705 = data
  i1704.m_HorizontalAxis = i1705[0]
  i1704.m_VerticalAxis = i1705[1]
  i1704.m_SubmitButton = i1705[2]
  i1704.m_CancelButton = i1705[3]
  i1704.m_InputActionsPerSecond = i1705[4]
  i1704.m_RepeatDelay = i1705[5]
  i1704.m_ForceModuleActive = !!i1705[6]
  i1704.m_SendPointerHoverToParent = !!i1705[7]
  return i1704
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i1706 = root || request.c( 'JuiceConfig' )
  var i1707 = data
  request.r(i1707[0], i1707[1], 0, i1706, 'EntityBigCup')
  request.r(i1707[2], i1707[3], 0, i1706, 'TomatoBigCup')
  request.r(i1707[4], i1707[5], 0, i1706, 'AppleBigCup')
  request.r(i1707[6], i1707[7], 0, i1706, 'OrangeBigCup')
  request.r(i1707[8], i1707[9], 0, i1706, 'CherryBigCup')
  request.r(i1707[10], i1707[11], 0, i1706, 'MultifruitBigCup')
  request.r(i1707[12], i1707[13], 0, i1706, 'TomatoBigStrawCup')
  request.r(i1707[14], i1707[15], 0, i1706, 'MultifruitBigStrawCup')
  request.r(i1707[16], i1707[17], 0, i1706, 'AppleBigStrawCup')
  request.r(i1707[18], i1707[19], 0, i1706, 'OrangeBigStrawCup')
  request.r(i1707[20], i1707[21], 0, i1706, 'CherryBigStrawCup')
  request.r(i1707[22], i1707[23], 0, i1706, 'MultifruitBigBallsCup')
  request.r(i1707[24], i1707[25], 0, i1706, 'TomatoBigBallsCup')
  request.r(i1707[26], i1707[27], 0, i1706, 'AppleBigBallsCup')
  request.r(i1707[28], i1707[29], 0, i1706, 'OrangeBigBallsCup')
  request.r(i1707[30], i1707[31], 0, i1706, 'CherryBigBallsCup')
  request.r(i1707[32], i1707[33], 0, i1706, 'EntityMiddleCup')
  request.r(i1707[34], i1707[35], 0, i1706, 'TomatoMiddleCup')
  request.r(i1707[36], i1707[37], 0, i1706, 'AppleMiddleCup')
  request.r(i1707[38], i1707[39], 0, i1706, 'OrangeMiddleCup')
  request.r(i1707[40], i1707[41], 0, i1706, 'CherryMiddleCup')
  request.r(i1707[42], i1707[43], 0, i1706, 'MultifruitMiddleCup')
  request.r(i1707[44], i1707[45], 0, i1706, 'TomatoMiddleStrawCup')
  request.r(i1707[46], i1707[47], 0, i1706, 'MultifruitMiddleStrawCup')
  request.r(i1707[48], i1707[49], 0, i1706, 'AppleMiddleStrawCup')
  request.r(i1707[50], i1707[51], 0, i1706, 'OrangeMiddleStrawCup')
  request.r(i1707[52], i1707[53], 0, i1706, 'CherryMiddleStrawCup')
  request.r(i1707[54], i1707[55], 0, i1706, 'MultifruitMiddleBallsCup')
  request.r(i1707[56], i1707[57], 0, i1706, 'TomatoMiddleBallsCup')
  request.r(i1707[58], i1707[59], 0, i1706, 'AppleMiddleBallsCup')
  request.r(i1707[60], i1707[61], 0, i1706, 'OrangeMiddleBallsCup')
  request.r(i1707[62], i1707[63], 0, i1706, 'CherryMiddleBallsCup')
  request.r(i1707[64], i1707[65], 0, i1706, 'EntitySmallCup')
  request.r(i1707[66], i1707[67], 0, i1706, 'TomatoSmallCup')
  request.r(i1707[68], i1707[69], 0, i1706, 'AppleSmallCup')
  request.r(i1707[70], i1707[71], 0, i1706, 'OrangeSmallCup')
  request.r(i1707[72], i1707[73], 0, i1706, 'CherrySmallCup')
  request.r(i1707[74], i1707[75], 0, i1706, 'MultifruitSmallCup')
  request.r(i1707[76], i1707[77], 0, i1706, 'TomatoSmallStrawCup')
  request.r(i1707[78], i1707[79], 0, i1706, 'AppleSmallStrawCup')
  request.r(i1707[80], i1707[81], 0, i1706, 'OrangeSmallStrawCup')
  request.r(i1707[82], i1707[83], 0, i1706, 'CherrySmallStrawCup')
  request.r(i1707[84], i1707[85], 0, i1706, 'MultifruitSmallStrawCup')
  request.r(i1707[86], i1707[87], 0, i1706, 'AppleSmallBallsCup')
  request.r(i1707[88], i1707[89], 0, i1706, 'TomatoSmallBallsCup')
  request.r(i1707[90], i1707[91], 0, i1706, 'OrangeSmallBallsCup')
  request.r(i1707[92], i1707[93], 0, i1706, 'CherrySmallBallsCup')
  request.r(i1707[94], i1707[95], 0, i1706, 'MultifruitSmallBallsCup')
  request.r(i1707[96], i1707[97], 0, i1706, 'JuiceBallAdditive')
  request.r(i1707[98], i1707[99], 0, i1706, 'IceAdditive')
  request.r(i1707[100], i1707[101], 0, i1706, 'GrassAdditive')
  return i1706
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i1708 = root || request.c( 'TouchIdleTimer' )
  var i1709 = data
  return i1708
}

Deserializers["Helper"] = function (request, data, root) {
  var i1710 = root || request.c( 'Helper' )
  var i1711 = data
  request.r(i1711[0], i1711[1], 0, i1710, '_smallCupFinger')
  request.r(i1711[2], i1711[3], 0, i1710, '_middleCupFinger')
  request.r(i1711[4], i1711[5], 0, i1710, '_bigCupFinger')
  request.r(i1711[6], i1711[7], 0, i1710, '_iceFinger')
  request.r(i1711[8], i1711[9], 0, i1710, '_grassFinger')
  request.r(i1711[10], i1711[11], 0, i1710, '_juiceballFinger')
  request.r(i1711[12], i1711[13], 0, i1710, '_appleFinger')
  request.r(i1711[14], i1711[15], 0, i1710, '_cherryFinger')
  request.r(i1711[16], i1711[17], 0, i1710, '_orangeFinger')
  request.r(i1711[18], i1711[19], 0, i1710, '_multifruitFinger')
  request.r(i1711[20], i1711[21], 0, i1710, '_tomatoFinger')
  request.r(i1711[22], i1711[23], 0, i1710, '_strawFinger')
  request.r(i1711[24], i1711[25], 0, i1710, '_readyFinger')
  request.r(i1711[26], i1711[27], 0, i1710, '_peoples')
  request.r(i1711[28], i1711[29], 0, i1710, '_tutorial')
  request.r(i1711[30], i1711[31], 0, i1710, '_order')
  request.r(i1711[32], i1711[33], 0, i1710, '_strawButton')
  request.r(i1711[34], i1711[35], 0, i1710, '_bigCupButton')
  request.r(i1711[36], i1711[37], 0, i1710, '_middleCupButton')
  request.r(i1711[38], i1711[39], 0, i1710, '_smallCupButton')
  request.r(i1711[40], i1711[41], 0, i1710, '_readyButton')
  request.r(i1711[42], i1711[43], 0, i1710, '_touchIdleTimer')
  request.r(i1711[44], i1711[45], 0, i1710, '_finalScreen')
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1713 = data
  i1712.ambientIntensity = i1713[0]
  i1712.reflectionIntensity = i1713[1]
  i1712.ambientMode = i1713[2]
  i1712.ambientLight = new pc.Color(i1713[3], i1713[4], i1713[5], i1713[6])
  i1712.ambientSkyColor = new pc.Color(i1713[7], i1713[8], i1713[9], i1713[10])
  i1712.ambientGroundColor = new pc.Color(i1713[11], i1713[12], i1713[13], i1713[14])
  i1712.ambientEquatorColor = new pc.Color(i1713[15], i1713[16], i1713[17], i1713[18])
  i1712.fogColor = new pc.Color(i1713[19], i1713[20], i1713[21], i1713[22])
  i1712.fogEndDistance = i1713[23]
  i1712.fogStartDistance = i1713[24]
  i1712.fogDensity = i1713[25]
  i1712.fog = !!i1713[26]
  request.r(i1713[27], i1713[28], 0, i1712, 'skybox')
  i1712.fogMode = i1713[29]
  var i1715 = i1713[30]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1715[i + 0]) );
  }
  i1712.lightmaps = i1714
  i1712.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1713[31], i1712.lightProbes)
  i1712.lightmapsMode = i1713[32]
  i1712.mixedBakeMode = i1713[33]
  i1712.environmentLightingMode = i1713[34]
  i1712.ambientProbe = new pc.SphericalHarmonicsL2(i1713[35])
  i1712.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1713[36])
  i1712.useReferenceAmbientProbe = !!i1713[37]
  request.r(i1713[38], i1713[39], 0, i1712, 'customReflection')
  request.r(i1713[40], i1713[41], 0, i1712, 'defaultReflection')
  i1712.defaultReflectionMode = i1713[42]
  i1712.defaultReflectionResolution = i1713[43]
  i1712.sunLightObjectId = i1713[44]
  i1712.pixelLightCount = i1713[45]
  i1712.defaultReflectionHDR = !!i1713[46]
  i1712.hasLightDataAsset = !!i1713[47]
  i1712.hasManualGenerate = !!i1713[48]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1719 = data
  request.r(i1719[0], i1719[1], 0, i1718, 'lightmapColor')
  request.r(i1719[2], i1719[3], 0, i1718, 'lightmapDirection')
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1720 = root || new UnityEngine.LightProbes()
  var i1721 = data
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1729 = data
  var i1731 = i1729[0]
  var i1730 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1731[i + 0]));
  }
  i1728.ShaderCompilationErrors = i1730
  i1728.name = i1729[1]
  i1728.guid = i1729[2]
  var i1733 = i1729[3]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( i1733[i + 0] );
  }
  i1728.shaderDefinedKeywords = i1732
  var i1735 = i1729[4]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1735[i + 0]) );
  }
  i1728.passes = i1734
  var i1737 = i1729[5]
  var i1736 = []
  for(var i = 0; i < i1737.length; i += 1) {
    i1736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1737[i + 0]) );
  }
  i1728.usePasses = i1736
  var i1739 = i1729[6]
  var i1738 = []
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1739[i + 0]) );
  }
  i1728.defaultParameterValues = i1738
  request.r(i1729[7], i1729[8], 0, i1728, 'unityFallbackShader')
  i1728.readDepth = !!i1729[9]
  i1728.isCreatedByShaderGraph = !!i1729[10]
  i1728.compiled = !!i1729[11]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1743 = data
  i1742.shaderName = i1743[0]
  i1742.errorMessage = i1743[1]
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1748 = root || new pc.UnityShaderPass()
  var i1749 = data
  i1748.id = i1749[0]
  i1748.subShaderIndex = i1749[1]
  i1748.name = i1749[2]
  i1748.passType = i1749[3]
  i1748.grabPassTextureName = i1749[4]
  i1748.usePass = !!i1749[5]
  i1748.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1749[6], i1748.zTest)
  i1748.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1749[7], i1748.zWrite)
  i1748.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1749[8], i1748.culling)
  i1748.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1749[9], i1748.blending)
  i1748.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1749[10], i1748.alphaBlending)
  i1748.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1749[11], i1748.colorWriteMask)
  i1748.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1749[12], i1748.offsetUnits)
  i1748.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1749[13], i1748.offsetFactor)
  i1748.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1749[14], i1748.stencilRef)
  i1748.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1749[15], i1748.stencilReadMask)
  i1748.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1749[16], i1748.stencilWriteMask)
  i1748.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1749[17], i1748.stencilOp)
  i1748.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1749[18], i1748.stencilOpFront)
  i1748.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1749[19], i1748.stencilOpBack)
  var i1751 = i1749[20]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1751[i + 0]) );
  }
  i1748.tags = i1750
  var i1753 = i1749[21]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.push( i1753[i + 0] );
  }
  i1748.passDefinedKeywords = i1752
  var i1755 = i1749[22]
  var i1754 = []
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1755[i + 0]) );
  }
  i1748.passDefinedKeywordGroups = i1754
  var i1757 = i1749[23]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1757[i + 0]) );
  }
  i1748.variants = i1756
  var i1759 = i1749[24]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1759[i + 0]) );
  }
  i1748.excludedVariants = i1758
  i1748.hasDepthReader = !!i1749[25]
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1761 = data
  i1760.val = i1761[0]
  i1760.name = i1761[1]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1763 = data
  i1762.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1763[0], i1762.src)
  i1762.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1763[1], i1762.dst)
  i1762.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1763[2], i1762.op)
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1765 = data
  i1764.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1765[0], i1764.pass)
  i1764.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1765[1], i1764.fail)
  i1764.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1765[2], i1764.zFail)
  i1764.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1765[3], i1764.comp)
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1769 = data
  i1768.name = i1769[0]
  i1768.value = i1769[1]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1773 = data
  var i1775 = i1773[0]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( i1775[i + 0] );
  }
  i1772.keywords = i1774
  i1772.hasDiscard = !!i1773[1]
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1779 = data
  i1778.passId = i1779[0]
  i1778.subShaderIndex = i1779[1]
  var i1781 = i1779[2]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( i1781[i + 0] );
  }
  i1778.keywords = i1780
  i1778.vertexProgram = i1779[3]
  i1778.fragmentProgram = i1779[4]
  i1778.exportedForWebGl2 = !!i1779[5]
  i1778.readDepth = !!i1779[6]
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1785 = data
  request.r(i1785[0], i1785[1], 0, i1784, 'shader')
  i1784.pass = i1785[2]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1789 = data
  i1788.name = i1789[0]
  i1788.type = i1789[1]
  i1788.value = new pc.Vec4( i1789[2], i1789[3], i1789[4], i1789[5] )
  i1788.textureValue = i1789[6]
  i1788.shaderPropertyFlag = i1789[7]
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1791 = data
  i1790.name = i1791[0]
  request.r(i1791[1], i1791[2], 0, i1790, 'texture')
  i1790.aabb = i1791[3]
  i1790.vertices = i1791[4]
  i1790.triangles = i1791[5]
  i1790.textureRect = UnityEngine.Rect.MinMaxRect(i1791[6], i1791[7], i1791[8], i1791[9])
  i1790.packedRect = UnityEngine.Rect.MinMaxRect(i1791[10], i1791[11], i1791[12], i1791[13])
  i1790.border = new pc.Vec4( i1791[14], i1791[15], i1791[16], i1791[17] )
  i1790.transparency = i1791[18]
  i1790.bounds = i1791[19]
  i1790.pixelsPerUnit = i1791[20]
  i1790.textureWidth = i1791[21]
  i1790.textureHeight = i1791[22]
  i1790.nativeSize = new pc.Vec2( i1791[23], i1791[24] )
  i1790.pivot = new pc.Vec2( i1791[25], i1791[26] )
  i1790.textureRectOffset = new pc.Vec2( i1791[27], i1791[28] )
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1793 = data
  i1792.name = i1793[0]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1795 = data
  i1794.name = i1795[0]
  i1794.wrapMode = i1795[1]
  i1794.isLooping = !!i1795[2]
  i1794.length = i1795[3]
  var i1797 = i1795[4]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1797[i + 0]) );
  }
  i1794.curves = i1796
  var i1799 = i1795[5]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1799[i + 0]) );
  }
  i1794.events = i1798
  i1794.halfPrecision = !!i1795[6]
  i1794._frameRate = i1795[7]
  i1794.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1795[8], i1794.localBounds)
  i1794.hasMuscleCurves = !!i1795[9]
  var i1801 = i1795[10]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.push( i1801[i + 0] );
  }
  i1794.clipMuscleConstant = i1800
  i1794.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1795[11], i1794.clipBindingConstant)
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1805 = data
  i1804.path = i1805[0]
  i1804.hash = i1805[1]
  i1804.componentType = i1805[2]
  i1804.property = i1805[3]
  i1804.keys = i1805[4]
  var i1807 = i1805[5]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1807[i + 0]) );
  }
  i1804.objectReferenceKeys = i1806
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1811 = data
  i1810.time = i1811[0]
  request.r(i1811[1], i1811[2], 0, i1810, 'value')
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1815 = data
  i1814.functionName = i1815[0]
  i1814.floatParameter = i1815[1]
  i1814.intParameter = i1815[2]
  i1814.stringParameter = i1815[3]
  request.r(i1815[4], i1815[5], 0, i1814, 'objectReferenceParameter')
  i1814.time = i1815[6]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1817 = data
  i1816.center = new pc.Vec3( i1817[0], i1817[1], i1817[2] )
  i1816.extends = new pc.Vec3( i1817[3], i1817[4], i1817[5] )
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1821 = data
  var i1823 = i1821[0]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( i1823[i + 0] );
  }
  i1820.genericBindings = i1822
  var i1825 = i1821[1]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( i1825[i + 0] );
  }
  i1820.pptrCurveMapping = i1824
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1827 = data
  i1826.name = i1827[0]
  i1826.ascent = i1827[1]
  i1826.originalLineHeight = i1827[2]
  i1826.fontSize = i1827[3]
  var i1829 = i1827[4]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1829[i + 0]) );
  }
  i1826.characterInfo = i1828
  request.r(i1827[5], i1827[6], 0, i1826, 'texture')
  i1826.originalFontSize = i1827[7]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1833 = data
  i1832.index = i1833[0]
  i1832.advance = i1833[1]
  i1832.bearing = i1833[2]
  i1832.glyphWidth = i1833[3]
  i1832.glyphHeight = i1833[4]
  i1832.minX = i1833[5]
  i1832.maxX = i1833[6]
  i1832.minY = i1833[7]
  i1832.maxY = i1833[8]
  i1832.uvBottomLeftX = i1833[9]
  i1832.uvBottomLeftY = i1833[10]
  i1832.uvBottomRightX = i1833[11]
  i1832.uvBottomRightY = i1833[12]
  i1832.uvTopLeftX = i1833[13]
  i1832.uvTopLeftY = i1833[14]
  i1832.uvTopRightX = i1833[15]
  i1832.uvTopRightY = i1833[16]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1835 = data
  i1834.name = i1835[0]
  var i1837 = i1835[1]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1837[i + 0]) );
  }
  i1834.layers = i1836
  var i1839 = i1835[2]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1839[i + 0]) );
  }
  i1834.parameters = i1838
  i1834.animationClips = i1835[3]
  i1834.avatarUnsupported = i1835[4]
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1843 = data
  i1842.name = i1843[0]
  i1842.defaultWeight = i1843[1]
  i1842.blendingMode = i1843[2]
  i1842.avatarMask = i1843[3]
  i1842.syncedLayerIndex = i1843[4]
  i1842.syncedLayerAffectsTiming = !!i1843[5]
  i1842.syncedLayers = i1843[6]
  i1842.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1843[7], i1842.stateMachine)
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1845 = data
  i1844.id = i1845[0]
  i1844.name = i1845[1]
  i1844.path = i1845[2]
  var i1847 = i1845[3]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1847[i + 0]) );
  }
  i1844.states = i1846
  var i1849 = i1845[4]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1849[i + 0]) );
  }
  i1844.machines = i1848
  var i1851 = i1845[5]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1851[i + 0]) );
  }
  i1844.entryStateTransitions = i1850
  var i1853 = i1845[6]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1853[i + 0]) );
  }
  i1844.exitStateTransitions = i1852
  var i1855 = i1845[7]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1855[i + 0]) );
  }
  i1844.anyStateTransitions = i1854
  i1844.defaultStateId = i1845[8]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1859 = data
  i1858.id = i1859[0]
  i1858.name = i1859[1]
  i1858.cycleOffset = i1859[2]
  i1858.cycleOffsetParameter = i1859[3]
  i1858.cycleOffsetParameterActive = !!i1859[4]
  i1858.mirror = !!i1859[5]
  i1858.mirrorParameter = i1859[6]
  i1858.mirrorParameterActive = !!i1859[7]
  i1858.motionId = i1859[8]
  i1858.nameHash = i1859[9]
  i1858.fullPathHash = i1859[10]
  i1858.speed = i1859[11]
  i1858.speedParameter = i1859[12]
  i1858.speedParameterActive = !!i1859[13]
  i1858.tag = i1859[14]
  i1858.tagHash = i1859[15]
  i1858.writeDefaultValues = !!i1859[16]
  var i1861 = i1859[17]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 2) {
  request.r(i1861[i + 0], i1861[i + 1], 2, i1860, '')
  }
  i1858.behaviours = i1860
  var i1863 = i1859[18]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1863[i + 0]) );
  }
  i1858.transitions = i1862
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1869 = data
  i1868.fullPath = i1869[0]
  i1868.canTransitionToSelf = !!i1869[1]
  i1868.duration = i1869[2]
  i1868.exitTime = i1869[3]
  i1868.hasExitTime = !!i1869[4]
  i1868.hasFixedDuration = !!i1869[5]
  i1868.interruptionSource = i1869[6]
  i1868.offset = i1869[7]
  i1868.orderedInterruption = !!i1869[8]
  i1868.destinationStateId = i1869[9]
  i1868.isExit = !!i1869[10]
  i1868.mute = !!i1869[11]
  i1868.solo = !!i1869[12]
  var i1871 = i1869[13]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1871[i + 0]) );
  }
  i1868.conditions = i1870
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1877 = data
  i1876.destinationStateId = i1877[0]
  i1876.isExit = !!i1877[1]
  i1876.mute = !!i1877[2]
  i1876.solo = !!i1877[3]
  var i1879 = i1877[4]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1879[i + 0]) );
  }
  i1876.conditions = i1878
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1883 = data
  i1882.mode = i1883[0]
  i1882.parameter = i1883[1]
  i1882.threshold = i1883[2]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1887 = data
  i1886.defaultBool = !!i1887[0]
  i1886.defaultFloat = i1887[1]
  i1886.defaultInt = i1887[2]
  i1886.name = i1887[3]
  i1886.nameHash = i1887[4]
  i1886.type = i1887[5]
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1889 = data
  i1888.name = i1889[0]
  i1888.bytes64 = i1889[1]
  i1888.data = i1889[2]
  return i1888
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1890 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1891 = data
  i1890.hashCode = i1891[0]
  request.r(i1891[1], i1891[2], 0, i1890, 'material')
  i1890.materialHashCode = i1891[3]
  request.r(i1891[4], i1891[5], 0, i1890, 'atlas')
  i1890.normalStyle = i1891[6]
  i1890.normalSpacingOffset = i1891[7]
  i1890.boldStyle = i1891[8]
  i1890.boldSpacing = i1891[9]
  i1890.italicStyle = i1891[10]
  i1890.tabSize = i1891[11]
  i1890.m_Version = i1891[12]
  i1890.m_SourceFontFileGUID = i1891[13]
  request.r(i1891[14], i1891[15], 0, i1890, 'm_SourceFontFile_EditorRef')
  request.r(i1891[16], i1891[17], 0, i1890, 'm_SourceFontFile')
  i1890.m_AtlasPopulationMode = i1891[18]
  i1890.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1891[19], i1890.m_FaceInfo)
  var i1893 = i1891[20]
  var i1892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.add(request.d('UnityEngine.TextCore.Glyph', i1893[i + 0]));
  }
  i1890.m_GlyphTable = i1892
  var i1895 = i1891[21]
  var i1894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.add(request.d('TMPro.TMP_Character', i1895[i + 0]));
  }
  i1890.m_CharacterTable = i1894
  var i1897 = i1891[22]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 2) {
  request.r(i1897[i + 0], i1897[i + 1], 2, i1896, '')
  }
  i1890.m_AtlasTextures = i1896
  i1890.m_AtlasTextureIndex = i1891[23]
  i1890.m_IsMultiAtlasTexturesEnabled = !!i1891[24]
  i1890.m_ClearDynamicDataOnBuild = !!i1891[25]
  var i1899 = i1891[26]
  var i1898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.add(request.d('UnityEngine.TextCore.GlyphRect', i1899[i + 0]));
  }
  i1890.m_UsedGlyphRects = i1898
  var i1901 = i1891[27]
  var i1900 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.add(request.d('UnityEngine.TextCore.GlyphRect', i1901[i + 0]));
  }
  i1890.m_FreeGlyphRects = i1900
  i1890.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1891[28], i1890.m_fontInfo)
  i1890.m_AtlasWidth = i1891[29]
  i1890.m_AtlasHeight = i1891[30]
  i1890.m_AtlasPadding = i1891[31]
  i1890.m_AtlasRenderMode = i1891[32]
  var i1903 = i1891[33]
  var i1902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.add(request.d('TMPro.TMP_Glyph', i1903[i + 0]));
  }
  i1890.m_glyphInfoList = i1902
  i1890.m_KerningTable = request.d('TMPro.KerningTable', i1891[34], i1890.m_KerningTable)
  i1890.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1891[35], i1890.m_FontFeatureTable)
  var i1905 = i1891[36]
  var i1904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1905.length; i += 2) {
  request.r(i1905[i + 0], i1905[i + 1], 1, i1904, '')
  }
  i1890.fallbackFontAssets = i1904
  var i1907 = i1891[37]
  var i1906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1907.length; i += 2) {
  request.r(i1907[i + 0], i1907[i + 1], 1, i1906, '')
  }
  i1890.m_FallbackFontAssetTable = i1906
  i1890.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1891[38], i1890.m_CreationSettings)
  var i1909 = i1891[39]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('TMPro.TMP_FontWeightPair', i1909[i + 0]) );
  }
  i1890.m_FontWeightTable = i1908
  var i1911 = i1891[40]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('TMPro.TMP_FontWeightPair', i1911[i + 0]) );
  }
  i1890.fontWeights = i1910
  return i1890
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1912 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1913 = data
  i1912.m_FaceIndex = i1913[0]
  i1912.m_FamilyName = i1913[1]
  i1912.m_StyleName = i1913[2]
  i1912.m_PointSize = i1913[3]
  i1912.m_Scale = i1913[4]
  i1912.m_UnitsPerEM = i1913[5]
  i1912.m_LineHeight = i1913[6]
  i1912.m_AscentLine = i1913[7]
  i1912.m_CapLine = i1913[8]
  i1912.m_MeanLine = i1913[9]
  i1912.m_Baseline = i1913[10]
  i1912.m_DescentLine = i1913[11]
  i1912.m_SuperscriptOffset = i1913[12]
  i1912.m_SuperscriptSize = i1913[13]
  i1912.m_SubscriptOffset = i1913[14]
  i1912.m_SubscriptSize = i1913[15]
  i1912.m_UnderlineOffset = i1913[16]
  i1912.m_UnderlineThickness = i1913[17]
  i1912.m_StrikethroughOffset = i1913[18]
  i1912.m_StrikethroughThickness = i1913[19]
  i1912.m_TabWidth = i1913[20]
  return i1912
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1916 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1917 = data
  i1916.m_Index = i1917[0]
  i1916.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1917[1], i1916.m_Metrics)
  i1916.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1917[2], i1916.m_GlyphRect)
  i1916.m_Scale = i1917[3]
  i1916.m_AtlasIndex = i1917[4]
  i1916.m_ClassDefinitionType = i1917[5]
  return i1916
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1918 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1919 = data
  i1918.m_Width = i1919[0]
  i1918.m_Height = i1919[1]
  i1918.m_HorizontalBearingX = i1919[2]
  i1918.m_HorizontalBearingY = i1919[3]
  i1918.m_HorizontalAdvance = i1919[4]
  return i1918
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1920 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1921 = data
  i1920.m_X = i1921[0]
  i1920.m_Y = i1921[1]
  i1920.m_Width = i1921[2]
  i1920.m_Height = i1921[3]
  return i1920
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1924 = root || request.c( 'TMPro.TMP_Character' )
  var i1925 = data
  i1924.m_ElementType = i1925[0]
  i1924.m_Unicode = i1925[1]
  i1924.m_GlyphIndex = i1925[2]
  i1924.m_Scale = i1925[3]
  return i1924
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1930 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1931 = data
  i1930.Name = i1931[0]
  i1930.PointSize = i1931[1]
  i1930.Scale = i1931[2]
  i1930.CharacterCount = i1931[3]
  i1930.LineHeight = i1931[4]
  i1930.Baseline = i1931[5]
  i1930.Ascender = i1931[6]
  i1930.CapHeight = i1931[7]
  i1930.Descender = i1931[8]
  i1930.CenterLine = i1931[9]
  i1930.SuperscriptOffset = i1931[10]
  i1930.SubscriptOffset = i1931[11]
  i1930.SubSize = i1931[12]
  i1930.Underline = i1931[13]
  i1930.UnderlineThickness = i1931[14]
  i1930.strikethrough = i1931[15]
  i1930.strikethroughThickness = i1931[16]
  i1930.TabWidth = i1931[17]
  i1930.Padding = i1931[18]
  i1930.AtlasWidth = i1931[19]
  i1930.AtlasHeight = i1931[20]
  return i1930
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1934 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1935 = data
  i1934.id = i1935[0]
  i1934.x = i1935[1]
  i1934.y = i1935[2]
  i1934.width = i1935[3]
  i1934.height = i1935[4]
  i1934.xOffset = i1935[5]
  i1934.yOffset = i1935[6]
  i1934.xAdvance = i1935[7]
  i1934.scale = i1935[8]
  return i1934
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1936 = root || request.c( 'TMPro.KerningTable' )
  var i1937 = data
  var i1939 = i1937[0]
  var i1938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1939.length; i += 1) {
    i1938.add(request.d('TMPro.KerningPair', i1939[i + 0]));
  }
  i1936.kerningPairs = i1938
  return i1936
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1942 = root || request.c( 'TMPro.KerningPair' )
  var i1943 = data
  i1942.xOffset = i1943[0]
  i1942.m_FirstGlyph = i1943[1]
  i1942.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1943[2], i1942.m_FirstGlyphAdjustments)
  i1942.m_SecondGlyph = i1943[3]
  i1942.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1943[4], i1942.m_SecondGlyphAdjustments)
  i1942.m_IgnoreSpacingAdjustments = !!i1943[5]
  return i1942
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1944 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1945 = data
  var i1947 = i1945[0]
  var i1946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1947[i + 0]));
  }
  i1944.m_GlyphPairAdjustmentRecords = i1946
  return i1944
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1950 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1951 = data
  i1950.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1951[0], i1950.m_FirstAdjustmentRecord)
  i1950.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1951[1], i1950.m_SecondAdjustmentRecord)
  i1950.m_FeatureLookupFlags = i1951[2]
  return i1950
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1952 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1953 = data
  i1952.m_GlyphIndex = i1953[0]
  i1952.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1953[1], i1952.m_GlyphValueRecord)
  return i1952
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1954 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1955 = data
  i1954.m_XPlacement = i1955[0]
  i1954.m_YPlacement = i1955[1]
  i1954.m_XAdvance = i1955[2]
  i1954.m_YAdvance = i1955[3]
  return i1954
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1958 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1959 = data
  i1958.sourceFontFileName = i1959[0]
  i1958.sourceFontFileGUID = i1959[1]
  i1958.pointSizeSamplingMode = i1959[2]
  i1958.pointSize = i1959[3]
  i1958.padding = i1959[4]
  i1958.packingMode = i1959[5]
  i1958.atlasWidth = i1959[6]
  i1958.atlasHeight = i1959[7]
  i1958.characterSetSelectionMode = i1959[8]
  i1958.characterSequence = i1959[9]
  i1958.referencedFontAssetGUID = i1959[10]
  i1958.referencedTextAssetGUID = i1959[11]
  i1958.fontStyle = i1959[12]
  i1958.fontStyleModifier = i1959[13]
  i1958.renderMode = i1959[14]
  i1958.includeFontFeatures = !!i1959[15]
  return i1958
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1962 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1963 = data
  request.r(i1963[0], i1963[1], 0, i1962, 'regularTypeface')
  request.r(i1963[2], i1963[3], 0, i1962, 'italicTypeface')
  return i1962
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1964 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1965 = data
  i1964.useSafeMode = !!i1965[0]
  i1964.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1965[1], i1964.safeModeOptions)
  i1964.timeScale = i1965[2]
  i1964.unscaledTimeScale = i1965[3]
  i1964.useSmoothDeltaTime = !!i1965[4]
  i1964.maxSmoothUnscaledTime = i1965[5]
  i1964.rewindCallbackMode = i1965[6]
  i1964.showUnityEditorReport = !!i1965[7]
  i1964.logBehaviour = i1965[8]
  i1964.drawGizmos = !!i1965[9]
  i1964.defaultRecyclable = !!i1965[10]
  i1964.defaultAutoPlay = i1965[11]
  i1964.defaultUpdateType = i1965[12]
  i1964.defaultTimeScaleIndependent = !!i1965[13]
  i1964.defaultEaseType = i1965[14]
  i1964.defaultEaseOvershootOrAmplitude = i1965[15]
  i1964.defaultEasePeriod = i1965[16]
  i1964.defaultAutoKill = !!i1965[17]
  i1964.defaultLoopType = i1965[18]
  i1964.debugMode = !!i1965[19]
  i1964.debugStoreTargetId = !!i1965[20]
  i1964.showPreviewPanel = !!i1965[21]
  i1964.storeSettingsLocation = i1965[22]
  i1964.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1965[23], i1964.modules)
  i1964.createASMDEF = !!i1965[24]
  i1964.showPlayingTweens = !!i1965[25]
  i1964.showPausedTweens = !!i1965[26]
  return i1964
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1966 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1967 = data
  i1966.logBehaviour = i1967[0]
  i1966.nestedTweenFailureBehaviour = i1967[1]
  return i1966
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1968 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1969 = data
  i1968.showPanel = !!i1969[0]
  i1968.audioEnabled = !!i1969[1]
  i1968.physicsEnabled = !!i1969[2]
  i1968.physics2DEnabled = !!i1969[3]
  i1968.spriteEnabled = !!i1969[4]
  i1968.uiEnabled = !!i1969[5]
  i1968.textMeshProEnabled = !!i1969[6]
  i1968.tk2DEnabled = !!i1969[7]
  i1968.deAudioEnabled = !!i1969[8]
  i1968.deUnityExtendedEnabled = !!i1969[9]
  i1968.epoOutlineEnabled = !!i1969[10]
  return i1968
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1970 = root || request.c( 'TMPro.TMP_Settings' )
  var i1971 = data
  i1970.m_enableWordWrapping = !!i1971[0]
  i1970.m_enableKerning = !!i1971[1]
  i1970.m_enableExtraPadding = !!i1971[2]
  i1970.m_enableTintAllSprites = !!i1971[3]
  i1970.m_enableParseEscapeCharacters = !!i1971[4]
  i1970.m_EnableRaycastTarget = !!i1971[5]
  i1970.m_GetFontFeaturesAtRuntime = !!i1971[6]
  i1970.m_missingGlyphCharacter = i1971[7]
  i1970.m_warningsDisabled = !!i1971[8]
  request.r(i1971[9], i1971[10], 0, i1970, 'm_defaultFontAsset')
  i1970.m_defaultFontAssetPath = i1971[11]
  i1970.m_defaultFontSize = i1971[12]
  i1970.m_defaultAutoSizeMinRatio = i1971[13]
  i1970.m_defaultAutoSizeMaxRatio = i1971[14]
  i1970.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1971[15], i1971[16] )
  i1970.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1971[17], i1971[18] )
  i1970.m_autoSizeTextContainer = !!i1971[19]
  i1970.m_IsTextObjectScaleStatic = !!i1971[20]
  var i1973 = i1971[21]
  var i1972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1973.length; i += 2) {
  request.r(i1973[i + 0], i1973[i + 1], 1, i1972, '')
  }
  i1970.m_fallbackFontAssets = i1972
  i1970.m_matchMaterialPreset = !!i1971[22]
  request.r(i1971[23], i1971[24], 0, i1970, 'm_defaultSpriteAsset')
  i1970.m_defaultSpriteAssetPath = i1971[25]
  i1970.m_enableEmojiSupport = !!i1971[26]
  i1970.m_MissingCharacterSpriteUnicode = i1971[27]
  i1970.m_defaultColorGradientPresetsPath = i1971[28]
  request.r(i1971[29], i1971[30], 0, i1970, 'm_defaultStyleSheet')
  i1970.m_StyleSheetsResourcePath = i1971[31]
  request.r(i1971[32], i1971[33], 0, i1970, 'm_leadingCharacters')
  request.r(i1971[34], i1971[35], 0, i1970, 'm_followingCharacters')
  i1970.m_UseModernHangulLineBreakingRules = !!i1971[36]
  return i1970
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1974 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1975 = data
  i1974.hashCode = i1975[0]
  request.r(i1975[1], i1975[2], 0, i1974, 'material')
  i1974.materialHashCode = i1975[3]
  request.r(i1975[4], i1975[5], 0, i1974, 'spriteSheet')
  var i1977 = i1975[6]
  var i1976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.add(request.d('TMPro.TMP_Sprite', i1977[i + 0]));
  }
  i1974.spriteInfoList = i1976
  var i1979 = i1975[7]
  var i1978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1979.length; i += 2) {
  request.r(i1979[i + 0], i1979[i + 1], 1, i1978, '')
  }
  i1974.fallbackSpriteAssets = i1978
  i1974.m_Version = i1975[8]
  i1974.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1975[9], i1974.m_FaceInfo)
  var i1981 = i1975[10]
  var i1980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.add(request.d('TMPro.TMP_SpriteCharacter', i1981[i + 0]));
  }
  i1974.m_SpriteCharacterTable = i1980
  var i1983 = i1975[11]
  var i1982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.add(request.d('TMPro.TMP_SpriteGlyph', i1983[i + 0]));
  }
  i1974.m_SpriteGlyphTable = i1982
  return i1974
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1986 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1987 = data
  i1986.name = i1987[0]
  i1986.hashCode = i1987[1]
  i1986.unicode = i1987[2]
  i1986.pivot = new pc.Vec2( i1987[3], i1987[4] )
  request.r(i1987[5], i1987[6], 0, i1986, 'sprite')
  i1986.id = i1987[7]
  i1986.x = i1987[8]
  i1986.y = i1987[9]
  i1986.width = i1987[10]
  i1986.height = i1987[11]
  i1986.xOffset = i1987[12]
  i1986.yOffset = i1987[13]
  i1986.xAdvance = i1987[14]
  i1986.scale = i1987[15]
  return i1986
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1992 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1993 = data
  i1992.m_Name = i1993[0]
  i1992.m_HashCode = i1993[1]
  i1992.m_ElementType = i1993[2]
  i1992.m_Unicode = i1993[3]
  i1992.m_GlyphIndex = i1993[4]
  i1992.m_Scale = i1993[5]
  return i1992
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1996 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1997 = data
  request.r(i1997[0], i1997[1], 0, i1996, 'sprite')
  i1996.m_Index = i1997[2]
  i1996.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1997[3], i1996.m_Metrics)
  i1996.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1997[4], i1996.m_GlyphRect)
  i1996.m_Scale = i1997[5]
  i1996.m_AtlasIndex = i1997[6]
  i1996.m_ClassDefinitionType = i1997[7]
  return i1996
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1998 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1999 = data
  var i2001 = i1999[0]
  var i2000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.add(request.d('TMPro.TMP_Style', i2001[i + 0]));
  }
  i1998.m_StyleList = i2000
  return i1998
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2004 = root || request.c( 'TMPro.TMP_Style' )
  var i2005 = data
  i2004.m_Name = i2005[0]
  i2004.m_HashCode = i2005[1]
  i2004.m_OpeningDefinition = i2005[2]
  i2004.m_ClosingDefinition = i2005[3]
  i2004.m_OpeningTagArray = i2005[4]
  i2004.m_ClosingTagArray = i2005[5]
  i2004.m_OpeningTagUnicodeArray = i2005[6]
  i2004.m_ClosingTagUnicodeArray = i2005[7]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2007 = data
  var i2009 = i2007[0]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2009[i + 0]) );
  }
  i2006.files = i2008
  i2006.componentToPrefabIds = i2007[1]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2013 = data
  i2012.path = i2013[0]
  request.r(i2013[1], i2013[2], 0, i2012, 'unityObject')
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2015 = data
  var i2017 = i2015[0]
  var i2016 = []
  for(var i = 0; i < i2017.length; i += 1) {
    i2016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2017[i + 0]) );
  }
  i2014.scriptsExecutionOrder = i2016
  var i2019 = i2015[1]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 1) {
    i2018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2019[i + 0]) );
  }
  i2014.sortingLayers = i2018
  var i2021 = i2015[2]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2021[i + 0]) );
  }
  i2014.cullingLayers = i2020
  i2014.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2015[3], i2014.timeSettings)
  i2014.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2015[4], i2014.physicsSettings)
  i2014.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2015[5], i2014.physics2DSettings)
  i2014.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2015[6], i2014.qualitySettings)
  i2014.enableRealtimeShadows = !!i2015[7]
  i2014.enableAutoInstancing = !!i2015[8]
  i2014.enableDynamicBatching = !!i2015[9]
  i2014.lightmapEncodingQuality = i2015[10]
  i2014.desiredColorSpace = i2015[11]
  var i2023 = i2015[12]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( i2023[i + 0] );
  }
  i2014.allTags = i2022
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2027 = data
  i2026.name = i2027[0]
  i2026.value = i2027[1]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2031 = data
  i2030.id = i2031[0]
  i2030.name = i2031[1]
  i2030.value = i2031[2]
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2035 = data
  i2034.id = i2035[0]
  i2034.name = i2035[1]
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2037 = data
  i2036.fixedDeltaTime = i2037[0]
  i2036.maximumDeltaTime = i2037[1]
  i2036.timeScale = i2037[2]
  i2036.maximumParticleTimestep = i2037[3]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2039 = data
  i2038.gravity = new pc.Vec3( i2039[0], i2039[1], i2039[2] )
  i2038.defaultSolverIterations = i2039[3]
  i2038.bounceThreshold = i2039[4]
  i2038.autoSyncTransforms = !!i2039[5]
  i2038.autoSimulation = !!i2039[6]
  var i2041 = i2039[7]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2041[i + 0]) );
  }
  i2038.collisionMatrix = i2040
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2045 = data
  i2044.enabled = !!i2045[0]
  i2044.layerId = i2045[1]
  i2044.otherLayerId = i2045[2]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2047 = data
  request.r(i2047[0], i2047[1], 0, i2046, 'material')
  i2046.gravity = new pc.Vec2( i2047[2], i2047[3] )
  i2046.positionIterations = i2047[4]
  i2046.velocityIterations = i2047[5]
  i2046.velocityThreshold = i2047[6]
  i2046.maxLinearCorrection = i2047[7]
  i2046.maxAngularCorrection = i2047[8]
  i2046.maxTranslationSpeed = i2047[9]
  i2046.maxRotationSpeed = i2047[10]
  i2046.baumgarteScale = i2047[11]
  i2046.baumgarteTOIScale = i2047[12]
  i2046.timeToSleep = i2047[13]
  i2046.linearSleepTolerance = i2047[14]
  i2046.angularSleepTolerance = i2047[15]
  i2046.defaultContactOffset = i2047[16]
  i2046.autoSimulation = !!i2047[17]
  i2046.queriesHitTriggers = !!i2047[18]
  i2046.queriesStartInColliders = !!i2047[19]
  i2046.callbacksOnDisable = !!i2047[20]
  i2046.reuseCollisionCallbacks = !!i2047[21]
  i2046.autoSyncTransforms = !!i2047[22]
  var i2049 = i2047[23]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2049[i + 0]) );
  }
  i2046.collisionMatrix = i2048
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2053 = data
  i2052.enabled = !!i2053[0]
  i2052.layerId = i2053[1]
  i2052.otherLayerId = i2053[2]
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2055 = data
  var i2057 = i2055[0]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2057[i + 0]) );
  }
  i2054.qualityLevels = i2056
  var i2059 = i2055[1]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( i2059[i + 0] );
  }
  i2054.names = i2058
  i2054.shadows = i2055[2]
  i2054.anisotropicFiltering = i2055[3]
  i2054.antiAliasing = i2055[4]
  i2054.lodBias = i2055[5]
  i2054.shadowCascades = i2055[6]
  i2054.shadowDistance = i2055[7]
  i2054.shadowmaskMode = i2055[8]
  i2054.shadowProjection = i2055[9]
  i2054.shadowResolution = i2055[10]
  i2054.softParticles = !!i2055[11]
  i2054.softVegetation = !!i2055[12]
  i2054.activeColorSpace = i2055[13]
  i2054.desiredColorSpace = i2055[14]
  i2054.masterTextureLimit = i2055[15]
  i2054.maxQueuedFrames = i2055[16]
  i2054.particleRaycastBudget = i2055[17]
  i2054.pixelLightCount = i2055[18]
  i2054.realtimeReflectionProbes = !!i2055[19]
  i2054.shadowCascade2Split = i2055[20]
  i2054.shadowCascade4Split = new pc.Vec3( i2055[21], i2055[22], i2055[23] )
  i2054.streamingMipmapsActive = !!i2055[24]
  i2054.vSyncCount = i2055[25]
  i2054.asyncUploadBufferSize = i2055[26]
  i2054.asyncUploadTimeSlice = i2055[27]
  i2054.billboardsFaceCameraPosition = !!i2055[28]
  i2054.shadowNearPlaneOffset = i2055[29]
  i2054.streamingMipmapsMemoryBudget = i2055[30]
  i2054.maximumLODLevel = i2055[31]
  i2054.streamingMipmapsAddAllCameras = !!i2055[32]
  i2054.streamingMipmapsMaxLevelReduction = i2055[33]
  i2054.streamingMipmapsRenderersPerFrame = i2055[34]
  i2054.resolutionScalingFixedDPIFactor = i2055[35]
  i2054.streamingMipmapsMaxFileIORequests = i2055[36]
  i2054.currentQualityLevel = i2055[37]
  return i2054
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2062 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2063 = data
  i2062.xPlacement = i2063[0]
  i2062.yPlacement = i2063[1]
  i2062.xAdvance = i2063[2]
  i2062.yAdvance = i2063[3]
  return i2062
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[12],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[12],"78":[79],"80":[81],"82":[81],"19":[2],"34":[16],"83":[2],"84":[85],"86":[87],"88":[85],"89":[2],"90":[2],"21":[19],"6":[3,2],"91":[2],"20":[19],"30":[2],"92":[2],"93":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[2],"100":[3,2],"101":[2],"102":[2],"103":[2],"104":[2],"105":[3,2],"106":[2],"107":[36],"108":[36],"37":[36],"109":[36],"110":[12],"111":[12],"112":[113],"114":[12],"115":[2],"116":[79,2],"17":[2,3],"117":[2],"118":[3,2],"119":[79],"120":[3,2],"121":[2],"122":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","TMPro.TMP_FontAsset","UnityEngine.Material","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","SoundSwitcher","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "5.9";

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

Deserializers.buildID = "ed2e5abf-5e75-4f2b-bfde-ee3d23b79356";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

