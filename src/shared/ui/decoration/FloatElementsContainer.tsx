export default function FloatElementsContainer(props: any) {
  return (
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
      {props.children}
    </div>
  );
}
