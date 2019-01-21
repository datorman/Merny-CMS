import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

const BlogView = (props) =>(
    <div>
        <div>
            <h1>{props.post.title}</h1>
            <span>{moment(props.post.createdAt).add(1,'days').format('MMM Do, YYYY, h:mm:ss a')}</span>
            <span>{props.post.author}</span>
            <p>{props.post.body}</p>
        </div>
    </div>

);

const mapStateToProps = (state,props) => {
    return{
        post: state.posts.find((post)=> post.id === props.match.params.id)
    };
};
export default connect(mapStateToProps)(BlogView);