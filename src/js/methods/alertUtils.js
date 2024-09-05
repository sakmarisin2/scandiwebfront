export const showAlert = (message) => {
    alert(message);
};

export const validateRequiredFields = (fields) => {
    return fields.every(field => field);
};

export const validateNumeric = (value) => !isNaN(value) && value > 0;

export const validateDVDAttributes = (attributes) => {
    return attributes.size && validateNumeric(attributes.size);
};

export const validateFurnitureAttributes = (attributes) => {
    const { height, width, length } = attributes;
    return height && width && length &&
           validateNumeric(height) &&
           validateNumeric(width) &&
           validateNumeric(length);
};

export const validateBookAttributes = (attributes) => {
    return attributes.weight && validateNumeric(attributes.weight);
};
