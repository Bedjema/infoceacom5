$(document).ready(function () {
  if (window.location.hash) {
    setTimeout(function () {
      $("input:text:visible:first").focus();
    }, 200);
    $(".asur-form")
      .find(".form-control")
      .addClass("light")
      .delay(2e3)
      .queue(function () {
        $(".asur-form").find(".form-control").removeClass("light").dequeue();
      });
  }
  $('.asur-form select').each(function(i, obj) {
    $(this).attr("style", "color: #1456a0 !important;");
    $(this).find('option:selected').attr("style", "color: #000000 !important;");
    $(this).change(function () {
      var _0x576cx1 = $(this).val();
      if (_0x576cx1 != "") {
        $(this).attr("style", "color: #000000 !important;");
      } else {
        $(this).attr("style", "color: #1456a0 !important;");
      }
    });
});

  $(".dem_devis").click(function () {
    $("html,body").animate(
      { scrollTop: $("#form-dem-con").offset().top },
      "slow"
    );
    $("input:text:visible:first").focus();
    $(".asur-form")
      .find(".form-control")
      .addClass("light")
      .delay(2e3)
      .queue(function () {
        $(".asur-form").find(".form-control").removeClass("light").dequeue();
      });
  });
  $("#form_submit_dem").validate({
    errorLabelContainer: "#error-note-dem",
    wrapper: "li",
    rules: {
      Nom: { required: true, maxlength: 50 },
      Prenom: { required: true, maxlength: 50 },
      Telephone: {
        required: true,
        regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        maxlength: 20,
      },
      CodePostal: {
        required: false,
        regex: /(?!00000)[0-9]{5}/,
        maxlength: 5,
        minlength: 5,
      },
      Marque: { required: false, maxlength: 50 },
      Motif: { required: false, maxlength: 100 },
      Type: { required: false, maxlength: 100 },
      ModelelTxt: { required: false },
      Email: {
        required: true,
        regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i,
        maxlength: 100,
      },
    },
    messages: {
      Nom: {
        required: "- Le nom est requis",
        maxlength: "- le champ de nom ne devrait pas dépasser {0} caractères.",
      },
      Prenom: {
        required: "- Le prénom est requis",
        maxlength:
          "- le champ de la prénom ne devrait pas dépasser {0} caractères.",
      },
      Telephone: {
        required:
          "- Le numéro de téléphone est requis",
        maxlength:
          "- le champ de la numéro de téléphone ne devrait pas dépasser {0} caractères.",
        regex: "- Veuillez saisir un numéro de téléphone valide.",
      },
      CodePostal: {
        minlength:
          "- le champ de code postal ne doit pas être inférieur à {0} chiffres.",
        maxlength:
          "- le champ de code postal ne devrait pas dépasser {0} chiffres.",
        regex: "- Veuillez saisir un code postal valide.",
      },
      Marque: {
        maxlength:
          "- le champ de la marque ne devrait pas dépasser {0} caractères.",
      },
      Motif: {
        maxlength:
          "- le champ de motif ne devrait pas dépasser {0} caractères.",
      },
      Email: {
        required:
          "- L’adresse mail est requise",
        maxlength:
          "- le champ d'adresse e-mail ne devrait pas dépasser {0} caractères.",
        regex: "- Veuillez saisir un adresse e-mail valide.",
      },
    },
    submitHandler: function (_0x576cx2) {
      _0x576cx2.submit();
    },
  });
});
$(document).ready(function () {
  $(".label_plat").magnificPopup({
    type: "inline",
    items: { src: "#label-plat" },
    closeOnBgClick: false,
    preloader: true,
    modal: true,
    callbacks: { open: function () {}, close: function () {} },
  });
});

$(document).ready(function () {
  if ($(".form_date_mask")[0]) {
    $(".form_date_mask").mask("00/00/0000");
  }
});
$("#form_submit_dem_glob").validate({
  errorLabelContainer: "#error-note-dem",
  wrapper: "li",
  rules: {
    Nom: { required: true, maxlength: 50 },
    Prenom: { required: true, maxlength: 50 },
    Telephone: {
      required: true,
      regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      maxlength: 20,
    },
    CodePostal: { required: false, regex: /^\d*$/, maxlength: 5, minlength: 5 },
    Email: {
      required: true,
      regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i,
      maxlength: 100,
    },
    Solution: { required: true },
  },
  messages: {
    Nom: {
      required: "- Le nom est requis",
      maxlength: "- le champ de nom ne devrait pas dépasser {0} caractères.",
    },
    Prenom: {
      required: "- Le prénom est requis",
      maxlength:
        "- le champ de la prénom ne devrait pas dépasser {0} caractères.",
    },
    Telephone: {
      required:
        "- Le numéro de téléphone est requis",
      maxlength:
        "- le champ de la numéro de téléphone ne devrait pas dépasser {0} caractères.",
      regex: "- Veuillez saisir un numéro de téléphone valide.",
    },
    CodePostal: {
      minlength:
        "- le champ de code postal ne doit pas être inférieur à {0} chiffres.",
      maxlength:
        "- le champ de code postal ne devrait pas dépasser {0} chiffres.",
      regex: "- Veuillez saisir un code postal valide.",
    },
    Email: {
      required: "- L’adresse mail est requise",
      maxlength:
        "- le champ d'adresse e-mail ne devrait pas dépasser {0} caractères.",
      regex: "- Veuillez saisir un adresse e-mail valide.",
    },
    Solution: {
      required:
        "- Veuillez sélectionner votre solution d’assurance cherchée car il est obligatoire.",
    },
  },
  submitHandler: function (form) {
    form.submit();
  },
});

$("#form_submit_dem_imm").validate({
    errorLabelContainer: "#error-note-dem",
    wrapper: "li",
    rules: {
      Nom: { required: true, maxlength: 50 },
      Prenom: { required: true, maxlength: 50 },
      Telephone: {
        required: true,
        regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        maxlength: 20,
      },
      CodePostal: { required: false, regex: /^\d*$/, maxlength: 5, minlength: 5 },
      Immatriculation: {
        required: true,
        regex: /^([A-Z]{2}-[0-9]{3}-[A-Z]{2}|[0-9]{3}-[A-Z]{3}-[0-9]{2})$/,
        maxlength: 10,
      }
    },
    messages: {
      Nom: {
        required: "- Le nom est requis",
        maxlength: "- le champ de nom ne devrait pas dépasser {0} caractères.",
      },
      Prenom: {
        required: "- Le prénom est requis",
        maxlength:
          "- le champ de la prénom ne devrait pas dépasser {0} caractères.",
      },
      Telephone: {
        required:
          "- Le numéro de téléphone est requis",
        maxlength:
          "- le champ de la numéro de téléphone ne devrait pas dépasser {0} caractères.",
        regex: "- Veuillez saisir un numéro de téléphone valide.",
      },
      CodePostal: {
        minlength:
          "- le champ de code postal ne doit pas être inférieur à {0} chiffres.",
        maxlength:
          "- le champ de code postal ne devrait pas dépasser {0} chiffres.",
        regex: "- Veuillez saisir un code postal valide.",
      },
      Immatriculation: {
        required: "- Veuillez saisir votre immatriculation car il est obligatoire.",
        maxlength:
          "- le champ d'immatriculation ne devrait pas dépasser {0} caractères.",
        regex: "- L'immatriculation ne semble pas correcte. Veuillez modifier votre saisie avec la forme AA-123-AA (ou 123-AAA-45 avant 2009).",
      }
    },
    submitHandler: function (form) {
      form.submit();
    },
  });


  $("select.form-control").attr("style", "color: #3b3838 !important;");
  $("select.form-control option").attr("style", "color: #000000 !important;");
  $("select.form-control").change(function () {
    var _0x576cx1 = $("#solution_sol").val();
    if (_0x576cx1 != "") {
      $("select.form-control").attr("style", "color: #000000 !important;");
    } else {
      $("select.form-control").attr("style", "color: #3b3838 !important;");
    }
});

function sh_conj() {
    $(".conjoint-elm").show();
    if ($('#CatSocialeConjoint-error').length) {
        $("#CatSocialeConjoint-error").show();
    }
    if ($('#DateNaissCojoint-error').length) {
        $("#DateNaissCojoint-error").show();
    }
}

function hd_conj() {
    $(".conjoint-elm").hide();
    $("input[name*='DateNaissCojoint']").val('');
    $("select[name*='CatSocialeConjoint']").val('');
    if ($('#CatSocialeConjoint-error').length) {
        $("#CatSocialeConjoint-error").hide();
    }
    if ($('#DateNaissCojoint-error').length) {
        $("#DateNaissCojoint-error").hide();
    }
}

function sh_enft() {
    $(".enf-elm").show();
    if ($('#NbrEnfants-error').length) {
        $("#NbrEnfants-error").show();
    }
}

function hd_enft() {
    $(".enf-elm").hide();
    $("select[name*='NbrEnfants']").val('');
    if ($('#NbrEnfants-error').length) {
        $("#NbrEnfants-error").hide();
    }
}