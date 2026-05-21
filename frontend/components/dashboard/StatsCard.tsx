type Props = {
  title: string;
  value: number | string;
};

export default function StatsCard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-black">

      <h2 className="text-gray-500">
        {title}
      </h2>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>

    </div>
  );
}