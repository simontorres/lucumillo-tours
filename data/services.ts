import { Service } from "@/interfaces";

export const services: Service[] = [
  {
    id: "1",
    title: "Tours",
    description: "",
    path: "tours",
    gallery: [
      { src: "/images/services/xs/nightsky_001.webp", alt: "" },
      { src: "/images/services/xs/nightsky_002.webp", alt: "" },
      { src: "/images/services/xs/nightsky_003_2.webp", alt: "" },
      { src: "/images/services/xs/whales_003.webp", alt: "" },
      { src: "/images/services/xs/whales_004.webp", alt: "" },
      { src: "/images/services/xs/elqui_valley_001.webp", alt: "" },
      { src: "/images/services/xs/birdwatching_003.webp", alt: "" },
      { src: "/images/services/xs/something_else_002.webp", alt: "" },
    ],
    enabled: true,
  },
  {
    id: "2",
    title: "Arriendo de Bicicletas",
    description: "",
    path: "arriendo-de-bicicletas",
    gallery: [
      { src: "/images/services/xs/bicycles_001.webp", alt: "" },
      { src: "/images/services/xs/bicycles_002.webp", alt: "" },
    ],
    enabled: false,
  },
];