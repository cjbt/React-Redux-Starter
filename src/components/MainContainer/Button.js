import React from 'react';
import { connect } from 'react-redux';
import { changeButtonColor } from '../../store/actions';

const Button = props => {
  const { buttonText, changeButtonColor, buttonColor } = props;
  console.log(props);
  return (
    <div>
      <div
        onClick={changeButtonColor}
        className={buttonColor ? 'blue button' : 'button'}
      >
        {buttonText}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  buttonText: state.mainReducer.buttonText,
  buttonColor: state.mainReducer.buttonColor
});

const mapActionsToProps = {
  changeButtonColor
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Button);
