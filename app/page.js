import Image from "next/image";
import TeamCard from "./components/TeamCard";
import NavBar from "./components/NavBar";
import PlayerDataViewer from "./components/PlayerDataViewer";

export default function Home() {
  return (
    <>
      <PlayerDataViewer />
    </>
  );
}
