import React from "react";

interface Props {
    children: React.ReactNode;
    fallback?: (props: FallbackProps) => React.ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

interface FallbackProps {
    error: Error;
}

export default class ErrorBoundary extends React.Component<Props, State> {
    state: State = { hasError: false, error: null };

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error("Ошибка:", error, errorInfo);
    }

    componentDidUpdate(prevProps: Readonly<{ children: React.ReactNode }>) {
        if (prevProps.children !== this.props.children) {
            this.setState({ hasError: false, error: null });
        }
    }

    render() {
        if (this.state.hasError && this.state.error) {
            if (this.props.fallback) {
                return this.props.fallback({
                    error: this.state.error,
                });
            }
            return (
                this.props.fallback ?? (
                    <div>
                        <h2>Что-то пошло не так...</h2>
                        <p>{this.state.error.message}</p>
                    </div>
                )
            );
        }
        return this.props.children;
    }
}
