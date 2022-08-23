//menuscroll
$(function() {
    $("a.scr").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length) return $("html,body").animate({
                scrollTop: e.offset().top - 70
            }, "slow"),$(".menu, .menu-icon, body").removeClass("active"), !1
        };
        
    });
});

$(".menu-icon").click(function(){
    $(".menu-icon, .menu, body").toggleClass("active")
});

$('.car').owlCarousel({
    dots: true,
    navText:"",
    nav: true,
    items: 1,

});





function e() {
    $.fancybox.close();
    $.fancybox.open({
        src: '#thanks',
        type: 'inline',
    });
    //fbq('track', 'Purchase', {value: '38.00', currency:'USD'});
    //ga('send','pageview','/thanks.html');
    $("input[type=text], input[type=tel], input[type=email], textarea").val("");
};


//map//map   
/*$("#jquery").after('<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&onload=mm"></script>');

function mm() {
    var map = new ymaps.Map("map", {
        center: [55.793844, 37.706452],
        zoom: 16,
        controls: ["zoomControl"],
        type: "yandex#map",
        behaviors: ['drag', 'dblClickZoom']
    }, {
        suppressMapOpenBlock: true
    });
    map.geoObjects.add(new ymaps.GeoObject(
        {
        geometry: {
            type: "Point",
            coordinates: [55.793844, 37.706452]
        },
        properties: {
            balloonContent: decodeURIComponent("<p style='text-align:center; paddong:15px; display:inline-block;'><img src='img/logo.svg' width='100'><br><br><b>Р С–. Р СљР С•РЎРѓР С”Р Р†Р В° Р ВР В»Р ВµР С”РЎвЂљРЎР‚Р С•Р В·Р В°Р Р†Р С•Р Т‘РЎРѓР С”Р В°РЎРЏ РЎС“Р В».33 РЎРѓ5<b><p/>"),
            iconCaption: decodeURIComponent(""),
            hintCaption: decodeURIComponent(""),
        }
    },
        {
        iconLayout: "default#image",
        iconImageSize: [64, 64],
        iconImageOffset: [-32, -64],
        iconImageHref: "img/icons/location.svg",
        }
    ));

}*/