import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Details from './pages/details/Details';
import Erro from './pages/error/Erro';
import Layout from './components/layout/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/list',
        element: <List />
      },
      {
        path: '/list/details/:id',
        element: <Details />
      },
      {
        path: '*',
        element: <Erro />
      }
    ]
  }
])

export { router }