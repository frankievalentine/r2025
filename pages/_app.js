import { AuthProvider } from '../lib/auth';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default App;
