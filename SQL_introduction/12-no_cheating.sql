-- script that updates the score of Bob to 10 in the table second_table
SELECT score, name
FROM second_table
WHERE score >= 10
ORDER BY score DESC; -- not yet changed from task11
