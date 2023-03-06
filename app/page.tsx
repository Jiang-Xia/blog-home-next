import styles from './page.module.css'
import Container from './components/container'
// 路径为 / 的首页
export default function Home() {
    return (
    <>
        <Container>
            <div className="space-y-6">
                <h1 className="text-2xl font-bold">
                    Blog Home Next 是一个基于 React Nextjs、TypeScript、Tailwindcss、DaisyUI的个人博客前台，
                    它使用了最新的前端技术栈，用于个人博客创建和浏览自身文章。
                </h1>
            </div>
        </Container>
    </>
    )
}
