
export type LayoutProps = {
    children: JSX.Element | JSX.Element[] | string;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Layout