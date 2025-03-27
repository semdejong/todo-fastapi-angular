# Todo App with FastAPI and Angular

This is a full-stack Todo application built with FastAPI (backend) and Angular (frontend).

## Backend Setup

1. Create a virtual environment:

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Run the server:

```bash
uvicorn main:app --reload
```

The API will be available at http://localhost:8000

## Frontend Setup

1. Install Angular CLI globally (if not already installed):

```bash
npm install -g @angular/cli
```

2. Install dependencies:

```bash
cd frontend
npm install
```

3. Run the development server:

```bash
ng serve
```

The application will be available at http://localhost:4200
