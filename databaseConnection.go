package main

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

type Tag struct {
	unidade_medida []string `json:"id"`
}

func main() {

	// Open up our database connection.
	// The connection string is "user:password@protocol(ip:port)/DBname"
	db, err := sql.Open("mysql", "root:@Aa12345@tcp(158.101.119.13:3306)/DB")

	// if there is an error opening the connection, handle it
	if err != nil {
		log.Print(err.Error())
	}
	defer db.Close()

	var tag Tag
	// Execute the query
	//db.QueryRow is a specific function for single result query, there are other functions available for different purposes
	sqlStatement := "SELECT * FROM Unidade_medida"
	err = db.QueryRow(sqlStatement).Scan(&tag.unidade_medida)
	if err != nil {
		panic(err.Error()) // proper error handling instead of panic in your app
	}

	log.Println(tag.unidade_medida)

}
