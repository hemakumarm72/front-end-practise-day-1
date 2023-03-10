import React, { useMemo, useState, useEffect } from 'react';
import MaterialReactTable, {
    MRT_ToggleGlobalFilterButton,
    MRT_ToggleFiltersButton,
    MRT_ShowHideColumnsButton,
    MRT_ToggleDensePaddingButton,
    MRT_FullScreenToggleButton,
} from 'material-react-table';
import './table.scss';

import axios from 'axios';
import {
    IconButton,
    Box,
    Tooltip,
    ThemeProvider,
    createTheme,
    useTheme,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
// import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { OpenDialog } from 'Pages';
import { Slide, ToastContainer, toast } from 'react-toastify';

function dummytable() {
    const [open, setOpen] = useState(false);
    const [data_id, setData_id] = useState('');

    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [driver, setDriver] = useState([]);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5,
    });
    const globalTheme = useTheme();

    const tableTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: 'dark',
                    primary: {
                        main: '#00796b',
                    }, // swap in the secondary color as the primary for the table // loading progress
                    secondary: {
                        main: '#8c9eff',
                    },
                    info: {
                        main: '#fff9c4', // add in a custom color for the toolbar alert background stuff
                    },
                    background: {
                        default:
                            globalTheme.palette.mode === 'light'
                                ? '#424242' // random light yellow color for the background in light mode
                                : '#000', // pure black table in dark mode for fun
                    },
                    typography: {
                        fontFamily: 'Raleway, Arial',
                        fontSize: '1rem',
                    },
                },
            }),
        [globalTheme]
    );

    const columns = useMemo(
        () => [
            {
                accessorKey: 'username',
                header: 'User Name',
                minSize: 50, // min size enforced during resizing
                maxSize: 100, // max size enforced during resizing
                size: 50, // medium column
            },
            {
                accessorKey: 'address',
                header: 'Address',
                minSize: 50, // min size enforced during resizing
                maxSize: 100, // max size enforced during resizing
                size: 50, // medium column
            },
            {
                accessorKey: 'mobile_no',
                header: 'Mobile No',
                minSize: 50, // min size enforced during resizing
                maxSize: 100, // max size enforced during resizing
                size: 50, // medium column
            },
            {
                accessorKey: 'area',
                header: 'Area',
                minSize: 50, // min size enforced during resizing
                maxSize: 100, // max size enforced during resizing
                size: 50, // medium column
            },
            {
                accessorKey: 'vehicle_model',
                header: 'Vehicle Model',
                minSize: 50, // min size enforced during resizing
                maxSize: 100, // max size enforced during resizing
                size: 10, // medium column
            },
        ],
        []
    ); // column definitions...

    const handleExport = () => {
        console.log('data export');
    };
    const fetch = async () => {
        setLoading(true);
        await axios
            .get('https://api.chopeai.com/api/utils/getdriver')
            .then((res) => {
                if (res) {
                    setTimeout(() => {
                        setDriver(res.data?.data?.driver ?? []);
                        setLoading(false);
                    }, 0);
                }
                return res;
            })
            .catch((err) => {
                setIsError(true);
                setLoading(false);
                return err;
            });
    }; // load of data in table with api
    const dialogagree = async () => {
        console.log(data_id);
        await axios
            .post('https://api.chopeai.com/api/utils/driverdelete', {
                _id: data_id,
            })
            .then((res) => {
                if (res) {
                    toast.success(res.data.data.message, {
                        autoClose: 2000,
                        transition: Slide,
                    });
                    setOpen(false);

                    fetch();
                }
                return res;
            })
            .catch((err) => {
                toast.error(err?.response?.data?.data?.message ?? err, {
                    autoClose: 2000,
                    transition: Slide,
                });
                setOpen(false);
                fetch();
                return err;
            });
    };
    const dialogclose = () => {
        setOpen(false);
    };
    const deletedata = async (id) => {
        setOpen(true);
        setData_id(id);
    };

    useEffect(() => {
        fetch();
    }, []);
    return (
        <div>
            <div className="table">
                <ThemeProvider theme={tableTheme}>
                    <MaterialReactTable
                        columns={columns}
                        data={driver}
                        initialState={{ showColumnFilters: false }}
                        // muiTableContainerProps={{
                        //     sx: { maxHeight: '300px' }, // give the table a max height
                        // }}
                        defaultColumn={{
                            minSize: 50, // min size enforced during resizing
                            maxSize: 100, // max size enforced during resizing
                            size: 50, // medium column
                        }}
                        muiToolbarAlertBannerProps={
                            isError
                                ? {
                                      color: 'error',
                                      children: 'Error loading data',
                                  }
                                : undefined
                        }
                        muiTablePaginationProps={{
                            rowsPerPageOptions: [5, 10, 15, 20, 50, 100],
                        }}
                        onPaginationChange={setPagination}
                        renderTopToolbarCustomActions={() => (
                            <Tooltip arrow title="Refresh Data">
                                <IconButton onClick={() => fetch()}>
                                    <RefreshIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                        renderToolbarInternalActions={({ table }) => (
                            <Box>
                                <MRT_ToggleGlobalFilterButton table={table} />
                                <MRT_ToggleFiltersButton table={table} />
                                <MRT_ShowHideColumnsButton table={table} />
                                <Tooltip arrow title="Export Excel">
                                    <IconButton onClick={handleExport}>
                                        <DownloadIcon />
                                    </IconButton>
                                </Tooltip>

                                <MRT_ToggleDensePaddingButton table={table} />
                                <MRT_FullScreenToggleButton table={table} />
                            </Box>
                        )}
                        displayColumnDefOptions={{
                            'mrt-row-actions': {
                                header: 'Action', // change header text
                                size: 0, // make actions column wider
                            },
                        }}
                        enableRowActions
                        positionActionsColumn="last"
                        renderRowActions={({ row }) => (
                            <Box sx={{ display: 'flex' }}>
                                <IconButton
                                    onClick={() =>
                                        deletedata(row?.original?._id ?? null)
                                    }
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        )}
                        state={{
                            showProgressBars: loading,
                            showSkeletons: loading,
                            showAlertBanner: isError,
                            pagination,
                        }}
                    />
                    <OpenDialog
                        dialogclickagree={dialogagree}
                        dialogclickdisagree={dialogclose}
                        dialogstatus={open}
                    />
                    <ToastContainer />
                </ThemeProvider>
            </div>
        </div>
    );
}

export default dummytable;
