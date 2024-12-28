import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_TASKS_REQUEST,
  fetchTasksSuccess,
  fetchTasksFailure,
  ADD_TASK_REQUEST,
  addTaskSuccess,
  UPDATE_TASK_REQUEST,
  updateTaskSuccess,
  DELETE_TASK_REQUEST,
  deleteTaskSuccess,
} from "../actions/tasksActions";
import notify from "../../services/notificationServices";
import { handleError } from "../../utils/ErrorHandler";

const API_URL = import.meta.env.VITE_API_URL;

function* fetchTasks() {
  try {
    const response = yield call(axios.get, `${API_URL}/tasks`);
    yield put(fetchTasksSuccess(response.data.data));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

function* addTask(action) {
  try {
    const response = yield call(axios.post, `${API_URL}/tasks`, action.payload);
    yield put(addTaskSuccess(response.data.data));
    notify.success("Task added successfully!");
  } catch (error) {
    handleError(error, "Failed to add the task.");
  }
}

function* updateTask(action) {
  try {
    const { id, updates } = action.payload;
    const response = yield call(axios.put, `${API_URL}/tasks/${id}`, updates);
    yield put(updateTaskSuccess(response.data.data));
    notify.success("Task updated successfully!");
  } catch (error) {
    handleError(error, "Failed to update the task.");
  }
}

function* deleteTask(action) {
  try {
    const id = action.payload;
    yield call(axios.delete, `${API_URL}/tasks/${id}`);
    yield put(deleteTaskSuccess(id));
    notify.success("Task deleted successfully!");
  } catch (error) {
    handleError(error, "Failed to deleted the task.");
  }
}

export default function* tasksSaga() {
  yield takeLatest(FETCH_TASKS_REQUEST, fetchTasks);
  yield takeLatest(ADD_TASK_REQUEST, addTask);
  yield takeLatest(UPDATE_TASK_REQUEST, updateTask);
  yield takeLatest(DELETE_TASK_REQUEST, deleteTask);
}
