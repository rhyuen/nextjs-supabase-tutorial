import '../styles/globals.css';
import UserProvider from "./context/user.js";
import Nav from "./components/nav.js";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Nav/>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp