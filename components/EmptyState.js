import React from 'react';
import { Flex, Heading, Text, Button } from '@chakra-ui/core';
import DashboardShell from './DashboardShell';

const EmptyState = () => (
  <DashboardShell>
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius="8px"
      p={16}
      justify="center"
      align="center"
      direction="column"
    >
      <Heading size="lg" mb={2}>
        You haven’t added any sites.
      </Heading>
      <Text mb={4}>Let’s get started.</Text>
      <Button>Add Your First Site</Button>
    </Flex>
  </DashboardShell>
);

export default EmptyState;
