import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';
import { BsTrash3 } from 'react-icons/bs';
import { Tooltip } from "@mui/material";
import Swal from "sweetalert2";


const JobList = () => {
    const { user } = useContext(AuthContext);
    const [jobList, setJobList] = useState([]);
    
    useEffect(() =>{
        fetch(`http://localhost:4000/JobList?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setJobList(data)
        })
    },[user])
    

    const handleDelete = (id) =>{
        Swal.fire({
            title: 'Are you sure? Do you want to delete it!',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/jobDelete/${id}`,{
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        const RemainingData = jobList.filter(item => item._id !== id)
                        setJobList(RemainingData)
                    }
                    Swal.fire(
                        'Deleted!',
                        'Your Data has been deleted.',
                        'success'
                      )
                })
            }
          })

    }

    return (
        <>
            <div className="text-center py-5 bg-[#F4F5F7]">
                <h2 className="font-medium text-[30px]">My Jobs List</h2>
            </div>

            <div className="py-10">
                <div className="max-w-[1140px] mx-auto">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow className="border-bottom-[5px] border-[#353030]">
                                    <TableCell><span className="text-[20px] font-bold">Title</span></TableCell>
                                    <TableCell align="left"><span className="text-[20px] font-bold">Job Type</span></TableCell>
                                    <TableCell align="left"><span className="text-[20px] font-bold">Posted Date</span></TableCell>
                                    <TableCell align="left"><span className="text-[20px] font-bold">Experience</span></TableCell>
                                    <TableCell align="left"><span className="text-[20px] font-bold">Email Address</span></TableCell>
                                    <TableCell align="left"><span className="text-[20px] font-bold">Action</span></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                jobList.map((data) => (
                                    <TableRow
                                    key={data._id}
                                    >
                                    <TableCell align="left"><span className="text-[17px] font-normal">{data.Title}</span></TableCell>
                                    <TableCell align="left"><span className="text-[17px] font-normal">{data.job_type}</span></TableCell>
                                    <TableCell align="left"><span className="text-[17px] font-normal">{data.Post_Date}</span></TableCell>
                                    <TableCell align="left"><span className="text-[17px] font-normal">{data.Experience} Years </span></TableCell>
                                    <TableCell align="left"><span className="text-[17px] font-normal">{data.Email}</span></TableCell>
                                     <TableCell align="left">
                                        <ul className="flex items-center justify-center">
                                            <li className="mr-4 text-[22px] text-[#338573]">
                                                <Tooltip title="View" placement="top">
                                                    <Link to={`/job_Details/${data.jobId}`}><AiOutlineEye /></Link>
                                                </Tooltip> 
                                            </li>
                                            <li className="mr-4 text-[22px] text-[#04BCF6]">
                                                <Tooltip title="Edit" placement="top">
                                                     <Link><BiPencil /></Link>
                                                </Tooltip>
                                            </li>
                                            <li className="text-[22px] text-[#FA0606]">
                                                <Tooltip title="Delete" placement="top">
                                                   <button onClick={() => handleDelete(data._id)}><BsTrash3 /></button>
                                                </Tooltip>     
                                            </li>
                                        </ul>
                                     </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    );
};

export default JobList;