import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#041120] text-white px-5 py-16">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">


        {/* Logo */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            TinyURL
          </h2>

          <p className="text-gray-400 leading-7">
            Create short, powerful links and share them anywhere.
          </p>
        </div>



        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">

            <Link 
              to="/"
              className="text-gray-300 hover:text-[#19b6ff] transition"
            >
              Home
            </Link>

            <Link 
              to="/features"
              className="text-gray-300 hover:text-[#19b6ff] transition"
            >
              Features
            </Link>

            <Link 
              to="/domains"
              className="text-gray-300 hover:text-[#19b6ff] transition"
            >
              Domains
            </Link>

            <Link 
              to="/plans"
              className="text-gray-300 hover:text-[#19b6ff] transition"
            >
              Plans
            </Link>

            <Link 
              to="/blog"
              className="text-gray-300 hover:text-[#19b6ff] transition"
            >
              Blog
            </Link>

          </div>
        </div>




        {/* Account */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Account
          </h3>


          <div className="flex flex-col gap-3">

            <Link
              to="/login"
              className="text-gray-300 hover:text-[#19b6ff] transition"
            >
              Login
            </Link>


            <Link
              to="/signup"
              className="text-gray-300 hover:text-[#19b6ff] transition"
            >
              Sign Up
            </Link>

          </div>

        </div>





        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>


          <p className="text-gray-400 mb-3">
            Email: support@tinyurl.com
          </p>


          <p className="text-gray-400">
            Phone: +92 300 1234567
          </p>

        </div>


      </div>




      <hr className="border-gray-700 my-8" />


      <p className="text-center text-gray-500">
        © 2026 TinyURL. All Rights Reserved.
      </p>


    </footer>
  );
}

export default Footer;