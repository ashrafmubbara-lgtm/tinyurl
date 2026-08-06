import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Signup() {
  return (
    <>
      <Navbar />

      <section className="signup-section">
        <div className="signup-box">

          <h1>Create Your Account</h1>

          <p>Start shortening links in just a few seconds.</p>

          <form>

            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              required
            />

            <button type="submit">
              Create Account
            </button>

          </form>

          {/* Social Signup */}

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="google-btn">
            <i className="fa-brands fa-google"></i>
            Continue with Google
          </button>

          <div className="login-link">
            <p>
              Already have an account?{" "}
              <Link to="/login">
                Log In
              </Link>
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Signup;