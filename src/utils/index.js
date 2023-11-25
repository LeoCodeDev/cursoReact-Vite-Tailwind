/**
 * This function calculates the total price of a new order
 * @param {Array} products cartProducts: Array of objects
 * @returns {number} Total Price
 */

const totalPrice = (products) => {
  const total = products.reduce((acc, item) => {
    return acc + item.price
  },0)

  return total
}

export { totalPrice }
