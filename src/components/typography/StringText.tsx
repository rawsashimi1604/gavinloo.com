export interface StringTextProps {
  text: string;
}
function StringText({ text }: StringTextProps) {
  return (
    <div className="inline text-sm text-custom-green font-customMono my-2">
      {text}
    </div>
  );
}

export default StringText;
