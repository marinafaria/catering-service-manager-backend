package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

type Produto struct {
	id                   int
	nome                 string
	categoria            string
	unidadeMedida        string
	precoProdutoUnitario float64
	quantidadeEstoque    float64
}

func hello(w http.ResponseWriter, req *http.Request, produtos Produto) {
	fmt.Fprintf(w, produtos)
}

func main() {
	fmt.Println("Listening on 8000..")
	produtos = getDatabaseValues()

	http.HandleFunc("/", hello)
	http.ListenAndServe(":8000", nil)
}

func getDatabaseValues() {
	db, err := sql.Open("mysql", "root:@Aa12345@tcp(158.101.119.13:3306)/DB")

	if err != nil {
		log.Print(err.Error())
	}
	defer db.Close()

	var produtos = Produto{}

	rows, err := db.Query("SELECT * FROM Produtos")
	for rows.Next() {
		err := rows.Scan(&produtos.id, &produtos.nome, &produtos.categoria, &produtos.unidadeMedida, &produtos.precoProdutoUnitario, &produtos.quantidadeEstoque)
		if err != nil {
			panic(err.Error())
		}
		log.Println(produtos.id)
	}
	return produtos
}