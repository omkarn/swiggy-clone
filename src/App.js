import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./app/store";

export default function App() {
  const Cart = lazy(() => import("./components/Cart"));
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: (
            <>
              <Header />
              <Body />
            </>
          ),
        },
        {
          path: "/cart",
          element: (
            <>
              <Header />
              <Suspense fallback={<h1>Loading</h1>}>
                <Cart />
              </Suspense>
            </>
          ),
        },
        {
          path: "/restaurants/:resId",
          element: (
            <>
              <Header />
              <RestaurantMenu />
            </>
          ),
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <div className="app"></div>
      </RouterProvider>
    </Provider>
  );
}
