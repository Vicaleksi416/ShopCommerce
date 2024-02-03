export default function CartTile({ cartItem }) {
  return (
    <>
      <tbody>
        <tr>
          <td className="relative h-[10vh] w-[10vw]">
            <img src={cartItem?.image} alt={cartItem?.title} />
          </td>
          <td className="max-w-[30vw] pl-4">
            <h1 className="text-xl font-bold p-2">{cartItem.title}</h1>
          </td>
          <td>
            <div class="flex items-center">
              <span class="flex justify-center items-center h-8 w-8 border border-gray-400">
                <button class="w-full h-full">-</button>
              </span>
              <span class="flex justify-center items-center h-8 w-8 border border-gray-400">
                1
              </span>
              <span class="flex justify-center items-center h-8 w-8 border border-gray-400">
                <button class="w-full h-full">+</button>
              </span>
            </div>
          </td>
          <td className="text-rose-600">$ {cartItem.price}</td>
        </tr>
      </tbody>
    </>
  );
}
