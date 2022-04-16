const { check } = require('express-validator');

module.exports = [
    check("name")
    .notEmpty()
    .withMessage("campo requerido"),
    check("color")
    .notEmpty()
    .withMessage("campo requerido"),
    check("email")
    .notEmpty()
    .withMessage("campo requerido")
    .isEmail()
    .withMessage('ingrese un email válido'),

    check("age")
    .isNumeric()
    .withMessage("Solo numeros")
]