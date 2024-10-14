export default function IconButton({
  Icon,
  onClick,
  Text,
  Type,
  disabled,
}: {
  Icon: JSX.ElementType;
  onClick: () => void;
  Text: string;
  Type?: string;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`items-center flex overlay-gradient p-3 rounded-md my-5 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      type={Type}
      disabled={disabled}
    >
      <Icon />
      <p className="font-semibold">{Text}</p>
    </button>
  );
}
