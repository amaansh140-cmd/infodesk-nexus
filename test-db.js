const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "mysql://u600893894_infodesk_user:Infodesk%401411@82.25.121.169:3306/u600893894_infodesk_db"
    }
  }
});

async function main() {
  try {
    const branch = await prisma.branch.create({
      data: {
        name: 'Test Branch From Script',
        admin: null,
        students: 0,
        status: 'Active'
      }
    });
    console.log("SUCCESS:", branch);
  } catch (error) {
    console.error("ERROR:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
