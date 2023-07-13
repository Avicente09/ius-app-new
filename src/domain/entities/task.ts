import type { EntityId } from './entity';
import type { GpsLocation } from './gps-location';
import type { GtAddress } from './gt-address';

export const TASK_TYPES = ['pickUp', 'deliver', 'paymentRetrieval'] as const;
export type TaskType = typeof TASK_TYPES[number];

export const LOCATIONLESS_TASK_TYPES = ['paymentRetrieval'] as const;
export type LocationlessTaskType = typeof LOCATIONLESS_TASK_TYPES[number];

export const TASK_STATUSES = ['pending', 'done'] as const;
export type TaskStatus = typeof TASK_STATUSES[number];

export const TASK_DETAILS = ['cost', 'estimatedCost', 'disclaimer'] as const;
export type TaskDetail = typeof TASK_DETAILS[number];

export interface TaskByGpsLocation {
  id: EntityId;
  type: TaskType;
  status: TaskStatus;
  location: GpsLocation;
  instruction: string;
  details?: Record<TaskDetail, 'string'>;
  dependencies?: EntityId[];
}

export interface TaskByGtAddress {
  id: EntityId;
  type: TaskType;
  status: TaskStatus;
  address: GtAddress;
  instruction: string;
  details?: Record<TaskDetail, 'string'>;
  dependencies?: EntityId[];
}

export interface TaskLocationless {
  id: EntityId;
  type: LocationlessTaskType;
  status: TaskStatus;
  instruction: string;
  details?: Record<TaskDetail, 'string'>;
  dependencies?: EntityId[];
}

export type Task = TaskByGpsLocation | TaskByGtAddress | TaskLocationless;
