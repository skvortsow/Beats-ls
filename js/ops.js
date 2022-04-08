const sections = $("section");
const display = $(".maincontent");

let inScroll = false;

sections.first().addClass("active-section");

const performTransition = sectionEq => {

    if (inScroll == false) {
        inScroll = true;
        const position = sectionEq * -100;

        display.css({
            transform: `translateY(${position}%)`
        });

        sections.eq(sectionEq).addClass("active-section").siblings().removeClass("active-section");
    }

    setTimeout(() => {
        inScroll = false;

        const currentSection = sections.eq(sectionEq);
        const menuTheme = currentSection.attr("data-sidemenu-theme");
        const sideMenu = $(".fixed-menu");

        sideMenu.find(".fixed-menu__item").eq(sectionEq).addClass("fixed-menu__item--active").siblings().removeClass("fixed-menu__item--active");

        if (menuTheme == "light") {
            sideMenu.addClass("light");
        } else {
            sideMenu.removeClass("light");
        };

    }, 1300);
}

const scrollViewport = direction => {
    const activeSection = sections.filter(".active-section");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction == "next" && nextSection.length) {
        performTransition(nextSection.index())
    }

    if (direction == "prev" && prevSection.length) {
        performTransition(prevSection.index())
    }
};

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;
    if (deltaY > 0) {
        scrollViewport("next");
    }

    if (deltaY < 0) {
        scrollViewport("prev");
    }
})

$(window).on("keydown", e => {

    const tagName = e.target.tagName.toLowerCase();

    if (tagName !== "input" && tagName !== "textarea") {

        switch (e.keyCode) {
            case 38: //prev
                scrollViewport("prev");
                break;

            case 40: //next
                scrollViewport("next");
                break;
        }

    }


})

$(".wrapper").on('touchmove', e => e.preventDefault());

$("[data-scroll-to]").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id = ${target}]`);

    performTransition(reqSection.index());
})


$("body").swipe({
    //Generic swipe handler for all directions
    swipe: function (event, direction) {
        const scroller = viewportScroller();
        let scrollDirection = '';

        if (direction == "up"){
            scrollDirection = "next";
        }

        if (direction == "down"){
            scrollDirection = "prev";
        }

        scroller[scrollDirection]();
    }
});

//Set some options later
$("#test").swipe({ fingers: 2 });
