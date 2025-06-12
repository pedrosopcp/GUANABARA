var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_HereWegoTerrain_1 = new ol.layer.Tile({
            'title': 'Here Wego Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://developer.here.com/documentation/map-tile/dev_guide/topics/resource-copyright.html">Map tiles by Here Wego</a>',
                url: 'https://1.aerial.maps.ls.hereapi.com/maptile/2.1/maptile/newest/terrain.day/{z}/{x}/{y}/256/png8?app_id=eAdkWGYRoc4RfxVo0Z4B&app_code=TrLJuXVK62IQk0vuXFzaig&lg=eng'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MassaDgua_3 = new ol.format.GeoJSON();
var features_MassaDgua_3 = format_MassaDgua_3.readFeatures(json_MassaDgua_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MassaDgua_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassaDgua_3.addFeatures(features_MassaDgua_3);
var lyr_MassaDgua_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MassaDgua_3, 
                style: style_MassaDgua_3,
                popuplayertitle: 'Massa D\'água',
                interactive: true,
                title: '<img src="styles/legend/MassaDgua_3.png" /> Massa D\'água'
            });
var format_EstadodoRiodeJaneiro_4 = new ol.format.GeoJSON();
var features_EstadodoRiodeJaneiro_4 = format_EstadodoRiodeJaneiro_4.readFeatures(json_EstadodoRiodeJaneiro_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstadodoRiodeJaneiro_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstadodoRiodeJaneiro_4.addFeatures(features_EstadodoRiodeJaneiro_4);
var lyr_EstadodoRiodeJaneiro_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstadodoRiodeJaneiro_4, 
                style: style_EstadodoRiodeJaneiro_4,
                popuplayertitle: 'Estado do Rio de Janeiro',
                interactive: true,
                title: '<img src="styles/legend/EstadodoRiodeJaneiro_4.png" /> Estado do Rio de Janeiro'
            });
var format_LimiteMunicipal_5 = new ol.format.GeoJSON();
var features_LimiteMunicipal_5 = format_LimiteMunicipal_5.readFeatures(json_LimiteMunicipal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteMunicipal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipal_5.addFeatures(features_LimiteMunicipal_5);
var lyr_LimiteMunicipal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipal_5, 
                style: style_LimiteMunicipal_5,
                popuplayertitle: 'Limite Municipal',
                interactive: true,
                title: '<img src="styles/legend/LimiteMunicipal_5.png" /> Limite Municipal'
            });
var format_TrechodeDrenagemCBHIBGE_6 = new ol.format.GeoJSON();
var features_TrechodeDrenagemCBHIBGE_6 = format_TrechodeDrenagemCBHIBGE_6.readFeatures(json_TrechodeDrenagemCBHIBGE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrechodeDrenagemCBHIBGE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrechodeDrenagemCBHIBGE_6.addFeatures(features_TrechodeDrenagemCBHIBGE_6);
var lyr_TrechodeDrenagemCBHIBGE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrechodeDrenagemCBHIBGE_6, 
                style: style_TrechodeDrenagemCBHIBGE_6,
                popuplayertitle: 'Trecho de Drenagem (CBH/IBGE)',
                interactive: true,
                title: '<img src="styles/legend/TrechodeDrenagemCBHIBGE_6.png" /> Trecho de Drenagem (CBH/IBGE)'
            });
var format_UnidadesdeConservaoProteoIntegral_7 = new ol.format.GeoJSON();
var features_UnidadesdeConservaoProteoIntegral_7 = format_UnidadesdeConservaoProteoIntegral_7.readFeatures(json_UnidadesdeConservaoProteoIntegral_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadesdeConservaoProteoIntegral_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservaoProteoIntegral_7.addFeatures(features_UnidadesdeConservaoProteoIntegral_7);
var lyr_UnidadesdeConservaoProteoIntegral_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservaoProteoIntegral_7, 
                style: style_UnidadesdeConservaoProteoIntegral_7,
                popuplayertitle: 'Unidades de Conservação (Proteção Integral)',
                interactive: true,
    title: 'Unidades de Conservação (Proteção Integral)<br />\
    <img src="styles/legend/UnidadesdeConservaoProteoIntegral_7_0.png" /> Estadual<br />\
    <img src="styles/legend/UnidadesdeConservaoProteoIntegral_7_1.png" /> Federal<br />\
    <img src="styles/legend/UnidadesdeConservaoProteoIntegral_7_2.png" /> Municipal<br />' });
var format_AdutorasAtlasguas2021_8 = new ol.format.GeoJSON();
var features_AdutorasAtlasguas2021_8 = format_AdutorasAtlasguas2021_8.readFeatures(json_AdutorasAtlasguas2021_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdutorasAtlasguas2021_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdutorasAtlasguas2021_8.addFeatures(features_AdutorasAtlasguas2021_8);
var lyr_AdutorasAtlasguas2021_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdutorasAtlasguas2021_8, 
                style: style_AdutorasAtlasguas2021_8,
                popuplayertitle: 'Adutoras (Atlas Águas 2021)',
                interactive: true,
                title: '<img src="styles/legend/AdutorasAtlasguas2021_8.png" /> Adutoras (Atlas Águas 2021)'
            });
var format_MonitdeQualidadedaguaCBH2025_9 = new ol.format.GeoJSON();
var features_MonitdeQualidadedaguaCBH2025_9 = format_MonitdeQualidadedaguaCBH2025_9.readFeatures(json_MonitdeQualidadedaguaCBH2025_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MonitdeQualidadedaguaCBH2025_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MonitdeQualidadedaguaCBH2025_9.addFeatures(features_MonitdeQualidadedaguaCBH2025_9);
var lyr_MonitdeQualidadedaguaCBH2025_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MonitdeQualidadedaguaCBH2025_9, 
                style: style_MonitdeQualidadedaguaCBH2025_9,
                popuplayertitle: 'Monit. de Qualidade da Água (CBH 2025)',
                interactive: true,
                title: '<img src="styles/legend/MonitdeQualidadedaguaCBH2025_9.png" /> Monit. de Qualidade da Água (CBH 2025)'
            });
var format_MonitdeQualidadedaguaINEA2022_10 = new ol.format.GeoJSON();
var features_MonitdeQualidadedaguaINEA2022_10 = format_MonitdeQualidadedaguaINEA2022_10.readFeatures(json_MonitdeQualidadedaguaINEA2022_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MonitdeQualidadedaguaINEA2022_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MonitdeQualidadedaguaINEA2022_10.addFeatures(features_MonitdeQualidadedaguaINEA2022_10);
var lyr_MonitdeQualidadedaguaINEA2022_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MonitdeQualidadedaguaINEA2022_10, 
                style: style_MonitdeQualidadedaguaINEA2022_10,
                popuplayertitle: 'Monit. de Qualidade da Água (INEA 2022)',
                interactive: true,
                title: '<img src="styles/legend/MonitdeQualidadedaguaINEA2022_10.png" /> Monit. de Qualidade da Água (INEA 2022)'
            });
var format_UsuriosCadastradosguaSuperficialINEA2021_11 = new ol.format.GeoJSON();
var features_UsuriosCadastradosguaSuperficialINEA2021_11 = format_UsuriosCadastradosguaSuperficialINEA2021_11.readFeatures(json_UsuriosCadastradosguaSuperficialINEA2021_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsuriosCadastradosguaSuperficialINEA2021_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsuriosCadastradosguaSuperficialINEA2021_11.addFeatures(features_UsuriosCadastradosguaSuperficialINEA2021_11);
var lyr_UsuriosCadastradosguaSuperficialINEA2021_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsuriosCadastradosguaSuperficialINEA2021_11, 
                style: style_UsuriosCadastradosguaSuperficialINEA2021_11,
                popuplayertitle: 'Usuários Cadastrados - Água Superficial (INEA 2021)',
                interactive: true,
                title: '<img src="styles/legend/UsuriosCadastradosguaSuperficialINEA2021_11.png" /> Usuários Cadastrados - Água Superficial (INEA 2021)'
            });
var format_PontosdeCaptaoparaAbastecimentoUrbanoAtlasguas2021_12 = new ol.format.GeoJSON();
var features_PontosdeCaptaoparaAbastecimentoUrbanoAtlasguas2021_12 = format_PontosdeCaptaoparaAbastecimentoUrbanoAtlasguas2021_12.readFeatures(json_PontosdeCaptaoparaAbastecimentoUrbanoAtlasguas2021_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosdeCaptaoparaAbastecimentoUrbanoAtlasguas2021_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosdeCaptaoparaAbastecimentoUrbanoAtlasguas2021_12.addFeatures(features_PontosdeCaptaoparaAbastecimentoUrbanoAtlasguas2021_12);
var lyr_PontosdeCaptaoparaAbastecimentoUrbanoAtlasguas2021_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontosdeCaptaoparaAbastecimentoUrbanoAtlasguas2021_12, 
                style: style_PontosdeCaptaoparaAbastecimentoUrbanoAtlasguas2021_12,
                popuplayertitle: 'Pontos de Captação para Abastecimento Urbano (Atlas Águas 2021)',
                interactive: true,
                title: '<img src="styles/legend/PontosdeCaptaoparaAbastecimentoUrbanoAtlasguas2021_12.png" /> Pontos de Captação para Abastecimento Urbano (Atlas Águas 2021)'
            });
var format_EstdeTratamentodeEsgotoETEsAtlasEsgotos20132019_13 = new ol.format.GeoJSON();
var features_EstdeTratamentodeEsgotoETEsAtlasEsgotos20132019_13 = format_EstdeTratamentodeEsgotoETEsAtlasEsgotos20132019_13.readFeatures(json_EstdeTratamentodeEsgotoETEsAtlasEsgotos20132019_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstdeTratamentodeEsgotoETEsAtlasEsgotos20132019_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstdeTratamentodeEsgotoETEsAtlasEsgotos20132019_13.addFeatures(features_EstdeTratamentodeEsgotoETEsAtlasEsgotos20132019_13);
var lyr_EstdeTratamentodeEsgotoETEsAtlasEsgotos20132019_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstdeTratamentodeEsgotoETEsAtlasEsgotos20132019_13, 
                style: style_EstdeTratamentodeEsgotoETEsAtlasEsgotos20132019_13,
                popuplayertitle: 'Est. de Tratamento de Esgoto - ETEs (Atlas Esgotos 2013/2019)',
                interactive: true,
                title: '<img src="styles/legend/EstdeTratamentodeEsgotoETEsAtlasEsgotos20132019_13.png" /> Est. de Tratamento de Esgoto - ETEs (Atlas Esgotos 2013/2019)'
            });
var format_UnidadesdeTratamentoparaAbastecimentoPSAM2019_14 = new ol.format.GeoJSON();
var features_UnidadesdeTratamentoparaAbastecimentoPSAM2019_14 = format_UnidadesdeTratamentoparaAbastecimentoPSAM2019_14.readFeatures(json_UnidadesdeTratamentoparaAbastecimentoPSAM2019_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadesdeTratamentoparaAbastecimentoPSAM2019_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeTratamentoparaAbastecimentoPSAM2019_14.addFeatures(features_UnidadesdeTratamentoparaAbastecimentoPSAM2019_14);
var lyr_UnidadesdeTratamentoparaAbastecimentoPSAM2019_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeTratamentoparaAbastecimentoPSAM2019_14, 
                style: style_UnidadesdeTratamentoparaAbastecimentoPSAM2019_14,
                popuplayertitle: 'Unidades de Tratamento para Abastecimento (PSAM 2019)',
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeTratamentoparaAbastecimentoPSAM2019_14.png" /> Unidades de Tratamento para Abastecimento (PSAM 2019)'
            });
var format_FundoMscara_15 = new ol.format.GeoJSON();
var features_FundoMscara_15 = format_FundoMscara_15.readFeatures(json_FundoMscara_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundoMscara_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundoMscara_15.addFeatures(features_FundoMscara_15);
var lyr_FundoMscara_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundoMscara_15, 
                style: style_FundoMscara_15,
                popuplayertitle: 'Fundo (Máscara)',
                interactive: true,
                title: '<img src="styles/legend/FundoMscara_15.png" /> Fundo (Máscara)'
            });
var format_SubComits_16 = new ol.format.GeoJSON();
var features_SubComits_16 = format_SubComits_16.readFeatures(json_SubComits_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubComits_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubComits_16.addFeatures(features_SubComits_16);
var lyr_SubComits_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubComits_16, 
                style: style_SubComits_16,
                popuplayertitle: 'Sub-Comitês',
                interactive: true,
                title: '<img src="styles/legend/SubComits_16.png" /> Sub-Comitês'
            });
var format_SedeMunicipal_17 = new ol.format.GeoJSON();
var features_SedeMunicipal_17 = format_SedeMunicipal_17.readFeatures(json_SedeMunicipal_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SedeMunicipal_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SedeMunicipal_17.addFeatures(features_SedeMunicipal_17);
var lyr_SedeMunicipal_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SedeMunicipal_17, 
                style: style_SedeMunicipal_17,
                popuplayertitle: 'Sede Municipal',
                interactive: true,
                title: '<img src="styles/legend/SedeMunicipal_17.png" /> Sede Municipal'
            });
var format_SedeCapitalEstadual_18 = new ol.format.GeoJSON();
var features_SedeCapitalEstadual_18 = format_SedeCapitalEstadual_18.readFeatures(json_SedeCapitalEstadual_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SedeCapitalEstadual_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SedeCapitalEstadual_18.addFeatures(features_SedeCapitalEstadual_18);
var lyr_SedeCapitalEstadual_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SedeCapitalEstadual_18, 
                style: style_SedeCapitalEstadual_18,
                popuplayertitle: 'Sede Capital Estadual',
                interactive: true,
                title: '<img src="styles/legend/SedeCapitalEstadual_18.png" /> Sede Capital Estadual'
            });
var group_CAMADAS = new ol.layer.Group({
                                layers: [lyr_MassaDgua_3,lyr_EstadodoRiodeJaneiro_4,lyr_LimiteMunicipal_5,lyr_TrechodeDrenagemCBHIBGE_6,lyr_UnidadesdeConservaoProteoIntegral_7,lyr_AdutorasAtlasguas2021_8,lyr_MonitdeQualidadedaguaCBH2025_9,lyr_MonitdeQualidadedaguaINEA2022_10,lyr_UsuriosCadastradosguaSuperficialINEA2021_11,lyr_PontosdeCaptaoparaAbastecimentoUrbanoAtlasguas2021_12,lyr_EstdeTratamentodeEsgotoETEsAtlasEsgotos20132019_13,lyr_UnidadesdeTratamentoparaAbastecimentoPSAM2019_14,lyr_FundoMscara_15,lyr_SubComits_16,lyr_SedeMunicipal_17,lyr_SedeCapitalEstadual_18,],
                                fold: 'open',
                                title: 'CAMADAS'});
var group_BASEMAP = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_HereWegoTerrain_1,lyr_GoogleSatellite_2,],
                                fold: 'close',
                                title: 'BASEMAP'});

lyr_GoogleMaps_0.setVisible(false);lyr_HereWegoTerrain_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_MassaDgua_3.setVisible(true);lyr_EstadodoRiodeJaneiro_4.setVisible(true);lyr_LimiteMunicipal_5.setVisible(true);lyr_TrechodeDrenagemCBHIBGE_6.setVisible(true);lyr_UnidadesdeConservaoProteoIntegral_7.setVisible(true);lyr_AdutorasAtlasguas2021_8.setVisible(true);lyr_MonitdeQualidadedaguaCBH2025_9.setVisible(true);lyr_MonitdeQualidadedaguaINEA2022_10.setVisible(true);lyr_UsuriosCadastradosguaSuperficialINEA2021_11.setVisible(true);lyr_PontosdeCaptaoparaAbastecimentoUrbanoAtlasguas2021_12.setVisible(true);lyr_EstdeTratamentodeEsgotoETEsAtlasEsgotos20132019_13.setVisible(true);lyr_UnidadesdeTratamentoparaAbastecimentoPSAM2019_14.setVisible(true);lyr_FundoMscara_15.setVisible(true);lyr_SubComits_16.setVisible(true);lyr_SedeMunicipal_17.setVisible(true);lyr_SedeCapitalEstadual_18.setVisible(true);
var layersList = [group_BASEMAP,group_CAMADAS];
lyr_MassaDgua_3.set('fieldAliases', {'nome': 'nome', 'geometriaa': 'geometriaa', 'tipomassad': 'tipomassad', 'regime': 'regime', 'salgada': 'salgada', 'dominialid': 'dominialid', 'artificial': 'artificial', 'possuitrec': 'possuitrec', });
lyr_EstadodoRiodeJaneiro_4.set('fieldAliases', {'nome': 'nome', });
lyr_LimiteMunicipal_5.set('fieldAliases', {'nome': 'nome', 'geometriaa': 'geometriaa', 'geocodigo': 'geocodigo', 'anoderefer': 'anoderefer', });
lyr_TrechodeDrenagemCBHIBGE_6.set('fieldAliases', {'municipio': 'municipio', 'nome_dren': 'nome_dren', 'sub_bacias': 'sub_bacias', 'subcomite': 'subcomite', });
lyr_UnidadesdeConservaoProteoIntegral_7.set('fieldAliases', {'uc_id': 'uc_id', 'cd_cnuc': 'cd_cnuc', 'wdpa_pid': 'wdpa_pid', 'nome_uc': 'nome_uc', 'cria_ano': 'cria_ano', 'cria_ato': 'cria_ato', 'outro_ato': 'outro_ato', 'pl_manejo': 'pl_manejo', 'co_gestor': 'co_gestor', 'quali_pol': 'quali_pol', 'ppgr': 'ppgr', 'ha_total': 'ha_total', 'ha_ato': 'ha_ato', 'esfera': 'esfera', 'uf': 'uf', 'municipio': 'municipio', 'org_gestor': 'org_gestor', 'grupo': 'grupo', 'categoria': 'categoria', 'cat_iucn': 'cat_iucn', 'amazonia': 'amazonia', 'caatinga': 'caatinga', 'cerrado': 'cerrado', 'matlantica': 'matlantica', 'pampa': 'pampa', 'pantanal': 'pantanal', 'marinho': 'marinho', 'situacao': 'situacao', 'limite': 'limite', 'rbiosfera': 'rbiosfera', 'NomeAbrev': 'NomeAbrev', });
lyr_AdutorasAtlasguas2021_8.set('fieldAliases', {'adt_id': 'adt_id', 'adt_status': 'adt_status', 'adt_nm_adu': 'adt_nm_adu', 'adt_ramal': 'adt_ramal', 'adt_uf': 'adt_uf', 'adt_tipo': 'adt_tipo', 'adt_finali': 'adt_finali', });
lyr_MonitdeQualidadedaguaCBH2025_9.set('fieldAliases', {'Name': 'Name', 'Subcomitê': 'Subcomitê', 'Municipio': 'Municipio', });
lyr_MonitdeQualidadedaguaINEA2022_10.set('fieldAliases', {'id': 'id', 'corpo_d_á': 'corpo_d_á', 'região_hi': 'região_hi', 'localizaç': 'localizaç', 'ponto_de_c': 'ponto_de_c', 'ponto_de_1': 'ponto_de_1', 'latitude': 'latitude', 'longitude': 'longitude', 'ogc_fid': 'ogc_fid', 'localizaca': 'localizaca', 'coord_e': 'coord_e', 'coord_n': 'coord_n', 'estacao': 'estacao', 'escala': 'escala', 'layer': 'layer', 'path': 'path', });
lyr_UsuriosCadastradosguaSuperficialINEA2021_11.set('fieldAliases', {'cdregiaohi': 'cdregiaohi', 'int_cd_cna': 'int_cd_cna', 'emp_nm_emp': 'emp_nm_emp', 'tip__trech': 'tip__trech', 'tip_interf': 'tip_interf', 'int_nu_lat': 'int_nu_lat', 'int_nu_lon': 'int_nu_lon', 'ing_nm_mun': 'ing_nm_mun', 'int_dt_reg': 'int_dt_reg', 'emp_ds_bai': 'emp_ds_bai', 'out_tp_out': 'out_tp_out', 'out_tp_sit': 'out_tp_sit', 'finalidade': 'finalidade', });
lyr_PontosdeCaptaoparaAbastecimentoUrbanoAtlasguas2021_12.set('fieldAliases', {'cd_massa_d': 'cd_massa_d', 'nm_massa_d': 'nm_massa_d', 'sistema': 'sistema', 'nm_captaca': 'nm_captaca', 'nm_fantasi': 'nm_fantasi', 'tp_captaca': 'tp_captaca', 'status_man': 'status_man', 'tp_tratame': 'tp_tratame', 'nm_municip': 'nm_municip', 'geom_obs': 'geom_obs', });
lyr_EstdeTratamentodeEsgotoETEsAtlasEsgotos20132019_13.set('fieldAliases', {'ETE_CD': 'ETE_CD', 'ETE_NM': 'ETE_NM', 'ETE_ACH_CD': 'ETE_ACH_CD', 'ETE_AA_OPE': 'ETE_AA_OPE', 'ETE_DS_STA': 'ETE_DS_STA', 'ETE_DS_INT': 'ETE_DS_INT', 'ETE_DS_TOT': 'ETE_DS_TOT', 'ETE_DS_TIP': 'ETE_DS_TIP', 'ETE_NM_COR': 'ETE_NM_COR', 'ETE_QT_POP': 'ETE_QT_POP', 'ETE_PC_REM': 'ETE_PC_REM', 'ETE_PC_R_1': 'ETE_PC_R_1', 'ETE_PC_R_2': 'ETE_PC_R_2', 'ETE_MUN_CD': 'ETE_MUN_CD', 'ETE_NM_REG': 'ETE_NM_REG', 'ETE_DS_T_1': 'ETE_DS_T_1', 'ETE_DS_TI': 'ETE_DS_TI', 'ETE_CD_MUN': 'ETE_CD_MUN', 'ETE_NM_MUN': 'ETE_NM_MUN', 'ETE_UF': 'ETE_UF', 'ETE_VAZAOA': 'ETE_VAZAOA', 'ETE_TIPO_3': 'ETE_TIPO_3', 'ETE_FAIXAR': 'ETE_FAIXAR', 'ETE_CORP_1': 'ETE_CORP_1', 'ETE_ENQUAD': 'ETE_ENQUAD', 'POP_AT_EST': 'POP_AT_EST', 'REM_DBO': 'REM_DBO', 'ETE_NM_SOM': 'ETE_NM_SOM', 'layer': 'layer', 'path': 'path', });
lyr_UnidadesdeTratamentoparaAbastecimentoPSAM2019_14.set('fieldAliases', {'id': 'id', 'nome_mun': 'nome_mun', 'nome_ut': 'nome_ut', 'sistema': 'sistema', 'subsistema': 'subsistema', 'setor_abas': 'setor_abas', 'lat_ut': 'lat_ut', 'long_ut': 'long_ut', 'qnom_ut': 'qnom_ut', 'qoper_ut': 'qoper_ut', 'operadora': 'operadora', 'obs_ut': 'obs_ut', 'status': 'status', 'fonte': 'fonte', });
lyr_FundoMscara_15.set('fieldAliases', {'área__ha_': 'área__ha_', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'uhp': 'uhp', 'nome_uhp': 'nome_uhp', 'rh': 'rh', 'nome_rh': 'nome_rh', 'rios_princ': 'rios_princ', 'subcomite': 'subcomite', 'nome': 'nome', });
lyr_SubComits_16.set('fieldAliases', {'Subcomitê': 'Subcomitê', 'area_ha': 'area_ha', });
lyr_SedeMunicipal_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'geometriaa': 'geometriaa', 'nome': 'nome', 'geocodigo': 'geocodigo', });
lyr_SedeCapitalEstadual_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nome': 'nome', });
lyr_MassaDgua_3.set('fieldImages', {'nome': 'TextEdit', 'geometriaa': 'TextEdit', 'tipomassad': 'TextEdit', 'regime': 'TextEdit', 'salgada': 'TextEdit', 'dominialid': 'TextEdit', 'artificial': 'TextEdit', 'possuitrec': 'TextEdit', });
lyr_EstadodoRiodeJaneiro_4.set('fieldImages', {'nome': 'TextEdit', });
lyr_LimiteMunicipal_5.set('fieldImages', {'nome': 'TextEdit', 'geometriaa': 'TextEdit', 'geocodigo': 'TextEdit', 'anoderefer': 'TextEdit', });
lyr_TrechodeDrenagemCBHIBGE_6.set('fieldImages', {'municipio': 'TextEdit', 'nome_dren': 'TextEdit', 'sub_bacias': 'TextEdit', 'subcomite': 'TextEdit', });
lyr_UnidadesdeConservaoProteoIntegral_7.set('fieldImages', {'uc_id': 'TextEdit', 'cd_cnuc': 'TextEdit', 'wdpa_pid': 'TextEdit', 'nome_uc': 'TextEdit', 'cria_ano': 'TextEdit', 'cria_ato': 'TextEdit', 'outro_ato': 'TextEdit', 'pl_manejo': 'TextEdit', 'co_gestor': 'TextEdit', 'quali_pol': 'TextEdit', 'ppgr': 'TextEdit', 'ha_total': 'TextEdit', 'ha_ato': 'TextEdit', 'esfera': 'TextEdit', 'uf': 'TextEdit', 'municipio': 'TextEdit', 'org_gestor': 'TextEdit', 'grupo': 'TextEdit', 'categoria': 'TextEdit', 'cat_iucn': 'TextEdit', 'amazonia': 'TextEdit', 'caatinga': 'TextEdit', 'cerrado': 'TextEdit', 'matlantica': 'TextEdit', 'pampa': 'TextEdit', 'pantanal': 'TextEdit', 'marinho': 'TextEdit', 'situacao': 'TextEdit', 'limite': 'TextEdit', 'rbiosfera': 'TextEdit', 'NomeAbrev': 'TextEdit', });
lyr_AdutorasAtlasguas2021_8.set('fieldImages', {'adt_id': 'TextEdit', 'adt_status': 'TextEdit', 'adt_nm_adu': 'TextEdit', 'adt_ramal': 'TextEdit', 'adt_uf': 'TextEdit', 'adt_tipo': 'TextEdit', 'adt_finali': 'TextEdit', });
lyr_MonitdeQualidadedaguaCBH2025_9.set('fieldImages', {'Name': 'TextEdit', 'Subcomitê': 'TextEdit', 'Municipio': 'TextEdit', });
lyr_MonitdeQualidadedaguaINEA2022_10.set('fieldImages', {'id': 'TextEdit', 'corpo_d_á': 'TextEdit', 'região_hi': 'TextEdit', 'localizaç': 'TextEdit', 'ponto_de_c': 'TextEdit', 'ponto_de_1': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'ogc_fid': 'Range', 'localizaca': 'TextEdit', 'coord_e': 'TextEdit', 'coord_n': 'TextEdit', 'estacao': 'TextEdit', 'escala': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_UsuriosCadastradosguaSuperficialINEA2021_11.set('fieldImages', {'cdregiaohi': 'TextEdit', 'int_cd_cna': 'TextEdit', 'emp_nm_emp': 'TextEdit', 'tip__trech': 'TextEdit', 'tip_interf': 'TextEdit', 'int_nu_lat': 'TextEdit', 'int_nu_lon': 'TextEdit', 'ing_nm_mun': 'TextEdit', 'int_dt_reg': 'DateTime', 'emp_ds_bai': 'TextEdit', 'out_tp_out': 'TextEdit', 'out_tp_sit': 'TextEdit', 'finalidade': 'TextEdit', });
lyr_PontosdeCaptaoparaAbastecimentoUrbanoAtlasguas2021_12.set('fieldImages', {'cd_massa_d': 'TextEdit', 'nm_massa_d': 'TextEdit', 'sistema': 'TextEdit', 'nm_captaca': 'TextEdit', 'nm_fantasi': 'TextEdit', 'tp_captaca': 'TextEdit', 'status_man': 'TextEdit', 'tp_tratame': 'TextEdit', 'nm_municip': 'TextEdit', 'geom_obs': 'TextEdit', });
lyr_EstdeTratamentodeEsgotoETEsAtlasEsgotos20132019_13.set('fieldImages', {'ETE_CD': 'TextEdit', 'ETE_NM': 'TextEdit', 'ETE_ACH_CD': 'TextEdit', 'ETE_AA_OPE': 'TextEdit', 'ETE_DS_STA': 'TextEdit', 'ETE_DS_INT': 'TextEdit', 'ETE_DS_TOT': 'TextEdit', 'ETE_DS_TIP': 'TextEdit', 'ETE_NM_COR': 'TextEdit', 'ETE_QT_POP': 'TextEdit', 'ETE_PC_REM': 'TextEdit', 'ETE_PC_R_1': 'TextEdit', 'ETE_PC_R_2': 'TextEdit', 'ETE_MUN_CD': 'TextEdit', 'ETE_NM_REG': 'TextEdit', 'ETE_DS_T_1': 'TextEdit', 'ETE_DS_TI': 'TextEdit', 'ETE_CD_MUN': 'TextEdit', 'ETE_NM_MUN': 'TextEdit', 'ETE_UF': 'TextEdit', 'ETE_VAZAOA': 'TextEdit', 'ETE_TIPO_3': 'TextEdit', 'ETE_FAIXAR': 'TextEdit', 'ETE_CORP_1': 'TextEdit', 'ETE_ENQUAD': 'TextEdit', 'POP_AT_EST': 'TextEdit', 'REM_DBO': 'TextEdit', 'ETE_NM_SOM': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_UnidadesdeTratamentoparaAbastecimentoPSAM2019_14.set('fieldImages', {'id': 'TextEdit', 'nome_mun': 'TextEdit', 'nome_ut': 'TextEdit', 'sistema': 'TextEdit', 'subsistema': 'TextEdit', 'setor_abas': 'TextEdit', 'lat_ut': 'TextEdit', 'long_ut': 'TextEdit', 'qnom_ut': 'TextEdit', 'qoper_ut': 'TextEdit', 'operadora': 'TextEdit', 'obs_ut': 'TextEdit', 'status': 'TextEdit', 'fonte': 'TextEdit', });
lyr_FundoMscara_15.set('fieldImages', {'área__ha_': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'uhp': 'TextEdit', 'nome_uhp': 'TextEdit', 'rh': 'TextEdit', 'nome_rh': 'TextEdit', 'rios_princ': 'TextEdit', 'subcomite': 'TextEdit', 'nome': 'TextEdit', });
lyr_SubComits_16.set('fieldImages', {'Subcomitê': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_SedeMunicipal_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'geometriaa': 'TextEdit', 'nome': 'TextEdit', 'geocodigo': 'TextEdit', });
lyr_SedeCapitalEstadual_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'nome': 'TextEdit', });
lyr_MassaDgua_3.set('fieldLabels', {'nome': 'no label', 'geometriaa': 'no label', 'tipomassad': 'no label', 'regime': 'no label', 'salgada': 'no label', 'dominialid': 'no label', 'artificial': 'no label', 'possuitrec': 'no label', });
lyr_EstadodoRiodeJaneiro_4.set('fieldLabels', {'nome': 'no label', });
lyr_LimiteMunicipal_5.set('fieldLabels', {'nome': 'no label', 'geometriaa': 'no label', 'geocodigo': 'no label', 'anoderefer': 'no label', });
lyr_TrechodeDrenagemCBHIBGE_6.set('fieldLabels', {'municipio': 'no label', 'nome_dren': 'no label', 'sub_bacias': 'no label', 'subcomite': 'no label', });
lyr_UnidadesdeConservaoProteoIntegral_7.set('fieldLabels', {'uc_id': 'no label', 'cd_cnuc': 'no label', 'wdpa_pid': 'no label', 'nome_uc': 'no label', 'cria_ano': 'no label', 'cria_ato': 'no label', 'outro_ato': 'no label', 'pl_manejo': 'no label', 'co_gestor': 'no label', 'quali_pol': 'no label', 'ppgr': 'no label', 'ha_total': 'no label', 'ha_ato': 'no label', 'esfera': 'no label', 'uf': 'no label', 'municipio': 'no label', 'org_gestor': 'no label', 'grupo': 'no label', 'categoria': 'no label', 'cat_iucn': 'no label', 'amazonia': 'no label', 'caatinga': 'no label', 'cerrado': 'no label', 'matlantica': 'no label', 'pampa': 'no label', 'pantanal': 'no label', 'marinho': 'no label', 'situacao': 'no label', 'limite': 'no label', 'rbiosfera': 'no label', 'NomeAbrev': 'no label', });
lyr_AdutorasAtlasguas2021_8.set('fieldLabels', {'adt_id': 'no label', 'adt_status': 'no label', 'adt_nm_adu': 'no label', 'adt_ramal': 'no label', 'adt_uf': 'no label', 'adt_tipo': 'no label', 'adt_finali': 'no label', });
lyr_MonitdeQualidadedaguaCBH2025_9.set('fieldLabels', {'Name': 'no label', 'Subcomitê': 'no label', 'Municipio': 'no label', });
lyr_MonitdeQualidadedaguaINEA2022_10.set('fieldLabels', {'id': 'no label', 'corpo_d_á': 'no label', 'região_hi': 'no label', 'localizaç': 'no label', 'ponto_de_c': 'no label', 'ponto_de_1': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'ogc_fid': 'no label', 'localizaca': 'no label', 'coord_e': 'no label', 'coord_n': 'no label', 'estacao': 'no label', 'escala': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_UsuriosCadastradosguaSuperficialINEA2021_11.set('fieldLabels', {'cdregiaohi': 'no label', 'int_cd_cna': 'no label', 'emp_nm_emp': 'no label', 'tip__trech': 'no label', 'tip_interf': 'no label', 'int_nu_lat': 'no label', 'int_nu_lon': 'no label', 'ing_nm_mun': 'no label', 'int_dt_reg': 'no label', 'emp_ds_bai': 'no label', 'out_tp_out': 'no label', 'out_tp_sit': 'no label', 'finalidade': 'no label', });
lyr_PontosdeCaptaoparaAbastecimentoUrbanoAtlasguas2021_12.set('fieldLabels', {'cd_massa_d': 'no label', 'nm_massa_d': 'no label', 'sistema': 'no label', 'nm_captaca': 'no label', 'nm_fantasi': 'no label', 'tp_captaca': 'no label', 'status_man': 'no label', 'tp_tratame': 'no label', 'nm_municip': 'no label', 'geom_obs': 'no label', });
lyr_EstdeTratamentodeEsgotoETEsAtlasEsgotos20132019_13.set('fieldLabels', {'ETE_CD': 'no label', 'ETE_NM': 'no label', 'ETE_ACH_CD': 'no label', 'ETE_AA_OPE': 'no label', 'ETE_DS_STA': 'no label', 'ETE_DS_INT': 'no label', 'ETE_DS_TOT': 'no label', 'ETE_DS_TIP': 'no label', 'ETE_NM_COR': 'no label', 'ETE_QT_POP': 'no label', 'ETE_PC_REM': 'no label', 'ETE_PC_R_1': 'no label', 'ETE_PC_R_2': 'no label', 'ETE_MUN_CD': 'no label', 'ETE_NM_REG': 'no label', 'ETE_DS_T_1': 'no label', 'ETE_DS_TI': 'no label', 'ETE_CD_MUN': 'no label', 'ETE_NM_MUN': 'no label', 'ETE_UF': 'no label', 'ETE_VAZAOA': 'no label', 'ETE_TIPO_3': 'no label', 'ETE_FAIXAR': 'no label', 'ETE_CORP_1': 'no label', 'ETE_ENQUAD': 'no label', 'POP_AT_EST': 'no label', 'REM_DBO': 'no label', 'ETE_NM_SOM': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_UnidadesdeTratamentoparaAbastecimentoPSAM2019_14.set('fieldLabels', {'id': 'no label', 'nome_mun': 'no label', 'nome_ut': 'no label', 'sistema': 'no label', 'subsistema': 'no label', 'setor_abas': 'no label', 'lat_ut': 'no label', 'long_ut': 'no label', 'qnom_ut': 'no label', 'qoper_ut': 'no label', 'operadora': 'no label', 'obs_ut': 'no label', 'status': 'no label', 'fonte': 'no label', });
lyr_FundoMscara_15.set('fieldLabels', {'área__ha_': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'uhp': 'no label', 'nome_uhp': 'no label', 'rh': 'no label', 'nome_rh': 'no label', 'rios_princ': 'no label', 'subcomite': 'no label', 'nome': 'no label', });
lyr_SubComits_16.set('fieldLabels', {'Subcomitê': 'no label', 'area_ha': 'no label', });
lyr_SedeMunicipal_17.set('fieldLabels', {'OBJECTID': 'no label', 'geometriaa': 'no label', 'nome': 'no label', 'geocodigo': 'no label', });
lyr_SedeCapitalEstadual_18.set('fieldLabels', {'OBJECTID': 'no label', 'nome': 'no label', });
lyr_SedeCapitalEstadual_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});