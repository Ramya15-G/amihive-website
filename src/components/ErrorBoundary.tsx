import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo)
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '3rem', maxWidth: '800px', margin: 'auto', fontFamily: 'sans-serif' }}>
          <h2 style={{ color: '#dc2626' }}>Application Rendering Alert</h2>
          <p style={{ color: '#475569', marginBottom: '1.5rem' }}>
            A rendering issue occurred. Here is the diagnostic message:
          </p>
          <pre
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              padding: '1rem',
              borderRadius: '8px',
              color: '#0f172a',
              overflowX: 'auto',
            }}
          >
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '1.5rem',
              background: '#2563eb',
              color: '#fff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Reload Website
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
