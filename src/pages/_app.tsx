import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { MakeServer } from "../services/mirage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

MakeServer();

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({});

  return (
    <QueryClientProvider client={queryClient}>
      <SidebarDrawerProvider>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarDrawerProvider>
      <ReactQueryDevtools />:
    </QueryClientProvider>
  );
}

export default MyApp;
