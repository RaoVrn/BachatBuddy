# BachatBuddy

A modern personal finance management application with AI-powered budget planning. Built with React frontend and FastAPI backend.

## Features

- 📊 Expense tracking and categorization
- 🤖 AI-powered budget planning
- 💡 Smart financial insights
- 📱 Responsive web interface
- 🔄 Real-time data updates

## Tech Stack

### Frontend
- React 19 with Vite
- Tailwind CSS for styling
- React Router for navigation
- Axios for API calls

### Backend
- FastAPI (Python)
- SQLite database (planned)
- RESTful API design
- CORS enabled for development

## Project Structure

```
BachatBuddy/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   └── assets/        # Static assets
│   └── public/        # Public assets
└── backend/           # FastAPI backend
    ├── routes/        # API route handlers
    │   ├── user.py    # User management
    │   ├── expenses.py # Expense tracking
    │   └── budget.py  # Budget planning
    ├── database.py    # Database configuration
    └── main.py        # FastAPI application entry
```

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- Python 3.8+
- npm or yarn

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
pip install fastapi uvicorn pydantic
uvicorn main:app --reload
```

## API Endpoints

### User Management
- `POST /user/register` - Register new user
- `GET /user/all` - Get all users

### Expense Tracking
- `POST /expenses/add` - Add new expense
- `GET /expenses/all` - Get all expenses

### Budget Planning
- `POST /budget/generate` - Generate AI budget plan

## Development Status

### Completed ✅
- Basic project structure setup
- React frontend with routing
- FastAPI backend with basic routes
- Tailwind CSS styling
- CORS configuration
- Git configuration

### In Progress 🔄
- Database integration
- Authentication system
- AI budget planning logic

### Planned 📝
- User authentication
- Data persistence
- Advanced expense categorization
- Budget analytics and insights
- Mobile responsiveness
- Testing framework

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details