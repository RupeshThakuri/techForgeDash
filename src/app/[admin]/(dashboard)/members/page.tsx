import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import MembersTable from "@/components/tables/membersTable"
import React from "react";

// Table Heading Interface
interface TableHeading {
  id: number;
  name: string;
}

// Define Order Interface
interface Order {
  id: number;
  role: string;
  department: string;
  email: string;
  status: string;
}

export default function BasicTables() {
  // Table Heading Data
  const tableHeading: TableHeading[] = [
    { id: 1, name: "Name" },
    { id: 2, name: "Role" },
    { id: 3, name: "Department" },
    { id: 4, name: "Email" },
    { id: 5, name: "Status" },
    { id: 6, name: "Action" },
  ];

  // Table Data
  const tableData: Order[] = [
    {
      id: 1,
      role: "Web Designer",
      department: "Design",
      email: "abc@example.com",
      status: "On Work",
    },
    {
      id: 2,
      role: "Web Designer",
      department: "Design",
      email: "xyz@example.com",
      status: "Work From Home",
    },
    {
      id: 3,
      role: "Web Designer",
      department: "Design",
      email: "data@example.com",
      status: "On Work",
    },
    {
      id: 4,
      role: "Web Designer",
      department: "Design",
      email: "boss@example.com",
      status: "On Leave",
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="Members Section" />
      <div className="space-y-6">
        <ComponentCard title="Members Details" btnTitle={"Add Member"}>
          <MembersTable tableHeading={tableHeading} tableData={tableData} />
        </ComponentCard>
      </div>
    </div>
  );
}
