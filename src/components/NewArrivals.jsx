import { Card } from "../components/ui/Cards";

export function NewArrivals() {
  const cards = [
    {
      title: "Everyday Classic",
      src: "https://res.cloudinary.com/du5qoczcn/image/upload/v1747189690/image_7-2_fgafec.png",
      description: "Vertical Striped Shirt",
      price: "$99.99",
      rating: 4.5
    },
    {
      title: "Effortless Comfort",
      src: "https://res.cloudinary.com/du5qoczcn/image/upload/v1747189691/image_8-2_bq93ee.png",
      description: "Courage Graphic T-shirt",
      price: "$89.99",
      rating: 4.8
    },
    {
      title: "Tailored Tough",
      src: "https://res.cloudinary.com/du5qoczcn/image/upload/v1747189691/image_9-2_pmlhll.png",
      description: "Loose Fit Bermuda Shorts",
      price: "$129.99",
      rating: 4.3
    },
    {
      title: "Raw Edge Style",
      src: "https://res.cloudinary.com/du5qoczcn/image/upload/v1747189691/image_10-2_rojwld.png",
      description: "Faded Skinny Jeans",
      price: "$149.99",
      rating: 4.9
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {cards.map((item, idx) => (
        <Card key={idx} card={item} />
      ))}
    </div>
  );
}
