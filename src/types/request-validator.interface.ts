export interface IRequestValidator {
  body: Record<string, unknown>;
  params: Record<string, unknown>;
  query: Record<string, unknown>;
  headers: Record<string, unknown>;
}

export interface IValidationError {
  name: string;
  message: string;
  path: string;
  errors: string[];
  inner: unknown[];
  type: string;
  value: Record<string, unknown>;
}
