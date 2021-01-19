package main

path, err := os.Getwd()
if err != nil {
    log.Println(err)
}
fmt.Println(path)