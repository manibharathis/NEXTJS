"use client"
import { useRouter } from "next/navigation";
export default function DashboardSettings() {
  const router = useRouter()
  const back=()=>{
    router.push("/dashboard")
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h2>Dashboard Settings</h2>
     <button onClick={back} className="rounded-lg bg-amber-300 px-2 py-3 text-black cursor-pointer">Back</button>
    </div>
  );
}
