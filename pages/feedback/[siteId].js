import React from 'react';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/router';

import DashboardShell from '@/components/DashboardShell';
import Page from '@/components/Page';
import FeedbackTable from '@/components/FeedbackTable';
import FeedbackEmptyState from '@/components/FeedbackEmptyState';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteFeedbackTableHeader from '@/components/SiteFeedbackTableHeader';

const SiteFeedback = () => {
  const { user } = useAuth();
  const { query } = useRouter();
  const { data } = useSWR(
    user ? [`/api/feedback/${query.siteId}`, user.token] : null,
    fetcher
  );

  if (!data) {
    return (
      <DashboardShell>
        <SiteFeedbackTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteFeedbackTableHeader siteName={data.site.name} />
      {data.feedback.length ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <FeedbackEmptyState />
      )}
    </DashboardShell>
  );
};

const SiteFeedbackPage = () => (
  <Page name="Name of site Feedback" path="/feedback">
    <SiteFeedback />
  </Page>
);
export default SiteFeedbackPage;
