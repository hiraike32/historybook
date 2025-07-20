import "../src/styles/reset.scss";
import "../src/styles/base.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Sidebar from "../src/app/Common/Sidebar/Sidebar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
