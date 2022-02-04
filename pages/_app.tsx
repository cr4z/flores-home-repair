import "../styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // gets called multiple times

  switch (metric.name) {
    case "FCP": {
      // console.log(
      //   `📈🎨 First Contentful Paint in ${metric.startTime / 1000} seconds`
      //   // also important value is metric.value, maybe use later
      // );
      break;
    }
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
