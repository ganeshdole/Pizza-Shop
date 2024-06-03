import { useEffect } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log(cart.items); // Add this line to debug the items
    let totalAmount = 0;
    for (const item of cart.items) {
      totalAmount += parseFloat(item["price"]) * item["quantity"];
    }
    console.log("Total Amount:", totalAmount);
  }, [cart.items]);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border border-gray-400">Sr:No</th>
            <th className="py-2 px-4 border border-gray-400">Pizza</th>
            <th className="py-2 px-4 border border-gray-400">Quantity</th>
            <th className="py-2 px-4 border border-gray-400">Total Amount</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {cart.items.map((item, index) => (
            <tr
              key={index}
              className="bg-white hover:bg-gray-100 transition-colors duration-200"
            >
              <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
              <td className="py-2 px-4 border border-gray-300">
                {item.payload.payload["name"]}
              </td>
              <td className="py-2 px-4 border border-gray-300">
                {item["quantity"]}
              </td>
              <td className="py-2 px-4 border border-gray-300">
                {(
                  item["quantity"] * parseFloat(item.payload.payload["price"])
                ).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
