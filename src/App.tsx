import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './global.css';

import RegisterPlantPage from './pages/Planting/RegisterPlant';
import { ListPlantsPage } from './pages/Planting/ListPlantsPage';
import { SignInPage } from './pages/Authentication/SignInPage';
import { AuthProvider } from './hook/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import PlantsFeatures from './pages/PlantsFeatures/PlantsFeatures';

function App() {
  return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<SignInPage />} />
            <Route path="*" element={<Navigate to="/login" />} />

            <Route
              path="/plant/register"
              element={
                  <PrivateRoute>
                      <RegisterPlantPage />
                  </PrivateRoute>
              }
            />

            <Route 
              path="/plants" 
              element={
                <PrivateRoute>
                  <ListPlantsPage />
                </PrivateRoute>
                } 
            />

            <Route path="/plants-features" element={
                <PrivateRoute>
                  <PlantsFeatures />
                </PrivateRoute>
                }  />
          </Routes>
        </Router>
      </AuthProvider>
  );
}

export default App;
