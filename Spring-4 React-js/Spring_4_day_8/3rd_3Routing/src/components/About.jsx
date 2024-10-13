import React from 'react';
import { Routes, Route } from 'react-router-dom';


function Company() {
  return <h4>Company Information</h4>;
}

function Ceo() {
  return <h4>CEO Information</h4>;
}

function Chairman() {
  return <h4>Chairman Information</h4>;
}

function About() {
  return (
    <div>
      <h3>About Page</h3>
      <Routes>
        <Route path="company" element={<Company />} />
        <Route path="ceo" element={<Ceo />} />
        <Route path="chairman" element={<Chairman />} />
      </Routes>
    </div>
  );
}

export default About;
