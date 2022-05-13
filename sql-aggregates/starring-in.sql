SELECT
  "customers"."firstName",
  "customers"."lastName",
  SUM("payments"."amount") AS "totalpaid"
FROM
  "customers"
  JOIN "payments" USING ("customerId")
GROUP BY
  "customerId"
ORDER BY
  "totalpaid" DESC
