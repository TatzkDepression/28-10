import ListMovie from "../ListMovie/ListMovie";
import TabMovie from "./TabMovie/TabMovie";

export default function HomePage() {
  return (
    <div className="container">
      <ListMovie />
      <TabMovie />
    </div>
  );
}
