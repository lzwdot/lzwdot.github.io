const glob = require('glob')
const path = require('path')
const fs = require('fs')
const matter = require('gray-matter')
const moment = require('moment')

// 全局定义
const docsPath = './docs' // docs 目录
const blogPath = './blog' // blog 目录


//============创建文档 或 博客========================

const dirPath = `program/algorithm`
const title = '标题'
const fileType = process.argv.slice(2)[0] // doc 或 blog

createMd(dirPath, title, fileType)
// getMaxId()

//============创建文档 或 博客 END========================

/**
 * 新建 md 文档
 * @param {*} dirname 
 * @param {*} title 
 * @param {*} fileType 
 * @param {*} author 
 */
function createMd(dirname, title, fileType = 'doc', author = 'lzw') {
  const maxId = getMaxId() + 1
  const date = moment().format('YYYY-MM-DD HH:mm:ss');
  const matterData = {
    title: title,
    ID: maxId,
    date: date,
    authors: [author],
    tags: dirname.split('/')
  }

  let content = ''
  let dirPath = `${docsPath}/${dirname}`
  let filePath = `${dirPath}/${maxId}.md`
  if (fileType && fileType == 'blog') {
    dirPath = blogPath
    content = '\n <!--truncate-->'

    // 新建目录
    const tempDir = `${dirPath}/${date.slice(0, 4)}`
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir)
    }

    filePath = `${tempDir}/${date.slice(5, 10)}-${maxId}.md`
  } else {
    // 创建文件夹的 readme 文件 
    writeReadMe(dirPath)
  }

  //创建 md 文件
  content = matter.stringify(content, matterData)
  fs.writeFileSync(filePath, content)
}

/**
 * 创建 README.md 文件
 * @param {*} dirPath 
 */
function writeReadMe(dirPath) {
  const filePath = `${dirPath}/README.md`
  let matterData = {
    title: '标题',
    authors: ['lzw']
  }
  // 先删除文件，重建
  if (fs.existsSync(filePath)) {
    matterData = matter.read(filePath)?.data;
    // 删除 README.md 文件
    fs.unlinkSync(filePath)
  }

  const content = matter.stringify(`
\`\`\`mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
\`\`\`
  `, matterData)
  // 创建分类 JSON
  createCateJson(dirPath, matterData)
  // 写入内容
  fs.writeFileSync(filePath, content)
}

/**
 * 获取 max id
 */
function getMaxId() {
  let maxID = 0

  //遍历 docs 下所有文件夹和文件
  const docFiles = glob.sync(`${docsPath}/**/*.md`)
  docFiles.map(file => {
    const matterData = matter.read(file)    
    // 获取 max id
    maxID = Math.max(matterData?.data?.ID || maxID, maxID)
  })

  // 遍历 blog 下所有文件
  const blogFiles = glob.sync(`${blogPath}/**/*.md`)
  blogFiles.map(file => {
    const matterData = matter.read(file)
    // 获取 max id
    maxID = Math.max(matterData?.data?.ID || maxID, maxID)
  })

  return maxID
}

/**
 * 生产文件夹中的 _category_.json
 * @param {*} dirPath 
 * @param {*} matterData 
 */
function createCateJson(dirPath, matterData) {
  const fileData = matterData
  const fileName = '_category_.json'
  const content = {
    label: fileData?.title,
    position: fileData?.sidebar_position
  }

  fs.writeFileSync(dirPath + '/' + fileName, JSON.stringify(content, ' ', ' '))
}
