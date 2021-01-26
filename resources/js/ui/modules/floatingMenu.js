import {isMobile} from '../../functions/mobile';

$(document).ready(function () {
    /**
     * Monagem do Menu Flutuante
     * Checa se o dispositivo não é Mobile para poder ativar ele
     */
    //if (!isMobile()) {
        // $("._header").visibility({
        //     type: 'fixed',
        //     refreshOnResize: true,
        //     checkOnRefresh:true,
        //     offset: 0
        // });

        // $(".menuheader .ui.menu > li:gt(2)").addClass("right"), $(window).scroll(function() {
        //   $(window).scrollTop() > 97 ? ($("ui.container.fluid._header").addClass("out"), $(".menuheader").addClass("fixed")) : ($("ui.container.fluid._header").removeClass("out"), $(".menuheader").removeClass("fixed"))
        //   });

        // botao voltar ao topo
        $("body").append("<a href='#' style='display: none;' class='scrollToTopButton'><span data-tooltip='Voltar ao topo' data-position='left center'></span></a>"), $(window).scroll(function() {
            $(this).scrollTop() > 100 ? $(".scrollToTopButton").fadeIn() : $(".scrollToTopButton").fadeOut()
        }), $(".scrollToTopButton").click(function() {
            return $("html, body").animate({
                scrollTop: 0
            }, 800), !1
        });

        // Head - topo fixo
        // $('.topo-fixo').click(function (e) {
        //     e.preventDefault()
        //     $(this).toggleClass('ativo')
        //     $('.topo-fixo .ui.container.fluid.menuheader').toggle()
        //   })

          $(this).scroll(function () {
            fixatopo()
          })

          function fixatopo() {
            if ($(window).scrollTop() != 0) {
              $('.topo-fixo').addClass('fixed')
            } else {
              $('.topo-fixo').removeClass('fixed')
            }
          }
    //}
});