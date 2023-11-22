type HeadType = {
  heading?: string;
  message?: string;
};

export default function Heading({ heading, message }: HeadType) {
  return (
    <div>
      <h1 className="font-semibold text-3xl tracking-tight mb-3">{heading}</h1>
      <p className="text-zinc-400">{message}</p>
    </div>
  );
}
