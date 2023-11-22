(function () {
    var navBtn = $('.nav-btn');
    var dataContainers = $('.data-container');

    function toggleView(target) {
        $(dataContainers).hide();

        var text = $("[data-container='" + target + "'] h2").text();
        $("[data-container='" + target + "'] h2").text('_');

        $("[data-container='" + target + "']").show();

        var newText = '';
        // write the text
        (function myLoop(i) {
            setTimeout(function () {
                if (i == text.length) {
                    return;
                }
                newText += text.charAt(i);
                $("[data-container='" + target + "'] h2").text(newText);
                if (++i) myLoop(i);
            }, 40)
        })(0);
    }
    $(navBtn).on('click', function (ev) {
        var target = $(this).attr('data-target');
        toggleView(target);
    });

})();

//mp4
document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const videoModal = document.getElementById('videoModal');

    openModalBtn.addEventListener('click', function () {
        videoModal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        videoModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === videoModal) {
            videoModal.style.display = 'none';
        }
    });
});