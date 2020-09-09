function getCookie(strName) {
    var objCookie = document.cookie.split("; ");
    for (var i = 0; i < objCookie.length; i++) {
        var objCrumb = objCookie[i].split("=");
        if (strName == objCrumb[0])
            return unescape(objCrumb[1]);
    }
    return null;
}

function acceptCookies() {
    $('.cookies').animate({
        height: "0",
        opacity: 0
    }, 1000);
    setCookie('cookie-agreed', 'true');
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    if (!isNaN(exdays))
        exdate.setDate(exdate.getDate() + exdays);
    else
        exdays = null;
    var c_value = escape(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}
var cookies = {
    manage: function() {
        console.log('ini cookies'); 
        if (getCookie('cookie-agreed') == 'false') {
            $('.cookies').css('display', 'block');
        }
        $('.cookies-agree-button').click(function(event) {
            acceptCookies();
        });
        $('.wrapper *').click(function(event) {
            acceptCookies();
        });
    }
};

console.log(document.cookie); 