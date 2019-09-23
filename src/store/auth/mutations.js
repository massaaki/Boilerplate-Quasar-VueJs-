export function SET_FOO(state, payload) {
  state.foo = payload
};


export function retrieveveToken(state, payload) {
  state.token = payload;
};

export function destroyToken(state) {
  state.token = null;
};
