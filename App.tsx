import { Container } from 'components/Container';
import { CoverPage } from 'components/CoverPage';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <Container>
      <CoverPage />
      <StatusBar style="auto" />
    </Container>
  );
}
