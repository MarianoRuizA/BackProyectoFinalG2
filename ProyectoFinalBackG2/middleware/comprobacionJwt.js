import jwt from "jsonwebtoken";

const comprobacionJwt = (req, res, next) => {
  console.log("--> REQ:", req)
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Acceso denegado: token no proporcionado" }); // Unauthorized
  }

  try {
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verifyToken; // guardar el usuario en el req

    if (verifyToken.isAdmin) {
      next(); // Permite que la solicitud continúe hacia el controlador correspondiente
    } else {
      return res
        .status(403)
        .json({ message: "Acceso denegado: no es Administrador" }); // Forbidden
    }
  } catch (error) {
    res.status(401).json({ message: "Token inválido" }); // Unauthorized
  }
};

export default comprobacionJwt;
