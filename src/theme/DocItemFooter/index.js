import React from 'react';
import DocItemFooter from '@theme-original/DocItemFooter';
import DocComment from '../../components/DocComment'
export default function DocItemFooterWrapper(props) {
  console.log(props)
  return (
    <>
      <DocItemFooter {...props} />
      {props?.content?.contentTitle && <DocComment />}
    </>
  );
}
