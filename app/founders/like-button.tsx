"use client" 
import { useState } from "react" 
import { incrementLike } from "../action"

export default function LikeButton({ initialLikes }: { initialLikes: number }) {
    const [likes, setLikes] = useState(initialLikes)
   
    return (
      <>
        <p>Total Likes: {likes}</p>
        <button className="btn btn-register"
          onClick={async () => {
            const updatedLikes = await incrementLike(likes)
            setLikes(updatedLikes)
          }}
        >
          Like
        </button>
      </>
    )
}