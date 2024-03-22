export interface CommentProps {
  text: string;
}
function Comment({ text }: CommentProps) {
  return (
    <div
      className={`text-sm ${
        text.includes("TODO") ? "text-custom-whiskey" : "text-custom-dark"
      } font-customMono animate-bounce my-2`}
    >
      {text}
    </div>
  );
}

export default Comment;
