import { useState } from "react";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom"; // Correct import

function App() {
  return (
    <div>
      <nav>
        <a href="#" className="logo">
          {/* <img
            src="News_2019-12-04_vote_logo.png"
            alt="Polling System Logo"
            className="logo-image"
          /> */}
          Polling System
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/admin">Admin</a>
            <ul>
              <li>
                <a href="/admin/login">Admin Register</a>
              </li>
              <li>
                <a href="/admin/questions">Manage Questions</a>
              </li>
              <li>
                <a href="/admin/logout">Admin Login</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/users">Users</a>
            <ul>
              <li>
                <a href="/users/login">User Login</a>
              </li>
              <li>
                <a href="/users/register">Register User</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/questions">Questions</a>
            <ul>
              <li>
                <a href="/questions/view">View All Questions</a>
              </li>
              <li>
                <a href="/questions/answer">Post Answer</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/answers">Answers</a>
            <ul>
              <li>
                <a href="/answers/view">View Submitted Answers</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/users/logged-in">Logged-In Users</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>

    
  );
}

export default App;
