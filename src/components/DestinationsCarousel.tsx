'use client'
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const DestinationsCarousel = () => {
  const destinations = [
    { title: "Everest Base Camp", img: "/images/everest.webp" },
    { title: "Annapurna Circuit", img: "/images/annapurna.webp" },
    { title: "Langtang Valley", img: "/images/langtang.webp" },
    { title: "Manaslu Trek", img: "/images/manaslu.webp" },
    { title: "Upper Mustang", img: "/images/mustang.webp" },
    { title: "Tilicho Lake", img: "/images/Tilicho.webp" }
  ];
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="overflow-hidden"
    >
      <CarouselContent>
        {destinations.map((place, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
            <Card className="bg-white overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition border-0">
              <Image
                src={place.img}
                alt={place.title}
                width={400}
                height={250}
                className="object-cover w-full h-56"
              />
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-semibold">{place.title}</h3>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default DestinationsCarousel;
