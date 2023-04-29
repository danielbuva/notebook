const Binder = () => {
  const array = ["0", "1", "2", "3"];
  return (
    <div>
      {array.map((el, i) => {
        return <div key={i}>{el}</div>;
      })}
    </div>
  );
};

export default Binder;
