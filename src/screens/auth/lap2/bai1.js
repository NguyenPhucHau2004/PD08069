const class1 = [
    {
        mssv: "PS0000",
        name: "Nguyen Van A",
        avgPoint: 8.9,
        avgTraningPoint: 7,
        status: "pass",
    },
{
    mssv: "PS0001",
        name: "Nguyen Van B",
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: "pass",
},
];

const class2 = [
    {
        mssv: "PS0002",
        name: "Nguyen Van C",
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: "failed",
    },
    {
        mssv: "PS0003",
        name: "Nguyen Van D",
        avgPoint: 10,
        avgTraningPoint: 10,
        status: "pass",
    },
    {
        mssv: "PS0004",
        name: "Nguyen Van E",
        avgPoint: 10,
        avgTraningPoint: 2,
        status: "pass",
    },
];
 // sắp xếp danh sách sinh viên theo avgPoint từ cao xuống thấp
 const sorteByAvgPoint = [...class1, ...class2].sort((a,b) => b.avgPoint - a.avgPoint);
 console.log("Danh sách sinh viên theo avgPoint từ cao xuống thấp:");
 console.log(sorteByAvgPoint);

 // sắp xếp danh sách sinh viên theo avgTraningPoint từ cao xuống thấp
 const sorteByAvgTraningPoint = [...class1, ...class2].sort((a,b) => b.avgTraningPoint - a.avgTraningPoint);
 console.log("Danh sách sinh viên theo avgTraningPoint từ cao xuống thấp:");
 console.log(sorteByAvgTraningPoint);

 // Tìm sinh viên có avgPoint và avgTraningPoint cao nhất
 const allStudents = [...class1, ...class2];
 const maxAvgPointStudent = allStudents.reduce((max, student) => (student.avgPoint > max.avgPoint ? student : max));
 const maxAvgTraningPointStudent = allStudents.reduce((max, student) => (student.avgTraningPoint > max.avgTraningPoint ? student : max));
 
 console.log("Thông tin sinh viên có avgPoint cao nhất:");
 console.log(maxAvgPointStudent);

 console.log("Thông tin sinh viên có avgTraningPoint cao nhất:");
 console.log(maxAvgTraningPointStudent);


