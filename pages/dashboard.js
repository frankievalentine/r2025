import React from 'react';
import useSWR from 'swr';

import DashboardShell from '@/components/DashboardShell';
import SiteTable from '@/components/SiteTable';
import EmptyState from '@/components/EmptyState';
import fetcher from '@/utils/fetcher';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';

const Dashboard = () => {
  const { data } = useSWR('/api/sites', fetcher);
  const sites = data?.sites;

  console.log(data);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      {sites.length ? <SiteTable sites={sites} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
