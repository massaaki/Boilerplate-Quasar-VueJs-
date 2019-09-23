import {
  axiosInstance
} from 'boot/axios'

export function getFoo(context) {
  console.log('getting foo...')

  axiosInstance.get('foo').then((response) => {
    console.log(response)
    context.commit('setFoo', response.data)
  })

}
