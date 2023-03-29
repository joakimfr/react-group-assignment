function addProduct(product) {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}

function resetProducts() {
  return {
    type: 'RESET_PRODUCTS',
  }
}

export { addProduct, resetProducts }