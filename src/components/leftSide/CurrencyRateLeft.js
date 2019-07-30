import React from "react";
import { connect } from "react-redux";

class CurrencyRateLeft extends React.Component {
  renderContent = () => {
    const { base, currencyRate, toCurrency } = this.props;

    if (base === toCurrency) {
      return (
        <div>
          <strong>{`1 ${base} = 1.00000 ${toCurrency}`}</strong>
        </div>
      );
    } else {
      return (
        <div>
          <strong>{`1 ${base} = ${currencyRate} ${toCurrency}`}</strong>
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
  currencyRate: state.currencyData.currencyRate,
  toCurrency: state.currencyData.toCurrency,
  containerSection: state.currencyData.containerSection,
  currencyRateInverted: state.currencyData.currencyRateInverted
});

export default connect(mapStateToProps)(CurrencyRateLeft);
