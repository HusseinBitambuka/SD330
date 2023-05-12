const classList = document.getElementById("class-list");

fetch("books.json")
  .then(response => response.json())
  .then(data => {
    data.books.forEach(book => {
      const classItem = document.createElement("li");
      classItem.setAttribute('id','class-name')
      const classLink = document.createElement("a");
      classLink.textContent = book.class;
      classLink.addEventListener("click", () => {
        const bookInfo = document.createElement("p");
        bookInfo.textContent = `Title: ${book.title} | Professor: ${book.professor}`;
        classItem.appendChild(bookInfo);
      });
      classItem.appendChild(classLink);
      classList.appendChild(classItem);
    });
  });
