# Personal Financial Planner 💰

> A web application for tracking, analyzing, and managing personal finances. Users can view their spending patterns, set budgets, track goals, and get financial insights on a customizable dashboard.

## Features

- **Dashboard Overview**: A personalized dashboard where users can view their recent transactions, monthly spending patterns, and budget progress.
- **Spending Analytics**: Interactive charts and graphs to visualize spending by category, timeframe, and more.
- **Budgeting Tools**: Monthly and yearly budgets to help users stay on top of their finances with progress indicators.
- **Spending Alerts and Notifications**: Users receive alerts when they exceed budget limits or approach their spending thresholds. Alerts are sent via email through Firebase Cloud Functions, and users also receive in-app notifications when logged in.

---

## Technology Stack

- **Frontend**: React, Tailwind CSS for styling, Chart.js/D3.js for visualizations.
- **Backend**: Firebase (Authentication, Firestore, Cloud Functions for notifications).
- **Email Notifications**: Firebase Cloud Functions combined with an email service (e.g., SendGrid).
- **Deployment**: Vercel for the frontend, Firebase Hosting for serverless functions.

---
