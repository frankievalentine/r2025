import React from 'react';
import useSWR from 'swr';

import DashboardShell from '@/components/DashboardShell';
import SiteTable from '@/components/SiteTable';
import EmptyState from '@/components/EmptyState';
import fetcher from '@/utils/fetcher';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTableHeader from '@/components/SiteTableHeader';

import { useAuth } from '@/lib/auth';

const Dashboard = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteTableHeader />
      {data.sites.length ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
