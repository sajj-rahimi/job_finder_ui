import { api } from "src/boot/axios"
  export function signIn(ctx , payload){
     api.post('/login' , payload).then((response)=>{
        console.log(response)
    })
    }
    export function signup(ctx , payload){
      console.log(payload)
      api.post('/register' , payload).then((response)=>{
         console.log(response)
     })
     }
  //   export function signun(ctx , payload){
  //     this.$axios.post('/signup' , payload).then((response)=>{
  //        console.log(response)
  //    })
  //    }
  // export function setToken(context, payload) {
  //   payload = {
  //     accessToken: '',
  //     refreshToken: '',
  //     ...payload
  //   }
  //   settings.set('token', payload.accessToken)
  //   settings.set('token_expire', new Date().getTime() + 24 * 3600 * 1000)
  //   settings.set('token_refresh', payload.refreshToken)
  // }
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

