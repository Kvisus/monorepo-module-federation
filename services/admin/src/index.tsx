import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LazyAbout } from "./pages/about/About.lazy";
// import { Shop } from "@/pages/shop";
import React, { Suspense } from "react";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={"Loading..."}>
            <LazyAbout />
          </Suspense>
        ),
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);