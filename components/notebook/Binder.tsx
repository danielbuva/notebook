import { useAppSelector } from "@/hooks/useRedux";
import Link from "next/link";

const Binder = () => {
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
