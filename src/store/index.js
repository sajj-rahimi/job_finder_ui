import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import actions from './module-example/actions'
import getters from './module-example/getters'
import mutations from './module-example/mutations'
import state from './module-example/state'
import index from './module-example/index'


// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
     index
    },
  })

  return Store
})
