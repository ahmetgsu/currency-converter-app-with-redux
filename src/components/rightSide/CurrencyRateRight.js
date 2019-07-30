import React from "react";
import { connect } from "react-redux";

class CurrencyRateRight extends React.Component {
  renderContent = () => {
    const { base, toCurrency, currencyRateInverted } = this.props;

    if (base === toCurrency) {
      return (
        <div>
          <strong>{`1 ${base} = 1.00000 ${toCurrency}`}</strong>
        </div>
      );
    } else {
      return (
        <div>
          <strong>{`1 ${toCurrency} = ${currencyRateInverted} ${base}`}</strong>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => ({
  base: state.currencyData.base,
  toCurrency: state.currencyData.toCurrency,
  currencyRateInverted: state.currencyData.currencyRateInverted
});

export default connect(mapStateToProps)(CurrencyRateRight);
