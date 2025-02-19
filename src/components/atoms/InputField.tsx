import React from 'react';
import styles from './css/InputField.module.css';

interface InputFieldProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  classNameLabel?: string | undefined;
  type?: "text" | "number" | "password";
}

export function InputField({ id, value, onChange, label, classNameLabel, type = "text" }: InputFieldProps) {
  return (
    <div className={styles.inputField}>
      <label htmlFor={id} className={`${styles.label} ${classNameLabel || ''}`}>
        {label}
      </label>
      <input id={id} type={type} value={value} onChange={onChange} className={styles.input} />
    </div>
  );
}
