export interface CommentProps {
  text: string;
}
function Comment({ text }: CommentProps) {
  return <div className="text-sm text-custom-dark font-customMono">{text}</div>;
}

export default Comment;
