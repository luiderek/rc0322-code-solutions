SELECT
  "countries"."name",
  count("cities") AS "cityCount"
FROM
  "countries"
  JOIN "cities" USING ("countryId")
GROUP BY
  "countries"."name"
