/*
Requirements

=>BOOK
    *ISBN             -String
    *Title            -String
    *Author           -[Number]
    *Language         -String
    *publications     -Number
    *NumOfPages       -Number
    *Categories       -[String]

=>AUTHOR
    *Author           -Number
    *Id               -String
    *Books            -[String]

=>PUBLICATIONS
    *Id               -Number
    *Name             -String
    *Books            -[String]

-----------------------------------------------------API---------------------------------------------------------------
BOOK
     #GET
        -To get all the books
        -To get specific books
        -To get list of books based on category
        -To get list of book based on author

     #POST
        -To add new book
        
     #PUT
        -To update the book details
        -To update or add new author

     #DELETE
        -To delete a book 
        -To delete an author fron the book

AUTHORS
     #GET
        -To get all author
        -To get specific author
        -To get list of author based on book
        
     #POST
        -To add new book
        -To update or add new book
        
     #PUT
        -To update author details
        
     #DELETE
        -To delete an author
        
        
PUBLICATIONS
     #GET
        -To get all publications
        -To get specific publication
        -To get list of publications
        
     #POST
        -To add new publications
        
     #PUT
        -To update publications
        
     #DELETE
        -To delete a publications


    
*/