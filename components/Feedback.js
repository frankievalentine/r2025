import React from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/core';
import { format, parseISO } from 'date-fns';

const Feedback = ({ author, text, createdAt }) => {
  return (
    <Box>
      <Heading size="sm" borderRadius={4} maxWidth="700px" w="full">
        {author}
      </Heading>
      <Text color="gray.500" mb={4} fontSize="xs">
        {format(parseISO(createdAt), 'PPpp')}
      </Text>
      <Text color="gray.800">{text}</Text>
      <Divider
        borderColor="gray.200"
        backgroundColor="gray.200"
        mt={8}
        mb={8}
      />
    </Box>
  );
};

export default Feedback;
