import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { AuthenticationFormContainer } from '../components/AuthenticationForm/AuthenticationFormContainer';
import { AdBanner } from '../components/AdBanner/AdBanner';
import { Header } from '../components/Header/Header';

export function HomePage() {
  return (
    <>
      <AdBanner />
      <Header />
      <Welcome />
      <ColorSchemeToggle />
      <AuthenticationFormContainer />
    </>
  );
}
