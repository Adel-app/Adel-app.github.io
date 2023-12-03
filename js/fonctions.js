(function () {
    const navBtns = $('.nav-btn');
    const dataContainers = $('.data-container');

    function toggleView(target) {
        dataContainers.hide();

        const textContainer = $(`[data-container='${target}'] h2`);
        const text = textContainer.text();
        textContainer.text('_').show();

        let newText = '';
        Array.from(text).forEach((char, i) => {
            setTimeout(() => {
                newText += char;
                textContainer.text(newText);
            }, 40 * i);
        });
    }

    navBtns.on('click', function () {
        const target = $(this).attr('data-target');
        toggleView(target);
    });

})();

// mp4
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

    const closeModal = function () {
        modalVideo.pause();
        videoModal.style.display = 'none';
    };

    closeModalBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        if (event.target === videoModal) {
            closeModal();
        }
    });
});

