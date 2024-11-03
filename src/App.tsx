import ThemeCompo from "./components/ThemeCompo";
import ThemeContextProvider from "./context/ThemeContext";

const App = () => {
  return (
    <div>
      <ThemeContextProvider>
        <ThemeCompo />
      </ThemeContextProvider>
    </div>
  );
};

export default App;
