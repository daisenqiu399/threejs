import Image from "next/image";
import bg from '../../public/background/home-background.png'
import Wizard from "@/components/models/Wizard";
import RenderModel from "@/components/RenderModel";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
    <Image
     src={bg} 
     sizes="100xw"
     alt='background-image' 
     fill
     className="-z-50 w-full h-full  object-cover object-center opacity-50"/>
     <div className="w-full h-screen">
     <RenderModel>
      <Wizard/>
     </RenderModel>
     </div>
    </main>
  );
}
