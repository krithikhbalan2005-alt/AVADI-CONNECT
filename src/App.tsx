import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AppProvider } from './context/AppContext';
import { AppLayout } from './components/AppLayout';

// Module 1 Screens (Approved 1 to 15)
import {
  SplashScreen,
  WelcomeScreen,
  OnboardingCivicScreen,
  OnboardingSafetyScreen,
  WardSelectionScreen,
  RegistrationScreen,
  ContactInfoScreen,
  AddressWardScreen,
  OTPScreen,
  LocationPermissionScreen,
  ChooseAppearanceScreen,
  HomeDashboardScreen,
  CommunityFeedScreen,
  NoticesScreen,
  ReportIssueStep1Screen,
  ReportIssueStep2Screen,
  IssueSubmittedScreen,
  DrawerScreen
} from './screens/Module1';

// Screens 17 to 21 + My Reported + 22 to 25 + 31 to 32
import {
  SOSEmergencyScreen,
  RecentAlertsScreen,
  ServiceDirectoryScreen,
  LiveUpdatesScreen,
  LanguageSelectionScreen,
  MyReportedScreen,
  ComplaintCreateScreen,
  ComplaintDetailScreen,
  ExploreHubScreen,
  PlacesListScreen,
  TransportHubScreen,
  TransportTimetableScreen,
  CivicHubScreen,
  SearchScreen,
  PlaceDetailScreen,
  ServiceProviderDetailScreen,
  FoodDiningListScreen,
  FoodVendorDetailScreen,
  RecentAlertsDetailScreen,
  EmergencyContactDetailScreen,
  CommunityPostDetailScreen,
  CommunityPostCreateScreen,
  EmergencyContactsScreen,
  AboutAppScreen
} from './screens/Module2';

// Screens 33 to 48
import {
  CommunityHubScreen,
  VolunteerRegistrationScreen,
  VolunteerDirectoryScreen,
  DonationRequestsScreen,
  DonationDetailScreen,
  PostDonationScreen,
  BloodRequestFormScreen,
  BloodBroadcastScreen,
  JobsRentalsScreen,
  RentalListingsScreen,
  RentalDetailScreen,
  PostRentalScreen,
  JobListingsScreen,
  JobDetailPostVacancyScreen,
  ProfileOverviewScreen,
  EditProfileScreen,
  SettingsScreen
} from './screens/Module3';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Redirects */}
        <Route path="/" element={<Navigate to="/splash" replace />} />
        
        {/* Approved Screens 1 to 5 */}
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
        
        <Route path="/onboarding/civic" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <OnboardingCivicScreen />
          </motion.div>
        } />
        
        <Route path="/onboarding/safety" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <OnboardingSafetyScreen />
          </motion.div>
        } />
        
        <Route path="/ward-selection" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <WardSelectionScreen />
          </motion.div>
        } />

        {/* Screens 6 to 10 & Appearance Interstitial */}
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

        <Route path="/location-permission" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <LocationPermissionScreen />
          </motion.div>
        } />

        <Route path="/choose-appearance" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <ChooseAppearanceScreen />
          </motion.div>
        } />

        <Route path="/home" element={
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <HomeDashboardScreen />
          </motion.div>
        } />

        <Route path="/drawer" element={
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <DrawerScreen />
          </motion.div>
        } />

        {/* Screens 11 to 15 */}
        {/* Community and notices */}
        <Route path="/civic" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <CivicHubScreen />
          </motion.div>
        } />

        <Route path="/community" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <CommunityHubScreen />
          </motion.div>
        } />

        <Route path="/community-feed" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <CommunityFeedScreen />
          </motion.div>
        } />

        <Route path="/community-feed/create" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <CommunityPostCreateScreen />
          </motion.div>
        } />

        <Route path="/community-feed/post/:postId" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <CommunityPostDetailScreen />
          </motion.div>
        } />

        <Route path="/notifications" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <NoticesScreen />
          </motion.div>
        } />

        {/* Search */}
        <Route path="/search" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <SearchScreen />
          </motion.div>
        } />

        {/* Complaints (Repairs Step 1, 2, Submitted, List and Detail) */}
        <Route path="/complaints" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <MyReportedScreen />
          </motion.div>
        } />

        <Route path="/complaints/camera" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
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

        <Route path="/complaints/:complaintId" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <ComplaintDetailScreen />
          </motion.div>
        } />

        {/* SOS and emergency contact */}
        <Route path="/sos" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <SOSEmergencyScreen />
          </motion.div>
        } />

        <Route path="/emergency-contact/:contactId" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <EmergencyContactDetailScreen />
          </motion.div>
        } />

        <Route path="/emergency-contacts" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <EmergencyContactsScreen />
          </motion.div>
        } />

        {/* Alerts and alerts detail */}
        <Route path="/alerts" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <RecentAlertsScreen />
          </motion.div>
        } />

        <Route path="/alerts/:alertId" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <RecentAlertsDetailScreen />
          </motion.div>
        } />

        {/* Services Directory and Service Provider detail */}
        <Route path="/services" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <ServiceDirectoryScreen />
          </motion.div>
        } />

        <Route path="/services/:providerId" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <ServiceProviderDetailScreen />
          </motion.div>
        } />

        <Route path="/live-updates" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <LiveUpdatesScreen />
          </motion.div>
        } />

        <Route path="/language-selection" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <LanguageSelectionScreen />
          </motion.div>
        } />

        {/* Food and Dining */}
        <Route path="/food" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <FoodDiningListScreen />
          </motion.div>
        } />

        <Route path="/food/:vendorId" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <FoodVendorDetailScreen />
          </motion.div>
        } />

        {/* Explore and Place Detail */}
        <Route path="/explore" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <ExploreHubScreen />
          </motion.div>
        } />

        <Route path="/places/:placeId" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <PlaceDetailScreen />
          </motion.div>
        } />

        <Route path="/places" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <PlacesListScreen />
          </motion.div>
        } />

        {/* Screens 31 to 32 */}
        <Route path="/transport" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <TransportHubScreen />
          </motion.div>
        } />

        <Route path="/transport/detail" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <TransportTimetableScreen />
          </motion.div>
        } />



        <Route path="/volunteer/register" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <VolunteerRegistrationScreen />
          </motion.div>
        } />

        <Route path="/volunteers" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <VolunteerDirectoryScreen />
          </motion.div>
        } />

        {/* Screens 36 to 40 */}
        <Route path="/donations" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <DonationRequestsScreen />
          </motion.div>
        } />

        <Route path="/donations/:requestId" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <DonationDetailScreen />
          </motion.div>
        } />

        <Route path="/donations/create" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <PostDonationScreen />
          </motion.div>
        } />

        <Route path="/blood-request/create" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <BloodRequestFormScreen />
          </motion.div>
        } />

        <Route path="/blood-request/:requestId" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <BloodBroadcastScreen />
          </motion.div>
        } />

        {/* Screens 41 to 45 */}
        <Route path="/jobs-rentals" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <JobsRentalsScreen />
          </motion.div>
        } />

        <Route path="/rentals" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <RentalListingsScreen />
          </motion.div>
        } />

        <Route path="/rentals/create" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <PostRentalScreen />
          </motion.div>
        } />

        <Route path="/rentals/:rentalId" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <RentalDetailScreen />
          </motion.div>
        } />

        <Route path="/jobs" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <JobListingsScreen />
          </motion.div>
        } />

        <Route path="/jobs/detail-and-post" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <JobDetailPostVacancyScreen />
          </motion.div>
        } />

        {/* Screens 46 to 48 */}
        <Route path="/profile" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <ProfileOverviewScreen />
          </motion.div>
        } />

        <Route path="/profile/edit" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <EditProfileScreen />
          </motion.div>
        } />

        <Route path="/settings" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <SettingsScreen />
          </motion.div>
        } />

        <Route path="/about" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full flex flex-col flex-1"
          >
            <AboutAppScreen />
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
