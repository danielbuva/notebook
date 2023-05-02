import AddNotebook from "@/components/notebook/AddNotebook";
import NotebookInput from "@/components/notebook/NotebookInput";
import Binder from "@/components/notebook/Binder";
import Layout from "@/components/app/Layout";

const Notebooks = () => {
  return (
    <>
      <AddNotebook />
      <NotebookInput />
      <Binder />
    </>
  );
};

export default Notebooks;
