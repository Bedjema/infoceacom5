$(document).ready(function() {
    $.validator.addMethod("regex",
        function(value, element, regexp) {
            if (regexp && regexp.constructor != RegExp) {
                regexp = new RegExp(regexp);
            } else if (regexp.global) regexp.lastIndex = 0;
            return this.optional(element) || regexp.test(value);
        });

    $('.form-rec').magnificPopup({
        type: 'inline',
        items: { src: '#form-rec' },
        closeOnBgClick: false,
        preloader: true,
        modal: true,
        callbacks: {
            open: function() {
                $(".filter-bg").css("filter", "blur(8px)");
            },
            close: function() {
                $(".filter-bg").css("filter", "blur(0px)");
            }
        }
    });

    $('#form_submit_rec').validate({
        errorLabelContainer: "#error-note-rec",
        wrapper: "li",
        rules: {
            Nom: {
                required: true,
                maxlength: 50
            },
            Prenom: {
                required: true,
                maxlength: 50
            },
            Num_contract: {
                required: true,
                maxlength: 50
            },
            'Nature_reclamation[]': {
                required: true
            },
            Message_rec: {
                required: true,
            }
        },
        messages: {
            Nom: {
                required: "- Le nom est requis",
                maxlength: "- le champ de nom ne devrait pas dépasser {0} caractères."
            },
            Prenom: {
                required: "- Le prénom est requis",
                maxlength: "- le champ de la prénom ne devrait pas dépasser {0} caractères."
            },
            Num_contract: {
                required: "- Le numéro de contrat est requis",
                maxlength: "- le champ de la numéro de contrat ne devrait pas dépasser {0} caractères."
            },
            'Nature_reclamation[]': {
                required: "- La nature de la réclamation est requis"
            },
            Message_rec: {
                required: "- Le message de la réclamation est requis"
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });

    $(document).on('click', '.popup-rec-grat-dismiss', function(e) {
        $.magnificPopup.close();
    });
});