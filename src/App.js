 import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Page/Home';
import Main from './Component/main/Main';
import SignIn from './Component/Auth/SignIn';
import SignUp from './Component/Auth/SignUp';
import AllProdects from './Component/Page/AllProdects';
import Categores from './Component/Page/Categores';
import { Toaster } from 'react-hot-toast';
import DeshBordLaout from './Component/main/DeshBordLaout';
import Prodect from './Component/Page/Prodect';
import ShowAllProdect from './Component/Page/ShowAllProdect';
import Oraders from './Component/Page/Oraders';
import PrivetRout from './Component/main/PrivatRout';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'categore',
          element: <Categores></Categores>
        },
        {
          path: '/:name',
          element:<PrivetRout><AllProdects></AllProdects></PrivetRout>,
        },
        {
          path: '/categore/:name',
          element:<PrivetRout><AllProdects></AllProdects></PrivetRout>,
        },
        {
          path: `/categore/:name/:id`,
          element: <Prodect></Prodect>
        }

      ]
    },
    {
      path: '/deshbord',
      element: <DeshBordLaout></DeshBordLaout>,
      children:[
        {
          path:'/deshbord',
          element: <Oraders></Oraders>
        },
        {
          path:'/deshbord/oraders',
          element: <Oraders></Oraders>
        },
        {
          path:'/deshbord/allprodect',
          element:<ShowAllProdect></ShowAllProdect>
        },
        
        {
          path: `/deshbord/:name/:id`,
          element: <Prodect></Prodect>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
