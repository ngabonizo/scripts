class library {
    constructor(books) {
        this.books = books = [];
    }

    addBook (Addbooks) {
        for(let i=0; i< arguments.length; i++){
          this.books.push(arguments[i])
        }
    }

  listAvailableBooks () {
    console.log("Books : " + this.books)
  }

    checkBook(booktitle) {
      let bookResults = [];
     for(let i=0; i<arguments.length; i++){
      if(this.books.includes(arguments[i])) bookResults.push(arguments[i]);
      if(!(this.books.includes(arguments[i]))) console.log(`${arguments[i]} : is not available`)
     }
     console.log(` ${bookResults.join(' and, ')} :- are available`)
      }

    }


let lib = new library();


lib.addBook('dont Worry', 'kingsman', 'harrypotter');
lib.checkBook('kingsman','dont Worry', 'Harrypotter');
lib.listAvailableBooks()