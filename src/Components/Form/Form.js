import React from "react";

function Form() {
  return (
    <section className="lovematch">
      <form className="lovematch-form">
        <div className="lovematch-form__input-container">
          <div className="lovematch-form__container">
            <label className="lovematch-form__title"><img src="https://fontmeme.com/permalink/210903/f47d72536e5a126a14b309ae5d8347e5.png" alt="numans-font" border="0"/>
            </label>
            <input
              className="lovematch-form__name-input lovematch-form__name-input1"
              placeholder="First lover's name"
            />
          </div>

          <div className="lovematch-form__container">
            <label className="lovematch-form__title"><img src="https://fontmeme.com/permalink/210903/6b322fb9431a0963856338ef1819620d.png" alt="numans-font" border="0"/></label>
            <input
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
        <h2>85%</h2>
        <h3>Great Match!</h3>
      </div>


      <div className="lovematch__heart"> </div>
    </section>


  );
}

export default Form;
