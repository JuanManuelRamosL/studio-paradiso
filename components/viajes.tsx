import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/neuquen1.jpg",
  "/neuquen2.jpg",
  "/neuquen3.jpg",
  "/buenosaires1.jpg",
  "/buenosaires2.jpg",
  "/buenosaires3.jpg",
  "/miami1.jpg",
  "/miami2.jpg",
  "/miami3.jpg",
];

export default function TravelTabsContent() {
  return (
    <TabsContent value="viajes" className="mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Card key={index} className="bg-gray-900">
            <CardContent className="p-0">
              <Image
                src={image}
                alt={`Travel destination ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link
          href="/destinos"
          className="bg-[#C5B358] text-white px-6 py-2 rounded-lg hover:bg-[#B4A347] transition"
        >
          Ver más
        </Link>
      </div>
    </TabsContent>
  );
}
