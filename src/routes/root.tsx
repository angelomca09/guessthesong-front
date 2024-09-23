
import { Outlet, useLoaderData } from 'react-router-dom';
import { Navbar } from '../layout/Navbar';

function Root() {

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default Root
