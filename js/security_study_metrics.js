var dataLayer = window.dataLayer = window.dataLayer || [];
var camp = getCookie('campaign') || 'no camp';
var segment = getCookie('branch') || 'generic';
dataLayer.push({
    'language': 'de',
    'pageType': 'landing',
    'h1': '',
    'headerImage-alt': '',
    'campaign': camp,
    'segment': segment
});