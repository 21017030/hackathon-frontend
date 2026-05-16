import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Killer : 회원가입",
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
