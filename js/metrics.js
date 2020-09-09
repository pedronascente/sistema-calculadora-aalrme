var dataLayer = window.dataLayer = window.dataLayer || [];
var brand = "Verisure BR";
dataLayer.push({
    'language': 'pt-br',
    'pageType': 'funnel',
    'h1': 'noData',
    'headerImage-alt': 'noData',
    'campaign': leadInfo.campaign,
    'segment': 'generic'
});
var originalSlidesConfig = {
    "slide-1": {
        "dl_shortQuestion": "funnelType",
        "dl_stepBlock": 'aboutYourInstallation'
    },
    "slide-2": {
        "dl_step": "step1",
        "dl_type": "home",
        "dl_shortQuestion": "funnelHouseType",
        "dl_stepBlock": 'aboutYourInstallation',
        "dl_virtuaPage": "/funnel/home/step1/funnelHouseType"
    },
    "slide-3": {
        "dl_step": "step2",
        "dl_type": "home",
        "dl_stepBlock": 'aboutYourInstallation',
        "dl_shortQuestion": "funnelFrequencyLiving",
        "dl_virtuaPage": "/funnel/home/step2/funnelFrequencyLiving"
    },
    "slide-4": {
        "dl_step": "step3",
        "dl_type": "home",
        "dl_stepBlock": 'aboutYourInstallation',
        "dl_shortQuestion": "funnelHouseLocation",
        "dl_virtuaPage": "/funnel/home/step3/funnelHouseLocation"
    },
    "slide-5": {
        "dl_step": "step4",
        "dl_type": "home",
        "dl_stepBlock": 'aboutYourInstallation',
        "dl_shortQuestion": "funnelHouseAccess",
        "dl_virtuaPage": "/funnel/home/step4/funnelHouseAccess"
    },
    "slide-6": {
        "dl_step": "step5",
        "dl_type": "home",
        "dl_stepBlock": 'aboutYourInstallation',
        "dl_shortQuestion": "funnelSecondaryAccess",
        "dl_virtuaPage": "/funnel/home/step5/funnelSecondaryAccess"
    },
    "slide-7": {
        "dl_step": "step6",
        "dl_type": "home",
        "dl_stepBlock": 'aboutYourInstallation',
        "dl_shortQuestion": "funnelGrilledWindows",
        "dl_virtuaPage": "/funnel/home/step6/funnelGrilledWindows"
    },
    "slide-8": {
        "dl_step": "step7",
        "dl_type": "home",
        "dl_stepBlock": 'security',
        "dl_shortQuestion": "funnelTimeInhabitedHouse",
        "dl_virtuaPage": "/funnel/home/step7/funnelTimeInhabitedHouse"
    },
    "slide-9": {
        "dl_step": "step8",
        "dl_type": "home",
        "dl_stepBlock": 'security',
        "dl_shortQuestion": "funnelRobbedHouse",
        "dl_virtuaPage": "/funnel/home/step8/funnelRobbedHouse"
    },
    "slide-10": {
        "dl_step": "step9",
        "dl_type": "home",
        "dl_stepBlock": 'security',
        "dl_virtuaPage": "/funnel/home/step9/phoneNumber"
    },
    "slide-11": {
        "dl_step": "step10",
        "dl_type": "home",
        "dl_stepBlock": 'security',
        "dl_virtuaPage": "/funnel/home/step11/leadSent"
    },
    "slide-12": {
        "dl_step": "step1",
        "dl_type": "business",
        "dl_stepBlock": 'aboutYourInstallation',
        "dl_shortQuestion": "funnelBusinessAccess",
        "dl_virtuaPage": "/funnel/business/step1/funnelBusinessAccess"
    },
    "slide-13": {
        "dl_step": "step2",
        "dl_type": "business",
        "dl_stepBlock": 'aboutYourInstallation',
        "dl_shortQuestion": "funnelBusinessLocation",
        "dl_virtuaPage": "/funnel/business/step2/funnelBusinessLocation"
    },
    "slide-14": {
        "dl_step": "step3",
        "dl_type": "business",
        "dl_stepBlock": 'aboutYourInstallation',
        "dl_shortQuestion": "funnelNumberEmployees",
        "dl_virtuaPage": "/funnel/business/step3/funnelNumberEmployees"
    },
    "slide-15": {
        "dl_step": "step4",
        "dl_type": "business",
        "dl_stepBlock": 'aboutYourInstallation',
        "dl_shortQuestion": "funnelOpeningHours",
        "dl_virtuaPage": "/funnel/business/step4/funnelOpeningHours"
    },
    "slide-16": {
        "dl_step": "step5",
        "dl_type": "business",
        "dl_stepBlock": 'aboutYourInstallation',
        "dl_shortQuestion": "funnelGoodsValue",
        "dl_virtuaPage": "/funnel/business/step5/funnelGoodsValue"
    },
    "slide-17": {
        "dl_step": "step8",
        "dl_type": "business",
        "dl_stepBlock": 'security',
        "dl_shortQuestion": "funnelRobbedBusiness",
        "dl_virtuaPage": "/funnel/business/step8/funnelRobbedBusiness"
    },
    "slide-18": {
        "dl_step": "step9",
        "dl_type": "business",
        "dl_stepBlock": 'security',
        "dl_virtuaPage": "/funnel/business/step9/phoneNumber"
    },
    "slide-19": {
        "dl_step": "step10",
        "dl_type": "business",
        "dl_stepBlock": 'security',
        "dl_virtuaPage": "/funnel/business/step10/leadSent"
    }
};

function getPrevSlide(slide) {
    return slidesShowed[slidesShowed.length - 2];
}

function pushNewDataLayer(step, slide) {
    var prevSlide = getPrevSlide(slide);
    switch (slide) {
        case 'slide-2':
            leadInfo.funnelType = 'home';
            dataLayer.push({
                'event': 'funnelNewAnswer',
                'funnelName': leadInfo.funnelName,
                'funnelType': leadInfo.funnelType,
                'funnelID': leadInfo.funnelID,
                'funnelLocation': leadInfo.funnelLocation,
                'funnelPrevStepNumber': '0',
                'funnelPrevAnswer': 'home',
                'funnelStepNumber': slidesConfig[slide].dl_step,
                'funnelPrevShortQuestion': '',
                'virtualPage': slidesConfig[slide].dl_virtuaPage,
                'segment': leadInfo.funnelType
            });
            metrics.dlPushFunnel('step1');
            break;
        case 'slide-13':
            leadInfo.funnelType = 'business';
            dataLayer.push({
                'event': 'funnelNewAnswer',
                'funnelName': leadInfo.funnelName,
                'funnelType': leadInfo.funnelType,
                'funnelID': leadInfo.funnelID,
                'funnelLocation': leadInfo.funnelLocation,
                'funnelPrevStepNumber': '0',
                'funnelPrevAnswer': 'business',
                'funnelStepNumber': slidesConfig[slide].dl_step,
                'funnelPrevShortQuestion': '',
                'virtualPage': slidesConfig[slide].dl_virtuaPage,
                'segment': leadInfo.funnelType
            });
            metrics.dlPushFunnel('step1');
            break;
        default:
            dataLayer.push({
                'event': 'funnelNewAnswer',
                'funnelName': leadInfo.funnelName,
                'funnelType': leadInfo.funnelType,
                'funnelID': leadInfo.funnelID,
                'funnelLocation': leadInfo.funnelLocation,
                'funnelPrevStepNumber': slidesConfig[prevSlide].dl_step,
                'funnelPrevAnswer': answers[(answers.length) - 1],
                'funnelStepNumber': slidesConfig[slide].dl_step,
                'funnelPrevShortQuestion': slidesConfig[prevSlide].dl_shortQuestion,
                'virtualPage': slidesConfig[slide].dl_virtuaPage
            });
            break;
    }
}
var metrics = {
    ini: function() {
        var dataLayer = window.dataLayer = window.dataLayer || [];
    },
    dlPushFunnel: function(step) {
        switch (step) {
            case 'step1':
                dataLayer.push({
                    "event": "checkout",
                    'funnelName': leadInfo.funnelName,
                    'funnelLocation': leadInfo.funnelLocation,
                    'funnelType': leadInfo.funnelType,
                    'funnelID': leadInfo.funnelID,
                    "ecommerce": {
                        "checkout": {
                            "actionField": {
                                "step": 1
                            },
                            "products": [{
                                "id": "alarm-001",
                                "name": "alarm",
                                "price": "1",
                                "brand": brand,
                                "category": "calculator",
                                "virtualPage": "/funnel/calculator/entryToFunnel",
                                "quantity": 1
                            }]
                        }
                    }
                });
                break;
            case 'pre-step2-home':
                dataLayer.push({
                    'event': 'funnelNewAnswer',
                    'funnelAnswer': 'calculator',
                    'funnelName': leadInfo.funnelName,
                    'funnelLocation': leadInfo.funnelLocation,
                    'funnelType': 'home',
                    'funnelID': leadInfo.funnelID,
                    'funnelPrevShortQuestion': 'phoneNumber',
                    'funnelPrevStepNumber': 'step10',
                    'funnelStepNumber': 'step11',
                    'funnelShortQuestion': 'leadSent',
                    'virtualPage': '/funnel/home/step12/leadSent',
                });
                break;
            case 'pre-step2-business':
                dataLayer.push({
                    'event': 'funnelNewAnswer',
                    'funnelAnswer': 'calculator',
                    'funnelName': leadInfo.funnelName,
                    'funnelLocation': leadInfo.funnelLocation,
                    'funnelType': 'business',
                    'funnelID': leadInfo.funnelID,
                    'funnelPrevShortQuestion': 'phoneNumber',
                    'funnelPrevStepNumber': 'step8',
                    'funnelStepNumber': 'step9',
                    'funnelShortQuestion': 'leadSent',
                    'virtualPage': '/funnel/business/step11/leadSent'
                });
                break;
            case 'step2':
                dataLayer.push({
                    'event': 'checkout',
                    'funnelName': leadInfo.funnelName,
                    'funnelLocation': leadInfo.funnelLocation,
                    'funnelType': leadInfo.funnelType,
                    'funnelID': leadInfo.funnelID,
                    'funnelLeadID': '',
                    'productType': 'generic',
                    'ecommerce': {
                        'checkout': {
                            'actionField': {
                                'step': '2'
                            },
                            'products': [{
                                'id': 'alarm-001',
                                'name': 'alarm',
                                'price': '1',
                                'brand': brand,
                                'category': 'calculator',
                                'quantity': 1
                            }]
                        }
                    }
                });
                break;
            case 'step3-home':
                dataLayer.push({
                    'event': 'checkout',
                    'funnelName': leadInfo.funnelName,
                    'funnelLocation': leadInfo.funnelLocation,
                    'funnelType': leadInfo.funnelType,
                    'funnelID': leadInfo.funnelID,
                    'funnelLeadID': leadInfo.funnelLeadID,
                    'productType': 'generic',
                    'ecommerce': {
                        'checkout': {
                            'actionField': {
                                'step': '3'
                            },
                            'products': [{
                                'id': 'alarm-001',
                                'name': 'alarm',
                                'price': '1',
                                'brand': brand,
                                'category': 'calculator',
                                'virtualPage': '/funnel/home/step12/leadSent',
                                'quantity': 1
                            }]
                        }
                    }
                });
                break;
            case 'step3-business':
                dataLayer.push({
                    'event': 'checkout',
                    'funnelName': leadInfo.funnelName,
                    'funnelLocation': leadInfo.funnelLocation,
                    'funnelType': leadInfo.funnelType,
                    'funnelID': leadInfo.funnelID,
                    'funnelLeadID': leadInfo.funnelLeadID,
                    'productType': 'generic',
                    'ecommerce': {
                        'checkout': {
                            'actionField': {
                                'step': '3'
                            },
                            'products': [{
                                'id': 'alarm-001',
                                'name': 'alarm',
                                'price': '1',
                                'brand': brand,
                                'category': 'calculator',
                                'virtualPage': '/funnel/business/step11/leadSent',
                                'quantity': 1
                            }]
                        }
                    }
                });
                break;
        }
    },
    dlError: function(tipo) {
        switch (tipo) {
            case 'blacklist':
                dataLayer.push({
                    'funnelLocation': leadInfo.funnelLocation,
                    'error': 'Blacklist',
                    'event': 'formError'
                });
                break;
            case 'duplicated':
                dataLayer.push({
                    'funnelLocation': leadInfo.funnelLocation,
                    'error': 'Duplicated',
                    'event': 'formError'
                });
                break;
            case 'not-valid':
                dataLayer.push({
                    'funnelLocation': leadInfo.funnelLocation,
                    'error': 'Not Valid',
                    'event': 'formError'
                });
                break;
            case 'emptyfield':
                dataLayer.push({
                    'funnelLocation': leadInfo.funnelLocation,
                    'error': 'Empty field',
                    'event': 'formError'
                });
                break;
            case 'postalCodeEmpty':
                dataLayer.push({
                    'funnelLocation': leadInfo.funnelLocation,
                    'error': 'postalCode Empty',
                    'event': 'formError'
                });
                break;
            case 'postalCodeError':
                dataLayer.push({
                    'funnelLocation': leadInfo.funnelLocation,
                    'error': 'postalCode Error',
                    'event': 'formError'
                });
                break;
            case 'rejected-ws':
                dataLayer.push({
                    'funnelLocation': leadInfo.funnelLocation,
                    'error': 'Rejected WS',
                    'event': 'formError'
                });
                break;
            default:
                dataLayer.push({
                    'funnelLocation': leadInfo.funnelLocation,
                    'error': 'Undefined Error',
                    'event': 'formError'
                });
                break;
        }
    }
};

