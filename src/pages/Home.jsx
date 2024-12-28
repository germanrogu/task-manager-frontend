import { useEffect } from "react";
import notify from "../services/notificationServices";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import FilterBar from "../components/FilterBar";
import { PlusIcon } from "@heroicons/react/24/solid";
import useTasks from "../hooks/useTasks";

const Home = () => {
  const {
    tasks,
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
  } = useTasks();

  useEffect(() => {
    if (error) {
      notify.error(error);
    }
  }, [error]);

  return (
    <div className='min-h-screen w-full bg-gray-100'>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-4xl font-bold text-center text-primary-600 mb-8'>
          Task Manager
        </h1>
        <div className='mb-6 flex flex-wrap justify-between items-center'>
          <FilterBar currentFilter={filter} onFilterChange={setFilter} />

          <button
            onClick={() => setIsFormOpen(true)}
            className='text-md text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mb-2'
          >
            <PlusIcon className='h-5 w-5' />
            <span className='hidden sm:inline-block ml-2'>Add Task</span>
          </button>
        </div>
        {loading && (
          <p className='text-center text-gray-500'>Loading tasks...</p>
        )}
        {!loading && tasks.length === 0 ? (
          <p className='text-center text-gray-500 mt-8'>
            No tasks found. Start by adding a new task!
          </p>
        ) : (
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
                onToggleStatus={handleToggleStatus}
              />
            ))}
          </div>
        )}
      </div>
      {isFormOpen && (
        <TaskForm
          onSubmit={handleFormSubmit}
          onClose={() => {
            setIsFormOpen(false);
            setEditingTask(null);
          }}
          initialData={editingTask}
        />
      )}
    </div>
  );
};

export default Home;
