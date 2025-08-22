Portfolio Frontend
This is the frontend application for the portfolio website built with React and TypeScript.

Quick Start
Install dependencies

npm install
Start development server

npm start
Build for production

npm run build
Project Structure
src/
├── components/          # React components
├── config/             # Configuration files
├── App.tsx             # Main App component
├── App.css             # Global styles
├── index.tsx           # Entry point
└── index.css           # Global CSS
Available Scripts
npm start - Runs the app in development mode on http://localhost:3000
npm run build - Builds the app for production to the build folder
npm test - Launches the test runner in interactive watch mode
npm run eject - Removes Create React App build dependency (irreversible)
Deployment
The application is configured for deployment on Netlify with the following settings:

Build command: npm run build
Publish directory: build
Base directory: frontend
Environment
Node.js 18+
React 19.1.1
TypeScript 4.9.5
For more detailed information, see the main README.md in the repository root.
