import React from 'react';
import BorrowingRulesCard from "@/components/BorrowingRulesCard";

const AdminPage: React.FC = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="w-full min-h-[300px]">
          <BorrowingRulesCard />
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        {/* Additional content can go here */}
      </div>
    </div>
  );
};

export default AdminPage;