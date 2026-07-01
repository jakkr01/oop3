export {};

enum Role {
    Admin,
    Editor,
    Viewer
}

interface User {
    username: string;
    email: string;
    role: Role;
}

function checkAccess(user: User): void {
    if (user.role === Role.Admin) {
        console.log(`${user.username} เป็นแอดมิน ได้สิทธิ์ทุกอย่าง`);
    } else if (user.role === Role.Editor) {
        console.log(`${user.username} เป็นเอดิเตอร์ ได้สิทธิ์แก้ไขข้อมูล`);
    } else {
        console.log(`${user.username} เป็นวิวเวอร์ ได้สิทธิ์ดูข้อมูลอย่างเดียว`);
    }
}

const user1: User = {
    username: "Mana",
    email: "AOGfogasfyg@gmail.com",
    role: Role.Admin
};

    const user2: User = {
    username: "่jakkrwut",
    email: "cvoooth@example.com",
    role: Role.Editor
};

const user3: User = {
    username: "Pragha",
    email: "jomuja@example.com",
    role: Role.Viewer
};

checkAccess(user1);
checkAccess(user2);
checkAccess(user3);