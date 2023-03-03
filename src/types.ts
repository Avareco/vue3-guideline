// all types have to be written here(Like at typescript official github)
export const enum TodoStatusEnum {
  TODO = "TODO",
  IN_PROGRESS = "IN PROGRESS",
  DONE = "DONE"
}

export type TodoStatus =
  | TodoStatusEnum.TODO
  | TodoStatusEnum.IN_PROGRESS
  | TodoStatusEnum.DONE;

export interface ITodo {
  id: number;
  label: string;
  status: TodoStatus;
}
