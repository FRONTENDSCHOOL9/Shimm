import Header from '@components/layout/header/Header';
import { Outlet } from 'react-router-dom';

function Meditation() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Meditation;
