import { notification } from 'ant-design-vue'

const displayError = (err: any) => {
  if (!err || !err.response) {
    notification.error({ message: 'An unexpected error occurred.' });
    return;
  }

  const { status, data } = err.response;

  const errorMessages: Record<number, { message: string; description: string }> = {
    400: { message: 'Bad Request', description: data?.message || 'Invalid request.' },
    401: { message: 'Unauthorized', description: 'Please login to continue.' },
    403: { message: 'Forbidden', description: 'You do not have permission to access this resource.' },
    404: { message: 'Not Found', description: 'The requested resource was not found.' },
    500: { message: 'Server Error', description: 'Something went wrong on the server.' },
  };

  const errorDetail = errorMessages[status] || {
    message: `Error ${status}`,
    description: data?.message || 'An unknown error occurred.',
  };

  notification.error(errorDetail);
}

export { displayError }