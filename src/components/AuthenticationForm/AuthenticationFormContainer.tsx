import { Box } from '@mantine/core';
import { AuthenticationForm } from './AuthenticationForm';

export function AuthenticationFormContainer() {
  return (
    <Box w="50%" h="100%" my="50px" mx="auto">
      <AuthenticationForm />
    </Box>
  );
}
