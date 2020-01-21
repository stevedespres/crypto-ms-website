(function ($) {
    var $comments = $('.js-comments');
  
    $('.js-form').submit(function () {
      var form = this;
      $(form).addClass('form--loading');
  
      $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: $(this).serialize(),
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
          showModal('Commentaire publié', 'Merci ! Il sera afficher une fois qu\'il aura été approuvé par l\'équipe.');
          $(form).removeClass('form--loading');
        },
        error: function (err) {
          showModal('Erreur', 'Désolé, une erreur s\'est produite. Veuillez réessayer plus tard ou contacter l\'équipe.');
          $(form).removeClass('form--loading');
        }
      });
  
      return false;
    });
  
    $('.js-close-modal').click(function () {
      $('body').removeClass('show-modal');
    });
  
    function showModal(title, message) {
      $('.js-modal-title').text(title);
      $('.js-modal-text').html(message);
  
      $('body').addClass('show-modal');
    }
  })(jQuery);