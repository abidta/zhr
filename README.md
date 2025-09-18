# zhr

 ZHR is a modern Human Resource Management (HRM) system built with a Next.js frontend and a NestJS backend. It helps organizations manage employees, attendance, payroll, and other HR operations efficiently with a clean, scalable architecture.

## Features

- Employee Management – Add, edit, and manage employee profiles.

- Attendance Tracking – Daily attendance, check-in/out, and working hours.

- Leave Management – Employees can apply for leave, managers can approve/reject.

- Payroll System – Salary calculation with allowances, deductions, and overtime.

- Recruitment – Job postings, candidate management, and interview tracking.

- Reports & Analytics – Employee data, payroll summaries, and attendance trends.

- Role-based Access – Admin, HR, Manager, and Employee roles with restricted permissions.

## Tech Stack

## Frontend

- Next.js (React framework for SSR)

- Tailwind CSS (UI styling)

## Backend (NestJS)

- NestJS (Node.js framework)

- Postgres (database)

- Prisma(ORM)

- JWT & Passport.js (authentication)

- Swagger (API documentation)

- pnpm (package manager)

### backend setup(NestJS)

```sh
    cd backend
    pnpm install 
 ```

### start backend dev server

```sh
 pnpm --filter backend start:dev
 ```

### Frontend Setup (Next.js)

```sh
 cd frontend
 pnpm install
 ```

### start frontend dev server

```sh
 pnpm --filter frontend dev
```
