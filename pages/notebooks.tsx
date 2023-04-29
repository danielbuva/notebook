import AddNotebook from "@/components/notebook/AddNotebook";
import NotebookInput from "@/components/notebook/NotebookInput";
import Binder from "@/components/notebook/Binder";
import Layout from "@/components/Layout";

const Notebooks = () => {
  return (
    <Layout>
      <AddNotebook />
      <NotebookInput />
      <Binder />
    </Layout>
  );
};

export default Notebooks;
