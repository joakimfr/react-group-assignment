function addProduct(product) {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}

function removeProduct(productId) {
  return {
    type: 'REMOVE_PRODUCT',
    payload: productId
  }
}

function resetProducts() {
  return {
    type: 'RESET_PRODUCTS',
  }
}

function saveOrderNumber(orderNumber) {
  return {
    type: 'SAVE_ORDER_NUMBER',
    payload: orderNumber
  }
}

export { addProduct, resetProducts, saveOrderNumber, removeProduct }