import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import ProductTile from '../components/ProductTile';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProductList() {
    setLoading(true);
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();

    if (data) {
      setLoading(false);
      setProducts(data);
      console.log(data);
    }
  }

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex min-h-screen w-full justify-center items-center">
          <Circles
            height={'120'}
            width={'120'}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-f-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-x-6xl mx-auto p-3">
          {products && products.length
            ? products.map(p => <ProductTile key={p?.id} product={p} />) //TODO: unique id giving
            : null}
        </div>
      )}
    </div>
  );
}
