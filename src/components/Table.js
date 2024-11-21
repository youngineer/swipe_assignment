const Table = (props) => {
  console.log(props);

  return (
    <div class="overflow-x-auto shadow-md rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th class="px-6 py-3">Customer</th>
            <th class="px-6 py-3">Invoice #</th>
            <th class="px-6 py-3">Amount</th>
            <th class="px-6 py-3">Period</th>
            <th class="px-6 py-3">Due</th>
            <th class="px-6 py-3">Created</th>
            <th class="px-6 py-3 text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th class="px-6 py-4 font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          </tbody>
      </table>
    </div>
  );
};

export default Table;
