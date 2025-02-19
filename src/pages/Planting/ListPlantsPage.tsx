import { useCallback, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import { deletePlantById, getAllPlants, updatePartialPlantById } from "../../api/api";
import styles from './ListPlantsPage.module.css';
import { ListPlantsTemplate } from "../../components/templates/Plants/ListPlantsTemplate";
import { ListPlantsDTO } from "../../models/Plant/ListPlantsDTO";
import { EditPlantModal } from "../../components/templates/Plants/EditPlantModal";

export function ListPlantsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [plants, setPlants] = useState<ListPlantsDTO[]>([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [plantToEdit, setPlantToEdit] = useState<ListPlantsDTO | null>(null);

    const fetchPlants = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await getAllPlants();

            if (Array.isArray(response.data)) {
                setPlants(response.data);
            } else {
                console.error("Estrutura inesperada na resposta da API:", response.data);
            }
        } catch (error) {
            console.error("Erro ao obter as plantas:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPlants();
    }, [fetchPlants]);

    const handleDeletePlant = useCallback(async (id: string) => {
        try {
            console.log(`Deletando a planta com o ID: ${id}`);
            await deletePlantById(id);
            await fetchPlants();
        } catch (error) {
            console.error("Erro ao deletar a planta:", error);
        }
    }, [fetchPlants]);

    const handleEditPlant = useCallback((plant: ListPlantsDTO) => {
        console.log(plant);
        setPlantToEdit(plant); // Define a planta para edição
        setIsEditModalOpen(true); // Abre o modal
    }, []);

    const handleUpdatePlant = useCallback(async (id: string, updatedFields: Partial<ListPlantsDTO>) => {
        try {
            console.log(`Atualizando planta com ID: ${id}`, updatedFields);
            await updatePartialPlantById(id, updatedFields); // Envia apenas os campos alterados
            setIsEditModalOpen(false); // Fecha o modal
            await fetchPlants(); // Atualiza a lista
        } catch (error) {
            console.error("Erro ao atualizar a planta:", error);
        }
    }, [fetchPlants]);


    return (
        <>
            {isLoading ? (
                <div className={styles.spinnerContainer}>
                    <ClipLoader color="#36d7b7" loading={isLoading} size={50} />
                </div>
            ) : (
                <ListPlantsTemplate 
                    plants={plants} 
                    onDeletePlant={handleDeletePlant}
                    onEditPlant={handleEditPlant}
                />
            )}

            {isEditModalOpen && plantToEdit && (
                <EditPlantModal 
                    plant={plantToEdit} 
                    onClose={() => setIsEditModalOpen(false)} 
                    onSave={handleUpdatePlant} 
                />
            )}
        </>
    );
}
