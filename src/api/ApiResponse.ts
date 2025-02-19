export interface ApiResponse<T> {
    data: T;
    success: boolean;
    errors: any;
    statusCode: number;
    status: number;
    message?: string;
}