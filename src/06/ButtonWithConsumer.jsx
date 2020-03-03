import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import createLoadingConsumer from './createLoadingConsumer';

const DefaultLoadingConsumer = createLoadingConsumer();
const Loading2Consumer = createLoadingConsumer('loading2');

export default function ButtonWithConsumer({ children }) {
  return (
    <>
      <DefaultLoadingConsumer
        render={({ loading, setLoading }) => (
          <Loading2Consumer
            render={({ loading: loading2 }) => (
              <Button onPress={() => setLoading(!loading)}>
                {loading || loading2 ? '로딩중' : children}
              </Button>
            )}
          />
        )}
      />
    </>
  );
}
