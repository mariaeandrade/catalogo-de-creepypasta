import dados from "../models/dados.js";
const { creepypastas } = dados;

const getAllCreepypastas = (req, res) => {
    const {titulo, autor, categoria, tamanho, dataPublicacao, popularidade, origem, verificado } = req.query;
    let resultado = creepypastas;

    if (categoria) {
        resultado = resultado.filter(c => 
            c.nome.toLowerCase().includes(categoria.toLowerCase())
        );
    }

    if (popularidade) {
        resultado = resultado.filter(c => 
            c.nome.toLowerCase().includes(popularidade.toLowerCase())
        );
    }
    if (origem) {
        resultado = resultado.filter(c => 
            c.nome.toLowerCase().includes(origem.toLowerCase())
        );
    }
    if (tamanho) {
        resultado = resultado.filter(c => 
            c.nome.toLowerCase().includes(tamanho.toLowerCase())
        );
    }
    res.status(200).json({
        total: resultado.length,
        data: resultado
    })
};

const getCreepypastaById = (req, res) => {
    const id = parseInt(req.params.id);
    const creepypasta = creepypastas.find(c => c.id === id);

    if (creepypasta) {
        res.status(200).json({
            success: true,
            creepypasta: creepypasta
        })
    }

    res.status(400).json({
        success: false,
        message: "creepypasta nao encontrado"
    })
}

const creatCreepypasta = (req, res) => {
    const {titulo, autor, categoria, tamanho, dataPublicacao, popularidade, origem, verificado } = req.body;

    const tamanhoCreepypasta = [ 10500, 3800, 82000, 9500, 4200, 8800, 2700, 1900, 4500, 11000];

    if (!titulo) {
        return res.status(400).json({
            success: false,
            message: `O campo titulo é obrigatorio`
        });
    }

    if (!autor) {
        return res.status(400).json({
            success: false,
            message: `O campo autor é obrigatorio`
        });
    }

    if (!categoria) {
        return res.status(400).json({
            success: false,
            message: `O campo categoria é obrigatorio`
        });
    }

    if (!tamanho) {
        return res.status(400).json({
            success: false,
            message: `O campo tamanho é obrigatorio`
        });
    }

    if (!dataPublicacao) {
        return res.status(400).json({
            success: false,
            message: `O campo dataPublicacao é obrigatorio`
        });
    }

    if (!popularidade) {
        return res.status(400).json({
            success: false,
            message: `O campo popularidade é obrigatorio`
        });
    }

    if (!origem) {
        return res.status(400).json({
            success: false,
            message: `O campo origem é obrigatorio`
        });
    }

    if (tamanhoCreepypasta < 100)
        return res.status(400).json({
            success: false,
            message: "O creepypasta deve ter tamanho superior a 100"
        })
}


export {getAllCreepypastas, getCreepypastaById, creatCreepypasta};