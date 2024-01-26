import { Component, ErrorInfo, ReactNode } from 'react';
import H from '../components/H';

type Props = {
  children?: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <H
          role="h1"
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          Oops... Something went wrong.
        </H>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
