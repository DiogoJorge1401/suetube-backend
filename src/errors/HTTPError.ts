export class HTTPError extends Error {
  success = false;

  constructor(msg: string, public statusCode = 500) {
    super(msg);
  }
}
