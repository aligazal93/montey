import Image from "next/image";
import React from "react";

async function getOurVideos() {
  const res = await fetch("http://localhost:1337/api/videos?populate=*");
  const data = await res.json();
  console.log(data);
  return data;
}

const getEmbedUrl = (url) => {
  if (!url) return "";
  const videoId = url.split("v=")[1];
  return `https://www.youtube.com/embed/${videoId}`;
};

export default async function OurVideos() {
  const videos = await getOurVideos();
  return (
    <div
      className="container grid grid-cols-12 py-[100px] gap-8 relative"
      id="videos"
    >
      <div className="col-span-12">
        <h2 className="text-white text-center text-custom28 font-[700] my-2 px-4">
          معرض الفيديو
        </h2>
        <img
          className="w-[200px] mb-[100px] mx-auto block"
          src="/images/line-4.png"
          alt=""
        />
      </div>

      <div className="absolute top-0 left-0">
        <Image src="/images/eff.png" alt="" width={200} height={100} />
      </div>

{videos.data.map((video) => (
  <div key={video.id} className="col-span-4">
    <iframe
      width="100%"
      height="300"
      src={getEmbedUrl(video.youtube_url)}
      title="YouTube video"
      frameBorder="0"
      allowFullScreen
    />
  </div>
))}

    </div>
  );
}
