import "./App.css";
import profileImage from "./oyinkansola.jfif";
import slack from "./slack.png";
import github from "./github.png";
import zuri from "./zuri.png";
import ifg from "./IFG-Logo.png";
import back from "./back.png";
import menu from "./menu.png";
import { NavLink, Routes, Route } from "react-router-dom";

export function Contact() {
  const name = "Teqbaddie";
  return (
    <div className="main-two">
      <div className="main-form">
        <h1 style={{ marginTop: "25px", marginBottom: "20px" }}>Contact Me</h1>
        <p style={{ color: "black", marginBottom: "25px" }}>
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <div className="respon">
          <label className="half">
            <p style={{ marginTop: "20px" }}>First name</p>
            <input id="first_name" placeholder={`Enter your first name`} />
          </label>
          <label className="half">
            <p style={{ marginTop: "20px" }}>Last name</p>
            <input id="last_name" placeholder={`Enter your last name`} />
          </label>
        </div>
        <label>
          <p style={{ marginTop: "20px" }}>Email</p>
          <input id="email" placeholder={`yourname@email.com`} />
        </label>
        <label>
          <p style={{ marginTop: "20px" }}>Message</p>
          <input
            type="textarea"
            id="message"
            placeholder={`Send me a message and I'll reply you as soon as possible..`}
          />
        </label>
        {/* <br/> */}

        <label className="chck">
          <p>
            {" "}
            <input type="checkbox" />
          </p>
          <p style={{ marginLeft: "8px" }}>
            {" "}
            You agree to providing your data to {name} who may contact you.
          </p>
        </label>

        <br />
        <button id="btn__submit">Send Message</button>
      </div>

      <div className="footer">
        <img className="image" src={zuri} />
        <p className="text">HNG Internship 9 Frontend Task</p>
        <img className="image" src={ifg} />
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div className="Container">
      <div className="Main">
        <img id="back" src={back} />
        <img id="menu" src={menu} />
        <div className="Profile">
          <img id="profile__img" src={profileImage} />
          <p id="twitter">Teqbaddie</p>
          {/* <p id='slack'>Teqbaddie</p> */}
        </div>
        <div className="Mainlinks">
          <div className="Links">
            <a
              id=""
              href="https://twitter.com/teqbaddie"
              target="_blank"
              rel="noreferrer"
            >
              Twitter Link
            </a>
          </div>
          <div className="Links">
            <a
              id="btn__zuri"
              href="https://training.zuri.team/"
              target="_blank"
              rel="noreferrer"
            >
              Zuri Team
            </a>
          </div>
          <div className="Links">
            <a
              id="books"
              href="http://books.zuri.team"
              target="_blank"
              rel="noreferrer"
            >
              Zuri Books
            </a>
          </div>
          <div className="Links">
            <a
              id="book__python"
              href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
              target="_blank"
              rel="noreferrer"
            >
              Python Books
            </a>
          </div>
          <div className="Links">
            <a
              id="pitch"
              href="https://background.zuri.team"
              target="_blank"
              rel="noreferrer"
            >
              Background Check for Coders
            </a>
          </div>
          <div className="Links">
            <a
              id="contact"
              href="https://books.zuri.team/design-rules"
              target="_blank"
              rel="noreferrer"
            >
              Design Books
            </a>
          </div>
          <div className="Links">
            <NavLink to="/contact">
              <a id="contact">Contact Me</a>
            </NavLink>
          </div>
        </div>
        <div className="icons">
          <img className="icon" src={slack} />
          <img className="icon" src={github} />
        </div>
      </div>
      <div className="footer">
        <img className="image" src={zuri} />
        <p className="text">HNG Internship 9 Frontend Task</p>
        <img className="image" src={ifg} />
      </div>
    </div>
  );
}

function Path() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
export default Path;
