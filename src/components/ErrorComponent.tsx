import React from 'react';

const ErrorComponent: React.FC = () => {
  throw new Error("Intentional error from ErrorComponent");
  return null; // This line will not be reached
};

export default ErrorComponent;