const FilterBar = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { label: "All", value: "all" },
    { label: "Completed", value: "completed" },
    { label: "Pending", value: "pending" },
  ];

  return (
    <div className='flex space-x-2'>
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition duration-300 ease-in-out ${
            currentFilter === filter.value
              ? "bg-primary-500 text-black"
              : "bg-white text-primary-500 hover:bg-primary-100"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
