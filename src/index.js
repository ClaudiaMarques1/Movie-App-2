import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import WatchlistMoviesPage from "./pages/watchlistMoviesPage";
import ActorPage from "./pages/actorsPage";
import TVSeriesPage from "./pages/tvSeriesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import TVSeriesContextProvider from "./contexts/moviesContext";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <SiteHeader />
                <TVSeriesContextProvider>
                    <MoviesContextProvider>
                        <Routes>
                            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
                            <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
                            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
                            <Route path="/movies/watchlist" element={<WatchlistMoviesPage />} />
                            <Route path="/movies/actors" element={<ActorPage />} />
                            <Route path="/movies/tvseries" element={<TVSeriesPage />} />
                            <Route path="/reviews/:id" element={<MovieReviewPage />} />
                            <Route path="/movies/:id" element={<MoviePage />} />
                            <Route path="/" element={<HomePage />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </MoviesContextProvider>
                </TVSeriesContextProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));