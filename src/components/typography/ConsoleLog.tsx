import StringText from "./StringText";

export interface ConsoleLogProps {
  text: string;
}
function ConsoleLog({ text }: ConsoleLogProps) {
  return (
    <div className="font-customMono animate-pulse">
      <span className="text-custom-chaKy">console</span>
      <span>.</span>
      <span className="text-custom-malibu">log</span>
      <span>(</span>
      <StringText text={JSON.stringify(text)} />
      <span>)</span>
    </div>
  );
}

export default ConsoleLog;
