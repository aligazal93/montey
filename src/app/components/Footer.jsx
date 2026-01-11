import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="container grid grid-cols-1 gap-4">
      <div className="border-t border-primary pt-[70px] mt-[100px]">
        <div className="col-span-12">
          <Image
            className="block mx-auto"
            src="/images/logo.png"
            width={100}
            height={100}
            alt="logo"
          />
          <ul className="flex my-6 justify-center items-center gap-8">
            <li>
              <Link className="text-white" href="#index">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link className="text-white" href="#aboutUs">
                عن مونتي
              </Link>
            </li>
            <li>
              <Link className="text-white" href="#services">
                خدماتنا
              </Link>
            </li>
            <li>
              <Link className="text-white" href="#gallery">
                معرض الصور
              </Link>
            </li>
            <li>
              <Link className="text-white" href="#videos">
                معرض الفيديو
              </Link>
            </li>
            <li>
              <Link className="text-white" href="#contactUs">
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-12">
          <h5 className="text-white py-6 border-t border-primary text-custom14 text-center">
            جميع الحقوق محفوظة لموقع شركة مونتي 2023
          </h5>
        </div>
      </div>
    </div>
  );
}
