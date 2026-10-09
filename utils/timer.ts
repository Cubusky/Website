export function createTimer(milliseconds: number, onElapsed: () => void): () => number {
  const duration = Number.isFinite(milliseconds) ? Math.max(0, milliseconds) : 0;
  const deadline = performance.now() + duration;
  const timeoutId = setTimeout(onElapsed, duration);
  let remainingAtStop: number | undefined;

  return function stop() {
    if (remainingAtStop !== undefined) return remainingAtStop;

    clearTimeout(timeoutId);
    remainingAtStop = Math.max(0, deadline - performance.now());
    return remainingAtStop;
  };
}