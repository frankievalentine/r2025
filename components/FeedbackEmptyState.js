import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/core';

const FeedbackEmptyState = () => (
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
      There isn't any feedback.
    </Heading>
    <Text mb={4}>Add some!</Text>
  </Flex>
);

export default FeedbackEmptyState;
