HealthCare+
HealthCare+ is a modern, responsive web application designed to provide comprehensive healthcare services, including doctor consultations, pharmacy access, health blogs, and patient testimonials. Built with React Express, Node, Mongodb , Tanstackquery and Tailwind CSS, it offers a user-friendly interface with role-based dashboards for patients, doctors, pharmacists, and admins.

Live Links: (https://healthcareproject-f0b30.web.app/)

Features:
User Authentication: Secure registration and login with email and password, supporting role-based access (patient, doctor, pharmacist, admin).
Role-Based Dashboards: Tailored navigation for admins (All Users, Doctors, Pharmacists, Appointments, Orders), doctors (Records, Current Appointment), patients (My Appointments, Orders), and pharmacists (Orders, Add Medicine, All Medicine).
Doctor Profiles: Showcase expert doctors with images, specialties, qualifications, and availability status, linking to appointment booking.
Pharmacy: Access to a medicine store for browsing and ordering medications.
Responsive Design: Mobile-friendly layout with consistent styling across devices.
Dynamic Navigation: Sticky navbar with dynamic links based on user authentication and role.
API Integration: Fetches doctor data and handles user registration via Axios.

Technologies and Tools

Frontend:
React: JavaScript library for building user interfaces.
Tailwind CSS: Utility-first CSS framework for styling.
react-router-dom: Client-side routing for navigation.
lucide-react: Icon library for UI elements (e.g., Heart, Menu, Star, ArrowRight).
react-fast-marquee: Smooth scrolling for blog and testimonial sections.
@tanstack/react-query: Data fetching and state management for doctor profiles.
react-hook-form: Form handling for registration with validation.

HTTP Client:
Axios: For API requests (e.g., fetching doctors, saving users).

Development Tools:
Firebase: Authentication. 
Node.js: Runtime environment.
npm: Package manager for dependencies.
Vite: Build tool for fast development.

Installation

Clone the Repository:
git clone <https://github.com/RokibulAlom-hub/al-shefa-healthcare-client>
cd healthcare


Install Dependencies:
npm install


Install Required Packages:
npm install react react-dom react-router-dom lucide-react react-fast-marquee @tanstack/react-query react-hook-form axios


Set Up Environment:

Create a .env file in the root directory.
Add API base URL (e.g., VITE_API_URL=http://your-api-url.com).
Configure Firebase authentication (if used) with appropriate credentials.


Run the Application:
npm run dev

Open http://localhost:5173 in your browser.


Usage

Home Page: View featured doctors, blog articles, testimonials, and more.
Register/Login: Create an account or log in to access role-based dashboards.
Doctors: Browse doctor profiles and book appointments.
Pharmacy: Explore and order medications.
Dashboard: Access role-specific features (e.g., manage appointments, orders).
Blog/Testimonials: Scroll through health news and patient reviews.

Design
The application uses a consistent color palette for a cohesive look:

Backgrounds: section-bg (#FFF9F5), card-bg (#FFFFFF), navbar-bg (#4A5568).
Text: primary-text (#1A202C), secondary-text (#718096), link (#F56565).
Buttons/Icons: primary-btn (#F56565), secondary-btn (#A78BFA), success (#48BB78), error (#C53030).
Hover Effects: hover (#E53E3E).

Future Improvements

Add toast notifications (e.g., react-toastify) for better user feedback.
Implement internal blog routes for detailed articles.
Enhance accessibility with additional ARIA attributes.
Integrate real-time data fetching for dynamic content updates.
