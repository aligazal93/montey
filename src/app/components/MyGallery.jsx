"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function MyGallery() {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function getAllImages() {
      const res = await fetch(
        "http://localhost:1337/api/galleries?populate=images",
        { cache: "no-store" }
      );

      const data = await res.json();

      const formattedImages = data.data.flatMap((gallery) =>
        gallery.images.map((img) => ({
          src: `http://localhost:1337${img.url}`,
          alt: img.name || "gallery image",
        }))
      );

      setImages(formattedImages);
    }

    getAllImages();
  }, []);

  return (
    <div
      className="container grid grid-cols-12 py-[100px] relative"
      id="gallery"
    >
      {/* TITLE */}
      <div className="col-span-12">
        <h2 className="text-white text-center text-custom28 font-[700] my-2 px-4">
          معرض الصور
        </h2>
        <img
          className="w-[200px] mb-[100px] mx-auto block"
          src="/images/line-4.png"
          alt=""
        />
      </div>

      {/* EFFECT IMAGE */}
      <div className="absolute top-0 right-0">
        <Image src="/images/eff-2.png" alt="" width={200} height={100} />
      </div>

      {/* GALLERY */}
      <div className="col-span-12">
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="cursor-pointer"
            >
<img
  src={img.src}
  alt={img.alt}
  className="w-full h-auto"
/>
            </div>
          ))}
        </div>

        {/* LIGHTBOX */}
        <Lightbox
          open={open}
          index={index}
          close={() => setOpen(false)}
          slides={images}
        />
      </div>
    </div>
  );
}
