import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Blog(){


const blogs = [

{
image:"https://tinyurl.com/blog/wp-content/uploads/2025/03/Hero_What-Is-Social-Media-Monitoring_-Examples-and-Top-Tools-2048x876.webp",
category:"Analytics & Performance Insights",
title:"What Is Social Media Monitoring? Examples and Top Tools",
text:"In this blog post, we will discuss social media monitoring, unpack its significance, and explain how it can help your business."
},


{
image:"https://tinyurl.com/blog/wp-content/uploads/2025/03/Hero_What-Is-Performance-Marketing_-Getting-Started-2048x878.webp",
category:"Analytics & Performance Insights",
title:"What Is Performance Marketing? Getting Started",
text:"In this blog, we’ll explore the benefits and potential challenges of performance marketing, and provide actionable tips."
},


{
image:"https://tinyurl.com/blog/wp-content/uploads/2025/03/Hero_What-Is-Link-Management_-Top-Three-Use-Cases-and-Five-Best-Tools-2048x878.webp",
category:"Link Management",
title:"What Is Link Management? Top Three Use Cases and Five Best Tools",
text:"Whether you’re a seasoned digital marketer, an SEO specialist, or a business owner navigating the online world."
},


{
image:"https://tinyurl.com/blog/wp-content/uploads/2025/03/Hero_What-Is-Audience-Segmentation_-Types-and-Tips-2048x878.webp",
category:"Link Management",
title:"What Is Audience Segmentation? Types and Tips",
text:"In this post, we’ll explore different types of audience segmentation and useful tips."
},


{
image:"https://tinyurl.com/blog/wp-content/uploads/2025/03/Hero_Website-Visitor-Tracking-Top-Five-Tools-and-How-To-Get-Started-2048x878.webp",
category:"Analytics & Performance Insights",
title:"Website Visitor Tracking: Top Five Tools and How To Get Started",
text:"We’ve zeroed in on the top five tools that make online visitor tracking easy."
}

];



return(

<div className="bg-[#081c36] min-h-screen text-white">


<Navbar />



{/* HERO FEATURED BLOG */}


<section className="px-6 md:px-20 py-20">


<div className="flex flex-col md:flex-row items-center gap-12">



{/* LEFT */}


<div className="md:w-1/2">


<p className="text-[#19b6ff] font-semibold mb-5">

Link Management

</p>



<h1 className="text-5xl font-bold leading-tight mb-6">

What Is URL Masking? Pros and Cons and When To Consider It

</h1>



<p className="text-gray-300 text-lg leading-8 mb-8">

URL masking is a standard web practice used by many reputable businesses.
Let’s clarify what URL masking is, how it works, and when it might be a valuable tool for your website.

</p>



<a
href="#"
className="inline-block bg-[#19b6ff] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#008fd6] transition"
>

Learn More →

</a>


</div>





{/* RIGHT IMAGE */}


<div className="md:w-1/2">


<img

src="https://tinyurl.com/blog/wp-content/uploads/2025/03/Hero_What-Is-URL-Masking_-Pros-and-Cons-and-When-To-Consider-It-2048x878.webp"

alt="URL Masking"

className="rounded-2xl w-full object-cover shadow-xl"

/>


</div>



</div>


</section>






{/* BLOG CARDS */}



<section className="px-6 md:px-20 py-16">


<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">



{
blogs.map((blog,index)=>(


<div
key={index}
className="bg-white text-black rounded-2xl overflow-hidden shadow-xl hover:-translate-y-3 transition"
>



<img

src={blog.image}

alt={blog.title}

className="w-full h-72 object-cover"

/>




<div className="p-8">



<p className="text-[#0056b3] font-semibold mb-3">

{blog.category}

</p>




<h2 className="text-2xl font-bold mb-5">

{blog.title}

</h2>




<p className="text-gray-600 leading-7 mb-6">

{blog.text}

</p>




<a
href="#"
className="text-[#0056b3] font-semibold"
>

Learn More →

</a>



</div>



</div>



))

}



</div>



</section>






{/* PAGINATION */}



<div className="flex justify-center gap-4 py-10">


<button className="bg-[#0056b3] px-5 py-2 rounded">

Page1

</button>



<button className="border px-5 py-2 rounded">

Page2

</button>



<button className="border px-5 py-2 rounded">

Page3

</button>



<span className="px-5 py-2">

...

</span>



<button className="border px-5 py-2 rounded">

Page11

</button>


</div>







{/* CTA */}



<section className="bg-[#071b32] text-center py-20 px-6">



<h1 className="text-5xl font-bold mb-6">

Ready for shorter, smarter links?

</h1>




<p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">

Transform a long link into a short, trackable one using our platform.
Create a free account or subscribe to one of the paid plans.

</p>




<button className="bg-[#19b6ff] px-8 py-4 rounded-lg font-semibold">

Create Free Account

</button>



</section>





<Footer />


</div>


)


}


export default Blog;