const { Router } = require("express");
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwr");

const router = Router();
//CREAR UN NUEVO USUARIO

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contrasenia es obligatorio").isLength({ min: 8 }),
    validarCampos
  ],
  crearUsuario
);

//LOGIN DE USUARIO
router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contrasenia es obligatorio").isLength({ min: 8 }),
    validarCampos
  ],
  loginUsuario
);
//LOGIN DE USUARIO
router.get("/renew", validarJWT,revalidarToken);

module.exports = router;
