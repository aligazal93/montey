import React from "react";
async function getOurGoals() {
  const res = await fetch("http://localhost:1337/api/goals?populate=*");
  const data = await res.json();
  console.log(data);
  return data;
}
export default async function OurGoals() {
  const goals = await getOurGoals();
  return (
    <div className="container grid grid-cols-12 my-[70px] ">
      <div className="col-span-7">
        <div className="block w-full">
          <h5 className="text-white text-custom26 font-[700] my-2 px-4">
            أهدافنا
          </h5>
          <img className="mb-[50px]" src="/images/line-1.png" alt="" />
        </div>
<ul>
  {goals.data[0].text &&
    goals.data[0].text.flatMap((obj) =>
      Object.values(obj)
        .filter((item) => typeof item === "string" && item.trim() !== "")
    )
    .map((goal, index) => (
      <li
        key={index}
        className="flex gap-4 text-white text-custom18 items-start my-4"
      >
        <img src="/images/mini-logo.png" alt="" />
        {goal}
      </li>
    ))}
</ul>

      </div>
      <div className="col-span-5 relative">
        <img className="mt-[50px]" src={`http://localhost:1337${goals.data[0].image.url}`} alt="" />
        <div className="absolute top-[50px] right-[-100px]">
          <img src="/images/line-3.png" alt="" />
        </div>
      </div>
    </div>
  );
}
