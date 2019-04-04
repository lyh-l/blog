import Vue from 'vue'
import cookie from 'js-cookie'

export default function(context) {
  let {$axios, store, app, redirect} = context
  $axios.onRequest(config => {
    return config
  })

  $axios.onError(error => {
    if (process.client) {
      // axios 数据结构
      let resp = error.response
      let data = resp.data

      Vue.$notify.error({
        title: resp.status,
        message: data.payload || data.msg
      })

    }
    // TODO asyncData 的错误 需要日志监控
    else console.log('error', error)
  })
}
