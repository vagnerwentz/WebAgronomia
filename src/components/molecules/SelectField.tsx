import { Label } from '../atoms/Label';
import { Select } from '../atoms/Select';
import styles from './SelectField.module.css';

type SelectFieldProps = {
  label: string;
  options: { value: number; label: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  classNameLabel?: string;
};

export function SelectField({ label, options, value, onChange, className, classNameLabel}: SelectFieldProps) {
  return (
    <div className={className}>
      <Label text={label} htmlFor={label} className={classNameLabel}/>
      <Select selectClassName={styles.select} options={options} value={value} onChange={onChange} />
    </div>
  );
};
