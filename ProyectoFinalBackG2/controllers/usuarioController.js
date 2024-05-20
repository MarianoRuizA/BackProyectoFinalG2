import UsuarioModel from "../models/usuarioModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// Obtener todos los usuarios
const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.find();
        res.status(200).json(usuarios); // OK
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Modificar un usuario
// const updateUsuario = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { nombre, apellido, email, contrasenia, isAdmin, isSuspended } = req.body;

//         // Verifica si la contraseña proporcionada ya está cifrada
//         let contraseniaCifrada = contrasenia;
//         if (contrasenia && !contrasenia.startsWith('$2a$')) { // Verifica si la contraseña no comienza con el prefijo de bcrypt
//             const salt = await bcrypt.genSalt(10);
//             contraseniaCifrada = await bcrypt.hash(contrasenia, salt);
//         }

//         // Actualiza el usuario en la base de datos
//         const usuario = await UsuarioModel.findByIdAndUpdate(
//             id,
//             { nombre, apellido, email, contrasenia: contraseniaCifrada, isAdmin, isSuspended },
//             { new: true }
//         );

//         if (!usuario) {
//             return res.status(404).json({ message: "Usuario no encontrado" });
//         }
//         res.status(200).json(usuario); // OK
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error interno del servidor" });
//     }
// };
// Modificar un usuario
const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, email, isAdmin, isSuspended } = req.body;

        // Actualiza el usuario en la base de datos
        const usuario = await UsuarioModel.findByIdAndUpdate(
            id,
            { nombre, apellido, email, isAdmin, isSuspended },
            { new: true }
        );

        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.status(200).json(usuario); // OK
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


// Eliminar un usuario
const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await UsuarioModel.findByIdAndDelete(id);
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(usuario); // OK
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Crear/Registrar usuario
const registrarUsuario = async (req, res) => {
    try {
        const { nombre, apellido, email, contrasenia, isAdmin, isSuspended } = req.body;
        const salt = await bcrypt.genSalt(10);
        const contraseniaHash = await bcrypt.hash(contrasenia, salt);
        const usuario = new UsuarioModel({
            nombre,
            apellido,
            email,
            contrasenia: contraseniaHash,
            isAdmin,
            isSuspended
        });
        await usuario.save();
        res.status(201).json({ message: "Usuario registrado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error al registrar el usuario" });
    }
};

// Login usuario
const login = async (req, res) => {
    try {
        const { email, contrasenia } = req.body;
        const usuario = await UsuarioModel.findOne({ email });
        if (!usuario) {
            return res
                .status(401)
                .json({ message: "Usuario y/o Contraseña incorrecto" }); // Unauthorized
        }

        const comparoContra = await bcrypt.compare(contrasenia, usuario.contrasenia);
        if (!comparoContra) {
            return res
                .status(401)
                .json({ message: "Usuario y/o Contraseña incorrecto" });
        }

        // Creo token
        const token = jwt.sign(
            {
                id: usuario._id,
                email: usuario.email,
                isAdmin: usuario.isAdmin,
                isSuspended: usuario.isSuspended
            },
            process.env.SECRET_KEY,
            {
                expiresIn: 86400, // 24 horas en segundos
            }
        );
        console.log("-> TOKEN CREADO: ", token)
        res.status(200).json({ token }); // OK
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error de servidor" });
    }
};

export default {
    getAllUsuarios,
    updateUsuario,
    deleteUsuario,
    registrarUsuario,
    login
};
