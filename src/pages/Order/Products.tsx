import bronhi from "../../assets/prozivodimed/bronhim.jpg";
import borovnica from "../../assets/prozivodimed/borovnicam.jpg";
import bagrem from "../../assets/prozivodimed/bagrem.jpg";
import cvetni from "../../assets/prozivodimed/cvetnim.jpg";
import djumbir from "../../assets/prozivodimed/djumbirm.jpg";
import imuno from "../../assets/prozivodimed/imunom.jpg";
import jagoda from "../../assets/prozivodimed/jagodam.jpg";
import kakao from "../../assets/prozivodimed/kakaom.jpg";
import kopriva from "../../assets/prozivodimed/koprivam.jpg";
import kurkuma from "../../assets/prozivodimed/kurkumam.jpg";
import limun from "../../assets/prozivodimed/limunm.jpg";
import livadski from "../../assets/prozivodimed/livadskim.jpg";
import oman from "../../assets/prozivodimed/omanm.jpg";

const products = [
    { id:1,
      image: bronhi,
      category:{
      name:"Lekoviti med",
      slug:"lekoviti"},
      title: "Bronhi Med",
      description: "Prirodni med za lakše disanje.",
      price:2000
    },
    { id:2,
      image: borovnica,
       category:{
      name:"Med sa ukusom",
      slug:"medsaukusom"},
      title: "Med sa borovnicom",
      description: "Čist prirodni bagremov med.",
      price:2000
    },
    { id:3,
      image: livadski,
      category:{
      name:"Med",
      slug:"med"},
      title:"Livadski med",
      description: "Domaći livadski med.",
      price:2000
    },
    { id:4,
      image: cvetni,
       category:{
      name:"Med",
      slug:"med"},
      title: "Cvetni med",
      description: "Bogat ukus šumskog meda.",
      price:2000
    },
    {
        id:5,
        image:bagrem,
        category:{
      name:"Med",
      slug:"med"},  
        title:"Bagremov med",
        description:"Med bagrem",
        price:2000
    },
    {
        id:6,
        image:djumbir,
        category:{
      name:"Lekoviti med",
      slug:"lekoviti"},
        title:"Djumbir med",
        description:"djumbir med",
        price:2000
    },
    {
       id:7,
       image:imuno,
       category:{
      name:"Lekoviti med",
      slug:"lekoviti"},
       title:"Imuno med",
       description:"Lekovit med",
       price:2000
    
    },
    {
       id:8,
       image:jagoda,
       category:{
      name:"Med sa ukusom",
      slug:"medsaukusom"},
       title:"Jagoda med",
       description:"Lekovit med",
       price:2000
    },
    {
       id:9,
       image:kopriva,
       category:{
      name:"Lekoviti med",
      slug:"lekoviti"},
       title:"Kopriva med",
       description:"Lekovit med",
       price:2000
    },
    {
       id:10,
       image:kakao,
       category:{
      name:"Med sa ukusom",
      slug:"medsaukusom"},
       title:"Kakao med",
       description:"Lekovit med",
       price:2000
    },
    {
       id:11,
       image:kurkuma,
       category:{
      name:"Med sa ukusom",
      slug:"medsaukusom"},
       title:"Kurkuma med",
       description:"Lekovit med",
       price:2000
    },
    {
       id:12,
       image:limun,
      category:{
      name:"Med sa ukusom",
      slug:"medsaukusom"},
       title:"Limun med",
       description:"Lekovit med",
       price:2000
    },
    {
       id:13,
       image:oman,
       category:{
      name:"Med sa ukusom",
      slug:"medsaukusom"},
       title:"Oman med",
       description:"Lekovit med",
       price:2000
    }
  ];

 export default products;