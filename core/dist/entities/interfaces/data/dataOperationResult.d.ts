export interface DataOperationResult<T> {
    success: boolean;
    message?: string;
    payload?: T;
    errors?: Error[];
}
