import {
  FETCH_BASE_CURRENCY_DATA,
  UPDATE_BASE,
  UPDATE_TO_CURRENCY,
  INPUT_CHANGE,
  UPDATE_CURRENCY_BALANCES,
  UPDATE_CURRENCIES_ARRAY
} from "./types";
import axios from "axios";
import {
  calculateCurrencyAfterCommission,
  updateBalance
} from "../lib/currencyCalculations";
import store from "../store";

export const getBaseCurrencyData = curr => async dispatch => {
  const state = store.getState();
  // console.log(state);
  // console.log(`getBaseCurrencyData function invoked...`);
  await axios
    .get(`https://api.exchangeratesapi.io/latest?base=${curr}`)
    .then(res => {
      //console.log(res.data);
      const currencyRate = res.data.rates[
        state.currencyData.toCurrency
      ].toFixed(5);
      const currencyRateInverted = (1 / currencyRate).toFixed(5);
      const transactionDate = res.data.date;

      const currencyArr = [];
      for (const item in res.data.rates) {
        currencyArr.push(item);
      }
      //const data = {};
      dispatch({
        type: FETCH_BASE_CURRENCY_DATA,
        payload1: currencyRate,
        payload2: transactionDate,
        payload3: currencyRateInverted,
        payload4: currencyArr.sort()
      });
    })
    .catch(err => {
      console.log("Opps", err.message);
    });
};

export const updateBase = currency => dispatch => {
  dispatch({
    type: UPDATE_BASE,
    payload1: currency,
    payload2: currency.slice(0, 2).toLowerCase()
  });
};

export const updateToCurrency = currency => dispatch => {
  dispatch({
    type: UPDATE_TO_CURRENCY,
    payload1: currency,
    payload2: currency.slice(0, 2).toLowerCase()
  });
};

export const onInputChange = value => dispatch => {
  dispatch({
    type: INPUT_CHANGE,
    payload: value
  });
};

export const updateCurrencyBalances = () => dispatch => {
  const state = store.getState();

  const {
    amount,
    currencyRate,
    userBalance,
    base,
    toCurrency
  } = state.currencyData;

  const amountAfterCommissionToCurrency = calculateCurrencyAfterCommission(
    amount,
    currencyRate
  );
  dispatch({
    type: UPDATE_CURRENCY_BALANCES,
    payload: updateBalance(
      userBalance,
      base,
      toCurrency,
      amount,
      amountAfterCommissionToCurrency
    )
  });
};

export const updateCurrenciesArray = currency => dispatch => {
  console.log(`updateCurrenciesArray function invoked`);
  const state = store.getState();
  const newCurrencies = [...state.currencyData.currencies, currency];
  dispatch({
    type: UPDATE_CURRENCIES_ARRAY,
    payload: newCurrencies
  });
};
