import { createSlice } from "@reduxjs/toolkit";
export const productslice = createSlice({
  name: "product",
  initialState: {
    items: [],
    money: 100,
    control: 0,
  },
  reducers: {
    buy: (state, actions) => {
      if (state.money >= actions.payload.item.price) {
        state.money -= actions.payload.item.price;
        if (state.items.length > 0) {
          state.items.map(
            (item) =>
              item.name === actions.payload.item.name &&
              ((item.piece += 1),
              (state.control = 1),
              (item.amount =
                actions.payload.item.price * actions.payload.piece))
          );
          if (state.control === 0) {
            state.items.push({
              name: actions.payload.item.name,
              piece: actions.payload.piece,
              amount: actions.payload.item.price * actions.payload.piece,
            });
          }
          state.control = 0;
        } else {
          state.items.push({
            name: actions.payload.item.name,
            piece: actions.payload.piece,
            amount: actions.payload.item.price * actions.payload.piece,
          });
        }
      }
    },
    sell: (state, actions) => {
      console.log(actions.payload);
      if (actions.payload.piece > 0) {
        state.money += actions.payload.item.price;
        state.items.map(
          (item) => item.name === actions.payload.item.name && (item.piece -= 1)
        );
        state.items = state.items.filter((item) => item.piece > 0);
      }
    },
  },
});
export const { buy, sell } = productslice.actions;
export default productslice.reducer;
