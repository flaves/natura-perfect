import React, { useCallback, useMemo } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { ErrorMessage, useFormContext } from 'react-hook-form';

import Input, { InputProps } from '../../../shared/input';
import Radio from '../../../shared/radio';

import mq from '../../../../styles/mq';
import getValidation from '../../../../helpers/getValidation';

import { ContactFormData } from './index';
import { ThemeType } from '../../../../styles/theme';

const Contact: React.FC = () => {
  const { errors } = useFormContext<ContactFormData>();
  const { color } = useTheme<ThemeType>();

  const { isRequired, isRequiredRadio, isEmail, minLength } = getValidation();

  const inputs: InputProps[] = useMemo(
    () => [
      {
        label: `Prénom *`,
        name: `contact.firstName`,
        validation: {
          ...isRequired,
          ...minLength(),
        },
      },
      {
        label: `Nom *`,
        name: `contact.lastName`,
        validation: {
          ...isRequired,
          ...minLength(),
        },
      },
      {
        label: `Rue *`,
        name: `contact.addressStreet`,
        validation: {
          ...isRequired,
          ...minLength(),
        },
      },
      {
        label: `Numéro *`,
        name: `contact.addressStreetNumber`,
        validation: {
          ...isRequired,
        },
      },
      {
        label: `Localité *`,
        name: `contact.addressStreetCity`,
        validation: {
          ...isRequired,
          ...minLength(),
        },
      },
      {
        label: `Code postal *`,
        name: `contact.addressStreetZip`,
        validation: {
          ...isRequired,
          ...minLength(),
        },
      },
      {
        label: `E-mail *`,
        name: `contact.email`,
        type: `email`,
        validation: {
          ...isRequired,
          ...isEmail,
          ...minLength(),
        },
      },
      {
        label: `Numéro de téléphone *`,
        name: `contact.phone`,
        validation: {
          ...isRequired,
          ...minLength(),
        },
      },
    ],
    []
  );

  const renderInputs = useCallback(
    (inputs: InputProps[]) => (
      <ul
        css={css`
          ${mq(`md`)} {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -2rem;
          }
        `}
      >
        <li
          css={css`
            margin-bottom: 20px;
            height: 52px;

            ${mq(`md`)} {
              flex: 0 0 100%;
              max-width: 100%;
              padding: 0 2rem;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              margin-left: -5px;

              & > div:first-of-type {
                margin-right: 40px;
              }
            `}
          >
            <Radio
              id="private"
              name="contact.type"
              label="Un particulier"
              value="private"
              validation={{
                ...isRequiredRadio(),
              }}
            />
            <Radio
              id="company"
              name="contact.type"
              label="Une entreprise"
              value="company"
              validation={{
                ...isRequiredRadio(),
              }}
            />
          </div>
          <div>
            <ErrorMessage errors={errors} name="contact.type">
              {({ message }) => (
                <small
                  css={css`
                    color: ${color.error};
                    display: block;
                    margin-top: 10px;
                  `}
                >
                  {message}
                </small>
              )}
            </ErrorMessage>
          </div>
        </li>
        {inputs?.map((input, key) =>
          key !== 3 ? (
            <li
              key={key}
              css={css`
                ${mq(`md`)} {
                  flex: 0 0 50%;
                  max-width: 50%;
                  padding: 0 2rem;
                }
              `}
            >
              <Input
                type={input.type}
                label={input.label}
                name={input.name}
                validation={input.validation}
              />
            </li>
          ) : (
            <li
              key={key}
              css={css`
                ${mq(`md`)} {
                  flex: 0 0 50%;
                  max-width: 50%;
                  padding: 0 2rem;
                }
              `}
            >
              <div
                css={css`
                  display: flex;
                  margin: 0 -1rem;

                  & > div {
                    flex: 0 0 50%;
                    max-width: 50%;
                    padding: 0 1rem;
                  }
                `}
              >
                <Input
                  label={input.label}
                  name={input.name}
                  validation={input.validation}
                />
                <Input label="Boite" name="contact.addressStreetBox" />
              </div>
            </li>
          )
        )}
      </ul>
    ),
    [errors]
  );

  return (
    <>
      <h2
        css={css`
          font-size: 30px;
          margin-bottom: 40px;
        `}
      >
        Aidez-nous à mieux vous connaître.
      </h2>
      {renderInputs(inputs)}
    </>
  );
};

export default React.memo(Contact);
