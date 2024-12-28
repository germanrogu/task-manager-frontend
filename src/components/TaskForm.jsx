import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const TaskForm = ({ onSubmit, onClose, initialData = {} }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...initialData,
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
      <div className='bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200'
        >
          <XMarkIcon className='h-6 w-6' />
        </button>
        <h2 className='text-3xl font-bold text-primary-600 mb-6'>
          {initialData ? "Edit Task" : "Add New Task"}
        </h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label
              className='block text-sm font-medium text-gray-700 mb-1'
              htmlFor='title'
            >
              Title
            </label>
            <input
              id='title'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200'
              required
              placeholder='Enter task title'
            />
          </div>
          <div>
            <label
              className='block text-sm font-medium text-gray-700 mb-1'
              htmlFor='description'
            >
              Description
            </label>
            <textarea
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200'
              placeholder='Enter task description (optional)'
              rows='4'
            />
          </div>
          <div className='flex justify-end space-x-3'>
            <button
              type='button'
              onClick={onClose}
              className='px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-4 py-2 bg-primary-500 text-primary-900 rounded-lg hover:bg-primary-600 hover:text-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition-colors duration-200 font-medium'
            >
              {initialData ? "Save Changes" : "Add Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
