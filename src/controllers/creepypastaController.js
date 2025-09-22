import dados from "../models/dados.js"
const {creepypastas} = dados;

const getAllCreepypastas = (req, res) => {
    let resultado = creepypastas;
    res.status(200).json({
        total: resultado.length,
        creepypastas: creepypastas
    });
};

const getCreepypastaById = (req, res) => {
    const id = parseInt(req.params.id)
    const creepypasta = creepypastas.find(c => c.id === id);

    if (!creepypasta) {
        res.status(404).json({
            success: false,
            message: `Creepypasta not found, ${id}`
        })
    }

    res.status(200).json({
        total: creepypastas.length,
        creepypasta: creepypasta
    })
}

export {getAllCreepypastas, getCreepypastaById};