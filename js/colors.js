const mesureWidth = item => {
    const screenWidth = $(window).width();
    const container = item.closest('.colors__list');
    const titlesBlocks = container.find('.colors__item-title');
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;
    
    const isMobile = window.matchMedia('(max-width:768px)').matches;

    if (isMobile){
        return screenWidth - titlesWidth;
    } else {
        return 500;
    }

    
};

const openColorsItem = item => {
    const container = item.closest('.colors__item');
    const contentBlock = container.find('.colors__content-wrapper');
    //const textBlock = contentBlock.find('.colors__content');
    //const reqWidth = textBlock.width();
    const reqWidth = mesureWidth(item);
    contentBlock.width(reqWidth);
    item.addClass('active-color');
}

$(".colors__item-title").click(e => {
    e.preventDefault();
    const $this = $(e.currentTarget);

    if ($this.hasClass('active-color')){
        closeAllColors('.colors__content-wrapper');
        $this.removeClass('active-color');
    } else {
    closeAllColors('.colors__content-wrapper');
    openColorsItem($this);
    }

});


const closeAllColors = function(item) {
    $(item).width(0);
    $('.colors__item-title').removeClass('active-color');
}

$('.container--colors').click(e => {
    if ($(e.target).hasClass('container--colors')) {
        closeAllColors('.colors__content-wrapper');
    }
})