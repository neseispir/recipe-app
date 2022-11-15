import { ThemeProvider } from "styled-components";
import "./App.css";
import AppRouter from "./router/AppRouter";
import theme from "./components/glabalStyles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
