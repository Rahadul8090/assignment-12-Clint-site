import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Page/Home';
import Main from './Component/main/Main';
import SignIn from './Component/Auth/SignIn';
import SignUp from './Component/Auth/SignUp';
import AllProdects from './Component/Page/AllProdects';
import Categores from './Component/Page/Categores';
import Dshbord from './Component/Page/Dshbord';
import { Toaster } from 'react-hot-toast';


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
          path: 'deshbord',
          element: <Dshbord></Dshbord>
        },
        {
          path: '/:id',
          element: <AllProdects></AllProdects>,
         },
        {
          path: 'categore/:id',
          element: <AllProdects></AllProdects>,
         },

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
