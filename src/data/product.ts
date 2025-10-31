// src/data/product.ts

import dior1 from "../assets/images/di1.jpg";
import dior2 from "../assets/images/di2.jpg";
import dior3 from "../assets/images/di3.jpg";
import dior4 from "../assets/images/di8.png";

import chanel1 from "../assets/images/ch2.jpg";
import chanel2 from "../assets/images/ch4.jpg";
import chanel3 from "../assets/images/ch7.webp";
import chanel4 from "../assets/images/ch8.png";

import ysl1 from "../assets/images/ysl3.webp";
import ysl2 from "../assets/images/ysl4.webp";
import ysl3 from "../assets/images/ysl5.png";
import ysl4 from "../assets/images/ysl6.webp";

import ceekay1 from "../assets/images/cee2.jpg";
import ceekay2 from "../assets/images/cee3.jpg";
import ceekay3 from "../assets/images/cee5.avif";
import ceekay4 from "../assets/images/cee6.avif";

import zara1 from "../assets/images/zara1.jpg";
import zara2 from "../assets/images/zara2.jpg";
import zara3 from "../assets/images/zara3.jpg";
import zara4 from "../assets/images/zara4.png";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export const products: Product[] = [
  {
    id: 1,
    title: "Dior Lady Bag",
    price: 52000000,
    description:
      "Chiếc túi Lady Dior được chế tác thủ công tinh xảo, mang phong cách quý phái và biểu tượng vĩnh cửu của phái đẹp.",
    category: "Dior",
    image: dior1,
    rating: { rate: 4.8, count: 150 },
  },
  {
    id: 2,
    title: "Dior Saddle Bag",
    price: 45000000,
    description:
      "Túi Saddle Dior mang thiết kế độc đáo dạng yên ngựa, tạo điểm nhấn cá tính và thời thượng.",
    category: "Dior",
    image: dior2,
    rating: { rate: 4.5, count: 200 },
  },
  {
    id: 3,
    title: "Dior Book Tote",
    price: 48000000,
    description:
      "Sản phẩm biểu tượng của nhà mốt Dior với kiểu dáng rộng rãi và họa tiết thêu tinh xảo.",
    category: "Dior",
    image: dior3,
    rating: { rate: 4.9, count: 98 },
  },
  {
    id: 4,
    title: "Dior Caro Bag",
    price: 50000000,
    description:
      "Phong cách nhẹ nhàng nhưng vẫn sang trọng nhờ thiết kế đệm caro đặc trưng.",
    category: "Dior",
    image: dior4,
    rating: { rate: 4.6, count: 110 },
  },
  {
    id: 5,
    title: "Chanel Classic Flap Bag",
    price: 72000000,
    description:
      "Chiếc túi Chanel biểu tượng với khóa CC đặc trưng, mang đậm phong cách thanh lịch.",
    category: "Chanel",
    image: chanel1,
    rating: { rate: 4.9, count: 250 },
  },
  {
    id: 6,
    title: "Chanel Boy Bag",
    price: 68000000,
    description:
      "Túi Boy Chanel đầy cá tính dành cho những cô nàng mạnh mẽ và thời thượng.",
    category: "Chanel",
    image: chanel2,
    rating: { rate: 4.7, count: 190 },
  },
  {
    id: 7,
    title: "Chanel 19 Bag",
    price: 65000000,
    description:
      "Thiết kế trẻ trung kết hợp với dây xích bản lớn tạo điểm nhấn hiện đại.",
    category: "Chanel",
    image: chanel3,
    rating: { rate: 4.8, count: 210 },
  },
  {
    id: 8,
    title: "Chanel Gabrielle Bag",
    price: 64000000,
    description:
      "Mềm mại và linh hoạt, chiếc túi Gabrielle phù hợp cho mọi phong cách thường ngày.",
    category: "Chanel",
    image: chanel4,
    rating: { rate: 4.6, count: 140 },
  },
  {
    id: 9,
    title: "YSL LouLou Medium",
    price: 39500000,
    description:
      "Thiết kế chữ V kinh điển cùng chất liệu da mềm mịn, sang trọng và cổ điển.",
    category: "YSL",
    image: ysl1,
    rating: { rate: 4.7, count: 175 },
  },
  {
    id: 10,
    title: "YSL Sunset Bag",
    price: 36000000,
    description:
      "Chiếc túi nhỏ gọn hoàn hảo cho các buổi tiệc sang chảnh.",
    category: "YSL",
    image: ysl2,
    rating: { rate: 4.5, count: 130 },
  },
  {
    id: 11,
    title: "YSL Kate Tassel",
    price: 34500000,
    description:
      "Dòng túi nổi bật với dây tua rua kiêu sa, giúp bạn tỏa sáng trong mọi sự kiện.",
    category: "YSL",
    image: ysl3,
    rating: { rate: 4.6, count: 160 },
  },
  {
    id: 12,
    title: "YSL Solferino",
    price: 38500000,
    description:
      "Kiểu dáng hiện đại, đường nét sắc sảo làm nổi bật phong cách cá nhân.",
    category: "YSL",
    image: ysl4,
    rating: { rate: 4.7, count: 145 },
  },
  {
    id: 13,
    title: "Ceekay Elegant Bag",
    price: 1450000,
    description:
      "Túi thời trang phù hợp đi học, đi chơi, dễ phối đồ và bền đẹp theo thời gian.",
    category: "Ceekay",
    image: ceekay1,
    rating: { rate: 4.1, count: 70 },
  },
  {
    id: 14,
    title: "Ceekay Sweet Girl",
    price: 1200000,
    description:
      "Phong cách dễ thương, phù hợp các bạn nữ yêu thích sự nhẹ nhàng.",
    category: "Ceekay",
    image: ceekay2,
    rating: { rate: 4.0, count: 90 },
  },
  {
    id: 15,
    title: "Ceekay Mini Bag",
    price: 890000,
    description:
      "Nhỏ gọn, tiện lợi và hợp xu hướng dành cho giới trẻ.",
    category: "Ceekay",
    image: ceekay3,
    rating: { rate: 4.2, count: 60 },
  },
  {
    id: 16,
    title: "Ceekay Fashion Bag",
    price: 1350000,
    description:
      "Thiết kế năng động phù hợp cho những chuyến đi ngắn cùng bạn bè.",
    category: "Ceekay",
    image: ceekay4,
    rating: { rate: 4.3, count: 85 },
  },
  {
    id: 17,
    title: "Zara Leather Shoulder Bag",
    price: 1850000,
    description:
      "Chất liệu da sang trọng với mức giá dễ tiếp cận dành cho mọi khách hàng.",
    category: "Zara",
    image: zara1,
    rating: { rate: 4.5, count: 120 },
  },
  {
    id: 18,
    title: "Zara Minimal Tote",
    price: 1650000,
    description:
      "Kiểu dáng tối giản nhưng vẫn nổi bật sự thanh lịch.",
    category: "Zara",
    image: zara2,
    rating: { rate: 4.4, count: 90 },
  },
  {
    id: 19,
    title: "Zara Quilted Mini Bag",
    price: 1590000,
    description:
      "Phù hợp cho phong cách trẻ trung, thời trang và năng động.",
    category: "Zara",
    image: zara3,
    rating: { rate: 4.3, count: 80 },
  },
  {
    id: 20,
    title: "Zara Simple Crossbody",
    price: 1490000,
    description:
      "Thiết kế nhỏ gọn giúp dễ dàng di chuyển mỗi ngày.",
    category: "Zara",
    image: zara4,
    rating: { rate: 4.2, count: 95 },
  },
];
