import { DataStorage } from "../interfaces/data/dataStorage";
import { Fake } from "../fake";
import { DataOperationResult } from "../interfaces/data/dataOperationResult";
export declare abstract class FakeDataStorage implements DataStorage<Fake> {
    abstract create(data: Fake): Promise<DataOperationResult<Fake>>;
    abstract getOne(id: string): Promise<DataOperationResult<Fake>>;
    abstract getMany(filter?: Partial<Fake>): Promise<DataOperationResult<Fake[]>>;
    abstract update(item: Partial<Fake>): Promise<DataOperationResult<Fake>>;
    abstract delete(id: string): Promise<DataOperationResult<Fake>>;
}
