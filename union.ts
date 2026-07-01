export {};

enum Status {
    Retired = 1,
    Probation = 2
}

type ID = string | number;

type Student = {
    id: ID;
    name: string;
    status: Status;
    province: string;
};

const students: Student[] = [
    {
        id: "684245001",
        name: "ตู่",
        status: Status.Retired,
        province: "กรุงเทพมหานคร"
    },
    {
        id: "684245032",
        name: "ซี",
        status: Status.Probation,
        province: "นครปฐม"
    }
];

function showStudent(student: Student): void {
    console.log(`รหัสนักศึกษา: ${student.id}`);
    console.log(`ชื่อ: ${student.name}`);
    console.log(`สถานะ: ${Status[student.status]}`);
    console.log(`จังหวัด: ${student.province}`);
    console.log("----------------------");
}

for (const s of students) {
    showStudent(s);
}