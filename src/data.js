import homeImg from "./assets/services/krbhome.jpg";
import designImg from "./assets/services/design.jpg";
import pedicureImg from "./assets/services/krbhome.jpg";
import acrylic from "./assets/services/acrylic.jpeg";
import feedb1Img from "./assets/reviews/feedb1.jpg";
import feedb2Img from "./assets/reviews/feedb2.jpg";
import feedb3Img from "./assets/reviews/feedb3.jpg";
import feedb4Img from "./assets/reviews/feedb4.jpg";
import feedb5Img from "./assets/reviews/feedb5.jpg";
import feedb6Img from "./assets/reviews/feedb6.jpg";
import feedb7Img from "./assets/reviews/feedb7.jpg";
import feedb8Img from "./assets/reviews/feedb8.jpg";
import rubberbase from "./assets/services/rubberbase.jpeg"
import bns from "./assets/services/bns.jpeg";
import polygel from "./assets/services/polygel.jpeg";
import pedicure from "./assets/services/pedicure.jpeg";
import nailart from "./assets/services/nailart.jpg";
import foot from "./assets/services/foot.png";

export const images = [
  {
    name: "Home",
    source: homeImg,
    alt: "landing image",
  },
  {
    name: "Design",
    source: designImg,
    alt: "Design Image",
  },
  {
    name: "Pedicure",
    source: pedicureImg,
    alt: "Pedicure Image",
  },
  {
    name: "acrylic",
    source: acrylic,
    alt: "Acrylic Image",
  },
  {
    name: "feedb1",
    source: feedb1Img,
    alt: "Acrylic Image",
  },
  {
    name: "feedb2",
    source: feedb2Img,
    alt: "Acrylic Image",
  },
  {
    name: "feedb3",
    source: feedb3Img,
    alt: "Acrylic Image",
  },
  {
    name: "feedb4",
    source: feedb4Img,
    alt: "Acrylic Image",
  },
  {
    name: "feedb5",
    source: feedb5Img,
    alt: "Acrylic Image",
  },
  {
    name: "feedb6",
    source: feedb6Img,
    alt: "Acrylic Image",
  },
  {
    name: "feedb7",
    source: feedb7Img,
    alt: "Acrylic Image",
  }, ,
  {
    name: "feedb8",
    source: feedb8Img,
    alt: "Acrylic Image",
  }
]

export const services = [
  {
    title: "Pedicure",
    price: 150,
    duration: 30,
    img: pedicure,
    description:
      "Refresh and pamper your feet with professional nail care, shaping, and a clean polished finish.",
    nb: "NB : R20 will be charged for any design. "
  },

  {
    title: "Acrylic Nail Service",
    duration: 40,
    img: acrylic,
    description:
      "Beautiful, durable nail extensions designed to enhance length, style, and confidence.",
    options: [
      { name: "Short", price: 230 },
      { name: "Medium", price: 270 },
      { name: "Long", price: 300 },
      { name: "XLong", price: 350 }
    ]
  },

  {
    title: "Polygel",
    duration: 40,
    img: polygel,
    description:
      "A lightweight and long-lasting nail enhancement that delivers strength with a natural-looking finish.",
    options: [
      { name: "Short", price: 250 },
      { name: "Medium", price: 270 },
      { name: "Long", price: 300 },
      { name: "Xtra-long", price: 350 },

    ]
  },

  {
    title: "Rubber Base Gel",
    duration: 35,
    img: rubberbase,
    description:
      "A strengthening nail treatment that helps protect natural nails while providing a smooth, elegant look.",
    options: [
      { name: "GelOverlay", price: 230 },
      { name: "Short", price: 250 },
      { name: "Medium", price: 270 }
    ]
  },

  {
    title: "Buff & Shine",
    price: 120,
    duration: 20,
    img: bns,
    description:
      "A quick nail care service that leaves natural nails smooth, healthy-looking, and beautifully polished.",
    nb: "NB : Removal of old set will be R20"
  },

  {
    title: "Nail Art",
    duration: 15,
    img: nailart,
    description:
      "Express your personality with creative nail designs, patterns, and decorative finishes.",
    nb: "NB: Nail art is charged per nail.",
    options: [
      { name: "3D Art", price: 15 },
      { name: "Chrome", price: 20 },
      { name: "Glitter", price: 10 }
    ]
  },

  {
    title: "Refill",
    duration: 30,
    img: feedb8Img,
    description:
      "Maintain the beauty of your existing nail set with professional touch-ups and restoration.",
    options: [
      { name: "Same colour", price: 200 },
      { name: "Colour Change", price: 210 },
      { name: "Nail repair", price: 20 }
    ]
  },

  {
    title: "Foot Treatment",
    price: 170,
    duration: 25,
    img: foot,
    description:
      "Revitalize tired feet with a relaxing treatment that softens skin and promotes overall foot care.",
  }
];

export const worktimes = [{
  time: '10:00 am'
},
{
  time: '12:00 pm'
},
{
  time: '14:00 pm'
},
{
  time: '16:00 pm'
}
]

// night

// morning