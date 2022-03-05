import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";

import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";

function header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  console.log(session);
  const getCount = () => {
    let count = 0;
    items?.forEach((element) => {
      count += element.quantity;
    });
    return count;
  };

  // console.log(session.user.name);
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-3">
        {/* Image */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 link ">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={45}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-center pl-2  pr-5 hidden lg:inline-flex">
          <LocationMarkerIcon className="h-7 w-6 cursor-pointer text-gray-200" />
          <div className="cursor-pointer pl-2   ">
            <div className=" text-gray-200"> Deliver to</div>
            <div className="font-bold text-gray-50">Iraq</div>
          </div>
        </div>
        {/* Search bar */}
        <div className="hidden sm:flex items-center h-12 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow rounded-l-md focus:outline-none flex-shrink"
          />
          <SearchIcon className="h-16 p-4" />
        </div>
        {/* Rght Section */}
        <div className="flex text-white   items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link   ">
            {" "}
            <p className=" text-base ">
              {" "}
              {session ? `Hello,${session.user.name}` : `Sign In`}{" "}
            </p>
            <p className="font-bold md:text-lg"> Account and Lists</p>
          </div>
          <div className="link text-base hidden lg:inline-flex flex-col">
            <p> Return </p>
            <p className="font-bold md:text-lg"> And Orders</p>
          </div>
          <div
            className="link relative flex items-center"
            onClick={() => router.push("/checkout")}
          >
            <span className="bg-yellow-400 rounded-full absolute top-0 right-0 md:right-10 h-4 w-4 text-center text-black font-bold">
              {getCount()}
              <h1></h1>
            </span>
            <ShoppingCartIcon className="h-10 cursor-pointer" />
            <p className="hidden md:inline font-bold md:text-sm mt-2">
              {" "}
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex leading-relaxed	 font-base p-2 pl-7 items-center bg-amazon_blue-light text-white text-lg md:shadow-inner">
        <p className="link flex items-center">
          {" "}
          <MenuIcon className="h-6 mr-1" /> All
        </p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link ">Sell</p>
        <p className="link">Gift Cards</p>
        <p className="link hidden lg:inline-flex">Customer Service</p>
        <p className="link hidden lg:inline-flex">Browser History</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default header;
