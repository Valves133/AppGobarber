// Typagem de erros do YUP
import { ValidationError } from 'yup';

// Interface para qualquer string que seja do tipo string, assim criada de forma dinâmica
interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  // váriavel do type Errors que é um objeto
  const validationErrors: Errors = {};

  // percorrer o array inner do YUP
  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
