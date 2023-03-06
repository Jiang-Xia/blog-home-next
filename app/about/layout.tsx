// index这个命名 代表着路径为 / 时的页面
export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
      <div>
        {children}
      </div>
  );
}
