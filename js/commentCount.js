document.getElementById('input-content').addEventListener('keyup', function () {
    const commentBoxField = document.getElementById('input-content');
    if (commentBoxField.value !== '') {
        document.getElementById('post-comment-btn').removeAttribute('disabled');
    } else {
        document.getElementById('post-comment-btn').setAttribute('disabled', true);
    }
});

let countComments = 0;
document.getElementById('post-comment-btn').addEventListener('click', function () {
    countComments++;
    document.getElementById('comments-count').innerText = countComments + ' comments';
    document.getElementById('input-content').value = '';
    document.getElementById('input-content').value.length = 0;
    console.log(document.getElementById('input-content').value.length);
});