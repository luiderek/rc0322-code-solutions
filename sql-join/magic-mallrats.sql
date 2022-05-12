SELECT
  "customers"."firstName",
  "customers"."lastName"
FROM
  "films"
  JOIN "inventory" USING ("filmId")
  JOIN "rentals" USING ("inventoryId")
  JOIN "customers" USING ("customerId")
WHERE
  "films"."title" = 'Magic Mallrats';
