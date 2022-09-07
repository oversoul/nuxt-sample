export const state = () => ({
  items: [],
  currentPackage: null,
  filtered: [],
  filter: {
    search: '',
  },
})

export const actions = {
  getById({ state, commit }, id) {
    commit('findById', id);
  },
  async filterSearch ({ commit, dispatch }, search) {
    await commit('setFilterSearch', search);
  },
  createPackage({ state, commit }, name) {
    commit('createPackage', {name, products: []});
  },
  removePackage({state, commit}, id) {
    commit('deletePackage', id);
  },
  addProductToPackage({ state, commit }, data) {
    commit('addProduct', data);
  },
  removeProductFromPackage({state, commit}, id, product) {
    commit('removePackageProduct', id, product);
  },
  cartToPackage({ state, commit }, { name, products }) {
    commit('createPackage', { name, products });
  }
}

const formatPkg = (pkg) => {
  return {
    id: pkg.id,
    name: pkg.name,
    totalPrice: pkg.totalPrice,
    productCount: pkg.products.length,
  };
}

export const getters = {
  packagesList(state) {
    return state.items.map(pkg => formatPkg(pkg));
  },
  filterPackages(state) {
    const packages = [...state.items];

    if (!state.filter.search) {
      return packages.map(pkg => formatPkg(pkg));
    }

    return packages.filter(
      ({ name }) => name.toLowerCase().includes(state.filter.search.toLowerCase())
    ).map(pkg => formatPkg(pkg));
  },
}

const calculateTotalPrice = (products) => {
  return products.reduce(
    (total, product) => total + product.price * product.quantity, 0
  );
}

export const mutations = {
  findById(state, pkgId) {
    state.currentPackage = state.items.find(item => item.id == pkgId);
  },

  setFilterSearch(state, search) {
    state.filter.search = search;
  },

  createPackage(state, { name, products }) {
    const clonedProducts = products.map(p => ({...p}));

    state.items.push({
      id: state.items.length + 1,
      name,
      products: clonedProducts,
      totalPrice: calculateTotalPrice(products),
    });
  },

  deletePackage(state, id) {
    const index = state.items.findIndex(item => item.id == id);
    if (index > -1) {
      state.items.splice(index, 1);
    }
  },

  addProduct(state, data) {
    const pkg = state.items.find(item => item.id === data.packageId);
    const product = pkg.products.find(({ id }) => data.product.id == id);

    if (product) {
      product.quantity++;
    } else {
      pkg.products.push(data.product);
    }

    pkg.totalPrice = calculateTotalPrice(pkg.products);
  },

  removePackageProduct(state, id, product) {
    const pkg = state.items.find(item => item.id === id);
    const index = pkg.products.findIndex(({ id }) => product.id === id);
    if (index > -1) {
      pkg.products.splice(index, 1);
      pkg.totalPrice = calculateTotalPrice(pkg.products);
    }
  }
}
