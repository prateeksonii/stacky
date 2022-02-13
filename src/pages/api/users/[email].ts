import { NextApiHandler } from "next";
import { prisma } from "../../../lib/prisma";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const email = req.query.email as string;

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return res.status(200).json({
      ok: true,
      user,
    });
  }
};

export default handler;
