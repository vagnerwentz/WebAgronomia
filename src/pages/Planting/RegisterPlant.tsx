import { RegisterPlantForm } from "../../components/molecules/Plant/RegisterPlantForm";
import { RegisterPlantDTO } from "../../models/Plant/RegisterPlantDTO";
import styles from './RegisterPlant.module.css';

function RegisterPlantPage() {
    const handleRegisterPlant = async (plant: RegisterPlantDTO) => {
        
      };
      
    return (
        <div className={styles.plantContainer}>
          <h1>Registrar uma planta</h1>
          <RegisterPlantForm onRegisterPlant={handleRegisterPlant}/>
        </div>
      );
}

export default RegisterPlantPage;