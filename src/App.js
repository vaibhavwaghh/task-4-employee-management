// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import ViewEmployees from "./components/ViewEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import DeleteEmployee from "./components/DeleteEmployee";
import Overview from "./components/Overview";
import NotFound from "./components/NotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/view" element={<ViewEmployees />} />
        <Route path="/update" element={<UpdateEmployee />} />
        <Route path="/delete" element={<DeleteEmployee />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
