<div align="center">
  
  # 🍲 Foodinary - Discover Indonesian Culinary Heritage
  
  [![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/foodinary-project)
  [![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/foodinary-project)
  [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
  [![Webpack](https://img.shields.io/badge/webpack-5.98.0-blue.svg)](https://webpack.js.org/)
  [![ES6+](https://img.shields.io/badge/ES6+-supported-yellow.svg)](https://www.ecma-international.org/ecma-262/6.0/)
  
  **A comprehensive web platform showcasing traditional Indonesian cuisine with AI-powered recipe recognition**
  
  [🚀 Live Demo](https://foodinary-project.github.io) • [📖 Documentation](#-table-of-contents) • [🐛 Report Bug](https://github.com/foodinary-project/issues) • [💡 Request Feature](https://github.com/foodinary-project/issues)
</div>

---

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [✨ Key Features](#-key-features)
- [🛠 Technology Stack](#-technology-stack)
- [📁 Project Structure](#-project-structure)
- [🖼 Screenshots](#-screenshots)
- [📄 Pages Documentation](#-pages-documentation)
- [🎨 Styling Documentation](#-styling-documentation)
- [🔌 API Integration](#-api-integration)
- [⚡ Installation & Setup](#-installation--setup)
- [🔄 Development Workflow](#-development-workflow)
- [🧪 Testing](#-testing)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [👥 Team](#-team)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

## 🎯 Project Overview

**Foodinary** is a cutting-edge web platform designed to preserve and celebrate Indonesia's rich culinary heritage. Our platform combines traditional recipe knowledge with modern AI technology to create an immersive culinary experience for food enthusiasts worldwide.

### 🌟 Mission Statement

- **Preserve** Indonesian culinary traditions through digital documentation
- **Educate** users about the cultural significance of traditional dishes
- **Innovate** with AI-powered food recognition technology
- **Connect** food lovers through a comprehensive recipe database

### 🎯 Core Objectives

- 📚 **Cultural Preservation**: Maintain authentic Indonesian recipes and their historical context
- 🤖 **AI Integration**: Leverage machine learning for intelligent food recognition
- 👥 **Community Building**: Create a platform for culinary enthusiasts to explore and share
- 📱 **User Experience**: Provide intuitive, responsive design across all devices
- 🔍 **Discovery**: Enable easy exploration of Indonesian cuisine diversity

---

## ✨ Key Features

### 🏠 **Landing Experience**

- **Hero Section** with compelling call-to-action
- **Popular Cuisine Showcase** featuring Indonesian favorites
- **Feature Highlights** with interactive previews
- **Responsive Design** optimized for all devices

### 🔍 **Recipe Discovery Engine**

- **Comprehensive Database** with 30+ authentic Indonesian recipes
- **Smart Filtering** by taste profiles (Asin, Gurih, Manis, Pedas, dll.)
- **Advanced Search** with real-time results
- **Detailed Recipe Pages** with step-by-step instructions
- **Regional Information** highlighting dish origins

### 📸 **AI-Powered Recipe Recognition**

- **Photo Upload** with drag-and-drop functionality
- **Real-time Camera** capture for instant analysis
- **Machine Learning Integration** for accurate food identification
- **Recipe Suggestions** based on detected dishes
- **Multi-format Support** (JPEG, PNG, WebP)

### 👤 **User Dashboard**

- **Personal Statistics** tracking cooking journey
- **Recipe History** with detailed timestamps
- **Favorites Management** for quick access
- **Account Customization** with profile settings
- **Progress Tracking** for culinary goals

### 🔐 **Authentication System**

- **Secure Registration** with email verification
- **JWT Token Authentication** for session management
- **Password Recovery** with reset functionality
- **Protected Routes** ensuring secure access
- **Remember Me** functionality for convenience

### 📊 **Advanced Features**

- **Offline Support** for core functionality
- **Social Sharing** capabilities
- **Print-friendly** recipe formats
- **Nutritional Information** (Coming Soon)
- **Video Tutorials** (Coming Soon)

---

## 🛠 Technology Stack

### 🎨 **Frontend Technologies**

| Technology     | Version | Purpose                                      |
| -------------- | ------- | -------------------------------------------- |
| **JavaScript** | ES6+    | Core programming language with modern syntax |
| **Webpack**    | 5.98.0  | Module bundling and build optimization       |
| **CSS3**       | Latest  | Advanced styling with Flexbox & Grid         |
| **HTML5**      | Latest  | Semantic markup structure                    |

### ⚙️ **Build Tools & Configuration**

| Tool                        | Version | Purpose                                            |
| --------------------------- | ------- | -------------------------------------------------- |
| **Webpack**                 | 5.98.0  | Module bundler and asset optimization              |
| **Babel**                   | 7.26.9  | JavaScript transpilation for browser compatibility |
| **CSS Loader**              | 7.1.2   | CSS processing and optimization                    |
| **Mini CSS Extract Plugin** | 2.9.2   | CSS extraction for production builds               |
| **Clean Webpack Plugin**    | 4.0.0   | Build directory cleanup                            |
| **Copy Webpack Plugin**     | 13.0.0  | Static asset copying                               |

### 📦 **Core Dependencies**

| Package         | Version | Purpose                                   |
| --------------- | ------- | ----------------------------------------- |
| **SweetAlert2** | 11.22.0 | Beautiful, responsive popups and modals   |
| **IDB**         | 8.0.3   | IndexedDB wrapper for client-side storage |

### 🔧 **Development Dependencies**

| Package                | Version | Purpose                               |
| ---------------------- | ------- | ------------------------------------- |
| **Webpack Dev Server** | 5.2.0   | Development server with hot reload    |
| **HTTP Server**        | 14.1.1  | Production build serving              |
| **Prettier**           | 3.5.3   | Code formatting and style consistency |

### 📱 **Browser Support**

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📁 Project Structure

```
frontend-backend/
├── 📁 dist/                           # Production build output
├── 📁 src/                           # Source code directory
│   ├── 📄 index.html                 # Main HTML entry point
│   ├── 📁 public/                    # Static assets & resources
│   │   ├── 📁 data/
│   │   │   └── 📄 recipes.json       # Recipe database (30+ dishes)
│   │   └── 📁 images/                # Image assets
│   │       ├── 📁 landing-page/      # Hero & showcase images
│   │       ├── 📁 meet-our-team/     # Team member photos
│   │       ├── 📁 auth-image.png     # Authentication visuals
│   │       └── 📁 logo.png           # Brand assets
│   ├── 📁 scripts/                   # JavaScript source code
│   │   ├── 📄 index.js              # Application entry point
│   │   ├── 📄 config.js             # Environment configuration
│   │   ├── 📁 data/                 # Data layer
│   │   │   ├── 📄 api.js            # API communication layer
│   │   │   └── 📄 database.js       # Local storage management
│   │   ├── 📁 pages/                # Page components
│   │   │   ├── 📄 app.js            # Main application controller
│   │   │   ├── 📁 landingPage/      # Homepage components
│   │   │   ├── 📁 auth/             # Authentication pages
│   │   │   │   ├── 📁 login/        # Login functionality
│   │   │   │   ├── 📁 register/     # User registration
│   │   │   │   └── 📁 reset-password/ # Password recovery
│   │   │   ├── 📁 dashboard/        # User dashboard
│   │   │   ├── 📁 recipe/           # Recipe browsing & search
│   │   │   ├── 📁 cekResep/         # AI recipe recognition
│   │   │   ├── 📁 detail/           # Recipe detail pages
│   │   │   ├── 📁 favorite/         # User favorites
│   │   │   ├── 📁 history/          # User activity history
│   │   │   ├── 📁 about/            # About page & team info
│   │   │   └── 📁 accountSettings/  # User preferences
│   │   ├── 📁 routes/               # Routing system
│   │   │   ├── 📄 routes.js         # Route definitions & guards
│   │   │   └── 📄 url-parser.js     # URL parsing utilities
│   │   └── 📁 utils/                # Utility functions
│   │       ├── 📄 auth.js           # Authentication helpers
│   │       ├── 📄 camera.js         # Camera API integration
│   │       └── 📄 index.js          # General utilities
│   └── 📁 styles/                   # Stylesheet directory
│       ├── 📄 styles.css            # Main stylesheet (2500+ lines)
│       └── 📄 responsive.css        # Mobile-first responsive design
├── 📄 package.json                  # Project dependencies & scripts
├── 📄 webpack.common.js             # Shared webpack configuration
├── 📄 webpack.dev.js               # Development environment config
├── 📄 webpack.prod.js              # Production build optimization
├── 📄 .gitignore                   # Git ignore rules
└── 📄 README.md                    # Project documentation
```

### 🏗 Architecture Overview

**Frontend Architecture Pattern**: Component-Based SPA (Single Page Application)

- **📁 Pages**: Individual page components with render/afterRender lifecycle
- **📁 Routes**: Hash-based routing with authentication guards
- **📁 Utils**: Reusable utility functions and helpers
- **📁 Data**: API abstraction and local storage management
- **📁 Styles**: Modular CSS with responsive design principles

**🔄 Data Flow**:

```
User Interaction → Page Component → API Layer → Backend → Database
                ↓
            DOM Update ← State Change ← Response Processing
```

---

## 🖼 Screenshots

<div align="center">
  
### 🏠 Landing Page
![Landing Page](docs/screenshots/landing-page.png)
*Beautiful hero section showcasing Indonesian culinary heritage*

### 📸 AI Recipe Recognition

![Recipe Recognition](docs/screenshots/ai-recognition.png)
_Upload or capture photos for instant recipe identification_

### 🍲 Recipe Discovery

![Recipe Discovery](docs/screenshots/recipe-page.png)
_Browse and filter through 30+ authentic Indonesian recipes_

### 👤 User Dashboard

![Dashboard](docs/screenshots/dashboard.png)
_Personal dashboard with statistics and quick navigation_

</div>

---

## 📄 Pages Documentation

### 🏠 **Landing Page** (`landing-page.js`)

**Purpose**: Homepage yang memperkenalkan Foodinary kepada pengunjung

**📋 Sections**:

- **Navigation Bar**: Responsive menu dengan authentication state
- **Hero Section**: Compelling introduction dengan CTA buttons
- **Popular Cuisine**: Showcase makanan Indonesia terpopuler
- **Foodinary Experience**: Feature highlights dengan badges
- **Footer**: Contact info dan quick links

**🔧 Key Implementation**:

```javascript
// Dynamic authentication state
const isLoggedIn = token && token !== 'null' && token !== 'undefined';

// Responsive navigation
${isLoggedIn
  ? `<a href="#/dashboard" class="btn-primary">Dashboard</a>`
  : `<a href="#/login" class="btn-outline">Login</a>
     <a href="#/register" class="btn-primary">Sign Up</a>`
}
```

### 🔍 **Recipe Page** (`recipe-page.js`)

**Purpose**: Halaman eksplorasi dan pencarian resep

**🌟 Features**:

- **Search Bar**: Real-time recipe search
- **Taste Filters**: Filter berdasarkan rasa (Asin, Gurih, Manis, Pedas, dll.)
- **Recipe Grid**: Responsive card layout
- **Quick Actions**: Direct link to recipe details

**📊 Data Flow**:

```javascript
getRecipes() → renderRecipeCards() → Event Handlers → User Interaction
```

### 📸 **Check Recipe Page** (`cek-resep-page.js`)

**Purpose**: AI-powered food recognition system

**🚀 Advanced Features**:

- **Drag & Drop Upload**: Intuitive file handling
- **Camera Integration**: Real-time photo capture
- **Preview System**: Image preview before analysis
- **ML Processing**: Backend integration for food recognition

**📱 Camera Implementation**:

```javascript
// Camera stream handling
navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  videoElement.srcObject = stream;
});
```

### 👤 **Dashboard Suite**

#### **Main Dashboard** (`dashboard-page.js`)

- **User Greeting**: Personalized welcome message
- **Statistics Cards**: Total History, Total Favorites
- **Quick Navigation**: Sidebar dengan active states
- **User Avatar**: Profile management access

#### **History Page** (`history-page.js`)

- **Activity Timeline**: Chronological recipe interactions
- **Delete Functionality**: Remove unwanted history entries
- **Search History**: Find specific past activities

#### **Favorites Page** (`favorite-page.js`)

- **Favorites Grid**: Visual layout for saved recipes
- **Quick Access**: Direct navigation to recipe details
- **Management Tools**: Add/remove favorites

### 🔐 **Authentication Pages**

#### **Login** (`auth/login/login-page.js`)

**Features**:

- **Form Validation**: Real-time input validation
- **Remember Me**: Persistent login sessions
- **Error Handling**: User-friendly error messages
- **Password Toggle**: Show/hide password functionality

#### **Register** (`auth/register/register-page.js`)

**Features**:

- **Complete Registration**: Full user profile setup
- **Password Confirmation**: Double-password verification
- **Terms Agreement**: Terms & conditions acceptance
- **Email Validation**: Format and availability checking

#### **Reset Password** (`auth/reset-password/reset-password-page.js`)

**Features**:

- **Email Recovery**: Password reset via email
- **Security Questions**: Additional verification steps
- **New Password Setup**: Secure password creation

### 📖 **Detail Page** (`detail-page.js`)

**Purpose**: Comprehensive recipe information display

**📑 Sections**:

- **Recipe Header**: Image, name, origin, taste profile
- **Ingredients List**: Detailed ingredients dengan quantities
- **Equipment Needed**: Required cooking tools
- **Step-by-Step Instructions**: Numbered cooking process
- **Source Attribution**: Recipe source references

### ℹ️ **About Page** (`about-page.js`)

**Purpose**: Platform information dan team showcase

**📋 Content Sections**:

- **Mission Statement**: Foodinary's purpose dan vision
- **Team Showcase**: Developer profiles dengan social links
- **Contact Information**: Multiple communication channels
- **Project Background**: Development story dan objectives

**👥 Team Integration**:

```javascript
// Dynamic team member rendering
teamMembers
  .map(
    (member) => `
  <div class="team-card">
    <div class="profile-image" style="background-image: url('${member.image}');">
    </div>
    <h3>${member.name}</h3>
    <div class="role">${member.role}</div>
    <p class="description">${member.description}</p>
    <div class="social-links">
      ${member.socialLinks.map((link) => `<a href="${link.url}">${link.icon}</a>`).join("")}
    </div>
  </div>
`
  )
  .join("");
```

### ⚙️ **Account Settings** (`accountSettings/account-settings-page.js`)

**Purpose**: User preference management

**🔧 Settings Options**:

- **Profile Information**: Update personal details
- **Password Change**: Secure password modification
- **Privacy Preferences**: Data handling preferences
- **Notification Settings**: Communication preferences

---

## 🎨 Styling Documentation

### 🏗 CSS Architecture

Stylesheet architecture menggunakan **BEM methodology** dan **component-based styling**:

```css
/* Block Element Modifier (BEM) Pattern */
.component {
}
.component__element {
}
.component__element--modifier {
}
```

#### 📄 **Main Stylesheet** (`styles.css` - 2500+ lines)

**Organized Sections**:

| Line Range | Section                | Description                         |
| ---------- | ---------------------- | ----------------------------------- |
| 1-200      | **Navigation**         | Header, menu, responsive navigation |
| 200-400    | **Hero Section**       | Landing page hero styling           |
| 400-600    | **Recipe Cards**       | Card components dan grid layouts    |
| 600-800    | **Authentication**     | Login/register form styling         |
| 800-1000   | **Buttons & Controls** | Interactive elements                |
| 1000-1400  | **Dashboard**          | Dashboard layout dan components     |
| 1400-1600  | **Forms**              | Form styling dan validation states  |
| 1600-1800  | **Recipe Finder**      | Search dan filter components        |
| 1800-2000  | **Footer**             | Footer layout dan social links      |
| 2000-2200  | **Utilities**          | Helper classes dan animations       |
| 2200-2500+ | **Responsive**         | Media queries dan breakpoints       |

#### 🔧 **Key CSS Classes**:

```css
/* 🧭 Navigation System */
.navigation {
  /* Main navigation container */
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.nav-container {
  /* Flex container for nav items */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hamburger-menu {
  /* Mobile menu trigger */
  display: none;
  flex-direction: column;
  cursor: pointer;
}

/* 📊 Dashboard Layout */
.db-container {
  /* Dashboard grid container */
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
}

.db-sidebar {
  /* Sidebar navigation */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 1rem;
}

.db-main-content {
  /* Main content area */
  padding: 2rem;
  background-color: #f8f9fa;
}

/* 🍲 Recipe Components */
.recipe-card {
  /* Individual recipe card */
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.recipe-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* 📱 Form Components */
.form-group {
  /* Form input groups */
  margin-bottom: 1.5rem;
  position: relative;
}

.form-group input {
  /* Form inputs styling */
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}
```

#### 📱 **Responsive Design Strategy**

**Mobile-First Approach**:

```css
/* Base styles for mobile */
.container {
  padding: 1rem;
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }

  .db-container {
    grid-template-columns: 200px 1fr;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem;
  }

  .db-container {
    grid-template-columns: 250px 1fr;
  }
}

/* Large desktop */
@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
  }
}
```

**📐 Breakpoint System**:

- **Mobile**: `< 768px` - Single column, hamburger menu
- **Tablet**: `768px - 1024px` - Collapsed sidebar, grid adjustments
- **Desktop**: `1024px - 1440px` - Full sidebar, multi-column layouts
- **Large Desktop**: `> 1440px` - Max-width container, optimized spacing

#### 🎨 **Design System**

**Color Palette**:

```css
:root {
  /* Primary Colors */
  --primary-blue: #007bff;
  --primary-dark: #0056b3;

  /* Secondary Colors */
  --secondary-gray: #6c757d;
  --light-gray: #f8f9fa;

  /* Accent Colors */
  --success-green: #28a745;
  --danger-red: #dc3545;
  --warning-yellow: #ffc107;

  /* Text Colors */
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;
}
```

**Typography Scale**:

```css
/* Heading Hierarchy */
h1 {
  font-size: 2.5rem;
  font-weight: 700;
}
h2 {
  font-size: 2rem;
  font-weight: 600;
}
h3 {
  font-size: 1.75rem;
  font-weight: 600;
}
h4 {
  font-size: 1.5rem;
  font-weight: 500;
}

/* Body Text */
body {
  font-size: 1rem;
  line-height: 1.6;
}
.text-small {
  font-size: 0.875rem;
}
.text-large {
  font-size: 1.125rem;
}
```

**Animation Library**:

```css
/* Smooth Transitions */
.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover Effects */
.hover-lift {
  transition: transform 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
}
```

---

## 🔌 API Integration

### 🏗 API Architecture (`data/api.js`)

**Base Configuration**:

```javascript
// Environment Configuration
const BASE_URL = "https://backend-4lij.onrender.com";
const ACCESS_TOKEN_KEY = "accessToken";

// Request Headers
const getAuthHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getAccessToken()}`
});
```

### 📡 **Core API Functions**

#### **Authentication Endpoints**

```javascript
// User Registration
const registerUser = async ({ name, email, password }) => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });
  return response.json();
};

// User Login
const loginUser = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return response.json();
};

// Password Reset
const resetPassword = async ({ email }) => {
  const response = await fetch(`${BASE_URL}/auth/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });
  return response.json();
};
```

#### **Recipe Management**

```javascript
// Get All Recipes
const getRecipes = async () => {
  const response = await fetch(`${BASE_URL}/recipes`);
  return response.json();
};

// Get Recipe by ID
const getRecipeById = async (id) => {
  const response = await fetch(`${BASE_URL}/recipes/${id}`);
  return response.json();
};

// Search Recipes
const searchRecipes = async (query) => {
  const response = await fetch(`${BASE_URL}/recipes/search?q=${encodeURIComponent(query)}`);
  return response.json();
};

// Filter Recipes by Taste
const filterRecipesByTaste = async (taste) => {
  const response = await fetch(`${BASE_URL}/recipes/filter?taste=${taste}`);
  return response.json();
};
```

#### **User Data Management**

```javascript
// Get User Profile
const getUserProfile = async () => {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    headers: getAuthHeaders()
  });
  return response.json();
};

// Update User Profile
const updateUserProfile = async (userData) => {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(userData)
  });
  return response.json();
};

// Get User History
const getUserHistory = async () => {
  const response = await fetch(`${BASE_URL}/user/history`, {
    headers: getAuthHeaders()
  });
  return response.json();
};

// Get User Favorites
const getUserFavorites = async () => {
  const response = await fetch(`${BASE_URL}/user/favorites`, {
    headers: getAuthHeaders()
  });
  return response.json();
};
```

#### **AI Recognition Service**

```javascript
// Upload Image for Recognition
const uploadImageForRecognition = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await fetch(`${BASE_URL}/ai/recognize`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getAccessToken()}`
    },
    body: formData
  });
  return response.json();
};

// Get Recognition History
const getRecognitionHistory = async () => {
  const response = await fetch(`${BASE_URL}/ai/history`, {
    headers: getAuthHeaders()
  });
  return response.json();
};
```

### 📊 **Data Models**

#### **Recipe Model**

```typescript
interface Recipe {
  id: number;
  name: string;
  asal_daerah: string;
  rasa_dominan: "Asin" | "Gurih" | "Manis" | "Pedas" | "Asam";
  deskripsi: string;
  bahan: string[];
  alat: string[];
  cara_membuat: string[];
  gambar: string;
  sumber: string;
  created_at?: string;
  updated_at?: string;
}
```

#### **User Model**

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  created_at: string;
  preferences?: {
    favorite_tastes: string[];
    dietary_restrictions: string[];
  };
}
```

#### **Recognition Result Model**

```typescript
interface RecognitionResult {
  id: number;
  image_url: string;
  predicted_food: string;
  confidence: number;
  suggested_recipes: Recipe[];
  timestamp: string;
  user_id: number;
}
```

### 🔐 **Authentication Flow**

```javascript
// Authentication State Management
class AuthManager {
  static setToken(token) {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }

  static getToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  static removeToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }

  static isAuthenticated() {
    const token = this.getToken();
    return token && token !== "null" && token !== "undefined";
  }
}

// Route Protection
const checkAuthenticatedRoute = (page) => {
  if (!AuthManager.isAuthenticated()) {
    location.hash = "/login";
    return null;
  }
  return page;
};
```

### 🚦 **Error Handling**

```javascript
// Centralized Error Handler
const handleApiError = (error, context = "") => {
  console.error(`API Error ${context}:`, error);

  if (error.status === 401) {
    // Unauthorized - redirect to login
    AuthManager.removeToken();
    location.hash = "/login";
    return;
  }

  if (error.status === 403) {
    // Forbidden
    showErrorMessage("Access denied. Please check your permissions.");
    return;
  }

  if (error.status >= 500) {
    // Server error
    showErrorMessage("Server error. Please try again later.");
    return;
  }

  // Default error handling
  showErrorMessage(error.message || "An unexpected error occurred.");
};

// API Wrapper with Error Handling
const apiCall = async (apiFunction, ...args) => {
  try {
    const result = await apiFunction(...args);
    return result;
  } catch (error) {
    handleApiError(error, apiFunction.name);
    throw error;
  }
};
```

### 📈 **Performance Optimization**

```javascript
// Request Caching
const cache = new Map();

const cachedFetch = async (url, options = {}) => {
  const cacheKey = `${url}_${JSON.stringify(options)}`;

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const response = await fetch(url, options);
  const data = await response.json();

  // Cache for 5 minutes
  cache.set(cacheKey, data);
  setTimeout(() => cache.delete(cacheKey), 300000);

  return data;
};

// Request Debouncing for Search
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const debouncedSearch = debounce(searchRecipes, 300);
```

---

## ⚡ Installation & Setup

### 🔧 Prerequisites

Before getting started, ensure you have the following installed:

| Requirement | Version | Download Link                       |
| ----------- | ------- | ----------------------------------- |
| **Node.js** | 16.0+   | [nodejs.org](https://nodejs.org/)   |
| **npm**     | 8.0+    | Included with Node.js               |
| **Git**     | Latest  | [git-scm.com](https://git-scm.com/) |

### 🚀 Quick Start

```bash
# 1️⃣ Clone the repository
git clone https://github.com/foodinary-project/frontend-backend.git
cd frontend-backend

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start development server
npm run start-dev

# 4️⃣ Open your browser
# Navigate to http://localhost:3000
```

### 📋 Detailed Installation Steps

#### **1. Repository Setup**

```bash
# Clone the repository
git clone https://github.com/foodinary-project/frontend-backend.git

# Navigate to project directory
cd frontend-backend

# Verify project structure
ls -la
```

#### **2. Environment Configuration**

```bash
# Create environment configuration (if needed)
cp src/scripts/config.example.js src/scripts/config.js

# Edit configuration file
# Update BASE_URL and other environment variables
```

#### **3. Dependency Installation**

```bash
# Install all dependencies
npm install

# Verify installation
npm list --depth=0
```

#### **4. Development Server**

```bash
# Start development server with hot reload
npm run start-dev

# Server will start on http://localhost:3000
# Hot reload enabled - changes will reflect automatically
```

### 🏗 Build Commands

```bash
# 🔧 Development
npm run start-dev          # Start dev server with hot reload
                           # Port: 3000
                           # Source maps: enabled
                           # Minification: disabled

# 🚀 Production Build
npm run build              # Create optimized production build
                           # Output: dist/ directory
                           # Minification: enabled
                           # Source maps: disabled

# 🌐 Serve Production
npm run serve              # Serve production build locally
                           # Port: 8080
                           # Simulates production environment
```

### ⚙️ Configuration Options

#### **Webpack Development** (`webpack.dev.js`)

```javascript
module.exports = {
  mode: "development",
  devServer: {
    static: "./dist",
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  devtool: "eval-source-map"
};
```

#### **Webpack Production** (`webpack.prod.js`)

```javascript
module.exports = {
  mode: "production",
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all"
    }
  },
  devtool: "source-map"
};
```

### 🔍 Troubleshooting

#### **Common Issues & Solutions**

**❌ Port 3000 already in use**

```bash
# Solution: Use different port
npx webpack serve --config webpack.dev.js --port 3001
```

**❌ Module not found errors**

```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**❌ Build fails on Windows**

```bash
# Solution: Use cross-platform commands
npm install --save-dev cross-env
# Update package.json scripts with cross-env
```

**❌ Hot reload not working**

```bash
# Solution: Check firewall/proxy settings
# Ensure no browser extensions blocking websockets
```

### 📱 Platform-Specific Setup

#### **Windows Setup**

```powershell
# Enable script execution
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Install Node.js via chocolatey (optional)
choco install nodejs

# Clone and setup
git clone https://github.com/foodinary-project/frontend-backend.git
cd frontend-backend
npm install
npm run start-dev
```

#### **macOS Setup**

```bash
# Install Node.js via homebrew (optional)
brew install node

# Clone and setup
git clone https://github.com/foodinary-project/frontend-backend.git
cd frontend-backend
npm install
npm run start-dev
```

#### **Linux Setup**

```bash
# Install Node.js (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and setup
git clone https://github.com/foodinary-project/frontend-backend.git
cd frontend-backend
npm install
npm run start-dev
```

### 🐳 Docker Setup (Optional)

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000

CMD ["npm", "run", "start-dev"]
```

```bash
# Build and run with Docker
docker build -t foodinary .
docker run -p 3000:3000 foodinary
```

---

## 🔄 Development Workflow

### 🏗 **Development Environment**

```bash
# Start development server
npm run start-dev

# Features enabled:
# ✅ Hot Module Replacement (HMR)
# ✅ Source Maps for debugging
# ✅ Development optimizations
# ✅ Error overlay in browser
# ✅ Automatic browser refresh
```

**Development Features**:

- **Port**: `3000` (configurable)
- **Hot Reload**: Instant code changes reflection
- **Source Maps**: Enhanced debugging experience
- **Error Overlay**: In-browser error display
- **CSS Hot Reload**: Styles update without page refresh

### 🚀 **Production Build**

```bash
# Create optimized production build
npm run build

# Build optimizations:
# ✅ Code minification & compression
# ✅ Asset optimization
# ✅ Bundle splitting
# ✅ Tree shaking (dead code elimination)
# ✅ CSS extraction & optimization
```

**Production Features**:

- **Output Directory**: `dist/`
- **Minification**: JavaScript & CSS compressed
- **Asset Optimization**: Images & fonts optimized
- **Bundle Analysis**: Generated bundle stats
- **Source Maps**: Production-ready source maps

### 🌐 **Serve Production Locally**

```bash
# Serve production build
npm run serve

# Server configuration:
# 📍 Port: 8080
# 🔧 Static file serving
# 🌍 Production environment simulation
```

### ⚙️ **Webpack Configuration Details**

#### **Common Configuration** (`webpack.common.js`)

```javascript
module.exports = {
  entry: {
    app: "./src/scripts/index.js" // Application entry point
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html" // HTML template
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/public/", // Static assets
          to: "./dist/"
        }
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource" // Asset handling
      }
    ]
  }
};
```

#### **Development Configuration** (`webpack.dev.js`)

```javascript
module.exports = merge(common, {
  mode: "development",

  devServer: {
    static: "./dist",
    port: 3000,
    hot: true, // Hot Module Replacement
    client: {
      overlay: {
        errors: true, // Show errors in browser
        warnings: true
      }
    }
  },

  devtool: "eval-source-map" // Fast source maps
});
```

#### **Production Configuration** (`webpack.prod.js`)

```javascript
module.exports = merge(common, {
  mode: "production",

  plugins: [
    new CleanWebpackPlugin(), // Clean dist folder
    new MiniCssExtractPlugin() // Extract CSS
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"] // ES6+ transpilation
            }
          }
        ]
      }
    ]
  }
});
```

### 🔧 **Development Tools & Scripts**

#### **Available Scripts**

```json
{
  "scripts": {
    "start-dev": "webpack serve --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js",
    "serve": "http-server dist",
    "lint": "prettier --check src/",
    "format": "prettier --write src/"
  }
}
```

#### **Code Quality Tools**

```bash
# Code formatting with Prettier
npm run format                # Format all files
npm run lint                  # Check formatting

# Manual formatting commands
npx prettier --write "src/**/*.{js,css,html}"
npx prettier --check "src/**/*.{js,css,html}"
```

### 📊 **Build Analysis**

```bash
# Analyze bundle size
npm run build -- --analyze

# Bundle composition:
# 📦 Main bundle: Application code
# 📦 Vendor bundle: Third-party libraries
# 📦 CSS bundle: Extracted stylesheets
# 📦 Assets: Images, fonts, static files
```

### 🔍 **Debugging Guide**

#### **Development Debugging**

```javascript
// Source maps enabled - use browser DevTools
console.log("Debug info:", data);

// Breakpoints work in original source files
debugger;

// Hot reload preserves state
if (module.hot) {
  module.hot.accept();
}
```

#### **Production Debugging**

```bash
# Serve production build locally
npm run serve

# Check production issues
# Source maps available for debugging
# Performance profiling available
```

### 🎯 **Performance Optimization**

#### **Development Performance**

- ⚡ **Fast Builds**: Optimized for development speed
- 🔄 **Incremental Compilation**: Only changed files rebuild
- 📦 **Module Caching**: Faster subsequent builds

#### **Production Performance**

- 🗜 **Code Splitting**: Lazy loading for better performance
- 🌳 **Tree Shaking**: Remove unused code
- 📦 **Asset Optimization**: Compressed images & fonts
- 🔧 **Minification**: Reduced bundle sizes

### 🚨 **Common Development Issues**

| Issue                 | Solution                                     |
| --------------------- | -------------------------------------------- |
| **Port in use**       | `npx webpack serve --port 3001`              |
| **Module not found**  | `rm -rf node_modules && npm install`         |
| **Hot reload broken** | Check firewall/proxy settings                |
| **Build failing**     | Clear cache: `rm -rf dist/ && npm run build` |
| **CSS not updating**  | Hard refresh: `Ctrl+Shift+R`                 |

---

## 🧪 Testing

### 🔧 **Testing Setup** (Planned)

```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/dom @testing-library/jest-dom

# Run tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### 📝 **Testing Strategy**

- **Unit Tests**: Component logic testing
- **Integration Tests**: API integration testing
- **E2E Tests**: User workflow testing
- **Visual Tests**: UI component testing

---

## 🚀 Deployment

### 🌐 **GitHub Pages Deployment**

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm install --save-dev gh-pages
npx gh-pages -d dist
```

### ☁️ **Cloud Platform Deployment**

#### **Netlify**

```bash
# Build command: npm run build
# Publish directory: dist
# Environment variables: Set in Netlify dashboard
```

#### **Vercel**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### **AWS S3 + CloudFront**

```bash
# Build and sync to S3
npm run build
aws s3 sync dist/ s3://your-bucket-name
```

---

## 🤝 Contributing

We welcome contributions from the community! Please follow these guidelines to contribute to Foodinary.

### 🌟 **How to Contribute**

1. **🍴 Fork the Repository**

   ```bash
   # Fork the repo on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/frontend-backend.git
   cd frontend-backend
   ```

2. **🌿 Create a Feature Branch**

   ```bash
   # Create and switch to a new branch
   git checkout -b feature/your-feature-name
   # or for bug fixes
   git checkout -b fix/bug-description
   ```

3. **🔧 Make Your Changes**

   - Follow the existing code style
   - Add comments for complex logic
   - Test your changes thoroughly

4. **✅ Test Your Changes**

   ```bash
   # Run the development server
   npm run start-dev

   # Test your changes manually
   # Ensure no console errors
   ```

5. **📝 Commit Your Changes**

   ```bash
   # Stage your changes
   git add .

   # Commit with descriptive message
   git commit -m "feat: add new recipe filter functionality"
   ```

6. **🚀 Push and Create Pull Request**

   ```bash
   # Push to your fork
   git push origin feature/your-feature-name

   # Create pull request on GitHub
   ```

### 📋 **Contribution Guidelines**

#### **Code Style**

- Use **ES6+** JavaScript features
- Follow **camelCase** naming convention
- Use **meaningful variable names**
- Add **JSDoc comments** for functions
- Maintain **consistent indentation** (2 spaces)

#### **Commit Message Format**

```
type(scope): description

Examples:
feat(auth): add password reset functionality
fix(recipe): resolve search filter bug
docs(readme): update installation guide
style(css): improve responsive design
refactor(api): optimize data fetching
```

#### **Pull Request Guidelines**

- **Title**: Clear, descriptive title
- **Description**: Explain what changes were made and why
- **Screenshots**: Include screenshots for UI changes
- **Testing**: Describe how you tested the changes
- **Breaking Changes**: Highlight any breaking changes

### 🐛 **Bug Reports**

When reporting bugs, please include:

```markdown
**Bug Description**
A clear description of the bug

**Steps to Reproduce**

1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What you expected to happen

**Screenshots**
If applicable, add screenshots

**Environment:**

- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 96]
- Node.js version: [e.g. 16.14.0]
```

### 💡 **Feature Requests**

For new features, please include:

```markdown
**Feature Description**
Clear description of the feature

**Use Case**
Why is this feature needed?

**Proposed Solution**
How should it work?

**Additional Context**
Any other relevant information
```

### 🔍 **Development Setup for Contributors**

```bash
# 1. Clone your fork
git clone https://github.com/YOUR_USERNAME/frontend-backend.git
cd frontend-backend

# 2. Add upstream remote
git remote add upstream https://github.com/foodinary-project/frontend-backend.git

# 3. Install dependencies
npm install

# 4. Start development server
npm run start-dev

# 5. Keep your fork synced
git fetch upstream
git checkout main
git merge upstream/main
```

### 📚 **Areas for Contribution**

#### **🎨 Frontend Improvements**

- UI/UX enhancements
- Responsive design improvements
- New page components
- Animation and interactions

#### **🔧 Feature Development**

- New recipe filters
- User profile enhancements
- Social sharing features
- Offline functionality

#### **📱 Performance Optimization**

- Bundle size optimization
- Loading speed improvements
- Caching strategies
- Progressive Web App features

#### **📖 Documentation**

- API documentation
- Code comments
- Tutorial creation
- Translation

#### **🧪 Testing**

- Unit test creation
- Integration testing
- E2E test scenarios
- Performance testing

### 🏆 **Recognition**

Contributors will be:

- **Credited** in the project contributors list
- **Mentioned** in release notes for significant contributions
- **Featured** on our team page for ongoing contributors

---

## 👥 Team

### 🚀 **Core Development Team**

<div align="center">

| 👨‍💻 **Developer**        | 🎯 **Role**        | 📧 **Contact**                                              | 🌐 **GitHub**                                        |
| ----------------------- | ------------------ | ----------------------------------------------------------- | ---------------------------------------------------- |
| **Dani Harmade**        | Frontend Developer | [daniharmade@gmail.com](mailto:daniharmade@gmail.com)       | [@daniharmade](https://github.com/daniharmade)       |
| **Hapid Ramdani**       | Backend Developer  | [hapidr24@gmail.com](mailto:hapidr24@gmail.com)             | [@hpdrr](https://github.com/hpdrr)                   |
| **Dwi Laras Setyadita** | Project Manager    | [larassetyadita@gmail.com](mailto:larassetyadita@gmail.com) | [@LarasSetyadita](https://github.com/LarasSetyadita) |
| **Novrian Pratama**     | ML Engineer        | [novrianprtama2@gmail.com](mailto:novrianprtama2@gmail.com) | [@NovrianPratama](https://github.com/NovrianPratama) |
| **Naia Shaffa Camila**  | ML Engineer        | [naiashaffa@gmail.com](mailto:naiashaffa@gmail.com)         | [@ShaffaCamila](https://github.com/ShaffaCamila)     |

</div>

### 🎯 **Team Responsibilities**

#### **🎨 Frontend Development** - _Dani Harmade_

- User interface design and implementation
- Responsive web design
- User experience optimization
- Component architecture

#### **⚙️ Backend Development** - _Hapid Ramdani_

- API development and maintenance
- Database design and optimization
- Server infrastructure management
- Authentication and security

#### **📊 Project Management** - _Dwi Laras Setyadita_

- Project planning and coordination
- Timeline management
- Quality assurance
- Stakeholder communication

#### **🤖 Machine Learning** - _Novrian Pratama & Naia Shaffa Camila_

- AI model development
- Image recognition algorithms
- Model training and optimization
- ML pipeline implementation

### 📞 **Contact Information**

**Project Email**: [foodinary.project@gmail.com](mailto:foodinary.project@gmail.com)  
**GitHub Organization**: [@foodinary-project](https://github.com/foodinary-project)  
**Location**: 🇮🇩 Indonesia

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### 📋 **License Summary**

- ✅ **Commercial use** allowed
- ✅ **Modification** allowed
- ✅ **Distribution** allowed
- ✅ **Private use** allowed
- ❌ **Warranty** not provided
- ❌ **Liability** not accepted

---

## 🙏 Acknowledgments

### 🌟 **Special Thanks**

- **Indonesian Culinary Heritage** - For the rich cultural inspiration
- **Open Source Community** - For the amazing tools and libraries
- **Webpack Team** - For the powerful build system
- **SweetAlert2** - For beautiful user interactions
- **Font Awesome** - For comprehensive icon library

### 📚 **Resources & Inspiration**

- **Indonesian Recipe Database** - Traditional recipe sources
- **Cultural Research** - Indonesian culinary history
- **Design Inspiration** - Modern web design trends
- **Technical Documentation** - MDN Web Docs, Webpack Documentation

### 🛠 **Technologies We Love**

- **JavaScript ES6+** - Modern web development
- **CSS3** - Beautiful styling capabilities
- **HTML5** - Semantic web structure
- **Webpack** - Powerful module bundling
- **Node.js** - JavaScript runtime excellence

---

<div align="center">

### 🍲 Made with ❤️ for Indonesian Culinary Heritage

**[⬆ Back to Top](#-foodinary---discover-indonesian-culinary-heritage)**

---

_© 2025 Foodinary Team. All rights reserved._

</div>
