import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import { routes } from './constants/routes.ts';
import NavBar from './components/global/nav-bar.tsx';
import Footer from './components/global/footer.tsx';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: 'Space Grotesk, "Segoe UI", sans-serif',
        headings: { fontWeight: 700 },
        primaryColor: 'cyan',
        defaultGradient: { from: '#40cfff', to: '#7c4dff', deg: 135 },
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
