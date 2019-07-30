import React from "react";
import { connect } from "react-redux";
import { updateBase } from "../../actions/converterActions";

class QuickConversionLeft extends React.Component {
  handleClick = currency => {
    console.log(`${currency} button clicked...`);

    this.props.updateBase(currency);
  };

  render() {
    const majorCurrenciesFrom = ["USD", "GBP", "EUR", "JPY"];
    return (
      <div className="ui stackable four column center aligned grid">
        {majorCurrenciesFrom.map((currency, index) => {
          return (
            <div key={index} className="column">
              <button
                key={index}
                className="ui inverted grey toggle button"
                onClick={() => this.handleClick(currency)}
                style={{
                  fontSize: "1.2em",
                  color: "black"
                }}
              >
                {currency}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(
  null,
  { updateBase }
)(QuickConversionLeft);
