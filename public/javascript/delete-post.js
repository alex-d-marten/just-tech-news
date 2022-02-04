async function deleteFormHandler(event) {
    event.preventDefault();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
    })
    document.location.replace('/dashboard/')
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);