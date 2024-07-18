import Card from "./Card";
import { PiHandDeposit, PiHandWithdrawLight } from "react-icons/pi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { CiBadgeDollar } from "react-icons/ci";

export default function CardList() {
  return (
    <section className="w-full p-4 flex justify-center items-center flex-wrap gap-4">
      <Card icon={<CiBadgeDollar size={30} />} bg="bg-standby/45" color="text-standby" title={"Total Profit"} amount={"20,000"}/>
      <Card icon={<PiHandWithdrawLight size={30} />} bg="bg-success/45" color="text-success" title={"Profit & Loss"} amount={"4,563"} isProfit/>
      <Card icon={<BiMoneyWithdraw size={30} />} bg="bg-danger/45" color="text-danger" title={"Deposit"} amount={"4,563"}/>
      <Card icon={<PiHandDeposit size={30} />} bg="bg-primary/45" color="text-primary" title={"withdrawals"} amount={"4,563"}/>
    </section>
  );
}
