/**
 * FilterButton – Reusable category filter button component
 * Used across multiple menu pages for consistent filtering UI
 */

import { memo, type FC } from "react";

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: FC<FilterButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-5 py-2 rounded-full border-1.5 text-sm font-medium cursor-pointer transition-all duration-200 ${
        isActive
          ? "bg-dark-brown text-white border-dark-brown"
          : "bg-transparent text-gray-600 border-tan hover:bg-dark-brown hover:text-white hover:border-dark-brown"
      }`}
      onClick={onClick}
    >
      {label.charAt(0).toUpperCase() + label.slice(1)}
    </button>
  );
};

export default memo(FilterButton);

