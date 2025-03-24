import React from 'react';
import { useLoading, Puff } from '@agney/react-loading';

const Loading = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Puff width="50" />,
  });
  return <section {...containerProps}>{indicatorEl}</section>;
};

export default Loading;
