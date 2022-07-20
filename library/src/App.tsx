import * as React from "react";
import "./App.css";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <div>Hello World from sumit</div>
    </ChakraProvider>
  );
}
export default App;
