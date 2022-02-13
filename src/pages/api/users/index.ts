import argon2 from "argon2";
import { NextApiHandler } from "next";
import { prisma } from "../../../lib/prisma";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (user) {
      return res.status(409).json({
        ok: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await argon2.hash(password, { saltLength: 12 });

    const createdUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return res.status(201).json({
      ok: true,
      user: createdUser,
    });
  }
};

export default handler;
