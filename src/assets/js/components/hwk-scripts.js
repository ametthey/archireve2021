jQuery(document).ready(function($){
    console.log($);
    if(typeof acf === 'undefined')
        return;
    acf.do_action('ready', $('body'));
    if($('.acf-form.acf-form-ajax').length){
        try{
            // ACF Form: Replacing Default Ajax Query Args
            // Adds support of legacy browser uploader (via FormData)
            // acf/ssets/js/input.js:13366
            var acf_validation_fetch = acf.validation.fetch;
            acf.validation.fetch = function($form){
                if(this.busy)
                    return false;
                var self = this;
                acf.do_action('validation_begin');
                this.busy = 1;
                // Create formData
                var formdata = new FormData($form[0]);
                // New Ajax arguments
                $.ajax({
                    url: acf.get('ajaxurl'),
                    data: formdata,
                    type: 'post',
                    cache: false,
                    processData: false,
                    contentType: false,
                    success: function(json){
                        if(!acf.is_ajax_success(json))
                            return;
                        self.fetch_success( $form, json.data );
                    },
                    complete: function(){
                        self.fetch_complete( $form );
                    }
                });
                return;
            }
            acf.validation.error_class = 'has-error';
            acf.validation.message_class = 'error text-danger small';
            acf.validation.disable_submit = function(){return};
            acf.validation.show_spinner = function(){return};
        }catch(e){}
        // ACF Form: Setting $form
        $('.acf-form .acf-button').click(function(e){
            $form = $(this).closest('form');
        });
        // ACF Form: Default Submit
        $('.acf-form.acf-form-ajax').on('submit', function(e){
            e.preventDefault();
        });
        // ACF Form: Validation Begin
        acf.add_action('validation_begin', function(){
            $form.find('.alert').remove();
            $form.find('.acf-error-message').remove();
            $form.find('.has-error').removeClass('has-error');
            $form.find('.form-control').removeClass('is-invalid');
            $form.find('.error').remove();
        });
        // ACF Form: Field error
        acf.add_action('add_field_error', function($field){
            $field.find('.form-control').addClass('is-invalid');
            $field.find('.error').insertAfter($field.find('.acf-input'));
        });
        // ACF Form: Validation Complete
        acf.add_filter('validation_complete', function(json, $form){
            if(!json.valid || json.errors)
                return json;
            // Global Error
            if(json.data.error){
                $form.prepend('<div class="alert alert-danger">' + json.data.error + '</div>');
                $('html, body').animate({
                    // scrollTop: $form.offset().top – 150
                }, 500);
                return;
            }
            // Success
            if(json.data.message){
                // Redirect
                if(json.data.redirect){
                    window.location = json.data.redirect;
                    return;
                }
                $form.prepend('<div class="alert alert-success">' + json.data.message + '</div>');
                $('html, body').animate({
                    // scrollTop: $form.offset().top – 150
                }, 500);
                return;
            }
            return json;
        });
    }
});
