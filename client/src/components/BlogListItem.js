import React from 'react';
import moment from 'moment'; 
import {Link} from 'react-router-dom';

const BlogListItem = ({id,title,body,createdAt}) =>(
    <div>
        <Link to={`/blog/${id}`}><h3>{title} - {moment(0).add(1,'days').format('MMM Do, YYYY, h:mm:ss a')}</h3></Link>
        <p>{body}</p>
    </div>
);

export default BlogListItem;