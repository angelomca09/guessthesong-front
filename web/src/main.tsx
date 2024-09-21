import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import "@picocss/pico"
import { loadTheme } from './ts/theme-switcher'
import Root from './routes/root'
import ErrorPage from './error-page';
import Collection, { gameContentLoader } from './routes/collection';
import IndexRoute from './routes';

loadTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <IndexRoute /> },
      {
        path: "collection/:playlistId",
        element: <Collection />,
        loader: gameContentLoader
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
