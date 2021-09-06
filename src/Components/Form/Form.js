import React, {Component} from "react";
import axios from "axios";
import { createRef } from "react";

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {firstName: "", secondName: "", percentage: "", result: ""}
  }
  
    handleSubmit = (event) => {
      event.preventDefault();

      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
          'x-rapidapi-key': '6d23cc90f1mshbaa369c944f52d7p1541e8jsn0f06105612ee'
        }, 
        params:{
        fname: this.state.firstName,
        sname: this.state.secondName
      }
    }
        axios.get('https://love-calculator.p.rapidapi.com/getPercentage', options)
        .then((response) => {
        console.log(response);
        this.setState({
          ...this.state,
          percentage: response.data.percentage,
          result: response.data.result 
        })
      
      }).catch(function (error) {
        console.error(error);
      });     
    }
  

render() {
  return (
    <section className="lovematch">
      <form className="lovematch-form" onSubmit={this.handleSubmit} >
        <div className="lovematch-form__input-container">
          <div className="lovematch-form__container">
           
            <label className="lovematch-form__title"><img src="https://fontmeme.com/permalink/210903/f47d72536e5a126a14b309ae5d8347e5.png" alt="numans-font" border="0"/></label>
            <input 
              onChange = {(event) => this.setState({...this.state, firstName: event.target.value})}
              name="fname"

              className="lovematch-form__name-input lovematch-form__name-input1"
              placeholder="First lover's name"
            />
          </div>

          <div className="lovematch-form__container">
            <label className="lovematch-form__title"><img src="https://fontmeme.com/permalink/210903/6b322fb9431a0963856338ef1819620d.png" alt="numans-font" border="0"/></label>
            <input 
             onChange = {(event) => this.setState({...this.state, secondName: event.target.value})}
            name="sname"

              className="lovematch-form__name-input lovematch-form__name-input2"
              placeholder="Second lover's name"
            />
          </div>
        </div>

        <div className="lovematch-form__button-container">
          <button 
            id="lovermatch_button"
            className="comment-section__button"
            type="submit"
          >
            <img className="lovematch-form__btnimg" src="https://fontmeme.com/permalink/210903/aab66d877981f8cbfbfc93e14ec4dd47.png" alt="numans-font" border="0"/>
          </button>
        </div>
      </form>

      <div className="lovematch__result">
        <h2>{this.state.percentage}</h2>
        <h3>{this.state.result}</h3>
      </div>


      <div className="lovematch__heart"> </div>
    </section>


  );
}
}

export default Form;

