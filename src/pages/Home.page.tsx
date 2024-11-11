import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { AuthenticationFormContainer } from '../components/AuthenticationForm/AuthenticationFormContainer';

export function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <AuthenticationFormContainer />
    </>
  );
}
