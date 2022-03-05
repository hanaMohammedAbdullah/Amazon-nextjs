import Header from "./../Components/Header.js";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";
import Currency from "react-currency-formatter";
import Footer from "../Components/Footer";

function Checkout() {
  const session = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const getCount = () => {
    let count = 0;
    items?.forEach((element) => {
      count += element.quantity;
    });
    return count;
  };

  // console.log(result);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto  ">
        {/* Left Section */}
        <div className="m-5 flex-grow shadow-sm">
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b p-4 ">
              {" "}
              {items.length === 0
                ? "Your Amazon Cart is empty."
                : "Your Shopping "}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>

        {/* Right Section */}

        <div
          className={`mb-5  mt-5 flex flex-col w-96 h-40 bg-white p-10 shadow-md  `}
        >
          <>
            <h2 className="whitespace-nowrap">
              Subtotal ({getCount()}) items:{" "}
              <span className="font-bold">
                <Currency quantity={total} />
              </span>
            </h2>
            <button
              role="link"
              disabled={!session}
              className={`button_proceed  mt-2  ${
                !session &&
                "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
            >
              {!session ? "Sign in to Checkout" : "Proceed to checkout"}
            </button>
          </>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Checkout;
