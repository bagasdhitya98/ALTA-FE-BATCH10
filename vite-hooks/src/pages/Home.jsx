import React, { useState, useEffect } from "react";

import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const baseUrl = `https://newsapi.org/v2/`;
const urlHeadline =
  baseUrl +
  `top-headlines?country=id&category=business&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getNews = () => {
    axios
      .get(urlHeadline)
      .then((response) => {
        setLoading(true);
        console.log(response.data.articles);
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDetail = (item) => {
    navigate("/detail", {
      state: {
        item: item,
      },
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Container>
      <Navbar />
      <div className="mx-20 my-20 flex flex-wrap">
        {news && loading === true ? (
          news.map((item) => {
            return (
              <div key={item.id} className="m-20">
                <Card
                  title={item.title}
                  image={item.urlToImage}
                  description={item.description}
                  onClick={() => handleDetail(item)}
                />
              </div>
            );
          })
        ) : (
          <div className="m-20">
            <h1 className="text-black">Please wait brooo ...</h1>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;
