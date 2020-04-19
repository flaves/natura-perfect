const emailRegex = new RegExp(
  `(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])`
);

const getValidation = () => {
  const isRequired = {
    required: `Ce champ est requis.`,
  };

  const isRequiredRadio = (value = `deux`) => ({
    required: `Choisissez une des ${value} options.`,
  });

  const isEmail = {
    pattern: {
      value: emailRegex,
      message: `Ce champ requiert une adresse e-mail valide.`,
    },
  };

  const minLength = (value = 3) => ({
    minLength: {
      value,
      message: `Ce champ requiert minimum ${value} caractère${
        value > 1 ? `s` : ``
      }.`,
    },
  });

  return { isRequired, isRequiredRadio, isEmail, minLength };
};

export default getValidation;
