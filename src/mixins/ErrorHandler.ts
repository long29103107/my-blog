import { get } from 'lodash'
import { h } from 'vue'
import { notification } from 'ant-design-vue'

// export default {
//   displayErrorNotification(err: any) {
//     console.log('ssdss')
//     if (!err || !err.response) {
//       notification.error({ message: 'Errors encountered.' })
//       return
//     }

//     const { status } = err.response

//     if (status == '401') {
//       notification.error({
//         message: "You don't have permissions to perform this action."
//       })

//       return
//     }

//     if (status == '409') {
//       notification.warning({
//         message: 'Importing...'
//       })

//       return
//     }

//     const requestCorrelationId = err.response.headers['request-correlation-id']

//     if (requestCorrelationId) {
//       const message =
//         get(err, 'response.data.message') ||
//         h('div', [
//           h(
//             'div',
//             'Something went wrong. Please provide Silicon Stack support staff with the following request id:'
//           ),
//           h('div', [h('b', `${requestCorrelationId}`)])
//         ])

//       const style = get(err, 'response.data.message')
//         ? undefined
//         : { marginLeft: `${375 - 450}px`, width: '450px' }

//       notification.error({ message, style })

//       return
//     }

//     notification.error({ message: 'Errors encountered.' })
//   }
// }

const ErrorHandler = {
  displayError(err: any) {
    if (!err || !err.response) {
      notification.error({ message: 'An unexpected error occurred.' })
      return
    }

    const { status, data } = err.response

    switch (status) {
      case 400:
        notification.error({ message: 'Bad Request', description: data.message || '' })
        break
      case 401:
        notification.error({ message: 'Unauthorized', description: 'Please login to continue.' })
        break
      case 404:
        notification.error({
          message: 'Not Found',
          description: 'The requested resource was not found.'
        })
        break
      case 500:
        notification.error({
          message: 'Server Error',
          description: 'Something went wrong on the server.'
        })
        break
      default:
        notification.error({
          message: `Error ${status}`,
          description: data.message || 'An unknown error occurred.'
        })
    }
  }
}

export default ErrorHandler
