import DashboardSavesClient from "./pageSaves.jsx";
import prisma from "../../lib/prisma";

export default async function DashboardSaves() {
  const saves = await prisma.save.findMany();

  return <DashboardSavesClient saves={saves} />;
}
