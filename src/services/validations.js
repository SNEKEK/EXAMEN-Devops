// TODO: Add here the function to validate
const isEmpty = (label) => !label || label.length === 0;

const validations = (name) => {
    if (validateLength(name) && validateSpecial(name) && validatenumber(name))
        return true;
    return false;
};

const validateLength = (name) => {
    return /[0-9a-zA-Z]{8,}/.test(name);
};

const validateSpecial = (name) => {
    return /^(?=.*[@#$%^&+=]).*$/.test(name);
};

const validatenumber = (name) => {
    return /.*[0-9].*/.test(name);
};

exports.isEmpty = isEmpty;
exports.validations = validations();