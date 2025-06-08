# Foodinary - Documentation

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Pages Documentation](#pages-documentation)
- [Components Documentation](#components-documentation)
- [Styling Documentation](#styling-documentation)
- [API Integration](#api-integration)
- [Installation & Setup](#installation--setup)
- [Development Workflow](#development-workflow)
- [Team](#team)

## 🚀 Project Overview

**Foodinary** adalah platform web yang dirancang untuk memberikan informasi lengkap tentang kuliner tradisional Indonesia. Platform ini menyediakan resep, sejarah, asal daerah, dan profil rasa dari berbagai makanan tradisional Indonesia.

### 🎯 Tujuan Utama

- Meningkatkan kesadaran masyarakat tentang kekayaan kuliner tradisional Indonesia
- Menyediakan platform digital komprehensif untuk informasi makanan tradisional
- Menggunakan teknologi Machine Learning untuk pengenalan makanan berdasarkan gambar
- Mendukung pelestarian warisan kuliner Indonesia

## 🛠 Technology Stack

### Frontend

- **JavaScript ES6+** - Bahasa pemrograman utama
- **Webpack** - Module bundler dan build tool
- **CSS3** - Styling dengan responsive design
- **HTML5** - Struktur markup

### Build Tools & Configuration

- **Webpack 5** - Module bundler
- **Babel** - JavaScript transpiler
- **CSS Loader** - CSS processing
- **Mini CSS Extract Plugin** - CSS extraction
- **Clean Webpack Plugin** - Build cleanup

### Dependencies

- **SweetAlert2** - Modal alerts dan notifikasi
- **Font Awesome** - Icon library

## 📁 Project Structure

```
frontend-backend/
├── dist/                           # Build output files
├── src/                           # Source files
│   ├── index.html                 # Main HTML template
│   ├── public/                    # Static assets
│   │   ├── data/
│   │   │   └── recipes.json       # Recipe data
│   │   └── images/                # Image assets
│   │       ├── landing-page/      # Landing page images
│   │       ├── meet-our-team/     # Team member photos
│   │       └── ...                # Other image categories
│   ├── scripts/                   # JavaScript source code
│   │   ├── index.js              # Main entry point
│   │   ├── config.js             # Configuration file
│   │   ├── data/
│   │   │   └── api.js            # API integration
│   │   ├── pages/                # Page components
│   │   │   ├── app.js            # Main app controller
│   │   │   ├── landingPage/      # Landing page
│   │   │   ├── auth/             # Authentication pages
│   │   │   ├── dashboard/        # Dashboard pages
│   │   │   ├── recipe/           # Recipe pages
│   │   │   └── ...               # Other page components
│   │   ├── routes/               # Routing system
│   │   │   ├── routes.js         # Route definitions
│   │   │   └── url-parser.js     # URL parsing utilities
│   │   └── utils/                # Utility functions
│   │       ├── auth.js           # Authentication utilities
│   │       ├── camera.js         # Camera handling
│   │       └── index.js          # General utilities
│   └── styles/                   # CSS files
│       ├── styles.css            # Main stylesheet
│       └── responsive.css        # Responsive design
├── package.json                  # Project dependencies
├── webpack.common.js             # Common webpack config
├── webpack.dev.js               # Development webpack config
├── webpack.prod.js              # Production webpack config
└── README.md                    # Project documentation
```

## ✨ Features

### 🏠 Landing Page

- Hero section dengan call-to-action
- Popular Indonesian cuisine showcase
- Features overview
- Responsive design

### 🔍 Recipe Discovery

- Comprehensive recipe database
- Filter by taste profile (Asin, Gurih, Manis, dll.)
- Recipe detail pages dengan bahan dan langkah
- Search functionality

### 📸 Check Recipe (Machine Learning)

- Upload foto makanan
- Camera capture untuk real-time detection
- Machine Learning integration untuk pengenalan makanan
- Drag and drop file upload

### 👤 User Dashboard

- Personal dashboard dengan statistik
- History tracking
- Favorites management
- Account settings

### 🔐 Authentication System

- User registration
- Login/logout functionality
- Password reset
- Protected routes

## 📄 Pages Documentation

### 1. Landing Page (`landing-page.js`)

**Purpose**: Homepage utama aplikasi
**Sections**:

- Navigation bar
- Hero section
- Popular Indonesian cuisine showcase
- Features highlight
- Footer dengan link sosial media

**Key Components**:

```javascript
// Navigation dengan responsive menu
<nav class="navigation">
  <div class="nav-container">
    <div class="logo">...</div>
    <div class="nav-menu">...</div>
    <div class="nav-buttons">...</div>
  </div>
</nav>

// Hero section
<section class="hero">
  <div class="hero-content">...</div>
</section>
```

### 2. Recipe Page (`recipe-page.js`)

**Purpose**: Halaman pencarian dan browsing resep
**Features**:

- Search bar untuk mencari resep
- Filter berdasarkan kategori rasa
- Grid layout untuk menampilkan recipe cards
- Pagination/infinite scroll

**Key Methods**:

- `getRecipes()` - Fetch data resep
- `renderRecipeCards()` - Render kartu resep
- `afterRender()` - Event handlers

### 3. Check Recipe Page (`cek-resep-page.js`)

**Purpose**: Upload foto untuk pengenalan makanan
**Features**:

- Drag & drop file upload
- Camera integration
- Real-time preview
- ML model integration

**Camera Integration**:

```javascript
// Camera stream handling
navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  videoElement.srcObject = stream;
});
```

### 4. Dashboard Pages

#### Dashboard (`dashboard-page.js`)

**Purpose**: User dashboard utama
**Features**:

- Statistics overview (Total History, Total Favorites)
- Quick navigation sidebar
- User greeting dan avatar

#### History Page (`history-page.js`)

**Purpose**: Riwayat aktivitas pengguna
**Features**:

- Menampilkan riwayat prediksi makanan
- Delete functionality
- Responsive sidebar

#### Favorites Page (`favorite-page.js`)

**Purpose**: Resep favorit pengguna
**Features**:

- Grid layout favorites
- Quick access ke detail resep
- Management favorites

### 5. Authentication Pages

#### Login (`auth/login/login-page.js`)

**Features**:

- Form validasi
- Remember me functionality
- Error handling

#### Register (`auth/register/register-page.js`)

**Features**:

- Form registrasi lengkap
- Password confirmation
- Terms & conditions

### 6. Detail Page (`detail-page.js`)

**Purpose**: Halaman detail resep
**Sections**:

- Header dengan gambar dan informasi dasar
- Bahan-bahan (ingredients)
- Alat yang dibutuhkan
- Langkah-langkah pembuatan
- Sumber referensi

### 7. About Page (`about-page.js`)

**Purpose**: Informasi tentang Foodinary dan tim
**Sections**:

- Tentang Foodinary
- Mission & Vision
- Team showcase dengan profile cards
- Contact information

## 🎨 Styling Documentation

### CSS Architecture

File styling diorganisir dalam struktur modular:

#### Main Stylesheet (`styles.css`)

**Sections berdasarkan line numbers**:

- **Navigation (lines 1-200)**: Styling untuk navigation bar
- **Hero Section (lines 200-400)**: Landing page hero
- **Recipe Cards (lines 400-600)**: Card components
- **Dashboard (lines 1000-1400)**: Dashboard specific styles
- **Forms (lines 1400-1600)**: Authentication forms
- **Recipe Finder (lines 1600-1800)**: Recipe search page
- **Responsive (lines 2500+)**: Media queries

#### Key CSS Classes:

```css
/* Navigation */
.navigation {
  /* Main navigation bar */
}
.nav-container {
  /* Container wrapper */
}
.nav-menu {
  /* Menu items */
}

/* Dashboard */
.db-container {
  /* Dashboard layout container */
}
.db-sidebar {
  /* Sidebar navigation */
}
.db-main-content {
  /* Main content area */
}

/* Recipe Components */
.recipe-card {
  /* Individual recipe card */
}
.recipe-detail-container {
  /* Recipe detail layout */
}
.recipe-finder-container {
  /* Recipe search container */
}
```

### Responsive Design

- **Desktop**: Full sidebar navigation
- **Tablet**: Collapsible sidebar
- **Mobile**: Hamburger menu, full-width layout

## 🔌 API Integration

### API Structure (`data/api.js`)

**Base Configuration**:

```javascript
const API_ENDPOINT = "your-api-endpoint";
```

**Main Functions**:

- `getRecipes()` - Fetch all recipes
- `getRecipeById(id)` - Get specific recipe
- `uploadImage()` - Upload image for ML processing
- `getUserInfo()` - Get user profile
- `authenticate()` - User authentication

### Data Models

#### Recipe Model:

```javascript
{
  id: number,
  name: string,
  asal_daerah: string,
  rasa_dominan: string,
  deskripsi: string,
  bahan: string[],
  alat: string[],
  cara_membuat: string[],
  gambar: string,
  sumber: string
}
```

## 📱 Installation & Setup

### Prerequisites

- Node.js (v12 atau lebih tinggi)
- npm (Node Package Manager)

### Installation Steps

1. Clone repository:

   ```bash
   git clone <repository-url>
   cd frontend-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Development server:

   ```bash
   npm run start-dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

5. Serve production build:
   ```bash
   npm run serve
   ```

## 🔄 Development Workflow

### Available Scripts

#### Development

```bash
npm run start-dev
```

- Menjalankan webpack dev server
- Hot module replacement enabled
- Source maps untuk debugging

#### Production Build

```bash
npm run build
```

- Optimized bundle
- Minified CSS/JS
- Asset optimization

#### Serve Production

```bash
npm run serve
```

- Serves dari folder `dist`
- Production environment simulation

### Webpack Configuration

#### Development (`webpack.dev.js`)

- Source maps
- Hot reload
- Development mode optimizations

#### Production (`webpack.prod.js`)

- Minification
- Asset optimization
- Bundle splitting

#### Common (`webpack.common.js`)

- Shared configuration
- Entry points
- Loaders dan plugins

## 👥 Team

### Development Team

1. **Dani Harmade** - Front End Developer

   - Email: daniharmade@gmail.com
   - GitHub: [@daniharmade](https://github.com/daniharmade)

2. **Hapid Ramdani** - Back End Developer

   - Email: hapidr24@gmail.com
   - GitHub: [@hpdrr](https://github.com/hpdrr)

3. **Dwi Laras Setyadita** - Project Manager

   - Email: larassetyadita@gmail.com
   - GitHub: [@LarasSetyadita](https://github.com/LarasSetyadita)

4. **Novrian Pratama** - Machine Learning Engineer

   - Email: novrianprtama2@gmail.com
   - GitHub: [@NovrianPratama](https://github.com/NovrianPratama)

5. **Naia Shaffa Camila** - Machine Learning Engineer
   - Email: naiashaffa@gmail.com
   - GitHub: [@ShaffaCamila](https://github.com/ShaffaCamila)

## 📧 Contact

- **Email**: foodinary.project@gmail.com
- **GitHub**: [foodinary-project](https://github.com/foodinary-project)
- **Location**: Indonesia

---

## 🔧 Technical Notes

### Route Configuration

Routes dikonfigurasi dalam `routes/routes.js` dengan struktur:

- Public routes: Landing, Recipe, About, Check Recipe
- Auth routes: Login, Register, Reset Password
- Protected routes: Dashboard, History, Favorites, Settings

### Authentication Flow

1. User login → JWT token stored
2. Protected route check → Redirect if not authenticated
3. API calls → Include auth headers

### File Upload Handling

- Drag & drop implementation
- File type validation
- Preview functionality
- Camera integration untuk mobile

### Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

---

_Dokumentasi ini mencakup struktur lengkap aplikasi Foodinary berdasarkan analisis kode sumber. Untuk informasi lebih detail tentang implementasi spesifik, silakan merujuk ke file kode yang relevan._
