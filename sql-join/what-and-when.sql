SELECT
  "films"."releaseYear",
  "genres"."name" AS "genre"
FROM
  "films"
  JOIN "filmGenre" USING ("filmId")
  JOIN "genres" USING ("genreId")
WHERE
  "films"."title" = 'Boogie Amelie';
