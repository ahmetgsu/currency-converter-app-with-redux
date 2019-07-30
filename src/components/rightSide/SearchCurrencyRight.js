import React from "react";
import uuid from "uuid";
import ReactCountryFlag from "react-country-flag";

import { connect } from "react-redux";
import { updateToCurrency } from "../../actions/converterActions";

class SearchCurrencyRight extends React.Component {
  handleChange = e => {
    this.props.updateToCurrency(e.target.value);
  };

  render() {
    const { currencies, toCurrency, toCurrencyCode } = this.props;
    return (
      <div className="ui grid">
        <div className="four wide column">
          <ReactCountryFlag
            code={toCurrencyCode}
            svg
            styleProps={{
              width: "85.125px",
              height: "54.24px"
            }}
          />
        </div>
        <div className="twelve wide column">
          <select
            className="ui fluid selection dropdown"
            name="to"
            value={toCurrency}
            onChange={e => this.handleChange(e)}
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            {currencies.map(item => (
              <option key={uuid()} value={item} style={{ fontSize: "24px" }}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currencies: state.currencyData.currencies,
  toCurrency: state.currencyData.toCurrency,
  toCurrencyCode: state.currencyData.toCurrencyCode
});

export default connect(
  mapStateToProps,
  { updateToCurrency }
)(SearchCurrencyRight);
