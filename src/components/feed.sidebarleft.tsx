"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FeedSidebarLeft() {
  const sizeImage = 120;
  return (
    <aside className="col-span-3 fixed left-0 top-24 w-[calc(25%-1rem)] h-[calc(100vh-6rem)]">
      <div className="h-full overflow-y-auto px-4 custom-scrollbar box-content">
        <Card className="bg-muted p-6 relative mb-4">
          <div className="text-center">
            <div 
              className="rounded-2xl overflow-hidden mx-auto border-7 border-black"
              style={{ width: sizeImage, height: sizeImage }}
              >
              <Image
                src="/avatar.jpg"
                alt="avatar"
                width={sizeImage}
                height={sizeImage}
                className=""
              />
            </div>
            <h2 className="mt-4 font-bold text-xl">Dustin Nguyen</h2>
            <p className="text-muted-foreground">@dustin.nguyen</p>
            <p className="mt-2 text-yellow-400 text-sm">
              ⭐ Hello, I&apos;m UI / UX designer. Open to the new Project ⭐
            </p>
            <Button variant="secondary" className="bg-linear-to-t from-[#333333] to-[#282828] mt-4 w-full text-white hover:bg-background cursor-pointer">
              My Profile
            </Button>
            <div className="flex justify-between mt-4 text-sm">
              <div>
                <span className="font-bold">1984</span> Followers
              </div>
              <div>
                <span className="font-bold">1002</span> Following
              </div>
            </div>
          </div>
        </Card>
        <div className="mb-6">
          <h3 className="text-muted-foreground text-sm mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "UX Designer",
              "Front and Back End developer",
              "JS coder",
              "UX Designer",
            ].map((skill, i) => (
              <span key={i} className="bg-muted px-3 py-1 text-sm rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-muted-foreground text-sm mb-2">Communities</h3>
          <ul className="space-y-2">
            {[
              { name: "UX Designer community", friends: 32 },
              { name: "Front end developers", friends: 12 },
              { name: "Back end developers", friends: 41 },
              { name: "Software developers", friends: 99 },
            ].map((c, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <Image
                  src={`/avatar/user_${i + 1}.png`}
                  alt={c.name}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                {c.name} –{" "}
                <span className="text-yellow-400">
                  {c.friends} your friends are in
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
