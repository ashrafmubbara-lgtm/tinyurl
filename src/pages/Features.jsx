import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Features() {

  const features = [
    {
      icon:"🔗",
      title:"URL Shortening",
      text:"Create clean and short links instantly."
    },
    {
      icon:"▣",
      title:"QR Codes",
      text:"Generate beautiful QR codes for your links."
    },
    {
      icon:"📈",
      title:"Analytics",
      text:"Track clicks, countries and devices."
    },
    {
      icon:"🌐",
      title:"Custom Domains",
      text:"Use your own branded domain."
    },
    {
      icon:"🛡️",
      title:"Secure Links",
      text:"Protect your links with security."
    },
    {
      icon:"👥",
      title:"Team Collaboration",
      text:"Invite team members and manage links together."
    }
  ];


  const stats = [
    {
      number:"10M+",
      title:"Links Created"
    },
    {
      number:"500K+",
      title:"Active Users"
    },
    {
      number:"99.9%",
      title:"Uptime"
    },
    {
      number:"150+",
      title:"Countries Served"
    }
  ];


  return (
    <div className="bg-[#081c36] text-white min-h-screen">

      <Navbar />


      {/* Hero */}

      <section className="text-center px-5 py-24">

        <h1 className="text-5xl md:text-6xl font-bold mb-5">
          Powerful Features For Everyone
        </h1>

        <p className="text-xl text-gray-300">
          Everything you need to shorten, manage and track your links.
        </p>

      </section>



      {/* Feature Cards */}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20 py-16">


        {features.map((item,index)=>(

          <div
          key={index}
          className="bg-white text-black p-8 rounded-2xl text-center shadow-xl hover:-translate-y-3 transition duration-300"
          >

            <div className="text-5xl text-[#19b6ff] mb-5">
              {item.icon}
            </div>


            <h2 className="text-2xl font-bold mb-4">
              {item.title}
            </h2>


            <p className="text-gray-600 leading-7">
              {item.text}
            </p>


          </div>

        ))}


      </section>




      {/* Stats */}

      <section className="bg-[#0b2347] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-20 py-20">


        {stats.map((item,index)=>(

          <div
          key={index}
          className="bg-white text-black text-center p-8 rounded-2xl hover:-translate-y-3 transition"
          >

            <h2 className="text-5xl font-bold text-[#0056b3] mb-3">
              {item.number}
            </h2>


            <p className="text-gray-600 text-lg">
              {item.title}
            </p>


          </div>

        ))}


      </section>





      {/* CTA */}

      <section className="text-center px-5 py-24">


        <h1 className="text-5xl font-bold mb-5">
          Ready to Start Shortening Your Links?
        </h1>


        <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-8 mb-10">
          Create professional short links, QR Codes and track analytics in seconds.
        </p>



        <div className="flex flex-col md:flex-row justify-center gap-5">


          <a
          href="/signup"
          className="bg-[#19b6ff] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0099e6]"
          >
            Create Free Account
          </a>



          <a
          href="/plans"
          className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0056b3]"
          >
            View Plans
          </a>


        </div>


      </section>




      <Footer />


    </div>
  );
}


export default Features;