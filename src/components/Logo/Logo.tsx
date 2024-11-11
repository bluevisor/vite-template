import { Group, Text, Box, MantineSize, MantineStyleProp } from '@mantine/core';

interface LogoProps {
  size?: MantineSize;
}

// Map logical sizes to actual pixel values
const TITLE_SIZES: Record<string, string> = {
  sm: '28px',
  md: '32px',
  lg: '42px'
};

const SUBTITLE_SIZES: Record<string, string> = {
  sm: '14px',
  md: '16px',
  lg: '18px'
};

export function Logo({ size = 'md' }: LogoProps) {
  return (
    <Group gap={8} my={12}>
      <Box style={{ textAlign: 'center' }}>
        <Text 
          fw={900} 
          size={TITLE_SIZES[size]}
          mb="6px" 
          variant="gradient" 
          gradient={{ from: '#f70000', to: '#b00000', deg: 180 }}
        >
          美国新闻网
        </Text>
        <Text 
          fw={200} 
          size={SUBTITLE_SIZES[size]}
          c="white"
        >
          News In US
        </Text>
      </Box>
    </Group>
  );
}