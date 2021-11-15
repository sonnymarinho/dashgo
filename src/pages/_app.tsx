import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { MakeServer } from "../services/mirage";
import { queryClient } from "../services/queryClient";
import { theme } from "../styles/theme";

if (process.env.NODE_ENV === "development") {
  MakeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarDrawerProvider>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarDrawerProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
