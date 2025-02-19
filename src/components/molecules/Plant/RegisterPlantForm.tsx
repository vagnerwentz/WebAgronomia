import { useRegisterPlantForm } from './useRegisterPlantForm';
import { InputField } from '../../atoms/InputField';
import { Button } from '../../atoms/Button';
import styles from './RegisterPlantForm.module.css';
import { RegisterPlantDTO } from '../../../models/Plant/RegisterPlantDTO';

interface RegisterPlantFormProps {
  onRegisterPlant: (plant: RegisterPlantDTO) => void;
}

export function RegisterPlantForm({ onRegisterPlant }: RegisterPlantFormProps) {
  const {
    formData,
    handleInputChange,
    handleSubmit,
  } = useRegisterPlantForm(onRegisterPlant);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <InputField
        id="type"
        value={formData.type}
        onChange={handleInputChange}
        label="Tipo da planta"
        classNameLabel={styles.input}
      />

      <InputField
        id="area"
        value={formData.area}
        onChange={handleInputChange}
        label="Área"
        classNameLabel={styles.input}
      />

      <div className={styles.rowContainer}>
        <InputField
          id="minimumTemperature"
          value={formData.minimumTemperature}
          onChange={handleInputChange}
          label="Temperatura mínima"
          classNameLabel={styles.input}
        />
        <InputField
          id="maximumTemperature"
          value={formData.maximumTemperature}
          onChange={handleInputChange}
          label="Temperatura máxima"
          classNameLabel={styles.input}
        />
      </div>

      <div className={styles.rowContainer}>
        <InputField
          id="minimumHumidity"
          value={formData.minimumHumidity}
          onChange={handleInputChange}
          label="Umidade mínima"
          classNameLabel={styles.input}
        />
        <InputField
          id="maximumHumidity"
          value={formData.maximumHumidity}
          onChange={handleInputChange}
          label="Umidade máxima"
          classNameLabel={styles.input}
        />
      </div>

      <InputField
        id="idealSchedule"
        value={formData.idealSchedule}
        onChange={handleInputChange}
        label="Horário ideal"
        classNameLabel={styles.input}
      />

      <Button label="Registrar" />
    </form>
  );
}
