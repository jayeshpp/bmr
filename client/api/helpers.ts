// Custom error class to include additional error information
class CustomError extends Error {
  error: boolean;
  constructor(message: string) {
    super(message);
    this.error = true;
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}

export function handleErrorResponse(error: any): never {
  if (error.response) {
    // Server responded with an error status (4xx or 5xx)
    if (error.response.status === 404) {
      throw new CustomError("Resource not found");
    } else if (error.response.status === 403) {
      throw new CustomError("Unauthorized");
    } else {
      throw new CustomError("An error occurred on the server");
    }
  } else if (error.request) {
    // Request was made but no response was received
    throw new CustomError("No response received from the server");
  } else {
    // Something else happened while setting up the request
    throw new CustomError("An error occurred while making the request");
  }
}

export async function performRequest<T>(
  requestFunction: (...args: any[]) => Promise<T>,
  ...args: any[]
): Promise<{ status: number; data: T }> {
  try {
    const response: any = await requestFunction(...args);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    handleErrorResponse(error);
  }
}
