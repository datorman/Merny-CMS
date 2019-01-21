import React from 'react';
import {connect} from 'react-redux';
import BlogList from './BlogList';
import selectPosts from './../selectors/posts';
import BlogListItem from './BlogListItem';


const BlogPage = (props) =>(
    <div>
        <div>Blog Page Component</div>
        {
            props.posts.length === 0 ?(
                <div>
                    <p>No Posts Found</p>
                </div>
            ):(
                props.posts.map((post,index)=>{
                    return <BlogListItem {...post} key={index} />                    
                }) 


            )
        }
    </div>
);

const mapStateToProps = (state)=>{
    return{
        posts : selectPosts(state.posts)
    };
};

export default connect(mapStateToProps)(BlogPage);