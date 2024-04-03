import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-center min-h-screen">
      <Button className=" focus:bg-white">
        <Image src="/icon/docs.svg" width={20} height={20} alt="안내서 이미지" />
        <span className="text-white text-20 font-medium">첫걸음 안내서</span>
      </Button>
    </main>
  );
}
