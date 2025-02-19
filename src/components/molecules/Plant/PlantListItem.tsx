import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { ClipLoader } from "react-spinners";

import { Text } from "../../atoms/Text";
import styles from './PlantListItem.module.css';
import { ListPlantsDTO } from "../../../models/Plant/ListPlantsDTO";


interface PlantListItemProps {
    id: string;
    type: string;
    plant: ListPlantsDTO;
    onDelete: (id: string) => void;
    onEdit: (plant: ListPlantsDTO) => void;
}

export function PlantListItem({ id, type, plant, onDelete, onEdit }: PlantListItemProps) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);
        console.log("Rodando delete");
        await onDelete(id);
        setIsDeleting(false);
    };
    
    return (
        <li className={styles.plantItem}>
            <div className={styles.plantInfo}>
                <Text className={styles.plantType}>{type}</Text>
            </div>
            <div className={styles.actionButtons}>
                <button
                    className={styles.historyButton}
                    onClick={handleDelete}
                >
                    <GoHistory size={25} />
                </button>

                <button
                    className={styles.editButton}
                    onClick={() => onEdit(plant)}
                >
                    <CiEdit size={25} />
                </button>

                <button
                    className={styles.deleteButton}
                    onClick={handleDelete}
                    disabled={isDeleting}
                >
                    {isDeleting ? (
                        <ClipLoader color="red" size={20} />
                    ) : (
                        <MdDelete className={styles.deleteIcon} size={25} />
                    )}
                </button>
            </div>
        </li>
    );
}
