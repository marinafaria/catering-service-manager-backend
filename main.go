package main

import (
	"fmt"
	"net/http"
)

func hello(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "hello world")
}

func main() {
	fmt.Println("Listening on 8000..")

	http.HandleFunc("/", hello)
	http.ListenAndServe(":8000", nil)
}
