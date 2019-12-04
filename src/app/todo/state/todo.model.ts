import { ID } from '@datorama/akita';

export interface Todo {
  id: ID;
  name: string;
}

/**
 * A factory function that creates Todo
 */
export function createTodo(params: Partial<Todo>) {
  return {

  } as Todo;
}
