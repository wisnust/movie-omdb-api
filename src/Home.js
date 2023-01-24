import React from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
const Home = () => {
  return (
    <main className="bg-gradient-to-tr from-gray-700 via-gray-900 to-black">
      <Form />
      <Movies />
    </main>
  );
};
export default Home;
