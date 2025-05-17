import { Cards } from "./ui/Cards";

export function NewArrivals() {
  const cards = [
    {
      title: "Minimalist Vibe",
      src: "https://res.cloudinary.com/du5qoczcn/image/upload/v1747185120/image_9_eukfer.png",
      description: "Checked Shirt",
      price: "$99.99",
      rating: 4.5
    },
    
    {
      title: "Denim Defined",
      src: "https://res.cloudinary.com/du5qoczcn/image/upload/v1747185119/image_8_aofs3x.png",
      description: "Skkiny Fit Jeans",
      price: "$89.99",
      rating: 4.8
    },
    {
      title: "Street Essential",
      src: "https://res.cloudinary.com/du5qoczcn/image/upload/v1747185119/image_10_bfew3y.png",
      description: "Sleeve Striped T-shirt",
      price: "$129.99",
      rating: 4.3
    },
    {
      title: "Bold & Basic",
      src: "https://res.cloudinary.com/du5qoczcn/image/upload/v1747185118/image_7_saktoj.png",
      description: "T-shirt with Tape Details",
      price: "$149.99",
      rating: 4.9
    },
     
  ];

  return <Cards cards={cards} />;
}
