function CarouselControl(params) {
    var carousel = params.GalleryContainer;
    var nextButton = params.NextButton;
    var prevButton = params.PrevButton;
    var carouselOptions = {

        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        pagination: false,
        items: 2,
        itemsCustom: [[0, 1], [320, 1], [480, 1], [768, 2], [1024, 3], [1200, 3]],
        scrollPerPage: true

    };

    carousel.owlCarousel(carouselOptions);

    nextButton.click(function () {
        carousel.trigger('owl.next');
    });

    prevButton.click(function () {
        carousel.trigger('owl.prev');
    });
}
