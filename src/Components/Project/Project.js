import axios from "axios";
import React, { useContext, useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import "./project.css";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";
import Modal from "./Modal";
import UserContext from "../../UserContext";

const Project = () => {
  const [open , setOpen] = useState(false)
  let showDate = new Date();
  let todayDate =
    showDate.getDate() +
    "/" +
    (showDate.getMonth() + 1) +
    "/" +
    showDate.getFullYear();
  let timeNow =
    showDate.getHours() +
    ":" +
    showDate.getMinutes() +
    ":" +
    showDate.getSeconds();

  const { user } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    projectCode: undefined,
    createDate: todayDate + "," + timeNow,
    projectName: undefined,
    projectType: undefined,
    projectDevLocation: undefined,
    projectTeamSize: undefined,
    projectDuration: undefined,
    projectComDate: undefined,
    projectClosedDate: undefined,
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `https://developerslog.herokuapp.com/api/project`,
        credentials
      );
      navigate("/dashboard");

      window.location.reload();
    } catch (err) {
      setError(err.response.data);
    }
  };

  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let users = await axios.get(`https://developerslog.herokuapp.com/api/project`);
      setGridData(users.data);
      setLoading(false);
    }
    fetchData();
  }, []);

 
  const userContext = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);

  const editRow = (row) => {
    userContext.setRowData(row.values)
    setOpenModal(true);
  }



  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Edit",
        Header: "Action",
        Cell: ({ row }) => (
          <button onClick={()=>editRow(row)}  title="ModalData" data-bs-toggle="modal" data-bs-target="#ModalData"><i className="fa fa-pencil"></i></button>
          // <button onClick={()=>alert(row.values.projectCode)}><i className="fa fa-pencil"></i></button>
        ),
      },
    ]);
  };
 
  const COLUMNS = [
    {
      Header: "#",
      Footer: "#",
      accessor: "projectId",
      // Filter:ColumnFilter,
      // disableFilters:true,
    },
    {
      Header: "Code",
      Footer: "Code",
      accessor: "projectCode",
      // Filter:ColumnFilter,
      // disableFilters:true,
    },
    {
      Header: "Name",
      Footer: "Name",
      accessor: "projectName",
      // Filter:ColumnFilter,
    },
    {
      Header: "Type",
      Footer: "Type",
      accessor: "projectType",
      // Filter:ColumnFilter,
      // disableFilters:true,
    },
    {
      Header: "Location",
      Footer: "Location",
      accessor: "projectDevLocation",
      // Filter:ColumnFilter,
    },
    {
      Header: "Team Size",
      Footer: "Team Size",
      accessor: "projectTeamSize",
      // Filter:ColumnFilter,
      // disableFilters:true,
    },
    {
      Header: "Duration",
      Footer: "Duration",
      accessor: "projectDuration",
      // Filter:ColumnFilter,
      // disableFilters:true,
    },
    {
      Header: "Start Date",
      Footer: "Start Date",
      accessor: "projectComDate",
      // Filter:ColumnFilter,
      // disableFilters:true,
    },
    {
      Header: "Closed Date",
      Footer: "Closed Date",
      accessor: "projectClosedDate",
      // Filter:ColumnFilter,
      // disableFilters:true,
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  // const defaultColumn = useMemo(()=>{
  //   return {
  //     Filter:ColumnFilter
  //   }
  // })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: gridData,
      // defaultColumn,
    },
    // useFilters,
    tableHooks,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let users = await axios.get(`http://localhost:8000/api/projectType`);
      setUserData(users.data);
    }
    fetchData();
     
  }, []);

  const [userData1, setUserData1] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let users = await axios.get(`http://localhost:8000/api/projectLocation`);
      setUserData1(users.data);
    }
    fetchData();
  }, []);

  const closeBase = ()=>{
    setOpen(false)
  }

  return (
    <div className="tab-content mt-3">
      <div className="tab-pane active show" id="Company_Settings">
        <div className="row">
          <div className="card mb-3">
            <div className="card-header">
              <h5 className="card-title">Project Details</h5>
            </div>
            <div className="card-body">
              <form className="row g-4">
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">
                      Project Code <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="projectCode"
                      name="projectCode"
                      onChange={handleChange}
                      placeholder="Enter Project Code"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">
                      Project Name <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      name="projectName"
                      id="projectName"
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter Project Name"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label className="col-form-label">Project Type</label>
                  <select
                    className="form-select array-select form-control"
                    id="projectType"
                    name="projectType"
                    onChange={handleChange}
                    aria-label="example"
                  >
                    <option selected>Select Type</option>
                    {userData.map((e) => (
                      <option>{e.projectType}</option>
                    ))}
                  </select>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label className="col-form-label">Project Location</label>
                  <select
                    className="form-select array-select form-control"
                    id="projectDevLocation"
                    name="projectDevLocation"
                    onChange={handleChange}
                    aria-label="example"
                  >
                    <option selected>Select Type</option>
                    {userData1.map((e) => (
                      <option>{e.projectLocation}</option>
                    ))}
                  </select>
                </div>

                {/* <div className="col-md-6 col-sm-12">
              <div className="form-group">
              <label className="form-label">
              Project Type <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  id="projectType"
                  name="projectType"
                  onChange={handleChange}
                  type="number"
                  placeholder="Enter Project Type"
                />
              </div>
            </div> */}

                {/* <div className="col-md-6 col-sm-12">
           
           <div className="form-group">
             <label className="form-label">
               Project Location <span className="text-danger">*</span>
             </label>
             <input
               className="form-control"
               type="number"
               id="projectDevLocation"
               name="projectDevLocation"
               onChange={handleChange}
              placeholder="Enter Project Location"
             />
           </div>
         </div> */}
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">
                      Project Team Size <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      name="projectTeamSize"
                      id="projectTeamSize"
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter Team Size"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">
                      Project Duration <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      id="projectDuration"
                      name="projectDuration"
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter Project Duration"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">
                      Project Start Date <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      id="projectComDate"
                      name="projectComDate"
                      onChange={handleChange}
                      placeholder="Enter project Com Date"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">
                      Project Closed Date <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      name="projectClosedDate"
                      id="projectClosedDate"
                      onChange={handleChange}
                      type="date"
                      placeholder="Enter Project Closed Date"
                    />
                  </div>
                </div>

                <div className="col-12 mt-4">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleClick}
                  >
                    SAVE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <button className="col-3 btn btn-lg btn-success" onClick={()=>setOpen(true)}>Load Project Database</button>
        </div>


      {open &&  

      <div style={{border:"2px solid white",marginTop:"10px"}}>
        <div className="text-end" ><i className="fa fa-close" onClick={closeBase}></i></div>
        <div className="row">
          <div className="main px-md-3">
            <div className="body-header border-bottom d-flex py-3">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col">
                    <h1 className="h4 mt-1">Project Database</h1>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="body d-flex py-lg-4 py-3">
              <div className="container">
                <div className="row clearfix">
                  <div className="col-md-12">
                    <div className="card p-4 mb-4">
                      <GlobalFilter
                        filter={globalFilter}
                        setFilter={setGlobalFilter}
                      />
                      <table {...getTableProps()}>
                        <thead>
                          {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                              {headerGroup.headers.map((column) => (
                                <th
                                  {...column.getHeaderProps(
                                    column.getSortByToggleProps()
                                  )}
                                >
                                  {column.render("Header")}
                                  <span>
                                    {column.isSorted
                                      ? column.isSortedDesc
                                        ? "▼"
                                        : "▲"
                                      : ""}
                                  </span>
                                  {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}
                                </th>
                              ))}
                            </tr>
                          ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                          {page.map((row) => {
                            prepareRow(row);
                            return (
                              <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                  return (
                                    <td {...cell.getCellProps()}>
                                      {cell.render("Cell")}
                                    </td>
                                  );
                                })}
                              </tr>
                            );
                          })}
                        </tbody>
                        <tfoot>
                          {footerGroups.map((footerGroup) => (
                            <tr {...footerGroup.getFooterGroupProps()}>
                              {footerGroup.headers.map((column) => (
                                <td {...column.getFooterProps}>
                                  {column.render("Footer")}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tfoot>
                      </table>
                      <div className="pagination text-center">
                        {/* <div className="row pag"> */}
                        <div className="col-3 pagination">
                          <span>
                            Page{" "}
                            <strong>
                              {pageIndex + 1} of {pageOptions.length}
                            </strong>
                          </span>
                          </div>
                          <div className="col-3 pagination">
                          <span>
                             Go to page:{" "}
                            <input
                              type="number"
                              defaultValue={pageIndex + 1}
                              onChange={(e) => {
                                const pageNumber = e.target.value
                                  ? Number(e.target.value) - 1
                                  : 0;
                                gotoPage(pageNumber);
                              }}
                              style={{ width: "50px" }}
                            />
                          </span>
                          </div>
                          <div className="col-3 pagination">
                          <select
                            value={pageSize}
                            onChange={(e) =>
                              setPageSize(Number(e.target.value))
                            }
                          >
                            {[10, 25, 50].map((pageSize) => (
                              <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-3 pagination">
                          <button
                            onClick={() => gotoPage(0)}
                            disabled={!canPreviousPage}
                          >
                            {"<<"}
                          </button>
                          <button
                            onClick={() => previousPage()}
                            disabled={!canPreviousPage}
                          >
                            {"<"}
                          </button>
                          <button
                            onClick={() => nextPage()}
                            disabled={!canNextPage}
                          >
                            {">"}
                          </button>
                          <button
                            onClick={() => gotoPage(pageCount - 1)}
                            disabled={!canNextPage}
                          >
                            {">>"}
                          </button>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        }
      </div>
      {openModal && <Modal setOpen={setOpenModal} />}
    </div>
  );
};

export default Project;
