var home_selected_answers = [2, 7, 5, 9, 8, 0, 6, 0, 3, 0, 4, 0];
var business_selected_answers = [2, 0, 3, 7, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var respuestas_array = [];
$(document).ready(function() {
    $.each($('.funnel input'), function(index, value) {
        if (global_branch == 'home') {
            $(this).addClass('response-' + home_selected_answers[index]);
        } else {
            $(this).addClass('response-' + business_selected_answers[index]);
        }
    });
    if ((global_answersFunnel.length % 2) == 0) {
        for (i = 0; i < global_answersFunnel.length; i++) {
            _t = global_answersFunnel.slice(i, i + 2);
            respuestas_array.push(_t);
            i += 1;
        }
    }
    for (i = 0; i < respuestas_array.length + 1; i++) {
        console.log(translations.funnel[codifications.fromEDS[respuestas_array[i - 1]]]);
        $('.funnel .response-' + i).val(translations.funnel[codifications.fromEDS[respuestas_array[i - 1]]]);
    }
    var date = new Date();
    $('.year').html(date.getFullYear());
    if (getCookie("atendemosDDD") == "false") {
        if (camp.toLowerCase().includes('site') || camp.toLowerCase().includes('fb') || camp.toLowerCase().includes('facebook') || camp.toLowerCase().includes('google_')) {
            console.log('los origins')
            $('.tkp-ddd').removeClass('tkp-ddd--no');
        } else {
            $('.tkp-ddd').addClass('tkp-ddd--no');
        }
    } else {
        $('.tkp-ddd').removeClass('tkp-ddd--no');
    }
});