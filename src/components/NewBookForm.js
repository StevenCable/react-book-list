import React from 'react'

export default class NewBookForm extends React.Component {
  // constructor(){
  //   super()

  // }

  render() {
    return (
      <form>
        <div>
          <input type='text' placeholder='fuckin-A Man' />
        </div>
        <div>
          <input type='text' placeholder='fuckin-B Man' />
        </div>
        <div>
          <input type='submit' value='fuckin-C Man' />
        </div>
      </form>
    )
  }
}