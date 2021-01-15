import React from "react";

export default function Navbar ({ currentPage }) {
  return (
    <nav>
      <ul>
        <li className={`${currentPage === "home" ? "active" : ""}`}>
          <a href="/">Home</a>
        </li>
        |
        <li className={`${currentPage === "about" ? "active" : ""}`}>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
