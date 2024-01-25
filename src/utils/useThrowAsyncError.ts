import { useState } from 'react';

export const useThrowAsyncError = () => {
  const [, setState] = useState();

  return (err: Error) =>
    setState(() => {
      throw err;
    });
};
