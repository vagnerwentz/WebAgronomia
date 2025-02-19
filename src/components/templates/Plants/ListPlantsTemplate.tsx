import styles from './ListPlantsTemplate.module.css';
import { ListPlantsDTO } from '../../../models/Plant/ListPlantsDTO';
import { PlantsList } from '../../organisms/Plants/PlantsList';

interface ListPlantsTemplateProps {
  plants: ListPlantsDTO[];
  onDeletePlant: (id: string) => void;
  onEditPlant: (plant: ListPlantsDTO) => void;
}

export function ListPlantsTemplate({ plants, onDeletePlant, onEditPlant }: ListPlantsTemplateProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Lista de plantas registradas</h2>
      <PlantsList 
        plants={plants} 
        onDeletePlant={onDeletePlant}
        onEditPlant={onEditPlant}
      />
    </div>
  );
}
