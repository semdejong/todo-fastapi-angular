from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Todo API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # Angular default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Todo model
class Todo(BaseModel):
    id: Optional[int] = None
    title: str
    completed: bool = False

# In-memory storage
todos: List[Todo] = []
current_id = 1

@app.get("/")
async def root():
    return {"message": "Welcome to the Todo API"}

@app.get("/todos", response_model=List[Todo])
async def get_todos():
    return todos

@app.post("/todos", response_model=Todo)
async def create_todo(todo: Todo):
    global current_id
    todo.id = current_id
    current_id += 1
    todos.append(todo)
    return todo

@app.put("/todos/{todo_id}", response_model=Todo)
async def update_todo(todo_id: int, updated_todo: Todo):
    for i, todo in enumerate(todos):
        if todo.id == todo_id:
            updated_todo.id = todo_id
            todos[i] = updated_todo
            return updated_todo
    raise HTTPException(status_code=404, detail="Todo not found")

@app.delete("/todos/{todo_id}")
async def delete_todo(todo_id: int):
    for i, todo in enumerate(todos):
        if todo.id == todo_id:
            todos.pop(i)
            return {"message": "Todo deleted"}
    raise HTTPException(status_code=404, detail="Todo not found") 