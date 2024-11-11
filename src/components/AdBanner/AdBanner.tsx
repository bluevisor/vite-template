import { useState } from 'react';
import { Paper, Text, CloseButton, Group, Container } from '@mantine/core';

export function AdBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div style={{ backgroundColor: 'var(--mantine-color-dark-8)' }}>
      <Container size="xl" pb="sm">
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
            backgroundBlendMode: 'multiply',
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
              style={{
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            />
          </Group>
        </Paper>
      </Container>
    </div>
  );
} 