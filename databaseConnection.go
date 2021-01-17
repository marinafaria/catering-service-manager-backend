package main

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

type Tag struct {
	unidadeMedida string
}

func getDataBaseValues() {
	db, err := sql.Open("mysql", "root:@Aa12345@tcp(158.101.119.13:3306)/DB")

	if err != nil {
		log.Print(err.Error())
	}
	defer db.Close()

	var tag Tag
	rows, err := db.Query("SELECT * FROM UnidadeMedida")
	for rows.Next() {
		err := rows.Scan(&tag.unidadeMedida)
		if err != nil {
			panic(err.Error())
		}
		log.Println(tag.unidadeMedida)
	}
}
