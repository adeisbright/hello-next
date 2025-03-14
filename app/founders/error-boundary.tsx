import React, { Component,ReactNode } from "react";

interface ErrorBoundaryState {
    hasError: boolean;
}
interface ErrorBoundaryProps {
    children: ReactNode;
  }

export default class ErrorBoundary extends Component<ErrorBoundaryProps , ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any): ErrorBoundaryState {
        return { hasError: true };
    }

    render():ReactNode{
        return this.state.hasError ? (
            <div>
                <h3>Sorry there was a problem loading this page</h3>
            </div>
        ) : (
            this.props.children
        );
    }
}