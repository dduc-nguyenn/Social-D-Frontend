import FeedMain from "@/components/feed.main";
import FeedSidebarLeft from "@/components/feed.sidebarleft";
import FeedSidebarRight from "@/components/feed.sidebarright";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6 relative mx-auto container">
      <div className="col-span-3 min-h-screen">
        <FeedSidebarLeft />
      </div>
      <div className="col-span-6 min-h-screen">
        <FeedMain />
      </div>
      <div className="col-span-3 min-h-screen">
        <FeedSidebarRight />
      </div>
    </div>
  );
}
