export interface HeaderProps {
  text: string;
}

function Header({ text }: HeaderProps) {
  return (
    <h1 className="font-customEyeCatcher text-custom-malibu text-7xl tracking-wide text-center">
      {text}
    </h1>
  );
}

export default Header;
