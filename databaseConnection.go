package main

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

type Tag struct {
	unidade_medida string
}

func main() {
	db, err := sql.Open("mysql", "root:@Aa12345@tcp(158.101.119.13:3306)/DB")

	if err != nil {
		log.Print(err.Error())
	}
	defer db.Close()

	var tag Tag
	rows, err := db.Query("SELECT * FROM Unidade_medida")
	for rows.Next() {
		err := rows.Scan(&tag.unidade_medida)
		if err != nil {
			panic(err.Error())
		}
		log.Println(tag.unidade_medida)
	}
}
