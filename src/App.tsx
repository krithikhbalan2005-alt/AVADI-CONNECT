import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AppProvider } from './context/AppContext';
import { AppLayout } from './components/AppLayout';

// Module 1 Screens (Active 1 to 5)
import {
  SplashScreen,
  WelcomeScreen,
  RegistrationScreen,
  ContactInfoScreen,
  AddressWardScreen
} from './screens/Module1';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Redirects */}
        <Route path="/" element={<Navigate to="/splash" replace />} />
        
        {/* Screens */}
        <Route path="/splash" element={
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <SplashScreen />
          </motion.div>
        } />
        
        <Route path="/welcome" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(8px)' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <WelcomeScreen />
          </motion.div>
        } />

        <Route path="/registration" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <RegistrationScreen />
          </motion.div>
        } />

        <Route path="/register/contact" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <ContactInfoScreen />
          </motion.div>
        } />

        <Route path="/register/address" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <AddressWardScreen />
          </motion.div>
        } />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/splash" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppLayout>
          <AnimatedRoutes />
        </AppLayout>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
