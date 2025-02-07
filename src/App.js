import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import MainPage from './components/page/MainPage';
import Membership from './components/page/Membership';

function App() {
  return (
    <GoogleOAuthProvider clientId="882995609653-4apdr8noechv50jr5bktsscbs8iodu3m.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
