import Link from 'next/link'
import Container from '../components/container'

export default function Header() {
  return (
    <header className="navbar bg-base-100">
        <div className="flex-1">
            <Link className="btn btn-ghost normal-case text-xl"href="/">Blog</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><Link href="/">首页</Link></li>
                <li><Link href="/posts">文章</Link></li>
                <li><Link href="/about">关于</Link></li>
            </ul>
        </div>
    </header>
  )
}
