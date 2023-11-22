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
    const openModalBtns = document.querySelectorAll('.openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');

    openModalBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const videoPath = btn.getAttribute('data-video');
            modalVideo.src = videoPath;
            videoModal.style.display = 'block';
        });
    });

    closeModalBtn.addEventListener('click', function () {
        modalVideo.pause();
        videoModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === videoModal) {
            modalVideo.pause();
            videoModal.style.display = 'none';
        }
    });
});
