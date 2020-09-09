var globalVars = {
    getCampaign: function() {
        if (typeof gup('camp') === 'undefined' || gup('camp') === null || gup('camp') === "") {
            setCookie('campaign', 'site', 1);
            return 'site';
        } else {
            setCookie('campaign', gup('camp'), 1);
            return gup('camp');
        }
    },
    getDevice: function() {
        if (typeof global_device === 'undefined' || global_device === null) {
            return 'noDeviceDetected';
        } else {
            return global_device;
        }
    },
    getSegment: function() {
        if (typeof global_segment === 'undefined' || global_segment === null) {
            return 'generic';
        } else {
            return global_segment;
        }
    },
    getUniqueID: function() {
        var id_random = Math.floor(Math.random() * 99) + 1;
        id_random = ("0" + id_random).slice(-2);
        var id_prev = new Date().getTime().toString();
        var id = id_prev + id_random;
        return id;
    }
};

function gup(name) {
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var tmpURL = window.location.href;
    var results = regex.exec(tmpURL);
    if (results == null)
        return "";
    else
        return results[1];
}

function allInfo() {
    var stringEDS = [];
    for (var i = 0; i < answers.length; i++) {
        stringEDS += codifications.toEDS[answers[i]];
          //stringEDS.push( answers[i]);  ;
    }
    console.log(stringEDS);
    return stringEDS;
}
