import "../src/styles/reset.scss";
import "../src/styles/base.scss";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Sidebar from "../src/app/Common/Sidebar/Sidebar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <>
      <Sidebar />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default MyApp;
