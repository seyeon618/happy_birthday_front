import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/accounts/login";
import ResetPassWord from "./pages/accounts/password/reset";
import SignUp from "./pages/accounts/signup";
import Feed from "./pages/feed/create";
import EditFeed from "./pages/feed/edit/[postId]";
import Home from "./pages/home/index";
import Root from "./pages/index";
import Profile from "./pages/profile/[userId]";
import Reels from "./pages/reels";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorkerRegistration";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/accounts/login",
    element: <Login isShowPicture={false} />,
  },
  {
    path: "/accounts/password/reset",
    element: <ResetPassWord />,
  },
  {
    path: "/accounts/signup",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/feed/create",
    element: <Feed />,
  },
  {
    path: "/feed/edit/:postId",
    element: <EditFeed />,
  },
  {
    path: "/reels",
    element: <Reels />,
  },
  {
    path: "/profile/:userId",
    element: <Profile />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);

serviceWorker.register();
reportWebVitals();
