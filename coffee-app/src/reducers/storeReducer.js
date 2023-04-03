const initialState = { 
  products: [],
  orderNumber: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) { 
      case 'ADD_PRODUCT': 
          return {
              ...state, // Kopiera ditt state
              products: [...state.products, action.payload] 
          }
      case 'RESET_PRODUCTS': 
          return {
              ...state,
              products: []
          }
      case 'SAVE_ORDER_NUMBER':
      return {
              ...state,
              orderNumber: action.payload
          }
      case 'REMOVE_PRODUCT':
        const newProducts = state.products.filter(product => product.id !== action.payload)
      return {
        ...state,
        products: newProducts
      }

      
      default:
          return state
  }
}

export default reducer;