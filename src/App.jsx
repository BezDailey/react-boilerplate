import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/routes.jsx';

function App() {
  console.log(routes);
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element, children }, index) =>
          children ? (
            <Route key={index} path={path} element={element}>
              {children.map((child, idx) => (
                <Route key={idx} path={child.path} element={child.element} />
              ))}
            </Route>
          ) : (
            <Route key={index} path={path} element={element} />
          ),
        )}
      </Routes>
    </Router>
  );
}

export default App;
