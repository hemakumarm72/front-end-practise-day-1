import React, { useMemo, useState, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import './table.scss';
import axios from 'axios';

function dummytable() {
    const [loading, setLoading] = useState(true);
    const [driver, setDriver] = useState([]);
    const fetch = async () => {
        setLoading(true);
        await axios
            .get('https://api.chopeai.com/api/utils/getdriver')
            .then((res) => {
                if (res) {
                    setDriver(res.data?.data?.driver ?? []);
                }
                return res;
            })
            .catch((err) => {
                return err;
            });
        setLoading(false);
    };
    useEffect(() => {
        fetch();
    }, []);
    console.log(loading);
    console.log(driver);
    const columns = useMemo(
        () => [
            {
                accessorKey: 'username',
                header: 'User Name',
            },
            {
                accessorKey: 'address',
                header: 'Address',
            },
            {
                accessorKey: 'mobile_no',
                header: 'Mobile No',
            },
            {
                accessorKey: 'area',
                header: 'Area',
            },
            {
                accessorKey: 'vehicle_model',
                header: 'Vehicle Model',
            },
        ],
        []
    ); // column definitions...
    console.log(columns);

    return (
        <div>
            <div className="table">
                <MaterialReactTable
                    columns={columns}
                    state={{ showProgressBars: loading }}
                    data={driver}
                />
            </div>
        </div>
    );
}

export default dummytable;
