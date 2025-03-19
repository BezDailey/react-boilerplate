import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow py-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          About React Boilerplate
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-10">
        <Accordion.Root type="multiple" className="space-y-4">
          {/* Overview Section */}
          <Accordion.Item value="overview" className="bg-white rounded shadow">
            <Accordion.Header className="px-4 py-2">
              <Accordion.Trigger className="w-full text-left text-2xl font-semibold text-gray-700 focus:outline-none">
                Overview
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-4 py-2 text-gray-700 border-t">
This repository serves as a boilerplate for React projects, providing a clean and scalable starting point using modern tools and best practices. It is designed with Vite for fast development, Tailwind CSS for styling, React Router for client-side routing, and Radix UI for accessible, headless component primitives.
            </Accordion.Content>
          </Accordion.Item>

          {/* Features Section */}
          <Accordion.Item value="features" className="bg-white rounded shadow">
            <Accordion.Header className="px-4 py-2">
              <Accordion.Trigger className="w-full text-left text-2xl font-semibold text-gray-700 focus:outline-none">
                Features
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-4 py-2 text-gray-700 border-t">
              <ul className="list-disc list-inside">
                <li>
                  <strong>Vite:</strong> A fast and modern build tool for React applications.
                </li>
                <li>
                  <strong>Tailwind CSS:</strong> A utility-first CSS framework for rapid UI development.
                </li>
                <li>
                  <strong>React Router:</strong> A robust solution for handling client-side routing.
                </li>
                <li>
                  <strong>ESLint & Prettier:</strong> Tools for maintaining code quality and consistency.
                </li>
                <li>
                  <strong>Radix UI:</strong> A collection of unstyled, accessible UI primitives that allow you to build custom components with full control over styling using Tailwind CSS.
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>

          {/* Folder Structure Section */}
          <Accordion.Item value="folder-structure" className="bg-white rounded shadow">
            <Accordion.Header className="px-4 py-2">
              <Accordion.Trigger className="w-full text-left text-2xl font-semibold text-gray-700 focus:outline-none">
                Folder Structure
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-4 py-2 text-gray-700 border-t">
              <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto">
                {`my-react-boilerplate/
├── public/
│   └── index.html
├── src/
│   ├── assets/              # Images, fonts, icons, etc.
│   ├── components/          # Reusable UI components (e.g., Button.jsx, Card.jsx)
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Page-level components for different routes
│   ├── routes/              # Routing configuration (e.g., RouteWrapper.jsx, routes.js)
│   ├── styles/              # Global styles and Tailwind CSS configuration
│   │   ├── index.css        # Main CSS file importing Tailwind's directives
│   │   └── tailwind.css     # Optionally keep a dedicated file for Tailwind overrides
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Entry point for Vite
├── .eslintrc.js             # ESLint configuration file
├── .prettierrc              # Prettier configuration file
├── tailwind.config.js       # Tailwind CSS configuration file
├── postcss.config.js        # PostCSS configuration (needed for Tailwind)
├── package.json             # Project manifest
├── vite.config.js           # Vite configuration file
└── README.md                # Project documentation`}
              </pre>
            </Accordion.Content>
          </Accordion.Item>

          {/* Configuration Details Section */}
          <Accordion.Item value="configuration" className="bg-white rounded shadow">
            <Accordion.Header className="px-4 py-2">
              <Accordion.Trigger className="w-full text-left text-2xl font-semibold text-gray-700 focus:outline-none">
                Configuration Details
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-4 py-2 text-gray-700 border-t">
              The project uses Vite as its build tool, integrated with Tailwind CSS for styling, and React Router for navigation. ESLint and Prettier are configured to ensure high code quality and consistent formatting.
            </Accordion.Content>
          </Accordion.Item>

          {/* Future Enhancements Section */}
          <Accordion.Item value="enhancements" className="bg-white rounded shadow">
            <Accordion.Header className="px-4 py-2">
              <Accordion.Trigger className="w-full text-left text-2xl font-semibold text-gray-700 focus:outline-none">
                Future Enhancements
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-4 py-2 text-gray-700 border-t">
              Future improvements include expanded testing capabilities with Jest and React Testing Library, additional custom hooks and utilities, a CI/CD pipeline, and enhanced documentation with examples and usage guides.
            </Accordion.Content>
          </Accordion.Item>

          {/* Contributing Section */}
          <Accordion.Item value="contributing" className="bg-white rounded shadow">
            <Accordion.Header className="px-4 py-2">
              <Accordion.Trigger className="w-full text-left text-2xl font-semibold text-gray-700 focus:outline-none">
                Contributing
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-4 py-2 text-gray-700 border-t">
              Contributions are welcome! If you have ideas or improvements, please open an issue or submit a pull request.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4 shadow">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Jabez Dailey
        </p>
      </footer>
    </div>
  );
};

export default About;
