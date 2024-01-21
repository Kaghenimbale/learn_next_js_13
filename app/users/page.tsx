import React from 'react';
import UserTable from './UserTable';

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div className="p-2">
      <h1>Users {sortOrder}</h1>
      <UserTable />
    </div>
  );
};

export default UsersPage;
