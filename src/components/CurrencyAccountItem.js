import React from "react";
import uuid from "uuid";
import { connect } from "react-redux";

class CurrencyAccountItem extends React.Component {
  render() {
    const { userBalance } = this.props;

    return (
      <div className="content">
        <div className="ui cards">
          {userBalance.map(item => (
            <div
              key={uuid()}
              className="card"
              style={{
                width: "150px"
              }}
            >
              <div className="content">
                <h3>{item.currency}</h3>
              </div>
              <div
                className="content"
                style={{ color: item.value !== 0 ? "black" : "red" }}
              >
                {Number(item.value.toFixed(2)).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userBalance: state.currencyData.userBalance
});

export default connect(mapStateToProps)(CurrencyAccountItem);
