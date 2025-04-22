(function ($) {
    $.fn.mobileNav = function () {
        return this.each(function () {
            var $nav = $(this);
            var $menu_toggler = $('#mobile_nav_toggler');
            var $toggler = $nav.find('.level_1 > li.submenu > .toggler');

            function openNav($item) {
                 $toggler.each(function () {
                     var _this = $(this);
                    closeNav(_this);
                    });
                var level_1 = $item.parent().parent();
                
                $item.parent().addClass('show');
                level_1.addClass('open');
            }

            function closeNav($item) {
                var level_1 = $item.parent().parent();
                $item.parent().removeClass('show');
                level_1.removeClass('open');
               
            }
            
            $menu_toggler.click(function (event) {
                event.preventDefault();
               var _this = $(this);
               _this.toggleClass('open');
               $nav.toggleClass('show_mobile_nav');
               
            });
            $toggler.click(function (event) {
                event.preventDefault();
               
                var _this = $(this);
                
                if (_this.parent().hasClass('show')) {
                    closeNav(_this);
                } else {
                    openNav(_this);
                }
            });
        });
    };
})(jQuery);