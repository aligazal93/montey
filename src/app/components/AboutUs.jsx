import React from 'react';


async function getAboutData() {
  const res = await fetch("http://localhost:1337/api/about-us?populate=*");
  const data = await res.json();
  console.log(data[0])
  return data;
}

export default async function AboutUs() {
  const aboutData = await getAboutData();
  return (
    <div className="container my-[100px] grid grid-cols-12 gap-6" id="aboutUs">
      <div className="col-span-12">
        <h2 className="text-center mb-[75px] mt-[50px] text-custom22 text-white font-[700]">
          عن مونتي
        </h2>
      </div>
      <div className="col-span-6">
<img
  className="w-[90%] block mx-auto rounded-[12px]"
  src={`http://localhost:1337${aboutData.data[0].image.url}`}
  alt={aboutData.data[0].image.alternativeText || "About Image"}
/>
      </div>
      <div className="col-span-6">
        <h4 className="text-primary text-custom20 font-[700]">
         {aboutData.data[0].title}
        </h4>
        <p className="text-white leading-[30px] text-custom16 my-6">
         {aboutData.data[0].content}
        </p>

        <div className="flex gap-4 items-center">
          <img src="/images/line-h.png" />
          <p className="text-white leading-[30px] text-custom16 my-6">
            {aboutData.data[0].paragraph1}
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <img src="/images/line-h.png" />
          <p className="text-white leading-[30px] text-custom16 my-6">
            {aboutData.data[0].paragraph2}
          </p>
        </div>

      </div>
    </div>
  );
}
