var dataLayer = window.dataLayer = window.dataLayer || [];
ramaSlides = '';
stepNo = 1;
var answers = [];
var slidesShowed = [];
slidesShowed.push('slide-1');
var slidesConfig = originalSlidesConfig;

function showSlide(slide) {
    slidesShowed.push(slide.attr('id'));
    setTimeout(function() {
        $('#slides>article').css('display', 'none');
        setTimeout(function() {
            slide.css('display', 'block');
            $('#time-secs').html($('#time-secs').html() - 6);
        }, 100);
    }, 500);
    if (slide.attr('id') == 'slide-7' || slide.attr('id') == 'slide-16') {
        $('#tab-instalacion').removeClass('current').addClass('prev');
        $('#tab-seguridad').removeClass('next').addClass('current');
        $('#tab-precio').addClass('next');
    }
    pushNewDataLayer(stepNo, slide.attr('id'));
    stepNo++;
}

$(document).ready(function() {
    $('#slide-1').css('display', 'block');
    $('#cargando').css('display', 'none');
    $('#tab-instalacion').addClass('current');
    $('#tab-seguridad').addClass('next');
    $('#slides').css('min-height', '590px');
    dataLayer.push({
        'event': 'funnelNewAnswer0',
        'funnelName': leadInfo.funnelName,
        'funnelStepNumber': '0',
        'funnelShortQuestion': 'selectFunnelType',
        'virtualPage': '/funnel/step0/entryToFunnel'
    });

    $('label').click(function(event) {
        event.preventDefault();
        if ($(this).attr('for') == 'preg10_input_1' || $(this).attr('for') == 'preg18_input_1') {
            return;
        }
        $(this).addClass('active');
        $(this).next().attr('checked', 'checked');
        response = $(this).next().val();
        answers.push(response);
        if (response == 'business') {
            if (stepNo == 1) {
                ramaSlides = 'business';
            }
            showSlide($('#slide-12'));
        } else {
            if (stepNo == 1) {
                ramaSlides = 'home';
            }
            showSlide($(this).parent().parent().parent().next());
        }
        console.log(answers);
    });
});