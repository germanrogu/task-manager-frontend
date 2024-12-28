export const FETCH_TASKS_REQUEST = "FETCH_TASKS_REQUEST";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE";

export const ADD_TASK_REQUEST = "ADD_TASK_REQUEST";
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";

export const UPDATE_TASK_REQUEST = "UPDATE_TASK_REQUEST";
export const UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS";

export const DELETE_TASK_REQUEST = "DELETE_TASK_REQUEST";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";

export const fetchTasksRequest = () => ({ type: FETCH_TASKS_REQUEST });
export const fetchTasksSuccess = (tasks) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: tasks,
});
export const fetchTasksFailure = (error) => ({
  type: FETCH_TASKS_FAILURE,
  payload: error,
});

export const addTaskRequest = (task) => ({
  type: ADD_TASK_REQUEST,
  payload: task,
});
export const addTaskSuccess = (task) => ({
  type: ADD_TASK_SUCCESS,
  payload: task,
});

export const updateTaskRequest = (id, updates) => ({
  type: UPDATE_TASK_REQUEST,
  payload: { id, updates },
});
export const updateTaskSuccess = (task) => ({
  type: UPDATE_TASK_SUCCESS,
  payload: task,
});

export const deleteTaskRequest = (id) => ({
  type: DELETE_TASK_REQUEST,
  payload: id,
});
export const deleteTaskSuccess = (id) => ({
  type: DELETE_TASK_SUCCESS,
  payload: id,
});
