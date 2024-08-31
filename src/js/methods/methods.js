import { store } from '../store';

export const SetType = (event) =>{
    store.commit('SetCurrentType',event.target.value)
}

export const validateForm = () => {
    const { SKU, name, price, attributes } = store.state.formData;
    const currentType = store.state.currentType;

    if (!SKU || !name || !price) {
        alert("Please, submit required data");
        return false;
    } else if (!isNaN(name)) {
        alert("Please, provide the data of indicated type");
        return false;
    } else if (isNaN(price) || price <= 0 ||price == 0) {
        alert("Please, provide the data of indicated type");
        return false;
    }

    switch (currentType) {
        case "DVD":
            if (!attributes.size) {
                alert("Please, submit required data");
                return false;
            }else if (attributes.size <= 0 || attributes.size == 0 || isNaN(attributes.size)) {
                alert("Please, provide the data of indicated type");
                return false;
            }
            break;
        case 'Furniture':
            if (!attributes.height || !attributes.width || !attributes.length) {
                alert("Please, submit required data");
                return false;
            } else if (
                isNaN(attributes.height) ||
                isNaN(attributes.width) ||
                isNaN(attributes.length) ||
                attributes.height <= 0 ||
                attributes.width <= 0 ||
                attributes.length <= 0 ||
                attributes.height == 0 ||
                attributes.width == 0 ||
                attributes.length == 0
            ) {
                alert("Please, provide the data of indicated type");
                return false;
            }
            break;
        case 'Book':
            if (!attributes.weight) {
                alert("Please, submit required data");
                return false;
            } else if (attributes.weight <= 0 || attributes.weight == 0 || isNaN(attributes.weight)) {
                alert("Please, provide the data of indicated type");
                return false;
            }
            break;
    }
    return true;
};
