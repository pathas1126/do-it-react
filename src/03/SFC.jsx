import React from 'react';
import PropTypes from 'prop-types';

export default function SFC(props, context) {
  const { somePropsValue } = props;
  const { someContextValue } = context;
  return <div>hello, {somePropsValue}</div>;
}

SFC.propTypes = {
  somePropsValue: PropTypes.any,
};

SFC.defaultProps = {
  somePropsValue: 'default value',
};
