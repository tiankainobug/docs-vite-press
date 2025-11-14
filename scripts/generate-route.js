// scripts/generateNavSidebar.js
const fs = require('fs');
const path = require('path');

const docsRoot = path.resolve('./docs')
const outputPath = path.resolve('./docs/.vitepress/config.auto.js')

/** 获取文件夹列表 */
function getDirectories(srcPath) {
    return fs.readdirSync(srcPath).filter(name =>
        fs.statSync(path.join(srcPath, name)).isDirectory()
    )
}

/** 获取 Markdown 文件 */
function getMarkdownFiles(srcPath) {
    return fs.readdirSync(srcPath)
    .filter(name => name.endsWith('.md') && name.toLowerCase() !== 'index.md')
    .sort((a, b) => a.localeCompare(b, 'zh-CN'))
}

/** 生成 nav 和 sidebar */
function generateConfig() {
    let nav = []
    const sidebar = {}

    const topDirs = getDirectories(docsRoot)

    for (const dir of topDirs) {
        const dirPath = path.join(docsRoot, dir)
        const subDirs = getDirectories(dirPath)

        // sidebar: 每个顶层目录下的所有子目录
        const sidebarItems = []

        for (const subDir of subDirs) {
            const subDirPath = path.join(dirPath, subDir)
            const mdFiles = getMarkdownFiles(subDirPath)

            const items = mdFiles.map(file => {
                const name = file.replace(/\.md$/, '')
                return {
                    text: name,
                    link: `/${dir}/${subDir}/${name}`
                }
            })

            sidebarItems.push({
                text: subDir,
                items
            })
        }

        sidebar[`/${dir}/`] = sidebarItems

        // nav: 指向该目录下第一个子目录的第一个文件
        // const firstSubDir = subDirs[0]
        // if (firstSubDir) {
        //     const firstFile = getMarkdownFiles(path.join(dirPath, firstSubDir))[0]
        //     if (firstFile) {
        //         const firstLink = `/${dir}/${firstSubDir}/${firstFile.replace(/\.md$/, '')}`
        //         nav.push({ text: dir, link: firstLink })
        //     }
        // }
        nav = [
            {
                "text": "学习笔记",
                "link": "/学习笔记/01.vue3/01.笔记"
            },
            {
                "text": "代码积累",
                "link": "/代码积累/01.工具方法/01.脱敏"
            }
        ]
    }

    const content = `
/**
 * ⚡ 本文件由脚本自动生成，请勿手动修改。
 * 运行：node scripts/generateNavSidebar.js
 */

export const nav = ${JSON.stringify(nav, null, 2)}

export const sidebar = ${JSON.stringify(sidebar, null, 2)}
`

    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    fs.writeFileSync(outputPath, content, 'utf-8')
    console.log('✅ 已生成导航与侧边栏配置:', outputPath)
}

generateConfig()
