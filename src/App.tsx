import './styles/dashboard.scss';
import { ReservationProvider } from './context/ReservationContext';
import { AuthProvider } from './context/AuthContext';
import { Container } from './pages/Container';

function App() {
  return (
    <AuthProvider>
      <ReservationProvider>
        <Container />
      </ReservationProvider>
    </AuthProvider>
  );
}

export default App;