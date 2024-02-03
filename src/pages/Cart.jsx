import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartTile from '../components/CartTile';

export default function Cart() {
  const [cartTotal, setCartTotal] = useState();

  // const state = useSelector(state => state);
  const cart = useSelector(state => state.cart);

  useEffect(
    () => setCartTotal(cart.reduce((acc, cur) => acc + cur.price, 0)),
    [cart]
  );

  console.log(cart, cartTotal);

  return (
    <div>
      {cart && cart.length ? (
        <>
          <div className="flex flex-col w-full justify-center items-center min-h-[80vh]">
            <table className="w-[80vw]">
              <thead>
                <tr className="h-16">
                  <td></td>
                  <td>Item</td>
                  <td>Quantity</td>
                  <td>Price</td>
                </tr>
              </thead>
              {cart.map(cartItem => (
                <CartTile key={cartItem?.id} cartItem={cartItem} />
              ))}
            </table>
            <div className="w-[80vw] flex justify-end p-5">
              <div className="flex flex-col">
                <p className="flex justify-between">
                  <span className="text-gray-800 font-bold text-3xl">
                    Total Items :
                  </span>
                  <span className="text-gray-800 text-3xl">{cart.length}</span>
                </p>
                <p>
                  <span className="text-gray-800 font-bold text-3xl">
                    Total Amount :
                  </span>
                  <span className="text-rose-600 font-bold text-3xl">
                    {' '}
                    $ {cartTotal}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-6xl mb-8">
            Your cart is empty.
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              SHOP NOW !
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

//TODO: add button css
