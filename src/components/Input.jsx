export default function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}