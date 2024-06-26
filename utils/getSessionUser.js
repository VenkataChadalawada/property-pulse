import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

export const getSessionUser = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return null;
    }
    console.log("session retrival success");
    return {
      user: session.user,
      userId: session.user.id,
    };
  } catch (e) {
    console.error("session retrival failed", error);
    return null;
  }
};
