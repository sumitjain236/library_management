import * as React from "react";
import "./App.css";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function App() {
  // 2. Wrap ChakraProvider at the root of your app

  const { data, error } = useSWR(
    "/api/method/library_management.api.library.get_library_transaction_count",
    fetcher
  );
  // const [userCount, setUserCount] = useState<any>([]);

  // const fetchData = () => {
  //   fetch(
  //     "/api/method/library_management.api.library.get_library_transaction_count"
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setUserCount(data.message);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  else {
    return (
      <ChakraProvider>
        <ul>
          {data.message.map((r: any) => (
            <li key={r.library_member}>
              {r.library_member} - {r.count}
            </li>
          ))}
        </ul>
      </ChakraProvider>
    );
  }
}
export default App;
