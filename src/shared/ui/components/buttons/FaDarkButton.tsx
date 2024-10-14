export default function FaDarkButton(props:any) {
  return (
    <button
      className={`${props.color} ${props.text} font-semibold py-2 px-4 rounded-lg shadow-lg 
                     hover:bg-blue-100 hover:shadow-xl transition duration-300 
                     focus:outline-none focus:ring-2 focus:ring-blue-300`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
