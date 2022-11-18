function Publication(title, author, pubDate) {
  let publicAPI = {
    print() {
      console.log(`Title: ${title} By: ${author} ${pubDate}`);
    },
  };
  return publicAPI;
}

function Book(bookDetails) {
  let pub = Publication(
    bookDetails.title,
    bookDetails.author,
    bookDetails.publishedOn
  );

  let publicAPI = {
    print() {
      // This is calling the print method on the returned value (publicAPI) of the
      // Publication function above, printing the baseline information
      // that will be added to by the print method here in Book

      pub.print();
      console.log(
        `Publisher: ${bookDetails.publisher} ISBN: ${bookDetails.ISBN}`
      );
    },
  };
  return publicAPI;
}

function BlogPost(title, author, pubDate, URL) {
  let pub = Publication(title, author, pubDate);

  let publicAPI = {
    print() {
      pub.print();
      console.log(URL);
    },
  };
  return publicAPI;
}

// testing
let testBook = Book({
  title: "The 2 Hour Job Search",
  author: "Steve Dalton",
  publishedOn: "2020",
  publisher: "10 Speed Press",
  ISBN: 123456 - 789,
});

testBook.print();

let testBlog = BlogPost(
  "Pachyderm pipeline globs",
  "GH",
  "Oct 1 2020",
  "https://anyplaceBlogMadeUp.com"
);

testBlog.print();
