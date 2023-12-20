import React, { lazy, useEffect } from "react";
import "./assets/scss/index.css";
import { Routes, Route } from "react-router-dom";

import { Suspense } from "react";
import Loading from "../../student_frontend/src/components/Loading";
import MainDashboard from "./MainDashboard";

const Dashboard = lazy(() => import("./components/pages/Dashboard"));
const Exams = lazy(() => import("./components/pages/Exams"));
const Profile = lazy(() => import("./components/pages/Profile"));
const NotFound = lazy(() => import("./components/pages/NotFound"));
const Attendance = lazy(()=> import("./components/pages/Attendance"))
export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<Loading />}>
              <MainDashboard />
            </Suspense>
          }
        >
          <Route
            path=""
            element={
              <Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="attendance"
            element={
              <Suspense fallback={<Loading />}>
                <Attendance/>
              </Suspense>
            }
          />
          <Route
            path="exams"
            element={
              <Suspense fallback={<Loading />}>
                <Exams/>
              </Suspense>
            }
          />
          <Route
            path="profile"
            element={
              <Suspense fallback={<Loading />}>
                <Profile/>
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}
