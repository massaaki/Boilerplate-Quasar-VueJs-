import {
  axiosInstance
} from 'boot/axios'

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
  return new Promise((resolve, reject) => {
    axiosInstance
      .post("login", {
        username: credentials.username,
        password: credentials.password
      })
      .then(response => {
        const token = response.data.access_token;
        localStorage.setItem("access_token", token);
        commit("retrieveveToken", token);
        resolve(response);

      })
      .catch(error => {
        reject(error);
      });
  });
};

export function destroyToken(context) {
  axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
  if (context.getters.loggedIn) {
    return new Promise((resolve, reject) => {
      axiosInstance
        .post("/logout")
        .then(response => {
          localStorage.removeItem("access_token");
          context.commit("destroyToken");
          resolve(response);
        })
        .catch(error => {
          localStorage.removeItem("access_token");
          context.commit("destroyToken");
          reject(error);
        });
    });
  }
};
