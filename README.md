# 🎓 Study Abroad Assistant - Frontend

> AI-powered chatbot providing personalized study abroad guidance for USA, UK, Canada, and Australia using RAG (Retrieval-Augmented Generation) technology.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)
[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://study-abroad-assistant-chatbot.vercel.app/)


## 📋 Overview

Study Abroad Assistant is a full-stack intelligent chatbot application that helps students access curated information about studying abroad. Users can interact with official study guides or upload their own documents to get AI-powered, context-aware answers about visa requirements, living costs, universities, scholarships, and more.

### ✨ Key Features

- 🤖 **AI-Powered Chat**: Get instant answers from uploaded PDF documents using advanced RAG technology
- 📚 **Dual Document System**: Access official admin guides or upload personal documents
- 🔐 **Secure Authentication**: JWT-based auth with automatic token refresh
- 💬 **Chat History**: Save and revisit previous conversations
- 📱 **Responsive Design**: Seamless experience across desktop, tablet, and mobile
- 🎨 **Modern UI**: Clean, professional interface built with Tailwind CSS
- 🔄 **Real-time Updates**: Live chat interface with typing indicators

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Backend API running (see [Backend Repository](https://github.com/shubhamthakur-2504/study-abroad-assistant-chatbot-backend))

### Installation

```bash
# Clone the repository
git clone https://github.com/shubhamthakur-2504/study-abroad-assistant-chatbot-frontend.git
cd study-abroad-assistant-frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Update .env.local with your backend URL
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **State Management**: React Context API

### Backend
- **API**: FastAPI (Python)
- **Database**: PostgreSQL/SQLite
- **AI/ML**: LangChain, Gemini
- **Vector Store**: Qdrant
- **Deployment**: Render

[Backend Repository →](https://github.com/shubhamthakur-2504/study-abroad-assistant-chatbot-backend)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── layout.js          # Root layout with providers
│   ├── page.js            # Home page (redirects)
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   └── dashboard/         # Main dashboard
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Card.jsx
│   │   └── Modal.jsx
│   ├── auth/              # Authentication components
│   │   ├── LoginForm.jsx
│   │   └── SignupForm.jsx
│   ├── chat/              # Chat interface components
│   │   ├── ChatInterface.jsx
│   │   ├── MessageList.jsx
│   │   ├── MessageBubble.jsx
│   │   ├── ChatInput.jsx
│   │   ├── WelcomeScreen.jsx
│   │   └── DocumentSelector.jsx
│   ├── sidebar/           # Sidebar components
│   │   ├── Sidebar.jsx
│   │   ├── ChatHistoryList.jsx
│   │   └── UserProfile.jsx
│   ├── documents/         # Document management
│   │   └── UploadModal.jsx
│   └── layout/            # Layout components
│       ├── Header.jsx
│       └── MainLayout.jsx
├── lib/                   # Utility functions
│   ├── axios.js          # Axios instance with interceptors
│   ├── api.js            # API endpoints
│   └── utils.js          # Helper functions
├── context/               # React context providers
│   └── AuthContext.jsx
└── constants/             # App constants
    └── index.js
```

## 🔑 Key Features Explained

### 1. Authentication System
- JWT-based authentication with access and refresh tokens
- Automatic token refresh on expiration
- Secure password hashing
- Protected routes

### 2. Document Management
- **Admin Documents**: Pre-loaded official study guides by country
- **User Documents**: Upload personal PDF documents
- Tab-based interface for easy switching
- Metadata storage (document name, country)

### 3. AI Chat Interface
- Select documents before chatting
- Context-aware responses based on selected document
- Source citations with page numbers
- Chat history persistence
- Real-time message streaming

### 4. Responsive Design
- Mobile-first approach
- Collapsible sidebar on mobile
- Touch-friendly interactions
- Adaptive layouts

## 🔧 Configuration

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

### API Endpoints

The frontend communicates with these backend endpoints:

```
Authentication:
POST   /api/auth/signup          # User registration
POST   /api/auth/token           # Login
POST   /api/auth/refresh         # Refresh access token
GET    /api/auth/me              # Get current user

Documents:
GET    /api/documents/admin      # Get admin documents
GET    /api/documents/           # Get user documents
POST   /api/documents/upload     # Upload document

Chat:
POST   /api/chat/query           # Start new chat
POST   /api/chat/query/{id}      # Continue chat
GET    /api/chat/history         # Get chat history
```

## 🎨 UI Components

### Core Components

- **Button**: Multi-variant button with loading states
- **Input**: Styled input fields with focus states
- **Card**: Container component with shadows
- **Modal**: Overlay modal with customizable sizes

### Feature Components

- **DocumentSelector**: Tabbed interface for document selection
- **ChatInterface**: Main chat area with messages
- **MessageBubble**: Individual message display with sources
- **Sidebar**: Navigation and chat history


### Login Page
Clean authentication interface with gradient background.

### Dashboard
Main chat interface with sidebar, document selector, and message area.

### Document Selection
Modal with tabs for admin and user documents.

### Chat History
Persistent chat history in the sidebar.

## 🔐 Security Features

- ✅ JWT token-based authentication
- ✅ Automatic token refresh
- ✅ HTTP-only cookie support (backend)
- ✅ CORS configuration
- ✅ XSS protection
- ✅ Input validation
- ✅ Secure password handling

## 👥 Authors

- **Shubham Thakur** - *Initial work* - [GitHub](https://github.com/shubhamthakur-2504)

## 🙏 Acknowledgments

- Backend repository: [Study Abroad Assistant Backend](https://github.com/shubhamthakur-2504/study-abroad-assistant-chatbot-backend)
- Next.js team for the amazing framework
- Vercel for hosting platform
- Gemini AI for AI models
- All contributors who helped with this project

## 🗺️ Roadmap

- [ ] Add support for more countries
- [ ] Implement document comparison feature
- [ ] Add voice input/output
- [ ] Multi-language support
- [ ] Export chat history as PDF
- [ ] Real-time collaboration
- [ ] Advanced filtering and search
- [ ] Analytics dashboard

## 📊 Project Status

🟢 Active Development

---