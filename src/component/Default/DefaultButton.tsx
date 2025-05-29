type DefaultButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  color: string;
};

export default function DefaultButton({onClick, color, children}: DefaultButtonProps) {
  const colorClass = {
    primary: "bg-primary hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:shadow-lg",
    secondary: "bg-secondary hover:bg-gradient-to-br hover:from-secondary hover:to-tertiary hover:shadow-lg",
    tertiary: "bg-tertiary hover:bg-gradient-to-br hover:from-tertiary hover:to-primary hover:shadow-lg",
    primaryGradient: "bg-gradient-to-br from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark hover:shadow-lg",
    secondaryGradient: "bg-gradient-to-br from-secondary to-tertiary hover:from-secondary-dark hover:to-tertiary-dark hover:shadow-lg",
    tertiaryGradient: "bg-gradient-to-br from-tertiary to-primary hover:from-tertiary-dark hover:to-primary-dark hover:shadow-lg"
  }[color]; 

  return (
    <button 
      className={`flex rounded-xl min-w-[6rem] py-2 px-5 text-center flex items-center justify-center
        ${colorClass}`}
      type="button"
      onClick={onClick}
    >
      <p className="text-white text-md font-semibold">
        {children}
      </p>
    </button>
  );
}