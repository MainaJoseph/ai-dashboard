import { UserButton } from "@clerk/nextjs";

const DashboardPage = () =>{
  return (
<div>
 Dashboard Page (protected)
 <UserButton afterSignOutUrl="/" />
</div>
  );
}

export default DashboardPage;