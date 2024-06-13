import MyNotebooks from "./components/MyNotebooks";
import NewNotebookButton from "./components/NewNotebookButton";

export const dynamic = "force-dynamic";

export default function Notebooks() {
  return (
    <div>
      <NewNotebookButton />
      <MyNotebooks />
    </div>
  );
}
