export default function Paper({
  Title,
  Description,
}: {
  Title: string;
  Description: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
      <h4 className="font-bold text-lg text-gray-800">{Title}</h4>
      <p className="text-gray-700">{Description}</p>
    </div>
  );
}
