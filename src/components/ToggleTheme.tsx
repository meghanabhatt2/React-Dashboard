


import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../slice/themeSlice';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-full shadow-lg hover:bg-gray-200 cursor-pointer"
    >
      {theme === 'dark' ? (
        <Moon className="w-6 h-6 text-blue-500" />
      ) : (
        <Sun className="w-6 h-6 text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeToggle;

