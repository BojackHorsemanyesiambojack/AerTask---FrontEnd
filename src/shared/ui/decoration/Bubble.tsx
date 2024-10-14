export default function Bubble(props: any) {
  return (
    <div
      className="bubble absolute"
      style={{ top: props.top, left: props.left, animationDelay: props.delay }}
    ></div>
  );
}
