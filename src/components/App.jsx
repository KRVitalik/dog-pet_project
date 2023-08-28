import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";

const Home = lazy(() => import('./pages/Home'));
const Voting = lazy(() => import('./Voting/Voting'));
const Breeds = lazy(() => import('./Breeds/Breeds'));
const Gallery = lazy(() => import('./Gallery/Gallery'));
const Likes = lazy(() => import('./Likes/Likes'));
const Dislikes = lazy(() => import('./Dislike/Dislike'));
const Favourites = lazy(() => import('./Favourites/Favourites'));
const ImageInfo = lazy(() => import('./ImageInfo/ImageInfo'));
const SearchGallery = lazy(() => import('./SearchGallery/SearchGallery'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <Home/> } />
        <Route path="voting/" element={<Voting />} />
        <Route path="breeds/" element={<Breeds />} />
        <Route path="breeds/info/" element={<ImageInfo />} />
        <Route path="gallery/" element={<Gallery />} />
        <Route path="likes" element={<Likes />} />
        <Route path="dislike" element={<Dislikes />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="search" element={<SearchGallery />} />
      </Route>
    </Routes>
  );
};