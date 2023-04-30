import store from "@/redux/store";
import "@/lib/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider as ReduxProvider } from "react-redux";
import ApolloWrapper from "@/components/app/ApolloWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>next notebook</title>
        <meta name="description" content="todo next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon-96.ico" />
      </Head>
      <ReduxProvider store={store}>
        <ApolloWrapper>
          <Component {...pageProps} />
        </ApolloWrapper>
      </ReduxProvider>
    </>
  );
}
