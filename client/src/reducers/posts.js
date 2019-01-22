// Posts reducer
const blogReducerDefaultState = [];

export default (state = blogReducerDefaultState, action)=> {
    switch(action.type){
        case 'ADD_BLOG':
            return [
                ...state,
                action.blog
            ];
        case 'REMOVE_POST':
            //return the removed post
        case 'EDIT_POST':
            //Edit the post
        case 'SET_POSTS':
            return action.blogs;
        default:
            return state;
    }
};