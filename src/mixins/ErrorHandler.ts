import { get } from 'lodash'
import { h } from 'vue'
import { notification } from 'ant-design-vue'

export default {
  displayErrorNotification(err: any) {
    if (!err || !err.response) {
      notification.error({ message: 'Errors encountered.' })
      return
    }

    const { status } = err.response

    if (status == '401') {
      notification.error({
        message: "You don't have permissions to perform this action."
      })

      return
    }

    if (status == '409') {
      notification.warning({
        message: 'Importing...'
      })

      return
    }

    const requestCorrelationId = err.response.headers['request-correlation-id']

    if (requestCorrelationId) {
      const message =
        get(err, 'response.data.message') ||
        h('div', [
          h(
            'div',
            'Something went wrong. Please provide Silicon Stack support staff with the following request id:'
          ),
          h('div', [h('b', `${requestCorrelationId}`)])
        ])

      const style = get(err, 'response.data.message')
        ? undefined
        : { marginLeft: `${375 - 450}px`, width: '450px' }

      notification.error({ message, style })

      return
    }

    notification.error({ message: 'Errors encountered.' })
  }
}
