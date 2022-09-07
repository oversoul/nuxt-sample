export const state = () => ({
  items: [],
})

export const actions = {
  addProductToCart ({ state, commit }, product) {
    const cartItem = state.items.find(item => item.id === product.id);
    if (!cartItem) {
      commit('pushProductToCart', product);
    } else {
      commit('incrementItemQuantity', cartItem);
    }
  },
  removeProduct({state, commit}, id) {
    const cartItem = state.items.find(item => item.id === id);
    if (cartItem.quantity > 1) {
      commit('decrementItemQuantity', cartItem);
    } else {
      commit('removeProductFromCart', id);
    }
  }
}

export const getters = {
  cartTotalPrice(state, getters) {
    return state.items.reduce(
      (total, product) => total + product.price * product.quantity, 0
    );
  },
  cartItems(state) {
    return state.items;
  },
  cartCount(state) {
    return `${state.items.length}`;
  }
}

export const mutations = {
  pushProductToCart(state, product) {
    state.items.push({ ...product, quantity: 1 });
  },
  removeProductFromCart(state, product) {
    const index = state.items.findIndex(item => item.id === product);
    state.items.splice(index, 1);
  },
  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity++;
  },
  decrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity--;
  },
}
