import React from "react";
import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();

  console.log(router.query.title);

  return (
    <div className="w-screen h-screen bg-white">
      <div className="flex justify-center">
        <img src={router.query.image} width={500} height={500} />
      </div>
      <div className="flex justify-center">
        <h1 className="text-black mt-12 font-semibold text-alta-orange">
          {router?.query?.title}
        </h1>
      </div>
      <div className="flex justify-center mx-60">
        <h1 className="text-black mt-12 text-alta-space-cadet">
          {router?.query?.content}
        </h1>
      </div>
    </div>
  );
};

export default Detail;
