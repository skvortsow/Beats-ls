$('.form').submit(e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name = 'name']");
    const phone = form.find("[name = 'phone']");
    const comment = form.find("[name = 'comment']");
    const to = form.find("[name = 'to']");;

    const modal = $("#modal");
    const content = modal.find('.modal__text');

    [name, phone, comment, to].forEach((field) => {

        field.removeClass('input-error');
        if (field.val().trim() == "") {
            field.addClass('input-error');
        }
    });

    const errorFields = form.find('.input-error');

    if (errorFields.length == 0) {
        $.ajax({
            url: 'https://webdev-api.loftschool.com/sendmail',
            method: 'POST',
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val(),
            }, 

            success: (data) => {
                content.text('');
                content.text(data.message);
                $.fancybox.open({
                    src:"#modal",
                    type: "inline",
                })
            }, 
            
            error: (data) => {
                content.text('');
                content.text(data.responseJSON.message);
                $.fancybox.open({
                    src:"#modal",
                    type: "inline",
                })
            }
            
        })
    }



  
});

$('.app-submit-button').click(e => {
    e.preventDefault();

    $.fancybox.close();
});

$('.modal__wrapper').click(e => {
    if ($(e.target).hasClass('modal__wrapper')) {
        $.fancybox.close();
    }
})