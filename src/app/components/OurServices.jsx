import React from "react";

async function getServices() {
  const res = await fetch(
    "http://localhost:1337/api/services?populate=image",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  return res.json();
}

function ServiceItem({ item }) {
  return (
    <div className="text-center mb-[50px] mt-[20px]">
      <img
        className="block mx-auto w-[75px] object-cover mb-4"
        src={`http://localhost:1337${item.image?.url}`}
        alt={item.name}
      />
      <h4 className="text-white text-custom20 font-[700] my-2">
        {item.name}
      </h4>
      <p className="text-white text-custom16 leading-[30px] mb-[20px]">
        {item.title}
      </p>
    </div>
  );
}

export default async function OurServices() {
  const response = await getServices();
  const services = response.data || [];

  // تقسيم الخدمات يمين / شمال
  const middle = Math.ceil(services.length / 2);
  const leftServices = services.slice(0, middle);
  const rightServices = services.slice(middle);

  return (
    <div className="container py-[100px]" id="services">
      {/* TITLE */}
      <div className="text-center">
        <h2 className="text-white text-custom28 font-[700] my-2 px-4">
          خدماتنا
        </h2>
        <img
          className="w-[200px] mb-[100px] mx-auto block"
          src="/images/line-4.png"
          alt=""
        />
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-12 items-center">
        {/* LEFT */}
        <div className="col-span-3">
          {leftServices.map((item) => (
            <ServiceItem key={item.id} item={item} />
          ))}
        </div>

        {/* CENTER IMAGE (STATIC) */}
        <div className="col-span-6">
          <div className="block mx-auto w-[80%]">
            <img src="/images/serv.png" alt="" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-3">
          {rightServices.map((item) => (
            <ServiceItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
