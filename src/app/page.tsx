import { BackgroundScene } from "@/components/ui/BackgroundScene";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-[#050505] p-4">
      <BackgroundScene />
      
      <div className="relative w-full h-full flex items-center justify-center">
        <ThemeToggle />
        <PhoneFrame />
      </div>
    </main>
  );
}
