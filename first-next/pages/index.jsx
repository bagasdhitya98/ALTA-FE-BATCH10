import React, { useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Category from "../components/Category";
import axios from "axios";

const Index = () => {
  const [time, setTime] = useState([]);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const type = [
    { type: "business" },
    { type: "politics" },
    { type: "health" },
    { type: "finance" },
  ];

  const fetchingNews = async () => {
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=027a0c86b59d4edaa9c304428b94a784`
      )
      .then((response) => {
        setLoading(true);
        setData(response.data.articles);
        console.log(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchingTime = async () => {
    await axios
      .get(`http://worldtimeapi.org/api/ip`)
      .then((response) => {
        console.log(response.data);
        setTime(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDetail = (item, title) => {
    Router.push({
      pathname: `/detail/${title}`,
      query: {
        description: item.description,
        title: item.title,
        image: item.urlToImage,
        content: item.content,
      },
    });
  };

  useEffect(() => {
    fetchingTime();
    fetchingNews();
  }, []);

  return (
    <div className="w-screen h-full bg-white">
      <Head>
        <title>Alta Next</title>
        <link
          rel="icon"
          href="https://academy.alterra.id/wp-content/uploads/2022/06/Logo-Colour-Transparant-1.png"
        />
      </Head>
      <Navbar />
      <div className="flex justify-center">
        <p className="text-alta-space-cadet font-semibold text-xl mt-20">
          {time?.datetime?.substring(11, 16)}
        </p>
      </div>
      <div className="p-10 flex flex-column justify-center">
        {type ? (
          type.map((item) => {
            return (
              <Category
                title={item.type}
                onClick={() => setCategory(item.type)}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
      <div className="p-10 flex flex-wrap">
        {data && loading === false ? (
          data.map((item) => {
            return (
              <Card
                title={item?.title}
                description={item?.description}
                image={item?.urlToImage}
                onClick={() => getDetail(item, item.title)}
              />
            );
          })
        ) : (
          <div className="flex justify-center w-screen h-full bg-white">
            <h1 className="text-alta-space-cadet">Tunggu bentar ya bro ...</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
