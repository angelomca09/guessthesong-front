import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import "@picocss/pico"
import { loadTheme } from './ts/theme-switcher'
import Root, { collectionsLoader } from './routes/root'
import ErrorPage from './error-page';
import Collection from './routes/collection';

loadTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: collectionsLoader,
    children: [
      {
        path: "collection/:playlistId",
        element: <Collection />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
