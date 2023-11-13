import { Suspense, useState } from "react";
// import Login from "./components/Login.jsx";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { lazy } from "react";
import Loading from "./components/Loading.jsx";
const Login = lazy(() => import("./components/Login.jsx"));
const Dashboard = lazy(() => import("./components/Dashboard.jsx"));
const Profile = lazy(() => import("./components/Profile.jsx"));
const Edit = lazy(() => import("./components/Edit.jsx"));
const Export = lazy(() => import("./components/Export.jsx"));
const Registration = lazy(() => import("./components/Registration.jsx"));
const Forgot = lazy(() => import("./components/Forgot.jsx"));

export default function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        }
      />

      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              {" "}
              <Profile />
            </Suspense>
          }
        />
        <Route
          path="edit"
          element={
            <Suspense fallback={<Loading />}>
              <Edit />
            </Suspense>
          }
        />
        <Route
          path="export"
          element={
            <Suspense fallback={<Loading />}>
              <Export />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="/register"
        element={
          <Suspense fallback={<Loading />}>
            <Registration />
          </Suspense>
        }
      />
      <Route
        path="/forgot/:forgotted"
        element={
          <Suspense fallback={<Loading />}>
            <Forgot />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to={"/login"} replace={true} />} />
    </Routes>
  );
}
