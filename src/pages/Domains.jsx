import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Domains() {
  return (
    <div className="bg-[#f5f8fc] text-[#222]">

      <Navbar />


      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 bg-[#081c36] px-6 md:px-20 py-20">

        <div className="md:w-1/2 text-white">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Custom Domains:
            <br />
            Your Links, Your Branding
          </h1>

          <p className="text-xl text-gray-300 leading-8 mb-5">
            Branded domains are used exclusively to create short,
            appealing, and informative links that put your branding
            or core message front-and-center.
          </p>

          <p className="text-xl text-gray-300 leading-8 mb-8">
            TinyURL subscribers can purchase domains directly
            through our platform. Try it now!
          </p>

          <button className="bg-[#18b7ff] px-9 py-4 rounded-lg text-lg font-semibold hover:bg-[#0096d6]">
            Get Started
          </button>

        </div>


        <div className="md:w-1/2">
          <img
            src="https://tinyurl.com/images/overhauling/domains/figure-1.webp"
            alt="Domain"
            className="w-full max-w-xl"
          />
        </div>

      </section>



      {/* Uses */}

      <section className="bg-white px-6 md:px-20 py-20 text-center">

        <h2 className="text-4xl font-bold mb-14">
          How You Can Use Branded Domains on TinyURL
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">


          {[
            {
              title:"Register a Domain",
              text:"It's as easy as online shopping! Browse for available domains and click to purchase. After setup, you're ready to go.",
              img:"https://tinyurl.com/images/overhauling/domains/figure-2.webp"
            },
            {
              title:"Bring Your Own Domain",
              text:"Already have a domain? Connect it to TinyURL and start creating branded short links.",
              img:"https://tinyurl.com/images/overhauling/domains/figure-3.webp"
            },
            {
              title:"Bring Your Own Subdomain",
              text:"Connect your existing subdomain and create professional branded links for your business.",
              img:"https://tinyurl.com/images/overhauling/domains/figure-4.webp"
            }
          ].map((item,index)=>(

            <div key={index}>

              <h3 className="text-3xl font-semibold mb-5">
                {item.title}
              </h3>

              <p className="text-gray-600 text-lg leading-7 mb-8">
                {item.text}
              </p>

              <img
                src={item.img}
                className="w-56 mx-auto"
              />

            </div>

          ))}


        </div>

      </section>




      {/* Video Section */}

      <section className="flex flex-col md:flex-row my-16">


        <div className="md:w-1/2">

          <video
            autoPlay
            muted
            loop
            className="w-full h-[520px] object-cover"
          >

            <source
              src="https://tinyurl.com/images/overhauling/domains/video.mp4"
            />

          </video>

        </div>



        <div className="md:w-1/2 bg-[#0d8cc7] text-white p-10 md:p-20">

          <h2 className="text-4xl font-bold leading-tight mb-6">
            Get the First Year Free for Certain Domains
          </h2>


          <p className="text-lg leading-8 mb-5">
            To get you started, we've set things up to offer you
            the first year free for certain domains with the .life,
            .live and .info TLDs.
          </p>


          <p className="text-lg mb-8">
            Standard billing applies after the free year has lapsed.
          </p>


          <div className="flex gap-5">

            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold">
              View Plans
            </button>

            <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold">
              Contact Sales
            </button>

          </div>

        </div>


      </section>





      {/* Features */}

      <section className="bg-white px-6 md:px-20 py-20">

        <h2 className="text-center text-4xl font-bold mb-16">
          Why Choose TinyURL Branded Domains?
        </h2>


        {[
          {
            img:"https://tinyurl.com/images/overhauling/domains/figure-5.webp",
            title:"Send Links Your Audiences Will Trust Enough To Click",
            text:"Branded links look more professional and help improve customer trust while increasing click-through rates."
          },
          {
            img:"https://tinyurl.com/images/overhauling/domains/figure-6.webp",
            title:"Serve Short Links With Big Personality",
            text:"Create memorable branded links that match your company and improve brand recognition."
          },
          {
            img:"https://tinyurl.com/images/overhauling/short-url-tracking/figure-7.webp",
            title:"Quick And Easy Configuration",
            text:"Connect your branded domains in minutes and start sharing trusted short links immediately."
          }
        ].map((item,index)=>(

          <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-10 mb-20 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
          >

            <img
              src={item.img}
              className="md:w-1/2"
            />

            <div className="md:w-1/2">

              <h3 className="text-3xl font-bold mb-5">
                {item.title}
              </h3>

              <p className="text-gray-600 text-lg leading-8">
                {item.text}
              </p>

            </div>

          </div>

        ))}


      </section>



      {/* FAQ */}

      <section className="bg-[#eef7fc] px-5 py-20">

        <h2 className="text-center text-4xl font-bold text-[#012C4B] mb-12">
          Frequently Asked Questions
        </h2>


        {[
          ["Can I connect my own domain?","Yes. Connect any domain after upgrading your plan."],
          ["Do I need technical knowledge?","No. We provide easy DNS setup instructions."],
          ["Can I remove my domain later?","Yes. You can disconnect or replace your custom domain anytime."]
        ].map((faq,index)=>(

          <div key={index}
          className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow mb-5">

            <h3 className="text-xl font-bold text-[#012C4B]">
              {faq[0]}
            </h3>

            <p className="text-gray-600 mt-3">
              {faq[1]}
            </p>

          </div>

        ))}


      </section>




      {/* CTA */}

      <section className="bg-[#071b32] text-center text-white py-20 px-5">

        <h1 className="text-5xl font-bold mb-5">
          Ready for Shorter, Smarter Links?
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          Transform a long link into a short, trackable one using our platform.
        </p>

        <button className="bg-[#19b6ff] px-9 py-4 rounded-lg font-semibold">
          Create Free Account
        </button>

      </section>



      <Footer />

    </div>
  );
}

export default Domains;