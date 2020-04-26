import React, { useCallback, useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { useForm, FormContext } from 'react-hook-form';

import Container from '../../../styled/container';
import Contact from './contact';
import Services from './services';
import Description from './description';
import Button from '../../../shared/button';

import useInterval from '../../../../hooks/useInterval';

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
  services: string[];
  description: string;
}

const Form: React.FC = () => {
  const methods = useForm<ContactFormData>();
  const [isPreviousForm, setIsPreviousForm] = useState(false);

  useInterval(() => {
    if (methods.formState.dirty) {
      const values = methods.getValues({ nest: true });
      window.localStorage.setItem(`contactFormData`, JSON.stringify(values));
    }
  }, 10000);

  useEffect(() => {
    if (methods.formState.dirty) {
      const contactFormData = window.localStorage.getItem(`contactFormData`);
      if (contactFormData) setIsPreviousForm(true);
    }
  }, [methods.formState.dirty]);

  const onSubmit = useCallback(
    methods.handleSubmit((data) => {
      console.log(data);
      methods.reset();
      window.localStorage.removeItem(`contactFormData`);
    }),
    []
  );

  const get = useCallback(() => {
    const contactFormData = window.localStorage.getItem(`contactFormData`);
    if (contactFormData) {
      Object.entries(JSON.parse(contactFormData)).map(([key, value]) => {
        methods.setValue(key, value);
      });
    }
  }, [methods.setValue]);

  return (
    <FormContext {...methods}>
      <section
        css={css`
          margin-bottom: 150px;
        `}
      >
        <Container>
          {isPreviousForm && (
            <h3
              onClick={get}
              css={css`
                display: none;
              `}
            >
              Cliquez-ici pour reprendre où vous vous étiez arreté.
            </h3>
          )}
          <form onSubmit={onSubmit}>
            <div
              css={css`
                max-width: 800px;
              `}
            >
              <Contact />
              <Services />
              <Description />
              <Button type="submit" variant="black">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Envoyez votre demande
              </Button>
            </div>
          </form>
        </Container>
      </section>
    </FormContext>
  );
};

export default React.memo(Form);
