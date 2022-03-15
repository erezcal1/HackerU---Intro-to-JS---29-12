//Book Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
//The Ui is the table content
function Ui(){};

Ui.prototype.add_Book_To_List = function(book){
  const book_List = document.getElementById('book_List');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>`;
  book_List.appendChild(row);
}

Ui.prototype.clear_Fields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

//Creating the event listeners for the submit button
document.getElementById('book_Form').addEventListener('submit', function(e){
  const title = document.getElementById('title').value,
   author = document.getElementById('author').value,
   isbn = document.getElementById('isbn').value;
   
   if(title == '' || author == '' || isbn == ''){
     e.preventDefault();
    }else{
     const book = new Book(title, author, isbn);
     const ui = new Ui();
     ui.add_Book_To_List(book); 
     ui.clear_Fields();
     e.preventDefault();
   }
   
});