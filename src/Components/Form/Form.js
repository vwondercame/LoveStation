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
            <label className="lovematch-form__title"> Lover 1</label>
            <input 
              onChange = {(event) => this.setState({...this.state, firstName: event.target.value})}
              name="fname"
              className="lovematch-form__name-input lovematch-form__name-input1"
              placeholder="first lover's name"
            />
          </div>

          <div className="lovematch-form__container">
            <label className="lovematch-form__title"> Lover 2</label>
            <input 
             onChange = {(event) => this.setState({...this.state, secondName: event.target.value})}
            name="sname"
              className="lovematch-form__name-input lovematch-form__name-input2"
              placeholder="second lover's name"
            />
          </div>
        </div>

        <div className="lovematch-form__button-container">
          <button 
            id="lovermatch_button"
            className="comment-section__button"
            type="submit"
          >
            Calculate
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

