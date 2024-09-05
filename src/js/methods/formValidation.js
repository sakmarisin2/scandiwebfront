import { store } from '../store/store';
import {
  showAlert,
  validateBookAttributes,
  validateDVDAttributes,
  validateFurnitureAttributes,
  validateNumeric,
  validateRequiredFields,
} from './alertUtils';

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