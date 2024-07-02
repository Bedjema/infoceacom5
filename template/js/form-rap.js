$(document).ready(function () {
    $.validator.addMethod("regex", function (_0x7165x1, _0x7165x2, _0x7165x3) {
      if (_0x7165x3 && _0x7165x3.constructor != RegExp) {
        _0x7165x3 = new RegExp(_0x7165x3);
      } else {
        if (_0x7165x3.global) {
          _0x7165x3.lastIndex = 0;
        }
      }
      ;
      return this.optional(_0x7165x2) || _0x7165x3.test(_0x7165x1);
    });
    $(".rap_grat").magnificPopup({type: "inline", items: {src: "#rapp-grat"}, closeOnBgClick: false, preloader: true, modal: true, callbacks: {open: function () {}, close: function () {}}});
    $("#form_submit_rapp").validate({errorLabelContainer: "#error-note-rapp", wrapper: "li", rules: {Telephone: {required: true, regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, maxlength: 20}}, messages: {Telephone: {required: "- Veuillez saisir votre numéro de téléphone car il est obligatoire.", maxlength: "- le champ de la numéro de téléphone ne devrait pas dépasser {0} caractères.", regex: "- Veuillez saisir un numéro de téléphone valide."}}, submitHandler: function (_0x7165x4, _0x7165x5) {
      _0x7165x5.preventDefault();
      var _0x7165x6 = $("#Telephone").val();
      $("#form_submit_rapp_btn").text("En traitement...");
      $("#form_submit_rapp_btn").attr("disabled", true);
      
      $("#rapp-grat").children("#form_dem_content").hide();
        $(".title-rapp").text("Demande de rappel bien enregistrée.").css('color', '#70ad47');
        $("#form_dem_content").hide();
        if ($("#rapp-grat .col-form-rap").length) {
          $("#rapp-grat .col-form-rap").append('<div class="text-dark text-left pt-5" id="form_hr_rapp">Nous vous rappelons dans quelques instants..</div>');
        }
        ;
        $("#Nom").val("");
        $("#Telephone").val("");
        $("#form_submit_rapp_btn").attr("disabled", false);
        $("#form_submit_rapp_btn").text("Envoyer");
        
    }});
    $(document).on("click", ".popup-rapp-grat-dismiss", function (_0x7165x8) {
      $.magnificPopup.close();
      $("#form_dem_content").show();
      $(".title-rapp").text("Veuillez saisir votre numéro de téléphone").css('color', '#1456a0');
      $("#rapp-grat").children("#form_dem_content").show();
      if ($("#form_hr_rapp").length) {
        $("#rapp-grat .col-form-rap").children("#form_hr_rapp").remove();
      }
      ;
      $("#Nom").val("");
      $("#Telephone").val("");
    });
  });
  