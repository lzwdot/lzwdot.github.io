import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import BlogComment from '../../components/BlogComment'

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <BlogComment />
    </>
  );
}
