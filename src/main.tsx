import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import { routes } from './constants/routes.ts';
import NavBar from './components/global/nav-bar.tsx';
import Footer from './components/global/footer.tsx';
import './index.css';

const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: 'Inter, "Segoe UI", system-ui, sans-serif',
        headings: {
          fontFamily: 'Inter, "Segoe UI", system-ui, sans-serif',
          fontWeight: '600',
        },
        primaryColor: 'blue',
        colorScheme: 'dark',
        defaultRadius: 'sm',
        colors: {
          dark: [
            '#e6e8eb',
            '#c1c4ca',
            '#9aa0a8',
            '#6e7480',
            '#3a414c',
            '#2a2f37',
            '#1a1e24',
            '#14171c',
            '#0d0f12',
            '#08090b',
          ],
        },
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
