import { useState } from "react";

import styles from './EditPlantModal.module.css';
import { ListPlantsDTO } from "../../../models/Plant/ListPlantsDTO";
import { InputField } from "../../atoms/InputField";

interface EditPlantModalProps {
    plant: ListPlantsDTO; // Adapte conforme o modelo real
    onClose: () => void;
    onSave: (id: string, updatedFields: { [key: string]: any }) => void;
}

export function EditPlantModal({ plant, onClose, onSave }: EditPlantModalProps) {
    const [updatedFields, setUpdatedFields] = useState<Record<string, any>>({});

    console.log("updateFields" + JSON.stringify(updatedFields));
    console.log("plant" + JSON.stringify(plant));
    console.log("plant.wateringConditionsDTO" + plant.wateringConditions);


    const handleChange = (field: string, value: any) => {
        setUpdatedFields((prev) => {
            const fields = field.split("."); // Divide o caminho por '.'
            let updated = { ...prev };
    
            fields.reduce((acc, key, index) => {
                if (index === fields.length - 1) {
                    acc[key] = value; // Atualiza a última chave
                } else {
                    acc[key] = acc[key] ? { ...acc[key] } : {}; // Cria o objeto se não existir
                }
                return acc[key];
            }, updated);
    
            return updated;
        });
    };
    
    const handleSave = () => {
        onSave(plant.id, updatedFields);
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Editar Planta</h2>
                <form>
                    <InputField
                        id="type"
                        value={updatedFields.type ?? plant.type}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("type", e.target.value)}
                        label="Tipo da planta"
                        classNameLabel={styles.input}
                    />

                    <InputField
                        id="area"
                        value={updatedFields.area ?? plant.area}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("area", e.target.value)}
                        label="Área"
                        classNameLabel={styles.input}
                    />

                    <div className={styles.rowContainer}>
                        <InputField
                            id="minimumTemperature"
                            value={
                                updatedFields.wateringConditionsDTO?.minimumTemperature ?? 
                                plant.wateringConditions?.minimumTemperature
                            }
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                                handleChange("wateringConditionsDTO.minimumTemperature", e.target.value)
                            }
                            label="Temperatura mínima"
                            classNameLabel={styles.input}
                        />

                        <InputField
                            id="maximumTemperature"
                            value={
                                updatedFields.wateringConditionsDTO?.maximumTemperature ?? 
                                plant.wateringConditions?.maximumTemperature
                            }
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                                handleChange("wateringConditionsDTO.maximumTemperature", e.target.value)
                            }
                            label="Temperatura máxima"
                            classNameLabel={styles.input}
                        />
                    </div>

                    <div className={styles.rowContainer}>
                        <InputField
                            id="minimumHumidity"
                            value={
                                updatedFields.wateringConditionsDTO?.minimumHumidity ?? 
                                plant.wateringConditions?.minimumHumidity
                            }
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                                handleChange("wateringConditionsDTO.minimumHumidity", e.target.value)
                            }
                            label="Umidade mínima"
                            classNameLabel={styles.input}
                        />

                        <InputField
                            id="maximumHumidity"
                            value={
                                updatedFields.wateringConditionsDTO?.maximumHumidity ?? 
                                plant.wateringConditions?.maximumHumidity
                            }
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                                handleChange("wateringConditionsDTO.maximumHumidity", e.target.value)
                            }
                            label="Umidade máxima"
                            classNameLabel={styles.input}
                        />
                    </div>

                    <InputField
                        id="idealSchedule"
                        value={updatedFields.wateringConditionsDTO?.idealSchedule ?? 
                            plant.wateringConditions?.idealSchedule}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                                handleChange("wateringConditionsDTO.idealSchedule", e.target.value)
                            }
                        label="Horário ideal"
                        classNameLabel={styles.input}
                    />
                </form>
                <div className={styles.modalActions}>
                    <button className={styles.cancelButton} onClick={onClose}>
                        Cancelar
                    </button>
                    <button className={JSON.stringify(updatedFields) === "{}" ? styles.disabledButton : styles.saveButton} onClick={handleSave} disabled={JSON.stringify(updatedFields) === "{}"}>
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}
