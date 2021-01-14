import React from 'react';
import DashboardShell from '@/components/DashboardShell';
import { Box, Button } from '@chakra-ui/core';
import { useAuth } from '@/lib/auth';
import { createCheckoutSession, goToBillingPortal } from '@/lib/db';

const Dashboard = () => {
  const { user } = useAuth();
  //   const { data } = useSWR(user ? ['/api/user', user.token] : null, fetcher);

  //   if (!data) {
  //     return (
  //       <DashboardShell>
  //         <SiteTableHeader />
  //         <SiteTableSkeleton />
  //       </DashboardShell>
  //     );
  //   }

  return (
    <DashboardShell>
      <Box>
        <Button
          onClick={(e) => createCheckoutSession(user.uid)}
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          Upgrade to Starter
        </Button>
        <Button
          onClick={(e) => goToBillingPortal()}
          backgroundColor="gray.900"
          color="white"
          ml={4}
          fontWeight="medium"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          View Billing Portal
        </Button>
      </Box>
    </DashboardShell>
  );
};

export default Dashboard;
