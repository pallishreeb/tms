// import * as React from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 1000,
//   bgcolor: "background.paper",
// };

// export default function CarrierModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>Carrier</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style }} className="rounded">
//           <div>
//             <h1 className="font-medium text-3xl px-6 py-5">
//               GONZALEZ TRANSPORT
//             </h1>
//           </div>
//           <div className="border-solid border border-neutral-300"></div>

//           <div className="w-[96%] m-auto flex gap-6">
//             <div className="w-1/2">
//               <div className="border-solid border border-neutral-300 rounded">
//                 <h1 className="px-2 py-2 bg-gray-300">Carrier History</h1>
//                 <div className="border-solid border border-neutral-300"></div>
//               </div>
//             </div>
//             <div className="w-1/2">
//               <div className="border-solid border border-neutral-300 rounded">
//                 <h1 className="px-2 py-2">Carrier History</h1>
//                 <div className="border-solid border border-neutral-300"></div>
//               </div>
//             </div>
//           </div>

//           {/* <Button
//             className="mt-4 bg-blue-500 text-white p-2 rounded"
//             onClick={handleClose}
//           >
//             Close
//           </Button> */}
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }
