var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.JointSpring' )
  var i1543 = data
  i1542.spring = i1543[0]
  i1542.damper = i1543[1]
  i1542.targetPosition = i1543[2]
  return i1542
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1544 = root || request.c( 'UnityEngine.JointMotor' )
  var i1545 = data
  i1544.m_TargetVelocity = i1545[0]
  i1544.m_Force = i1545[1]
  i1544.m_FreeSpin = i1545[2]
  return i1544
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1546 = root || request.c( 'UnityEngine.JointLimits' )
  var i1547 = data
  i1546.m_Min = i1547[0]
  i1546.m_Max = i1547[1]
  i1546.m_Bounciness = i1547[2]
  i1546.m_BounceMinVelocity = i1547[3]
  i1546.m_ContactDistance = i1547[4]
  i1546.minBounce = i1547[5]
  i1546.maxBounce = i1547[6]
  return i1546
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1548 = root || request.c( 'UnityEngine.JointDrive' )
  var i1549 = data
  i1548.m_PositionSpring = i1549[0]
  i1548.m_PositionDamper = i1549[1]
  i1548.m_MaximumForce = i1549[2]
  i1548.m_UseAcceleration = i1549[3]
  return i1548
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1550 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1551 = data
  i1550.m_Spring = i1551[0]
  i1550.m_Damper = i1551[1]
  return i1550
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1553 = data
  i1552.m_Limit = i1553[0]
  i1552.m_Bounciness = i1553[1]
  i1552.m_ContactDistance = i1553[2]
  return i1552
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1554 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1555 = data
  i1554.m_ExtremumSlip = i1555[0]
  i1554.m_ExtremumValue = i1555[1]
  i1554.m_AsymptoteSlip = i1555[2]
  i1554.m_AsymptoteValue = i1555[3]
  i1554.m_Stiffness = i1555[4]
  return i1554
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1556 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1557 = data
  i1556.m_LowerAngle = i1557[0]
  i1556.m_UpperAngle = i1557[1]
  return i1556
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1558 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1559 = data
  i1558.m_MotorSpeed = i1559[0]
  i1558.m_MaximumMotorTorque = i1559[1]
  return i1558
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1560 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1561 = data
  i1560.m_DampingRatio = i1561[0]
  i1560.m_Frequency = i1561[1]
  i1560.m_Angle = i1561[2]
  return i1560
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1562 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1563 = data
  i1562.m_LowerTranslation = i1563[0]
  i1562.m_UpperTranslation = i1563[1]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1565 = data
  i1564.name = i1565[0]
  i1564.width = i1565[1]
  i1564.height = i1565[2]
  i1564.mipmapCount = i1565[3]
  i1564.anisoLevel = i1565[4]
  i1564.filterMode = i1565[5]
  i1564.hdr = !!i1565[6]
  i1564.format = i1565[7]
  i1564.wrapMode = i1565[8]
  i1564.alphaIsTransparency = !!i1565[9]
  i1564.alphaSource = i1565[10]
  i1564.graphicsFormat = i1565[11]
  i1564.sRGBTexture = !!i1565[12]
  i1564.desiredColorSpace = i1565[13]
  i1564.wrapU = i1565[14]
  i1564.wrapV = i1565[15]
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1566 = root || new pc.UnityMaterial()
  var i1567 = data
  i1566.name = i1567[0]
  request.r(i1567[1], i1567[2], 0, i1566, 'shader')
  i1566.renderQueue = i1567[3]
  i1566.enableInstancing = !!i1567[4]
  var i1569 = i1567[5]
  var i1568 = []
  for(var i = 0; i < i1569.length; i += 1) {
    i1568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1569[i + 0]) );
  }
  i1566.floatParameters = i1568
  var i1571 = i1567[6]
  var i1570 = []
  for(var i = 0; i < i1571.length; i += 1) {
    i1570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1571[i + 0]) );
  }
  i1566.colorParameters = i1570
  var i1573 = i1567[7]
  var i1572 = []
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1573[i + 0]) );
  }
  i1566.vectorParameters = i1572
  var i1575 = i1567[8]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1575[i + 0]) );
  }
  i1566.textureParameters = i1574
  var i1577 = i1567[9]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1577[i + 0]) );
  }
  i1566.materialFlags = i1576
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1581 = data
  i1580.name = i1581[0]
  i1580.value = i1581[1]
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1585 = data
  i1584.name = i1585[0]
  i1584.value = new pc.Color(i1585[1], i1585[2], i1585[3], i1585[4])
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1589 = data
  i1588.name = i1589[0]
  i1588.value = new pc.Vec4( i1589[1], i1589[2], i1589[3], i1589[4] )
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1593 = data
  i1592.name = i1593[0]
  request.r(i1593[1], i1593[2], 0, i1592, 'value')
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1597 = data
  i1596.name = i1597[0]
  i1596.enabled = !!i1597[1]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1599 = data
  i1598.pivot = new pc.Vec2( i1599[0], i1599[1] )
  i1598.anchorMin = new pc.Vec2( i1599[2], i1599[3] )
  i1598.anchorMax = new pc.Vec2( i1599[4], i1599[5] )
  i1598.sizeDelta = new pc.Vec2( i1599[6], i1599[7] )
  i1598.anchoredPosition3D = new pc.Vec3( i1599[8], i1599[9], i1599[10] )
  i1598.rotation = new pc.Quat(i1599[11], i1599[12], i1599[13], i1599[14])
  i1598.scale = new pc.Vec3( i1599[15], i1599[16], i1599[17] )
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1601 = data
  i1600.cullTransparentMesh = !!i1601[0]
  return i1600
}

Deserializers["People"] = function (request, data, root) {
  var i1602 = root || request.c( 'People' )
  var i1603 = data
  request.r(i1603[0], i1603[1], 0, i1602, '_readyImage')
  request.r(i1603[2], i1603[3], 0, i1602, '_additiveImage1')
  request.r(i1603[4], i1603[5], 0, i1602, '_additiveImage2')
  request.r(i1603[6], i1603[7], 0, i1602, '_endPoint')
  request.r(i1603[8], i1603[9], 0, i1602, 'Bank')
  request.r(i1603[10], i1603[11], 0, i1602, '_sizeText')
  i1602.CupType = i1603[12]
  i1602.JuiceType = i1603[13]
  i1602.AdditiveType1 = i1603[14]
  i1602.AdditiveType2 = i1603[15]
  request.r(i1603[16], i1603[17], 0, i1602, '_finishSound')
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1605 = data
  request.r(i1605[0], i1605[1], 0, i1604, 'clip')
  request.r(i1605[2], i1605[3], 0, i1604, 'outputAudioMixerGroup')
  i1604.playOnAwake = !!i1605[4]
  i1604.loop = !!i1605[5]
  i1604.time = i1605[6]
  i1604.volume = i1605[7]
  i1604.pitch = i1605[8]
  i1604.enabled = !!i1605[9]
  return i1604
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1606 = root || request.c( 'UnityEngine.UI.Image' )
  var i1607 = data
  request.r(i1607[0], i1607[1], 0, i1606, 'm_Sprite')
  i1606.m_Type = i1607[2]
  i1606.m_PreserveAspect = !!i1607[3]
  i1606.m_FillCenter = !!i1607[4]
  i1606.m_FillMethod = i1607[5]
  i1606.m_FillAmount = i1607[6]
  i1606.m_FillClockwise = !!i1607[7]
  i1606.m_FillOrigin = i1607[8]
  i1606.m_UseSpriteMesh = !!i1607[9]
  i1606.m_PixelsPerUnitMultiplier = i1607[10]
  request.r(i1607[11], i1607[12], 0, i1606, 'm_Material')
  i1606.m_Maskable = !!i1607[13]
  i1606.m_Color = new pc.Color(i1607[14], i1607[15], i1607[16], i1607[17])
  i1606.m_RaycastTarget = !!i1607[18]
  i1606.m_RaycastPadding = new pc.Vec4( i1607[19], i1607[20], i1607[21], i1607[22] )
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1609 = data
  i1608.name = i1609[0]
  i1608.tagId = i1609[1]
  i1608.enabled = !!i1609[2]
  i1608.isStatic = !!i1609[3]
  i1608.layer = i1609[4]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1611 = data
  i1610.name = i1611[0]
  i1610.index = i1611[1]
  i1610.startup = !!i1611[2]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1613 = data
  i1612.position = new pc.Vec3( i1613[0], i1613[1], i1613[2] )
  i1612.scale = new pc.Vec3( i1613[3], i1613[4], i1613[5] )
  i1612.rotation = new pc.Quat(i1613[6], i1613[7], i1613[8], i1613[9])
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1615 = data
  i1614.enabled = !!i1615[0]
  i1614.aspect = i1615[1]
  i1614.orthographic = !!i1615[2]
  i1614.orthographicSize = i1615[3]
  i1614.backgroundColor = new pc.Color(i1615[4], i1615[5], i1615[6], i1615[7])
  i1614.nearClipPlane = i1615[8]
  i1614.farClipPlane = i1615[9]
  i1614.fieldOfView = i1615[10]
  i1614.depth = i1615[11]
  i1614.clearFlags = i1615[12]
  i1614.cullingMask = i1615[13]
  i1614.rect = i1615[14]
  request.r(i1615[15], i1615[16], 0, i1614, 'targetTexture')
  i1614.usePhysicalProperties = !!i1615[17]
  i1614.focalLength = i1615[18]
  i1614.sensorSize = new pc.Vec2( i1615[19], i1615[20] )
  i1614.lensShift = new pc.Vec2( i1615[21], i1615[22] )
  i1614.gateFit = i1615[23]
  i1614.commandBufferCount = i1615[24]
  i1614.cameraType = i1615[25]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1617 = data
  request.r(i1617[0], i1617[1], 0, i1616, 'animatorController')
  request.r(i1617[2], i1617[3], 0, i1616, 'avatar')
  i1616.updateMode = i1617[4]
  i1616.hasTransformHierarchy = !!i1617[5]
  i1616.applyRootMotion = !!i1617[6]
  var i1619 = i1617[7]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 2) {
  request.r(i1619[i + 0], i1619[i + 1], 2, i1618, '')
  }
  i1616.humanBones = i1618
  i1616.enabled = !!i1617[8]
  return i1616
}

Deserializers["Bank"] = function (request, data, root) {
  var i1622 = root || request.c( 'Bank' )
  var i1623 = data
  request.r(i1623[0], i1623[1], 0, i1622, 'BuyBigCupButton')
  request.r(i1623[2], i1623[3], 0, i1622, 'BigCupButton')
  request.r(i1623[4], i1623[5], 0, i1622, 'MiddleCupButton')
  request.r(i1623[6], i1623[7], 0, i1622, 'MoneyText')
  request.r(i1623[8], i1623[9], 0, i1622, 'Tutorial')
  request.r(i1623[10], i1623[11], 0, i1622, 'BuyAdditiveButton')
  request.r(i1623[12], i1623[13], 0, i1622, 'BuyJuiceButton')
  request.r(i1623[14], i1623[15], 0, i1622, 'JuiceButton1')
  request.r(i1623[16], i1623[17], 0, i1622, 'JuiceButton2')
  request.r(i1623[18], i1623[19], 0, i1622, 'JuiceButton3')
  request.r(i1623[20], i1623[21], 0, i1622, 'Additive1Button')
  request.r(i1623[22], i1623[23], 0, i1622, 'Additive2Button')
  i1622.Money = i1623[24]
  i1622.IsBigCupBuy = !!i1623[25]
  i1622.IsJuiceBuy = !!i1623[26]
  i1622.IsAdditiveBuy = !!i1623[27]
  request.r(i1623[28], i1623[29], 0, i1622, '_buySound')
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1625 = data
  i1624.enabled = !!i1625[0]
  i1624.planeDistance = i1625[1]
  i1624.referencePixelsPerUnit = i1625[2]
  i1624.isFallbackOverlay = !!i1625[3]
  i1624.renderMode = i1625[4]
  i1624.renderOrder = i1625[5]
  i1624.sortingLayerName = i1625[6]
  i1624.sortingOrder = i1625[7]
  i1624.scaleFactor = i1625[8]
  request.r(i1625[9], i1625[10], 0, i1624, 'worldCamera')
  i1624.overrideSorting = !!i1625[11]
  i1624.pixelPerfect = !!i1625[12]
  i1624.targetDisplay = i1625[13]
  i1624.overridePixelPerfect = !!i1625[14]
  return i1624
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1627 = data
  i1626.m_UiScaleMode = i1627[0]
  i1626.m_ReferencePixelsPerUnit = i1627[1]
  i1626.m_ScaleFactor = i1627[2]
  i1626.m_ReferenceResolution = new pc.Vec2( i1627[3], i1627[4] )
  i1626.m_ScreenMatchMode = i1627[5]
  i1626.m_MatchWidthOrHeight = i1627[6]
  i1626.m_PhysicalUnit = i1627[7]
  i1626.m_FallbackScreenDPI = i1627[8]
  i1626.m_DefaultSpriteDPI = i1627[9]
  i1626.m_DynamicPixelsPerUnit = i1627[10]
  i1626.m_PresetInfoIsWorld = !!i1627[11]
  return i1626
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1629 = data
  i1628.m_IgnoreReversedGraphics = !!i1629[0]
  i1628.m_BlockingObjects = i1629[1]
  i1628.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1629[2] )
  return i1628
}

Deserializers["ImageShiftOnOrientation"] = function (request, data, root) {
  var i1630 = root || request.c( 'ImageShiftOnOrientation' )
  var i1631 = data
  var i1633 = i1631[0]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.push( request.d('ItemSwitcherData', i1633[i + 0]) );
  }
  i1630.Items = i1632
  request.r(i1631[1], i1631[2], 0, i1630, '_backHorizontal')
  request.r(i1631[3], i1631[4], 0, i1630, '_backVertical')
  request.r(i1631[5], i1631[6], 0, i1630, '_tableHorizontal')
  request.r(i1631[7], i1631[8], 0, i1630, '_tableVertical')
  i1630.IsDebug = !!i1631[9]
  i1630.CanCopy = !!i1631[10]
  return i1630
}

Deserializers["ItemSwitcherData"] = function (request, data, root) {
  var i1636 = root || request.c( 'ItemSwitcherData' )
  var i1637 = data
  request.r(i1637[0], i1637[1], 0, i1636, 'Target')
  i1636.HorizontalAnchoredPosition = new pc.Vec2( i1637[2], i1637[3] )
  i1636.SizeHorizontal = new pc.Vec2( i1637[4], i1637[5] )
  i1636.VerticalAnchoredPosition = new pc.Vec2( i1637[6], i1637[7] )
  i1636.SizeVertical = new pc.Vec2( i1637[8], i1637[9] )
  i1636.MinHorizontal = new pc.Vec2( i1637[10], i1637[11] )
  i1636.MaxHorizontal = new pc.Vec2( i1637[12], i1637[13] )
  i1636.MinVertical = new pc.Vec2( i1637[14], i1637[15] )
  i1636.MaxVertical = new pc.Vec2( i1637[16], i1637[17] )
  i1636.IsAnchored = !!i1637[18]
  i1636.IsDebug = !!i1637[19]
  i1636.CopyHorizontal = !!i1637[20]
  i1636.CopyVertical = !!i1637[21]
  return i1636
}

Deserializers["Point"] = function (request, data, root) {
  var i1638 = root || request.c( 'Point' )
  var i1639 = data
  return i1638
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1640 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1641 = data
  i1640.m_hasFontAssetChanged = !!i1641[0]
  request.r(i1641[1], i1641[2], 0, i1640, 'm_baseMaterial')
  i1640.m_maskOffset = new pc.Vec4( i1641[3], i1641[4], i1641[5], i1641[6] )
  i1640.m_text = i1641[7]
  i1640.m_isRightToLeft = !!i1641[8]
  request.r(i1641[9], i1641[10], 0, i1640, 'm_fontAsset')
  request.r(i1641[11], i1641[12], 0, i1640, 'm_sharedMaterial')
  var i1643 = i1641[13]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 2) {
  request.r(i1643[i + 0], i1643[i + 1], 2, i1642, '')
  }
  i1640.m_fontSharedMaterials = i1642
  request.r(i1641[14], i1641[15], 0, i1640, 'm_fontMaterial')
  var i1645 = i1641[16]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 2) {
  request.r(i1645[i + 0], i1645[i + 1], 2, i1644, '')
  }
  i1640.m_fontMaterials = i1644
  i1640.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1641[17], i1641[18], i1641[19], i1641[20])
  i1640.m_fontColor = new pc.Color(i1641[21], i1641[22], i1641[23], i1641[24])
  i1640.m_enableVertexGradient = !!i1641[25]
  i1640.m_colorMode = i1641[26]
  i1640.m_fontColorGradient = request.d('TMPro.VertexGradient', i1641[27], i1640.m_fontColorGradient)
  request.r(i1641[28], i1641[29], 0, i1640, 'm_fontColorGradientPreset')
  request.r(i1641[30], i1641[31], 0, i1640, 'm_spriteAsset')
  i1640.m_tintAllSprites = !!i1641[32]
  request.r(i1641[33], i1641[34], 0, i1640, 'm_StyleSheet')
  i1640.m_TextStyleHashCode = i1641[35]
  i1640.m_overrideHtmlColors = !!i1641[36]
  i1640.m_faceColor = UnityEngine.Color32.ConstructColor(i1641[37], i1641[38], i1641[39], i1641[40])
  i1640.m_fontSize = i1641[41]
  i1640.m_fontSizeBase = i1641[42]
  i1640.m_fontWeight = i1641[43]
  i1640.m_enableAutoSizing = !!i1641[44]
  i1640.m_fontSizeMin = i1641[45]
  i1640.m_fontSizeMax = i1641[46]
  i1640.m_fontStyle = i1641[47]
  i1640.m_HorizontalAlignment = i1641[48]
  i1640.m_VerticalAlignment = i1641[49]
  i1640.m_textAlignment = i1641[50]
  i1640.m_characterSpacing = i1641[51]
  i1640.m_wordSpacing = i1641[52]
  i1640.m_lineSpacing = i1641[53]
  i1640.m_lineSpacingMax = i1641[54]
  i1640.m_paragraphSpacing = i1641[55]
  i1640.m_charWidthMaxAdj = i1641[56]
  i1640.m_enableWordWrapping = !!i1641[57]
  i1640.m_wordWrappingRatios = i1641[58]
  i1640.m_overflowMode = i1641[59]
  request.r(i1641[60], i1641[61], 0, i1640, 'm_linkedTextComponent')
  request.r(i1641[62], i1641[63], 0, i1640, 'parentLinkedComponent')
  i1640.m_enableKerning = !!i1641[64]
  i1640.m_enableExtraPadding = !!i1641[65]
  i1640.checkPaddingRequired = !!i1641[66]
  i1640.m_isRichText = !!i1641[67]
  i1640.m_parseCtrlCharacters = !!i1641[68]
  i1640.m_isOrthographic = !!i1641[69]
  i1640.m_isCullingEnabled = !!i1641[70]
  i1640.m_horizontalMapping = i1641[71]
  i1640.m_verticalMapping = i1641[72]
  i1640.m_uvLineOffset = i1641[73]
  i1640.m_geometrySortingOrder = i1641[74]
  i1640.m_IsTextObjectScaleStatic = !!i1641[75]
  i1640.m_VertexBufferAutoSizeReduction = !!i1641[76]
  i1640.m_useMaxVisibleDescender = !!i1641[77]
  i1640.m_pageToDisplay = i1641[78]
  i1640.m_margin = new pc.Vec4( i1641[79], i1641[80], i1641[81], i1641[82] )
  i1640.m_isUsingLegacyAnimationComponent = !!i1641[83]
  i1640.m_isVolumetricText = !!i1641[84]
  request.r(i1641[85], i1641[86], 0, i1640, 'm_Material')
  i1640.m_Maskable = !!i1641[87]
  i1640.m_Color = new pc.Color(i1641[88], i1641[89], i1641[90], i1641[91])
  i1640.m_RaycastTarget = !!i1641[92]
  i1640.m_RaycastPadding = new pc.Vec4( i1641[93], i1641[94], i1641[95], i1641[96] )
  return i1640
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1648 = root || request.c( 'TMPro.VertexGradient' )
  var i1649 = data
  i1648.topLeft = new pc.Color(i1649[0], i1649[1], i1649[2], i1649[3])
  i1648.topRight = new pc.Color(i1649[4], i1649[5], i1649[6], i1649[7])
  i1648.bottomLeft = new pc.Color(i1649[8], i1649[9], i1649[10], i1649[11])
  i1648.bottomRight = new pc.Color(i1649[12], i1649[13], i1649[14], i1649[15])
  return i1648
}

Deserializers["PeopleContainer"] = function (request, data, root) {
  var i1650 = root || request.c( 'PeopleContainer' )
  var i1651 = data
  var i1653 = i1651[0]
  var i1652 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1653.length; i += 2) {
  request.r(i1653[i + 0], i1653[i + 1], 1, i1652, '')
  }
  i1650.CurrentPeoples = i1652
  var i1655 = i1651[1]
  var i1654 = new (System.Collections.Generic.List$1(Bridge.ns('People')))
  for(var i = 0; i < i1655.length; i += 2) {
  request.r(i1655[i + 0], i1655[i + 1], 1, i1654, '')
  }
  i1650._peoples = i1654
  request.r(i1651[2], i1651[3], 0, i1650, '_tutorialPeople')
  request.r(i1651[4], i1651[5], 0, i1650, '_spawnPoint')
  request.r(i1651[6], i1651[7], 0, i1650, '_point1')
  request.r(i1651[8], i1651[9], 0, i1650, '_point2')
  request.r(i1651[10], i1651[11], 0, i1650, '_endPoint')
  request.r(i1651[12], i1651[13], 0, i1650, '_juiceConfig')
  request.r(i1651[14], i1651[15], 0, i1650, '_tutorial')
  return i1650
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1659 = data
  i1658.m_HorizontalFit = i1659[0]
  i1658.m_VerticalFit = i1659[1]
  return i1658
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1660 = root || request.c( 'UnityEngine.UI.Button' )
  var i1661 = data
  i1660.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1661[0], i1660.m_OnClick)
  i1660.m_Navigation = request.d('UnityEngine.UI.Navigation', i1661[1], i1660.m_Navigation)
  i1660.m_Transition = i1661[2]
  i1660.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1661[3], i1660.m_Colors)
  i1660.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1661[4], i1660.m_SpriteState)
  i1660.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1661[5], i1660.m_AnimationTriggers)
  i1660.m_Interactable = !!i1661[6]
  request.r(i1661[7], i1661[8], 0, i1660, 'm_TargetGraphic')
  return i1660
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1663 = data
  i1662.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1663[0], i1662.m_PersistentCalls)
  return i1662
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1665 = data
  var i1667 = i1665[0]
  var i1666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.add(request.d('UnityEngine.Events.PersistentCall', i1667[i + 0]));
  }
  i1664.m_Calls = i1666
  return i1664
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1671 = data
  request.r(i1671[0], i1671[1], 0, i1670, 'm_Target')
  i1670.m_TargetAssemblyTypeName = i1671[2]
  i1670.m_MethodName = i1671[3]
  i1670.m_Mode = i1671[4]
  i1670.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1671[5], i1670.m_Arguments)
  i1670.m_CallState = i1671[6]
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

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1680 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1681 = data
  request.r(i1681[0], i1681[1], 0, i1680, 'm_ObjectArgument')
  i1680.m_ObjectArgumentAssemblyTypeName = i1681[2]
  i1680.m_IntArgument = i1681[3]
  i1680.m_FloatArgument = i1681[4]
  i1680.m_StringArgument = i1681[5]
  i1680.m_BoolArgument = !!i1681[6]
  return i1680
}

Deserializers["BackImage"] = function (request, data, root) {
  var i1682 = root || request.c( 'BackImage' )
  var i1683 = data
  return i1682
}

Deserializers["AheadImage"] = function (request, data, root) {
  var i1684 = root || request.c( 'AheadImage' )
  var i1685 = data
  return i1684
}

Deserializers["Order"] = function (request, data, root) {
  var i1686 = root || request.c( 'Order' )
  var i1687 = data
  request.r(i1687[0], i1687[1], 0, i1686, '_juiceAnimator')
  request.r(i1687[2], i1687[3], 0, i1686, '_cupAnimator')
  request.r(i1687[4], i1687[5], 0, i1686, '_canvasAnimator')
  i1686.CupType = i1687[6]
  i1686.JuiceType = i1687[7]
  i1686.AdditiveType1 = i1687[8]
  i1686.AdditiveType2 = i1687[9]
  i1686.IsFree = !!i1687[10]
  i1686.IsSpriteReady = !!i1687[11]
  i1686.IsCupReady = !!i1687[12]
  i1686.IsJuiceReady = !!i1687[13]
  i1686.IsPouring = !!i1687[14]
  request.r(i1687[15], i1687[16], 0, i1686, '_iceButton')
  request.r(i1687[17], i1687[18], 0, i1686, '_grassButton')
  request.r(i1687[19], i1687[20], 0, i1686, '_juiceBallsButton')
  request.r(i1687[21], i1687[22], 0, i1686, '_strawButton')
  request.r(i1687[23], i1687[24], 0, i1686, '_bigCupButton')
  request.r(i1687[25], i1687[26], 0, i1686, '_middleCupButton')
  request.r(i1687[27], i1687[28], 0, i1686, '_smallCupButton')
  request.r(i1687[29], i1687[30], 0, i1686, '_appleButton')
  request.r(i1687[31], i1687[32], 0, i1686, '_orangeButton')
  request.r(i1687[33], i1687[34], 0, i1686, '_multifruitButton')
  request.r(i1687[35], i1687[36], 0, i1686, '_tomatoButton')
  request.r(i1687[37], i1687[38], 0, i1686, '_cherryButton')
  request.r(i1687[39], i1687[40], 0, i1686, '_smallRawJuiceImage')
  request.r(i1687[41], i1687[42], 0, i1686, '_middleRawJuiceImage')
  request.r(i1687[43], i1687[44], 0, i1686, '_bigRawJuiceImage')
  request.r(i1687[45], i1687[46], 0, i1686, '_smallReadyJuiceImage')
  request.r(i1687[47], i1687[48], 0, i1686, '_middleReadyJuiceImage')
  request.r(i1687[49], i1687[50], 0, i1686, '_bigReadyJuiceImage')
  request.r(i1687[51], i1687[52], 0, i1686, '_backImage')
  request.r(i1687[53], i1687[54], 0, i1686, '_aheadImage')
  request.r(i1687[55], i1687[56], 0, i1686, '_config')
  request.r(i1687[57], i1687[58], 0, i1686, '_takeOrderButton')
  request.r(i1687[59], i1687[60], 0, i1686, '_peopleContainer')
  request.r(i1687[61], i1687[62], 0, i1686, '_tutorial')
  request.r(i1687[63], i1687[64], 0, i1686, '_bText')
  request.r(i1687[65], i1687[66], 0, i1686, '_mText')
  request.r(i1687[67], i1687[68], 0, i1686, '_sText')
  request.r(i1687[69], i1687[70], 0, i1686, '_clickSound')
  request.r(i1687[71], i1687[72], 0, i1686, '_juiceSound')
  return i1686
}

Deserializers["Tutorial"] = function (request, data, root) {
  var i1688 = root || request.c( 'Tutorial' )
  var i1689 = data
  i1688.IsTutorial = !!i1689[0]
  request.r(i1689[1], i1689[2], 0, i1688, 'Finger1')
  request.r(i1689[3], i1689[4], 0, i1688, 'Finger2')
  request.r(i1689[5], i1689[6], 0, i1688, 'Finger3')
  request.r(i1689[7], i1689[8], 0, i1688, 'Finger4')
  request.r(i1689[9], i1689[10], 0, i1688, 'Finger5')
  request.r(i1689[11], i1689[12], 0, i1688, 'BuyBigCupFinger')
  request.r(i1689[13], i1689[14], 0, i1688, 'BuyJuiceFinger')
  request.r(i1689[15], i1689[16], 0, i1688, 'SmallCupButton')
  request.r(i1689[17], i1689[18], 0, i1688, 'JuiceButton')
  request.r(i1689[19], i1689[20], 0, i1688, 'StrawButton')
  request.r(i1689[21], i1689[22], 0, i1688, 'AdditiveButton')
  request.r(i1689[23], i1689[24], 0, i1688, 'ReadyButton')
  var i1691 = i1689[25]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 2) {
  request.r(i1691[i + 0], i1691[i + 1], 2, i1690, '')
  }
  i1688.Buttons = i1690
  request.r(i1689[26], i1689[27], 0, i1688, 'Bank')
  return i1688
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1695 = data
  request.r(i1695[0], i1695[1], 0, i1694, 'm_FirstSelected')
  i1694.m_sendNavigationEvents = !!i1695[2]
  i1694.m_DragThreshold = i1695[3]
  return i1694
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1696 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1697 = data
  i1696.m_HorizontalAxis = i1697[0]
  i1696.m_VerticalAxis = i1697[1]
  i1696.m_SubmitButton = i1697[2]
  i1696.m_CancelButton = i1697[3]
  i1696.m_InputActionsPerSecond = i1697[4]
  i1696.m_RepeatDelay = i1697[5]
  i1696.m_ForceModuleActive = !!i1697[6]
  i1696.m_SendPointerHoverToParent = !!i1697[7]
  return i1696
}

Deserializers["JuiceConfig"] = function (request, data, root) {
  var i1698 = root || request.c( 'JuiceConfig' )
  var i1699 = data
  request.r(i1699[0], i1699[1], 0, i1698, 'EntityBigCup')
  request.r(i1699[2], i1699[3], 0, i1698, 'TomatoBigCup')
  request.r(i1699[4], i1699[5], 0, i1698, 'AppleBigCup')
  request.r(i1699[6], i1699[7], 0, i1698, 'OrangeBigCup')
  request.r(i1699[8], i1699[9], 0, i1698, 'CherryBigCup')
  request.r(i1699[10], i1699[11], 0, i1698, 'MultifruitBigCup')
  request.r(i1699[12], i1699[13], 0, i1698, 'TomatoBigStrawCup')
  request.r(i1699[14], i1699[15], 0, i1698, 'MultifruitBigStrawCup')
  request.r(i1699[16], i1699[17], 0, i1698, 'AppleBigStrawCup')
  request.r(i1699[18], i1699[19], 0, i1698, 'OrangeBigStrawCup')
  request.r(i1699[20], i1699[21], 0, i1698, 'CherryBigStrawCup')
  request.r(i1699[22], i1699[23], 0, i1698, 'MultifruitBigBallsCup')
  request.r(i1699[24], i1699[25], 0, i1698, 'TomatoBigBallsCup')
  request.r(i1699[26], i1699[27], 0, i1698, 'AppleBigBallsCup')
  request.r(i1699[28], i1699[29], 0, i1698, 'OrangeBigBallsCup')
  request.r(i1699[30], i1699[31], 0, i1698, 'CherryBigBallsCup')
  request.r(i1699[32], i1699[33], 0, i1698, 'EntityMiddleCup')
  request.r(i1699[34], i1699[35], 0, i1698, 'TomatoMiddleCup')
  request.r(i1699[36], i1699[37], 0, i1698, 'AppleMiddleCup')
  request.r(i1699[38], i1699[39], 0, i1698, 'OrangeMiddleCup')
  request.r(i1699[40], i1699[41], 0, i1698, 'CherryMiddleCup')
  request.r(i1699[42], i1699[43], 0, i1698, 'MultifruitMiddleCup')
  request.r(i1699[44], i1699[45], 0, i1698, 'TomatoMiddleStrawCup')
  request.r(i1699[46], i1699[47], 0, i1698, 'MultifruitMiddleStrawCup')
  request.r(i1699[48], i1699[49], 0, i1698, 'AppleMiddleStrawCup')
  request.r(i1699[50], i1699[51], 0, i1698, 'OrangeMiddleStrawCup')
  request.r(i1699[52], i1699[53], 0, i1698, 'CherryMiddleStrawCup')
  request.r(i1699[54], i1699[55], 0, i1698, 'MultifruitMiddleBallsCup')
  request.r(i1699[56], i1699[57], 0, i1698, 'TomatoMiddleBallsCup')
  request.r(i1699[58], i1699[59], 0, i1698, 'AppleMiddleBallsCup')
  request.r(i1699[60], i1699[61], 0, i1698, 'OrangeMiddleBallsCup')
  request.r(i1699[62], i1699[63], 0, i1698, 'CherryMiddleBallsCup')
  request.r(i1699[64], i1699[65], 0, i1698, 'EntitySmallCup')
  request.r(i1699[66], i1699[67], 0, i1698, 'TomatoSmallCup')
  request.r(i1699[68], i1699[69], 0, i1698, 'AppleSmallCup')
  request.r(i1699[70], i1699[71], 0, i1698, 'OrangeSmallCup')
  request.r(i1699[72], i1699[73], 0, i1698, 'CherrySmallCup')
  request.r(i1699[74], i1699[75], 0, i1698, 'MultifruitSmallCup')
  request.r(i1699[76], i1699[77], 0, i1698, 'TomatoSmallStrawCup')
  request.r(i1699[78], i1699[79], 0, i1698, 'AppleSmallStrawCup')
  request.r(i1699[80], i1699[81], 0, i1698, 'OrangeSmallStrawCup')
  request.r(i1699[82], i1699[83], 0, i1698, 'CherrySmallStrawCup')
  request.r(i1699[84], i1699[85], 0, i1698, 'MultifruitSmallStrawCup')
  request.r(i1699[86], i1699[87], 0, i1698, 'AppleSmallBallsCup')
  request.r(i1699[88], i1699[89], 0, i1698, 'TomatoSmallBallsCup')
  request.r(i1699[90], i1699[91], 0, i1698, 'OrangeSmallBallsCup')
  request.r(i1699[92], i1699[93], 0, i1698, 'CherrySmallBallsCup')
  request.r(i1699[94], i1699[95], 0, i1698, 'MultifruitSmallBallsCup')
  request.r(i1699[96], i1699[97], 0, i1698, 'JuiceBallAdditive')
  request.r(i1699[98], i1699[99], 0, i1698, 'IceAdditive')
  request.r(i1699[100], i1699[101], 0, i1698, 'GrassAdditive')
  return i1698
}

Deserializers["TouchIdleTimer"] = function (request, data, root) {
  var i1700 = root || request.c( 'TouchIdleTimer' )
  var i1701 = data
  return i1700
}

Deserializers["Helper"] = function (request, data, root) {
  var i1702 = root || request.c( 'Helper' )
  var i1703 = data
  request.r(i1703[0], i1703[1], 0, i1702, '_smallCupFinger')
  request.r(i1703[2], i1703[3], 0, i1702, '_middleCupFinger')
  request.r(i1703[4], i1703[5], 0, i1702, '_bigCupFinger')
  request.r(i1703[6], i1703[7], 0, i1702, '_iceFinger')
  request.r(i1703[8], i1703[9], 0, i1702, '_grassFinger')
  request.r(i1703[10], i1703[11], 0, i1702, '_juiceballFinger')
  request.r(i1703[12], i1703[13], 0, i1702, '_appleFinger')
  request.r(i1703[14], i1703[15], 0, i1702, '_cherryFinger')
  request.r(i1703[16], i1703[17], 0, i1702, '_orangeFinger')
  request.r(i1703[18], i1703[19], 0, i1702, '_multifruitFinger')
  request.r(i1703[20], i1703[21], 0, i1702, '_tomatoFinger')
  request.r(i1703[22], i1703[23], 0, i1702, '_strawFinger')
  request.r(i1703[24], i1703[25], 0, i1702, '_readyFinger')
  request.r(i1703[26], i1703[27], 0, i1702, '_peoples')
  request.r(i1703[28], i1703[29], 0, i1702, '_tutorial')
  request.r(i1703[30], i1703[31], 0, i1702, '_order')
  request.r(i1703[32], i1703[33], 0, i1702, '_strawButton')
  request.r(i1703[34], i1703[35], 0, i1702, '_bigCupButton')
  request.r(i1703[36], i1703[37], 0, i1702, '_middleCupButton')
  request.r(i1703[38], i1703[39], 0, i1702, '_smallCupButton')
  request.r(i1703[40], i1703[41], 0, i1702, '_readyButton')
  request.r(i1703[42], i1703[43], 0, i1702, '_touchIdleTimer')
  request.r(i1703[44], i1703[45], 0, i1702, '_finalScreen')
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1705 = data
  i1704.ambientIntensity = i1705[0]
  i1704.reflectionIntensity = i1705[1]
  i1704.ambientMode = i1705[2]
  i1704.ambientLight = new pc.Color(i1705[3], i1705[4], i1705[5], i1705[6])
  i1704.ambientSkyColor = new pc.Color(i1705[7], i1705[8], i1705[9], i1705[10])
  i1704.ambientGroundColor = new pc.Color(i1705[11], i1705[12], i1705[13], i1705[14])
  i1704.ambientEquatorColor = new pc.Color(i1705[15], i1705[16], i1705[17], i1705[18])
  i1704.fogColor = new pc.Color(i1705[19], i1705[20], i1705[21], i1705[22])
  i1704.fogEndDistance = i1705[23]
  i1704.fogStartDistance = i1705[24]
  i1704.fogDensity = i1705[25]
  i1704.fog = !!i1705[26]
  request.r(i1705[27], i1705[28], 0, i1704, 'skybox')
  i1704.fogMode = i1705[29]
  var i1707 = i1705[30]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1707[i + 0]) );
  }
  i1704.lightmaps = i1706
  i1704.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1705[31], i1704.lightProbes)
  i1704.lightmapsMode = i1705[32]
  i1704.mixedBakeMode = i1705[33]
  i1704.environmentLightingMode = i1705[34]
  i1704.ambientProbe = new pc.SphericalHarmonicsL2(i1705[35])
  i1704.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1705[36])
  i1704.useReferenceAmbientProbe = !!i1705[37]
  request.r(i1705[38], i1705[39], 0, i1704, 'customReflection')
  request.r(i1705[40], i1705[41], 0, i1704, 'defaultReflection')
  i1704.defaultReflectionMode = i1705[42]
  i1704.defaultReflectionResolution = i1705[43]
  i1704.sunLightObjectId = i1705[44]
  i1704.pixelLightCount = i1705[45]
  i1704.defaultReflectionHDR = !!i1705[46]
  i1704.hasLightDataAsset = !!i1705[47]
  i1704.hasManualGenerate = !!i1705[48]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1711 = data
  request.r(i1711[0], i1711[1], 0, i1710, 'lightmapColor')
  request.r(i1711[2], i1711[3], 0, i1710, 'lightmapDirection')
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1712 = root || new UnityEngine.LightProbes()
  var i1713 = data
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1721 = data
  var i1723 = i1721[0]
  var i1722 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1723[i + 0]));
  }
  i1720.ShaderCompilationErrors = i1722
  i1720.name = i1721[1]
  i1720.guid = i1721[2]
  var i1725 = i1721[3]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( i1725[i + 0] );
  }
  i1720.shaderDefinedKeywords = i1724
  var i1727 = i1721[4]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1727[i + 0]) );
  }
  i1720.passes = i1726
  var i1729 = i1721[5]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1729[i + 0]) );
  }
  i1720.usePasses = i1728
  var i1731 = i1721[6]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1731[i + 0]) );
  }
  i1720.defaultParameterValues = i1730
  request.r(i1721[7], i1721[8], 0, i1720, 'unityFallbackShader')
  i1720.readDepth = !!i1721[9]
  i1720.isCreatedByShaderGraph = !!i1721[10]
  i1720.compiled = !!i1721[11]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1735 = data
  i1734.shaderName = i1735[0]
  i1734.errorMessage = i1735[1]
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1740 = root || new pc.UnityShaderPass()
  var i1741 = data
  i1740.id = i1741[0]
  i1740.subShaderIndex = i1741[1]
  i1740.name = i1741[2]
  i1740.passType = i1741[3]
  i1740.grabPassTextureName = i1741[4]
  i1740.usePass = !!i1741[5]
  i1740.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[6], i1740.zTest)
  i1740.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[7], i1740.zWrite)
  i1740.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[8], i1740.culling)
  i1740.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1741[9], i1740.blending)
  i1740.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1741[10], i1740.alphaBlending)
  i1740.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[11], i1740.colorWriteMask)
  i1740.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[12], i1740.offsetUnits)
  i1740.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[13], i1740.offsetFactor)
  i1740.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[14], i1740.stencilRef)
  i1740.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[15], i1740.stencilReadMask)
  i1740.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1741[16], i1740.stencilWriteMask)
  i1740.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1741[17], i1740.stencilOp)
  i1740.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1741[18], i1740.stencilOpFront)
  i1740.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1741[19], i1740.stencilOpBack)
  var i1743 = i1741[20]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1743[i + 0]) );
  }
  i1740.tags = i1742
  var i1745 = i1741[21]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( i1745[i + 0] );
  }
  i1740.passDefinedKeywords = i1744
  var i1747 = i1741[22]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1747[i + 0]) );
  }
  i1740.passDefinedKeywordGroups = i1746
  var i1749 = i1741[23]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1749[i + 0]) );
  }
  i1740.variants = i1748
  var i1751 = i1741[24]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1751[i + 0]) );
  }
  i1740.excludedVariants = i1750
  i1740.hasDepthReader = !!i1741[25]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1753 = data
  i1752.val = i1753[0]
  i1752.name = i1753[1]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1755 = data
  i1754.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1755[0], i1754.src)
  i1754.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1755[1], i1754.dst)
  i1754.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1755[2], i1754.op)
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1757 = data
  i1756.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[0], i1756.pass)
  i1756.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[1], i1756.fail)
  i1756.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[2], i1756.zFail)
  i1756.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1757[3], i1756.comp)
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1761 = data
  i1760.name = i1761[0]
  i1760.value = i1761[1]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1765 = data
  var i1767 = i1765[0]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( i1767[i + 0] );
  }
  i1764.keywords = i1766
  i1764.hasDiscard = !!i1765[1]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1771 = data
  i1770.passId = i1771[0]
  i1770.subShaderIndex = i1771[1]
  var i1773 = i1771[2]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( i1773[i + 0] );
  }
  i1770.keywords = i1772
  i1770.vertexProgram = i1771[3]
  i1770.fragmentProgram = i1771[4]
  i1770.exportedForWebGl2 = !!i1771[5]
  i1770.readDepth = !!i1771[6]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1777 = data
  request.r(i1777[0], i1777[1], 0, i1776, 'shader')
  i1776.pass = i1777[2]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1781 = data
  i1780.name = i1781[0]
  i1780.type = i1781[1]
  i1780.value = new pc.Vec4( i1781[2], i1781[3], i1781[4], i1781[5] )
  i1780.textureValue = i1781[6]
  i1780.shaderPropertyFlag = i1781[7]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1783 = data
  i1782.name = i1783[0]
  request.r(i1783[1], i1783[2], 0, i1782, 'texture')
  i1782.aabb = i1783[3]
  i1782.vertices = i1783[4]
  i1782.triangles = i1783[5]
  i1782.textureRect = UnityEngine.Rect.MinMaxRect(i1783[6], i1783[7], i1783[8], i1783[9])
  i1782.packedRect = UnityEngine.Rect.MinMaxRect(i1783[10], i1783[11], i1783[12], i1783[13])
  i1782.border = new pc.Vec4( i1783[14], i1783[15], i1783[16], i1783[17] )
  i1782.transparency = i1783[18]
  i1782.bounds = i1783[19]
  i1782.pixelsPerUnit = i1783[20]
  i1782.textureWidth = i1783[21]
  i1782.textureHeight = i1783[22]
  i1782.nativeSize = new pc.Vec2( i1783[23], i1783[24] )
  i1782.pivot = new pc.Vec2( i1783[25], i1783[26] )
  i1782.textureRectOffset = new pc.Vec2( i1783[27], i1783[28] )
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1785 = data
  i1784.name = i1785[0]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1787 = data
  i1786.name = i1787[0]
  i1786.wrapMode = i1787[1]
  i1786.isLooping = !!i1787[2]
  i1786.length = i1787[3]
  var i1789 = i1787[4]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1789[i + 0]) );
  }
  i1786.curves = i1788
  var i1791 = i1787[5]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1791[i + 0]) );
  }
  i1786.events = i1790
  i1786.halfPrecision = !!i1787[6]
  i1786._frameRate = i1787[7]
  i1786.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1787[8], i1786.localBounds)
  i1786.hasMuscleCurves = !!i1787[9]
  var i1793 = i1787[10]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( i1793[i + 0] );
  }
  i1786.clipMuscleConstant = i1792
  i1786.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1787[11], i1786.clipBindingConstant)
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1797 = data
  i1796.path = i1797[0]
  i1796.hash = i1797[1]
  i1796.componentType = i1797[2]
  i1796.property = i1797[3]
  i1796.keys = i1797[4]
  var i1799 = i1797[5]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1799[i + 0]) );
  }
  i1796.objectReferenceKeys = i1798
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1803 = data
  i1802.time = i1803[0]
  request.r(i1803[1], i1803[2], 0, i1802, 'value')
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1807 = data
  i1806.functionName = i1807[0]
  i1806.floatParameter = i1807[1]
  i1806.intParameter = i1807[2]
  i1806.stringParameter = i1807[3]
  request.r(i1807[4], i1807[5], 0, i1806, 'objectReferenceParameter')
  i1806.time = i1807[6]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1809 = data
  i1808.center = new pc.Vec3( i1809[0], i1809[1], i1809[2] )
  i1808.extends = new pc.Vec3( i1809[3], i1809[4], i1809[5] )
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1813 = data
  var i1815 = i1813[0]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( i1815[i + 0] );
  }
  i1812.genericBindings = i1814
  var i1817 = i1813[1]
  var i1816 = []
  for(var i = 0; i < i1817.length; i += 1) {
    i1816.push( i1817[i + 0] );
  }
  i1812.pptrCurveMapping = i1816
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1819 = data
  i1818.name = i1819[0]
  i1818.ascent = i1819[1]
  i1818.originalLineHeight = i1819[2]
  i1818.fontSize = i1819[3]
  var i1821 = i1819[4]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1821[i + 0]) );
  }
  i1818.characterInfo = i1820
  request.r(i1819[5], i1819[6], 0, i1818, 'texture')
  i1818.originalFontSize = i1819[7]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1825 = data
  i1824.index = i1825[0]
  i1824.advance = i1825[1]
  i1824.bearing = i1825[2]
  i1824.glyphWidth = i1825[3]
  i1824.glyphHeight = i1825[4]
  i1824.minX = i1825[5]
  i1824.maxX = i1825[6]
  i1824.minY = i1825[7]
  i1824.maxY = i1825[8]
  i1824.uvBottomLeftX = i1825[9]
  i1824.uvBottomLeftY = i1825[10]
  i1824.uvBottomRightX = i1825[11]
  i1824.uvBottomRightY = i1825[12]
  i1824.uvTopLeftX = i1825[13]
  i1824.uvTopLeftY = i1825[14]
  i1824.uvTopRightX = i1825[15]
  i1824.uvTopRightY = i1825[16]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1827 = data
  i1826.name = i1827[0]
  var i1829 = i1827[1]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1829[i + 0]) );
  }
  i1826.layers = i1828
  var i1831 = i1827[2]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1831[i + 0]) );
  }
  i1826.parameters = i1830
  i1826.animationClips = i1827[3]
  i1826.avatarUnsupported = i1827[4]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1835 = data
  i1834.name = i1835[0]
  i1834.defaultWeight = i1835[1]
  i1834.blendingMode = i1835[2]
  i1834.avatarMask = i1835[3]
  i1834.syncedLayerIndex = i1835[4]
  i1834.syncedLayerAffectsTiming = !!i1835[5]
  i1834.syncedLayers = i1835[6]
  i1834.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1835[7], i1834.stateMachine)
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1837 = data
  i1836.id = i1837[0]
  i1836.name = i1837[1]
  i1836.path = i1837[2]
  var i1839 = i1837[3]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1839[i + 0]) );
  }
  i1836.states = i1838
  var i1841 = i1837[4]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1841[i + 0]) );
  }
  i1836.machines = i1840
  var i1843 = i1837[5]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1843[i + 0]) );
  }
  i1836.entryStateTransitions = i1842
  var i1845 = i1837[6]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1845[i + 0]) );
  }
  i1836.exitStateTransitions = i1844
  var i1847 = i1837[7]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1847[i + 0]) );
  }
  i1836.anyStateTransitions = i1846
  i1836.defaultStateId = i1837[8]
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1851 = data
  i1850.id = i1851[0]
  i1850.name = i1851[1]
  i1850.cycleOffset = i1851[2]
  i1850.cycleOffsetParameter = i1851[3]
  i1850.cycleOffsetParameterActive = !!i1851[4]
  i1850.mirror = !!i1851[5]
  i1850.mirrorParameter = i1851[6]
  i1850.mirrorParameterActive = !!i1851[7]
  i1850.motionId = i1851[8]
  i1850.nameHash = i1851[9]
  i1850.fullPathHash = i1851[10]
  i1850.speed = i1851[11]
  i1850.speedParameter = i1851[12]
  i1850.speedParameterActive = !!i1851[13]
  i1850.tag = i1851[14]
  i1850.tagHash = i1851[15]
  i1850.writeDefaultValues = !!i1851[16]
  var i1853 = i1851[17]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 2) {
  request.r(i1853[i + 0], i1853[i + 1], 2, i1852, '')
  }
  i1850.behaviours = i1852
  var i1855 = i1851[18]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1855[i + 0]) );
  }
  i1850.transitions = i1854
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1861 = data
  i1860.fullPath = i1861[0]
  i1860.canTransitionToSelf = !!i1861[1]
  i1860.duration = i1861[2]
  i1860.exitTime = i1861[3]
  i1860.hasExitTime = !!i1861[4]
  i1860.hasFixedDuration = !!i1861[5]
  i1860.interruptionSource = i1861[6]
  i1860.offset = i1861[7]
  i1860.orderedInterruption = !!i1861[8]
  i1860.destinationStateId = i1861[9]
  i1860.isExit = !!i1861[10]
  i1860.mute = !!i1861[11]
  i1860.solo = !!i1861[12]
  var i1863 = i1861[13]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1863[i + 0]) );
  }
  i1860.conditions = i1862
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1869 = data
  i1868.destinationStateId = i1869[0]
  i1868.isExit = !!i1869[1]
  i1868.mute = !!i1869[2]
  i1868.solo = !!i1869[3]
  var i1871 = i1869[4]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1871[i + 0]) );
  }
  i1868.conditions = i1870
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1875 = data
  i1874.mode = i1875[0]
  i1874.parameter = i1875[1]
  i1874.threshold = i1875[2]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1879 = data
  i1878.defaultBool = !!i1879[0]
  i1878.defaultFloat = i1879[1]
  i1878.defaultInt = i1879[2]
  i1878.name = i1879[3]
  i1878.nameHash = i1879[4]
  i1878.type = i1879[5]
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1881 = data
  i1880.name = i1881[0]
  i1880.bytes64 = i1881[1]
  i1880.data = i1881[2]
  return i1880
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1882 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1883 = data
  i1882.hashCode = i1883[0]
  request.r(i1883[1], i1883[2], 0, i1882, 'material')
  i1882.materialHashCode = i1883[3]
  request.r(i1883[4], i1883[5], 0, i1882, 'atlas')
  i1882.normalStyle = i1883[6]
  i1882.normalSpacingOffset = i1883[7]
  i1882.boldStyle = i1883[8]
  i1882.boldSpacing = i1883[9]
  i1882.italicStyle = i1883[10]
  i1882.tabSize = i1883[11]
  i1882.m_Version = i1883[12]
  i1882.m_SourceFontFileGUID = i1883[13]
  request.r(i1883[14], i1883[15], 0, i1882, 'm_SourceFontFile_EditorRef')
  request.r(i1883[16], i1883[17], 0, i1882, 'm_SourceFontFile')
  i1882.m_AtlasPopulationMode = i1883[18]
  i1882.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1883[19], i1882.m_FaceInfo)
  var i1885 = i1883[20]
  var i1884 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.add(request.d('UnityEngine.TextCore.Glyph', i1885[i + 0]));
  }
  i1882.m_GlyphTable = i1884
  var i1887 = i1883[21]
  var i1886 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.add(request.d('TMPro.TMP_Character', i1887[i + 0]));
  }
  i1882.m_CharacterTable = i1886
  var i1889 = i1883[22]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 2) {
  request.r(i1889[i + 0], i1889[i + 1], 2, i1888, '')
  }
  i1882.m_AtlasTextures = i1888
  i1882.m_AtlasTextureIndex = i1883[23]
  i1882.m_IsMultiAtlasTexturesEnabled = !!i1883[24]
  i1882.m_ClearDynamicDataOnBuild = !!i1883[25]
  var i1891 = i1883[26]
  var i1890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.add(request.d('UnityEngine.TextCore.GlyphRect', i1891[i + 0]));
  }
  i1882.m_UsedGlyphRects = i1890
  var i1893 = i1883[27]
  var i1892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.add(request.d('UnityEngine.TextCore.GlyphRect', i1893[i + 0]));
  }
  i1882.m_FreeGlyphRects = i1892
  i1882.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1883[28], i1882.m_fontInfo)
  i1882.m_AtlasWidth = i1883[29]
  i1882.m_AtlasHeight = i1883[30]
  i1882.m_AtlasPadding = i1883[31]
  i1882.m_AtlasRenderMode = i1883[32]
  var i1895 = i1883[33]
  var i1894 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.add(request.d('TMPro.TMP_Glyph', i1895[i + 0]));
  }
  i1882.m_glyphInfoList = i1894
  i1882.m_KerningTable = request.d('TMPro.KerningTable', i1883[34], i1882.m_KerningTable)
  i1882.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1883[35], i1882.m_FontFeatureTable)
  var i1897 = i1883[36]
  var i1896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1897.length; i += 2) {
  request.r(i1897[i + 0], i1897[i + 1], 1, i1896, '')
  }
  i1882.fallbackFontAssets = i1896
  var i1899 = i1883[37]
  var i1898 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1899.length; i += 2) {
  request.r(i1899[i + 0], i1899[i + 1], 1, i1898, '')
  }
  i1882.m_FallbackFontAssetTable = i1898
  i1882.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1883[38], i1882.m_CreationSettings)
  var i1901 = i1883[39]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('TMPro.TMP_FontWeightPair', i1901[i + 0]) );
  }
  i1882.m_FontWeightTable = i1900
  var i1903 = i1883[40]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( request.d('TMPro.TMP_FontWeightPair', i1903[i + 0]) );
  }
  i1882.fontWeights = i1902
  return i1882
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1904 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1905 = data
  i1904.m_FaceIndex = i1905[0]
  i1904.m_FamilyName = i1905[1]
  i1904.m_StyleName = i1905[2]
  i1904.m_PointSize = i1905[3]
  i1904.m_Scale = i1905[4]
  i1904.m_UnitsPerEM = i1905[5]
  i1904.m_LineHeight = i1905[6]
  i1904.m_AscentLine = i1905[7]
  i1904.m_CapLine = i1905[8]
  i1904.m_MeanLine = i1905[9]
  i1904.m_Baseline = i1905[10]
  i1904.m_DescentLine = i1905[11]
  i1904.m_SuperscriptOffset = i1905[12]
  i1904.m_SuperscriptSize = i1905[13]
  i1904.m_SubscriptOffset = i1905[14]
  i1904.m_SubscriptSize = i1905[15]
  i1904.m_UnderlineOffset = i1905[16]
  i1904.m_UnderlineThickness = i1905[17]
  i1904.m_StrikethroughOffset = i1905[18]
  i1904.m_StrikethroughThickness = i1905[19]
  i1904.m_TabWidth = i1905[20]
  return i1904
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1908 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1909 = data
  i1908.m_Index = i1909[0]
  i1908.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1909[1], i1908.m_Metrics)
  i1908.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1909[2], i1908.m_GlyphRect)
  i1908.m_Scale = i1909[3]
  i1908.m_AtlasIndex = i1909[4]
  i1908.m_ClassDefinitionType = i1909[5]
  return i1908
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1910 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1911 = data
  i1910.m_Width = i1911[0]
  i1910.m_Height = i1911[1]
  i1910.m_HorizontalBearingX = i1911[2]
  i1910.m_HorizontalBearingY = i1911[3]
  i1910.m_HorizontalAdvance = i1911[4]
  return i1910
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1912 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1913 = data
  i1912.m_X = i1913[0]
  i1912.m_Y = i1913[1]
  i1912.m_Width = i1913[2]
  i1912.m_Height = i1913[3]
  return i1912
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1916 = root || request.c( 'TMPro.TMP_Character' )
  var i1917 = data
  i1916.m_ElementType = i1917[0]
  i1916.m_Unicode = i1917[1]
  i1916.m_GlyphIndex = i1917[2]
  i1916.m_Scale = i1917[3]
  return i1916
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1922 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1923 = data
  i1922.Name = i1923[0]
  i1922.PointSize = i1923[1]
  i1922.Scale = i1923[2]
  i1922.CharacterCount = i1923[3]
  i1922.LineHeight = i1923[4]
  i1922.Baseline = i1923[5]
  i1922.Ascender = i1923[6]
  i1922.CapHeight = i1923[7]
  i1922.Descender = i1923[8]
  i1922.CenterLine = i1923[9]
  i1922.SuperscriptOffset = i1923[10]
  i1922.SubscriptOffset = i1923[11]
  i1922.SubSize = i1923[12]
  i1922.Underline = i1923[13]
  i1922.UnderlineThickness = i1923[14]
  i1922.strikethrough = i1923[15]
  i1922.strikethroughThickness = i1923[16]
  i1922.TabWidth = i1923[17]
  i1922.Padding = i1923[18]
  i1922.AtlasWidth = i1923[19]
  i1922.AtlasHeight = i1923[20]
  return i1922
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1926 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1927 = data
  i1926.id = i1927[0]
  i1926.x = i1927[1]
  i1926.y = i1927[2]
  i1926.width = i1927[3]
  i1926.height = i1927[4]
  i1926.xOffset = i1927[5]
  i1926.yOffset = i1927[6]
  i1926.xAdvance = i1927[7]
  i1926.scale = i1927[8]
  return i1926
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1928 = root || request.c( 'TMPro.KerningTable' )
  var i1929 = data
  var i1931 = i1929[0]
  var i1930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.add(request.d('TMPro.KerningPair', i1931[i + 0]));
  }
  i1928.kerningPairs = i1930
  return i1928
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1934 = root || request.c( 'TMPro.KerningPair' )
  var i1935 = data
  i1934.xOffset = i1935[0]
  i1934.m_FirstGlyph = i1935[1]
  i1934.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1935[2], i1934.m_FirstGlyphAdjustments)
  i1934.m_SecondGlyph = i1935[3]
  i1934.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1935[4], i1934.m_SecondGlyphAdjustments)
  i1934.m_IgnoreSpacingAdjustments = !!i1935[5]
  return i1934
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1936 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1937 = data
  var i1939 = i1937[0]
  var i1938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1939.length; i += 1) {
    i1938.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1939[i + 0]));
  }
  i1936.m_GlyphPairAdjustmentRecords = i1938
  return i1936
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1942 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1943 = data
  i1942.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1943[0], i1942.m_FirstAdjustmentRecord)
  i1942.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1943[1], i1942.m_SecondAdjustmentRecord)
  i1942.m_FeatureLookupFlags = i1943[2]
  return i1942
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1944 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1945 = data
  i1944.m_GlyphIndex = i1945[0]
  i1944.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1945[1], i1944.m_GlyphValueRecord)
  return i1944
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1946 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1947 = data
  i1946.m_XPlacement = i1947[0]
  i1946.m_YPlacement = i1947[1]
  i1946.m_XAdvance = i1947[2]
  i1946.m_YAdvance = i1947[3]
  return i1946
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1950 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1951 = data
  i1950.sourceFontFileName = i1951[0]
  i1950.sourceFontFileGUID = i1951[1]
  i1950.pointSizeSamplingMode = i1951[2]
  i1950.pointSize = i1951[3]
  i1950.padding = i1951[4]
  i1950.packingMode = i1951[5]
  i1950.atlasWidth = i1951[6]
  i1950.atlasHeight = i1951[7]
  i1950.characterSetSelectionMode = i1951[8]
  i1950.characterSequence = i1951[9]
  i1950.referencedFontAssetGUID = i1951[10]
  i1950.referencedTextAssetGUID = i1951[11]
  i1950.fontStyle = i1951[12]
  i1950.fontStyleModifier = i1951[13]
  i1950.renderMode = i1951[14]
  i1950.includeFontFeatures = !!i1951[15]
  return i1950
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1954 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1955 = data
  request.r(i1955[0], i1955[1], 0, i1954, 'regularTypeface')
  request.r(i1955[2], i1955[3], 0, i1954, 'italicTypeface')
  return i1954
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1956 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1957 = data
  i1956.useSafeMode = !!i1957[0]
  i1956.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1957[1], i1956.safeModeOptions)
  i1956.timeScale = i1957[2]
  i1956.unscaledTimeScale = i1957[3]
  i1956.useSmoothDeltaTime = !!i1957[4]
  i1956.maxSmoothUnscaledTime = i1957[5]
  i1956.rewindCallbackMode = i1957[6]
  i1956.showUnityEditorReport = !!i1957[7]
  i1956.logBehaviour = i1957[8]
  i1956.drawGizmos = !!i1957[9]
  i1956.defaultRecyclable = !!i1957[10]
  i1956.defaultAutoPlay = i1957[11]
  i1956.defaultUpdateType = i1957[12]
  i1956.defaultTimeScaleIndependent = !!i1957[13]
  i1956.defaultEaseType = i1957[14]
  i1956.defaultEaseOvershootOrAmplitude = i1957[15]
  i1956.defaultEasePeriod = i1957[16]
  i1956.defaultAutoKill = !!i1957[17]
  i1956.defaultLoopType = i1957[18]
  i1956.debugMode = !!i1957[19]
  i1956.debugStoreTargetId = !!i1957[20]
  i1956.showPreviewPanel = !!i1957[21]
  i1956.storeSettingsLocation = i1957[22]
  i1956.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1957[23], i1956.modules)
  i1956.createASMDEF = !!i1957[24]
  i1956.showPlayingTweens = !!i1957[25]
  i1956.showPausedTweens = !!i1957[26]
  return i1956
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1958 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1959 = data
  i1958.logBehaviour = i1959[0]
  i1958.nestedTweenFailureBehaviour = i1959[1]
  return i1958
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1960 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1961 = data
  i1960.showPanel = !!i1961[0]
  i1960.audioEnabled = !!i1961[1]
  i1960.physicsEnabled = !!i1961[2]
  i1960.physics2DEnabled = !!i1961[3]
  i1960.spriteEnabled = !!i1961[4]
  i1960.uiEnabled = !!i1961[5]
  i1960.textMeshProEnabled = !!i1961[6]
  i1960.tk2DEnabled = !!i1961[7]
  i1960.deAudioEnabled = !!i1961[8]
  i1960.deUnityExtendedEnabled = !!i1961[9]
  i1960.epoOutlineEnabled = !!i1961[10]
  return i1960
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1962 = root || request.c( 'TMPro.TMP_Settings' )
  var i1963 = data
  i1962.m_enableWordWrapping = !!i1963[0]
  i1962.m_enableKerning = !!i1963[1]
  i1962.m_enableExtraPadding = !!i1963[2]
  i1962.m_enableTintAllSprites = !!i1963[3]
  i1962.m_enableParseEscapeCharacters = !!i1963[4]
  i1962.m_EnableRaycastTarget = !!i1963[5]
  i1962.m_GetFontFeaturesAtRuntime = !!i1963[6]
  i1962.m_missingGlyphCharacter = i1963[7]
  i1962.m_warningsDisabled = !!i1963[8]
  request.r(i1963[9], i1963[10], 0, i1962, 'm_defaultFontAsset')
  i1962.m_defaultFontAssetPath = i1963[11]
  i1962.m_defaultFontSize = i1963[12]
  i1962.m_defaultAutoSizeMinRatio = i1963[13]
  i1962.m_defaultAutoSizeMaxRatio = i1963[14]
  i1962.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1963[15], i1963[16] )
  i1962.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1963[17], i1963[18] )
  i1962.m_autoSizeTextContainer = !!i1963[19]
  i1962.m_IsTextObjectScaleStatic = !!i1963[20]
  var i1965 = i1963[21]
  var i1964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1965.length; i += 2) {
  request.r(i1965[i + 0], i1965[i + 1], 1, i1964, '')
  }
  i1962.m_fallbackFontAssets = i1964
  i1962.m_matchMaterialPreset = !!i1963[22]
  request.r(i1963[23], i1963[24], 0, i1962, 'm_defaultSpriteAsset')
  i1962.m_defaultSpriteAssetPath = i1963[25]
  i1962.m_enableEmojiSupport = !!i1963[26]
  i1962.m_MissingCharacterSpriteUnicode = i1963[27]
  i1962.m_defaultColorGradientPresetsPath = i1963[28]
  request.r(i1963[29], i1963[30], 0, i1962, 'm_defaultStyleSheet')
  i1962.m_StyleSheetsResourcePath = i1963[31]
  request.r(i1963[32], i1963[33], 0, i1962, 'm_leadingCharacters')
  request.r(i1963[34], i1963[35], 0, i1962, 'm_followingCharacters')
  i1962.m_UseModernHangulLineBreakingRules = !!i1963[36]
  return i1962
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1966 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1967 = data
  i1966.hashCode = i1967[0]
  request.r(i1967[1], i1967[2], 0, i1966, 'material')
  i1966.materialHashCode = i1967[3]
  request.r(i1967[4], i1967[5], 0, i1966, 'spriteSheet')
  var i1969 = i1967[6]
  var i1968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.add(request.d('TMPro.TMP_Sprite', i1969[i + 0]));
  }
  i1966.spriteInfoList = i1968
  var i1971 = i1967[7]
  var i1970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1971.length; i += 2) {
  request.r(i1971[i + 0], i1971[i + 1], 1, i1970, '')
  }
  i1966.fallbackSpriteAssets = i1970
  i1966.m_Version = i1967[8]
  i1966.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1967[9], i1966.m_FaceInfo)
  var i1973 = i1967[10]
  var i1972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.add(request.d('TMPro.TMP_SpriteCharacter', i1973[i + 0]));
  }
  i1966.m_SpriteCharacterTable = i1972
  var i1975 = i1967[11]
  var i1974 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.add(request.d('TMPro.TMP_SpriteGlyph', i1975[i + 0]));
  }
  i1966.m_SpriteGlyphTable = i1974
  return i1966
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1978 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1979 = data
  i1978.name = i1979[0]
  i1978.hashCode = i1979[1]
  i1978.unicode = i1979[2]
  i1978.pivot = new pc.Vec2( i1979[3], i1979[4] )
  request.r(i1979[5], i1979[6], 0, i1978, 'sprite')
  i1978.id = i1979[7]
  i1978.x = i1979[8]
  i1978.y = i1979[9]
  i1978.width = i1979[10]
  i1978.height = i1979[11]
  i1978.xOffset = i1979[12]
  i1978.yOffset = i1979[13]
  i1978.xAdvance = i1979[14]
  i1978.scale = i1979[15]
  return i1978
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1984 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1985 = data
  i1984.m_Name = i1985[0]
  i1984.m_HashCode = i1985[1]
  i1984.m_ElementType = i1985[2]
  i1984.m_Unicode = i1985[3]
  i1984.m_GlyphIndex = i1985[4]
  i1984.m_Scale = i1985[5]
  return i1984
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1988 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1989 = data
  request.r(i1989[0], i1989[1], 0, i1988, 'sprite')
  i1988.m_Index = i1989[2]
  i1988.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1989[3], i1988.m_Metrics)
  i1988.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1989[4], i1988.m_GlyphRect)
  i1988.m_Scale = i1989[5]
  i1988.m_AtlasIndex = i1989[6]
  i1988.m_ClassDefinitionType = i1989[7]
  return i1988
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1990 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1991 = data
  var i1993 = i1991[0]
  var i1992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.add(request.d('TMPro.TMP_Style', i1993[i + 0]));
  }
  i1990.m_StyleList = i1992
  return i1990
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1996 = root || request.c( 'TMPro.TMP_Style' )
  var i1997 = data
  i1996.m_Name = i1997[0]
  i1996.m_HashCode = i1997[1]
  i1996.m_OpeningDefinition = i1997[2]
  i1996.m_ClosingDefinition = i1997[3]
  i1996.m_OpeningTagArray = i1997[4]
  i1996.m_ClosingTagArray = i1997[5]
  i1996.m_OpeningTagUnicodeArray = i1997[6]
  i1996.m_ClosingTagUnicodeArray = i1997[7]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1999 = data
  var i2001 = i1999[0]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2001[i + 0]) );
  }
  i1998.files = i2000
  i1998.componentToPrefabIds = i1999[1]
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2005 = data
  i2004.path = i2005[0]
  request.r(i2005[1], i2005[2], 0, i2004, 'unityObject')
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2007 = data
  var i2009 = i2007[0]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2009[i + 0]) );
  }
  i2006.scriptsExecutionOrder = i2008
  var i2011 = i2007[1]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2011[i + 0]) );
  }
  i2006.sortingLayers = i2010
  var i2013 = i2007[2]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2013[i + 0]) );
  }
  i2006.cullingLayers = i2012
  i2006.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2007[3], i2006.timeSettings)
  i2006.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2007[4], i2006.physicsSettings)
  i2006.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2007[5], i2006.physics2DSettings)
  i2006.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2007[6], i2006.qualitySettings)
  i2006.enableRealtimeShadows = !!i2007[7]
  i2006.enableAutoInstancing = !!i2007[8]
  i2006.enableDynamicBatching = !!i2007[9]
  i2006.lightmapEncodingQuality = i2007[10]
  i2006.desiredColorSpace = i2007[11]
  var i2015 = i2007[12]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( i2015[i + 0] );
  }
  i2006.allTags = i2014
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2019 = data
  i2018.name = i2019[0]
  i2018.value = i2019[1]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2023 = data
  i2022.id = i2023[0]
  i2022.name = i2023[1]
  i2022.value = i2023[2]
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2027 = data
  i2026.id = i2027[0]
  i2026.name = i2027[1]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2029 = data
  i2028.fixedDeltaTime = i2029[0]
  i2028.maximumDeltaTime = i2029[1]
  i2028.timeScale = i2029[2]
  i2028.maximumParticleTimestep = i2029[3]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2031 = data
  i2030.gravity = new pc.Vec3( i2031[0], i2031[1], i2031[2] )
  i2030.defaultSolverIterations = i2031[3]
  i2030.bounceThreshold = i2031[4]
  i2030.autoSyncTransforms = !!i2031[5]
  i2030.autoSimulation = !!i2031[6]
  var i2033 = i2031[7]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2033[i + 0]) );
  }
  i2030.collisionMatrix = i2032
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2037 = data
  i2036.enabled = !!i2037[0]
  i2036.layerId = i2037[1]
  i2036.otherLayerId = i2037[2]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2039 = data
  request.r(i2039[0], i2039[1], 0, i2038, 'material')
  i2038.gravity = new pc.Vec2( i2039[2], i2039[3] )
  i2038.positionIterations = i2039[4]
  i2038.velocityIterations = i2039[5]
  i2038.velocityThreshold = i2039[6]
  i2038.maxLinearCorrection = i2039[7]
  i2038.maxAngularCorrection = i2039[8]
  i2038.maxTranslationSpeed = i2039[9]
  i2038.maxRotationSpeed = i2039[10]
  i2038.baumgarteScale = i2039[11]
  i2038.baumgarteTOIScale = i2039[12]
  i2038.timeToSleep = i2039[13]
  i2038.linearSleepTolerance = i2039[14]
  i2038.angularSleepTolerance = i2039[15]
  i2038.defaultContactOffset = i2039[16]
  i2038.autoSimulation = !!i2039[17]
  i2038.queriesHitTriggers = !!i2039[18]
  i2038.queriesStartInColliders = !!i2039[19]
  i2038.callbacksOnDisable = !!i2039[20]
  i2038.reuseCollisionCallbacks = !!i2039[21]
  i2038.autoSyncTransforms = !!i2039[22]
  var i2041 = i2039[23]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2041[i + 0]) );
  }
  i2038.collisionMatrix = i2040
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2045 = data
  i2044.enabled = !!i2045[0]
  i2044.layerId = i2045[1]
  i2044.otherLayerId = i2045[2]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2047 = data
  var i2049 = i2047[0]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2049[i + 0]) );
  }
  i2046.qualityLevels = i2048
  var i2051 = i2047[1]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( i2051[i + 0] );
  }
  i2046.names = i2050
  i2046.shadows = i2047[2]
  i2046.anisotropicFiltering = i2047[3]
  i2046.antiAliasing = i2047[4]
  i2046.lodBias = i2047[5]
  i2046.shadowCascades = i2047[6]
  i2046.shadowDistance = i2047[7]
  i2046.shadowmaskMode = i2047[8]
  i2046.shadowProjection = i2047[9]
  i2046.shadowResolution = i2047[10]
  i2046.softParticles = !!i2047[11]
  i2046.softVegetation = !!i2047[12]
  i2046.activeColorSpace = i2047[13]
  i2046.desiredColorSpace = i2047[14]
  i2046.masterTextureLimit = i2047[15]
  i2046.maxQueuedFrames = i2047[16]
  i2046.particleRaycastBudget = i2047[17]
  i2046.pixelLightCount = i2047[18]
  i2046.realtimeReflectionProbes = !!i2047[19]
  i2046.shadowCascade2Split = i2047[20]
  i2046.shadowCascade4Split = new pc.Vec3( i2047[21], i2047[22], i2047[23] )
  i2046.streamingMipmapsActive = !!i2047[24]
  i2046.vSyncCount = i2047[25]
  i2046.asyncUploadBufferSize = i2047[26]
  i2046.asyncUploadTimeSlice = i2047[27]
  i2046.billboardsFaceCameraPosition = !!i2047[28]
  i2046.shadowNearPlaneOffset = i2047[29]
  i2046.streamingMipmapsMemoryBudget = i2047[30]
  i2046.maximumLODLevel = i2047[31]
  i2046.streamingMipmapsAddAllCameras = !!i2047[32]
  i2046.streamingMipmapsMaxLevelReduction = i2047[33]
  i2046.streamingMipmapsRenderersPerFrame = i2047[34]
  i2046.resolutionScalingFixedDPIFactor = i2047[35]
  i2046.streamingMipmapsMaxFileIORequests = i2047[36]
  i2046.currentQualityLevel = i2047[37]
  return i2046
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2054 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2055 = data
  i2054.xPlacement = i2055[0]
  i2054.yPlacement = i2055[1]
  i2054.xAdvance = i2055[2]
  i2054.yAdvance = i2055[3]
  return i2054
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[12],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[12],"77":[78],"79":[80],"81":[80],"19":[2],"82":[2],"83":[84],"85":[86],"87":[84],"88":[2],"89":[2],"21":[19],"6":[3,2],"90":[2],"20":[19],"30":[2],"91":[2],"92":[2],"93":[2],"94":[2],"95":[2],"96":[2],"97":[2],"98":[2],"99":[3,2],"100":[2],"101":[2],"102":[2],"103":[2],"104":[3,2],"105":[2],"106":[35],"107":[35],"36":[35],"108":[35],"109":[12],"110":[12],"111":[112],"113":[12],"114":[2],"115":[78,2],"17":[2,3],"116":[2],"117":[3,2],"118":[78],"119":[3,2],"120":[2],"121":[84]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","People","UnityEngine.UI.Image","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.UIBehaviour","UnityEngine.Sprite","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Animator","Bank","UnityEngine.UI.Button","TMPro.TextMeshProUGUI","Tutorial","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEditor.Animations.AnimatorController","ImageShiftOnOrientation","UnityEngine.GameObject","Point","TMPro.TMP_FontAsset","UnityEngine.Material","PeopleContainer","JuiceConfig","UnityEngine.UI.ContentSizeFitter","BackImage","AheadImage","Order","Helper","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchIdleTimer","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UILoopedMover","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Playble";

Deserializers.lunaInitializationTime = "08/07/2025 12:08:51";

Deserializers.lunaDaysRunning = "2.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Juice-6-9";

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

Deserializers.buildID = "e719c9d4-3363-41ab-9a64-99c3027a8485";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

