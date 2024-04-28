import { useContext } from 'react';
import { ThemeContext } from 'components/utils/theme'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light'? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeToggle;
