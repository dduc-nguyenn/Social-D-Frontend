import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export default function AvatarUser() {
  return (
    <Avatar>
      <AvatarImage className="object-cover" src="/avatar.jpg"/>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
