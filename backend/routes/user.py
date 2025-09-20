from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class User(BaseModel):
    name: str
    email: str

users = []

@router.post("/register")
def register_user(user: User):
    users.append(user.dict())
    return {"message": "User registered successfully!", "user": user}

@router.get("/all")
def get_users():
    return {"users": users}
