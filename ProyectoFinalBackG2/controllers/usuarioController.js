import UsuarioModel from "../models/usuarioModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, email, isAdmin, isSuspended } = req.body;

        const usuario = await UsuarioModel.findByIdAndUpdate(
            id,
            { nombre, apellido, email, isAdmin, isSuspended },
            { new: true }
        );

        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.status(200).json(usuario); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await UsuarioModel.findByIdAndDelete(id);
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(usuario); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

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

const login = async (req, res) => {
    try {
        const { email, contrasenia } = req.body;
        const usuario = await UsuarioModel.findOne({ email });
        if (!usuario) {
            return res
                .status(401)
                .json({ message: "Usuario y/o Contraseña incorrecto" }); 
        }

        const comparoContra = await bcrypt.compare(contrasenia, usuario.contrasenia);
        if (!comparoContra) {
            return res
                .status(401)
                .json({ message: "Usuario y/o Contraseña incorrecto" });
        }

        const token = jwt.sign(
            {
                id: usuario._id,
                email: usuario.email,
                isAdmin: usuario.isAdmin,
                isSuspended: usuario.isSuspended
            },
            process.env.SECRET_KEY,
            {
                expiresIn: 86400,
            }
        );
        console.log("-> TOKEN CREADO: ", token)
        res.status(200).json({ token });
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
