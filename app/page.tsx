import styles from './page.module.css'
import Container from './components/container'
// 路径为 / 的首页
export default function Home() {
    return (
    <>
        <Container>
            <div className="space-y-6">
                <h1 className="text-2xl font-bold">
                    Hey, I'm a Senior Software Engineer at Company. I enjoy working with
                    Next.js and crafting beautiful front-end experiences.
                </h1>
                <p>
                    This portfolio is built with Next.js and a library called next-mdx.
                    It allows you to write Markdown and focus on the content of your
                    portfolio.
                </p>

                <p>Deploy your own in a few minutes.</p>
            </div>
        </Container>
    </>
    )
}
