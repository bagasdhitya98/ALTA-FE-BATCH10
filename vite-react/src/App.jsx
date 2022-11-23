import React, { Component } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import CustomerService from "./components/CustomerService";
import Navbar from "./components/Navbar";
import axios from "axios";

class App extends Component {
  state = {
    data: [],
  };

  getData() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const result = this.state.data;
    console.log("result :", result);

    return (
      <Container>
        <Navbar title="Dashboard" />
        <div className="flex flex-wrap">
          <Card
            image="https://cdn.shopify.com/s/files/1/0046/9139/4658/files/SS20_HOMEPAGE_MCCLEANPAIR_880x550_crop_center.jpg?v=1614334815"
            title="Shoes"
            text="text-black"
            description="Lorem ipsum blablabla"
          />
          <Card
            image="https://media.istockphoto.com/id/653003428/photo/fashionable-clothes-in-a-boutique-store-in-london.jpg?s=612x612&w=0&k=20&c=UafU4a4xSbepJow4kvNu0q-LD4hFUoli7q3fvwkp79s="
            title="Clothes"
            text="text-red-600"
            description="Clothes blablabla"
          />
          <Card
            image="https://media.istockphoto.com/id/653003428/photo/fashionable-clothes-in-a-boutique-store-in-london.jpg?s=612x612&w=0&k=20&c=UafU4a4xSbepJow4kvNu0q-LD4hFUoli7q3fvwkp79s="
            title="Clothes"
            text="text-red-600"
            description="Clothes blablabla"
          />
          <Card
            image="https://media.istockphoto.com/id/653003428/photo/fashionable-clothes-in-a-boutique-store-in-london.jpg?s=612x612&w=0&k=20&c=UafU4a4xSbepJow4kvNu0q-LD4hFUoli7q3fvwkp79s="
            title="Clothes"
            text="text-red-600"
            description="Clothes blablabla"
          />
        </div>
        <div className="mx-10 sticky z-10 bottom-10 flex justify-end">
          <CustomerService />
        </div>
      </Container>
    );
  }
}

export default App;

//----STATE----//
// state = {
//   value: 0,
//   data: [],
// };

// decrementValue() {
//   let currentValue = this.state.value;
//   this.setState({ value: currentValue - 1 });
//   console.log("current value :", this.state.value);
// }

// incrementValue() {
//   let currentValue = this.state.value;
//   this.setState({ value: currentValue + 1 });
//   console.log("current value :", this.state.value);
// }

// getName() {
//   let dummy = [
//     {
//       id: 1,
//       name: "Mitro",
//     },
//     {
//       id: 2,
//       name: "Yudha",
//     },
//     {
//       id: 3,
//       name: "Giyas",
//     },
//   ];
//   this.setState({ data: dummy });
// }

// componentDidMount() {
//   this.getName();
// }

// render() {
//   const result = this.state.data;
//   console.log("result :", result);

//   return (
//     <div className="w-screen h-screen bg-white">
//       <div className="w-96 h-20 bg-yellow-600 flex items-center justify-center">
//         <p className="text-white font-semibold">
//           Result : {this.state.value}
//         </p>
//         <div className="mt-40">
//           <button
//             className="btn btn-primary"
//             onClick={() => this.incrementValue()}
//           >
//             Increment
//           </button>
//           <button
//             className="btn btn-primary"
//             onClick={() => this.decrementValue()}
//           >
//             Decrement
//           </button>
//         </div>
//       </div>
//       <div className="mt-20 ml-10">
//         {result.map((item) => {
//           return <p className="text-black font-semibold">{item.name}</p>;
//         })}
//       </div>
//     </div>
//   );
// }

//----CHANGE COLOR----//

// state = {
//   title: "Hello guys, let's play with State and Props",
//   color: `bg-green-500`,

// };

// <div>
//   <div className={this.state.color}>
//     <p className="text-black">{this.state.title}</p>
//   </div>
//   <div className="mt-20">
//     <button
//       className={`btn btn-primary ${
//         this.state.color === `bg-orange-600` ? `hidden` : `btn-primary`
//       }`}
//       onClick={() => this.setState({ color: `bg-orange-600` })}
//     >
//       Change Orange!
//     </button>
//     <button
//       className={`btn btn-primary ${
//         this.state.color === `bg-blue-700` ? `hidden` : `btn-primary`
//       }`}
//       onClick={() => this.setState({ color: `bg-blue-700` })}
//     >
//       Change Blue!
//     </button>
//   </div>
// </div>

//----TAILWIND, DAISY UI----//
// const film = [
//   {
//     image:
//       "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
//     title: "Avengers: End Game",
//     description: "Lorem Ipsum, dolor sit amet blablabla",
//   },
//   {
//     image:
//       "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/09/15/413375890.jpg",
//     title: "Sri Asih",
//     description: "Lorem Ipsum, dolor sit amet blablabla",
//   },
//   {
//     image:
//       "https://asset.tix.id/wp-content/uploads/2022/11/c6b9890add5c02fcf9b0bfbee9813858.jpg",
//     title: "Black Panther: Wakanda Forever",
//     description: "Lorem Ipsum, dolor sit amet blablabla",
//   },
//   {
//     image:
//       "https://upload.wikimedia.org/wikipedia/id/e/ea/Poster_teatrikal_Mencuri_Raden_Saleh.jpg",
//     title: "Mencuri Raden Saleh",
//     description: "Lorem Ipsum, dolor sit amet blablabla",
//   },
// ];

// const data = [
//   {
//     image: "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg",
//     right: "#slide2",
//     left: "#slide1",
//     id: "slide1",
//   },
//   {
//     image:
//       "https://wowslider.com/sliders/demo-46/data1/images/blue_ocean.jpg",
//     right: "#slide3",
//     left: "#slide1",
//     id: "slide2",
//   },
//   {
//     image:
//       "https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg",
//     right: "#slide3",
//     left: "#slide2",
//     id: "slide3",
//   },
// ];

// return (
//   <div className="w-screen h-full bg-white">
//     <div className="carousel w-full">
//       {data.map((item) => {
//         return (
//           <div id={item.id} className="carousel-item relative w-full h-80">
//             <img src={item.image} className="w-full" />
//             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//               <a href={item.left} className="btn btn-circle">
//                 ❮
//               </a>
//               <a href={item.right} className="btn btn-circle">
//                 ❯
//               </a>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//     <div className="my-20 ml-7 text-black">
//       <p className="text-xl text-black font-semibold ml-10">
//         List Popular Movies
//       </p>
//       <div className="flex flex-row flex-wrap my-12">
//         {film.map((item) => {
//           return (
//             <div className="card w-96 bg-white shadow-xl mx-5 my-10">
//               <figure>
//                 <img className="w-fit" src={item.image} />
//               </figure>
//               <div className="card-body">
//                 <h2 className="card-title">{item.title}</h2>
//                 <p>{item.description}</p>
//                 <div className="card-actions justify-end">
//                   <button className="btn btn-primary">Watch Now!</button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//     <div className="lg:h-32 lg:w-screen lg:bg-red-500 md:h-48 md:w-screen md:bg-orange-500 sm:h-48 sm:bg-red-500 h-48 bg-alta-space-cadet">
//       <p>Hello, let's play with Vite and Tailwind together guys!</p>
//     </div>
//     <div className="lg:h-32 lg:w-screen lg:bg-blue-500 md:h-48 md:w-screen md:bg-lime-500 sm:h-48 sm:bg-red-500 h-48 bg-alta-orange">
//       <p>Hello, let's play with Vite and Tailwind together guys!</p>
//     </div>
//     <div className="lg:h-32 lg:w-screen lg:bg-lime-500 md:h-48 md:w-screen md:bg-blue-500 sm:h-48 sm:bg-red-500 h-48 bg-alta-space-cadet">
//       <p>Hello, let's play with Vite and Tailwind together guys!</p>
//     </div>
//     <div className="lg:h-32 lg:w-screen lg:bg-orange-500 md:h-48 md:w-screen md:bg-red-500 sm:h-48 sm:bg-red-500 h-48 bg-alta-orange">
//       <p>Hello, let's play with Vite and Tailwind together guys!</p>
//     </div>
//   </div>
// );
// }
