import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getMyInfo } from "@/services/user.service";
import Image from "next/image";
import { useState } from "react";

export default async function Profile() {
    // const [profile, setProfile] = useState(;)
  const profile = await getMyInfo();

  if (!profile) {
    console.log("Error API");
    
  }
  console.log(profile);
  
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-screen-xl mx-auto">
        <aside className="w-full lg:w-1/3 space-y-4">
        <Card className="bg-muted text-muted-foreground dark:bg-zinc-900 dark:text-white p-6">
          <Image
            src={profile.avatar}
            alt="Avatar"
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h2 className="text-center text-xl font-bold mt-4">{profile.name}</h2>
          <p className="text-center text-sm">@{profile.username}</p>
          <p className="text-center mt-2">{profile.bio}</p>
          <div className="flex justify-center mt-4">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
              Edit Profile
            </Button>
          </div>
        </Card>
      </aside>

      {/* User Activity (Posts) */}
      <section className="flex-1 space-y-4">
        <h2 className="text-lg font-semibold border-b pb-2">Posts by {profile.name}</h2>
        {/* <PostList posts={posts} /> */}
      </section>
    </div>
  )
}
