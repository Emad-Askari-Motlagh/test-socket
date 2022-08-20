import { useEffect } from "react";

import socket from "../lib/socketClient";

export default function Home() {
  useEffect(() => {
    const testHandler = () => {
      console.log(
        "Home Page",
        "- info:",
        "test event received from Socket.IO!"
      );
      alert("test event received");
    };

    socket.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });
    socket.on("disconnect", () => {
      console.log("disconnect");
    });
    socket.on("connect", () => {
      console.log("connect");
      socket.emit("getOrders");
    });
    socket.on("test", testHandler);

    return () => {
      socket.off("connect", testHandler);
    };
  }, []);

  const callApiRouteThatWillEmitEvent = () => {
    console.log("Home Page", "- info:", "Call API button clicked!");
    fetch("/api/test");
  };

  return (
    <>
      <main>
        <article>
          <p>Hello!</p>
        </article>
        <article>
          <button onClick={callApiRouteThatWillEmitEvent}>call API</button>
        </article>
      </main>
    </>
  );
}
