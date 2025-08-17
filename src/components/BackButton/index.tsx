
type BackButtonProps = {
  onBackspace: () => void;
};

const BackButton = ({ onBackspace }: BackButtonProps) => {
  return (
    <button
      onClick={onBackspace}
      className="border-2 p-6 border-amber-400 bg-red-500 text-white px-32  py-4 rounded hover:bg-red-600"
    >
      ⌫ BackSpace 
    </button>
  );
};

export default BackButton;
