import React, { useCallback } from 'react';
import { useForm, FormContext } from 'react-hook-form';

import Contact from './contact';

export interface ContactFormData {
  contact: {
    type: string;
    firstName: string;
    lastName: string;
    addressStreet: string;
    addressStreetNumber: string;
    addressStreetBox: string;
    addressCity: string;
    addressZip: string;
    email: string;
    phone: string;
  };
}

const Form: React.FC = () => {
  const methods = useForm<ContactFormData>();

  const onSubmit = useCallback(
    methods.handleSubmit((data) => {
      console.log(data);
    }),
    []
  );

  return (
    <FormContext {...methods}>
      <section>
        <form onSubmit={onSubmit}>
          <Contact />
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </FormContext>
  );
};

export default React.memo(Form);
