import React from "react";

async function getOurMessage() {
  const res = await fetch("http://localhost:1337/api/messages?populate=*");
  const data = await res.json();
  console.log(data);
  return data;
}

export default async function OurMessage() {
  const message = await getOurMessage();

  return (
    <div className="container grid grid-cols-12 my-[70px] ">
      <div className="col-span-5 relative">
        <img src={`http://localhost:1337${message.data[0].image.url}`} alt="" />
        <div className="absolute top-0 left-[-100px]">
          <img src="/images/line-3.png" alt="" />
        </div>
      </div>
      <div className="col-span-7">
        <div className="block w-full">
          <h5 className="text-white text-end text-custom26 font-[700] my-2 px-4">
            رسالتنا
          </h5>
          <img className="float-end" src="/images/line-1.png" alt="" />
        </div>
        <p className="text-white leading-[30px] text-center mt-[70px] text-custom16 my-6 w-[80%] block mx-auto">
          {message.data[0].title}
        </p>
      </div>
    </div>
  );
}
