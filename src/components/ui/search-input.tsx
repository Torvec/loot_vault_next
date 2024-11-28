import Form from "next/form";
import { Button } from "@/components/ui/buttons/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <Form action={""} className="relative w-full max-w-64">
      <Input
        name="search"
        type="search"
        placeholder="Search..."
        className="rounded-xl bg-muted pr-10 text-muted-foreground"
      />
      <Button
        type="submit"
        size="icon"
        className="absolute right-0 top-0 h-full rounded-r-xl bg-foreground"
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </Form>
  );
}
