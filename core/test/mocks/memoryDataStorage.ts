import { uuid } from './uuid';

import { FakeDataStorage } from "../../src/entities/data/fakeDataStorage";
import { Fake } from "../../src/entities/fake";
import { DataOperationResult } from "../../src/entities/interfaces/data/dataOperationResult";

export class MemoryDataStorage extends FakeDataStorage {
  
  fakes: Fake[] = [];
  
  create(data: Fake): Promise<DataOperationResult<Fake>> {
    let item: Fake= { ...data, id: uuid() }
    this.fakes.push(item);
    return Promise.resolve({
      success: true,
      payload: item
    });
  }

  getOne(id: string): Promise<DataOperationResult<Fake>> {
    let item = this.fakes.find(item => item.id === id);
    if(item) {
      return Promise.resolve({
        success: true,
        payload: item
      });
    } else {
      return Promise.resolve({
        success: false,
        message: `Could not found a fake with id ${id}`,
        errors: [new Error('Fake not found')]
      });
    }
  }

  getMany(filter?: Partial<Fake>): Promise<DataOperationResult<Fake[]>> {
    let allItems = [...this.fakes];

    if(!filter) {
      return Promise.resolve({
        success: true,
        payload: allItems
      });
    }

    if(filter.id) {
      let items = allItems.filter(item => item.id === filter.id);
      if(items && items.length > 0) {
        return Promise.resolve({
          success: true,
          payload: items
        });
      }
    } 

    if(filter.date) {
      //show items in the same day, does not take hour into account
      let start = new Date(filter.date)
      start.setHours(0, 0, 0, 0);
      
      let end = new Date(filter.date);
      end.setHours(23, 59, 59);

      allItems = allItems.filter(item => (item.date >= start && item.date <= end));
    }

    if(filter.poster) {
      allItems = allItems.filter(item => item.poster.number === filter.poster.number);
    }

    if(filter.verificationUrl) {
      allItems = allItems.filter(item => item.verificationUrl === filter.verificationUrl);
    }

    if(allItems.length > 0) {
      return Promise.resolve({
        success: true,
        payload: allItems
      });
    } else {
      return Promise.resolve({
        success: false,
        message: `Fakes could not be found with the given criteria.`,
        errors: [new Error('Fakes not found')]
      })
    }

  }

  update(item: Partial<Fake>): Promise<DataOperationResult<Fake>> {
    if(!item.id) {
      return Promise.resolve({
        success: false,
        message: `ID is necessary for a post to be updated`,
        errors: [new Error('Update Fake without ID')]
      })
    }

    let itemToUpdate = this.fakes.find(fake => fake.id === item.id);

    if(!itemToUpdate) {
      return Promise.resolve({
        success: false,
        message: `Could not found Fake with ID of ${item.id} to update`,
        errors: [new Error('Update Fake without ID')]
      });
    }

    Object.apply(itemToUpdate, item);

    return Promise.resolve({
      success: true,
      payload: itemToUpdate
    });

  }

  delete(id: string): Promise<DataOperationResult<Fake>> {
    let indexToRemove = this.fakes.findIndex(fake => fake.id === id);

    if(indexToRemove !== -1) {
      return Promise.resolve({
        success: false,
        message: `Could not found Fake with ID of ${id} to delete`,
        errors: [new Error('Fake not found')]
      });
    }

    let removedItem = this.fakes.splice(indexToRemove, 1)[0];

    return Promise.resolve({
      success: true,
      message: `Fake with ID ${id} removed successfully`,
      payload: removedItem
    });

  }
  
}
