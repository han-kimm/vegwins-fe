import Anchor from "@/components/Anchor";
import Button from "@/components/Anchor";
import Docs from "public/icon/docs.svg";

export default function Home() {
  return (
    <main className="flex-center min-h-screen">
      <Anchor href="https://naver.com" target="_blank" className="text-white text-20 font-medium active:bg-black-100">
        <Docs />
        <span>첫걸음 안내서</span>
      </Anchor>
    </main>
  );
}
