export function SET_FOO(state, payload) {
  state.foo = payload
};


export function retrieveveToken(state, payload) {
  state.token = payload;
};

export function destroyToken(state) {
  state.token = null;
};

export function setUserEmail(state, payload) {
  console.log("email..: ", payload);
  state.email = payload
}

export function setUser(state, payload) {
  state.user = payload
}
