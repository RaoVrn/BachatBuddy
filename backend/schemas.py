from pydantic import BaseModel
from typing import List, Optional
from datetime import date

class UserBase(BaseModel):
    name: str
    email: str

class UserCreate(UserBase):
    password: str

class UserRead(UserBase):
    id: int

    class Config:
        orm_mode = True

class ExpenseBase(BaseModel):
    amount: float
    category: str
    description: Optional[str]
    date: date

class ExpenseCreate(ExpenseBase):
    user_id: int

class ExpenseRead(ExpenseBase):
    id: int
    user_id: int

    class Config:
        orm_mode = True