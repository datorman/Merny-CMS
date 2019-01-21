export const addPost = (post) => ({
    type: 'ADD_POST',
    post
});

export const removePost = ({id}= {}) =>({
    type:'REMOVE_POST',
    id
});
export const setPosts = (posts) =>({
    type:'SET_POSTS',
    posts
});