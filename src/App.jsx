import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from "./layout/Main"
import Home from "./pages/Home"
import Reac from "./pages/Reac"
import Buy from "./pages/Buy"
import Rent from "./pages/Rent"
import PropertyManagement from "./pages/PropertyManagement"
import Ownership from "./pages/Ownership"
import IslamicFinance from "./pages/IslamicFinance"
import Contactus from "./components/Contactus"
import Sellpage from "./pages/Sellpage"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/reac',
          element: <Reac />
        },
        {
          path: '/contactus',
          element: <Contactus />
        },
        {
          path: '/buy',
          element: <Buy />
        },
        {
          path: '/sell',
          element: <Sellpage />
        },
        {
          path: '/rent',
          element: <Rent />
        },
        {
          path: '/pm',
          element: <PropertyManagement />
        },
        {
          path: '/ownership',
          element: <Ownership />
        },
        {
          path: '/islamic-finance',
          element: <IslamicFinance />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
