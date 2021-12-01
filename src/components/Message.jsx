import React from "react";
import { Layout, Image } from "../styles";

export default function Message({dayMessage, imgUrl}) {
  return(
    <Layout>
      <p>...אופס</p>
      <p>?רוצה לגלות מה יהיה ביום {dayMessage}</p>
      <p>?לאן את ממהרת</p>
      <p>תהני מהיום הזה הוא עוד לא נגמר</p>
    <Image src={imgUrl} alt=""/>      
    </Layout>
  );
}
