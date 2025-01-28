import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../slice/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state:any) => (state.theme));

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={`p-2 rounded ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      Toggle Theme
    </button>
  );
};
export default ThemeToggle;
