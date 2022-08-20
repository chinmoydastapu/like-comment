//Disabling post button while comment box field is empty
document.getElementById('input-content').addEventListener('keyup', function () {
    const commentBoxField = document.getElementById('input-content');
    if (commentBoxField.value !== '') {
        document.getElementById('post-comment-btn').removeAttribute('disabled');
    } else {
        document.getElementById('post-comment-btn').setAttribute('disabled', true);
    }
});

//Counting comments
let countComments = 0;
document.getElementById('post-comment-btn').addEventListener('click', function () {
    countComments++;
    document.getElementById('comments-count').innerText = countComments + ' comments';

    //Appending the comments above write comment box field
    const commentBoxField = document.getElementById('input-content');
    const p = document.createElement('p');
    p.innerText = 'Person ' + countComments + ' Commented:- ' + commentBoxField.value;
    document.getElementById('show-comments').appendChild(p);

    //Again empty the comment box and set the post button disabled
    commentBoxField.value = '';
    document.getElementById('post-comment-btn').setAttribute('disabled', true);
});