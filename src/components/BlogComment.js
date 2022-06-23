import Giscus from '@giscus/react';

export default function BlogComment() {
  return (
    <Giscus
      id="comments"
      repo="lzwdot/lzwdot.github.io"
      repoId="R_kgDOG0E0Wg"
      category="General"
      categoryId="DIC_kwDOG0E0Ws4CP0Xh"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme="light"
      lang="zh-CN"
      loading="lazy"
    />
  );
}