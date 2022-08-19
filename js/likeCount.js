let countLikes = 0;
document.getElementById('like-btn').addEventListener('click', function () {
    countLikes++;
    document.getElementById('likes-count').innerText = countLikes + ' people liked this';
    document.getElementById('like-btn').style.backgroundColor = 'skyblue';
});