"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FeedSidebarRight() {
  const people = ["George Jose", "Michel", "Cristano", "Brahim diaz", "John wick"];

  return (
    <aside className="col-span-3 fixed right-0 top-24 w-[calc(25%-1rem)] max-h-[calc(100vh-6rem)] overflow-y-auto">
      <Card className="bg-muted p-6 relative mx-4 gap-4">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {people.map((name, i) => (
            <div key={i} className="">
              <div className="flex gap-2 items-center mb-2">
                <Image
                  src={`/avatar/user_${i + 1}.png`}
                  alt={name}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm">{name}</p>
                  <p className="text-xs text-muted-foreground">Followed on you · 3 min ago</p>
                </div>
              </div>
              
              <div className="flex gap-2 justify-around">
                <Button variant="ghost" className="text-xs cursor-pointer">
                  Remove
                </Button>
                <Button className="bg-yellow-400 text-black text-xs py-1 hover:text-white cursor-pointer">Follow Back</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </aside>
  );
}