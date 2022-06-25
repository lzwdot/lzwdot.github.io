import React from 'react';
import DocItemFooter from '@theme-original/DocItemFooter';
import Comments from '../../components/Comments'

export default function DocItemFooterWrapper(props) {
  return (
    <>
      <DocItemFooter {...props} />
      {props?.content?.frontMatter?.ID && <Comments {...{ type: 'docs' }} />}
    </>
  );
}
