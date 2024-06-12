import jwt from "jsonwebtoken";

const comprobacionJwt = (req, res, next) => {
  const token = req.headers.authorization;
  console.log("--> TOKEN:", token)

  if (!token) {
    return res.status(401).json({ message: "Acceso denegado: token no proporcionado" }); 
  }

  try {
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verifyToken; 

    if (verifyToken.isAdmin) {
      next(); 
    } else {
      return res
        .status(403)
        .json({ message: "Acceso denegado: no es Administrador" }); 
    }
  } catch (error) {
    res.status(401).json({ message: "Token inválido" }); 
  }
};

export default comprobacionJwt;
