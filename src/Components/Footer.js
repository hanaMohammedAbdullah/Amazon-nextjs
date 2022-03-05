import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-col leading-relaxed py-9  items-start justify-around  font-base p-2 pl-7 items-center bg-amazon_blue-light text-white text-lg">
      <div className="border-b justify-around pb-24 w-full flex border-blue-50">
        <div className="flex flex-col mt-5 ">
          <p className="font-bold">Get to Know Us</p>
          <p className="h_u">Careers</p>
          <p className="h_u">Blog</p>
          <p className="h_u">About Amazon</p>
          <p className="h_u">Investor Relations</p>
          <p className="h_u">Amazon Devices</p>
          <p className="h_u">Amazon Science</p>
        </div>
        <div className="hidden md:inline  flex flex-col mt-5 ">
          <p className="font-bold">Make Money with Us</p>
          <p className="h_u">Sell products on Amazon</p>
          <p className="h_u">Sell on Amazon Business</p>
          <p className="h_u">About Amazon</p>
          <p className="h_u">Sell apps on Amazon</p>
          <p className="h_u">Become an Affiliate</p>
          <p className="h_u">Advertise Your Products</p>
          <p className="h_u">Self-Publish with Us</p>
          <p className="h_u">Host an Amazon Hub</p>
          <p className="h_u">›See More Make Money with Us</p>
        </div>
        <div className="hidden md:inline  flex flex-col mt-5  ">
          <p className="font-bold"> Amazon Payment Products</p>
          <p className="h_u">Amazon Business Card</p>
          <p className="h_u">Shop with Points</p>
          <p className="h_u">Reload Your Balance</p>
          <p className="h_u">Amazon Currency Converter</p>
        </div>
        <div className="flex flex-col mt-5 ">
          <p className="font-bold"> Let Us Help You</p>
          <p className="h_u">Amazon and COVID-19</p>
          <p className="h_u">Your Orders</p>
          <p className="h_u">Shipping Rates & Policies</p>
          <p className="h_u">Manage Your Content and Devices</p>
          <p className="h_u">Amazon Assistant</p>
          <p className="h_u">Help</p>
        </div>
      </div>
      <div className="flex mt-14 m-auto  flex-grow sm:flex-grow-0 link ">
        <Image
          onClick={() => router.push("/")}
          src="https://links.papareact.com/f90"
          width={150}
          height={45}
          objectFit="contain"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Footer;
