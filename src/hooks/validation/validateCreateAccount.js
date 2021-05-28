export default function validateCreateAccount(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "El nombre es necesario";
  }
  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email invalido";
  }
  if (!values.password) {
    errors.password = "El password es necesario";
  } else if (values.password.lenght < 6) {
    errors.password = "El password tiene que ser mayor a 6 caracteres";
  }

  return errors;
}
