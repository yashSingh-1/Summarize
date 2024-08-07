import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation";
import { db } from ".";

export const SyncData = async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    if(!user?.email || !user){
        redirect("/")
    }

    // check if the user is in the database
    const dbUser = await db.user.findFirst({
        where: {
          id: user.id,
        },
    })

    if(dbUser){
        return { msg: "User already there"}
    }

    if (!dbUser) {
        // create user in db
        await db.user.create({
          data: {
            id: user.id,
            email: user.email,
          },
        })
        return { success: true }
      }
}