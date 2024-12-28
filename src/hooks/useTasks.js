import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTasksRequest,
  addTaskRequest,
  updateTaskRequest,
  deleteTaskRequest,
} from "../store/actions/tasksActions";

const useTasks = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState("all");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  const handleFormSubmit = (task) => {
    if (editingTask) {
      dispatch(updateTaskRequest(task._id, task));
    } else {
      dispatch(addTaskRequest(task));
    }
    setIsFormOpen(false);
    setEditingTask(null);
  };

  const handleEditTask = (task) => {
    if (task) {
      setEditingTask(task);
      setIsFormOpen(true);
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTaskRequest(id));
  };

  const handleToggleStatus = (id) => {
    const task = tasks.find((t) => t._id === id);
    if (task) {
      dispatch(updateTaskRequest(id, { completed: !task.completed }));
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return {
    tasks: filteredTasks,
    loading,
    error,
    filter,
    setFilter,
    isFormOpen,
    setIsFormOpen,
    editingTask,
    handleFormSubmit,
    handleEditTask,
    handleDeleteTask,
    handleToggleStatus,
    setEditingTask,
  };
};

export default useTasks;
