"use client" 
import { useState , useTransition } from "react" 
import { incrementLike } from "../action"

export default function LikeButton({ initialLikes }: { initialLikes: number }) {
    const [likes, setLikes] = useState(initialLikes)
    const [isPending, startTransition] = useTransition();
    return (
      <>
        <p>Total Likes: {likes}</p>
        <button className="btn btn-register"
          onClick={() =>
            startTransition(async () => {
                const updatedLikes = await incrementLike(likes)
                setLikes(updatedLikes)
              }
            )
          }
        >
          Like
        </button>
      </>
    )
}