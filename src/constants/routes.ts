import { RouteObject } from 'react-router-dom';
import AboutMe from '../components/pages/about-me.tsx';
import Home from '../components/pages/home.tsx';


export const routes: RouteObject[] = [
    {
        path: '/',
        Component: Home,
        id: 'Home',
    },
    {
        path: '/about-me',
        Component: AboutMe,
        id: 'About Me',
    }
]