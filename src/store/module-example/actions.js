import { api } from "src/boot/axios"
import {state} from './state'
function setToken( payload) {
  settings.set('token', payload)
 
}
  export function signIn(ctx , payload){
     return api.post('/login' , payload)
    }
    export function setUser(ctx,payload){
      this.state.user.name = payload.name || ''
      this.state.user.id = payload.id || ''
      this.state.user.isLogged = true
      setToken(payload.token)
    }
    export function signup(ctx , payload){
      console.log(payload)
      return api.post('/register' , payload)
     }
   
  // export function getToken({ dispatch }) {
  //   return new Promise((resolve, reject) => {
  //     let token = settings.get('token')
  //     if (!token) return reject()
  //     let expire = settings.get('token_expire')
  //     if (expire < new Date().getTime()) {
  //       dispatch('refreshToken')
  //         .then(resolve)
  //         .catch(reject)
  //     } else {
  //       resolve(token)
  //     }
  //   })
  // }
  // export function refreshToken({ dispatch }) {
  //   if (refreshTokenRequest) return refreshTokenRequest
  //   let refreshToken = settings.get('token_refresh')
  //   if (!refreshToken || !settings.get('token')) return Promise.reject()
  //   let request = apollo({
  //     $mainLoading: true,
  //     $client: 'user'
  //   }).mutate({
  //     query: RefreshTokenMutation,
  //     variables: { token: refreshToken }
  //   })
  //   request.then(response => {
  //     dispatch('setToken', response.data.refreshToken)
  //     return response.data.refreshToken.accessToken
  //   })
  //   request.finally(() => {
  //     refreshTokenRequest = null
  //   })
  //   refreshTokenRequest = request
  //   return request
  // }

