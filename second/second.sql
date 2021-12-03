-- a
SELECT FirstName, LastName FROM Students 
INNER JOIN Exams ON Students.StudentId = Exams.StudentId
WHERE Exams.Result < 3
GROUP BY Students.StudentId HAVING COUNT(Students.StudentId) >= 2;

-- b
SELECT team FROM Students
Where Students.StudentId in (
	SELECT StudentID FROM (
		SELECT Students.StudentId, FirstName, LastName FROM Students 
		INNER JOIN Exams ON Students.StudentId = Exams.StudentId
		WHERE Exams.Result < 3
		GROUP BY Students.StudentId HAVING COUNT(Students.StudentId) >= 2
	) AS T
)
GROUP BY team HAVING COUNT(team) > 10;
