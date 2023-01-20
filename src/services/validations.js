// TODO: Add here the function to validate
const validations = (name) => {
    return validateTag(name);
};

const isEmpty = (label) => !label || label.length === 0;

const validateTag = (name) => {
    return /[0-9a-zA-Z]{8,}/.test(name);
};

exports.isEmpty = isEmpty;

module.exports = validations;
