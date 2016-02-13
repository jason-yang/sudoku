package main

import (
	"net/http"
	"fmt"
	"log"
)

func main() {
	port := 3000

	http.Handle("/", http.FileServer(http.Dir("./src/client")))

	log.Printf("Server started: http://localhost:%d/\n", port)
	http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
}