import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function hashPasswords() {
  console.log('Starting password migration...');
  
  // 1. Admin Users
  const admins = await prisma.adminUser.findMany();
  let adminCount = 0;
  for (const admin of admins) {
    if (!admin.password.startsWith('$2a$') && !admin.password.startsWith('$2b$')) {
      const hashed = await bcrypt.hash(admin.password, 10);
      await prisma.adminUser.update({
        where: { id: admin.id },
        data: { password: hashed }
      });
      adminCount++;
    }
  }
  console.log(`Migrated ${adminCount} Admin passwords.`);

  // 2. Faculty Users
  const faculties = await prisma.facultyUser.findMany();
  let facultyCount = 0;
  for (const faculty of faculties) {
    if (!faculty.password.startsWith('$2a$') && !faculty.password.startsWith('$2b$')) {
      const hashed = await bcrypt.hash(faculty.password, 10);
      await prisma.facultyUser.update({
        where: { id: faculty.id },
        data: { password: hashed }
      });
      facultyCount++;
    }
  }
  console.log(`Migrated ${facultyCount} Faculty passwords.`);

  // 3. Student Users
  const students = await prisma.student.findMany();
  let studentCount = 0;
  for (const student of students) {
    if (!student.password.startsWith('$2a$') && !student.password.startsWith('$2b$')) {
      const hashed = await bcrypt.hash(student.password, 10);
      await prisma.student.update({
        where: { id: student.id },
        data: { password: hashed }
      });
      studentCount++;
    }
  }
  console.log(`Migrated ${studentCount} Student passwords.`);
  
  console.log('Password migration complete!');
}

hashPasswords()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
