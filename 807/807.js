var books = [
    {title: 'The Lord of the Rings',
     author: 'J. R. R. Tolkien',
     publishedIn: '1955',
     alreadyRead: false
    },
    {title: 'The Hobbit',
    author: 'J. R. R. Tolkien',
    publishedIn: '1937',
    alreadyRead: true
    }];
  
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + '" by ' + book.author  + ', published in ' + book.publishedIn;
    if (book.alreadyRead) {
      console.log('You already read "' + bookInfo);
    } else {
      console.log('You still need to read "' + bookInfo);
    }
  }
  
  
  
  
  
  