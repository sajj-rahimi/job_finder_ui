/*
 * how to use:
 * settings.set('token', 'abc')
 * settings.get()          => returns all settings = {...}
 * settings.get('token')   => returns "token" settings = 'abc'
 * settings.clear('token') => clear   "token"
 * settings.clear()        => clear all settings
 *
 * and so on ...
 *
 */

 export default {
    key: `__JOBFINDER__LOCALE__CONFIG__`,
    get: function(key) {
      let data = '{}'
  
      data = window.localStorage.getItem(this.key) || data
  
      try {
        data = JSON.parse(data)
      } catch (er) {
        console.warn('Cannot parse settings: ', data)
        data = {}
      }
  
      if (key) data = data[key]
  
      return data
    },
    set: function(key, value) {
      let data = this.get()
  
      data[key] = value
  
      window.localStorage.setItem(this.key, JSON.stringify(data))
    },
    /**
     * get or set if not exists
     * @param key
     * @param defaultValue
     */
    getOrSet(key, defaultValue) {
      let result = this.get(key)
      if (result === undefined) {
        result = defaultValue
        this.set(key, defaultValue)
      }
      return result
    },
    clear(key) {
      let data = this.get()
  
      if (key) {
        if (data[key] === undefined) return
        data[key] = undefined
      } else {
        data = {}
      }
  
      window.localStorage.setItem(this.key, JSON.stringify(data))
    },
    bind(vm, property, key, defaultValue) {
      if (!defaultValue) defaultValue = vm[property]
      vm[property] = this.getOrSet(key, defaultValue)
      vm.$watch(property, val => {
        this.set(key, val)
      })
    }
  }
  