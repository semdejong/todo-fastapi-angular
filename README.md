# Cursor IDE Learning Assignment: Todo Application

Welcome to the Cursor IDE learning assignment! This project is a full-stack Todo application built with FastAPI (backend) and Angular (frontend). Through a series of tasks, you'll become proficient with Cursor's powerful features including AI code assistance, navigation, testing, and documentation.

## Application Overview

This application consists of:

- **Backend**: A FastAPI API with CRUD operations for managing todos
- **Frontend**: An Angular application that allows users to create, read, update, and delete todos

## Prerequisites

- [Node.js](https://nodejs.org/) (16+)
- [Python](https://www.python.org/) (3.8+)
- [Cursor](https://cursor.sh/) installed on your machine

## Setup Instructions

### Backend Setup

1. Open a terminal in Cursor and navigate to the backend directory:

```bash
cd backend
```

2. Create a virtual environment and activate it:

```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Run the server:

```bash
uvicorn main:app --reload
```

The API will be available at http://localhost:8000

### Frontend Setup

1. In a new terminal, navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
ng serve
```

The application will be available at http://localhost:4200

## Assignment Tasks

### Part 1: Navigating and Understanding the Codebase

1. **Cursor Navigation Features**

   - Open the project in Cursor
   - Use Cmd+P (Ctrl+P on Windows) to quickly switch between files
   - Try Cmd+Shift+F (Ctrl+Shift+F) to search across the codebase
   - Navigate to symbol definitions using Cmd+Click (Ctrl+Click)
   - Practice using Cursor's sidebar file explorer

2. **Code Understanding with AI**

   - Select the entire `main.py` file and ask Cursor's AI to explain what it does
   - Use the AI to explain the Angular component lifecycle in `todo.component.ts`
   - Ask questions about how the frontend communicates with the backend
   - Use Cursor to identify potential improvements in the code

### Part 2: Adding Features and Fixing Bugs

3. **Add Todo Priority Feature**

   - Use Cursor's AI to help you add a "priority" field (High, Medium, Low) to the Todo model
   - Update both frontend and backend to support this new field
   - Implement filtering todos by priority
   - Add visual indicators for different priority levels

4. **Fix a Bug**

   - Create a bug in the application by purposely breaking the delete functionality
   - Use Cursor's debugging suggestions to identify and fix the problem
   - Document the debugging process and how Cursor helped

5. **Implement Authentication**
   - Use Cursor to guide you in implementing a simple JWT authentication system
   - Allow only authenticated users to modify todos
   - Update the UI to include login/logout functionality

### Part 3: Testing and Documentation

6. **Write Automated Tests**

   - Create backend API tests using pytest with Cursor's assistance

     - Install pytest: `pip install pytest pytest-asyncio httpx`
     - Create a `tests` directory in the backend folder
     - Use Cursor's AI to generate test cases for your API endpoints
     - Run tests with Cursor's integrated terminal: `pytest -v`

   - Implement frontend tests for the Todo component using Jasmine/Karma

     - Angular's testing framework is already set up in the project
     - Create a new file `todo.component.spec.ts` in the same directory as the component
     - Use Cursor's split view feature to see component and test side by side
     - Use Cursor's AI to help write test cases for component methods
     - Run tests with `ng test` in Cursor's integrated terminal

   - Practice test-driven development (TDD) with Cursor

     - Use Cursor to generate test cases before implementing new features
     - Use AI to help debug failing tests
     - Use Cursor's terminal to run tests continuously while developing

   - Advanced: Setup E2E testing with Cypress
     - Use Cursor to help install and configure Cypress: `npm install cypress --save-dev`
     - Create simple E2E tests for the todo application flow
     - Use Cursor's AI to generate helpful testing utilities

7. **Documentation Enhancement**

   - Use Cursor to generate comprehensive API documentation
   - Create user documentation explaining how to use the application
   - Document your code following best practices with AI assistance

8. **Performance Optimization**
   - Use Cursor to identify performance bottlenecks
   - Implement suggested optimizations
   - Measure and document the performance improvements

### Part 4: Advanced Cursor Features

9. **Refactoring with AI (optional)**

   - Use Cursor to refactor the codebase for better organization
   - Extract reusable components or functions
   - Improve error handling with AI suggestions

10. **Version Control Integration**
    - Use Cursor's Git integration features
    - Create a new branch for your changes
    - Stage, commit, and push your changes
    - Create a pull request from within Cursor

## Assignment Guidelines

1. Fork this repository and complete the tasks
2. Document your learnings and challenges in a `LEARNINGS.md` file

## Testing Resources

- Backend Testing:
  - [pytest Documentation](https://docs.pytest.org/)
  - [FastAPI Testing Guide](https://fastapi.tiangolo.com/tutorial/testing/)
- Frontend Testing:

  - [Angular Testing Guide](https://angular.io/guide/testing)
  - [Jasmine Documentation](https://jasmine.github.io/)
  - [Karma Test Runner](https://karma-runner.github.io/)
  - [Cypress for E2E Testing](https://www.cypress.io/)

- Cursor Testing Features:
  - Use AI code assistance to generate test cases
  - Use split view to see implementation and tests side by side
  - Use multiple terminals to run frontend and backend tests simultaneously
  - Use Cursor's debugging tools to step through test execution

## Resources

- [Cursor Documentation](https://cursor.sh/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Angular Documentation](https://angular.io/docs)

Happy coding with Cursor!
