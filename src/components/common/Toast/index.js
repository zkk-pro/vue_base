import Vue from 'vue'
import toast from './toast.vue'

let toastInstance = null

function Create(Component, props) {
  const vm = new Vue({
    render(h) {
      return h(Component, { props })
    }
  }).$mount()

  const comp = vm.$children[0]

  document.body.appendChild(vm.$el)

  comp.remove = () => {
      document.body.removeChild(vm.$el)
      vm.$destroy()
      toastInstance = null
  }

  return comp
}

function show(props) {
  if (toastInstance) {
    toastInstance._hide()
  }
  toastInstance = new Create(toast, props)
  toastInstance._show()
}

function hide() {
  if (toastInstance) {
    toastInstance._hide()
  }
}

function install(_Vue) {
  _Vue.prototype.$showToast = show
  _Vue.prototype.$hideToast = hide
}

export default {
  show,
  hide,
  install
}