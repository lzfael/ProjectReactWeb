export default function CustomButton({ children, onClick, className }) { 
    return (
        <button
        onClick={onClick}
        className={`bg-slate-400 text-white p-2 rounded-md ${className}`}
        >
        {children}
        </button>
);
}