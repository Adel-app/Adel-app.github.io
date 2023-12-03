; (function ($) {
    $.fn.mgsCodec = function (options) {
        const defaults = {
                intervalSpeed: 500,
                animationTimeout: 1500,
                transcription: '.transcription p'
            },
            opts = $.extend(defaults, options),
            self = this,
            notes = this.find(opts.transcription),
            volumeIndicator = this.find('#svg-volume-indicator-total'),
            maxVolume = volumeIndicator.height();

        let currentNote = 0;

        notes.hide();
        this.find('img').hide();

        function triggerClick() {
            notes.eq(currentNote).fadeIn(200);
            notes.eq(currentNote).prevAll().hide(100);
            currentNote += 1;
            return;
        }

        function animateCodecBar() {
            volumeIndicator.height(Math.random() * maxVolume);
            return;
        }

        function init() {
            self.find('img').each(function (k, elem) {
                const _elem = $(elem);
                _elem.fadeIn(400);
            });

            notes.eq(0).show();

            self.on('click', triggerClick);

            setTimeout(function () {
                setInterval(animateCodecBar, opts.intervalSpeed);
            }, opts.animationTimeout);
            return;
        }

        this.hide().slideToggle(200, init);
    };
})(jQuery);
