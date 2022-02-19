import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const NavBar = lazy(() => import("../components/NavBar"));
const Search = lazy(() => import("../pages/Search"));
const Saiyan = lazy(() => import("../pages/Saiyan"));
const Human = lazy(() => import("../pages/Human"));
const Characters = lazy(() => import("../pages/AllCharacters"));
const Character = lazy(() => import("../pages/Character"));

const Spinner = () => {
  return (
    <div style={{ height: "90vh" }}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Suspense fallback={Spinner()}>
      <NavBar />
      <Routes>
        <Route end path="/characters" element={<Characters />} />
        <Route end path="/humans" element={<Human />} />
        <Route end path="/saiyans" element={<Saiyan />} />
        <Route end path="/search" element={<Search />} />
        <Route end path="/character/:id" element={<Character />} />
        <Route path="*" element={<Navigate end to="/characters" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
