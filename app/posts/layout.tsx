export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
      <div>
        <h5>posts 二级布局</h5>
        {children}
      </div>
  );
}
