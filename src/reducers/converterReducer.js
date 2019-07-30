import {
  FETCH_BASE_CURRENCY_DATA,
  UPDATE_BASE,
  UPDATE_TO_CURRENCY,
  INPUT_CHANGE,
  UPDATE_CURRENCY_BALANCES,
  UPDATE_CURRENCIES_ARRAY
} from "../actions/types";

const initialState = {
  base: "USD",
  baseCode: "us",
  amount: null,
  toCurrency: "EUR",
  toCurrencyCode: "eu",
  currencyRate: "",
  transactionDate: "",
  currencyRateInverted: null,
  currencies: [],
  userBalance: [{ currency: "USD", value: 1000 }]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BASE_CURRENCY_DATA:
      return {
        ...state,
        currencyRate: action.payload1,
        transactionDate: action.payload2,
        currencyRateInverted: action.payload3,
        currencies: action.payload4
      };
    case UPDATE_BASE:
      return {
        ...state,
        base: action.payload1,
        baseCode: action.payload2
      };
    case UPDATE_TO_CURRENCY:
      return {
        ...state,
        toCurrency: action.payload1,
        toCurrencyCode: action.payload2
      };
    case INPUT_CHANGE:
      return {
        ...state,
        amount: action.payload
      };
    case UPDATE_CURRENCY_BALANCES:
      return {
        ...state,
        userBalance: action.payload
      };
    case UPDATE_CURRENCIES_ARRAY:
      return {
        ...state,
        currencies: action.payload
      };
    default:
      return state;
  }
}
