import {
  axiosInstance
} from 'boot/axios'

import {
  Loading
} from 'quasar'

export function getFoo({
  commit
}) {
  console.log('getting foo...')

  axiosInstance.get('foo').then((response) => {
    console.log(response)
    commit('SET_FOO', response.data)
  })
};

export function retrieveToken({
  commit
}, credentials) {
  Loading.show();
  return new Promise((resolve, reject) => {
    axiosInstance
      .post("login", {
        username: credentials.username,
        password: credentials.password
      })
      .then(response => {
        const token = response.data.access_token;
        axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        console.log("token", token);
        commit("retrieveveToken", token);
        localStorage.setItem("access_token", token);
        resolve(response);
        Loading.hide();
      })
      .catch(error => {
        Loading.hide();
        reject(error);
      });
  });
};

export function retrieveUser(context) {
  axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
  return new Promise((resolve, reject) => {
    axiosInstance
      .get("user")
      .then(response => {
        context.commit("setUser", response.data);
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export function register(context, data) {
  Loading.show();
  return new Promise((resolve, reject) => {
    axiosInstance
      .post("register", {
        name: data.name,
        email: data.email,
        password: data.password
      })
      .then(response => {
        const token = response.data.access_token;
        axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        console.log("token", token);
        localStorage.setItem("access_token", token);
        context.commit("retrieveveToken", token);
        resolve(response);
        Loading.hide();
      })
      .catch(error => {
        reject(error);
        Loading.hide();
      });
  });
};

export function destroyToken(context) {
  axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
  if (context.getters.loggedIn) {
    Loading.show();
    return new Promise((resolve, reject) => {
      axiosInstance
        .post("/logout")
        .then(response => {
          localStorage.removeItem("access_token");
          context.commit("destroyToken");
          resolve(response);
          Loading.hide();
        })
        .catch(error => {
          localStorage.removeItem("access_token");
          context.commit("destroyToken");
          reject(error);
          Loading.hide();
        });
    });
  }
};
