import React from 'react';
import { Meta, Story } from '@storybook/react';
import { QueryClientProvider, QueryClient } from 'react-query';

import { useProviders } from '..';
// import README from '../README.md';

import ResourceComponent from './ResourceComponent';

export default {
  title: 'Hooks/useProviders',
  parameters: {
    docs: {
      // page: README,
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={new QueryClient()}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} as Meta;

export const Default: Story = () => {
  const { data, isLoading } = useProviders({
    customerId: 123,
  });

  return <ResourceComponent title="Providers" data={data} loading={isLoading} />;
};
Default.storyName = 'default';
