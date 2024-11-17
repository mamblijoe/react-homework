import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navigation from './components/Navigation'
import Tables from './components/Tables'
import Advanced from './components/Advanced'
import ParallaxAnimation from './components/Animation/Parallax.tsx'
import CompoundCardPage from './Pages/CompoundCard.tsx'
import CompoundListPage from './Pages/CompoundList.tsx'
import CompoundTabsPage from './Pages/CompoundTabs.tsx'
import TablesPage from './Pages/Tables.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigation />,
    },
    {
        path: '/animation/parallax',
        element: <ParallaxAnimation />,
    },
    {
        path: '/compound/card',
        element: <CompoundCardPage />,
    },
    {
        path: '/compound/list',
        element: <CompoundListPage />,
    },
    {
        path: '/compound/tabs',
        element: <CompoundTabsPage />,
    },
    {
        path: '/tables',
        element: <TablesPage />,
    },
    {
        path: '/advanced',
        element: <Advanced />,
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
