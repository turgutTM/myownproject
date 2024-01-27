import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/home.css";
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-components">
          <div className="navbar-left">
            <p>Tugu.</p>
          </div>
          <div className="navbar-center">
            <a href="#home">
              <p>Home</p>
            </a>
            <a href="#contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="navbar-right">
            <Link to="/register">
              <button>Register</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>

      <section id="home" className="home">
        <div className="home-container">
          <div className="home-components">
            <h1>
              Note what you have to do today, tomorrow or in the future <br />
              <span>
                {" "}
                you can also note what you did wrong in the past to learn :)
              </span>{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              excepturi ipsam accusamus earum quod quidem! Nam, et voluptatum,
              ipsam ullam, distinctio odio sit commodi facere soluta eius est
              illo consequatur?
            </p>
            <a
              href="https://github.com/turgutTM?tab=repositories"
              target="_blank"
              className="coffee"
            >
              <FontAwesomeIcon icon={faCoffee} style={{ color: "black" }} />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-components">
            <div className="footer-container">
              <div className="footer-components">
                <p>Be the one who wants to contact with me: </p>
                <div className="contact-mail">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>tugu123@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
