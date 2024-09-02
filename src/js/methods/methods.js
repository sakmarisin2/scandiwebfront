import { store } from '../store';

export const SetType = (event) =>{
    store.commit('SetCurrentType',event.target.value)
}

const showAlert = (message) => {
    alert(message);
};

const validateRequiredFields = (fields) => {
    return fields.every(field => field);
};

const validateNumeric = (value) => !isNaN(value) && value > 0;

const validateDVDAttributes = (attributes) => {
    return attributes.size && validateNumeric(attributes.size);
};

const validateFurnitureAttributes = (attributes) => {
    const { height, width, length } = attributes;
    return height && width && length &&
           validateNumeric(height) &&
           validateNumeric(width) &&
           validateNumeric(length);
};


const validateBookAttributes = (attributes) => {
    return attributes.weight && validateNumeric(attributes.weight);
};


export const validateForm = () => {
    const { SKU, name, price, attributes } = store.state.formData;
    const currentType = store.state.currentType;


    if (!validateRequiredFields([SKU, name, price])) {
        showAlert("Please, submit required data");
        return false;
    }
    if (!isNaN(name)) {
        showAlert("Please, provide the data of indicated type");
        return false;
    }
    if (!validateNumeric(price)) {
        showAlert("Please, provide the data of indicated type");
        return false;
    }

    switch (currentType) {
        case "DVD":
            if (!validateDVDAttributes(attributes)) {
                showAlert("Please, submit required data or provide valid data for DVD");
                return false;
            }
            break;
        case 'Furniture':
            if (!validateFurnitureAttributes(attributes)) {
                showAlert("Please, submit required data or provide valid data for Furniture");
                return false;
            }
            break;
        case 'Book':
            if (!validateBookAttributes(attributes)) {
                showAlert("Please, submit required data or provide valid data for Book");
                return false;
            }
            break;
        default:
            showAlert("Invalid type selected");
            return false;
    }
    
    return true;
};