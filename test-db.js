const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const records = await prisma.staffAttendanceRecord.findMany();
  console.log("Total records:", records.length);
  if (records.length > 0) {
    console.log("Sample dates:");
    console.log(records.slice(0, 5).map(r => r.date));
  }
}
main().catch(console.error).finally(() => prisma.$disconnect());
