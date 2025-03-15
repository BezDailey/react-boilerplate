import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow py-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          About React Boilerplate
        </h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Overview
          </h2>
          <p className="text-gray-700">
            This repository serves as a boilerplate for React projects,
            providing a clean and scalable starting point using modern tools and
            best practices. It is designed with Vite for fast development,
            Tailwind CSS for styling, and React Router for client-side routing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Features
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Vite:</strong> A fast and modern build tool for React
              applications.
            </li>
            <li>
              <strong>Tailwind CSS:</strong> A utility-first CSS framework for
              rapid UI development.
            </li>
            <li>
              <strong>React Router:</strong> A robust solution for handling
              client-side routing.
            </li>
            <li>
              <strong>ESLint & Prettier:</strong> Tools for maintaining code
              quality and consistency.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Folder Structure
          </h2>
          <pre className="bg-gray-200 p-4 rounded text-sm text-gray-800 overflow-x-auto">
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
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Configuration Details
          </h2>
          <p className="text-gray-700">
            The project uses Vite as its build tool, integrated with Tailwind
            CSS for styling, and React Router for navigation. ESLint and
            Prettier are configured to ensure high code quality and consistent
            formatting.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Future Enhancements
          </h2>
          <p className="text-gray-700">
            Future improvements include expanded testing capabilities with Jest
            and React Testing Library, additional custom hooks and utilities, a
            CI/CD pipeline, and enhanced documentation with examples and usage
            guides.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Contributing
          </h2>
          <p className="text-gray-700">
            Contributions are welcome! If you have ideas or improvements, please
            open an issue or submit a pull request.
          </p>
        </section>
      </main>

      <footer className="bg-white py-4 shadow">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Jabez Dailey
        </p>
      </footer>
    </div>
  );
};

export default About;
