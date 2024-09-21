
import { Outlet, useLoaderData } from 'react-router-dom';
import { Navbar } from '../layout/Navbar';
import { getCollections } from '../ts/collection-base';
import { ICollection } from '../interfaces/ICollection';

export async function collectionsLoader() {
  const collections = await getCollections();
  return { collections }
}

function Root() {

  const { collections } = useLoaderData() as { collections: ICollection[] };

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
