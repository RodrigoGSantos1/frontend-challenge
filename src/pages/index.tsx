import { useCartActions } from "@/store/actions";
import { Cart, Header, Store } from "../components";
import { useEffect } from "react";

export default function Home() {
  const { isOverviewVisible } = useCartActions()

  return (
    <>
      <Header />
      <Store />
      {isOverviewVisible && <Cart />}
    </>
  );
}
