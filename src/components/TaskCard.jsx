import {
  PencilIcon,
  TrashIcon,
  XMarkIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";

const TaskCard = ({ task, onEdit, onDelete, onToggleStatus }) => {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg'>
      <div className='p-4'>
        <div className='flex justify-between items-start mb-2'>
          <h2 className='text-xl font-semibold text-primary-600 truncate'>
            {task.title}
          </h2>
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${
              task.completed
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
        </div>
        <p className='text-sm text-gray-600 mb-4'>{task.description}</p>
        <p className='text-xs text-gray-400'>
          Created at: {new Date(task.createdAt).toLocaleDateString()}
        </p>
      </div>
      <div className='bg-gray-50 px-4 py-3 flex flex-wrap justify-between gap-2'>
        <Button
          onClick={() => onDelete(task._id)}
          className='bg-red-500 text-white hover:bg-red-600'
          icon={TrashIcon}
        />

        <div className='flex gap-2'>
          <Button
            label={<span className='hidden sm:inline'>Edit</span>}
            onClick={() => onEdit(task)}
            className='bg-sky-500/75 text-white hovebg-sky-500/50'
            icon={PencilIcon}
          />

          <Button
            label={
              <span>
                <span className='sm:hidden'>
                  {task.completed ? "Pending" : "Completed"}
                </span>
                <span className='hidden sm:inline'>
                  {task.completed ? "Mark as pending" : "Mark as completed"}
                </span>
              </span>
            }
            onClick={() => onToggleStatus(task._id)}
            className={`${
              task.completed
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-green-500 hover:bg-green-600"
            } text-white`}
            icon={task.completed ? XMarkIcon : CheckIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
