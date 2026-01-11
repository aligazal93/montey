import Link from 'next/link';
import React from 'react';

export default function Intro() {
  return (
    <div className="text-center" id="index">
      <img
        className="object-cover w-[70%] mx-auto block"
        src="/images/index.png"
        alt=""
      />
    </div>
  );
}
