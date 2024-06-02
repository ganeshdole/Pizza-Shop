import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useState, useEffect } from "react";

interface Pizza {
  name: string;
  description: string;
  image: string;
  price: string;
}

export default function ProductCard({
  name,
  description,
  image,
  price,
}: Pizza) {
  const [pizzaImage, setPizzaImage] = useState<string | null>(null);

  useEffect(() => {
    const importImage = async () => {
      try {
        const imageModule = await import(`@/assets/pizzaImages/${image}`);
        setPizzaImage(imageModule.default);
      } catch (error) {
        console.error(`Failed to import image ${image}: ${error}`);
      }
    };

    importImage();
  }, [image]);

  return (
    <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          {pizzaImage && <img src={pizzaImage} loading="lazy" alt={name} />}
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">Pizza</Typography>
        <Link
          href="#product-card"
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
        >
          {name}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Classic
            </Chip>
          }
        >
          ₹{price}
        </Typography>
        <Typography level="body-sm">{description}</Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
}
