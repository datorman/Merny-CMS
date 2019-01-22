export const addBlog = (post) => ({
    type: 'ADD_BLOG',
    post
});

export const removeBlog = ({id}= {}) =>({
    type:'REMOVE_BLOG',
    id
});

export const editBlog = (id, updates) => ({
    type: 'EDIT_BLOG'
});
export const setBlog = (blogs) =>({
    type: 'SET_BLOG',
    posts
});