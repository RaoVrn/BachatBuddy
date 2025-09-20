from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class Expense(BaseModel):
    category: str
    amount: float

expenses = []

@router.post("/add")
def add_expense(expense: Expense):
    expenses.append(expense.dict())
    return {"message": "Expense added!", "expense": expense}

@router.get("/all")
def get_expenses():
    return {"expenses": expenses}
