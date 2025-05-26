"use client";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlaying } from "@/store/audioSlice";

export default function GlobalAudio() {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.audio.isPlaying);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {}); 
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().then(() => {
        dispatch(setPlaying(true));
      }).catch((err) => {
        console.log(err)
      });
    }
  }, []);

  return <audio ref={audioRef} src="/sound/sound.mp3" preload="auto" loop />;
}
export function playClickSound() {
  const audio = new Audio("/sound/mouseClick.mp3");
  audio.volume = 1;
  audio.play().catch((err) => {
    console.log("Click sound blocked:", err);
  });
}
