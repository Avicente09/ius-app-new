import type { TaskViewProps } from './task-view.types';

export function TaskView({ task }: TaskViewProps): JSX.Element {
  return <div>taskId: {task.id}</div>;
}
