import './css/styles.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
function Button(props) {
  return (
    <div className="button_wr">
      <input
        onClick={props.send}
        className="button"
        type="button"
        value={props.buttonText}
      />
      {props.validated === 2 && (
        <div className="icon success icon_animation"></div>
      )}
      {props.validated === 1 && (
        <div
          onAnimationEnd={() => {
            props.setValidated(0);
          }}
          className="icon fail icon_animation"
        ></div>
      )}
    </div>
  );
}
function PhoneInput(props) {
  function mask(template, string) {
    var stringFormatted = template,
      endWrite = -1;
    for (var count = 0; count < string.length; count++) {
      template = template.replace(/_/, string[count]);
      endWrite = template.indexOf('_');
    }
    stringFormatted = template.substr(
      0,
      endWrite != -1
        ? endWrite
        : string != ''
        ? template.length
        : template.indexOf('_')
    );
    return stringFormatted;
  }
  function handleClick() {
    if (props.validated != 2) {
      var number = props.numberphone;
      if (/^\d$/.test(event.key) && number.length < 10) {
        number += event.key;
      }
      if (event.key === 'Backspace') {
        number = number.substr(0, number.length - 1);
      }
      props.setNumber(number);
      props.setNumberFormatted(mask(props.numberTemplate, number));
    }
  }
  return (
    <input
      className="input"
      type="text"
      value={props.numberFormatted}
      onKeyDown={handleClick}
      type="text"
    />
  );
}
function Form(props) {
  const [numberphone, setNumber] = useState(''),
    [numberFormatted, setNumberFormatted] = useState('+7 ('),
    [validated, setValidated] = useState(0),
    [buttonText, setButtonText] = useState('Отправить');
  function send() {
    if (numberphone.length === 10) {
      console.log(1);
      setValidated(2);
      setButtonText('Подтвердить');
    } else {
      setValidated(1);
    }
  }
  return (
    <form className="number-form">
      <PhoneInput
        validated={validated}
        numberTemplate="+7 (___) __-__-___"
        numberphone={numberphone}
        setNumberFormatted={setNumberFormatted}
        setNumber={setNumber}
        numberFormatted={numberFormatted}
      />
      {validated === 2 && <input className="input" placeholder="Введите код" />}
      <Button
        setValidated={setValidated}
        send={send}
        validated={validated}
        buttonText={buttonText}
      />
    </form>
  );
}

const domContainer = document.querySelector('#form');
ReactDOM.render(<Form />, domContainer);
