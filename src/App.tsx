import { ThemeProvider } from "styled-components";

import { theme } from "./theme";
import Calculator from "./calculator/Calculator";

function App() {
  return (
    <ThemeProvider theme={theme.dark}>
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
