import { useFindMany } from "@gadgetinc/react";
import { NextPage } from "next";
import { api } from "./api";

const Home: NextPage = () => {
  const [{ data, fetching, error }] = useFindMany(api.student, {
    sort: { createdAt: "Descending" },
    first: 30,
  });
console.log(data);

  return (
    <div>
      <h1>Posts</h1>
      {fetching && <div className="spinner" />}
    
    </div>
  );
};

export default Home;