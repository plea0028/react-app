'use client'

import Image from "next/image";
import Header from "@/components/Header"
import SearchBar from "@/components/SearchBar"
import Actor from '@/components/Actor'
import './globals.css'
import { useState } from 'react'
import { Person, Result } from './types'

export default function Home() {
  const [actors, setActors] = useState<Result[]>([])

  async function actorName(name: string) {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDJiZGUwOWMyOGMzZWFkNzVkZDY0OTdlMTg5Y2E3YiIsIm5iZiI6MTczODAwMDM3OC45MDksInN1YiI6IjY3OTdjN2ZhMDEzMjA5Zjg5MThmNjg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LvQt_IbbGxwpAzC6e0cw94z_wUj6yC4RP_2lFCZGW0c';
    const response = await fetch(`https://api.themoviedb.org/3/search/person?query=${name}`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    });
    const data: Person = await response.json();
    console.log(data.results)
    setActors(data.results)

    console.log(data.results)
  }

  return (
    <>
      <Header />
      <SearchBar setActor={actorName} />
      <div id="page1">
          <h1>Welcome to the Movie Night!</h1>
          <p>Discover your favorite movies and actors!</p>
          {actors.map((actor, index) => <Actor actor={actor} key={index} />)}
      </div>
    </>
  );
}