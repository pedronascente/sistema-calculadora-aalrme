var calculatorName = "calculadora";
//var endpoint = "https://alarmas.securitasdirect.es/mail/send/brasil/send";
//var sdurlfinal = "https://www.verisure.com.br/lp/" + calculatorName + "/obrigado.php?camp=";
//var sdurlfalta = "https://www.verisure.com.br/lp/error/not-send.php";

var endpoint =  "http://localhost/" + calculatorName + "/obrigado.php?camp=";

var sdurlfinal =  "http://localhost/" + calculatorName + "/obrigado.php?camp=";

//var sdurlfinal = "https://localhost/lp/" + calculatorName + "/obrigado.php?camp=";
//var sdurlfalta = "https://localhost/lp/error/not-send.php";

var campaignFull = "";
if (globalVars.getDevice() == "mobile") {
    campaignFull = "_m_calculadora";
} else {
    campaignFull = "_calculadora";
}

var leadInfo = {
    campaign: globalVars.getCampaign() + campaignFull,
    device: globalVars.getDevice(),
    funnelName: 'Calculator BR',
    funnelLocation: 'calculator',
    funnelType: globalVars.getSegment(),
    funnelID: globalVars.getUniqueID(),
    funnelLeadID: '',
    channel: 'calculator',
    validDDD: ['11', '12', '13', '15', '16', '19', '21', '22', '24', '31', '41', '47', '48', '51', '61', '62', '71'],
    type: 'noDataLoaded',
    robbed: 'noDataLoaded',
    typePremise: 'noDataLoaded',
    ga_clientID: function() {
        if (typeof(window.clientID) == "undefined" || window.clientID == null) {
            return "noGA_clientIDLoaded";
        } else {
            return window.clientID;
        }
    },
    loading: function() {
        $.magnificPopup.open({
            items: {
                src: '../resources/loading/loading.php',
                type: 'iframe'
            },
            modal: true
        });
    },
    sendLead: function(telf, cad) {
        $('#frmSolicitud').attr('action', endpoint);
        $("#frmSolicitud input[name=REDIRECT]").val(sdurlfinal + leadInfo.campaign);
        $("#frmSolicitud input[name=sdasunto]").val(leadInfo.campaign);
        $("#frmSolicitud input[name=sdOrigen]").val(leadInfo.campaign);
        $("#frmSolicitud input[name=Observaciones]").val(cad);    
        $("#frmSolicitud input[name=Telefono1]").val(telf);
        $("#frmSolicitud input[name=strIdUnico]").val(leadInfo.funnelLeadID);
        if (leadInfo.funnelType == "home")
            metrics.dlPushFunnel('step3-home', leadInfo.funnelID, 'home', leadInfo.funnelLeadID);
        else
            metrics.dlPushFunnel('step3-business', leadInfo.funnelID, 'business', leadInfo.funnelLeadID);
        $("#frmSolicitud").find('input').each(function() {
            if ($(this).val() == "")
                $(this).val("noDataLoaded");
        });
        console.log("Submiting form...");
        $('#frmSolicitud').submit();
    }
};
var normalize = (function() {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",
        to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
        mapping = {};
    for (var i = 0, j = from.length; i < j; i++)
        mapping[from.charAt(i)] = to.charAt(i);
    return function(str) {
        var ret = [];
        for (var i = 0, j = str.length; i < j; i++) {
            var c = str.charAt(i);
            if (mapping.hasOwnProperty(str.charAt(i)))
                ret.push(mapping[c]);
            else
                ret.push(c);
        }
        return ret.join('');
    }
})();
var thirdError = ['0', '1', '6', '7', '8', '9'];

function validateTelephone(value) {
    value = value.replace(' ', '');
    value = value.replace(/[()-]/g, '');
    value = value.replace(/ /g, '');
    var re = /^\d{9,15}$/;
    var telfDDD = value.substring(0, 2);
    var thirdNum = value.substring(2, 3);
    if (value == "") {
        metrics.dlError('emptyfield');
        writeError('emptyfield');
        return false;
    }
    

/*
if (leadInfo.validDDD.indexOf(telfDDD) < 0) {
        setCookie("atendemosDDD", false);
    } else {
        setCookie("atendemosDDD", true);
    }
*/


    if (!re.test(value)) {
        metrics.dlError('not-valid');
        writeError('not-valid');
        return false;
    }
    if (thirdError.indexOf(thirdNum) < 0 && value.length != 10) {
        console.log('fijo error')
        metrics.dlError('not-valid-br');
        writeError('not-valid-br');
        return false;
    } else if (thirdNum == 9 && value.length != 11) {
        console.log('movil error')
        metrics.dlError('not-valid-br');
        writeError('not-valid-br');
        return false;
    } else if (thirdError.indexOf(thirdNum) >= 0 && thirdNum != 9) {
        console.log('error')
        metrics.dlError('not-valid-br');
        writeError('not-valid-br');
        return false;
    }
    return true;
}

function writeError(errorCase) {
    $('.error-message').remove();
    if (answers[0] == 'home') {
        wrapper = $('#preg10_input_1');
        wrapperParent = wrapper.parent();
    }
    if (answers[0] == 'business') {
        wrapper = $('#preg18_input_1');
        wrapperParent = wrapper.parent();
    }
    switch (errorCase) {
        case 'emptyfield':
            $(wrapperParent).prepend('<div class="error-message">' + translations.errores.emptyfield + '<div>');
            $(wrapper).css('border', 'solid 2px  #ff0033');
            break;
        case 'blacklist':
            $(wrapperParent).prepend('<div class="error-message">' + translations.errores.telephoneBlacklist + '<div>');
            $(wrapper).css('border', 'solid 2px  #ff0033');
            break;
        case 'not-valid':
            $(wrapperParent).prepend('<div class="error-message">' + translations.errores.telephoneNotValid + '<div>');
            $(wrapper).css('border', 'solid 2px  #ff0033');
            break;
        case 'not-valid-br':
            $(wrapperParent).prepend('<div class="error-message">' + translations.errores.telephoneNotValidBr + '<div>');
            $(wrapper).css('border', 'solid 2px  #ff0033');
            break;
        case 'duplicated':
            $(wrapperParent).prepend('<div class="error-message">' + translations.errores.telephoneDuplicated + '<div>');
            $(wrapper).css('border', 'solid 2px  #ff0033');
            break;
        case 'wrongDDD':
            $(wrapperParent).prepend('<div class="error-message">' + translations.errores.telephoneWrongDDD + '<div>');
            $(wrapper).css('border', 'solid 2px  #ff0033');
            break;
        case 'zero':
            $(wrapperParent).prepend('<div class="error-message">' + translations.errores.telephoneZero + '<div>');
            $(wrapper).css('border', 'solid 2px  #ff0033');
            break;
    }
    $('#preg10').find('input[type=submit]').prop('disabled', false);
    $('#preg18').find('input[type=submit]').prop('disabled', false);
}

function isDuplicated(telf) {
    var prevPhone = getCookie("telefono");
    if (telf == prevPhone) {
        metrics.dlError('duplicated');
        writeError('duplicated');
        return false;
    }
    return true;
}

function hasZero(telf) {
    if (telf.charAt(0) == '0') {
        metrics.dlError('zero');
        writeError('zero');
        return false;
    }
    return true;
}

function formattingPhoneToDE(telf) {
    telf = telf.replace(/-/g, '');
    telf = telf.replace(/\s/g, '');
    var isZeroFirst = /^0/;
    var fullPrefix = /^0049/;
    var shortPrefix = /^[+]49/;
    if (fullPrefix.test(telf)) {
        return telf;
    }
    if (shortPrefix.test(telf)) {
        telf = telf.replace(/^[+]49/, "0049");
        return telf;
    }
    if (isZeroFirst.test(telf)) {
        telf = telf.replace(/^0/, "0049");
        return telf;
    } else {
        telf = "0049" + telf;
        return telf;
    }
}

function sendForm() {
    switch (leadInfo.funnelType) {
        case 'home':
            telf = $('#preg10_input_1').val();
            break;
        case 'business':
            telf = $('#preg18_input_1').val();
            break;
        default:
            telf = "";
    }
    if (validateTelephone(telf) === true && isDuplicated(telf) != false && hasZero(telf) != false) {
            var cad = "";
            if (leadInfo.funnelType == 'home') {
            cad = cad + "Roubada anteriormente: " + translations.funnel[$('input[name=preg9_respuesta]:checked').val()] + "-\t";
            cad = cad + "Como é a sua residência: " + translations.funnel[$('input[name=preg2_respuesta]:checked').val()] + "-\t";
            cad = cad + "Tempo a casa permanece desabitada: " + translations.funnel[$('input[name=preg8_respuesta]:checked').val()];
            } else {
            cad = "\tTipo: " + cad + "-\t";
            cad = cad + "Roubada anteriormente: " + translations.funnel[$('input[name=preg17_respuesta]:checked').val()] + "-\t";
            cad = cad + "Como é a sua empresa:" + translations.funnel[$('input[name=preg12_respuesta]:checked').val()] + "-\t";
            }
            cad = cad.replace(/-/g, "\n");
            cad = "\n" + cad;
            cad = normalize(cad);
            telf = telf.replace(' ', '');
            telf = telf.replace(/[()-]/g, '');
            telf = telf.replace(/ /g, '');
            var telfDDD = telf.substring(0, 2);
            dataLayer.push({
            'ddd': telfDDD
            });
            var codificacion = allInfo();
            var leadPanelUrl = 'noSecurityStudy';
            var leadPanelParams = '';
            var security_study = leadPanelUrl + leadPanelParams;
            leadInfo.funnelLeadID = globalVars.getUniqueID();
            metrics.dlPushFunnel('step2');
            setCookie("answers", codificacion);
            setCookie("branch", leadInfo.funnelType);
            leadInfo.sendLead(telf, cad);

    } else {
        $('#preg10').find('input[type=submit]').prop('disabled', false);
        $('#preg18').find('input[type=submit]').prop('disabled', false);
        return false;
    }
}

console.log(document.cookie); 