# moviesapp- 2

ICT Skills 2 Assignment.
Name: Claudia Marques

Overview.

This is an advanced verison of the first movie app with created in Assignment 1. You should be able to now see more popular actors and TV series now.

e.g.

Tv series
Actors
Feature 3
etc
etc
Setup requirements.
[ Briefly state (to a third party) the setup steps necessary to run your app/client locally, e.g. .env and any other config files.]

App Design.
Routing/Navigation.
[List the set of routes your app supports - only mention new instances if you expanded the Movies Fan app. State the view linked with each route.]

e.g.

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
                            
Views/Pages.
Home Page:
![image](https://user-images.githubusercontent.com/77294166/186271528-1027ab6c-2341-4663-99bc-a674bf7618ab.png)

Favourites:
![image](https://user-images.githubusercontent.com/77294166/186271621-0d0a436a-9214-4036-85d4-c45096ba0c67.png)

Upcoming:
![image](https://user-images.githubusercontent.com/77294166/186271740-b25726ae-a85a-49b2-86d6-ce470039a387.png)

Watchlist: The page is created but not fully working like favourites.
![image](https://user-images.githubusercontent.com/77294166/186271844-d133798e-8759-4cb7-823a-a2d4751c1d6a.png)

Actors:
![image](https://user-images.githubusercontent.com/77294166/186271895-488c7a98-35a8-4a3c-99c5-c7992cd6ed7c.png)

Similar: Page works but have not been able to achieve similar movies.
![image](https://user-images.githubusercontent.com/77294166/186271994-c0b2c82a-4a71-4794-9d0f-901b75fbbfe0.png)

TV Series:
![image](https://user-images.githubusercontent.com/77294166/186272046-42acae89-d036-4d5c-ade7-6918bf8efbf4.png)


e.g.

Lists movies from the Discover endpoint. Filtering on title and genre attributes is supported.





Shows detailed information on a specific movie

![image](https://user-images.githubusercontent.com/77294166/186272208-2e170a8e-41c6-40aa-b416-84b36bcc26c1.png)

![image](https://user-images.githubusercontent.com/77294166/186272164-535e1f2f-2d2e-490a-a4d6-60fbcb2ca395.png)


Component catalogue.
[ Use the Storybook UI to highlight the new components for which you developed stories.] e.g.



Caching.
[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.

Discover movies (pagination support)
Movie details
etc
etc


Authentication (if relevant).
[Briefly state how you implemented authentication for the app, e.g. basic, Firebase, etc. Also, list the routes that are private/protected.]

e.g.

/reviews/:id
/movies/favourites
Server-side persistence (if relevant)
[ Specify the persistence platform your app uses (e.g. TMDB lists, Firestore) and itemize the data it persists.]

Additional features (if relevant),
[Mention any additional user features of your app that may not be obvious from the previous sections, e.g. pagination, extended filtering/sorting, searching.]

Independent learning (if relevant),
[Briefly explain any aspects of your assignment work that required independent learning (i.e. not addressed in the lectures or labs) on your behalf., e.g. 3rd-party components, libraries, tools. Include source code references.]

