"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function ContactUs() {
  const [settings, setSettings] = useState(null);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch("http://localhost:1337/api/setting?populate=*");
        const data = await res.json();
        setSettings(data);
      } catch (error) {
        console.error("خطأ في جلب الإعدادات:", error);
      }
    }
    fetchSettings();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:1337/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: form }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("تم إرسال الرسالة بنجاح ✅");
        setForm({ fullname: "", email: "", phone: "", message: "" });
      } else {
        console.error("خطأ من السيرفر:", data);
        alert(`حصل خطأ ❌: ${data.error?.message || JSON.stringify(data)}`);
      }
    } catch (error) {
      console.error("خطأ في الاتصال بالسيرفر:", error);
      alert(`حصل خطأ في الاتصال ❌: ${error.message}`);
    }
  };

  return (
    <div className="container grid grid-cols-12 gap-8" id="contactUs">
      <div className="col-span-12">
        <h2 className="text-center mb-[75px] text-custom28 my-12 text-white font-[700]">
          تواصل معنا
        </h2>
      </div>
      <div className="col-span-6">
        <form onSubmit={handleSubmit}>
          <label className="text-primary font-[700] text-custom18 block w-full mb-2">
            الاسم بالكامل
          </label>
          <input
            name="fullname"
            type="text"
            className="border border-primary p-[8px] bg-[#2F426E] w-full mb-[30px] rounded-[10px] text-white text-custom14"
            onChange={handleChange}
            value={form.fullname}
          />
          <label className="text-primary font-[700] text-custom18 block w-full mb-2">
            البريد الالكتروني
          </label>
          <input
            name="email"
            type="email"
            className="border border-primary p-[8px] bg-[#2F426E] mb-[30px] w-full rounded-[10px] text-white text-custom14"
            onChange={handleChange}
            value={form.email}
          />
          <label className="text-primary font-[700] text-custom18 block w-full mb-2">
            رقم الهاتف
          </label>
          <input
            name="phone"
            type="tel"
            className="border border-primary text-right text-white p-[8px] bg-[#2F426E] w-full mb-[30px] rounded-[10px] text-custom14"
            onChange={handleChange}
            value={form.phone}
          />
          <label className="text-primary font-[700] text-custom18 block w-full mb-2">
            الرسالة
          </label>
          <textarea
            name="message"
            className="text-white border p-[12px] border-primary resize-none h-[150px] rounded-[12px] outline-none bg-[#2F426E] font-[700] text-custom18 block w-full mb-2"
            onChange={handleChange}
            value={form.message}
          ></textarea>
          <button
            type="submit"
            className='border border-primary w-[200px] p-[10px] text-custom14 bg-[#2F426E] my-6 mb-[30px] rounded-[10px] text-white text-custom14"'
          >
            ارسل الان
          </button>
        </form>
      </div>
      <div className="col-span-6">
        <div className="block">
          <h4 className="text-white mb-2 text-custom18 font-[700]">
            نأخذك في رحلة لا ت ُنسى من النكهات الأصيلة والتجارب الشهية
          </h4>
          <Image src="/images/line-4.png" alt="" width={300} height={50} />
        </div>
        <div className="block my-6">
          <Image className="mb-4" src="/images/contact-1.png" alt="" width={50} height={20} />
          <h5 className="text-custom22 mb-2 font-[700] text-primary">الهاتف</h5>
          <p className="text-custom16 text-white">
            {settings ? settings.data.phone : "جاري التحميل..."}
          </p>
        </div>
        <div className="block my-6">
          <Image className="mb-4" src="/images/contact-2.png" alt="" width={50} height={20} />
          <h5 className="text-custom22 mb-2 font-[700] text-primary">البريد الالكتروني</h5>
          <p className="text-custom16 text-white">{settings ? settings.data.email : "جاري التحميل..."}
</p>
        </div>
        <div className="block my-6">
          <Image className="mb-4" src="/images/contact-3.png" alt="" width={50} height={20} />
          <h5 className="text-custom22 mb-2 font-[700] text-primary">مقر الشركة</h5>
          <p className="text-custom16 text-white"> {settings ? settings.data.address : "جاري التحميل..."} </p>
        </div>
      </div>
    </div>
  );
}
