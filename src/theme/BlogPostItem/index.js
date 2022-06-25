import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import Comments from '../../components/Comments'

export default function BlogPostItemWrapper(props) { 
  return (
    <>
      <BlogPostItem {...props} />
      {props.isBlogPostPage && <Comments {...{type:'blog'}}/>}
    </>
  );
}
