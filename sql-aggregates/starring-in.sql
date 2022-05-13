SELECT
  "genres"."name",
  COUNT("genres"."name")
FROM
  "genres"
  JOIN "filmGenre" USING ("genreId")
  JOIN "castMembers" USING ("filmId")
  JOIN "actors" USING ("actorId")
where
  "firstName" = 'Lisa' AND
  "lastName" = 'Monroe'
GROUP BY
  "genreId";
