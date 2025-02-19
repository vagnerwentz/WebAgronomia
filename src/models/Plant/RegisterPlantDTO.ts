interface RegisterWateringConditionsDTO {
    minimumTemperature: string;
    maximumTemperature: string;
    minimumHumidity: string;
    maximumHumidity: string;
    idealSchedule: string;    
}

export interface RegisterPlantDTO {
    id?: string;
    type: string;
    area: string;
    wateringConditionsDTO: RegisterWateringConditionsDTO
}