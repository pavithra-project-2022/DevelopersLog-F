import React from "react";
import { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AuthContext } from "./authContext/AuthContext";
import DailyLog from "./Components/DailyLog/DailyLog";
import Dashboard from './Components/Dashboard/Dashboard'
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import LandingPage from "./Components/LangingPage/LandingPage";
import Profile from "./Components/Profile/Profile";
import ProfileLayout from "./Components/ProfileLayout/ProfileLayout";
import Modal from "./Components/Project/Modal";
import Project from "./Components/Project/Project";
import ProjectLayout from "./Components/ProjectLayout/ProjectLayout";
import ProjectLocation from "./Components/ProjectLocation/ProjectLocation";
import ProjectLocationLayout from "./Components/ProjectLocationLayout/ProjectLocationLayout";
import ProjectType from "./Components/ProjectType/ProjectType";
import ProjectTypeLayout from "./Components/ProjectTypeLayout/ProjectTypeLayout";
import Register from "./Components/Register/Register";
import { UserProvider } from "./UserContext";

const App = () => {
  const { user } = useContext(AuthContext);
  const [rowData, setRowData] = useState([])
  return (
    <Router>
    <UserProvider value={{rowData,setRowData}}>
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/register" element={<Register />} />

      <Route path="/forgotPassword" element={<ForgotPassword />} />

      {user && (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profileLayout" element={<ProfileLayout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project" element={<Project />} />
          <Route path="/projectLayout" element={<ProjectLayout />} />
          <Route path="/projectLocation" element={<ProjectLocation />} />
          <Route path="/projectLocationLayout" element={<ProjectLocationLayout />} />
          <Route path="/projectType" element={<ProjectType />} />
          <Route path="/projectTypeLayout" element={<ProjectTypeLayout />} />
          
          <Route path="/daily" element={<DailyLog />} />
          <Route path="/modal" element={<Modal />} />
        </>
      )}
    </Routes>
    </UserProvider>
  </Router>
  );
};

export default App;
