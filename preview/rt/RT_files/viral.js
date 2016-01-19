(function ($) {
    $('.main-viralbox_js').each(function () {
        var $viral = $(this);
        var $container = $viral.find('.main-viralbox__items_js');

        if ($viral.hasClass('init_js')) { // Если у Viral есть класс инициализации, то значит для него ничего не делаем
            return;
        }

        $viral.addClass('init_js'); // Добавляем класс инициализации

        var $items = $viral.find('.main-viralbox__item_js');
        var lastItemIndex = $items.length - 1;
        var ACTIVE_CLASS = 'main-viralbox__item_active';

        if (lastItemIndex < 1) { // Если у нас меньше 1 элемента, то дальнейший скрипт не нужен
            return;
        }

        var INTERVAL = 15; // Интервал смены кадров (секунд)
        var currentIndex = 0;

        setInterval(function () { // Интервал смены элементов
            $items.eq(currentIndex).removeClass(ACTIVE_CLASS);
            currentIndex < lastItemIndex ? currentIndex++ : currentIndex = 0;
            $items.eq(currentIndex).addClass(ACTIVE_CLASS);
            $container.css('height', $items.eq(currentIndex).height());
        }, INTERVAL * 1000);
    });
})(jQuery);