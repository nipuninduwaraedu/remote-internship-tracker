interface DetailBadgeProps {
  text: string;
}

export default function DetailBadge({ text }: DetailBadgeProps) {
  return (
    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
      {text}
    </span>
  );
}
