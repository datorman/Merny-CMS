// Posts reducer
const postsReducerDefaultState = [];

export default (state = postsReducerDefaultState, action)=> {
    switch(action.type){
        case 'ADD_POST':
            return [
                ...state,
                action.post
            ];
        case 'REMOVE_POST':
            //return the removed post
        case 'EDIT_POST':
            //Edit the post
        case 'SET_POSTS':
            return action.posts;
        default:
            return state;
    }
};