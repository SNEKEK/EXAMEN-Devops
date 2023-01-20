// TODO: Add here the function to validate
const validations = (name) => {
    if (validateLength(name) && validateSpecial(name))
        return true;
    return false;
};

const isEmpty = (label) => !label || label.length === 0;

const validateLength = (name) => {
    return /[0-9a-zA-Z]{8,}/.test(name);
};

const validateSpecial = (name) => {
    return /^(?=.*[@#$%^&+=]).*$/.test(name);
};

exports.isEmpty = isEmpty;

module.exports = validations;
