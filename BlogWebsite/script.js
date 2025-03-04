function addComment(commentListId, nameId, commentId) {
    const name = document.getElementById(nameId).value;
    const comment = document.getElementById(commentId).value;
    if (name && comment) {
        const commentList = document.getElementById(commentListId);
        const li = document.createElement("li");
        li.textContent = `${name}: ${comment}`;
        commentList.appendChild(li);
        document.getElementById(nameId).value = "";
        document.getElementById(commentId).value = "";
    }
}
