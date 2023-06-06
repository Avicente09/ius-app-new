import type { Task } from '../entities';

export interface GetTaskRepository {
  (): Promise<Task>;
}
