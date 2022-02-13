import argon2 from "argon2";
import { sign } from "jsonwebtoken";
import { NextApiHandler } from "next";
import { prisma } from "../../../lib/prisma";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({
        ok: false,
        message: "User not found",
      });
    }

    const isValidPassword = await argon2.verify(user.password, password);

    if (!isValidPassword) {
      return res.status(403).json({
        ok: false,
        message: "Invalid username or password",
      });
    }

    const token = sign({ userId: user.id }, process.env.JWT_SECRET!);

    return res.status(201).json({
      ok: true,
      user,
      token,
    });
  }
};

export default handler;
