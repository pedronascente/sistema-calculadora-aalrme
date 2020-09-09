function mtel(v) {
    v = v.replace(/\D/g, "");
    if (v[0] == '0') {
        v = v.substring(1);
    }
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    return v;
}
$(document).ready(function() {
    var d = new Date();
    var lastDayOfMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0);
    var month = literales.dateMonth;
    $('.oferta-fin').html(lastDayOfMonth.getDate() + ' ' + month[d.getMonth()] + ' ' + d.getFullYear());
    $('.year').html(d.getFullYear());
    $('.popup-link').magnificPopup({
        type: 'inline',
        midClick: false,
        removalDelay: 300,
        fixedContentPos: true,
        fixedBgPos: true,
        mainClass: 'mfp-fade'
    });
    $('#closePopupButton').click(function(event) {
        event.preventDefault();
        var magnificPopup = $.magnificPopup.instance;
        magnificPopup.close();
    });
    $('#popupOferta').click(function(event) {
        event.preventDefault();
        var magnificPopup = $.magnificPopup.instance;
        magnificPopup.close();
    });
    $('#preg10_input_1').on('keyup', function() {
        $(this).val(mtel($(this).val()))
    })
    $('#preg18_input_1').on('keyup', function() {
        $(this).val(mtel($(this).val()))
    })
    var camp = gup('camp');
    if (camp.toLowerCase().indexOf("facebook") >= 0) {
        $('body').addClass('camp-fb');
    }
});

