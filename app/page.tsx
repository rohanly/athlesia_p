"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { socket } from "./socket";

export default function Home() {
  const [isConnected, setIsConnected] = useState("");
  const [hello, setHello] = useState("");

  function onConnect(value: any) {
    setIsConnected(`Connection id:${value}`);
  }

  function onDisconnect() {
    setIsConnected("Disconnected");
  }

  function onFooEvent(value: any) {
    setHello(value);
  }

  useEffect(() => {
    socket.on("connected", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("hello-success", onFooEvent);

    return () => {
      socket.off("connected", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("hello-success", onFooEvent);
    };
  }, []);

  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  function callHello() {
    socket.timeout(5000).emit("hello", "value", () => {});
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-2">
      <h1>Athlesia 24</h1>
      <Button onClick={connect}>Connect</Button>
      <Button onClick={disconnect}>Disconnect</Button>
      <Button onClick={callHello}>Call Hello</Button>
      <h3>{isConnected}</h3>
      <h3>{hello}</h3>
    </main>
  );
}
