"use client";

import { useState } from "react";
import Actor from "@/components/Actor";
import CustomError from "@/components/error";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import './globals.css';
import { Person, Result } from "./types";
import Head from "next/head";

export default function Home() {
  const [actors, setActors] = useState<Result[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function actorName(name: string) {
    setError(null);
    setIsLoading(true);
    const token = "your-token";

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/person?query=${name}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch actors. Please try again.");
      }

      const data: Person = await response.json();
      if (data.results.length === 0) {
        throw new Error("No actors found for this name.");
      }

      setActors(data.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
    <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="google-fonts" content="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" />
      </Head>
      <Header />
      <SearchBar setActor={actorName} />
      <div id="page1">
        {actors.length === 0 && !isLoading ? (
          <>
            <h1 className="title">Welcome to the Movie Night!</h1>
            <p className="paragraph">Discover your favorite movies and actors!</p>
          </>
        ) : null}

        {error && <CustomError message={error} />}

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="cardRow">
            {actors.map((actor, index) => (
              <Actor actor={actor} key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}