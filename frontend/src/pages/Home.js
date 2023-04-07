import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";

const Home = () => {
  const [loadedData, setLoadedData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/contacts");
      const data = await response.json();
      setLoadedData(data.contacts);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && loadedData && <CardList items={loadedData} />}
    </>
  );
};

export default Home;
