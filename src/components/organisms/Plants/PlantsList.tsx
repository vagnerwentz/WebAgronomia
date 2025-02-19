import styles from './PlantsList.module.css';
import { ListPlantsDTO } from "../../../models/Plant/ListPlantsDTO";
import { PlantListItem } from "../../molecules/Plant/PlantListItem";

interface PlantsListProps {
  plants: ListPlantsDTO[];
  onDeletePlant: (id: string) => void;
  onEditPlant: (plant: ListPlantsDTO) => void;
}

export function PlantsList({ plants, onDeletePlant, onEditPlant }: PlantsListProps) {
    console.log("PlantsList" + JSON.stringify(plants.length));
    return (
        <ul className={styles.plantsList}>
        {plants.length === 0 ? (<strong>Não há informações de plantas!</strong>) : (
            <div>
            {plants.map(plant => (
                <PlantListItem
                key={plant.id}
                id={plant.id!}
                type={plant.type}
                plant={plant}
                onDelete={onDeletePlant}
                onEdit={onEditPlant}
                />
            ))}
            </div>
        )}
        
        </ul>
    );
}
