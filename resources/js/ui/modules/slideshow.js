window.addEventListener('load', function () {
  Slideshow($(".slideshow"));
})

export function Slideshow(elements) {
  elements.each(function () {

    if ($(this).closest(".no-slideshow").length == 0) {
      let $sliderCard = jQuery(".card", this).length > 0 ? jQuery(".card", this) : jQuery(".slideshow-item", this),
        $slider = jQuery(this),
        $slidesToShow = ($(this).data("qtd") != null || $(this).data("qtd") != undefined) ? $(this).data("qtd") : 4,
        $arrows = ($(this).data("arrow") != null ? $(this).data("arrow") : true),
        $dots = ($(this).data("dots") != null ? $(this).data("dots") : false),
        $auto = ($(this).data("auto") != null ? true : false),
        $infinite = ($(this).data("qtd") == 1 || $(this).data("infinite") ? true : false),
        breakpoints = [
            { breakpoint: 1319, slides: $slidesToShow == 1 ? 1 : 4 },
            { breakpoint: 1025, slides: $slidesToShow == 1 ? 1 : 3 },
            { breakpoint: 769, slides: $slidesToShow == 1 ? 1 : 2 },
            { breakpoint: 569, slides: $slidesToShow == 1 ? 1 : 1 }
        ],
        settings = {
          prevArrow: '<a class="slick-prev ui mini button basic icon"><i class="chevron left icon"></i></a>',
          nextArrow: '<a class="slick-next ui mini button basic icon"><i class="chevron right icon"></i></a>',
          arrows: $arrows,
          dots: $dots,
          slidesToShow: $sliderCard.hasClass("card") ? $slidesToShow : $sliderCard.length > $slidesToShow ? $slidesToShow : $sliderCard.length,
          accessibility: false,
          autoplay: $auto,
          autoplaySpeed: 6000,
          infinite: $infinite,
          responsive: [
            {
              breakpoint: breakpoints[0].breakpoint,
              settings: {
                slidesToShow: $sliderCard.length >= breakpoints[0].slides ? breakpoints[0].slides : $sliderCard.length
              }
            },
            {
              breakpoint: breakpoints[1].breakpoint,
              settings: {
                slidesToShow: $sliderCard.length >= breakpoints[1].slides ? breakpoints[1].slides : $sliderCard.length
              }
            },
            {
              breakpoint: breakpoints[2].breakpoint,
              settings: {
                slidesToShow: $sliderCard.length >= breakpoints[2].slides ? breakpoints[2].slides : $sliderCard.length
              }
            },
            {
              breakpoint: breakpoints[3].breakpoint,
              settings: {
                slidesToShow: $sliderCard.length >= breakpoints[3].slides ? breakpoints[3].slides : $sliderCard.length
              }
            }
          ]
        };

        // == Tratativa para evitar quebra do carrossel no Edge
        if ($sliderCard.hasClass("product-in-card"))
          $slider.removeAttr("class").addClass("slideshow container-product-cards");

        $slider.slick(settings);
    }
  });
}

/* Instagram */

$(document).ready(
  
  function() {
   function inst_api () {
     var api = 'https://www.instagram.com/jetebusiness/?__a=1';
     $.getJSON(
      api,
       function (data) {
         var src = data.graphql.user.edge_owner_to_timeline_media.edges;
         for(var imgs in src) {
           var display = src[imgs].node.display_url;
           var img_src = src[imgs].node.thumbnail_resources[2].src;
           //console.log(src[imgs])
           var img = '<img src="'+ img_src +'" alt="">'
           $(".instaslider").slick("slickAdd", '<a href='+ display +'><div>'+ img +'</div></a>');
         }
       }
     )
   };
     
   inst_api (); 
     
    function slick () {
      $('.instaslider').slick({
        dots: false,
      //autoplay: true,
   prevArrow: '<a class="slick-prev ui mini button basic icon"><i class="chevron left icon"></i></a>',
     nextArrow: '<a class="slick-next ui mini button basic icon"><i class="chevron right icon"></i></a>',
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
      {
       breakpoint: 1600,
       settings: {
         slidesToShow: 5,
         slidesToScroll: 1,
         infinite: true,
         dots: false
       }
     },
     {
       breakpoint: 1280,
       settings: {
         slidesToShow: 4,
         slidesToScroll: 1,
         infinite: true,
         dots: false
       }
     },
     {
       breakpoint: 960,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 1,
         infinite: true,
         dots: false
       }
     },
     {
       breakpoint: 640,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 400,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     // You can unslick at a given breakpoint now by adding:
     // settings: "unslick"
     // instead of a settings object
   ]
      });
    };
    slick ();
  
 })