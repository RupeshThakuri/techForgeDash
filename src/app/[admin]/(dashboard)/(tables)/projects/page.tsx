import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/BasicTableOne";
import React from "react";

// Table Heading Interface
interface TableHeading {
  id: number;
  name: string;
}

// Define Order Interface
interface Order {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  projectName: string;
  team: {
    images: string[];
  };
  status: string;
  budget: string;
}

export default function BasicTables() {
  // Table Heading Data
  const tableHeading: TableHeading[] = [
    { id: 1, name: "Project Lead" },
    { id: 2, name: "Project Name" },
    { id: 3, name: "Team" },
    { id: 4, name: "Status" },
    { id: 5, name: "Budget" },
    { id: 6, name: "Action" },
  ];

  // Table Data
  const tableData: Order[] = [
    {
      id: 1,
      user: {
        image: "/images/user/user-17.jpg",
        name: "Lindsey Curtis",
        role: "Web Designer",
      },
      projectName: "Agency Website",
      team: {
        images: [
          "/images/user/user-22.jpg",
          "/images/user/user-23.jpg",
          "/images/user/user-24.jpg",
        ],
      },
      budget: "3.9K",
      status: "Active",
    },
    {
      id: 2,
      user: {
        image: "/images/user/user-18.jpg",
        name: "Kaiya George",
        role: "Project Manager",
      },
      projectName: "Technology",
      team: {
        images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
      },
      budget: "24.9K",
      status: "Pending",
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="Project Section" />
      <div className="space-y-6">
        <ComponentCard title="Project List" btnTitle={"Add Project"}>
          <BasicTableOne tableHeading={tableHeading} tableData={tableData} />
        </ComponentCard>
      </div>
    </div>
  );
}
