$(function () {
    // Filter
    let filter = $("[data-filter");
    filter.on("click", function (event) {
        event.preventDefault();
        let cat = $(this).data('filter');
        if (cat == 'all') {
            $("[data-cat]").removeClass('hide');
        }
        else {
            $("[data-cat]").each(function () {
                let workCat = $(this).data('cat');
                if (workCat != cat) {
                    $(this).addClass('hide');
                }
                else {
                    $(this).removeClass('hide');
                }
            });
        }
    });

    // modals

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function (event) {

        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');
        $(modalId).addClass('show')
        $("body").addClass('no-scroll');

        setTimeout(function () {
            $(modalId).find(".modal__dialog").css({
                transform: "rotateX(0deg)"
            });
        }, 300);


    });

    modalClose.on("click", function (event) {

        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents('.modal');
        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });
        setTimeout(function () {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');

        }, 500);
    });
    $(".modal").on("click", function () {
        let $this = $(this);
        $this.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });
        setTimeout(function () {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 500);

    });

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation();
    });
});