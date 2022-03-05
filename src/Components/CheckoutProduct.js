import Image from "next/image";
// import { StarIcon } from "@heroicons/react/solid";
import { ArrowCircleUpIcon, ArrowCircleDownIcon } from "@heroicons/react/solid";

import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromBasket,
} from "../slices/basketSlice";
function CheckoutProduct({
  id,
  title,
  price,
  description,
  image,
  hasPrime,
  quantity,
}) {
  const dispatch = useDispatch();

  const increaseProduct = () => {
    dispatch(incrementQuantity(id));
  };

  const decrementProduct = () => {
    dispatch(decrementQuantity(id));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className=" flex py-2 border-bottom border-gray-900">
      <div className="flex-grow-0 flex-shrink-0 mr-2 object-contain w-56  ">
        <Image
          src={image}
          height={200}
          width={200}
          objectFit="contain"
          className="object-contain w-full"
        />
      </div>

      {/* middle */}

      <div className="font-semibold text-lg; color: rgba(92, 94, 94, 1);">
        <div className="flex flex-col">
          <p>{title}</p>

          <p className="hidden flex-shrink lg:inline-flex text-xs my-2 line-clamp-3  ">
            {description}
          </p>
          <Currency quantity={price} />
          {hasPrime && (
            <div className="flex items-center space-x-2">
              <img
                loading="lazy"
                className="w-12"
                src="https://links.papareact.com/fdw"
                alt=""
              />
              <p className="text-xs text-gray-500">Free Next-Day Delivery</p>
            </div>
          )}
        </div>

        <div className="flex  flex-col-2   justify-center  ">
          <div className="flex  justify-evenly items-center ">
            <span>
              {" "}
              <ArrowCircleUpIcon
                className="h-10 mx btn_arrow cursor-pointer"
                onClick={increaseProduct}
              />
            </span>
            <span className="font-bold">{quantity}</span>
            <span>
              <ArrowCircleDownIcon
                className="h-10 btn_arrow cursor-pointer"
                onClick={decrementProduct}
              />
            </span>
            <button className="btn " onClick={removeItemFromBasket}>
              Remove from Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
