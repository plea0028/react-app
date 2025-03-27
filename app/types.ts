export type Person = {
    page: number
    results: Result[]
    total_pages: number
    total_results: number
  }
  
export type Result = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string
  known_for: KnownFor[]
}

export type KnownFor = {
  backdrop_path?: string
  id: number
  title?: string
  original_title?: string
  overview: string
  poster_path?: string
  media_type: string
  adult: boolean
  original_language: string
  genre_ids: number[]
  popularity: number
  release_date?: string
  video?: boolean
  vote_average: number
  vote_count: number
  name?: string
  original_name?: string
  first_air_date?: string
  origin_country?: string[]
}
  
// interface vs type
// type is better because you can give literal values and you can't override the type
// type aliases can extend any type