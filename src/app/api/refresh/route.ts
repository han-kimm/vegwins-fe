import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const refreshToken = req.cookies.get('v_rt')?.value;
  console.log(req.cookies);

  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`, {
    headers: { authorization: 'bearer' + ' ' + `${refreshToken}` },
  });
};
