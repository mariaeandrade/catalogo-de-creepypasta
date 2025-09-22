import dados from "../models/dados.js";
const { creepypastas } = dados;

const getAllCreepypastas = (req, res) => {
  const {
    titulo,
    autor,
    categoria,
    tamanho,
    dataPublicacao,
    popularidade,
    origem,
    verificado,
  } = req.query;
  let resultado = creepypastas;

  if (categoria) {
    resultado = resultado.filter((c) =>
      c.categoria.toLowerCase().includes(categoria.toLowerCase())
    );
  }

  if (popularidade) {
    resultado = resultado.filter((c) =>
      c.popularidade.toLowerCase().includes(popularidade.toLowerCase())
    );
  }
  if (origem) {
    resultado = resultado.filter((c) =>
      c.origem.toLowerCase().includes(origem.toLowerCase())
    );
  }
  if (tamanho) {
    resultado = resultado.filter((c) => c.tamanho == tamanho);
  }
  res.status(200).json({
    total: resultado.length,
    data: resultado,
  });
};

const getCreepypastaById = (req, res) => {
  const id = parseInt(req.params.id);
  const creepypasta = creepypastas.find((c) => c.id === id);

  if (creepypasta) {
    res.status(200).json({
      success: true,
      creepypasta: creepypasta,
    });
  }

  res.status(400).json({
    success: false,
    message: "creepypasta nao encontrado",
  });
};

const creatCreepypasta = (req, res) => {
  const {
    titulo,
    autor,
    categoria,
    tamanho,
    dataPublicacao,
    popularidade,
    origem,
    verificado,
  } = req.body;

  const tamanhoCreepypasta = [
    10500, 3800, 82000, 9500, 4200, 8800, 2700, 1900, 4500, 11000,
  ];

  if (!titulo || !categoria || !origem) {
    return res.status(400).json({
      success: false,
      message: `Os campos titulo, categoria e origem obrigatorios`,
    });
  }

  if (tamanhoCreepypasta < 100)
    return res.status(400).json({
      success: false,
      message: "O creepypasta deve ter tamanho superior a 100",
    });
const novoCreepypasta = {
    id : creepypastas.length + 1,
    autor: autor,
    titulo: titulo,
    categoria: categoria,
    tamanho: parseInt(tamanho),
    dataPublicacao: parseInt(dataPublicacao),
    popularidade: popularidade,
    origem: origem,

}
creepypastas.push(novoCreepypasta);

res.status(201).json({
    sucess: true,
    message: "Novo creepypasta adicionado",
    creepypasta: novoCreepypasta
});

};


const deleteCreepypasta = (req, res) => {
    let id = parseInt(req.params.id);
    const creepypastasParaRemover = creepypastas.find(c => c.id === id);

    if (!creepypastasParaRemover) {
        return res.status(404).json({
            success: false,
            message: 'Esta carta nao existe'
        })
    }
    const creepypastasFiltrados = creepypastas.filter(c => c.id !== id);
    creepypastas.splice(0, creepypastas.length, ...creepypastasFiltrados);
    res.status(200).json({
        success: true,
        message: 'Creepypasta deletada com sucesso',
        cartaRemovida: creepypastasParaRemover
    })
}







export { getAllCreepypastas, getCreepypastaById, creatCreepypasta, deleteCreepypasta };
