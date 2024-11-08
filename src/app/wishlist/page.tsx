"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useWishlist, useWishlistDispatch } from "@/lib/wishlist-provider";

export default function Wishlist() {
  const wishlist = useWishlist();
  const wishlistIsEmpty = wishlist.length === 0;
  const dispatch = useWishlistDispatch();

  return (
    <>
      <h1 className="py-32 text-center text-4xl font-bold uppercase">
        My Wishlist
      </h1>
      {wishlistIsEmpty ? (
        <p className="mb-32 border border-neutral-500 py-32 text-center text-2xl font-semibold">
          Your Wishlist is Empty
        </p>
      ) : (
        <div className="mb-32 grid grid-cols-3 gap-8">
          {wishlist.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardDescription></CardDescription>
                <CardTitle>{item}</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <Button
                  onClick={() => dispatch({ type: "REMOVE", index })}
                  className="bg-red-500 text-white"
                >
                  Remove
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
      <div className="mb-32 flex justify-center">
        <Button
          onClick={() => dispatch({ type: "CLEAR" })}
          className="bg-red-500 text-white"
          disabled={wishlistIsEmpty}
        >
          Clear Wishlist
        </Button>
      </div>
    </>
  );
}
