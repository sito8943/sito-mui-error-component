import React from "react";
import PropTypes from "prop-types";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

// components
import Error from "./src/Component";

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <Error onAction={resetErrorBoundary} text={error.message} />
);

const ErrorBoundary = (props) => {
  const { children, onReset, component } = props;
  return (
    <ReactErrorBoundary
      FallbackComponent={component ? component : ErrorFallback}
      onReset={onReset ? onReset : () => {}}
    >
      {children}
    </ReactErrorBoundary>
  );
};

Error.defaultProps = {
  component: undefined,
  onReset: undefined,
};

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.node,
  onReset: PropTypes.func,
};

export default ErrorBoundary;
