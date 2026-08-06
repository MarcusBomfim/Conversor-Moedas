export function ErrorMessage({ message }: { message: string }) {
  if (!message) return null;
  return <div className="error-message" role="alert"><strong>Não foi possível converter</strong><span>{message}</span></div>;
}
