const initialState = { // Här bestämmer vi allt som vi vill spara i vår Redux store i formen av ett objekt
  products: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) { // Fungerar som en if-sats baserat på ett scenario så går den in i ett case
      case 'ADD_PRODUCT': // Om case är INCREASE som kommer från type i vår action
          return {
              ...state, // Kopiera ditt state
              products: [...state.products, action.payload] // Välj vilken del i din store du vill uppdatera, i detta fall counter
          }
      case 'RESET_PRODUCTS': {

      }
      
      default:
          return state
  }
}

export default reducer;