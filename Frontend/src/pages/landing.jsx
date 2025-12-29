import "../App.css";
import { Link, useNavigate } from "react-router-dom";

function LandingPage() {
  const router = useNavigate();
  return (
    <>
      <div className="landingPageContainer">
        <nav>
          <div className="navHeader">
            <h2>Let's Connect</h2>
          </div>
          <div className="navList">
            <p
              onClick={() => {
                router("/12756ab");
              }}
            >
              Join as Guest
            </p>
            <p onClick={() => {
                router("/auth");
              }}>Register</p>
            <div
              onClick={() => {
                router("/auth");
              }}
              role="button"
            >
              <p>Login</p>
            </div>
          </div>
        </nav>

        <div className="landingMainContainer">
          <div>
            <h1>
              <span style={{ color: "#FF9839" }}>Connect</span> with your loved
              ones
            </h1>
            <p>Cover a distance by "Let's Connect"</p>
            <div role="button">
              <Link to={"/auth"}>Get Started</Link>
            </div>
          </div>
          <div>
            <img
              src="/Mobile.JPG"
              alt="mobile image"
              style={{
                height: "50vh",
                width: "75vh",
                borderRadius: "1.5rem",
                backgroundSize: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
