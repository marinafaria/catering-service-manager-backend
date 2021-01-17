package structs

import "time"

// UnidadeMedida is ...
type UnidadeMedida struct {
	unidadeMedida string
}

// CategoriaInsumo is ...
type CategoriaInsumo struct {
	categoriaInsumo string
}

// CategoriaProduto is ...
type CategoriaProduto struct {
	categoriaProduto string
}

// Clientes is ...
type Clientes struct {
	id       int
	nome     string
	cpf      int
	telefone int
	email    string
	endereco string
}

// FichaTecnica is ...
type FichaTecnica struct {
	idProduto        int
	idInsumo         int
	quantidadeInsumo float64
}

// Insumos is ...
type Insumos struct {
	nome                string
	id                  int
	categoria           string
	unidadeMedida       string
	precoCompraUnitario float64
	situacaoEstoque     string
	quantidadeEstoque   int
}

// Orcamentos is ...
type Orcamentos struct {
	id                int
	tipoEvento        string
	dataOrcamento     time.Time
	idCliente         int
	dataEvento        time.Time
	horarioEvento     time.Time
	quantidadePessoas int
	enderecoEvento    string
	taxaDeslocamento  float64
	valorDesconto     float64
	valorFinal        float64
	statusOrcamento   string
}

//Produtos is...
type Produtos struct {
	id                   int
	nome                 string
	categoria            string
	UnidadeMedida        string
	precoProdutoUnitario float64
	quantidadeEstoque    float64
}

//ProdutosOrcados is...
type ProdutosOrcados struct {
	id                 int
	idProduto          int
	quantidade         int
	precoProdutoOrcado float64
}

//StatusOrcamento is...
type StatusOrcamento struct {
	statusOrcamento string
}

//TipoEvento is...
type TipoEvento struct {
	tipoEvento string
}
