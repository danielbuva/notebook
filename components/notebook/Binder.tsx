import { GetNotebooks } from "@/graphql/queries/notebook";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setInitialData } from "@/redux/store";
import { useQuery } from "@apollo/client";
import Link from "next/link";

const Binder = () => {
  const { data } = useQuery(GetNotebooks);
  const notebooks = useAppSelector((state) => state.notebook.notebooks);
  if (notebooks.length === 0) return null;

  return (
    <div>
      {notebooks.map(({ title }, i) => {
        return (
          <Link key={i} href={`/notebooks/${title}`}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Binder;
