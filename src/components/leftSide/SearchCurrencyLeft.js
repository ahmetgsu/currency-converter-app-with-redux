import React from "react";
import uuid from "uuid";
import ReactCountryFlag from "react-country-flag";

import { connect } from "react-redux";
import {
  updateBase,
  updateCurrenciesArray
} from "../../actions/converterActions";

class SearchCurrencyLeft extends React.Component {
  handleChange = e => {
    this.props.updateBase(e.target.value);
  };

  render() {
    const { base, baseCode, currencies } = this.props;
    if (!currencies.includes(base)) {
      this.props.updateCurrenciesArray(base);
    }
    return (
      <div className="ui grid">
        <div className="four wide column">
          <ReactCountryFlag
            code={baseCode}
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
            name="from"
            value={base}
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
  base: state.currencyData.base,
  baseCode: state.currencyData.baseCode,
  currencies: state.currencyData.currencies
});

export default connect(
  mapStateToProps,
  { updateBase, updateCurrenciesArray }
)(SearchCurrencyLeft);
