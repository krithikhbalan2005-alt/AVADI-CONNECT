import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

// Language Type
export type Language = 'en' | 'ta';

// Translation dictionary
export const TRANSLATIONS = {
  en: {
    // General / Layout
    appName: "AVADI CONNECT",
    slogan: "Smarter Avadi, Stronger Community",
    tamil: "தமிழ்",
    english: "English",
    getStarted: "Get Started",
    login: "Login",
    register: "Register",
    next: "Next",
    skip: "Skip",
    continue: "Continue",
    allowLocation: "Allow Location",
    notNow: "Not Now",
    searchPlaceholder: "Search places, services, jobs...",
    notifications: "Notifications",
    settings: "Settings",
    profile: "Profile",
    ward: "Ward",
    changeWard: "Change Ward",
    save: "Save Changes",
    editProfile: "Edit Profile",
    logout: "Log Out",
    
    // Bottom Nav
    navHome: "Home",
    navCivic: "Civic",
    navExplore: "Explore",
    navCommunity: "Community",

    // Home / Dashboard
    welcomeBack: "Welcome back,",
    quickActions: "Quick Actions",
    reportAction: "Report",
    sosAction: "SOS",
    noticesAction: "Notices",
    moreAction: "More",
    liveUpdates: "Live Updates",
    seeAll: "See All",
    recentAlerts: "Recent Alerts",

    // Alerts
    alertsTitle: "Local Alerts",
    alertDetailTitle: "Alert Details",
    alertTypeWeather: "Weather Alert",
    alertTypeTraffic: "Traffic Alert",
    alertTypeUtility: "Power & Water Utility",

    // Complaints
    civicHubTitle: "Civic Hub",
    myComplaints: "My Complaints",
    reportComplaint: "Report a Complaint",
    cameraTitle: "Camera Capture",
    cameraSub: "Take a clear photo of the issue to report it",
    categoryTitle: "Complaint Category",
    detailsTitle: "Provide Details",
    trackingTitle: "Complaint Tracking",
    capturePhoto: "Capture Photo",
    submitComplaint: "Submit Complaint",
    complaintSuccess: "Complaint Submitted Successfully!",
    complaintId: "Complaint ID",
    trackStatus: "Track Status",
    backToHome: "Back to Home",
    statusPending: "Pending",
    statusInProgress: "In Progress",
    statusResolved: "Resolved",

    // Explore
    exploreTitle: "Explore Avadi",
    placesTitle: "Places List",
    placeDetailTitle: "Place Details",
    localServicesTitle: "Local Services",
    serviceProviderTitle: "Service Provider",
    foodDiningTitle: "Food & Dining",
    foodVendorTitle: "Food Vendor Details",
    transportTitle: "Transport Hub",
    transportDetailTitle: "Timetable & Route Details",

    // Community
    communityHubTitle: "Community Hub",
    volunteerRegister: "Volunteer Registration",
    volunteerDirectory: "Volunteer Directory",
    donationRequests: "Donation Requests",
    donationDetail: "Request Details",
    postDonation: "Request Donation",
    bloodRequestForm: "Urgent Blood Request",
    bloodBroadcast: "Blood Request Details",

    // Jobs & Rentals
    jobsRentalsTitle: "Jobs & Rentals",
    rentalListings: "Rental Listings",
    rentalDetail: "Rental Details",
    jobListings: "Job Listings",
    jobDetailPost: "Job Details & Post Vacancy",
    postJob: "Post Job Vacancy",
    applyNow: "Apply Now",

    // Emergency
    sosTitle: "Emergency SOS",
    tapSOS: "Tap to Send SOS",
    emergencyContacts: "Emergency Contacts",
    sosCountdown: "Sending SOS in...",
    sosSent: "SOS Emergency Alert Sent!",
    sosSentSub: "Your alert has been sent to emergency contacts and local authorities.",
  },
  ta: {
    // General / Layout
    appName: "ஆவடி கனெக்ட்",
    slogan: "சிறந்த ஆவடி, சிறந்த சமூகம்",
    tamil: "தமிழ்",
    english: "English",
    getStarted: "தொடங்கவும்",
    login: "உள்நுழை",
    register: "பதிவு செய்க",
    next: "அடுத்து",
    skip: "தவிர்",
    continue: "தொடர்க",
    allowLocation: "இருப்பிடத்தை அனுமதி",
    notNow: "இப்போது வேண்டாம்",
    searchPlaceholder: "இடங்கள், சேவைகள், வேலைகளைத் தேடுக...",
    notifications: "அறிவிப்புகள்",
    settings: "அமைப்புகள்",
    profile: "சுயவிவரம்",
    ward: "வார்டு",
    changeWard: "வார்டு மாற்றுக",
    save: "மாற்றங்களைச் சேமி",
    editProfile: "சுயவிவரம் திருத்து",
    logout: "வெளியேறு",

    // Bottom Nav
    navHome: "முகப்பு",
    navCivic: "நகராட்சி",
    navExplore: "ஆராய்க",
    navCommunity: "சமூகம்",

    // Home / Dashboard
    welcomeBack: "வரவேற்கிறோம்,",
    quickActions: "விரைவான சேவைகள்",
    reportAction: "புகார் செய்க",
    sosAction: "அவசரம்",
    noticesAction: "அறிவிப்புகள்",
    moreAction: "கூடுதல்",
    liveUpdates: "நேரடி தகவல்கள்",
    seeAll: "அனைத்தும் காண்க",
    recentAlerts: "சமீபத்திய எச்சரிக்கைகள்",

    // Alerts
    alertsTitle: "உள்ளூர் எச்சரிக்கைகள்",
    alertDetailTitle: "எச்சரிக்கை விவரங்கள்",
    alertTypeWeather: "வானிலை எச்சரிக்கை",
    alertTypeTraffic: "போக்குவரத்து எச்சரிக்கை",
    alertTypeUtility: "மின்சாரம் & குடிநீர்",

    // Complaints
    civicHubTitle: "நகராட்சி மையம்",
    myComplaints: "எனது புகார்கள்",
    reportComplaint: "புகார் அளிக்கவும்",
    cameraTitle: "புகைப்படம் எடுக்கவும்",
    cameraSub: "புகார் செய்ய பிரச்சனையை தெளிவாக புகைப்படம் எடுக்கவும்",
    categoryTitle: "புகார் வகை",
    detailsTitle: "விவரங்களை அளிக்கவும்",
    trackingTitle: "புகார் கண்காணிப்பு",
    capturePhoto: "புகைப்படம் எடு",
    submitComplaint: "புகாரைச் சமர்ப்பி",
    complaintSuccess: "புகார் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!",
    complaintId: "புகார் எண்",
    trackStatus: "நிலையை கண்காணிக்கவும்",
    backToHome: "முகப்புக்குச் செல்க",
    statusPending: "நிலுவையில் உள்ளது",
    statusInProgress: "செயல்பாட்டில் உள்ளது",
    statusResolved: "தீர்வு காணப்பட்டது",

    // Explore
    exploreTitle: "ஆவடியை ஆராய்க",
    placesTitle: "இடங்களின் பட்டியல்",
    placeDetailTitle: "இட விவரங்கள்",
    localServicesTitle: "உள்ளூர் சேவைகள்",
    serviceProviderTitle: "சேவை வழங்குநர்",
    foodDiningTitle: "உணவு & உணவகங்கள்",
    foodVendorTitle: "உணவக விவரங்கள்",
    transportTitle: "போக்குவரத்து மையம்",
    transportDetailTitle: "கால அட்டவணை & விவரங்கள்",

    // Community
    communityHubTitle: "சமூக மையம்",
    volunteerRegister: "தன்னார்வலர் பதிவு",
    volunteerDirectory: "தன்னார்வலர் பட்டியல்",
    donationRequests: "உதவி கோரிக்கைகள்",
    donationDetail: "கோரிக்கை விவரங்கள்",
    postDonation: "உதவி கோருக",
    bloodRequestForm: "அவசர இரத்தம் தேவை",
    bloodBroadcast: "இரத்தக் கொடை விவரங்கள்",

    // Jobs & Rentals
    jobsRentalsTitle: "வேலை & வாடகை",
    rentalListings: "வாடகை வீடுகள்",
    rentalDetail: "வீட்டு விவரங்கள்",
    jobListings: "வேலை வாய்ப்புகள்",
    jobDetailPost: "வேலை விவரங்கள் & பதிவு",
    postJob: "புதிய வேலை விளம்பரம்",
    applyNow: "விண்ணப்பிக்கவும்",

    // Emergency
    sosTitle: "அவசர SOS",
    tapSOS: "SOS அனுப்ப அழுத்தவும்",
    emergencyContacts: "அவசர தொடர்புகள்",
    sosCountdown: "அவசர அறிவிப்பு அனுப்பப்படுகிறது...",
    sosSent: "SOS எச்சரிக்கை அனுப்பப்பட்டது!",
    sosSentSub: "உங்கள் அவசர எச்சரிக்கை தொடர்பு எண்களுக்கும் அதிகாரிகளுக்கும் அனுப்பப்பட்டுள்ளது.",
  }
};

// Data Interfaces
export interface Complaint {
  id: string;
  category: string;
  categoryEn: string;
  description: string;
  photoUrl: string;
  location: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  statusTa: string;
  date: string;
  department: string;
  departmentTa: string;
  timeline: { title: string; titleTa: string; description: string; descriptionTa: string; date: string; active: boolean }[];
}

export interface CommunityPost {
  id: string;
  author: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  commentsCount: number;
  comments: { author: string; content: string; time: string }[];
  category: string;
}

export interface Place {
  id: string;
  name: string;
  nameTa: string;
  category: 'parks' | 'schools' | 'hospitals' | 'markets' | 'worship' | 'facilities';
  categoryLabel: string;
  categoryLabelTa: string;
  rating: number;
  reviewsCount: number;
  openTime: string;
  address: string;
  addressTa: string;
  image: string;
  description: string;
  descriptionTa: string;
  amenities: string[];
}

export interface ServiceProvider {
  id: string;
  name: string;
  type: string;
  typeTa: string;
  rating: number;
  reviewsCount: number;
  experience: string;
  jobsDone: number;
  satisfaction: string;
  phone: string;
  whatsapp: string;
  address: string;
  services: string[];
  workGallery: string[];
}

export interface FoodVendor {
  id: string;
  name: string;
  cuisine: string;
  cuisineTa: string;
  rating: number;
  reviewsCount: number;
  discount: string;
  image: string;
  address: string;
  phone: string;
  menu: { name: string; price: number; description: string; isVeg: boolean }[];
}

export interface LocalAlert {
  id: string;
  title: string;
  titleTa: string;
  type: 'weather' | 'traffic' | 'utility';
  severity: 'high' | 'medium' | 'low';
  date: string;
  time: string;
  description: string;
  descriptionTa: string;
  guidelines: string[];
}

export interface DonationRequest {
  id: string;
  title: string;
  titleTa: string;
  urgency: 'Urgent' | 'Normal';
  urgencyTa: string;
  organizer: string;
  itemsNeeded: string;
  itemsNeededTa: string;
  description: string;
  descriptionTa: string;
  location: string;
  phone: string;
  whatsapp: string;
  timeAgo: string;
}

export interface Volunteer {
  id: string;
  name: string;
  domain: 'Environment' | 'Safety' | 'Education' | 'Health';
  domainTa: string;
  activities: number;
  rating: number;
  phone: string;
  status: 'Available' | 'Busy';
  avatar: string;
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  salary: string;
  location: string;
  type: 'Full Time' | 'Part Time' | 'Internship';
  experience: string;
  description: string;
  requirements: string[];
  postedAgo: string;
}

export interface RentalListing {
  id: string;
  title: string;
  rent: string;
  type: string; // 1 BHK, 2 BHK, etc.
  location: string;
  owner: string;
  phone: string;
  images: string[];
  description: string;
  amenities: string[];
}

export interface BloodRequest {
  id: string;
  bloodGroup: string;
  units: number;
  hospital: string;
  patientName: string;
  urgency: 'Low' | 'Medium' | 'High' | 'Critical';
  phone: string;
  date: string;
  location: string;
}

// Main App Context State Interface
interface AppContextType {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  selectedWard: string;
  setSelectedWard: (ward: string) => void;
  profile: {
    name: string;
    email: string;
    phone: string;
    ward: string;
    address: string;
    avatar: string;
  };
  updateProfile: (updated: Partial<AppContextType['profile']>) => void;
  complaints: Complaint[];
  addComplaint: (newComplaint: Omit<Complaint, 'id' | 'status' | 'statusTa' | 'date' | 'timeline' | 'department' | 'departmentTa'>) => string;
  communityPosts: CommunityPost[];
  addCommunityPost: (content: string, image?: string, category?: string) => void;
  addCommentToPost: (postId: string, commentContent: string) => void;
  alerts: LocalAlert[];
  donations: DonationRequest[];
  addDonationRequest: (newReq: Omit<DonationRequest, 'id' | 'timeAgo'>) => void;
  volunteers: Volunteer[];
  registerAsVolunteer: (newVol: Omit<Volunteer, 'id' | 'activities' | 'rating' | 'status' | 'avatar' | 'domainTa'>) => void;
  bloodRequests: BloodRequest[];
  addBloodRequest: (newReq: Omit<BloodRequest, 'id'>) => string;
  jobs: JobListing[];
  addJobListing: (newJob: Omit<JobListing, 'id' | 'postedAgo'>) => void;
  rentals: RentalListing[];
  addRentalListing: (newRental: Omit<RentalListing, 'id'>) => void;
  services: ServiceProvider[];
  foodVendors: FoodVendor[];
  notifications: { id: string; title: string; titleTa: string; body: string; bodyTa: string; time: string; read: boolean }[];
  markNotificationsAsRead: () => void;
  sosActive: boolean;
  triggerSOS: () => void;
  cancelSOS: () => void;
  t: (key: keyof typeof TRANSLATIONS['en']) => string;
  reviewerMode: boolean;
  setReviewerMode: (val: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<Language>('en');
  const [selectedWard, setSelectedWard] = useState<string>('Ward 1 - Avadi North');
  const [sosActive, setSosActive] = useState<boolean>(false);
  const [reviewerMode, setReviewerMode] = useState<boolean>(true); // Enabled by default for easy review, but hidden inside settings

  // 1. User Profile details
  const [profile, setProfile] = useState({
    name: "Karthik Balan",
    email: "karthik.balan@email.com",
    phone: "+91 98765 43210",
    ward: "Ward 1 - Avadi North",
    address: "No. 15, 2nd Main Road, Avadi, Chennai - 600054",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200"
  });

  const updateProfile = (updated: Partial<typeof profile>) => {
    setProfile(prev => ({ ...prev, ...updated }));
  };

  // 2. Pre-seeded Complaints
  const [complaints, setComplaints] = useState<Complaint[]>([
    {
      id: "AVDI2505120001",
      category: "Pothole",
      categoryEn: "Pothole",
      description: "Large pothole on the road near 5th Avenue causing traffic problems and hazard for two-wheelers.",
      photoUrl: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=400",
      location: "5th Avenue, Avadi North",
      status: "In Progress",
      statusTa: "செயல்பாட்டில் உள்ளது",
      date: "May 15, 2025",
      department: "Highways Department",
      departmentTa: "நெடுஞ்சாலைத் துறை",
      timeline: [
        { title: "Submitted", titleTa: "சமர்ப்பிக்கப்பட்டது", description: "Complaint received", descriptionTa: "புகார் பெறப்பட்டது", date: "May 15, 2025 - 10:20 AM", active: true },
        { title: "Under Investigation", titleTa: "விசாரணையில் உள்ளது", description: "Assigned to Highways Dept", descriptionTa: "நெடுஞ்சாலைத் துறைக்கு ஒதுக்கப்பட்டது", date: "May 15, 2025 - 02:15 PM", active: true },
        { title: "Action Taken", titleTa: "நடவடிக்கை எடுக்கப்பட்டது", description: "Workers dispatched for patch work", descriptionTa: "பழுதுபார்க்க பணியாளர்கள் அனுப்பப்பட்டனர்", date: "May 16, 2025 - 09:30 AM", active: true },
        { title: "Resolved", titleTa: "தீர்வு காணப்பட்டது", description: "Pothole closed and road levelled", descriptionTa: "பள்ளம் மூடப்பட்டு சாலை சமன் செய்யப்பட்டது", date: "--", active: false }
      ]
    },
    {
      id: "AVDI2505100042",
      category: "Street Light",
      categoryEn: "Street Light",
      description: "Street lights not working for the last 3 days in P&T Colony 2nd cross street. Very dark at night.",
      photoUrl: "https://images.unsplash.com/photo-1509024644558-2f56ce76c490?auto=format&fit=crop&q=80&w=400",
      location: "P&T Colony, Avadi",
      status: "Resolved",
      statusTa: "தீர்வு காணப்பட்டது",
      date: "May 10, 2025",
      department: "Electrical Department",
      departmentTa: "மின்சார வாரியம்",
      timeline: [
        { title: "Submitted", titleTa: "சமர்ப்பிக்கப்பட்டது", description: "Complaint received", descriptionTa: "புகார் பெறப்பட்டது", date: "May 10, 2025 - 08:45 AM", active: true },
        { title: "Under Investigation", titleTa: "விசாரணையில் உள்ளது", description: "Assigned to Electrical Inspector", descriptionTa: "மின்சார ஆய்வாளருக்கு ஒதுக்கப்பட்டது", date: "May 10, 2025 - 11:30 AM", active: true },
        { title: "Action Taken", titleTa: "நடவடிக்கை எடுக்கப்பட்டது", description: "Bulb and faulty wiring replaced", descriptionTa: "விளக்கு மற்றும் பழுதடைந்த கம்பிகள் மாற்றப்பட்டன", date: "May 11, 2025 - 03:00 PM", active: true },
        { title: "Resolved", titleTa: "தீர்வு காணப்பட்டது", description: "Street light verified working", descriptionTa: "விளக்கு எரிவது சரிபார்க்கப்பட்டது", date: "May 11, 2025 - 07:30 PM", active: true }
      ]
    },
    {
      id: "AVDI2505160089",
      category: "Garbage",
      categoryEn: "Garbage",
      description: "Garbage pile has not been cleared for over a week near the park entrance. Foul smell spreading.",
      photoUrl: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=400",
      location: "Avadi Park Entrance",
      status: "Pending",
      statusTa: "நிலுவையில் உள்ளது",
      date: "May 16, 2025",
      department: "Sanitation Department",
      departmentTa: "துப்புரவுத் துறை",
      timeline: [
        { title: "Submitted", titleTa: "சமர்ப்பிக்கப்பட்டது", description: "Complaint received", descriptionTa: "புகார் பெறப்பட்டது", date: "May 16, 2025 - 07:15 AM", active: true },
        { title: "Under Investigation", titleTa: "விசாரணையில் உள்ளது", description: "Pending queue assignment", descriptionTa: "துறை ஒதுக்கீட்டிற்காக காத்திருக்கிறது", date: "--", active: false },
        { title: "Action Taken", titleTa: "நடவடிக்கை எடுக்கப்பட்டது", description: "Garbage truck dispatch scheduled", descriptionTa: "குப்பை லாரி அனுப்ப திட்டமிடப்பட்டுள்ளது", date: "--", active: false },
        { title: "Resolved", titleTa: "தீர்வு காணப்பட்டது", description: "Area cleared and sanitized", descriptionTa: "பகுதி சுத்தம் செய்யப்பட்டு கிருமிநாசினி தெளிக்கப்பட்டது", date: "--", active: false }
      ]
    }
  ]);

  const addComplaint = (newComplaint: Omit<Complaint, 'id' | 'status' | 'statusTa' | 'date' | 'timeline' | 'department' | 'departmentTa'>) => {
    const randomId = "AVDI" + Math.floor(1000000000 + Math.random() * 9000000000);
    const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    const formatted: Complaint = {
      id: randomId,
      ...newComplaint,
      status: "Pending",
      statusTa: "நிலுவையில் உள்ளது",
      date: dateStr,
      department: "Municipal Administration",
      departmentTa: "நகராட்சி நிர்வாகம்",
      timeline: [
        { title: "Submitted", titleTa: "சமர்ப்பிக்கப்பட்டது", description: "Complaint received online", descriptionTa: "புகார் இணையவழியாகப் பெறப்பட்டது", date: `${dateStr} - ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`, active: true },
        { title: "Under Investigation", titleTa: "விசாரணையில் உள்ளது", description: "Pending department assignment", descriptionTa: "துறை ஒதுக்கீட்டிற்காக காத்திருக்கிறது", date: "--", active: false },
        { title: "Action Taken", titleTa: "நடவடிக்கை எடுக்கப்பட்டது", description: "Action pending review", descriptionTa: "நடவடிக்கை பரிசீலனையில் உள்ளது", date: "--", active: false },
        { title: "Resolved", titleTa: "தீர்வு காணப்பட்டது", description: "Issue resolved", descriptionTa: "பிரச்சனை சரிசெய்யப்பட்டது", date: "--", active: false }
      ]
    };

    setComplaints(prev => [formatted, ...prev]);
    
    // Add a notification about complaint submission
    setNotifications(prev => [
      {
        id: Math.random().toString(),
        title: "Complaint Filed Successfully",
        titleTa: "புகார் சமர்ப்பிக்கப்பட்டது",
        body: `Your complaint for ${newComplaint.categoryEn} has been filed. ID: ${randomId}`,
        bodyTa: `உங்கள் ${newComplaint.categoryEn} புகாரைப் பதிவு செய்யப்பட்டுள்ளது. எண்: ${randomId}`,
        time: "Just Now",
        read: false
      },
      ...prev
    ]);

    return randomId;
  };

  // 3. Pre-seeded Community Feed Posts
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>([
    {
      id: "post1",
      author: "Ramesh Kumar",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      time: "2 hours ago",
      content: "A large pothole has developed near the 5th Avenue main road. It is filled with rainwater and dangerous for two-wheelers. I have filed a civic complaint, hope the authorities fix it soon.",
      image: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=600",
      likes: 23,
      commentsCount: 5,
      category: "Road Infrastructure",
      comments: [
        { author: "Suresh Pillai", content: "Yes, I almost fell there yesterday evening. Thanks for reporting!", time: "1 hour ago" },
        { author: "Anitha R", content: "Highly dangerous during nights. Hope they fix it.", time: "45 mins ago" }
      ]
    },
    {
      id: "post2",
      author: "Priya S",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      time: "4 hours ago",
      content: "A big tree branch has fallen near the school entrance. It is blocking the footpath. Kids are forced to walk on the main road. Kindly watch out and drive safely.",
      likes: 15,
      commentsCount: 2,
      category: "Safety",
      comments: [
        { author: "Karthik B", content: "I'll alert the ward volunteer to clear this.", time: "3 hours ago" }
      ]
    }
  ]);

  const addCommunityPost = (content: string, image?: string, category = "General") => {
    const newPost: CommunityPost = {
      id: "post_" + Math.random().toString(),
      author: profile.name,
      avatar: profile.avatar,
      time: "Just Now",
      content,
      image,
      likes: 0,
      commentsCount: 0,
      category,
      comments: []
    };
    setCommunityPosts(prev => [newPost, ...prev]);
  };

  const addCommentToPost = (postId: string, commentContent: string) => {
    setCommunityPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          commentsCount: p.commentsCount + 1,
          comments: [...p.comments, { author: profile.name, content: commentContent, time: "Just Now" }]
        };
      }
      return p;
    }));
  };

  // 4. Pre-seeded Local Alerts
  const [alerts] = useState<LocalAlert[]>([
    {
      id: "alert1",
      title: "Heavy Rain & Waterlogging Advisory",
      titleTa: "கனமழை மற்றும் வெள்ள அபாய எச்சரிக்கை",
      type: "weather",
      severity: "high",
      date: "May 15, 2025",
      time: "10:30 AM",
      description: "Severe heavy rainfall expected in Avadi region for the next 24 hours. Waterlogging might occur in low lying areas. Residents are advised to stay indoors and avoid travelling unless urgent.",
      descriptionTa: "அடுத்த 24 மணி நேரத்திற்கு ஆவடி பகுதியில் மிகக் கனமழை பெய்யக்கூடும். தாழ்வான பகுதிகளில் வெள்ளநீர் தேங்க வாய்ப்புள்ளது. அவசியமின்றி வெளியில் செல்வதைத் தவிர்க்கவும்.",
      guidelines: [
        "Keep emergency lights and mobile phones charged.",
        "Store sufficient drinking water and dry foods.",
        "Avoid contact with electrical poles or fallen wires.",
        "Helpline numbers are active in the SOS portal."
      ]
    },
    {
      id: "alert2",
      title: "Traffic Diversion: Poonamallee High Road",
      titleTa: "போக்குவரத்து மாற்றம்: பூந்தமல்லி நெடுஞ்சாலை",
      type: "traffic",
      severity: "medium",
      date: "May 15, 2025",
      time: "09:15 AM",
      description: "Traffic diversion is implemented near Poonamallee High Road junction due to stormwater drain culvert repair work. Heavy vehicles are rerouted via Outer Ring Road.",
      descriptionTa: "பூந்தமல்லி நெடுஞ்சாலை சந்திப்பில் மழைநீர் வடிகால் பழுதுபார்ப்பு காரணமாக போக்குவரத்து மாற்றப்பட்டுள்ளது. கனரக வாகனங்கள் வெளிவட்ட சாலை வழியாக இயக்கப்படுகின்றன.",
      guidelines: [
        "Expect delays of 15-20 minutes on this route.",
        "Use alternate routes like Avadi-Kamaráj Nagar link road.",
        "Follow instructions from traffic police personnel."
      ]
    },
    {
      id: "alert3",
      title: "Scheduled Power Cut Update",
      titleTa: "மின்சார விநியோக நிறுத்தம்",
      type: "utility",
      severity: "low",
      date: "May 14, 2025",
      time: "08:00 AM",
      description: "Power supply will be temporarily suspended in Avadi Sector 7, P&T Colony, and surrounding areas from 10:00 AM to 04:00 PM for maintenance work.",
      descriptionTa: "மாதாந்திர பராமரிப்பு பணிகள் காரணமாக ஆவடி செக்டார் 7, பி&டி காலனி பகுதிகளில் காலை 10:00 மணி முதல் மாலை 04:00 மணி வரை மின் விநியோகம் நிறுத்தப்படும்.",
      guidelines: [
        "Plan your household activities beforehand.",
        "Cooperate with TANGEDCO maintenance crews."
      ]
    }
  ]);

  // 5. Pre-seeded Places (Inclusive and Balanced categories)
  const [places] = useState<Place[]>([
    {
      id: "place1",
      name: "Avadi Park & Walkways",
      nameTa: "ஆவடி பூங்கா & நடைபாதை",
      category: "parks",
      categoryLabel: "Parks & Famous Spots",
      categoryLabelTa: "பூங்காக்கள் & முக்கிய இடங்கள்",
      rating: 4.5,
      reviewsCount: 328,
      openTime: "05:00 AM - 08:30 PM",
      address: "Gandhi Nagar Main Road, Avadi, Chennai - 600054",
      addressTa: "காந்தி நகர் மெயின் ரோடு, ஆவடி, சென்னை - 600054",
      image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=400",
      description: "A beautiful public park in Avadi featuring green lawns, children's play area, and a 1km paved walking track. Well maintained by the municipal corporation.",
      descriptionTa: "ஆவடியில் உள்ள ஒரு அழகான பொதுப் பூங்கா. பசிய புல்வெளிகள், குழந்தைகள் விளையாடும் இடம் மற்றும் 1 கிமீ நடைபாதை வசதி கொண்டது.",
      amenities: ["Walking Track", "Children Play Area", "Restrooms", "Drinking Water", "Benches"]
    },
    {
      id: "place2",
      name: "Sri Chaitanya School",
      nameTa: "ஸ்ரீ சைதன்யா பள்ளி",
      category: "schools",
      categoryLabel: "Schools & Colleges",
      categoryLabelTa: "பள்ளிகள் & கல்லூரிகள்",
      rating: 4.2,
      reviewsCount: 145,
      openTime: "08:30 AM - 04:00 PM",
      address: "Poonamallee High Road, Avadi, Chennai - 600054",
      addressTa: "பூந்தமல்லி நெடுஞ்சாலை, ஆவடி, சென்னை - 600054",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=400",
      description: "One of the premier co-educational higher secondary institutions in Avadi offering CBSE curriculum with state-of-the-art laboratory and sports facilities.",
      descriptionTa: "ஆவடியில் உள்ள ஒரு முன்னணி மேல்நிலைப்பள்ளி. சிறந்த ஆய்வகங்கள் மற்றும் விளையாட்டு மைதான வசதியுடன் கூடிய கல்வி நிறுவனம்.",
      amenities: ["Smart Classrooms", "Science Labs", "Playground", "School Bus Fleet", "Auditorium"]
    },
    {
      id: "place3",
      name: "Avadi Government Hospital",
      nameTa: "ஆவடி அரசு மருத்துவமனை",
      category: "hospitals",
      categoryLabel: "Hospitals",
      categoryLabelTa: "மருத்துவமனைகள்",
      rating: 4.0,
      reviewsCount: 512,
      openTime: "24 Hours Open",
      address: "NH-716, Near Railway Station, Avadi, Chennai - 600054",
      addressTa: "தேசிய நெடுஞ்சாலை-716, ரயில் நிலையம் அருகில், ஆவடி, சென்னை - 600054",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce8?auto=format&fit=crop&q=80&w=400",
      description: "Fully-functional Government General Hospital offering comprehensive outpatient, inpatient, maternity, emergency trauma care, and pharmacy facilities.",
      descriptionTa: "ஆவடி அரசு பொது மருத்துவமனை. 24 மணி நேர அவசர சிகிச்சை பிரிவு, மகப்பேறு சிகிச்சை மற்றும் இலவச மருந்தகம் கொண்டது.",
      amenities: ["24/7 Emergency Room", "Pharmacy", "ICU Ward", "Ambulance Service", "Maternity Wing"]
    },
    {
      id: "place4",
      name: "Avadi Daily Market",
      nameTa: "ஆவடி தினசரி சந்தை",
      category: "markets",
      categoryLabel: "Markets",
      categoryLabelTa: "சந்தைகள்",
      rating: 4.3,
      reviewsCount: 890,
      openTime: "04:00 AM - 10:00 PM",
      address: "Market Road, Near Bus Terminus, Avadi, Chennai - 600054",
      addressTa: "மார்க்கெட் ரோடு, பேருந்து நிலையம் அருகில், ஆவடி, சென்னை - 600054",
      image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=400",
      description: "Bustling marketplace with hundreds of stalls selling fresh local vegetables, fruits, flowers, groceries, and traditional south Indian goods.",
      descriptionTa: "ஆவடியின் மிகப்பெரிய காய்கறி மற்றும் பழச் சந்தை. நியாயமான விலையில் புதிய பொருட்களை வாங்குவதற்கான சிறந்த இடம்.",
      amenities: ["Fresh Produce Stalls", "Parking Area", "Public Toilets", "ATM Nearby"]
    },
    {
      id: "place5",
      name: "Sri Karumari Amman Temple",
      nameTa: "ஸ்ரீ கருமாரி அம்மன் கோவில்",
      category: "worship",
      categoryLabel: "Places of Worship",
      categoryLabelTa: "வழிபாட்டுத் தலங்கள்",
      rating: 4.8,
      reviewsCount: 1204,
      openTime: "06:00 AM - 12:00 PM, 04:30 PM - 09:00 PM",
      address: "Sannidhi Street, TNHB Colony, Avadi, Chennai - 600054",
      addressTa: "சந்நிதி தெரு, தமிழ்நாடு வீட்டுவசதி வாரிய குடியிருப்பு, ஆவடி, சென்னை - 600054",
      image: "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&q=80&w=400",
      description: "Famous ancient Hindu temple dedicated to Goddess Mariamman. Features traditional Dravidian architecture and draws huge crowds during the festival of Aadi.",
      descriptionTa: "ஆவடியில் உள்ள புகழ்பெற்ற அம்மன் கோவில். திராவிட கட்டிடக்கலையுடன் கூடிய வழிபாட்டுத் தலம். ஆடி மாத திருவிழா இங்கு மிகவும் பிரசித்தி பெற்றது.",
      amenities: ["Prasadam Stall", "Footwear Counter", "Resting Hall", "Marriage Mandapam"]
    },
    {
      id: "place6",
      name: "Avadi Municipal E-Sevai Center",
      nameTa: "ஆவடி நகராட்சி இ-சேவை மையம்",
      category: "facilities",
      categoryLabel: "Public Facilities",
      categoryLabelTa: "பொது வசதிகள்",
      rating: 4.1,
      reviewsCount: 233,
      openTime: "09:30 AM - 05:30 PM (Sunday Holiday)",
      address: "Municipal Corporation Office building, Avadi, Chennai - 600054",
      addressTa: "ஆவடி மாநகராட்சி அலுவலக வளாகம், ஆவடி, சென்னை - 600054",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
      description: "Authorized government citizen portal office for applying for birth/death certificates, community certificates, voter registrations, utility bills payment, and aadhaar cards.",
      descriptionTa: "பிறப்பு, இறப்பு சான்றிதழ், சாதிச் சான்றிதழ், மின் கட்டணம் செலுத்துதல் போன்ற சேவைகளுக்கான அரசு இ-சேவை மையம்.",
      amenities: ["Aadhaar Enrollment", "Online Bill Payments", "Certificate Prints", "Token Queue System"]
    }
  ]);

  // 6. Pre-seeded Local Services (Electricians, Plumbers, Carpenters)
  const [services] = useState<ServiceProvider[]>([
    {
      id: "service1",
      name: "Power Care Electricians",
      type: "Electrician",
      typeTa: "மின்சார நிபுணர்",
      rating: 4.7,
      reviewsCount: 138,
      experience: "8+ Years Experience",
      jobsDone: 1200,
      satisfaction: "98% Satisfaction",
      phone: "+91 98765 00112",
      whatsapp: "+91 98765 00112",
      address: "Gandhi Street, Ward 1, Avadi",
      services: ["House Wiring", "Inverter Installation", "AC Repair", "Short Circuit Fixing", "Appliance Service"],
      workGallery: [
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=200",
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=200"
      ]
    },
    {
      id: "service2",
      name: "QuickFix Plumbing",
      type: "Plumber",
      typeTa: "குழாய் பழுதுபார்ப்பவர்",
      rating: 4.5,
      reviewsCount: 92,
      experience: "5+ Years",
      jobsDone: 850,
      satisfaction: "95%",
      phone: "+91 98765 00113",
      whatsapp: "+91 98765 00113",
      address: "Kamaráj Nagar, Avadi South",
      services: ["Pipe Leakage repair", "Tap & Shower installation", "Drainage block clearance", "Water Tank cleaning"],
      workGallery: [
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=200"
      ]
    },
    {
      id: "service3",
      name: "Sri Sai Carpentry",
      type: "Carpenter",
      typeTa: "தச்சர்",
      rating: 4.8,
      reviewsCount: 76,
      experience: "10+ Years",
      jobsDone: 650,
      satisfaction: "99%",
      phone: "+91 98765 00114",
      whatsapp: "+91 98765 00114",
      address: "TNHB Colony, Avadi East",
      services: ["Door/Window Repair", "Modular Kitchen", "Custom Sofa Making", "Lock Installation", "Wood Polish"],
      workGallery: [
        "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=200"
      ]
    }
  ]);

  // 7. Pre-seeded Food Vendors (no online payment - Call / WhatsApp actions only)
  const [foodVendors] = useState<FoodVendor[]>([
    {
      id: "food1",
      name: "Anjappar Chettinad Restaurant",
      cuisine: "Chettinad, South Indian",
      cuisineTa: "செட்டிநாடு, தென்னிந்திய உணவு",
      rating: 4.3,
      reviewsCount: 325,
      discount: "20% OFF on all orders above ₹300",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=400",
      address: "Poonamallee High Road, Avadi, Chennai - 600054",
      phone: "+91 98765 00221",
      menu: [
        { name: "Chettinad Chicken Biryani", price: 240, description: "Authentic spicy Chettinad chicken biryani served with raita and brinjal curry.", isVeg: false },
        { name: "Mutton Chukka", price: 280, description: "Tender goat meat slow cooked with freshly ground Chettinad spices.", isVeg: false },
        { name: "Paneer Butter Masala", price: 180, description: "Rich and creamy cottage cheese cubes in spiced tomato gravy.", isVeg: true },
        { name: "Special Veg Meals", price: 150, description: "South Indian meals served on banana leaf with rice, sambar, rasam, kootu, poriyal, curd and appalam.", isVeg: true }
      ]
    },
    {
      id: "food2",
      name: "Arabian Biryani House",
      cuisine: "Mughlai, Biryani",
      cuisineTa: "மொகலாய, பிரியாணி",
      rating: 4.1,
      reviewsCount: 198,
      discount: "Free delivery within Avadi",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400",
      address: "Railway Station Road, Avadi North",
      phone: "+91 98765 00222",
      menu: [
        { name: "Chicken Shawarma Plate", price: 140, description: "Shredded chicken wrapped in khubz with garlic mayonnaise and veggies.", isVeg: false },
        { name: "Al Faham Chicken", price: 260, description: "Arabian charcoal grilled chicken marinated in exotic spices.", isVeg: false }
      ]
    }
  ]);

  // 8. Pre-seeded Non-Financial Item-based Donations
  const [donations, setDonations] = useState<DonationRequest[]>([
    {
      id: "don1",
      title: "Help for Orphanage Children: Study Materials",
      titleTa: "அனாதை இல்ல குழந்தைகளுக்கு கல்வி உபகரணங்கள்",
      urgency: "Urgent",
      urgencyTa: "அவசரம்",
      organizer: "Avadi Hope Trust",
      itemsNeeded: "Notebooks, Pens, Pencils, Geometry boxes, School bags",
      itemsNeededTa: "நோட்டுப் புத்தகங்கள், பேனாக்கள், பென்சில்கள், பள்ளி பைகள்",
      description: "We are supporting 45 kids at the Hope Children Home. We need school supplies for the upcoming academic term. Direct item drops are welcome at our collection center.",
      descriptionTa: "நம்பிக்கை குழந்தைகள் இல்லத்தில் உள்ள 45 குழந்தைகளுக்கு பள்ளி உபகரணங்கள் தேவைப்படுகின்றன. உங்கள் பங்களிப்புகளை நேரடியாக ஒப்படைக்கலாம்.",
      location: "Near Avadi Railway Station",
      phone: "+91 98765 00331",
      whatsapp: "+91 98765 00331",
      timeAgo: "2 hours ago"
    },
    {
      id: "don2",
      title: "Blankets & Clothes for Elder Care",
      titleTa: "முதியோர் இல்லத்திற்கு போர்வைகள் & உடைகள்",
      urgency: "Normal",
      urgencyTa: "சாதாரணமானது",
      organizer: "Anbu Illam Seniors Foundation",
      itemsNeeded: "Woolen blankets, Cotton bedsheets, Male & Female garments",
      itemsNeededTa: "கம்பளி போர்வைகள், பருத்தி படுக்கை விரிப்புகள், உடைகள்",
      description: "With monsoon season approaching, our old age home residents require blankets and clean garments. Used but good condition clothes are also accepted.",
      descriptionTa: "மழைக்காலம் தொடங்குவதால் முதியோர் இல்லத்திற்கு போர்வைகள் மற்றும் ஆடைகள் தேவைப்படுகின்றன. நல்ல நிலையில் உள்ள பழைய ஆடைகளும் ஏற்கப்படும்.",
      location: "Kamaráj Nagar, Avadi",
      phone: "+91 98765 00332",
      whatsapp: "+91 98765 00332",
      timeAgo: "1 day ago"
    }
  ]);

  const addDonationRequest = (newReq: Omit<DonationRequest, 'id' | 'timeAgo'>) => {
    const request: DonationRequest = {
      id: "don_" + Math.random().toString(),
      timeAgo: "Just Now",
      ...newReq
    };
    setDonations(prev => [request, ...prev]);
  };

  // 9. Pre-seeded Volunteers
  const [volunteers, setVolunteers] = useState<Volunteer[]>([
    { id: "vol1", name: "Jessica Jasmine", domain: "Health", domainTa: "சுகாதாரம்", activities: 25, rating: 4.8, phone: "+91 98765 00441", status: "Available", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" },
    { id: "vol2", name: "Vignesh Kumar", domain: "Environment", domainTa: "சுற்றுச்சூழல்", activities: 18, rating: 4.7, phone: "+91 98765 00442", status: "Available", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" },
    { id: "vol3", name: "Ramesh Sharma", domain: "Safety", domainTa: "பாதுகாப்பு", activities: 40, rating: 4.9, phone: "+91 98765 00443", status: "Busy", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" }
  ]);

  const registerAsVolunteer = (newVol: Omit<Volunteer, 'id' | 'activities' | 'rating' | 'status' | 'avatar' | 'domainTa'>) => {
    const domainTaMap = {
      Environment: 'சுற்றுச்சூழல்',
      Safety: 'பாதுகாப்பு',
      Education: 'கல்வி',
      Health: 'சுகாதாரம்'
    };
    const vol: Volunteer = {
      id: "vol_" + Math.random().toString(),
      activities: 0,
      rating: 5.0,
      status: "Available",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150",
      ...newVol,
      domainTa: domainTaMap[newVol.domain] || 'சேவை'
    };
    setVolunteers(prev => [vol, ...prev]);
  };

  // 10. Pre-seeded Jobs
  const [jobs, setJobs] = useState<JobListing[]>([
    {
      id: "job1",
      title: "Frontend React Developer",
      company: "Tech Solutions Pvt Ltd",
      salary: "₹25,000 - ₹40,000 / month",
      location: "Avadi, Chennai",
      type: "Full Time",
      experience: "1-3 Years Experience",
      description: "We are looking for a skilled Frontend Developer to build clean web applications in React, JavaScript, HTML, CSS, and Tailwind UI frameworks.",
      requirements: ["Strong experience in ReactJS, TypeScript", "Experience with styling using Tailwind CSS", "Good understanding of API integration principles", "Collaborate with design and backend teams"],
      postedAgo: "2 days ago"
    },
    {
      id: "job2",
      title: "Accounts Assistant",
      company: "Sri Balaji Traders",
      salary: "₹15,000 - ₹18,000 / month",
      location: "Avadi Market Area",
      type: "Full Time",
      experience: "Freshers Welcome",
      description: "Looking for an accountant to handle billing, day-to-day accounts, inventory files, and GST bookkeeping entry logs.",
      requirements: ["Knowledge of Tally ERP / Prime", "Basic Microsoft Excel knowledge", "Good communication skills"],
      postedAgo: "3 days ago"
    }
  ]);

  const addJobListing = (newJob: Omit<JobListing, 'id' | 'postedAgo'>) => {
    const job: JobListing = {
      id: "job_" + Math.random().toString(),
      postedAgo: "Just Now",
      ...newJob
    };
    setJobs(prev => [job, ...prev]);
  };

  // 11. Pre-seeded Rentals
  const [rentals, setRentals] = useState<RentalListing[]>([
    {
      id: "rent1",
      title: "Spacious 2 BHK Apartment for Rent",
      rent: "₹15,000 / month",
      type: "2 BHK Apartment",
      location: "Thirumullaivoyal, Avadi",
      owner: "Ramesh Kannan",
      phone: "+91 98765 00551",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400"
      ],
      description: "Semi-furnished 2 BHK apartment available for rent in a prime location close to the bus terminus and railway station. 24/7 water supply, power backup, and dedicated car parking available.",
      amenities: ["Modular Kitchen", "Lift Service", "Car Parking", "24/7 Water Supply", "Security Guard"]
    },
    {
      id: "rent2",
      title: "1 BHK House for Small Family",
      rent: "₹8,500 / month",
      type: "1 BHK House",
      location: "P&T Colony, Avadi North",
      owner: "Mani Pillai",
      phone: "+91 98765 00552",
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400"
      ],
      description: "Compact independent 1 BHK house, perfect for bachelors or small families. Quiet neighborhood with walkable access to department stores and clinics.",
      amenities: ["Ground Floor", "Separate EB Meter", "2 Wheeler Parking"]
    }
  ]);

  const addRentalListing = (newRental: Omit<RentalListing, 'id'>) => {
    const rental: RentalListing = {
      id: "rent_" + Math.random().toString(),
      ...newRental
    };
    setRentals(prev => [rental, ...prev]);
  };

  // 12. Blood Requests & Broadcasts
  const [bloodRequests, setBloodRequests] = useState<BloodRequest[]>([
    {
      id: "blood1",
      bloodGroup: "O+ Positive",
      units: 3,
      hospital: "Avadi Government Hospital",
      patientName: "Ramesh Sharma",
      urgency: "Critical",
      phone: "+91 98765 00661",
      date: "May 15, 2025",
      location: "Avadi, Chennai"
    },
    {
      id: "blood2",
      bloodGroup: "AB- Negative",
      units: 1,
      hospital: "KC Multi-Speciality Hospital",
      patientName: "Amala Paul",
      urgency: "High",
      phone: "+91 98765 00662",
      date: "May 14, 2025",
      location: "Thirumullaivoyal"
    }
  ]);

  const addBloodRequest = (newReq: Omit<BloodRequest, 'id'>) => {
    const randomId = "BRQ" + Math.floor(100000 + Math.random() * 900000);
    const req: BloodRequest = {
      id: randomId,
      ...newReq
    };
    setBloodRequests(prev => [req, ...prev]);
    
    // Add warning notification to everyone
    setNotifications(prev => [
      {
        id: Math.random().toString(),
        title: `URGENT: ${newReq.bloodGroup} Blood Required`,
        titleTa: `அவசரம்: ${newReq.bloodGroup} இரத்தம் தேவை`,
        body: `${newReq.units} unit(s) required at ${newReq.hospital} for patient ${newReq.patientName}.`,
        bodyTa: `நோயாளி ${newReq.patientName} என்பவருக்கு ${newReq.hospital}-இல் ${newReq.units} அலகு இரத்தம் தேவைப்படுகிறது.`,
        time: "Just Now",
        read: false
      },
      ...prev
    ]);

    return randomId;
  };

  // 13. System Notifications
  const [notifications, setNotifications] = useState([
    {
      id: "n1",
      title: "Heavy Rain Alert",
      titleTa: "கனமழை எச்சரிக்கை",
      body: "Avadi municipal administration issued heavy rain warning. Stay indoors.",
      bodyTa: "ஆவடி நகராட்சி சார்பில் கனமழை எச்சரிக்கை விடுக்கப்பட்டுள்ளது. வீட்டிலேயே இருக்கவும்.",
      time: "10 mins ago",
      read: false
    },
    {
      id: "n2",
      title: "Complaint Status Update",
      titleTa: "புகார் நிலை புதுப்பிப்பு",
      body: "Your complaint for Pothole near 5th Avenue is now In Progress.",
      bodyTa: "5வது அவென்யூ அருகில் உள்ள பள்ளம் பற்றிய உங்களது புகார் இப்போது செயல்பாட்டில் உள்ளது.",
      time: "2 hours ago",
      read: false
    },
    {
      id: "n3",
      title: "Community Post Reply",
      titleTa: "சமூகப் பதிவில் பதில்",
      body: "Suresh Pillai commented on your community post.",
      bodyTa: "சுரேஷ் பிள்ளை உங்கள் சமூகப் பதிவிற்குப் பதிலளித்துள்ளார்.",
      time: "1 day ago",
      read: true
    }
  ]);

  const markNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  // 14. SOS actions
  const triggerSOS = () => {
    setSosActive(true);
    setNotifications(prev => [
      {
        id: "sos_notif_" + Math.random(),
        title: "SOS Alert Dispatched",
        titleTa: "SOS அவசர எச்சரிக்கை அனுப்பப்பட்டது",
        body: "Emergency services and ward representatives have been notified.",
        bodyTa: "அவசரக்கால உதவிக் குழுவினருக்கும் வார்டு பிரதிநிதிகளுக்கும் தகவல் தெரிவிக்கப்பட்டுள்ளது.",
        time: "Just Now",
        read: false
      },
      ...prev
    ]);
  };

  const cancelSOS = () => {
    setSosActive(false);
  };

  // 15. Translation helper
  const t = (key: keyof typeof TRANSLATIONS['en']): string => {
    return TRANSLATIONS[language][key] || TRANSLATIONS['en'][key] || String(key);
  };

  return (
    <AppContext.Provider value={{
      theme, setTheme,
      language, setLanguage,
      selectedWard, setSelectedWard,
      profile, updateProfile,
      complaints, addComplaint,
      communityPosts, addCommunityPost, addCommentToPost,
      alerts,
      donations, addDonationRequest,
      volunteers, registerAsVolunteer,
      bloodRequests, addBloodRequest,
      jobs, addJobListing,
      rentals, addRentalListing,
      services,
      foodVendors,
      notifications, markNotificationsAsRead,
      sosActive, triggerSOS, cancelSOS,
      t,
      reviewerMode, setReviewerMode
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
