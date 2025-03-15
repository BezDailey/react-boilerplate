// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow py-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome to My React Boilerplate
        </h1>
      </header>
      <main className="flex-grow container mx-auto px-4 py-10">
        <p className="text-lg text-gray-700 mb-4">
          This is my starting point for building a modern React application.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          I will customize and extend this template as build out features.
        </p>
        <div className="text-center">
          <Link
            to="/about"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Learn more about this project
          </Link>
        </div>
      </main>
      <footer className="bg-white py-4 shadow">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Jabez Dailey
        </p>
      </footer>
    </div>
  );
};

export default Home;
