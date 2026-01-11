import Link from "next/link";
import React from "react";

async function getSettings() {
  const res = await fetch("http://localhost:1337/api/setting?populate=*");
  const data = await res.json();
  return data;
}

export default async function Header() {
  const settings = await getSettings();

  return (
    <div className="container grid grid-cols-12 ">
      <div className="col-span-12">
        <ul className=" py-6 flex items-center gap-8 justify-center w-full">
          <li className="text-white">
            <Link href="#index"> الرئيسية </Link>
          </li>
          <li className="text-white">
            <Link href="#aboutUs"> عن مونتي </Link>
          </li>
          <li className="text-white">
            <Link href="#services"> خدماتنا </Link>
          </li>
          <li className="mx-[50px]">
            <Link href="#index">
              {settings.data.logo && settings.data.logo.length > 0 && (
                <img
                  src={`http://localhost:1337${settings.data.logo[0].url}`}
                  alt="Logo"
                  className="h-8"
                />
              )}
            </Link>
          </li>
          <li className="text-white">
            <Link href="#gallery"> الصور </Link>
          </li>
          <li className="text-white">
            <Link href="#videos"> معرض الفيديو </Link>
          </li>
          <li className="text-white">
            <Link href="#contactUs"> تواصل معنا </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
