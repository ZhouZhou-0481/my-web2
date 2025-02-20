document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('welcome-image');
    const message = document.getElementById('welcome-message');

    // 图片加载完成后显示
    image.onload = function () {
        image.style.display = 'block';
    };

    // 图片动画结束后隐藏图片并显示文字
    image.addEventListener('animationend', function () {
        image.style.display = 'none';
        message.classList.remove('hidden');
    });
});