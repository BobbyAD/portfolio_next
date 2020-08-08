import "../styles/globals.css";
// necessary for antd styles to work properly. This is a little goofy.
import "../styles/theme.less";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
