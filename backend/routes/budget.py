from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class BudgetRequest(BaseModel):
    city: str
    income: int
    lifestyle: str = "balanced"
    goals: list = []

@router.post("/generate")
def generate_budget(data: BudgetRequest):
    # Simple mock planner (later AI can improve this)
    savings = data.income * 0.2
    rent = data.income * 0.3
    food = data.income * 0.2
    misc = data.income - (savings + rent + food)

    return {
        "city": data.city,
        "income": data.income,
        "plan": {
            "Rent & Housing": rent,
            "Food & Groceries": food,
            "Savings & Investments": savings,
            "Miscellaneous": misc
        }
    }
