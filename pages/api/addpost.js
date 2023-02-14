import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  await prisma.post.create({
    data: {
      name: name,
      email: email,
      message: message,
    },
  });

  res.json({ ok: true });
}
