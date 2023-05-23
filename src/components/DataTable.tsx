import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
  { field: 'id', headerName: "ID", width: 90, hide: true },
  { field: 'gin_name', headerName: 'Gin Name', flex: 1 },
  { field: 'country_of_origin', headerName: 'Country of Origin', flex: 1},
  { field: 'tasting_notes', headerName: 'Tasting Notes', flex: 1},
  { field: 'pairs_with', headerName: 'Pairs With', flex: 2}
]

function DataTable() {
  const [ open, setOpen ] = useState(false);
  const { ginData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    setTimeout( () => { window.location.reload() }, 500)
  } 

  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className='flex flex-row'>
            <div>
                <button
                    className='p-3 bg-red-200 text-white m-3 rounded hover:bg-red-300 hover:text-blue-300'
                    onClick={() => handleOpen()}
                >
                    Add New Gin
                </button>
            </div>
            <Button onClick={handleOpen} className="p-3 bg-red-200 m-3 text-white rounded hover:bg-red-300 hover:text-blue-300" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-red-200 m-3 text-white rounded hover:bg-red-300 hover:text-blue-300" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
          style={{ height: 400, width: '100%' }}
          >
            <h2 className="p-3 text-white bg-red-200 my-1 rounded">My Gins</h2>
            <DataGrid rows={ginData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
              setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable
