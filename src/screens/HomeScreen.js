import React from 'react'
import './HomeScreen.css'
import data from '../data.json'
import MovieCards from '../components/MovieCard.js'

function HomeScreen() {
  return (
    <>
        {
            data.movieData.map((elem,index) => {
                return <MovieCards imgSrc = {elem.img_url} runtime = {elem.runtime} movieName = {elem.name} director = {elem.director} gener = {elem.genre} synopsis = {elem.synopsis} year ={elem.year} key = {index}/>
            })
        }
    </>
  )
}

export default HomeScreen;