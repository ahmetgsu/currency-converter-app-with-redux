import React from "react";
import { connect } from "react-redux";

class CalculatorRight extends React.Component {
  render() {
    const { toCurrency, amount, currencyRate } = this.props;

    const commissionRate = 0.01;
    const commissionBase = (amount * commissionRate).toFixed(2);
    const result = (amount * currencyRate).toFixed(2);
    const commissionToCurrency = (commissionBase * currencyRate).toFixed(2);
    const amountAfterCommissionToCurrency = (
      result - commissionToCurrency
    ).toFixed(2);

    return (
      <div>
        <div className="ui grid">
          <div className="sixteen wide center aligned column">
            <div className="ui fluid icon input">
              <input
                disabled={true}
                value={result}
                style={{ fontWeight: "bolder", fontSize: "20px" }}
              />
            </div>
          </div>
          <div
            className="sixteen wide center aligned column"
            style={{
              border: "1px solid #d3d3d3",
              borderRadius: "6px",
              margin: "5px 5px 5px 5px"
            }}
          >
            <span>
              <h3>{`Commission fee in ${toCurrency}`}</h3>
            </span>
            <span>
              <h3>{commissionToCurrency}</h3>
            </span>
          </div>
          <div
            className="sixteen wide center aligned column"
            style={{
              border: "1px solid #d3d3d3",
              borderRadius: "6px",
              margin: "5px 5px 5px 5px"
            }}
          >
            <span>
              <h3>{`Amount after commission in ${toCurrency}`}</h3>
            </span>
            <span>
              <h3>{amountAfterCommissionToCurrency}</h3>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  toCurrency: state.currencyData.toCurrency,
  amount: state.currencyData.amount,
  currencyRate: state.currencyData.currencyRate
});

export default connect(mapStateToProps)(CalculatorRight);
