import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";

function Home() {

  const [longUrl, setLongUrl] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);


  const shortenURL = async () => {

    if (!longUrl) {
      alert("Please enter URL");
      return;
    }


    try {

      setLoading(true);

      const response = await axios.post(
        "https://mvc1-production.up.railway.app/save",
        {
          longUrl: longUrl
        }
      );


      setShortURL(response.data.shortURL);


    } catch (error) {

      console.log(error);
      alert("Error creating short URL");

    } finally {

      setLoading(false);

    }

  };



  const copyURL = () => {

    navigator.clipboard.writeText(shortURL);

    setCopied(true);


    setTimeout(()=>{

      setCopied(false);

    },2000);

  };



  return (

    <div className="bg-[#081c36] text-white min-h-screen">


      <Navbar />



      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-10">



        <div className="md:w-1/2">


          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            URL Shortener, Branded Short Links & Analytics
          </h1>



          <p className="text-xl text-gray-300 leading-8 mb-5">
            Welcome to the original link shortener — simplifying the Internet
            through the power of the URL since 2002.
          </p>



          <p className="text-xl text-gray-300 leading-8 mb-8">
            You can use branded domains for fully custom links,
            track link analytics, and enjoy other powerful features.
          </p>



          <div className="flex gap-5 mb-10">


            <a
              href="/plans"
              className="bg-white text-[#0056b3] px-8 py-4 rounded-lg font-semibold"
            >
              View Plans
            </a>



            <a
              href="/signup"
              className="bg-[#19b6ff] px-8 py-4 rounded-lg font-semibold"
            >
              Create Free Account
            </a>


          </div>




          <h3 className="text-2xl mb-4">
            Your Recent Links:
          </h3>



          <div className="bg-white text-gray-700 p-5 rounded-lg">

            No links yet in your history

          </div>



        </div>




        <div className="md:w-1/2">


          <div className="bg-white text-black p-8 rounded-2xl shadow-xl">



            <div className="flex gap-5 mb-6">


              <button className="bg-[#0056b3] text-white px-5 py-3 rounded-lg">

                Shorten a Link

              </button>



              <button className="border px-5 py-3 rounded-lg">

                Generate QR Code

              </button>


            </div>




            <label className="block mb-2">

              Long URL

            </label>



            <input

              type="text"

              placeholder="Paste long URL here"

              value={longUrl}

              onChange={(e)=>setLongUrl(e.target.value)}

              className="w-full border p-3 rounded-lg mb-5"

            />




            <button

              onClick={shortenURL}

              disabled={loading}

              className="mt-6 w-full bg-[#19b6ff] text-white py-3 rounded-lg flex justify-center items-center gap-3"

            >

              {
                loading ? (

                  <>
                    <span className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></span>

                    Creating...

                  </>

                ) : (

                  "Shorten Link"

                )
              }


            </button>





            {
              shortURL && (

                <div className="mt-5">


                  <label className="block mb-2 font-semibold">

                    Short URL

                  </label>




                  <div className="flex gap-3">


                    <input

                      type="text"

                      value={shortURL}

                      readOnly

                      className="flex-1 border p-3 rounded-lg text-black"

                    />



                    <button

                      onClick={copyURL}

                      className="bg-[#0056b3] text-white px-5 rounded-lg"

                    >

                      {
                        copied ? "Copied!" : "Copy"
                      }


                    </button>


                  </div>



                </div>

              )
            }



          </div>


        </div>


      </section>
            {/* FEATURES */}


      <section className="px-6 md:px-20 py-20">


        <h2 className="text-4xl text-center font-bold mb-5">
          Everything you need for smarter links
        </h2>



        <p className="text-center text-gray-300 mb-12">
          Create, manage and track your short links with powerful tools.
        </p>




        <div className="grid md:grid-cols-3 gap-8">



          <FeatureCard
            title="Bulk Short URLs"
            image="https://tinyurl.com/images/feature-3.webp"
            text="Create short and memorable links instantly."
          />



          <FeatureCard
            title="Detailed Link Analytics"
            image="https://tinyurl.com/images/feature-1.webp"
            text="Track clicks, locations and performance."
          />



          <FeatureCard
            title="Fully Branded Domains"
            image="https://tinyurl.com/images/feature-2.webp"
            text="Use custom domains for your brand."
          />



        </div>


      </section>






      {/* VIDEO SECTION */}



      <section className="flex flex-col md:flex-row bg-white text-black">



        <video

          autoPlay
          muted
          loop
          className="md:w-1/2"

        >


          <source

            src="https://tinyurl.com/images/overhauling/shortener-video.mp4"

            type="video/mp4"

          />


        </video>





        <div className="md:w-1/2 p-10">


          <h2 className="text-4xl font-bold mb-5">

            Link Shortening Done Quick and Easy

          </h2>




          <p>

            Shorten links for social media, blogs, SMS, emails,
            ads, and almost anything both off- and online.

          </p>



        </div>



      </section>







      {/* CTA */}





      <section className="text-center py-20">



        <h1 className="text-5xl font-bold mb-5">

          Ready for Shorter, Smarter Links?

        </h1>




        <p className="text-gray-300 mb-8">

          Transform a long link into a short, trackable one.

        </p>




        <a

          href="/signup"

          className="bg-[#19b6ff] px-10 py-4 rounded-lg"

        >

          Create Free Account

        </a>




      </section>








      <Footer />



    </div>


  );


}






function FeatureCard({title,image,text}) {


  return (


    <div className="bg-white text-black rounded-2xl p-6 text-center">


      <h3 className="text-2xl font-bold mb-5">

        {title}

      </h3>




      <img

        src={image}

        className="w-full h-40 object-cover rounded-lg mb-5"

      />





      <p>

        {text}

      </p>



    </div>


  );


}






export default Home;