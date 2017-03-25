
import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle.js';
import NewBookForm from '../../components/NewBookForm.js';
import Library from '../../components/Library.js'
import BookList from '../../components/BookList.js'
import './styles.css'

class App extends Component {
  constructor() {
    super();
    this.title = 'Boobs dawg';
    this.doClick=this.doClick.bind(this);
    this.submitBook = this.submitBook.bind(this)
    this.state = {
      library: Library 
    }

  }

  doClick = () => {
    console.log(this.title)

  }


  submitBook = () => {
    console.log("book submitted")

  }
  pseudoXHRRequest (){
    return new Promise((resolve, reject) => {
      resolve(Library);
    })
  }

  render() {
    return (
      <div className="App">
        <BookListAppTitle
          title={this.title} 
          doClick={this.doClick}
          
        />
          <BookList books={this.state.library}/>
          <NewBookForm 
            submitBook={this.submitBook}
          />
      </div>
    );
  }
}

export default App;
