import { Button } from "antd";

export function BaseLayout(props: any) {
  return (
    <main className=" h-screen flex flex-col space-y-4 w-screen">
      <div className="grow p-4 md:px-40 lg:px-60 xl:px-80">
        <div className="2xl:px-80 h-full">
        {props.children}
        </div>
      </div>
      <footer className="border p-4 bg-slate-300 gap-4 flex justify-center">
        <Button type="link" className="text-blue-800" href="/create">
          buat tes mu sendiri
        </Button>
        <Button type="link" className="text-blue-800">
          source code
        </Button>
      </footer>
    </main>
  );
}
