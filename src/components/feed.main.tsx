"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { getMyPosts } from "@/services/post.service";
import { useEffect, useRef, useState } from "react";
import LoadingIndicator from "./loading";
import FormPost from "@/components/posts/form.post";
// import AvatarUser from "@/components/avatar";
export default function FeedMain() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [animatingHearts, setAnimatingHearts] = useState<number[]>([]);

  const handleLike = (postIndex: number) => {
    setLikedPosts((prev) =>
      prev.includes(postIndex)
        ? prev.filter((index) => index !== postIndex)
        : [...prev, postIndex]
    );

    // Trigger animation
    setAnimatingHearts((prev) => [...prev, postIndex]);
    setTimeout(() => {
      setAnimatingHearts((prev) => prev.filter((index) => index !== postIndex));
    }, 500); // Match animation duration
  };

  const [posts, setPosts] = useState<IPost[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  const fetchPosts = async (pageNumber: number) => {
    try {
      if (loading) return;
      setLoading(true);
      const response = await getMyPosts(pageNumber);
      if (!response?.data) return;
      console.log("response", response.data);

      const newPosts = response.data.data.data || [];
      setPosts((prev) => [...prev, ...newPosts]);
      setHasMore(newPosts.length > 0);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  useEffect(() => {
    if (!observerRef.current || !hasMore || loading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasMore, loading]);

  return (
    <main className="col-span-6 space-y-6 mx-auto w-full max-w-3xl px-4 mt-4">
      <div className="flex space-x-4 overflow-x-auto">
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            src={`/avatar/user_${i + 1}.png`}
            alt="story"
            width={50}
            height={50}
            className="rounded-full border-2 border-yellow-500"
          />
        ))}
      </div>
      <FormPost />

      {posts.map((post, index) => (
        <Card key={post.id} className="bg-muted p-6 gap-1">
          <div className="flex items-center gap-4 mb-2">
            <Image
              src={`/avatar/user_default.png`}
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">George Jose</p>
              <p className="text-sm text-yellow-400">{post.created}</p>
            </div>
          </div>
          <p className="mb-2 text-xl">{post.content}</p>
          { post.imageUrl &&
            <Image
              // src={`/post/post-1.jpg`}
              src={`${post.imageUrl}`}
              alt="Post"
              width={700}
              height={300}
              className="rounded-lg mx-auto block"
            />
          }
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-4 text-xl">
              <FontAwesomeIcon
                icon={faHeart}
                className={`cursor-pointer ${
                  likedPosts.includes(index) ? "text-red-500" : ""
                } ${animatingHearts.includes(index) ? "heart-spin" : ""}`}
                onClick={() => handleLike(index)}
              />
              <FontAwesomeIcon
                icon={faComment}
                className="cursor-pointer hover:text-blue-500"
              />
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="cursor-pointer hover:text-yellow-500"
              />
            </div>
            <Button className="bg-yellow-400 text-black px-6">Save</Button>
          </div>
          <div className="flex items-center mt-4">
            <div className="relative w-[30px] h-[30px] rounded-full overflow-hidden">
              <Image
                src="/avatar.jpg"
                alt="comment avatar"
                width={30}
                height={30}
                className="rounded-full object-cover"
                quality={100}
              />
            </div>
            <input
              type="text"
              placeholder="Write your comment.."
              className="ml-2 w-full bg-transparent outline-none"
            />
          </div>
        </Card>
      ))}
      <div ref={observerRef} className="h-5" />
      {loading && <LoadingIndicator />}
    </main>
  );
}
