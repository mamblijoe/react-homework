import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navigation from './components/Navigation'
import Animation from './components/Animation'
import Compound from './components/Compound'
import Tables from './components/Tables'
import Advanced from './components/Advanced'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigation />,
    },
    {
        path: '/animation',
        element: <Animation />,
    },
    {
        path: '/compound',
        element: <Compound />,
    },
    {
        path: '/tables',
        element: <Tables />,
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
