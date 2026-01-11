import React from 'react';

async function getOurVision() {
  const res = await fetch("http://localhost:1337/api/vision?populate=*");
  const data = await res.json();
  console.log(data)
  return data;
}



export default async function OurVisions() {
  const vision = await getOurVision();
  return (
    <div className="container grid grid-cols-12 my-[70px] ">
      <div className="col-span-7">
        <div className="block w-full">
          <h5 className="text-white text-custom26 font-[700] my-2 px-4">
            رؤيتنا
          </h5>
          <img src="/images/line-1.png" alt="" />
        </div>
        <p className="text-white leading-[30px] text-custom16 my-6 w-[80%] block">
          {vision.data[0].content}
        </p>
      </div>
      <div className="col-span-5 relative">
        <img src={`http://localhost:1337${vision.data[0].image.url}`} alt="" />
        <div className="absolute top-0 right-[-100px]">
          <img src="/images/line-3.png" alt="" />
        </div>
      </div>
    </div>
  );
}
