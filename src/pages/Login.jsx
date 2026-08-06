import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <div className="bg-[#081c36] text-white min-h-screen">

      <Navbar />


      {/* Login Section */}
      <section className="flex justify-center items-center min-h-[85vh] px-5 py-12">

        <div className="w-full max-w-md bg-white text-black p-10 rounded-2xl shadow-2xl animate-[fadeUp_.8s_ease]">

          <h1 className="text-center text-3xl font-bold text-[#0056b3] mb-3">
            Welcome Back
          </h1>


          <p className="text-center text-gray-600 mb-8">
            Log in to manage your TinyURL links.
          </p>


          <form>

            <label className="block font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 mb-5 border border-gray-300 rounded-lg text-base outline-none focus:border-[#19b6ff]"
              required
            />


            <label className="block font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-4 mb-5 border border-gray-300 rounded-lg text-base outline-none focus:border-[#19b6ff]"
              required
            />


            <div className="flex justify-between items-center mb-6 text-sm">

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </label>


              <a
                href="#"
                className="text-[#0056b3]"
              >
                Forgot Password?
              </a>

            </div>


            <button
              type="submit"
              className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg text-lg transition"
            >
              Log In
            </button>


          </form>


          {/* Divider */}

          <div className="text-center my-6 text-gray-500">
            <span>OR</span>
          </div>


          {/* Google Button */}

          <button
            className="w-full py-4 border border-gray-300 rounded-lg text-base hover:bg-gray-100 transition text-black"
          >

            <i className="fa-brands fa-google text-red-500 mr-3"></i>

            Continue with Google

          </button>


          {/* Signup Link */}

          <div className="text-center mt-6">

            <p className="text-gray-600">
              Don't have an account?{" "}

              <a
                href="/signup"
                className="text-[#0056b3] font-semibold hover:text-[#19b6ff]"
              >
                Create Account
              </a>

            </p>

          </div>


        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Login;