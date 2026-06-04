import homeImg from "./assets/services/krbhome.jpg";
import designImg from "./assets/services/design.jpg";
import pedicureImg from "./assets/services/krbhome.jpg";
import acrylicImg from "./assets/services/acrylic.jpg";
import feedb1Img from "./assets/reviews/feedb1.jpg";
import feedb2Img from "./assets/reviews/feedb2.jpg";
import feedb3Img from "./assets/reviews/feedb3.jpg";
import feedb4Img from "./assets/reviews/feedb4.jpg";
import feedb5Img from "./assets/reviews/feedb5.jpg";
import feedb6Img from "./assets/reviews/feedb6.jpg";
import feedb7Img from "./assets/reviews/feedb7.jpg";
import feedb8Img from "./assets/reviews/feedb8.jpg";


export const images = [
    {
       name : "Home",
       source: homeImg,
       alt: "landing image",
    },
    {
        name : "Design",
        source : designImg,
        alt : "Design Image",
    },
    {
        name : "Pedicure",
        source : pedicureImg,
        alt : "Pedicure Image",
    },
    {
        name : "acrylic",
        source : acrylicImg,
        alt : "Acrylic Image",
    },
    {
        name : "feedb1",
        source : feedb1Img,
        alt : "Acrylic Image",
    },
    {
        name : "feedb2",
        source : feedb2Img,
        alt : "Acrylic Image",
    },
    {
        name : "feedb3",
        source : feedb3Img,
        alt : "Acrylic Image",
    },
    {
        name : "feedb4",
        source : feedb4Img,
        alt : "Acrylic Image",
    },
    {
        name : "feedb5",
        source : feedb5Img,
        alt : "Acrylic Image",
    },
    {
        name : "feedb6",
        source : feedb6Img,
        alt : "Acrylic Image",
    },
    {
        name : "feedb7",
        source : feedb7Img,
        alt : "Acrylic Image",
    },,
    {
        name : "feedb8",
        source : feedb8Img,
        alt : "Acrylic Image",
    } 
]

export const services = [
  {
    title: "Pedicure",
    price: 150,
    duration: 30,
    img: feedb1Img,
    description:
      "Pedicure service available with Acrylic, Rubber Base Gel, or Polygel application.",
    options: {
      Plain: 150,
      DesignExtra: 20
    }
  },

  {
    title: "Acrylic Nail Service",
    price: 230,
    duration: 40,
    img: feedb1Img,
    description:
      "Strong and durable nail enhancements that add length and style to natural nails.",
    options: {
      Short: 230,
      Medium: 270,
      Long: 300,
      XLong: 350
    }
  },

  {
    title: "Polygel",
    price: 250,
    duration: 40,
    img: feedb2Img,
    description:
      "Lightweight yet durable nail enhancement that combines the benefits of acrylic and gel.",
    options: {
      Short: 250,
      Medium: 270,
      Long: 350,
      OverlayShortToLong: {
        min: 230,
        max: 300
      }
    }
  },

  {
    title: "Rubber Base Gel",
    price: 230,
    duration: 35,
    img: feedb3Img,
    description:
      "A strengthening gel overlay that protects natural nails while maintaining a natural look.",
    options: {
      GelOverlay: 230,
      Short: 250,
      Medium: 270
    }
  },

  {
    title: "Buff & Shine",
    price: 120,
    duration: 20,
    img: feedb4Img,
    description:
      "A natural nail treatment that smooths and polishes the nail surface for a healthy shine.",
    options: {
      Plain: 120,
      RemovalOfOldSet: 20,
      DesignPerFinger: 5
    }
  },

  {
    title: "Nail Art",
    price: null,
    duration: 15,
    img: feedb8Img,
    description:
      "Additional nail art and decorative enhancements.",
    options: {
      "3DArt": 15,
      Chrome: 20,
      Drawings: 10,
      Glitter: 10
    }
  },

  {
    title: "Refill",
    price: 200,
    duration: 30,
    img: feedb8Img,
    description:
      "Maintenance service for existing nail enhancements.",
    options: {
      SameColour: 200,
      ColourChange: 210,
      NailRepairPerNail: 20
    }
  },

  {
    title: "Foot Treatment",
    price: 170,
    duration: 25,
    img: feedb6Img,
    description:
      "A treatment focused on softening, exfoliating, and moisturizing the feet.",
    options: {
      Standard: 170
    }
  }
];

export const worktimes = [{
        time : '10:00 am'
    },
    {
        time : '12:00 pm'
    },
    {
        time : '14:00 pm'
    },
    {
        time : '16:00 pm'
    }
]

// night

// morning