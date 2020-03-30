import { FakeDataStorage } from "./entities/data/fakeDataStorage";
import { Fake } from "./entities/fake";
import { DataOperationResult } from "./entities/interfaces/data/dataOperationResult";
import { FakeValidator } from "./entities/interfaces/validation/fakeValidator";

export class FakeApp extends FakeDataStorage{
  
  constructor(
    private fakeDataStorage: FakeDataStorage,
    private fakeValidator?: FakeValidator
  ) {
    super();
  }

  create(data: Fake): Promise<DataOperationResult<Fake>> {
    let validation = this.fakeValidator?.validate(data);
    
    if(!validation || validation.isValid) {
      return this.fakeDataStorage.create(data);
    } else {
      return Promise.resolve({
        success: false,
        message: "Fake could not be registered. Check errors to see why",
        errors: validation.errors
      });
    }
  }
  getOne(id: string): Promise<DataOperationResult<Fake>> {
    return this.fakeDataStorage.getOne(id);
  }
  getMany(filter?: Partial<Fake> | undefined): Promise<DataOperationResult<Fake[]>> {
    return this.fakeDataStorage.getMany(filter);
  }

  update(item: Partial<Fake>): Promise<DataOperationResult<Fake>> {
    return this.fakeDataStorage.update(item);
  }

  delete(id: string): Promise<DataOperationResult<Fake>> {
    return this.fakeDataStorage.delete(id);
  }
  
}
