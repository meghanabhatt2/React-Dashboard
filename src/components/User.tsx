import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store"; // Adjust path
import { fetchUsers } from "../slice/userSlice"; // Adjust path

const User: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    data: users,
    loading,
    error,
  } = useSelector((state: RootState) => state.users);

  // Fetch users when the component mounts
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="p-4 mt-[25px]">
      <h2 className="text-xl font-bold mb-4 text-blue-500">Costumer List</h2>

      {/* Loading state */}
      {loading && <p>Loading...</p>}

      {/* Error state */}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* User data */}
      <ul className="bg-[black] p-4 rounded-lg">
        {users.map((user) => (
          <li key={user.id} className="mb-2 border-b pb-2">
            <p className="text-lg font-semibold cursor-pointer">{user.name}</p>
            <p className="text-gray-600 cursor-pointer">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
