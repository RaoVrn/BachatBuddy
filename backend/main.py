from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import user, expenses, budget
from database import engine
import models

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="BudgetBuddy API")

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(user.router, prefix="/user")
app.include_router(expenses.router, prefix="/expenses")
app.include_router(budget.router, prefix="/budget")

@app.get("/")
def root():
    return {"message": "Welcome to BudgetBuddy API"}
