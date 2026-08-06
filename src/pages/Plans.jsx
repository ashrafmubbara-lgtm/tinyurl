import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Plans() {


const plans = [
{
title:"Free",
price:"$0",
duration:"Forever",
features:[
"5 Short Links",
"Basic QR Codes",
"Basic Analytics",
"Community Support"
],
button:"Get Started"
},


{
title:"Pro",
price:"$9.99",
duration:"Per Month",
popular:true,
features:[
"Unlimited Links",
"Unlimited QR Codes",
"Advanced Analytics",
"Custom Domains",
"Priority Support"
],
button:"Start Free Trial"
},


{
title:"Business",
price:"$49",
duration:"Per Month",
features:[
"Everything in Pro",
"Team Members",
"API Access",
"Dedicated Support"
],
button:"Contact Sales"
}

];



const compare = [
["Short Links","5","Unlimited","Unlimited"],
["QR Codes","Basic","Unlimited","Unlimited"],
["Analytics","Basic","Advanced","Advanced"],
["Custom Domain","❌","✔","✔"],
["API Access","❌","❌","✔"]
];



return (

<div className="bg-[#081c36] text-white min-h-screen">


<Navbar />


{/* Hero */}

<section className="text-center px-5 py-24">

<h1 className="text-5xl md:text-6xl font-bold mb-5">
Choose Your Perfect Plan
</h1>


<p className="text-xl text-gray-300">
Compare all TinyURL plans and choose the best option for your business.
</p>

</section>




{/* Pricing Cards */}

<section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 py-16">


{
plans.map((plan,index)=>(


<div
key={index}
className={`bg-white text-black rounded-2xl p-8 text-center relative shadow-xl hover:-translate-y-3 transition
${plan.popular ? "border-4 border-[#19b6ff]" : ""}
`}
>


{
plan.popular &&

<span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#19b6ff] text-white px-5 py-2 rounded-full text-sm">

Most Popular

</span>

}



<h2 className="text-3xl font-bold mb-3">
{plan.title}
</h2>


<h1 className="text-5xl font-bold text-[#0056b3] mb-3">
{plan.price}
</h1>


<p className="text-gray-600 mb-6">
{plan.duration}
</p>



<ul className="text-left mb-8 space-y-4">

{
plan.features.map((item,i)=>(

<li key={i}>
<span className="text-green-500 mr-2">✔</span>
{item}
</li>

))
}

</ul>



<button className="w-full bg-[#20b44d] text-white py-4 rounded-lg hover:bg-[#18893b]">

{plan.button}

</button>


</div>


))
}


</section>






{/* Compare */}

<section className="px-6 md:px-20 py-20">


<h2 className="text-center text-4xl font-bold mb-10">

Compare Features

</h2>



<div className="overflow-x-auto">


<table className="w-full bg-white text-black rounded-xl overflow-hidden">


<thead className="bg-[#0056b3] text-white">

<tr>

<th className="p-5">
Features
</th>

<th className="p-5">
Free
</th>

<th className="p-5">
Pro
</th>

<th className="p-5">
Business
</th>

</tr>

</thead>



<tbody>


{
compare.map((row,index)=>(

<tr
key={index}
className="border-b hover:bg-gray-100"
>

{
row.map((data,i)=>(

<td
key={i}
className="p-5 text-center"
>

{data}

</td>

))
}

</tr>

))
}


</tbody>


</table>


</div>


</section>







{/* Video Section */}

<section className="bg-white mt-10">


<div className="flex flex-col md:flex-row">


<div className="md:w-[55%]">

<video
autoPlay
muted
loop
playsInline
className="w-full h-[520px] object-cover"
>

<source
src="https://tinyurl.com/images/overhauling/user-highlight-video.mp4"
type="video/mp4"
/>

</video>


</div>




<div className="md:w-[45%] bg-gradient-to-br from-[#0088c7] to-[#005f9c] p-10 md:p-16 flex flex-col justify-center">


<h1 className="text-4xl font-bold mb-8">

The URL Shortener Trusted by 4,344,393 Users

</h1>


<p className="text-xl leading-8 mb-8">

TinyURL has created billions of short links for marketers,
influencers, small business owners, and large businesses.

</p>



<div className="flex gap-5 flex-wrap">


<a className="bg-white text-[#005f9c] px-7 py-4 rounded-lg font-semibold">

Create Free Account

</a>


<a className="bg-[#071b32] px-7 py-4 rounded-lg font-semibold">

Contact Sales

</a>


</div>


</div>


</div>


</section>






{/* CTA */}


<section className="text-center bg-[#071b32] px-5 py-20">


<h1 className="text-5xl font-bold mb-5">

Ready for Shorter, Smarter Links?

</h1>


<p className="text-gray-300 text-lg mb-8">

Transform a long link into a short, trackable one using our platform.

</p>



<a className="bg-[#19b6ff] px-8 py-4 rounded-lg font-semibold">

Create Free Account

</a>


</section>



<Footer />


</div>

)

}


export default Plans;