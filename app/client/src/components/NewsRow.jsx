import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddBar from "./AddBar";
import NewsCard from "./NewsCard";
import SortBar from "./SortBar";
import Loader from "./Loader";
import { fetchAllPosts } from "./../redux/actions/posts";

export default function NewsRow() {
  const dispatch = useDispatch();

  const posts = useSelector(({ posts }) => posts.items);
  const isLoaded = useSelector(({ posts }) => posts.isLoaded);

  React.useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <section className="news-page">
      <AddBar />
      <SortBar />
      {isLoaded ? posts.map((post,i) => <NewsCard key={i} post={post} />) : <Loader />}
    </section>
  );
}
