document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('welcome-image');
    const message = document.getElementById('welcome-message');
    const buttonContainer = document.getElementById('button-container');
    const imageDisplay = document.getElementById('image-display');
    const displayedImage = document.getElementById('displayed-image');

    // 图片加载完成后显示
    image.onload = function () {
        image.style.display = 'block';
    };

    // 图片动画结束后隐藏图片并显示文字
    image.addEventListener('animationend', function () {
        image.style.display = 'none';
        message.classList.remove('hidden');
    });

    // 文字显示结束后显示按钮
    message.addEventListener('animationend', function () {
        buttonContainer.classList.remove('hidden');
    });

    // 按钮点击事件
    document.getElementById('button1').addEventListener('click', function () {
        displayedImage.src = 'images/image1.jpg'; // C:\Users\Administrator\Desktop\测试\测试2\images
        imageDisplay.classList.add('active');
    });

    document.getElementById('button2').addEventListener('click', function () {
        displayedImage.src = 'images/image2.jpg'; // C:\Users\Administrator\Desktop\测试\测试2\images
        imageDisplay.classList.add('active');
    });

    document.getElementById('button3').addEventListener('click', function () {
        displayedImage.src = 'images/image3.jpg'; // C:\Users\Administrator\Desktop\测试\测试2\images
        imageDisplay.classList.add('active');
    });

    // 点击空白处退回按钮界面
    imageDisplay.addEventListener('click', function () {
        imageDisplay.classList.remove('active');
    });
});