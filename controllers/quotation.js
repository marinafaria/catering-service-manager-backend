const db = require('../db');

class Quotation {
    static async getAll() {
        return await db('Orcamentos').select();
    }

    static async create(quotation, quotedProducts) {
        // const trx = await db.transaction();
        const ids = await db('Orcamentos').insert({ ...quotation, statusOrcamento: 'Não aprovado', dataOrcamento: new Date() });
        for (let index = 0; index < quotedProducts.length; index++) {
            quotedProducts[index].idOrcamento = ids[0];
        }
        await db('ProdutosOrcados').insert(quotedProducts);
        return ids;
    }

    static async getById(id) {
        return db.raw(`
        SELECT Orcamentos.id,
                tipoEvento,
                dataOrcamento,
                Clientes.nome as nomeCliente,
                dataEvento,
                quantidadePessoas,
                enderecoEvento,
                taxaDeslocamento,
                valorDesconto,
                valorFinal,
                statusOrcamento,
                Produtos.nome as nomeProduto,
                quantidade,
                precoProdutoOrcado,
                quantidadeEstoque,
                Produtos.unidadeMedida
        FROM Orcamentos
        JOIN ProdutosOrcados ON Orcamentos.id = ProdutosOrcados.idOrcamento
        JOIN Produtos ON Produtos.id = ProdutosOrcados.idProduto
        JOIN Clientes ON Orcamentos.idCliente = Clientes.id
        WHERE Orcamentos.id = ?;
        `, [id]);
    }
}

module.exports = Quotation;