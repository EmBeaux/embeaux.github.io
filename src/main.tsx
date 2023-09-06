import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import AboutMe from './components/pages/about-me.tsx';
import Home from './components/pages/home.tsx';
import NavBar from './components/global/nav-bar.tsx';
import Footer from './components/global/footer.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-me",
    element: <AboutMe />,
  },
]);

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
      <div
        style={{
          margin: '5% 20%',
          backgroundColor: "#303134",
          padding: '2.5% 5%'
        }}
      >
        <NavBar />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </MantineProvider>
  </React.StrictMode>,
)
