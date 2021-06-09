import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS,
  ADD_CART_PRODUCT,
} from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id,
  };
}

export function addCartProduct(product) {
  return {
    type: ADD_CART_PRODUCT,
    payload: product,
  };
}

export function fetchCartProducts() {
  return {
    type: SET_CART_PRODUCTS,
    payload: [
      {
        _id: 0,
        product: {
          _id: 0,
          title: "Javascript In The Browser",
          description:
            "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.",
          price: 1.99,
          belongsTo: [0, 1],
          imageUrl: "http://via.placeholder.com/80x80",
        },
        quantity: 2,
      },
      {
        _id: 1,
        product: {
          _id: 1,
          title: "Graph Database",
          description:
            "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.",
          price: 1.99,
          belongsTo: [0, 6],
          imageUrl: "http://via.placeholder.com/80x80",
        },
        quantity: 1,
      },
    ],
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 19.4,
        orderNumber: "A00482483343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 west State Street",
        },
      },
      {
        _id: 1,
        total: 1.3,
        orderNumber: "3233dhbd23uh32",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Maxwell Nelson",
          shippingAddress: "1373 west State Street",
        },
      },
      {
        _id: 2,
        total: 1.3,
        orderNumber: "G00482483343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Max Asher Nelson",
          shippingAddress: "1234 west State Street",
        },
      },
      {
        _id: 3,
        total: 16.4,
        orderNumber: "adckhKFNH342",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 west State Street",
        },
      },
      {
        _id: 4,
        total: 19.4,
        orderNumber: "A00482483343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 west State Street",
        },
      },
      {
        _id: 5,
        total: 19.4,
        orderNumber: "A00482483343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 west State Street",
        },
      },
      {
        _id: 6,
        total: 19.4,
        orderNumber: "A00482483343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 west State Street",
        },
      },
      {
        _id: 7,
        total: 3.2,
        orderNumber: "5YDUEDBJHDEBDB",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Andrew Wold",
          shippingAddress: "348 Yo State Street",
        },
      },
    ],
  };
}
