import { Button } from '../atoms/Button';

type FormActionsProps = {
  onSubmit?: () => void;
};

export function FormActions({ onSubmit }: FormActionsProps) {
  return (
    <div className="form-actions">
      <Button label="Matricular" onClick={onSubmit!} />
    </div>
  );
};
