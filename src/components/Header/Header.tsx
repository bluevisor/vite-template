import { useState } from 'react';
import {
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Logo } from '../Logo/Logo';

// Unified sizing
const SIZES = {
  headerHeight: { base: 70, sm: 90 },
  logoSize: { base: 'sm', sm: 'md' },
  buttonSize: { base: 'xs', sm: 'sm' },
};

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const theme = useMantineTheme();
  const isSmallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  // Set responsive sizes based on screen size
  const headerHeight = isSmallScreen ? SIZES.headerHeight.base : SIZES.headerHeight.sm;
  const logoSize = isSmallScreen ? SIZES.logoSize.base : SIZES.logoSize.sm;
  const buttonSize = isSmallScreen ? SIZES.buttonSize.base : SIZES.buttonSize.sm;

  return (
    <Box
      component="header"
      h={headerHeight}
      style={{
        backgroundImage: 'url(/images/bg_american_flag.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Optional overlay for better text readability */}
      <Box pos="absolute" top={0} left={0} right={0} bottom={0} bg="rgba(0, 0, 0, 0.5)" />

      <Container pos="relative" size="lg" h="100%">
        {/* Top section with auth buttons */}
        <Group h={headerHeight / 2} justify="space-between" align="center">
          {/* Logo with responsive size */}
          <Logo size={logoSize} />

          {/* Desktop auth buttons */}
          <Group visibleFrom="xs">
            <Button size={buttonSize} variant="default">
              登录
            </Button>
            <Button size={buttonSize}>注册</Button>
          </Group>

          {/* Mobile burger */}
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>

        {/* Desktop bottom section with menu items */}
        <Group h={headerHeight / 2} justify="flex-end" align="center" visibleFrom="sm" mt={4}>
          <Text fw={500}>2024大选</Text>
          <Text fw={500}>美国</Text>
          <Text fw={500}>世界</Text>
          <Text fw={500}>政治</Text>
          <Text fw={500}>经济</Text>
          <Text fw={500}>科技</Text>
          <Text fw={500}>娱乐</Text>
          <Text fw={500}>体育</Text>
          <Text fw={500}>生活</Text>
        </Group>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="导航"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Stack align="flex-end">
          <Text fw={500}>2024大选</Text>
          <Text fw={500}>美国</Text>
          <Text fw={500}>世界</Text>
          <Text fw={500}>政治</Text>
          <Text fw={500}>经济</Text>
          <Text fw={500}>科技</Text>
          <Text fw={500}>娱乐</Text>
          <Text fw={500}>体育</Text>
          <Text fw={500}>生活</Text>
          <Button size={buttonSize} variant="default" fullWidth>
            登录
          </Button>
          <Button size={buttonSize} fullWidth>
            注册
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}
