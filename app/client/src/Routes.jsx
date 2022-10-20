import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
      <Route path="auth" element={<AuthPage />} />
    </Routes>
  );
}
