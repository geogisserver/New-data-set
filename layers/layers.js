var wms_layers = [];


        var lyr_EOXMapsSentinel2cloudless_0 = new ol.layer.Tile({
            'title': 'EOX::Maps - Sentinel-2 cloudless',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://s2maps.eu/#license">Sentinel-2 cloudless - https://s2maps.eu by EOX IT Services GmbH (Contains modified Copernicus Sentinel data 2016 & 2017)</a>',
                url: 'http://b.tiles.maps.eox.at/wmts/1.0.0/s2cloudless_3857/default/GoogleMapsCompatible/{z}/{y}/{x}.jpg'
            })
        });
var format_agro_1 = new ol.format.GeoJSON();
var features_agro_1 = format_agro_1.readFeatures(json_agro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agro_1.addFeatures(features_agro_1);
var lyr_agro_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_agro_1, 
                style: style_agro_1,
                interactive: true,
                title: '<img src="styles/legend/agro_1.png" /> agro'
            });
var format_IED_2 = new ol.format.GeoJSON();
var features_IED_2 = format_IED_2.readFeatures(json_IED_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IED_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IED_2.addFeatures(features_IED_2);
var lyr_IED_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IED_2, 
                style: style_IED_2,
                interactive: true,
                title: '<img src="styles/legend/IED_2.png" /> IED'
            });

lyr_EOXMapsSentinel2cloudless_0.setVisible(true);lyr_agro_1.setVisible(true);lyr_IED_2.setVisible(true);
var layersList = [lyr_EOXMapsSentinel2cloudless_0,lyr_agro_1,lyr_IED_2];
lyr_agro_1.set('fieldAliases', {'OtherCateg': 'OtherCateg', 'Ameliorati': 'Ameliorati', 'FactArea': 'FactArea', 'Perimetr': 'Perimetr', 'Designatio': 'Designatio', 'Administra': 'Administra', 'Administ_1': 'Administ_1', 'LegalTypeo': 'LegalTypeo', 'FactUse': 'FactUse', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_IED_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'UrbanName': 'UrbanName', 'UrbanNum': 'UrbanNum', 'StatCode': 'StatCode', 'Subordinat': 'Subordinat', 'Area': 'Area', 'Perimetr': 'Perimetr', 'Note': 'Note', 'IEDType': 'IEDType', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID_2': 'OBJECTID_2', 'Name_2': 'Name_2', 'TypeAU': 'TypeAU', 'Subordin_1': 'Subordin_1', 'StatCode_2': 'StatCode_2', 'EconomRe': 'EconomRe', 'Area_2': 'Area_2', 'Perimetr_2': 'Perimetr_2', 'Note_2': 'Note_2', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', });
lyr_agro_1.set('fieldImages', {'OtherCateg': 'TextEdit', 'Ameliorati': 'TextEdit', 'FactArea': 'TextEdit', 'Perimetr': 'TextEdit', 'Designatio': 'TextEdit', 'Administra': 'TextEdit', 'Administ_1': 'TextEdit', 'LegalTypeo': 'TextEdit', 'FactUse': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_IED_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'UrbanName': 'TextEdit', 'UrbanNum': 'TextEdit', 'StatCode': 'TextEdit', 'Subordinat': 'TextEdit', 'Area': 'TextEdit', 'Perimetr': 'TextEdit', 'Note': 'TextEdit', 'IEDType': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'Name_2': 'TextEdit', 'TypeAU': 'TextEdit', 'Subordin_1': 'TextEdit', 'StatCode_2': 'TextEdit', 'EconomRe': 'TextEdit', 'Area_2': 'TextEdit', 'Perimetr_2': 'TextEdit', 'Note_2': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', });
lyr_agro_1.set('fieldLabels', {'OtherCateg': 'no label', 'Ameliorati': 'no label', 'FactArea': 'no label', 'Perimetr': 'no label', 'Designatio': 'no label', 'Administra': 'no label', 'Administ_1': 'no label', 'LegalTypeo': 'no label', 'FactUse': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_IED_2.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'UrbanName': 'no label', 'UrbanNum': 'no label', 'StatCode': 'no label', 'Subordinat': 'no label', 'Area': 'no label', 'Perimetr': 'no label', 'Note': 'no label', 'IEDType': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID_2': 'no label', 'Name_2': 'no label', 'TypeAU': 'no label', 'Subordin_1': 'no label', 'StatCode_2': 'no label', 'EconomRe': 'no label', 'Area_2': 'no label', 'Perimetr_2': 'header label', 'Note_2': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', });
lyr_IED_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});