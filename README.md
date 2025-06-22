# Hotels.tools - AI-Powered Hotel Management Platform

Transform your hotel's digital presence with our comprehensive AI-powered platform designed specifically for independent hotels and boutique properties.

## 🏨 About Hotels.tools

Hotels.tools is an innovative AI platform that helps independent hotels compete with larger chains by automating digital marketing, reputation management, and guest engagement. Our solution empowers hoteliers to boost their online visibility, automate review responses, and increase revenue through intelligent automation.

## ✨ Features

### 🤖 AI Services
- **AI Chatbot Assistant** - Intelligent customer service for your hotel website
- **Content Generator** - Compelling hotel descriptions and marketing content
- **Smart Analytics** - AI-powered insights into hotel performance and guest behavior
- **Guest Insights** - Better understand your guests with AI-driven analysis
- **Review Analyzer** - Analyze and respond to guest reviews with AI assistance
- **AI Concierge** - Virtual concierge service for guest recommendations

### 🔐 Authentication & User Management
- Secure user authentication with Supabase
- Protected dashboard with personalized AI tools
- User profiles with hotel-specific information
- Subscription management (Free, Professional, Enterprise)

### 📧 Contact & Communication
- Integrated contact forms with Formspree
- Free consultation scheduling
- Multi-channel support

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Authentication**: Supabase Auth with Row Level Security
- **Database**: PostgreSQL (Supabase)
- **Form Handling**: Formspree integration
- **Build Tool**: Vite
- **Routing**: React Router with protected routes

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hotelstoolslatest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   The project is configured to use the Supabase project: `avcucsonuulzqybwtnry`
   
   If you need to use a different Supabase project, update the configuration in:
   - `src/lib/supabase.ts`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:8080` (or the port shown in terminal)

## 📱 Usage

### For Hotel Managers
1. **Sign Up**: Create an account using the "Get Started" button
2. **Verify Email**: Check your email for verification
3. **Access Dashboard**: Login to access your AI tools dashboard
4. **Explore AI Services**: Try out various AI tools designed for hotels
5. **Manage Profile**: Update your hotel information and subscription

### For Developers
1. **Authentication**: The app uses Supabase Auth with protected routes
2. **Database**: User profiles are automatically created in the `user_profiles` table
3. **Forms**: Contact forms submit to Formspree endpoint
4. **Styling**: Uses Tailwind CSS with custom hotel-themed components

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Landing page hero
│   └── ...
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication context
├── pages/              # Route components
│   ├── Index.tsx       # Landing page
│   ├── Login.tsx       # Login page
│   ├── Signup.tsx      # Registration page
│   ├── Dashboard.tsx   # User dashboard
│   └── ...
├── lib/                # Utilities and configurations
│   └── supabase.ts     # Supabase client configuration
└── App.tsx             # Main app component with routing
```

## 🗄️ Database Schema

### User Profiles Table
```sql
user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT,
  full_name TEXT,
  company_name TEXT,
  hotel_name TEXT,
  phone TEXT,
  subscription_plan TEXT DEFAULT 'free',
  subscription_status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE
)
```

## 🔒 Security Features

- **Row Level Security (RLS)** on all user data
- **Protected Routes** - Dashboard only accessible to authenticated users
- **User Isolation** - Users can only access their own data
- **Automatic Profile Creation** - Profiles created via database triggers

## 📞 Contact & Support

- **Website**: Hotels.tools
- **Contact Form**: Available on `/contact` page
- **Support**: Integrated Formspree contact system

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Environment Variables
- Supabase configuration is included in the codebase
- For production, ensure proper environment variable setup

## 🤝 Contributing

This is a commercial project for Hotels.tools. For feature requests or bug reports, please contact the development team.

## 📄 License

© 2024 Hotels.tools. All rights reserved.

---

**Hotels.tools** - Empowering independent hotels with AI-driven solutions for the digital age.
