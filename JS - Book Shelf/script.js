import PromptSync from "prompt-sync";
import chalk from "chalk";

const prompt = PromptSync();

let bookshelf = [
   {
      _id: 1,
      title: "Atomic habits",
      author: "Nurali Vafoyev",
      genre: "Something",
      pages: 233,
      isRead: false,
   },
   {
      _id: 2,
      title: "Rich dad poor dad",
      author: "Adixamov Farhodbek",
      genre: "Something",
      pages: 400,
      isRead: false,
   },
   {
      _id: 3,
      title: "Book 3",
      author: "Adixamov Farhodbek",
      genre: "Something",
      pages: 400,
      isRead: false,
   },
   {
      _id: 4,
      title: "Book 4",
      author: "Adixamov Farhodbek",
      genre: "Something",
      pages: 400,
      isRead: false,
   },
];

function showAvailableBooks(db) {
   db.forEach((item, index) => {
      console.table(item);
      //    console.log(`${item._id}. ${item.title}
      // ${item.author}
      // ${item.genre}
      // ${item.pages}
      // ${item.isRead}`);
   });
}

function addingBook({ title, author, pages, genre, isRead }) {
   if (!title || !author || !pages || !genre) {
      console.log("Fill all fields!");
      return;
   }

   const newBook = {
      _id: bookshelf.length + 1,
      title,
      author,
      pages,
      genre,
      isRead,
   };

   //    bookshelf.push(newBook);
   bookshelf = [...bookshelf, newBook];
}

function searchBook({ title, db, option }) {
   let foundBooks = db.filter((book) => book[option].includes(title));

   showAvailableBooks(foundBooks);
}

function updateBook(selectedBook) {
   let updatedBook = bookshelf.map((book) => {
      if (book._id === selectedBook._id) {
         return { ...book, ...selectedBook };
      } else {
         return book;
      }
   });

   showAvailableBooks(updatedBook);
}

function removeBook({ db, id }) {
   db = db.filter((value) => value._id !== id);
   showAvailableBooks(db);
}

// let option = prompt(
//    "Welcome to our bookshelf shop! \n1 - Show available books \n2 - Adding books \n3 - Searching books \n4 - Updating books \n5 - Removing books \n0 - Exit \n: "
// );

let isExit = true;
let option = "";

while (isExit) {
   option = prompt(
      "Welcome to our bookshelf shop! \n1 - Show available books \n2 - Adding books \n3 - Searching books \n4 - Updating books \n5 - Removing books \n0 - Exit \n: "
   );

   console.log(option, "------------");

   switch (option) {
      case "1": {
         console.log(chalk.bgGreen("Show available books"));
         showAvailableBooks(bookshelf);
         break;
      }

      case "2": {
         console.log(chalk.bgGreen("Adding books"));

         let bookTitle = "";
         while (!bookTitle.length) {
            bookTitle = prompt("Title: ");
         }

         let bookAuthor = "";
         while (!bookAuthor.length) {
            bookAuthor = prompt("Author: ");
         }

         let bookPages = 0;
         while (typeof bookPages !== "number" || bookPages == 0) {
            bookPages = +prompt("Pages: ");
         }

         let bookGenre = "";
         while (!bookGenre.length) {
            bookGenre = prompt("Genre: ");
         }

         addingBook({
            title: bookTitle,
            author: bookAuthor,
            pages: bookPages,
            genre: bookGenre,
            isRead: false,
         });
         break;
      }

      case "3": {
         console.log(chalk.bgGreen("Searching books"));

         let option = "";
         while (!option.length) {
            option = prompt("title/author/genre: ");
         }

         let title = "";
         while (!title.length) {
            title = prompt("Search: ");
         }

         searchBook({ title: title, db: bookshelf, option: option });
         break;
      }

      case "4": {
         console.log(chalk.bgGreen("Updating books"));

         let title = "";
         while (!title.length) {
            title = prompt("Title: ");
         }

         updateBook({
            _id: 1,
            title: title,
            author: "",
            genre: "",
            pages: 0,
            isRead: true,
         });

         break;
      }

      case "5": {
         console.log(chalk.bgGreen("Removing books"));

         let id;
         while (typeof id !== "number") {
            id = +prompt(
               `id: ${bookshelf.map((value) => value._id).join("/")}: `
            );
         }

         removeBook({ db: bookshelf, id: id });
         break;
      }

      case "0": {
         console.log(chalk.bgGreen("Exit"));
         isExit = false;
         break;
      }
      default:
         console.log("1,2,3,4,5,0 lardan birini kiriting!");
   }
}

// removeBook({ db: bookshelf, id: 1 });
// removeBook({ db: bookshelf, id: 3 });

// updateBook({
//    _id: 1,
//    title: "Atomic habits 2",
//    isRead: true,
// });

// addingBook({
//    title: "New Book",
//    author: "Somebody",
//    pages: 300,
//    genre: "Something",
//    isRead: false,
// });

// showAvailableBooks(bookshelf);
