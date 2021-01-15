import React from 'react';
import { Box } from '@chakra-ui/core';
import { Table, Tr, Th } from './Table';
import FeedbackRow from './FeedbackRow';

const FeedbackTable = ({ allFeedback }) => {
  return (
    <Box>
      <Table w="full">
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Feedback</Th>
            <Th>Route</Th>
            <Th>Visible</Th>
            <Th>{''}</Th>
          </Tr>
        </thead>
        <tbody>
          {allFeedback.map((feedback) => (
            <FeedbackRow key={feedback.id} {...feedback} />
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default FeedbackTable;
