import React, { InputHTMLAttributes } from 'react';
import { css } from '@emotion/core';
import { useFormContext, ValidationOptions } from 'react-hook-form';

import { ContactFormData } from '../pages/contact/form';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  name: string;
  validation?: ValidationOptions;
}

const Radio: React.FC<RadioProps> = ({ label, validation, ...props }) => {
  const { register } = useFormContext<ContactFormData>();

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <input {...props} type="radio" ref={register(validation || {})} />
      {label && props.id && (
        <label
          htmlFor={props.id}
          css={css`
            cursor: pointer;
            display: block;
            font-size: 16px;
            font-weight: 400;
            padding-top: 7px;
            margin-left: 10px;
          `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default React.memo(Radio);
