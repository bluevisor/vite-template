import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        This is a{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Mantine
        </Text>
        {' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'yellow', to: 'red' }}>
          Test
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Looking good!  -- { <Anchor href="https://mantine.dev">Mantine</Anchor> }
      </Text>
    </>
  );
}
