SELECT
  "actors"."firstName",
  "actors"."lastName"
FROM
  "films"
  JOIN "castMembers" USING ("filmId")
  JOIN "actors" USING ("actorId")
WHERE
  "films"."title" = 'Jersey Sassy';
