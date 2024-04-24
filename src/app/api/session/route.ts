import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const value = req.cookies.get('v_s')?.value;
  if (!value) {
    return Response.json(null);
  }
  const session = JSON.parse(value);
  return Response.json(session);
};
