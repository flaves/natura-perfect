import React, { useCallback } from 'react';
import { css } from '@emotion/core';
import { useForm, FormContext } from 'react-hook-form';

import Container from '../../../styled/container';
import Contact from './contact';
import Services from './services';
import Description from './description';
import Button from '../../../shared/button';

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

  const onSubmit = useCallback(
    methods.handleSubmit((data) => {
      console.log(data);
    }),
    []
  );

  return (
    <FormContext {...methods}>
      <section
        css={css`
          margin-bottom: 150px;
        `}
      >
        <form onSubmit={onSubmit}>
          <Container>
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
          </Container>
        </form>
      </section>
    </FormContext>
  );
};

export default React.memo(Form);
