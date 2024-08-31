import { createStore } from 'vuex';

export const store = createStore({
  state () {
    return {
      selectedProductIds: [],
      currentType: "DVD",
      formData: {
        SKU: '',
        name: '',
        price: '',
        type: 1,
        attributes: {
            size: null,
        }
      }
    }
  },
  mutations: {
    SetCurrentType (state, type) {
      state.currentType = type

      this.commit('UpdateAttributesType');
    },
    setFormData(state, data) {
        state.formData = { ...state.formData, ...data };
    },
    UpdateAttributesType(state) {
      const { currentType } = state;
      state.formData.attributes = {};

      switch (currentType) {
        case 'DVD':
          state.formData.type = 1
          state.formData.attributes = { size: null };
          break;
        case 'Book':
          state.formData.type = 3
          state.formData.attributes = { weight: null };
          break;
        case 'Furniture':
          state.formData.type = 2
          state.formData.attributes = { height: null, width: null, length: null };
          break;
        default:
          state.formData.attributes = {};
      }
    },
    toggleProductSelection(state, { id, selected }) {
        if (selected) {
            if (!state.selectedProductIds.includes(id)) {
                state.selectedProductIds.push(id);
            }
        } else {
            state.selectedProductIds = state.selectedProductIds.filter(selectedId => selectedId !== id);
        }
    }
  }
})