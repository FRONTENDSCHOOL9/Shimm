import Header from '@components/layout/header/Header';
import { Outlet } from 'react-router-dom';
import { Wrapper } from '@components/layout/layout/Layout.style';

function Layout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}

export default Layout;
