
import { Outlet, useLoaderData } from 'react-router-dom';
import { Navbar } from '../layout/Navbar';

function Root() {

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <article>
          <Outlet />
        </article>
      </div>
    </>
  )
}

export default Root
