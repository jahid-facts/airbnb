import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import { PageNotFound } from "../pages/404";
import ReservationDetails from "../pages/reservationDetails/ReservationDetails";
import AddProperties from "../pages/addProperties";
import PaymentForm from "../pages/payments";
import { useSelector } from "react-redux";
import ProtectedRoute from "../helpers/ProtectedRoute";

// import Hosting from "../pages/hosting";
import PropertyList from "../pages/propertyList";
import EditProperty from "../pages/editProperty";
import ReservationDetailsCopy from "../pages/reservationDetails/ReservationDetails copy";

// Vai Bashar added
import ProfilePage from "../pages/profile/ProfilePage";
import Echeck from "../pages/reservationEcheck";
import MyTrips from "../pages/profile/ProfileContent/MyTrips";
import Wishlist from "../pages/profile/ProfileContent/Wishlist";
import HostDashboard from "../pages/admin/dashboard/hostDashboard";
// import HostProfileInfo from "../pages/profile/HostInfo";

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
          element={<ProtectedRoute children={<HostDashboard />} />}
        />

        <Route
          path="/property/list"
          element={<ProtectedRoute children={<PropertyList />} />}
        />
        {/* <Route
          path="/personal/info"
          element={<ProtectedRoute children={<HostProfileInfo />} />}
        /> */}

        <Route path="/edit/property/:propertyId" element={<EditProperty />} />
        <Route
          path="/profile"
          element={<ProtectedRoute children={<ProfilePage />} />}
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
        <Route
          path="/e-check"
          element={<ProtectedRoute children={<Echeck />} />}
        />
        {/* "/my-trips" */}
        <Route
          path="/my-trips"
          element={<ProtectedRoute children={<MyTrips />} />}
        />
        {/* /wishlist */}
        <Route
          path="/wishlist"
          element={<ProtectedRoute children={<Wishlist />} />}
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
