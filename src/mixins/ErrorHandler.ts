import { get } from 'lodash'
import { h } from 'vue'
import { notification } from 'ant-design-vue'

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
