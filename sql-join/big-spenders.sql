SELECT
  "payments"."amount" AS "paid",
  "customers"."firstName",
  "customers"."lastName"
FROM
  "payments"
  JOIN "customers" USING ("customerId")
ORDER BY
  "paid" DESC
LIMIT 11;
