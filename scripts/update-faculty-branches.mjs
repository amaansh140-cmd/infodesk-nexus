import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const faculties = await prisma.facultyUser.findMany();
  for (const f of faculties) {
    const branches = f.department === 'Global' ? ['Global'] : [f.department, 'Global'];
    await prisma.facultyUser.update({
      where: { id: f.id },
      data: { assignedBranches: branches }
    });
  }
  console.log(`Updated ${faculties.length} existing faculties to have respective and Global branches.`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
