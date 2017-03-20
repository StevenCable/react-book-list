import React from 'react';

const BookList = (props) => {
  return (
    <ul>
      {

        // this.props.books.filter( ({title, author}) =>{
        //   title.toLowerCase().indexOf(this.props.searchFilter)
        // }) 
        props.books.map( books => {
          return (
            <li>
              <h2>{books.title}</h2>
              <p>{books.author}</p>
            </li>
          )
        })
      }
      
    </ul>
  )
}

export default BookList;