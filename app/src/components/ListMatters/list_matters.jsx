import "./list_matters.css";
const ListMatters = ({ children }) => {
  return (
    <>
      <section  className="listMatters_container">{children}</section >
    </>
  );
};

export { ListMatters };
