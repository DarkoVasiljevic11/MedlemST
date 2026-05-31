 const BASE_URL = import.meta.env.VITE_IMAGEKIT_URL;
 const ID= import.meta.env.VITE_IMAGEKIT_ID;
 const getImageKitUrl = (path: string) =>
  `${BASE_URL}/${ID}/${path}`;

 const galleryItems = [
    
  {
    id: 3,
    type: "video",
    url: getImageKitUrl("StanojevicaMed/ramed.mp4"),
    title: "Pregled i obrada ramova",
  },
  {
    id: 4,
    type: "video",
    url: getImageKitUrl("StanojevicaMed/pcele.mp4"),
    title: "Pčele u radu na saću",
  },



  {
    id: 7,
    type: "video",
    url: getImageKitUrl("StanojevicaMed/medlemst.mp4"),
    title: "Vađenje mednih ramova",
  },

  
  {
    id: 8,
    type: "image",
    url: getImageKitUrl("StanojevicaMed/ramkos.jpg"),
    title: "Ram sa saćem",
  },
  {
    id: 9,
    type: "image",
    url: getImageKitUrl("StanojevicaMed/staniste.jpg"),
    title: "Pčelinje stanište",
  },
  {
    id: 10,
    type: "image",
    url: getImageKitUrl("StanojevicaMed/sacep.jpg"),
    title: "Detalj saća",
  },

  
  {
    id: 11,
    type: "image",
    url: getImageKitUrl("StanojevicaMed/kamionkos.jpg"),
    title: "Pčelarski kamion u radu",
  },
  {
    id: 12,
    type: "image",
    url: getImageKitUrl("StanojevicaMed/kamionkosnice.jpg"),
    title: "Košnice na kamionu",
  },
  {
    id: 13,
    type: "image",
    url: getImageKitUrl("StanojevicaMed/kosnica.jpg"),
    title: "Pregled košnica",
  },
  {
    id: 14,
    type: "image",
    url: getImageKitUrl("StanojevicaMed/rampcele.jpg"),
    title: "Ram sa pčelama",
  },
  {
    id: 15,
    type: "image",
    url: getImageKitUrl("StanojevicaMed/kamionpcele.jpg"),
    title: "Pčele u transportu",
  },

 
  {
    id: 16,
    type: "image",
    url: getImageKitUrl("StanojevicaMed/proizvodi.jpg"),
    title: "Naši pčelinji proizvodi",
  },
  {
    id: 17,
    type: "image",
    url: getImageKitUrl("StanojevicaMed/pcelarskik.jpg"),
    title: "Naš pčelarski kamion",
  },
  {
    id: 18,
    type: "image",
    url: getImageKitUrl("StanojevicaMed/pcela.jpg"),
    title: "Cvet na kojem pčele rade",
  },
  {
    id: 19,
    type: "image",
    url: getImageKitUrl("StanojevicaMed/kamionsunset.jpg"),
    title: "Zalazak sunca nad pčelinjakom",
  },
    
  ];
 export default galleryItems;