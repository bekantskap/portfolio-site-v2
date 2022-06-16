import React from 'react';
const BUTTON_TYPE_CLASSES = {
  yellow: 'yellow',
  white: 'white',
};
export default function Button(props) {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[props.buttonType]}`}
    >
      {props.title}
    </button>
  );
}
