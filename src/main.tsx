import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import { routes } from './constants/routes.ts';
import NavBar from './components/global/nav-bar.tsx';
import Footer from './components/global/footer.tsx';
import './index.css';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: 'sans-serif',
        colorScheme: 'dark',
      }}
      withCSSVariables
      withNormalizeCSS
      withGlobalStyles
    >
      <div className="body">
        <NavBar />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </MantineProvider>
  </React.StrictMode>,
)
