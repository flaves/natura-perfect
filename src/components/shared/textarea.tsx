import React, { TextareaHTMLAttributes } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import {
  useFormContext,
  ValidationOptions,
  ErrorMessage,
} from 'react-hook-form';

import { ContactFormData } from '../pages/contact/form';
import { ThemeType } from '../../styles/theme';

export interface InputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  validation?: ValidationOptions;
}

const Textarea: React.FC<InputProps> = ({ label, validation, ...props }) => {
  const { errors, register } = useFormContext<ContactFormData>();
  const { color } = useTheme<ThemeType>();

  return (
    <div
      css={css`
        margin-bottom: 20px;
        min-height: 95px;
      `}
    >
      {label && props.name && (
        <label
          htmlFor={props.name}
          css={css`
            display: block;
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 10px;
          `}
        >
          {label}
        </label>
      )}
      <textarea
        {...props}
        id={props.name}
        ref={register(validation || {})}
        css={css`
          appearance: none;
          background-color: hsla(162, 11%, 65%, 0.1);
          border: 0;
          padding: 0.75rem;
          width: 100%;
          resize: vertical;
          min-height: 200px;
        `}
      />
      <ErrorMessage errors={errors} name={props.name}>
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
  );
};

export default React.memo(Textarea);
