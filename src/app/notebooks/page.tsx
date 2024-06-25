import MyNotebooks from "./components/MyNotebooks";
import NewNotebookButton from "./components/NewNotebookButton";

export default function Notebooks() {
  return (
    <div className="flex h-[86vh] w-[600px] flex-col">
      <NewNotebookButton />
      <MyNotebooks />
    </div>
  );
}
