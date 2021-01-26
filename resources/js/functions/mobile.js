/**
 * Mobile Detect
 * http://hgoebl.github.io/mobile-detect.js/
 */
let MobileDetect = require('mobile-detect'),
    md = new MobileDetect(window.navigator.userAgent);

/**
 * Função: isMobile()
 * Retorno: Boolean para se o navegador está em dispositívo móvel
 */
export function isMobile() {
    return md.mobile();
}

$(function () {
    if ($(window).innerWidth() < 1023) {
        $('.infoBar .icon_place').popup({
            position: $(this).data("position"),
            title: $(this).data("title"),
            content: $(this).data("content")
        })
    }
})

$(function () {
    if ($(window).innerWidth() < 1023) {
        $("._header").visibility({
                type: 'fixed',
                refreshOnResize: true,
                checkOnRefresh:true,
                offset: 0
        });
    }
})