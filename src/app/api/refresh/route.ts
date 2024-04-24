import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const refreshToken = req.cookies.get('v_rt')?.value;
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`, {
    headers: { authorization: 'bearer' + ' ' + `${refreshToken}` },
  });
};

export const DELETE = async () => {
  return new Response(JSON.stringify({ message: '로그아웃 완료' }), {
    status: 200,
    headers: {
      'Set-Cookie': 'v_rt=; path=/api/refresh; Max-Age=1',
    },
  });
};
