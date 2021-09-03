import React from "react";

function Form() {
  return (
    <section className="lovematch">
      <form className="lovematch-form">
        <div className="lovematch-form__input-container">
          <div className="lovematch-form__container">
            <label className="lovematch-form__title"> Lover 1</label>
            <input
              className="lovematch-form__name-input lovematch-form__name-input1"
              placeholder="first lover's name"
            />
          </div>

          <div className="lovematch-form__container">
            <label className="lovematch-form__title"> Lover 2</label>
            <input
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
        <h2>85%</h2>
        <h3>Great Match</h3>
      </div>


      <div className="lovematch__heart"> </div>
    </section>


  );
}

export default Form;
