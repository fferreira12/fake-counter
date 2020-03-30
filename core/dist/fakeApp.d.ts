import { FakeDataStorage } from "./entities/data/fakeDataStorage";
import { Fake } from "./entities/fake";
import { DataOperationResult } from "./entities/interfaces/data/dataOperationResult";
import { FakeValidator } from "./entities/interfaces/validation/fakeValidator";
export declare class FakeApp extends FakeDataStorage {
    private fakeDataStorage;
    private fakeValidator?;
    constructor(fakeDataStorage: FakeDataStorage, fakeValidator?: FakeValidator);
    create(data: Fake): Promise<DataOperationResult<Fake>>;
    getOne(id: string): Promise<DataOperationResult<Fake>>;
    getMany(filter?: Partial<Fake> | undefined): Promise<DataOperationResult<Fake[]>>;
    update(item: Partial<Fake>): Promise<DataOperationResult<Fake>>;
    delete(id: string): Promise<DataOperationResult<Fake>>;
}
