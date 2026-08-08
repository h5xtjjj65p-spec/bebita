import HeroLove from "@/components/HeroLove";
import LoveStory from "@/components/LoveStory";
import Memories from "@/components/Memories";
import LoveLetter from "@/components/LoveLetter";
import RelationshipCounter from "@/components/RelationshipCounter";
import Reasons from "@/components/Reasons";
import FutureReveal from "@/components/FutureReveal";
import FinalMessage from "@/components/FinalMessage";
import MusicPlayer from "@/components/MusicPlayer";
import { relationship } from "@/data/relationship";

export default function Home() {
  return (
    <>
      <main className="relative overflow-hidden bg-ink">
        <HeroLove herName={relationship.herName} />
        <LoveStory />
        <Memories />
        <LoveLetter />
        <RelationshipCounter />
        <Reasons />
        <FutureReveal />
        <FinalMessage />
      </main>
      <MusicPlayer />
    </>
  );
}
