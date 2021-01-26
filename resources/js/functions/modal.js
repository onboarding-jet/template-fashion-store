
/**
 * Semantic-UI Modal
 * Abre Modal QuickView de produto
 * @param modal
 */
export function openModalQuickView(modal, callback) {
  "use strict";
  callback = typeof(callback) !== 'undefined' ? callback : null;
  modal = typeof(modal) !== 'undefined' ? (modal == "avise" ? ".ui.modal.form" : '.ui.modal') : '.ui.modal';
  //console.log('Modal ID: ' + modal);
  $(modal)
    .modal({
      transition: 'fade up',
      onShow: function () {

      },
      onVisible: function () {
        $(".ui.modal .dropdown").dropdown("refresh");
      },
      onVisible: () => {
        if (typeof callback === "function") {
          callback();
        }
      },
      onHidden: function () {
        //console.log($(this));
        $(this).parent().remove();
        $(this).remove();
      }
    })
    .modal('show');
}


/**
 * Semantic-UI Modal
 * Abre Modal com barra de rolagem
 * @param modal
 */
export function openLongModal(modal) {
  "use strict";
  //console.log('Modal ID: ' + modal);
  $('.longer.modal')
    .modal({
      transition: 'fade up',
      onShow: function () {

      },
      onVisible: function () {
        $(".ui.modal .dropdown").dropdown("refresh");
      },
      onHidden: function () {
        //console.log($(this));
        $(this).parent().remove();
        $(this).remove();
      }
    })
    .modal('show');
}




// function popUpMouseOut(obj, evt, fn) {
//   if (obj.addEventListener) {
//       obj.addEventListener(evt, fn, false);
//   }
//   else if (obj.attachEvent) {
//       obj.attachEvent("on" + evt, fn);
//   }
// }

// popUpMouseOut(window,"load",function(e) {
// popUpMouseOut(document, "mouseout", function(e) {
//       e = e ? e : window.event;
//       var from = e.relatedTarget || e.toElement;
//       if (!from || from.nodeName == "HTML") {
//           // Aqui você coloca o seu popup
//           alert("left window");
//       }
//   });
// }); 
