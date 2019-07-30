import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  //   componentDidUpdate(prevProps) {
  //       if(this.props.transactionDate !== prevProps.transactionDate) {

  //       }
  //   }
  render() {
    return (
      <div>
        <div>
          <div
            className="ui center aligned container"
            style={{ margin: "20px" }}
          >
            <div className="ui header">
              <h1>Currency Converter</h1>
            </div>
          </div>
        </div>
        <div>
          <div
            className="ui center aligned container"
            style={{ margin: "20px" }}
          >
            <div className="ui header">
              <h3>{`As of ${this.props.transactionDate}`}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactionDate: state.currencyData.transactionDate
});

export default connect(mapStateToProps)(Header);
