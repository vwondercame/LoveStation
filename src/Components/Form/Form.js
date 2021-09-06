import React, {Component} from "react";
import axios from "axios";
import meh from '../../assets/images/meh.gif';
import marriage from '../../assets/images/wedding.webp'
import blueheart from '../../assets/images/blueheart.gif'
import struggle from '../../assets/images/struggle.gif'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {firstName: "", secondName: "", percentage: "", result: "", image: false}
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
          result: response.data.result, 
        })

        if(this.state.percentage < 20) {
          this.setState({
            image: meh
          })
        } else if (this.state.percentage > 21 && this.state.percentage < 50) {
          this.setState({
            image: struggle
          })
        } else if (this.state.percentage >= 50 && this.state.percentage < 70) {
          this.setState({
            image: blueheart
          })
        } else if (this.state.percentage >= 70 && this.state.percentage <= 100) {
          this.setState({
            image: marriage
          })
        } else {
          this.setState({
          image: false
        })
        }
      
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
           
            <label className="lovematch-form__title"><img src="https://fontmeme.com/permalink/210906/c3db0eb05f27f85feee6458d1c6c892c.png" alt="numans-font" border="0"/></label>
            <input 
              onChange = {(event) => this.setState({...this.state, firstName: event.target.value})}
              name="fname"

              className="lovematch-form__name-input lovematch-form__name-input1"
              placeholder="First lover's name"
            />
          </div>

          <div className="lovematch-form__container">
            <label className="lovematch-form__title"><img src="https://fontmeme.com/permalink/210906/fb09aa5eeddfcb104833f4225ef1aa70.png" alt="numans-font" border="0" /></label>
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
          >CALCULATE
          </button>
        </div>
      </form>

      <div className="lovematch__result">
        <h2>{this.state.percentage}</h2>
        <h3>{this.state.result}</h3>
        <img className="lovematch__result--image" src={this.state.image} />
      </div>


      <div className="lovematch__heart"> </div>
    </section>


  );
}
}

export default Form;

