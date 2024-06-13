import MyNotebooks from "./components/MyNotebooks";
import NewNotebookButton from "./components/NewNotebookButton";

export default function Notebooks() {
  return (
    <div>
      <NewNotebookButton />
      <MyNotebooks />
    </div>
  );
}
