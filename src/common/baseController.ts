import { BaseService } from './baseService';
import { ObjectLiteral } from 'typeorm';

export interface BaseController<T extends ObjectLiteral> {
  getAll: () => Promise<T[]>;
  getOne: (id: number) => Promise<T | undefined>;
  update: (entity: T) => Promise<T>;
  create: (entity: T) => Promise<T>;
  delete: (id: number) => Promise<void>;
}

export function baseController<T extends ObjectLiteral>(
  service: BaseService<T>,
): BaseController<T> {
  return {
    getAll: async () => {
      return service.getAll();
    },
    getOne: async (id) => {
      return service.getOne(id);
    },
    update: async (entity: T) => {
      return service.update(entity);
    },
    create: async (entity: T) => {
      return service.create(entity);
    },
    delete: async (id) => {
      return service.delete(id);
    },
  };
}

// import { BaseService } from './baseService';
// import { ObjectLiteral } from 'typeorm';

// export interface BaseController<T extends ObjectLiteral> {
//   getAll: () => Promise<T[]>;
//   getOne: (id: number) => Promise<T | undefined>;
//   update: (entity: T) => Promise<T>;
//   create: (entity: T) => Promise<T>;
//   delete: (id: number) => Promise<void>;
// }

// export class BaseControllerImpl<T> {
//   constructor(private readonly service: BaseService<T>) {}

//   async getAll(): Promise<T[]> {
//     return this.service.getAll();
//   }

//   async getOne(id: number): Promise<T | undefined> {
//     return this.service.getOne(id);
//   }

//   async update(entity: T): Promise<T> {
//     return this.service.update(entity);
//   }

//   async create(entity: T): Promise<T> {
//     return this.service.create(entity);
//   }

//   async delete(id: number) {
//     return this.service.delete(id);
//   }
// }
