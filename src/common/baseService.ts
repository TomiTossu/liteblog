import { Injectable } from '@nestjs/common';
import { ObjectLiteral, Repository } from 'typeorm';

export interface BaseService<T extends ObjectLiteral> {
  getAll(): Promise<T[]>;
  getOne(id: number): Promise<T>;
  update(entity: T): Promise<T>;
  create(entity: T): Promise<T>;
  delete(id: number);
}

@Injectable()
export abstract class BaseServiceImpl<T> implements BaseService<T> {
  constructor(private readonly repository: Repository<T>) {}

  async getAll(): Promise<T[]> {
    return this.repository.find();
  }

  async getOne(id: number): Promise<T | undefined> {
    return this.repository.findOneById(id);
  }

  async update(entity: T): Promise<T> {
    return this.repository.save(entity);
  }

  async create(entity: T): Promise<T> {
    return this.repository.save(entity);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }
}
