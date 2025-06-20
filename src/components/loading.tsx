import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "./ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function LoadingIndicator() {
  return (
    <Card className="p-6 gap-1 m-4">
      <div className="flex items-center gap-4 mb-2">
        <Skeleton className="h-[40px] w-[40px] rounded-full" />
        <div>
          <Skeleton className="h-[20px] w-[100px] mb-2" />
          <Skeleton className="h-[15px] w-[80px]" />
        </div>
      </div>
      <Skeleton className="h-[20px] w-[200px] mb-2" />

      <Skeleton className="h-[400px] w-full" />

      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4 text-xl">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faComment} />
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
        <Skeleton className="bg-yellow-400 px-6 py-5 w-[80px]" />
      </div>
      <div className="flex items-center mt-4">
        <Skeleton className="w-[30px] h-[30px] rounded-full" />
        <input
          type="text"
          placeholder="Write your comment.."
          className="ml-2 w-full bg-transparent outline-none"
          disabled
        />
      </div>
    </Card>
  );
}
