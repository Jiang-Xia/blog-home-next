// index这个命名 代表着路径为 / 时的页面
export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
      <div>
        <h5>关于页 二级布局</h5>
        {children}
      </div>
  );
}
