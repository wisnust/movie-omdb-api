import { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import { motion } from "framer-motion";
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  const [inputValue, setInputValue] = useState(query)

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setQuery(inputValue);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div className="relative">
      <div className="relative bg-gray-900 bg-opacity-80">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  py-6 md:py-16 lg:py-24">
          <form
            className="search-form flex items-center text-center justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="mb-3 xl:w-96">
                <label
                  htmlFor="search"
                  className="form-label inline-block mb-2 text-gray-200 text-center"
                >
                  Search Movie
                </label>
                <input
                  type="search"
                  className="
              form-control
              block
              w-full
              px-10
              py-4
              text-md
              uppercase 
              text-white
              bg-transparent bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-gray-200 focus:border-blue-600 focus:outline-none
            "
                  id="search"
                  placeholder="Type query"
                  value={inputValue}
                  onChange={handleChange}
                />
                {error.show && (
                  <div className="error text-xs pt-2 text-gray-200">
                    {error.msg}
                  </div>
                )}
              </div>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
