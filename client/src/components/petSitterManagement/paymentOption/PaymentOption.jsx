// import React, { useState } from "react";
// import searchIcon from "../assets/svgs/icons/icon-search.svg";
// import dropdownIcon from "../assets/svgs/icons/icon-dropdown.svg";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// const createData = (name, pet, duration, bookedDate, status) => {
//   return { name, pet, duration, bookedDate, status };
// };

// const rows = [
//   createData("John Wick", 2, "3 hours", "25 Aug, 7 AM - 10 AM", "Waiting for confirm"),
//   createData("Robert Jr.", 1, "24 hours", "12 Aug, 7 AM - 13 Aug, 7 AM", "Waiting for confirm"),
//   createData("Maren Press", 6, "2 hours", "2 Aug, 7 AM - 9 AM", "Waiting for service"),
//   createData("Lincoln Vaccaro", 4, "3 hours", "25 Aug, 7 AM - 10 AM", "In service"),
//   createData("Andaman R", 2, "3 hours", "25 Aug, 7 AM - 10 AM", "Success"),
// ];

// const PetSitterPaymentOption = () => {
//   const [status, setStatus] = useState("All status");
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleStatusChange = (event) => {
//     setStatus(event.target.value);
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredRows = rows.filter(row => {
//     const matchesStatus = status === "All status" || row.status === status;
//     const matchesSearch = row.name.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesStatus && matchesSearch;
//   });

//   return (
//     <section className="bg-gray-100 px-[40px] pt-[40px] py-[184px] flex flex-col gap-[24px]">
//       <header className="flex flex-col items-center gap-[24px] md:flex-row">
//         <h3 className="flex flex-1 text-[24px] leading-[32px] font-bold">
//           Booking List
//         </h3>
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-[240px] p-[12px] pr-[16px] rounded-[8px] border-[1px] outline-none"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             aria-label="Search bookings"
//           />
//           <img
//             src={searchIcon}
//             alt="Search Icon"
//             className="absolute top-1/2 right-[16px] transform -translate-y-1/2"
//           />
//         </div>
//         <div className="relative">
//           <img
//             src={dropdownIcon}
//             alt="Dropdown Icon"
//             className="absolute bottom-[20px] right-[16px]"
//           />
//           <select
//             className="w-[240px] border-[1px] rounded-[8px] h-[50px] bg-white text-gray-400 text-[16px] leading-[24px] p-[12px] pr-[16px] appearance-none outline-none"
//             value={status}
//             onChange={handleStatusChange}
//             aria-label="Filter by status"
//           >
//             <option value="All status">All status</option>
//             <option value="Success">Success</option>
//             <option value="Waiting for confirm">Waiting for confirm</option>
//             <option value="Waiting for service">Waiting for service</option>
//             <option value="In service">In service</option>
//             <option value="Cancel">Cancel</option>
//           </select>
//         </div>
//       </header>
//       <main>
//         <TableContainer component={Paper} className="!rounded-[20px]">
//           <Table sx={{ minWidth: 650 }} aria-label="booking table">
//             <TableHead>
//               <TableRow className="bg-black">
//                 <TableCell className="!text-white">Pet Owner Name</TableCell>
//                 <TableCell className="!text-white" align="left">Pet(s)</TableCell>
//                 <TableCell className="!text-white" align="left">Duration</TableCell>
//                 <TableCell className="!text-white" align="left">Booked Date</TableCell>
//                 <TableCell className="!text-white" align="left">Status</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredRows.map((row) => (
//                 <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//                   <TableCell component="th" scope="row">{row.name}</TableCell>
//                   <TableCell align="left">{row.pet}</TableCell>
//                   <TableCell align="left">{row.duration}</TableCell>
//                   <TableCell align="left">{row.bookedDate}</TableCell>
//                   <TableCell align="left">{row.status}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </main>
//     </section>
//   );
// };

// export default PetSitterPaymentOption;