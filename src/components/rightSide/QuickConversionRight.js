import React from "react";
import { connect } from "react-redux";
import { updateToCurrency } from "../../actions/converterActions";

class QuickConversionRight extends React.Component {
  handleClick = currency => {
    console.log(`${currency} button clicked...`);

    this.props.updateToCurrency(currency);
  };

  render() {
    const majorCurrenciesTo = ["EUR", "JPY", "USD", "CAD"];
    return (
      <div className="ui stackable four column center aligned grid">
        {majorCurrenciesTo.map((currency, index) => {
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
  { updateToCurrency }
)(QuickConversionRight);
