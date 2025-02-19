interface RegisterWateringConditionsDTO {
    minimumTemperature: string;
    maximumTemperature: string;
    minimumHumidity: string;
    maximumHumidity: string;
    idealSchedule: string;
    id?: string;
    createdAt: Date;
    updatedAt: Date;    
}

export interface ListPlantsDTO {
    id: string;
    type: string;
    area: string;
    wateringConditions: RegisterWateringConditionsDTO;
    createdAt: Date;
    updatedAt: Date;
}