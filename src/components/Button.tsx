export default function Button({
  incrementCount
}: {
  incrementCount: () => void;
}) {
  return <button onClick={incrementCount}>Increment</button>;
}
