import Head from "next/head";
import Banner from "../Components/Banner";
import ProductFeed from "../Components/ProductFeed";
import Header from "./../Components/Header";
import Footer from "./../Components/Footer";
export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Amazon Clone</title>
      </Head>
      <Header />
      <main>
        <Banner />
        <ProductFeed products={products} />
      </main>
      <Footer />
    </div>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
