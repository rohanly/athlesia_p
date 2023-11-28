"use client";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { decrement, increment } from "@/slices/counter-slice";

export default function Example() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Athlesia 24</h1>
      <Button onClick={() => dispatch(increment())}> + </Button>
      <p>{count}</p>
      <Button onClick={() => dispatch(decrement())}> - </Button>
    </main>
  );
}
