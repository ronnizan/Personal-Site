
jQuery(document).ready(function($) {
 
        $('.item-wrap a').magnificPopup({
    
           type:'inline',
           fixedContentPos: false,
           removalDelay: 200,
           showCloseBtn: false,
           mainClass: 'mfp-fade'
    
        });
    
        $(document).on('click', '.popup-modal-dismiss', function (e) {
                e.preventDefault();
                $.magnificPopup.close();
        });
    
          $('#WAButton').floatingWhatsApp({
            phone: '972542356555',
            headerTitle: 'Contact Me Through WhatsApp!', 
            popupMessage: 'Hello, how can I help you?',
            showPopup: false, 
            buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', 
            headerColor: 'green',
            backgroundColor: 'green !important', 
            position: "right"    
          });
       //  });
    
    });
    
    
    
    
    
    
    
    
    