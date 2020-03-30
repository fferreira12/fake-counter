import { DataOperationResult } from "./dataOperationResult";
export interface DataStorage<T> {
    create(data: T): Promise<DataOperationResult<T>>;
    getOne(id: string): Promise<DataOperationResult<T>>;
    getMany(filter?: Partial<T>): Promise<DataOperationResult<T[]>>;
    update(item: Partial<T>): Promise<DataOperationResult<T>>;
    delete(id: string): Promise<DataOperationResult<T>>;
}
