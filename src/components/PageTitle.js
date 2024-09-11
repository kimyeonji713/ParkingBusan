import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>파킹 어디? | {title}</title>
    </Helmet>
  );
};
