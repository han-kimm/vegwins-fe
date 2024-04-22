import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const isAuth = !!req.cookies.get('v_s')?.value;

  return Response.json({ isAuth });
};
