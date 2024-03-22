import Header from "../typography/Header";
import ImportantText from "../typography/ImportantText";

function NotFound() {
  return (
    <div className="flex-col items-center justify-center mb-16">
      <Header text="404 Not Found." />
      <div className="flex w-full items-center justify-center mt-10">
        <ImportantText text="Oops page could not be found, try another page!" />
      </div>
    </div>
  );
}

export default NotFound;
