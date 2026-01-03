"use client"

import { useState } from "react"

export default function LikeButton() {
    const[liked, setLiked] = useState(false);

    return(
        <button type='button' onClick={() => setLiked((prev) => !prev)}
        style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: liked ? "red" : "gray",
      }}>
      {liked ? "♥ Liked" : "♡ Like"}
        </button>
    )
}