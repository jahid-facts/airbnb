import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import { PageNotFound } from "../pages/404";
import ReservationDetails from "../pages/reservationDetails/ReservationDetails";
import AddProperties from "../pages/addProperties";
import PaymentForm from "../pages/payments";
import { useSelector } from "react-redux";
import ProtectedRoute from "../helpers/ProtectedRoute";
import Hosting from "../pages/hosting";
import PropertyList from "../pages/propertyList";
import EditProperty from "../pages/editProperty";
import ReservationDetailsCopy from "../pages/reservationDetails/ReservationDetails copy";
import SearchResults from "../components/VoiceSearch/SearchResults";

export const AppRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const isEmailVerified = useSelector((state) => state.auth.isEmailVerified);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              isEmailVerified ? (
                <Home />
              ) : (
                <Navigate to="/otp-verify" replace />
              )
            ) : (
              <Home />
            )
          }
        />
        <Route
          path="/hosting"
          element={<ProtectedRoute children={<Hosting />} />}
        />
        <Route
          path="/property/list"
          element={<ProtectedRoute children={<PropertyList />} />}
        />
        <Route path="/edit/property/:propertyId" element={<EditProperty />} />
        <Route
          path="/profile"
          element={<ProtectedRoute children={<Profile />} />}
        />
        <Route
          path="/reservation-details/:propertyId"
          element={<ProtectedRoute children={<ReservationDetails />} />}
        />
        <Route
          path="/reservation-details"
          element={<ProtectedRoute children={<ReservationDetailsCopy />} />}
        />
        <Route
          path="/payments"
          element={<ProtectedRoute children={<PaymentForm />} />}
        />
        <Route
          path="/add-properties"
          element={<ProtectedRoute children={<AddProperties />} />}
        />
        {/* added by sn  */}
        <Route 
          path="/search-results" 
          element={<SearchResults />} 
        /> 
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
