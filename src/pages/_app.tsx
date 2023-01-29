import { Provider } from "@gadgetinc/react";
import { AppProps } from "next/app";
import { api } from "./api";

function MyNextApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={api.connection.currentClient}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyNextApp;