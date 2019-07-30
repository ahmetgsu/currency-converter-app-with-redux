import React from "react";
import SearchCurrencyLeft from "./leftSide/SearchCurrencyLeft";
import SearchCurrencyRight from "./rightSide/SearchCurrencyRight";
import CurrencyRateLeft from "./leftSide/CurrencyRateLeft";
import CurrencyRateRight from "./rightSide/CurrencyRateRight";
import QuickConversionLeft from "./leftSide/QuickConversionLeft";
import QuickConversionRight from "./rightSide/QuickConversionRight";
import CalculatorLeft from "./leftSide/CalculatorLeft";
import CalculatorRight from "./rightSide/CalculatorRight";
import BuyButton from "./BuyButton";
import CurrencyAccount from "./CurrencyAccount";
import Header from "./Header";

import { connect } from "react-redux";
import { getBaseCurrencyData } from "../actions/converterActions";

class App extends React.Component {
  componentDidMount() {
    console.log(`componentDidMount function invoked`);
    this.props.getBaseCurrencyData(this.props.base);
  }

  componentDidUpdate(prevProps) {
    if (this.props.base !== prevProps.base) {
      // console.log(
      //   `componentDidUpdate function invoked after left side QC button clicked`
      // );
      this.props.getBaseCurrencyData(this.props.base);
    }
    if (this.props.toCurrency !== prevProps.toCurrency) {
      // console.log(
      //   `componentDidUpdate function invoked after right side QC button clicked`
      // );
      this.props.getBaseCurrencyData(this.props.base);
    }
  }

  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <Header />
        <div>
          <div className="ui container">
            <div className="ui grid">
              <div className="eight wide column">
                <div className="ui fluid card left">
                  <div
                    className="content"
                    style={{ backgroundColor: "#f1f8ff" }}
                  >
                    <CurrencyRateLeft />
                  </div>
                  <div
                    className="content"
                    style={{ backgroundColor: "#fffaf1" }}
                  >
                    <SearchCurrencyLeft />
                  </div>
                  <div className="content">
                    <CalculatorLeft />
                  </div>
                  <div className="content">
                    <QuickConversionLeft />
                  </div>
                </div>
              </div>
              <div className="eight wide column">
                <div className="ui fluid card right">
                  <div
                    className="content"
                    style={{ backgroundColor: "#f1f8ff" }}
                  >
                    <CurrencyRateRight />
                  </div>
                  <div
                    className="content"
                    style={{ backgroundColor: "#fffaf1" }}
                  >
                    <SearchCurrencyRight />
                  </div>
                  <div className="content">
                    <CalculatorRight />
                  </div>
                  <div className="content">
                    <QuickConversionRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <BuyButton />
        </div>
        <div>
          <CurrencyAccount />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  base: state.currencyData.base,
  transactionDate: state.currencyData.transactionDate,
  toCurrency: state.currencyData.toCurrency
});

export default connect(
  mapStateToProps,
  { getBaseCurrencyData }
)(App);
