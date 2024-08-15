import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(request: Request) {
  try {
    const { userName, email, password } = await request.json();
    //validating email & pass
    console.log({ userName, email, password });

    const hashedPassword = await hash(password, 10);

    const res = await fetch(
      "https://carshow-backend.onrender.com/registerUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          email,
          hashedPassword,
          role: "user",
        }),
      }
    );
    console.log({ res });
  } catch (e) {
    console.log(e);
  }

  return NextResponse.json({ message: "Success" });
}
