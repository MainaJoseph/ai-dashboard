import { UserButton } from "@clerk/nextjs";

const DashboardPage = () =>{
  return (
<div>
 Dashboard Page (protected)
 <UserButton />
</div>
  );
}

export default DashboardPage;