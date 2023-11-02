import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="hero fixed top-0">
         {/* <Image
           src="/assets/images/hero.png"
           alt="hero image"
           width={1920}
           height={1280}
           className="object-contain" 
          /> */}
      </div>
    </main>
  )
}
