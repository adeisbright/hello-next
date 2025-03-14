'use client'
 
import { incrementViews } from "../action"
import { useState, useEffect } from 'react'
 
export const ViewCount = ({ initialViews }: { initialViews: number })  => {
  const [views, setViews] = useState(initialViews)
 
  useEffect(() => {
    const updateViews = async () => {
      const updatedViews = await incrementViews(initialViews)
      setViews(updatedViews)
    }
 
    updateViews()
  }, [])
 
  return <p>Total Views: {views}</p>
}