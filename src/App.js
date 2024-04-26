import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Ria Gawali's Portfolio</h1>
      <nav id="desktop-nav">
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <section id="profile">
        <p>
          {" "}
          In my third year of learning, I'm focused on expanding my skills and
          knowledge in two key areas: data analytics and web development. While
          I've been honing my expertise in web development, particularly backend
          technologies, for some time now, I'm currently exploring the
          fascinating world of data analytics.
        </p>
      </section>

      <section id="experience">
        <h1 className="title">Experience</h1>
        <table className="experience-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Skill</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="6">Web Development</td>
              <td>HTML</td>
              <td>Experienced</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>Basic</td>
            </tr>
            <tr>
              <td>Bootstrap</td>
              <td>Basic</td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>Basic</td>
            </tr>
            <tr>
              <td>MERN Stack</td>
              <td>Intermediate</td>
            </tr>
            <tr>
              <td>Git</td>
              <td>Basic</td>
            </tr>
            <tr>
              <td rowSpan="4">ML, DS & Analytics</td>
              <td>Python</td>
              <td>Intermediate</td>
            </tr>
            <tr>
              <td>ML Algorithms</td>
              <td>Basic</td>
            </tr>
            <tr>
              <td>Hadoop</td>
              <td>Basic</td>
            </tr>
            <tr>
              <td>Tableau</td>
              <td>Basic</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="projects">
        <h1 className="title">Projects</h1>
        <div className="project-details-container">
          <div className="details-container">
            <article className="project-article">
              <h2>Online Book Store</h2>
              <p>
                A web application for managing an online bookstore including
                user authentication, inventory management, and a shopping cart.
              </p>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/riagawali/onlineBookStore")
                }
              >
                GitHub
              </button>
            </article>
            <article className="project-article">
              <h2>PrimePerks</h2>
              <p>
                An innovative platform offering personalized perks and discounts
                to users based on their subscription level in a streamlined
                interface.
              </p>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/riagawali/PrimePerks")
                }
              >
                GitHub
              </button>
            </article>
          </div>
        </div>
      </section>

      <section id="contact">
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <p>
              <a href="mailto:examplemail@gmail.com">ria.a.gawali@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <p>
              <a href="www.linkedin.com/in/ria-g-b4386a143">LinkedIn</a>
            </p>
          </div>
          <div className="contact-info-container">
            <p>
              <a href="https://github.com/riagawali">Github</a>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>Copyright © 2024 Ria Gawali. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
