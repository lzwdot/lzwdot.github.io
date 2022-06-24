import React from 'react';
import Giscus from '@giscus/react';

export default function MsgComment(props) {
  return (
    <Giscus
      id="comments"
      repo="lzwdot/lzwdot.github.io"
      repoId="R_kgDOG0E0Wg"
      category="comments"
      categoryId="DIC_kwDOG0E0Ws4CP3EZ"
      mapping="title"      
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme="light"
      lang="zh-CN"
      loading="lazy"
    />
  );
}