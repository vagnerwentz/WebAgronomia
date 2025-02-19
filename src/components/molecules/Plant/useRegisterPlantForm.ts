import { useState } from 'react';
import { registerPlant } from '../../../api/api';
import { RegisterPlantDTO } from '../../../models/Plant/RegisterPlantDTO';

export function useRegisterPlantForm(onRegisterPlant: (plant: RegisterPlantDTO) => void) {
  const [formData, setFormData] = useState({
    type: '',
    area: '',
    maximumHumidity: '',
    maximumTemperature: '',
    minimumHumidity: '',
    minimumTemperature: '',
    idealSchedule: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const plant: RegisterPlantDTO = {
        type: formData.type,
        area: formData.area,
        wateringConditionsDTO: {
          maximumHumidity: formData.maximumHumidity,
          maximumTemperature: formData.maximumTemperature,
          minimumHumidity: formData.minimumHumidity,
          minimumTemperature: formData.minimumTemperature,
          idealSchedule: formData.idealSchedule,
        },
      };
      await registerPlant(plant);
      onRegisterPlant(plant);
    } catch (error) {
      console.error(error);
      alert('Falha ao tentar adicionar uma planta.');
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
  };
}
