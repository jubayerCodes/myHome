import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Properties from "../pages/Properties/Properties";
import SingleProperty from "../pages/SingleProperty/SingleProperty";
import propertiesApi from "../Utilities/Redux/features/api/propertiesApi";
import { store } from "../Utilities/Redux/store";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/properties',
        element: <Properties />
      },
      {
        path: '/properties/:id',
        element: <SingleProperty />,
        loader: ({ params }) => store.dispatch(propertiesApi.endpoints.getProperty.initiate(params.id))
      }
    ]
  }
]);

export default Router;
