import { useState } from 'react';
import { Paper, Text, CloseButton, Group, Container, useMantineColorScheme } from '@mantine/core';

export function AdBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const { colorScheme } = useMantineColorScheme();

  if (!isVisible) {
    return null;
  }

  return (
    <div style={{ backgroundColor: colorScheme === 'dark' ? 'var(--mantine-color-dark-8)' : 'var(--mantine-color-gray-1)' }}>
      <Container size="xl" pb="md">
        <Paper 
          shadow="xs" 
          p="lg" 
          style={{
            width: '100%',
            position: 'relative',
            borderRadius: 0,
            backgroundImage: 'url("https://picsum.photos/1000/200")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: colorScheme === 'dark' ? 'multiply' : 'overlay',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          <Group justify="space-between" align="center">
            <Text size="md" c="white">
              广而告之
            </Text>
            <CloseButton 
              onClick={() => setIsVisible(false)}
              aria-label="Close ad banner"
              variant="transparent"
              c="white"
            />
          </Group>
        </Paper>
      </Container>
    </div>
  );
} 