import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AppProvider } from './context/AppContext';
import { AppLayout } from './components/AppLayout';

// Module 1 Screens
import {
  SplashScreen,
  WelcomeScreen,
  RegistrationScreen,
  ContactInfoScreen,
  AddressWardScreen,
  OTPScreen,
  HomeDashboardScreen,
  CommunityFeedScreen,
  ReportIssueStep1Screen,
  ReportIssueStep2Screen,
  IssueSubmittedScreen
} from './screens/Module1';

// Module 2 Screens
import {
  CommunityPostCreateScreen,
  CivicHubScreen,
  MyReportedScreen,
  EmergencySOSScreen,
  MyReportedScreenAlt,
  EmergencySOSScreenAlt,
  LocalServicesScreen,
  RentalsJobsHomeScreen,
  RentalsPageScreen,
  JobsPageScreen,
  JobsDetailScreen,
  DrawerScreen,
  ThemeToggleScreen,
  LanguageSelectionScreen,
  EmergencySOSScreenVariant3,
  ExploreFoodScreen,
  LocalServicesScreenVariant,
  RentalsJobsHomeScreenVariant,
  RentalsPageScreenVariant
} from './screens/Module2';

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

        <Route path="/otp" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <OTPScreen />
          </motion.div>
        } />

        <Route path="/home" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <HomeDashboardScreen />
          </motion.div>
        } />

        <Route path="/community-feed" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <CommunityFeedScreen />
          </motion.div>
        } />

        <Route path="/community-feed/create" element={
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <CommunityPostCreateScreen />
          </motion.div>
        } />

        <Route path="/civic" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <CivicHubScreen />
          </motion.div>
        } />

        <Route path="/complaints/camera" element={
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <ReportIssueStep1Screen />
          </motion.div>
        } />

        <Route path="/complaints/category-details" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <ReportIssueStep2Screen />
          </motion.div>
        } />

        <Route path="/complaints/submitted" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <IssueSubmittedScreen />
          </motion.div>
        } />

        <Route path="/complaints" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <MyReportedScreen />
          </motion.div>
        } />

        <Route path="/sos" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <EmergencySOSScreen />
          </motion.div>
        } />

        <Route path="/complaints-alt" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <MyReportedScreenAlt />
          </motion.div>
        } />

        <Route path="/sos-alt" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <EmergencySOSScreenAlt />
          </motion.div>
        } />

        <Route path="/services" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <LocalServicesScreen />
          </motion.div>
        } />

        <Route path="/jobs-rentals" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <RentalsJobsHomeScreen />
          </motion.div>
        } />

        <Route path="/rentals" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <RentalsPageScreen />
          </motion.div>
        } />

        <Route path="/jobs" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <JobsPageScreen />
          </motion.div>
        } />

        <Route path="/jobs/detail" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <JobsDetailScreen />
          </motion.div>
        } />

        <Route path="/drawer" element={
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <DrawerScreen />
          </motion.div>
        } />

        <Route path="/theme" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <ThemeToggleScreen />
          </motion.div>
        } />

        <Route path="/language" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <LanguageSelectionScreen />
          </motion.div>
        } />

        <Route path="/sos-variant-3" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <EmergencySOSScreenVariant3 />
          </motion.div>
        } />

        <Route path="/explore-food" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <ExploreFoodScreen />
          </motion.div>
        } />

        <Route path="/services-alt" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <LocalServicesScreenVariant />
          </motion.div>
        } />

        <Route path="/jobs-rentals-alt" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <RentalsJobsHomeScreenVariant />
          </motion.div>
        } />

        <Route path="/rentals-alt" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col flex-1"
          >
            <RentalsPageScreenVariant />
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
