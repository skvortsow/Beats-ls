const openItem = item => {
    const container = item.closest('.team__item');
    const contentBlock = container.find('.item__content-wrapper');
    const textBlock = contentBlock.find('.item__content');
    const reqHeight = textBlock.height();
    contentBlock.height(reqHeight); 
    item.addClass('active');

    //const arrow = item.find('.title__svg');
    //arrow.css('transform', 'rotate(180deg)');
}

const closeAll = function(item) {
    $(item).height(0);
    $('.item__title').removeClass('active');
}

$('.item__title').on('click', (evt) => {
        evt.preventDefault();
        const $this = $(evt.currentTarget);

        if ($this.hasClass('active')){
            closeAll('.item__content-wrapper');
            $this.removeClass('active');
        } else {
        closeAll('.item__content-wrapper');
        openItem($this);
        }

});