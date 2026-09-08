import Image from "next/image";
import { Card, CardTitle, CardContent, CardDescription, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ui/ScrollReveal";


export type category = 'Beach' | 'luxury' | 'cultural' | 'adventure';


export interface CardProps {
  header: string;
  // description : string ; 
  imageUrl: string;
  duration: number;
  rating: number;
  category: category
  price: number

}

function DestinationCard({ header, imageUrl, duration, category, rating, price }: CardProps) {
  return (
    <ScrollReveal >

    <Card className="w-full p-0  h-auto bouncy-hover max-w-sm rounded-2xl backdrop-blur-2xl shadow-2xl cursor-pointer " >

      <CardHeader className="relative overflow-hidden p-0">
      
        <div className="absolute left-4 right-4 top-4 z-10 flex justify-between">
          <Badge className="rounded-full bg-secondary p-4 fond-bold shadow-lg">
            
            <p className="font-bold">

            From $ {price}
            </p>
          </Badge>

          <Badge className="rounded-full bg-primary p-4 shadow-lg font-bold">
            {category}
          </Badge>
        </div>

        
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={imageUrl}
            alt="card-image"
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>

      <CardDescription className="p-3">
        <div className="inline-flex justify-between w-full ">
          <p className="font-bold text-xl text-black">{header}</p>
          <span className="mx-1  text-gray-600"><Star className="text-secondary fill-secondary" /> {rating}</span>
        </div>

        <p className="mt-2 text-black mb-2 ">{duration} /Days</p>
        <Link href={imageUrl} className="inline-flex items-center gap-x-1 bouncy-link mt-3 mb-3 font-bold text-primary">
          Explore Package <ArrowRight className="" size={15} />

        </Link>

      </CardDescription>

    </Card>
    </ScrollReveal>

  )
}

export default DestinationCard