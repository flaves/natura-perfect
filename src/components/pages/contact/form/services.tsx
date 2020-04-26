import React, { useCallback } from 'react';
import { css } from '@emotion/core';
import { useFormContext } from 'react-hook-form';

import mq from '../../../../styles/mq';
import getValidation from '../../../../helpers/getValidation';

import Check from '../../../../svg/check.svg';

import { ContactFormData } from './index';

const services = [
  {
    title: `Haies & arbustes`,
  },
  {
    title: `Pelouse`,
  },
  {
    title: `Parterres`,
  },
  {
    title: `Les allées`,
  },
  {
    title: `Potager`,
  },
  {
    title: `Maison`,
  },
  {
    title: `Déchets`,
  },
];

const Services: React.FC = () => {
  const { register, watch } = useFormContext<ContactFormData>();

  const { isRequired } = getValidation();

  const currentServices = watch(`services`);

  const renderServices = useCallback(
    () => (
      <ul
        css={css`
          ${mq(`md`)} {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -1rem;
          }
        `}
      >
        {services.map((service, key) => {
          const active = currentServices?.includes(
            service?.title?.toLowerCase()
          );
          return (
            <li
              key={key}
              css={css`
                margin-bottom: 20px;
                min-width: 208px;

                ${mq(`md`)} {
                  flex: 0 0 25%;
                  padding: 0 1rem;
                }
              `}
            >
              <input
                type="checkbox"
                id={key.toString()}
                hidden
                ref={register(isRequired)}
                value={service?.title?.toLowerCase()}
                name="services"
              />
              <div>
                <label
                  htmlFor={key.toString()}
                  tabIndex={0}
                  css={css`
                    cursor: pointer;
                    display: block;
                    transition: border-color 0.3s;
                    outline: none;
                    margin-bottom: 10px;
                    position: relative;
                    padding: 1rem;
                    border: 2px solid
                      ${active ? `#4c7067` : `hsla(162, 11%, 65%, 0.1)`};
                    box-shadow: ${active
                      ? `0 0 30px hsla(165,19%,37%, .1)`
                      : `none`};
                    background-color: hsla(162, 11%, 65%, 0.1);
                  `}
                >
                  {service.title}
                  <div
                    css={css`
                      position: absolute;
                      top: -10px;
                      right: -10px;
                      transition: opacity 0.3s;
                      opacity: ${active ? 1 : 0};

                      svg {
                        width: 20px;
                        height: 20px;
                      }
                    `}
                  >
                    <Check />
                  </div>
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    ),
    [currentServices]
  );

  return (
    <section
      css={css`
        margin-bottom: 30px;
      `}
    >
      <h2
        css={css`
          font-size: 30px;
          margin-bottom: 40px;
        `}
      >
        De quoi avez-vous besoin ?
      </h2>
      {renderServices()}
    </section>
  );
};

export default React.memo(Services);
