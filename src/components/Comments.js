import React from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import Giscus from '@giscus/react';

export default function Comments(props) {
  const {colorMode} = useColorMode();
  let { type, category, categoryId } = props
  if (type == 'blog') {
    category = 'blog'
    categoryId = 'DIC_kwDOG0E0Ws4CP3Db'
  } else if (type == 'docs') {
    category = 'docs'
    categoryId = 'DIC_kwDOG0E0Ws4CP3Dc'
  } else {
    category = 'comments'
    categoryId = 'DIC_kwDOG0E0Ws4CP3EZ'
  }

  return (
    <Giscus
      id="comments"
      repo="lzwdot/lzwdot.github.io"
      repoId="R_kgDOG0E0Wg"
      category={category}
      categoryId={categoryId}
      mapping="pathname"
      term="来自【前端大刘】"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="zh-CN"
      loading="lazy"
    />
  );
}