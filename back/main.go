package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

type Dump struct {
	Id       int     `json:"id"`
	Date     string  `json:"date"`
	Name     string  `json:"name"`
	Category string  `json:"category"`
	Notes    string  `json:"notes"`
	Hours    float32 `json:"hours"`
	Comments string  `json:"comments"`
}

func main() {
	db, err := sql.Open("postgres", os.Getenv("DATABASE_URL"))
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	_, err = db.Exec(`CREATE TABLE IF NOT EXISTS dump
						(id SERIAL PRIMARY KEY, 
						date DATE, 
						name VARCHAR(256), 
						category VARCHAR(256),
						notes VARCHAR(256),
						hours VARCHAR(256), 
						comments VARCHAR(256))`)
	if err != nil {
		log.Fatal(err)
	}

	router := mux.NewRouter()
	router.HandleFunc("/api/dump", getDump(db)).Methods("GET")
	router.HandleFunc("/api/dump", createDump(db)).Methods("POST")

	enhancedRouter := enableCORS(jsonContentTypeMiddleware(router))

	log.Fatal(http.ListenAndServe(":8000", enhancedRouter))
}

func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*") // look into changing to localhost:3000
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow_Headers", "Content-Type, Authorization")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func jsonContentTypeMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		next.ServeHTTP(w, r)
	})
}

// controllers
func getDump(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		rows, err := db.Query("SELECT * FROM dump")
		if err != nil {
			w.WriteHeader(http.StatusNotFound)
			return
		}
		defer rows.Close()

		dump := []Dump{}
		for rows.Next() {
			var d Dump
			if err := rows.Scan(&d.Id, &d.Date, &d.Name, &d.Category, &d.Notes, &d.Hours, &d.Comments); err != nil {
				w.WriteHeader(http.StatusNotFound)
				return
			}
			dump = append(dump, d)
		}
		if err := rows.Err(); err != nil {
			w.WriteHeader(http.StatusNotFound)
			return
		}
		json.NewEncoder(w).Encode(dump)
	}
}

func createDump(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var d Dump
		json.NewDecoder(r.Body).Decode(&d)

		err := db.QueryRow(`INSERT INTO dump (	date, 
												name,
												category,
												notes,
												hours,
												comments)
							VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`, d.Date, d.Name, d.Category, d.Notes, d.Hours, d.Comments).Scan(&d.Id)
		if err != nil {
			log.Fatal(err)
		}

		json.NewEncoder(w).Encode(d)
	}
}
