class Page {
  constructor(text) {
    this.text = text;
  }
  print() {
    console.log(this.text);
  }
}

class Notebook {
  constructor() {
    this.pages = [];
  }

  addPage(text) {
    let page = new Page(text);
    this.pages.push(page);
  }

  print() {
    for (let page of this.pages) {
      page.print();
    }
  }
}

let biologyNotes = new Notebook();
biologyNotes.addPage("Bioinformatics of DNA sequence data");
biologyNotes.addPage("Lake sampling for phytoplankton");
biologyNotes.print();
