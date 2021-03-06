export class ResponseData<T> {
  success: boolean;
  message: string | string[];
  errorMessage: string;
  data: T;
}
