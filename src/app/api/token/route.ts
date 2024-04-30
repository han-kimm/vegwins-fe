import { getCookie } from '@/utils/cookie';
import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const accessToken = await getCookie('v_at');
  console.log(req.cookies);
  console.log(accessToken);
  return Response.json(accessToken ?? '');
};

export const POST = async (req: NextRequest) => {
  const refreshToken = req.cookies.get('v_rt')?.value;
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`, {
    headers: { authorization: 'bearer' + ' ' + `${refreshToken}` },
  });
};
