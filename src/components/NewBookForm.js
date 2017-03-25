import React from 'react';

export default class NewBookForm extends React.Component {
    constructor(props){
      super(props)

      this.state = {
        title: '';
        author: '';
      } 

      

    }

  render(props) {
    return (
      <form>
        <div>
          <input type='text' placeholder='fuckin-A Man' />
        </div>
        <div>
          <input type='text' placeholder='fuckin-B Man' />
        </div>
        <div>
          <button onClick={ props.submitBook }>submit</button>
        </div>
      </form>
    )
  }
}